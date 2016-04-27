// Compiled by ClojureScript 1.7.170 {}
goog.provide('asciinema.player.source');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('asciinema.player.vt');
goog.require('asciinema.player.util');
goog.require('asciinema.player.patch');

/**
 * @interface
 */
asciinema.player.source.Source = function(){};

/**
 * Initializes the source
 */
asciinema.player.source.init = (function asciinema$player$source$init(this$){
if((!((this$ == null))) && (!((this$.asciinema$player$source$Source$init$arity$1 == null)))){
return this$.asciinema$player$source$Source$init$arity$1(this$);
} else {
var x__19443__auto__ = (((this$ == null))?null:this$);
var m__19444__auto__ = (asciinema.player.source.init[goog.typeOf(x__19443__auto__)]);
if(!((m__19444__auto__ == null))){
return m__19444__auto__.call(null,this$);
} else {
var m__19444__auto____$1 = (asciinema.player.source.init["_"]);
if(!((m__19444__auto____$1 == null))){
return m__19444__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Source.init",this$);
}
}
}
});

/**
 * Starts the playback
 */
asciinema.player.source.start = (function asciinema$player$source$start(this$){
if((!((this$ == null))) && (!((this$.asciinema$player$source$Source$start$arity$1 == null)))){
return this$.asciinema$player$source$Source$start$arity$1(this$);
} else {
var x__19443__auto__ = (((this$ == null))?null:this$);
var m__19444__auto__ = (asciinema.player.source.start[goog.typeOf(x__19443__auto__)]);
if(!((m__19444__auto__ == null))){
return m__19444__auto__.call(null,this$);
} else {
var m__19444__auto____$1 = (asciinema.player.source.start["_"]);
if(!((m__19444__auto____$1 == null))){
return m__19444__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Source.start",this$);
}
}
}
});

/**
 * Stops the playback
 */
asciinema.player.source.stop = (function asciinema$player$source$stop(this$){
if((!((this$ == null))) && (!((this$.asciinema$player$source$Source$stop$arity$1 == null)))){
return this$.asciinema$player$source$Source$stop$arity$1(this$);
} else {
var x__19443__auto__ = (((this$ == null))?null:this$);
var m__19444__auto__ = (asciinema.player.source.stop[goog.typeOf(x__19443__auto__)]);
if(!((m__19444__auto__ == null))){
return m__19444__auto__.call(null,this$);
} else {
var m__19444__auto____$1 = (asciinema.player.source.stop["_"]);
if(!((m__19444__auto____$1 == null))){
return m__19444__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Source.stop",this$);
}
}
}
});

/**
 * Toggles the playback on/off
 */
asciinema.player.source.toggle = (function asciinema$player$source$toggle(this$){
if((!((this$ == null))) && (!((this$.asciinema$player$source$Source$toggle$arity$1 == null)))){
return this$.asciinema$player$source$Source$toggle$arity$1(this$);
} else {
var x__19443__auto__ = (((this$ == null))?null:this$);
var m__19444__auto__ = (asciinema.player.source.toggle[goog.typeOf(x__19443__auto__)]);
if(!((m__19444__auto__ == null))){
return m__19444__auto__.call(null,this$);
} else {
var m__19444__auto____$1 = (asciinema.player.source.toggle["_"]);
if(!((m__19444__auto____$1 == null))){
return m__19444__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Source.toggle",this$);
}
}
}
});

/**
 * Jumps to the given time
 */
asciinema.player.source.seek = (function asciinema$player$source$seek(this$,time){
if((!((this$ == null))) && (!((this$.asciinema$player$source$Source$seek$arity$2 == null)))){
return this$.asciinema$player$source$Source$seek$arity$2(this$,time);
} else {
var x__19443__auto__ = (((this$ == null))?null:this$);
var m__19444__auto__ = (asciinema.player.source.seek[goog.typeOf(x__19443__auto__)]);
if(!((m__19444__auto__ == null))){
return m__19444__auto__.call(null,this$,time);
} else {
var m__19444__auto____$1 = (asciinema.player.source.seek["_"]);
if(!((m__19444__auto____$1 == null))){
return m__19444__auto____$1.call(null,this$,time);
} else {
throw cljs.core.missing_protocol.call(null,"Source.seek",this$);
}
}
}
});

/**
 * Changes playback speed (1.0 is normal speed)
 */
asciinema.player.source.change_speed = (function asciinema$player$source$change_speed(this$,speed){
if((!((this$ == null))) && (!((this$.asciinema$player$source$Source$change_speed$arity$2 == null)))){
return this$.asciinema$player$source$Source$change_speed$arity$2(this$,speed);
} else {
var x__19443__auto__ = (((this$ == null))?null:this$);
var m__19444__auto__ = (asciinema.player.source.change_speed[goog.typeOf(x__19443__auto__)]);
if(!((m__19444__auto__ == null))){
return m__19444__auto__.call(null,this$,speed);
} else {
var m__19444__auto____$1 = (asciinema.player.source.change_speed["_"]);
if(!((m__19444__auto____$1 == null))){
return m__19444__auto____$1.call(null,this$,speed);
} else {
throw cljs.core.missing_protocol.call(null,"Source.change-speed",this$);
}
}
}
});

if(typeof asciinema.player.source.make_source !== 'undefined'){
} else {
/**
 * Returns a Source instance for given type and args.
 */
asciinema.player.source.make_source = (function (){var method_table__19701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19703__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19705__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"asciinema.player.source","make-source"),((function (method_table__19701__auto__,prefer_table__19702__auto__,method_cache__19703__auto__,cached_hierarchy__19704__auto__,hierarchy__19705__auto__){
return (function (type,events_ch,url,width_hint,height_hint,initial_start_at,initial_speed,auto_play,loop,preload){
return type;
});})(method_table__19701__auto__,prefer_table__19702__auto__,method_cache__19703__auto__,cached_hierarchy__19704__auto__,hierarchy__19705__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19705__auto__,method_table__19701__auto__,prefer_table__19702__auto__,method_cache__19703__auto__,cached_hierarchy__19704__auto__));
})();
}
/**
 * Returns screen state (lines + cursor) at given time (in seconds).
 */
asciinema.player.source.screen_state_at = (function asciinema$player$source$screen_state_at(screen_frames,seconds){
var frames = screen_frames;
var seconds__$1 = seconds;
var candidate = null;
while(true){
var vec__29022 = cljs.core.first.call(null,frames);
var delay = cljs.core.nth.call(null,vec__29022,(0),null);
var screen_state = cljs.core.nth.call(null,vec__29022,(1),null);
var frame = vec__29022;
if(((frame == null)) || ((seconds__$1 < delay))){
return candidate;
} else {
var G__29023 = cljs.core.rest.call(null,frames);
var G__29024 = (seconds__$1 - delay);
var G__29025 = screen_state;
frames = G__29023;
seconds__$1 = G__29024;
candidate = G__29025;
continue;
}
break;
}
});
/**
 * Returns sequence of frames starting at given time (in seconds).
 */
asciinema.player.source.drop_frames = (function asciinema$player$source$drop_frames(frames,seconds){
while(true){
if(cljs.core.seq.call(null,frames)){
var vec__29027 = cljs.core.first.call(null,frames);
var delay = cljs.core.nth.call(null,vec__29027,(0),null);
var screen_state = cljs.core.nth.call(null,vec__29027,(1),null);
if((delay < seconds)){
var G__29028 = cljs.core.rest.call(null,frames);
var G__29029 = (seconds - delay);
frames = G__29028;
seconds = G__29029;
continue;
} else {
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(delay - seconds),screen_state], null),cljs.core.rest.call(null,frames));
}
} else {
return frames;
}
break;
}
});
asciinema.player.source.fix_line_diff_keys = (function asciinema$player$source$fix_line_diff_keys(line_diff){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__29032){
var vec__29033 = p__29032;
var k = cljs.core.nth.call(null,vec__29033,(0),null);
var v = cljs.core.nth.call(null,vec__29033,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.name.call(null,k),(10)),v], null);
}),line_diff));
});
/**
 * Converts integer keys referring to line numbers in line diff (which are
 *   keywords) to actual integers.
 */
asciinema.player.source.fix_diffs = (function asciinema$player$source$fix_diffs(frames){
return cljs.core.map.call(null,(function (p1__29034_SHARP_){
return cljs.core.update_in.call(null,p1__29034_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"lines","lines",-700165781)], null),asciinema.player.source.fix_line_diff_keys);
}),frames);
});
asciinema.player.source.reduce_v0_frame = (function asciinema$player$source$reduce_v0_frame(p__29035,p__29036){
var vec__29039 = p__29035;
var _ = cljs.core.nth.call(null,vec__29039,(0),null);
var acc = cljs.core.nth.call(null,vec__29039,(1),null);
var vec__29040 = p__29036;
var delay = cljs.core.nth.call(null,vec__29040,(0),null);
var diff = cljs.core.nth.call(null,vec__29040,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [delay,cljs.core.merge_with.call(null,cljs.core.merge,acc,diff)], null);
});
asciinema.player.source.build_v0_frames = (function asciinema$player$source$build_v0_frames(diffs){
var diffs__$1 = asciinema.player.source.fix_diffs.call(null,diffs);
var acc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.sorted_map.call(null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"visible","visible",-1024216805),true], null)], null);
return cljs.core.reductions.call(null,asciinema.player.source.reduce_v0_frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),acc], null),diffs__$1);
});
/**
 * Extracts lines and cursor from pre v1 format frame.
 */
asciinema.player.source.acc__GT_screen = (function asciinema$player$source$acc__GT_screen(acc){
return cljs.core.update_in.call(null,acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null),cljs.core.vals);
});
asciinema.player.source.reduce_v1_frame = (function asciinema$player$source$reduce_v1_frame(p__29041,p__29042){
var vec__29045 = p__29041;
var _ = cljs.core.nth.call(null,vec__29045,(0),null);
var vt = cljs.core.nth.call(null,vec__29045,(1),null);
var vec__29046 = p__29042;
var delay = cljs.core.nth.call(null,vec__29046,(0),null);
var str = cljs.core.nth.call(null,vec__29046,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [delay,asciinema.player.vt.feed_str.call(null,vt,str)], null);
});
asciinema.player.source.build_v1_frames = (function asciinema$player$source$build_v1_frames(p__29047){
var map__29050 = p__29047;
var map__29050__$1 = ((((!((map__29050 == null)))?((((map__29050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29050):map__29050);
var stdout = cljs.core.get.call(null,map__29050__$1,new cljs.core.Keyword(null,"stdout","stdout",-531490018));
var width = cljs.core.get.call(null,map__29050__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__29050__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var vt = asciinema.player.vt.make_vt.call(null,width,height);
return cljs.core.reductions.call(null,asciinema.player.source.reduce_v1_frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),vt], null),stdout);
});
/**
 * Extracts lines and cursor from given vt, converting unicode codepoints to
 *   strings.
 */
asciinema.player.source.vt__GT_screen = (function asciinema$player$source$vt__GT_screen(p__29052){
var map__29055 = p__29052;
var map__29055__$1 = ((((!((map__29055 == null)))?((((map__29055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29055):map__29055);
var lines = cljs.core.get.call(null,map__29055__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var cursor = cljs.core.get.call(null,map__29055__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lines","lines",-700165781),asciinema.player.vt.compact_lines.call(null,lines),new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor], null);
});
if(typeof asciinema.player.source.initialize_asciicast !== 'undefined'){
} else {
/**
 * Given fetched asciicast extracts width, height and frames into a map.
 */
asciinema.player.source.initialize_asciicast = (function (){var method_table__19701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19703__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19705__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"asciinema.player.source","initialize-asciicast"),((function (method_table__19701__auto__,prefer_table__19702__auto__,method_cache__19703__auto__,cached_hierarchy__19704__auto__,hierarchy__19705__auto__){
return (function (asciicast){
if(cljs.core.vector_QMARK_.call(null,asciicast)){
return (0);
} else {
return new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(asciicast);
}
});})(method_table__19701__auto__,prefer_table__19702__auto__,method_cache__19703__auto__,cached_hierarchy__19704__auto__,hierarchy__19705__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19705__auto__,method_table__19701__auto__,prefer_table__19702__auto__,method_cache__19703__auto__,cached_hierarchy__19704__auto__));
})();
}
cljs.core._add_method.call(null,asciinema.player.source.initialize_asciicast,(0),(function (asciicast){
var frame_0_lines = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,cljs.core.first.call(null,asciicast)));
var asciicast_width = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (frame_0_lines){
return (function (p1__29057_SHARP_){
return cljs.core.count.call(null,cljs.core.first.call(null,p1__29057_SHARP_));
});})(frame_0_lines))
,cljs.core.first.call(null,cljs.core.vals.call(null,frame_0_lines))));
var asciicast_height = cljs.core.count.call(null,frame_0_lines);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),asciicast_width,new cljs.core.Keyword(null,"height","height",1025178622),asciicast_height,new cljs.core.Keyword(null,"screen-fn","screen-fn",-2109509815),asciinema.player.source.acc__GT_screen,new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core.reduce.call(null,((function (frame_0_lines,asciicast_width,asciicast_height){
return (function (p1__29058_SHARP_,p2__29059_SHARP_){
return (p1__29058_SHARP_ + cljs.core.first.call(null,p2__29059_SHARP_));
});})(frame_0_lines,asciicast_width,asciicast_height))
,(0),asciicast),new cljs.core.Keyword(null,"frames","frames",1765687497),asciinema.player.source.build_v0_frames.call(null,asciicast)], null);
}));
cljs.core._add_method.call(null,asciinema.player.source.initialize_asciicast,(1),(function (asciicast){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(asciicast),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(asciicast),new cljs.core.Keyword(null,"screen-fn","screen-fn",-2109509815),asciinema.player.source.vt__GT_screen,new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core.reduce.call(null,(function (p1__29060_SHARP_,p2__29061_SHARP_){
return (p1__29060_SHARP_ + cljs.core.first.call(null,p2__29061_SHARP_));
}),(0),new cljs.core.Keyword(null,"stdout","stdout",-531490018).cljs$core$IFn$_invoke$arity$1(asciicast)),new cljs.core.Keyword(null,"frames","frames",1765687497),asciinema.player.source.build_v1_frames.call(null,asciicast)], null);
}));
cljs.core._add_method.call(null,asciinema.player.source.initialize_asciicast,new cljs.core.Keyword(null,"default","default",-1987822328),(function (player,asciicast){
throw [cljs.core.str("unsupported asciicast version: "),cljs.core.str(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(asciicast))].join('');
}));
/**
 * Returns in infinite seq of time frames at given speed, starting from start-at
 *   (in sec).
 */
asciinema.player.source.time_frames = (function asciinema$player$source$time_frames(start_at,elapsed_time){
return cljs.core.repeatedly.call(null,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,(start_at + elapsed_time.call(null))], null);
}));
});
asciinema.player.source.frames_at_speed = (function asciinema$player$source$frames_at_speed(frames,speed){
return cljs.core.map.call(null,(function (p__29064){
var vec__29065 = p__29064;
var delay = cljs.core.nth.call(null,vec__29065,(0),null);
var data = cljs.core.nth.call(null,vec__29065,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(delay / speed),data], null);
}),frames);
});
/**
 * Returns a function f returning a promise channel. The calculation of the
 *   promise value is triggered by calling f with truthy value.
 */
