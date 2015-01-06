// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('chestnut_feed.core')) {
goog.provide('chestnut_feed.core');
}
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('cljs.reader');
chestnut_feed.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"feeds-urls","feeds-urls",-668448524),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://planet.haskell.org/rss20.xml","http://planet.lisp.org/rss20.xml","http://www.scheme.dk/planet/atom.xml","http://planet.clojure.in/atom.xml","http://planet.emacsen.org/atom.xml","http://feed43.com/vim-scripts.xml"], null),new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"search-terms","search-terms",-65751736),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.Keyword(null,"zebra-colors","zebra-colors",2001075858),cljs.core.interleave.call(null,cljs.core.repeat.call(null,"#eeeedd"),cljs.core.repeat.call(null,"#eeddee"),cljs.core.repeat.call(null,"#ddeeee"))], null));
chestnut_feed.core.entry = (function entry(data){
if(typeof chestnut_feed.core.t28630 !== 'undefined'){
} else {

/**
* @constructor
*/
chestnut_feed.core.t28630 = (function (data,entry,meta28631){
this.data = data;
this.entry = entry;
this.meta28631 = meta28631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chestnut_feed.core.t28630.prototype.om$core$IRender$ = true;

chestnut_feed.core.t28630.prototype.om$core$IRender$render$arity$1 = (function (this__19690__auto__){
var self__ = this;
var this__19690__auto____$1 = this;
return React.DOM.div({"style": {"backgroundColor": new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.data)}},React.DOM.a({"href": new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(self__.data)},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.data))));
});

chestnut_feed.core.t28630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28632){
var self__ = this;
var _28632__$1 = this;
return self__.meta28631;
});

chestnut_feed.core.t28630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28632,meta28631__$1){
var self__ = this;
var _28632__$1 = this;
return (new chestnut_feed.core.t28630(self__.data,self__.entry,meta28631__$1));
});

chestnut_feed.core.t28630.cljs$lang$type = true;

chestnut_feed.core.t28630.cljs$lang$ctorStr = "chestnut-feed.core/t28630";

chestnut_feed.core.t28630.cljs$lang$ctorPrWriter = (function (this__13242__auto__,writer__13243__auto__,opt__13244__auto__){
return cljs.core._write.call(null,writer__13243__auto__,"chestnut-feed.core/t28630");
});

chestnut_feed.core.__GT_t28630 = (function __GT_t28630(data__$1,entry__$1,meta28631){
return (new chestnut_feed.core.t28630(data__$1,entry__$1,meta28631));
});

}

return (new chestnut_feed.core.t28630(data,entry,null));
});
chestnut_feed.core.matches_term = (function matches_term(search_term,string){
return cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,[cljs.core.str(".*"),cljs.core.str(clojure.string.lower_case.call(null,search_term)),cljs.core.str(".*")].join('')),clojure.string.lower_case.call(null,string));
});
chestnut_feed.core.matches_terms = (function matches_terms(search_terms,string){
return cljs.core.every_QMARK_.call(null,(function (p1__28633_SHARP_){
return chestnut_feed.core.matches_term.call(null,p1__28633_SHARP_,string);
}),search_terms);
});
chestnut_feed.core.extract_entries = (function extract_entries(search_terms){

return cljs.core.comp.call(null,cljs.core.mapcat.call(null,cljs.reader.read_string),cljs.core.filter.call(null,(function (p1__28634_SHARP_){
return chestnut_feed.core.matches_terms.call(null,search_terms,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__28634_SHARP_));
})));
});
chestnut_feed.core.entries = (function entries(data,owner){
if(typeof chestnut_feed.core.t28696 !== 'undefined'){
} else {

/**
* @constructor
*/
chestnut_feed.core.t28696 = (function (owner,data,entries,meta28697){
this.owner = owner;
this.data = data;
this.entries = entries;
this.meta28697 = meta28697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chestnut_feed.core.t28696.prototype.om$core$IRenderState$ = true;

chestnut_feed.core.t28696.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,chestnut_feed.core.entry,cljs.core.map.call(null,((function (___$1){
return (function (data_entry,color){
return cljs.core.assoc.call(null,data_entry,new cljs.core.Keyword(null,"color","color",1011675173),color);
});})(___$1))
,new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"zebra-colors","zebra-colors",2001075858).cljs$core$IFn$_invoke$arity$1(self__.data))));
});

