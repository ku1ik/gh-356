// Compiled by ClojureScript 1.7.170 {}
goog.provide('asciinema.player.js');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('asciinema.player.core');
/**
 * JavaScript API for creating the player.
 */
asciinema.player.js.CreatePlayer = (function asciinema$player$js$CreatePlayer(var_args){
var args31696 = [];
var len__19846__auto___31699 = arguments.length;
var i__19847__auto___31700 = (0);
while(true){
if((i__19847__auto___31700 < len__19846__auto___31699)){
args31696.push((arguments[i__19847__auto___31700]));

var G__31701 = (i__19847__auto___31700 + (1));
i__19847__auto___31700 = G__31701;
continue;
} else {
}
break;
}

var G__31698 = args31696.length;
switch (G__31698) {
case 2:
return asciinema.player.js.CreatePlayer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return asciinema.player.js.CreatePlayer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31696.length)].join('')));

}
});
goog.exportSymbol('asciinema.player.js.CreatePlayer', asciinema.player.js.CreatePlayer);

asciinema.player.js.CreatePlayer.cljs$core$IFn$_invoke$arity$2 = (function (dom_node,url){
return asciinema.player.js.CreatePlayer.call(null,dom_node,url,cljs.core.PersistentArrayMap.EMPTY);
});

asciinema.player.js.CreatePlayer.cljs$core$IFn$_invoke$arity$3 = (function (dom_node,url,options){
var options__$1 = clojure.set.rename_keys.call(null,cljs.core.js__GT_clj.call(null,options,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"autoPlay","autoPlay",-561263241),new cljs.core.Keyword(null,"auto-play","auto-play",-645319501),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),new cljs.core.Keyword(null,"poster","poster",-1616913550),new cljs.core.Keyword(null,"authorURL","authorURL",549221782),new cljs.core.Keyword(null,"author-url","author-url",1091920533),new cljs.core.Keyword(null,"startAt","startAt",849336089),new cljs.core.Keyword(null,"start-at","start-at",-103334680),new cljs.core.Keyword(null,"authorImgURL","authorImgURL",-1171541759),new cljs.core.Keyword(null,"author-img-url","author-img-url",2016975920)], null));
return asciinema.player.core.create_player.call(null,dom_node,url,options__$1);
});

asciinema.player.js.CreatePlayer.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=js.js.map