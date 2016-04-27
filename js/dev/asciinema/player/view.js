// Compiled by ClojureScript 1.7.170 {}
goog.provide('asciinema.player.view');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.ratom');
goog.require('asciinema.player.util');
goog.require('asciinema.player.fullscreen');
asciinema.player.view.fg_color = (function asciinema$player$view$fg_color(fg,bold_QMARK_){
if(cljs.core.truth_((function (){var and__18776__auto__ = fg;
if(cljs.core.truth_(and__18776__auto__)){
var and__18776__auto____$1 = bold_QMARK_;
if(cljs.core.truth_(and__18776__auto____$1)){
return (fg < (8));
} else {
return and__18776__auto____$1;
}
} else {
return and__18776__auto__;
}
})())){
return (fg + (8));
} else {
return fg;
}
});
asciinema.player.view.bg_color = (function asciinema$player$view$bg_color(bg,blink_QMARK_){
if(cljs.core.truth_((function (){var and__18776__auto__ = bg;
if(cljs.core.truth_(and__18776__auto__)){
var and__18776__auto____$1 = blink_QMARK_;
if(cljs.core.truth_(and__18776__auto____$1)){
return (bg < (8));
} else {
return and__18776__auto____$1;
}
} else {
return and__18776__auto__;
}
})())){
return (bg + (8));
} else {
return bg;
}
});
asciinema.player.view.part_class_name = (function asciinema$player$view$part_class_name(p__22332,cursor_on){
var map__22335 = p__22332;
var map__22335__$1 = ((((!((map__22335 == null)))?((((map__22335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22335):map__22335);
var fg = cljs.core.get.call(null,map__22335__$1,new cljs.core.Keyword(null,"fg","fg",-101797208));
var bg = cljs.core.get.call(null,map__22335__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var bold = cljs.core.get.call(null,map__22335__$1,new cljs.core.Keyword(null,"bold","bold",-116809535));
var blink = cljs.core.get.call(null,map__22335__$1,new cljs.core.Keyword(null,"blink","blink",-271985917));
var underline = cljs.core.get.call(null,map__22335__$1,new cljs.core.Keyword(null,"underline","underline",2018066703));
var inverse = cljs.core.get.call(null,map__22335__$1,new cljs.core.Keyword(null,"inverse","inverse",-1623859672));
var cursor = cljs.core.get.call(null,map__22335__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var fg__$1 = asciinema.player.view.fg_color.call(null,fg,bold);
var bg__$1 = asciinema.player.view.bg_color.call(null,bg,blink);
var inverse__$1 = (cljs.core.truth_((function (){var and__18776__auto__ = cursor;
if(cljs.core.truth_(and__18776__auto__)){
return cursor_on;
} else {
return and__18776__auto__;
}
})())?cljs.core.not.call(null,inverse):inverse);
var final_fg = (cljs.core.truth_(inverse__$1)?(function (){var or__18788__auto__ = bg__$1;
if(cljs.core.truth_(or__18788__auto__)){
return or__18788__auto__;
} else {
return "bg";
}
})():fg__$1);
var final_bg = (cljs.core.truth_(inverse__$1)?(function (){var or__18788__auto__ = fg__$1;
if(cljs.core.truth_(or__18788__auto__)){
return or__18788__auto__;
} else {
return "fg";
}
})():bg__$1);
var fg_class = (cljs.core.truth_(final_fg)?[cljs.core.str("fg-"),cljs.core.str(final_fg)].join(''):null);
var bg_class = (cljs.core.truth_(final_bg)?[cljs.core.str("bg-"),cljs.core.str(final_bg)].join(''):null);
var bold_class = (cljs.core.truth_(bold)?"bright":null);
var underline_class = (cljs.core.truth_(underline)?"underline":null);
var cursor_class = (cljs.core.truth_(cursor)?"cursor":null);
var classes = cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [fg_class,bg_class,bold_class,underline_class,cursor_class], null));
return clojure.string.join.call(null," ",classes);
});
asciinema.player.view.part_class_name_memoized = cljs.core.memoize.call(null,asciinema.player.view.part_class_name);
asciinema.player.view.part = (function asciinema$player$view$part(p__22337,cursor_on){
var vec__22339 = p__22337;
var text = cljs.core.nth.call(null,vec__22339,(0),null);
var attrs = cljs.core.nth.call(null,vec__22339,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),asciinema.player.view.part_class_name_memoized.call(null,attrs,cursor_on)], null),text], null);
});
asciinema.player.view.part_memoized = cljs.core.memoize.call(null,asciinema.player.view.part);
asciinema.player.view.line = (function asciinema$player$view$line(parts,cursor_on){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.line","span.line",-1541583788),cljs.core.map_indexed.call(null,(function (idx,p){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.view.part_memoized,p,cursor_on], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null));
}),parts)], null);
});
asciinema.player.view.split_part_with_cursor = (function asciinema$player$view$split_part_with_cursor(p__22340,position){
var vec__22342 = p__22340;
var text = cljs.core.nth.call(null,vec__22342,(0),null);
var attrs = cljs.core.nth.call(null,vec__22342,(1),null);
var left_chars = cljs.core.take.call(null,position,text);
var left_part = ((cljs.core.seq.call(null,left_chars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.str,left_chars),attrs], null):null);
var cursor_attrs = cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"cursor","cursor",1011937484),true);
var center_part = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,text,position),cursor_attrs], null);
var right_chars = cljs.core.drop.call(null,(position + (1)),text);
var right_part = ((cljs.core.seq.call(null,right_chars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.str,right_chars),attrs], null):null);
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[left_part,center_part,right_part],null)));
});
/**
 * Marks proper character in line with ':cursor true' by locating and splitting
 *   a fragment that contains the cursor position.
 */