chestnut_feed.core.t28696.prototype.om$core$IWillMount$ = true;

chestnut_feed.core.t28696.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var new_entries = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"new-entries","new-entries",-408454034));
var seq__28699_28756 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"feeds-urls","feeds-urls",-668448524).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chestnut_feed.core.app_state)));
var chunk__28700_28757 = null;
var count__28701_28758 = (0);
var i__28702_28759 = (0);
while(true){
if((i__28702_28759 < count__28701_28758)){
var feed_url_28760 = cljs.core._nth.call(null,chunk__28700_28757,i__28702_28759);
ajax.core.POST.call(null,"/feed",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),feed_url_28760], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (seq__28699_28756,chunk__28700_28757,count__28701_28758,i__28702_28759,feed_url_28760,new_entries,___$1){
return (function (response){
var c__15885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__28699_28756,chunk__28700_28757,count__28701_28758,i__28702_28759,c__15885__auto__,feed_url_28760,new_entries,___$1){
return (function (){
var f__15886__auto__ = (function (){var switch__15829__auto__ = ((function (seq__28699_28756,chunk__28700_28757,count__28701_28758,i__28702_28759,c__15885__auto__,feed_url_28760,new_entries,___$1){
return (function (state_28706){
var state_val_28707 = (state_28706[(1)]);
if((state_val_28707 === (2))){
var inst_28704 = (state_28706[(2)]);
var state_28706__$1 = state_28706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28706__$1,inst_28704);
} else {
if((state_val_28707 === (1))){
var state_28706__$1 = state_28706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28706__$1,(2),new_entries,response);
} else {
return null;
}
}
});})(seq__28699_28756,chunk__28700_28757,count__28701_28758,i__28702_28759,c__15885__auto__,feed_url_28760,new_entries,___$1))
;
return ((function (seq__28699_28756,chunk__28700_28757,count__28701_28758,i__28702_28759,switch__15829__auto__,c__15885__auto__,feed_url_28760,new_entries,___$1){
return (function() {
var state_machine__15830__auto__ = null;
var state_machine__15830__auto____0 = (function (){
var statearr_28711 = [null,null,null,null,null,null,null];
(statearr_28711[(0)] = state_machine__15830__auto__);

(statearr_28711[(1)] = (1));

return statearr_28711;
});
var state_machine__15830__auto____1 = (function (state_28706){
while(true){
var ret_value__15831__auto__ = (function (){try{while(true){
var result__15832__auto__ = switch__15829__auto__.call(null,state_28706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15832__auto__;
}
break;
}
}catch (e28712){if((e28712 instanceof Object)){
var ex__15833__auto__ = e28712;
var statearr_28713_28761 = state_28706;
(statearr_28713_28761[(5)] = ex__15833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28762 = state_28706;
state_28706 = G__28762;
continue;
} else {
return ret_value__15831__auto__;
}
break;
}
});
state_machine__15830__auto__ = function(state_28706){
switch(arguments.length){
case 0:
return state_machine__15830__auto____0.call(this);
case 1:
return state_machine__15830__auto____1.call(this,state_28706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15830__auto____0;
state_machine__15830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15830__auto____1;
return state_machine__15830__auto__;
})()
;})(seq__28699_28756,chunk__28700_28757,count__28701_28758,i__28702_28759,switch__15829__auto__,c__15885__auto__,feed_url_28760,new_entries,___$1))
})();
var state__15887__auto__ = (function (){var statearr_28714 = f__15886__auto__.call(null);
(statearr_28714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15885__auto__);

return statearr_28714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15887__auto__);
});})(seq__28699_28756,chunk__28700_28757,count__28701_28758,i__28702_28759,c__15885__auto__,feed_url_28760,new_entries,___$1))
);

return c__15885__auto__;
});})(seq__28699_28756,chunk__28700_28757,count__28701_28758,i__28702_28759,feed_url_28760,new_entries,___$1))
], null));

