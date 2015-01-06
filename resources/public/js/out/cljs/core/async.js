// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('cljs.core.async')) {
goog.provide('cljs.core.async');
}
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t21526 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21526 = (function (f,fn_handler,meta21527){
this.f = f;
this.fn_handler = fn_handler;
this.meta21527 = meta21527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21526.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t21526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t21526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21528){
var self__ = this;
var _21528__$1 = this;
return self__.meta21527;
});

cljs.core.async.t21526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21528,meta21527__$1){
var self__ = this;
var _21528__$1 = this;
return (new cljs.core.async.t21526(self__.f,self__.fn_handler,meta21527__$1));
});

cljs.core.async.t21526.cljs$lang$type = true;

cljs.core.async.t21526.cljs$lang$ctorStr = "cljs.core.async/t21526";

cljs.core.async.t21526.cljs$lang$ctorPrWriter = (function (this__13242__auto__,writer__13243__auto__,opt__13244__auto__){
return cljs.core._write.call(null,writer__13243__auto__,"cljs.core.async/t21526");
});

cljs.core.async.__GT_t21526 = (function __GT_t21526(f__$1,fn_handler__$1,meta21527){
return (new cljs.core.async.t21526(f__$1,fn_handler__$1,meta21527));
});

}

return (new cljs.core.async.t21526(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/we/Dropbox/projects/feeds/chestnut-feed/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__21530 = buff;
if(G__21530){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__21530.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__21530.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21530);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21530);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21531 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21531);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21531,ret){
return (function (){
return fn1.call(null,val_21531);
});})(val_21531,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4386__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4386__auto__)){
var ret = temp__4386__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4386__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4386__auto__)){
var retb = temp__4386__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4386__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4386__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__13542__auto___21532 = n;
var x_21533 = (0);
while(true){
if((x_21533 < n__13542__auto___21532)){
(a[x_21533] = (0));

var G__21534 = (x_21533 + (1));
x_21533 = G__21534;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21535 = (i + (1));
i = G__21535;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t21539 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21539 = (function (flag,alt_flag,meta21540){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21540 = meta21540;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21539.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21539.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t21539.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t21539.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21541){
var self__ = this;
var _21541__$1 = this;
return self__.meta21540;
});})(flag))
;

cljs.core.async.t21539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21541,meta21540__$1){
var self__ = this;
var _21541__$1 = this;
return (new cljs.core.async.t21539(self__.flag,self__.alt_flag,meta21540__$1));
});})(flag))
;

cljs.core.async.t21539.cljs$lang$type = true;

cljs.core.async.t21539.cljs$lang$ctorStr = "cljs.core.async/t21539";

cljs.core.async.t21539.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13242__auto__,writer__13243__auto__,opt__13244__auto__){
return cljs.core._write.call(null,writer__13243__auto__,"cljs.core.async/t21539");
});})(flag))
;

cljs.core.async.__GT_t21539 = ((function (flag){
return (function __GT_t21539(flag__$1,alt_flag__$1,meta21540){
return (new cljs.core.async.t21539(flag__$1,alt_flag__$1,meta21540));
});})(flag))
;

}

return (new cljs.core.async.t21539(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/we/Dropbox/projects/feeds/chestnut-feed/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t21545 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21545 = (function (cb,flag,alt_handler,meta21546){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21546 = meta21546;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21545.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t21545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t21545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21547){
var self__ = this;
var _21547__$1 = this;
return self__.meta21546;
});

cljs.core.async.t21545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21547,meta21546__$1){
var self__ = this;
var _21547__$1 = this;
return (new cljs.core.async.t21545(self__.cb,self__.flag,self__.alt_handler,meta21546__$1));
});

cljs.core.async.t21545.cljs$lang$type = true;

cljs.core.async.t21545.cljs$lang$ctorStr = "cljs.core.async/t21545";

cljs.core.async.t21545.cljs$lang$ctorPrWriter = (function (this__13242__auto__,writer__13243__auto__,opt__13244__auto__){
return cljs.core._write.call(null,writer__13243__auto__,"cljs.core.async/t21545");
});

cljs.core.async.__GT_t21545 = (function __GT_t21545(cb__$1,flag__$1,alt_handler__$1,meta21546){
return (new cljs.core.async.t21545(cb__$1,flag__$1,alt_handler__$1,meta21546));
});

}

