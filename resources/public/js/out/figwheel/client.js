// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('figwheel.client')) {
goog.provide('figwheel.client');
}
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__25533,args){
var map__25535 = p__25533;
var map__25535__$1 = ((cljs.core.seq_QMARK_.call(null,map__25535))?cljs.core.apply.call(null,cljs.core.hash_map,map__25535):map__25535);
var debug = cljs.core.get.call(null,map__25535__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
if(cljs.core.truth_(debug)){
return console.log(cljs.core.to_array.call(null,args));
} else {
return null;
}
};
var log = function (p__25533,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this,p__25533,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__25536){
var p__25533 = cljs.core.first(arglist__25536);
var args = cljs.core.rest(arglist__25536);
return log__delegate(p__25533,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__25537){
var map__25539 = p__25537;
var map__25539__$1 = ((cljs.core.seq_QMARK_.call(null,map__25539))?cljs.core.apply.call(null,cljs.core.hash_map,map__25539):map__25539);
var websocket_url = cljs.core.get.call(null,map__25539__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^wss?:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){
return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__25540,callback){
var map__25542 = p__25540;
var map__25542__$1 = ((cljs.core.seq_QMARK_.call(null,map__25542))?cljs.core.apply.call(null,cljs.core.hash_map,map__25542):map__25542);
var msg = map__25542__$1;
var dependency_file = cljs.core.get.call(null,map__25542__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__25542__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__25542__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(cljs.core.truth_((function (){var or__12655__auto__ = dependency_file;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return goog.isProvided_(namespace);
}
})())){
return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__25542,map__25542__$1,msg,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__25542,map__25542__$1,msg,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){

return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__25543,p__25544){
var map__25547 = p__25543;
var map__25547__$1 = ((cljs.core.seq_QMARK_.call(null,map__25547))?cljs.core.apply.call(null,cljs.core.hash_map,map__25547):map__25547);
var opts = map__25547__$1;
var url_rewriter = cljs.core.get.call(null,map__25547__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__25548 = p__25544;
var map__25548__$1 = ((cljs.core.seq_QMARK_.call(null,map__25548))?cljs.core.apply.call(null,cljs.core.hash_map,map__25548):map__25548);
var d = map__25548__$1;
var file = cljs.core.get.call(null,map__25548__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__25549,p__25550){
var map__25592 = p__25549;
var map__25592__$1 = ((cljs.core.seq_QMARK_.call(null,map__25592))?cljs.core.apply.call(null,cljs.core.hash_map,map__25592):map__25592);
var opts = map__25592__$1;
var on_jsload = cljs.core.get.call(null,map__25592__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__25592__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__25593 = p__25550;
var map__25593__$1 = ((cljs.core.seq_QMARK_.call(null,map__25593))?cljs.core.apply.call(null,cljs.core.hash_map,map__25593):map__25593);
var files = cljs.core.get.call(null,map__25593__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__15884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto__,map__25592,map__25592__$1,opts,on_jsload,before_jsload,map__25593,map__25593__$1,files){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto__,map__25592,map__25592__$1,opts,on_jsload,before_jsload,map__25593,map__25593__$1,files){
return (function (state_25616){
var state_val_25617 = (state_25616[(1)]);
if((state_val_25617 === (6))){
var inst_25598 = (state_25616[(7)]);
var inst_25607 = (state_25616[(2)]);
var inst_25608 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25609 = [inst_25598];
var inst_25610 = (new cljs.core.PersistentVector(null,1,(5),inst_25608,inst_25609,null));
var inst_25611 = cljs.core.apply.call(null,on_jsload,inst_25610);
var state_25616__$1 = (function (){var statearr_25618 = state_25616;
(statearr_25618[(8)] = inst_25607);

return statearr_25618;
})();
var statearr_25619_25633 = state_25616__$1;
(statearr_25619_25633[(2)] = inst_25611);

(statearr_25619_25633[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25617 === (5))){
var inst_25614 = (state_25616[(2)]);
var state_25616__$1 = state_25616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25616__$1,inst_25614);
} else {
if((state_val_25617 === (4))){
var state_25616__$1 = state_25616;
var statearr_25620_25634 = state_25616__$1;
(statearr_25620_25634[(2)] = null);

(statearr_25620_25634[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25617 === (3))){
var inst_25598 = (state_25616[(7)]);
var inst_25601 = console.debug("Figwheel: loaded these files");
var inst_25602 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25598);
var inst_25603 = cljs.core.prn_str.call(null,inst_25602);
var inst_25604 = console.log(inst_25603);
var inst_25605 = cljs.core.async.timeout.call(null,(10));
var state_25616__$1 = (function (){var statearr_25621 = state_25616;
(statearr_25621[(9)] = inst_25604);

(statearr_25621[(10)] = inst_25601);

return statearr_25621;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25616__$1,(6),inst_25605);
} else {
if((state_val_25617 === (2))){
var inst_25598 = (state_25616[(7)]);
var inst_25598__$1 = (state_25616[(2)]);
var inst_25599 = cljs.core.not_empty.call(null,inst_25598__$1);
var state_25616__$1 = (function (){var statearr_25622 = state_25616;
(statearr_25622[(7)] = inst_25598__$1);

return statearr_25622;
})();
if(cljs.core.truth_(inst_25599)){
var statearr_25623_25635 = state_25616__$1;
(statearr_25623_25635[(1)] = (3));

} else {
var statearr_25624_25636 = state_25616__$1;
(statearr_25624_25636[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25617 === (1))){
var inst_25594 = before_jsload.call(null,files);
var inst_25595 = figwheel.client.add_request_urls.call(null,opts,files);
var inst_25596 = figwheel.client.load_all_js_files.call(null,inst_25595);
var state_25616__$1 = (function (){var statearr_25625 = state_25616;
(statearr_25625[(11)] = inst_25594);

return statearr_25625;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25616__$1,(2),inst_25596);
} else {
return null;
}
}
}
}
}
}
});})(c__15884__auto__,map__25592,map__25592__$1,opts,on_jsload,before_jsload,map__25593,map__25593__$1,files))
;
return ((function (switch__15828__auto__,c__15884__auto__,map__25592,map__25592__$1,opts,on_jsload,before_jsload,map__25593,map__25593__$1,files){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_25629 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25629[(0)] = state_machine__15829__auto__);

(statearr_25629[(1)] = (1));

return statearr_25629;
});
var state_machine__15829__auto____1 = (function (state_25616){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_25616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e25630){if((e25630 instanceof Object)){
var ex__15832__auto__ = e25630;
var statearr_25631_25637 = state_25616;
(statearr_25631_25637[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25638 = state_25616;
state_25616 = G__25638;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_25616){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_25616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto__,map__25592,map__25592__$1,opts,on_jsload,before_jsload,map__25593,map__25593__$1,files))
})();
var state__15886__auto__ = (function (){var statearr_25632 = f__15885__auto__.call(null);
(statearr_25632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto__);

return statearr_25632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto__,map__25592,map__25592__$1,opts,on_jsload,before_jsload,map__25593,map__25593__$1,files))
);

return c__15884__auto__;
});
figwheel.client.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__25639,link_href){
var map__25641 = p__25639;
var map__25641__$1 = ((cljs.core.seq_QMARK_.call(null,map__25641))?cljs.core.apply.call(null,cljs.core.hash_map,map__25641):map__25641);
var request_url = cljs.core.get.call(null,map__25641__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__25641__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.add_cache_buster.call(null,url);

return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var c__15884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto__,parent){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto__,parent){
return (function (state_25662){
var state_val_25663 = (state_25662[(1)]);
if((state_val_25663 === (2))){
var inst_25659 = (state_25662[(2)]);
var inst_25660 = parent.removeChild(orig_link);
var state_25662__$1 = (function (){var statearr_25664 = state_25662;
(statearr_25664[(7)] = inst_25659);

return statearr_25664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25662__$1,inst_25660);
} else {
if((state_val_25663 === (1))){
var inst_25657 = cljs.core.async.timeout.call(null,(200));
var state_25662__$1 = state_25662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25662__$1,(2),inst_25657);
} else {
return null;
}
}
});})(c__15884__auto__,parent))
;
return ((function (switch__15828__auto__,c__15884__auto__,parent){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_25668 = [null,null,null,null,null,null,null,null];
(statearr_25668[(0)] = state_machine__15829__auto__);

(statearr_25668[(1)] = (1));

return statearr_25668;
});
var state_machine__15829__auto____1 = (function (state_25662){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_25662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e25669){if((e25669 instanceof Object)){
var ex__15832__auto__ = e25669;
var statearr_25670_25672 = state_25662;
(statearr_25670_25672[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25673 = state_25662;
state_25662 = G__25673;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_25662){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_25662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto__,parent))
})();
var state__15886__auto__ = (function (){var statearr_25671 = f__15885__auto__.call(null);
(statearr_25671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto__);

return statearr_25671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto__,parent))
);

return c__15884__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__25674){
var map__25676 = p__25674;
var map__25676__$1 = ((cljs.core.seq_QMARK_.call(null,map__25676))?cljs.core.apply.call(null,cljs.core.hash_map,map__25676):map__25676);
var f_data = map__25676__$1;
var request_url = cljs.core.get.call(null,map__25676__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__25676__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4386__auto__ = figwheel.client.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4386__auto__)){
var link = temp__4386__auto__;
return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else {
return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__25677,files_msg){
var map__25699 = p__25677;
var map__25699__$1 = ((cljs.core.seq_QMARK_.call(null,map__25699))?cljs.core.apply.call(null,cljs.core.hash_map,map__25699):map__25699);
var opts = map__25699__$1;
var on_cssload = cljs.core.get.call(null,map__25699__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__25700_25720 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25701_25721 = null;
var count__25702_25722 = (0);
var i__25703_25723 = (0);
while(true){
if((i__25703_25723 < count__25702_25722)){
var f_25724 = cljs.core._nth.call(null,chunk__25701_25721,i__25703_25723);
figwheel.client.reload_css_file.call(null,f_25724);

var G__25725 = seq__25700_25720;
var G__25726 = chunk__25701_25721;
var G__25727 = count__25702_25722;
var G__25728 = (i__25703_25723 + (1));
seq__25700_25720 = G__25725;
chunk__25701_25721 = G__25726;
count__25702_25722 = G__25727;
i__25703_25723 = G__25728;
continue;
} else {
var temp__4388__auto___25729 = cljs.core.seq.call(null,seq__25700_25720);
if(temp__4388__auto___25729){
var seq__25700_25730__$1 = temp__4388__auto___25729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25700_25730__$1)){
var c__13442__auto___25731 = cljs.core.chunk_first.call(null,seq__25700_25730__$1);
var G__25732 = cljs.core.chunk_rest.call(null,seq__25700_25730__$1);
var G__25733 = c__13442__auto___25731;
var G__25734 = cljs.core.count.call(null,c__13442__auto___25731);
var G__25735 = (0);
seq__25700_25720 = G__25732;
chunk__25701_25721 = G__25733;
count__25702_25722 = G__25734;
i__25703_25723 = G__25735;
continue;
} else {
var f_25736 = cljs.core.first.call(null,seq__25700_25730__$1);
figwheel.client.reload_css_file.call(null,f_25736);

var G__25737 = cljs.core.next.call(null,seq__25700_25730__$1);
var G__25738 = null;
var G__25739 = (0);
var G__25740 = (0);
seq__25700_25720 = G__25737;
chunk__25701_25721 = G__25738;
count__25702_25722 = G__25739;
i__25703_25723 = G__25740;
continue;
}
} else {
}
}
break;
}

var c__15884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto__,map__25699,map__25699__$1,opts,on_cssload){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto__,map__25699,map__25699__$1,opts,on_cssload){
return (function (state_25710){
var state_val_25711 = (state_25710[(1)]);
if((state_val_25711 === (2))){
var inst_25706 = (state_25710[(2)]);
var inst_25707 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_25708 = on_cssload.call(null,inst_25707);
var state_25710__$1 = (function (){var statearr_25712 = state_25710;
(statearr_25712[(7)] = inst_25706);

return statearr_25712;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25710__$1,inst_25708);
} else {
if((state_val_25711 === (1))){
var inst_25704 = cljs.core.async.timeout.call(null,(100));
var state_25710__$1 = state_25710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25710__$1,(2),inst_25704);
} else {
return null;
}
}
});})(c__15884__auto__,map__25699,map__25699__$1,opts,on_cssload))
;
return ((function (switch__15828__auto__,c__15884__auto__,map__25699,map__25699__$1,opts,on_cssload){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_25716 = [null,null,null,null,null,null,null,null];
(statearr_25716[(0)] = state_machine__15829__auto__);

(statearr_25716[(1)] = (1));

return statearr_25716;
});
var state_machine__15829__auto____1 = (function (state_25710){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_25710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e25717){if((e25717 instanceof Object)){
var ex__15832__auto__ = e25717;
var statearr_25718_25741 = state_25710;
(statearr_25718_25741[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25742 = state_25710;
state_25710 = G__25742;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_25710){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_25710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto__,map__25699,map__25699__$1,opts,on_cssload))
})();
var state__15886__auto__ = (function (){var statearr_25719 = f__15885__auto__.call(null);
(statearr_25719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto__);

return statearr_25719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto__,map__25699,map__25699__$1,opts,on_cssload))
);

return c__15884__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){
return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.have_websockets_QMARK_ = (function have_websockets_QMARK_(){
return ("WebSocket" in window);
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__25743){
var map__25748 = p__25743;
var map__25748__$1 = ((cljs.core.seq_QMARK_.call(null,map__25748))?cljs.core.apply.call(null,cljs.core.hash_map,map__25748):map__25748);
var opts = map__25748__$1;
var on_compile_fail = cljs.core.get.call(null,map__25748__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var jsload_callback = cljs.core.get.call(null,map__25748__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
var websocket_url = cljs.core.get.call(null,map__25748__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
var retry_count = cljs.core.get.call(null,map__25748__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));
if(cljs.core.not.call(null,figwheel.client.have_websockets_QMARK_.call(null))){
return console.debug("Figwheel: Can't start Figwheel!! This browser doesn't support WebSockets");
} else {
console.debug("Figwheel: trying to open cljs reload socket");

var socket = (new WebSocket(websocket_url));
socket.onmessage = ((function (socket,map__25748,map__25748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){
var msg = cljs.reader.read_string.call(null,msg_str.data);
var pred__25749 = cljs.core._EQ_;
var expr__25750 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(pred__25749.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__25750))){
return figwheel.client.reload_js_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__25749.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__25750))){
return figwheel.client.reload_css_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__25749.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25750))){
return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else {
return null;
}
}
}
});})(socket,map__25748,map__25748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onopen = ((function (socket,map__25748,map__25748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.patch_goog_base.call(null);

return console.debug("Figwheel: socket connection established");
});})(socket,map__25748,map__25748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onclose = ((function (socket,map__25748,map__25748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");

if((retry_count > (0))){
return window.setTimeout(((function (socket,map__25748,map__25748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){
return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__25748,map__25748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else {
return null;
}
});})(socket,map__25748,map__25748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

return socket.onerror = ((function (socket,map__25748,map__25748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__25748,map__25748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
}
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj25755 = {"detail":url};
return obj25755;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__25756){
var map__25758 = p__25756;
var map__25758__$1 = ((cljs.core.seq_QMARK_.call(null,map__25758))?cljs.core.apply.call(null,cljs.core.hash_map,map__25758):map__25758);
var class$ = cljs.core.get.call(null,map__25758__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__25758__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__25759){
var map__25765 = p__25759;
var map__25765__$1 = ((cljs.core.seq_QMARK_.call(null,map__25765))?cljs.core.apply.call(null,cljs.core.hash_map,map__25765):map__25765);
var ed = map__25765__$1;
var exception_data = cljs.core.get.call(null,map__25765__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__25765__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__25766_25770 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25767_25771 = null;
var count__25768_25772 = (0);
var i__25769_25773 = (0);
while(true){
if((i__25769_25773 < count__25768_25772)){
var msg_25774 = cljs.core._nth.call(null,chunk__25767_25771,i__25769_25773);
console.log(msg_25774);

var G__25775 = seq__25766_25770;
var G__25776 = chunk__25767_25771;
var G__25777 = count__25768_25772;
var G__25778 = (i__25769_25773 + (1));
seq__25766_25770 = G__25775;
chunk__25767_25771 = G__25776;
count__25768_25772 = G__25777;
i__25769_25773 = G__25778;
continue;
} else {
var temp__4388__auto___25779 = cljs.core.seq.call(null,seq__25766_25770);
if(temp__4388__auto___25779){
var seq__25766_25780__$1 = temp__4388__auto___25779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25766_25780__$1)){
var c__13442__auto___25781 = cljs.core.chunk_first.call(null,seq__25766_25780__$1);
var G__25782 = cljs.core.chunk_rest.call(null,seq__25766_25780__$1);
var G__25783 = c__13442__auto___25781;
var G__25784 = cljs.core.count.call(null,c__13442__auto___25781);
var G__25785 = (0);
seq__25766_25770 = G__25782;
chunk__25767_25771 = G__25783;
count__25768_25772 = G__25784;
i__25769_25773 = G__25785;
continue;
} else {
var msg_25786 = cljs.core.first.call(null,seq__25766_25780__$1);
console.log(msg_25786);

var G__25787 = cljs.core.next.call(null,seq__25766_25780__$1);
var G__25788 = null;
var G__25789 = (0);
var G__25790 = (0);
seq__25766_25770 = G__25787;
chunk__25767_25771 = G__25788;
count__25768_25772 = G__25789;
i__25769_25773 = G__25790;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: loading files");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){
if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton"))){
return null;
} else {
figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__12655__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__25791){
var map__25793 = p__25791;
var map__25793__$1 = ((cljs.core.seq_QMARK_.call(null,map__25793))?cljs.core.apply.call(null,cljs.core.hash_map,map__25793):map__25793);
var opts = map__25793__$1;
return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__25791 = null;
if (arguments.length > 0) {
  p__25791 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return watch_and_reload__delegate.call(this,p__25791);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__25794){
var p__25791 = cljs.core.seq(arglist__25794);
return watch_and_reload__delegate(p__25791);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map