asciinema.player.source.lazy_promise_chan = (function asciinema$player$source$lazy_promise_chan(f){
var force_ch = cljs.core.async.chan.call(null);
var ready_chan = cljs.core.async.chan.call(null);
var value = cljs.core.atom.call(null,null);
var c__25119__auto___29128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___29128,force_ch,ready_chan,value){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___29128,force_ch,ready_chan,value){
return (function (state_29102){
var state_val_29103 = (state_29102[(1)]);
if((state_val_29103 === (1))){
var state_29102__$1 = state_29102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29102__$1,(2),force_ch);
} else {
if((state_val_29103 === (2))){
var inst_29098 = (state_29102[(2)]);
var inst_29099 = (function (){return ((function (inst_29098,state_val_29103,c__25119__auto___29128,force_ch,ready_chan,value){
return (function (v){
cljs.core.reset_BANG_.call(null,value,v);

return cljs.core.async.close_BANG_.call(null,ready_chan);
});
;})(inst_29098,state_val_29103,c__25119__auto___29128,force_ch,ready_chan,value))
})();
var inst_29100 = f.call(null,inst_29099);
var state_29102__$1 = (function (){var statearr_29104 = state_29102;
(statearr_29104[(7)] = inst_29098);

return statearr_29104;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29102__$1,inst_29100);
} else {
return null;
}
}
});})(c__25119__auto___29128,force_ch,ready_chan,value))
;
return ((function (switch__25007__auto__,c__25119__auto___29128,force_ch,ready_chan,value){
return (function() {
var asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto__ = null;
var asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto____0 = (function (){
var statearr_29108 = [null,null,null,null,null,null,null,null];
(statearr_29108[(0)] = asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto__);

(statearr_29108[(1)] = (1));

return statearr_29108;
});
var asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto____1 = (function (state_29102){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_29102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e29109){if((e29109 instanceof Object)){
var ex__25011__auto__ = e29109;
var statearr_29110_29129 = state_29102;
(statearr_29110_29129[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29130 = state_29102;
state_29102 = G__29130;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto__ = function(state_29102){
switch(arguments.length){
case 0:
return asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto____0.call(this);
case 1:
return asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto____1.call(this,state_29102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto____0;
asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto____1;
return asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___29128,force_ch,ready_chan,value))
})();
var state__25121__auto__ = (function (){var statearr_29111 = f__25120__auto__.call(null);
(statearr_29111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___29128);

return statearr_29111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___29128,force_ch,ready_chan,value))
);


return ((function (force_ch,ready_chan,value){
return (function (force_QMARK_){
if(cljs.core.truth_(force_QMARK_)){
cljs.core.async.close_BANG_.call(null,force_ch);
} else {
}

var value_ch = cljs.core.async.chan.call(null);
var c__25119__auto___29131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___29131,value_ch,force_ch,ready_chan,value){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___29131,value_ch,force_ch,ready_chan,value){
return (function (state_29118){
var state_val_29119 = (state_29118[(1)]);
if((state_val_29119 === (1))){
var state_29118__$1 = state_29118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29118__$1,(2),ready_chan);
} else {
if((state_val_29119 === (2))){
var inst_29113 = (state_29118[(2)]);
var inst_29114 = cljs.core.deref.call(null,value);
var state_29118__$1 = (function (){var statearr_29120 = state_29118;
(statearr_29120[(7)] = inst_29113);

return statearr_29120;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29118__$1,(3),value_ch,inst_29114);
} else {
if((state_val_29119 === (3))){
var inst_29116 = (state_29118[(2)]);
var state_29118__$1 = state_29118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29118__$1,inst_29116);
} else {
return null;
}
}
}
});})(c__25119__auto___29131,value_ch,force_ch,ready_chan,value))
;
return ((function (switch__25007__auto__,c__25119__auto___29131,value_ch,force_ch,ready_chan,value){
return (function() {
var asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto__ = null;
var asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto____0 = (function (){
var statearr_29124 = [null,null,null,null,null,null,null,null];
(statearr_29124[(0)] = asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto__);

(statearr_29124[(1)] = (1));

return statearr_29124;
});
var asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto____1 = (function (state_29118){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_29118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e29125){if((e29125 instanceof Object)){
var ex__25011__auto__ = e29125;
var statearr_29126_29132 = state_29118;
(statearr_29126_29132[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29133 = state_29118;
state_29118 = G__29133;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto__ = function(state_29118){
switch(arguments.length){
case 0:
return asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto____0.call(this);
case 1:
return asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto____1.call(this,state_29118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto____0;
asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto____1;
return asciinema$player$source$lazy_promise_chan_$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___29131,value_ch,force_ch,ready_chan,value))
})();
var state__25121__auto__ = (function (){var statearr_29127 = f__25120__auto__.call(null);
(statearr_29127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___29131);

return statearr_29127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___29131,value_ch,force_ch,ready_chan,value))
);


return value_ch;
});
;})(force_ch,ready_chan,value))
});
asciinema.player.source.make_recording_ch_fn = (function asciinema$player$source$make_recording_ch_fn(url,recording_fn){
return asciinema.player.source.lazy_promise_chan.call(null,(function (deliver){
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__29134_SHARP_){
return deliver.call(null,recording_fn.call(null,p1__29134_SHARP_));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__29135_SHARP_){
return cljs.core.println.call(null,p1__29135_SHARP_);
})], null));
}));
});
/**
 * Waits for recording to load and then reports its size and duration to the
 *   player.
 */
asciinema.player.source.report_duration_and_size = (function asciinema$player$source$report_duration_and_size(p__29136){
var map__29202 = p__29136;
var map__29202__$1 = ((((!((map__29202 == null)))?((((map__29202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29202):map__29202);
var events_ch = cljs.core.get.call(null,map__29202__$1,new cljs.core.Keyword(null,"events-ch","events-ch",-763395991));
var recording_ch_fn = cljs.core.get.call(null,map__29202__$1,new cljs.core.Keyword(null,"recording-ch-fn","recording-ch-fn",-902533462));
var c__25119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto__,map__29202,map__29202__$1,events_ch,recording_ch_fn){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto__,map__29202,map__29202__$1,events_ch,recording_ch_fn){
return (function (state_29243){
var state_val_29244 = (state_29243[(1)]);
if((state_val_29244 === (7))){
var state_29243__$1 = state_29243;
var statearr_29245_29267 = state_29243__$1;
(statearr_29245_29267[(2)] = false);

(statearr_29245_29267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (1))){
var inst_29205 = cljs.core.deref.call(null,recording_ch_fn);
var inst_29206 = inst_29205.call(null,false);
var state_29243__$1 = state_29243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29243__$1,(2),inst_29206);
} else {
if((state_val_29244 === (4))){
var state_29243__$1 = state_29243;
var statearr_29246_29268 = state_29243__$1;
(statearr_29246_29268[(2)] = false);

(statearr_29246_29268[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (13))){
var inst_29241 = (state_29243[(2)]);
var state_29243__$1 = state_29243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29243__$1,inst_29241);
} else {
if((state_val_29244 === (6))){
var state_29243__$1 = state_29243;
var statearr_29247_29269 = state_29243__$1;
(statearr_29247_29269[(2)] = true);

(statearr_29247_29269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (3))){
var inst_29208 = (state_29243[(7)]);
var inst_29213 = inst_29208.cljs$lang$protocol_mask$partition0$;
var inst_29214 = (inst_29213 & (64));
var inst_29215 = inst_29208.cljs$core$ISeq$;
var inst_29216 = (inst_29214) || (inst_29215);
var state_29243__$1 = state_29243;
if(cljs.core.truth_(inst_29216)){
var statearr_29248_29270 = state_29243__$1;
(statearr_29248_29270[(1)] = (6));

} else {
var statearr_29249_29271 = state_29243__$1;
(statearr_29249_29271[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (12))){
var inst_29231 = (state_29243[(8)]);
var inst_29230 = (state_29243[(9)]);
var inst_29236 = (state_29243[(2)]);
var inst_29237 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29238 = [new cljs.core.Keyword(null,"size","size",1098693007),inst_29230,inst_29231];
var inst_29239 = (new cljs.core.PersistentVector(null,3,(5),inst_29237,inst_29238,null));
var state_29243__$1 = (function (){var statearr_29250 = state_29243;
(statearr_29250[(10)] = inst_29236);

return statearr_29250;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29243__$1,(13),events_ch,inst_29239);
} else {
if((state_val_29244 === (2))){
var inst_29208 = (state_29243[(7)]);
var inst_29208__$1 = (state_29243[(2)]);
var inst_29210 = (inst_29208__$1 == null);
var inst_29211 = cljs.core.not.call(null,inst_29210);
var state_29243__$1 = (function (){var statearr_29251 = state_29243;
(statearr_29251[(7)] = inst_29208__$1);

return statearr_29251;
})();
if(inst_29211){
var statearr_29252_29272 = state_29243__$1;
(statearr_29252_29272[(1)] = (3));

} else {
var statearr_29253_29273 = state_29243__$1;
(statearr_29253_29273[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (11))){
var inst_29228 = (state_29243[(2)]);
var inst_29229 = cljs.core.get.call(null,inst_29228,new cljs.core.Keyword(null,"duration","duration",1444101068));
var inst_29230 = cljs.core.get.call(null,inst_29228,new cljs.core.Keyword(null,"width","width",-384071477));
var inst_29231 = cljs.core.get.call(null,inst_29228,new cljs.core.Keyword(null,"height","height",1025178622));
var inst_29232 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29233 = [new cljs.core.Keyword(null,"duration","duration",1444101068),inst_29229];
var inst_29234 = (new cljs.core.PersistentVector(null,2,(5),inst_29232,inst_29233,null));
var state_29243__$1 = (function (){var statearr_29254 = state_29243;
(statearr_29254[(8)] = inst_29231);

(statearr_29254[(9)] = inst_29230);

return statearr_29254;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29243__$1,(12),events_ch,inst_29234);
} else {
if((state_val_29244 === (9))){
var inst_29208 = (state_29243[(7)]);
var inst_29225 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29208);
var state_29243__$1 = state_29243;
var statearr_29255_29274 = state_29243__$1;
(statearr_29255_29274[(2)] = inst_29225);

(statearr_29255_29274[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (5))){
var inst_29223 = (state_29243[(2)]);
var state_29243__$1 = state_29243;
if(cljs.core.truth_(inst_29223)){
var statearr_29256_29275 = state_29243__$1;
(statearr_29256_29275[(1)] = (9));

} else {
var statearr_29257_29276 = state_29243__$1;
(statearr_29257_29276[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (10))){
var inst_29208 = (state_29243[(7)]);
var state_29243__$1 = state_29243;
var statearr_29258_29277 = state_29243__$1;
(statearr_29258_29277[(2)] = inst_29208);

(statearr_29258_29277[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29244 === (8))){
var inst_29220 = (state_29243[(2)]);
var state_29243__$1 = state_29243;
var statearr_29259_29278 = state_29243__$1;
(statearr_29259_29278[(2)] = inst_29220);

(statearr_29259_29278[(1)] = (5));


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
});})(c__25119__auto__,map__29202,map__29202__$1,events_ch,recording_ch_fn))
;
return ((function (switch__25007__auto__,c__25119__auto__,map__29202,map__29202__$1,events_ch,recording_ch_fn){
return (function() {
var asciinema$player$source$report_duration_and_size_$_state_machine__25008__auto__ = null;
var asciinema$player$source$report_duration_and_size_$_state_machine__25008__auto____0 = (function (){
var statearr_29263 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29263[(0)] = asciinema$player$source$report_duration_and_size_$_state_machine__25008__auto__);

(statearr_29263[(1)] = (1));

return statearr_29263;
});
var asciinema$player$source$report_duration_and_size_$_state_machine__25008__auto____1 = (function (state_29243){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_29243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e29264){if((e29264 instanceof Object)){
var ex__25011__auto__ = e29264;
var statearr_29265_29279 = state_29243;
(statearr_29265_29279[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29280 = state_29243;
state_29243 = G__29280;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
asciinema$player$source$report_duration_and_size_$_state_machine__25008__auto__ = function(state_29243){
switch(arguments.length){
case 0:
return asciinema$player$source$report_duration_and_size_$_state_machine__25008__auto____0.call(this);
case 1:
return asciinema$player$source$report_duration_and_size_$_state_machine__25008__auto____1.call(this,state_29243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asciinema$player$source$report_duration_and_size_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = asciinema$player$source$report_duration_and_size_$_state_machine__25008__auto____0;
asciinema$player$source$report_duration_and_size_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = asciinema$player$source$report_duration_and_size_$_state_machine__25008__auto____1;
return asciinema$player$source$report_duration_and_size_$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto__,map__29202,map__29202__$1,events_ch,recording_ch_fn))
})();
var state__25121__auto__ = (function (){var statearr_29266 = f__25120__auto__.call(null);
(statearr_29266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto__);

return statearr_29266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto__,map__29202,map__29202__$1,events_ch,recording_ch_fn))
);

return c__25119__auto__;
});
/**
 * Reports 'loading' to the player until the recording is loaded.
 */
asciinema.player.source.show_loading = (function asciinema$player$source$show_loading(p__29281){
var map__29310 = p__29281;
var map__29310__$1 = ((((!((map__29310 == null)))?((((map__29310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29310):map__29310);
var events_ch = cljs.core.get.call(null,map__29310__$1,new cljs.core.Keyword(null,"events-ch","events-ch",-763395991));
var recording_ch_fn = cljs.core.get.call(null,map__29310__$1,new cljs.core.Keyword(null,"recording-ch-fn","recording-ch-fn",-902533462));
if(cljs.core.truth_(cljs.core.async.poll_BANG_.call(null,cljs.core.deref.call(null,recording_ch_fn).call(null,false)))){
return null;
} else {
var c__25119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto__,map__29310,map__29310__$1,events_ch,recording_ch_fn){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto__,map__29310,map__29310__$1,events_ch,recording_ch_fn){
return (function (state_29327){
var state_val_29328 = (state_29327[(1)]);
if((state_val_29328 === (1))){
var inst_29312 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29313 = [new cljs.core.Keyword(null,"loading","loading",-737050189),true];
var inst_29314 = (new cljs.core.PersistentVector(null,2,(5),inst_29312,inst_29313,null));
var state_29327__$1 = state_29327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29327__$1,(2),events_ch,inst_29314);
} else {
if((state_val_29328 === (2))){
var inst_29316 = (state_29327[(2)]);
var inst_29317 = cljs.core.deref.call(null,recording_ch_fn);
var inst_29318 = inst_29317.call(null,false);
var state_29327__$1 = (function (){var statearr_29329 = state_29327;
(statearr_29329[(7)] = inst_29316);

return statearr_29329;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29327__$1,(3),inst_29318);
} else {
if((state_val_29328 === (3))){
var inst_29320 = (state_29327[(2)]);
var inst_29321 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29322 = [new cljs.core.Keyword(null,"loading","loading",-737050189),false];
var inst_29323 = (new cljs.core.PersistentVector(null,2,(5),inst_29321,inst_29322,null));
var state_29327__$1 = (function (){var statearr_29330 = state_29327;
(statearr_29330[(8)] = inst_29320);

return statearr_29330;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29327__$1,(4),events_ch,inst_29323);
} else {
if((state_val_29328 === (4))){
var inst_29325 = (state_29327[(2)]);
var state_29327__$1 = state_29327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29327__$1,inst_29325);
} else {
return null;
}
}
}
}
});})(c__25119__auto__,map__29310,map__29310__$1,events_ch,recording_ch_fn))
;
return ((function (switch__25007__auto__,c__25119__auto__,map__29310,map__29310__$1,events_ch,recording_ch_fn){
return (function() {
var asciinema$player$source$show_loading_$_state_machine__25008__auto__ = null;
var asciinema$player$source$show_loading_$_state_machine__25008__auto____0 = (function (){
var statearr_29334 = [null,null,null,null,null,null,null,null,null];
(statearr_29334[(0)] = asciinema$player$source$show_loading_$_state_machine__25008__auto__);

(statearr_29334[(1)] = (1));

return statearr_29334;
});
var asciinema$player$source$show_loading_$_state_machine__25008__auto____1 = (function (state_29327){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_29327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e29335){if((e29335 instanceof Object)){
var ex__25011__auto__ = e29335;
var statearr_29336_29338 = state_29327;
(statearr_29336_29338[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29339 = state_29327;
state_29327 = G__29339;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
asciinema$player$source$show_loading_$_state_machine__25008__auto__ = function(state_29327){
switch(arguments.length){
case 0:
return asciinema$player$source$show_loading_$_state_machine__25008__auto____0.call(this);
case 1:
return asciinema$player$source$show_loading_$_state_machine__25008__auto____1.call(this,state_29327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asciinema$player$source$show_loading_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = asciinema$player$source$show_loading_$_state_machine__25008__auto____0;
asciinema$player$source$show_loading_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = asciinema$player$source$show_loading_$_state_machine__25008__auto____1;
return asciinema$player$source$show_loading_$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto__,map__29310,map__29310__$1,events_ch,recording_ch_fn))
})();
var state__25121__auto__ = (function (){var statearr_29337 = f__25120__auto__.call(null);
(statearr_29337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto__);

return statearr_29337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto__,map__29310,map__29310__$1,events_ch,recording_ch_fn))
);

return c__25119__auto__;
}
});
/**
 * Starts sending frames as events with a given name, stopping when stop-ch
 *   closes.
 */
asciinema.player.source.emit_events = (function asciinema$player$source$emit_events(event_name,coll,f,events_ch,stop_ch){
var elapsed_time = asciinema.player.util.timer.call(null);
var c__25119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto__,elapsed_time){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto__,elapsed_time){
return (function (state_29481){
var state_val_29482 = (state_29481[(1)]);
if((state_val_29482 === (7))){
var inst_29442 = (state_29481[(7)]);
var inst_29437 = (state_29481[(8)]);
var inst_29441 = ((1000) * inst_29437);
var inst_29442__$1 = cljs.core.async.timeout.call(null,inst_29441);
var inst_29443 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29444 = [stop_ch,inst_29442__$1];
var inst_29445 = (new cljs.core.PersistentVector(null,2,(5),inst_29443,inst_29444,null));
var state_29481__$1 = (function (){var statearr_29484 = state_29481;
(statearr_29484[(7)] = inst_29442__$1);

return statearr_29484;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29481__$1,(10),inst_29445,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_29482 === (1))){
var inst_29426 = elapsed_time.call(null);
var inst_29427 = coll;
var inst_29428 = (0);
var inst_29429 = inst_29426;
var state_29481__$1 = (function (){var statearr_29485 = state_29481;
(statearr_29485[(9)] = inst_29427);

(statearr_29485[(10)] = inst_29429);

(statearr_29485[(11)] = inst_29428);

return statearr_29485;
})();
var statearr_29486_29512 = state_29481__$1;
(statearr_29486_29512[(2)] = null);

(statearr_29486_29512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (4))){
var inst_29436 = (state_29481[(12)]);
var inst_29431 = (state_29481[(13)]);
var inst_29429 = (state_29481[(10)]);
var inst_29428 = (state_29481[(11)]);
var inst_29437 = (state_29481[(8)]);
var inst_29434 = cljs.core.nth.call(null,inst_29431,(0),null);
var inst_29435 = cljs.core.nth.call(null,inst_29431,(1),null);
var inst_29436__$1 = (inst_29428 + inst_29434);
var inst_29437__$1 = (inst_29436__$1 - inst_29429);
var inst_29438 = (inst_29437__$1 > (0));
var state_29481__$1 = (function (){var statearr_29487 = state_29481;
(statearr_29487[(12)] = inst_29436__$1);

(statearr_29487[(14)] = inst_29435);

(statearr_29487[(8)] = inst_29437__$1);

return statearr_29487;
})();
if(cljs.core.truth_(inst_29438)){
var statearr_29488_29513 = state_29481__$1;
(statearr_29488_29513[(1)] = (7));

} else {
var statearr_29489_29514 = state_29481__$1;
(statearr_29489_29514[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (15))){
var inst_29427 = (state_29481[(9)]);
var inst_29436 = (state_29481[(12)]);
var inst_29429 = (state_29481[(10)]);
var inst_29470 = (state_29481[(2)]);
var inst_29471 = cljs.core.rest.call(null,inst_29427);
var tmp29483 = inst_29429;
var inst_29427__$1 = inst_29471;
var inst_29428 = inst_29436;
var inst_29429__$1 = tmp29483;
var state_29481__$1 = (function (){var statearr_29490 = state_29481;
(statearr_29490[(9)] = inst_29427__$1);

(statearr_29490[(10)] = inst_29429__$1);

(statearr_29490[(11)] = inst_29428);

(statearr_29490[(15)] = inst_29470);

return statearr_29490;
})();
var statearr_29491_29515 = state_29481__$1;
(statearr_29491_29515[(2)] = null);

(statearr_29491_29515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (13))){
var inst_29463 = (state_29481[(2)]);
var state_29481__$1 = state_29481;
var statearr_29492_29516 = state_29481__$1;
(statearr_29492_29516[(2)] = inst_29463);

(statearr_29492_29516[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (6))){
var inst_29477 = (state_29481[(2)]);
var state_29481__$1 = state_29481;
var statearr_29493_29517 = state_29481__$1;
(statearr_29493_29517[(2)] = inst_29477);

(statearr_29493_29517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (3))){
var inst_29479 = (state_29481[(2)]);
var state_29481__$1 = state_29481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29481__$1,inst_29479);
} else {
if((state_val_29482 === (12))){
var state_29481__$1 = state_29481;
var statearr_29494_29518 = state_29481__$1;
(statearr_29494_29518[(2)] = null);

(statearr_29494_29518[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (2))){
var inst_29427 = (state_29481[(9)]);
var inst_29431 = (state_29481[(13)]);
var inst_29431__$1 = cljs.core.first.call(null,inst_29427);
var state_29481__$1 = (function (){var statearr_29495 = state_29481;
(statearr_29495[(13)] = inst_29431__$1);

return statearr_29495;
})();
if(cljs.core.truth_(inst_29431__$1)){
var statearr_29496_29519 = state_29481__$1;
(statearr_29496_29519[(1)] = (4));

} else {
var statearr_29497_29520 = state_29481__$1;
(statearr_29497_29520[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (11))){
var inst_29435 = (state_29481[(14)]);
var inst_29452 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29453 = f.call(null,inst_29435);
var inst_29454 = [event_name,inst_29453];
var inst_29455 = (new cljs.core.PersistentVector(null,2,(5),inst_29452,inst_29454,null));
var state_29481__$1 = state_29481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29481__$1,(14),events_ch,inst_29455);
} else {
if((state_val_29482 === (9))){
var inst_29474 = (state_29481[(2)]);
var state_29481__$1 = state_29481;
var statearr_29498_29521 = state_29481__$1;
(statearr_29498_29521[(2)] = inst_29474);

(statearr_29498_29521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (5))){
var state_29481__$1 = state_29481;
var statearr_29499_29522 = state_29481__$1;
(statearr_29499_29522[(2)] = null);

(statearr_29499_29522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (14))){
var inst_29427 = (state_29481[(9)]);
var inst_29436 = (state_29481[(12)]);
var inst_29457 = (state_29481[(2)]);
var inst_29458 = cljs.core.rest.call(null,inst_29427);
var inst_29459 = elapsed_time.call(null);
var inst_29427__$1 = inst_29458;
var inst_29428 = inst_29436;
var inst_29429 = inst_29459;
var state_29481__$1 = (function (){var statearr_29500 = state_29481;
(statearr_29500[(9)] = inst_29427__$1);

(statearr_29500[(10)] = inst_29429);

(statearr_29500[(11)] = inst_29428);

(statearr_29500[(16)] = inst_29457);

return statearr_29500;
})();
var statearr_29501_29523 = state_29481__$1;
(statearr_29501_29523[(2)] = null);

(statearr_29501_29523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (10))){
var inst_29442 = (state_29481[(7)]);
var inst_29447 = (state_29481[(2)]);
var inst_29448 = cljs.core.nth.call(null,inst_29447,(0),null);
var inst_29449 = cljs.core.nth.call(null,inst_29447,(1),null);
var inst_29450 = cljs.core._EQ_.call(null,inst_29449,inst_29442);
var state_29481__$1 = (function (){var statearr_29502 = state_29481;
(statearr_29502[(17)] = inst_29448);

return statearr_29502;
})();
if(inst_29450){
var statearr_29503_29524 = state_29481__$1;
(statearr_29503_29524[(1)] = (11));

} else {
var statearr_29504_29525 = state_29481__$1;
(statearr_29504_29525[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (8))){
var inst_29435 = (state_29481[(14)]);
var inst_29465 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29466 = f.call(null,inst_29435);
var inst_29467 = [event_name,inst_29466];
var inst_29468 = (new cljs.core.PersistentVector(null,2,(5),inst_29465,inst_29467,null));
var state_29481__$1 = state_29481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29481__$1,(15),events_ch,inst_29468);
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
});})(c__25119__auto__,elapsed_time))
;
return ((function (switch__25007__auto__,c__25119__auto__,elapsed_time){
return (function() {
var asciinema$player$source$emit_events_$_state_machine__25008__auto__ = null;
var asciinema$player$source$emit_events_$_state_machine__25008__auto____0 = (function (){
var statearr_29508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29508[(0)] = asciinema$player$source$emit_events_$_state_machine__25008__auto__);

(statearr_29508[(1)] = (1));

return statearr_29508;
});
var asciinema$player$source$emit_events_$_state_machine__25008__auto____1 = (function (state_29481){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_29481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e29509){if((e29509 instanceof Object)){
var ex__25011__auto__ = e29509;
var statearr_29510_29526 = state_29481;
(statearr_29510_29526[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29527 = state_29481;
state_29481 = G__29527;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
asciinema$player$source$emit_events_$_state_machine__25008__auto__ = function(state_29481){
switch(arguments.length){
case 0:
return asciinema$player$source$emit_events_$_state_machine__25008__auto____0.call(this);
case 1:
return asciinema$player$source$emit_events_$_state_machine__25008__auto____1.call(this,state_29481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asciinema$player$source$emit_events_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = asciinema$player$source$emit_events_$_state_machine__25008__auto____0;
asciinema$player$source$emit_events_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = asciinema$player$source$emit_events_$_state_machine__25008__auto____1;
return asciinema$player$source$emit_events_$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto__,elapsed_time))
})();
var state__25121__auto__ = (function (){var statearr_29511 = f__25120__auto__.call(null);
(statearr_29511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto__);

return statearr_29511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto__,elapsed_time))
);

return c__25119__auto__;
});
/**
 * Starts emitting :time and :frame events with given start position and speed.
 *   Stops when stop-ch closes. Returns a channel to which stop position is
 *   eventually delivered.
 */
asciinema.player.source.play_BANG_ = (function asciinema$player$source$play_BANG_(events_ch,frames,screen_fn,duration,stop_ch,start_at,speed,loop_QMARK_){
var c__25119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto__){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto__){
return (function (state_29660){
var state_val_29661 = (state_29660[(1)]);
if((state_val_29661 === (7))){
var inst_29648 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29649 = [new cljs.core.Keyword(null,"playing","playing",70013335),false];
var inst_29650 = (new cljs.core.PersistentVector(null,2,(5),inst_29648,inst_29649,null));
var state_29660__$1 = state_29660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29660__$1,(14),events_ch,inst_29650);
} else {
if((state_val_29661 === (1))){
var inst_29607 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29608 = [new cljs.core.Keyword(null,"playing","playing",70013335),true];
var inst_29609 = (new cljs.core.PersistentVector(null,2,(5),inst_29607,inst_29608,null));
var state_29660__$1 = state_29660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29660__$1,(2),events_ch,inst_29609);
} else {
if((state_val_29661 === (4))){
var inst_29658 = (state_29660[(2)]);
var state_29660__$1 = state_29660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29660__$1,inst_29658);
} else {
if((state_val_29661 === (13))){
var inst_29644 = (state_29660[(2)]);
var state_29660__$1 = (function (){var statearr_29662 = state_29660;
(statearr_29662[(7)] = inst_29644);

return statearr_29662;
})();
var statearr_29663_29686 = state_29660__$1;
(statearr_29663_29686[(2)] = (0));

(statearr_29663_29686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (6))){
var state_29660__$1 = state_29660;
if(cljs.core.truth_(loop_QMARK_)){
var statearr_29664_29687 = state_29660__$1;
(statearr_29664_29687[(1)] = (9));

} else {
var statearr_29665_29688 = state_29660__$1;
(statearr_29665_29688[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (3))){
var inst_29615 = (state_29660[(8)]);
var inst_29612 = (state_29660[(9)]);
var inst_29620 = (state_29660[(10)]);
var inst_29619 = (state_29660[(11)]);
var inst_29615__$1 = asciinema.player.util.timer.call(null,speed);
var inst_29616 = asciinema.player.source.drop_frames.call(null,frames,inst_29612);
var inst_29617 = asciinema.player.source.frames_at_speed.call(null,inst_29616,speed);
var inst_29618 = asciinema.player.source.time_frames.call(null,inst_29612,inst_29615__$1);
var inst_29619__$1 = cljs.core.async.chan.call(null);
var inst_29620__$1 = asciinema.player.source.emit_events.call(null,new cljs.core.Keyword(null,"screen","screen",1990059748),inst_29617,screen_fn,events_ch,inst_29619__$1);
var inst_29621 = asciinema.player.source.emit_events.call(null,new cljs.core.Keyword(null,"time","time",1385887882),inst_29618,cljs.core.identity,events_ch,inst_29619__$1);
var inst_29622 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29623 = [inst_29620__$1,stop_ch];
var inst_29624 = (new cljs.core.PersistentVector(null,2,(5),inst_29622,inst_29623,null));
var state_29660__$1 = (function (){var statearr_29666 = state_29660;
(statearr_29666[(8)] = inst_29615__$1);

(statearr_29666[(10)] = inst_29620__$1);

(statearr_29666[(11)] = inst_29619__$1);

(statearr_29666[(12)] = inst_29621);

return statearr_29666;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29660__$1,(5),inst_29624);
} else {
if((state_val_29661 === (12))){
var inst_29639 = (state_29660[(2)]);
var inst_29640 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29641 = [new cljs.core.Keyword(null,"playing","playing",70013335),false];
var inst_29642 = (new cljs.core.PersistentVector(null,2,(5),inst_29640,inst_29641,null));
var state_29660__$1 = (function (){var statearr_29667 = state_29660;
(statearr_29667[(13)] = inst_29639);

return statearr_29667;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29660__$1,(13),events_ch,inst_29642);
} else {
if((state_val_29661 === (2))){
var inst_29611 = (state_29660[(2)]);
var inst_29612 = start_at;
var state_29660__$1 = (function (){var statearr_29668 = state_29660;
(statearr_29668[(9)] = inst_29612);

(statearr_29668[(14)] = inst_29611);

return statearr_29668;
})();
var statearr_29669_29689 = state_29660__$1;
(statearr_29669_29689[(2)] = null);

(statearr_29669_29689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (11))){
var inst_29646 = (state_29660[(2)]);
var state_29660__$1 = state_29660;
var statearr_29670_29690 = state_29660__$1;
(statearr_29670_29690[(2)] = inst_29646);

(statearr_29670_29690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (9))){
var inst_29612 = (0);
var state_29660__$1 = (function (){var statearr_29671 = state_29660;
(statearr_29671[(9)] = inst_29612);

return statearr_29671;
})();
var statearr_29672_29691 = state_29660__$1;
(statearr_29672_29691[(2)] = null);

(statearr_29672_29691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (5))){
var inst_29620 = (state_29660[(10)]);
var inst_29619 = (state_29660[(11)]);
var inst_29626 = (state_29660[(2)]);
var inst_29627 = cljs.core.nth.call(null,inst_29626,(0),null);
var inst_29628 = cljs.core.nth.call(null,inst_29626,(1),null);
var inst_29629 = cljs.core.async.close_BANG_.call(null,inst_29619);
var inst_29630 = cljs.core._EQ_.call(null,inst_29628,inst_29620);
var state_29660__$1 = (function (){var statearr_29673 = state_29660;
(statearr_29673[(15)] = inst_29627);

(statearr_29673[(16)] = inst_29629);

return statearr_29673;
})();
if(inst_29630){
var statearr_29674_29692 = state_29660__$1;
(statearr_29674_29692[(1)] = (6));

} else {
var statearr_29675_29693 = state_29660__$1;
(statearr_29675_29693[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (14))){
var inst_29615 = (state_29660[(8)]);
var inst_29612 = (state_29660[(9)]);
var inst_29652 = (state_29660[(2)]);
var inst_29653 = inst_29615.call(null);
var inst_29654 = (inst_29612 + inst_29653);
var state_29660__$1 = (function (){var statearr_29676 = state_29660;
(statearr_29676[(17)] = inst_29652);

return statearr_29676;
})();
var statearr_29677_29694 = state_29660__$1;
(statearr_29677_29694[(2)] = inst_29654);

(statearr_29677_29694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (10))){
var inst_29635 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29636 = [new cljs.core.Keyword(null,"time","time",1385887882),duration];
var inst_29637 = (new cljs.core.PersistentVector(null,2,(5),inst_29635,inst_29636,null));
var state_29660__$1 = state_29660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29660__$1,(12),events_ch,inst_29637);
} else {
if((state_val_29661 === (8))){
var inst_29656 = (state_29660[(2)]);
var state_29660__$1 = state_29660;
var statearr_29678_29695 = state_29660__$1;
(statearr_29678_29695[(2)] = inst_29656);

(statearr_29678_29695[(1)] = (4));


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
});})(c__25119__auto__))
;
return ((function (switch__25007__auto__,c__25119__auto__){
return (function() {
var asciinema$player$source$play_BANG__$_state_machine__25008__auto__ = null;
var asciinema$player$source$play_BANG__$_state_machine__25008__auto____0 = (function (){
var statearr_29682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29682[(0)] = asciinema$player$source$play_BANG__$_state_machine__25008__auto__);

(statearr_29682[(1)] = (1));

return statearr_29682;
});
var asciinema$player$source$play_BANG__$_state_machine__25008__auto____1 = (function (state_29660){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_29660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e29683){if((e29683 instanceof Object)){
var ex__25011__auto__ = e29683;
var statearr_29684_29696 = state_29660;
(statearr_29684_29696[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29697 = state_29660;
state_29660 = G__29697;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
asciinema$player$source$play_BANG__$_state_machine__25008__auto__ = function(state_29660){
switch(arguments.length){
case 0:
return asciinema$player$source$play_BANG__$_state_machine__25008__auto____0.call(this);
case 1:
return asciinema$player$source$play_BANG__$_state_machine__25008__auto____1.call(this,state_29660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asciinema$player$source$play_BANG__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = asciinema$player$source$play_BANG__$_state_machine__25008__auto____0;
asciinema$player$source$play_BANG__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = asciinema$player$source$play_BANG__$_state_machine__25008__auto____1;
return asciinema$player$source$play_BANG__$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto__))
})();
var state__25121__auto__ = (function (){var statearr_29685 = f__25120__auto__.call(null);
(statearr_29685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto__);

return statearr_29685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto__))
);

return c__25119__auto__;
});
/**
 * Main event loop of the PrerecordedSource.
 */
asciinema.player.source.start_event_loop_BANG_ = (function asciinema$player$source$start_event_loop_BANG_(p__29698){
var map__30043 = p__29698;
var map__30043__$1 = ((((!((map__30043 == null)))?((((map__30043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30043):map__30043);
var source = map__30043__$1;
var events_ch = cljs.core.get.call(null,map__30043__$1,new cljs.core.Keyword(null,"events-ch","events-ch",-763395991));
var recording_ch_fn = cljs.core.get.call(null,map__30043__$1,new cljs.core.Keyword(null,"recording-ch-fn","recording-ch-fn",-902533462));
var start_at = cljs.core.get.call(null,map__30043__$1,new cljs.core.Keyword(null,"start-at","start-at",-103334680));
var speed = cljs.core.get.call(null,map__30043__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var loop_QMARK_ = cljs.core.get.call(null,map__30043__$1,new cljs.core.Keyword(null,"loop?","loop?",457687798));
var command_ch = cljs.core.async.chan.call(null,(10));
var pri_ch = cljs.core.async.chan.call(null,(10));
var c__25119__auto___30387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___30387,command_ch,pri_ch,map__30043,map__30043__$1,source,events_ch,recording_ch_fn,start_at,speed,loop_QMARK_){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___30387,command_ch,pri_ch,map__30043,map__30043__$1,source,events_ch,recording_ch_fn,start_at,speed,loop_QMARK_){
return (function (state_30250){
var state_val_30251 = (state_30250[(1)]);
if((state_val_30251 === (65))){
var inst_30193 = (state_30250[(7)]);
var inst_30198 = inst_30193.cljs$lang$protocol_mask$partition0$;
var inst_30199 = (inst_30198 & (64));
var inst_30200 = inst_30193.cljs$core$ISeq$;
var inst_30201 = (inst_30199) || (inst_30200);
var state_30250__$1 = state_30250;
if(cljs.core.truth_(inst_30201)){
var statearr_30252_30388 = state_30250__$1;
(statearr_30252_30388[(1)] = (68));

} else {
var statearr_30253_30389 = state_30250__$1;
(statearr_30253_30389[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (70))){
var inst_30205 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30254_30390 = state_30250__$1;
(statearr_30254_30390[(2)] = inst_30205);

(statearr_30254_30390[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (62))){
var inst_30068 = (state_30250[(8)]);
var inst_30230 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_30068)].join('');
var inst_30231 = (new Error(inst_30230));
var inst_30232 = (function(){throw inst_30231})();
var state_30250__$1 = state_30250;
var statearr_30255_30391 = state_30250__$1;
(statearr_30255_30391[(2)] = inst_30232);

(statearr_30255_30391[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (74))){
var inst_30214 = (state_30250[(9)]);
var inst_30215 = (state_30250[(10)]);
var inst_30069 = (state_30250[(11)]);
var inst_30220 = (state_30250[(2)]);
var inst_30221 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30222 = asciinema.player.source.screen_state_at.call(null,inst_30214,inst_30069);
var inst_30223 = inst_30215.call(null,inst_30222);
var inst_30224 = [new cljs.core.Keyword(null,"screen","screen",1990059748),inst_30223];
var inst_30225 = (new cljs.core.PersistentVector(null,2,(5),inst_30221,inst_30224,null));
var state_30250__$1 = (function (){var statearr_30256 = state_30250;
(statearr_30256[(12)] = inst_30220);

return statearr_30256;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30250__$1,(75),events_ch,inst_30225);
} else {
if((state_val_30251 === (7))){
var inst_30068 = (state_30250[(8)]);
var inst_30067 = (state_30250[(2)]);
var inst_30068__$1 = cljs.core.nth.call(null,inst_30067,(0),null);
var inst_30069 = cljs.core.nth.call(null,inst_30067,(1),null);
var inst_30073 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"start","start",-355208981),inst_30068__$1);
var state_30250__$1 = (function (){var statearr_30257 = state_30250;
(statearr_30257[(8)] = inst_30068__$1);

(statearr_30257[(11)] = inst_30069);

return statearr_30257;
})();
if(inst_30073){
var statearr_30258_30392 = state_30250__$1;
(statearr_30258_30392[(1)] = (8));

} else {
var statearr_30259_30393 = state_30250__$1;
(statearr_30259_30393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (59))){
var inst_30068 = (state_30250[(8)]);
var inst_30187 = cljs.core._EQ_.call(null,new cljs.core.Keyword("internal","seek","internal/seek",-1958914115),inst_30068);
var state_30250__$1 = state_30250;
if(inst_30187){
var statearr_30260_30394 = state_30250__$1;
(statearr_30260_30394[(1)] = (61));

} else {
var statearr_30261_30395 = state_30250__$1;
(statearr_30261_30395[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (20))){
var inst_30095 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30263_30396 = state_30250__$1;
(statearr_30263_30396[(2)] = inst_30095);

(statearr_30263_30396[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (72))){
var inst_30193 = (state_30250[(7)]);
var state_30250__$1 = state_30250;
var statearr_30264_30397 = state_30250__$1;
(statearr_30264_30397[(2)] = inst_30193);

(statearr_30264_30397[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (58))){
var inst_30046 = (state_30250[(13)]);
var tmp30262 = inst_30046;
var inst_30045 = (0);
var inst_30046__$1 = tmp30262;
var inst_30047 = null;
var inst_30048 = null;
var state_30250__$1 = (function (){var statearr_30265 = state_30250;
(statearr_30265[(14)] = inst_30045);

(statearr_30265[(15)] = inst_30047);

(statearr_30265[(13)] = inst_30046__$1);

(statearr_30265[(16)] = inst_30048);

return statearr_30265;
})();
var statearr_30266_30398 = state_30250__$1;
(statearr_30266_30398[(2)] = null);

(statearr_30266_30398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (60))){
var inst_30236 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30267_30399 = state_30250__$1;
(statearr_30267_30399[(2)] = inst_30236);

(statearr_30267_30399[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (27))){
var inst_30047 = (state_30250[(15)]);
var inst_30048 = (state_30250[(16)]);
var inst_30116 = cljs.core.async.close_BANG_.call(null,inst_30048);
var state_30250__$1 = (function (){var statearr_30268 = state_30250;
(statearr_30268[(17)] = inst_30116);

return statearr_30268;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30250__$1,(30),inst_30047);
} else {
if((state_val_30251 === (1))){
var inst_30045 = start_at;
var inst_30046 = speed;
var inst_30047 = null;
var inst_30048 = null;
var state_30250__$1 = (function (){var statearr_30269 = state_30250;
(statearr_30269[(14)] = inst_30045);

(statearr_30269[(15)] = inst_30047);

(statearr_30269[(13)] = inst_30046);

(statearr_30269[(16)] = inst_30048);

return statearr_30269;
})();
var statearr_30270_30400 = state_30250__$1;
(statearr_30270_30400[(2)] = null);

(statearr_30270_30400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (69))){
var state_30250__$1 = state_30250;
var statearr_30274_30401 = state_30250__$1;
(statearr_30274_30401[(2)] = false);

(statearr_30274_30401[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (24))){
var inst_30048 = (state_30250[(16)]);
var state_30250__$1 = state_30250;
if(cljs.core.truth_(inst_30048)){
var statearr_30275_30402 = state_30250__$1;
(statearr_30275_30402[(1)] = (27));

} else {
var statearr_30276_30403 = state_30250__$1;
(statearr_30276_30403[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (55))){
var inst_30045 = (state_30250[(14)]);
var inst_30047 = (state_30250[(15)]);
var inst_30048 = (state_30250[(16)]);
var inst_30069 = (state_30250[(11)]);
var inst_30180 = (state_30250[(2)]);
var tmp30271 = inst_30045;
var tmp30272 = inst_30047;
var tmp30273 = inst_30048;
var inst_30045__$1 = tmp30271;
var inst_30046 = inst_30069;
var inst_30047__$1 = tmp30272;
var inst_30048__$1 = tmp30273;
var state_30250__$1 = (function (){var statearr_30277 = state_30250;
(statearr_30277[(14)] = inst_30045__$1);

(statearr_30277[(15)] = inst_30047__$1);

(statearr_30277[(18)] = inst_30180);

(statearr_30277[(13)] = inst_30046);

(statearr_30277[(16)] = inst_30048__$1);

return statearr_30277;
})();
var statearr_30278_30404 = state_30250__$1;
(statearr_30278_30404[(2)] = null);

(statearr_30278_30404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (39))){
var inst_30068 = (state_30250[(8)]);
var inst_30165 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"change-speed","change-speed",2125740976),inst_30068);
var state_30250__$1 = state_30250;
if(inst_30165){
var statearr_30279_30405 = state_30250__$1;
(statearr_30279_30405[(1)] = (50));

} else {
var statearr_30280_30406 = state_30250__$1;
(statearr_30280_30406[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (46))){
var inst_30155 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30156 = [new cljs.core.Keyword(null,"start","start",-355208981)];
var inst_30157 = (new cljs.core.PersistentVector(null,1,(5),inst_30155,inst_30156,null));
var state_30250__$1 = state_30250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30250__$1,(49),pri_ch,inst_30157);
} else {
if((state_val_30251 === (4))){
var inst_30047 = (state_30250[(15)]);
var inst_30057 = (state_30250[(2)]);
var inst_30058 = cljs.core.nth.call(null,inst_30057,(0),null);
var inst_30059 = cljs.core.nth.call(null,inst_30057,(1),null);
var inst_30060 = cljs.core._EQ_.call(null,inst_30059,inst_30047);
var state_30250__$1 = (function (){var statearr_30281 = state_30250;
(statearr_30281[(19)] = inst_30058);

return statearr_30281;
})();
if(inst_30060){
var statearr_30282_30407 = state_30250__$1;
(statearr_30282_30407[(1)] = (5));

} else {
var statearr_30283_30408 = state_30250__$1;
(statearr_30283_30408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (54))){
var state_30250__$1 = state_30250;
var statearr_30288_30409 = state_30250__$1;
(statearr_30288_30409[(2)] = null);

(statearr_30288_30409[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (15))){
var inst_30083 = (state_30250[(20)]);
var inst_30088 = inst_30083.cljs$lang$protocol_mask$partition0$;
var inst_30089 = (inst_30088 & (64));
var inst_30090 = inst_30083.cljs$core$ISeq$;
var inst_30091 = (inst_30089) || (inst_30090);
var state_30250__$1 = state_30250;
if(cljs.core.truth_(inst_30091)){
var statearr_30289_30410 = state_30250__$1;
(statearr_30289_30410[(1)] = (18));

} else {
var statearr_30290_30411 = state_30250__$1;
(statearr_30290_30411[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (48))){
var inst_30045 = (state_30250[(14)]);
var inst_30047 = (state_30250[(15)]);
var inst_30046 = (state_30250[(13)]);
var inst_30048 = (state_30250[(16)]);
var inst_30162 = (state_30250[(2)]);
var tmp30284 = inst_30045;
var tmp30285 = inst_30047;
var tmp30286 = inst_30046;
var tmp30287 = inst_30048;
var inst_30045__$1 = tmp30284;
var inst_30046__$1 = tmp30286;
var inst_30047__$1 = tmp30285;
var inst_30048__$1 = tmp30287;
var state_30250__$1 = (function (){var statearr_30294 = state_30250;
(statearr_30294[(14)] = inst_30045__$1);

(statearr_30294[(15)] = inst_30047__$1);

(statearr_30294[(13)] = inst_30046__$1);

(statearr_30294[(16)] = inst_30048__$1);

(statearr_30294[(21)] = inst_30162);

return statearr_30294;
})();
var statearr_30295_30412 = state_30250__$1;
(statearr_30295_30412[(2)] = null);

(statearr_30295_30412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (50))){
var inst_30048 = (state_30250[(16)]);
var state_30250__$1 = state_30250;
if(cljs.core.truth_(inst_30048)){
var statearr_30296_30413 = state_30250__$1;
(statearr_30296_30413[(1)] = (53));

} else {
var statearr_30297_30414 = state_30250__$1;
(statearr_30297_30414[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (75))){
var inst_30047 = (state_30250[(15)]);
var inst_30046 = (state_30250[(13)]);
var inst_30048 = (state_30250[(16)]);
var inst_30069 = (state_30250[(11)]);
var inst_30227 = (state_30250[(2)]);
var tmp30291 = inst_30047;
var tmp30292 = inst_30046;
var tmp30293 = inst_30048;
var inst_30045 = inst_30069;
var inst_30046__$1 = tmp30292;
var inst_30047__$1 = tmp30291;
var inst_30048__$1 = tmp30293;
var state_30250__$1 = (function (){var statearr_30298 = state_30250;
(statearr_30298[(14)] = inst_30045);

(statearr_30298[(22)] = inst_30227);

(statearr_30298[(15)] = inst_30047__$1);

(statearr_30298[(13)] = inst_30046__$1);

(statearr_30298[(16)] = inst_30048__$1);

return statearr_30298;
})();
var statearr_30299_30415 = state_30250__$1;
(statearr_30299_30415[(2)] = null);

(statearr_30299_30415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (21))){
var inst_30083 = (state_30250[(20)]);
var inst_30100 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30083);
var state_30250__$1 = state_30250;
var statearr_30300_30416 = state_30250__$1;
(statearr_30300_30416[(2)] = inst_30100);

(statearr_30300_30416[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (31))){
var inst_30048 = (state_30250[(16)]);
var state_30250__$1 = state_30250;
if(cljs.core.truth_(inst_30048)){
var statearr_30301_30417 = state_30250__$1;
(statearr_30301_30417[(1)] = (34));

} else {
var statearr_30302_30418 = state_30250__$1;
(statearr_30302_30418[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (32))){
var inst_30068 = (state_30250[(8)]);
var inst_30138 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"seek","seek",758996602),inst_30068);
var state_30250__$1 = state_30250;
if(inst_30138){
var statearr_30303_30419 = state_30250__$1;
(statearr_30303_30419[(1)] = (38));

} else {
var statearr_30304_30420 = state_30250__$1;
(statearr_30304_30420[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (40))){
var inst_30240 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30305_30421 = state_30250__$1;
(statearr_30305_30421[(2)] = inst_30240);

(statearr_30305_30421[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (56))){
var inst_30172 = (state_30250[(2)]);
var inst_30173 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30174 = [new cljs.core.Keyword(null,"start","start",-355208981)];
var inst_30175 = (new cljs.core.PersistentVector(null,1,(5),inst_30173,inst_30174,null));
var state_30250__$1 = (function (){var statearr_30306 = state_30250;
(statearr_30306[(23)] = inst_30172);

return statearr_30306;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30250__$1,(57),pri_ch,inst_30175);
} else {
if((state_val_30251 === (33))){
var inst_30242 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30307_30422 = state_30250__$1;
(statearr_30307_30422[(2)] = inst_30242);

(statearr_30307_30422[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (13))){
var inst_30111 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30308_30423 = state_30250__$1;
(statearr_30308_30423[(2)] = inst_30111);

(statearr_30308_30423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (22))){
var inst_30083 = (state_30250[(20)]);
var state_30250__$1 = state_30250;
var statearr_30309_30424 = state_30250__$1;
(statearr_30309_30424[(2)] = inst_30083);

(statearr_30309_30424[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (36))){
var inst_30130 = (state_30250[(2)]);
var inst_30131 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30132 = [inst_30130];
var inst_30133 = (new cljs.core.PersistentVector(null,1,(5),inst_30131,inst_30132,null));
var state_30250__$1 = state_30250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30250__$1,(37),pri_ch,inst_30133);
} else {
if((state_val_30251 === (41))){
var inst_30141 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30142 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_30143 = (new cljs.core.PersistentVector(null,1,(5),inst_30141,inst_30142,null));
var state_30250__$1 = state_30250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30250__$1,(44),pri_ch,inst_30143);
} else {
if((state_val_30251 === (43))){
var inst_30069 = (state_30250[(11)]);
var inst_30148 = (state_30250[(2)]);
var inst_30149 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30150 = [new cljs.core.Keyword("internal","seek","internal/seek",-1958914115),inst_30069];
var inst_30151 = (new cljs.core.PersistentVector(null,2,(5),inst_30149,inst_30150,null));
var state_30250__$1 = (function (){var statearr_30310 = state_30250;
(statearr_30310[(24)] = inst_30148);

return statearr_30310;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30250__$1,(45),pri_ch,inst_30151);
} else {
if((state_val_30251 === (61))){
var inst_30190 = cljs.core.deref.call(null,recording_ch_fn);
var inst_30191 = inst_30190.call(null,true);
var state_30250__$1 = state_30250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30250__$1,(64),inst_30191);
} else {
if((state_val_30251 === (29))){
var inst_30123 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30311_30425 = state_30250__$1;
(statearr_30311_30425[(2)] = inst_30123);

(statearr_30311_30425[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (44))){
var inst_30145 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30316_30426 = state_30250__$1;
(statearr_30316_30426[(2)] = inst_30145);

(statearr_30316_30426[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (6))){
var inst_30058 = (state_30250[(19)]);
var state_30250__$1 = state_30250;
var statearr_30317_30427 = state_30250__$1;
(statearr_30317_30427[(2)] = inst_30058);

(statearr_30317_30427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (28))){
var inst_30045 = (state_30250[(14)]);
var inst_30047 = (state_30250[(15)]);
var inst_30046 = (state_30250[(13)]);
var inst_30048 = (state_30250[(16)]);
var tmp30312 = inst_30045;
var tmp30313 = inst_30047;
var tmp30314 = inst_30046;
var tmp30315 = inst_30048;
var inst_30045__$1 = tmp30312;
var inst_30046__$1 = tmp30314;
var inst_30047__$1 = tmp30313;
var inst_30048__$1 = tmp30315;
var state_30250__$1 = (function (){var statearr_30318 = state_30250;
(statearr_30318[(14)] = inst_30045__$1);

(statearr_30318[(15)] = inst_30047__$1);

(statearr_30318[(13)] = inst_30046__$1);

(statearr_30318[(16)] = inst_30048__$1);

return statearr_30318;
})();
var statearr_30319_30428 = state_30250__$1;
(statearr_30319_30428[(2)] = null);

(statearr_30319_30428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (64))){
var inst_30193 = (state_30250[(7)]);
var inst_30193__$1 = (state_30250[(2)]);
var inst_30195 = (inst_30193__$1 == null);
var inst_30196 = cljs.core.not.call(null,inst_30195);
var state_30250__$1 = (function (){var statearr_30320 = state_30250;
(statearr_30320[(7)] = inst_30193__$1);

return statearr_30320;
})();
if(inst_30196){
var statearr_30321_30429 = state_30250__$1;
(statearr_30321_30429[(1)] = (65));

} else {
var statearr_30322_30430 = state_30250__$1;
(statearr_30322_30430[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (51))){
var inst_30068 = (state_30250[(8)]);
var inst_30183 = cljs.core._EQ_.call(null,new cljs.core.Keyword("internal","rewind","internal/rewind",-31749342),inst_30068);
var state_30250__$1 = state_30250;
if(inst_30183){
var statearr_30323_30431 = state_30250__$1;
(statearr_30323_30431[(1)] = (58));

} else {
var statearr_30324_30432 = state_30250__$1;
(statearr_30324_30432[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (25))){
var inst_30068 = (state_30250[(8)]);
var inst_30125 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"toggle","toggle",1291842030),inst_30068);
var state_30250__$1 = state_30250;
if(inst_30125){
var statearr_30325_30433 = state_30250__$1;
(statearr_30325_30433[(1)] = (31));

} else {
var statearr_30326_30434 = state_30250__$1;
(statearr_30326_30434[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (34))){
var state_30250__$1 = state_30250;
var statearr_30327_30435 = state_30250__$1;
(statearr_30327_30435[(2)] = new cljs.core.Keyword(null,"stop","stop",-2140911342));

(statearr_30327_30435[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (17))){
var inst_30098 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
if(cljs.core.truth_(inst_30098)){
var statearr_30328_30436 = state_30250__$1;
(statearr_30328_30436[(1)] = (21));

} else {
var statearr_30329_30437 = state_30250__$1;
(statearr_30329_30437[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (3))){
var inst_30248 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30250__$1,inst_30248);
} else {
if((state_val_30251 === (12))){
var inst_30078 = asciinema.player.source.show_loading.call(null,source);
var inst_30080 = cljs.core.deref.call(null,recording_ch_fn);
var inst_30081 = inst_30080.call(null,true);
var state_30250__$1 = (function (){var statearr_30330 = state_30250;
(statearr_30330[(25)] = inst_30078);

return statearr_30330;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30250__$1,(14),inst_30081);
} else {
if((state_val_30251 === (2))){
var inst_30047 = (state_30250[(15)]);
var inst_30052 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30053 = [pri_ch,command_ch,inst_30047];
var inst_30054 = (new cljs.core.PersistentVector(null,3,(5),inst_30052,inst_30053,null));
var inst_30055 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,inst_30054);
var state_30250__$1 = state_30250;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30250__$1,(4),inst_30055,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_30251 === (66))){
var state_30250__$1 = state_30250;
var statearr_30332_30438 = state_30250__$1;
(statearr_30332_30438[(2)] = false);

(statearr_30332_30438[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (23))){
var inst_30045 = (state_30250[(14)]);
var inst_30046 = (state_30250[(13)]);
var inst_30103 = (state_30250[(2)]);
var inst_30104 = cljs.core.get.call(null,inst_30103,new cljs.core.Keyword(null,"frames","frames",1765687497));
var inst_30105 = cljs.core.get.call(null,inst_30103,new cljs.core.Keyword(null,"screen-fn","screen-fn",-2109509815));
var inst_30106 = cljs.core.get.call(null,inst_30103,new cljs.core.Keyword(null,"duration","duration",1444101068));
var inst_30107 = cljs.core.async.chan.call(null);
var inst_30108 = asciinema.player.source.play_BANG_.call(null,events_ch,inst_30104,inst_30105,inst_30106,inst_30107,inst_30045,inst_30046,loop_QMARK_);
var tmp30331 = inst_30046;
var inst_30045__$1 = null;
var inst_30046__$1 = tmp30331;
var inst_30047 = inst_30108;
var inst_30048 = inst_30107;
var state_30250__$1 = (function (){var statearr_30333 = state_30250;
(statearr_30333[(14)] = inst_30045__$1);

(statearr_30333[(15)] = inst_30047);

(statearr_30333[(13)] = inst_30046__$1);

(statearr_30333[(16)] = inst_30048);

return statearr_30333;
})();
var statearr_30334_30439 = state_30250__$1;
(statearr_30334_30439[(2)] = null);

(statearr_30334_30439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (47))){
var state_30250__$1 = state_30250;
var statearr_30335_30440 = state_30250__$1;
(statearr_30335_30440[(2)] = null);

(statearr_30335_30440[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (35))){
var state_30250__$1 = state_30250;
var statearr_30336_30441 = state_30250__$1;
(statearr_30336_30441[(2)] = new cljs.core.Keyword(null,"start","start",-355208981));

(statearr_30336_30441[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (19))){
var state_30250__$1 = state_30250;
var statearr_30337_30442 = state_30250__$1;
(statearr_30337_30442[(2)] = false);

(statearr_30337_30442[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (57))){
var inst_30177 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30342_30443 = state_30250__$1;
(statearr_30342_30443[(2)] = inst_30177);

(statearr_30342_30443[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (68))){
var state_30250__$1 = state_30250;
var statearr_30343_30444 = state_30250__$1;
(statearr_30343_30444[(2)] = true);

(statearr_30343_30444[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (11))){
var inst_30045 = (state_30250[(14)]);
var inst_30047 = (state_30250[(15)]);
var inst_30046 = (state_30250[(13)]);
var inst_30048 = (state_30250[(16)]);
var tmp30338 = inst_30045;
var tmp30339 = inst_30047;
var tmp30340 = inst_30046;
var tmp30341 = inst_30048;
var inst_30045__$1 = tmp30338;
var inst_30046__$1 = tmp30340;
var inst_30047__$1 = tmp30339;
var inst_30048__$1 = tmp30341;
var state_30250__$1 = (function (){var statearr_30344 = state_30250;
(statearr_30344[(14)] = inst_30045__$1);

(statearr_30344[(15)] = inst_30047__$1);

(statearr_30344[(13)] = inst_30046__$1);

(statearr_30344[(16)] = inst_30048__$1);

return statearr_30344;
})();
var statearr_30345_30445 = state_30250__$1;
(statearr_30345_30445[(2)] = null);

(statearr_30345_30445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (9))){
var inst_30068 = (state_30250[(8)]);
var inst_30113 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"stop","stop",-2140911342),inst_30068);
var state_30250__$1 = state_30250;
if(inst_30113){
var statearr_30346_30446 = state_30250__$1;
(statearr_30346_30446[(1)] = (24));

} else {
var statearr_30347_30447 = state_30250__$1;
(statearr_30347_30447[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (5))){
var inst_30058 = (state_30250[(19)]);
var inst_30062 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30063 = [new cljs.core.Keyword("internal","rewind","internal/rewind",-31749342),inst_30058];
var inst_30064 = (new cljs.core.PersistentVector(null,2,(5),inst_30062,inst_30063,null));
var state_30250__$1 = state_30250;
var statearr_30348_30448 = state_30250__$1;
(statearr_30348_30448[(2)] = inst_30064);

(statearr_30348_30448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (14))){
var inst_30083 = (state_30250[(20)]);
var inst_30083__$1 = (state_30250[(2)]);
var inst_30085 = (inst_30083__$1 == null);
var inst_30086 = cljs.core.not.call(null,inst_30085);
var state_30250__$1 = (function (){var statearr_30349 = state_30250;
(statearr_30349[(20)] = inst_30083__$1);

return statearr_30349;
})();
if(inst_30086){
var statearr_30350_30449 = state_30250__$1;
(statearr_30350_30449[(1)] = (15));

} else {
var statearr_30351_30450 = state_30250__$1;
(statearr_30351_30450[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (45))){
var inst_30048 = (state_30250[(16)]);
var inst_30153 = (state_30250[(2)]);
var state_30250__$1 = (function (){var statearr_30352 = state_30250;
(statearr_30352[(26)] = inst_30153);

return statearr_30352;
})();
if(cljs.core.truth_(inst_30048)){
var statearr_30353_30451 = state_30250__$1;
(statearr_30353_30451[(1)] = (46));

} else {
var statearr_30354_30452 = state_30250__$1;
(statearr_30354_30452[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (53))){
var inst_30168 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30169 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_30170 = (new cljs.core.PersistentVector(null,1,(5),inst_30168,inst_30169,null));
var state_30250__$1 = state_30250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30250__$1,(56),pri_ch,inst_30170);
} else {
if((state_val_30251 === (26))){
var inst_30244 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30355_30453 = state_30250__$1;
(statearr_30355_30453[(2)] = inst_30244);

(statearr_30355_30453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (16))){
var state_30250__$1 = state_30250;
var statearr_30357_30454 = state_30250__$1;
(statearr_30357_30454[(2)] = false);

(statearr_30357_30454[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (38))){
var inst_30048 = (state_30250[(16)]);
var state_30250__$1 = state_30250;
if(cljs.core.truth_(inst_30048)){
var statearr_30358_30455 = state_30250__$1;
(statearr_30358_30455[(1)] = (41));

} else {
var statearr_30359_30456 = state_30250__$1;
(statearr_30359_30456[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (30))){
var inst_30046 = (state_30250[(13)]);
var inst_30118 = (state_30250[(2)]);
var tmp30356 = inst_30046;
var inst_30045 = inst_30118;
var inst_30046__$1 = tmp30356;
var inst_30047 = null;
var inst_30048 = null;
var state_30250__$1 = (function (){var statearr_30360 = state_30250;
(statearr_30360[(14)] = inst_30045);

(statearr_30360[(15)] = inst_30047);

(statearr_30360[(13)] = inst_30046__$1);

(statearr_30360[(16)] = inst_30048);

return statearr_30360;
})();
var statearr_30361_30457 = state_30250__$1;
(statearr_30361_30457[(2)] = null);

(statearr_30361_30457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (73))){
var inst_30069 = (state_30250[(11)]);
var inst_30213 = (state_30250[(2)]);
var inst_30214 = cljs.core.get.call(null,inst_30213,new cljs.core.Keyword(null,"frames","frames",1765687497));
var inst_30215 = cljs.core.get.call(null,inst_30213,new cljs.core.Keyword(null,"screen-fn","screen-fn",-2109509815));
var inst_30216 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30217 = [new cljs.core.Keyword(null,"time","time",1385887882),inst_30069];
var inst_30218 = (new cljs.core.PersistentVector(null,2,(5),inst_30216,inst_30217,null));
var state_30250__$1 = (function (){var statearr_30362 = state_30250;
(statearr_30362[(9)] = inst_30214);

(statearr_30362[(10)] = inst_30215);

return statearr_30362;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30250__$1,(74),events_ch,inst_30218);
} else {
if((state_val_30251 === (10))){
var inst_30246 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30363_30458 = state_30250__$1;
(statearr_30363_30458[(2)] = inst_30246);

(statearr_30363_30458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (18))){
var state_30250__$1 = state_30250;
var statearr_30364_30459 = state_30250__$1;
(statearr_30364_30459[(2)] = true);

(statearr_30364_30459[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (52))){
var inst_30238 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30365_30460 = state_30250__$1;
(statearr_30365_30460[(2)] = inst_30238);

(statearr_30365_30460[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (67))){
var inst_30208 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
if(cljs.core.truth_(inst_30208)){
var statearr_30366_30461 = state_30250__$1;
(statearr_30366_30461[(1)] = (71));

} else {
var statearr_30367_30462 = state_30250__$1;
(statearr_30367_30462[(1)] = (72));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (71))){
var inst_30193 = (state_30250[(7)]);
var inst_30210 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30193);
var state_30250__$1 = state_30250;
var statearr_30372_30463 = state_30250__$1;
(statearr_30372_30463[(2)] = inst_30210);

(statearr_30372_30463[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (42))){
var state_30250__$1 = state_30250;
var statearr_30373_30464 = state_30250__$1;
(statearr_30373_30464[(2)] = null);

(statearr_30373_30464[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (37))){
var inst_30045 = (state_30250[(14)]);
var inst_30047 = (state_30250[(15)]);
var inst_30046 = (state_30250[(13)]);
var inst_30048 = (state_30250[(16)]);
var inst_30135 = (state_30250[(2)]);
var tmp30368 = inst_30045;
var tmp30369 = inst_30047;
var tmp30370 = inst_30046;
var tmp30371 = inst_30048;
var inst_30045__$1 = tmp30368;
var inst_30046__$1 = tmp30370;
var inst_30047__$1 = tmp30369;
var inst_30048__$1 = tmp30371;
var state_30250__$1 = (function (){var statearr_30374 = state_30250;
(statearr_30374[(14)] = inst_30045__$1);

(statearr_30374[(15)] = inst_30047__$1);

(statearr_30374[(13)] = inst_30046__$1);

(statearr_30374[(27)] = inst_30135);

(statearr_30374[(16)] = inst_30048__$1);

return statearr_30374;
})();
var statearr_30375_30465 = state_30250__$1;
(statearr_30375_30465[(2)] = null);

(statearr_30375_30465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (63))){
var inst_30234 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30376_30466 = state_30250__$1;
(statearr_30376_30466[(2)] = inst_30234);

(statearr_30376_30466[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (8))){
var inst_30048 = (state_30250[(16)]);
var state_30250__$1 = state_30250;
if(cljs.core.truth_(inst_30048)){
var statearr_30377_30467 = state_30250__$1;
(statearr_30377_30467[(1)] = (11));

} else {
var statearr_30378_30468 = state_30250__$1;
(statearr_30378_30468[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (49))){
var inst_30159 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30379_30469 = state_30250__$1;
(statearr_30379_30469[(2)] = inst_30159);

(statearr_30379_30469[(1)] = (48));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25119__auto___30387,command_ch,pri_ch,map__30043,map__30043__$1,source,events_ch,recording_ch_fn,start_at,speed,loop_QMARK_))
;
return ((function (switch__25007__auto__,c__25119__auto___30387,command_ch,pri_ch,map__30043,map__30043__$1,source,events_ch,recording_ch_fn,start_at,speed,loop_QMARK_){
return (function() {
var asciinema$player$source$start_event_loop_BANG__$_state_machine__25008__auto__ = null;
var asciinema$player$source$start_event_loop_BANG__$_state_machine__25008__auto____0 = (function (){
var statearr_30383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30383[(0)] = asciinema$player$source$start_event_loop_BANG__$_state_machine__25008__auto__);

(statearr_30383[(1)] = (1));

return statearr_30383;
});
var asciinema$player$source$start_event_loop_BANG__$_state_machine__25008__auto____1 = (function (state_30250){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_30250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e30384){if((e30384 instanceof Object)){
var ex__25011__auto__ = e30384;
var statearr_30385_30470 = state_30250;
(statearr_30385_30470[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30471 = state_30250;
state_30250 = G__30471;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
asciinema$player$source$start_event_loop_BANG__$_state_machine__25008__auto__ = function(state_30250){
switch(arguments.length){
case 0:
return asciinema$player$source$start_event_loop_BANG__$_state_machine__25008__auto____0.call(this);
case 1:
return asciinema$player$source$start_event_loop_BANG__$_state_machine__25008__auto____1.call(this,state_30250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asciinema$player$source$start_event_loop_BANG__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = asciinema$player$source$start_event_loop_BANG__$_state_machine__25008__auto____0;
asciinema$player$source$start_event_loop_BANG__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = asciinema$player$source$start_event_loop_BANG__$_state_machine__25008__auto____1;
return asciinema$player$source$start_event_loop_BANG__$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___30387,command_ch,pri_ch,map__30043,map__30043__$1,source,events_ch,recording_ch_fn,start_at,speed,loop_QMARK_))
})();
var state__25121__auto__ = (function (){var statearr_30386 = f__25120__auto__.call(null);
(statearr_30386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___30387);

return statearr_30386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___30387,command_ch,pri_ch,map__30043,map__30043__$1,source,events_ch,recording_ch_fn,start_at,speed,loop_QMARK_))
);


return command_ch;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {asciinema.player.source.Source}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
asciinema.player.source.PrerecordedSource = (function (events_ch,url,start_at,speed,auto_play_QMARK_,loop_QMARK_,preload_QMARK_,recording_fn,recording_ch_fn,stop_ch,command_ch,__meta,__extmap,__hash){
this.events_ch = events_ch;
this.url = url;
this.start_at = start_at;
this.speed = speed;
this.auto_play_QMARK_ = auto_play_QMARK_;
this.loop_QMARK_ = loop_QMARK_;
this.preload_QMARK_ = preload_QMARK_;
this.recording_fn = recording_fn;
this.recording_ch_fn = recording_ch_fn;
this.stop_ch = stop_ch;
this.command_ch = command_ch;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
asciinema.player.source.PrerecordedSource.prototype.asciinema$player$source$Source$ = true;

asciinema.player.source.PrerecordedSource.prototype.asciinema$player$source$Source$init$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_.call(null,self__.command_ch,asciinema.player.source.start_event_loop_BANG_.call(null,this$__$1));

var f_30479 = asciinema.player.source.make_recording_ch_fn.call(null,self__.url,self__.recording_fn);
cljs.core.reset_BANG_.call(null,self__.recording_ch_fn,f_30479);

asciinema.player.source.report_duration_and_size.call(null,this$__$1);

if(cljs.core.truth_(self__.preload_QMARK_)){
cljs.core.deref.call(null,self__.recording_ch_fn).call(null,true);
} else {
}

if(cljs.core.truth_(self__.auto_play_QMARK_)){
return asciinema.player.source.start.call(null,this$__$1);
} else {
return null;
}
});

asciinema.player.source.PrerecordedSource.prototype.asciinema$player$source$Source$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.put_BANG_.call(null,cljs.core.deref.call(null,self__.command_ch),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981)], null));
});

asciinema.player.source.PrerecordedSource.prototype.asciinema$player$source$Source$stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.put_BANG_.call(null,cljs.core.deref.call(null,self__.command_ch),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342)], null));
});

asciinema.player.source.PrerecordedSource.prototype.asciinema$player$source$Source$toggle$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.put_BANG_.call(null,cljs.core.deref.call(null,self__.command_ch),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030)], null));
});

asciinema.player.source.PrerecordedSource.prototype.asciinema$player$source$Source$seek$arity$2 = (function (this$,time){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.put_BANG_.call(null,cljs.core.deref.call(null,self__.command_ch),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seek","seek",758996602),time], null));
});

asciinema.player.source.PrerecordedSource.prototype.asciinema$player$source$Source$change_speed$arity$2 = (function (this$,speed__$1){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.put_BANG_.call(null,cljs.core.deref.call(null,self__.command_ch),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-speed","change-speed",2125740976),speed__$1], null));
});

asciinema.player.source.PrerecordedSource.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19402__auto__,k__19403__auto__){
var self__ = this;
var this__19402__auto____$1 = this;
return cljs.core._lookup.call(null,this__19402__auto____$1,k__19403__auto__,null);
});

asciinema.player.source.PrerecordedSource.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19404__auto__,k30473,else__19405__auto__){
var self__ = this;
var this__19404__auto____$1 = this;
var G__30475 = (((k30473 instanceof cljs.core.Keyword))?k30473.fqn:null);
switch (G__30475) {
case "preload?":
return self__.preload_QMARK_;

break;
case "speed":
return self__.speed;

break;
case "start-at":
return self__.start_at;

break;
case "events-ch":
return self__.events_ch;

break;
case "recording-ch-fn":
return self__.recording_ch_fn;

break;
case "command-ch":
return self__.command_ch;

break;
case "stop-ch":
return self__.stop_ch;

break;
case "auto-play?":
return self__.auto_play_QMARK_;

break;
case "url":
return self__.url;

break;
case "loop?":
return self__.loop_QMARK_;

break;
case "recording-fn":
return self__.recording_fn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30473,else__19405__auto__);

}
});

asciinema.player.source.PrerecordedSource.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19416__auto__,writer__19417__auto__,opts__19418__auto__){
var self__ = this;
var this__19416__auto____$1 = this;
var pr_pair__19419__auto__ = ((function (this__19416__auto____$1){
return (function (keyval__19420__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19417__auto__,cljs.core.pr_writer,""," ","",opts__19418__auto__,keyval__19420__auto__);
});})(this__19416__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19417__auto__,pr_pair__19419__auto__,"#asciinema.player.source.PrerecordedSource{",", ","}",opts__19418__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"events-ch","events-ch",-763395991),self__.events_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-at","start-at",-103334680),self__.start_at],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451),self__.auto_play_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"loop?","loop?",457687798),self__.loop_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preload?","preload?",445442977),self__.preload_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recording-fn","recording-fn",860963674),self__.recording_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recording-ch-fn","recording-ch-fn",-902533462),self__.recording_ch_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-ch","stop-ch",-219113969),self__.stop_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"command-ch","command-ch",508874766),self__.command_ch],null))], null),self__.__extmap));
});

asciinema.player.source.PrerecordedSource.prototype.cljs$core$IIterable$ = true;

asciinema.player.source.PrerecordedSource.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30472){
var self__ = this;
var G__30472__$1 = this;
return (new cljs.core.RecordIter((0),G__30472__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events-ch","events-ch",-763395991),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"start-at","start-at",-103334680),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451),new cljs.core.Keyword(null,"loop?","loop?",457687798),new cljs.core.Keyword(null,"preload?","preload?",445442977),new cljs.core.Keyword(null,"recording-fn","recording-fn",860963674),new cljs.core.Keyword(null,"recording-ch-fn","recording-ch-fn",-902533462),new cljs.core.Keyword(null,"stop-ch","stop-ch",-219113969),new cljs.core.Keyword(null,"command-ch","command-ch",508874766)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

asciinema.player.source.PrerecordedSource.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19400__auto__){
var self__ = this;
var this__19400__auto____$1 = this;
return self__.__meta;
});

asciinema.player.source.PrerecordedSource.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19396__auto__){
var self__ = this;
var this__19396__auto____$1 = this;
return (new asciinema.player.source.PrerecordedSource(self__.events_ch,self__.url,self__.start_at,self__.speed,self__.auto_play_QMARK_,self__.loop_QMARK_,self__.preload_QMARK_,self__.recording_fn,self__.recording_ch_fn,self__.stop_ch,self__.command_ch,self__.__meta,self__.__extmap,self__.__hash));
});

asciinema.player.source.PrerecordedSource.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19406__auto__){
var self__ = this;
var this__19406__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

asciinema.player.source.PrerecordedSource.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19397__auto__){
var self__ = this;
var this__19397__auto____$1 = this;
var h__19223__auto__ = self__.__hash;
if(!((h__19223__auto__ == null))){
return h__19223__auto__;
} else {
var h__19223__auto____$1 = cljs.core.hash_imap.call(null,this__19397__auto____$1);
self__.__hash = h__19223__auto____$1;

return h__19223__auto____$1;
}
});

asciinema.player.source.PrerecordedSource.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19398__auto__,other__19399__auto__){
var self__ = this;
var this__19398__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18776__auto__ = other__19399__auto__;
if(cljs.core.truth_(and__18776__auto__)){
var and__18776__auto____$1 = (this__19398__auto____$1.constructor === other__19399__auto__.constructor);
if(and__18776__auto____$1){
return cljs.core.equiv_map.call(null,this__19398__auto____$1,other__19399__auto__);
} else {
return and__18776__auto____$1;
}
} else {
return and__18776__auto__;
}
})())){
return true;
} else {
return false;
}
});

asciinema.player.source.PrerecordedSource.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19411__auto__,k__19412__auto__){
var self__ = this;
var this__19411__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"preload?","preload?",445442977),null,new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"start-at","start-at",-103334680),null,new cljs.core.Keyword(null,"events-ch","events-ch",-763395991),null,new cljs.core.Keyword(null,"recording-ch-fn","recording-ch-fn",-902533462),null,new cljs.core.Keyword(null,"command-ch","command-ch",508874766),null,new cljs.core.Keyword(null,"stop-ch","stop-ch",-219113969),null,new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"loop?","loop?",457687798),null,new cljs.core.Keyword(null,"recording-fn","recording-fn",860963674),null], null), null),k__19412__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19411__auto____$1),self__.__meta),k__19412__auto__);
} else {
return (new asciinema.player.source.PrerecordedSource(self__.events_ch,self__.url,self__.start_at,self__.speed,self__.auto_play_QMARK_,self__.loop_QMARK_,self__.preload_QMARK_,self__.recording_fn,self__.recording_ch_fn,self__.stop_ch,self__.command_ch,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19412__auto__)),null));
}
});

asciinema.player.source.PrerecordedSource.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19409__auto__,k__19410__auto__,G__30472){
var self__ = this;
var this__19409__auto____$1 = this;
var pred__30476 = cljs.core.keyword_identical_QMARK_;
var expr__30477 = k__19410__auto__;
if(cljs.core.truth_(pred__30476.call(null,new cljs.core.Keyword(null,"events-ch","events-ch",-763395991),expr__30477))){
return (new asciinema.player.source.PrerecordedSource(G__30472,self__.url,self__.start_at,self__.speed,self__.auto_play_QMARK_,self__.loop_QMARK_,self__.preload_QMARK_,self__.recording_fn,self__.recording_ch_fn,self__.stop_ch,self__.command_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30476.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__30477))){
return (new asciinema.player.source.PrerecordedSource(self__.events_ch,G__30472,self__.start_at,self__.speed,self__.auto_play_QMARK_,self__.loop_QMARK_,self__.preload_QMARK_,self__.recording_fn,self__.recording_ch_fn,self__.stop_ch,self__.command_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30476.call(null,new cljs.core.Keyword(null,"start-at","start-at",-103334680),expr__30477))){
return (new asciinema.player.source.PrerecordedSource(self__.events_ch,self__.url,G__30472,self__.speed,self__.auto_play_QMARK_,self__.loop_QMARK_,self__.preload_QMARK_,self__.recording_fn,self__.recording_ch_fn,self__.stop_ch,self__.command_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30476.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__30477))){
return (new asciinema.player.source.PrerecordedSource(self__.events_ch,self__.url,self__.start_at,G__30472,self__.auto_play_QMARK_,self__.loop_QMARK_,self__.preload_QMARK_,self__.recording_fn,self__.recording_ch_fn,self__.stop_ch,self__.command_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30476.call(null,new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451),expr__30477))){
return (new asciinema.player.source.PrerecordedSource(self__.events_ch,self__.url,self__.start_at,self__.speed,G__30472,self__.loop_QMARK_,self__.preload_QMARK_,self__.recording_fn,self__.recording_ch_fn,self__.stop_ch,self__.command_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30476.call(null,new cljs.core.Keyword(null,"loop?","loop?",457687798),expr__30477))){
return (new asciinema.player.source.PrerecordedSource(self__.events_ch,self__.url,self__.start_at,self__.speed,self__.auto_play_QMARK_,G__30472,self__.preload_QMARK_,self__.recording_fn,self__.recording_ch_fn,self__.stop_ch,self__.command_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30476.call(null,new cljs.core.Keyword(null,"preload?","preload?",445442977),expr__30477))){
return (new asciinema.player.source.PrerecordedSource(self__.events_ch,self__.url,self__.start_at,self__.speed,self__.auto_play_QMARK_,self__.loop_QMARK_,G__30472,self__.recording_fn,self__.recording_ch_fn,self__.stop_ch,self__.command_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30476.call(null,new cljs.core.Keyword(null,"recording-fn","recording-fn",860963674),expr__30477))){
return (new asciinema.player.source.PrerecordedSource(self__.events_ch,self__.url,self__.start_at,self__.speed,self__.auto_play_QMARK_,self__.loop_QMARK_,self__.preload_QMARK_,G__30472,self__.recording_ch_fn,self__.stop_ch,self__.command_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30476.call(null,new cljs.core.Keyword(null,"recording-ch-fn","recording-ch-fn",-902533462),expr__30477))){
return (new asciinema.player.source.PrerecordedSource(self__.events_ch,self__.url,self__.start_at,self__.speed,self__.auto_play_QMARK_,self__.loop_QMARK_,self__.preload_QMARK_,self__.recording_fn,G__30472,self__.stop_ch,self__.command_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30476.call(null,new cljs.core.Keyword(null,"stop-ch","stop-ch",-219113969),expr__30477))){
return (new asciinema.player.source.PrerecordedSource(self__.events_ch,self__.url,self__.start_at,self__.speed,self__.auto_play_QMARK_,self__.loop_QMARK_,self__.preload_QMARK_,self__.recording_fn,self__.recording_ch_fn,G__30472,self__.command_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30476.call(null,new cljs.core.Keyword(null,"command-ch","command-ch",508874766),expr__30477))){
return (new asciinema.player.source.PrerecordedSource(self__.events_ch,self__.url,self__.start_at,self__.speed,self__.auto_play_QMARK_,self__.loop_QMARK_,self__.preload_QMARK_,self__.recording_fn,self__.recording_ch_fn,self__.stop_ch,G__30472,self__.__meta,self__.__extmap,null));
} else {
return (new asciinema.player.source.PrerecordedSource(self__.events_ch,self__.url,self__.start_at,self__.speed,self__.auto_play_QMARK_,self__.loop_QMARK_,self__.preload_QMARK_,self__.recording_fn,self__.recording_ch_fn,self__.stop_ch,self__.command_ch,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19410__auto__,G__30472),null));
}
}
}
}
}
}
}
}
}
}
}
});

asciinema.player.source.PrerecordedSource.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19414__auto__){
var self__ = this;
var this__19414__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"events-ch","events-ch",-763395991),self__.events_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-at","start-at",-103334680),self__.start_at],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451),self__.auto_play_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"loop?","loop?",457687798),self__.loop_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preload?","preload?",445442977),self__.preload_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recording-fn","recording-fn",860963674),self__.recording_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recording-ch-fn","recording-ch-fn",-902533462),self__.recording_ch_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-ch","stop-ch",-219113969),self__.stop_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"command-ch","command-ch",508874766),self__.command_ch],null))], null),self__.__extmap));
});

asciinema.player.source.PrerecordedSource.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19401__auto__,G__30472){
var self__ = this;
var this__19401__auto____$1 = this;
return (new asciinema.player.source.PrerecordedSource(self__.events_ch,self__.url,self__.start_at,self__.speed,self__.auto_play_QMARK_,self__.loop_QMARK_,self__.preload_QMARK_,self__.recording_fn,self__.recording_ch_fn,self__.stop_ch,self__.command_ch,G__30472,self__.__extmap,self__.__hash));
});

asciinema.player.source.PrerecordedSource.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19407__auto__,entry__19408__auto__){
var self__ = this;
var this__19407__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19408__auto__)){
return cljs.core._assoc.call(null,this__19407__auto____$1,cljs.core._nth.call(null,entry__19408__auto__,(0)),cljs.core._nth.call(null,entry__19408__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19407__auto____$1,entry__19408__auto__);
}
});

asciinema.player.source.PrerecordedSource.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"events-ch","events-ch",877135536,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"start-at","start-at",1537196847,null),new cljs.core.Symbol(null,"speed","speed",-1396772018,null),new cljs.core.Symbol(null,"auto-play?","auto-play?",2025809978,null),new cljs.core.Symbol(null,"loop?","loop?",2098219325,null),new cljs.core.Symbol(null,"preload?","preload?",2085974504,null),new cljs.core.Symbol(null,"recording-fn","recording-fn",-1793472095,null),new cljs.core.Symbol(null,"recording-ch-fn","recording-ch-fn",737998065,null),new cljs.core.Symbol(null,"stop-ch","stop-ch",1421417558,null),new cljs.core.Symbol(null,"command-ch","command-ch",-2145561003,null)], null);
});

asciinema.player.source.PrerecordedSource.cljs$lang$type = true;

asciinema.player.source.PrerecordedSource.cljs$lang$ctorPrSeq = (function (this__19436__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"asciinema.player.source/PrerecordedSource");
});

asciinema.player.source.PrerecordedSource.cljs$lang$ctorPrWriter = (function (this__19436__auto__,writer__19437__auto__){
return cljs.core._write.call(null,writer__19437__auto__,"asciinema.player.source/PrerecordedSource");
});

asciinema.player.source.__GT_PrerecordedSource = (function asciinema$player$source$__GT_PrerecordedSource(events_ch,url,start_at,speed,auto_play_QMARK_,loop_QMARK_,preload_QMARK_,recording_fn,recording_ch_fn,stop_ch,command_ch){
return (new asciinema.player.source.PrerecordedSource(events_ch,url,start_at,speed,auto_play_QMARK_,loop_QMARK_,preload_QMARK_,recording_fn,recording_ch_fn,stop_ch,command_ch,null,null,null));
});

asciinema.player.source.map__GT_PrerecordedSource = (function asciinema$player$source$map__GT_PrerecordedSource(G__30474){
return (new asciinema.player.source.PrerecordedSource(new cljs.core.Keyword(null,"events-ch","events-ch",-763395991).cljs$core$IFn$_invoke$arity$1(G__30474),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__30474),new cljs.core.Keyword(null,"start-at","start-at",-103334680).cljs$core$IFn$_invoke$arity$1(G__30474),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__30474),new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451).cljs$core$IFn$_invoke$arity$1(G__30474),new cljs.core.Keyword(null,"loop?","loop?",457687798).cljs$core$IFn$_invoke$arity$1(G__30474),new cljs.core.Keyword(null,"preload?","preload?",445442977).cljs$core$IFn$_invoke$arity$1(G__30474),new cljs.core.Keyword(null,"recording-fn","recording-fn",860963674).cljs$core$IFn$_invoke$arity$1(G__30474),new cljs.core.Keyword(null,"recording-ch-fn","recording-ch-fn",-902533462).cljs$core$IFn$_invoke$arity$1(G__30474),new cljs.core.Keyword(null,"stop-ch","stop-ch",-219113969).cljs$core$IFn$_invoke$arity$1(G__30474),new cljs.core.Keyword(null,"command-ch","command-ch",508874766).cljs$core$IFn$_invoke$arity$1(G__30474),null,cljs.core.dissoc.call(null,G__30474,new cljs.core.Keyword(null,"events-ch","events-ch",-763395991),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"start-at","start-at",-103334680),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451),new cljs.core.Keyword(null,"loop?","loop?",457687798),new cljs.core.Keyword(null,"preload?","preload?",445442977),new cljs.core.Keyword(null,"recording-fn","recording-fn",860963674),new cljs.core.Keyword(null,"recording-ch-fn","recording-ch-fn",-902533462),new cljs.core.Keyword(null,"stop-ch","stop-ch",-219113969),new cljs.core.Keyword(null,"command-ch","command-ch",508874766)),null));
});

asciinema.player.source.prerecorded_source = (function asciinema$player$source$prerecorded_source(events_ch,url,initial_start_at,initial_speed,auto_play_QMARK_,loop_QMARK_,preload,recording_fn){
return asciinema.player.source.__GT_PrerecordedSource.call(null,events_ch,url,initial_start_at,initial_speed,auto_play_QMARK_,loop_QMARK_,preload,recording_fn,cljs.core.atom.call(null,null),cljs.core.atom.call(null,null),cljs.core.atom.call(null,null));
});
cljs.core._add_method.call(null,asciinema.player.source.make_source,new cljs.core.Keyword(null,"asciicast","asciicast",509526949),(function (type,events_ch,url,width_hint,height_hint,initial_start_at,initial_speed,auto_play_QMARK_,loop_QMARK_,preload_QMARK_){
return asciinema.player.source.prerecorded_source.call(null,events_ch,url,initial_start_at,initial_speed,auto_play_QMARK_,loop_QMARK_,preload_QMARK_,(function (json){
return asciinema.player.source.initialize_asciicast.call(null,asciinema.player.patch.js__GT_clj.call(null,JSON.parse(json),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}));
}));
asciinema.player.source.vts_BANG_ = (function asciinema$player$source$vts_BANG_(width,height,events_ch){
var stdout_ch = cljs.core.async.chan.call(null);
var c__25119__auto___30559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___30559,stdout_ch){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___30559,stdout_ch){
return (function (state_30540){
var state_val_30541 = (state_30540[(1)]);
if((state_val_30541 === (1))){
var inst_30520 = asciinema.player.vt.make_vt.call(null,width,height);
var inst_30521 = inst_30520;
var state_30540__$1 = (function (){var statearr_30542 = state_30540;
(statearr_30542[(7)] = inst_30521);

return statearr_30542;
})();
var statearr_30543_30560 = state_30540__$1;
(statearr_30543_30560[(2)] = null);

(statearr_30543_30560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (2))){
var state_30540__$1 = state_30540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30540__$1,(4),stdout_ch);
} else {
if((state_val_30541 === (3))){
var inst_30538 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30540__$1,inst_30538);
} else {
if((state_val_30541 === (4))){
var inst_30524 = (state_30540[(8)]);
var inst_30524__$1 = (state_30540[(2)]);
var state_30540__$1 = (function (){var statearr_30544 = state_30540;
(statearr_30544[(8)] = inst_30524__$1);

return statearr_30544;
})();
if(cljs.core.truth_(inst_30524__$1)){
var statearr_30545_30561 = state_30540__$1;
(statearr_30545_30561[(1)] = (5));

} else {
var statearr_30546_30562 = state_30540__$1;
(statearr_30546_30562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (5))){
var inst_30526 = (state_30540[(9)]);
var inst_30524 = (state_30540[(8)]);
var inst_30521 = (state_30540[(7)]);
var inst_30526__$1 = asciinema.player.vt.feed_str.call(null,inst_30521,inst_30524);
var inst_30527 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30528 = asciinema.player.source.vt__GT_screen.call(null,inst_30526__$1);
var inst_30529 = [new cljs.core.Keyword(null,"screen","screen",1990059748),inst_30528];
var inst_30530 = (new cljs.core.PersistentVector(null,2,(5),inst_30527,inst_30529,null));
var state_30540__$1 = (function (){var statearr_30547 = state_30540;
(statearr_30547[(9)] = inst_30526__$1);

return statearr_30547;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30540__$1,(8),events_ch,inst_30530);
} else {
if((state_val_30541 === (6))){
var state_30540__$1 = state_30540;
var statearr_30548_30563 = state_30540__$1;
(statearr_30548_30563[(2)] = null);

(statearr_30548_30563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (7))){
var inst_30536 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
var statearr_30549_30564 = state_30540__$1;
(statearr_30549_30564[(2)] = inst_30536);

(statearr_30549_30564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (8))){
var inst_30526 = (state_30540[(9)]);
var inst_30532 = (state_30540[(2)]);
var inst_30521 = inst_30526;
var state_30540__$1 = (function (){var statearr_30550 = state_30540;
(statearr_30550[(7)] = inst_30521);

(statearr_30550[(10)] = inst_30532);

return statearr_30550;
})();
var statearr_30551_30565 = state_30540__$1;
(statearr_30551_30565[(2)] = null);

(statearr_30551_30565[(1)] = (2));


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
});})(c__25119__auto___30559,stdout_ch))
;
return ((function (switch__25007__auto__,c__25119__auto___30559,stdout_ch){
return (function() {
var asciinema$player$source$vts_BANG__$_state_machine__25008__auto__ = null;
var asciinema$player$source$vts_BANG__$_state_machine__25008__auto____0 = (function (){
var statearr_30555 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30555[(0)] = asciinema$player$source$vts_BANG__$_state_machine__25008__auto__);

(statearr_30555[(1)] = (1));

return statearr_30555;
});
var asciinema$player$source$vts_BANG__$_state_machine__25008__auto____1 = (function (state_30540){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_30540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e30556){if((e30556 instanceof Object)){
var ex__25011__auto__ = e30556;
var statearr_30557_30566 = state_30540;
(statearr_30557_30566[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30567 = state_30540;
state_30540 = G__30567;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
asciinema$player$source$vts_BANG__$_state_machine__25008__auto__ = function(state_30540){
switch(arguments.length){
case 0:
return asciinema$player$source$vts_BANG__$_state_machine__25008__auto____0.call(this);
case 1:
return asciinema$player$source$vts_BANG__$_state_machine__25008__auto____1.call(this,state_30540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asciinema$player$source$vts_BANG__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = asciinema$player$source$vts_BANG__$_state_machine__25008__auto____0;
asciinema$player$source$vts_BANG__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = asciinema$player$source$vts_BANG__$_state_machine__25008__auto____1;
return asciinema$player$source$vts_BANG__$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___30559,stdout_ch))
})();
var state__25121__auto__ = (function (){var statearr_30558 = f__25120__auto__.call(null);
(statearr_30558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___30559);

return statearr_30558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___30559,stdout_ch))
);


return stdout_ch;
});
asciinema.player.source.start_random_stdout_gen_BANG_ = (function asciinema$player$source$start_random_stdout_gen_BANG_(events_ch,stdout_ch,speed,stop_ch){
var c__25119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto__){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto__){
return (function (state_30659){
var state_val_30660 = (state_30659[(1)]);
if((state_val_30660 === (7))){
var inst_30644 = cljs.core.rand_int.call(null,(160));
var inst_30645 = String.fromCharCode(inst_30644);
var state_30659__$1 = state_30659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30659__$1,(9),stdout_ch,inst_30645);
} else {
if((state_val_30660 === (1))){
var inst_30623 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30624 = [new cljs.core.Keyword(null,"playing","playing",70013335),true];
var inst_30625 = (new cljs.core.PersistentVector(null,2,(5),inst_30623,inst_30624,null));
var state_30659__$1 = state_30659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30659__$1,(2),events_ch,inst_30625);
} else {
if((state_val_30660 === (4))){
var inst_30652 = (state_30659[(2)]);
var inst_30653 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30654 = [new cljs.core.Keyword(null,"playing","playing",70013335),false];
var inst_30655 = (new cljs.core.PersistentVector(null,2,(5),inst_30653,inst_30654,null));
var state_30659__$1 = (function (){var statearr_30661 = state_30659;
(statearr_30661[(7)] = inst_30652);

return statearr_30661;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30659__$1,(10),events_ch,inst_30655);
} else {
if((state_val_30660 === (6))){
var state_30659__$1 = state_30659;
var statearr_30662_30678 = state_30659__$1;
(statearr_30662_30678[(2)] = null);

(statearr_30662_30678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (3))){
var inst_30630 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30631 = cljs.core.rand.call(null);
var inst_30632 = ((100) * inst_30631);
var inst_30633 = (inst_30632 / speed);
var inst_30634 = cljs.core.async.timeout.call(null,inst_30633);
var inst_30635 = [stop_ch,inst_30634];
var inst_30636 = (new cljs.core.PersistentVector(null,2,(5),inst_30630,inst_30635,null));
var state_30659__$1 = state_30659;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30659__$1,(5),inst_30636);
} else {
if((state_val_30660 === (2))){
var inst_30627 = (state_30659[(2)]);
var state_30659__$1 = (function (){var statearr_30663 = state_30659;
(statearr_30663[(8)] = inst_30627);

return statearr_30663;
})();
var statearr_30664_30679 = state_30659__$1;
(statearr_30664_30679[(2)] = null);

(statearr_30664_30679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (9))){
var inst_30647 = (state_30659[(2)]);
var state_30659__$1 = (function (){var statearr_30665 = state_30659;
(statearr_30665[(9)] = inst_30647);

return statearr_30665;
})();
var statearr_30666_30680 = state_30659__$1;
(statearr_30666_30680[(2)] = null);

(statearr_30666_30680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (5))){
var inst_30638 = (state_30659[(2)]);
var inst_30639 = cljs.core.nth.call(null,inst_30638,(0),null);
var inst_30640 = cljs.core.nth.call(null,inst_30638,(1),null);
var inst_30641 = cljs.core._EQ_.call(null,inst_30640,stop_ch);
var state_30659__$1 = (function (){var statearr_30667 = state_30659;
(statearr_30667[(10)] = inst_30639);

return statearr_30667;
})();
if(inst_30641){
var statearr_30668_30681 = state_30659__$1;
(statearr_30668_30681[(1)] = (6));

} else {
var statearr_30669_30682 = state_30659__$1;
(statearr_30669_30682[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30660 === (10))){
var inst_30657 = (state_30659[(2)]);
var state_30659__$1 = state_30659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30659__$1,inst_30657);
} else {
if((state_val_30660 === (8))){
var inst_30650 = (state_30659[(2)]);
var state_30659__$1 = state_30659;
var statearr_30670_30683 = state_30659__$1;
(statearr_30670_30683[(2)] = inst_30650);

(statearr_30670_30683[(1)] = (4));


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
var asciinema$player$source$start_random_stdout_gen_BANG__$_state_machine__25008__auto__ = null;
var asciinema$player$source$start_random_stdout_gen_BANG__$_state_machine__25008__auto____0 = (function (){
var statearr_30674 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30674[(0)] = asciinema$player$source$start_random_stdout_gen_BANG__$_state_machine__25008__auto__);

(statearr_30674[(1)] = (1));

return statearr_30674;
});
var asciinema$player$source$start_random_stdout_gen_BANG__$_state_machine__25008__auto____1 = (function (state_30659){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_30659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e30675){if((e30675 instanceof Object)){
var ex__25011__auto__ = e30675;
var statearr_30676_30684 = state_30659;
(statearr_30676_30684[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30685 = state_30659;
state_30659 = G__30685;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
asciinema$player$source$start_random_stdout_gen_BANG__$_state_machine__25008__auto__ = function(state_30659){
switch(arguments.length){
case 0:
return asciinema$player$source$start_random_stdout_gen_BANG__$_state_machine__25008__auto____0.call(this);
case 1:
return asciinema$player$source$start_random_stdout_gen_BANG__$_state_machine__25008__auto____1.call(this,state_30659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asciinema$player$source$start_random_stdout_gen_BANG__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = asciinema$player$source$start_random_stdout_gen_BANG__$_state_machine__25008__auto____0;
asciinema$player$source$start_random_stdout_gen_BANG__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = asciinema$player$source$start_random_stdout_gen_BANG__$_state_machine__25008__auto____1;
return asciinema$player$source$start_random_stdout_gen_BANG__$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto__))
})();
var state__25121__auto__ = (function (){var statearr_30677 = f__25120__auto__.call(null);
(statearr_30677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto__);

return statearr_30677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto__))
);

return c__25119__auto__;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {asciinema.player.source.Source}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
asciinema.player.source.RandomSource = (function (events_ch,speed,auto_play_QMARK_,width,height,stdout_ch,stop_ch,__meta,__extmap,__hash){
this.events_ch = events_ch;
this.speed = speed;
this.auto_play_QMARK_ = auto_play_QMARK_;
this.width = width;
this.height = height;
this.stdout_ch = stdout_ch;
this.stop_ch = stop_ch;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
asciinema.player.source.RandomSource.prototype.asciinema$player$source$Source$ = true;

asciinema.player.source.RandomSource.prototype.asciinema$player$source$Source$init$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_.call(null,self__.stdout_ch,asciinema.player.source.vts_BANG_.call(null,self__.width,self__.height,self__.events_ch));

if(cljs.core.truth_(self__.auto_play_QMARK_)){
return asciinema.player.source.start.call(null,this$__$1);
} else {
return null;
}
});

asciinema.player.source.RandomSource.prototype.asciinema$player$source$Source$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.stop_ch))){
return null;
} else {
var command_ch = cljs.core.async.chan.call(null);
cljs.core.reset_BANG_.call(null,self__.stop_ch,command_ch);

return asciinema.player.source.start_random_stdout_gen_BANG_.call(null,self__.events_ch,cljs.core.deref.call(null,self__.stdout_ch),self__.speed,command_ch);
}
});

asciinema.player.source.RandomSource.prototype.asciinema$player$source$Source$stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.stop_ch))){
cljs.core.async.close_BANG_.call(null,cljs.core.deref.call(null,self__.stop_ch));

return cljs.core.reset_BANG_.call(null,self__.stop_ch,null);
} else {
return null;
}
});

asciinema.player.source.RandomSource.prototype.asciinema$player$source$Source$toggle$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.stop_ch))){
return asciinema.player.source.stop.call(null,this$__$1);
} else {
return asciinema.player.source.start.call(null,this$__$1);
}
});

asciinema.player.source.RandomSource.prototype.asciinema$player$source$Source$seek$arity$2 = (function (this$,position){
var self__ = this;
var this$__$1 = this;
return null;
});

asciinema.player.source.RandomSource.prototype.asciinema$player$source$Source$change_speed$arity$2 = (function (this$,speed__$1){
var self__ = this;
var this$__$1 = this;
return null;
});

asciinema.player.source.RandomSource.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19402__auto__,k__19403__auto__){
var self__ = this;
var this__19402__auto____$1 = this;
return cljs.core._lookup.call(null,this__19402__auto____$1,k__19403__auto__,null);
});

asciinema.player.source.RandomSource.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19404__auto__,k30687,else__19405__auto__){
var self__ = this;
var this__19404__auto____$1 = this;
var G__30689 = (((k30687 instanceof cljs.core.Keyword))?k30687.fqn:null);
switch (G__30689) {
case "events-ch":
return self__.events_ch;

break;
case "speed":
return self__.speed;

break;
case "auto-play?":
return self__.auto_play_QMARK_;

break;
case "width":
return self__.width;

break;
case "height":
return self__.height;

break;
case "stdout-ch":
return self__.stdout_ch;

break;
case "stop-ch":
return self__.stop_ch;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30687,else__19405__auto__);

}
});

asciinema.player.source.RandomSource.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19416__auto__,writer__19417__auto__,opts__19418__auto__){
var self__ = this;
var this__19416__auto____$1 = this;
var pr_pair__19419__auto__ = ((function (this__19416__auto____$1){
return (function (keyval__19420__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19417__auto__,cljs.core.pr_writer,""," ","",opts__19418__auto__,keyval__19420__auto__);
});})(this__19416__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19417__auto__,pr_pair__19419__auto__,"#asciinema.player.source.RandomSource{",", ","}",opts__19418__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"events-ch","events-ch",-763395991),self__.events_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451),self__.auto_play_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stdout-ch","stdout-ch",825692568),self__.stdout_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-ch","stop-ch",-219113969),self__.stop_ch],null))], null),self__.__extmap));
});

asciinema.player.source.RandomSource.prototype.cljs$core$IIterable$ = true;

asciinema.player.source.RandomSource.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30686){
var self__ = this;
var G__30686__$1 = this;
return (new cljs.core.RecordIter((0),G__30686__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events-ch","events-ch",-763395991),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"stdout-ch","stdout-ch",825692568),new cljs.core.Keyword(null,"stop-ch","stop-ch",-219113969)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

asciinema.player.source.RandomSource.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19400__auto__){
var self__ = this;
var this__19400__auto____$1 = this;
return self__.__meta;
});

asciinema.player.source.RandomSource.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19396__auto__){
var self__ = this;
var this__19396__auto____$1 = this;
return (new asciinema.player.source.RandomSource(self__.events_ch,self__.speed,self__.auto_play_QMARK_,self__.width,self__.height,self__.stdout_ch,self__.stop_ch,self__.__meta,self__.__extmap,self__.__hash));
});

asciinema.player.source.RandomSource.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19406__auto__){
var self__ = this;
var this__19406__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

asciinema.player.source.RandomSource.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19397__auto__){
var self__ = this;
var this__19397__auto____$1 = this;
var h__19223__auto__ = self__.__hash;
if(!((h__19223__auto__ == null))){
return h__19223__auto__;
} else {
var h__19223__auto____$1 = cljs.core.hash_imap.call(null,this__19397__auto____$1);
self__.__hash = h__19223__auto____$1;

return h__19223__auto____$1;
}
});

asciinema.player.source.RandomSource.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19398__auto__,other__19399__auto__){
var self__ = this;
var this__19398__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18776__auto__ = other__19399__auto__;
if(cljs.core.truth_(and__18776__auto__)){
var and__18776__auto____$1 = (this__19398__auto____$1.constructor === other__19399__auto__.constructor);
if(and__18776__auto____$1){
return cljs.core.equiv_map.call(null,this__19398__auto____$1,other__19399__auto__);
} else {
return and__18776__auto____$1;
}
} else {
return and__18776__auto__;
}
})())){
return true;
} else {
return false;
}
});

asciinema.player.source.RandomSource.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19411__auto__,k__19412__auto__){
var self__ = this;
var this__19411__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"events-ch","events-ch",-763395991),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"stop-ch","stop-ch",-219113969),null,new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451),null,new cljs.core.Keyword(null,"stdout-ch","stdout-ch",825692568),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__19412__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19411__auto____$1),self__.__meta),k__19412__auto__);
} else {
return (new asciinema.player.source.RandomSource(self__.events_ch,self__.speed,self__.auto_play_QMARK_,self__.width,self__.height,self__.stdout_ch,self__.stop_ch,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19412__auto__)),null));
}
});

asciinema.player.source.RandomSource.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19409__auto__,k__19410__auto__,G__30686){
var self__ = this;
var this__19409__auto____$1 = this;
var pred__30690 = cljs.core.keyword_identical_QMARK_;
var expr__30691 = k__19410__auto__;
if(cljs.core.truth_(pred__30690.call(null,new cljs.core.Keyword(null,"events-ch","events-ch",-763395991),expr__30691))){
return (new asciinema.player.source.RandomSource(G__30686,self__.speed,self__.auto_play_QMARK_,self__.width,self__.height,self__.stdout_ch,self__.stop_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30690.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__30691))){
return (new asciinema.player.source.RandomSource(self__.events_ch,G__30686,self__.auto_play_QMARK_,self__.width,self__.height,self__.stdout_ch,self__.stop_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30690.call(null,new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451),expr__30691))){
return (new asciinema.player.source.RandomSource(self__.events_ch,self__.speed,G__30686,self__.width,self__.height,self__.stdout_ch,self__.stop_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30690.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__30691))){
return (new asciinema.player.source.RandomSource(self__.events_ch,self__.speed,self__.auto_play_QMARK_,G__30686,self__.height,self__.stdout_ch,self__.stop_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30690.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__30691))){
return (new asciinema.player.source.RandomSource(self__.events_ch,self__.speed,self__.auto_play_QMARK_,self__.width,G__30686,self__.stdout_ch,self__.stop_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30690.call(null,new cljs.core.Keyword(null,"stdout-ch","stdout-ch",825692568),expr__30691))){
return (new asciinema.player.source.RandomSource(self__.events_ch,self__.speed,self__.auto_play_QMARK_,self__.width,self__.height,G__30686,self__.stop_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30690.call(null,new cljs.core.Keyword(null,"stop-ch","stop-ch",-219113969),expr__30691))){
return (new asciinema.player.source.RandomSource(self__.events_ch,self__.speed,self__.auto_play_QMARK_,self__.width,self__.height,self__.stdout_ch,G__30686,self__.__meta,self__.__extmap,null));
} else {
return (new asciinema.player.source.RandomSource(self__.events_ch,self__.speed,self__.auto_play_QMARK_,self__.width,self__.height,self__.stdout_ch,self__.stop_ch,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19410__auto__,G__30686),null));
}
}
}
}
}
}
}
});

asciinema.player.source.RandomSource.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19414__auto__){
var self__ = this;
var this__19414__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"events-ch","events-ch",-763395991),self__.events_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451),self__.auto_play_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stdout-ch","stdout-ch",825692568),self__.stdout_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-ch","stop-ch",-219113969),self__.stop_ch],null))], null),self__.__extmap));
});

asciinema.player.source.RandomSource.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19401__auto__,G__30686){
var self__ = this;
var this__19401__auto____$1 = this;
return (new asciinema.player.source.RandomSource(self__.events_ch,self__.speed,self__.auto_play_QMARK_,self__.width,self__.height,self__.stdout_ch,self__.stop_ch,G__30686,self__.__extmap,self__.__hash));
});

asciinema.player.source.RandomSource.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19407__auto__,entry__19408__auto__){
var self__ = this;
var this__19407__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19408__auto__)){
return cljs.core._assoc.call(null,this__19407__auto____$1,cljs.core._nth.call(null,entry__19408__auto__,(0)),cljs.core._nth.call(null,entry__19408__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19407__auto____$1,entry__19408__auto__);
}
});

asciinema.player.source.RandomSource.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"events-ch","events-ch",877135536,null),new cljs.core.Symbol(null,"speed","speed",-1396772018,null),new cljs.core.Symbol(null,"auto-play?","auto-play?",2025809978,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"stdout-ch","stdout-ch",-1828743201,null),new cljs.core.Symbol(null,"stop-ch","stop-ch",1421417558,null)], null);
});

asciinema.player.source.RandomSource.cljs$lang$type = true;

asciinema.player.source.RandomSource.cljs$lang$ctorPrSeq = (function (this__19436__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"asciinema.player.source/RandomSource");
});

asciinema.player.source.RandomSource.cljs$lang$ctorPrWriter = (function (this__19436__auto__,writer__19437__auto__){
return cljs.core._write.call(null,writer__19437__auto__,"asciinema.player.source/RandomSource");
});

asciinema.player.source.__GT_RandomSource = (function asciinema$player$source$__GT_RandomSource(events_ch,speed,auto_play_QMARK_,width,height,stdout_ch,stop_ch){
return (new asciinema.player.source.RandomSource(events_ch,speed,auto_play_QMARK_,width,height,stdout_ch,stop_ch,null,null,null));
});

asciinema.player.source.map__GT_RandomSource = (function asciinema$player$source$map__GT_RandomSource(G__30688){
return (new asciinema.player.source.RandomSource(new cljs.core.Keyword(null,"events-ch","events-ch",-763395991).cljs$core$IFn$_invoke$arity$1(G__30688),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__30688),new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451).cljs$core$IFn$_invoke$arity$1(G__30688),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__30688),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__30688),new cljs.core.Keyword(null,"stdout-ch","stdout-ch",825692568).cljs$core$IFn$_invoke$arity$1(G__30688),new cljs.core.Keyword(null,"stop-ch","stop-ch",-219113969).cljs$core$IFn$_invoke$arity$1(G__30688),null,cljs.core.dissoc.call(null,G__30688,new cljs.core.Keyword(null,"events-ch","events-ch",-763395991),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"stdout-ch","stdout-ch",825692568),new cljs.core.Keyword(null,"stop-ch","stop-ch",-219113969)),null));
});

