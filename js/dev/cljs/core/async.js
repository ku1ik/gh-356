// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args25164 = [];
var len__19846__auto___25170 = arguments.length;
var i__19847__auto___25171 = (0);
while(true){
if((i__19847__auto___25171 < len__19846__auto___25170)){
args25164.push((arguments[i__19847__auto___25171]));

var G__25172 = (i__19847__auto___25171 + (1));
i__19847__auto___25171 = G__25172;
continue;
} else {
}
break;
}

var G__25166 = args25164.length;
switch (G__25166) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25164.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async25167 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25167 = (function (f,blockable,meta25168){
this.f = f;
this.blockable = blockable;
this.meta25168 = meta25168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25169,meta25168__$1){
var self__ = this;
var _25169__$1 = this;
return (new cljs.core.async.t_cljs$core$async25167(self__.f,self__.blockable,meta25168__$1));
});

cljs.core.async.t_cljs$core$async25167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25169){
var self__ = this;
var _25169__$1 = this;
return self__.meta25168;
});

cljs.core.async.t_cljs$core$async25167.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25167.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25167.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25167.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25168","meta25168",-1704856395,null)], null);
});

cljs.core.async.t_cljs$core$async25167.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25167";

cljs.core.async.t_cljs$core$async25167.cljs$lang$ctorPrWriter = (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cljs.core.async/t_cljs$core$async25167");
});

cljs.core.async.__GT_t_cljs$core$async25167 = (function cljs$core$async$__GT_t_cljs$core$async25167(f__$1,blockable__$1,meta25168){
return (new cljs.core.async.t_cljs$core$async25167(f__$1,blockable__$1,meta25168));
});

}

return (new cljs.core.async.t_cljs$core$async25167(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args25176 = [];
var len__19846__auto___25179 = arguments.length;
var i__19847__auto___25180 = (0);
while(true){
if((i__19847__auto___25180 < len__19846__auto___25179)){
args25176.push((arguments[i__19847__auto___25180]));

var G__25181 = (i__19847__auto___25180 + (1));
i__19847__auto___25180 = G__25181;
continue;
} else {
}
break;
}

var G__25178 = args25176.length;
switch (G__25178) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25176.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
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

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args25183 = [];
var len__19846__auto___25186 = arguments.length;
var i__19847__auto___25187 = (0);
while(true){
if((i__19847__auto___25187 < len__19846__auto___25186)){
args25183.push((arguments[i__19847__auto___25187]));

var G__25188 = (i__19847__auto___25187 + (1));
i__19847__auto___25187 = G__25188;
continue;
} else {
}
break;
}

var G__25185 = args25183.length;
switch (G__25185) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25183.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args25190 = [];
var len__19846__auto___25193 = arguments.length;
var i__19847__auto___25194 = (0);
while(true){
if((i__19847__auto___25194 < len__19846__auto___25193)){
args25190.push((arguments[i__19847__auto___25194]));

var G__25195 = (i__19847__auto___25194 + (1));
i__19847__auto___25194 = G__25195;
continue;
} else {
}
break;
}

var G__25192 = args25190.length;
switch (G__25192) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25190.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25197 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25197);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25197,ret){
return (function (){
return fn1.call(null,val_25197);
});})(val_25197,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args25198 = [];
var len__19846__auto___25201 = arguments.length;
var i__19847__auto___25202 = (0);
while(true){
if((i__19847__auto___25202 < len__19846__auto___25201)){
args25198.push((arguments[i__19847__auto___25202]));

var G__25203 = (i__19847__auto___25202 + (1));
i__19847__auto___25202 = G__25203;
continue;
} else {
}
break;
}

var G__25200 = args25198.length;
switch (G__25200) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25198.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19691__auto___25205 = n;
var x_25206 = (0);
while(true){
if((x_25206 < n__19691__auto___25205)){
(a[x_25206] = (0));

var G__25207 = (x_25206 + (1));
x_25206 = G__25207;
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

var G__25208 = (i + (1));
i = G__25208;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25212 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25212 = (function (alt_flag,flag,meta25213){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25213 = meta25213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25214,meta25213__$1){
var self__ = this;
var _25214__$1 = this;
return (new cljs.core.async.t_cljs$core$async25212(self__.alt_flag,self__.flag,meta25213__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25214){
var self__ = this;
var _25214__$1 = this;
return self__.meta25213;
});})(flag))
;

cljs.core.async.t_cljs$core$async25212.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25212.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25212.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25212.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25212.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25213","meta25213",1783838499,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25212.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25212";

cljs.core.async.t_cljs$core$async25212.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cljs.core.async/t_cljs$core$async25212");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25212 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25212(alt_flag__$1,flag__$1,meta25213){
return (new cljs.core.async.t_cljs$core$async25212(alt_flag__$1,flag__$1,meta25213));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25212(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25218 = (function (alt_handler,flag,cb,meta25219){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25219 = meta25219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25220,meta25219__$1){
var self__ = this;
var _25220__$1 = this;
return (new cljs.core.async.t_cljs$core$async25218(self__.alt_handler,self__.flag,self__.cb,meta25219__$1));
});

cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25220){
var self__ = this;
var _25220__$1 = this;
return self__.meta25219;
});

cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25219","meta25219",1354289961,null)], null);
});

cljs.core.async.t_cljs$core$async25218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25218";

cljs.core.async.t_cljs$core$async25218.cljs$lang$ctorPrWriter = (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cljs.core.async/t_cljs$core$async25218");
});

cljs.core.async.__GT_t_cljs$core$async25218 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25218(alt_handler__$1,flag__$1,cb__$1,meta25219){
return (new cljs.core.async.t_cljs$core$async25218(alt_handler__$1,flag__$1,cb__$1,meta25219));
});

}

