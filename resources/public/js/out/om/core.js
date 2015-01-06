// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('om.core')) {
goog.provide('om.core');
}
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj24887 = {};
return obj24887;
})();

om.core.display_name = (function display_name(this$){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core.display_name[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core.display_name["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj24889 = {};
return obj24889;
})();

om.core.init_state = (function init_state(this$){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core.init_state[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core.init_state["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj24891 = {};
return obj24891;
})();

om.core.should_update = (function should_update(this$,next_props,next_state){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core.should_update[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core.should_update["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj24893 = {};
return obj24893;
})();

om.core.will_mount = (function will_mount(this$){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core.will_mount[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core.will_mount["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj24895 = {};
return obj24895;
})();

om.core.did_mount = (function did_mount(this$){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core.did_mount[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core.did_mount["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj24897 = {};
return obj24897;
})();

om.core.will_unmount = (function will_unmount(this$){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core.will_unmount[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core.will_unmount["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj24899 = {};
return obj24899;
})();

om.core.will_update = (function will_update(this$,next_props,next_state){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core.will_update[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core.will_update["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj24901 = {};
return obj24901;
})();

om.core.did_update = (function did_update(this$,prev_props,prev_state){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core.did_update[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core.did_update["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj24903 = {};
return obj24903;
})();

om.core.will_receive_props = (function will_receive_props(this$,next_props){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core.will_receive_props[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core.will_receive_props["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj24905 = {};
return obj24905;
})();

om.core.render = (function render(this$){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core.render[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core.render["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj24907 = {};
return obj24907;
})();

om.core.render_props = (function render_props(this$,props,state){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core.render_props[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core.render_props["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj24909 = {};
return obj24909;
})();

om.core.render_state = (function render_state(this$,state){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core.render_state[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core.render_state["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj24911 = {};
return obj24911;
})();


om.core.IOmSwap = (function (){var obj24913 = {};
return obj24913;
})();

om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj24915 = {};
return obj24915;
})();

om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core._get_state[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._get_state["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core._get_state[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._get_state["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;


om.core.IGetRenderState = (function (){var obj24917 = {};
return obj24917;
})();

om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core._get_render_state[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._get_render_state["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core._get_render_state[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._get_render_state["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;


om.core.ISetState = (function (){var obj24919 = {};
return obj24919;
})();

om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;


om.core.IRenderQueue = (function (){var obj24921 = {};
return obj24921;
})();

om.core._get_queue = (function _get_queue(this$){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core._get_queue[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._get_queue["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj24923 = {};
return obj24923;
})();

om.core._value = (function _value(x){
if((function (){var and__12643__auto__ = x;
if(and__12643__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__12643__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__13299__auto__ = (((x == null))?null:x);
return (function (){var or__12655__auto__ = (om.core._value[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._value["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj24925 = {};
return obj24925;
})();

om.core._path = (function _path(cursor){
if((function (){var and__12643__auto__ = cursor;
if(and__12643__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__12643__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__13299__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__12655__auto__ = (om.core._path[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._path["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function _state(cursor){
if((function (){var and__12643__auto__ = cursor;
if(and__12643__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__12643__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__13299__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__12655__auto__ = (om.core._state[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._state["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj24927 = {};
return obj24927;
})();

om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){
if((function (){var and__12643__auto__ = value;
if(and__12643__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__12643__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__13299__auto__ = (((value == null))?null:value);
return (function (){var or__12655__auto__ = (om.core._to_cursor[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._to_cursor["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){
if((function (){var and__12643__auto__ = value;
if(and__12643__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__12643__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__13299__auto__ = (((value == null))?null:value);
return (function (){var or__12655__auto__ = (om.core._to_cursor[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._to_cursor["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;


om.core.ICursorDerive = (function (){var obj24929 = {};
return obj24929;
})();

om.core._derive = (function _derive(cursor,derived,state,path){
if((function (){var and__12643__auto__ = cursor;
if(and__12643__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__12643__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__13299__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__12655__auto__ = (om.core._derive[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._derive["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function state(cursor){
return om.core._state.call(null,cursor);
});

om.core.ITransact = (function (){var obj24931 = {};
return obj24931;
})();

om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){
if((function (){var and__12643__auto__ = cursor;
if(and__12643__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__12643__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__13299__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__12655__auto__ = (om.core._transact_BANG_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj24933 = {};
return obj24933;
})();

om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){
if((function (){var and__12643__auto__ = x;
if(and__12643__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__12643__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__13299__auto__ = (((x == null))?null:x);
return (function (){var or__12655__auto__ = (om.core._listen_BANG_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){
if((function (){var and__12643__auto__ = x;
if(and__12643__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__12643__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__13299__auto__ = (((x == null))?null:x);
return (function (){var or__12655__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__12643__auto__ = x;
if(and__12643__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__12643__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__13299__auto__ = (((x == null))?null:x);
return (function (){var or__12655__auto__ = (om.core._notify_BANG_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj24935 = {};
return obj24935;
})();

om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function _get_property(this$,id,p){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core._get_property[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._get_property["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj24937 = {};
return obj24937;
})();

om.core._root_key = (function _root_key(cursor){
if((function (){var and__12643__auto__ = cursor;
if(and__12643__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__12643__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__13299__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__12655__auto__ = (om.core._root_key[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._root_key["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj24939 = {};
return obj24939;
})();

om.core._adapt = (function _adapt(this$,other){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core._adapt[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._adapt["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function adapt(x,other){
return om.core._adapt.call(null,x,other);
});

om.core.IOmRef = (function (){var obj24941 = {};
return obj24941;
})();

om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function _get_deps(this$){
if((function (){var and__12643__auto__ = this$;
if(and__12643__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__12643__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__13299__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12655__auto__ = (om.core._get_deps[goog.typeOf(x__13299__auto__)]);
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (om.core._get_deps["_"]);
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = (((function (){var G__24943 = state;
if(G__24943){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__24943.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__24943.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__24943);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__24943);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){
var G__24945 = x;
if(G__24945){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__24945.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__24945.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__24945);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__24945);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});
var get_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){
var state = owner.state;
var temp__4388__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4388__auto__)){
var pending_state = temp__4388__auto__;
var G__24947 = state;
(G__24947["__om_prev_state"] = (state["__om_state"]));

(G__24947["__om_state"] = pending_state);

(G__24947["__om_pending_state"] = null);

return G__24947;
} else {
return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){
return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){
var props__$1 = (function (){var or__12655__auto__ = props;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return owner.props;
}
})();
var temp__4388__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4388__auto__)){
var props_state = temp__4388__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__12655__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__24949 = c;
if(G__24949){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__24949.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__24949.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__24949);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__24949);
}
})()){
var state_24970 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__12655__auto__ = (state_24970["__om_prev_state"]);
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return (state_24970["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__24950 = c;
if(G__24950){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__24950.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__24950.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__24950);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__24950);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4388__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4388__auto__){
var refs = temp__4388__auto__;
var seq__24951 = cljs.core.seq.call(null,refs);
var chunk__24952 = null;
var count__24953 = (0);
var i__24954 = (0);
while(true){
if((i__24954 < count__24953)){
var ref = cljs.core._nth.call(null,chunk__24952,i__24954);
om.core.unobserve.call(null,this$,ref);

var G__24971 = seq__24951;
var G__24972 = chunk__24952;
var G__24973 = count__24953;
var G__24974 = (i__24954 + (1));
seq__24951 = G__24971;
chunk__24952 = G__24972;
count__24953 = G__24973;
i__24954 = G__24974;
continue;
} else {
var temp__4388__auto____$1 = cljs.core.seq.call(null,seq__24951);
if(temp__4388__auto____$1){
var seq__24951__$1 = temp__4388__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24951__$1)){
var c__13442__auto__ = cljs.core.chunk_first.call(null,seq__24951__$1);
var G__24975 = cljs.core.chunk_rest.call(null,seq__24951__$1);
var G__24976 = c__13442__auto__;
var G__24977 = cljs.core.count.call(null,c__13442__auto__);
var G__24978 = (0);
seq__24951 = G__24975;
chunk__24952 = G__24976;
count__24953 = G__24977;
i__24954 = G__24978;
continue;
} else {
var ref = cljs.core.first.call(null,seq__24951__$1);
om.core.unobserve.call(null,this$,ref);

var G__24979 = cljs.core.next.call(null,seq__24951__$1);
var G__24980 = null;
var G__24981 = (0);
var G__24982 = (0);
seq__24951 = G__24979;
chunk__24952 = G__24980;
count__24953 = G__24981;
i__24954 = G__24982;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__24955 = c;
if(G__24955){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__24955.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__24955.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__24955);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__24955);
}
})()){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if((function (){var G__24956 = c;
if(G__24956){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__24956.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__24956.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__24956);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__24956);
}
})()){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if((om.core.cursor_QMARK_.call(null,cursor)) && (om.core.cursor_QMARK_.call(null,next_cursor)) && (cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor)))){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__12643__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__12643__auto__){
return cljs.core.some.call(null,((function (and__12643__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__24948_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__24948_SHARP_);
});})(and__12643__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__12643__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_24957 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_24958 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_24959 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_24960 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_24961 = om.core._STAR_root_key_STAR_;
try{om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

if((function (){var G__24962 = c;
if(G__24962){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__24962.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__24962.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__24962);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__24962);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__24963 = c;
if(G__24963){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__24963.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__24963.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__24963);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__24963);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__24964 = c;
if(G__24964){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__24964.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__24964.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__24964);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__24964);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_24961;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_24960;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_24959;

om.core._STAR_state_STAR_ = _STAR_state_STAR_24958;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_24957;
}}),(function (next_props,next_state){
var this$ = this;
var c_24983 = om.core.children.call(null,this$);
if((function (){var G__24965 = c_24983;
if(G__24965){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__24965.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__24965.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__24965);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__24965);
}
})()){
var state_24984 = this$.state;
om.core.will_update.call(null,c_24983,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__12655__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__24966 = c;
if(G__24966){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__24966.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__24966.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__24966);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__24966);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))), "__om_id": (function (){var or__12655__auto__ = id;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__24967 = c;
if(G__24967){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__24967.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__24967.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__24967);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__24967);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__24968 = c;
if(G__24968){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__24968.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__24968.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__24968);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__24968);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_24985 = om.core.children.call(null,this$);
if((function (){var G__24969 = c_24985;
if(G__24969){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__24969.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__24969.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__24969);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__24969);
}
})()){
om.core.will_mount.call(null,c_24985);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){
var x24987 = obj;
x24987.om$core$IGetState$ = true;

x24987.om$core$IGetState$_get_state$arity$1 = ((function (x24987){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__12655__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return (state["__om_state"]);
}
});})(x24987))
;

x24987.om$core$IGetState$_get_state$arity$2 = ((function (x24987){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x24987))
;

x24987.om$core$IGetRenderState$ = true;

x24987.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x24987){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x24987))
;

x24987.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x24987){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x24987))
;

x24987.om$core$ISetState$ = true;

x24987.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x24987){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__12643__auto__ = !((app_state == null));
if(and__12643__auto__){
return render;
} else {
return and__12643__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x24987))
;

x24987.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x24987){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__12643__auto__ = !((app_state == null));
if(and__12643__auto__){
return render;
} else {
return and__12643__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x24987))
;

return x24987;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__12655__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__12655__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__24988 = c;
if(G__24988){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__24988.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__24988.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__24988);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__24988);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_24997 = om.core.children.call(null,this$);
if((function (){var G__24989 = c_24997;
if(G__24989){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__24989.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__24989.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__24989);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__24989);
}
})()){
om.core.will_mount.call(null,c_24997);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__24990 = c;
if(G__24990){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__24990.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__24990.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__24990);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__24990);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.dissoc,new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$));

var temp__4388__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4388__auto__){
var refs = temp__4388__auto__;
var seq__24991 = cljs.core.seq.call(null,refs);
var chunk__24992 = null;
var count__24993 = (0);
var i__24994 = (0);
while(true){
if((i__24994 < count__24993)){
var ref = cljs.core._nth.call(null,chunk__24992,i__24994);
om.core.unobserve.call(null,this$,ref);

var G__24998 = seq__24991;
var G__24999 = chunk__24992;
var G__25000 = count__24993;
var G__25001 = (i__24994 + (1));
seq__24991 = G__24998;
chunk__24992 = G__24999;
count__24993 = G__25000;
i__24994 = G__25001;
continue;
} else {
var temp__4388__auto____$1 = cljs.core.seq.call(null,seq__24991);
if(temp__4388__auto____$1){
var seq__24991__$1 = temp__4388__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24991__$1)){
var c__13442__auto__ = cljs.core.chunk_first.call(null,seq__24991__$1);
var G__25002 = cljs.core.chunk_rest.call(null,seq__24991__$1);
var G__25003 = c__13442__auto__;
var G__25004 = cljs.core.count.call(null,c__13442__auto__);
var G__25005 = (0);
seq__24991 = G__25002;
chunk__24992 = G__25003;
count__24993 = G__25004;
i__24994 = G__25005;
continue;
} else {
var ref = cljs.core.first.call(null,seq__24991__$1);
om.core.unobserve.call(null,this$,ref);

var G__25006 = cljs.core.next.call(null,seq__24991__$1);
var G__25007 = null;
var G__25008 = (0);
var G__25009 = (0);
seq__24991 = G__25006;
chunk__24992 = G__25007;
count__24993 = G__25008;
i__24994 = G__25009;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_25010 = this$.props;
var c_25011 = om.core.children.call(null,this$);
if((function (){var G__24995 = c_25011;
if(G__24995){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__24995.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__24995.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__24995);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__24995);
}
})()){
var state_25012 = this$.state;
om.core.will_update.call(null,c_25011,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if((function (){var G__24996 = c;
if(G__24996){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__24996.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__24996.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__24996);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__24996);
}
})()){
var state_25013 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__12655__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){
var x25015 = cljs.core.clj__GT_js.call(null,methods$);
x25015.om$core$IGetState$ = true;

x25015.om$core$IGetState$_get_state$arity$1 = ((function (x25015){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__12655__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x25015))
;

x25015.om$core$IGetState$_get_state$arity$2 = ((function (x25015){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x25015))
;

x25015.om$core$IGetRenderState$ = true;

x25015.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x25015){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x25015))
;

x25015.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x25015){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x25015))
;

x25015.om$core$ISetState$ = true;

x25015.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x25015){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__12643__auto__ = !((gstate == null));
if(and__12643__auto__){
return render;
} else {
return and__12643__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x25015))
;

x25015.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x25015){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x25015))
;

return x25015;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){
if((function (){var G__25017 = x;
if(G__25017){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__25017.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__25017.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__25017);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__25017);
}
})()){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__25019){
var vec__25020 = p__25019;
var k = cljs.core.nth.call(null,vec__25020,(0),null);
var v = cljs.core.nth.call(null,vec__25020,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__25021 = null;
var G__25021__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__25021__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__25021 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__25021__2.call(this,self__,k);
case 3:
return G__25021__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25021.cljs$core$IFn$_invoke$arity$2 = G__25021__2;
G__25021.cljs$core$IFn$_invoke$arity$3 = G__25021__3;
return G__25021;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args25018){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args25018)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__13242__auto__,writer__13243__auto__,opt__13244__auto__){
return cljs.core._write.call(null,writer__13243__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__25023 = null;
var G__25023__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__25023__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__25023 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__25023__2.call(this,self__,k);
case 3:
return G__25023__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25023.cljs$core$IFn$_invoke$arity$2 = G__25023__2;
G__25023.cljs$core$IFn$_invoke$arity$3 = G__25023__3;
return G__25023;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args25022){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args25022)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__13242__auto__,writer__13243__auto__,opt__13244__auto__){
return cljs.core._write.call(null,writer__13243__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){
var x25025 = cljs.core.clone.call(null,val);
x25025.cljs$core$IEquiv$ = true;

x25025.cljs$core$IEquiv$_equiv$arity$2 = ((function (x25025){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x25025))
;

x25025.om$core$ITransact$ = true;

x25025.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x25025){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x25025))
;

x25025.om$core$ICursor$ = true;

x25025.om$core$ICursor$_path$arity$1 = ((function (x25025){
return (function (_){
var ___$1 = this;
return path;
});})(x25025))
;

x25025.om$core$ICursor$_state$arity$1 = ((function (x25025){
return (function (_){
var ___$1 = this;
return state;
});})(x25025))
;

x25025.cljs$core$IDeref$ = true;

x25025.cljs$core$IDeref$_deref$arity$1 = ((function (x25025){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x25025))
;

return x25025;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){
return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){
return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){
if(om.core.cursor_QMARK_.call(null,val)){
return val;
} else {
if((function (){var G__25028 = val;
if(G__25028){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__25028.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__25028.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__25028);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__25028);
}
})()){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__25029 = val;
if(G__25029){
var bit__13336__auto__ = (G__25029.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__13336__auto__) || (G__25029.cljs$core$ICloneable$)){
return true;
} else {
if((!G__25029.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__25029);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__25029);
}
})()){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){
if((function (){var G__25031 = atom;
if(G__25031){
var bit__13336__auto__ = (G__25031.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__13336__auto__) || (G__25031.cljs$core$IDeref$)){
return true;
} else {
if((!G__25031.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__25031);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__25031);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){
var x25033 = cljs.core.clone.call(null,x);
x25033.om$core$ITransact$ = true;

x25033.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x25033){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x25033))
;

x25033.om$core$ICursorDerive$ = true;

x25033.om$core$ICursorDerive$_derive$arity$4 = ((function (x25033){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x25033))
;

x25033.om$core$IAdapt$ = true;

x25033.om$core$IAdapt$_adapt$arity$2 = ((function (x25033){
return (function (this$,other){
var this$__$1 = this;
return ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x25033))
;

x25033.cljs$core$ICloneable$ = true;

x25033.cljs$core$ICloneable$_clone$arity$1 = ((function (x25033){
return (function (this$){
var this$__$1 = this;
return ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x25033))
;

return x25033;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if((function (){var G__25040 = cursor;
if(G__25040){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__25040.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__25040.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__25040);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__25040);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x25041 = cljs.core.clone.call(null,cursor);
x25041.om$core$ITransact$ = true;

x25041.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x25041,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x25041,path,storage))
;

x25041.om$core$IOmRef$ = true;

x25041.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x25041,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x25041,path,storage))
;

x25041.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x25041,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x25041,path,storage))
;

x25041.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x25041,path,storage){
return (function (_){
var ___$1 = this;
var seq__25042 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__25043 = null;
var count__25044 = (0);
var i__25045 = (0);
while(true){
if((i__25045 < count__25044)){
var c = cljs.core._nth.call(null,chunk__25043,i__25045);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__25046 = seq__25042;
var G__25047 = chunk__25043;
var G__25048 = count__25044;
var G__25049 = (i__25045 + (1));
seq__25042 = G__25046;
chunk__25043 = G__25047;
count__25044 = G__25048;
i__25045 = G__25049;
continue;
} else {
var temp__4388__auto__ = cljs.core.seq.call(null,seq__25042);
if(temp__4388__auto__){
var seq__25042__$1 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25042__$1)){
var c__13442__auto__ = cljs.core.chunk_first.call(null,seq__25042__$1);
var G__25050 = cljs.core.chunk_rest.call(null,seq__25042__$1);
var G__25051 = c__13442__auto__;
var G__25052 = cljs.core.count.call(null,c__13442__auto__);
var G__25053 = (0);
seq__25042 = G__25050;
chunk__25043 = G__25051;
count__25044 = G__25052;
i__25045 = G__25053;
continue;
} else {
var c = cljs.core.first.call(null,seq__25042__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__25054 = cljs.core.next.call(null,seq__25042__$1);
var G__25055 = null;
var G__25056 = (0);
var G__25057 = (0);
seq__25042 = G__25054;
chunk__25043 = G__25055;
count__25044 = G__25056;
i__25045 = G__25057;
continue;
}
} else {
return null;
}
}
break;
}
});})(x25041,path,storage))
;

x25041.om$core$IOmRef$_get_deps$arity$1 = ((function (x25041,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x25041,path,storage))
;

x25041.om$core$ICursorDerive$ = true;

x25041.om$core$ICursorDerive$_derive$arity$4 = ((function (x25041,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x25041,path,storage))
;

return x25041;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__12655__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(om.core.cursor_QMARK_.call(null,ref)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function get_renderT(state){
var or__12655__auto__ = state.om$render$T;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return (0);
}
});
/**
* Force a render of *all* roots. Usage of this function is almost
* never recommended.
*/
om.core.render_all = (function() {
var render_all = null;
var render_all__0 = (function (){
return render_all.call(null,null);
});
var render_all__1 = (function (state){
om.core.refresh_queued = false;

var seq__25062_25066 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__25063_25067 = null;
var count__25064_25068 = (0);
var i__25065_25069 = (0);
while(true){
if((i__25065_25069 < count__25064_25068)){
var f_25070 = cljs.core._nth.call(null,chunk__25063_25067,i__25065_25069);
f_25070.call(null);

var G__25071 = seq__25062_25066;
var G__25072 = chunk__25063_25067;
var G__25073 = count__25064_25068;
var G__25074 = (i__25065_25069 + (1));
seq__25062_25066 = G__25071;
chunk__25063_25067 = G__25072;
count__25064_25068 = G__25073;
i__25065_25069 = G__25074;
continue;
} else {
var temp__4388__auto___25075 = cljs.core.seq.call(null,seq__25062_25066);
if(temp__4388__auto___25075){
var seq__25062_25076__$1 = temp__4388__auto___25075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25062_25076__$1)){
var c__13442__auto___25077 = cljs.core.chunk_first.call(null,seq__25062_25076__$1);
var G__25078 = cljs.core.chunk_rest.call(null,seq__25062_25076__$1);
var G__25079 = c__13442__auto___25077;
var G__25080 = cljs.core.count.call(null,c__13442__auto___25077);
var G__25081 = (0);
seq__25062_25066 = G__25078;
chunk__25063_25067 = G__25079;
count__25064_25068 = G__25080;
i__25065_25069 = G__25081;
continue;
} else {
var f_25082 = cljs.core.first.call(null,seq__25062_25076__$1);
f_25082.call(null);

var G__25083 = cljs.core.next.call(null,seq__25062_25076__$1);
var G__25084 = null;
var G__25085 = (0);
var G__25086 = (0);
seq__25062_25066 = G__25083;
chunk__25063_25067 = G__25084;
count__25064_25068 = G__25085;
i__25065_25069 = G__25086;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});
render_all = function(state){
switch(arguments.length){
case 0:
return render_all__0.call(this);
case 1:
return render_all__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_all.cljs$core$IFn$_invoke$arity$0 = render_all__0;
render_all.cljs$core$IFn$_invoke$arity$1 = render_all__1;
return render_all;
})()
;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){
if((function (){var or__12655__auto__ = (function (){var G__25093 = x;
if(G__25093){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__25093.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__25093.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__25093);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__25093);
}
})();
if(or__12655__auto__){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = (function (){var G__25095 = x;
if(G__25095){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto____$1 = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto____$1)){
return or__12655__auto____$1;
} else {
return G__25095.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__25095.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__25095);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__25095);
}
})();
if(or__12655__auto____$1){
return or__12655__auto____$1;
} else {
var G__25096 = x;
if(G__25096){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto____$2 = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto____$2)){
return or__12655__auto____$2;
} else {
return G__25096.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__25096.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__25096);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__25096);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){
return get_descriptor.call(null,f,null);
});
var get_descriptor__2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__12655__auto__ = descriptor;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
var or__12655__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__12655__auto____$1)){
return or__12655__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.getf = (function() {
var getf = null;
var getf__2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
var getf__3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
getf = function(f,cursor,opts){
switch(arguments.length){
case 2:
return getf__2.call(this,f,cursor);
case 3:
return getf__3.call(this,f,cursor,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
getf.cljs$core$IFn$_invoke$arity$2 = getf__2;
getf.cljs$core$IFn$_invoke$arity$3 = getf__3;
return getf;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){
return build_STAR_.call(null,f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(om.core.valid_opts_QMARK_.call(null,m)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else {
var map__25098 = m;
var map__25098__$1 = ((cljs.core.seq_QMARK_.call(null,map__25098))?cljs.core.apply.call(null,cljs.core.hash_map,map__25098):map__25098);
var opts = cljs.core.get.call(null,map__25098__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var init_state = cljs.core.get.call(null,map__25098__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var state = cljs.core.get.call(null,map__25098__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var key_fn = cljs.core.get.call(null,map__25098__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var key = cljs.core.get.call(null,map__25098__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4386__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4386__auto__)){
var i = temp__4386__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__12655__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__25098,map__25098__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__25098,map__25098__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__25098,map__25098__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__25098,map__25098__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__12655__auto__ = rkey;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){
return build.call(null,f,x,null);
});
var build__3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){
return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){
if((function (){var G__25107 = state;
if(G__25107){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__25107.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__25107.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__25107);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__25107);
}
})()){
} else {
var properties_25115 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_25116 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_25117 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x25108_25118 = state;
x25108_25118.om$core$IRenderQueue$ = true;

x25108_25118.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x25108_25118,properties_25115,listeners_25116,render_queue_25117){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_25117);
});})(x25108_25118,properties_25115,listeners_25116,render_queue_25117))
;

x25108_25118.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x25108_25118,properties_25115,listeners_25116,render_queue_25117){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_25117),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_25117,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x25108_25118,properties_25115,listeners_25116,render_queue_25117))
;

x25108_25118.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x25108_25118,properties_25115,listeners_25116,render_queue_25117){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_25117,cljs.core.empty);
});})(x25108_25118,properties_25115,listeners_25116,render_queue_25117))
;

x25108_25118.om$core$INotify$ = true;

x25108_25118.om$core$INotify$_listen_BANG_$arity$3 = ((function (x25108_25118,properties_25115,listeners_25116,render_queue_25117){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_25116,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x25108_25118,properties_25115,listeners_25116,render_queue_25117))
;

x25108_25118.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x25108_25118,properties_25115,listeners_25116,render_queue_25117){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_25116,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x25108_25118,properties_25115,listeners_25116,render_queue_25117))
;

x25108_25118.om$core$INotify$_notify_BANG_$arity$3 = ((function (x25108_25118,properties_25115,listeners_25116,render_queue_25117){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__25109_25119 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_25116));
var chunk__25110_25120 = null;
var count__25111_25121 = (0);
var i__25112_25122 = (0);
while(true){
if((i__25112_25122 < count__25111_25121)){
var vec__25113_25123 = cljs.core._nth.call(null,chunk__25110_25120,i__25112_25122);
var __25124 = cljs.core.nth.call(null,vec__25113_25123,(0),null);
var f_25125 = cljs.core.nth.call(null,vec__25113_25123,(1),null);
f_25125.call(null,tx_data,root_cursor);

var G__25126 = seq__25109_25119;
var G__25127 = chunk__25110_25120;
var G__25128 = count__25111_25121;
var G__25129 = (i__25112_25122 + (1));
seq__25109_25119 = G__25126;
chunk__25110_25120 = G__25127;
count__25111_25121 = G__25128;
i__25112_25122 = G__25129;
continue;
} else {
var temp__4388__auto___25130 = cljs.core.seq.call(null,seq__25109_25119);
if(temp__4388__auto___25130){
var seq__25109_25131__$1 = temp__4388__auto___25130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25109_25131__$1)){
var c__13442__auto___25132 = cljs.core.chunk_first.call(null,seq__25109_25131__$1);
var G__25133 = cljs.core.chunk_rest.call(null,seq__25109_25131__$1);
var G__25134 = c__13442__auto___25132;
var G__25135 = cljs.core.count.call(null,c__13442__auto___25132);
var G__25136 = (0);
seq__25109_25119 = G__25133;
chunk__25110_25120 = G__25134;
count__25111_25121 = G__25135;
i__25112_25122 = G__25136;
continue;
} else {
var vec__25114_25137 = cljs.core.first.call(null,seq__25109_25131__$1);
var __25138 = cljs.core.nth.call(null,vec__25114_25137,(0),null);
var f_25139 = cljs.core.nth.call(null,vec__25114_25137,(1),null);
f_25139.call(null,tx_data,root_cursor);

var G__25140 = cljs.core.next.call(null,seq__25109_25131__$1);
var G__25141 = null;
var G__25142 = (0);
var G__25143 = (0);
seq__25109_25119 = G__25140;
chunk__25110_25120 = G__25141;
count__25111_25121 = G__25142;
i__25112_25122 = G__25143;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x25108_25118,properties_25115,listeners_25116,render_queue_25117))
;

x25108_25118.om$core$IRootProperties$ = true;

x25108_25118.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x25108_25118,properties_25115,listeners_25116,render_queue_25117){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_25115,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x25108_25118,properties_25115,listeners_25116,render_queue_25117))
;

x25108_25118.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x25108_25118,properties_25115,listeners_25116,render_queue_25117){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_25115,cljs.core.dissoc,id,k);
});})(x25108_25118,properties_25115,listeners_25116,render_queue_25117))
;

x25108_25118.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x25108_25118,properties_25115,listeners_25116,render_queue_25117){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_25115,cljs.core.dissoc,id);
});})(x25108_25118,properties_25115,listeners_25116,render_queue_25117))
;

x25108_25118.om$core$IRootProperties$_get_property$arity$3 = ((function (x25108_25118,properties_25115,listeners_25116,render_queue_25117){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_25115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x25108_25118,properties_25115,listeners_25116,render_queue_25117))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_.call(null,cursor)){
var x25145 = cljs.core.clone.call(null,cursor);
x25145.om$core$IRootKey$ = true;

x25145.om$core$IRootKey$_root_key$arity$1 = ((function (x25145){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x25145))
;

x25145.om$core$IAdapt$ = true;

x25145.om$core$IAdapt$_adapt$arity$2 = ((function (x25145){
return (function (this$,other){
var this$__$1 = this;
return tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x25145))
;

x25145.cljs$core$ICloneable$ = true;

x25145.cljs$core$ICloneable$_clone$arity$1 = ((function (x25145){
return (function (this$){
var this$__$1 = this;
return tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x25145))
;

return x25145;
} else {
return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* :raf        - override requestAnimationFrame based rendering. If
* false setTimeout will be use. If given a function
* will be invoked instead.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__25146){
var map__25209 = p__25146;
var map__25209__$1 = ((cljs.core.seq_QMARK_.call(null,map__25209))?cljs.core.apply.call(null,cljs.core.hash_map,map__25209):map__25209);
var options = map__25209__$1;
var raf = cljs.core.get.call(null,map__25209__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
var adapt = cljs.core.get.call(null,map__25209__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var descriptor = cljs.core.get.call(null,map__25209__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var instrument = cljs.core.get.call(null,map__25209__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var path = cljs.core.get.call(null,map__25209__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tx_listen = cljs.core.get.call(null,map__25209__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var target = cljs.core.get.call(null,map__25209__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__25271 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__25271,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__25271,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__25210 = value;
if(G__25210){
var bit__13336__auto__ = (G__25210.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__13336__auto__) || (G__25210.cljs$core$IAtom$)){
return true;
} else {
if((!G__25210.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__25210);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__25210);
}
})())?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__12655__auto__ = adapt;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__25209,map__25209__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_25272 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_25241 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_25242 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_25243 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_25244 = om.core._STAR_root_key_STAR_;
try{om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_25244;

om.core._STAR_state_STAR_ = _STAR_state_STAR_25243;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_25242;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_25241;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_25272);
} else {
}
}

var queue_25273 = om.core._get_queue.call(null,state__$1);
if(cljs.core.empty_QMARK_.call(null,queue_25273)){
} else {
var seq__25245_25274 = cljs.core.seq.call(null,queue_25273);
var chunk__25246_25275 = null;
var count__25247_25276 = (0);
var i__25248_25277 = (0);
while(true){
if((i__25248_25277 < count__25247_25276)){
var c_25278 = cljs.core._nth.call(null,chunk__25246_25275,i__25248_25277);
if(cljs.core.truth_(c_25278.isMounted())){
var temp__4388__auto___25279 = (c_25278.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4388__auto___25279)){
var next_props_25280 = temp__4388__auto___25279;
(c_25278.props["__om_cursor"] = next_props_25280);

(c_25278.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__12655__auto__ = !((function (){var G__25250 = om.core.children.call(null,c_25278);
if(G__25250){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__25250.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__25250.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__25250);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__25250);
}
})());
if(or__12655__auto__){
return or__12655__auto__;
} else {
return c_25278.shouldComponentUpdate(c_25278.props,c_25278.state);
}
})())){
c_25278.forceUpdate();
} else {
}
} else {
}

var G__25281 = seq__25245_25274;
var G__25282 = chunk__25246_25275;
var G__25283 = count__25247_25276;
var G__25284 = (i__25248_25277 + (1));
seq__25245_25274 = G__25281;
chunk__25246_25275 = G__25282;
count__25247_25276 = G__25283;
i__25248_25277 = G__25284;
continue;
} else {
var temp__4388__auto___25285 = cljs.core.seq.call(null,seq__25245_25274);
if(temp__4388__auto___25285){
var seq__25245_25286__$1 = temp__4388__auto___25285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25245_25286__$1)){
var c__13442__auto___25287 = cljs.core.chunk_first.call(null,seq__25245_25286__$1);
var G__25288 = cljs.core.chunk_rest.call(null,seq__25245_25286__$1);
var G__25289 = c__13442__auto___25287;
var G__25290 = cljs.core.count.call(null,c__13442__auto___25287);
var G__25291 = (0);
seq__25245_25274 = G__25288;
chunk__25246_25275 = G__25289;
count__25247_25276 = G__25290;
i__25248_25277 = G__25291;
continue;
} else {
var c_25292 = cljs.core.first.call(null,seq__25245_25286__$1);
if(cljs.core.truth_(c_25292.isMounted())){
var temp__4388__auto___25293__$1 = (c_25292.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4388__auto___25293__$1)){
var next_props_25294 = temp__4388__auto___25293__$1;
(c_25292.props["__om_cursor"] = next_props_25294);

(c_25292.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__12655__auto__ = !((function (){var G__25252 = om.core.children.call(null,c_25292);
if(G__25252){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__25252.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__25252.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__25252);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__25252);
}
})());
if(or__12655__auto__){
return or__12655__auto__;
} else {
return c_25292.shouldComponentUpdate(c_25292.props,c_25292.state);
}
})())){
c_25292.forceUpdate();
} else {
}
} else {
}

var G__25295 = cljs.core.next.call(null,seq__25245_25286__$1);
var G__25296 = null;
var G__25297 = (0);
var G__25298 = (0);
seq__25245_25274 = G__25295;
chunk__25246_25275 = G__25296;
count__25247_25276 = G__25297;
i__25248_25277 = G__25298;
continue;
}
} else {
}
}
break;
}

om.core._empty_queue_BANG_.call(null,state__$1);
}

var _refs_25299 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_25299)){
} else {
var seq__25253_25300 = cljs.core.seq.call(null,_refs_25299);
var chunk__25254_25301 = null;
var count__25255_25302 = (0);
var i__25256_25303 = (0);
while(true){
if((i__25256_25303 < count__25255_25302)){
var vec__25257_25304 = cljs.core._nth.call(null,chunk__25254_25301,i__25256_25303);
var path_25305__$1 = cljs.core.nth.call(null,vec__25257_25304,(0),null);
var cs_25306 = cljs.core.nth.call(null,vec__25257_25304,(1),null);
var cs_25307__$1 = cljs.core.deref.call(null,cs_25306);
var seq__25258_25308 = cljs.core.seq.call(null,cs_25307__$1);
var chunk__25259_25309 = null;
var count__25260_25310 = (0);
var i__25261_25311 = (0);
while(true){
if((i__25261_25311 < count__25260_25310)){
var vec__25262_25312 = cljs.core._nth.call(null,chunk__25259_25309,i__25261_25311);
var id_25313 = cljs.core.nth.call(null,vec__25262_25312,(0),null);
var c_25314 = cljs.core.nth.call(null,vec__25262_25312,(1),null);
if(cljs.core.truth_(c_25314.shouldComponentUpdate(c_25314.props,c_25314.state))){
c_25314.forceUpdate();
} else {
}

var G__25315 = seq__25258_25308;
var G__25316 = chunk__25259_25309;
var G__25317 = count__25260_25310;
var G__25318 = (i__25261_25311 + (1));
seq__25258_25308 = G__25315;
chunk__25259_25309 = G__25316;
count__25260_25310 = G__25317;
i__25261_25311 = G__25318;
continue;
} else {
var temp__4388__auto___25319 = cljs.core.seq.call(null,seq__25258_25308);
if(temp__4388__auto___25319){
var seq__25258_25320__$1 = temp__4388__auto___25319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25258_25320__$1)){
var c__13442__auto___25321 = cljs.core.chunk_first.call(null,seq__25258_25320__$1);
var G__25322 = cljs.core.chunk_rest.call(null,seq__25258_25320__$1);
var G__25323 = c__13442__auto___25321;
var G__25324 = cljs.core.count.call(null,c__13442__auto___25321);
var G__25325 = (0);
seq__25258_25308 = G__25322;
chunk__25259_25309 = G__25323;
count__25260_25310 = G__25324;
i__25261_25311 = G__25325;
continue;
} else {
var vec__25263_25326 = cljs.core.first.call(null,seq__25258_25320__$1);
var id_25327 = cljs.core.nth.call(null,vec__25263_25326,(0),null);
var c_25328 = cljs.core.nth.call(null,vec__25263_25326,(1),null);
if(cljs.core.truth_(c_25328.shouldComponentUpdate(c_25328.props,c_25328.state))){
c_25328.forceUpdate();
} else {
}

var G__25329 = cljs.core.next.call(null,seq__25258_25320__$1);
var G__25330 = null;
var G__25331 = (0);
var G__25332 = (0);
seq__25258_25308 = G__25329;
chunk__25259_25309 = G__25330;
count__25260_25310 = G__25331;
i__25261_25311 = G__25332;
continue;
}
} else {
}
}
break;
}

var G__25333 = seq__25253_25300;
var G__25334 = chunk__25254_25301;
var G__25335 = count__25255_25302;
var G__25336 = (i__25256_25303 + (1));
seq__25253_25300 = G__25333;
chunk__25254_25301 = G__25334;
count__25255_25302 = G__25335;
i__25256_25303 = G__25336;
continue;
} else {
var temp__4388__auto___25337 = cljs.core.seq.call(null,seq__25253_25300);
if(temp__4388__auto___25337){
var seq__25253_25338__$1 = temp__4388__auto___25337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25253_25338__$1)){
var c__13442__auto___25339 = cljs.core.chunk_first.call(null,seq__25253_25338__$1);
var G__25340 = cljs.core.chunk_rest.call(null,seq__25253_25338__$1);
var G__25341 = c__13442__auto___25339;
var G__25342 = cljs.core.count.call(null,c__13442__auto___25339);
var G__25343 = (0);
seq__25253_25300 = G__25340;
chunk__25254_25301 = G__25341;
count__25255_25302 = G__25342;
i__25256_25303 = G__25343;
continue;
} else {
var vec__25264_25344 = cljs.core.first.call(null,seq__25253_25338__$1);
var path_25345__$1 = cljs.core.nth.call(null,vec__25264_25344,(0),null);
var cs_25346 = cljs.core.nth.call(null,vec__25264_25344,(1),null);
var cs_25347__$1 = cljs.core.deref.call(null,cs_25346);
var seq__25265_25348 = cljs.core.seq.call(null,cs_25347__$1);
var chunk__25266_25349 = null;
var count__25267_25350 = (0);
var i__25268_25351 = (0);
while(true){
if((i__25268_25351 < count__25267_25350)){
var vec__25269_25352 = cljs.core._nth.call(null,chunk__25266_25349,i__25268_25351);
var id_25353 = cljs.core.nth.call(null,vec__25269_25352,(0),null);
var c_25354 = cljs.core.nth.call(null,vec__25269_25352,(1),null);
if(cljs.core.truth_(c_25354.shouldComponentUpdate(c_25354.props,c_25354.state))){
c_25354.forceUpdate();
} else {
}

var G__25355 = seq__25265_25348;
var G__25356 = chunk__25266_25349;
var G__25357 = count__25267_25350;
var G__25358 = (i__25268_25351 + (1));
seq__25265_25348 = G__25355;
chunk__25266_25349 = G__25356;
count__25267_25350 = G__25357;
i__25268_25351 = G__25358;
continue;
} else {
var temp__4388__auto___25359__$1 = cljs.core.seq.call(null,seq__25265_25348);
if(temp__4388__auto___25359__$1){
var seq__25265_25360__$1 = temp__4388__auto___25359__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25265_25360__$1)){
var c__13442__auto___25361 = cljs.core.chunk_first.call(null,seq__25265_25360__$1);
var G__25362 = cljs.core.chunk_rest.call(null,seq__25265_25360__$1);
var G__25363 = c__13442__auto___25361;
var G__25364 = cljs.core.count.call(null,c__13442__auto___25361);
var G__25365 = (0);
seq__25265_25348 = G__25362;
chunk__25266_25349 = G__25363;
count__25267_25350 = G__25364;
i__25268_25351 = G__25365;
continue;
} else {
var vec__25270_25366 = cljs.core.first.call(null,seq__25265_25360__$1);
var id_25367 = cljs.core.nth.call(null,vec__25270_25366,(0),null);
var c_25368 = cljs.core.nth.call(null,vec__25270_25366,(1),null);
if(cljs.core.truth_(c_25368.shouldComponentUpdate(c_25368.props,c_25368.state))){
c_25368.forceUpdate();
} else {
}

var G__25369 = cljs.core.next.call(null,seq__25265_25360__$1);
var G__25370 = null;
var G__25371 = (0);
var G__25372 = (0);
seq__25265_25348 = G__25369;
chunk__25266_25349 = G__25370;
count__25267_25350 = G__25371;
i__25268_25351 = G__25372;
continue;
}
} else {
}
}
break;
}

var G__25373 = cljs.core.next.call(null,seq__25253_25338__$1);
var G__25374 = null;
var G__25375 = (0);
var G__25376 = (0);
seq__25253_25300 = G__25373;
chunk__25254_25301 = G__25374;
count__25255_25302 = G__25375;
i__25256_25303 = G__25376;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__25209,map__25209__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__25209,map__25209__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__25209,map__25209__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__25209,map__25209__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__25209,map__25209__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__25209,map__25209__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__25209,map__25209__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__25209,map__25209__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__25209,map__25209__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf.call(null);
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4388__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4388__auto__)){
var f = temp__4388__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function transactable_QMARK_(x){
var G__25378 = x;
if(G__25378){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__25378.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__25378.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__25378);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__25378);
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){
return transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){
return transact_BANG_.call(null,cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){
if(om.core.transactable_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = (((function (){var G__25380 = cursor;
if(G__25380){
var bit__13336__auto__ = null;
if(cljs.core.truth_((function (){var or__12655__auto__ = bit__13336__auto__;
if(cljs.core.truth_(or__12655__auto__)){
return or__12655__auto__;
} else {
return G__25380.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__25380.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__25380);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__25380);
}
})())?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){
return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var temp__4388__auto__ = owner.refs;
if(cljs.core.truth_(temp__4388__auto__)){
var refs = temp__4388__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){
return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_nr_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});
var get_render_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;

//# sourceMappingURL=core.js.map