cljs.core._add_method.call(null,asciinema.player.source.make_source,new cljs.core.Keyword(null,"random","random",-557811113),(function (type,events_ch,url,width_hint,height_hint,initial_start_at,initial_speed,auto_play_QMARK_,loop_QMARK_,preload_QMARK_){
return asciinema.player.source.__GT_RandomSource.call(null,events_ch,initial_speed,auto_play_QMARK_,width_hint,height_hint,cljs.core.atom.call(null,null),cljs.core.atom.call(null,null));
}));
asciinema.player.source.es_message = (function asciinema$player$source$es_message(payload){
return asciinema.player.patch.js__GT_clj.call(null,JSON.parse(payload),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
asciinema.player.source.process_es_messages_BANG_ = (function asciinema$player$source$process_es_messages_BANG_(es_ch,events_ch){
var c__25119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto__){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto__){
return (function (state_30868){
var state_val_30869 = (state_30868[(1)]);
if((state_val_30869 === (7))){
var state_30868__$1 = state_30868;
var statearr_30870_30912 = state_30868__$1;
(statearr_30870_30912[(2)] = false);

(statearr_30870_30912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (20))){
var state_30868__$1 = state_30868;
var statearr_30871_30913 = state_30868__$1;
(statearr_30871_30913[(2)] = false);

(statearr_30871_30913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (27))){
var inst_30830 = (state_30868[(7)]);
var inst_30857 = (state_30868[(2)]);
var inst_30858 = cljs.core.get.call(null,inst_30857,new cljs.core.Keyword(null,"stdout","stdout",-531490018));
var state_30868__$1 = state_30868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30868__$1,(28),inst_30830,inst_30858);
} else {
if((state_val_30869 === (1))){
var state_30868__$1 = state_30868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30868__$1,(2),es_ch);
} else {
if((state_val_30869 === (24))){
var inst_30849 = (state_30868[(2)]);
var state_30868__$1 = state_30868;
var statearr_30872_30914 = state_30868__$1;
(statearr_30872_30914[(2)] = inst_30849);

(statearr_30872_30914[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (4))){
var state_30868__$1 = state_30868;
var statearr_30873_30915 = state_30868__$1;
(statearr_30873_30915[(2)] = false);

(statearr_30873_30915[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (15))){
var inst_30835 = (state_30868[(8)]);
var inst_30835__$1 = (state_30868[(2)]);
var state_30868__$1 = (function (){var statearr_30874 = state_30868;
(statearr_30874[(8)] = inst_30835__$1);

return statearr_30874;
})();
if(cljs.core.truth_(inst_30835__$1)){
var statearr_30875_30916 = state_30868__$1;
(statearr_30875_30916[(1)] = (16));

} else {
var statearr_30876_30917 = state_30868__$1;
(statearr_30876_30917[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (21))){
var inst_30852 = (state_30868[(2)]);
var state_30868__$1 = state_30868;
if(cljs.core.truth_(inst_30852)){
var statearr_30877_30918 = state_30868__$1;
(statearr_30877_30918[(1)] = (25));

} else {
var statearr_30878_30919 = state_30868__$1;
(statearr_30878_30919[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (13))){
var state_30868__$1 = state_30868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30868__$1,(15),es_ch);
} else {
if((state_val_30869 === (22))){
var state_30868__$1 = state_30868;
var statearr_30879_30920 = state_30868__$1;
(statearr_30879_30920[(2)] = true);

(statearr_30879_30920[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (6))){
var state_30868__$1 = state_30868;
var statearr_30880_30921 = state_30868__$1;
(statearr_30880_30921[(2)] = true);

(statearr_30880_30921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (28))){
var inst_30860 = (state_30868[(2)]);
var state_30868__$1 = (function (){var statearr_30881 = state_30868;
(statearr_30881[(9)] = inst_30860);

return statearr_30881;
})();
var statearr_30882_30922 = state_30868__$1;
(statearr_30882_30922[(2)] = null);

(statearr_30882_30922[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (25))){
var inst_30835 = (state_30868[(8)]);
var inst_30854 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30835);
var state_30868__$1 = state_30868;
var statearr_30883_30923 = state_30868__$1;
(statearr_30883_30923[(2)] = inst_30854);

(statearr_30883_30923[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (17))){
var state_30868__$1 = state_30868;
var statearr_30884_30924 = state_30868__$1;
(statearr_30884_30924[(2)] = null);

(statearr_30884_30924[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (3))){
var inst_30805 = (state_30868[(10)]);
var inst_30810 = inst_30805.cljs$lang$protocol_mask$partition0$;
var inst_30811 = (inst_30810 & (64));
var inst_30812 = inst_30805.cljs$core$ISeq$;
var inst_30813 = (inst_30811) || (inst_30812);
var state_30868__$1 = state_30868;
if(cljs.core.truth_(inst_30813)){
var statearr_30885_30925 = state_30868__$1;
(statearr_30885_30925[(1)] = (6));

} else {
var statearr_30886_30926 = state_30868__$1;
(statearr_30886_30926[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (12))){
var inst_30832 = (state_30868[(2)]);
var state_30868__$1 = (function (){var statearr_30887 = state_30868;
(statearr_30887[(11)] = inst_30832);

return statearr_30887;
})();
var statearr_30888_30927 = state_30868__$1;
(statearr_30888_30927[(2)] = null);

(statearr_30888_30927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (2))){
var inst_30805 = (state_30868[(10)]);
var inst_30805__$1 = (state_30868[(2)]);
var inst_30807 = (inst_30805__$1 == null);
var inst_30808 = cljs.core.not.call(null,inst_30807);
var state_30868__$1 = (function (){var statearr_30889 = state_30868;
(statearr_30889[(10)] = inst_30805__$1);

return statearr_30889;
})();
if(inst_30808){
var statearr_30890_30928 = state_30868__$1;
(statearr_30890_30928[(1)] = (3));

} else {
var statearr_30891_30929 = state_30868__$1;
(statearr_30891_30929[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (23))){
var state_30868__$1 = state_30868;
var statearr_30892_30930 = state_30868__$1;
(statearr_30892_30930[(2)] = false);

(statearr_30892_30930[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (19))){
var inst_30835 = (state_30868[(8)]);
var inst_30842 = inst_30835.cljs$lang$protocol_mask$partition0$;
var inst_30843 = (inst_30842 & (64));
var inst_30844 = inst_30835.cljs$core$ISeq$;
var inst_30845 = (inst_30843) || (inst_30844);
var state_30868__$1 = state_30868;
if(cljs.core.truth_(inst_30845)){
var statearr_30893_30931 = state_30868__$1;
(statearr_30893_30931[(1)] = (22));

} else {
var statearr_30894_30932 = state_30868__$1;
(statearr_30894_30932[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (11))){
var inst_30830 = (state_30868[(7)]);
var inst_30825 = (state_30868[(2)]);
var inst_30826 = cljs.core.get.call(null,inst_30825,new cljs.core.Keyword(null,"time","time",1385887882));
var inst_30827 = cljs.core.get.call(null,inst_30825,new cljs.core.Keyword(null,"width","width",-384071477));
var inst_30828 = cljs.core.get.call(null,inst_30825,new cljs.core.Keyword(null,"height","height",1025178622));
var inst_30829 = cljs.core.get.call(null,inst_30825,new cljs.core.Keyword(null,"stdout","stdout",-531490018));
var inst_30830__$1 = asciinema.player.source.vts_BANG_.call(null,inst_30827,inst_30828,events_ch);
var state_30868__$1 = (function (){var statearr_30895 = state_30868;
(statearr_30895[(7)] = inst_30830__$1);

(statearr_30895[(12)] = inst_30826);

return statearr_30895;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30868__$1,(12),inst_30830__$1,inst_30829);
} else {
if((state_val_30869 === (9))){
var inst_30805 = (state_30868[(10)]);
var inst_30822 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30805);
var state_30868__$1 = state_30868;
var statearr_30896_30933 = state_30868__$1;
(statearr_30896_30933[(2)] = inst_30822);

(statearr_30896_30933[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (5))){
var inst_30820 = (state_30868[(2)]);
var state_30868__$1 = state_30868;
if(cljs.core.truth_(inst_30820)){
var statearr_30897_30934 = state_30868__$1;
(statearr_30897_30934[(1)] = (9));

} else {
var statearr_30898_30935 = state_30868__$1;
(statearr_30898_30935[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (14))){
var inst_30866 = (state_30868[(2)]);
var state_30868__$1 = state_30868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30868__$1,inst_30866);
} else {
if((state_val_30869 === (26))){
var inst_30835 = (state_30868[(8)]);
var state_30868__$1 = state_30868;
var statearr_30899_30936 = state_30868__$1;
(statearr_30899_30936[(2)] = inst_30835);

(statearr_30899_30936[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (16))){
var inst_30835 = (state_30868[(8)]);
var inst_30839 = (inst_30835 == null);
var inst_30840 = cljs.core.not.call(null,inst_30839);
var state_30868__$1 = state_30868;
if(inst_30840){
var statearr_30900_30937 = state_30868__$1;
(statearr_30900_30937[(1)] = (19));

} else {
var statearr_30901_30938 = state_30868__$1;
(statearr_30901_30938[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (10))){
var inst_30805 = (state_30868[(10)]);
var state_30868__$1 = state_30868;
var statearr_30902_30939 = state_30868__$1;
(statearr_30902_30939[(2)] = inst_30805);

(statearr_30902_30939[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (18))){
var inst_30864 = (state_30868[(2)]);
var state_30868__$1 = state_30868;
var statearr_30903_30940 = state_30868__$1;
(statearr_30903_30940[(2)] = inst_30864);

(statearr_30903_30940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (8))){
var inst_30817 = (state_30868[(2)]);
var state_30868__$1 = state_30868;
var statearr_30904_30941 = state_30868__$1;
(statearr_30904_30941[(2)] = inst_30817);

(statearr_30904_30941[(1)] = (5));


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
});})(c__25119__auto__))
;
return ((function (switch__25007__auto__,c__25119__auto__){
return (function() {
var asciinema$player$source$process_es_messages_BANG__$_state_machine__25008__auto__ = null;
var asciinema$player$source$process_es_messages_BANG__$_state_machine__25008__auto____0 = (function (){
var statearr_30908 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30908[(0)] = asciinema$player$source$process_es_messages_BANG__$_state_machine__25008__auto__);

(statearr_30908[(1)] = (1));

return statearr_30908;
});
var asciinema$player$source$process_es_messages_BANG__$_state_machine__25008__auto____1 = (function (state_30868){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_30868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e30909){if((e30909 instanceof Object)){
var ex__25011__auto__ = e30909;
var statearr_30910_30942 = state_30868;
(statearr_30910_30942[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30943 = state_30868;
state_30868 = G__30943;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
asciinema$player$source$process_es_messages_BANG__$_state_machine__25008__auto__ = function(state_30868){
switch(arguments.length){
case 0:
return asciinema$player$source$process_es_messages_BANG__$_state_machine__25008__auto____0.call(this);
case 1:
return asciinema$player$source$process_es_messages_BANG__$_state_machine__25008__auto____1.call(this,state_30868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asciinema$player$source$process_es_messages_BANG__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = asciinema$player$source$process_es_messages_BANG__$_state_machine__25008__auto____0;
asciinema$player$source$process_es_messages_BANG__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = asciinema$player$source$process_es_messages_BANG__$_state_machine__25008__auto____1;
return asciinema$player$source$process_es_messages_BANG__$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto__))
})();
var state__25121__auto__ = (function (){var statearr_30911 = f__25120__auto__.call(null);
(statearr_30911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto__);

return statearr_30911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto__))
);

return c__25119__auto__;
});
asciinema.player.source.start_event_source_BANG_ = (function asciinema$player$source$start_event_source_BANG_(url,events_ch){
var es = (new EventSource(url));
var es_ch = cljs.core.atom.call(null,null);
cljs.core.async.put_BANG_.call(null,events_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),true], null));

es.onopen = ((function (es,es_ch){
return (function (){
var command_ch = cljs.core.async.chan.call(null,(10000),cljs.core.map.call(null,asciinema.player.source.es_message));
cljs.core.reset_BANG_.call(null,es_ch,command_ch);

asciinema.player.source.process_es_messages_BANG_.call(null,command_ch,events_ch);

cljs.core.async.put_BANG_.call(null,events_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing","playing",70013335),true], null));

return cljs.core.async.put_BANG_.call(null,events_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),false], null));
});})(es,es_ch))
;

es.onerror = ((function (es,es_ch){
return (function (err){
cljs.core.async.close_BANG_.call(null,cljs.core.deref.call(null,es_ch));

cljs.core.reset_BANG_.call(null,es_ch,null);

return cljs.core.async.put_BANG_.call(null,events_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),true], null));
});})(es,es_ch))
;

return es.onmessage = ((function (es,es_ch){
return (function (event){
var temp__4425__auto__ = cljs.core.deref.call(null,es_ch);
if(cljs.core.truth_(temp__4425__auto__)){
var command_ch = temp__4425__auto__;
return cljs.core.async.put_BANG_.call(null,command_ch,event.data);
} else {
return null;
}
});})(es,es_ch))
;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {asciinema.player.source.Source}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
asciinema.player.source.StreamSource = (function (events_ch,url,auto_play_QMARK_,started_QMARK_,__meta,__extmap,__hash){
this.events_ch = events_ch;
this.url = url;
this.auto_play_QMARK_ = auto_play_QMARK_;
this.started_QMARK_ = started_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
asciinema.player.source.StreamSource.prototype.asciinema$player$source$Source$ = true;

asciinema.player.source.StreamSource.prototype.asciinema$player$source$Source$init$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.auto_play_QMARK_)){
return asciinema.player.source.start.call(null,this$__$1);
} else {
return null;
}
});

asciinema.player.source.StreamSource.prototype.asciinema$player$source$Source$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.started_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,self__.started_QMARK_,true);

return asciinema.player.source.start_event_source_BANG_.call(null,self__.url,self__.events_ch);
}
});

asciinema.player.source.StreamSource.prototype.asciinema$player$source$Source$stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

asciinema.player.source.StreamSource.prototype.asciinema$player$source$Source$toggle$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return asciinema.player.source.start.call(null,this$__$1);
});

asciinema.player.source.StreamSource.prototype.asciinema$player$source$Source$seek$arity$2 = (function (this$,position){
var self__ = this;
var this$__$1 = this;
return null;
});

asciinema.player.source.StreamSource.prototype.asciinema$player$source$Source$change_speed$arity$2 = (function (this$,speed){
var self__ = this;
var this$__$1 = this;
return null;
});

asciinema.player.source.StreamSource.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19402__auto__,k__19403__auto__){
var self__ = this;
var this__19402__auto____$1 = this;
return cljs.core._lookup.call(null,this__19402__auto____$1,k__19403__auto__,null);
});

asciinema.player.source.StreamSource.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19404__auto__,k30945,else__19405__auto__){
var self__ = this;
var this__19404__auto____$1 = this;
var G__30947 = (((k30945 instanceof cljs.core.Keyword))?k30945.fqn:null);
switch (G__30947) {
case "events-ch":
return self__.events_ch;

break;
case "url":
return self__.url;

break;
case "auto-play?":
return self__.auto_play_QMARK_;

break;
case "started?":
return self__.started_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30945,else__19405__auto__);

}
});

asciinema.player.source.StreamSource.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19416__auto__,writer__19417__auto__,opts__19418__auto__){
var self__ = this;
var this__19416__auto____$1 = this;
var pr_pair__19419__auto__ = ((function (this__19416__auto____$1){
return (function (keyval__19420__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19417__auto__,cljs.core.pr_writer,""," ","",opts__19418__auto__,keyval__19420__auto__);
});})(this__19416__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19417__auto__,pr_pair__19419__auto__,"#asciinema.player.source.StreamSource{",", ","}",opts__19418__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"events-ch","events-ch",-763395991),self__.events_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451),self__.auto_play_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started?","started?",-1301062863),self__.started_QMARK_],null))], null),self__.__extmap));
});

asciinema.player.source.StreamSource.prototype.cljs$core$IIterable$ = true;

asciinema.player.source.StreamSource.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30944){
var self__ = this;
var G__30944__$1 = this;
return (new cljs.core.RecordIter((0),G__30944__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events-ch","events-ch",-763395991),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451),new cljs.core.Keyword(null,"started?","started?",-1301062863)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

asciinema.player.source.StreamSource.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19400__auto__){
var self__ = this;
var this__19400__auto____$1 = this;
return self__.__meta;
});

asciinema.player.source.StreamSource.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19396__auto__){
var self__ = this;
var this__19396__auto____$1 = this;
return (new asciinema.player.source.StreamSource(self__.events_ch,self__.url,self__.auto_play_QMARK_,self__.started_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

asciinema.player.source.StreamSource.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19406__auto__){
var self__ = this;
var this__19406__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

asciinema.player.source.StreamSource.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19397__auto__){
var self__ = this;
var this__19397__auto____$1 = this;
var h__19223__auto__ = self__.__hash;
if(!((h__19223__auto__ == null))){
return h__19223__auto__;
} else {
var h__19223__auto____$1 = cljs.core.hash_imap.call(null,this__19397__auto____$1);
self__.__hash = h__19223__auto____$1;

return h__19223__auto____$1;
}
});

asciinema.player.source.StreamSource.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19398__auto__,other__19399__auto__){
var self__ = this;
var this__19398__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18776__auto__ = other__19399__auto__;
if(cljs.core.truth_(and__18776__auto__)){
var and__18776__auto____$1 = (this__19398__auto____$1.constructor === other__19399__auto__.constructor);
if(and__18776__auto____$1){
return cljs.core.equiv_map.call(null,this__19398__auto____$1,other__19399__auto__);
} else {
return and__18776__auto____$1;
}
} else {
return and__18776__auto__;
}
})())){
return true;
} else {
return false;
}
});

asciinema.player.source.StreamSource.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19411__auto__,k__19412__auto__){
var self__ = this;
var this__19411__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"events-ch","events-ch",-763395991),null,new cljs.core.Keyword(null,"started?","started?",-1301062863),null,new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451),null,new cljs.core.Keyword(null,"url","url",276297046),null], null), null),k__19412__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19411__auto____$1),self__.__meta),k__19412__auto__);
} else {
return (new asciinema.player.source.StreamSource(self__.events_ch,self__.url,self__.auto_play_QMARK_,self__.started_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19412__auto__)),null));
}
});

