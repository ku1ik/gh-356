// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__22424_22428 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__22425_22429 = null;
var count__22426_22430 = (0);
var i__22427_22431 = (0);
while(true){
if((i__22427_22431 < count__22426_22430)){
var k_22432 = cljs.core._nth.call(null,chunk__22425_22429,i__22427_22431);
var v_22433 = (b[k_22432]);
(a[k_22432] = v_22433);

var G__22434 = seq__22424_22428;
var G__22435 = chunk__22425_22429;
var G__22436 = count__22426_22430;
var G__22437 = (i__22427_22431 + (1));
seq__22424_22428 = G__22434;
chunk__22425_22429 = G__22435;
count__22426_22430 = G__22436;
i__22427_22431 = G__22437;
continue;
} else {
var temp__4425__auto___22438 = cljs.core.seq.call(null,seq__22424_22428);
if(temp__4425__auto___22438){
var seq__22424_22439__$1 = temp__4425__auto___22438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22424_22439__$1)){
var c__19591__auto___22440 = cljs.core.chunk_first.call(null,seq__22424_22439__$1);
var G__22441 = cljs.core.chunk_rest.call(null,seq__22424_22439__$1);
var G__22442 = c__19591__auto___22440;
var G__22443 = cljs.core.count.call(null,c__19591__auto___22440);
var G__22444 = (0);
seq__22424_22428 = G__22441;
chunk__22425_22429 = G__22442;
count__22426_22430 = G__22443;
i__22427_22431 = G__22444;
continue;
} else {
var k_22445 = cljs.core.first.call(null,seq__22424_22439__$1);
var v_22446 = (b[k_22445]);
(a[k_22445] = v_22446);

var G__22447 = cljs.core.next.call(null,seq__22424_22439__$1);
var G__22448 = null;
var G__22449 = (0);
var G__22450 = (0);
seq__22424_22428 = G__22447;
chunk__22425_22429 = G__22448;
count__22426_22430 = G__22449;
i__22427_22431 = G__22450;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args22451 = [];
var len__19846__auto___22454 = arguments.length;
var i__19847__auto___22455 = (0);
while(true){
if((i__19847__auto___22455 < len__19846__auto___22454)){
args22451.push((arguments[i__19847__auto___22455]));

var G__22456 = (i__19847__auto___22455 + (1));
i__19847__auto___22455 = G__22456;
continue;
} else {
}
break;
}

var G__22453 = args22451.length;
switch (G__22453) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22451.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__22458 = (i + (2));
var G__22459 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__22458;
ret = G__22459;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__22460_22464 = cljs.core.seq.call(null,v);
var chunk__22461_22465 = null;
var count__22462_22466 = (0);
var i__22463_22467 = (0);
while(true){
if((i__22463_22467 < count__22462_22466)){
var x_22468 = cljs.core._nth.call(null,chunk__22461_22465,i__22463_22467);
ret.push(x_22468);

var G__22469 = seq__22460_22464;
var G__22470 = chunk__22461_22465;
var G__22471 = count__22462_22466;
var G__22472 = (i__22463_22467 + (1));
seq__22460_22464 = G__22469;
chunk__22461_22465 = G__22470;
count__22462_22466 = G__22471;
i__22463_22467 = G__22472;
continue;
} else {
var temp__4425__auto___22473 = cljs.core.seq.call(null,seq__22460_22464);
if(temp__4425__auto___22473){
var seq__22460_22474__$1 = temp__4425__auto___22473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22460_22474__$1)){
var c__19591__auto___22475 = cljs.core.chunk_first.call(null,seq__22460_22474__$1);
var G__22476 = cljs.core.chunk_rest.call(null,seq__22460_22474__$1);
var G__22477 = c__19591__auto___22475;
var G__22478 = cljs.core.count.call(null,c__19591__auto___22475);
var G__22479 = (0);
seq__22460_22464 = G__22476;
chunk__22461_22465 = G__22477;
count__22462_22466 = G__22478;
i__22463_22467 = G__22479;
continue;
} else {
var x_22480 = cljs.core.first.call(null,seq__22460_22474__$1);
ret.push(x_22480);

var G__22481 = cljs.core.next.call(null,seq__22460_22474__$1);
var G__22482 = null;
var G__22483 = (0);
var G__22484 = (0);
seq__22460_22464 = G__22481;
chunk__22461_22465 = G__22482;
count__22462_22466 = G__22483;
i__22463_22467 = G__22484;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__22485_22489 = cljs.core.seq.call(null,v);
var chunk__22486_22490 = null;
var count__22487_22491 = (0);
var i__22488_22492 = (0);
while(true){
if((i__22488_22492 < count__22487_22491)){
var x_22493 = cljs.core._nth.call(null,chunk__22486_22490,i__22488_22492);
ret.push(x_22493);

var G__22494 = seq__22485_22489;
var G__22495 = chunk__22486_22490;
var G__22496 = count__22487_22491;
var G__22497 = (i__22488_22492 + (1));
seq__22485_22489 = G__22494;
chunk__22486_22490 = G__22495;
count__22487_22491 = G__22496;
i__22488_22492 = G__22497;
continue;
} else {
var temp__4425__auto___22498 = cljs.core.seq.call(null,seq__22485_22489);
if(temp__4425__auto___22498){
var seq__22485_22499__$1 = temp__4425__auto___22498;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22485_22499__$1)){
var c__19591__auto___22500 = cljs.core.chunk_first.call(null,seq__22485_22499__$1);
var G__22501 = cljs.core.chunk_rest.call(null,seq__22485_22499__$1);
var G__22502 = c__19591__auto___22500;
var G__22503 = cljs.core.count.call(null,c__19591__auto___22500);
var G__22504 = (0);
seq__22485_22489 = G__22501;
chunk__22486_22490 = G__22502;
count__22487_22491 = G__22503;
i__22488_22492 = G__22504;
continue;
} else {
var x_22505 = cljs.core.first.call(null,seq__22485_22499__$1);
ret.push(x_22505);

var G__22506 = cljs.core.next.call(null,seq__22485_22499__$1);
var G__22507 = null;
var G__22508 = (0);
var G__22509 = (0);
seq__22485_22489 = G__22506;
chunk__22486_22490 = G__22507;
count__22487_22491 = G__22508;
i__22488_22492 = G__22509;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__22510_22514 = cljs.core.seq.call(null,v);
var chunk__22511_22515 = null;
var count__22512_22516 = (0);
var i__22513_22517 = (0);
while(true){
if((i__22513_22517 < count__22512_22516)){
var x_22518 = cljs.core._nth.call(null,chunk__22511_22515,i__22513_22517);
ret.push(x_22518);

var G__22519 = seq__22510_22514;
var G__22520 = chunk__22511_22515;
var G__22521 = count__22512_22516;
var G__22522 = (i__22513_22517 + (1));
seq__22510_22514 = G__22519;
chunk__22511_22515 = G__22520;
count__22512_22516 = G__22521;
i__22513_22517 = G__22522;
continue;
} else {
var temp__4425__auto___22523 = cljs.core.seq.call(null,seq__22510_22514);
if(temp__4425__auto___22523){
var seq__22510_22524__$1 = temp__4425__auto___22523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22510_22524__$1)){
var c__19591__auto___22525 = cljs.core.chunk_first.call(null,seq__22510_22524__$1);
var G__22526 = cljs.core.chunk_rest.call(null,seq__22510_22524__$1);
var G__22527 = c__19591__auto___22525;
var G__22528 = cljs.core.count.call(null,c__19591__auto___22525);
var G__22529 = (0);
seq__22510_22514 = G__22526;
chunk__22511_22515 = G__22527;
count__22512_22516 = G__22528;
i__22513_22517 = G__22529;
continue;
} else {
var x_22530 = cljs.core.first.call(null,seq__22510_22524__$1);
ret.push(x_22530);

var G__22531 = cljs.core.next.call(null,seq__22510_22524__$1);
var G__22532 = null;
var G__22533 = (0);
var G__22534 = (0);
seq__22510_22514 = G__22531;
chunk__22511_22515 = G__22532;
count__22512_22516 = G__22533;
i__22513_22517 = G__22534;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args22535 = [];
var len__19846__auto___22546 = arguments.length;
var i__19847__auto___22547 = (0);
while(true){
if((i__19847__auto___22547 < len__19846__auto___22546)){
args22535.push((arguments[i__19847__auto___22547]));

var G__22548 = (i__19847__auto___22547 + (1));
i__19847__auto___22547 = G__22548;
continue;
} else {
}
break;
}

var G__22537 = args22535.length;
switch (G__22537) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22535.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__22538 = obj;
G__22538.push(kfn.call(null,k),vfn.call(null,v));

return G__22538;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x22539 = cljs.core.clone.call(null,handlers);
x22539.forEach = ((function (x22539,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__22540 = cljs.core.seq.call(null,coll);
var chunk__22541 = null;
var count__22542 = (0);
var i__22543 = (0);
while(true){
if((i__22543 < count__22542)){
var vec__22544 = cljs.core._nth.call(null,chunk__22541,i__22543);
var k = cljs.core.nth.call(null,vec__22544,(0),null);
var v = cljs.core.nth.call(null,vec__22544,(1),null);
f.call(null,v,k);

var G__22550 = seq__22540;
var G__22551 = chunk__22541;
var G__22552 = count__22542;
var G__22553 = (i__22543 + (1));
seq__22540 = G__22550;
chunk__22541 = G__22551;
count__22542 = G__22552;
i__22543 = G__22553;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22540);
if(temp__4425__auto__){
var seq__22540__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22540__$1)){
var c__19591__auto__ = cljs.core.chunk_first.call(null,seq__22540__$1);
var G__22554 = cljs.core.chunk_rest.call(null,seq__22540__$1);
var G__22555 = c__19591__auto__;
var G__22556 = cljs.core.count.call(null,c__19591__auto__);
var G__22557 = (0);
seq__22540 = G__22554;
chunk__22541 = G__22555;
count__22542 = G__22556;
i__22543 = G__22557;
continue;
} else {
var vec__22545 = cljs.core.first.call(null,seq__22540__$1);
var k = cljs.core.nth.call(null,vec__22545,(0),null);
var v = cljs.core.nth.call(null,vec__22545,(1),null);
f.call(null,v,k);

var G__22558 = cljs.core.next.call(null,seq__22540__$1);
var G__22559 = null;
var G__22560 = (0);
var G__22561 = (0);
seq__22540 = G__22558;
chunk__22541 = G__22559;
count__22542 = G__22560;
i__22543 = G__22561;
continue;
}
} else {
return null;
}
}
break;
}
});})(x22539,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x22539;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args22562 = [];
var len__19846__auto___22568 = arguments.length;
var i__19847__auto___22569 = (0);
while(true){
if((i__19847__auto___22569 < len__19846__auto___22568)){
args22562.push((arguments[i__19847__auto___22569]));

var G__22570 = (i__19847__auto___22569 + (1));
i__19847__auto___22569 = G__22570;
continue;
} else {
}
break;
}

var G__22564 = args22562.length;
switch (G__22564) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22562.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit22565 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit22565 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta22566){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta22566 = meta22566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit22565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22567,meta22566__$1){
var self__ = this;
var _22567__$1 = this;
return (new cognitect.transit.t_cognitect$transit22565(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta22566__$1));
});

cognitect.transit.t_cognitect$transit22565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22567){
var self__ = this;
var _22567__$1 = this;
return self__.meta22566;
});

cognitect.transit.t_cognitect$transit22565.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit22565.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit22565.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit22565.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit22565.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta22566","meta22566",508362148,null)], null);
});

cognitect.transit.t_cognitect$transit22565.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit22565.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit22565";

cognitect.transit.t_cognitect$transit22565.cljs$lang$ctorPrWriter = (function (this__19386__auto__,writer__19387__auto__,opt__19388__auto__){
return cljs.core._write.call(null,writer__19387__auto__,"cognitect.transit/t_cognitect$transit22565");
});

cognitect.transit.__GT_t_cognitect$transit22565 = (function cognitect$transit$__GT_t_cognitect$transit22565(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta22566){
return (new cognitect.transit.t_cognitect$transit22565(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta22566));
});

}

return (new cognitect.transit.t_cognitect$transit22565(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__18788__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__18788__auto__)){
return or__18788__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map