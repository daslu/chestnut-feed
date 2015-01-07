(ns chestnut-feed.server
  (:require [clojure.java.io :as io]
            [chestnut-feed.dev :refer [is-dev? inject-devmode-html browser-repl start-figwheel]]
            [compojure.core :refer [GET POST defroutes]]
            [compojure.route :refer [resources]]
            [net.cgrand.enlive-html :refer [deftemplate]]
            [net.cgrand.reload :refer [auto-reload]]
            [ring.middleware.reload :as reload]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [environ.core :refer [env]]
            [ring.adapter.jetty :refer [run-jetty]]
            [feedparser-clj.core :as fp]))


(defn pprint-and-return [s]
  (do
    (clojure.pprint/pprint s)
    s))

(deftemplate page
  (io/resource "index.html") [] [:body] (if is-dev? inject-devmode-html identity))

(defn date-to-string [date]
  (if date
    (try (.format (java.text.SimpleDateFormat. "yyyy/MM/dd")
                  date)
         (catch Exception e (println ["error" date])))
    ;;else
    ""))

(defroutes routes
  (resources "/")
  (resources "/react" {:root "react"})
  (POST "/feed" req
        (->> req
             (#(do (Thread/sleep 10000) %))
             :params
             :url
             fp/parse-feed
             :entries
             (map #(into (select-keys % [:title :link])
                         {:date (date-to-string (or (:updated-date %)
                                                    (:published-date %)))
                          :description (->> %
                                            :description
                                            :value)
                          :contents (->> %
                                         :contents
                                         first
                                         :value)}))
             pr-str))
  (GET "/*" req (page)))

(def http-handler
  (if is-dev?
    (reload/wrap-reload (wrap-defaults #'routes api-defaults))
    (wrap-defaults routes api-defaults)))

(defn run-web-server [& [port]]
  (let [port (Integer. (or port (env :port) 10555))]
    (print "Starting web server on port" port ".\n")
    (run-jetty http-handler {:port port :join? false})))

(defn run-auto-reload [& [port]]
  (auto-reload *ns*)
  (start-figwheel))

(defn run [& [port]]
  (when is-dev?
    (run-auto-reload))
  (run-web-server port))

(defn -main [& [port]]
  (run port))