return (new cljs.core.async.t_cljs$core$async25218(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__25221_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25221_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25222_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25222_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18788__auto__ = wport;
if(cljs.core.truth_(or__18788__auto__)){
return or__18788__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25223 = (i + (1));
i = G__25223;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18788__auto__ = ret;
if(cljs.core.truth_(or__18788__auto__)){
return or__18788__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__18776__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18776__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18776__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19853__auto__ = [];
var len__19846__auto___25229 = arguments.length;
var i__19847__auto___25230 = (0);
while(true){
if((i__19847__auto___25230 < len__19846__auto___25229)){
args__19853__auto__.push((arguments[i__19847__auto___25230]));

var G__25231 = (i__19847__auto___25230 + (1));
i__19847__auto___25230 = G__25231;
continue;
} else {
}
break;
}

var argseq__19854__auto__ = ((((1) < args__19853__auto__.length))?(new cljs.core.IndexedSeq(args__19853__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19854__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25226){
var map__25227 = p__25226;
var map__25227__$1 = ((((!((map__25227 == null)))?((((map__25227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25227):map__25227);
var opts = map__25227__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25224){
var G__25225 = cljs.core.first.call(null,seq25224);
var seq25224__$1 = cljs.core.next.call(null,seq25224);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25225,seq25224__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args25232 = [];
var len__19846__auto___25282 = arguments.length;
var i__19847__auto___25283 = (0);
while(true){
if((i__19847__auto___25283 < len__19846__auto___25282)){
args25232.push((arguments[i__19847__auto___25283]));

var G__25284 = (i__19847__auto___25283 + (1));
i__19847__auto___25283 = G__25284;
continue;
} else {
}
break;
}

var G__25234 = args25232.length;
switch (G__25234) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25232.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25119__auto___25286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___25286){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___25286){
return (function (state_25258){
var state_val_25259 = (state_25258[(1)]);
if((state_val_25259 === (7))){
var inst_25254 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
var statearr_25260_25287 = state_25258__$1;
(statearr_25260_25287[(2)] = inst_25254);

(statearr_25260_25287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (1))){
var state_25258__$1 = state_25258;
var statearr_25261_25288 = state_25258__$1;
(statearr_25261_25288[(2)] = null);

(statearr_25261_25288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (4))){
var inst_25237 = (state_25258[(7)]);
var inst_25237__$1 = (state_25258[(2)]);
var inst_25238 = (inst_25237__$1 == null);
var state_25258__$1 = (function (){var statearr_25262 = state_25258;
(statearr_25262[(7)] = inst_25237__$1);

return statearr_25262;
})();
if(cljs.core.truth_(inst_25238)){
var statearr_25263_25289 = state_25258__$1;
(statearr_25263_25289[(1)] = (5));

} else {
var statearr_25264_25290 = state_25258__$1;
(statearr_25264_25290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (13))){
var state_25258__$1 = state_25258;
var statearr_25265_25291 = state_25258__$1;
(statearr_25265_25291[(2)] = null);

(statearr_25265_25291[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (6))){
var inst_25237 = (state_25258[(7)]);
var state_25258__$1 = state_25258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25258__$1,(11),to,inst_25237);
} else {
if((state_val_25259 === (3))){
var inst_25256 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25258__$1,inst_25256);
} else {
if((state_val_25259 === (12))){
var state_25258__$1 = state_25258;
var statearr_25266_25292 = state_25258__$1;
(statearr_25266_25292[(2)] = null);

(statearr_25266_25292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (2))){
var state_25258__$1 = state_25258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25258__$1,(4),from);
} else {
if((state_val_25259 === (11))){
var inst_25247 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
if(cljs.core.truth_(inst_25247)){
var statearr_25267_25293 = state_25258__$1;
(statearr_25267_25293[(1)] = (12));

} else {
var statearr_25268_25294 = state_25258__$1;
(statearr_25268_25294[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (9))){
var state_25258__$1 = state_25258;
var statearr_25269_25295 = state_25258__$1;
(statearr_25269_25295[(2)] = null);

(statearr_25269_25295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (5))){
var state_25258__$1 = state_25258;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25270_25296 = state_25258__$1;
(statearr_25270_25296[(1)] = (8));

} else {
var statearr_25271_25297 = state_25258__$1;
(statearr_25271_25297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (14))){
var inst_25252 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
var statearr_25272_25298 = state_25258__$1;
(statearr_25272_25298[(2)] = inst_25252);

(statearr_25272_25298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (10))){
var inst_25244 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
var statearr_25273_25299 = state_25258__$1;
(statearr_25273_25299[(2)] = inst_25244);

(statearr_25273_25299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25259 === (8))){
var inst_25241 = cljs.core.async.close_BANG_.call(null,to);
var state_25258__$1 = state_25258;
var statearr_25274_25300 = state_25258__$1;
(statearr_25274_25300[(2)] = inst_25241);

(statearr_25274_25300[(1)] = (10));


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
});})(c__25119__auto___25286))
;
return ((function (switch__25007__auto__,c__25119__auto___25286){
return (function() {
var cljs$core$async$state_machine__25008__auto__ = null;
var cljs$core$async$state_machine__25008__auto____0 = (function (){
var statearr_25278 = [null,null,null,null,null,null,null,null];
(statearr_25278[(0)] = cljs$core$async$state_machine__25008__auto__);

(statearr_25278[(1)] = (1));

return statearr_25278;
});
var cljs$core$async$state_machine__25008__auto____1 = (function (state_25258){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_25258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e25279){if((e25279 instanceof Object)){
var ex__25011__auto__ = e25279;
var statearr_25280_25301 = state_25258;
(statearr_25280_25301[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25302 = state_25258;
state_25258 = G__25302;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$state_machine__25008__auto__ = function(state_25258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25008__auto____1.call(this,state_25258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25008__auto____0;
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25008__auto____1;
return cljs$core$async$state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___25286))
})();
var state__25121__auto__ = (function (){var statearr_25281 = f__25120__auto__.call(null);
(statearr_25281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___25286);

return statearr_25281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___25286))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25486){
var vec__25487 = p__25486;
var v = cljs.core.nth.call(null,vec__25487,(0),null);
var p = cljs.core.nth.call(null,vec__25487,(1),null);
var job = vec__25487;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25119__auto___25669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___25669,res,vec__25487,v,p,job,jobs,results){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___25669,res,vec__25487,v,p,job,jobs,results){
return (function (state_25492){
var state_val_25493 = (state_25492[(1)]);
if((state_val_25493 === (1))){
var state_25492__$1 = state_25492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25492__$1,(2),res,v);
} else {
if((state_val_25493 === (2))){
var inst_25489 = (state_25492[(2)]);
var inst_25490 = cljs.core.async.close_BANG_.call(null,res);
var state_25492__$1 = (function (){var statearr_25494 = state_25492;
(statearr_25494[(7)] = inst_25489);

return statearr_25494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25492__$1,inst_25490);
} else {
return null;
}
}
});})(c__25119__auto___25669,res,vec__25487,v,p,job,jobs,results))
;
return ((function (switch__25007__auto__,c__25119__auto___25669,res,vec__25487,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____0 = (function (){
var statearr_25498 = [null,null,null,null,null,null,null,null];
(statearr_25498[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__);

(statearr_25498[(1)] = (1));

return statearr_25498;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____1 = (function (state_25492){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_25492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e25499){if((e25499 instanceof Object)){
var ex__25011__auto__ = e25499;
var statearr_25500_25670 = state_25492;
(statearr_25500_25670[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25671 = state_25492;
state_25492 = G__25671;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__ = function(state_25492){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____1.call(this,state_25492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___25669,res,vec__25487,v,p,job,jobs,results))
})();
var state__25121__auto__ = (function (){var statearr_25501 = f__25120__auto__.call(null);
(statearr_25501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___25669);

return statearr_25501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___25669,res,vec__25487,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25502){
var vec__25503 = p__25502;
var v = cljs.core.nth.call(null,vec__25503,(0),null);
var p = cljs.core.nth.call(null,vec__25503,(1),null);
var job = vec__25503;
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
var n__19691__auto___25672 = n;
var __25673 = (0);
while(true){
if((__25673 < n__19691__auto___25672)){
var G__25504_25674 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25504_25674) {
case "compute":
var c__25119__auto___25676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25673,c__25119__auto___25676,G__25504_25674,n__19691__auto___25672,jobs,results,process,async){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (__25673,c__25119__auto___25676,G__25504_25674,n__19691__auto___25672,jobs,results,process,async){
return (function (state_25517){
var state_val_25518 = (state_25517[(1)]);
if((state_val_25518 === (1))){
var state_25517__$1 = state_25517;
var statearr_25519_25677 = state_25517__$1;
(statearr_25519_25677[(2)] = null);

(statearr_25519_25677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25518 === (2))){
var state_25517__$1 = state_25517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25517__$1,(4),jobs);
} else {
if((state_val_25518 === (3))){
var inst_25515 = (state_25517[(2)]);
var state_25517__$1 = state_25517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25517__$1,inst_25515);
} else {
if((state_val_25518 === (4))){
var inst_25507 = (state_25517[(2)]);
var inst_25508 = process.call(null,inst_25507);
var state_25517__$1 = state_25517;
if(cljs.core.truth_(inst_25508)){
var statearr_25520_25678 = state_25517__$1;
(statearr_25520_25678[(1)] = (5));

} else {
var statearr_25521_25679 = state_25517__$1;
(statearr_25521_25679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25518 === (5))){
var state_25517__$1 = state_25517;
var statearr_25522_25680 = state_25517__$1;
(statearr_25522_25680[(2)] = null);

(statearr_25522_25680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25518 === (6))){
var state_25517__$1 = state_25517;
var statearr_25523_25681 = state_25517__$1;
(statearr_25523_25681[(2)] = null);

(statearr_25523_25681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25518 === (7))){
var inst_25513 = (state_25517[(2)]);
var state_25517__$1 = state_25517;
var statearr_25524_25682 = state_25517__$1;
(statearr_25524_25682[(2)] = inst_25513);

(statearr_25524_25682[(1)] = (3));


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
});})(__25673,c__25119__auto___25676,G__25504_25674,n__19691__auto___25672,jobs,results,process,async))
;
return ((function (__25673,switch__25007__auto__,c__25119__auto___25676,G__25504_25674,n__19691__auto___25672,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____0 = (function (){
var statearr_25528 = [null,null,null,null,null,null,null];
(statearr_25528[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__);

(statearr_25528[(1)] = (1));

return statearr_25528;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____1 = (function (state_25517){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_25517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e25529){if((e25529 instanceof Object)){
var ex__25011__auto__ = e25529;
var statearr_25530_25683 = state_25517;
(statearr_25530_25683[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25684 = state_25517;
state_25517 = G__25684;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__ = function(state_25517){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____1.call(this,state_25517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__;
})()
;})(__25673,switch__25007__auto__,c__25119__auto___25676,G__25504_25674,n__19691__auto___25672,jobs,results,process,async))
})();
var state__25121__auto__ = (function (){var statearr_25531 = f__25120__auto__.call(null);
(statearr_25531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___25676);

return statearr_25531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(__25673,c__25119__auto___25676,G__25504_25674,n__19691__auto___25672,jobs,results,process,async))
);


break;
case "async":
var c__25119__auto___25685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25673,c__25119__auto___25685,G__25504_25674,n__19691__auto___25672,jobs,results,process,async){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (__25673,c__25119__auto___25685,G__25504_25674,n__19691__auto___25672,jobs,results,process,async){
return (function (state_25544){
var state_val_25545 = (state_25544[(1)]);
if((state_val_25545 === (1))){
var state_25544__$1 = state_25544;
var statearr_25546_25686 = state_25544__$1;
(statearr_25546_25686[(2)] = null);

(statearr_25546_25686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (2))){
var state_25544__$1 = state_25544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25544__$1,(4),jobs);
} else {
if((state_val_25545 === (3))){
var inst_25542 = (state_25544[(2)]);
var state_25544__$1 = state_25544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25544__$1,inst_25542);
} else {
if((state_val_25545 === (4))){
var inst_25534 = (state_25544[(2)]);
var inst_25535 = async.call(null,inst_25534);
var state_25544__$1 = state_25544;
if(cljs.core.truth_(inst_25535)){
var statearr_25547_25687 = state_25544__$1;
(statearr_25547_25687[(1)] = (5));

} else {
var statearr_25548_25688 = state_25544__$1;
(statearr_25548_25688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (5))){
var state_25544__$1 = state_25544;
var statearr_25549_25689 = state_25544__$1;
(statearr_25549_25689[(2)] = null);

(statearr_25549_25689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (6))){
var state_25544__$1 = state_25544;
var statearr_25550_25690 = state_25544__$1;
(statearr_25550_25690[(2)] = null);

(statearr_25550_25690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (7))){
var inst_25540 = (state_25544[(2)]);
var state_25544__$1 = state_25544;
var statearr_25551_25691 = state_25544__$1;
(statearr_25551_25691[(2)] = inst_25540);

(statearr_25551_25691[(1)] = (3));


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
});})(__25673,c__25119__auto___25685,G__25504_25674,n__19691__auto___25672,jobs,results,process,async))
;
return ((function (__25673,switch__25007__auto__,c__25119__auto___25685,G__25504_25674,n__19691__auto___25672,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____0 = (function (){
var statearr_25555 = [null,null,null,null,null,null,null];
(statearr_25555[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__);

(statearr_25555[(1)] = (1));

return statearr_25555;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____1 = (function (state_25544){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_25544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e25556){if((e25556 instanceof Object)){
var ex__25011__auto__ = e25556;
var statearr_25557_25692 = state_25544;
(statearr_25557_25692[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25693 = state_25544;
state_25544 = G__25693;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__ = function(state_25544){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____1.call(this,state_25544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__;
})()
;})(__25673,switch__25007__auto__,c__25119__auto___25685,G__25504_25674,n__19691__auto___25672,jobs,results,process,async))
})();
var state__25121__auto__ = (function (){var statearr_25558 = f__25120__auto__.call(null);
(statearr_25558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___25685);

return statearr_25558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(__25673,c__25119__auto___25685,G__25504_25674,n__19691__auto___25672,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25694 = (__25673 + (1));
__25673 = G__25694;
continue;
} else {
}
break;
}

var c__25119__auto___25695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___25695,jobs,results,process,async){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___25695,jobs,results,process,async){
return (function (state_25580){
var state_val_25581 = (state_25580[(1)]);
if((state_val_25581 === (1))){
var state_25580__$1 = state_25580;
var statearr_25582_25696 = state_25580__$1;
(statearr_25582_25696[(2)] = null);

(statearr_25582_25696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (2))){
var state_25580__$1 = state_25580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25580__$1,(4),from);
} else {
if((state_val_25581 === (3))){
var inst_25578 = (state_25580[(2)]);
var state_25580__$1 = state_25580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25580__$1,inst_25578);
} else {
if((state_val_25581 === (4))){
var inst_25561 = (state_25580[(7)]);
var inst_25561__$1 = (state_25580[(2)]);
var inst_25562 = (inst_25561__$1 == null);
var state_25580__$1 = (function (){var statearr_25583 = state_25580;
(statearr_25583[(7)] = inst_25561__$1);

return statearr_25583;
})();
if(cljs.core.truth_(inst_25562)){
var statearr_25584_25697 = state_25580__$1;
(statearr_25584_25697[(1)] = (5));

} else {
var statearr_25585_25698 = state_25580__$1;
(statearr_25585_25698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (5))){
var inst_25564 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25580__$1 = state_25580;
var statearr_25586_25699 = state_25580__$1;
(statearr_25586_25699[(2)] = inst_25564);

(statearr_25586_25699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (6))){
var inst_25566 = (state_25580[(8)]);
var inst_25561 = (state_25580[(7)]);
var inst_25566__$1 = cljs.core.async.chan.call(null,(1));
var inst_25567 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25568 = [inst_25561,inst_25566__$1];
var inst_25569 = (new cljs.core.PersistentVector(null,2,(5),inst_25567,inst_25568,null));
var state_25580__$1 = (function (){var statearr_25587 = state_25580;
(statearr_25587[(8)] = inst_25566__$1);

return statearr_25587;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25580__$1,(8),jobs,inst_25569);
} else {
if((state_val_25581 === (7))){
var inst_25576 = (state_25580[(2)]);
var state_25580__$1 = state_25580;
var statearr_25588_25700 = state_25580__$1;
(statearr_25588_25700[(2)] = inst_25576);

(statearr_25588_25700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25581 === (8))){
var inst_25566 = (state_25580[(8)]);
var inst_25571 = (state_25580[(2)]);
var state_25580__$1 = (function (){var statearr_25589 = state_25580;
(statearr_25589[(9)] = inst_25571);

return statearr_25589;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25580__$1,(9),results,inst_25566);
} else {
if((state_val_25581 === (9))){
var inst_25573 = (state_25580[(2)]);
var state_25580__$1 = (function (){var statearr_25590 = state_25580;
(statearr_25590[(10)] = inst_25573);

return statearr_25590;
})();
var statearr_25591_25701 = state_25580__$1;
(statearr_25591_25701[(2)] = null);

(statearr_25591_25701[(1)] = (2));


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
});})(c__25119__auto___25695,jobs,results,process,async))
;
return ((function (switch__25007__auto__,c__25119__auto___25695,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____0 = (function (){
var statearr_25595 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25595[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__);

(statearr_25595[(1)] = (1));

return statearr_25595;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____1 = (function (state_25580){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_25580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e25596){if((e25596 instanceof Object)){
var ex__25011__auto__ = e25596;
var statearr_25597_25702 = state_25580;
(statearr_25597_25702[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25703 = state_25580;
state_25580 = G__25703;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__ = function(state_25580){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____1.call(this,state_25580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___25695,jobs,results,process,async))
})();
var state__25121__auto__ = (function (){var statearr_25598 = f__25120__auto__.call(null);
(statearr_25598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___25695);

return statearr_25598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___25695,jobs,results,process,async))
);


var c__25119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto__,jobs,results,process,async){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto__,jobs,results,process,async){
return (function (state_25636){
var state_val_25637 = (state_25636[(1)]);
if((state_val_25637 === (7))){
var inst_25632 = (state_25636[(2)]);
var state_25636__$1 = state_25636;
var statearr_25638_25704 = state_25636__$1;
(statearr_25638_25704[(2)] = inst_25632);

(statearr_25638_25704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (20))){
var state_25636__$1 = state_25636;
var statearr_25639_25705 = state_25636__$1;
(statearr_25639_25705[(2)] = null);

(statearr_25639_25705[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (1))){
var state_25636__$1 = state_25636;
var statearr_25640_25706 = state_25636__$1;
(statearr_25640_25706[(2)] = null);

(statearr_25640_25706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (4))){
var inst_25601 = (state_25636[(7)]);
var inst_25601__$1 = (state_25636[(2)]);
var inst_25602 = (inst_25601__$1 == null);
var state_25636__$1 = (function (){var statearr_25641 = state_25636;
(statearr_25641[(7)] = inst_25601__$1);

return statearr_25641;
})();
if(cljs.core.truth_(inst_25602)){
var statearr_25642_25707 = state_25636__$1;
(statearr_25642_25707[(1)] = (5));

} else {
var statearr_25643_25708 = state_25636__$1;
(statearr_25643_25708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (15))){
var inst_25614 = (state_25636[(8)]);
var state_25636__$1 = state_25636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25636__$1,(18),to,inst_25614);
} else {
if((state_val_25637 === (21))){
var inst_25627 = (state_25636[(2)]);
var state_25636__$1 = state_25636;
var statearr_25644_25709 = state_25636__$1;
(statearr_25644_25709[(2)] = inst_25627);

(statearr_25644_25709[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (13))){
var inst_25629 = (state_25636[(2)]);
var state_25636__$1 = (function (){var statearr_25645 = state_25636;
(statearr_25645[(9)] = inst_25629);

return statearr_25645;
})();
var statearr_25646_25710 = state_25636__$1;
(statearr_25646_25710[(2)] = null);

(statearr_25646_25710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (6))){
var inst_25601 = (state_25636[(7)]);
var state_25636__$1 = state_25636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25636__$1,(11),inst_25601);
} else {
if((state_val_25637 === (17))){
var inst_25622 = (state_25636[(2)]);
var state_25636__$1 = state_25636;
if(cljs.core.truth_(inst_25622)){
var statearr_25647_25711 = state_25636__$1;
(statearr_25647_25711[(1)] = (19));

} else {
var statearr_25648_25712 = state_25636__$1;
(statearr_25648_25712[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (3))){
var inst_25634 = (state_25636[(2)]);
var state_25636__$1 = state_25636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25636__$1,inst_25634);
} else {
if((state_val_25637 === (12))){
var inst_25611 = (state_25636[(10)]);
var state_25636__$1 = state_25636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25636__$1,(14),inst_25611);
} else {
if((state_val_25637 === (2))){
var state_25636__$1 = state_25636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25636__$1,(4),results);
} else {
if((state_val_25637 === (19))){
var state_25636__$1 = state_25636;
var statearr_25649_25713 = state_25636__$1;
(statearr_25649_25713[(2)] = null);

(statearr_25649_25713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (11))){
var inst_25611 = (state_25636[(2)]);
var state_25636__$1 = (function (){var statearr_25650 = state_25636;
(statearr_25650[(10)] = inst_25611);

return statearr_25650;
})();
var statearr_25651_25714 = state_25636__$1;
(statearr_25651_25714[(2)] = null);

(statearr_25651_25714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (9))){
var state_25636__$1 = state_25636;
var statearr_25652_25715 = state_25636__$1;
(statearr_25652_25715[(2)] = null);

(statearr_25652_25715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (5))){
var state_25636__$1 = state_25636;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25653_25716 = state_25636__$1;
(statearr_25653_25716[(1)] = (8));

} else {
var statearr_25654_25717 = state_25636__$1;
(statearr_25654_25717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (14))){
var inst_25616 = (state_25636[(11)]);
var inst_25614 = (state_25636[(8)]);
var inst_25614__$1 = (state_25636[(2)]);
var inst_25615 = (inst_25614__$1 == null);
var inst_25616__$1 = cljs.core.not.call(null,inst_25615);
var state_25636__$1 = (function (){var statearr_25655 = state_25636;
(statearr_25655[(11)] = inst_25616__$1);

(statearr_25655[(8)] = inst_25614__$1);

return statearr_25655;
})();
if(inst_25616__$1){
var statearr_25656_25718 = state_25636__$1;
(statearr_25656_25718[(1)] = (15));

} else {
var statearr_25657_25719 = state_25636__$1;
(statearr_25657_25719[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (16))){
var inst_25616 = (state_25636[(11)]);
var state_25636__$1 = state_25636;
var statearr_25658_25720 = state_25636__$1;
(statearr_25658_25720[(2)] = inst_25616);

(statearr_25658_25720[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (10))){
var inst_25608 = (state_25636[(2)]);
var state_25636__$1 = state_25636;
var statearr_25659_25721 = state_25636__$1;
(statearr_25659_25721[(2)] = inst_25608);

(statearr_25659_25721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (18))){
var inst_25619 = (state_25636[(2)]);
var state_25636__$1 = state_25636;
var statearr_25660_25722 = state_25636__$1;
(statearr_25660_25722[(2)] = inst_25619);

(statearr_25660_25722[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25637 === (8))){
var inst_25605 = cljs.core.async.close_BANG_.call(null,to);
var state_25636__$1 = state_25636;
var statearr_25661_25723 = state_25636__$1;
(statearr_25661_25723[(2)] = inst_25605);

(statearr_25661_25723[(1)] = (10));


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
});})(c__25119__auto__,jobs,results,process,async))
;
return ((function (switch__25007__auto__,c__25119__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____0 = (function (){
var statearr_25665 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25665[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__);

(statearr_25665[(1)] = (1));

return statearr_25665;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____1 = (function (state_25636){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_25636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e25666){if((e25666 instanceof Object)){
var ex__25011__auto__ = e25666;
var statearr_25667_25724 = state_25636;
(statearr_25667_25724[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25725 = state_25636;
state_25636 = G__25725;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__ = function(state_25636){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____1.call(this,state_25636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25008__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto__,jobs,results,process,async))
})();
var state__25121__auto__ = (function (){var statearr_25668 = f__25120__auto__.call(null);
(statearr_25668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto__);

return statearr_25668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto__,jobs,results,process,async))
);

return c__25119__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args25726 = [];
var len__19846__auto___25729 = arguments.length;
var i__19847__auto___25730 = (0);
while(true){
if((i__19847__auto___25730 < len__19846__auto___25729)){
args25726.push((arguments[i__19847__auto___25730]));

var G__25731 = (i__19847__auto___25730 + (1));
i__19847__auto___25730 = G__25731;
continue;
} else {
}
break;
}

var G__25728 = args25726.length;
switch (G__25728) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25726.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args25733 = [];
var len__19846__auto___25736 = arguments.length;
var i__19847__auto___25737 = (0);
while(true){
if((i__19847__auto___25737 < len__19846__auto___25736)){
args25733.push((arguments[i__19847__auto___25737]));

var G__25738 = (i__19847__auto___25737 + (1));
i__19847__auto___25737 = G__25738;
continue;
} else {
}
break;
}

var G__25735 = args25733.length;
switch (G__25735) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25733.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args25740 = [];
var len__19846__auto___25793 = arguments.length;
var i__19847__auto___25794 = (0);
while(true){
if((i__19847__auto___25794 < len__19846__auto___25793)){
args25740.push((arguments[i__19847__auto___25794]));

var G__25795 = (i__19847__auto___25794 + (1));
i__19847__auto___25794 = G__25795;
continue;
} else {
}
break;
}

var G__25742 = args25740.length;
switch (G__25742) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25740.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25119__auto___25797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___25797,tc,fc){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___25797,tc,fc){
return (function (state_25768){
var state_val_25769 = (state_25768[(1)]);
if((state_val_25769 === (7))){
var inst_25764 = (state_25768[(2)]);
var state_25768__$1 = state_25768;
var statearr_25770_25798 = state_25768__$1;
(statearr_25770_25798[(2)] = inst_25764);

(statearr_25770_25798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25769 === (1))){
var state_25768__$1 = state_25768;
var statearr_25771_25799 = state_25768__$1;
(statearr_25771_25799[(2)] = null);

(statearr_25771_25799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25769 === (4))){
var inst_25745 = (state_25768[(7)]);
var inst_25745__$1 = (state_25768[(2)]);
var inst_25746 = (inst_25745__$1 == null);
var state_25768__$1 = (function (){var statearr_25772 = state_25768;
(statearr_25772[(7)] = inst_25745__$1);

return statearr_25772;
})();
if(cljs.core.truth_(inst_25746)){
var statearr_25773_25800 = state_25768__$1;
(statearr_25773_25800[(1)] = (5));

} else {
var statearr_25774_25801 = state_25768__$1;
(statearr_25774_25801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25769 === (13))){
var state_25768__$1 = state_25768;
var statearr_25775_25802 = state_25768__$1;
(statearr_25775_25802[(2)] = null);

(statearr_25775_25802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25769 === (6))){
var inst_25745 = (state_25768[(7)]);
var inst_25751 = p.call(null,inst_25745);
var state_25768__$1 = state_25768;
if(cljs.core.truth_(inst_25751)){
var statearr_25776_25803 = state_25768__$1;
(statearr_25776_25803[(1)] = (9));

} else {
var statearr_25777_25804 = state_25768__$1;
(statearr_25777_25804[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25769 === (3))){
var inst_25766 = (state_25768[(2)]);
var state_25768__$1 = state_25768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25768__$1,inst_25766);
} else {
if((state_val_25769 === (12))){
var state_25768__$1 = state_25768;
var statearr_25778_25805 = state_25768__$1;
(statearr_25778_25805[(2)] = null);

(statearr_25778_25805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25769 === (2))){
var state_25768__$1 = state_25768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25768__$1,(4),ch);
} else {
if((state_val_25769 === (11))){
var inst_25745 = (state_25768[(7)]);
var inst_25755 = (state_25768[(2)]);
var state_25768__$1 = state_25768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25768__$1,(8),inst_25755,inst_25745);
} else {
if((state_val_25769 === (9))){
var state_25768__$1 = state_25768;
var statearr_25779_25806 = state_25768__$1;
(statearr_25779_25806[(2)] = tc);

(statearr_25779_25806[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25769 === (5))){
var inst_25748 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25749 = cljs.core.async.close_BANG_.call(null,fc);
var state_25768__$1 = (function (){var statearr_25780 = state_25768;
(statearr_25780[(8)] = inst_25748);

return statearr_25780;
})();
var statearr_25781_25807 = state_25768__$1;
(statearr_25781_25807[(2)] = inst_25749);

(statearr_25781_25807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25769 === (14))){
var inst_25762 = (state_25768[(2)]);
var state_25768__$1 = state_25768;
var statearr_25782_25808 = state_25768__$1;
(statearr_25782_25808[(2)] = inst_25762);

(statearr_25782_25808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25769 === (10))){
var state_25768__$1 = state_25768;
var statearr_25783_25809 = state_25768__$1;
(statearr_25783_25809[(2)] = fc);

(statearr_25783_25809[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25769 === (8))){
var inst_25757 = (state_25768[(2)]);
var state_25768__$1 = state_25768;
if(cljs.core.truth_(inst_25757)){
var statearr_25784_25810 = state_25768__$1;
(statearr_25784_25810[(1)] = (12));

} else {
var statearr_25785_25811 = state_25768__$1;
(statearr_25785_25811[(1)] = (13));

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
});})(c__25119__auto___25797,tc,fc))
;
return ((function (switch__25007__auto__,c__25119__auto___25797,tc,fc){
return (function() {
var cljs$core$async$state_machine__25008__auto__ = null;
var cljs$core$async$state_machine__25008__auto____0 = (function (){
var statearr_25789 = [null,null,null,null,null,null,null,null,null];
(statearr_25789[(0)] = cljs$core$async$state_machine__25008__auto__);

(statearr_25789[(1)] = (1));

return statearr_25789;
});
var cljs$core$async$state_machine__25008__auto____1 = (function (state_25768){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_25768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e25790){if((e25790 instanceof Object)){
var ex__25011__auto__ = e25790;
var statearr_25791_25812 = state_25768;
(statearr_25791_25812[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25813 = state_25768;
state_25768 = G__25813;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$state_machine__25008__auto__ = function(state_25768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25008__auto____1.call(this,state_25768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25008__auto____0;
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25008__auto____1;
return cljs$core$async$state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___25797,tc,fc))
})();
var state__25121__auto__ = (function (){var statearr_25792 = f__25120__auto__.call(null);
(statearr_25792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___25797);

return statearr_25792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___25797,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto__){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto__){
return (function (state_25877){
var state_val_25878 = (state_25877[(1)]);
if((state_val_25878 === (7))){
var inst_25873 = (state_25877[(2)]);
var state_25877__$1 = state_25877;
var statearr_25879_25900 = state_25877__$1;
(statearr_25879_25900[(2)] = inst_25873);

(statearr_25879_25900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25878 === (1))){
var inst_25857 = init;
var state_25877__$1 = (function (){var statearr_25880 = state_25877;
(statearr_25880[(7)] = inst_25857);

return statearr_25880;
})();
var statearr_25881_25901 = state_25877__$1;
(statearr_25881_25901[(2)] = null);

(statearr_25881_25901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25878 === (4))){
var inst_25860 = (state_25877[(8)]);
var inst_25860__$1 = (state_25877[(2)]);
var inst_25861 = (inst_25860__$1 == null);
var state_25877__$1 = (function (){var statearr_25882 = state_25877;
(statearr_25882[(8)] = inst_25860__$1);

return statearr_25882;
})();
if(cljs.core.truth_(inst_25861)){
var statearr_25883_25902 = state_25877__$1;
(statearr_25883_25902[(1)] = (5));

} else {
var statearr_25884_25903 = state_25877__$1;
(statearr_25884_25903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25878 === (6))){
var inst_25857 = (state_25877[(7)]);
var inst_25860 = (state_25877[(8)]);
var inst_25864 = (state_25877[(9)]);
var inst_25864__$1 = f.call(null,inst_25857,inst_25860);
var inst_25865 = cljs.core.reduced_QMARK_.call(null,inst_25864__$1);
var state_25877__$1 = (function (){var statearr_25885 = state_25877;
(statearr_25885[(9)] = inst_25864__$1);

return statearr_25885;
})();
if(inst_25865){
var statearr_25886_25904 = state_25877__$1;
(statearr_25886_25904[(1)] = (8));

} else {
var statearr_25887_25905 = state_25877__$1;
(statearr_25887_25905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25878 === (3))){
var inst_25875 = (state_25877[(2)]);
var state_25877__$1 = state_25877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25877__$1,inst_25875);
} else {
if((state_val_25878 === (2))){
var state_25877__$1 = state_25877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25877__$1,(4),ch);
} else {
if((state_val_25878 === (9))){
var inst_25864 = (state_25877[(9)]);
var inst_25857 = inst_25864;
var state_25877__$1 = (function (){var statearr_25888 = state_25877;
(statearr_25888[(7)] = inst_25857);

return statearr_25888;
})();
var statearr_25889_25906 = state_25877__$1;
(statearr_25889_25906[(2)] = null);

(statearr_25889_25906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25878 === (5))){
var inst_25857 = (state_25877[(7)]);
var state_25877__$1 = state_25877;
var statearr_25890_25907 = state_25877__$1;
(statearr_25890_25907[(2)] = inst_25857);

(statearr_25890_25907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25878 === (10))){
var inst_25871 = (state_25877[(2)]);
var state_25877__$1 = state_25877;
var statearr_25891_25908 = state_25877__$1;
(statearr_25891_25908[(2)] = inst_25871);

(statearr_25891_25908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25878 === (8))){
var inst_25864 = (state_25877[(9)]);
var inst_25867 = cljs.core.deref.call(null,inst_25864);
var state_25877__$1 = state_25877;
var statearr_25892_25909 = state_25877__$1;
(statearr_25892_25909[(2)] = inst_25867);

(statearr_25892_25909[(1)] = (10));


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
});})(c__25119__auto__))
;
return ((function (switch__25007__auto__,c__25119__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25008__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25008__auto____0 = (function (){
var statearr_25896 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25896[(0)] = cljs$core$async$reduce_$_state_machine__25008__auto__);

(statearr_25896[(1)] = (1));

return statearr_25896;
});
var cljs$core$async$reduce_$_state_machine__25008__auto____1 = (function (state_25877){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_25877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e25897){if((e25897 instanceof Object)){
var ex__25011__auto__ = e25897;
var statearr_25898_25910 = state_25877;
(statearr_25898_25910[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25911 = state_25877;
state_25877 = G__25911;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25008__auto__ = function(state_25877){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25008__auto____1.call(this,state_25877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25008__auto____0;
cljs$core$async$reduce_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25008__auto____1;
return cljs$core$async$reduce_$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto__))
})();
var state__25121__auto__ = (function (){var statearr_25899 = f__25120__auto__.call(null);
(statearr_25899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto__);

return statearr_25899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto__))
);

return c__25119__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args25912 = [];
var len__19846__auto___25964 = arguments.length;
var i__19847__auto___25965 = (0);
while(true){
if((i__19847__auto___25965 < len__19846__auto___25964)){
args25912.push((arguments[i__19847__auto___25965]));

var G__25966 = (i__19847__auto___25965 + (1));
i__19847__auto___25965 = G__25966;
continue;
} else {
}
break;
}

var G__25914 = args25912.length;
switch (G__25914) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25912.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto__){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto__){
return (function (state_25939){
var state_val_25940 = (state_25939[(1)]);
if((state_val_25940 === (7))){
var inst_25921 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
var statearr_25941_25968 = state_25939__$1;
(statearr_25941_25968[(2)] = inst_25921);

(statearr_25941_25968[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (1))){
var inst_25915 = cljs.core.seq.call(null,coll);
var inst_25916 = inst_25915;
var state_25939__$1 = (function (){var statearr_25942 = state_25939;
(statearr_25942[(7)] = inst_25916);

return statearr_25942;
})();
var statearr_25943_25969 = state_25939__$1;
(statearr_25943_25969[(2)] = null);

(statearr_25943_25969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (4))){
var inst_25916 = (state_25939[(7)]);
var inst_25919 = cljs.core.first.call(null,inst_25916);
var state_25939__$1 = state_25939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25939__$1,(7),ch,inst_25919);
} else {
if((state_val_25940 === (13))){
var inst_25933 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
var statearr_25944_25970 = state_25939__$1;
(statearr_25944_25970[(2)] = inst_25933);

(statearr_25944_25970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (6))){
var inst_25924 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
if(cljs.core.truth_(inst_25924)){
var statearr_25945_25971 = state_25939__$1;
(statearr_25945_25971[(1)] = (8));

} else {
var statearr_25946_25972 = state_25939__$1;
(statearr_25946_25972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (3))){
var inst_25937 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25939__$1,inst_25937);
} else {
if((state_val_25940 === (12))){
var state_25939__$1 = state_25939;
var statearr_25947_25973 = state_25939__$1;
(statearr_25947_25973[(2)] = null);

(statearr_25947_25973[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (2))){
var inst_25916 = (state_25939[(7)]);
var state_25939__$1 = state_25939;
if(cljs.core.truth_(inst_25916)){
var statearr_25948_25974 = state_25939__$1;
(statearr_25948_25974[(1)] = (4));

} else {
var statearr_25949_25975 = state_25939__$1;
(statearr_25949_25975[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (11))){
var inst_25930 = cljs.core.async.close_BANG_.call(null,ch);
var state_25939__$1 = state_25939;
var statearr_25950_25976 = state_25939__$1;
(statearr_25950_25976[(2)] = inst_25930);

(statearr_25950_25976[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (9))){
var state_25939__$1 = state_25939;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25951_25977 = state_25939__$1;
(statearr_25951_25977[(1)] = (11));

} else {
var statearr_25952_25978 = state_25939__$1;
(statearr_25952_25978[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (5))){
var inst_25916 = (state_25939[(7)]);
var state_25939__$1 = state_25939;
var statearr_25953_25979 = state_25939__$1;
(statearr_25953_25979[(2)] = inst_25916);

(statearr_25953_25979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (10))){
var inst_25935 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
var statearr_25954_25980 = state_25939__$1;
(statearr_25954_25980[(2)] = inst_25935);

(statearr_25954_25980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (8))){
var inst_25916 = (state_25939[(7)]);
var inst_25926 = cljs.core.next.call(null,inst_25916);
var inst_25916__$1 = inst_25926;
var state_25939__$1 = (function (){var statearr_25955 = state_25939;
(statearr_25955[(7)] = inst_25916__$1);

return statearr_25955;
})();
var statearr_25956_25981 = state_25939__$1;
(statearr_25956_25981[(2)] = null);

(statearr_25956_25981[(1)] = (2));


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
});})(c__25119__auto__))
;
return ((function (switch__25007__auto__,c__25119__auto__){
return (function() {
var cljs$core$async$state_machine__25008__auto__ = null;
var cljs$core$async$state_machine__25008__auto____0 = (function (){
var statearr_25960 = [null,null,null,null,null,null,null,null];
(statearr_25960[(0)] = cljs$core$async$state_machine__25008__auto__);

(statearr_25960[(1)] = (1));

return statearr_25960;
});
var cljs$core$async$state_machine__25008__auto____1 = (function (state_25939){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_25939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e25961){if((e25961 instanceof Object)){
var ex__25011__auto__ = e25961;
var statearr_25962_25982 = state_25939;
(statearr_25962_25982[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25983 = state_25939;
state_25939 = G__25983;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$state_machine__25008__auto__ = function(state_25939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25008__auto____1.call(this,state_25939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25008__auto____0;
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25008__auto____1;
return cljs$core$async$state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto__))
})();
var state__25121__auto__ = (function (){var statearr_25963 = f__25120__auto__.call(null);
(statearr_25963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto__);

return statearr_25963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto__))
);

return c__25119__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19443__auto__ = (((_ == null))?null:_);
var m__19444__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19443__auto__)]);
if(!((m__19444__auto__ == null))){
return m__19444__auto__.call(null,_);
} else {
var m__19444__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19444__auto____$1 == null))){
return m__19444__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19443__auto__ = (((m == null))?null:m);
var m__19444__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19443__auto__)]);
if(!((m__19444__auto__ == null))){
return m__19444__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19444__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19444__auto____$1 == null))){
return m__19444__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19443__auto__ = (((m == null))?null:m);
var m__19444__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19443__auto__)]);
if(!((m__19444__auto__ == null))){
return m__19444__auto__.call(null,m,ch);
} else {
var m__19444__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19444__auto____$1 == null))){
return m__19444__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19443__auto__ = (((m == null))?null:m);
var m__19444__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19443__auto__)]);
if(!((m__19444__auto__ == null))){
return m__19444__auto__.call(null,m);
} else {
var m__19444__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19444__auto____$1 == null))){
return m__19444__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26205 = (function (mult,ch,cs,meta26206){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26206 = meta26206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26207,meta26206__$1){
var self__ = this;
var _26207__$1 = this;
return (new cljs.core.async.t_cljs$core$async26205(self__.mult,self__.ch,self__.cs,meta26206__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26205.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26207){
var self__ = this;
var _26207__$1 = this;
return self__.meta26206;
});})(cs))
;

cljs.core.async.t_cljs$core$async26205.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26205.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26205.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26205.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26205.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26205.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26205.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26206","meta26206",1592706776,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26205";

cljs.core.async.t_cljs$core$async26205.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cljs.core.async/t_cljs$core$async26205");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26205 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26205(mult__$1,ch__$1,cs__$1,meta26206){
return (new cljs.core.async.t_cljs$core$async26205(mult__$1,ch__$1,cs__$1,meta26206));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26205(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25119__auto___26426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___26426,cs,m,dchan,dctr,done){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___26426,cs,m,dchan,dctr,done){
return (function (state_26338){
var state_val_26339 = (state_26338[(1)]);
if((state_val_26339 === (7))){
var inst_26334 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
var statearr_26340_26427 = state_26338__$1;
(statearr_26340_26427[(2)] = inst_26334);

(statearr_26340_26427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (20))){
var inst_26239 = (state_26338[(7)]);
var inst_26249 = cljs.core.first.call(null,inst_26239);
var inst_26250 = cljs.core.nth.call(null,inst_26249,(0),null);
var inst_26251 = cljs.core.nth.call(null,inst_26249,(1),null);
var state_26338__$1 = (function (){var statearr_26341 = state_26338;
(statearr_26341[(8)] = inst_26250);

return statearr_26341;
})();
if(cljs.core.truth_(inst_26251)){
var statearr_26342_26428 = state_26338__$1;
(statearr_26342_26428[(1)] = (22));

} else {
var statearr_26343_26429 = state_26338__$1;
(statearr_26343_26429[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (27))){
var inst_26279 = (state_26338[(9)]);
var inst_26286 = (state_26338[(10)]);
var inst_26281 = (state_26338[(11)]);
var inst_26210 = (state_26338[(12)]);
var inst_26286__$1 = cljs.core._nth.call(null,inst_26279,inst_26281);
var inst_26287 = cljs.core.async.put_BANG_.call(null,inst_26286__$1,inst_26210,done);
var state_26338__$1 = (function (){var statearr_26344 = state_26338;
(statearr_26344[(10)] = inst_26286__$1);

return statearr_26344;
})();
if(cljs.core.truth_(inst_26287)){
var statearr_26345_26430 = state_26338__$1;
(statearr_26345_26430[(1)] = (30));

} else {
var statearr_26346_26431 = state_26338__$1;
(statearr_26346_26431[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (1))){
var state_26338__$1 = state_26338;
var statearr_26347_26432 = state_26338__$1;
(statearr_26347_26432[(2)] = null);

(statearr_26347_26432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (24))){
var inst_26239 = (state_26338[(7)]);
var inst_26256 = (state_26338[(2)]);
var inst_26257 = cljs.core.next.call(null,inst_26239);
var inst_26219 = inst_26257;
var inst_26220 = null;
var inst_26221 = (0);
var inst_26222 = (0);
var state_26338__$1 = (function (){var statearr_26348 = state_26338;
(statearr_26348[(13)] = inst_26219);

(statearr_26348[(14)] = inst_26256);

(statearr_26348[(15)] = inst_26222);

(statearr_26348[(16)] = inst_26220);

(statearr_26348[(17)] = inst_26221);

return statearr_26348;
})();
var statearr_26349_26433 = state_26338__$1;
(statearr_26349_26433[(2)] = null);

(statearr_26349_26433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (39))){
var state_26338__$1 = state_26338;
var statearr_26353_26434 = state_26338__$1;
(statearr_26353_26434[(2)] = null);

(statearr_26353_26434[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (4))){
var inst_26210 = (state_26338[(12)]);
var inst_26210__$1 = (state_26338[(2)]);
var inst_26211 = (inst_26210__$1 == null);
var state_26338__$1 = (function (){var statearr_26354 = state_26338;
(statearr_26354[(12)] = inst_26210__$1);

return statearr_26354;
})();
if(cljs.core.truth_(inst_26211)){
var statearr_26355_26435 = state_26338__$1;
(statearr_26355_26435[(1)] = (5));

} else {
var statearr_26356_26436 = state_26338__$1;
(statearr_26356_26436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (15))){
var inst_26219 = (state_26338[(13)]);
var inst_26222 = (state_26338[(15)]);
var inst_26220 = (state_26338[(16)]);
var inst_26221 = (state_26338[(17)]);
var inst_26235 = (state_26338[(2)]);
var inst_26236 = (inst_26222 + (1));
var tmp26350 = inst_26219;
var tmp26351 = inst_26220;
var tmp26352 = inst_26221;
var inst_26219__$1 = tmp26350;
var inst_26220__$1 = tmp26351;
var inst_26221__$1 = tmp26352;
var inst_26222__$1 = inst_26236;
var state_26338__$1 = (function (){var statearr_26357 = state_26338;
(statearr_26357[(13)] = inst_26219__$1);

(statearr_26357[(18)] = inst_26235);

(statearr_26357[(15)] = inst_26222__$1);

(statearr_26357[(16)] = inst_26220__$1);

(statearr_26357[(17)] = inst_26221__$1);

return statearr_26357;
})();
var statearr_26358_26437 = state_26338__$1;
(statearr_26358_26437[(2)] = null);

(statearr_26358_26437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (21))){
var inst_26260 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
var statearr_26362_26438 = state_26338__$1;
(statearr_26362_26438[(2)] = inst_26260);

(statearr_26362_26438[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (31))){
var inst_26286 = (state_26338[(10)]);
var inst_26290 = done.call(null,null);
var inst_26291 = cljs.core.async.untap_STAR_.call(null,m,inst_26286);
var state_26338__$1 = (function (){var statearr_26363 = state_26338;
(statearr_26363[(19)] = inst_26290);

return statearr_26363;
})();
var statearr_26364_26439 = state_26338__$1;
(statearr_26364_26439[(2)] = inst_26291);

(statearr_26364_26439[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (32))){
var inst_26279 = (state_26338[(9)]);
var inst_26281 = (state_26338[(11)]);
var inst_26280 = (state_26338[(20)]);
var inst_26278 = (state_26338[(21)]);
var inst_26293 = (state_26338[(2)]);
var inst_26294 = (inst_26281 + (1));
var tmp26359 = inst_26279;
var tmp26360 = inst_26280;
var tmp26361 = inst_26278;
var inst_26278__$1 = tmp26361;
var inst_26279__$1 = tmp26359;
var inst_26280__$1 = tmp26360;
var inst_26281__$1 = inst_26294;
var state_26338__$1 = (function (){var statearr_26365 = state_26338;
(statearr_26365[(9)] = inst_26279__$1);

(statearr_26365[(22)] = inst_26293);

(statearr_26365[(11)] = inst_26281__$1);

(statearr_26365[(20)] = inst_26280__$1);

(statearr_26365[(21)] = inst_26278__$1);

return statearr_26365;
})();
var statearr_26366_26440 = state_26338__$1;
(statearr_26366_26440[(2)] = null);

(statearr_26366_26440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (40))){
var inst_26306 = (state_26338[(23)]);
var inst_26310 = done.call(null,null);
var inst_26311 = cljs.core.async.untap_STAR_.call(null,m,inst_26306);
var state_26338__$1 = (function (){var statearr_26367 = state_26338;
(statearr_26367[(24)] = inst_26310);

return statearr_26367;
})();
var statearr_26368_26441 = state_26338__$1;
(statearr_26368_26441[(2)] = inst_26311);

(statearr_26368_26441[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (33))){
var inst_26297 = (state_26338[(25)]);
var inst_26299 = cljs.core.chunked_seq_QMARK_.call(null,inst_26297);
var state_26338__$1 = state_26338;
if(inst_26299){
var statearr_26369_26442 = state_26338__$1;
(statearr_26369_26442[(1)] = (36));

} else {
var statearr_26370_26443 = state_26338__$1;
(statearr_26370_26443[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (13))){
var inst_26229 = (state_26338[(26)]);
var inst_26232 = cljs.core.async.close_BANG_.call(null,inst_26229);
var state_26338__$1 = state_26338;
var statearr_26371_26444 = state_26338__$1;
(statearr_26371_26444[(2)] = inst_26232);

(statearr_26371_26444[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (22))){
var inst_26250 = (state_26338[(8)]);
var inst_26253 = cljs.core.async.close_BANG_.call(null,inst_26250);
var state_26338__$1 = state_26338;
var statearr_26372_26445 = state_26338__$1;
(statearr_26372_26445[(2)] = inst_26253);

(statearr_26372_26445[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (36))){
var inst_26297 = (state_26338[(25)]);
var inst_26301 = cljs.core.chunk_first.call(null,inst_26297);
var inst_26302 = cljs.core.chunk_rest.call(null,inst_26297);
var inst_26303 = cljs.core.count.call(null,inst_26301);
var inst_26278 = inst_26302;
var inst_26279 = inst_26301;
var inst_26280 = inst_26303;
var inst_26281 = (0);
var state_26338__$1 = (function (){var statearr_26373 = state_26338;
(statearr_26373[(9)] = inst_26279);

(statearr_26373[(11)] = inst_26281);

(statearr_26373[(20)] = inst_26280);

(statearr_26373[(21)] = inst_26278);

return statearr_26373;
})();
var statearr_26374_26446 = state_26338__$1;
(statearr_26374_26446[(2)] = null);

(statearr_26374_26446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (41))){
var inst_26297 = (state_26338[(25)]);
var inst_26313 = (state_26338[(2)]);
var inst_26314 = cljs.core.next.call(null,inst_26297);
var inst_26278 = inst_26314;
var inst_26279 = null;
var inst_26280 = (0);
var inst_26281 = (0);
var state_26338__$1 = (function (){var statearr_26375 = state_26338;
(statearr_26375[(27)] = inst_26313);

(statearr_26375[(9)] = inst_26279);

(statearr_26375[(11)] = inst_26281);

(statearr_26375[(20)] = inst_26280);

(statearr_26375[(21)] = inst_26278);

return statearr_26375;
})();
var statearr_26376_26447 = state_26338__$1;
(statearr_26376_26447[(2)] = null);

(statearr_26376_26447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (43))){
var state_26338__$1 = state_26338;
var statearr_26377_26448 = state_26338__$1;
(statearr_26377_26448[(2)] = null);

(statearr_26377_26448[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (29))){
var inst_26322 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
var statearr_26378_26449 = state_26338__$1;
(statearr_26378_26449[(2)] = inst_26322);

(statearr_26378_26449[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (44))){
var inst_26331 = (state_26338[(2)]);
var state_26338__$1 = (function (){var statearr_26379 = state_26338;
(statearr_26379[(28)] = inst_26331);

return statearr_26379;
})();
var statearr_26380_26450 = state_26338__$1;
(statearr_26380_26450[(2)] = null);

(statearr_26380_26450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (6))){
var inst_26270 = (state_26338[(29)]);
var inst_26269 = cljs.core.deref.call(null,cs);
var inst_26270__$1 = cljs.core.keys.call(null,inst_26269);
var inst_26271 = cljs.core.count.call(null,inst_26270__$1);
var inst_26272 = cljs.core.reset_BANG_.call(null,dctr,inst_26271);
var inst_26277 = cljs.core.seq.call(null,inst_26270__$1);
var inst_26278 = inst_26277;
var inst_26279 = null;
var inst_26280 = (0);
var inst_26281 = (0);
var state_26338__$1 = (function (){var statearr_26381 = state_26338;
(statearr_26381[(29)] = inst_26270__$1);

(statearr_26381[(9)] = inst_26279);

(statearr_26381[(11)] = inst_26281);

(statearr_26381[(20)] = inst_26280);

(statearr_26381[(21)] = inst_26278);

(statearr_26381[(30)] = inst_26272);

return statearr_26381;
})();
var statearr_26382_26451 = state_26338__$1;
(statearr_26382_26451[(2)] = null);

(statearr_26382_26451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (28))){
var inst_26278 = (state_26338[(21)]);
var inst_26297 = (state_26338[(25)]);
var inst_26297__$1 = cljs.core.seq.call(null,inst_26278);
var state_26338__$1 = (function (){var statearr_26383 = state_26338;
(statearr_26383[(25)] = inst_26297__$1);

return statearr_26383;
})();
if(inst_26297__$1){
var statearr_26384_26452 = state_26338__$1;
(statearr_26384_26452[(1)] = (33));

} else {
var statearr_26385_26453 = state_26338__$1;
(statearr_26385_26453[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (25))){
var inst_26281 = (state_26338[(11)]);
var inst_26280 = (state_26338[(20)]);
var inst_26283 = (inst_26281 < inst_26280);
var inst_26284 = inst_26283;
var state_26338__$1 = state_26338;
if(cljs.core.truth_(inst_26284)){
var statearr_26386_26454 = state_26338__$1;
(statearr_26386_26454[(1)] = (27));

} else {
var statearr_26387_26455 = state_26338__$1;
(statearr_26387_26455[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (34))){
var state_26338__$1 = state_26338;
var statearr_26388_26456 = state_26338__$1;
(statearr_26388_26456[(2)] = null);

(statearr_26388_26456[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (17))){
var state_26338__$1 = state_26338;
var statearr_26389_26457 = state_26338__$1;
(statearr_26389_26457[(2)] = null);

(statearr_26389_26457[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (3))){
var inst_26336 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26338__$1,inst_26336);
} else {
if((state_val_26339 === (12))){
var inst_26265 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
var statearr_26390_26458 = state_26338__$1;
(statearr_26390_26458[(2)] = inst_26265);

(statearr_26390_26458[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (2))){
var state_26338__$1 = state_26338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26338__$1,(4),ch);
} else {
if((state_val_26339 === (23))){
var state_26338__$1 = state_26338;
var statearr_26391_26459 = state_26338__$1;
(statearr_26391_26459[(2)] = null);

(statearr_26391_26459[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (35))){
var inst_26320 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
var statearr_26392_26460 = state_26338__$1;
(statearr_26392_26460[(2)] = inst_26320);

(statearr_26392_26460[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (19))){
var inst_26239 = (state_26338[(7)]);
var inst_26243 = cljs.core.chunk_first.call(null,inst_26239);
var inst_26244 = cljs.core.chunk_rest.call(null,inst_26239);
var inst_26245 = cljs.core.count.call(null,inst_26243);
var inst_26219 = inst_26244;
var inst_26220 = inst_26243;
var inst_26221 = inst_26245;
var inst_26222 = (0);
var state_26338__$1 = (function (){var statearr_26393 = state_26338;
(statearr_26393[(13)] = inst_26219);

(statearr_26393[(15)] = inst_26222);

(statearr_26393[(16)] = inst_26220);

(statearr_26393[(17)] = inst_26221);

return statearr_26393;
})();
var statearr_26394_26461 = state_26338__$1;
(statearr_26394_26461[(2)] = null);

(statearr_26394_26461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (11))){
var inst_26219 = (state_26338[(13)]);
var inst_26239 = (state_26338[(7)]);
var inst_26239__$1 = cljs.core.seq.call(null,inst_26219);
var state_26338__$1 = (function (){var statearr_26395 = state_26338;
(statearr_26395[(7)] = inst_26239__$1);

return statearr_26395;
})();
if(inst_26239__$1){
var statearr_26396_26462 = state_26338__$1;
(statearr_26396_26462[(1)] = (16));

} else {
var statearr_26397_26463 = state_26338__$1;
(statearr_26397_26463[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (9))){
var inst_26267 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
var statearr_26398_26464 = state_26338__$1;
(statearr_26398_26464[(2)] = inst_26267);

(statearr_26398_26464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (5))){
var inst_26217 = cljs.core.deref.call(null,cs);
var inst_26218 = cljs.core.seq.call(null,inst_26217);
var inst_26219 = inst_26218;
var inst_26220 = null;
var inst_26221 = (0);
var inst_26222 = (0);
var state_26338__$1 = (function (){var statearr_26399 = state_26338;
(statearr_26399[(13)] = inst_26219);

(statearr_26399[(15)] = inst_26222);

(statearr_26399[(16)] = inst_26220);

(statearr_26399[(17)] = inst_26221);

return statearr_26399;
})();
var statearr_26400_26465 = state_26338__$1;
(statearr_26400_26465[(2)] = null);

(statearr_26400_26465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (14))){
var state_26338__$1 = state_26338;
var statearr_26401_26466 = state_26338__$1;
(statearr_26401_26466[(2)] = null);

(statearr_26401_26466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (45))){
var inst_26328 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
var statearr_26402_26467 = state_26338__$1;
(statearr_26402_26467[(2)] = inst_26328);

(statearr_26402_26467[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (26))){
var inst_26270 = (state_26338[(29)]);
var inst_26324 = (state_26338[(2)]);
var inst_26325 = cljs.core.seq.call(null,inst_26270);
var state_26338__$1 = (function (){var statearr_26403 = state_26338;
(statearr_26403[(31)] = inst_26324);

return statearr_26403;
})();
if(inst_26325){
var statearr_26404_26468 = state_26338__$1;
(statearr_26404_26468[(1)] = (42));

} else {
var statearr_26405_26469 = state_26338__$1;
(statearr_26405_26469[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (16))){
var inst_26239 = (state_26338[(7)]);
var inst_26241 = cljs.core.chunked_seq_QMARK_.call(null,inst_26239);
var state_26338__$1 = state_26338;
if(inst_26241){
var statearr_26406_26470 = state_26338__$1;
(statearr_26406_26470[(1)] = (19));

} else {
var statearr_26407_26471 = state_26338__$1;
(statearr_26407_26471[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (38))){
var inst_26317 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
var statearr_26408_26472 = state_26338__$1;
(statearr_26408_26472[(2)] = inst_26317);

(statearr_26408_26472[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (30))){
var state_26338__$1 = state_26338;
var statearr_26409_26473 = state_26338__$1;
(statearr_26409_26473[(2)] = null);

(statearr_26409_26473[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (10))){
var inst_26222 = (state_26338[(15)]);
var inst_26220 = (state_26338[(16)]);
var inst_26228 = cljs.core._nth.call(null,inst_26220,inst_26222);
var inst_26229 = cljs.core.nth.call(null,inst_26228,(0),null);
var inst_26230 = cljs.core.nth.call(null,inst_26228,(1),null);
var state_26338__$1 = (function (){var statearr_26410 = state_26338;
(statearr_26410[(26)] = inst_26229);

return statearr_26410;
})();
if(cljs.core.truth_(inst_26230)){
var statearr_26411_26474 = state_26338__$1;
(statearr_26411_26474[(1)] = (13));

} else {
var statearr_26412_26475 = state_26338__$1;
(statearr_26412_26475[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (18))){
var inst_26263 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
var statearr_26413_26476 = state_26338__$1;
(statearr_26413_26476[(2)] = inst_26263);

(statearr_26413_26476[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (42))){
var state_26338__$1 = state_26338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26338__$1,(45),dchan);
} else {
if((state_val_26339 === (37))){
var inst_26306 = (state_26338[(23)]);
var inst_26210 = (state_26338[(12)]);
var inst_26297 = (state_26338[(25)]);
var inst_26306__$1 = cljs.core.first.call(null,inst_26297);
var inst_26307 = cljs.core.async.put_BANG_.call(null,inst_26306__$1,inst_26210,done);
var state_26338__$1 = (function (){var statearr_26414 = state_26338;
(statearr_26414[(23)] = inst_26306__$1);

return statearr_26414;
})();
if(cljs.core.truth_(inst_26307)){
var statearr_26415_26477 = state_26338__$1;
(statearr_26415_26477[(1)] = (39));

} else {
var statearr_26416_26478 = state_26338__$1;
(statearr_26416_26478[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (8))){
var inst_26222 = (state_26338[(15)]);
var inst_26221 = (state_26338[(17)]);
var inst_26224 = (inst_26222 < inst_26221);
var inst_26225 = inst_26224;
var state_26338__$1 = state_26338;
if(cljs.core.truth_(inst_26225)){
var statearr_26417_26479 = state_26338__$1;
(statearr_26417_26479[(1)] = (10));

} else {
var statearr_26418_26480 = state_26338__$1;
(statearr_26418_26480[(1)] = (11));

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
});})(c__25119__auto___26426,cs,m,dchan,dctr,done))
;
return ((function (switch__25007__auto__,c__25119__auto___26426,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25008__auto__ = null;
var cljs$core$async$mult_$_state_machine__25008__auto____0 = (function (){
var statearr_26422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26422[(0)] = cljs$core$async$mult_$_state_machine__25008__auto__);

(statearr_26422[(1)] = (1));

return statearr_26422;
});
var cljs$core$async$mult_$_state_machine__25008__auto____1 = (function (state_26338){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_26338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e26423){if((e26423 instanceof Object)){
var ex__25011__auto__ = e26423;
var statearr_26424_26481 = state_26338;
(statearr_26424_26481[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26482 = state_26338;
state_26338 = G__26482;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25008__auto__ = function(state_26338){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25008__auto____1.call(this,state_26338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25008__auto____0;
cljs$core$async$mult_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25008__auto____1;
return cljs$core$async$mult_$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___26426,cs,m,dchan,dctr,done))
})();
var state__25121__auto__ = (function (){var statearr_26425 = f__25120__auto__.call(null);
(statearr_26425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___26426);

return statearr_26425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___26426,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args26483 = [];
var len__19846__auto___26486 = arguments.length;
var i__19847__auto___26487 = (0);
while(true){
if((i__19847__auto___26487 < len__19846__auto___26486)){
args26483.push((arguments[i__19847__auto___26487]));

var G__26488 = (i__19847__auto___26487 + (1));
i__19847__auto___26487 = G__26488;
continue;
} else {
}
break;
}

var G__26485 = args26483.length;
switch (G__26485) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26483.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19443__auto__ = (((m == null))?null:m);
var m__19444__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19443__auto__)]);
if(!((m__19444__auto__ == null))){
return m__19444__auto__.call(null,m,ch);
} else {
var m__19444__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19444__auto____$1 == null))){
return m__19444__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19443__auto__ = (((m == null))?null:m);
var m__19444__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19443__auto__)]);
if(!((m__19444__auto__ == null))){
return m__19444__auto__.call(null,m,ch);
} else {
var m__19444__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19444__auto____$1 == null))){
return m__19444__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19443__auto__ = (((m == null))?null:m);
var m__19444__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19443__auto__)]);
if(!((m__19444__auto__ == null))){
return m__19444__auto__.call(null,m);
} else {
var m__19444__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19444__auto____$1 == null))){
return m__19444__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19443__auto__ = (((m == null))?null:m);
var m__19444__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19443__auto__)]);
if(!((m__19444__auto__ == null))){
return m__19444__auto__.call(null,m,state_map);
} else {
var m__19444__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19444__auto____$1 == null))){
return m__19444__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19443__auto__ = (((m == null))?null:m);
var m__19444__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19443__auto__)]);
if(!((m__19444__auto__ == null))){
return m__19444__auto__.call(null,m,mode);
} else {
var m__19444__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19444__auto____$1 == null))){
return m__19444__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19853__auto__ = [];
var len__19846__auto___26500 = arguments.length;
var i__19847__auto___26501 = (0);
while(true){
if((i__19847__auto___26501 < len__19846__auto___26500)){
args__19853__auto__.push((arguments[i__19847__auto___26501]));

var G__26502 = (i__19847__auto___26501 + (1));
i__19847__auto___26501 = G__26502;
continue;
} else {
}
break;
}

var argseq__19854__auto__ = ((((3) < args__19853__auto__.length))?(new cljs.core.IndexedSeq(args__19853__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19854__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26494){
var map__26495 = p__26494;
var map__26495__$1 = ((((!((map__26495 == null)))?((((map__26495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26495):map__26495);
var opts = map__26495__$1;
var statearr_26497_26503 = state;
(statearr_26497_26503[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__26495,map__26495__$1,opts){
return (function (val){
var statearr_26498_26504 = state;
(statearr_26498_26504[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26495,map__26495__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_26499_26505 = state;
(statearr_26499_26505[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26490){
var G__26491 = cljs.core.first.call(null,seq26490);
var seq26490__$1 = cljs.core.next.call(null,seq26490);
var G__26492 = cljs.core.first.call(null,seq26490__$1);
var seq26490__$2 = cljs.core.next.call(null,seq26490__$1);
var G__26493 = cljs.core.first.call(null,seq26490__$2);
var seq26490__$3 = cljs.core.next.call(null,seq26490__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26491,G__26492,G__26493,seq26490__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
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
if(typeof cljs.core.async.t_cljs$core$async26669 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26669 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26670){
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
this.meta26670 = meta26670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26671,meta26670__$1){
var self__ = this;
var _26671__$1 = this;
return (new cljs.core.async.t_cljs$core$async26669(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26670__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26669.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26671){
var self__ = this;
var _26671__$1 = this;
return self__.meta26670;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26669.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26669.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26669.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26669.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26669.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26669.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26669.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26669.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26669.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26670","meta26670",1993850010,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26669.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26669.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26669";

cljs.core.async.t_cljs$core$async26669.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cljs.core.async/t_cljs$core$async26669");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26669 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26669(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26670){
return (new cljs.core.async.t_cljs$core$async26669(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26670));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26669(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25119__auto___26832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___26832,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___26832,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26769){
var state_val_26770 = (state_26769[(1)]);
if((state_val_26770 === (7))){
var inst_26687 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
var statearr_26771_26833 = state_26769__$1;
(statearr_26771_26833[(2)] = inst_26687);

(statearr_26771_26833[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (20))){
var inst_26699 = (state_26769[(7)]);
var state_26769__$1 = state_26769;
var statearr_26772_26834 = state_26769__$1;
(statearr_26772_26834[(2)] = inst_26699);

(statearr_26772_26834[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (27))){
var state_26769__$1 = state_26769;
var statearr_26773_26835 = state_26769__$1;
(statearr_26773_26835[(2)] = null);

(statearr_26773_26835[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (1))){
var inst_26675 = (state_26769[(8)]);
var inst_26675__$1 = calc_state.call(null);
var inst_26677 = (inst_26675__$1 == null);
var inst_26678 = cljs.core.not.call(null,inst_26677);
var state_26769__$1 = (function (){var statearr_26774 = state_26769;
(statearr_26774[(8)] = inst_26675__$1);

return statearr_26774;
})();
if(inst_26678){
var statearr_26775_26836 = state_26769__$1;
(statearr_26775_26836[(1)] = (2));

} else {
var statearr_26776_26837 = state_26769__$1;
(statearr_26776_26837[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (24))){
var inst_26743 = (state_26769[(9)]);
var inst_26722 = (state_26769[(10)]);
var inst_26729 = (state_26769[(11)]);
var inst_26743__$1 = inst_26722.call(null,inst_26729);
var state_26769__$1 = (function (){var statearr_26777 = state_26769;
(statearr_26777[(9)] = inst_26743__$1);

return statearr_26777;
})();
if(cljs.core.truth_(inst_26743__$1)){
var statearr_26778_26838 = state_26769__$1;
(statearr_26778_26838[(1)] = (29));

} else {
var statearr_26779_26839 = state_26769__$1;
(statearr_26779_26839[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (4))){
var inst_26690 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
if(cljs.core.truth_(inst_26690)){
var statearr_26780_26840 = state_26769__$1;
(statearr_26780_26840[(1)] = (8));

} else {
var statearr_26781_26841 = state_26769__$1;
(statearr_26781_26841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (15))){
var inst_26716 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
if(cljs.core.truth_(inst_26716)){
var statearr_26782_26842 = state_26769__$1;
(statearr_26782_26842[(1)] = (19));

} else {
var statearr_26783_26843 = state_26769__$1;
(statearr_26783_26843[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (21))){
var inst_26721 = (state_26769[(12)]);
var inst_26721__$1 = (state_26769[(2)]);
var inst_26722 = cljs.core.get.call(null,inst_26721__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26723 = cljs.core.get.call(null,inst_26721__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26724 = cljs.core.get.call(null,inst_26721__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26769__$1 = (function (){var statearr_26784 = state_26769;
(statearr_26784[(10)] = inst_26722);

(statearr_26784[(13)] = inst_26723);

(statearr_26784[(12)] = inst_26721__$1);

return statearr_26784;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26769__$1,(22),inst_26724);
} else {
if((state_val_26770 === (31))){
var inst_26751 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
if(cljs.core.truth_(inst_26751)){
var statearr_26785_26844 = state_26769__$1;
(statearr_26785_26844[(1)] = (32));

} else {
var statearr_26786_26845 = state_26769__$1;
(statearr_26786_26845[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (32))){
var inst_26728 = (state_26769[(14)]);
var state_26769__$1 = state_26769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26769__$1,(35),out,inst_26728);
} else {
if((state_val_26770 === (33))){
var inst_26721 = (state_26769[(12)]);
var inst_26699 = inst_26721;
var state_26769__$1 = (function (){var statearr_26787 = state_26769;
(statearr_26787[(7)] = inst_26699);

return statearr_26787;
})();
var statearr_26788_26846 = state_26769__$1;
(statearr_26788_26846[(2)] = null);

(statearr_26788_26846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (13))){
var inst_26699 = (state_26769[(7)]);
var inst_26706 = inst_26699.cljs$lang$protocol_mask$partition0$;
var inst_26707 = (inst_26706 & (64));
var inst_26708 = inst_26699.cljs$core$ISeq$;
var inst_26709 = (inst_26707) || (inst_26708);
var state_26769__$1 = state_26769;
if(cljs.core.truth_(inst_26709)){
var statearr_26789_26847 = state_26769__$1;
(statearr_26789_26847[(1)] = (16));

} else {
var statearr_26790_26848 = state_26769__$1;
(statearr_26790_26848[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (22))){
var inst_26728 = (state_26769[(14)]);
var inst_26729 = (state_26769[(11)]);
var inst_26727 = (state_26769[(2)]);
var inst_26728__$1 = cljs.core.nth.call(null,inst_26727,(0),null);
var inst_26729__$1 = cljs.core.nth.call(null,inst_26727,(1),null);
var inst_26730 = (inst_26728__$1 == null);
var inst_26731 = cljs.core._EQ_.call(null,inst_26729__$1,change);
var inst_26732 = (inst_26730) || (inst_26731);
var state_26769__$1 = (function (){var statearr_26791 = state_26769;
(statearr_26791[(14)] = inst_26728__$1);

(statearr_26791[(11)] = inst_26729__$1);

return statearr_26791;
})();
if(cljs.core.truth_(inst_26732)){
var statearr_26792_26849 = state_26769__$1;
(statearr_26792_26849[(1)] = (23));

} else {
var statearr_26793_26850 = state_26769__$1;
(statearr_26793_26850[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (36))){
var inst_26721 = (state_26769[(12)]);
var inst_26699 = inst_26721;
var state_26769__$1 = (function (){var statearr_26794 = state_26769;
(statearr_26794[(7)] = inst_26699);

return statearr_26794;
})();
var statearr_26795_26851 = state_26769__$1;
(statearr_26795_26851[(2)] = null);

(statearr_26795_26851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (29))){
var inst_26743 = (state_26769[(9)]);
var state_26769__$1 = state_26769;
var statearr_26796_26852 = state_26769__$1;
(statearr_26796_26852[(2)] = inst_26743);

(statearr_26796_26852[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (6))){
var state_26769__$1 = state_26769;
var statearr_26797_26853 = state_26769__$1;
(statearr_26797_26853[(2)] = false);

(statearr_26797_26853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (28))){
var inst_26739 = (state_26769[(2)]);
var inst_26740 = calc_state.call(null);
var inst_26699 = inst_26740;
var state_26769__$1 = (function (){var statearr_26798 = state_26769;
(statearr_26798[(7)] = inst_26699);

(statearr_26798[(15)] = inst_26739);

return statearr_26798;
})();
var statearr_26799_26854 = state_26769__$1;
(statearr_26799_26854[(2)] = null);

(statearr_26799_26854[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (25))){
var inst_26765 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
var statearr_26800_26855 = state_26769__$1;
(statearr_26800_26855[(2)] = inst_26765);

(statearr_26800_26855[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (34))){
var inst_26763 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
var statearr_26801_26856 = state_26769__$1;
(statearr_26801_26856[(2)] = inst_26763);

(statearr_26801_26856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (17))){
var state_26769__$1 = state_26769;
var statearr_26802_26857 = state_26769__$1;
(statearr_26802_26857[(2)] = false);

(statearr_26802_26857[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (3))){
var state_26769__$1 = state_26769;
var statearr_26803_26858 = state_26769__$1;
(statearr_26803_26858[(2)] = false);

(statearr_26803_26858[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (12))){
var inst_26767 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26769__$1,inst_26767);
} else {
if((state_val_26770 === (2))){
var inst_26675 = (state_26769[(8)]);
var inst_26680 = inst_26675.cljs$lang$protocol_mask$partition0$;
var inst_26681 = (inst_26680 & (64));
var inst_26682 = inst_26675.cljs$core$ISeq$;
var inst_26683 = (inst_26681) || (inst_26682);
var state_26769__$1 = state_26769;
if(cljs.core.truth_(inst_26683)){
var statearr_26804_26859 = state_26769__$1;
(statearr_26804_26859[(1)] = (5));

} else {
var statearr_26805_26860 = state_26769__$1;
(statearr_26805_26860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (23))){
var inst_26728 = (state_26769[(14)]);
var inst_26734 = (inst_26728 == null);
var state_26769__$1 = state_26769;
if(cljs.core.truth_(inst_26734)){
var statearr_26806_26861 = state_26769__$1;
(statearr_26806_26861[(1)] = (26));

} else {
var statearr_26807_26862 = state_26769__$1;
(statearr_26807_26862[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (35))){
var inst_26754 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
if(cljs.core.truth_(inst_26754)){
var statearr_26808_26863 = state_26769__$1;
(statearr_26808_26863[(1)] = (36));

} else {
var statearr_26809_26864 = state_26769__$1;
(statearr_26809_26864[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (19))){
var inst_26699 = (state_26769[(7)]);
var inst_26718 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26699);
var state_26769__$1 = state_26769;
var statearr_26810_26865 = state_26769__$1;
(statearr_26810_26865[(2)] = inst_26718);

(statearr_26810_26865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (11))){
var inst_26699 = (state_26769[(7)]);
var inst_26703 = (inst_26699 == null);
var inst_26704 = cljs.core.not.call(null,inst_26703);
var state_26769__$1 = state_26769;
if(inst_26704){
var statearr_26811_26866 = state_26769__$1;
(statearr_26811_26866[(1)] = (13));

} else {
var statearr_26812_26867 = state_26769__$1;
(statearr_26812_26867[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (9))){
var inst_26675 = (state_26769[(8)]);
var state_26769__$1 = state_26769;
var statearr_26813_26868 = state_26769__$1;
(statearr_26813_26868[(2)] = inst_26675);

(statearr_26813_26868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (5))){
var state_26769__$1 = state_26769;
var statearr_26814_26869 = state_26769__$1;
(statearr_26814_26869[(2)] = true);

(statearr_26814_26869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (14))){
var state_26769__$1 = state_26769;
var statearr_26815_26870 = state_26769__$1;
(statearr_26815_26870[(2)] = false);

(statearr_26815_26870[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (26))){
var inst_26729 = (state_26769[(11)]);
var inst_26736 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26729);
var state_26769__$1 = state_26769;
var statearr_26816_26871 = state_26769__$1;
(statearr_26816_26871[(2)] = inst_26736);

(statearr_26816_26871[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (16))){
var state_26769__$1 = state_26769;
var statearr_26817_26872 = state_26769__$1;
(statearr_26817_26872[(2)] = true);

(statearr_26817_26872[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (38))){
var inst_26759 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
var statearr_26818_26873 = state_26769__$1;
(statearr_26818_26873[(2)] = inst_26759);

(statearr_26818_26873[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (30))){
var inst_26722 = (state_26769[(10)]);
var inst_26729 = (state_26769[(11)]);
var inst_26723 = (state_26769[(13)]);
var inst_26746 = cljs.core.empty_QMARK_.call(null,inst_26722);
var inst_26747 = inst_26723.call(null,inst_26729);
var inst_26748 = cljs.core.not.call(null,inst_26747);
var inst_26749 = (inst_26746) && (inst_26748);
var state_26769__$1 = state_26769;
var statearr_26819_26874 = state_26769__$1;
(statearr_26819_26874[(2)] = inst_26749);

(statearr_26819_26874[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (10))){
var inst_26675 = (state_26769[(8)]);
var inst_26695 = (state_26769[(2)]);
var inst_26696 = cljs.core.get.call(null,inst_26695,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26697 = cljs.core.get.call(null,inst_26695,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26698 = cljs.core.get.call(null,inst_26695,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26699 = inst_26675;
var state_26769__$1 = (function (){var statearr_26820 = state_26769;
(statearr_26820[(16)] = inst_26698);

(statearr_26820[(17)] = inst_26696);

(statearr_26820[(7)] = inst_26699);

(statearr_26820[(18)] = inst_26697);

return statearr_26820;
})();
var statearr_26821_26875 = state_26769__$1;
(statearr_26821_26875[(2)] = null);

(statearr_26821_26875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (18))){
var inst_26713 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
var statearr_26822_26876 = state_26769__$1;
(statearr_26822_26876[(2)] = inst_26713);

(statearr_26822_26876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (37))){
var state_26769__$1 = state_26769;
var statearr_26823_26877 = state_26769__$1;
(statearr_26823_26877[(2)] = null);

(statearr_26823_26877[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (8))){
var inst_26675 = (state_26769[(8)]);
var inst_26692 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26675);
var state_26769__$1 = state_26769;
var statearr_26824_26878 = state_26769__$1;
(statearr_26824_26878[(2)] = inst_26692);

(statearr_26824_26878[(1)] = (10));


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
});})(c__25119__auto___26832,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25007__auto__,c__25119__auto___26832,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25008__auto__ = null;
var cljs$core$async$mix_$_state_machine__25008__auto____0 = (function (){
var statearr_26828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26828[(0)] = cljs$core$async$mix_$_state_machine__25008__auto__);

(statearr_26828[(1)] = (1));

return statearr_26828;
});
var cljs$core$async$mix_$_state_machine__25008__auto____1 = (function (state_26769){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_26769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e26829){if((e26829 instanceof Object)){
var ex__25011__auto__ = e26829;
var statearr_26830_26879 = state_26769;
(statearr_26830_26879[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26880 = state_26769;
state_26769 = G__26880;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25008__auto__ = function(state_26769){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25008__auto____1.call(this,state_26769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25008__auto____0;
cljs$core$async$mix_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25008__auto____1;
return cljs$core$async$mix_$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___26832,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25121__auto__ = (function (){var statearr_26831 = f__25120__auto__.call(null);
(statearr_26831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___26832);

return statearr_26831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___26832,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19443__auto__ = (((p == null))?null:p);
var m__19444__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19443__auto__)]);
if(!((m__19444__auto__ == null))){
return m__19444__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19444__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19444__auto____$1 == null))){
return m__19444__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19443__auto__ = (((p == null))?null:p);
var m__19444__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19443__auto__)]);
if(!((m__19444__auto__ == null))){
return m__19444__auto__.call(null,p,v,ch);
} else {
var m__19444__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19444__auto____$1 == null))){
return m__19444__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26881 = [];
var len__19846__auto___26884 = arguments.length;
var i__19847__auto___26885 = (0);
while(true){
if((i__19847__auto___26885 < len__19846__auto___26884)){
args26881.push((arguments[i__19847__auto___26885]));

var G__26886 = (i__19847__auto___26885 + (1));
i__19847__auto___26885 = G__26886;
continue;
} else {
}
break;
}

var G__26883 = args26881.length;
switch (G__26883) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26881.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19443__auto__ = (((p == null))?null:p);
var m__19444__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19443__auto__)]);
if(!((m__19444__auto__ == null))){
return m__19444__auto__.call(null,p);
} else {
var m__19444__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19444__auto____$1 == null))){
return m__19444__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19443__auto__ = (((p == null))?null:p);
var m__19444__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19443__auto__)]);
if(!((m__19444__auto__ == null))){
return m__19444__auto__.call(null,p,v);
} else {
var m__19444__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19444__auto____$1 == null))){
return m__19444__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args26889 = [];
var len__19846__auto___27014 = arguments.length;
var i__19847__auto___27015 = (0);
while(true){
if((i__19847__auto___27015 < len__19846__auto___27014)){
args26889.push((arguments[i__19847__auto___27015]));

var G__27016 = (i__19847__auto___27015 + (1));
i__19847__auto___27015 = G__27016;
continue;
} else {
}
break;
}

var G__26891 = args26889.length;
switch (G__26891) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26889.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18788__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18788__auto__)){
return or__18788__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18788__auto__,mults){
return (function (p1__26888_SHARP_){
if(cljs.core.truth_(p1__26888_SHARP_.call(null,topic))){
return p1__26888_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26888_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18788__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26892 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26892 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26893){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26893 = meta26893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26894,meta26893__$1){
var self__ = this;
var _26894__$1 = this;
return (new cljs.core.async.t_cljs$core$async26892(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26893__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26892.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26894){
var self__ = this;
var _26894__$1 = this;
return self__.meta26893;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26892.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26892.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26892.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26892.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26892.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26892.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26892.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26892.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26893","meta26893",-1078742124,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26892.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26892";

cljs.core.async.t_cljs$core$async26892.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cljs.core.async/t_cljs$core$async26892");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26892 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26892(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26893){
return (new cljs.core.async.t_cljs$core$async26892(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26893));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26892(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25119__auto___27018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___27018,mults,ensure_mult,p){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___27018,mults,ensure_mult,p){
return (function (state_26966){
var state_val_26967 = (state_26966[(1)]);
if((state_val_26967 === (7))){
var inst_26962 = (state_26966[(2)]);
var state_26966__$1 = state_26966;
var statearr_26968_27019 = state_26966__$1;
(statearr_26968_27019[(2)] = inst_26962);

(statearr_26968_27019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (20))){
var state_26966__$1 = state_26966;
var statearr_26969_27020 = state_26966__$1;
(statearr_26969_27020[(2)] = null);

(statearr_26969_27020[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (1))){
var state_26966__$1 = state_26966;
var statearr_26970_27021 = state_26966__$1;
(statearr_26970_27021[(2)] = null);

(statearr_26970_27021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (24))){
var inst_26945 = (state_26966[(7)]);
var inst_26954 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26945);
var state_26966__$1 = state_26966;
var statearr_26971_27022 = state_26966__$1;
(statearr_26971_27022[(2)] = inst_26954);

(statearr_26971_27022[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (4))){
var inst_26897 = (state_26966[(8)]);
var inst_26897__$1 = (state_26966[(2)]);
var inst_26898 = (inst_26897__$1 == null);
var state_26966__$1 = (function (){var statearr_26972 = state_26966;
(statearr_26972[(8)] = inst_26897__$1);

return statearr_26972;
})();
if(cljs.core.truth_(inst_26898)){
var statearr_26973_27023 = state_26966__$1;
(statearr_26973_27023[(1)] = (5));

} else {
var statearr_26974_27024 = state_26966__$1;
(statearr_26974_27024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (15))){
var inst_26939 = (state_26966[(2)]);
var state_26966__$1 = state_26966;
var statearr_26975_27025 = state_26966__$1;
(statearr_26975_27025[(2)] = inst_26939);

(statearr_26975_27025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (21))){
var inst_26959 = (state_26966[(2)]);
var state_26966__$1 = (function (){var statearr_26976 = state_26966;
(statearr_26976[(9)] = inst_26959);

return statearr_26976;
})();
var statearr_26977_27026 = state_26966__$1;
(statearr_26977_27026[(2)] = null);

(statearr_26977_27026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (13))){
var inst_26921 = (state_26966[(10)]);
var inst_26923 = cljs.core.chunked_seq_QMARK_.call(null,inst_26921);
var state_26966__$1 = state_26966;
if(inst_26923){
var statearr_26978_27027 = state_26966__$1;
(statearr_26978_27027[(1)] = (16));

} else {
var statearr_26979_27028 = state_26966__$1;
(statearr_26979_27028[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (22))){
var inst_26951 = (state_26966[(2)]);
var state_26966__$1 = state_26966;
if(cljs.core.truth_(inst_26951)){
var statearr_26980_27029 = state_26966__$1;
(statearr_26980_27029[(1)] = (23));

} else {
var statearr_26981_27030 = state_26966__$1;
(statearr_26981_27030[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (6))){
var inst_26947 = (state_26966[(11)]);
var inst_26897 = (state_26966[(8)]);
var inst_26945 = (state_26966[(7)]);
var inst_26945__$1 = topic_fn.call(null,inst_26897);
var inst_26946 = cljs.core.deref.call(null,mults);
var inst_26947__$1 = cljs.core.get.call(null,inst_26946,inst_26945__$1);
var state_26966__$1 = (function (){var statearr_26982 = state_26966;
(statearr_26982[(11)] = inst_26947__$1);

(statearr_26982[(7)] = inst_26945__$1);

return statearr_26982;
})();
if(cljs.core.truth_(inst_26947__$1)){
var statearr_26983_27031 = state_26966__$1;
(statearr_26983_27031[(1)] = (19));

} else {
var statearr_26984_27032 = state_26966__$1;
(statearr_26984_27032[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (25))){
var inst_26956 = (state_26966[(2)]);
var state_26966__$1 = state_26966;
var statearr_26985_27033 = state_26966__$1;
(statearr_26985_27033[(2)] = inst_26956);

(statearr_26985_27033[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (17))){
var inst_26921 = (state_26966[(10)]);
var inst_26930 = cljs.core.first.call(null,inst_26921);
var inst_26931 = cljs.core.async.muxch_STAR_.call(null,inst_26930);
var inst_26932 = cljs.core.async.close_BANG_.call(null,inst_26931);
var inst_26933 = cljs.core.next.call(null,inst_26921);
var inst_26907 = inst_26933;
var inst_26908 = null;
var inst_26909 = (0);
var inst_26910 = (0);
var state_26966__$1 = (function (){var statearr_26986 = state_26966;
(statearr_26986[(12)] = inst_26910);

(statearr_26986[(13)] = inst_26908);

(statearr_26986[(14)] = inst_26909);

(statearr_26986[(15)] = inst_26932);

(statearr_26986[(16)] = inst_26907);

return statearr_26986;
})();
var statearr_26987_27034 = state_26966__$1;
(statearr_26987_27034[(2)] = null);

(statearr_26987_27034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (3))){
var inst_26964 = (state_26966[(2)]);
var state_26966__$1 = state_26966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26966__$1,inst_26964);
} else {
if((state_val_26967 === (12))){
var inst_26941 = (state_26966[(2)]);
var state_26966__$1 = state_26966;
var statearr_26988_27035 = state_26966__$1;
(statearr_26988_27035[(2)] = inst_26941);

(statearr_26988_27035[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (2))){
var state_26966__$1 = state_26966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26966__$1,(4),ch);
} else {
if((state_val_26967 === (23))){
var state_26966__$1 = state_26966;
var statearr_26989_27036 = state_26966__$1;
(statearr_26989_27036[(2)] = null);

(statearr_26989_27036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (19))){
var inst_26947 = (state_26966[(11)]);
var inst_26897 = (state_26966[(8)]);
var inst_26949 = cljs.core.async.muxch_STAR_.call(null,inst_26947);
var state_26966__$1 = state_26966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26966__$1,(22),inst_26949,inst_26897);
} else {
if((state_val_26967 === (11))){
var inst_26907 = (state_26966[(16)]);
var inst_26921 = (state_26966[(10)]);
var inst_26921__$1 = cljs.core.seq.call(null,inst_26907);
var state_26966__$1 = (function (){var statearr_26990 = state_26966;
(statearr_26990[(10)] = inst_26921__$1);

return statearr_26990;
})();
if(inst_26921__$1){
var statearr_26991_27037 = state_26966__$1;
(statearr_26991_27037[(1)] = (13));

} else {
var statearr_26992_27038 = state_26966__$1;
(statearr_26992_27038[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (9))){
var inst_26943 = (state_26966[(2)]);
var state_26966__$1 = state_26966;
var statearr_26993_27039 = state_26966__$1;
(statearr_26993_27039[(2)] = inst_26943);

(statearr_26993_27039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (5))){
var inst_26904 = cljs.core.deref.call(null,mults);
var inst_26905 = cljs.core.vals.call(null,inst_26904);
var inst_26906 = cljs.core.seq.call(null,inst_26905);
var inst_26907 = inst_26906;
var inst_26908 = null;
var inst_26909 = (0);
var inst_26910 = (0);
var state_26966__$1 = (function (){var statearr_26994 = state_26966;
(statearr_26994[(12)] = inst_26910);

(statearr_26994[(13)] = inst_26908);

(statearr_26994[(14)] = inst_26909);

(statearr_26994[(16)] = inst_26907);

return statearr_26994;
})();
var statearr_26995_27040 = state_26966__$1;
(statearr_26995_27040[(2)] = null);

(statearr_26995_27040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (14))){
var state_26966__$1 = state_26966;
var statearr_26999_27041 = state_26966__$1;
(statearr_26999_27041[(2)] = null);

(statearr_26999_27041[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (16))){
var inst_26921 = (state_26966[(10)]);
var inst_26925 = cljs.core.chunk_first.call(null,inst_26921);
var inst_26926 = cljs.core.chunk_rest.call(null,inst_26921);
var inst_26927 = cljs.core.count.call(null,inst_26925);
var inst_26907 = inst_26926;
var inst_26908 = inst_26925;
var inst_26909 = inst_26927;
var inst_26910 = (0);
var state_26966__$1 = (function (){var statearr_27000 = state_26966;
(statearr_27000[(12)] = inst_26910);

(statearr_27000[(13)] = inst_26908);

(statearr_27000[(14)] = inst_26909);

(statearr_27000[(16)] = inst_26907);

return statearr_27000;
})();
var statearr_27001_27042 = state_26966__$1;
(statearr_27001_27042[(2)] = null);

(statearr_27001_27042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (10))){
var inst_26910 = (state_26966[(12)]);
var inst_26908 = (state_26966[(13)]);
var inst_26909 = (state_26966[(14)]);
var inst_26907 = (state_26966[(16)]);
var inst_26915 = cljs.core._nth.call(null,inst_26908,inst_26910);
var inst_26916 = cljs.core.async.muxch_STAR_.call(null,inst_26915);
var inst_26917 = cljs.core.async.close_BANG_.call(null,inst_26916);
var inst_26918 = (inst_26910 + (1));
var tmp26996 = inst_26908;
var tmp26997 = inst_26909;
var tmp26998 = inst_26907;
var inst_26907__$1 = tmp26998;
var inst_26908__$1 = tmp26996;
var inst_26909__$1 = tmp26997;
var inst_26910__$1 = inst_26918;
var state_26966__$1 = (function (){var statearr_27002 = state_26966;
(statearr_27002[(12)] = inst_26910__$1);

(statearr_27002[(17)] = inst_26917);

(statearr_27002[(13)] = inst_26908__$1);

(statearr_27002[(14)] = inst_26909__$1);

(statearr_27002[(16)] = inst_26907__$1);

return statearr_27002;
})();
var statearr_27003_27043 = state_26966__$1;
(statearr_27003_27043[(2)] = null);

(statearr_27003_27043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (18))){
var inst_26936 = (state_26966[(2)]);
var state_26966__$1 = state_26966;
var statearr_27004_27044 = state_26966__$1;
(statearr_27004_27044[(2)] = inst_26936);

(statearr_27004_27044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (8))){
var inst_26910 = (state_26966[(12)]);
var inst_26909 = (state_26966[(14)]);
var inst_26912 = (inst_26910 < inst_26909);
var inst_26913 = inst_26912;
var state_26966__$1 = state_26966;
if(cljs.core.truth_(inst_26913)){
var statearr_27005_27045 = state_26966__$1;
(statearr_27005_27045[(1)] = (10));

} else {
var statearr_27006_27046 = state_26966__$1;
(statearr_27006_27046[(1)] = (11));

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
});})(c__25119__auto___27018,mults,ensure_mult,p))
;
return ((function (switch__25007__auto__,c__25119__auto___27018,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25008__auto__ = null;
var cljs$core$async$state_machine__25008__auto____0 = (function (){
var statearr_27010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27010[(0)] = cljs$core$async$state_machine__25008__auto__);

(statearr_27010[(1)] = (1));

return statearr_27010;
});
var cljs$core$async$state_machine__25008__auto____1 = (function (state_26966){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_26966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e27011){if((e27011 instanceof Object)){
var ex__25011__auto__ = e27011;
var statearr_27012_27047 = state_26966;
(statearr_27012_27047[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27048 = state_26966;
state_26966 = G__27048;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$state_machine__25008__auto__ = function(state_26966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25008__auto____1.call(this,state_26966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25008__auto____0;
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25008__auto____1;
return cljs$core$async$state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___27018,mults,ensure_mult,p))
})();
var state__25121__auto__ = (function (){var statearr_27013 = f__25120__auto__.call(null);
(statearr_27013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___27018);

return statearr_27013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___27018,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args27049 = [];
var len__19846__auto___27052 = arguments.length;
var i__19847__auto___27053 = (0);
while(true){
if((i__19847__auto___27053 < len__19846__auto___27052)){
args27049.push((arguments[i__19847__auto___27053]));

var G__27054 = (i__19847__auto___27053 + (1));
i__19847__auto___27053 = G__27054;
continue;
} else {
}
break;
}

var G__27051 = args27049.length;
switch (G__27051) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27049.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args27056 = [];
var len__19846__auto___27059 = arguments.length;
var i__19847__auto___27060 = (0);
while(true){
if((i__19847__auto___27060 < len__19846__auto___27059)){
args27056.push((arguments[i__19847__auto___27060]));

var G__27061 = (i__19847__auto___27060 + (1));
i__19847__auto___27060 = G__27061;
continue;
} else {
}
break;
}

var G__27058 = args27056.length;
switch (G__27058) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27056.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args27063 = [];
var len__19846__auto___27134 = arguments.length;
var i__19847__auto___27135 = (0);
while(true){
if((i__19847__auto___27135 < len__19846__auto___27134)){
args27063.push((arguments[i__19847__auto___27135]));

var G__27136 = (i__19847__auto___27135 + (1));
i__19847__auto___27135 = G__27136;
continue;
} else {
}
break;
}

var G__27065 = args27063.length;
switch (G__27065) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27063.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
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
var c__25119__auto___27138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___27138,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___27138,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27104){
var state_val_27105 = (state_27104[(1)]);
if((state_val_27105 === (7))){
var state_27104__$1 = state_27104;
var statearr_27106_27139 = state_27104__$1;
(statearr_27106_27139[(2)] = null);

(statearr_27106_27139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (1))){
var state_27104__$1 = state_27104;
var statearr_27107_27140 = state_27104__$1;
(statearr_27107_27140[(2)] = null);

(statearr_27107_27140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (4))){
var inst_27068 = (state_27104[(7)]);
var inst_27070 = (inst_27068 < cnt);
var state_27104__$1 = state_27104;
if(cljs.core.truth_(inst_27070)){
var statearr_27108_27141 = state_27104__$1;
(statearr_27108_27141[(1)] = (6));

} else {
var statearr_27109_27142 = state_27104__$1;
(statearr_27109_27142[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (15))){
var inst_27100 = (state_27104[(2)]);
var state_27104__$1 = state_27104;
var statearr_27110_27143 = state_27104__$1;
(statearr_27110_27143[(2)] = inst_27100);

(statearr_27110_27143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (13))){
var inst_27093 = cljs.core.async.close_BANG_.call(null,out);
var state_27104__$1 = state_27104;
var statearr_27111_27144 = state_27104__$1;
(statearr_27111_27144[(2)] = inst_27093);

(statearr_27111_27144[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (6))){
var state_27104__$1 = state_27104;
var statearr_27112_27145 = state_27104__$1;
(statearr_27112_27145[(2)] = null);

(statearr_27112_27145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (3))){
var inst_27102 = (state_27104[(2)]);
var state_27104__$1 = state_27104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27104__$1,inst_27102);
} else {
if((state_val_27105 === (12))){
var inst_27090 = (state_27104[(8)]);
var inst_27090__$1 = (state_27104[(2)]);
var inst_27091 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27090__$1);
var state_27104__$1 = (function (){var statearr_27113 = state_27104;
(statearr_27113[(8)] = inst_27090__$1);

return statearr_27113;
})();
if(cljs.core.truth_(inst_27091)){
var statearr_27114_27146 = state_27104__$1;
(statearr_27114_27146[(1)] = (13));

} else {
var statearr_27115_27147 = state_27104__$1;
(statearr_27115_27147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (2))){
var inst_27067 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27068 = (0);
var state_27104__$1 = (function (){var statearr_27116 = state_27104;
(statearr_27116[(7)] = inst_27068);

(statearr_27116[(9)] = inst_27067);

return statearr_27116;
})();
var statearr_27117_27148 = state_27104__$1;
(statearr_27117_27148[(2)] = null);

(statearr_27117_27148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (11))){
var inst_27068 = (state_27104[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27104,(10),Object,null,(9));
var inst_27077 = chs__$1.call(null,inst_27068);
var inst_27078 = done.call(null,inst_27068);
var inst_27079 = cljs.core.async.take_BANG_.call(null,inst_27077,inst_27078);
var state_27104__$1 = state_27104;
var statearr_27118_27149 = state_27104__$1;
(statearr_27118_27149[(2)] = inst_27079);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27104__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (9))){
var inst_27068 = (state_27104[(7)]);
var inst_27081 = (state_27104[(2)]);
var inst_27082 = (inst_27068 + (1));
var inst_27068__$1 = inst_27082;
var state_27104__$1 = (function (){var statearr_27119 = state_27104;
(statearr_27119[(7)] = inst_27068__$1);

(statearr_27119[(10)] = inst_27081);

return statearr_27119;
})();
var statearr_27120_27150 = state_27104__$1;
(statearr_27120_27150[(2)] = null);

(statearr_27120_27150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (5))){
var inst_27088 = (state_27104[(2)]);
var state_27104__$1 = (function (){var statearr_27121 = state_27104;
(statearr_27121[(11)] = inst_27088);

return statearr_27121;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27104__$1,(12),dchan);
} else {
if((state_val_27105 === (14))){
var inst_27090 = (state_27104[(8)]);
var inst_27095 = cljs.core.apply.call(null,f,inst_27090);
var state_27104__$1 = state_27104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27104__$1,(16),out,inst_27095);
} else {
if((state_val_27105 === (16))){
var inst_27097 = (state_27104[(2)]);
var state_27104__$1 = (function (){var statearr_27122 = state_27104;
(statearr_27122[(12)] = inst_27097);

return statearr_27122;
})();
var statearr_27123_27151 = state_27104__$1;
(statearr_27123_27151[(2)] = null);

(statearr_27123_27151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (10))){
var inst_27072 = (state_27104[(2)]);
var inst_27073 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27104__$1 = (function (){var statearr_27124 = state_27104;
(statearr_27124[(13)] = inst_27072);

return statearr_27124;
})();
var statearr_27125_27152 = state_27104__$1;
(statearr_27125_27152[(2)] = inst_27073);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27104__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27105 === (8))){
var inst_27086 = (state_27104[(2)]);
var state_27104__$1 = state_27104;
var statearr_27126_27153 = state_27104__$1;
(statearr_27126_27153[(2)] = inst_27086);

(statearr_27126_27153[(1)] = (5));


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
});})(c__25119__auto___27138,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25007__auto__,c__25119__auto___27138,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25008__auto__ = null;
var cljs$core$async$state_machine__25008__auto____0 = (function (){
var statearr_27130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27130[(0)] = cljs$core$async$state_machine__25008__auto__);

(statearr_27130[(1)] = (1));

return statearr_27130;
});
var cljs$core$async$state_machine__25008__auto____1 = (function (state_27104){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_27104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e27131){if((e27131 instanceof Object)){
var ex__25011__auto__ = e27131;
var statearr_27132_27154 = state_27104;
(statearr_27132_27154[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27155 = state_27104;
state_27104 = G__27155;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$state_machine__25008__auto__ = function(state_27104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25008__auto____1.call(this,state_27104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25008__auto____0;
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25008__auto____1;
return cljs$core$async$state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___27138,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25121__auto__ = (function (){var statearr_27133 = f__25120__auto__.call(null);
(statearr_27133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___27138);

return statearr_27133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___27138,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args27157 = [];
var len__19846__auto___27213 = arguments.length;
var i__19847__auto___27214 = (0);
while(true){
if((i__19847__auto___27214 < len__19846__auto___27213)){
args27157.push((arguments[i__19847__auto___27214]));

var G__27215 = (i__19847__auto___27214 + (1));
i__19847__auto___27214 = G__27215;
continue;
} else {
}
break;
}

var G__27159 = args27157.length;
switch (G__27159) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27157.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25119__auto___27217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___27217,out){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___27217,out){
return (function (state_27189){
var state_val_27190 = (state_27189[(1)]);
if((state_val_27190 === (7))){
var inst_27168 = (state_27189[(7)]);
var inst_27169 = (state_27189[(8)]);
var inst_27168__$1 = (state_27189[(2)]);
var inst_27169__$1 = cljs.core.nth.call(null,inst_27168__$1,(0),null);
var inst_27170 = cljs.core.nth.call(null,inst_27168__$1,(1),null);
var inst_27171 = (inst_27169__$1 == null);
var state_27189__$1 = (function (){var statearr_27191 = state_27189;
(statearr_27191[(7)] = inst_27168__$1);

(statearr_27191[(8)] = inst_27169__$1);

(statearr_27191[(9)] = inst_27170);

return statearr_27191;
})();
if(cljs.core.truth_(inst_27171)){
var statearr_27192_27218 = state_27189__$1;
(statearr_27192_27218[(1)] = (8));

} else {
var statearr_27193_27219 = state_27189__$1;
(statearr_27193_27219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (1))){
var inst_27160 = cljs.core.vec.call(null,chs);
var inst_27161 = inst_27160;
var state_27189__$1 = (function (){var statearr_27194 = state_27189;
(statearr_27194[(10)] = inst_27161);

return statearr_27194;
})();
var statearr_27195_27220 = state_27189__$1;
(statearr_27195_27220[(2)] = null);

(statearr_27195_27220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (4))){
var inst_27161 = (state_27189[(10)]);
var state_27189__$1 = state_27189;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27189__$1,(7),inst_27161);
} else {
if((state_val_27190 === (6))){
var inst_27185 = (state_27189[(2)]);
var state_27189__$1 = state_27189;
var statearr_27196_27221 = state_27189__$1;
(statearr_27196_27221[(2)] = inst_27185);

(statearr_27196_27221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (3))){
var inst_27187 = (state_27189[(2)]);
var state_27189__$1 = state_27189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27189__$1,inst_27187);
} else {
if((state_val_27190 === (2))){
var inst_27161 = (state_27189[(10)]);
var inst_27163 = cljs.core.count.call(null,inst_27161);
var inst_27164 = (inst_27163 > (0));
var state_27189__$1 = state_27189;
if(cljs.core.truth_(inst_27164)){
var statearr_27198_27222 = state_27189__$1;
(statearr_27198_27222[(1)] = (4));

} else {
var statearr_27199_27223 = state_27189__$1;
(statearr_27199_27223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (11))){
var inst_27161 = (state_27189[(10)]);
var inst_27178 = (state_27189[(2)]);
var tmp27197 = inst_27161;
var inst_27161__$1 = tmp27197;
var state_27189__$1 = (function (){var statearr_27200 = state_27189;
(statearr_27200[(11)] = inst_27178);

(statearr_27200[(10)] = inst_27161__$1);

return statearr_27200;
})();
var statearr_27201_27224 = state_27189__$1;
(statearr_27201_27224[(2)] = null);

(statearr_27201_27224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (9))){
var inst_27169 = (state_27189[(8)]);
var state_27189__$1 = state_27189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27189__$1,(11),out,inst_27169);
} else {
if((state_val_27190 === (5))){
var inst_27183 = cljs.core.async.close_BANG_.call(null,out);
var state_27189__$1 = state_27189;
var statearr_27202_27225 = state_27189__$1;
(statearr_27202_27225[(2)] = inst_27183);

(statearr_27202_27225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (10))){
var inst_27181 = (state_27189[(2)]);
var state_27189__$1 = state_27189;
var statearr_27203_27226 = state_27189__$1;
(statearr_27203_27226[(2)] = inst_27181);

(statearr_27203_27226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (8))){
var inst_27168 = (state_27189[(7)]);
var inst_27169 = (state_27189[(8)]);
var inst_27161 = (state_27189[(10)]);
var inst_27170 = (state_27189[(9)]);
var inst_27173 = (function (){var cs = inst_27161;
var vec__27166 = inst_27168;
var v = inst_27169;
var c = inst_27170;
return ((function (cs,vec__27166,v,c,inst_27168,inst_27169,inst_27161,inst_27170,state_val_27190,c__25119__auto___27217,out){
return (function (p1__27156_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27156_SHARP_);
});
;})(cs,vec__27166,v,c,inst_27168,inst_27169,inst_27161,inst_27170,state_val_27190,c__25119__auto___27217,out))
})();
var inst_27174 = cljs.core.filterv.call(null,inst_27173,inst_27161);
var inst_27161__$1 = inst_27174;
var state_27189__$1 = (function (){var statearr_27204 = state_27189;
(statearr_27204[(10)] = inst_27161__$1);

return statearr_27204;
})();
var statearr_27205_27227 = state_27189__$1;
(statearr_27205_27227[(2)] = null);

(statearr_27205_27227[(1)] = (2));


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
});})(c__25119__auto___27217,out))
;
return ((function (switch__25007__auto__,c__25119__auto___27217,out){
return (function() {
var cljs$core$async$state_machine__25008__auto__ = null;
var cljs$core$async$state_machine__25008__auto____0 = (function (){
var statearr_27209 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27209[(0)] = cljs$core$async$state_machine__25008__auto__);

(statearr_27209[(1)] = (1));

return statearr_27209;
});
var cljs$core$async$state_machine__25008__auto____1 = (function (state_27189){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_27189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e27210){if((e27210 instanceof Object)){
var ex__25011__auto__ = e27210;
var statearr_27211_27228 = state_27189;
(statearr_27211_27228[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27229 = state_27189;
state_27189 = G__27229;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$state_machine__25008__auto__ = function(state_27189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25008__auto____1.call(this,state_27189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25008__auto____0;
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25008__auto____1;
return cljs$core$async$state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___27217,out))
})();
var state__25121__auto__ = (function (){var statearr_27212 = f__25120__auto__.call(null);
(statearr_27212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___27217);

return statearr_27212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___27217,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args27230 = [];
var len__19846__auto___27279 = arguments.length;
var i__19847__auto___27280 = (0);
while(true){
if((i__19847__auto___27280 < len__19846__auto___27279)){
args27230.push((arguments[i__19847__auto___27280]));

var G__27281 = (i__19847__auto___27280 + (1));
i__19847__auto___27280 = G__27281;
continue;
} else {
}
break;
}

var G__27232 = args27230.length;
switch (G__27232) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27230.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25119__auto___27283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___27283,out){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___27283,out){
return (function (state_27256){
var state_val_27257 = (state_27256[(1)]);
if((state_val_27257 === (7))){
var inst_27238 = (state_27256[(7)]);
var inst_27238__$1 = (state_27256[(2)]);
var inst_27239 = (inst_27238__$1 == null);
var inst_27240 = cljs.core.not.call(null,inst_27239);
var state_27256__$1 = (function (){var statearr_27258 = state_27256;
(statearr_27258[(7)] = inst_27238__$1);

return statearr_27258;
})();
if(inst_27240){
var statearr_27259_27284 = state_27256__$1;
(statearr_27259_27284[(1)] = (8));

} else {
var statearr_27260_27285 = state_27256__$1;
(statearr_27260_27285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27257 === (1))){
var inst_27233 = (0);
var state_27256__$1 = (function (){var statearr_27261 = state_27256;
(statearr_27261[(8)] = inst_27233);

return statearr_27261;
})();
var statearr_27262_27286 = state_27256__$1;
(statearr_27262_27286[(2)] = null);

(statearr_27262_27286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27257 === (4))){
var state_27256__$1 = state_27256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27256__$1,(7),ch);
} else {
if((state_val_27257 === (6))){
var inst_27251 = (state_27256[(2)]);
var state_27256__$1 = state_27256;
var statearr_27263_27287 = state_27256__$1;
(statearr_27263_27287[(2)] = inst_27251);

(statearr_27263_27287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27257 === (3))){
var inst_27253 = (state_27256[(2)]);
var inst_27254 = cljs.core.async.close_BANG_.call(null,out);
var state_27256__$1 = (function (){var statearr_27264 = state_27256;
(statearr_27264[(9)] = inst_27253);

return statearr_27264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27256__$1,inst_27254);
} else {
if((state_val_27257 === (2))){
var inst_27233 = (state_27256[(8)]);
var inst_27235 = (inst_27233 < n);
var state_27256__$1 = state_27256;
if(cljs.core.truth_(inst_27235)){
var statearr_27265_27288 = state_27256__$1;
(statearr_27265_27288[(1)] = (4));

} else {
var statearr_27266_27289 = state_27256__$1;
(statearr_27266_27289[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27257 === (11))){
var inst_27233 = (state_27256[(8)]);
var inst_27243 = (state_27256[(2)]);
var inst_27244 = (inst_27233 + (1));
var inst_27233__$1 = inst_27244;
var state_27256__$1 = (function (){var statearr_27267 = state_27256;
(statearr_27267[(8)] = inst_27233__$1);

(statearr_27267[(10)] = inst_27243);

return statearr_27267;
})();
var statearr_27268_27290 = state_27256__$1;
(statearr_27268_27290[(2)] = null);

(statearr_27268_27290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27257 === (9))){
var state_27256__$1 = state_27256;
var statearr_27269_27291 = state_27256__$1;
(statearr_27269_27291[(2)] = null);

(statearr_27269_27291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27257 === (5))){
var state_27256__$1 = state_27256;
var statearr_27270_27292 = state_27256__$1;
(statearr_27270_27292[(2)] = null);

(statearr_27270_27292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27257 === (10))){
var inst_27248 = (state_27256[(2)]);
var state_27256__$1 = state_27256;
var statearr_27271_27293 = state_27256__$1;
(statearr_27271_27293[(2)] = inst_27248);

(statearr_27271_27293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27257 === (8))){
var inst_27238 = (state_27256[(7)]);
var state_27256__$1 = state_27256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27256__$1,(11),out,inst_27238);
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
});})(c__25119__auto___27283,out))
;
return ((function (switch__25007__auto__,c__25119__auto___27283,out){
return (function() {
var cljs$core$async$state_machine__25008__auto__ = null;
var cljs$core$async$state_machine__25008__auto____0 = (function (){
var statearr_27275 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27275[(0)] = cljs$core$async$state_machine__25008__auto__);

(statearr_27275[(1)] = (1));

return statearr_27275;
});
var cljs$core$async$state_machine__25008__auto____1 = (function (state_27256){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_27256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e27276){if((e27276 instanceof Object)){
var ex__25011__auto__ = e27276;
var statearr_27277_27294 = state_27256;
(statearr_27277_27294[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27295 = state_27256;
state_27256 = G__27295;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$state_machine__25008__auto__ = function(state_27256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25008__auto____1.call(this,state_27256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25008__auto____0;
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25008__auto____1;
return cljs$core$async$state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___27283,out))
})();
var state__25121__auto__ = (function (){var statearr_27278 = f__25120__auto__.call(null);
(statearr_27278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___27283);

return statearr_27278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___27283,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27303 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27303 = (function (map_LT_,f,ch,meta27304){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27304 = meta27304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27305,meta27304__$1){
var self__ = this;
var _27305__$1 = this;
return (new cljs.core.async.t_cljs$core$async27303(self__.map_LT_,self__.f,self__.ch,meta27304__$1));
});

cljs.core.async.t_cljs$core$async27303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27305){
var self__ = this;
var _27305__$1 = this;
return self__.meta27304;
});

cljs.core.async.t_cljs$core$async27303.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27303.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27303.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27303.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27303.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27306 = (function (map_LT_,f,ch,meta27304,_,fn1,meta27307){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27304 = meta27304;
this._ = _;
this.fn1 = fn1;
this.meta27307 = meta27307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27308,meta27307__$1){
var self__ = this;
var _27308__$1 = this;
return (new cljs.core.async.t_cljs$core$async27306(self__.map_LT_,self__.f,self__.ch,self__.meta27304,self__._,self__.fn1,meta27307__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27308){
var self__ = this;
var _27308__$1 = this;
return self__.meta27307;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27306.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27306.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27306.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27306.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27296_SHARP_){
return f1.call(null,(((p1__27296_SHARP_ == null))?null:self__.f.call(null,p1__27296_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27306.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27304","meta27304",-1341231262,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27303","cljs.core.async/t_cljs$core$async27303",1023667290,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27307","meta27307",-952856592,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27306";

cljs.core.async.t_cljs$core$async27306.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cljs.core.async/t_cljs$core$async27306");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27306 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27306(map_LT___$1,f__$1,ch__$1,meta27304__$1,___$2,fn1__$1,meta27307){
return (new cljs.core.async.t_cljs$core$async27306(map_LT___$1,f__$1,ch__$1,meta27304__$1,___$2,fn1__$1,meta27307));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27306(self__.map_LT_,self__.f,self__.ch,self__.meta27304,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18776__auto__ = ret;
if(cljs.core.truth_(and__18776__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18776__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27303.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27303.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27304","meta27304",-1341231262,null)], null);
});

cljs.core.async.t_cljs$core$async27303.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27303";

cljs.core.async.t_cljs$core$async27303.cljs$lang$ctorPrWriter = (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cljs.core.async/t_cljs$core$async27303");
});

cljs.core.async.__GT_t_cljs$core$async27303 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27303(map_LT___$1,f__$1,ch__$1,meta27304){
return (new cljs.core.async.t_cljs$core$async27303(map_LT___$1,f__$1,ch__$1,meta27304));
});

}

return (new cljs.core.async.t_cljs$core$async27303(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27312 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27312 = (function (map_GT_,f,ch,meta27313){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27313 = meta27313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27314,meta27313__$1){
var self__ = this;
var _27314__$1 = this;
return (new cljs.core.async.t_cljs$core$async27312(self__.map_GT_,self__.f,self__.ch,meta27313__$1));
});

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27314){
var self__ = this;
var _27314__$1 = this;
return self__.meta27313;
});

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27313","meta27313",1379960073,null)], null);
});

cljs.core.async.t_cljs$core$async27312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27312";

cljs.core.async.t_cljs$core$async27312.cljs$lang$ctorPrWriter = (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cljs.core.async/t_cljs$core$async27312");
});

cljs.core.async.__GT_t_cljs$core$async27312 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27312(map_GT___$1,f__$1,ch__$1,meta27313){
return (new cljs.core.async.t_cljs$core$async27312(map_GT___$1,f__$1,ch__$1,meta27313));
});

}

return (new cljs.core.async.t_cljs$core$async27312(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27318 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27318 = (function (filter_GT_,p,ch,meta27319){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27319 = meta27319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27320,meta27319__$1){
var self__ = this;
var _27320__$1 = this;
return (new cljs.core.async.t_cljs$core$async27318(self__.filter_GT_,self__.p,self__.ch,meta27319__$1));
});

cljs.core.async.t_cljs$core$async27318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27320){
var self__ = this;
var _27320__$1 = this;
return self__.meta27319;
});

cljs.core.async.t_cljs$core$async27318.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27318.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27318.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27318.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27318.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27318.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27318.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27319","meta27319",1998316698,null)], null);
});

cljs.core.async.t_cljs$core$async27318.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27318";

cljs.core.async.t_cljs$core$async27318.cljs$lang$ctorPrWriter = (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cljs.core.async/t_cljs$core$async27318");
});

cljs.core.async.__GT_t_cljs$core$async27318 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27318(filter_GT___$1,p__$1,ch__$1,meta27319){
return (new cljs.core.async.t_cljs$core$async27318(filter_GT___$1,p__$1,ch__$1,meta27319));
});

}

return (new cljs.core.async.t_cljs$core$async27318(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args27321 = [];
var len__19846__auto___27365 = arguments.length;
var i__19847__auto___27366 = (0);
while(true){
if((i__19847__auto___27366 < len__19846__auto___27365)){
args27321.push((arguments[i__19847__auto___27366]));

var G__27367 = (i__19847__auto___27366 + (1));
i__19847__auto___27366 = G__27367;
continue;
} else {
}
break;
}

var G__27323 = args27321.length;
switch (G__27323) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27321.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25119__auto___27369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___27369,out){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___27369,out){
return (function (state_27344){
var state_val_27345 = (state_27344[(1)]);
if((state_val_27345 === (7))){
var inst_27340 = (state_27344[(2)]);
var state_27344__$1 = state_27344;
var statearr_27346_27370 = state_27344__$1;
(statearr_27346_27370[(2)] = inst_27340);

(statearr_27346_27370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27345 === (1))){
var state_27344__$1 = state_27344;
var statearr_27347_27371 = state_27344__$1;
(statearr_27347_27371[(2)] = null);

(statearr_27347_27371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27345 === (4))){
var inst_27326 = (state_27344[(7)]);
var inst_27326__$1 = (state_27344[(2)]);
var inst_27327 = (inst_27326__$1 == null);
var state_27344__$1 = (function (){var statearr_27348 = state_27344;
(statearr_27348[(7)] = inst_27326__$1);

return statearr_27348;
})();
if(cljs.core.truth_(inst_27327)){
var statearr_27349_27372 = state_27344__$1;
(statearr_27349_27372[(1)] = (5));

} else {
var statearr_27350_27373 = state_27344__$1;
(statearr_27350_27373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27345 === (6))){
var inst_27326 = (state_27344[(7)]);
var inst_27331 = p.call(null,inst_27326);
var state_27344__$1 = state_27344;
if(cljs.core.truth_(inst_27331)){
var statearr_27351_27374 = state_27344__$1;
(statearr_27351_27374[(1)] = (8));

} else {
var statearr_27352_27375 = state_27344__$1;
(statearr_27352_27375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27345 === (3))){
var inst_27342 = (state_27344[(2)]);
var state_27344__$1 = state_27344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27344__$1,inst_27342);
} else {
if((state_val_27345 === (2))){
var state_27344__$1 = state_27344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27344__$1,(4),ch);
} else {
if((state_val_27345 === (11))){
var inst_27334 = (state_27344[(2)]);
var state_27344__$1 = state_27344;
var statearr_27353_27376 = state_27344__$1;
(statearr_27353_27376[(2)] = inst_27334);

(statearr_27353_27376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27345 === (9))){
var state_27344__$1 = state_27344;
var statearr_27354_27377 = state_27344__$1;
(statearr_27354_27377[(2)] = null);

(statearr_27354_27377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27345 === (5))){
var inst_27329 = cljs.core.async.close_BANG_.call(null,out);
var state_27344__$1 = state_27344;
var statearr_27355_27378 = state_27344__$1;
(statearr_27355_27378[(2)] = inst_27329);

(statearr_27355_27378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27345 === (10))){
var inst_27337 = (state_27344[(2)]);
var state_27344__$1 = (function (){var statearr_27356 = state_27344;
(statearr_27356[(8)] = inst_27337);

return statearr_27356;
})();
var statearr_27357_27379 = state_27344__$1;
(statearr_27357_27379[(2)] = null);

(statearr_27357_27379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27345 === (8))){
var inst_27326 = (state_27344[(7)]);
var state_27344__$1 = state_27344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27344__$1,(11),out,inst_27326);
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
});})(c__25119__auto___27369,out))
;
return ((function (switch__25007__auto__,c__25119__auto___27369,out){
return (function() {
var cljs$core$async$state_machine__25008__auto__ = null;
var cljs$core$async$state_machine__25008__auto____0 = (function (){
var statearr_27361 = [null,null,null,null,null,null,null,null,null];
(statearr_27361[(0)] = cljs$core$async$state_machine__25008__auto__);

(statearr_27361[(1)] = (1));

return statearr_27361;
});
var cljs$core$async$state_machine__25008__auto____1 = (function (state_27344){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_27344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e27362){if((e27362 instanceof Object)){
var ex__25011__auto__ = e27362;
var statearr_27363_27380 = state_27344;
(statearr_27363_27380[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27381 = state_27344;
state_27344 = G__27381;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$state_machine__25008__auto__ = function(state_27344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25008__auto____1.call(this,state_27344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25008__auto____0;
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25008__auto____1;
return cljs$core$async$state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___27369,out))
})();
var state__25121__auto__ = (function (){var statearr_27364 = f__25120__auto__.call(null);
(statearr_27364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___27369);

return statearr_27364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___27369,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27382 = [];
var len__19846__auto___27385 = arguments.length;
var i__19847__auto___27386 = (0);
while(true){
if((i__19847__auto___27386 < len__19846__auto___27385)){
args27382.push((arguments[i__19847__auto___27386]));

var G__27387 = (i__19847__auto___27386 + (1));
i__19847__auto___27386 = G__27387;
continue;
} else {
}
break;
}

var G__27384 = args27382.length;
switch (G__27384) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27382.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto__){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto__){
return (function (state_27554){
var state_val_27555 = (state_27554[(1)]);
if((state_val_27555 === (7))){
var inst_27550 = (state_27554[(2)]);
var state_27554__$1 = state_27554;
var statearr_27556_27597 = state_27554__$1;
(statearr_27556_27597[(2)] = inst_27550);

(statearr_27556_27597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (20))){
var inst_27520 = (state_27554[(7)]);
var inst_27531 = (state_27554[(2)]);
var inst_27532 = cljs.core.next.call(null,inst_27520);
var inst_27506 = inst_27532;
var inst_27507 = null;
var inst_27508 = (0);
var inst_27509 = (0);
var state_27554__$1 = (function (){var statearr_27557 = state_27554;
(statearr_27557[(8)] = inst_27506);

(statearr_27557[(9)] = inst_27531);

(statearr_27557[(10)] = inst_27508);

(statearr_27557[(11)] = inst_27507);

(statearr_27557[(12)] = inst_27509);

return statearr_27557;
})();
var statearr_27558_27598 = state_27554__$1;
(statearr_27558_27598[(2)] = null);

(statearr_27558_27598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (1))){
var state_27554__$1 = state_27554;
var statearr_27559_27599 = state_27554__$1;
(statearr_27559_27599[(2)] = null);

(statearr_27559_27599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (4))){
var inst_27495 = (state_27554[(13)]);
var inst_27495__$1 = (state_27554[(2)]);
var inst_27496 = (inst_27495__$1 == null);
var state_27554__$1 = (function (){var statearr_27560 = state_27554;
(statearr_27560[(13)] = inst_27495__$1);

return statearr_27560;
})();
if(cljs.core.truth_(inst_27496)){
var statearr_27561_27600 = state_27554__$1;
(statearr_27561_27600[(1)] = (5));

} else {
var statearr_27562_27601 = state_27554__$1;
(statearr_27562_27601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (15))){
var state_27554__$1 = state_27554;
var statearr_27566_27602 = state_27554__$1;
(statearr_27566_27602[(2)] = null);

(statearr_27566_27602[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (21))){
var state_27554__$1 = state_27554;
var statearr_27567_27603 = state_27554__$1;
(statearr_27567_27603[(2)] = null);

(statearr_27567_27603[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (13))){
var inst_27506 = (state_27554[(8)]);
var inst_27508 = (state_27554[(10)]);
var inst_27507 = (state_27554[(11)]);
var inst_27509 = (state_27554[(12)]);
var inst_27516 = (state_27554[(2)]);
var inst_27517 = (inst_27509 + (1));
var tmp27563 = inst_27506;
var tmp27564 = inst_27508;
var tmp27565 = inst_27507;
var inst_27506__$1 = tmp27563;
var inst_27507__$1 = tmp27565;
var inst_27508__$1 = tmp27564;
var inst_27509__$1 = inst_27517;
var state_27554__$1 = (function (){var statearr_27568 = state_27554;
(statearr_27568[(8)] = inst_27506__$1);

(statearr_27568[(10)] = inst_27508__$1);

(statearr_27568[(11)] = inst_27507__$1);

(statearr_27568[(12)] = inst_27509__$1);

(statearr_27568[(14)] = inst_27516);

return statearr_27568;
})();
var statearr_27569_27604 = state_27554__$1;
(statearr_27569_27604[(2)] = null);

(statearr_27569_27604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (22))){
var state_27554__$1 = state_27554;
var statearr_27570_27605 = state_27554__$1;
(statearr_27570_27605[(2)] = null);

(statearr_27570_27605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (6))){
var inst_27495 = (state_27554[(13)]);
var inst_27504 = f.call(null,inst_27495);
var inst_27505 = cljs.core.seq.call(null,inst_27504);
var inst_27506 = inst_27505;
var inst_27507 = null;
var inst_27508 = (0);
var inst_27509 = (0);
var state_27554__$1 = (function (){var statearr_27571 = state_27554;
(statearr_27571[(8)] = inst_27506);

(statearr_27571[(10)] = inst_27508);

(statearr_27571[(11)] = inst_27507);

(statearr_27571[(12)] = inst_27509);

return statearr_27571;
})();
var statearr_27572_27606 = state_27554__$1;
(statearr_27572_27606[(2)] = null);

(statearr_27572_27606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (17))){
var inst_27520 = (state_27554[(7)]);
var inst_27524 = cljs.core.chunk_first.call(null,inst_27520);
var inst_27525 = cljs.core.chunk_rest.call(null,inst_27520);
var inst_27526 = cljs.core.count.call(null,inst_27524);
var inst_27506 = inst_27525;
var inst_27507 = inst_27524;
var inst_27508 = inst_27526;
var inst_27509 = (0);
var state_27554__$1 = (function (){var statearr_27573 = state_27554;
(statearr_27573[(8)] = inst_27506);

(statearr_27573[(10)] = inst_27508);

(statearr_27573[(11)] = inst_27507);

(statearr_27573[(12)] = inst_27509);

return statearr_27573;
})();
var statearr_27574_27607 = state_27554__$1;
(statearr_27574_27607[(2)] = null);

(statearr_27574_27607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (3))){
var inst_27552 = (state_27554[(2)]);
var state_27554__$1 = state_27554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27554__$1,inst_27552);
} else {
if((state_val_27555 === (12))){
var inst_27540 = (state_27554[(2)]);
var state_27554__$1 = state_27554;
var statearr_27575_27608 = state_27554__$1;
(statearr_27575_27608[(2)] = inst_27540);

(statearr_27575_27608[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (2))){
var state_27554__$1 = state_27554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27554__$1,(4),in$);
} else {
if((state_val_27555 === (23))){
var inst_27548 = (state_27554[(2)]);
var state_27554__$1 = state_27554;
var statearr_27576_27609 = state_27554__$1;
(statearr_27576_27609[(2)] = inst_27548);

(statearr_27576_27609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (19))){
var inst_27535 = (state_27554[(2)]);
var state_27554__$1 = state_27554;
var statearr_27577_27610 = state_27554__$1;
(statearr_27577_27610[(2)] = inst_27535);

(statearr_27577_27610[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (11))){
var inst_27520 = (state_27554[(7)]);
var inst_27506 = (state_27554[(8)]);
var inst_27520__$1 = cljs.core.seq.call(null,inst_27506);
var state_27554__$1 = (function (){var statearr_27578 = state_27554;
(statearr_27578[(7)] = inst_27520__$1);

return statearr_27578;
})();
if(inst_27520__$1){
var statearr_27579_27611 = state_27554__$1;
(statearr_27579_27611[(1)] = (14));

} else {
var statearr_27580_27612 = state_27554__$1;
(statearr_27580_27612[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (9))){
var inst_27542 = (state_27554[(2)]);
var inst_27543 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27554__$1 = (function (){var statearr_27581 = state_27554;
(statearr_27581[(15)] = inst_27542);

return statearr_27581;
})();
if(cljs.core.truth_(inst_27543)){
var statearr_27582_27613 = state_27554__$1;
(statearr_27582_27613[(1)] = (21));

} else {
var statearr_27583_27614 = state_27554__$1;
(statearr_27583_27614[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (5))){
var inst_27498 = cljs.core.async.close_BANG_.call(null,out);
var state_27554__$1 = state_27554;
var statearr_27584_27615 = state_27554__$1;
(statearr_27584_27615[(2)] = inst_27498);

(statearr_27584_27615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (14))){
var inst_27520 = (state_27554[(7)]);
var inst_27522 = cljs.core.chunked_seq_QMARK_.call(null,inst_27520);
var state_27554__$1 = state_27554;
if(inst_27522){
var statearr_27585_27616 = state_27554__$1;
(statearr_27585_27616[(1)] = (17));

} else {
var statearr_27586_27617 = state_27554__$1;
(statearr_27586_27617[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (16))){
var inst_27538 = (state_27554[(2)]);
var state_27554__$1 = state_27554;
var statearr_27587_27618 = state_27554__$1;
(statearr_27587_27618[(2)] = inst_27538);

(statearr_27587_27618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (10))){
var inst_27507 = (state_27554[(11)]);
var inst_27509 = (state_27554[(12)]);
var inst_27514 = cljs.core._nth.call(null,inst_27507,inst_27509);
var state_27554__$1 = state_27554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27554__$1,(13),out,inst_27514);
} else {
if((state_val_27555 === (18))){
var inst_27520 = (state_27554[(7)]);
var inst_27529 = cljs.core.first.call(null,inst_27520);
var state_27554__$1 = state_27554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27554__$1,(20),out,inst_27529);
} else {
if((state_val_27555 === (8))){
var inst_27508 = (state_27554[(10)]);
var inst_27509 = (state_27554[(12)]);
var inst_27511 = (inst_27509 < inst_27508);
var inst_27512 = inst_27511;
var state_27554__$1 = state_27554;
if(cljs.core.truth_(inst_27512)){
var statearr_27588_27619 = state_27554__$1;
(statearr_27588_27619[(1)] = (10));

} else {
var statearr_27589_27620 = state_27554__$1;
(statearr_27589_27620[(1)] = (11));

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
});})(c__25119__auto__))
;
return ((function (switch__25007__auto__,c__25119__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25008__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25008__auto____0 = (function (){
var statearr_27593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27593[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25008__auto__);

(statearr_27593[(1)] = (1));

return statearr_27593;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25008__auto____1 = (function (state_27554){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_27554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e27594){if((e27594 instanceof Object)){
var ex__25011__auto__ = e27594;
var statearr_27595_27621 = state_27554;
(statearr_27595_27621[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27622 = state_27554;
state_27554 = G__27622;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25008__auto__ = function(state_27554){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25008__auto____1.call(this,state_27554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25008__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25008__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto__))
})();
var state__25121__auto__ = (function (){var statearr_27596 = f__25120__auto__.call(null);
(statearr_27596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto__);

return statearr_27596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto__))
);

return c__25119__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27623 = [];
var len__19846__auto___27626 = arguments.length;
var i__19847__auto___27627 = (0);
while(true){
if((i__19847__auto___27627 < len__19846__auto___27626)){
args27623.push((arguments[i__19847__auto___27627]));

var G__27628 = (i__19847__auto___27627 + (1));
i__19847__auto___27627 = G__27628;
continue;
} else {
}
break;
}

var G__27625 = args27623.length;
switch (G__27625) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27623.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args27630 = [];
var len__19846__auto___27633 = arguments.length;
var i__19847__auto___27634 = (0);
while(true){
if((i__19847__auto___27634 < len__19846__auto___27633)){
args27630.push((arguments[i__19847__auto___27634]));

var G__27635 = (i__19847__auto___27634 + (1));
i__19847__auto___27634 = G__27635;
continue;
} else {
}
break;
}

var G__27632 = args27630.length;
switch (G__27632) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27630.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args27637 = [];
var len__19846__auto___27688 = arguments.length;
var i__19847__auto___27689 = (0);
while(true){
if((i__19847__auto___27689 < len__19846__auto___27688)){
args27637.push((arguments[i__19847__auto___27689]));

var G__27690 = (i__19847__auto___27689 + (1));
i__19847__auto___27689 = G__27690;
continue;
} else {
}
break;
}

var G__27639 = args27637.length;
switch (G__27639) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27637.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25119__auto___27692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___27692,out){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___27692,out){
return (function (state_27663){
var state_val_27664 = (state_27663[(1)]);
if((state_val_27664 === (7))){
var inst_27658 = (state_27663[(2)]);
var state_27663__$1 = state_27663;
var statearr_27665_27693 = state_27663__$1;
(statearr_27665_27693[(2)] = inst_27658);

(statearr_27665_27693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27664 === (1))){
var inst_27640 = null;
var state_27663__$1 = (function (){var statearr_27666 = state_27663;
(statearr_27666[(7)] = inst_27640);

return statearr_27666;
})();
var statearr_27667_27694 = state_27663__$1;
(statearr_27667_27694[(2)] = null);

(statearr_27667_27694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27664 === (4))){
var inst_27643 = (state_27663[(8)]);
var inst_27643__$1 = (state_27663[(2)]);
var inst_27644 = (inst_27643__$1 == null);
var inst_27645 = cljs.core.not.call(null,inst_27644);
var state_27663__$1 = (function (){var statearr_27668 = state_27663;
(statearr_27668[(8)] = inst_27643__$1);

return statearr_27668;
})();
if(inst_27645){
var statearr_27669_27695 = state_27663__$1;
(statearr_27669_27695[(1)] = (5));

} else {
var statearr_27670_27696 = state_27663__$1;
(statearr_27670_27696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27664 === (6))){
var state_27663__$1 = state_27663;
var statearr_27671_27697 = state_27663__$1;
(statearr_27671_27697[(2)] = null);

(statearr_27671_27697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27664 === (3))){
var inst_27660 = (state_27663[(2)]);
var inst_27661 = cljs.core.async.close_BANG_.call(null,out);
var state_27663__$1 = (function (){var statearr_27672 = state_27663;
(statearr_27672[(9)] = inst_27660);

return statearr_27672;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27663__$1,inst_27661);
} else {
if((state_val_27664 === (2))){
var state_27663__$1 = state_27663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27663__$1,(4),ch);
} else {
if((state_val_27664 === (11))){
var inst_27643 = (state_27663[(8)]);
var inst_27652 = (state_27663[(2)]);
var inst_27640 = inst_27643;
var state_27663__$1 = (function (){var statearr_27673 = state_27663;
(statearr_27673[(7)] = inst_27640);

(statearr_27673[(10)] = inst_27652);

return statearr_27673;
})();
var statearr_27674_27698 = state_27663__$1;
(statearr_27674_27698[(2)] = null);

(statearr_27674_27698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27664 === (9))){
var inst_27643 = (state_27663[(8)]);
var state_27663__$1 = state_27663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27663__$1,(11),out,inst_27643);
} else {
if((state_val_27664 === (5))){
var inst_27640 = (state_27663[(7)]);
var inst_27643 = (state_27663[(8)]);
var inst_27647 = cljs.core._EQ_.call(null,inst_27643,inst_27640);
var state_27663__$1 = state_27663;
if(inst_27647){
var statearr_27676_27699 = state_27663__$1;
(statearr_27676_27699[(1)] = (8));

} else {
var statearr_27677_27700 = state_27663__$1;
(statearr_27677_27700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27664 === (10))){
var inst_27655 = (state_27663[(2)]);
var state_27663__$1 = state_27663;
var statearr_27678_27701 = state_27663__$1;
(statearr_27678_27701[(2)] = inst_27655);

(statearr_27678_27701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27664 === (8))){
var inst_27640 = (state_27663[(7)]);
var tmp27675 = inst_27640;
var inst_27640__$1 = tmp27675;
var state_27663__$1 = (function (){var statearr_27679 = state_27663;
(statearr_27679[(7)] = inst_27640__$1);

return statearr_27679;
})();
var statearr_27680_27702 = state_27663__$1;
(statearr_27680_27702[(2)] = null);

(statearr_27680_27702[(1)] = (2));


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
});})(c__25119__auto___27692,out))
;
return ((function (switch__25007__auto__,c__25119__auto___27692,out){
return (function() {
var cljs$core$async$state_machine__25008__auto__ = null;
var cljs$core$async$state_machine__25008__auto____0 = (function (){
var statearr_27684 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27684[(0)] = cljs$core$async$state_machine__25008__auto__);

(statearr_27684[(1)] = (1));

return statearr_27684;
});
var cljs$core$async$state_machine__25008__auto____1 = (function (state_27663){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_27663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e27685){if((e27685 instanceof Object)){
var ex__25011__auto__ = e27685;
var statearr_27686_27703 = state_27663;
(statearr_27686_27703[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27704 = state_27663;
state_27663 = G__27704;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$state_machine__25008__auto__ = function(state_27663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25008__auto____1.call(this,state_27663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25008__auto____0;
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25008__auto____1;
return cljs$core$async$state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___27692,out))
})();
var state__25121__auto__ = (function (){var statearr_27687 = f__25120__auto__.call(null);
(statearr_27687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___27692);

return statearr_27687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___27692,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27705 = [];
var len__19846__auto___27775 = arguments.length;
var i__19847__auto___27776 = (0);
while(true){
if((i__19847__auto___27776 < len__19846__auto___27775)){
args27705.push((arguments[i__19847__auto___27776]));

var G__27777 = (i__19847__auto___27776 + (1));
i__19847__auto___27776 = G__27777;
continue;
} else {
}
break;
}

var G__27707 = args27705.length;
switch (G__27707) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27705.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25119__auto___27779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___27779,out){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___27779,out){
return (function (state_27745){
var state_val_27746 = (state_27745[(1)]);
if((state_val_27746 === (7))){
var inst_27741 = (state_27745[(2)]);
var state_27745__$1 = state_27745;
var statearr_27747_27780 = state_27745__$1;
(statearr_27747_27780[(2)] = inst_27741);

(statearr_27747_27780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (1))){
var inst_27708 = (new Array(n));
var inst_27709 = inst_27708;
var inst_27710 = (0);
var state_27745__$1 = (function (){var statearr_27748 = state_27745;
(statearr_27748[(7)] = inst_27710);

(statearr_27748[(8)] = inst_27709);

return statearr_27748;
})();
var statearr_27749_27781 = state_27745__$1;
(statearr_27749_27781[(2)] = null);

(statearr_27749_27781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (4))){
var inst_27713 = (state_27745[(9)]);
var inst_27713__$1 = (state_27745[(2)]);
var inst_27714 = (inst_27713__$1 == null);
var inst_27715 = cljs.core.not.call(null,inst_27714);
var state_27745__$1 = (function (){var statearr_27750 = state_27745;
(statearr_27750[(9)] = inst_27713__$1);

return statearr_27750;
})();
if(inst_27715){
var statearr_27751_27782 = state_27745__$1;
(statearr_27751_27782[(1)] = (5));

} else {
var statearr_27752_27783 = state_27745__$1;
(statearr_27752_27783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (15))){
var inst_27735 = (state_27745[(2)]);
var state_27745__$1 = state_27745;
var statearr_27753_27784 = state_27745__$1;
(statearr_27753_27784[(2)] = inst_27735);

(statearr_27753_27784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (13))){
var state_27745__$1 = state_27745;
var statearr_27754_27785 = state_27745__$1;
(statearr_27754_27785[(2)] = null);

(statearr_27754_27785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (6))){
var inst_27710 = (state_27745[(7)]);
var inst_27731 = (inst_27710 > (0));
var state_27745__$1 = state_27745;
if(cljs.core.truth_(inst_27731)){
var statearr_27755_27786 = state_27745__$1;
(statearr_27755_27786[(1)] = (12));

} else {
var statearr_27756_27787 = state_27745__$1;
(statearr_27756_27787[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (3))){
var inst_27743 = (state_27745[(2)]);
var state_27745__$1 = state_27745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27745__$1,inst_27743);
} else {
if((state_val_27746 === (12))){
var inst_27709 = (state_27745[(8)]);
var inst_27733 = cljs.core.vec.call(null,inst_27709);
var state_27745__$1 = state_27745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27745__$1,(15),out,inst_27733);
} else {
if((state_val_27746 === (2))){
var state_27745__$1 = state_27745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27745__$1,(4),ch);
} else {
if((state_val_27746 === (11))){
var inst_27725 = (state_27745[(2)]);
var inst_27726 = (new Array(n));
var inst_27709 = inst_27726;
var inst_27710 = (0);
var state_27745__$1 = (function (){var statearr_27757 = state_27745;
(statearr_27757[(10)] = inst_27725);

(statearr_27757[(7)] = inst_27710);

(statearr_27757[(8)] = inst_27709);

return statearr_27757;
})();
var statearr_27758_27788 = state_27745__$1;
(statearr_27758_27788[(2)] = null);

(statearr_27758_27788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (9))){
var inst_27709 = (state_27745[(8)]);
var inst_27723 = cljs.core.vec.call(null,inst_27709);
var state_27745__$1 = state_27745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27745__$1,(11),out,inst_27723);
} else {
if((state_val_27746 === (5))){
var inst_27713 = (state_27745[(9)]);
var inst_27718 = (state_27745[(11)]);
var inst_27710 = (state_27745[(7)]);
var inst_27709 = (state_27745[(8)]);
var inst_27717 = (inst_27709[inst_27710] = inst_27713);
var inst_27718__$1 = (inst_27710 + (1));
var inst_27719 = (inst_27718__$1 < n);
var state_27745__$1 = (function (){var statearr_27759 = state_27745;
(statearr_27759[(11)] = inst_27718__$1);

(statearr_27759[(12)] = inst_27717);

return statearr_27759;
})();
if(cljs.core.truth_(inst_27719)){
var statearr_27760_27789 = state_27745__$1;
(statearr_27760_27789[(1)] = (8));

} else {
var statearr_27761_27790 = state_27745__$1;
(statearr_27761_27790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (14))){
var inst_27738 = (state_27745[(2)]);
var inst_27739 = cljs.core.async.close_BANG_.call(null,out);
var state_27745__$1 = (function (){var statearr_27763 = state_27745;
(statearr_27763[(13)] = inst_27738);

return statearr_27763;
})();
var statearr_27764_27791 = state_27745__$1;
(statearr_27764_27791[(2)] = inst_27739);

(statearr_27764_27791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (10))){
var inst_27729 = (state_27745[(2)]);
var state_27745__$1 = state_27745;
var statearr_27765_27792 = state_27745__$1;
(statearr_27765_27792[(2)] = inst_27729);

(statearr_27765_27792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (8))){
var inst_27718 = (state_27745[(11)]);
var inst_27709 = (state_27745[(8)]);
var tmp27762 = inst_27709;
var inst_27709__$1 = tmp27762;
var inst_27710 = inst_27718;
var state_27745__$1 = (function (){var statearr_27766 = state_27745;
(statearr_27766[(7)] = inst_27710);

(statearr_27766[(8)] = inst_27709__$1);

return statearr_27766;
})();
var statearr_27767_27793 = state_27745__$1;
(statearr_27767_27793[(2)] = null);

(statearr_27767_27793[(1)] = (2));


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
});})(c__25119__auto___27779,out))
;
return ((function (switch__25007__auto__,c__25119__auto___27779,out){
return (function() {
var cljs$core$async$state_machine__25008__auto__ = null;
var cljs$core$async$state_machine__25008__auto____0 = (function (){
var statearr_27771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27771[(0)] = cljs$core$async$state_machine__25008__auto__);

(statearr_27771[(1)] = (1));

return statearr_27771;
});
var cljs$core$async$state_machine__25008__auto____1 = (function (state_27745){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_27745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e27772){if((e27772 instanceof Object)){
var ex__25011__auto__ = e27772;
var statearr_27773_27794 = state_27745;
(statearr_27773_27794[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27795 = state_27745;
state_27745 = G__27795;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$state_machine__25008__auto__ = function(state_27745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25008__auto____1.call(this,state_27745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25008__auto____0;
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25008__auto____1;
return cljs$core$async$state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___27779,out))
})();
var state__25121__auto__ = (function (){var statearr_27774 = f__25120__auto__.call(null);
(statearr_27774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___27779);

return statearr_27774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___27779,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27796 = [];
var len__19846__auto___27870 = arguments.length;
var i__19847__auto___27871 = (0);
while(true){
if((i__19847__auto___27871 < len__19846__auto___27870)){
args27796.push((arguments[i__19847__auto___27871]));

var G__27872 = (i__19847__auto___27871 + (1));
i__19847__auto___27871 = G__27872;
continue;
} else {
}
break;
}

var G__27798 = args27796.length;
switch (G__27798) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27796.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25119__auto___27874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___27874,out){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___27874,out){
return (function (state_27840){
var state_val_27841 = (state_27840[(1)]);
if((state_val_27841 === (7))){
var inst_27836 = (state_27840[(2)]);
var state_27840__$1 = state_27840;
var statearr_27842_27875 = state_27840__$1;
(statearr_27842_27875[(2)] = inst_27836);

(statearr_27842_27875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (1))){
var inst_27799 = [];
var inst_27800 = inst_27799;
var inst_27801 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27840__$1 = (function (){var statearr_27843 = state_27840;
(statearr_27843[(7)] = inst_27800);

(statearr_27843[(8)] = inst_27801);

return statearr_27843;
})();
var statearr_27844_27876 = state_27840__$1;
(statearr_27844_27876[(2)] = null);

(statearr_27844_27876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (4))){
var inst_27804 = (state_27840[(9)]);
var inst_27804__$1 = (state_27840[(2)]);
var inst_27805 = (inst_27804__$1 == null);
var inst_27806 = cljs.core.not.call(null,inst_27805);
var state_27840__$1 = (function (){var statearr_27845 = state_27840;
(statearr_27845[(9)] = inst_27804__$1);

return statearr_27845;
})();
if(inst_27806){
var statearr_27846_27877 = state_27840__$1;
(statearr_27846_27877[(1)] = (5));

} else {
var statearr_27847_27878 = state_27840__$1;
(statearr_27847_27878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (15))){
var inst_27830 = (state_27840[(2)]);
var state_27840__$1 = state_27840;
var statearr_27848_27879 = state_27840__$1;
(statearr_27848_27879[(2)] = inst_27830);

(statearr_27848_27879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (13))){
var state_27840__$1 = state_27840;
var statearr_27849_27880 = state_27840__$1;
(statearr_27849_27880[(2)] = null);

(statearr_27849_27880[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (6))){
var inst_27800 = (state_27840[(7)]);
var inst_27825 = inst_27800.length;
var inst_27826 = (inst_27825 > (0));
var state_27840__$1 = state_27840;
if(cljs.core.truth_(inst_27826)){
var statearr_27850_27881 = state_27840__$1;
(statearr_27850_27881[(1)] = (12));

} else {
var statearr_27851_27882 = state_27840__$1;
(statearr_27851_27882[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (3))){
var inst_27838 = (state_27840[(2)]);
var state_27840__$1 = state_27840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27840__$1,inst_27838);
} else {
if((state_val_27841 === (12))){
var inst_27800 = (state_27840[(7)]);
var inst_27828 = cljs.core.vec.call(null,inst_27800);
var state_27840__$1 = state_27840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27840__$1,(15),out,inst_27828);
} else {
if((state_val_27841 === (2))){
var state_27840__$1 = state_27840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27840__$1,(4),ch);
} else {
if((state_val_27841 === (11))){
var inst_27804 = (state_27840[(9)]);
var inst_27808 = (state_27840[(10)]);
var inst_27818 = (state_27840[(2)]);
var inst_27819 = [];
var inst_27820 = inst_27819.push(inst_27804);
var inst_27800 = inst_27819;
var inst_27801 = inst_27808;
var state_27840__$1 = (function (){var statearr_27852 = state_27840;
(statearr_27852[(11)] = inst_27820);

(statearr_27852[(7)] = inst_27800);

(statearr_27852[(12)] = inst_27818);

(statearr_27852[(8)] = inst_27801);

return statearr_27852;
})();
var statearr_27853_27883 = state_27840__$1;
(statearr_27853_27883[(2)] = null);

(statearr_27853_27883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (9))){
var inst_27800 = (state_27840[(7)]);
var inst_27816 = cljs.core.vec.call(null,inst_27800);
var state_27840__$1 = state_27840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27840__$1,(11),out,inst_27816);
} else {
if((state_val_27841 === (5))){
var inst_27804 = (state_27840[(9)]);
var inst_27801 = (state_27840[(8)]);
var inst_27808 = (state_27840[(10)]);
var inst_27808__$1 = f.call(null,inst_27804);
var inst_27809 = cljs.core._EQ_.call(null,inst_27808__$1,inst_27801);
var inst_27810 = cljs.core.keyword_identical_QMARK_.call(null,inst_27801,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27811 = (inst_27809) || (inst_27810);
var state_27840__$1 = (function (){var statearr_27854 = state_27840;
(statearr_27854[(10)] = inst_27808__$1);

return statearr_27854;
})();
if(cljs.core.truth_(inst_27811)){
var statearr_27855_27884 = state_27840__$1;
(statearr_27855_27884[(1)] = (8));

} else {
var statearr_27856_27885 = state_27840__$1;
(statearr_27856_27885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (14))){
var inst_27833 = (state_27840[(2)]);
var inst_27834 = cljs.core.async.close_BANG_.call(null,out);
var state_27840__$1 = (function (){var statearr_27858 = state_27840;
(statearr_27858[(13)] = inst_27833);

return statearr_27858;
})();
var statearr_27859_27886 = state_27840__$1;
(statearr_27859_27886[(2)] = inst_27834);

(statearr_27859_27886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (10))){
var inst_27823 = (state_27840[(2)]);
var state_27840__$1 = state_27840;
var statearr_27860_27887 = state_27840__$1;
(statearr_27860_27887[(2)] = inst_27823);

(statearr_27860_27887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (8))){
var inst_27804 = (state_27840[(9)]);
var inst_27800 = (state_27840[(7)]);
var inst_27808 = (state_27840[(10)]);
var inst_27813 = inst_27800.push(inst_27804);
var tmp27857 = inst_27800;
var inst_27800__$1 = tmp27857;
var inst_27801 = inst_27808;
var state_27840__$1 = (function (){var statearr_27861 = state_27840;
(statearr_27861[(7)] = inst_27800__$1);

(statearr_27861[(14)] = inst_27813);

(statearr_27861[(8)] = inst_27801);

return statearr_27861;
})();
var statearr_27862_27888 = state_27840__$1;
(statearr_27862_27888[(2)] = null);

(statearr_27862_27888[(1)] = (2));


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
});})(c__25119__auto___27874,out))
;
return ((function (switch__25007__auto__,c__25119__auto___27874,out){
return (function() {
var cljs$core$async$state_machine__25008__auto__ = null;
var cljs$core$async$state_machine__25008__auto____0 = (function (){
var statearr_27866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27866[(0)] = cljs$core$async$state_machine__25008__auto__);

(statearr_27866[(1)] = (1));

return statearr_27866;
});
var cljs$core$async$state_machine__25008__auto____1 = (function (state_27840){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_27840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e27867){if((e27867 instanceof Object)){
var ex__25011__auto__ = e27867;
var statearr_27868_27889 = state_27840;
(statearr_27868_27889[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27890 = state_27840;
state_27840 = G__27890;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
cljs$core$async$state_machine__25008__auto__ = function(state_27840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25008__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25008__auto____1.call(this,state_27840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25008__auto____0;
cljs$core$async$state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25008__auto____1;
return cljs$core$async$state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___27874,out))
})();
var state__25121__auto__ = (function (){var statearr_27869 = f__25120__auto__.call(null);
(statearr_27869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___27874);

return statearr_27869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___27874,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map