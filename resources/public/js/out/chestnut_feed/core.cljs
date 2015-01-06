(ns chestnut-feed.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [ajax.core :refer [GET POST]]
            [cljs.reader :as reader]
            [sablono.core :as sab :include-macros true ]
            [cljs.core.async :as async :refer [<! >! put! take! chan timeout]]
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
                      :search-terms [""]
                      :zebra-colors (interleave (repeat "#eeeedd")
                                                (repeat "#eeddee")
                                                (repeat "#ddeeee"))
}))

(defn entry
  [data]
  (om/component
   (sab/html
    [:div {:style {:background-color (:color data)}}
     [:a {:href (:link data)}
      (:title data)]])))

(defn matches-term [search-term string]
  (re-matches (re-pattern (str ".*"
                               (lower-case search-term)
                               ".*"))
              (lower-case string)))

(defn matches-terms [search-terms string]
  (every? #(matches-term % string)
          search-terms))

(defn extract-entries [search-terms]
  "A transducer for extracting etries from server response"
  (comp (mapcat reader/read-string)
        (filter #(matches-terms search-terms
                                (:title %)))))


(defn entries
  [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:new-entries (chan 1000 (extract-entries (:search-terms data)))})
    om/IWillMount
    (will-mount [_]
      (let [new-entries (om/get-state owner :new-entries)]
        (doseq [feed-url (:feeds-urls @app-state)]
          (POST "/feed"
                {:format :raw
                 :params {:url feed-url}
                 :handler (fn [response]
                            (go
                              (>! new-entries response)))}))
        (go (while true
              (let [new-entry (<! new-entries)]
                (om/transact! data :entries #(conj % new-entry)))))))
    om/IRenderState
    (render-state [_ state]
      (apply dom/div nil
             (om/build-all entry (map (fn [data-entry color]
                                        (assoc data-entry
                                               :color color))
                                      (:entries data)
                                      (:zebra-colors data)))))))

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
