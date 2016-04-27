// Compiled by ClojureScript 1.7.170 {}
goog.provide('asciinema.player.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('asciinema.player.vt');
goog.require('asciinema.player.view');
goog.require('asciinema.player.raf');
goog.require('cljs.core.async');
goog.require('asciinema.player.util');
goog.require('asciinema.player.source');
goog.require('clojure.string');
asciinema.player.core.parse_npt = (function asciinema$player$core$parse_npt(t){
if(typeof t === 'number'){
return t;
} else {
var numbers = cljs.core.map.call(null,parseFloat,clojure.string.split.call(null,t,/:/));
var components = cljs.core.map.call(null,cljs.core._STAR_,cljs.core.reverse.call(null,numbers),cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(60)),(1)));
return cljs.core.apply.call(null,cljs.core._PLUS_,components);
}
});
asciinema.player.core.parse_json_poster = (function asciinema$player$core$parse_json_poster(poster){
return cljs.core.js__GT_clj.call(null,JSON.parse(atob(poster.replace((new RegExp("\\s","g")),""))),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
asciinema.player.core.parse_text_poster = (function asciinema$player$core$parse_text_poster(text,width,height){
return asciinema.player.vt.compact_lines.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(asciinema.player.vt.feed_str.call(null,asciinema.player.vt.make_vt.call(null,width,height),text)));
});
asciinema.player.core.parse_poster = (function asciinema$player$core$parse_poster(poster,width,height){
if(typeof poster === 'string'){
var pred__30959 = (function (p1__30955_SHARP_,p2__30954_SHARP_){
return cljs.core._EQ_.call(null,p2__30954_SHARP_.indexOf(p1__30955_SHARP_),(0));
});
var expr__30960 = poster;
if(cljs.core.truth_(pred__30959.call(null,"data:application/json;base64,",expr__30960))){
return asciinema.player.core.parse_json_poster.call(null,poster.substring((29)));
} else {
if(cljs.core.truth_(pred__30959.call(null,"data:text/plain,",expr__30960))){
return asciinema.player.core.parse_text_poster.call(null,poster.substring((16)),width,height);
} else {
return null;
}
}
} else {
return poster;
}
});
/**
 * Builds initial player for given URL and options.
 */
asciinema.player.core.make_player = (function asciinema$player$core$make_player(url,p__30962){
var map__30965 = p__30962;
var map__30965__$1 = ((((!((map__30965 == null)))?((((map__30965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30965):map__30965);
var options = map__30965__$1;
var height = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var font_size = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"small");
var speed = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"speed","speed",1257663751),(1));
var start_at = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"start-at","start-at",-103334680));
var width = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var type = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"asciicast","asciicast",509526949));
var loop = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"loop","loop",-395552849));
var theme = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880),"asciinema");
var poster = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"poster","poster",-1616913550));
var preload = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"preload","preload",1646824722));
var auto_play = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"auto-play","auto-play",-645319501));
var start_at__$1 = asciinema.player.core.parse_npt.call(null,(function (){var or__18788__auto__ = start_at;
if(cljs.core.truth_(or__18788__auto__)){
return or__18788__auto__;
} else {
return (0);
}
})());
var events_ch = cljs.core.async.chan.call(null);
var vt_width = (function (){var or__18788__auto__ = width;
if(cljs.core.truth_(or__18788__auto__)){
return or__18788__auto__;
} else {
return (80);
}
})();
var vt_height = (function (){var or__18788__auto__ = height;
if(cljs.core.truth_(or__18788__auto__)){
return or__18788__auto__;
} else {
return (24);
}
})();
var source = asciinema.player.source.make_source.call(null,type,events_ch,url,vt_width,vt_height,start_at__$1,speed,auto_play,loop,preload);
return cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"current-time","current-time",-1609407134),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"show-hud","show-hud",1983299752),new cljs.core.Keyword(null,"events-ch","events-ch",-763395991),new cljs.core.Keyword(null,"loaded","loaded",-1246482293),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"cursor-blink-ch","cursor-blink-ch",1063651214),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"height","height",1025178622)],[start_at__$1,font_size,speed,false,events_ch,false,width,(function (){var or__18788__auto__ = asciinema.player.core.parse_poster.call(null,poster,vt_width,vt_height);
if(cljs.core.truth_(or__18788__auto__)){
return or__18788__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible","visible",-1024216805),false], null),null,source,null,theme,false,false,height]),cljs.core.select_keys.call(null,options,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"author-url","author-url",1091920533),new cljs.core.Keyword(null,"author-img-url","author-img-url",2016975920)], null)));
});
/**
 * Returns Reagent atom with initial player state.
 */
asciinema.player.core.make_player_ratom = (function asciinema$player$core$make_player_ratom(var_args){
var args__19853__auto__ = [];
var len__19846__auto___30968 = arguments.length;
var i__19847__auto___30969 = (0);
while(true){
if((i__19847__auto___30969 < len__19846__auto___30968)){
args__19853__auto__.push((arguments[i__19847__auto___30969]));

var G__30970 = (i__19847__auto___30969 + (1));
i__19847__auto___30969 = G__30970;
continue;
} else {
}
break;
}

var argseq__19854__auto__ = ((((0) < args__19853__auto__.length))?(new cljs.core.IndexedSeq(args__19853__auto__.slice((0)),(0))):null);
return asciinema.player.core.make_player_ratom.cljs$core$IFn$_invoke$arity$variadic(argseq__19854__auto__);
});

asciinema.player.core.make_player_ratom.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return reagent.core.atom.call(null,cljs.core.apply.call(null,asciinema.player.core.make_player,args));
});

