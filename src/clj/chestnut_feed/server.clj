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

(defn handle-url [])

(defroutes routes
  (resources "/")
  (resources "/react" {:root "react"})
  (POST "/feed" req
        (->> req
             :params
             :url
             fp/parse-feed
             :entries
             (map #(into (select-keys % [:title :link])
                         {:description (-> % :description :value)
                          :contents (-> % :contents first :value)}))
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
