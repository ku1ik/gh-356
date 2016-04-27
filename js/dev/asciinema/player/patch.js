// Compiled by ClojureScript 1.7.170 {}
goog.provide('asciinema.player.patch');
goog.require('cljs.core');
asciinema.player.patch.js__GT_clj = (function asciinema$player$patch$js__GT_clj(var_args){
var args28049 = [];
var len__19846__auto___28057 = arguments.length;
var i__19847__auto___28058 = (0);
while(true){
if((i__19847__auto___28058 < len__19846__auto___28057)){
args28049.push((arguments[i__19847__auto___28058]));

var G__28059 = (i__19847__auto___28058 + (1));
i__19847__auto___28058 = G__28059;
continue;
} else {
}
break;
}

var G__28053 = args28049.length;
switch (G__28053) {
case 1:
return asciinema.player.patch.js__GT_clj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__19865__auto__ = (new cljs.core.IndexedSeq(args28049.slice((1)),(0)));
return asciinema.player.patch.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19865__auto__);

}
});

asciinema.player.patch.js__GT_clj.cljs$core$IFn$_invoke$arity$1 = (function (x){
return asciinema.player.patch.js__GT_clj.call(null,x,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),false);
});

asciinema.player.patch.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic = (function (x,opts){
if(((!((x == null)))?(((false) || (x.cljs$core$IEncodeClojure$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeClojure,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeClojure,x))){
return cljs.core._js__GT_clj.call(null,x,cljs.core.apply.call(null,cljs.core.array_map,opts));
} else {
if(cljs.core.seq.call(null,opts)){
var map__28055 = opts;
var map__28055__$1 = ((((!((map__28055 == null)))?((((map__28055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28055):map__28055);
var keywordize_keys = cljs.core.get.call(null,map__28055__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252));
var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);
var f = ((function (map__28055,map__28055__$1,keywordize_keys,keyfn){
return (function asciinema$player$patch$thisfn(x__$1){
if(cljs.core.seq_QMARK_.call(null,x__$1)){
return cljs.core.doall.call(null,cljs.core.map.call(null,asciinema$player$patch$thisfn,x__$1));
} else {
if(cljs.core.coll_QMARK_.call(null,x__$1)){
return cljs.core.into.call(null,cljs.core.empty.call(null,x__$1),cljs.core.map.call(null,asciinema$player$patch$thisfn),x__$1);
} else {
if(cljs.core.array_QMARK_.call(null,x__$1)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (map__28055,map__28055__$1,keywordize_keys,keyfn){
return (function (p1__28047_SHARP_,p2__28048_SHARP_){
return cljs.core.conj_BANG_.call(null,p1__28047_SHARP_,asciinema$player$patch$thisfn.call(null,p2__28048_SHARP_));
});})(map__28055,map__28055__$1,keywordize_keys,keyfn))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),x__$1));
} else {
if((cljs.core.type.call(null,x__$1) === Object)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (map__28055,map__28055__$1,keywordize_keys,keyfn){
return (function (r,k){
return cljs.core.assoc_BANG_.call(null,r,keyfn.call(null,k),asciinema$player$patch$thisfn.call(null,(x__$1[k])));
});})(map__28055,map__28055__$1,keywordize_keys,keyfn))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.js_keys.call(null,x__$1)));
} else {
return x__$1;

}
}
}
}
});})(map__28055,map__28055__$1,keywordize_keys,keyfn))
;
return f.call(null,x);
} else {
return null;
}
}
});

asciinema.player.patch.js__GT_clj.cljs$lang$applyTo = (function (seq28050){
var G__28051 = cljs.core.first.call(null,seq28050);
var seq28050__$1 = cljs.core.next.call(null,seq28050);
return asciinema.player.patch.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(G__28051,seq28050__$1);
});

asciinema.player.patch.js__GT_clj.cljs$lang$maxFixedArity = (1);

//# sourceMappingURL=patch.js.map