asciinema.player.source.StreamSource.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19409__auto__,k__19410__auto__,G__30944){
var self__ = this;
var this__19409__auto____$1 = this;
var pred__30948 = cljs.core.keyword_identical_QMARK_;
var expr__30949 = k__19410__auto__;
if(cljs.core.truth_(pred__30948.call(null,new cljs.core.Keyword(null,"events-ch","events-ch",-763395991),expr__30949))){
return (new asciinema.player.source.StreamSource(G__30944,self__.url,self__.auto_play_QMARK_,self__.started_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30948.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__30949))){
return (new asciinema.player.source.StreamSource(self__.events_ch,G__30944,self__.auto_play_QMARK_,self__.started_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30948.call(null,new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451),expr__30949))){
return (new asciinema.player.source.StreamSource(self__.events_ch,self__.url,G__30944,self__.started_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30948.call(null,new cljs.core.Keyword(null,"started?","started?",-1301062863),expr__30949))){
return (new asciinema.player.source.StreamSource(self__.events_ch,self__.url,self__.auto_play_QMARK_,G__30944,self__.__meta,self__.__extmap,null));
} else {
return (new asciinema.player.source.StreamSource(self__.events_ch,self__.url,self__.auto_play_QMARK_,self__.started_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19410__auto__,G__30944),null));
}
}
}
}
});

