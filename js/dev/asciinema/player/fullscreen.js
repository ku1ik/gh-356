// Compiled by ClojureScript 1.7.170 {}
goog.provide('asciinema.player.fullscreen');
goog.require('cljs.core');
goog.require('asciinema.player.util');
asciinema.player.fullscreen.is_fullscreen_QMARK_ = (function asciinema$player$fullscreen$is_fullscreen_QMARK_(){
var options = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fullscreenElement","mozFullScreenElement","webkitFullscreenElement","webkitCurrentFullScreenElement","msFullscreenElement"], null);
return cljs.core.some.call(null,cljs.core.comp.call(null,cljs.core.boolean$,asciinema.player.util.document_prop),options);
});
asciinema.player.fullscreen.request = (function asciinema$player$fullscreen$request(dom_node){
var options = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["requestFullscreen","webkitRequestFullscreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"], null);
var f = cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core.aget,dom_node),options);
if(cljs.core.truth_(f)){
return f.call(dom_node);
} else {
return null;
}
});
asciinema.player.fullscreen.exit = (function asciinema$player$fullscreen$exit(){
var options = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exitFullscreen","webkitExitFullscreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"], null);
var f = cljs.core.some.call(null,asciinema.player.util.document_prop,options);
if(cljs.core.truth_(f)){
return f.call(document);
} else {
return null;
}
});
asciinema.player.fullscreen.toggle = (function asciinema$player$fullscreen$toggle(dom_node){
if(cljs.core.truth_(asciinema.player.fullscreen.is_fullscreen_QMARK_.call(null))){
return asciinema.player.fullscreen.exit.call(null);
} else {
return asciinema.player.fullscreen.request.call(null,dom_node);
}
});

//# sourceMappingURL=fullscreen.js.map