asciinema.player.view.insert_cursor = (function asciinema$player$view$insert_cursor(parts,cursor_x){
var left = cljs.core.PersistentVector.EMPTY;
var right = parts;
var idx = cursor_x;
while(true){
if(cljs.core.seq.call(null,right)){
var vec__22344 = cljs.core.first.call(null,right);
var text = cljs.core.nth.call(null,vec__22344,(0),null);
var attrs = cljs.core.nth.call(null,vec__22344,(1),null);
var part = vec__22344;
var len = cljs.core.count.call(null,text);
if((len <= idx)){
var G__22345 = cljs.core.conj.call(null,left,part);
var G__22346 = cljs.core.rest.call(null,right);
var G__22347 = (idx - len);
left = G__22345;
right = G__22346;
idx = G__22347;
continue;
} else {
return cljs.core.concat.call(null,left,asciinema.player.view.split_part_with_cursor.call(null,part,idx),cljs.core.rest.call(null,right));
}
} else {
return left;
}
break;
}
});
asciinema.player.view.named_font_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["small",null,"medium",null,"big",null], null), null);
asciinema.player.view.terminal_class_name = (function asciinema$player$view$terminal_class_name(font_size){
if(cljs.core.truth_(asciinema.player.view.named_font_sizes.call(null,font_size))){
return [cljs.core.str("font-"),cljs.core.str(font_size)].join('');
} else {
return null;
}
});
asciinema.player.view.terminal_style = (function asciinema$player$view$terminal_style(width,height,font_size){
var font_size__$1 = (cljs.core.truth_(asciinema.player.view.named_font_sizes.call(null,font_size))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),font_size], null));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(width),cljs.core.str("ch")].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str((1.3333333333 * height)),cljs.core.str("em")].join('')], null),font_size__$1);
});
asciinema.player.view.terminal = (function asciinema$player$view$terminal(width,height,font_size,screen){
var class_name = reagent.ratom.make_reaction.call(null,(function (){
return asciinema.player.view.terminal_class_name.call(null,cljs.core.deref.call(null,font_size));
}));
var style = reagent.ratom.make_reaction.call(null,((function (class_name){
return (function (){
return asciinema.player.view.terminal_style.call(null,cljs.core.deref.call(null,width),cljs.core.deref.call(null,height),cljs.core.deref.call(null,font_size));
});})(class_name))
);
var cursor = reagent.ratom.make_reaction.call(null,((function (class_name,style){
return (function (){
return new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,screen));
});})(class_name,style))
);
var lines = reagent.ratom.make_reaction.call(null,((function (class_name,style,cursor){
return (function (){
return new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,screen));
});})(class_name,style,cursor))
);
return ((function (class_name,style,cursor,lines){
return (function (){
var map__22350 = cljs.core.deref.call(null,cursor);
var map__22350__$1 = ((((!((map__22350 == null)))?((((map__22350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22350):map__22350);
var cursor_x = cljs.core.get.call(null,map__22350__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var cursor_y = cljs.core.get.call(null,map__22350__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cursor_visible = cljs.core.get.call(null,map__22350__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var cursor_on = cljs.core.get.call(null,map__22350__$1,new cljs.core.Keyword(null,"on","on",173873944));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.asciinema-terminal","pre.asciinema-terminal",832737619),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),cljs.core.deref.call(null,class_name),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.deref.call(null,style)], null),cljs.core.map_indexed.call(null,((function (map__22350,map__22350__$1,cursor_x,cursor_y,cursor_visible,cursor_on,class_name,style,cursor,lines){
return (function (idx,parts){
var cursor_x__$1 = (cljs.core.truth_((function (){var and__18776__auto__ = cursor_visible;
if(cljs.core.truth_(and__18776__auto__)){
return cljs.core._EQ_.call(null,idx,cursor_y);
} else {
return and__18776__auto__;
}
})())?cursor_x:null);
var parts__$1 = (cljs.core.truth_(cursor_x__$1)?asciinema.player.view.insert_cursor.call(null,parts,cursor_x__$1):parts);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.view.line,parts__$1,cursor_on], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null));
});})(map__22350,map__22350__$1,cursor_x,cursor_y,cursor_visible,cursor_on,class_name,style,cursor,lines))
,cljs.core.deref.call(null,lines))], null);
});
;})(class_name,style,cursor,lines))
});
asciinema.player.view.logo_raw_svg = "<defs> <mask id=\"small-triangle-mask\"> <rect width=\"100%\" height=\"100%\" fill=\"white\"/> <polygon points=\"508.01270189221935 433.01270189221935, 208.0127018922194 259.8076211353316, 208.01270189221927 606.217782649107\" fill=\"black\"></polygon> </mask> </defs> <polygon points=\"808.0127018922194 433.01270189221935, 58.01270189221947 -1.1368683772161603e-13, 58.01270189221913 866.0254037844386\" mask=\"url(#small-triangle-mask)\" fill=\"white\"></polygon> <polyline points=\"481.2177826491071 333.0127018922194, 134.80762113533166 533.0127018922194\" stroke=\"white\" stroke-width=\"90\"></polyline>";
asciinema.player.view.logo_play_icon = (function asciinema$player$view$logo_play_icon(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 866.0254037844387 866.0254037844387",new cljs.core.Keyword(null,"class-name","class-name",945142584),"icon",new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),asciinema.player.view.logo_raw_svg], null)], null)], null);
});
asciinema.player.view.play_icon = (function asciinema$player$view$play_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 12 12",new cljs.core.Keyword(null,"class-name","class-name",945142584),"icon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M1,0 L11,6 L1,12 Z"], null)], null)], null);
});
asciinema.player.view.pause_icon = (function asciinema$player$view$pause_icon(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 12 12",new cljs.core.Keyword(null,"class-name","class-name",945142584),"icon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M1,0 L4,0 L4,12 L1,12 Z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M8,0 L11,0 L11,12 L8,12 Z"], null)], null)], null);
});
asciinema.player.view.expand_icon = (function asciinema$player$view$expand_icon(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 12 12",new cljs.core.Keyword(null,"class-name","class-name",945142584),"icon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M12,0 L7,0 L9,2 L7,4 L8,5 L10,3 L12,5 Z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M0,12 L0,7 L2,9 L4,7 L5,8 L3,10 L5,12 Z"], null)], null)], null);
});
asciinema.player.view.shrink_icon = (function asciinema$player$view$shrink_icon(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 12 12",new cljs.core.Keyword(null,"class-name","class-name",945142584),"icon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M7,5 L7,0 L9,2 L11,0 L12,1 L10,3 L12,5 Z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M5,7 L0,7 L2,9 L0,11 L1,12 L3,10 L5,12 Z"], null)], null)], null);
});
asciinema.player.view.playback_control_button = (function asciinema$player$view$playback_control_button(playing_QMARK_,dispatch){
var on_click = (function asciinema$player$view$playback_control_button_$_on_click(e){
e.preventDefault();

return dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-play","toggle-play",-1781648392)], null));
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.playback-button","span.playback-button",-1136389398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.deref.call(null,playing_QMARK_))?asciinema.player.view.pause_icon:asciinema.player.view.play_icon)], null)], null);
});
});
asciinema.player.view.pad2 = (function asciinema$player$view$pad2(number){
if((number < (10))){
return [cljs.core.str("0"),cljs.core.str(number)].join('');
} else {
return number;
}
});
asciinema.player.view.format_time = (function asciinema$player$view$format_time(seconds){
var m = Math.floor((seconds / (60)));
var s = Math.floor(cljs.core.mod.call(null,seconds,(60)));
return [cljs.core.str(asciinema.player.view.pad2.call(null,m)),cljs.core.str(":"),cljs.core.str(asciinema.player.view.pad2.call(null,s))].join('');
});
asciinema.player.view.elapsed_time = (function asciinema$player$view$elapsed_time(current_time){
return asciinema.player.view.format_time.call(null,current_time);
});
asciinema.player.view.remaining_time = (function asciinema$player$view$remaining_time(current_time,total_time){
return [cljs.core.str("-"),cljs.core.str(asciinema.player.view.format_time.call(null,(total_time - current_time)))].join('');
});
asciinema.player.view.timer = (function asciinema$player$view$timer(current_time,total_time){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.timer","span.timer",2111534382),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.time-elapsed","span.time-elapsed",-1782475638),asciinema.player.view.elapsed_time.call(null,cljs.core.deref.call(null,current_time))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.time-remaining","span.time-remaining",706865437),asciinema.player.view.remaining_time.call(null,cljs.core.deref.call(null,current_time),cljs.core.deref.call(null,total_time))], null)], null);
});
asciinema.player.view.fullscreen_toggle_button = (function asciinema$player$view$fullscreen_toggle_button(){
var on_click = (function asciinema$player$view$fullscreen_toggle_button_$_on_click(e){
e.preventDefault();

return asciinema.player.fullscreen.toggle.call(null,e.currentTarget.parentNode.parentNode.parentNode);
});
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fullscreen-button","span.fullscreen-button",-1476136392),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.view.expand_icon], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.view.shrink_icon], null)], null);
});
});
asciinema.player.view.element_local_mouse_x = (function asciinema$player$view$element_local_mouse_x(e){
var rect = e.currentTarget.getBoundingClientRect();
return (e.clientX - rect.left);
});
asciinema.player.view.progress_bar = (function asciinema$player$view$progress_bar(progress,dispatch){
var on_mouse_down = (function (e){
e.preventDefault();

var bar_width = e.currentTarget.offsetWidth;
var mouse_x = asciinema.player.util.adjust_to_range.call(null,asciinema.player.view.element_local_mouse_x.call(null,e),(0),bar_width);
var position = (mouse_x / bar_width);
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seek","seek",758996602),position], null));
});
var progress_str = reagent.ratom.make_reaction.call(null,((function (on_mouse_down){
return (function (){
return [cljs.core.str(((100) * cljs.core.deref.call(null,progress))),cljs.core.str("%")].join('');
});})(on_mouse_down))
);
return ((function (on_mouse_down,progress_str){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.progressbar","span.progressbar",766750210),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bar","span.bar",-1986926323),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),on_mouse_down], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.gutter","span.gutter",-700214016),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.deref.call(null,progress_str)], null)], null)], null)], null)], null)], null);
});
;})(on_mouse_down,progress_str))
});
asciinema.player.view.recorded_control_bar = (function asciinema$player$view$recorded_control_bar(playing_QMARK_,current_time,total_time,dispatch){
var progress = reagent.ratom.make_reaction.call(null,(function (){
return (cljs.core.deref.call(null,current_time) / cljs.core.deref.call(null,total_time));
}));
return ((function (progress){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-bar","div.control-bar",-1316808248),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.view.playback_control_button,playing_QMARK_,dispatch], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.view.timer,current_time,total_time], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.view.fullscreen_toggle_button], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.view.progress_bar,progress,dispatch], null)], null);
});
;})(progress))
});
asciinema.player.view.stream_control_bar = (function asciinema$player$view$stream_control_bar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-bar.live","div.control-bar.live",-1186118625),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.timer","span.timer",2111534382),"LIVE"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.view.fullscreen_toggle_button], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.view.progress_bar,(0),(function() { 
var G__22352__delegate = function (_){
return null;
};
var G__22352 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__22353__i = 0, G__22353__a = new Array(arguments.length -  0);
while (G__22353__i < G__22353__a.length) {G__22353__a[G__22353__i] = arguments[G__22353__i + 0]; ++G__22353__i;}
  _ = new cljs.core.IndexedSeq(G__22353__a,0);
} 
return G__22352__delegate.call(this,_);};
G__22352.cljs$lang$maxFixedArity = 0;
G__22352.cljs$lang$applyTo = (function (arglist__22354){
var _ = cljs.core.seq(arglist__22354);
return G__22352__delegate(_);
});
G__22352.cljs$core$IFn$_invoke$arity$variadic = G__22352__delegate;
return G__22352;
})()
], null)], null);
});
asciinema.player.view.start_overlay = (function asciinema$player$view$start_overlay(dispatch){
var on_click = (function asciinema$player$view$start_overlay_$_on_click(e){
e.preventDefault();

return dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-play","toggle-play",-1781648392)], null));
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.start-prompt","div.start-prompt",-41424788),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.play-button","div.play-button",1020321513),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.view.logo_play_icon], null)], null)], null)], null)], null);
});
});
asciinema.player.view.loading_overlay = (function asciinema$player$view$loading_overlay(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loading","div.loading",-155515768),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loader","div.loader",-1644603528)], null)], null);
});
asciinema.player.view.player_class_name = (function asciinema$player$view$player_class_name(theme_name){
return [cljs.core.str("asciinema-theme-"),cljs.core.str(theme_name)].join('');
});
asciinema.player.view.handle_dom_event = (function asciinema$player$view$handle_dom_event(dispatch,event_mapper,dom_event){
var temp__4425__auto__ = event_mapper.call(null,dom_event);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__22356 = temp__4425__auto__;
var event_name = cljs.core.nth.call(null,vec__22356,(0),null);
var _ = cljs.core.nthnext.call(null,vec__22356,(1));
var event = vec__22356;
dom_event.preventDefault();

if(cljs.core._EQ_.call(null,event_name,new cljs.core.Keyword(null,"toggle-fullscreen","toggle-fullscreen",-1647254833))){
return asciinema.player.fullscreen.toggle.call(null,dom_event.currentTarget);
} else {
return dispatch.call(null,event);
}
} else {
return null;
}
});
asciinema.player.view.key_press__GT_event = (function asciinema$player$view$key_press__GT_event(dom_event){
var G__22358 = dom_event.key;
switch (G__22358) {
case " ":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-play","toggle-play",-1781648392)], null);

break;
case "f":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-fullscreen","toggle-fullscreen",-1647254833)], null);

break;
case "0":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seek","seek",758996602),0.0], null);

break;
case "1":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seek","seek",758996602),0.1], null);

break;
case "2":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seek","seek",758996602),0.2], null);

break;
case "3":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seek","seek",758996602),0.3], null);

break;
case "4":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seek","seek",758996602),0.4], null);

break;
case "5":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seek","seek",758996602),0.5], null);

break;
case "6":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seek","seek",758996602),0.6], null);

break;
case "7":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seek","seek",758996602),0.7], null);

break;
case "8":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seek","seek",758996602),0.8], null);

break;
case "9":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seek","seek",758996602),0.9], null);

break;
case ">":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speed-up","speed-up",947171774)], null);

break;
case "<":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speed-down","speed-down",-1024390712)], null);

break;
default:
return null;

}
});
asciinema.player.view.key_down__GT_event = (function asciinema$player$view$key_down__GT_event(dom_event){
var G__22361 = dom_event.which;
switch (G__22361) {
case (37):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rewind","rewind",-669264915)], null);

break;
case (39):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fast-forward","fast-forward",703093475)], null);

break;
default:
return null;

}
});
asciinema.player.view.title_bar = (function asciinema$player$view$title_bar(title,author,author_url,author_img_url){
var title_text = (cljs.core.truth_(title)?[cljs.core.str("\""),cljs.core.str(title),cljs.core.str("\"")].join(''):"untitled");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.title-bar","span.title-bar",-1165872085),(cljs.core.truth_(author_img_url)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),author_img_url], null)], null):null),title_text,(cljs.core.truth_(author)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," by ",(cljs.core.truth_(author_url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),author_url], null),author], null):author)], null):null)], null);
});
asciinema.player.view.player = (function asciinema$player$view$player(player__$1,dispatch){
var on_key_press = cljs.core.partial.call(null,asciinema.player.view.handle_dom_event,dispatch,asciinema.player.view.key_press__GT_event);
var on_key_down = cljs.core.partial.call(null,asciinema.player.view.handle_dom_event,dispatch,asciinema.player.view.key_down__GT_event);
var on_mouse_move = ((function (on_key_press,on_key_down){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223)], null));
});})(on_key_press,on_key_down))
;
var wrapper_class_name = reagent.ratom.make_reaction.call(null,((function (on_key_press,on_key_down,on_mouse_move){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"show-hud","show-hud",1983299752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player__$1)))){
return "hud";
} else {
return null;
}
});})(on_key_press,on_key_down,on_mouse_move))
);
var player_class_name = reagent.ratom.make_reaction.call(null,((function (on_key_press,on_key_down,on_mouse_move,wrapper_class_name){
return (function (){
return asciinema.player.view.player_class_name.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player__$1)));
});})(on_key_press,on_key_down,on_mouse_move,wrapper_class_name))
);
var width = reagent.ratom.make_reaction.call(null,((function (on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name){
return (function (){
var or__18788__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player__$1));
if(cljs.core.truth_(or__18788__auto__)){
return or__18788__auto__;
} else {
return (80);
}
});})(on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name))
);
var height = reagent.ratom.make_reaction.call(null,((function (on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name,width){
return (function (){
var or__18788__auto__ = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player__$1));
if(cljs.core.truth_(or__18788__auto__)){
return or__18788__auto__;
} else {
return (24);
}
});})(on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name,width))
);
var font_size = reagent.ratom.make_reaction.call(null,((function (on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name,width,height){
return (function (){
return new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player__$1));
});})(on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name,width,height))
);
var screen = reagent.ratom.make_reaction.call(null,((function (on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name,width,height,font_size){
return (function (){
return cljs.core.select_keys.call(null,cljs.core.deref.call(null,player__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"cursor","cursor",1011937484)], null));
});})(on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name,width,height,font_size))
);
var playing = reagent.ratom.make_reaction.call(null,((function (on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name,width,height,font_size,screen){
return (function (){
return new cljs.core.Keyword(null,"playing","playing",70013335).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player__$1));
});})(on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name,width,height,font_size,screen))
);
var current_time = reagent.ratom.make_reaction.call(null,((function (on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name,width,height,font_size,screen,playing){
return (function (){
return new cljs.core.Keyword(null,"current-time","current-time",-1609407134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player__$1));
});})(on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name,width,height,font_size,screen,playing))
);
var total_time = reagent.ratom.make_reaction.call(null,((function (on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name,width,height,font_size,screen,playing,current_time){
return (function (){
return new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player__$1));
});})(on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name,width,height,font_size,screen,playing,current_time))
);
var loading = reagent.ratom.make_reaction.call(null,((function (on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name,width,height,font_size,screen,playing,current_time,total_time){
return (function (){
return new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player__$1));
});})(on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name,width,height,font_size,screen,playing,current_time,total_time))
);
var loaded = reagent.ratom.make_reaction.call(null,((function (on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name,width,height,font_size,screen,playing,current_time,total_time,loading){
return (function (){
return new cljs.core.Keyword(null,"loaded","loaded",-1246482293).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player__$1));
});})(on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name,width,height,font_size,screen,playing,current_time,total_time,loading))
);
var map__22365 = cljs.core.deref.call(null,player__$1);
var map__22365__$1 = ((((!((map__22365 == null)))?((((map__22365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22365):map__22365);
var title = cljs.core.get.call(null,map__22365__$1,new cljs.core.Keyword(null,"title","title",636505583));
var author = cljs.core.get.call(null,map__22365__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var author_url = cljs.core.get.call(null,map__22365__$1,new cljs.core.Keyword(null,"author-url","author-url",1091920533));
var author_img_url = cljs.core.get.call(null,map__22365__$1,new cljs.core.Keyword(null,"author-img-url","author-img-url",2016975920));
return ((function (on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name,width,height,font_size,screen,playing,current_time,total_time,loading,loaded,map__22365,map__22365__$1,title,author,author_url,author_img_url){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.asciinema-player-wrapper","div.asciinema-player-wrapper",2009764409),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),on_key_press,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),on_key_down,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),on_mouse_move,new cljs.core.Keyword(null,"class-name","class-name",945142584),cljs.core.deref.call(null,wrapper_class_name)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.asciinema-player","div.asciinema-player",-1293079051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),cljs.core.deref.call(null,player_class_name)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.view.terminal,width,height,font_size,screen], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.view.recorded_control_bar,playing,current_time,total_time,dispatch], null),(cljs.core.truth_((function (){var or__18788__auto__ = title;
if(cljs.core.truth_(or__18788__auto__)){
return or__18788__auto__;
} else {
return author;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.view.title_bar,title,author,author_url,author_img_url], null):null),(cljs.core.truth_((function (){var or__18788__auto__ = cljs.core.deref.call(null,loading);
if(cljs.core.truth_(or__18788__auto__)){
return or__18788__auto__;
} else {
return cljs.core.deref.call(null,loaded);
}
})())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.view.start_overlay,dispatch], null)),(cljs.core.truth_(cljs.core.deref.call(null,loading))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.view.loading_overlay], null):null)], null)], null);
});
;})(on_key_press,on_key_down,on_mouse_move,wrapper_class_name,player_class_name,width,height,font_size,screen,playing,current_time,total_time,loading,loaded,map__22365,map__22365__$1,title,author,author_url,author_img_url))
});

//# sourceMappingURL=view.js.map