return (new cljs.core.async.t21545(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/we/Dropbox/projects/feeds/chestnut-feed/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21548_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21548_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21549_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21549_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12655__auto__ = wport;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21550 = (i + (1));
i = G__21550;
continue;
}
} else {
return null;
}
break;
}
})();
var or__12655__auto__ = ret;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4388__auto__ = (function (){var and__12643__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__12643__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__12643__auto__;
}
})();
if(cljs.core.truth_(temp__4388__auto__)){
var got = temp__4388__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__21551){
var map__21553 = p__21551;
var map__21553__$1 = ((cljs.core.seq_QMARK_.call(null,map__21553))?cljs.core.apply.call(null,cljs.core.hash_map,map__21553):map__21553);
var opts = map__21553__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__21551 = null;
if (arguments.length > 1) {
  p__21551 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__21551);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21554){
var ports = cljs.core.first(arglist__21554);
var p__21551 = cljs.core.rest(arglist__21554);
return alts_BANG___delegate(ports,p__21551);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__15884__auto___21649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto___21649){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto___21649){
return (function (state_21625){
var state_val_21626 = (state_21625[(1)]);
if((state_val_21626 === (7))){
var inst_21621 = (state_21625[(2)]);
var state_21625__$1 = state_21625;
var statearr_21627_21650 = state_21625__$1;
(statearr_21627_21650[(2)] = inst_21621);

(statearr_21627_21650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (1))){
var state_21625__$1 = state_21625;
var statearr_21628_21651 = state_21625__$1;
(statearr_21628_21651[(2)] = null);

(statearr_21628_21651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (4))){
var inst_21604 = (state_21625[(7)]);
var inst_21604__$1 = (state_21625[(2)]);
var inst_21605 = (inst_21604__$1 == null);
var state_21625__$1 = (function (){var statearr_21629 = state_21625;
(statearr_21629[(7)] = inst_21604__$1);

return statearr_21629;
})();
if(cljs.core.truth_(inst_21605)){
var statearr_21630_21652 = state_21625__$1;
(statearr_21630_21652[(1)] = (5));

} else {
var statearr_21631_21653 = state_21625__$1;
(statearr_21631_21653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (13))){
var state_21625__$1 = state_21625;
var statearr_21632_21654 = state_21625__$1;
(statearr_21632_21654[(2)] = null);

(statearr_21632_21654[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (6))){
var inst_21604 = (state_21625[(7)]);
var state_21625__$1 = state_21625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21625__$1,(11),to,inst_21604);
} else {
if((state_val_21626 === (3))){
var inst_21623 = (state_21625[(2)]);
var state_21625__$1 = state_21625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21625__$1,inst_21623);
} else {
if((state_val_21626 === (12))){
var state_21625__$1 = state_21625;
var statearr_21633_21655 = state_21625__$1;
(statearr_21633_21655[(2)] = null);

(statearr_21633_21655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (2))){
var state_21625__$1 = state_21625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21625__$1,(4),from);
} else {
if((state_val_21626 === (11))){
var inst_21614 = (state_21625[(2)]);
var state_21625__$1 = state_21625;
if(cljs.core.truth_(inst_21614)){
var statearr_21634_21656 = state_21625__$1;
(statearr_21634_21656[(1)] = (12));

} else {
var statearr_21635_21657 = state_21625__$1;
(statearr_21635_21657[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (9))){
var state_21625__$1 = state_21625;
var statearr_21636_21658 = state_21625__$1;
(statearr_21636_21658[(2)] = null);

(statearr_21636_21658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (5))){
var state_21625__$1 = state_21625;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21637_21659 = state_21625__$1;
(statearr_21637_21659[(1)] = (8));

} else {
var statearr_21638_21660 = state_21625__$1;
(statearr_21638_21660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (14))){
var inst_21619 = (state_21625[(2)]);
var state_21625__$1 = state_21625;
var statearr_21639_21661 = state_21625__$1;
(statearr_21639_21661[(2)] = inst_21619);

(statearr_21639_21661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (10))){
var inst_21611 = (state_21625[(2)]);
var state_21625__$1 = state_21625;
var statearr_21640_21662 = state_21625__$1;
(statearr_21640_21662[(2)] = inst_21611);

(statearr_21640_21662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21626 === (8))){
var inst_21608 = cljs.core.async.close_BANG_.call(null,to);
var state_21625__$1 = state_21625;
var statearr_21641_21663 = state_21625__$1;
(statearr_21641_21663[(2)] = inst_21608);

(statearr_21641_21663[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__15884__auto___21649))
;
return ((function (switch__15828__auto__,c__15884__auto___21649){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_21645 = [null,null,null,null,null,null,null,null];
(statearr_21645[(0)] = state_machine__15829__auto__);

(statearr_21645[(1)] = (1));

return statearr_21645;
});
var state_machine__15829__auto____1 = (function (state_21625){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_21625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e21646){if((e21646 instanceof Object)){
var ex__15832__auto__ = e21646;
var statearr_21647_21664 = state_21625;
(statearr_21647_21664[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21665 = state_21625;
state_21625 = G__21665;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_21625){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_21625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto___21649))
})();
var state__15886__auto__ = (function (){var statearr_21648 = f__15885__auto__.call(null);
(statearr_21648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto___21649);

return statearr_21648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto___21649))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21849){
var vec__21850 = p__21849;
var v = cljs.core.nth.call(null,vec__21850,(0),null);
var p = cljs.core.nth.call(null,vec__21850,(1),null);
var job = vec__21850;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15884__auto___22032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto___22032,res,vec__21850,v,p,job,jobs,results){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto___22032,res,vec__21850,v,p,job,jobs,results){
return (function (state_21855){
var state_val_21856 = (state_21855[(1)]);
if((state_val_21856 === (2))){
var inst_21852 = (state_21855[(2)]);
var inst_21853 = cljs.core.async.close_BANG_.call(null,res);
var state_21855__$1 = (function (){var statearr_21857 = state_21855;
(statearr_21857[(7)] = inst_21852);

return statearr_21857;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21855__$1,inst_21853);
} else {
if((state_val_21856 === (1))){
var state_21855__$1 = state_21855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21855__$1,(2),res,v);
} else {
return null;
}
}
});})(c__15884__auto___22032,res,vec__21850,v,p,job,jobs,results))
;
return ((function (switch__15828__auto__,c__15884__auto___22032,res,vec__21850,v,p,job,jobs,results){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_21861 = [null,null,null,null,null,null,null,null];
(statearr_21861[(0)] = state_machine__15829__auto__);

(statearr_21861[(1)] = (1));

return statearr_21861;
});
var state_machine__15829__auto____1 = (function (state_21855){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_21855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e21862){if((e21862 instanceof Object)){
var ex__15832__auto__ = e21862;
var statearr_21863_22033 = state_21855;
(statearr_21863_22033[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22034 = state_21855;
state_21855 = G__22034;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_21855){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_21855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto___22032,res,vec__21850,v,p,job,jobs,results))
})();
var state__15886__auto__ = (function (){var statearr_21864 = f__15885__auto__.call(null);
(statearr_21864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto___22032);

return statearr_21864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto___22032,res,vec__21850,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21865){
var vec__21866 = p__21865;
var v = cljs.core.nth.call(null,vec__21866,(0),null);
var p = cljs.core.nth.call(null,vec__21866,(1),null);
var job = vec__21866;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__13542__auto___22035 = n;
var __22036 = (0);
while(true){
if((__22036 < n__13542__auto___22035)){
var G__21867_22037 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21867_22037) {
case "async":
var c__15884__auto___22039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22036,c__15884__auto___22039,G__21867_22037,n__13542__auto___22035,jobs,results,process,async){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (__22036,c__15884__auto___22039,G__21867_22037,n__13542__auto___22035,jobs,results,process,async){
return (function (state_21880){
var state_val_21881 = (state_21880[(1)]);
if((state_val_21881 === (7))){
var inst_21876 = (state_21880[(2)]);
var state_21880__$1 = state_21880;
var statearr_21882_22040 = state_21880__$1;
(statearr_21882_22040[(2)] = inst_21876);

(statearr_21882_22040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21881 === (6))){
var state_21880__$1 = state_21880;
var statearr_21883_22041 = state_21880__$1;
(statearr_21883_22041[(2)] = null);

(statearr_21883_22041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21881 === (5))){
var state_21880__$1 = state_21880;
var statearr_21884_22042 = state_21880__$1;
(statearr_21884_22042[(2)] = null);

(statearr_21884_22042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21881 === (4))){
var inst_21870 = (state_21880[(2)]);
var inst_21871 = async.call(null,inst_21870);
var state_21880__$1 = state_21880;
if(cljs.core.truth_(inst_21871)){
var statearr_21885_22043 = state_21880__$1;
(statearr_21885_22043[(1)] = (5));

} else {
var statearr_21886_22044 = state_21880__$1;
(statearr_21886_22044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21881 === (3))){
var inst_21878 = (state_21880[(2)]);
var state_21880__$1 = state_21880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21880__$1,inst_21878);
} else {
if((state_val_21881 === (2))){
var state_21880__$1 = state_21880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21880__$1,(4),jobs);
} else {
if((state_val_21881 === (1))){
var state_21880__$1 = state_21880;
var statearr_21887_22045 = state_21880__$1;
(statearr_21887_22045[(2)] = null);

(statearr_21887_22045[(1)] = (2));


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
});})(__22036,c__15884__auto___22039,G__21867_22037,n__13542__auto___22035,jobs,results,process,async))
;
return ((function (__22036,switch__15828__auto__,c__15884__auto___22039,G__21867_22037,n__13542__auto___22035,jobs,results,process,async){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_21891 = [null,null,null,null,null,null,null];
(statearr_21891[(0)] = state_machine__15829__auto__);

(statearr_21891[(1)] = (1));

return statearr_21891;
});
var state_machine__15829__auto____1 = (function (state_21880){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_21880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e21892){if((e21892 instanceof Object)){
var ex__15832__auto__ = e21892;
var statearr_21893_22046 = state_21880;
(statearr_21893_22046[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22047 = state_21880;
state_21880 = G__22047;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_21880){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_21880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(__22036,switch__15828__auto__,c__15884__auto___22039,G__21867_22037,n__13542__auto___22035,jobs,results,process,async))
})();
var state__15886__auto__ = (function (){var statearr_21894 = f__15885__auto__.call(null);
(statearr_21894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto___22039);

return statearr_21894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(__22036,c__15884__auto___22039,G__21867_22037,n__13542__auto___22035,jobs,results,process,async))
);


break;
case "compute":
var c__15884__auto___22048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22036,c__15884__auto___22048,G__21867_22037,n__13542__auto___22035,jobs,results,process,async){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (__22036,c__15884__auto___22048,G__21867_22037,n__13542__auto___22035,jobs,results,process,async){
return (function (state_21907){
var state_val_21908 = (state_21907[(1)]);
if((state_val_21908 === (7))){
var inst_21903 = (state_21907[(2)]);
var state_21907__$1 = state_21907;
var statearr_21909_22049 = state_21907__$1;
(statearr_21909_22049[(2)] = inst_21903);

(statearr_21909_22049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21908 === (6))){
var state_21907__$1 = state_21907;
var statearr_21910_22050 = state_21907__$1;
(statearr_21910_22050[(2)] = null);

(statearr_21910_22050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21908 === (5))){
var state_21907__$1 = state_21907;
var statearr_21911_22051 = state_21907__$1;
(statearr_21911_22051[(2)] = null);

(statearr_21911_22051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21908 === (4))){
var inst_21897 = (state_21907[(2)]);
var inst_21898 = process.call(null,inst_21897);
var state_21907__$1 = state_21907;
if(cljs.core.truth_(inst_21898)){
var statearr_21912_22052 = state_21907__$1;
(statearr_21912_22052[(1)] = (5));

} else {
var statearr_21913_22053 = state_21907__$1;
(statearr_21913_22053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21908 === (3))){
var inst_21905 = (state_21907[(2)]);
var state_21907__$1 = state_21907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21907__$1,inst_21905);
} else {
if((state_val_21908 === (2))){
var state_21907__$1 = state_21907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21907__$1,(4),jobs);
} else {
if((state_val_21908 === (1))){
var state_21907__$1 = state_21907;
var statearr_21914_22054 = state_21907__$1;
(statearr_21914_22054[(2)] = null);

(statearr_21914_22054[(1)] = (2));


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
});})(__22036,c__15884__auto___22048,G__21867_22037,n__13542__auto___22035,jobs,results,process,async))
;
return ((function (__22036,switch__15828__auto__,c__15884__auto___22048,G__21867_22037,n__13542__auto___22035,jobs,results,process,async){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_21918 = [null,null,null,null,null,null,null];
(statearr_21918[(0)] = state_machine__15829__auto__);

(statearr_21918[(1)] = (1));

return statearr_21918;
});
var state_machine__15829__auto____1 = (function (state_21907){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_21907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e21919){if((e21919 instanceof Object)){
var ex__15832__auto__ = e21919;
var statearr_21920_22055 = state_21907;
(statearr_21920_22055[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22056 = state_21907;
state_21907 = G__22056;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_21907){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_21907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(__22036,switch__15828__auto__,c__15884__auto___22048,G__21867_22037,n__13542__auto___22035,jobs,results,process,async))
})();
var state__15886__auto__ = (function (){var statearr_21921 = f__15885__auto__.call(null);
(statearr_21921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto___22048);

return statearr_21921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(__22036,c__15884__auto___22048,G__21867_22037,n__13542__auto___22035,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22057 = (__22036 + (1));
__22036 = G__22057;
continue;
} else {
}
break;
}

var c__15884__auto___22058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto___22058,jobs,results,process,async){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto___22058,jobs,results,process,async){
return (function (state_21943){
var state_val_21944 = (state_21943[(1)]);
if((state_val_21944 === (9))){
var inst_21936 = (state_21943[(2)]);
var state_21943__$1 = (function (){var statearr_21945 = state_21943;
(statearr_21945[(7)] = inst_21936);

return statearr_21945;
})();
var statearr_21946_22059 = state_21943__$1;
(statearr_21946_22059[(2)] = null);

(statearr_21946_22059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21944 === (8))){
var inst_21929 = (state_21943[(8)]);
var inst_21934 = (state_21943[(2)]);
var state_21943__$1 = (function (){var statearr_21947 = state_21943;
(statearr_21947[(9)] = inst_21934);

return statearr_21947;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21943__$1,(9),results,inst_21929);
} else {
if((state_val_21944 === (7))){
var inst_21939 = (state_21943[(2)]);
var state_21943__$1 = state_21943;
var statearr_21948_22060 = state_21943__$1;
(statearr_21948_22060[(2)] = inst_21939);

(statearr_21948_22060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21944 === (6))){
var inst_21924 = (state_21943[(10)]);
var inst_21929 = (state_21943[(8)]);
var inst_21929__$1 = cljs.core.async.chan.call(null,(1));
var inst_21930 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21931 = [inst_21924,inst_21929__$1];
var inst_21932 = (new cljs.core.PersistentVector(null,2,(5),inst_21930,inst_21931,null));
var state_21943__$1 = (function (){var statearr_21949 = state_21943;
(statearr_21949[(8)] = inst_21929__$1);

return statearr_21949;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21943__$1,(8),jobs,inst_21932);
} else {
if((state_val_21944 === (5))){
var inst_21927 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21943__$1 = state_21943;
var statearr_21950_22061 = state_21943__$1;
(statearr_21950_22061[(2)] = inst_21927);

(statearr_21950_22061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21944 === (4))){
var inst_21924 = (state_21943[(10)]);
var inst_21924__$1 = (state_21943[(2)]);
var inst_21925 = (inst_21924__$1 == null);
var state_21943__$1 = (function (){var statearr_21951 = state_21943;
(statearr_21951[(10)] = inst_21924__$1);

return statearr_21951;
})();
if(cljs.core.truth_(inst_21925)){
var statearr_21952_22062 = state_21943__$1;
(statearr_21952_22062[(1)] = (5));

} else {
var statearr_21953_22063 = state_21943__$1;
(statearr_21953_22063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21944 === (3))){
var inst_21941 = (state_21943[(2)]);
var state_21943__$1 = state_21943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21943__$1,inst_21941);
} else {
if((state_val_21944 === (2))){
var state_21943__$1 = state_21943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21943__$1,(4),from);
} else {
if((state_val_21944 === (1))){
var state_21943__$1 = state_21943;
var statearr_21954_22064 = state_21943__$1;
(statearr_21954_22064[(2)] = null);

(statearr_21954_22064[(1)] = (2));


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
}
}
});})(c__15884__auto___22058,jobs,results,process,async))
;
return ((function (switch__15828__auto__,c__15884__auto___22058,jobs,results,process,async){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_21958 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21958[(0)] = state_machine__15829__auto__);

(statearr_21958[(1)] = (1));

return statearr_21958;
});
var state_machine__15829__auto____1 = (function (state_21943){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_21943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e21959){if((e21959 instanceof Object)){
var ex__15832__auto__ = e21959;
var statearr_21960_22065 = state_21943;
(statearr_21960_22065[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22066 = state_21943;
state_21943 = G__22066;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_21943){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_21943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto___22058,jobs,results,process,async))
})();
var state__15886__auto__ = (function (){var statearr_21961 = f__15885__auto__.call(null);
(statearr_21961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto___22058);

return statearr_21961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto___22058,jobs,results,process,async))
);


var c__15884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto__,jobs,results,process,async){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto__,jobs,results,process,async){
return (function (state_21999){
var state_val_22000 = (state_21999[(1)]);
if((state_val_22000 === (7))){
var inst_21995 = (state_21999[(2)]);
var state_21999__$1 = state_21999;
var statearr_22001_22067 = state_21999__$1;
(statearr_22001_22067[(2)] = inst_21995);

(statearr_22001_22067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22000 === (20))){
var state_21999__$1 = state_21999;
var statearr_22002_22068 = state_21999__$1;
(statearr_22002_22068[(2)] = null);

(statearr_22002_22068[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22000 === (1))){
var state_21999__$1 = state_21999;
var statearr_22003_22069 = state_21999__$1;
(statearr_22003_22069[(2)] = null);

(statearr_22003_22069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22000 === (4))){
var inst_21964 = (state_21999[(7)]);
var inst_21964__$1 = (state_21999[(2)]);
var inst_21965 = (inst_21964__$1 == null);
var state_21999__$1 = (function (){var statearr_22004 = state_21999;
(statearr_22004[(7)] = inst_21964__$1);

return statearr_22004;
})();
if(cljs.core.truth_(inst_21965)){
var statearr_22005_22070 = state_21999__$1;
(statearr_22005_22070[(1)] = (5));

} else {
var statearr_22006_22071 = state_21999__$1;
(statearr_22006_22071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22000 === (15))){
var inst_21977 = (state_21999[(8)]);
var state_21999__$1 = state_21999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21999__$1,(18),to,inst_21977);
} else {
if((state_val_22000 === (21))){
var inst_21990 = (state_21999[(2)]);
var state_21999__$1 = state_21999;
var statearr_22007_22072 = state_21999__$1;
(statearr_22007_22072[(2)] = inst_21990);

(statearr_22007_22072[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22000 === (13))){
var inst_21992 = (state_21999[(2)]);
var state_21999__$1 = (function (){var statearr_22008 = state_21999;
(statearr_22008[(9)] = inst_21992);

return statearr_22008;
})();
var statearr_22009_22073 = state_21999__$1;
(statearr_22009_22073[(2)] = null);

(statearr_22009_22073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22000 === (6))){
var inst_21964 = (state_21999[(7)]);
var state_21999__$1 = state_21999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21999__$1,(11),inst_21964);
} else {
if((state_val_22000 === (17))){
var inst_21985 = (state_21999[(2)]);
var state_21999__$1 = state_21999;
if(cljs.core.truth_(inst_21985)){
var statearr_22010_22074 = state_21999__$1;
(statearr_22010_22074[(1)] = (19));

} else {
var statearr_22011_22075 = state_21999__$1;
(statearr_22011_22075[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22000 === (3))){
var inst_21997 = (state_21999[(2)]);
var state_21999__$1 = state_21999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21999__$1,inst_21997);
} else {
if((state_val_22000 === (12))){
var inst_21974 = (state_21999[(10)]);
var state_21999__$1 = state_21999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21999__$1,(14),inst_21974);
} else {
if((state_val_22000 === (2))){
var state_21999__$1 = state_21999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21999__$1,(4),results);
} else {
if((state_val_22000 === (19))){
var state_21999__$1 = state_21999;
var statearr_22012_22076 = state_21999__$1;
(statearr_22012_22076[(2)] = null);

(statearr_22012_22076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22000 === (11))){
var inst_21974 = (state_21999[(2)]);
var state_21999__$1 = (function (){var statearr_22013 = state_21999;
(statearr_22013[(10)] = inst_21974);

return statearr_22013;
})();
var statearr_22014_22077 = state_21999__$1;
(statearr_22014_22077[(2)] = null);

(statearr_22014_22077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22000 === (9))){
var state_21999__$1 = state_21999;
var statearr_22015_22078 = state_21999__$1;
(statearr_22015_22078[(2)] = null);

(statearr_22015_22078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22000 === (5))){
var state_21999__$1 = state_21999;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22016_22079 = state_21999__$1;
(statearr_22016_22079[(1)] = (8));

} else {
var statearr_22017_22080 = state_21999__$1;
(statearr_22017_22080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22000 === (14))){
var inst_21979 = (state_21999[(11)]);
var inst_21977 = (state_21999[(8)]);
var inst_21977__$1 = (state_21999[(2)]);
var inst_21978 = (inst_21977__$1 == null);
var inst_21979__$1 = cljs.core.not.call(null,inst_21978);
var state_21999__$1 = (function (){var statearr_22018 = state_21999;
(statearr_22018[(11)] = inst_21979__$1);

(statearr_22018[(8)] = inst_21977__$1);

return statearr_22018;
})();
if(inst_21979__$1){
var statearr_22019_22081 = state_21999__$1;
(statearr_22019_22081[(1)] = (15));

} else {
var statearr_22020_22082 = state_21999__$1;
(statearr_22020_22082[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22000 === (16))){
var inst_21979 = (state_21999[(11)]);
var state_21999__$1 = state_21999;
var statearr_22021_22083 = state_21999__$1;
(statearr_22021_22083[(2)] = inst_21979);

(statearr_22021_22083[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22000 === (10))){
var inst_21971 = (state_21999[(2)]);
var state_21999__$1 = state_21999;
var statearr_22022_22084 = state_21999__$1;
(statearr_22022_22084[(2)] = inst_21971);

(statearr_22022_22084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22000 === (18))){
var inst_21982 = (state_21999[(2)]);
var state_21999__$1 = state_21999;
var statearr_22023_22085 = state_21999__$1;
(statearr_22023_22085[(2)] = inst_21982);

(statearr_22023_22085[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22000 === (8))){
var inst_21968 = cljs.core.async.close_BANG_.call(null,to);
var state_21999__$1 = state_21999;
var statearr_22024_22086 = state_21999__$1;
(statearr_22024_22086[(2)] = inst_21968);

(statearr_22024_22086[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15884__auto__,jobs,results,process,async))
;
return ((function (switch__15828__auto__,c__15884__auto__,jobs,results,process,async){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_22028 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22028[(0)] = state_machine__15829__auto__);

(statearr_22028[(1)] = (1));

return statearr_22028;
});
var state_machine__15829__auto____1 = (function (state_21999){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_21999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e22029){if((e22029 instanceof Object)){
var ex__15832__auto__ = e22029;
var statearr_22030_22087 = state_21999;
(statearr_22030_22087[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22088 = state_21999;
state_21999 = G__22088;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_21999){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_21999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto__,jobs,results,process,async))
})();
var state__15886__auto__ = (function (){var statearr_22031 = f__15885__auto__.call(null);
(statearr_22031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto__);

return statearr_22031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto__,jobs,results,process,async))
);

return c__15884__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15884__auto___22189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto___22189,tc,fc){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto___22189,tc,fc){
return (function (state_22164){
var state_val_22165 = (state_22164[(1)]);
if((state_val_22165 === (7))){
var inst_22160 = (state_22164[(2)]);
var state_22164__$1 = state_22164;
var statearr_22166_22190 = state_22164__$1;
(statearr_22166_22190[(2)] = inst_22160);

(statearr_22166_22190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22165 === (1))){
var state_22164__$1 = state_22164;
var statearr_22167_22191 = state_22164__$1;
(statearr_22167_22191[(2)] = null);

(statearr_22167_22191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22165 === (4))){
var inst_22141 = (state_22164[(7)]);
var inst_22141__$1 = (state_22164[(2)]);
var inst_22142 = (inst_22141__$1 == null);
var state_22164__$1 = (function (){var statearr_22168 = state_22164;
(statearr_22168[(7)] = inst_22141__$1);

return statearr_22168;
})();
if(cljs.core.truth_(inst_22142)){
var statearr_22169_22192 = state_22164__$1;
(statearr_22169_22192[(1)] = (5));

} else {
var statearr_22170_22193 = state_22164__$1;
(statearr_22170_22193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22165 === (13))){
var state_22164__$1 = state_22164;
var statearr_22171_22194 = state_22164__$1;
(statearr_22171_22194[(2)] = null);

(statearr_22171_22194[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22165 === (6))){
var inst_22141 = (state_22164[(7)]);
var inst_22147 = p.call(null,inst_22141);
var state_22164__$1 = state_22164;
if(cljs.core.truth_(inst_22147)){
var statearr_22172_22195 = state_22164__$1;
(statearr_22172_22195[(1)] = (9));

} else {
var statearr_22173_22196 = state_22164__$1;
(statearr_22173_22196[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22165 === (3))){
var inst_22162 = (state_22164[(2)]);
var state_22164__$1 = state_22164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22164__$1,inst_22162);
} else {
if((state_val_22165 === (12))){
var state_22164__$1 = state_22164;
var statearr_22174_22197 = state_22164__$1;
(statearr_22174_22197[(2)] = null);

(statearr_22174_22197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22165 === (2))){
var state_22164__$1 = state_22164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22164__$1,(4),ch);
} else {
if((state_val_22165 === (11))){
var inst_22141 = (state_22164[(7)]);
var inst_22151 = (state_22164[(2)]);
var state_22164__$1 = state_22164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22164__$1,(8),inst_22151,inst_22141);
} else {
if((state_val_22165 === (9))){
var state_22164__$1 = state_22164;
var statearr_22175_22198 = state_22164__$1;
(statearr_22175_22198[(2)] = tc);

(statearr_22175_22198[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22165 === (5))){
var inst_22144 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22145 = cljs.core.async.close_BANG_.call(null,fc);
var state_22164__$1 = (function (){var statearr_22176 = state_22164;
(statearr_22176[(8)] = inst_22144);

return statearr_22176;
})();
var statearr_22177_22199 = state_22164__$1;
(statearr_22177_22199[(2)] = inst_22145);

(statearr_22177_22199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22165 === (14))){
var inst_22158 = (state_22164[(2)]);
var state_22164__$1 = state_22164;
var statearr_22178_22200 = state_22164__$1;
(statearr_22178_22200[(2)] = inst_22158);

(statearr_22178_22200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22165 === (10))){
var state_22164__$1 = state_22164;
var statearr_22179_22201 = state_22164__$1;
(statearr_22179_22201[(2)] = fc);

(statearr_22179_22201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22165 === (8))){
var inst_22153 = (state_22164[(2)]);
var state_22164__$1 = state_22164;
if(cljs.core.truth_(inst_22153)){
var statearr_22180_22202 = state_22164__$1;
(statearr_22180_22202[(1)] = (12));

} else {
var statearr_22181_22203 = state_22164__$1;
(statearr_22181_22203[(1)] = (13));

}

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
}
}
}
}
}
}
}
});})(c__15884__auto___22189,tc,fc))
;
return ((function (switch__15828__auto__,c__15884__auto___22189,tc,fc){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_22185 = [null,null,null,null,null,null,null,null,null];
(statearr_22185[(0)] = state_machine__15829__auto__);

(statearr_22185[(1)] = (1));

return statearr_22185;
});
var state_machine__15829__auto____1 = (function (state_22164){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_22164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e22186){if((e22186 instanceof Object)){
var ex__15832__auto__ = e22186;
var statearr_22187_22204 = state_22164;
(statearr_22187_22204[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22205 = state_22164;
state_22164 = G__22205;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_22164){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_22164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto___22189,tc,fc))
})();
var state__15886__auto__ = (function (){var statearr_22188 = f__15885__auto__.call(null);
(statearr_22188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto___22189);

return statearr_22188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto___22189,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__15884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto__){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto__){
return (function (state_22252){
var state_val_22253 = (state_22252[(1)]);
if((state_val_22253 === (7))){
var inst_22248 = (state_22252[(2)]);
var state_22252__$1 = state_22252;
var statearr_22254_22270 = state_22252__$1;
(statearr_22254_22270[(2)] = inst_22248);

(statearr_22254_22270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (6))){
var inst_22238 = (state_22252[(7)]);
var inst_22241 = (state_22252[(8)]);
var inst_22245 = f.call(null,inst_22238,inst_22241);
var inst_22238__$1 = inst_22245;
var state_22252__$1 = (function (){var statearr_22255 = state_22252;
(statearr_22255[(7)] = inst_22238__$1);

return statearr_22255;
})();
var statearr_22256_22271 = state_22252__$1;
(statearr_22256_22271[(2)] = null);

(statearr_22256_22271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (5))){
var inst_22238 = (state_22252[(7)]);
var state_22252__$1 = state_22252;
var statearr_22257_22272 = state_22252__$1;
(statearr_22257_22272[(2)] = inst_22238);

(statearr_22257_22272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (4))){
var inst_22241 = (state_22252[(8)]);
var inst_22241__$1 = (state_22252[(2)]);
var inst_22242 = (inst_22241__$1 == null);
var state_22252__$1 = (function (){var statearr_22258 = state_22252;
(statearr_22258[(8)] = inst_22241__$1);

return statearr_22258;
})();
if(cljs.core.truth_(inst_22242)){
var statearr_22259_22273 = state_22252__$1;
(statearr_22259_22273[(1)] = (5));

} else {
var statearr_22260_22274 = state_22252__$1;
(statearr_22260_22274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22253 === (3))){
var inst_22250 = (state_22252[(2)]);
var state_22252__$1 = state_22252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22252__$1,inst_22250);
} else {
if((state_val_22253 === (2))){
var state_22252__$1 = state_22252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22252__$1,(4),ch);
} else {
if((state_val_22253 === (1))){
var inst_22238 = init;
var state_22252__$1 = (function (){var statearr_22261 = state_22252;
(statearr_22261[(7)] = inst_22238);

return statearr_22261;
})();
var statearr_22262_22275 = state_22252__$1;
(statearr_22262_22275[(2)] = null);

(statearr_22262_22275[(1)] = (2));


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
});})(c__15884__auto__))
;
return ((function (switch__15828__auto__,c__15884__auto__){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_22266 = [null,null,null,null,null,null,null,null,null];
(statearr_22266[(0)] = state_machine__15829__auto__);

(statearr_22266[(1)] = (1));

return statearr_22266;
});
var state_machine__15829__auto____1 = (function (state_22252){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_22252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e22267){if((e22267 instanceof Object)){
var ex__15832__auto__ = e22267;
var statearr_22268_22276 = state_22252;
(statearr_22268_22276[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22277 = state_22252;
state_22252 = G__22277;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_22252){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_22252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto__))
})();
var state__15886__auto__ = (function (){var statearr_22269 = f__15885__auto__.call(null);
(statearr_22269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto__);

return statearr_22269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto__))
);

return c__15884__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__15884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto__){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto__){
return (function (state_22351){
var state_val_22352 = (state_22351[(1)]);
if((state_val_22352 === (7))){
var inst_22333 = (state_22351[(2)]);
var state_22351__$1 = state_22351;
var statearr_22353_22376 = state_22351__$1;
(statearr_22353_22376[(2)] = inst_22333);

(statearr_22353_22376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (1))){
var inst_22327 = cljs.core.seq.call(null,coll);
var inst_22328 = inst_22327;
var state_22351__$1 = (function (){var statearr_22354 = state_22351;
(statearr_22354[(7)] = inst_22328);

return statearr_22354;
})();
var statearr_22355_22377 = state_22351__$1;
(statearr_22355_22377[(2)] = null);

(statearr_22355_22377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (4))){
var inst_22328 = (state_22351[(7)]);
var inst_22331 = cljs.core.first.call(null,inst_22328);
var state_22351__$1 = state_22351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22351__$1,(7),ch,inst_22331);
} else {
if((state_val_22352 === (13))){
var inst_22345 = (state_22351[(2)]);
var state_22351__$1 = state_22351;
var statearr_22356_22378 = state_22351__$1;
(statearr_22356_22378[(2)] = inst_22345);

(statearr_22356_22378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (6))){
var inst_22336 = (state_22351[(2)]);
var state_22351__$1 = state_22351;
if(cljs.core.truth_(inst_22336)){
var statearr_22357_22379 = state_22351__$1;
(statearr_22357_22379[(1)] = (8));

} else {
var statearr_22358_22380 = state_22351__$1;
(statearr_22358_22380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (3))){
var inst_22349 = (state_22351[(2)]);
var state_22351__$1 = state_22351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22351__$1,inst_22349);
} else {
if((state_val_22352 === (12))){
var state_22351__$1 = state_22351;
var statearr_22359_22381 = state_22351__$1;
(statearr_22359_22381[(2)] = null);

(statearr_22359_22381[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (2))){
var inst_22328 = (state_22351[(7)]);
var state_22351__$1 = state_22351;
if(cljs.core.truth_(inst_22328)){
var statearr_22360_22382 = state_22351__$1;
(statearr_22360_22382[(1)] = (4));

} else {
var statearr_22361_22383 = state_22351__$1;
(statearr_22361_22383[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (11))){
var inst_22342 = cljs.core.async.close_BANG_.call(null,ch);
var state_22351__$1 = state_22351;
var statearr_22362_22384 = state_22351__$1;
(statearr_22362_22384[(2)] = inst_22342);

(statearr_22362_22384[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (9))){
var state_22351__$1 = state_22351;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22363_22385 = state_22351__$1;
(statearr_22363_22385[(1)] = (11));

} else {
var statearr_22364_22386 = state_22351__$1;
(statearr_22364_22386[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (5))){
var inst_22328 = (state_22351[(7)]);
var state_22351__$1 = state_22351;
var statearr_22365_22387 = state_22351__$1;
(statearr_22365_22387[(2)] = inst_22328);

(statearr_22365_22387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (10))){
var inst_22347 = (state_22351[(2)]);
var state_22351__$1 = state_22351;
var statearr_22366_22388 = state_22351__$1;
(statearr_22366_22388[(2)] = inst_22347);

(statearr_22366_22388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22352 === (8))){
var inst_22328 = (state_22351[(7)]);
var inst_22338 = cljs.core.next.call(null,inst_22328);
var inst_22328__$1 = inst_22338;
var state_22351__$1 = (function (){var statearr_22367 = state_22351;
(statearr_22367[(7)] = inst_22328__$1);

return statearr_22367;
})();
var statearr_22368_22389 = state_22351__$1;
(statearr_22368_22389[(2)] = null);

(statearr_22368_22389[(1)] = (2));


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
}
}
}
}
}
}
});})(c__15884__auto__))
;
return ((function (switch__15828__auto__,c__15884__auto__){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_22372 = [null,null,null,null,null,null,null,null];
(statearr_22372[(0)] = state_machine__15829__auto__);

(statearr_22372[(1)] = (1));

return statearr_22372;
});
var state_machine__15829__auto____1 = (function (state_22351){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_22351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e22373){if((e22373 instanceof Object)){
var ex__15832__auto__ = e22373;
var statearr_22374_22390 = state_22351;
(statearr_22374_22390[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22391 = state_22351;
state_22351 = G__22391;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_22351){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_22351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto__))
})();
var state__15886__auto__ = (function (){var statearr_22375 = f__15885__auto__.call(null);
(statearr_22375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto__);

return statearr_22375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto__))
);

return c__15884__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj22393 = {};
return obj22393;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__12643__auto__ = _;
if(and__12643__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__12643__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__13299__auto__ = (((_ == null))?null:_);
return (function (){var or__12655__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj22395 = {};
return obj22395;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__12643__auto__ = m;
if(and__12643__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__12643__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__13299__auto__ = (((m == null))?null:m);
return (function (){var or__12655__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__12643__auto__ = m;
if(and__12643__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__12643__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__13299__auto__ = (((m == null))?null:m);
return (function (){var or__12655__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__12643__auto__ = m;
if(and__12643__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__12643__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__13299__auto__ = (((m == null))?null:m);
return (function (){var or__12655__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t22617 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22617 = (function (cs,ch,mult,meta22618){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22618 = meta22618;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22617.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t22617.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t22617.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t22617.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t22617.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22617.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t22617.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22619){
var self__ = this;
var _22619__$1 = this;
return self__.meta22618;
});})(cs))
;

cljs.core.async.t22617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22619,meta22618__$1){
var self__ = this;
var _22619__$1 = this;
return (new cljs.core.async.t22617(self__.cs,self__.ch,self__.mult,meta22618__$1));
});})(cs))
;

cljs.core.async.t22617.cljs$lang$type = true;

cljs.core.async.t22617.cljs$lang$ctorStr = "cljs.core.async/t22617";

cljs.core.async.t22617.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13242__auto__,writer__13243__auto__,opt__13244__auto__){
return cljs.core._write.call(null,writer__13243__auto__,"cljs.core.async/t22617");
});})(cs))
;

cljs.core.async.__GT_t22617 = ((function (cs){
return (function __GT_t22617(cs__$1,ch__$1,mult__$1,meta22618){
return (new cljs.core.async.t22617(cs__$1,ch__$1,mult__$1,meta22618));
});})(cs))
;

}

return (new cljs.core.async.t22617(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/we/Dropbox/projects/feeds/chestnut-feed/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15884__auto___22838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto___22838,cs,m,dchan,dctr,done){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto___22838,cs,m,dchan,dctr,done){
return (function (state_22750){
var state_val_22751 = (state_22750[(1)]);
if((state_val_22751 === (7))){
var inst_22746 = (state_22750[(2)]);
var state_22750__$1 = state_22750;
var statearr_22752_22839 = state_22750__$1;
(statearr_22752_22839[(2)] = inst_22746);

(statearr_22752_22839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (20))){
var inst_22651 = (state_22750[(7)]);
var inst_22661 = cljs.core.first.call(null,inst_22651);
var inst_22662 = cljs.core.nth.call(null,inst_22661,(0),null);
var inst_22663 = cljs.core.nth.call(null,inst_22661,(1),null);
var state_22750__$1 = (function (){var statearr_22753 = state_22750;
(statearr_22753[(8)] = inst_22662);

return statearr_22753;
})();
if(cljs.core.truth_(inst_22663)){
var statearr_22754_22840 = state_22750__$1;
(statearr_22754_22840[(1)] = (22));

} else {
var statearr_22755_22841 = state_22750__$1;
(statearr_22755_22841[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (27))){
var inst_22622 = (state_22750[(9)]);
var inst_22691 = (state_22750[(10)]);
var inst_22693 = (state_22750[(11)]);
var inst_22698 = (state_22750[(12)]);
var inst_22698__$1 = cljs.core._nth.call(null,inst_22691,inst_22693);
var inst_22699 = cljs.core.async.put_BANG_.call(null,inst_22698__$1,inst_22622,done);
var state_22750__$1 = (function (){var statearr_22756 = state_22750;
(statearr_22756[(12)] = inst_22698__$1);

return statearr_22756;
})();
if(cljs.core.truth_(inst_22699)){
var statearr_22757_22842 = state_22750__$1;
(statearr_22757_22842[(1)] = (30));

} else {
var statearr_22758_22843 = state_22750__$1;
(statearr_22758_22843[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (1))){
var state_22750__$1 = state_22750;
var statearr_22759_22844 = state_22750__$1;
(statearr_22759_22844[(2)] = null);

(statearr_22759_22844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (24))){
var inst_22651 = (state_22750[(7)]);
var inst_22668 = (state_22750[(2)]);
var inst_22669 = cljs.core.next.call(null,inst_22651);
var inst_22631 = inst_22669;
var inst_22632 = null;
var inst_22633 = (0);
var inst_22634 = (0);
var state_22750__$1 = (function (){var statearr_22760 = state_22750;
(statearr_22760[(13)] = inst_22634);

(statearr_22760[(14)] = inst_22668);

(statearr_22760[(15)] = inst_22632);

(statearr_22760[(16)] = inst_22631);

(statearr_22760[(17)] = inst_22633);

return statearr_22760;
})();
var statearr_22761_22845 = state_22750__$1;
(statearr_22761_22845[(2)] = null);

(statearr_22761_22845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (39))){
var state_22750__$1 = state_22750;
var statearr_22765_22846 = state_22750__$1;
(statearr_22765_22846[(2)] = null);

(statearr_22765_22846[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (4))){
var inst_22622 = (state_22750[(9)]);
var inst_22622__$1 = (state_22750[(2)]);
var inst_22623 = (inst_22622__$1 == null);
var state_22750__$1 = (function (){var statearr_22766 = state_22750;
(statearr_22766[(9)] = inst_22622__$1);

return statearr_22766;
})();
if(cljs.core.truth_(inst_22623)){
var statearr_22767_22847 = state_22750__$1;
(statearr_22767_22847[(1)] = (5));

} else {
var statearr_22768_22848 = state_22750__$1;
(statearr_22768_22848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (15))){
var inst_22634 = (state_22750[(13)]);
var inst_22632 = (state_22750[(15)]);
var inst_22631 = (state_22750[(16)]);
var inst_22633 = (state_22750[(17)]);
var inst_22647 = (state_22750[(2)]);
var inst_22648 = (inst_22634 + (1));
var tmp22762 = inst_22632;
var tmp22763 = inst_22631;
var tmp22764 = inst_22633;
var inst_22631__$1 = tmp22763;
var inst_22632__$1 = tmp22762;
var inst_22633__$1 = tmp22764;
var inst_22634__$1 = inst_22648;
var state_22750__$1 = (function (){var statearr_22769 = state_22750;
(statearr_22769[(13)] = inst_22634__$1);

(statearr_22769[(18)] = inst_22647);

(statearr_22769[(15)] = inst_22632__$1);

(statearr_22769[(16)] = inst_22631__$1);

(statearr_22769[(17)] = inst_22633__$1);

return statearr_22769;
})();
var statearr_22770_22849 = state_22750__$1;
(statearr_22770_22849[(2)] = null);

(statearr_22770_22849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (21))){
var inst_22672 = (state_22750[(2)]);
var state_22750__$1 = state_22750;
var statearr_22774_22850 = state_22750__$1;
(statearr_22774_22850[(2)] = inst_22672);

(statearr_22774_22850[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (31))){
var inst_22698 = (state_22750[(12)]);
var inst_22702 = done.call(null,null);
var inst_22703 = cljs.core.async.untap_STAR_.call(null,m,inst_22698);
var state_22750__$1 = (function (){var statearr_22775 = state_22750;
(statearr_22775[(19)] = inst_22702);

return statearr_22775;
})();
var statearr_22776_22851 = state_22750__$1;
(statearr_22776_22851[(2)] = inst_22703);

(statearr_22776_22851[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (32))){
var inst_22691 = (state_22750[(10)]);
var inst_22692 = (state_22750[(20)]);
var inst_22690 = (state_22750[(21)]);
var inst_22693 = (state_22750[(11)]);
var inst_22705 = (state_22750[(2)]);
var inst_22706 = (inst_22693 + (1));
var tmp22771 = inst_22691;
var tmp22772 = inst_22692;
var tmp22773 = inst_22690;
var inst_22690__$1 = tmp22773;
var inst_22691__$1 = tmp22771;
var inst_22692__$1 = tmp22772;
var inst_22693__$1 = inst_22706;
var state_22750__$1 = (function (){var statearr_22777 = state_22750;
(statearr_22777[(10)] = inst_22691__$1);

(statearr_22777[(20)] = inst_22692__$1);

(statearr_22777[(21)] = inst_22690__$1);

(statearr_22777[(22)] = inst_22705);

(statearr_22777[(11)] = inst_22693__$1);

return statearr_22777;
})();
var statearr_22778_22852 = state_22750__$1;
(statearr_22778_22852[(2)] = null);

(statearr_22778_22852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (40))){
var inst_22718 = (state_22750[(23)]);
var inst_22722 = done.call(null,null);
var inst_22723 = cljs.core.async.untap_STAR_.call(null,m,inst_22718);
var state_22750__$1 = (function (){var statearr_22779 = state_22750;
(statearr_22779[(24)] = inst_22722);

return statearr_22779;
})();
var statearr_22780_22853 = state_22750__$1;
(statearr_22780_22853[(2)] = inst_22723);

(statearr_22780_22853[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (33))){
var inst_22709 = (state_22750[(25)]);
var inst_22711 = cljs.core.chunked_seq_QMARK_.call(null,inst_22709);
var state_22750__$1 = state_22750;
if(inst_22711){
var statearr_22781_22854 = state_22750__$1;
(statearr_22781_22854[(1)] = (36));

} else {
var statearr_22782_22855 = state_22750__$1;
(statearr_22782_22855[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (13))){
var inst_22641 = (state_22750[(26)]);
var inst_22644 = cljs.core.async.close_BANG_.call(null,inst_22641);
var state_22750__$1 = state_22750;
var statearr_22783_22856 = state_22750__$1;
(statearr_22783_22856[(2)] = inst_22644);

(statearr_22783_22856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (22))){
var inst_22662 = (state_22750[(8)]);
var inst_22665 = cljs.core.async.close_BANG_.call(null,inst_22662);
var state_22750__$1 = state_22750;
var statearr_22784_22857 = state_22750__$1;
(statearr_22784_22857[(2)] = inst_22665);

(statearr_22784_22857[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (36))){
var inst_22709 = (state_22750[(25)]);
var inst_22713 = cljs.core.chunk_first.call(null,inst_22709);
var inst_22714 = cljs.core.chunk_rest.call(null,inst_22709);
var inst_22715 = cljs.core.count.call(null,inst_22713);
var inst_22690 = inst_22714;
var inst_22691 = inst_22713;
var inst_22692 = inst_22715;
var inst_22693 = (0);
var state_22750__$1 = (function (){var statearr_22785 = state_22750;
(statearr_22785[(10)] = inst_22691);

(statearr_22785[(20)] = inst_22692);

(statearr_22785[(21)] = inst_22690);

(statearr_22785[(11)] = inst_22693);

return statearr_22785;
})();
var statearr_22786_22858 = state_22750__$1;
(statearr_22786_22858[(2)] = null);

(statearr_22786_22858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (41))){
var inst_22709 = (state_22750[(25)]);
var inst_22725 = (state_22750[(2)]);
var inst_22726 = cljs.core.next.call(null,inst_22709);
var inst_22690 = inst_22726;
var inst_22691 = null;
var inst_22692 = (0);
var inst_22693 = (0);
var state_22750__$1 = (function (){var statearr_22787 = state_22750;
(statearr_22787[(10)] = inst_22691);

(statearr_22787[(20)] = inst_22692);

(statearr_22787[(21)] = inst_22690);

(statearr_22787[(27)] = inst_22725);

(statearr_22787[(11)] = inst_22693);

return statearr_22787;
})();
var statearr_22788_22859 = state_22750__$1;
(statearr_22788_22859[(2)] = null);

(statearr_22788_22859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (43))){
var state_22750__$1 = state_22750;
var statearr_22789_22860 = state_22750__$1;
(statearr_22789_22860[(2)] = null);

(statearr_22789_22860[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (29))){
var inst_22734 = (state_22750[(2)]);
var state_22750__$1 = state_22750;
var statearr_22790_22861 = state_22750__$1;
(statearr_22790_22861[(2)] = inst_22734);

(statearr_22790_22861[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (44))){
var inst_22743 = (state_22750[(2)]);
var state_22750__$1 = (function (){var statearr_22791 = state_22750;
(statearr_22791[(28)] = inst_22743);

return statearr_22791;
})();
var statearr_22792_22862 = state_22750__$1;
(statearr_22792_22862[(2)] = null);

(statearr_22792_22862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (6))){
var inst_22682 = (state_22750[(29)]);
var inst_22681 = cljs.core.deref.call(null,cs);
var inst_22682__$1 = cljs.core.keys.call(null,inst_22681);
var inst_22683 = cljs.core.count.call(null,inst_22682__$1);
var inst_22684 = cljs.core.reset_BANG_.call(null,dctr,inst_22683);
var inst_22689 = cljs.core.seq.call(null,inst_22682__$1);
var inst_22690 = inst_22689;
var inst_22691 = null;
var inst_22692 = (0);
var inst_22693 = (0);
var state_22750__$1 = (function (){var statearr_22793 = state_22750;
(statearr_22793[(10)] = inst_22691);

(statearr_22793[(20)] = inst_22692);

(statearr_22793[(21)] = inst_22690);

(statearr_22793[(29)] = inst_22682__$1);

(statearr_22793[(11)] = inst_22693);

(statearr_22793[(30)] = inst_22684);

return statearr_22793;
})();
var statearr_22794_22863 = state_22750__$1;
(statearr_22794_22863[(2)] = null);

(statearr_22794_22863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (28))){
var inst_22709 = (state_22750[(25)]);
var inst_22690 = (state_22750[(21)]);
var inst_22709__$1 = cljs.core.seq.call(null,inst_22690);
var state_22750__$1 = (function (){var statearr_22795 = state_22750;
(statearr_22795[(25)] = inst_22709__$1);

return statearr_22795;
})();
if(inst_22709__$1){
var statearr_22796_22864 = state_22750__$1;
(statearr_22796_22864[(1)] = (33));

} else {
var statearr_22797_22865 = state_22750__$1;
(statearr_22797_22865[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (25))){
var inst_22692 = (state_22750[(20)]);
var inst_22693 = (state_22750[(11)]);
var inst_22695 = (inst_22693 < inst_22692);
var inst_22696 = inst_22695;
var state_22750__$1 = state_22750;
if(cljs.core.truth_(inst_22696)){
var statearr_22798_22866 = state_22750__$1;
(statearr_22798_22866[(1)] = (27));

} else {
var statearr_22799_22867 = state_22750__$1;
(statearr_22799_22867[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (34))){
var state_22750__$1 = state_22750;
var statearr_22800_22868 = state_22750__$1;
(statearr_22800_22868[(2)] = null);

(statearr_22800_22868[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (17))){
var state_22750__$1 = state_22750;
var statearr_22801_22869 = state_22750__$1;
(statearr_22801_22869[(2)] = null);

(statearr_22801_22869[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (3))){
var inst_22748 = (state_22750[(2)]);
var state_22750__$1 = state_22750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22750__$1,inst_22748);
} else {
if((state_val_22751 === (12))){
var inst_22677 = (state_22750[(2)]);
var state_22750__$1 = state_22750;
var statearr_22802_22870 = state_22750__$1;
(statearr_22802_22870[(2)] = inst_22677);

(statearr_22802_22870[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (2))){
var state_22750__$1 = state_22750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22750__$1,(4),ch);
} else {
if((state_val_22751 === (23))){
var state_22750__$1 = state_22750;
var statearr_22803_22871 = state_22750__$1;
(statearr_22803_22871[(2)] = null);

(statearr_22803_22871[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (35))){
var inst_22732 = (state_22750[(2)]);
var state_22750__$1 = state_22750;
var statearr_22804_22872 = state_22750__$1;
(statearr_22804_22872[(2)] = inst_22732);

(statearr_22804_22872[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (19))){
var inst_22651 = (state_22750[(7)]);
var inst_22655 = cljs.core.chunk_first.call(null,inst_22651);
var inst_22656 = cljs.core.chunk_rest.call(null,inst_22651);
var inst_22657 = cljs.core.count.call(null,inst_22655);
var inst_22631 = inst_22656;
var inst_22632 = inst_22655;
var inst_22633 = inst_22657;
var inst_22634 = (0);
var state_22750__$1 = (function (){var statearr_22805 = state_22750;
(statearr_22805[(13)] = inst_22634);

(statearr_22805[(15)] = inst_22632);

(statearr_22805[(16)] = inst_22631);

(statearr_22805[(17)] = inst_22633);

return statearr_22805;
})();
var statearr_22806_22873 = state_22750__$1;
(statearr_22806_22873[(2)] = null);

(statearr_22806_22873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (11))){
var inst_22651 = (state_22750[(7)]);
var inst_22631 = (state_22750[(16)]);
var inst_22651__$1 = cljs.core.seq.call(null,inst_22631);
var state_22750__$1 = (function (){var statearr_22807 = state_22750;
(statearr_22807[(7)] = inst_22651__$1);

return statearr_22807;
})();
if(inst_22651__$1){
var statearr_22808_22874 = state_22750__$1;
(statearr_22808_22874[(1)] = (16));

} else {
var statearr_22809_22875 = state_22750__$1;
(statearr_22809_22875[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (9))){
var inst_22679 = (state_22750[(2)]);
var state_22750__$1 = state_22750;
var statearr_22810_22876 = state_22750__$1;
(statearr_22810_22876[(2)] = inst_22679);

(statearr_22810_22876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (5))){
var inst_22629 = cljs.core.deref.call(null,cs);
var inst_22630 = cljs.core.seq.call(null,inst_22629);
var inst_22631 = inst_22630;
var inst_22632 = null;
var inst_22633 = (0);
var inst_22634 = (0);
var state_22750__$1 = (function (){var statearr_22811 = state_22750;
(statearr_22811[(13)] = inst_22634);

(statearr_22811[(15)] = inst_22632);

(statearr_22811[(16)] = inst_22631);

(statearr_22811[(17)] = inst_22633);

return statearr_22811;
})();
var statearr_22812_22877 = state_22750__$1;
(statearr_22812_22877[(2)] = null);

(statearr_22812_22877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (14))){
var state_22750__$1 = state_22750;
var statearr_22813_22878 = state_22750__$1;
(statearr_22813_22878[(2)] = null);

(statearr_22813_22878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (45))){
var inst_22740 = (state_22750[(2)]);
var state_22750__$1 = state_22750;
var statearr_22814_22879 = state_22750__$1;
(statearr_22814_22879[(2)] = inst_22740);

(statearr_22814_22879[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (26))){
var inst_22682 = (state_22750[(29)]);
var inst_22736 = (state_22750[(2)]);
var inst_22737 = cljs.core.seq.call(null,inst_22682);
var state_22750__$1 = (function (){var statearr_22815 = state_22750;
(statearr_22815[(31)] = inst_22736);

return statearr_22815;
})();
if(inst_22737){
var statearr_22816_22880 = state_22750__$1;
(statearr_22816_22880[(1)] = (42));

} else {
var statearr_22817_22881 = state_22750__$1;
(statearr_22817_22881[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (16))){
var inst_22651 = (state_22750[(7)]);
var inst_22653 = cljs.core.chunked_seq_QMARK_.call(null,inst_22651);
var state_22750__$1 = state_22750;
if(inst_22653){
var statearr_22818_22882 = state_22750__$1;
(statearr_22818_22882[(1)] = (19));

} else {
var statearr_22819_22883 = state_22750__$1;
(statearr_22819_22883[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (38))){
var inst_22729 = (state_22750[(2)]);
var state_22750__$1 = state_22750;
var statearr_22820_22884 = state_22750__$1;
(statearr_22820_22884[(2)] = inst_22729);

(statearr_22820_22884[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (30))){
var state_22750__$1 = state_22750;
var statearr_22821_22885 = state_22750__$1;
(statearr_22821_22885[(2)] = null);

(statearr_22821_22885[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (10))){
var inst_22634 = (state_22750[(13)]);
var inst_22632 = (state_22750[(15)]);
var inst_22640 = cljs.core._nth.call(null,inst_22632,inst_22634);
var inst_22641 = cljs.core.nth.call(null,inst_22640,(0),null);
var inst_22642 = cljs.core.nth.call(null,inst_22640,(1),null);
var state_22750__$1 = (function (){var statearr_22822 = state_22750;
(statearr_22822[(26)] = inst_22641);

return statearr_22822;
})();
if(cljs.core.truth_(inst_22642)){
var statearr_22823_22886 = state_22750__$1;
(statearr_22823_22886[(1)] = (13));

} else {
var statearr_22824_22887 = state_22750__$1;
(statearr_22824_22887[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (18))){
var inst_22675 = (state_22750[(2)]);
var state_22750__$1 = state_22750;
var statearr_22825_22888 = state_22750__$1;
(statearr_22825_22888[(2)] = inst_22675);

(statearr_22825_22888[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (42))){
var state_22750__$1 = state_22750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22750__$1,(45),dchan);
} else {
if((state_val_22751 === (37))){
var inst_22709 = (state_22750[(25)]);
var inst_22718 = (state_22750[(23)]);
var inst_22622 = (state_22750[(9)]);
var inst_22718__$1 = cljs.core.first.call(null,inst_22709);
var inst_22719 = cljs.core.async.put_BANG_.call(null,inst_22718__$1,inst_22622,done);
var state_22750__$1 = (function (){var statearr_22826 = state_22750;
(statearr_22826[(23)] = inst_22718__$1);

return statearr_22826;
})();
if(cljs.core.truth_(inst_22719)){
var statearr_22827_22889 = state_22750__$1;
(statearr_22827_22889[(1)] = (39));

} else {
var statearr_22828_22890 = state_22750__$1;
(statearr_22828_22890[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22751 === (8))){
var inst_22634 = (state_22750[(13)]);
var inst_22633 = (state_22750[(17)]);
var inst_22636 = (inst_22634 < inst_22633);
var inst_22637 = inst_22636;
var state_22750__$1 = state_22750;
if(cljs.core.truth_(inst_22637)){
var statearr_22829_22891 = state_22750__$1;
(statearr_22829_22891[(1)] = (10));

} else {
var statearr_22830_22892 = state_22750__$1;
(statearr_22830_22892[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15884__auto___22838,cs,m,dchan,dctr,done))
;
return ((function (switch__15828__auto__,c__15884__auto___22838,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_22834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22834[(0)] = state_machine__15829__auto__);

(statearr_22834[(1)] = (1));

return statearr_22834;
});
var state_machine__15829__auto____1 = (function (state_22750){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_22750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e22835){if((e22835 instanceof Object)){
var ex__15832__auto__ = e22835;
var statearr_22836_22893 = state_22750;
(statearr_22836_22893[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22894 = state_22750;
state_22750 = G__22894;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_22750){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_22750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto___22838,cs,m,dchan,dctr,done))
})();
var state__15886__auto__ = (function (){var statearr_22837 = f__15885__auto__.call(null);
(statearr_22837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto___22838);

return statearr_22837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto___22838,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj22896 = {};
return obj22896;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__12643__auto__ = m;
if(and__12643__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__12643__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__13299__auto__ = (((m == null))?null:m);
return (function (){var or__12655__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__12643__auto__ = m;
if(and__12643__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__12643__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__13299__auto__ = (((m == null))?null:m);
return (function (){var or__12655__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__12643__auto__ = m;
if(and__12643__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__12643__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__13299__auto__ = (((m == null))?null:m);
return (function (){var or__12655__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__12643__auto__ = m;
if(and__12643__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__12643__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__13299__auto__ = (((m == null))?null:m);
return (function (){var or__12655__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__12643__auto__ = m;
if(and__12643__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__12643__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__13299__auto__ = (((m == null))?null:m);
return (function (){var or__12655__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__22897){
var map__22902 = p__22897;
var map__22902__$1 = ((cljs.core.seq_QMARK_.call(null,map__22902))?cljs.core.apply.call(null,cljs.core.hash_map,map__22902):map__22902);
var opts = map__22902__$1;
var statearr_22903_22906 = state;
(statearr_22903_22906[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4388__auto__ = cljs.core.async.do_alts.call(null,((function (map__22902,map__22902__$1,opts){
return (function (val){
var statearr_22904_22907 = state;
(statearr_22904_22907[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22902,map__22902__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4388__auto__)){
var cb = temp__4388__auto__;
var statearr_22905_22908 = state;
(statearr_22905_22908[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__22897 = null;
if (arguments.length > 3) {
  p__22897 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__22897);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__22909){
var state = cljs.core.first(arglist__22909);
arglist__22909 = cljs.core.next(arglist__22909);
var cont_block = cljs.core.first(arglist__22909);
arglist__22909 = cljs.core.next(arglist__22909);
var ports = cljs.core.first(arglist__22909);
var p__22897 = cljs.core.rest(arglist__22909);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__22897);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t23029 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23029 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23030){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23030 = meta23030;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23029.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t23029.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23029.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23029.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23029.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23029.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23029.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23029.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23029.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23031){
var self__ = this;
var _23031__$1 = this;
return self__.meta23030;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23031,meta23030__$1){
var self__ = this;
var _23031__$1 = this;
return (new cljs.core.async.t23029(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23030__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23029.cljs$lang$type = true;

cljs.core.async.t23029.cljs$lang$ctorStr = "cljs.core.async/t23029";

cljs.core.async.t23029.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13242__auto__,writer__13243__auto__,opt__13244__auto__){
return cljs.core._write.call(null,writer__13243__auto__,"cljs.core.async/t23029");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t23029 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23029(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23030){
return (new cljs.core.async.t23029(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23030));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t23029(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/we/Dropbox/projects/feeds/chestnut-feed/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__15884__auto___23148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto___23148,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto___23148,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23101){
var state_val_23102 = (state_23101[(1)]);
if((state_val_23102 === (7))){
var inst_23045 = (state_23101[(7)]);
var inst_23050 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23045);
var state_23101__$1 = state_23101;
var statearr_23103_23149 = state_23101__$1;
(statearr_23103_23149[(2)] = inst_23050);

(statearr_23103_23149[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (20))){
var inst_23060 = (state_23101[(8)]);
var state_23101__$1 = state_23101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23101__$1,(23),out,inst_23060);
} else {
if((state_val_23102 === (1))){
var inst_23035 = (state_23101[(9)]);
var inst_23035__$1 = calc_state.call(null);
var inst_23036 = cljs.core.seq_QMARK_.call(null,inst_23035__$1);
var state_23101__$1 = (function (){var statearr_23104 = state_23101;
(statearr_23104[(9)] = inst_23035__$1);

return statearr_23104;
})();
if(inst_23036){
var statearr_23105_23150 = state_23101__$1;
(statearr_23105_23150[(1)] = (2));

} else {
var statearr_23106_23151 = state_23101__$1;
(statearr_23106_23151[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (24))){
var inst_23053 = (state_23101[(10)]);
var inst_23045 = inst_23053;
var state_23101__$1 = (function (){var statearr_23107 = state_23101;
(statearr_23107[(7)] = inst_23045);

return statearr_23107;
})();
var statearr_23108_23152 = state_23101__$1;
(statearr_23108_23152[(2)] = null);

(statearr_23108_23152[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (4))){
var inst_23035 = (state_23101[(9)]);
var inst_23041 = (state_23101[(2)]);
var inst_23042 = cljs.core.get.call(null,inst_23041,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23043 = cljs.core.get.call(null,inst_23041,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23044 = cljs.core.get.call(null,inst_23041,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23045 = inst_23035;
var state_23101__$1 = (function (){var statearr_23109 = state_23101;
(statearr_23109[(7)] = inst_23045);

(statearr_23109[(11)] = inst_23044);

(statearr_23109[(12)] = inst_23042);

(statearr_23109[(13)] = inst_23043);

return statearr_23109;
})();
var statearr_23110_23153 = state_23101__$1;
(statearr_23110_23153[(2)] = null);

(statearr_23110_23153[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (15))){
var state_23101__$1 = state_23101;
var statearr_23111_23154 = state_23101__$1;
(statearr_23111_23154[(2)] = null);

(statearr_23111_23154[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (21))){
var inst_23053 = (state_23101[(10)]);
var inst_23045 = inst_23053;
var state_23101__$1 = (function (){var statearr_23112 = state_23101;
(statearr_23112[(7)] = inst_23045);

return statearr_23112;
})();
var statearr_23113_23155 = state_23101__$1;
(statearr_23113_23155[(2)] = null);

(statearr_23113_23155[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (13))){
var inst_23097 = (state_23101[(2)]);
var state_23101__$1 = state_23101;
var statearr_23114_23156 = state_23101__$1;
(statearr_23114_23156[(2)] = inst_23097);

(statearr_23114_23156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (22))){
var inst_23095 = (state_23101[(2)]);
var state_23101__$1 = state_23101;
var statearr_23115_23157 = state_23101__$1;
(statearr_23115_23157[(2)] = inst_23095);

(statearr_23115_23157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (6))){
var inst_23099 = (state_23101[(2)]);
var state_23101__$1 = state_23101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23101__$1,inst_23099);
} else {
if((state_val_23102 === (25))){
var state_23101__$1 = state_23101;
var statearr_23116_23158 = state_23101__$1;
(statearr_23116_23158[(2)] = null);

(statearr_23116_23158[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (17))){
var inst_23075 = (state_23101[(14)]);
var state_23101__$1 = state_23101;
var statearr_23117_23159 = state_23101__$1;
(statearr_23117_23159[(2)] = inst_23075);

(statearr_23117_23159[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (3))){
var inst_23035 = (state_23101[(9)]);
var state_23101__$1 = state_23101;
var statearr_23118_23160 = state_23101__$1;
(statearr_23118_23160[(2)] = inst_23035);

(statearr_23118_23160[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (12))){
var inst_23056 = (state_23101[(15)]);
var inst_23075 = (state_23101[(14)]);
var inst_23061 = (state_23101[(16)]);
var inst_23075__$1 = inst_23056.call(null,inst_23061);
var state_23101__$1 = (function (){var statearr_23119 = state_23101;
(statearr_23119[(14)] = inst_23075__$1);

return statearr_23119;
})();
if(cljs.core.truth_(inst_23075__$1)){
var statearr_23120_23161 = state_23101__$1;
(statearr_23120_23161[(1)] = (17));

} else {
var statearr_23121_23162 = state_23101__$1;
(statearr_23121_23162[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (2))){
var inst_23035 = (state_23101[(9)]);
var inst_23038 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23035);
var state_23101__$1 = state_23101;
var statearr_23122_23163 = state_23101__$1;
(statearr_23122_23163[(2)] = inst_23038);

(statearr_23122_23163[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (23))){
var inst_23086 = (state_23101[(2)]);
var state_23101__$1 = state_23101;
if(cljs.core.truth_(inst_23086)){
var statearr_23123_23164 = state_23101__$1;
(statearr_23123_23164[(1)] = (24));

} else {
var statearr_23124_23165 = state_23101__$1;
(statearr_23124_23165[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (19))){
var inst_23083 = (state_23101[(2)]);
var state_23101__$1 = state_23101;
if(cljs.core.truth_(inst_23083)){
var statearr_23125_23166 = state_23101__$1;
(statearr_23125_23166[(1)] = (20));

} else {
var statearr_23126_23167 = state_23101__$1;
(statearr_23126_23167[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (11))){
var inst_23060 = (state_23101[(8)]);
var inst_23066 = (inst_23060 == null);
var state_23101__$1 = state_23101;
if(cljs.core.truth_(inst_23066)){
var statearr_23127_23168 = state_23101__$1;
(statearr_23127_23168[(1)] = (14));

} else {
var statearr_23128_23169 = state_23101__$1;
(statearr_23128_23169[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (9))){
var inst_23053 = (state_23101[(10)]);
var inst_23053__$1 = (state_23101[(2)]);
var inst_23054 = cljs.core.get.call(null,inst_23053__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23055 = cljs.core.get.call(null,inst_23053__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23056 = cljs.core.get.call(null,inst_23053__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_23101__$1 = (function (){var statearr_23129 = state_23101;
(statearr_23129[(10)] = inst_23053__$1);

(statearr_23129[(17)] = inst_23055);

(statearr_23129[(15)] = inst_23056);

return statearr_23129;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23101__$1,(10),inst_23054);
} else {
if((state_val_23102 === (5))){
var inst_23045 = (state_23101[(7)]);
var inst_23048 = cljs.core.seq_QMARK_.call(null,inst_23045);
var state_23101__$1 = state_23101;
if(inst_23048){
var statearr_23130_23170 = state_23101__$1;
(statearr_23130_23170[(1)] = (7));

} else {
var statearr_23131_23171 = state_23101__$1;
(statearr_23131_23171[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (14))){
var inst_23061 = (state_23101[(16)]);
var inst_23068 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23061);
var state_23101__$1 = state_23101;
var statearr_23132_23172 = state_23101__$1;
(statearr_23132_23172[(2)] = inst_23068);

(statearr_23132_23172[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (26))){
var inst_23091 = (state_23101[(2)]);
var state_23101__$1 = state_23101;
var statearr_23133_23173 = state_23101__$1;
(statearr_23133_23173[(2)] = inst_23091);

(statearr_23133_23173[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (16))){
var inst_23071 = (state_23101[(2)]);
var inst_23072 = calc_state.call(null);
var inst_23045 = inst_23072;
var state_23101__$1 = (function (){var statearr_23134 = state_23101;
(statearr_23134[(7)] = inst_23045);

(statearr_23134[(18)] = inst_23071);

return statearr_23134;
})();
var statearr_23135_23174 = state_23101__$1;
(statearr_23135_23174[(2)] = null);

(statearr_23135_23174[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (10))){
var inst_23060 = (state_23101[(8)]);
var inst_23061 = (state_23101[(16)]);
var inst_23059 = (state_23101[(2)]);
var inst_23060__$1 = cljs.core.nth.call(null,inst_23059,(0),null);
var inst_23061__$1 = cljs.core.nth.call(null,inst_23059,(1),null);
var inst_23062 = (inst_23060__$1 == null);
var inst_23063 = cljs.core._EQ_.call(null,inst_23061__$1,change);
var inst_23064 = (inst_23062) || (inst_23063);
var state_23101__$1 = (function (){var statearr_23136 = state_23101;
(statearr_23136[(8)] = inst_23060__$1);

(statearr_23136[(16)] = inst_23061__$1);

return statearr_23136;
})();
if(cljs.core.truth_(inst_23064)){
var statearr_23137_23175 = state_23101__$1;
(statearr_23137_23175[(1)] = (11));

} else {
var statearr_23138_23176 = state_23101__$1;
(statearr_23138_23176[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (18))){
var inst_23055 = (state_23101[(17)]);
var inst_23056 = (state_23101[(15)]);
var inst_23061 = (state_23101[(16)]);
var inst_23078 = cljs.core.empty_QMARK_.call(null,inst_23056);
var inst_23079 = inst_23055.call(null,inst_23061);
var inst_23080 = cljs.core.not.call(null,inst_23079);
var inst_23081 = (inst_23078) && (inst_23080);
var state_23101__$1 = state_23101;
var statearr_23139_23177 = state_23101__$1;
(statearr_23139_23177[(2)] = inst_23081);

(statearr_23139_23177[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (8))){
var inst_23045 = (state_23101[(7)]);
var state_23101__$1 = state_23101;
var statearr_23140_23178 = state_23101__$1;
(statearr_23140_23178[(2)] = inst_23045);

(statearr_23140_23178[(1)] = (9));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15884__auto___23148,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15828__auto__,c__15884__auto___23148,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_23144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23144[(0)] = state_machine__15829__auto__);

(statearr_23144[(1)] = (1));

return statearr_23144;
});
var state_machine__15829__auto____1 = (function (state_23101){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_23101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e23145){if((e23145 instanceof Object)){
var ex__15832__auto__ = e23145;
var statearr_23146_23179 = state_23101;
(statearr_23146_23179[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23180 = state_23101;
state_23101 = G__23180;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_23101){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_23101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto___23148,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15886__auto__ = (function (){var statearr_23147 = f__15885__auto__.call(null);
(statearr_23147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto___23148);

return statearr_23147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto___23148,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj23182 = {};
return obj23182;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__12643__auto__ = p;
if(and__12643__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__12643__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__13299__auto__ = (((p == null))?null:p);
return (function (){var or__12655__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__12643__auto__ = p;
if(and__12643__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__12643__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__13299__auto__ = (((p == null))?null:p);
return (function (){var or__12655__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__12643__auto__ = p;
if(and__12643__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__12643__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__13299__auto__ = (((p == null))?null:p);
return (function (){var or__12655__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__12643__auto__ = p;
if(and__12643__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__12643__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__13299__auto__ = (((p == null))?null:p);
return (function (){var or__12655__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__12655__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12655__auto__,mults){
return (function (p1__23183_SHARP_){
if(cljs.core.truth_(p1__23183_SHARP_.call(null,topic))){
return p1__23183_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23183_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12655__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t23306 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23306 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23307){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23307 = meta23307;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23306.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t23306.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t23306.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4388__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4388__auto__)){
var m = temp__4388__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t23306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t23306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t23306.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23306.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t23306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23308){
var self__ = this;
var _23308__$1 = this;
return self__.meta23307;
});})(mults,ensure_mult))
;

cljs.core.async.t23306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23308,meta23307__$1){
var self__ = this;
var _23308__$1 = this;
return (new cljs.core.async.t23306(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23307__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t23306.cljs$lang$type = true;

cljs.core.async.t23306.cljs$lang$ctorStr = "cljs.core.async/t23306";

cljs.core.async.t23306.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13242__auto__,writer__13243__auto__,opt__13244__auto__){
return cljs.core._write.call(null,writer__13243__auto__,"cljs.core.async/t23306");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t23306 = ((function (mults,ensure_mult){
return (function __GT_t23306(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23307){
return (new cljs.core.async.t23306(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23307));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t23306(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/we/Dropbox/projects/feeds/chestnut-feed/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__15884__auto___23428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto___23428,mults,ensure_mult,p){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto___23428,mults,ensure_mult,p){
return (function (state_23380){
var state_val_23381 = (state_23380[(1)]);
if((state_val_23381 === (7))){
var inst_23376 = (state_23380[(2)]);
var state_23380__$1 = state_23380;
var statearr_23382_23429 = state_23380__$1;
(statearr_23382_23429[(2)] = inst_23376);

(statearr_23382_23429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (20))){
var state_23380__$1 = state_23380;
var statearr_23383_23430 = state_23380__$1;
(statearr_23383_23430[(2)] = null);

(statearr_23383_23430[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (1))){
var state_23380__$1 = state_23380;
var statearr_23384_23431 = state_23380__$1;
(statearr_23384_23431[(2)] = null);

(statearr_23384_23431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (24))){
var inst_23359 = (state_23380[(7)]);
var inst_23368 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23359);
var state_23380__$1 = state_23380;
var statearr_23385_23432 = state_23380__$1;
(statearr_23385_23432[(2)] = inst_23368);

(statearr_23385_23432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (4))){
var inst_23311 = (state_23380[(8)]);
var inst_23311__$1 = (state_23380[(2)]);
var inst_23312 = (inst_23311__$1 == null);
var state_23380__$1 = (function (){var statearr_23386 = state_23380;
(statearr_23386[(8)] = inst_23311__$1);

return statearr_23386;
})();
if(cljs.core.truth_(inst_23312)){
var statearr_23387_23433 = state_23380__$1;
(statearr_23387_23433[(1)] = (5));

} else {
var statearr_23388_23434 = state_23380__$1;
(statearr_23388_23434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (15))){
var inst_23353 = (state_23380[(2)]);
var state_23380__$1 = state_23380;
var statearr_23389_23435 = state_23380__$1;
(statearr_23389_23435[(2)] = inst_23353);

(statearr_23389_23435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (21))){
var inst_23373 = (state_23380[(2)]);
var state_23380__$1 = (function (){var statearr_23390 = state_23380;
(statearr_23390[(9)] = inst_23373);

return statearr_23390;
})();
var statearr_23391_23436 = state_23380__$1;
(statearr_23391_23436[(2)] = null);

(statearr_23391_23436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (13))){
var inst_23335 = (state_23380[(10)]);
var inst_23337 = cljs.core.chunked_seq_QMARK_.call(null,inst_23335);
var state_23380__$1 = state_23380;
if(inst_23337){
var statearr_23392_23437 = state_23380__$1;
(statearr_23392_23437[(1)] = (16));

} else {
var statearr_23393_23438 = state_23380__$1;
(statearr_23393_23438[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (22))){
var inst_23365 = (state_23380[(2)]);
var state_23380__$1 = state_23380;
if(cljs.core.truth_(inst_23365)){
var statearr_23394_23439 = state_23380__$1;
(statearr_23394_23439[(1)] = (23));

} else {
var statearr_23395_23440 = state_23380__$1;
(statearr_23395_23440[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (6))){
var inst_23311 = (state_23380[(8)]);
var inst_23359 = (state_23380[(7)]);
var inst_23361 = (state_23380[(11)]);
var inst_23359__$1 = topic_fn.call(null,inst_23311);
var inst_23360 = cljs.core.deref.call(null,mults);
var inst_23361__$1 = cljs.core.get.call(null,inst_23360,inst_23359__$1);
var state_23380__$1 = (function (){var statearr_23396 = state_23380;
(statearr_23396[(7)] = inst_23359__$1);

(statearr_23396[(11)] = inst_23361__$1);

return statearr_23396;
})();
if(cljs.core.truth_(inst_23361__$1)){
var statearr_23397_23441 = state_23380__$1;
(statearr_23397_23441[(1)] = (19));

} else {
var statearr_23398_23442 = state_23380__$1;
(statearr_23398_23442[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (25))){
var inst_23370 = (state_23380[(2)]);
var state_23380__$1 = state_23380;
var statearr_23399_23443 = state_23380__$1;
(statearr_23399_23443[(2)] = inst_23370);

(statearr_23399_23443[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (17))){
var inst_23335 = (state_23380[(10)]);
var inst_23344 = cljs.core.first.call(null,inst_23335);
var inst_23345 = cljs.core.async.muxch_STAR_.call(null,inst_23344);
var inst_23346 = cljs.core.async.close_BANG_.call(null,inst_23345);
var inst_23347 = cljs.core.next.call(null,inst_23335);
var inst_23321 = inst_23347;
var inst_23322 = null;
var inst_23323 = (0);
var inst_23324 = (0);
var state_23380__$1 = (function (){var statearr_23400 = state_23380;
(statearr_23400[(12)] = inst_23322);

(statearr_23400[(13)] = inst_23321);

(statearr_23400[(14)] = inst_23324);

(statearr_23400[(15)] = inst_23323);

(statearr_23400[(16)] = inst_23346);

return statearr_23400;
})();
var statearr_23401_23444 = state_23380__$1;
(statearr_23401_23444[(2)] = null);

(statearr_23401_23444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (3))){
var inst_23378 = (state_23380[(2)]);
var state_23380__$1 = state_23380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23380__$1,inst_23378);
} else {
if((state_val_23381 === (12))){
var inst_23355 = (state_23380[(2)]);
var state_23380__$1 = state_23380;
var statearr_23402_23445 = state_23380__$1;
(statearr_23402_23445[(2)] = inst_23355);

(statearr_23402_23445[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (2))){
var state_23380__$1 = state_23380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23380__$1,(4),ch);
} else {
if((state_val_23381 === (23))){
var state_23380__$1 = state_23380;
var statearr_23403_23446 = state_23380__$1;
(statearr_23403_23446[(2)] = null);

(statearr_23403_23446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (19))){
var inst_23311 = (state_23380[(8)]);
var inst_23361 = (state_23380[(11)]);
var inst_23363 = cljs.core.async.muxch_STAR_.call(null,inst_23361);
var state_23380__$1 = state_23380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23380__$1,(22),inst_23363,inst_23311);
} else {
if((state_val_23381 === (11))){
var inst_23321 = (state_23380[(13)]);
var inst_23335 = (state_23380[(10)]);
var inst_23335__$1 = cljs.core.seq.call(null,inst_23321);
var state_23380__$1 = (function (){var statearr_23404 = state_23380;
(statearr_23404[(10)] = inst_23335__$1);

return statearr_23404;
})();
if(inst_23335__$1){
var statearr_23405_23447 = state_23380__$1;
(statearr_23405_23447[(1)] = (13));

} else {
var statearr_23406_23448 = state_23380__$1;
(statearr_23406_23448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (9))){
var inst_23357 = (state_23380[(2)]);
var state_23380__$1 = state_23380;
var statearr_23407_23449 = state_23380__$1;
(statearr_23407_23449[(2)] = inst_23357);

(statearr_23407_23449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (5))){
var inst_23318 = cljs.core.deref.call(null,mults);
var inst_23319 = cljs.core.vals.call(null,inst_23318);
var inst_23320 = cljs.core.seq.call(null,inst_23319);
var inst_23321 = inst_23320;
var inst_23322 = null;
var inst_23323 = (0);
var inst_23324 = (0);
var state_23380__$1 = (function (){var statearr_23408 = state_23380;
(statearr_23408[(12)] = inst_23322);

(statearr_23408[(13)] = inst_23321);

(statearr_23408[(14)] = inst_23324);

(statearr_23408[(15)] = inst_23323);

return statearr_23408;
})();
var statearr_23409_23450 = state_23380__$1;
(statearr_23409_23450[(2)] = null);

(statearr_23409_23450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (14))){
var state_23380__$1 = state_23380;
var statearr_23413_23451 = state_23380__$1;
(statearr_23413_23451[(2)] = null);

(statearr_23413_23451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (16))){
var inst_23335 = (state_23380[(10)]);
var inst_23339 = cljs.core.chunk_first.call(null,inst_23335);
var inst_23340 = cljs.core.chunk_rest.call(null,inst_23335);
var inst_23341 = cljs.core.count.call(null,inst_23339);
var inst_23321 = inst_23340;
var inst_23322 = inst_23339;
var inst_23323 = inst_23341;
var inst_23324 = (0);
var state_23380__$1 = (function (){var statearr_23414 = state_23380;
(statearr_23414[(12)] = inst_23322);

(statearr_23414[(13)] = inst_23321);

(statearr_23414[(14)] = inst_23324);

(statearr_23414[(15)] = inst_23323);

return statearr_23414;
})();
var statearr_23415_23452 = state_23380__$1;
(statearr_23415_23452[(2)] = null);

(statearr_23415_23452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (10))){
var inst_23322 = (state_23380[(12)]);
var inst_23321 = (state_23380[(13)]);
var inst_23324 = (state_23380[(14)]);
var inst_23323 = (state_23380[(15)]);
var inst_23329 = cljs.core._nth.call(null,inst_23322,inst_23324);
var inst_23330 = cljs.core.async.muxch_STAR_.call(null,inst_23329);
var inst_23331 = cljs.core.async.close_BANG_.call(null,inst_23330);
var inst_23332 = (inst_23324 + (1));
var tmp23410 = inst_23322;
var tmp23411 = inst_23321;
var tmp23412 = inst_23323;
var inst_23321__$1 = tmp23411;
var inst_23322__$1 = tmp23410;
var inst_23323__$1 = tmp23412;
var inst_23324__$1 = inst_23332;
var state_23380__$1 = (function (){var statearr_23416 = state_23380;
(statearr_23416[(12)] = inst_23322__$1);

(statearr_23416[(13)] = inst_23321__$1);

(statearr_23416[(14)] = inst_23324__$1);

(statearr_23416[(15)] = inst_23323__$1);

(statearr_23416[(17)] = inst_23331);

return statearr_23416;
})();
var statearr_23417_23453 = state_23380__$1;
(statearr_23417_23453[(2)] = null);

(statearr_23417_23453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (18))){
var inst_23350 = (state_23380[(2)]);
var state_23380__$1 = state_23380;
var statearr_23418_23454 = state_23380__$1;
(statearr_23418_23454[(2)] = inst_23350);

(statearr_23418_23454[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (8))){
var inst_23324 = (state_23380[(14)]);
var inst_23323 = (state_23380[(15)]);
var inst_23326 = (inst_23324 < inst_23323);
var inst_23327 = inst_23326;
var state_23380__$1 = state_23380;
if(cljs.core.truth_(inst_23327)){
var statearr_23419_23455 = state_23380__$1;
(statearr_23419_23455[(1)] = (10));

} else {
var statearr_23420_23456 = state_23380__$1;
(statearr_23420_23456[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15884__auto___23428,mults,ensure_mult,p))
;
return ((function (switch__15828__auto__,c__15884__auto___23428,mults,ensure_mult,p){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_23424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23424[(0)] = state_machine__15829__auto__);

(statearr_23424[(1)] = (1));

return statearr_23424;
});
var state_machine__15829__auto____1 = (function (state_23380){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_23380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e23425){if((e23425 instanceof Object)){
var ex__15832__auto__ = e23425;
var statearr_23426_23457 = state_23380;
(statearr_23426_23457[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23458 = state_23380;
state_23380 = G__23458;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_23380){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_23380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto___23428,mults,ensure_mult,p))
})();
var state__15886__auto__ = (function (){var statearr_23427 = f__15885__auto__.call(null);
(statearr_23427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto___23428);

return statearr_23427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto___23428,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__15884__auto___23595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto___23595,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto___23595,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23565){
var state_val_23566 = (state_23565[(1)]);
if((state_val_23566 === (7))){
var state_23565__$1 = state_23565;
var statearr_23567_23596 = state_23565__$1;
(statearr_23567_23596[(2)] = null);

(statearr_23567_23596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (1))){
var state_23565__$1 = state_23565;
var statearr_23568_23597 = state_23565__$1;
(statearr_23568_23597[(2)] = null);

(statearr_23568_23597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (4))){
var inst_23529 = (state_23565[(7)]);
var inst_23531 = (inst_23529 < cnt);
var state_23565__$1 = state_23565;
if(cljs.core.truth_(inst_23531)){
var statearr_23569_23598 = state_23565__$1;
(statearr_23569_23598[(1)] = (6));

} else {
var statearr_23570_23599 = state_23565__$1;
(statearr_23570_23599[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (15))){
var inst_23561 = (state_23565[(2)]);
var state_23565__$1 = state_23565;
var statearr_23571_23600 = state_23565__$1;
(statearr_23571_23600[(2)] = inst_23561);

(statearr_23571_23600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (13))){
var inst_23554 = cljs.core.async.close_BANG_.call(null,out);
var state_23565__$1 = state_23565;
var statearr_23572_23601 = state_23565__$1;
(statearr_23572_23601[(2)] = inst_23554);

(statearr_23572_23601[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (6))){
var state_23565__$1 = state_23565;
var statearr_23573_23602 = state_23565__$1;
(statearr_23573_23602[(2)] = null);

(statearr_23573_23602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (3))){
var inst_23563 = (state_23565[(2)]);
var state_23565__$1 = state_23565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23565__$1,inst_23563);
} else {
if((state_val_23566 === (12))){
var inst_23551 = (state_23565[(8)]);
var inst_23551__$1 = (state_23565[(2)]);
var inst_23552 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23551__$1);
var state_23565__$1 = (function (){var statearr_23574 = state_23565;
(statearr_23574[(8)] = inst_23551__$1);

return statearr_23574;
})();
if(cljs.core.truth_(inst_23552)){
var statearr_23575_23603 = state_23565__$1;
(statearr_23575_23603[(1)] = (13));

} else {
var statearr_23576_23604 = state_23565__$1;
(statearr_23576_23604[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (2))){
var inst_23528 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23529 = (0);
var state_23565__$1 = (function (){var statearr_23577 = state_23565;
(statearr_23577[(7)] = inst_23529);

(statearr_23577[(9)] = inst_23528);

return statearr_23577;
})();
var statearr_23578_23605 = state_23565__$1;
(statearr_23578_23605[(2)] = null);

(statearr_23578_23605[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (11))){
var inst_23529 = (state_23565[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23565,(10),Object,null,(9));
var inst_23538 = chs__$1.call(null,inst_23529);
var inst_23539 = done.call(null,inst_23529);
var inst_23540 = cljs.core.async.take_BANG_.call(null,inst_23538,inst_23539);
var state_23565__$1 = state_23565;
var statearr_23579_23606 = state_23565__$1;
(statearr_23579_23606[(2)] = inst_23540);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23565__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (9))){
var inst_23529 = (state_23565[(7)]);
var inst_23542 = (state_23565[(2)]);
var inst_23543 = (inst_23529 + (1));
var inst_23529__$1 = inst_23543;
var state_23565__$1 = (function (){var statearr_23580 = state_23565;
(statearr_23580[(10)] = inst_23542);

(statearr_23580[(7)] = inst_23529__$1);

return statearr_23580;
})();
var statearr_23581_23607 = state_23565__$1;
(statearr_23581_23607[(2)] = null);

(statearr_23581_23607[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (5))){
var inst_23549 = (state_23565[(2)]);
var state_23565__$1 = (function (){var statearr_23582 = state_23565;
(statearr_23582[(11)] = inst_23549);

return statearr_23582;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23565__$1,(12),dchan);
} else {
if((state_val_23566 === (14))){
var inst_23551 = (state_23565[(8)]);
var inst_23556 = cljs.core.apply.call(null,f,inst_23551);
var state_23565__$1 = state_23565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23565__$1,(16),out,inst_23556);
} else {
if((state_val_23566 === (16))){
var inst_23558 = (state_23565[(2)]);
var state_23565__$1 = (function (){var statearr_23583 = state_23565;
(statearr_23583[(12)] = inst_23558);

return statearr_23583;
})();
var statearr_23584_23608 = state_23565__$1;
(statearr_23584_23608[(2)] = null);

(statearr_23584_23608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (10))){
var inst_23533 = (state_23565[(2)]);
var inst_23534 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23565__$1 = (function (){var statearr_23585 = state_23565;
(statearr_23585[(13)] = inst_23533);

return statearr_23585;
})();
var statearr_23586_23609 = state_23565__$1;
(statearr_23586_23609[(2)] = inst_23534);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23565__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (8))){
var inst_23547 = (state_23565[(2)]);
var state_23565__$1 = state_23565;
var statearr_23587_23610 = state_23565__$1;
(statearr_23587_23610[(2)] = inst_23547);

(statearr_23587_23610[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
});})(c__15884__auto___23595,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15828__auto__,c__15884__auto___23595,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_23591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23591[(0)] = state_machine__15829__auto__);

(statearr_23591[(1)] = (1));

return statearr_23591;
});
var state_machine__15829__auto____1 = (function (state_23565){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_23565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e23592){if((e23592 instanceof Object)){
var ex__15832__auto__ = e23592;
var statearr_23593_23611 = state_23565;
(statearr_23593_23611[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23612 = state_23565;
state_23565 = G__23612;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_23565){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_23565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto___23595,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15886__auto__ = (function (){var statearr_23594 = f__15885__auto__.call(null);
(statearr_23594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto___23595);

return statearr_23594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto___23595,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15884__auto___23720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto___23720,out){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto___23720,out){
return (function (state_23696){
var state_val_23697 = (state_23696[(1)]);
if((state_val_23697 === (7))){
var inst_23676 = (state_23696[(7)]);
var inst_23675 = (state_23696[(8)]);
var inst_23675__$1 = (state_23696[(2)]);
var inst_23676__$1 = cljs.core.nth.call(null,inst_23675__$1,(0),null);
var inst_23677 = cljs.core.nth.call(null,inst_23675__$1,(1),null);
var inst_23678 = (inst_23676__$1 == null);
var state_23696__$1 = (function (){var statearr_23698 = state_23696;
(statearr_23698[(7)] = inst_23676__$1);

(statearr_23698[(8)] = inst_23675__$1);

(statearr_23698[(9)] = inst_23677);

return statearr_23698;
})();
if(cljs.core.truth_(inst_23678)){
var statearr_23699_23721 = state_23696__$1;
(statearr_23699_23721[(1)] = (8));

} else {
var statearr_23700_23722 = state_23696__$1;
(statearr_23700_23722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23697 === (1))){
var inst_23667 = cljs.core.vec.call(null,chs);
var inst_23668 = inst_23667;
var state_23696__$1 = (function (){var statearr_23701 = state_23696;
(statearr_23701[(10)] = inst_23668);

return statearr_23701;
})();
var statearr_23702_23723 = state_23696__$1;
(statearr_23702_23723[(2)] = null);

(statearr_23702_23723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23697 === (4))){
var inst_23668 = (state_23696[(10)]);
var state_23696__$1 = state_23696;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23696__$1,(7),inst_23668);
} else {
if((state_val_23697 === (6))){
var inst_23692 = (state_23696[(2)]);
var state_23696__$1 = state_23696;
var statearr_23703_23724 = state_23696__$1;
(statearr_23703_23724[(2)] = inst_23692);

(statearr_23703_23724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23697 === (3))){
var inst_23694 = (state_23696[(2)]);
var state_23696__$1 = state_23696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23696__$1,inst_23694);
} else {
if((state_val_23697 === (2))){
var inst_23668 = (state_23696[(10)]);
var inst_23670 = cljs.core.count.call(null,inst_23668);
var inst_23671 = (inst_23670 > (0));
var state_23696__$1 = state_23696;
if(cljs.core.truth_(inst_23671)){
var statearr_23705_23725 = state_23696__$1;
(statearr_23705_23725[(1)] = (4));

} else {
var statearr_23706_23726 = state_23696__$1;
(statearr_23706_23726[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23697 === (11))){
var inst_23668 = (state_23696[(10)]);
var inst_23685 = (state_23696[(2)]);
var tmp23704 = inst_23668;
var inst_23668__$1 = tmp23704;
var state_23696__$1 = (function (){var statearr_23707 = state_23696;
(statearr_23707[(10)] = inst_23668__$1);

(statearr_23707[(11)] = inst_23685);

return statearr_23707;
})();
var statearr_23708_23727 = state_23696__$1;
(statearr_23708_23727[(2)] = null);

(statearr_23708_23727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23697 === (9))){
var inst_23676 = (state_23696[(7)]);
var state_23696__$1 = state_23696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23696__$1,(11),out,inst_23676);
} else {
if((state_val_23697 === (5))){
var inst_23690 = cljs.core.async.close_BANG_.call(null,out);
var state_23696__$1 = state_23696;
var statearr_23709_23728 = state_23696__$1;
(statearr_23709_23728[(2)] = inst_23690);

(statearr_23709_23728[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23697 === (10))){
var inst_23688 = (state_23696[(2)]);
var state_23696__$1 = state_23696;
var statearr_23710_23729 = state_23696__$1;
(statearr_23710_23729[(2)] = inst_23688);

(statearr_23710_23729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23697 === (8))){
var inst_23676 = (state_23696[(7)]);
var inst_23675 = (state_23696[(8)]);
var inst_23668 = (state_23696[(10)]);
var inst_23677 = (state_23696[(9)]);
var inst_23680 = (function (){var c = inst_23677;
var v = inst_23676;
var vec__23673 = inst_23675;
var cs = inst_23668;
return ((function (c,v,vec__23673,cs,inst_23676,inst_23675,inst_23668,inst_23677,state_val_23697,c__15884__auto___23720,out){
return (function (p1__23613_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23613_SHARP_);
});
;})(c,v,vec__23673,cs,inst_23676,inst_23675,inst_23668,inst_23677,state_val_23697,c__15884__auto___23720,out))
})();
var inst_23681 = cljs.core.filterv.call(null,inst_23680,inst_23668);
var inst_23668__$1 = inst_23681;
var state_23696__$1 = (function (){var statearr_23711 = state_23696;
(statearr_23711[(10)] = inst_23668__$1);

return statearr_23711;
})();
var statearr_23712_23730 = state_23696__$1;
(statearr_23712_23730[(2)] = null);

(statearr_23712_23730[(1)] = (2));


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
}
}
}
}
});})(c__15884__auto___23720,out))
;
return ((function (switch__15828__auto__,c__15884__auto___23720,out){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_23716 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23716[(0)] = state_machine__15829__auto__);

(statearr_23716[(1)] = (1));

return statearr_23716;
});
var state_machine__15829__auto____1 = (function (state_23696){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_23696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e23717){if((e23717 instanceof Object)){
var ex__15832__auto__ = e23717;
var statearr_23718_23731 = state_23696;
(statearr_23718_23731[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23732 = state_23696;
state_23696 = G__23732;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_23696){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_23696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto___23720,out))
})();
var state__15886__auto__ = (function (){var statearr_23719 = f__15885__auto__.call(null);
(statearr_23719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto___23720);

return statearr_23719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto___23720,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15884__auto___23825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto___23825,out){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto___23825,out){
return (function (state_23802){
var state_val_23803 = (state_23802[(1)]);
if((state_val_23803 === (7))){
var inst_23784 = (state_23802[(7)]);
var inst_23784__$1 = (state_23802[(2)]);
var inst_23785 = (inst_23784__$1 == null);
var inst_23786 = cljs.core.not.call(null,inst_23785);
var state_23802__$1 = (function (){var statearr_23804 = state_23802;
(statearr_23804[(7)] = inst_23784__$1);

return statearr_23804;
})();
if(inst_23786){
var statearr_23805_23826 = state_23802__$1;
(statearr_23805_23826[(1)] = (8));

} else {
var statearr_23806_23827 = state_23802__$1;
(statearr_23806_23827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23803 === (1))){
var inst_23779 = (0);
var state_23802__$1 = (function (){var statearr_23807 = state_23802;
(statearr_23807[(8)] = inst_23779);

return statearr_23807;
})();
var statearr_23808_23828 = state_23802__$1;
(statearr_23808_23828[(2)] = null);

(statearr_23808_23828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23803 === (4))){
var state_23802__$1 = state_23802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23802__$1,(7),ch);
} else {
if((state_val_23803 === (6))){
var inst_23797 = (state_23802[(2)]);
var state_23802__$1 = state_23802;
var statearr_23809_23829 = state_23802__$1;
(statearr_23809_23829[(2)] = inst_23797);

(statearr_23809_23829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23803 === (3))){
var inst_23799 = (state_23802[(2)]);
var inst_23800 = cljs.core.async.close_BANG_.call(null,out);
var state_23802__$1 = (function (){var statearr_23810 = state_23802;
(statearr_23810[(9)] = inst_23799);

return statearr_23810;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23802__$1,inst_23800);
} else {
if((state_val_23803 === (2))){
var inst_23779 = (state_23802[(8)]);
var inst_23781 = (inst_23779 < n);
var state_23802__$1 = state_23802;
if(cljs.core.truth_(inst_23781)){
var statearr_23811_23830 = state_23802__$1;
(statearr_23811_23830[(1)] = (4));

} else {
var statearr_23812_23831 = state_23802__$1;
(statearr_23812_23831[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23803 === (11))){
var inst_23779 = (state_23802[(8)]);
var inst_23789 = (state_23802[(2)]);
var inst_23790 = (inst_23779 + (1));
var inst_23779__$1 = inst_23790;
var state_23802__$1 = (function (){var statearr_23813 = state_23802;
(statearr_23813[(8)] = inst_23779__$1);

(statearr_23813[(10)] = inst_23789);

return statearr_23813;
})();
var statearr_23814_23832 = state_23802__$1;
(statearr_23814_23832[(2)] = null);

(statearr_23814_23832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23803 === (9))){
var state_23802__$1 = state_23802;
var statearr_23815_23833 = state_23802__$1;
(statearr_23815_23833[(2)] = null);

(statearr_23815_23833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23803 === (5))){
var state_23802__$1 = state_23802;
var statearr_23816_23834 = state_23802__$1;
(statearr_23816_23834[(2)] = null);

(statearr_23816_23834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23803 === (10))){
var inst_23794 = (state_23802[(2)]);
var state_23802__$1 = state_23802;
var statearr_23817_23835 = state_23802__$1;
(statearr_23817_23835[(2)] = inst_23794);

(statearr_23817_23835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23803 === (8))){
var inst_23784 = (state_23802[(7)]);
var state_23802__$1 = state_23802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23802__$1,(11),out,inst_23784);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15884__auto___23825,out))
;
return ((function (switch__15828__auto__,c__15884__auto___23825,out){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_23821 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23821[(0)] = state_machine__15829__auto__);

(statearr_23821[(1)] = (1));

return statearr_23821;
});
var state_machine__15829__auto____1 = (function (state_23802){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_23802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e23822){if((e23822 instanceof Object)){
var ex__15832__auto__ = e23822;
var statearr_23823_23836 = state_23802;
(statearr_23823_23836[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23837 = state_23802;
state_23802 = G__23837;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_23802){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_23802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto___23825,out))
})();
var state__15886__auto__ = (function (){var statearr_23824 = f__15885__auto__.call(null);
(statearr_23824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto___23825);

return statearr_23824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto___23825,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t23845 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23845 = (function (ch,f,map_LT_,meta23846){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23846 = meta23846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23845.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23845.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t23845.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23845.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t23848 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23848 = (function (fn1,_,meta23846,map_LT_,f,ch,meta23849){
this.fn1 = fn1;
this._ = _;
this.meta23846 = meta23846;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23849 = meta23849;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23848.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23848.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t23848.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23838_SHARP_){
return f1.call(null,(((p1__23838_SHARP_ == null))?null:self__.f.call(null,p1__23838_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t23848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23850){
var self__ = this;
var _23850__$1 = this;
return self__.meta23849;
});})(___$1))
;

cljs.core.async.t23848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23850,meta23849__$1){
var self__ = this;
var _23850__$1 = this;
return (new cljs.core.async.t23848(self__.fn1,self__._,self__.meta23846,self__.map_LT_,self__.f,self__.ch,meta23849__$1));
});})(___$1))
;

cljs.core.async.t23848.cljs$lang$type = true;

cljs.core.async.t23848.cljs$lang$ctorStr = "cljs.core.async/t23848";

cljs.core.async.t23848.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13242__auto__,writer__13243__auto__,opt__13244__auto__){
return cljs.core._write.call(null,writer__13243__auto__,"cljs.core.async/t23848");
});})(___$1))
;

cljs.core.async.__GT_t23848 = ((function (___$1){
return (function __GT_t23848(fn1__$1,___$2,meta23846__$1,map_LT___$1,f__$1,ch__$1,meta23849){
return (new cljs.core.async.t23848(fn1__$1,___$2,meta23846__$1,map_LT___$1,f__$1,ch__$1,meta23849));
});})(___$1))
;

}

return (new cljs.core.async.t23848(fn1,___$1,self__.meta23846,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/we/Dropbox/projects/feeds/chestnut-feed/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__12643__auto__ = ret;
if(cljs.core.truth_(and__12643__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__12643__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t23845.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23845.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23845.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t23845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23847){
var self__ = this;
var _23847__$1 = this;
return self__.meta23846;
});

cljs.core.async.t23845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23847,meta23846__$1){
var self__ = this;
var _23847__$1 = this;
return (new cljs.core.async.t23845(self__.ch,self__.f,self__.map_LT_,meta23846__$1));
});

cljs.core.async.t23845.cljs$lang$type = true;

cljs.core.async.t23845.cljs$lang$ctorStr = "cljs.core.async/t23845";

cljs.core.async.t23845.cljs$lang$ctorPrWriter = (function (this__13242__auto__,writer__13243__auto__,opt__13244__auto__){
return cljs.core._write.call(null,writer__13243__auto__,"cljs.core.async/t23845");
});

cljs.core.async.__GT_t23845 = (function __GT_t23845(ch__$1,f__$1,map_LT___$1,meta23846){
return (new cljs.core.async.t23845(ch__$1,f__$1,map_LT___$1,meta23846));
});

}

return (new cljs.core.async.t23845(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/we/Dropbox/projects/feeds/chestnut-feed/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t23854 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23854 = (function (ch,f,map_GT_,meta23855){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23855 = meta23855;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23854.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23854.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t23854.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23854.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t23854.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23854.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23856){
var self__ = this;
var _23856__$1 = this;
return self__.meta23855;
});

cljs.core.async.t23854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23856,meta23855__$1){
var self__ = this;
var _23856__$1 = this;
return (new cljs.core.async.t23854(self__.ch,self__.f,self__.map_GT_,meta23855__$1));
});

cljs.core.async.t23854.cljs$lang$type = true;

cljs.core.async.t23854.cljs$lang$ctorStr = "cljs.core.async/t23854";

cljs.core.async.t23854.cljs$lang$ctorPrWriter = (function (this__13242__auto__,writer__13243__auto__,opt__13244__auto__){
return cljs.core._write.call(null,writer__13243__auto__,"cljs.core.async/t23854");
});

cljs.core.async.__GT_t23854 = (function __GT_t23854(ch__$1,f__$1,map_GT___$1,meta23855){
return (new cljs.core.async.t23854(ch__$1,f__$1,map_GT___$1,meta23855));
});

}

return (new cljs.core.async.t23854(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/we/Dropbox/projects/feeds/chestnut-feed/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t23860 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23860 = (function (ch,p,filter_GT_,meta23861){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23861 = meta23861;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23860.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23860.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t23860.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23860.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t23860.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23860.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23860.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t23860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23862){
var self__ = this;
var _23862__$1 = this;
return self__.meta23861;
});

cljs.core.async.t23860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23862,meta23861__$1){
var self__ = this;
var _23862__$1 = this;
return (new cljs.core.async.t23860(self__.ch,self__.p,self__.filter_GT_,meta23861__$1));
});

cljs.core.async.t23860.cljs$lang$type = true;

cljs.core.async.t23860.cljs$lang$ctorStr = "cljs.core.async/t23860";

cljs.core.async.t23860.cljs$lang$ctorPrWriter = (function (this__13242__auto__,writer__13243__auto__,opt__13244__auto__){
return cljs.core._write.call(null,writer__13243__auto__,"cljs.core.async/t23860");
});

cljs.core.async.__GT_t23860 = (function __GT_t23860(ch__$1,p__$1,filter_GT___$1,meta23861){
return (new cljs.core.async.t23860(ch__$1,p__$1,filter_GT___$1,meta23861));
});

}

return (new cljs.core.async.t23860(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/we/Dropbox/projects/feeds/chestnut-feed/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15884__auto___23945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto___23945,out){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto___23945,out){
return (function (state_23924){
var state_val_23925 = (state_23924[(1)]);
if((state_val_23925 === (7))){
var inst_23920 = (state_23924[(2)]);
var state_23924__$1 = state_23924;
var statearr_23926_23946 = state_23924__$1;
(statearr_23926_23946[(2)] = inst_23920);

(statearr_23926_23946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23925 === (1))){
var state_23924__$1 = state_23924;
var statearr_23927_23947 = state_23924__$1;
(statearr_23927_23947[(2)] = null);

(statearr_23927_23947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23925 === (4))){
var inst_23906 = (state_23924[(7)]);
var inst_23906__$1 = (state_23924[(2)]);
var inst_23907 = (inst_23906__$1 == null);
var state_23924__$1 = (function (){var statearr_23928 = state_23924;
(statearr_23928[(7)] = inst_23906__$1);

return statearr_23928;
})();
if(cljs.core.truth_(inst_23907)){
var statearr_23929_23948 = state_23924__$1;
(statearr_23929_23948[(1)] = (5));

} else {
var statearr_23930_23949 = state_23924__$1;
(statearr_23930_23949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23925 === (6))){
var inst_23906 = (state_23924[(7)]);
var inst_23911 = p.call(null,inst_23906);
var state_23924__$1 = state_23924;
if(cljs.core.truth_(inst_23911)){
var statearr_23931_23950 = state_23924__$1;
(statearr_23931_23950[(1)] = (8));

} else {
var statearr_23932_23951 = state_23924__$1;
(statearr_23932_23951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23925 === (3))){
var inst_23922 = (state_23924[(2)]);
var state_23924__$1 = state_23924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23924__$1,inst_23922);
} else {
if((state_val_23925 === (2))){
var state_23924__$1 = state_23924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23924__$1,(4),ch);
} else {
if((state_val_23925 === (11))){
var inst_23914 = (state_23924[(2)]);
var state_23924__$1 = state_23924;
var statearr_23933_23952 = state_23924__$1;
(statearr_23933_23952[(2)] = inst_23914);

(statearr_23933_23952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23925 === (9))){
var state_23924__$1 = state_23924;
var statearr_23934_23953 = state_23924__$1;
(statearr_23934_23953[(2)] = null);

(statearr_23934_23953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23925 === (5))){
var inst_23909 = cljs.core.async.close_BANG_.call(null,out);
var state_23924__$1 = state_23924;
var statearr_23935_23954 = state_23924__$1;
(statearr_23935_23954[(2)] = inst_23909);

(statearr_23935_23954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23925 === (10))){
var inst_23917 = (state_23924[(2)]);
var state_23924__$1 = (function (){var statearr_23936 = state_23924;
(statearr_23936[(8)] = inst_23917);

return statearr_23936;
})();
var statearr_23937_23955 = state_23924__$1;
(statearr_23937_23955[(2)] = null);

(statearr_23937_23955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23925 === (8))){
var inst_23906 = (state_23924[(7)]);
var state_23924__$1 = state_23924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23924__$1,(11),out,inst_23906);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15884__auto___23945,out))
;
return ((function (switch__15828__auto__,c__15884__auto___23945,out){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_23941 = [null,null,null,null,null,null,null,null,null];
(statearr_23941[(0)] = state_machine__15829__auto__);

(statearr_23941[(1)] = (1));

return statearr_23941;
});
var state_machine__15829__auto____1 = (function (state_23924){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_23924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e23942){if((e23942 instanceof Object)){
var ex__15832__auto__ = e23942;
var statearr_23943_23956 = state_23924;
(statearr_23943_23956[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23957 = state_23924;
state_23924 = G__23957;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_23924){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_23924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto___23945,out))
})();
var state__15886__auto__ = (function (){var statearr_23944 = f__15885__auto__.call(null);
(statearr_23944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto___23945);

return statearr_23944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto___23945,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__15884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto__){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto__){
return (function (state_24123){
var state_val_24124 = (state_24123[(1)]);
if((state_val_24124 === (7))){
var inst_24119 = (state_24123[(2)]);
var state_24123__$1 = state_24123;
var statearr_24125_24166 = state_24123__$1;
(statearr_24125_24166[(2)] = inst_24119);

(statearr_24125_24166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (20))){
var inst_24089 = (state_24123[(7)]);
var inst_24100 = (state_24123[(2)]);
var inst_24101 = cljs.core.next.call(null,inst_24089);
var inst_24075 = inst_24101;
var inst_24076 = null;
var inst_24077 = (0);
var inst_24078 = (0);
var state_24123__$1 = (function (){var statearr_24126 = state_24123;
(statearr_24126[(8)] = inst_24078);

(statearr_24126[(9)] = inst_24076);

(statearr_24126[(10)] = inst_24077);

(statearr_24126[(11)] = inst_24075);

(statearr_24126[(12)] = inst_24100);

return statearr_24126;
})();
var statearr_24127_24167 = state_24123__$1;
(statearr_24127_24167[(2)] = null);

(statearr_24127_24167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (1))){
var state_24123__$1 = state_24123;
var statearr_24128_24168 = state_24123__$1;
(statearr_24128_24168[(2)] = null);

(statearr_24128_24168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (4))){
var inst_24064 = (state_24123[(13)]);
var inst_24064__$1 = (state_24123[(2)]);
var inst_24065 = (inst_24064__$1 == null);
var state_24123__$1 = (function (){var statearr_24129 = state_24123;
(statearr_24129[(13)] = inst_24064__$1);

return statearr_24129;
})();
if(cljs.core.truth_(inst_24065)){
var statearr_24130_24169 = state_24123__$1;
(statearr_24130_24169[(1)] = (5));

} else {
var statearr_24131_24170 = state_24123__$1;
(statearr_24131_24170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (15))){
var state_24123__$1 = state_24123;
var statearr_24135_24171 = state_24123__$1;
(statearr_24135_24171[(2)] = null);

(statearr_24135_24171[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (21))){
var state_24123__$1 = state_24123;
var statearr_24136_24172 = state_24123__$1;
(statearr_24136_24172[(2)] = null);

(statearr_24136_24172[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (13))){
var inst_24078 = (state_24123[(8)]);
var inst_24076 = (state_24123[(9)]);
var inst_24077 = (state_24123[(10)]);
var inst_24075 = (state_24123[(11)]);
var inst_24085 = (state_24123[(2)]);
var inst_24086 = (inst_24078 + (1));
var tmp24132 = inst_24076;
var tmp24133 = inst_24077;
var tmp24134 = inst_24075;
var inst_24075__$1 = tmp24134;
var inst_24076__$1 = tmp24132;
var inst_24077__$1 = tmp24133;
var inst_24078__$1 = inst_24086;
var state_24123__$1 = (function (){var statearr_24137 = state_24123;
(statearr_24137[(8)] = inst_24078__$1);

(statearr_24137[(9)] = inst_24076__$1);

(statearr_24137[(14)] = inst_24085);

(statearr_24137[(10)] = inst_24077__$1);

(statearr_24137[(11)] = inst_24075__$1);

return statearr_24137;
})();
var statearr_24138_24173 = state_24123__$1;
(statearr_24138_24173[(2)] = null);

(statearr_24138_24173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (22))){
var state_24123__$1 = state_24123;
var statearr_24139_24174 = state_24123__$1;
(statearr_24139_24174[(2)] = null);

(statearr_24139_24174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (6))){
var inst_24064 = (state_24123[(13)]);
var inst_24073 = f.call(null,inst_24064);
var inst_24074 = cljs.core.seq.call(null,inst_24073);
var inst_24075 = inst_24074;
var inst_24076 = null;
var inst_24077 = (0);
var inst_24078 = (0);
var state_24123__$1 = (function (){var statearr_24140 = state_24123;
(statearr_24140[(8)] = inst_24078);

(statearr_24140[(9)] = inst_24076);

(statearr_24140[(10)] = inst_24077);

(statearr_24140[(11)] = inst_24075);

return statearr_24140;
})();
var statearr_24141_24175 = state_24123__$1;
(statearr_24141_24175[(2)] = null);

(statearr_24141_24175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (17))){
var inst_24089 = (state_24123[(7)]);
var inst_24093 = cljs.core.chunk_first.call(null,inst_24089);
var inst_24094 = cljs.core.chunk_rest.call(null,inst_24089);
var inst_24095 = cljs.core.count.call(null,inst_24093);
var inst_24075 = inst_24094;
var inst_24076 = inst_24093;
var inst_24077 = inst_24095;
var inst_24078 = (0);
var state_24123__$1 = (function (){var statearr_24142 = state_24123;
(statearr_24142[(8)] = inst_24078);

(statearr_24142[(9)] = inst_24076);

(statearr_24142[(10)] = inst_24077);

(statearr_24142[(11)] = inst_24075);

return statearr_24142;
})();
var statearr_24143_24176 = state_24123__$1;
(statearr_24143_24176[(2)] = null);

(statearr_24143_24176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (3))){
var inst_24121 = (state_24123[(2)]);
var state_24123__$1 = state_24123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24123__$1,inst_24121);
} else {
if((state_val_24124 === (12))){
var inst_24109 = (state_24123[(2)]);
var state_24123__$1 = state_24123;
var statearr_24144_24177 = state_24123__$1;
(statearr_24144_24177[(2)] = inst_24109);

(statearr_24144_24177[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (2))){
var state_24123__$1 = state_24123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24123__$1,(4),in$);
} else {
if((state_val_24124 === (23))){
var inst_24117 = (state_24123[(2)]);
var state_24123__$1 = state_24123;
var statearr_24145_24178 = state_24123__$1;
(statearr_24145_24178[(2)] = inst_24117);

(statearr_24145_24178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (19))){
var inst_24104 = (state_24123[(2)]);
var state_24123__$1 = state_24123;
var statearr_24146_24179 = state_24123__$1;
(statearr_24146_24179[(2)] = inst_24104);

(statearr_24146_24179[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (11))){
var inst_24089 = (state_24123[(7)]);
var inst_24075 = (state_24123[(11)]);
var inst_24089__$1 = cljs.core.seq.call(null,inst_24075);
var state_24123__$1 = (function (){var statearr_24147 = state_24123;
(statearr_24147[(7)] = inst_24089__$1);

return statearr_24147;
})();
if(inst_24089__$1){
var statearr_24148_24180 = state_24123__$1;
(statearr_24148_24180[(1)] = (14));

} else {
var statearr_24149_24181 = state_24123__$1;
(statearr_24149_24181[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (9))){
var inst_24111 = (state_24123[(2)]);
var inst_24112 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24123__$1 = (function (){var statearr_24150 = state_24123;
(statearr_24150[(15)] = inst_24111);

return statearr_24150;
})();
if(cljs.core.truth_(inst_24112)){
var statearr_24151_24182 = state_24123__$1;
(statearr_24151_24182[(1)] = (21));

} else {
var statearr_24152_24183 = state_24123__$1;
(statearr_24152_24183[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (5))){
var inst_24067 = cljs.core.async.close_BANG_.call(null,out);
var state_24123__$1 = state_24123;
var statearr_24153_24184 = state_24123__$1;
(statearr_24153_24184[(2)] = inst_24067);

(statearr_24153_24184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (14))){
var inst_24089 = (state_24123[(7)]);
var inst_24091 = cljs.core.chunked_seq_QMARK_.call(null,inst_24089);
var state_24123__$1 = state_24123;
if(inst_24091){
var statearr_24154_24185 = state_24123__$1;
(statearr_24154_24185[(1)] = (17));

} else {
var statearr_24155_24186 = state_24123__$1;
(statearr_24155_24186[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (16))){
var inst_24107 = (state_24123[(2)]);
var state_24123__$1 = state_24123;
var statearr_24156_24187 = state_24123__$1;
(statearr_24156_24187[(2)] = inst_24107);

(statearr_24156_24187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (10))){
var inst_24078 = (state_24123[(8)]);
var inst_24076 = (state_24123[(9)]);
var inst_24083 = cljs.core._nth.call(null,inst_24076,inst_24078);
var state_24123__$1 = state_24123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24123__$1,(13),out,inst_24083);
} else {
if((state_val_24124 === (18))){
var inst_24089 = (state_24123[(7)]);
var inst_24098 = cljs.core.first.call(null,inst_24089);
var state_24123__$1 = state_24123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24123__$1,(20),out,inst_24098);
} else {
if((state_val_24124 === (8))){
var inst_24078 = (state_24123[(8)]);
var inst_24077 = (state_24123[(10)]);
var inst_24080 = (inst_24078 < inst_24077);
var inst_24081 = inst_24080;
var state_24123__$1 = state_24123;
if(cljs.core.truth_(inst_24081)){
var statearr_24157_24188 = state_24123__$1;
(statearr_24157_24188[(1)] = (10));

} else {
var statearr_24158_24189 = state_24123__$1;
(statearr_24158_24189[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15884__auto__))
;
return ((function (switch__15828__auto__,c__15884__auto__){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_24162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24162[(0)] = state_machine__15829__auto__);

(statearr_24162[(1)] = (1));

return statearr_24162;
});
var state_machine__15829__auto____1 = (function (state_24123){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_24123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e24163){if((e24163 instanceof Object)){
var ex__15832__auto__ = e24163;
var statearr_24164_24190 = state_24123;
(statearr_24164_24190[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24191 = state_24123;
state_24123 = G__24191;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_24123){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_24123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto__))
})();
var state__15886__auto__ = (function (){var statearr_24165 = f__15885__auto__.call(null);
(statearr_24165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto__);

return statearr_24165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto__))
);

return c__15884__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15884__auto___24288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto___24288,out){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto___24288,out){
return (function (state_24263){
var state_val_24264 = (state_24263[(1)]);
if((state_val_24264 === (7))){
var inst_24258 = (state_24263[(2)]);
var state_24263__$1 = state_24263;
var statearr_24265_24289 = state_24263__$1;
(statearr_24265_24289[(2)] = inst_24258);

(statearr_24265_24289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (1))){
var inst_24240 = null;
var state_24263__$1 = (function (){var statearr_24266 = state_24263;
(statearr_24266[(7)] = inst_24240);

return statearr_24266;
})();
var statearr_24267_24290 = state_24263__$1;
(statearr_24267_24290[(2)] = null);

(statearr_24267_24290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (4))){
var inst_24243 = (state_24263[(8)]);
var inst_24243__$1 = (state_24263[(2)]);
var inst_24244 = (inst_24243__$1 == null);
var inst_24245 = cljs.core.not.call(null,inst_24244);
var state_24263__$1 = (function (){var statearr_24268 = state_24263;
(statearr_24268[(8)] = inst_24243__$1);

return statearr_24268;
})();
if(inst_24245){
var statearr_24269_24291 = state_24263__$1;
(statearr_24269_24291[(1)] = (5));

} else {
var statearr_24270_24292 = state_24263__$1;
(statearr_24270_24292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (6))){
var state_24263__$1 = state_24263;
var statearr_24271_24293 = state_24263__$1;
(statearr_24271_24293[(2)] = null);

(statearr_24271_24293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (3))){
var inst_24260 = (state_24263[(2)]);
var inst_24261 = cljs.core.async.close_BANG_.call(null,out);
var state_24263__$1 = (function (){var statearr_24272 = state_24263;
(statearr_24272[(9)] = inst_24260);

return statearr_24272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24263__$1,inst_24261);
} else {
if((state_val_24264 === (2))){
var state_24263__$1 = state_24263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24263__$1,(4),ch);
} else {
if((state_val_24264 === (11))){
var inst_24243 = (state_24263[(8)]);
var inst_24252 = (state_24263[(2)]);
var inst_24240 = inst_24243;
var state_24263__$1 = (function (){var statearr_24273 = state_24263;
(statearr_24273[(10)] = inst_24252);

(statearr_24273[(7)] = inst_24240);

return statearr_24273;
})();
var statearr_24274_24294 = state_24263__$1;
(statearr_24274_24294[(2)] = null);

(statearr_24274_24294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (9))){
var inst_24243 = (state_24263[(8)]);
var state_24263__$1 = state_24263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24263__$1,(11),out,inst_24243);
} else {
if((state_val_24264 === (5))){
var inst_24240 = (state_24263[(7)]);
var inst_24243 = (state_24263[(8)]);
var inst_24247 = cljs.core._EQ_.call(null,inst_24243,inst_24240);
var state_24263__$1 = state_24263;
if(inst_24247){
var statearr_24276_24295 = state_24263__$1;
(statearr_24276_24295[(1)] = (8));

} else {
var statearr_24277_24296 = state_24263__$1;
(statearr_24277_24296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (10))){
var inst_24255 = (state_24263[(2)]);
var state_24263__$1 = state_24263;
var statearr_24278_24297 = state_24263__$1;
(statearr_24278_24297[(2)] = inst_24255);

(statearr_24278_24297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (8))){
var inst_24240 = (state_24263[(7)]);
var tmp24275 = inst_24240;
var inst_24240__$1 = tmp24275;
var state_24263__$1 = (function (){var statearr_24279 = state_24263;
(statearr_24279[(7)] = inst_24240__$1);

return statearr_24279;
})();
var statearr_24280_24298 = state_24263__$1;
(statearr_24280_24298[(2)] = null);

(statearr_24280_24298[(1)] = (2));


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
}
}
}
}
});})(c__15884__auto___24288,out))
;
return ((function (switch__15828__auto__,c__15884__auto___24288,out){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_24284 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24284[(0)] = state_machine__15829__auto__);

(statearr_24284[(1)] = (1));

return statearr_24284;
});
var state_machine__15829__auto____1 = (function (state_24263){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_24263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e24285){if((e24285 instanceof Object)){
var ex__15832__auto__ = e24285;
var statearr_24286_24299 = state_24263;
(statearr_24286_24299[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24300 = state_24263;
state_24263 = G__24300;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_24263){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_24263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto___24288,out))
})();
var state__15886__auto__ = (function (){var statearr_24287 = f__15885__auto__.call(null);
(statearr_24287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto___24288);

return statearr_24287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto___24288,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15884__auto___24435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto___24435,out){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto___24435,out){
return (function (state_24405){
var state_val_24406 = (state_24405[(1)]);
if((state_val_24406 === (7))){
var inst_24401 = (state_24405[(2)]);
var state_24405__$1 = state_24405;
var statearr_24407_24436 = state_24405__$1;
(statearr_24407_24436[(2)] = inst_24401);

(statearr_24407_24436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (1))){
var inst_24368 = (new Array(n));
var inst_24369 = inst_24368;
var inst_24370 = (0);
var state_24405__$1 = (function (){var statearr_24408 = state_24405;
(statearr_24408[(7)] = inst_24370);

(statearr_24408[(8)] = inst_24369);

return statearr_24408;
})();
var statearr_24409_24437 = state_24405__$1;
(statearr_24409_24437[(2)] = null);

(statearr_24409_24437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (4))){
var inst_24373 = (state_24405[(9)]);
var inst_24373__$1 = (state_24405[(2)]);
var inst_24374 = (inst_24373__$1 == null);
var inst_24375 = cljs.core.not.call(null,inst_24374);
var state_24405__$1 = (function (){var statearr_24410 = state_24405;
(statearr_24410[(9)] = inst_24373__$1);

return statearr_24410;
})();
if(inst_24375){
var statearr_24411_24438 = state_24405__$1;
(statearr_24411_24438[(1)] = (5));

} else {
var statearr_24412_24439 = state_24405__$1;
(statearr_24412_24439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (15))){
var inst_24395 = (state_24405[(2)]);
var state_24405__$1 = state_24405;
var statearr_24413_24440 = state_24405__$1;
(statearr_24413_24440[(2)] = inst_24395);

(statearr_24413_24440[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (13))){
var state_24405__$1 = state_24405;
var statearr_24414_24441 = state_24405__$1;
(statearr_24414_24441[(2)] = null);

(statearr_24414_24441[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (6))){
var inst_24370 = (state_24405[(7)]);
var inst_24391 = (inst_24370 > (0));
var state_24405__$1 = state_24405;
if(cljs.core.truth_(inst_24391)){
var statearr_24415_24442 = state_24405__$1;
(statearr_24415_24442[(1)] = (12));

} else {
var statearr_24416_24443 = state_24405__$1;
(statearr_24416_24443[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (3))){
var inst_24403 = (state_24405[(2)]);
var state_24405__$1 = state_24405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24405__$1,inst_24403);
} else {
if((state_val_24406 === (12))){
var inst_24369 = (state_24405[(8)]);
var inst_24393 = cljs.core.vec.call(null,inst_24369);
var state_24405__$1 = state_24405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24405__$1,(15),out,inst_24393);
} else {
if((state_val_24406 === (2))){
var state_24405__$1 = state_24405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24405__$1,(4),ch);
} else {
if((state_val_24406 === (11))){
var inst_24385 = (state_24405[(2)]);
var inst_24386 = (new Array(n));
var inst_24369 = inst_24386;
var inst_24370 = (0);
var state_24405__$1 = (function (){var statearr_24417 = state_24405;
(statearr_24417[(7)] = inst_24370);

(statearr_24417[(10)] = inst_24385);

(statearr_24417[(8)] = inst_24369);

return statearr_24417;
})();
var statearr_24418_24444 = state_24405__$1;
(statearr_24418_24444[(2)] = null);

(statearr_24418_24444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (9))){
var inst_24369 = (state_24405[(8)]);
var inst_24383 = cljs.core.vec.call(null,inst_24369);
var state_24405__$1 = state_24405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24405__$1,(11),out,inst_24383);
} else {
if((state_val_24406 === (5))){
var inst_24370 = (state_24405[(7)]);
var inst_24369 = (state_24405[(8)]);
var inst_24373 = (state_24405[(9)]);
var inst_24378 = (state_24405[(11)]);
var inst_24377 = (inst_24369[inst_24370] = inst_24373);
var inst_24378__$1 = (inst_24370 + (1));
var inst_24379 = (inst_24378__$1 < n);
var state_24405__$1 = (function (){var statearr_24419 = state_24405;
(statearr_24419[(12)] = inst_24377);

(statearr_24419[(11)] = inst_24378__$1);

return statearr_24419;
})();
if(cljs.core.truth_(inst_24379)){
var statearr_24420_24445 = state_24405__$1;
(statearr_24420_24445[(1)] = (8));

} else {
var statearr_24421_24446 = state_24405__$1;
(statearr_24421_24446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (14))){
var inst_24398 = (state_24405[(2)]);
var inst_24399 = cljs.core.async.close_BANG_.call(null,out);
var state_24405__$1 = (function (){var statearr_24423 = state_24405;
(statearr_24423[(13)] = inst_24398);

return statearr_24423;
})();
var statearr_24424_24447 = state_24405__$1;
(statearr_24424_24447[(2)] = inst_24399);

(statearr_24424_24447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (10))){
var inst_24389 = (state_24405[(2)]);
var state_24405__$1 = state_24405;
var statearr_24425_24448 = state_24405__$1;
(statearr_24425_24448[(2)] = inst_24389);

(statearr_24425_24448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (8))){
var inst_24369 = (state_24405[(8)]);
var inst_24378 = (state_24405[(11)]);
var tmp24422 = inst_24369;
var inst_24369__$1 = tmp24422;
var inst_24370 = inst_24378;
var state_24405__$1 = (function (){var statearr_24426 = state_24405;
(statearr_24426[(7)] = inst_24370);

(statearr_24426[(8)] = inst_24369__$1);

return statearr_24426;
})();
var statearr_24427_24449 = state_24405__$1;
(statearr_24427_24449[(2)] = null);

(statearr_24427_24449[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__15884__auto___24435,out))
;
return ((function (switch__15828__auto__,c__15884__auto___24435,out){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_24431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24431[(0)] = state_machine__15829__auto__);

(statearr_24431[(1)] = (1));

return statearr_24431;
});
var state_machine__15829__auto____1 = (function (state_24405){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_24405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e24432){if((e24432 instanceof Object)){
var ex__15832__auto__ = e24432;
var statearr_24433_24450 = state_24405;
(statearr_24433_24450[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24451 = state_24405;
state_24405 = G__24451;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_24405){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_24405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto___24435,out))
})();
var state__15886__auto__ = (function (){var statearr_24434 = f__15885__auto__.call(null);
(statearr_24434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto___24435);

return statearr_24434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto___24435,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15884__auto___24594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15884__auto___24594,out){
return (function (){
var f__15885__auto__ = (function (){var switch__15828__auto__ = ((function (c__15884__auto___24594,out){
return (function (state_24564){
var state_val_24565 = (state_24564[(1)]);
if((state_val_24565 === (7))){
var inst_24560 = (state_24564[(2)]);
var state_24564__$1 = state_24564;
var statearr_24566_24595 = state_24564__$1;
(statearr_24566_24595[(2)] = inst_24560);

(statearr_24566_24595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24565 === (1))){
var inst_24523 = [];
var inst_24524 = inst_24523;
var inst_24525 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24564__$1 = (function (){var statearr_24567 = state_24564;
(statearr_24567[(7)] = inst_24524);

(statearr_24567[(8)] = inst_24525);

return statearr_24567;
})();
var statearr_24568_24596 = state_24564__$1;
(statearr_24568_24596[(2)] = null);

(statearr_24568_24596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24565 === (4))){
var inst_24528 = (state_24564[(9)]);
var inst_24528__$1 = (state_24564[(2)]);
var inst_24529 = (inst_24528__$1 == null);
var inst_24530 = cljs.core.not.call(null,inst_24529);
var state_24564__$1 = (function (){var statearr_24569 = state_24564;
(statearr_24569[(9)] = inst_24528__$1);

return statearr_24569;
})();
if(inst_24530){
var statearr_24570_24597 = state_24564__$1;
(statearr_24570_24597[(1)] = (5));

} else {
var statearr_24571_24598 = state_24564__$1;
(statearr_24571_24598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24565 === (15))){
var inst_24554 = (state_24564[(2)]);
var state_24564__$1 = state_24564;
var statearr_24572_24599 = state_24564__$1;
(statearr_24572_24599[(2)] = inst_24554);

(statearr_24572_24599[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24565 === (13))){
var state_24564__$1 = state_24564;
var statearr_24573_24600 = state_24564__$1;
(statearr_24573_24600[(2)] = null);

(statearr_24573_24600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24565 === (6))){
var inst_24524 = (state_24564[(7)]);
var inst_24549 = inst_24524.length;
var inst_24550 = (inst_24549 > (0));
var state_24564__$1 = state_24564;
if(cljs.core.truth_(inst_24550)){
var statearr_24574_24601 = state_24564__$1;
(statearr_24574_24601[(1)] = (12));

} else {
var statearr_24575_24602 = state_24564__$1;
(statearr_24575_24602[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24565 === (3))){
var inst_24562 = (state_24564[(2)]);
var state_24564__$1 = state_24564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24564__$1,inst_24562);
} else {
if((state_val_24565 === (12))){
var inst_24524 = (state_24564[(7)]);
var inst_24552 = cljs.core.vec.call(null,inst_24524);
var state_24564__$1 = state_24564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24564__$1,(15),out,inst_24552);
} else {
if((state_val_24565 === (2))){
var state_24564__$1 = state_24564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24564__$1,(4),ch);
} else {
if((state_val_24565 === (11))){
var inst_24528 = (state_24564[(9)]);
var inst_24532 = (state_24564[(10)]);
var inst_24542 = (state_24564[(2)]);
var inst_24543 = [];
var inst_24544 = inst_24543.push(inst_24528);
var inst_24524 = inst_24543;
var inst_24525 = inst_24532;
var state_24564__$1 = (function (){var statearr_24576 = state_24564;
(statearr_24576[(7)] = inst_24524);

(statearr_24576[(8)] = inst_24525);

(statearr_24576[(11)] = inst_24544);

(statearr_24576[(12)] = inst_24542);

return statearr_24576;
})();
var statearr_24577_24603 = state_24564__$1;
(statearr_24577_24603[(2)] = null);

(statearr_24577_24603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24565 === (9))){
var inst_24524 = (state_24564[(7)]);
var inst_24540 = cljs.core.vec.call(null,inst_24524);
var state_24564__$1 = state_24564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24564__$1,(11),out,inst_24540);
} else {
if((state_val_24565 === (5))){
var inst_24528 = (state_24564[(9)]);
var inst_24525 = (state_24564[(8)]);
var inst_24532 = (state_24564[(10)]);
var inst_24532__$1 = f.call(null,inst_24528);
var inst_24533 = cljs.core._EQ_.call(null,inst_24532__$1,inst_24525);
var inst_24534 = cljs.core.keyword_identical_QMARK_.call(null,inst_24525,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24535 = (inst_24533) || (inst_24534);
var state_24564__$1 = (function (){var statearr_24578 = state_24564;
(statearr_24578[(10)] = inst_24532__$1);

return statearr_24578;
})();
if(cljs.core.truth_(inst_24535)){
var statearr_24579_24604 = state_24564__$1;
(statearr_24579_24604[(1)] = (8));

} else {
var statearr_24580_24605 = state_24564__$1;
(statearr_24580_24605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24565 === (14))){
var inst_24557 = (state_24564[(2)]);
var inst_24558 = cljs.core.async.close_BANG_.call(null,out);
var state_24564__$1 = (function (){var statearr_24582 = state_24564;
(statearr_24582[(13)] = inst_24557);

return statearr_24582;
})();
var statearr_24583_24606 = state_24564__$1;
(statearr_24583_24606[(2)] = inst_24558);

(statearr_24583_24606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24565 === (10))){
var inst_24547 = (state_24564[(2)]);
var state_24564__$1 = state_24564;
var statearr_24584_24607 = state_24564__$1;
(statearr_24584_24607[(2)] = inst_24547);

(statearr_24584_24607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24565 === (8))){
var inst_24528 = (state_24564[(9)]);
var inst_24524 = (state_24564[(7)]);
var inst_24532 = (state_24564[(10)]);
var inst_24537 = inst_24524.push(inst_24528);
var tmp24581 = inst_24524;
var inst_24524__$1 = tmp24581;
var inst_24525 = inst_24532;
var state_24564__$1 = (function (){var statearr_24585 = state_24564;
(statearr_24585[(14)] = inst_24537);

(statearr_24585[(7)] = inst_24524__$1);

(statearr_24585[(8)] = inst_24525);

return statearr_24585;
})();
var statearr_24586_24608 = state_24564__$1;
(statearr_24586_24608[(2)] = null);

(statearr_24586_24608[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__15884__auto___24594,out))
;
return ((function (switch__15828__auto__,c__15884__auto___24594,out){
return (function() {
var state_machine__15829__auto__ = null;
var state_machine__15829__auto____0 = (function (){
var statearr_24590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24590[(0)] = state_machine__15829__auto__);

(statearr_24590[(1)] = (1));

return statearr_24590;
});
var state_machine__15829__auto____1 = (function (state_24564){
while(true){
var ret_value__15830__auto__ = (function (){try{while(true){
var result__15831__auto__ = switch__15828__auto__.call(null,state_24564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15831__auto__;
}
break;
}
}catch (e24591){if((e24591 instanceof Object)){
var ex__15832__auto__ = e24591;
var statearr_24592_24609 = state_24564;
(statearr_24592_24609[(5)] = ex__15832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24610 = state_24564;
state_24564 = G__24610;
continue;
} else {
return ret_value__15830__auto__;
}
break;
}
});
state_machine__15829__auto__ = function(state_24564){
switch(arguments.length){
case 0:
return state_machine__15829__auto____0.call(this);
case 1:
return state_machine__15829__auto____1.call(this,state_24564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15829__auto____0;
state_machine__15829__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15829__auto____1;
return state_machine__15829__auto__;
})()
;})(switch__15828__auto__,c__15884__auto___24594,out))
})();
var state__15886__auto__ = (function (){var statearr_24593 = f__15885__auto__.call(null);
(statearr_24593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15884__auto___24594);

return statearr_24593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15886__auto__);
});})(c__15884__auto___24594,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map