asciinema.player.core.make_player_ratom.cljs$lang$maxFixedArity = (0);

asciinema.player.core.make_player_ratom.cljs$lang$applyTo = (function (seq30967){
return asciinema.player.core.make_player_ratom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30967));
});
asciinema.player.core.dispatch = (function asciinema$player$core$dispatch(player,event){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"events-ch","events-ch",-763395991).cljs$core$IFn$_invoke$arity$1(player),event);
});
/**
 * Extracts screen state (line content and cursor attributes) from given payload
 *   (a ref, possibly a delay) and applies it to player.
 */
asciinema.player.core.update_screen = (function asciinema$player$core$update_screen(player,screen){
var map__30973 = screen;
var map__30973__$1 = ((((!((map__30973 == null)))?((((map__30973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30973):map__30973);
var lines = cljs.core.get.call(null,map__30973__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var cursor = cljs.core.get.call(null,map__30973__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,player,new cljs.core.Keyword(null,"lines","lines",-700165781),lines),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484)], null),cljs.core.merge,cursor);
});
/**
 * Infinite seq of cursor blinks.
 */
asciinema.player.core.blinks = cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,true], null)], null));
asciinema.player.core.start_blinking = (function asciinema$player$core$start_blinking(p__30975){
var map__30978 = p__30975;
var map__30978__$1 = ((((!((map__30978 == null)))?((((map__30978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30978):map__30978);
var player = map__30978__$1;
var events_ch = cljs.core.get.call(null,map__30978__$1,new cljs.core.Keyword(null,"events-ch","events-ch",-763395991));
var cursor_blink_ch = cljs.core.async.chan.call(null);
asciinema.player.source.emit_events.call(null,new cljs.core.Keyword(null,"blink","blink",-271985917),asciinema.player.core.blinks,cljs.core.identity,events_ch,cursor_blink_ch);

return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"on","on",173873944)], null),true),new cljs.core.Keyword(null,"cursor-blink-ch","cursor-blink-ch",1063651214),cursor_blink_ch);
});
asciinema.player.core.stop_blinking = (function asciinema$player$core$stop_blinking(p__30980){
var map__30983 = p__30980;
var map__30983__$1 = ((((!((map__30983 == null)))?((((map__30983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30983):map__30983);
var player = map__30983__$1;
var cursor_blink_ch = cljs.core.get.call(null,map__30983__$1,new cljs.core.Keyword(null,"cursor-blink-ch","cursor-blink-ch",1063651214));
cljs.core.async.close_BANG_.call(null,cursor_blink_ch);

return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"on","on",173873944)], null),true),new cljs.core.Keyword(null,"cursor-blink-ch","cursor-blink-ch",1063651214),null);
});
asciinema.player.core.restart_blinking = (function asciinema$player$core$restart_blinking(p__30985){
var map__30988 = p__30985;
var map__30988__$1 = ((((!((map__30988 == null)))?((((map__30988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30988):map__30988);
var player = map__30988__$1;
var cursor_blink_ch = cljs.core.get.call(null,map__30988__$1,new cljs.core.Keyword(null,"cursor-blink-ch","cursor-blink-ch",1063651214));
if(cljs.core.truth_(cursor_blink_ch)){
return asciinema.player.core.start_blinking.call(null,asciinema.player.core.stop_blinking.call(null,player));
} else {
return player;
}
});
/**
 * Toggles the playback on the source.
 */
asciinema.player.core.handle_toggle_play = (function asciinema$player$core$handle_toggle_play(p__30990){
var map__30993 = p__30990;
var map__30993__$1 = ((((!((map__30993 == null)))?((((map__30993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30993):map__30993);
var player = map__30993__$1;
var source = cljs.core.get.call(null,map__30993__$1,new cljs.core.Keyword(null,"source","source",-433931539));
asciinema.player.source.toggle.call(null,source);

return player;
});
/**
 * Jumps to a given position (in seconds).
 */
asciinema.player.core.handle_seek = (function asciinema$player$core$handle_seek(p__30995,p__30996){
var map__31000 = p__30995;
var map__31000__$1 = ((((!((map__31000 == null)))?((((map__31000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31000):map__31000);
var player = map__31000__$1;
var duration = cljs.core.get.call(null,map__31000__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var source = cljs.core.get.call(null,map__31000__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var vec__31001 = p__30996;
var position = cljs.core.nth.call(null,vec__31001,(0),null);
if(cljs.core.truth_(duration)){
var new_time_31003 = (position * duration);
asciinema.player.source.seek.call(null,source,new_time_31003);
} else {
}

return player;
});
/**
 * Returns time adjusted by given offset, clipped to the range 0..total-time.
 */
asciinema.player.core.new_start_at = (function asciinema$player$core$new_start_at(current_time,total_time,offset){
return asciinema.player.util.adjust_to_range.call(null,(current_time + offset),(0),total_time);
});
/**
 * Rewinds the playback by 5 seconds.
 */
asciinema.player.core.handle_rewind = (function asciinema$player$core$handle_rewind(p__31004){
var map__31007 = p__31004;
var map__31007__$1 = ((((!((map__31007 == null)))?((((map__31007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31007):map__31007);
var player = map__31007__$1;
var current_time = cljs.core.get.call(null,map__31007__$1,new cljs.core.Keyword(null,"current-time","current-time",-1609407134));
var duration = cljs.core.get.call(null,map__31007__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var source = cljs.core.get.call(null,map__31007__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if(cljs.core.truth_(duration)){
var new_time_31009 = asciinema.player.core.new_start_at.call(null,current_time,duration,(-5));
asciinema.player.source.seek.call(null,source,new_time_31009);
} else {
}

return player;
});
/**
 * Fast-forwards the playback by 5 seconds.
 */
asciinema.player.core.handle_fast_forward = (function asciinema$player$core$handle_fast_forward(p__31010){
var map__31013 = p__31010;
var map__31013__$1 = ((((!((map__31013 == null)))?((((map__31013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31013):map__31013);
var player = map__31013__$1;
var current_time = cljs.core.get.call(null,map__31013__$1,new cljs.core.Keyword(null,"current-time","current-time",-1609407134));
var duration = cljs.core.get.call(null,map__31013__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var source = cljs.core.get.call(null,map__31013__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if(cljs.core.truth_(duration)){
var new_time_31015 = asciinema.player.core.new_start_at.call(null,current_time,duration,(5));
asciinema.player.source.seek.call(null,source,new_time_31015);
} else {
}

return player;
});
asciinema.player.core.speed_up = (function asciinema$player$core$speed_up(speed){
return (speed * (2));
});
asciinema.player.core.speed_down = (function asciinema$player$core$speed_down(speed){
return (speed / (2));
});
/**
 * Alters the speed of the playback to the result of applying change-fn to the
 *   current speed.
 */
asciinema.player.core.handle_speed_change = (function asciinema$player$core$handle_speed_change(change_fn,p__31016){
var map__31019 = p__31016;
var map__31019__$1 = ((((!((map__31019 == null)))?((((map__31019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31019):map__31019);
var player = map__31019__$1;
var playing = cljs.core.get.call(null,map__31019__$1,new cljs.core.Keyword(null,"playing","playing",70013335));
var speed = cljs.core.get.call(null,map__31019__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var source = cljs.core.get.call(null,map__31019__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var new_speed = change_fn.call(null,speed);
asciinema.player.source.change_speed.call(null,source,new_speed);

return cljs.core.assoc.call(null,player,new cljs.core.Keyword(null,"speed","speed",1257663751),new_speed);
});
/**
 * Updates screen with given lines/cursor and resets cursor blinking.
 */
asciinema.player.core.handle_screen = (function asciinema$player$core$handle_screen(player,p__31021){
var vec__31023 = p__31021;
var screen = cljs.core.nth.call(null,vec__31023,(0),null);
return asciinema.player.core.restart_blinking.call(null,asciinema.player.core.update_screen.call(null,player,screen));
});
/**
 * Shows/hides loading indicator.
 */
asciinema.player.core.handle_loading = (function asciinema$player$core$handle_loading(player,p__31024){
var vec__31026 = p__31024;
var loading_QMARK_ = cljs.core.nth.call(null,vec__31026,(0),null);
return cljs.core.assoc.call(null,player,new cljs.core.Keyword(null,"loading","loading",-737050189),loading_QMARK_);
});
/**
 * Toggle the play/pause button and start/stops cursor blinking.
 */
asciinema.player.core.handle_playing = (function asciinema$player$core$handle_playing(player,p__31027){
var vec__31029 = p__31027;
var playing_QMARK_ = cljs.core.nth.call(null,vec__31029,(0),null);
var player__$1 = cljs.core.assoc.call(null,player,new cljs.core.Keyword(null,"playing","playing",70013335),playing_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);
if(cljs.core.truth_(playing_QMARK_)){
return asciinema.player.core.start_blinking.call(null,player__$1);
} else {
return asciinema.player.core.stop_blinking.call(null,player__$1);
}
});
/**
 * Shows or hides the cursor block.
 */
asciinema.player.core.handle_blink = (function asciinema$player$core$handle_blink(player,p__31030){
var vec__31032 = p__31030;
var cursor_on_QMARK_ = cljs.core.nth.call(null,vec__31032,(0),null);
return cljs.core.assoc_in.call(null,player,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"on","on",173873944)], null),cursor_on_QMARK_);
});
/**
 * Updates player's current time (as displayed in control bar).
 */
asciinema.player.core.handle_time = (function asciinema$player$core$handle_time(player,p__31033){
var vec__31035 = p__31033;
var t = cljs.core.nth.call(null,vec__31035,(0),null);
return cljs.core.assoc.call(null,player,new cljs.core.Keyword(null,"current-time","current-time",-1609407134),t);
});
/**
 * Sets the total playback time.
 */
asciinema.player.core.handle_duration = (function asciinema$player$core$handle_duration(player,p__31036){
var vec__31038 = p__31036;
var d = cljs.core.nth.call(null,vec__31038,(0),null);
return cljs.core.assoc.call(null,player,new cljs.core.Keyword(null,"duration","duration",1444101068),d);
});
/**
 * Sets player's width and height if not already set.
 */
asciinema.player.core.handle_size = (function asciinema$player$core$handle_size(p__31039,p__31040){
var map__31044 = p__31039;
var map__31044__$1 = ((((!((map__31044 == null)))?((((map__31044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31044):map__31044);
var player = map__31044__$1;
var player_width = cljs.core.get.call(null,map__31044__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var player_height = cljs.core.get.call(null,map__31044__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var vec__31045 = p__31040;
var width = cljs.core.nth.call(null,vec__31045,(0),null);
var height = cljs.core.nth.call(null,vec__31045,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,player,new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__18788__auto__ = player_width;
if(cljs.core.truth_(or__18788__auto__)){
return or__18788__auto__;
} else {
return width;
}
})()),new cljs.core.Keyword(null,"height","height",1025178622),(function (){var or__18788__auto__ = player_height;
if(cljs.core.truth_(or__18788__auto__)){
return or__18788__auto__;
} else {
return height;
}
})());
});
asciinema.player.core.event_handlers = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fast-forward","fast-forward",703093475),new cljs.core.Keyword(null,"blink","blink",-271985917),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"speed-down","speed-down",-1024390712),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"rewind","rewind",-669264915),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"toggle-play","toggle-play",-1781648392),new cljs.core.Keyword(null,"seek","seek",758996602),new cljs.core.Keyword(null,"speed-up","speed-up",947171774)],[asciinema.player.core.handle_fast_forward,asciinema.player.core.handle_blink,asciinema.player.core.handle_screen,cljs.core.partial.call(null,asciinema.player.core.handle_speed_change,asciinema.player.core.speed_down),asciinema.player.core.handle_time,asciinema.player.core.handle_duration,asciinema.player.core.handle_rewind,asciinema.player.core.handle_size,asciinema.player.core.handle_loading,asciinema.player.core.handle_playing,asciinema.player.core.handle_toggle_play,asciinema.player.core.handle_seek,cljs.core.partial.call(null,asciinema.player.core.handle_speed_change,asciinema.player.core.speed_up)]);
/**
 * Finds handler for the given event and applies it to the player.
 */
asciinema.player.core.process_event = (function asciinema$player$core$process_event(player,p__31047){
var vec__31049 = p__31047;
var event_name = cljs.core.nth.call(null,vec__31049,(0),null);
var args = cljs.core.nthnext.call(null,vec__31049,(1));
var temp__4423__auto__ = cljs.core.get.call(null,asciinema.player.core.event_handlers,event_name);
if(cljs.core.truth_(temp__4423__auto__)){
var handler = temp__4423__auto__;
return handler.call(null,player,args);
} else {
cljs.core.print.call(null,"unhandled event:",event_name);

return player;
}
});
/**
 * Converts given channel into an activity indicator channel. The resulting
 *   channel emits false when there are no reads on input channel within msec, then
 *   true when new values show up on input, then false again after msec without
 *   reads on input, and so on.
 */
asciinema.player.core.activity_chan = (function asciinema$player$core$activity_chan(input,msec){
var out = cljs.core.async.chan.call(null);
var c__25119__auto___31152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___31152,out){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___31152,out){
return (function (state_31130){
var state_val_31131 = (state_31130[(1)]);
if((state_val_31131 === (7))){
var inst_31123 = (state_31130[(2)]);
var state_31130__$1 = (function (){var statearr_31132 = state_31130;
(statearr_31132[(7)] = inst_31123);

return statearr_31132;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31130__$1,(12),out,false);
} else {
if((state_val_31131 === (1))){
var state_31130__$1 = state_31130;
var statearr_31133_31153 = state_31130__$1;
(statearr_31133_31153[(2)] = null);

(statearr_31133_31153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (4))){
var inst_31103 = (state_31130[(2)]);
var state_31130__$1 = (function (){var statearr_31134 = state_31130;
(statearr_31134[(8)] = inst_31103);

return statearr_31134;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31130__$1,(5),out,true);
} else {
if((state_val_31131 === (6))){
var inst_31108 = cljs.core.async.timeout.call(null,msec);
var inst_31109 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31110 = [input,inst_31108];
var inst_31111 = (new cljs.core.PersistentVector(null,2,(5),inst_31109,inst_31110,null));
var state_31130__$1 = state_31130;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31130__$1,(8),inst_31111);
} else {
if((state_val_31131 === (3))){
var inst_31128 = (state_31130[(2)]);
var state_31130__$1 = state_31130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31130__$1,inst_31128);
} else {
if((state_val_31131 === (12))){
var inst_31125 = (state_31130[(2)]);
var state_31130__$1 = (function (){var statearr_31135 = state_31130;
(statearr_31135[(9)] = inst_31125);

return statearr_31135;
})();
var statearr_31136_31154 = state_31130__$1;
(statearr_31136_31154[(2)] = null);

(statearr_31136_31154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (2))){
var state_31130__$1 = state_31130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31130__$1,(4),input);
} else {
if((state_val_31131 === (11))){
var inst_31121 = (state_31130[(2)]);
var state_31130__$1 = state_31130;
var statearr_31137_31155 = state_31130__$1;
(statearr_31137_31155[(2)] = inst_31121);

(statearr_31137_31155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (9))){
var state_31130__$1 = state_31130;
var statearr_31138_31156 = state_31130__$1;
(statearr_31138_31156[(2)] = null);

(statearr_31138_31156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (5))){
var inst_31105 = (state_31130[(2)]);
var state_31130__$1 = (function (){var statearr_31139 = state_31130;
(statearr_31139[(10)] = inst_31105);

return statearr_31139;
})();
var statearr_31140_31157 = state_31130__$1;
(statearr_31140_31157[(2)] = null);

(statearr_31140_31157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (10))){
var state_31130__$1 = state_31130;
var statearr_31141_31158 = state_31130__$1;
(statearr_31141_31158[(2)] = null);

(statearr_31141_31158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31131 === (8))){
var inst_31113 = (state_31130[(2)]);
var inst_31114 = cljs.core.nth.call(null,inst_31113,(0),null);
var inst_31115 = cljs.core.nth.call(null,inst_31113,(1),null);
var inst_31116 = cljs.core._EQ_.call(null,inst_31115,input);
var state_31130__$1 = (function (){var statearr_31142 = state_31130;
(statearr_31142[(11)] = inst_31114);

return statearr_31142;
})();
if(inst_31116){
var statearr_31143_31159 = state_31130__$1;
(statearr_31143_31159[(1)] = (9));

} else {
var statearr_31144_31160 = state_31130__$1;
(statearr_31144_31160[(1)] = (10));

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
});})(c__25119__auto___31152,out))
;
return ((function (switch__25007__auto__,c__25119__auto___31152,out){
return (function() {
var asciinema$player$core$activity_chan_$_state_machine__25008__auto__ = null;
var asciinema$player$core$activity_chan_$_state_machine__25008__auto____0 = (function (){
var statearr_31148 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31148[(0)] = asciinema$player$core$activity_chan_$_state_machine__25008__auto__);

(statearr_31148[(1)] = (1));

return statearr_31148;
});
var asciinema$player$core$activity_chan_$_state_machine__25008__auto____1 = (function (state_31130){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_31130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e31149){if((e31149 instanceof Object)){
var ex__25011__auto__ = e31149;
var statearr_31150_31161 = state_31130;
(statearr_31150_31161[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31162 = state_31130;
state_31130 = G__31162;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
asciinema$player$core$activity_chan_$_state_machine__25008__auto__ = function(state_31130){
switch(arguments.length){
case 0:
return asciinema$player$core$activity_chan_$_state_machine__25008__auto____0.call(this);
case 1:
return asciinema$player$core$activity_chan_$_state_machine__25008__auto____1.call(this,state_31130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asciinema$player$core$activity_chan_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = asciinema$player$core$activity_chan_$_state_machine__25008__auto____0;
asciinema$player$core$activity_chan_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = asciinema$player$core$activity_chan_$_state_machine__25008__auto____1;
return asciinema$player$core$activity_chan_$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___31152,out))
})();
var state__25121__auto__ = (function (){var statearr_31151 = f__25120__auto__.call(null);
(statearr_31151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___31152);

return statearr_31151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___31152,out))
);


return out;
});
/**
 * Starts event processing loop. It handles both internal and user triggered
 *   events. Updates Reagent atom with the result of event handler.
 */
asciinema.player.core.start_event_loop_BANG_ = (function asciinema$player$core$start_event_loop_BANG_(player_atom){
var events_ch = new cljs.core.Keyword(null,"events-ch","events-ch",-763395991).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player_atom));
var mouse_moves_ch = cljs.core.async.chan.call(null,cljs.core.async.dropping_buffer.call(null,(1)));
var user_activity_ch = asciinema.player.core.activity_chan.call(null,mouse_moves_ch,(3000));
var c__25119__auto___31299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto___31299,events_ch,mouse_moves_ch,user_activity_ch){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto___31299,events_ch,mouse_moves_ch,user_activity_ch){
return (function (state_31252){
var state_val_31253 = (state_31252[(1)]);
if((state_val_31253 === (1))){
var state_31252__$1 = state_31252;
var statearr_31254_31300 = state_31252__$1;
(statearr_31254_31300[(2)] = null);

(statearr_31254_31300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (2))){
var state_31252__$1 = state_31252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31252__$1,(4),events_ch);
} else {
if((state_val_31253 === (3))){
var inst_31250 = (state_31252[(2)]);
var state_31252__$1 = state_31252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31252__$1,inst_31250);
} else {
if((state_val_31253 === (4))){
var inst_31234 = (state_31252[(7)]);
var inst_31234__$1 = (state_31252[(2)]);
var inst_31235 = cljs.core.nth.call(null,inst_31234__$1,(0),null);
var inst_31236 = cljs.core.nthnext.call(null,inst_31234__$1,(1));
var inst_31240 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),inst_31235);
var state_31252__$1 = (function (){var statearr_31255 = state_31252;
(statearr_31255[(8)] = inst_31236);

(statearr_31255[(7)] = inst_31234__$1);

return statearr_31255;
})();
if(inst_31240){
var statearr_31256_31301 = state_31252__$1;
(statearr_31256_31301[(1)] = (5));

} else {
var statearr_31257_31302 = state_31252__$1;
(statearr_31257_31302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (5))){
var state_31252__$1 = state_31252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31252__$1,(8),mouse_moves_ch,true);
} else {
if((state_val_31253 === (6))){
var inst_31234 = (state_31252[(7)]);
var inst_31245 = cljs.core.swap_BANG_.call(null,player_atom,asciinema.player.core.process_event,inst_31234);
var state_31252__$1 = state_31252;
var statearr_31258_31303 = state_31252__$1;
(statearr_31258_31303[(2)] = inst_31245);

(statearr_31258_31303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (7))){
var inst_31247 = (state_31252[(2)]);
var state_31252__$1 = (function (){var statearr_31259 = state_31252;
(statearr_31259[(9)] = inst_31247);

return statearr_31259;
})();
var statearr_31260_31304 = state_31252__$1;
(statearr_31260_31304[(2)] = null);

(statearr_31260_31304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (8))){
var inst_31243 = (state_31252[(2)]);
var state_31252__$1 = state_31252;
var statearr_31261_31305 = state_31252__$1;
(statearr_31261_31305[(2)] = inst_31243);

(statearr_31261_31305[(1)] = (7));


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
});})(c__25119__auto___31299,events_ch,mouse_moves_ch,user_activity_ch))
;
return ((function (switch__25007__auto__,c__25119__auto___31299,events_ch,mouse_moves_ch,user_activity_ch){
return (function() {
var asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto__ = null;
var asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto____0 = (function (){
var statearr_31265 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31265[(0)] = asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto__);

(statearr_31265[(1)] = (1));

return statearr_31265;
});
var asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto____1 = (function (state_31252){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_31252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e31266){if((e31266 instanceof Object)){
var ex__25011__auto__ = e31266;
var statearr_31267_31306 = state_31252;
(statearr_31267_31306[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31307 = state_31252;
state_31252 = G__31307;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto__ = function(state_31252){
switch(arguments.length){
case 0:
return asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto____0.call(this);
case 1:
return asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto____1.call(this,state_31252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto____0;
asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto____1;
return asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto___31299,events_ch,mouse_moves_ch,user_activity_ch))
})();
var state__25121__auto__ = (function (){var statearr_31268 = f__25120__auto__.call(null);
(statearr_31268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto___31299);

return statearr_31268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto___31299,events_ch,mouse_moves_ch,user_activity_ch))
);


var c__25119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto__,events_ch,mouse_moves_ch,user_activity_ch){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto__,events_ch,mouse_moves_ch,user_activity_ch){
return (function (state_31282){
var state_val_31283 = (state_31282[(1)]);
if((state_val_31283 === (1))){
var state_31282__$1 = state_31282;
var statearr_31284_31308 = state_31282__$1;
(statearr_31284_31308[(2)] = null);

(statearr_31284_31308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (2))){
var state_31282__$1 = state_31282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31282__$1,(4),user_activity_ch);
} else {
if((state_val_31283 === (3))){
var inst_31280 = (state_31282[(2)]);
var state_31282__$1 = state_31282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31282__$1,inst_31280);
} else {
if((state_val_31283 === (4))){
var inst_31271 = (state_31282[(7)]);
var inst_31271__$1 = (state_31282[(2)]);
var inst_31272 = (inst_31271__$1 == null);
var state_31282__$1 = (function (){var statearr_31285 = state_31282;
(statearr_31285[(7)] = inst_31271__$1);

return statearr_31285;
})();
if(cljs.core.truth_(inst_31272)){
var statearr_31286_31309 = state_31282__$1;
(statearr_31286_31309[(1)] = (5));

} else {
var statearr_31287_31310 = state_31282__$1;
(statearr_31287_31310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (5))){
var state_31282__$1 = state_31282;
var statearr_31288_31311 = state_31282__$1;
(statearr_31288_31311[(2)] = null);

(statearr_31288_31311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (6))){
var inst_31271 = (state_31282[(7)]);
var inst_31275 = cljs.core.swap_BANG_.call(null,player_atom,cljs.core.assoc,new cljs.core.Keyword(null,"show-hud","show-hud",1983299752),inst_31271);
var state_31282__$1 = (function (){var statearr_31289 = state_31282;
(statearr_31289[(8)] = inst_31275);

return statearr_31289;
})();
var statearr_31290_31312 = state_31282__$1;
(statearr_31290_31312[(2)] = null);

(statearr_31290_31312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (7))){
var inst_31278 = (state_31282[(2)]);
var state_31282__$1 = state_31282;
var statearr_31291_31313 = state_31282__$1;
(statearr_31291_31313[(2)] = inst_31278);

(statearr_31291_31313[(1)] = (3));


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
});})(c__25119__auto__,events_ch,mouse_moves_ch,user_activity_ch))
;
return ((function (switch__25007__auto__,c__25119__auto__,events_ch,mouse_moves_ch,user_activity_ch){
return (function() {
var asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto__ = null;
var asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto____0 = (function (){
var statearr_31295 = [null,null,null,null,null,null,null,null,null];
(statearr_31295[(0)] = asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto__);

(statearr_31295[(1)] = (1));

return statearr_31295;
});
var asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto____1 = (function (state_31282){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_31282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e31296){if((e31296 instanceof Object)){
var ex__25011__auto__ = e31296;
var statearr_31297_31314 = state_31282;
(statearr_31297_31314[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31315 = state_31282;
state_31282 = G__31315;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto__ = function(state_31282){
switch(arguments.length){
case 0:
return asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto____0.call(this);
case 1:
return asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto____1.call(this,state_31282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto____0;
asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto____1;
return asciinema$player$core$start_event_loop_BANG__$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto__,events_ch,mouse_moves_ch,user_activity_ch))
})();
var state__25121__auto__ = (function (){var statearr_31298 = f__25120__auto__.call(null);
(statearr_31298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto__);

return statearr_31298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto__,events_ch,mouse_moves_ch,user_activity_ch))
);

return c__25119__auto__;
});
/**
 * Mounts player's Reagent component in DOM and starts event loop.
 */
asciinema.player.core.mount_player_with_ratom = (function asciinema$player$core$mount_player_with_ratom(player_atom,dom_node){
var view_event_handler = (function (event){
asciinema.player.core.dispatch.call(null,cljs.core.deref.call(null,player_atom),event);

return null;
});
asciinema.player.core.start_event_loop_BANG_.call(null,player_atom);

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.view.player,player_atom,view_event_handler], null),dom_node);

return null;
});
/**
 * Creates the player with the state built from given options by starting event
 *   processing loop and mounting Reagent component in DOM.
 */
asciinema.player.core.create_player = (function asciinema$player$core$create_player(dom_node,url,options){
var dom_node__$1 = ((typeof dom_node === 'string')?document.getElementById(dom_node):dom_node);
var player_ratom = asciinema.player.core.make_player_ratom.call(null,url,options);
asciinema.player.source.init.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player_ratom)));

return asciinema.player.core.mount_player_with_ratom.call(null,player_ratom,dom_node__$1);
});
cljs.core.enable_console_print_BANG_.call(null);

//# sourceMappingURL=core.js.map