asciinema.player.source.StreamSource.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19414__auto__){
var self__ = this;
var this__19414__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"events-ch","events-ch",-763395991),self__.events_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451),self__.auto_play_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started?","started?",-1301062863),self__.started_QMARK_],null))], null),self__.__extmap));
});

asciinema.player.source.StreamSource.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19401__auto__,G__30944){
var self__ = this;
var this__19401__auto____$1 = this;
return (new asciinema.player.source.StreamSource(self__.events_ch,self__.url,self__.auto_play_QMARK_,self__.started_QMARK_,G__30944,self__.__extmap,self__.__hash));
});

asciinema.player.source.StreamSource.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19407__auto__,entry__19408__auto__){
var self__ = this;
var this__19407__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19408__auto__)){
return cljs.core._assoc.call(null,this__19407__auto____$1,cljs.core._nth.call(null,entry__19408__auto__,(0)),cljs.core._nth.call(null,entry__19408__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19407__auto____$1,entry__19408__auto__);
}
});

asciinema.player.source.StreamSource.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"events-ch","events-ch",877135536,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"auto-play?","auto-play?",2025809978,null),new cljs.core.Symbol(null,"started?","started?",339468664,null)], null);
});

asciinema.player.source.StreamSource.cljs$lang$type = true;

asciinema.player.source.StreamSource.cljs$lang$ctorPrSeq = (function (this__19436__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"asciinema.player.source/StreamSource");
});

