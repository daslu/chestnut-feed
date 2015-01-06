// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('sablono.core')) {
goog.provide('sablono.core');
}
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){
return (function() { 
var G__24724__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__24723 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__24723,(0),null);
var body = cljs.core.nthnext.call(null,vec__24723,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__24724 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__24724__delegate.call(this,args);};
G__24724.cljs$lang$maxFixedArity = 0;
G__24724.cljs$lang$applyTo = (function (arglist__24725){
var args = cljs.core.seq(arglist__24725);
return G__24724__delegate(args);
});
G__24724.cljs$core$IFn$_invoke$arity$variadic = G__24724__delegate;
return G__24724;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__13411__auto__ = (function iter__24730(s__24731){
return (new cljs.core.LazySeq(null,(function (){
var s__24731__$1 = s__24731;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__24731__$1);
if(temp__4388__auto__){
var s__24731__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24731__$2)){
var c__13409__auto__ = cljs.core.chunk_first.call(null,s__24731__$2);
var size__13410__auto__ = cljs.core.count.call(null,c__13409__auto__);
var b__24733 = cljs.core.chunk_buffer.call(null,size__13410__auto__);
if((function (){var i__24732 = (0);
while(true){
if((i__24732 < size__13410__auto__)){
var args = cljs.core._nth.call(null,c__13409__auto__,i__24732);
cljs.core.chunk_append.call(null,b__24733,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__24734 = (i__24732 + (1));
i__24732 = G__24734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24733),iter__24730.call(null,cljs.core.chunk_rest.call(null,s__24731__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24733),null);
}
} else {
var args = cljs.core.first.call(null,s__24731__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__24730.call(null,cljs.core.rest.call(null,s__24731__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13411__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){
return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__13411__auto__ = (function iter__24739(s__24740){
return (new cljs.core.LazySeq(null,(function (){
var s__24740__$1 = s__24740;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__24740__$1);
if(temp__4388__auto__){
var s__24740__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24740__$2)){
var c__13409__auto__ = cljs.core.chunk_first.call(null,s__24740__$2);
var size__13410__auto__ = cljs.core.count.call(null,c__13409__auto__);
var b__24742 = cljs.core.chunk_buffer.call(null,size__13410__auto__);
if((function (){var i__24741 = (0);
while(true){
if((i__24741 < size__13410__auto__)){
var style = cljs.core._nth.call(null,c__13409__auto__,i__24741);
cljs.core.chunk_append.call(null,b__24742,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__24743 = (i__24741 + (1));
i__24741 = G__24743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24742),iter__24739.call(null,cljs.core.chunk_rest.call(null,s__24740__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24742),null);
}
} else {
var style = cljs.core.first.call(null,s__24740__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__24739.call(null,cljs.core.rest.call(null,s__24740__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13411__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__24744){
var styles = cljs.core.seq(arglist__24744);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to24745 = (function() { 
var link_to24745__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to24745 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to24745__delegate.call(this,url,content);};
link_to24745.cljs$lang$maxFixedArity = 1;
link_to24745.cljs$lang$applyTo = (function (arglist__24746){
var url = cljs.core.first(arglist__24746);
var content = cljs.core.rest(arglist__24746);
return link_to24745__delegate(url,content);
});
link_to24745.cljs$core$IFn$_invoke$arity$variadic = link_to24745__delegate;
return link_to24745;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to24745);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to24747 = (function() { 
var mail_to24747__delegate = function (e_mail,p__24748){
var vec__24750 = p__24748;
var content = cljs.core.nth.call(null,vec__24750,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__12655__auto__ = content;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to24747 = function (e_mail,var_args){
var p__24748 = null;
if (arguments.length > 1) {
  p__24748 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to24747__delegate.call(this,e_mail,p__24748);};
mail_to24747.cljs$lang$maxFixedArity = 1;
mail_to24747.cljs$lang$applyTo = (function (arglist__24751){
var e_mail = cljs.core.first(arglist__24751);
var p__24748 = cljs.core.rest(arglist__24751);
return mail_to24747__delegate(e_mail,p__24748);
});
mail_to24747.cljs$core$IFn$_invoke$arity$variadic = mail_to24747__delegate;
return mail_to24747;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to24747);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list24752 = (function unordered_list24752(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__13411__auto__ = (function iter__24757(s__24758){
return (new cljs.core.LazySeq(null,(function (){
var s__24758__$1 = s__24758;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__24758__$1);
if(temp__4388__auto__){
var s__24758__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24758__$2)){
var c__13409__auto__ = cljs.core.chunk_first.call(null,s__24758__$2);
var size__13410__auto__ = cljs.core.count.call(null,c__13409__auto__);
var b__24760 = cljs.core.chunk_buffer.call(null,size__13410__auto__);
if((function (){var i__24759 = (0);
while(true){
if((i__24759 < size__13410__auto__)){
var x = cljs.core._nth.call(null,c__13409__auto__,i__24759);
cljs.core.chunk_append.call(null,b__24760,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24761 = (i__24759 + (1));
i__24759 = G__24761;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24760),iter__24757.call(null,cljs.core.chunk_rest.call(null,s__24758__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24760),null);
}
} else {
var x = cljs.core.first.call(null,s__24758__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__24757.call(null,cljs.core.rest.call(null,s__24758__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13411__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list24752);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list24762 = (function ordered_list24762(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__13411__auto__ = (function iter__24767(s__24768){
return (new cljs.core.LazySeq(null,(function (){
var s__24768__$1 = s__24768;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__24768__$1);
if(temp__4388__auto__){
var s__24768__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24768__$2)){
var c__13409__auto__ = cljs.core.chunk_first.call(null,s__24768__$2);
var size__13410__auto__ = cljs.core.count.call(null,c__13409__auto__);
var b__24770 = cljs.core.chunk_buffer.call(null,size__13410__auto__);
if((function (){var i__24769 = (0);
while(true){
if((i__24769 < size__13410__auto__)){
var x = cljs.core._nth.call(null,c__13409__auto__,i__24769);
cljs.core.chunk_append.call(null,b__24770,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24771 = (i__24769 + (1));
i__24769 = G__24771;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24770),iter__24767.call(null,cljs.core.chunk_rest.call(null,s__24768__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24770),null);
}
} else {
var x = cljs.core.first.call(null,s__24768__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__24767.call(null,cljs.core.rest.call(null,s__24768__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13411__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list24762);
/**
* Create an image element.
*/
sablono.core.image24772 = (function() {
var image24772 = null;
var image24772__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image24772__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image24772 = function(src,alt){
switch(arguments.length){
case 1:
return image24772__1.call(this,src);
case 2:
return image24772__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image24772.cljs$core$IFn$_invoke$arity$1 = image24772__1;
image24772.cljs$core$IFn$_invoke$arity$2 = image24772__2;
return image24772;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image24772);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__24773_SHARP_,p2__24774_SHARP_){
return [cljs.core.str(p1__24773_SHARP_),cljs.core.str("["),cljs.core.str(p2__24774_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__24775_SHARP_,p2__24776_SHARP_){
return [cljs.core.str(p1__24775_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24776_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field24777 = (function() {
var color_field24777 = null;
var color_field24777__1 = (function (name__19218__auto__){
return color_field24777.call(null,name__19218__auto__,null);
});
var color_field24777__2 = (function (name__19218__auto__,value__19219__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__19218__auto__,value__19219__auto__);
});
color_field24777 = function(name__19218__auto__,value__19219__auto__){
switch(arguments.length){
case 1:
return color_field24777__1.call(this,name__19218__auto__);
case 2:
return color_field24777__2.call(this,name__19218__auto__,value__19219__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field24777.cljs$core$IFn$_invoke$arity$1 = color_field24777__1;
color_field24777.cljs$core$IFn$_invoke$arity$2 = color_field24777__2;
return color_field24777;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field24777);

/**
* Creates a date input field.
*/
sablono.core.date_field24778 = (function() {
var date_field24778 = null;
var date_field24778__1 = (function (name__19218__auto__){
return date_field24778.call(null,name__19218__auto__,null);
});
var date_field24778__2 = (function (name__19218__auto__,value__19219__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__19218__auto__,value__19219__auto__);
});
date_field24778 = function(name__19218__auto__,value__19219__auto__){
switch(arguments.length){
case 1:
return date_field24778__1.call(this,name__19218__auto__);
case 2:
return date_field24778__2.call(this,name__19218__auto__,value__19219__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field24778.cljs$core$IFn$_invoke$arity$1 = date_field24778__1;
date_field24778.cljs$core$IFn$_invoke$arity$2 = date_field24778__2;
return date_field24778;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field24778);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field24779 = (function() {
var datetime_field24779 = null;
var datetime_field24779__1 = (function (name__19218__auto__){
return datetime_field24779.call(null,name__19218__auto__,null);
});
var datetime_field24779__2 = (function (name__19218__auto__,value__19219__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__19218__auto__,value__19219__auto__);
});
datetime_field24779 = function(name__19218__auto__,value__19219__auto__){
switch(arguments.length){
case 1:
return datetime_field24779__1.call(this,name__19218__auto__);
case 2:
return datetime_field24779__2.call(this,name__19218__auto__,value__19219__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field24779.cljs$core$IFn$_invoke$arity$1 = datetime_field24779__1;
datetime_field24779.cljs$core$IFn$_invoke$arity$2 = datetime_field24779__2;
return datetime_field24779;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field24779);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field24780 = (function() {
var datetime_local_field24780 = null;
var datetime_local_field24780__1 = (function (name__19218__auto__){
return datetime_local_field24780.call(null,name__19218__auto__,null);
});
var datetime_local_field24780__2 = (function (name__19218__auto__,value__19219__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__19218__auto__,value__19219__auto__);
});
datetime_local_field24780 = function(name__19218__auto__,value__19219__auto__){
switch(arguments.length){
case 1:
return datetime_local_field24780__1.call(this,name__19218__auto__);
case 2:
return datetime_local_field24780__2.call(this,name__19218__auto__,value__19219__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field24780.cljs$core$IFn$_invoke$arity$1 = datetime_local_field24780__1;
datetime_local_field24780.cljs$core$IFn$_invoke$arity$2 = datetime_local_field24780__2;
return datetime_local_field24780;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field24780);

/**
* Creates a email input field.
*/
sablono.core.email_field24781 = (function() {
var email_field24781 = null;
var email_field24781__1 = (function (name__19218__auto__){
return email_field24781.call(null,name__19218__auto__,null);
});
var email_field24781__2 = (function (name__19218__auto__,value__19219__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__19218__auto__,value__19219__auto__);
});
email_field24781 = function(name__19218__auto__,value__19219__auto__){
switch(arguments.length){
case 1:
return email_field24781__1.call(this,name__19218__auto__);
case 2:
return email_field24781__2.call(this,name__19218__auto__,value__19219__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field24781.cljs$core$IFn$_invoke$arity$1 = email_field24781__1;
email_field24781.cljs$core$IFn$_invoke$arity$2 = email_field24781__2;
return email_field24781;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field24781);

/**
* Creates a file input field.
*/
sablono.core.file_field24782 = (function() {
var file_field24782 = null;
var file_field24782__1 = (function (name__19218__auto__){
return file_field24782.call(null,name__19218__auto__,null);
});
var file_field24782__2 = (function (name__19218__auto__,value__19219__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__19218__auto__,value__19219__auto__);
});
file_field24782 = function(name__19218__auto__,value__19219__auto__){
switch(arguments.length){
case 1:
return file_field24782__1.call(this,name__19218__auto__);
case 2:
return file_field24782__2.call(this,name__19218__auto__,value__19219__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field24782.cljs$core$IFn$_invoke$arity$1 = file_field24782__1;
file_field24782.cljs$core$IFn$_invoke$arity$2 = file_field24782__2;
return file_field24782;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field24782);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field24783 = (function() {
var hidden_field24783 = null;
var hidden_field24783__1 = (function (name__19218__auto__){
return hidden_field24783.call(null,name__19218__auto__,null);
});
var hidden_field24783__2 = (function (name__19218__auto__,value__19219__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__19218__auto__,value__19219__auto__);
});
hidden_field24783 = function(name__19218__auto__,value__19219__auto__){
switch(arguments.length){
case 1:
return hidden_field24783__1.call(this,name__19218__auto__);
case 2:
return hidden_field24783__2.call(this,name__19218__auto__,value__19219__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field24783.cljs$core$IFn$_invoke$arity$1 = hidden_field24783__1;
hidden_field24783.cljs$core$IFn$_invoke$arity$2 = hidden_field24783__2;
return hidden_field24783;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field24783);

/**
* Creates a month input field.
*/
sablono.core.month_field24784 = (function() {
var month_field24784 = null;
var month_field24784__1 = (function (name__19218__auto__){
return month_field24784.call(null,name__19218__auto__,null);
});
var month_field24784__2 = (function (name__19218__auto__,value__19219__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__19218__auto__,value__19219__auto__);
});
month_field24784 = function(name__19218__auto__,value__19219__auto__){
switch(arguments.length){
case 1:
return month_field24784__1.call(this,name__19218__auto__);
case 2:
return month_field24784__2.call(this,name__19218__auto__,value__19219__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field24784.cljs$core$IFn$_invoke$arity$1 = month_field24784__1;
month_field24784.cljs$core$IFn$_invoke$arity$2 = month_field24784__2;
return month_field24784;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field24784);

/**
* Creates a number input field.
*/
sablono.core.number_field24785 = (function() {
var number_field24785 = null;
var number_field24785__1 = (function (name__19218__auto__){
return number_field24785.call(null,name__19218__auto__,null);
});
var number_field24785__2 = (function (name__19218__auto__,value__19219__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__19218__auto__,value__19219__auto__);
});
number_field24785 = function(name__19218__auto__,value__19219__auto__){
switch(arguments.length){
case 1:
return number_field24785__1.call(this,name__19218__auto__);
case 2:
return number_field24785__2.call(this,name__19218__auto__,value__19219__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field24785.cljs$core$IFn$_invoke$arity$1 = number_field24785__1;
number_field24785.cljs$core$IFn$_invoke$arity$2 = number_field24785__2;
return number_field24785;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field24785);

/**
* Creates a password input field.
*/
sablono.core.password_field24786 = (function() {
var password_field24786 = null;
var password_field24786__1 = (function (name__19218__auto__){
return password_field24786.call(null,name__19218__auto__,null);
});
var password_field24786__2 = (function (name__19218__auto__,value__19219__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__19218__auto__,value__19219__auto__);
});
password_field24786 = function(name__19218__auto__,value__19219__auto__){
switch(arguments.length){
case 1:
return password_field24786__1.call(this,name__19218__auto__);
case 2:
return password_field24786__2.call(this,name__19218__auto__,value__19219__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field24786.cljs$core$IFn$_invoke$arity$1 = password_field24786__1;
password_field24786.cljs$core$IFn$_invoke$arity$2 = password_field24786__2;
return password_field24786;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field24786);

/**
* Creates a range input field.
*/
sablono.core.range_field24787 = (function() {
var range_field24787 = null;
var range_field24787__1 = (function (name__19218__auto__){
return range_field24787.call(null,name__19218__auto__,null);
});
var range_field24787__2 = (function (name__19218__auto__,value__19219__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__19218__auto__,value__19219__auto__);
});
range_field24787 = function(name__19218__auto__,value__19219__auto__){
switch(arguments.length){
case 1:
return range_field24787__1.call(this,name__19218__auto__);
case 2:
return range_field24787__2.call(this,name__19218__auto__,value__19219__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field24787.cljs$core$IFn$_invoke$arity$1 = range_field24787__1;
range_field24787.cljs$core$IFn$_invoke$arity$2 = range_field24787__2;
return range_field24787;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field24787);

/**
* Creates a search input field.
*/
sablono.core.search_field24788 = (function() {
var search_field24788 = null;
var search_field24788__1 = (function (name__19218__auto__){
return search_field24788.call(null,name__19218__auto__,null);
});
var search_field24788__2 = (function (name__19218__auto__,value__19219__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__19218__auto__,value__19219__auto__);
});
search_field24788 = function(name__19218__auto__,value__19219__auto__){
switch(arguments.length){
case 1:
return search_field24788__1.call(this,name__19218__auto__);
case 2:
return search_field24788__2.call(this,name__19218__auto__,value__19219__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field24788.cljs$core$IFn$_invoke$arity$1 = search_field24788__1;
search_field24788.cljs$core$IFn$_invoke$arity$2 = search_field24788__2;
return search_field24788;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field24788);

/**
* Creates a tel input field.
*/
sablono.core.tel_field24789 = (function() {
var tel_field24789 = null;
var tel_field24789__1 = (function (name__19218__auto__){
return tel_field24789.call(null,name__19218__auto__,null);
});
var tel_field24789__2 = (function (name__19218__auto__,value__19219__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__19218__auto__,value__19219__auto__);
});
tel_field24789 = function(name__19218__auto__,value__19219__auto__){
switch(arguments.length){
case 1:
return tel_field24789__1.call(this,name__19218__auto__);
case 2:
return tel_field24789__2.call(this,name__19218__auto__,value__19219__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field24789.cljs$core$IFn$_invoke$arity$1 = tel_field24789__1;
tel_field24789.cljs$core$IFn$_invoke$arity$2 = tel_field24789__2;
return tel_field24789;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field24789);

/**
* Creates a text input field.
*/
sablono.core.text_field24790 = (function() {
var text_field24790 = null;
var text_field24790__1 = (function (name__19218__auto__){
return text_field24790.call(null,name__19218__auto__,null);
});
var text_field24790__2 = (function (name__19218__auto__,value__19219__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__19218__auto__,value__19219__auto__);
});
text_field24790 = function(name__19218__auto__,value__19219__auto__){
switch(arguments.length){
case 1:
return text_field24790__1.call(this,name__19218__auto__);
case 2:
return text_field24790__2.call(this,name__19218__auto__,value__19219__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field24790.cljs$core$IFn$_invoke$arity$1 = text_field24790__1;
text_field24790.cljs$core$IFn$_invoke$arity$2 = text_field24790__2;
return text_field24790;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field24790);

/**
* Creates a time input field.
*/
sablono.core.time_field24791 = (function() {
var time_field24791 = null;
var time_field24791__1 = (function (name__19218__auto__){
return time_field24791.call(null,name__19218__auto__,null);
});
var time_field24791__2 = (function (name__19218__auto__,value__19219__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__19218__auto__,value__19219__auto__);
});
time_field24791 = function(name__19218__auto__,value__19219__auto__){
switch(arguments.length){
case 1:
return time_field24791__1.call(this,name__19218__auto__);
case 2:
return time_field24791__2.call(this,name__19218__auto__,value__19219__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field24791.cljs$core$IFn$_invoke$arity$1 = time_field24791__1;
time_field24791.cljs$core$IFn$_invoke$arity$2 = time_field24791__2;
return time_field24791;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field24791);

/**
* Creates a url input field.
*/
sablono.core.url_field24792 = (function() {
var url_field24792 = null;
var url_field24792__1 = (function (name__19218__auto__){
return url_field24792.call(null,name__19218__auto__,null);
});
var url_field24792__2 = (function (name__19218__auto__,value__19219__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__19218__auto__,value__19219__auto__);
});
url_field24792 = function(name__19218__auto__,value__19219__auto__){
switch(arguments.length){
case 1:
return url_field24792__1.call(this,name__19218__auto__);
case 2:
return url_field24792__2.call(this,name__19218__auto__,value__19219__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field24792.cljs$core$IFn$_invoke$arity$1 = url_field24792__1;
url_field24792.cljs$core$IFn$_invoke$arity$2 = url_field24792__2;
return url_field24792;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field24792);

/**
* Creates a week input field.
*/
sablono.core.week_field24793 = (function() {
var week_field24793 = null;
var week_field24793__1 = (function (name__19218__auto__){
return week_field24793.call(null,name__19218__auto__,null);
});
var week_field24793__2 = (function (name__19218__auto__,value__19219__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__19218__auto__,value__19219__auto__);
});
week_field24793 = function(name__19218__auto__,value__19219__auto__){
switch(arguments.length){
case 1:
return week_field24793__1.call(this,name__19218__auto__);
case 2:
return week_field24793__2.call(this,name__19218__auto__,value__19219__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field24793.cljs$core$IFn$_invoke$arity$1 = week_field24793__1;
week_field24793.cljs$core$IFn$_invoke$arity$2 = week_field24793__2;
return week_field24793;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field24793);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box24794 = (function() {
var check_box24794 = null;
var check_box24794__1 = (function (name){
return check_box24794.call(null,name,null);
});
var check_box24794__2 = (function (name,checked_QMARK_){
return check_box24794.call(null,name,checked_QMARK_,"true");
});
var check_box24794__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box24794 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box24794__1.call(this,name);
case 2:
return check_box24794__2.call(this,name,checked_QMARK_);
case 3:
return check_box24794__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box24794.cljs$core$IFn$_invoke$arity$1 = check_box24794__1;
check_box24794.cljs$core$IFn$_invoke$arity$2 = check_box24794__2;
check_box24794.cljs$core$IFn$_invoke$arity$3 = check_box24794__3;
return check_box24794;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box24794);
/**
* Creates a radio button.
*/
sablono.core.radio_button24795 = (function() {
var radio_button24795 = null;
var radio_button24795__1 = (function (group){
return radio_button24795.call(null,group,null);
});
var radio_button24795__2 = (function (group,checked_QMARK_){
return radio_button24795.call(null,group,checked_QMARK_,"true");
});
var radio_button24795__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button24795 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button24795__1.call(this,group);
case 2:
return radio_button24795__2.call(this,group,checked_QMARK_);
case 3:
return radio_button24795__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button24795.cljs$core$IFn$_invoke$arity$1 = radio_button24795__1;
radio_button24795.cljs$core$IFn$_invoke$arity$2 = radio_button24795__2;
radio_button24795.cljs$core$IFn$_invoke$arity$3 = radio_button24795__3;
return radio_button24795;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button24795);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options24796 = (function() {
var select_options24796 = null;
var select_options24796__1 = (function (coll){
return select_options24796.call(null,coll,null);
});
var select_options24796__2 = (function (coll,selected){
var iter__13411__auto__ = (function iter__24805(s__24806){
return (new cljs.core.LazySeq(null,(function (){
var s__24806__$1 = s__24806;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__24806__$1);
if(temp__4388__auto__){
var s__24806__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24806__$2)){
var c__13409__auto__ = cljs.core.chunk_first.call(null,s__24806__$2);
var size__13410__auto__ = cljs.core.count.call(null,c__13409__auto__);
var b__24808 = cljs.core.chunk_buffer.call(null,size__13410__auto__);
if((function (){var i__24807 = (0);
while(true){
if((i__24807 < size__13410__auto__)){
var x = cljs.core._nth.call(null,c__13409__auto__,i__24807);
cljs.core.chunk_append.call(null,b__24808,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24811 = x;
var text = cljs.core.nth.call(null,vec__24811,(0),null);
var val = cljs.core.nth.call(null,vec__24811,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24811,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options24796.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__24813 = (i__24807 + (1));
i__24807 = G__24813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24808),iter__24805.call(null,cljs.core.chunk_rest.call(null,s__24806__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24808),null);
}
} else {
var x = cljs.core.first.call(null,s__24806__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24812 = x;
var text = cljs.core.nth.call(null,vec__24812,(0),null);
var val = cljs.core.nth.call(null,vec__24812,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24812,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options24796.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__24805.call(null,cljs.core.rest.call(null,s__24806__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13411__auto__.call(null,coll);
});
select_options24796 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options24796__1.call(this,coll);
case 2:
return select_options24796__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options24796.cljs$core$IFn$_invoke$arity$1 = select_options24796__1;
select_options24796.cljs$core$IFn$_invoke$arity$2 = select_options24796__2;
return select_options24796;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options24796);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down24814 = (function() {
var drop_down24814 = null;
var drop_down24814__2 = (function (name,options){
return drop_down24814.call(null,name,options,null);
});
var drop_down24814__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down24814 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down24814__2.call(this,name,options);
case 3:
return drop_down24814__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down24814.cljs$core$IFn$_invoke$arity$2 = drop_down24814__2;
drop_down24814.cljs$core$IFn$_invoke$arity$3 = drop_down24814__3;
return drop_down24814;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down24814);
/**
* Creates a text area element.
*/
sablono.core.text_area24815 = (function() {
var text_area24815 = null;
var text_area24815__1 = (function (name){
return text_area24815.call(null,name,null);
});
var text_area24815__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area24815 = function(name,value){
switch(arguments.length){
case 1:
return text_area24815__1.call(this,name);
case 2:
return text_area24815__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area24815.cljs$core$IFn$_invoke$arity$1 = text_area24815__1;
text_area24815.cljs$core$IFn$_invoke$arity$2 = text_area24815__2;
return text_area24815;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area24815);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label24816 = (function label24816(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label24816);
/**
* Creates a submit button.
*/
sablono.core.submit_button24817 = (function submit_button24817(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button24817);
/**
* Creates a form reset button.
*/
sablono.core.reset_button24818 = (function reset_button24818(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button24818);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to24819 = (function() { 
var form_to24819__delegate = function (p__24820,body){
var vec__24822 = p__24820;
var method = cljs.core.nth.call(null,vec__24822,(0),null);
var action = cljs.core.nth.call(null,vec__24822,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to24819 = function (p__24820,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to24819__delegate.call(this,p__24820,body);};
form_to24819.cljs$lang$maxFixedArity = 1;
form_to24819.cljs$lang$applyTo = (function (arglist__24823){
var p__24820 = cljs.core.first(arglist__24823);
var body = cljs.core.rest(arglist__24823);
return form_to24819__delegate(p__24820,body);
});
form_to24819.cljs$core$IFn$_invoke$arity$variadic = form_to24819__delegate;
return form_to24819;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to24819);

//# sourceMappingURL=core.js.map