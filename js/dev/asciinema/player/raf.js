// Compiled by ClojureScript 1.7.170 {}
goog.provide('asciinema.player.raf');
goog.require('cljs.core');
goog.require('asciinema.player.util');
asciinema.player.raf.request_animation_frame = (function (){var or__18788__auto__ = asciinema.player.util.window_prop.call(null,"requestAnimationFrame");
if(cljs.core.truth_(or__18788__auto__)){
return or__18788__auto__;
} else {
return ((function (or__18788__auto__){
return (function (f){
return f.call(null);
});
;})(or__18788__auto__))
}
})();

//# sourceMappingURL=raf.js.map