var G__28763 = seq__28699_28756;
var G__28764 = chunk__28700_28757;
var G__28765 = count__28701_28758;
var G__28766 = (i__28702_28759 + (1));
seq__28699_28756 = G__28763;
chunk__28700_28757 = G__28764;
count__28701_28758 = G__28765;
i__28702_28759 = G__28766;
continue;
} else {
var temp__4388__auto___28767 = cljs.core.seq.call(null,seq__28699_28756);
if(temp__4388__auto___28767){
var seq__28699_28768__$1 = temp__4388__auto___28767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28699_28768__$1)){
var c__13442__auto___28769 = cljs.core.chunk_first.call(null,seq__28699_28768__$1);
var G__28770 = cljs.core.chunk_rest.call(null,seq__28699_28768__$1);
var G__28771 = c__13442__auto___28769;
var G__28772 = cljs.core.count.call(null,c__13442__auto___28769);
var G__28773 = (0);
seq__28699_28756 = G__28770;
chunk__28700_28757 = G__28771;
count__28701_28758 = G__28772;
i__28702_28759 = G__28773;
continue;
} else {
var feed_url_28774 = cljs.core.first.call(null,seq__28699_28768__$1);
ajax.core.POST.call(null,"/feed",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),feed_url_28774], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (seq__28699_28756,chunk__28700_28757,count__28701_28758,i__28702_28759,feed_url_28774,seq__28699_28768__$1,temp__4388__auto___28767,new_entries,___$1){
return (function (response){
var c__15885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__28699_28756,chunk__28700_28757,count__28701_28758,i__28702_28759,c__15885__auto__,feed_url_28774,seq__28699_28768__$1,temp__4388__auto___28767,new_entries,___$1){
return (function (){
var f__15886__auto__ = (function (){var switch__15829__auto__ = ((function (seq__28699_28756,chunk__28700_28757,count__28701_28758,i__28702_28759,c__15885__auto__,feed_url_28774,seq__28699_28768__$1,temp__4388__auto___28767,new_entries,___$1){
return (function (state_28718){
var state_val_28719 = (state_28718[(1)]);
if((state_val_28719 === (2))){
var inst_28716 = (state_28718[(2)]);
var state_28718__$1 = state_28718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28718__$1,inst_28716);
} else {
if((state_val_28719 === (1))){
var state_28718__$1 = state_28718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28718__$1,(2),new_entries,response);
} else {
return null;
}
}
});})(seq__28699_28756,chunk__28700_28757,count__28701_28758,i__28702_28759,c__15885__auto__,feed_url_28774,seq__28699_28768__$1,temp__4388__auto___28767,new_entries,___$1))
;
return ((function (seq__28699_28756,chunk__28700_28757,count__28701_28758,i__28702_28759,switch__15829__auto__,c__15885__auto__,feed_url_28774,seq__28699_28768__$1,temp__4388__auto___28767,new_entries,___$1){
return (function() {
var state_machine__15830__auto__ = null;
var state_machine__15830__auto____0 = (function (){
var statearr_28723 = [null,null,null,null,null,null,null];
(statearr_28723[(0)] = state_machine__15830__auto__);

(statearr_28723[(1)] = (1));

return statearr_28723;
});
var state_machine__15830__auto____1 = (function (state_28718){
while(true){
var ret_value__15831__auto__ = (function (){try{while(true){
var result__15832__auto__ = switch__15829__auto__.call(null,state_28718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15832__auto__;
}
break;
}
}catch (e28724){if((e28724 instanceof Object)){
var ex__15833__auto__ = e28724;
var statearr_28725_28775 = state_28718;
(statearr_28725_28775[(5)] = ex__15833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28776 = state_28718;
state_28718 = G__28776;
continue;
} else {
return ret_value__15831__auto__;
}
break;
}
});
state_machine__15830__auto__ = function(state_28718){
switch(arguments.length){
case 0:
return state_machine__15830__auto____0.call(this);
case 1:
return state_machine__15830__auto____1.call(this,state_28718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15830__auto____0;
state_machine__15830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15830__auto____1;
return state_machine__15830__auto__;
})()
;})(seq__28699_28756,chunk__28700_28757,count__28701_28758,i__28702_28759,switch__15829__auto__,c__15885__auto__,feed_url_28774,seq__28699_28768__$1,temp__4388__auto___28767,new_entries,___$1))
})();
var state__15887__auto__ = (function (){var statearr_28726 = f__15886__auto__.call(null);
(statearr_28726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15885__auto__);

return statearr_28726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15887__auto__);
});})(seq__28699_28756,chunk__28700_28757,count__28701_28758,i__28702_28759,c__15885__auto__,feed_url_28774,seq__28699_28768__$1,temp__4388__auto___28767,new_entries,___$1))
);

return c__15885__auto__;
});})(seq__28699_28756,chunk__28700_28757,count__28701_28758,i__28702_28759,feed_url_28774,seq__28699_28768__$1,temp__4388__auto___28767,new_entries,___$1))
], null));

