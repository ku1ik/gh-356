// Compiled by ClojureScript 1.7.170 {}
goog.provide('asciinema.player.util');
goog.require('cljs.core');
asciinema.player.util.adjust_to_range = (function asciinema$player$util$adjust_to_range(value,min_value,max_value){
var x__19126__auto__ = max_value;
var y__19127__auto__ = (function (){var x__19119__auto__ = value;
var y__19120__auto__ = min_value;
return ((x__19119__auto__ > y__19120__auto__) ? x__19119__auto__ : y__19120__auto__);
})();
return ((x__19126__auto__ < y__19127__auto__) ? x__19126__auto__ : y__19127__auto__);
});
/**
 * Returns wall time (in seconds) elapsed since 'then'.
 */
asciinema.player.util.elapsed_time_since = (function asciinema$player$util$elapsed_time_since(then){
return (((new Date()).getTime() - then.getTime()) / (1000));
});
/**
 * Returns a function returning elapsed time since timer's creation.
 */
asciinema.player.util.timer = (function asciinema$player$util$timer(var_args){
var args22321 = [];
var len__19846__auto___22324 = arguments.length;
var i__19847__auto___22325 = (0);
while(true){
if((i__19847__auto___22325 < len__19846__auto___22324)){
args22321.push((arguments[i__19847__auto___22325]));

var G__22326 = (i__19847__auto___22325 + (1));
i__19847__auto___22325 = G__22326;
continue;
} else {
}
break;
}

var G__22323 = args22321.length;
switch (G__22323) {
case 0:
return asciinema.player.util.timer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return asciinema.player.util.timer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22321.length)].join('')));

}
});

asciinema.player.util.timer.cljs$core$IFn$_invoke$arity$0 = (function (){
return asciinema.player.util.timer.call(null,(1));
});

asciinema.player.util.timer.cljs$core$IFn$_invoke$arity$1 = (function (speed){
var start_date = (new Date());
return ((function (start_date){
return (function (){
return (asciinema.player.util.elapsed_time_since.call(null,start_date) * speed);
});
;})(start_date))
});

asciinema.player.util.timer.cljs$lang$maxFixedArity = 1;
asciinema.player.util.document_prop = (function asciinema$player$util$document_prop(name){
return (document[name]);
});
asciinema.player.util.window_prop = (function asciinema$player$util$window_prop(name){
return (window[name]);
});

//# sourceMappingURL=util.js.map