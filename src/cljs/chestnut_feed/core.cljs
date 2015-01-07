(ns chestnut-feed.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [ajax.core :refer [GET POST]]
            [cljs.reader :as reader]
            [sablono.core :as sab :include-macros true ]
            [cljs.core.async :as async :refer [<! >! put! take! chan timeout alts!]]
            [clojure.string :refer [lower-case]])
  (:require-macros 
   [cljs.core.async.macros :as a :refer [go go-loop]]))

(def app-state (atom {:feeds-urls ["http://planet.haskell.org/rss20.xml"
                                   "http://planet.lisp.org/rss20.xml"
                                   "http://www.scheme.dk/planet/atom.xml"
                                   "http://planet.clojure.in/atom.xml"
                                   "http://planet.emacsen.org/atom.xml"
                                   "http://feed43.com/vim-scripts.xml"]
                      :entries []
                      :search-term "clojure"}))


(defn integer-to-color
  [x]
  (let [absx (.abs js/Math x)]
    ;; (str "#"
    ;;      (.toString (rem absx 16777216)
    ;;                 16))
    (str "#"
         "c"
         (.toString (rem absx 16) 16)
         "c"
         (.toString (rem (.floor js/Math (/ absx 16)) 16) 16)
         "c"
         (.toString (rem (.floor js/Math (/ absx 256)) 16) 16))))

(defn html-to-plaintext [html]
  (if html
    (clojure.string/replace html
                            #"\<.*\>"
                            " ")))

(defn entry
  [data]
  (om/component
   (dom/div nil
            (sab/html
             [:div {:style {:background-color (:color data)}}
              [:a {:href (:link data)}
               (str (:date data)
                    "____"
                    (:title data)
                    "____")]
              [:input {:type "button"
                       :value (if (:expanded data)
                                "Unexpand"
                                "Expand")
                       :on-click #(om/update! data
                                              :expanded
                                              (not (:expanded data)))}]
              (if (:expanded data)
                [:div
                 (.log js/console (:contents data))
                 (.log js/console (:description data))
                 [:h4 (om.dom/div
                       #js {:dangerouslySetInnerHTML #js {:__html (:description data)}}
                       nil)]
                 [:h4 (om.dom/div
                       #js {:dangerouslySetInnerHTML #js {:__html (:contents data)}}
                       nil)]])
              [:p " "]]))))

(defn matches-term [search-term string]
  (re-matches (re-pattern (str ".*"
                               (lower-case search-term)
                               ".*"))
              (lower-case string)))


(def prepare-entries
  "A transducer for extracting etries from server response"
  (comp (mapcat reader/read-string)
        (map #(assoc % :color (integer-to-color (hash %))))
        ;; (map #(update-in % [:description] html-to-plaintext))
        ;; (map #(update-in % [:contents] html-to-plaintext))
        ))

(defn init-entries [data owner]
  (let [new-entries (chan 1000
                          prepare-entries)]
    (om/update! data :entries [])
    (doseq [feed-url (:feeds-urls data)]
      (POST "/feed"
                {:format :raw
                 :params {:url feed-url}
                 :handler (fn [response]
                            (go
                              (>! new-entries response)))}))
    (go (while true
          (let [[new-entry c] (alts! [(timeout 2000)
                                      new-entries])]
            (if (= c new-entries)
              (om/transact! data
                            :entries
                            #(conj %
                                   (assoc new-entry
                                          :visible (matches-terms [(:search-term data)]
                                                                  (:title new-entry)))))))))))

(defn update-entry-visibility [entry-data search-terms]
  (om/update! entry-data
              :visible
              (matches-terms search-terms
                             (:title entry-data))))

(defn update-entries-visibility [entries-data search-terms]
  (doseq [entry-data entries-data]
    (update-entry-visibility entry-data search-terms)))

(defn entries
  [data owner]
  (reify
    om/IInitState
    (init-state [_] {})
    om/IWillMount
    (will-mount [_]
      (init-entries data owner))
    om/IRenderState
    (render-state [_ state]
      (apply dom/div nil
             (sab/html
              [:input {:type "button"
                       :value "Refresh"
                       :on-click #(init-entries data owner)}]
              [:h2 "Please insert search term: "]
              [:input {:type "text"
                       :ref "search-term"
                       :value (:search-term data)
                       :onChange #(let [new-search-term (.. % -target -value)]
                                    (om/update! data
                                                :search-term
                                                new-search-term))}]
              [:h2 (str "results for search term '"
                        (:search-term data)
                        "':")])
             (om/build-all entry (->> data
                                      :entries
                                      (filter #(matches-term (:search-term data)
                                                             (:title %)))
                                      reverse))))))

(defn main []
  (om/root
    (fn [app owner]
      (reify
        om/IRender
        (render [_]
          (dom/div nil
                  (om/build entries app)))))
    app-state
    {:target (. js/document (getElementById "app"))}))