var G__28777 = cljs.core.next.call(null,seq__28699_28768__$1);
var G__28778 = null;
var G__28779 = (0);
var G__28780 = (0);
seq__28699_28756 = G__28777;
chunk__28700_28757 = G__28778;
count__28701_28758 = G__28779;
i__28702_28759 = G__28780;
continue;
}
} else {
}
}
break;
}

var c__15885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15885__auto__,new_entries,___$1){
return (function (){
var f__15886__auto__ = (function (){var switch__15829__auto__ = ((function (c__15885__auto__,new_entries,___$1){
return (function (state_28740){
var state_val_28741 = (state_28740[(1)]);
if((state_val_28741 === (7))){
var inst_28730 = (state_28740[(2)]);
var inst_28731 = (function (){var new_entry = inst_28730;
return ((function (new_entry,inst_28730,state_val_28741,c__15885__auto__,new_entries,___$1){
return (function (p1__28635_SHARP_){
return cljs.core.conj.call(null,p1__28635_SHARP_,new_entry);
});
;})(new_entry,inst_28730,state_val_28741,c__15885__auto__,new_entries,___$1))
})();
var inst_28732 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"entries","entries",-86943161),inst_28731);
var state_28740__$1 = (function (){var statearr_28742 = state_28740;
(statearr_28742[(7)] = inst_28732);

return statearr_28742;
})();
var statearr_28743_28781 = state_28740__$1;
(statearr_28743_28781[(2)] = null);

(statearr_28743_28781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28741 === (6))){
var inst_28736 = (state_28740[(2)]);
var state_28740__$1 = state_28740;
var statearr_28744_28782 = state_28740__$1;
(statearr_28744_28782[(2)] = inst_28736);

(statearr_28744_28782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28741 === (5))){
var state_28740__$1 = state_28740;
var statearr_28745_28783 = state_28740__$1;
(statearr_28745_28783[(2)] = null);

(statearr_28745_28783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28741 === (4))){
var state_28740__$1 = state_28740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28740__$1,(7),new_entries);
} else {
if((state_val_28741 === (3))){
var inst_28738 = (state_28740[(2)]);
var state_28740__$1 = state_28740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28740__$1,inst_28738);
} else {
if((state_val_28741 === (2))){
var state_28740__$1 = state_28740;
var statearr_28746_28784 = state_28740__$1;
(statearr_28746_28784[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28741 === (1))){
var state_28740__$1 = state_28740;
var statearr_28748_28785 = state_28740__$1;
(statearr_28748_28785[(2)] = null);

(statearr_28748_28785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__15885__auto__,new_entries,___$1))
;
return ((function (switch__15829__auto__,c__15885__auto__,new_entries,___$1){
return (function() {
var state_machine__15830__auto__ = null;
var state_machine__15830__auto____0 = (function (){
var statearr_28752 = [null,null,null,null,null,null,null,null];
(statearr_28752[(0)] = state_machine__15830__auto__);

(statearr_28752[(1)] = (1));

return statearr_28752;
});
var state_machine__15830__auto____1 = (function (state_28740){
while(true){
var ret_value__15831__auto__ = (function (){try{while(true){
var result__15832__auto__ = switch__15829__auto__.call(null,state_28740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15832__auto__;
}
break;
}
}catch (e28753){if((e28753 instanceof Object)){
var ex__15833__auto__ = e28753;
var statearr_28754_28786 = state_28740;
(statearr_28754_28786[(5)] = ex__15833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28787 = state_28740;
state_28740 = G__28787;
continue;
} else {
return ret_value__15831__auto__;
}
break;
}
});
state_machine__15830__auto__ = function(state_28740){
switch(arguments.length){
case 0:
return state_machine__15830__auto____0.call(this);
case 1:
return state_machine__15830__auto____1.call(this,state_28740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15830__auto____0;
state_machine__15830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15830__auto____1;
return state_machine__15830__auto__;
})()
;})(switch__15829__auto__,c__15885__auto__,new_entries,___$1))
})();
var state__15887__auto__ = (function (){var statearr_28755 = f__15886__auto__.call(null);
(statearr_28755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15885__auto__);

return statearr_28755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15887__auto__);
});})(c__15885__auto__,new_entries,___$1))
);

return c__15885__auto__;
});

chestnut_feed.core.t28696.prototype.om$core$IInitState$ = true;

chestnut_feed.core.t28696.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-entries","new-entries",-408454034),cljs.core.async.chan.call(null,(1000),chestnut_feed.core.extract_entries.call(null,new cljs.core.Keyword(null,"search-terms","search-terms",-65751736).cljs$core$IFn$_invoke$arity$1(self__.data)))], null);
});

chestnut_feed.core.t28696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28698){
var self__ = this;
var _28698__$1 = this;
return self__.meta28697;
});

chestnut_feed.core.t28696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28698,meta28697__$1){
var self__ = this;
var _28698__$1 = this;
return (new chestnut_feed.core.t28696(self__.owner,self__.data,self__.entries,meta28697__$1));
});

chestnut_feed.core.t28696.cljs$lang$type = true;

chestnut_feed.core.t28696.cljs$lang$ctorStr = "chestnut-feed.core/t28696";

chestnut_feed.core.t28696.cljs$lang$ctorPrWriter = (function (this__13242__auto__,writer__13243__auto__,opt__13244__auto__){
return cljs.core._write.call(null,writer__13243__auto__,"chestnut-feed.core/t28696");
});

chestnut_feed.core.__GT_t28696 = (function __GT_t28696(owner__$1,data__$1,entries__$1,meta28697){
return (new chestnut_feed.core.t28696(owner__$1,data__$1,entries__$1,meta28697));
});

}