asciinema.player.source.StreamSource.cljs$lang$ctorPrWriter = (function (this__19436__auto__,writer__19437__auto__){
return cljs.core._write.call(null,writer__19437__auto__,"asciinema.player.source/StreamSource");
});

asciinema.player.source.__GT_StreamSource = (function asciinema$player$source$__GT_StreamSource(events_ch,url,auto_play_QMARK_,started_QMARK_){
return (new asciinema.player.source.StreamSource(events_ch,url,auto_play_QMARK_,started_QMARK_,null,null,null));
});

asciinema.player.source.map__GT_StreamSource = (function asciinema$player$source$map__GT_StreamSource(G__30946){
return (new asciinema.player.source.StreamSource(new cljs.core.Keyword(null,"events-ch","events-ch",-763395991).cljs$core$IFn$_invoke$arity$1(G__30946),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__30946),new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451).cljs$core$IFn$_invoke$arity$1(G__30946),new cljs.core.Keyword(null,"started?","started?",-1301062863).cljs$core$IFn$_invoke$arity$1(G__30946),null,cljs.core.dissoc.call(null,G__30946,new cljs.core.Keyword(null,"events-ch","events-ch",-763395991),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"auto-play?","auto-play?",385278451),new cljs.core.Keyword(null,"started?","started?",-1301062863)),null));
});

cljs.core._add_method.call(null,asciinema.player.source.make_source,new cljs.core.Keyword(null,"stream","stream",1534941648),(function (type,events_ch,url,width_hint,height_hint,initial_start_at,initial_speed,auto_play_QMARK_,loop_QMARK_,preload_QMARK_){
return asciinema.player.source.__GT_StreamSource.call(null,events_ch,url,auto_play_QMARK_,cljs.core.atom.call(null,false));
}));

//# sourceMappingURL=source.js.map