return (new chestnut_feed.core.t28696(owner,data,entries,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),64,new cljs.core.Keyword(null,"end-line","end-line",1837326455),76,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),52,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/we/Dropbox/projects/feeds/chestnut-feed/src/cljs/chestnut_feed/core.cljs"], null)));
});
chestnut_feed.core.main = (function main(){
return om.core.root.call(null,(function (app,owner){
if(typeof chestnut_feed.core.t28791 !== 'undefined'){
} else {

/**
* @constructor
*/
chestnut_feed.core.t28791 = (function (owner,app,main,meta28792){
this.owner = owner;
this.app = app;
this.main = main;
this.meta28792 = meta28792;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chestnut_feed.core.t28791.prototype.om$core$IRender$ = true;

chestnut_feed.core.t28791.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.core.build.call(null,chestnut_feed.core.entries,self__.app));
});

chestnut_feed.core.t28791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28793){
var self__ = this;
var _28793__$1 = this;
return self__.meta28792;
});

chestnut_feed.core.t28791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28793,meta28792__$1){
var self__ = this;
var _28793__$1 = this;
return (new chestnut_feed.core.t28791(self__.owner,self__.app,self__.main,meta28792__$1));
});

chestnut_feed.core.t28791.cljs$lang$type = true;

chestnut_feed.core.t28791.cljs$lang$ctorStr = "chestnut-feed.core/t28791";

chestnut_feed.core.t28791.cljs$lang$ctorPrWriter = (function (this__13242__auto__,writer__13243__auto__,opt__13244__auto__){
return cljs.core._write.call(null,writer__13243__auto__,"chestnut-feed.core/t28791");
});

chestnut_feed.core.__GT_t28791 = (function __GT_t28791(owner__$1,app__$1,main__$1,meta28792){
return (new chestnut_feed.core.t28791(owner__$1,app__$1,main__$1,meta28792));
});

}

return (new chestnut_feed.core.t28791(owner,app,main,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),44,new cljs.core.Keyword(null,"end-line","end-line",1837326455),85,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),81,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/we/Dropbox/projects/feeds/chestnut-feed/src/cljs/chestnut_feed/core.cljs"], null)));
}),chestnut_feed.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
});

//# sourceMappingURL=core.js.map