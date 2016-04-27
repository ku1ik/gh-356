// Compiled by ClojureScript 1.7.170 {}
goog.provide('asciinema.player.vt');
goog.require('cljs.core');
goog.require('asciinema.player.util');
goog.require('schema.core');
goog.require('cljs.core.match');
asciinema.player.vt.CodePoint = schema.core.Num;
asciinema.player.vt.CharAttrs = cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fg","fg",-101797208)),schema.core.Num,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bg","bg",-206688421)),schema.core.Num,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bold","bold",-116809535)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"italic","italic",32599196)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"underline","underline",2018066703)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"blink","blink",-271985917)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"inverse","inverse",-1623859672)),schema.core.Bool], true, false);
asciinema.player.vt.Cell = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,asciinema.player.vt.CodePoint,"unicode codepoint"),schema.core.one.call(null,asciinema.player.vt.CharAttrs,"text attributes")], null);
asciinema.player.vt.CellLine = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.vt.Cell], null);
asciinema.player.vt.Fragment = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,"text"),schema.core.one.call(null,asciinema.player.vt.CharAttrs,"text attributes")], null);
asciinema.player.vt.FragmentLine = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.vt.Fragment], null);
asciinema.player.vt.Tabs = cljs.core.PersistentTreeSet;
asciinema.player.vt.Charset = schema.core.pred.call(null,cljs.core.ifn_QMARK_);
asciinema.player.vt.Parser = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Keyword,new cljs.core.Keyword(null,"intermediate-chars","intermediate-chars",93692085),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Num], null),new cljs.core.Keyword(null,"param-chars","param-chars",38609125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Num], null)], null);
asciinema.player.vt.Cursor = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),schema.core.Num,new cljs.core.Keyword(null,"y","y",-1757859776),schema.core.Num,new cljs.core.Keyword(null,"visible","visible",-1024216805),schema.core.Bool], null);
asciinema.player.vt.SavedCursor = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),schema.core.Num,new cljs.core.Keyword(null,"y","y",-1757859776),schema.core.Num], null),new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455),asciinema.player.vt.CharAttrs,new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912),schema.core.Bool,new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583),schema.core.Bool], null);
var bad_keys__241__auto___28145 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__237__242__auto__){
return schema.core.required_key_QMARK_.call(null,p1__237__242__auto__);
}),cljs.core.keys.call(null,null)));
if(cljs.core.not.call(null,bad_keys__241__auto___28145)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"extra-key-schema? can not contain required keys: %s",cljs.core.vec.call(null,bad_keys__241__auto___28145))));
}



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
asciinema.player.vt.VT = (function (width,height,top_margin,bottom_margin,parser,tabs,cursor,char_attrs,charset_fn,insert_mode,auto_wrap_mode,new_line_mode,next_print_wraps,origin_mode,buffer,lines,saved,other_buffer_lines,other_buffer_saved,__meta,__extmap,__hash){
this.width = width;
this.height = height;
this.top_margin = top_margin;
this.bottom_margin = bottom_margin;
this.parser = parser;
this.tabs = tabs;
this.cursor = cursor;
this.char_attrs = char_attrs;
this.charset_fn = charset_fn;
this.insert_mode = insert_mode;
this.auto_wrap_mode = auto_wrap_mode;
this.new_line_mode = new_line_mode;
this.next_print_wraps = next_print_wraps;
this.origin_mode = origin_mode;
this.buffer = buffer;
this.lines = lines;
this.saved = saved;
this.other_buffer_lines = other_buffer_lines;
this.other_buffer_saved = other_buffer_saved;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
asciinema.player.vt.VT.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19402__auto__,k__19403__auto__){
var self__ = this;
var this__19402__auto____$1 = this;
return cljs.core._lookup.call(null,this__19402__auto____$1,k__19403__auto__,null);
});

asciinema.player.vt.VT.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19404__auto__,k28135,else__19405__auto__){
var self__ = this;
var this__19404__auto____$1 = this;
var G__28137 = (((k28135 instanceof cljs.core.Keyword))?k28135.fqn:null);
switch (G__28137) {
case "char-attrs":
return self__.char_attrs;

break;
case "auto-wrap-mode":
return self__.auto_wrap_mode;

break;
case "bottom-margin":
return self__.bottom_margin;

break;
case "tabs":
return self__.tabs;

break;
case "next-print-wraps":
return self__.next_print_wraps;

break;
case "width":
return self__.width;

break;
case "lines":
return self__.lines;

break;
case "cursor":
return self__.cursor;

break;
case "insert-mode":
return self__.insert_mode;

break;
case "charset-fn":
return self__.charset_fn;

break;
case "new-line-mode":
return self__.new_line_mode;

break;
case "other-buffer-saved":
return self__.other_buffer_saved;

break;
case "parser":
return self__.parser;

break;
case "saved":
return self__.saved;

break;
case "origin-mode":
return self__.origin_mode;

break;
case "top-margin":
return self__.top_margin;

break;
case "other-buffer-lines":
return self__.other_buffer_lines;

break;
case "buffer":
return self__.buffer;

break;
case "height":
return self__.height;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28135,else__19405__auto__);

}
});

asciinema.player.vt.VT.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19416__auto__,writer__19417__auto__,opts__19418__auto__){
var self__ = this;
var this__19416__auto____$1 = this;
var pr_pair__19419__auto__ = ((function (this__19416__auto____$1){
return (function (keyval__19420__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19417__auto__,cljs.core.pr_writer,""," ","",opts__19418__auto__,keyval__19420__auto__);
});})(this__19416__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19417__auto__,pr_pair__19419__auto__,"#asciinema.player.vt.VT{",", ","}",opts__19418__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"top-margin","top-margin",655579514),self__.top_margin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bottom-margin","bottom-margin",-701300733),self__.bottom_margin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parser","parser",-1543495310),self__.parser],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tabs","tabs",-779855354),self__.tabs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cursor","cursor",1011937484),self__.cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455),self__.char_attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"charset-fn","charset-fn",1374523920),self__.charset_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"insert-mode","insert-mode",894811791),self__.insert_mode],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583),self__.auto_wrap_mode],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-line-mode","new-line-mode",1467504785),self__.new_line_mode],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next-print-wraps","next-print-wraps",-1664999738),self__.next_print_wraps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912),self__.origin_mode],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"buffer","buffer",617295198),self__.buffer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lines","lines",-700165781),self__.lines],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"saved","saved",288760660),self__.saved],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"other-buffer-lines","other-buffer-lines",-1562366021),self__.other_buffer_lines],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"other-buffer-saved","other-buffer-saved",-2048065486),self__.other_buffer_saved],null))], null),self__.__extmap));
});

asciinema.player.vt.VT.prototype.cljs$core$IIterable$ = true;

asciinema.player.vt.VT.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28134){
var self__ = this;
var G__28134__$1 = this;
return (new cljs.core.RecordIter((0),G__28134__$1,19,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"top-margin","top-margin",655579514),new cljs.core.Keyword(null,"bottom-margin","bottom-margin",-701300733),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455),new cljs.core.Keyword(null,"charset-fn","charset-fn",1374523920),new cljs.core.Keyword(null,"insert-mode","insert-mode",894811791),new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583),new cljs.core.Keyword(null,"new-line-mode","new-line-mode",1467504785),new cljs.core.Keyword(null,"next-print-wraps","next-print-wraps",-1664999738),new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912),new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"saved","saved",288760660),new cljs.core.Keyword(null,"other-buffer-lines","other-buffer-lines",-1562366021),new cljs.core.Keyword(null,"other-buffer-saved","other-buffer-saved",-2048065486)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

asciinema.player.vt.VT.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19400__auto__){
var self__ = this;
var this__19400__auto____$1 = this;
return self__.__meta;
});

asciinema.player.vt.VT.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19396__auto__){
var self__ = this;
var this__19396__auto____$1 = this;
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,self__.bottom_margin,self__.parser,self__.tabs,self__.cursor,self__.char_attrs,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,self__.buffer,self__.lines,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,self__.__extmap,self__.__hash));
});

asciinema.player.vt.VT.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19406__auto__){
var self__ = this;
var this__19406__auto____$1 = this;
return (19 + cljs.core.count.call(null,self__.__extmap));
});

asciinema.player.vt.VT.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19397__auto__){
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

asciinema.player.vt.VT.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19398__auto__,other__19399__auto__){
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

asciinema.player.vt.VT.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19411__auto__,k__19412__auto__){
var self__ = this;
var this__19411__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455),null,new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583),null,new cljs.core.Keyword(null,"bottom-margin","bottom-margin",-701300733),null,new cljs.core.Keyword(null,"tabs","tabs",-779855354),null,new cljs.core.Keyword(null,"next-print-wraps","next-print-wraps",-1664999738),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"lines","lines",-700165781),null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),null,new cljs.core.Keyword(null,"insert-mode","insert-mode",894811791),null,new cljs.core.Keyword(null,"charset-fn","charset-fn",1374523920),null,new cljs.core.Keyword(null,"new-line-mode","new-line-mode",1467504785),null,new cljs.core.Keyword(null,"other-buffer-saved","other-buffer-saved",-2048065486),null,new cljs.core.Keyword(null,"parser","parser",-1543495310),null,new cljs.core.Keyword(null,"saved","saved",288760660),null,new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912),null,new cljs.core.Keyword(null,"top-margin","top-margin",655579514),null,new cljs.core.Keyword(null,"other-buffer-lines","other-buffer-lines",-1562366021),null,new cljs.core.Keyword(null,"buffer","buffer",617295198),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__19412__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19411__auto____$1),self__.__meta),k__19412__auto__);
} else {
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,self__.bottom_margin,self__.parser,self__.tabs,self__.cursor,self__.char_attrs,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,self__.buffer,self__.lines,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19412__auto__)),null));
}
});

asciinema.player.vt.VT.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19409__auto__,k__19410__auto__,G__28134){
var self__ = this;
var this__19409__auto____$1 = this;
var pred__28138 = cljs.core.keyword_identical_QMARK_;
var expr__28139 = k__19410__auto__;
if(cljs.core.truth_(pred__28138.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__28139))){
return (new asciinema.player.vt.VT(G__28134,self__.height,self__.top_margin,self__.bottom_margin,self__.parser,self__.tabs,self__.cursor,self__.char_attrs,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,self__.buffer,self__.lines,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28138.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__28139))){
return (new asciinema.player.vt.VT(self__.width,G__28134,self__.top_margin,self__.bottom_margin,self__.parser,self__.tabs,self__.cursor,self__.char_attrs,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,self__.buffer,self__.lines,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28138.call(null,new cljs.core.Keyword(null,"top-margin","top-margin",655579514),expr__28139))){
return (new asciinema.player.vt.VT(self__.width,self__.height,G__28134,self__.bottom_margin,self__.parser,self__.tabs,self__.cursor,self__.char_attrs,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,self__.buffer,self__.lines,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28138.call(null,new cljs.core.Keyword(null,"bottom-margin","bottom-margin",-701300733),expr__28139))){
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,G__28134,self__.parser,self__.tabs,self__.cursor,self__.char_attrs,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,self__.buffer,self__.lines,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28138.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310),expr__28139))){
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,self__.bottom_margin,G__28134,self__.tabs,self__.cursor,self__.char_attrs,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,self__.buffer,self__.lines,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28138.call(null,new cljs.core.Keyword(null,"tabs","tabs",-779855354),expr__28139))){
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,self__.bottom_margin,self__.parser,G__28134,self__.cursor,self__.char_attrs,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,self__.buffer,self__.lines,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28138.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),expr__28139))){
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,self__.bottom_margin,self__.parser,self__.tabs,G__28134,self__.char_attrs,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,self__.buffer,self__.lines,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28138.call(null,new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455),expr__28139))){
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,self__.bottom_margin,self__.parser,self__.tabs,self__.cursor,G__28134,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,self__.buffer,self__.lines,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28138.call(null,new cljs.core.Keyword(null,"charset-fn","charset-fn",1374523920),expr__28139))){
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,self__.bottom_margin,self__.parser,self__.tabs,self__.cursor,self__.char_attrs,G__28134,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,self__.buffer,self__.lines,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28138.call(null,new cljs.core.Keyword(null,"insert-mode","insert-mode",894811791),expr__28139))){
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,self__.bottom_margin,self__.parser,self__.tabs,self__.cursor,self__.char_attrs,self__.charset_fn,G__28134,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,self__.buffer,self__.lines,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28138.call(null,new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583),expr__28139))){
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,self__.bottom_margin,self__.parser,self__.tabs,self__.cursor,self__.char_attrs,self__.charset_fn,self__.insert_mode,G__28134,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,self__.buffer,self__.lines,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28138.call(null,new cljs.core.Keyword(null,"new-line-mode","new-line-mode",1467504785),expr__28139))){
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,self__.bottom_margin,self__.parser,self__.tabs,self__.cursor,self__.char_attrs,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,G__28134,self__.next_print_wraps,self__.origin_mode,self__.buffer,self__.lines,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28138.call(null,new cljs.core.Keyword(null,"next-print-wraps","next-print-wraps",-1664999738),expr__28139))){
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,self__.bottom_margin,self__.parser,self__.tabs,self__.cursor,self__.char_attrs,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,G__28134,self__.origin_mode,self__.buffer,self__.lines,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28138.call(null,new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912),expr__28139))){
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,self__.bottom_margin,self__.parser,self__.tabs,self__.cursor,self__.char_attrs,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,G__28134,self__.buffer,self__.lines,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28138.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198),expr__28139))){
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,self__.bottom_margin,self__.parser,self__.tabs,self__.cursor,self__.char_attrs,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,G__28134,self__.lines,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28138.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781),expr__28139))){
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,self__.bottom_margin,self__.parser,self__.tabs,self__.cursor,self__.char_attrs,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,self__.buffer,G__28134,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28138.call(null,new cljs.core.Keyword(null,"saved","saved",288760660),expr__28139))){
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,self__.bottom_margin,self__.parser,self__.tabs,self__.cursor,self__.char_attrs,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,self__.buffer,self__.lines,G__28134,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28138.call(null,new cljs.core.Keyword(null,"other-buffer-lines","other-buffer-lines",-1562366021),expr__28139))){
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,self__.bottom_margin,self__.parser,self__.tabs,self__.cursor,self__.char_attrs,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,self__.buffer,self__.lines,self__.saved,G__28134,self__.other_buffer_saved,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28138.call(null,new cljs.core.Keyword(null,"other-buffer-saved","other-buffer-saved",-2048065486),expr__28139))){
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,self__.bottom_margin,self__.parser,self__.tabs,self__.cursor,self__.char_attrs,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,self__.buffer,self__.lines,self__.saved,self__.other_buffer_lines,G__28134,self__.__meta,self__.__extmap,null));
} else {
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,self__.bottom_margin,self__.parser,self__.tabs,self__.cursor,self__.char_attrs,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,self__.buffer,self__.lines,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19410__auto__,G__28134),null));
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
});

asciinema.player.vt.VT.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19414__auto__){
var self__ = this;
var this__19414__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"top-margin","top-margin",655579514),self__.top_margin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bottom-margin","bottom-margin",-701300733),self__.bottom_margin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parser","parser",-1543495310),self__.parser],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tabs","tabs",-779855354),self__.tabs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cursor","cursor",1011937484),self__.cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455),self__.char_attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"charset-fn","charset-fn",1374523920),self__.charset_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"insert-mode","insert-mode",894811791),self__.insert_mode],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583),self__.auto_wrap_mode],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-line-mode","new-line-mode",1467504785),self__.new_line_mode],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next-print-wraps","next-print-wraps",-1664999738),self__.next_print_wraps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912),self__.origin_mode],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"buffer","buffer",617295198),self__.buffer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lines","lines",-700165781),self__.lines],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"saved","saved",288760660),self__.saved],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"other-buffer-lines","other-buffer-lines",-1562366021),self__.other_buffer_lines],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"other-buffer-saved","other-buffer-saved",-2048065486),self__.other_buffer_saved],null))], null),self__.__extmap));
});

asciinema.player.vt.VT.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19401__auto__,G__28134){
var self__ = this;
var this__19401__auto____$1 = this;
return (new asciinema.player.vt.VT(self__.width,self__.height,self__.top_margin,self__.bottom_margin,self__.parser,self__.tabs,self__.cursor,self__.char_attrs,self__.charset_fn,self__.insert_mode,self__.auto_wrap_mode,self__.new_line_mode,self__.next_print_wraps,self__.origin_mode,self__.buffer,self__.lines,self__.saved,self__.other_buffer_lines,self__.other_buffer_saved,G__28134,self__.__extmap,self__.__hash));
});

asciinema.player.vt.VT.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19407__auto__,entry__19408__auto__){
var self__ = this;
var this__19407__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19408__auto__)){
return cljs.core._assoc.call(null,this__19407__auto____$1,cljs.core._nth.call(null,entry__19408__auto__,(0)),cljs.core._nth.call(null,entry__19408__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19407__auto____$1,entry__19408__auto__);
}
});

asciinema.player.vt.VT.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"top-margin","top-margin",-1998856255,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"bottom-margin","bottom-margin",939230794,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"parser","parser",97036217,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Parser","Parser",-1836763642,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tabs","tabs",860676173,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Tabs","Tabs",-546967870,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Cursor","Cursor",1958640643,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"char-attrs","char-attrs",196440072,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CharAttrs","CharAttrs",1533586778,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"charset-fn","charset-fn",-1279911849,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Charset","Charset",-906008607,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"insert-mode","insert-mode",-1759623978,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-wrap-mode","auto-wrap-mode",-409024056,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"new-line-mode","new-line-mode",-1186930984,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"next-print-wraps","next-print-wraps",-24468211,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"origin-mode","origin-mode",210435615,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"lines","lines",940365746,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellLine","CellLine",-317574363,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"saved","saved",1929292187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SavedCursor","SavedCursor",837702932,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"other-buffer-lines","other-buffer-lines",78165506,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellLine","CellLine",-317574363,null)], null))], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"other-buffer-saved","other-buffer-saved",-407533959,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SavedCursor","SavedCursor",837702932,null)], null))], null);
});

asciinema.player.vt.VT.cljs$lang$type = true;

asciinema.player.vt.VT.cljs$lang$ctorPrSeq = (function (this__19436__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"asciinema.player.vt/VT");
});

asciinema.player.vt.VT.cljs$lang$ctorPrWriter = (function (this__19436__auto__,writer__19437__auto__){
return cljs.core._write.call(null,writer__19437__auto__,"asciinema.player.vt/VT");
});

asciinema.player.vt.__GT_VT = (function asciinema$player$vt$__GT_VT(width,height,top_margin,bottom_margin,parser,tabs,cursor,char_attrs,charset_fn,insert_mode,auto_wrap_mode,new_line_mode,next_print_wraps,origin_mode,buffer,lines,saved,other_buffer_lines,other_buffer_saved){
return (new asciinema.player.vt.VT(width,height,top_margin,bottom_margin,parser,tabs,cursor,char_attrs,charset_fn,insert_mode,auto_wrap_mode,new_line_mode,next_print_wraps,origin_mode,buffer,lines,saved,other_buffer_lines,other_buffer_saved,null,null,null));
});

asciinema.player.vt.map__GT_VT = (function asciinema$player$vt$map__GT_VT(G__28136){
return (new asciinema.player.vt.VT(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__28136),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__28136),new cljs.core.Keyword(null,"top-margin","top-margin",655579514).cljs$core$IFn$_invoke$arity$1(G__28136),new cljs.core.Keyword(null,"bottom-margin","bottom-margin",-701300733).cljs$core$IFn$_invoke$arity$1(G__28136),new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(G__28136),new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(G__28136),new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(G__28136),new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455).cljs$core$IFn$_invoke$arity$1(G__28136),new cljs.core.Keyword(null,"charset-fn","charset-fn",1374523920).cljs$core$IFn$_invoke$arity$1(G__28136),new cljs.core.Keyword(null,"insert-mode","insert-mode",894811791).cljs$core$IFn$_invoke$arity$1(G__28136),new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583).cljs$core$IFn$_invoke$arity$1(G__28136),new cljs.core.Keyword(null,"new-line-mode","new-line-mode",1467504785).cljs$core$IFn$_invoke$arity$1(G__28136),new cljs.core.Keyword(null,"next-print-wraps","next-print-wraps",-1664999738).cljs$core$IFn$_invoke$arity$1(G__28136),new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912).cljs$core$IFn$_invoke$arity$1(G__28136),new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(G__28136),new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(G__28136),new cljs.core.Keyword(null,"saved","saved",288760660).cljs$core$IFn$_invoke$arity$1(G__28136),new cljs.core.Keyword(null,"other-buffer-lines","other-buffer-lines",-1562366021).cljs$core$IFn$_invoke$arity$1(G__28136),new cljs.core.Keyword(null,"other-buffer-saved","other-buffer-saved",-2048065486).cljs$core$IFn$_invoke$arity$1(G__28136),null,cljs.core.dissoc.call(null,G__28136,new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"top-margin","top-margin",655579514),new cljs.core.Keyword(null,"bottom-margin","bottom-margin",-701300733),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455),new cljs.core.Keyword(null,"charset-fn","charset-fn",1374523920),new cljs.core.Keyword(null,"insert-mode","insert-mode",894811791),new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583),new cljs.core.Keyword(null,"new-line-mode","new-line-mode",1467504785),new cljs.core.Keyword(null,"next-print-wraps","next-print-wraps",-1664999738),new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912),new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"saved","saved",288760660),new cljs.core.Keyword(null,"other-buffer-lines","other-buffer-lines",-1562366021),new cljs.core.Keyword(null,"other-buffer-saved","other-buffer-saved",-2048065486)),null));
});


schema.utils.declare_class_schema_BANG_.call(null,asciinema.player.vt.VT,schema.utils.assoc_when.call(null,schema.core.record_STAR_.call(null,asciinema.player.vt.VT,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455),new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583),new cljs.core.Keyword(null,"bottom-margin","bottom-margin",-701300733),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"next-print-wraps","next-print-wraps",-1664999738),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"insert-mode","insert-mode",894811791),new cljs.core.Keyword(null,"charset-fn","charset-fn",1374523920),new cljs.core.Keyword(null,"new-line-mode","new-line-mode",1467504785),new cljs.core.Keyword(null,"other-buffer-saved","other-buffer-saved",-2048065486),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"saved","saved",288760660),new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912),new cljs.core.Keyword(null,"top-margin","top-margin",655579514),new cljs.core.Keyword(null,"other-buffer-lines","other-buffer-lines",-1562366021),new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"height","height",1025178622)],[asciinema.player.vt.CharAttrs,schema.core.Bool,schema.core.Num,asciinema.player.vt.Tabs,schema.core.Bool,schema.core.Num,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.vt.CellLine], null),asciinema.player.vt.Cursor,schema.core.Bool,asciinema.player.vt.Charset,schema.core.Bool,asciinema.player.vt.SavedCursor,asciinema.player.vt.Parser,asciinema.player.vt.SavedCursor,schema.core.Bool,schema.core.Num,schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.vt.CellLine], null)),schema.core.Keyword,schema.core.Num]),null),(function (p1__1550__1551__auto__){
return asciinema.player.vt.map__GT_VT.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__1550__1551__auto__));
})),new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865),null));


/**
 * Factory function for class VT, taking a map of keywords to field values.  All keys are required, and no extra keys are allowed.  Even faster than map->
 */
asciinema.player.vt.strict_map__GT_VT = (function asciinema$player$vt$strict_map__GT_VT(var_args){
var args__19853__auto__ = [];
var len__19846__auto___28147 = arguments.length;
var i__19847__auto___28148 = (0);
while(true){
if((i__19847__auto___28148 < len__19846__auto___28147)){
args__19853__auto__.push((arguments[i__19847__auto___28148]));

var G__28149 = (i__19847__auto___28148 + (1));
i__19847__auto___28148 = G__28149;
continue;
} else {
}
break;
}

var argseq__19854__auto__ = ((((1) < args__19853__auto__.length))?(new cljs.core.IndexedSeq(args__19853__auto__.slice((1)),(0))):null);
return asciinema.player.vt.strict_map__GT_VT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19854__auto__);
});

asciinema.player.vt.strict_map__GT_VT.cljs$core$IFn$_invoke$arity$variadic = (function (m28133,p__28143){
var vec__28144 = p__28143;
var drop_extra_keys_QMARK___240__auto__ = cljs.core.nth.call(null,vec__28144,(0),null);
if(cljs.core.truth_((function (){var or__18788__auto__ = drop_extra_keys_QMARK___240__auto__;
if(cljs.core.truth_(or__18788__auto__)){
return or__18788__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.count.call(null,m28133),19);
}
})())){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Wrong number of keys: expected %s, got %s",cljs.core.sort.call(null,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"top-margin","top-margin",655579514),new cljs.core.Keyword(null,"bottom-margin","bottom-margin",-701300733),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455),new cljs.core.Keyword(null,"charset-fn","charset-fn",1374523920),new cljs.core.Keyword(null,"insert-mode","insert-mode",894811791),new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583),new cljs.core.Keyword(null,"new-line-mode","new-line-mode",1467504785),new cljs.core.Keyword(null,"next-print-wraps","next-print-wraps",-1664999738),new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912),new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"saved","saved",288760660),new cljs.core.Keyword(null,"other-buffer-lines","other-buffer-lines",-1562366021),new cljs.core.Keyword(null,"other-buffer-saved","other-buffer-saved",-2048065486)], null)),cljs.core.sort.call(null,cljs.core.keys.call(null,m28133)))));
}

return (new asciinema.player.vt.VT((function (){var m__143__auto__ = m28133;
var k__144__auto__ = new cljs.core.Keyword(null,"width","width",-384071477);
var temp__4423__auto__ = cljs.core.find.call(null,m__143__auto__,k__144__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__145__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__145__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__144__auto__,m__143__auto__)));
}
})(),(function (){var m__143__auto__ = m28133;
var k__144__auto__ = new cljs.core.Keyword(null,"height","height",1025178622);
var temp__4423__auto__ = cljs.core.find.call(null,m__143__auto__,k__144__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__145__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__145__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__144__auto__,m__143__auto__)));
}
})(),(function (){var m__143__auto__ = m28133;
var k__144__auto__ = new cljs.core.Keyword(null,"top-margin","top-margin",655579514);
var temp__4423__auto__ = cljs.core.find.call(null,m__143__auto__,k__144__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__145__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__145__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__144__auto__,m__143__auto__)));
}
})(),(function (){var m__143__auto__ = m28133;
var k__144__auto__ = new cljs.core.Keyword(null,"bottom-margin","bottom-margin",-701300733);
var temp__4423__auto__ = cljs.core.find.call(null,m__143__auto__,k__144__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__145__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__145__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__144__auto__,m__143__auto__)));
}
})(),(function (){var m__143__auto__ = m28133;
var k__144__auto__ = new cljs.core.Keyword(null,"parser","parser",-1543495310);
var temp__4423__auto__ = cljs.core.find.call(null,m__143__auto__,k__144__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__145__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__145__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__144__auto__,m__143__auto__)));
}
})(),(function (){var m__143__auto__ = m28133;
var k__144__auto__ = new cljs.core.Keyword(null,"tabs","tabs",-779855354);
var temp__4423__auto__ = cljs.core.find.call(null,m__143__auto__,k__144__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__145__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__145__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__144__auto__,m__143__auto__)));
}
})(),(function (){var m__143__auto__ = m28133;
var k__144__auto__ = new cljs.core.Keyword(null,"cursor","cursor",1011937484);
var temp__4423__auto__ = cljs.core.find.call(null,m__143__auto__,k__144__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__145__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__145__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__144__auto__,m__143__auto__)));
}
})(),(function (){var m__143__auto__ = m28133;
var k__144__auto__ = new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455);
var temp__4423__auto__ = cljs.core.find.call(null,m__143__auto__,k__144__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__145__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__145__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__144__auto__,m__143__auto__)));
}
})(),(function (){var m__143__auto__ = m28133;
var k__144__auto__ = new cljs.core.Keyword(null,"charset-fn","charset-fn",1374523920);
var temp__4423__auto__ = cljs.core.find.call(null,m__143__auto__,k__144__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__145__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__145__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__144__auto__,m__143__auto__)));
}
})(),(function (){var m__143__auto__ = m28133;
var k__144__auto__ = new cljs.core.Keyword(null,"insert-mode","insert-mode",894811791);
var temp__4423__auto__ = cljs.core.find.call(null,m__143__auto__,k__144__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__145__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__145__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__144__auto__,m__143__auto__)));
}
})(),(function (){var m__143__auto__ = m28133;
var k__144__auto__ = new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583);
var temp__4423__auto__ = cljs.core.find.call(null,m__143__auto__,k__144__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__145__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__145__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__144__auto__,m__143__auto__)));
}
})(),(function (){var m__143__auto__ = m28133;
var k__144__auto__ = new cljs.core.Keyword(null,"new-line-mode","new-line-mode",1467504785);
var temp__4423__auto__ = cljs.core.find.call(null,m__143__auto__,k__144__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__145__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__145__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__144__auto__,m__143__auto__)));
}
})(),(function (){var m__143__auto__ = m28133;
var k__144__auto__ = new cljs.core.Keyword(null,"next-print-wraps","next-print-wraps",-1664999738);
var temp__4423__auto__ = cljs.core.find.call(null,m__143__auto__,k__144__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__145__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__145__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__144__auto__,m__143__auto__)));
}
})(),(function (){var m__143__auto__ = m28133;
var k__144__auto__ = new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912);
var temp__4423__auto__ = cljs.core.find.call(null,m__143__auto__,k__144__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__145__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__145__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__144__auto__,m__143__auto__)));
}
})(),(function (){var m__143__auto__ = m28133;
var k__144__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198);
var temp__4423__auto__ = cljs.core.find.call(null,m__143__auto__,k__144__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__145__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__145__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__144__auto__,m__143__auto__)));
}
})(),(function (){var m__143__auto__ = m28133;
var k__144__auto__ = new cljs.core.Keyword(null,"lines","lines",-700165781);
var temp__4423__auto__ = cljs.core.find.call(null,m__143__auto__,k__144__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__145__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__145__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__144__auto__,m__143__auto__)));
}
})(),(function (){var m__143__auto__ = m28133;
var k__144__auto__ = new cljs.core.Keyword(null,"saved","saved",288760660);
var temp__4423__auto__ = cljs.core.find.call(null,m__143__auto__,k__144__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__145__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__145__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__144__auto__,m__143__auto__)));
}
})(),(function (){var m__143__auto__ = m28133;
var k__144__auto__ = new cljs.core.Keyword(null,"other-buffer-lines","other-buffer-lines",-1562366021);
var temp__4423__auto__ = cljs.core.find.call(null,m__143__auto__,k__144__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__145__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__145__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__144__auto__,m__143__auto__)));
}
})(),(function (){var m__143__auto__ = m28133;
var k__144__auto__ = new cljs.core.Keyword(null,"other-buffer-saved","other-buffer-saved",-2048065486);
var temp__4423__auto__ = cljs.core.find.call(null,m__143__auto__,k__144__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__145__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__145__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__144__auto__,m__143__auto__)));
}
})(),null,null,null));
});

asciinema.player.vt.strict_map__GT_VT.cljs$lang$maxFixedArity = (1);

asciinema.player.vt.strict_map__GT_VT.cljs$lang$applyTo = (function (seq28141){
var G__28142 = cljs.core.first.call(null,seq28141);
var seq28141__$1 = cljs.core.next.call(null,seq28141);
return asciinema.player.vt.strict_map__GT_VT.cljs$core$IFn$_invoke$arity$variadic(G__28142,seq28141__$1);
});
asciinema.player.vt.space = (32);
asciinema.player.vt.normal_char_attrs = cljs.core.PersistentArrayMap.EMPTY;
asciinema.player.vt.default_charset = cljs.core.identity;
asciinema.player.vt.special_charset = cljs.core.PersistentHashMap.fromArrays([(121),(110),(101),(102),(106),(119),(104),(116),(99),(113),(117),(108),(109),(118),(100),(122),(111),(103),(125),(107),(97),(115),(112),(123),(120),(126),(98),(124),(96),(105),(114)],[(8804),(9532),(9226),(176),(9496),(9516),(9252),(9500),(9228),(9472),(9508),(9484),(9492),(9524),(9229),(8805),(9146),(177),(163),(9488),(9618),(9149),(9147),(960),(9474),(8901),(9225),(8800),(9830),(9227),(9148)]);
asciinema.player.vt.initial_parser = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ground","ground",1193572934),new cljs.core.Keyword(null,"intermediate-chars","intermediate-chars",93692085),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"param-chars","param-chars",38609125),cljs.core.PersistentVector.EMPTY], null);
asciinema.player.vt.initial_cursor = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"visible","visible",-1024216805),true], null);
asciinema.player.vt.initial_saved_cursor = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455),asciinema.player.vt.normal_char_attrs,new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912),false,new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583),true], null);
var ufv___28155 = schema.utils.use_fn_validation;
var output_schema28150_28156 = asciinema.player.vt.Tabs;
var input_schema28151_28157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker28152_28158 = (new cljs.core.Delay(((function (ufv___28155,output_schema28150_28156,input_schema28151_28157){
return (function (){
return schema.core.checker.call(null,input_schema28151_28157);
});})(ufv___28155,output_schema28150_28156,input_schema28151_28157))
,null));
var output_checker28153_28159 = (new cljs.core.Delay(((function (ufv___28155,output_schema28150_28156,input_schema28151_28157,input_checker28152_28158){
return (function (){
return schema.core.checker.call(null,output_schema28150_28156);
});})(ufv___28155,output_schema28150_28156,input_schema28151_28157,input_checker28152_28158))
,null));
var ret__1656__auto___28160 = /**
 * Inputs: [width]
 *   Returns: Tabs
 */
asciinema.player.vt.default_tabs = ((function (ufv___28155,output_schema28150_28156,input_schema28151_28157,input_checker28152_28158,output_checker28153_28159){
return (function asciinema$player$vt$default_tabs(G__28154){
var validate__212__auto__ = ufv___28155.get_cell();
if(cljs.core.truth_(validate__212__auto__)){
var args__213__auto___28161 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28154], null);
var temp__4425__auto___28162 = cljs.core.deref.call(null,input_checker28152_28158).call(null,args__213__auto___28161);
if(cljs.core.truth_(temp__4425__auto___28162)){
var error__214__auto___28163 = temp__4425__auto___28162;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"default-tabs","default-tabs",-1708069619,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Tabs","Tabs",-546967870,null)], null)),cljs.core.pr_str.call(null,error__214__auto___28163)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28151_28157,new cljs.core.Keyword(null,"value","value",305978217),args__213__auto___28161,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28163], null));
} else {
}
} else {
}

var o__215__auto__ = (function (){var width = G__28154;
while(true){
return cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.range.call(null,(8),width,(8)));
break;
}
})();
if(cljs.core.truth_(validate__212__auto__)){
var temp__4425__auto___28164 = cljs.core.deref.call(null,output_checker28153_28159).call(null,o__215__auto__);
if(cljs.core.truth_(temp__4425__auto___28164)){
var error__214__auto___28165 = temp__4425__auto___28164;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"default-tabs","default-tabs",-1708069619,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Tabs","Tabs",-546967870,null)], null)),cljs.core.pr_str.call(null,error__214__auto___28165)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28150_28156,new cljs.core.Keyword(null,"value","value",305978217),o__215__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28165], null));
} else {
}
} else {
}

return o__215__auto__;
});})(ufv___28155,output_schema28150_28156,input_schema28151_28157,input_checker28152_28158,output_checker28153_28159))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asciinema.player.vt.default_tabs),schema.core.__GT_FnSchema.call(null,output_schema28150_28156,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28151_28157], null)));

var ufv___28172 = schema.utils.use_fn_validation;
var output_schema28166_28173 = asciinema.player.vt.Cell;
var input_schema28167_28174 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,asciinema.player.vt.CodePoint,cljs.core.with_meta(new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CodePoint","CodePoint",-132710345,null)], null))),schema.core.one.call(null,asciinema.player.vt.CharAttrs,cljs.core.with_meta(new cljs.core.Symbol(null,"char-attrs","char-attrs",196440072,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CharAttrs","CharAttrs",1533586778,null)], null)))], null);
var input_checker28168_28175 = (new cljs.core.Delay(((function (ufv___28172,output_schema28166_28173,input_schema28167_28174){
return (function (){
return schema.core.checker.call(null,input_schema28167_28174);
});})(ufv___28172,output_schema28166_28173,input_schema28167_28174))
,null));
var output_checker28169_28176 = (new cljs.core.Delay(((function (ufv___28172,output_schema28166_28173,input_schema28167_28174,input_checker28168_28175){
return (function (){
return schema.core.checker.call(null,output_schema28166_28173);
});})(ufv___28172,output_schema28166_28173,input_schema28167_28174,input_checker28168_28175))
,null));
var ret__1656__auto___28177 = /**
 * Inputs: [ch :- CodePoint char-attrs :- CharAttrs]
 *   Returns: Cell
 */
asciinema.player.vt.cell = ((function (ufv___28172,output_schema28166_28173,input_schema28167_28174,input_checker28168_28175,output_checker28169_28176){
return (function asciinema$player$vt$cell(G__28170,G__28171){
var validate__212__auto__ = ufv___28172.get_cell();
if(cljs.core.truth_(validate__212__auto__)){
var args__213__auto___28178 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28170,G__28171], null);
var temp__4425__auto___28179 = cljs.core.deref.call(null,input_checker28168_28175).call(null,args__213__auto___28178);
if(cljs.core.truth_(temp__4425__auto___28179)){
var error__214__auto___28180 = temp__4425__auto___28179;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cell","cell",-1890190685,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)),cljs.core.pr_str.call(null,error__214__auto___28180)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28167_28174,new cljs.core.Keyword(null,"value","value",305978217),args__213__auto___28178,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28180], null));
} else {
}
} else {
}

var o__215__auto__ = (function (){var ch = G__28170;
var char_attrs = G__28171;
while(true){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[ch,char_attrs],null));
break;
}
})();
if(cljs.core.truth_(validate__212__auto__)){
var temp__4425__auto___28181 = cljs.core.deref.call(null,output_checker28169_28176).call(null,o__215__auto__);
if(cljs.core.truth_(temp__4425__auto___28181)){
var error__214__auto___28182 = temp__4425__auto___28181;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cell","cell",-1890190685,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)),cljs.core.pr_str.call(null,error__214__auto___28182)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28166_28173,new cljs.core.Keyword(null,"value","value",305978217),o__215__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28182], null));
} else {
}
} else {
}

return o__215__auto__;
});})(ufv___28172,output_schema28166_28173,input_schema28167_28174,input_checker28168_28175,output_checker28169_28176))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asciinema.player.vt.cell),schema.core.__GT_FnSchema.call(null,output_schema28166_28173,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28167_28174], null)));

var ufv___28188 = schema.utils.use_fn_validation;
var output_schema28183_28189 = asciinema.player.vt.Cell;
var input_schema28184_28190 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"char-attrs","char-attrs",196440072,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker28185_28191 = (new cljs.core.Delay(((function (ufv___28188,output_schema28183_28189,input_schema28184_28190){
return (function (){
return schema.core.checker.call(null,input_schema28184_28190);
});})(ufv___28188,output_schema28183_28189,input_schema28184_28190))
,null));
var output_checker28186_28192 = (new cljs.core.Delay(((function (ufv___28188,output_schema28183_28189,input_schema28184_28190,input_checker28185_28191){
return (function (){
return schema.core.checker.call(null,output_schema28183_28189);
});})(ufv___28188,output_schema28183_28189,input_schema28184_28190,input_checker28185_28191))
,null));
var ret__1656__auto___28193 = /**
 * Inputs: [char-attrs]
 *   Returns: Cell
 */
asciinema.player.vt.empty_cell = ((function (ufv___28188,output_schema28183_28189,input_schema28184_28190,input_checker28185_28191,output_checker28186_28192){
return (function asciinema$player$vt$empty_cell(G__28187){
var validate__212__auto__ = ufv___28188.get_cell();
if(cljs.core.truth_(validate__212__auto__)){
var args__213__auto___28194 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28187], null);
var temp__4425__auto___28195 = cljs.core.deref.call(null,input_checker28185_28191).call(null,args__213__auto___28194);
if(cljs.core.truth_(temp__4425__auto___28195)){
var error__214__auto___28196 = temp__4425__auto___28195;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"empty-cell","empty-cell",-503630382,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)),cljs.core.pr_str.call(null,error__214__auto___28196)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28184_28190,new cljs.core.Keyword(null,"value","value",305978217),args__213__auto___28194,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28196], null));
} else {
}
} else {
}

var o__215__auto__ = (function (){var char_attrs = G__28187;
while(true){
return asciinema.player.vt.cell.call(null,asciinema.player.vt.space,char_attrs);
break;
}
})();
if(cljs.core.truth_(validate__212__auto__)){
var temp__4425__auto___28197 = cljs.core.deref.call(null,output_checker28186_28192).call(null,o__215__auto__);
if(cljs.core.truth_(temp__4425__auto___28197)){
var error__214__auto___28198 = temp__4425__auto___28197;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"empty-cell","empty-cell",-503630382,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)),cljs.core.pr_str.call(null,error__214__auto___28198)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28183_28189,new cljs.core.Keyword(null,"value","value",305978217),o__215__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28198], null));
} else {
}
} else {
}

return o__215__auto__;
});})(ufv___28188,output_schema28183_28189,input_schema28184_28190,input_checker28185_28191,output_checker28186_28192))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asciinema.player.vt.empty_cell),schema.core.__GT_FnSchema.call(null,output_schema28183_28189,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28184_28190], null)));

var ufv___28212 = schema.utils.use_fn_validation;
var output_schema28199_28213 = asciinema.player.vt.CellLine;
var input_schema28200_28214 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_schema28204_28215 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"char-attrs","char-attrs",196440072,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker28201_28216 = (new cljs.core.Delay(((function (ufv___28212,output_schema28199_28213,input_schema28200_28214,input_schema28204_28215){
return (function (){
return schema.core.checker.call(null,input_schema28200_28214);
});})(ufv___28212,output_schema28199_28213,input_schema28200_28214,input_schema28204_28215))
,null));
var output_checker28202_28217 = (new cljs.core.Delay(((function (ufv___28212,output_schema28199_28213,input_schema28200_28214,input_schema28204_28215,input_checker28201_28216){
return (function (){
return schema.core.checker.call(null,output_schema28199_28213);
});})(ufv___28212,output_schema28199_28213,input_schema28200_28214,input_schema28204_28215,input_checker28201_28216))
,null));
var input_checker28205_28218 = (new cljs.core.Delay(((function (ufv___28212,output_schema28199_28213,input_schema28200_28214,input_schema28204_28215,input_checker28201_28216,output_checker28202_28217){
return (function (){
return schema.core.checker.call(null,input_schema28204_28215);
});})(ufv___28212,output_schema28199_28213,input_schema28200_28214,input_schema28204_28215,input_checker28201_28216,output_checker28202_28217))
,null));
var output_checker28206_28219 = (new cljs.core.Delay(((function (ufv___28212,output_schema28199_28213,input_schema28200_28214,input_schema28204_28215,input_checker28201_28216,output_checker28202_28217,input_checker28205_28218){
return (function (){
return schema.core.checker.call(null,output_schema28199_28213);
});})(ufv___28212,output_schema28199_28213,input_schema28200_28214,input_schema28204_28215,input_checker28201_28216,output_checker28202_28217,input_checker28205_28218))
,null));
var ret__1656__auto___28220 = (function (){
/**
 * Inputs: ([width] [width char-attrs])
 *   Returns: CellLine
 */
asciinema.player.vt.empty_line = ((function (ufv___28212,output_schema28199_28213,input_schema28200_28214,input_schema28204_28215,input_checker28201_28216,output_checker28202_28217,input_checker28205_28218,output_checker28206_28219){
return (function asciinema$player$vt$empty_line(var_args){
var args28209 = [];
var len__19846__auto___28221 = arguments.length;
var i__19847__auto___28222 = (0);
while(true){
if((i__19847__auto___28222 < len__19846__auto___28221)){
args28209.push((arguments[i__19847__auto___28222]));

var G__28223 = (i__19847__auto___28222 + (1));
i__19847__auto___28222 = G__28223;
continue;
} else {
}
break;
}

var G__28211 = args28209.length;
switch (G__28211) {
case 1:
return asciinema.player.vt.empty_line.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return asciinema.player.vt.empty_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28209.length)].join('')));

}
});})(ufv___28212,output_schema28199_28213,input_schema28200_28214,input_schema28204_28215,input_checker28201_28216,output_checker28202_28217,input_checker28205_28218,output_checker28206_28219))
;

asciinema.player.vt.empty_line.cljs$core$IFn$_invoke$arity$1 = ((function (ufv___28212,output_schema28199_28213,input_schema28200_28214,input_schema28204_28215,input_checker28201_28216,output_checker28202_28217,input_checker28205_28218,output_checker28206_28219){
return (function (G__28203){
var validate__212__auto__ = ufv___28212.get_cell();
if(cljs.core.truth_(validate__212__auto__)){
var args__213__auto___28225 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28203], null);
var temp__4425__auto___28226 = cljs.core.deref.call(null,input_checker28201_28216).call(null,args__213__auto___28225);
if(cljs.core.truth_(temp__4425__auto___28226)){
var error__214__auto___28227 = temp__4425__auto___28226;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"empty-line","empty-line",-691992781,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CellLine","CellLine",-317574363,null)], null)),cljs.core.pr_str.call(null,error__214__auto___28227)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28200_28214,new cljs.core.Keyword(null,"value","value",305978217),args__213__auto___28225,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28227], null));
} else {
}
} else {
}

var o__215__auto__ = (function (){var width = G__28203;
while(true){
return asciinema.player.vt.empty_line.call(null,width,asciinema.player.vt.normal_char_attrs);
break;
}
})();
if(cljs.core.truth_(validate__212__auto__)){
var temp__4425__auto___28228 = cljs.core.deref.call(null,output_checker28202_28217).call(null,o__215__auto__);
if(cljs.core.truth_(temp__4425__auto___28228)){
var error__214__auto___28229 = temp__4425__auto___28228;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"empty-line","empty-line",-691992781,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CellLine","CellLine",-317574363,null)], null)),cljs.core.pr_str.call(null,error__214__auto___28229)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28199_28213,new cljs.core.Keyword(null,"value","value",305978217),o__215__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28229], null));
} else {
}
} else {
}

return o__215__auto__;
});})(ufv___28212,output_schema28199_28213,input_schema28200_28214,input_schema28204_28215,input_checker28201_28216,output_checker28202_28217,input_checker28205_28218,output_checker28206_28219))
;

asciinema.player.vt.empty_line.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___28212,output_schema28199_28213,input_schema28200_28214,input_schema28204_28215,input_checker28201_28216,output_checker28202_28217,input_checker28205_28218,output_checker28206_28219){
return (function (G__28207,G__28208){
var validate__212__auto__ = ufv___28212.get_cell();
if(cljs.core.truth_(validate__212__auto__)){
var args__213__auto___28230 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28207,G__28208], null);
var temp__4425__auto___28231 = cljs.core.deref.call(null,input_checker28205_28218).call(null,args__213__auto___28230);
if(cljs.core.truth_(temp__4425__auto___28231)){
var error__214__auto___28232 = temp__4425__auto___28231;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"empty-line","empty-line",-691992781,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CellLine","CellLine",-317574363,null)], null)),cljs.core.pr_str.call(null,error__214__auto___28232)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28204_28215,new cljs.core.Keyword(null,"value","value",305978217),args__213__auto___28230,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28232], null));
} else {
}
} else {
}

var o__215__auto__ = (function (){var width = G__28207;
var char_attrs = G__28208;
while(true){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,width,asciinema.player.vt.empty_cell.call(null,char_attrs)));
break;
}
})();
if(cljs.core.truth_(validate__212__auto__)){
var temp__4425__auto___28233 = cljs.core.deref.call(null,output_checker28206_28219).call(null,o__215__auto__);
if(cljs.core.truth_(temp__4425__auto___28233)){
var error__214__auto___28234 = temp__4425__auto___28233;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"empty-line","empty-line",-691992781,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CellLine","CellLine",-317574363,null)], null)),cljs.core.pr_str.call(null,error__214__auto___28234)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28199_28213,new cljs.core.Keyword(null,"value","value",305978217),o__215__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28234], null));
} else {
}
} else {
}

return o__215__auto__;
});})(ufv___28212,output_schema28199_28213,input_schema28200_28214,input_schema28204_28215,input_checker28201_28216,output_checker28202_28217,input_checker28205_28218,output_checker28206_28219))
;

return asciinema.player.vt.empty_line.cljs$lang$maxFixedArity = 2;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asciinema.player.vt.empty_line),schema.core.make_fn_schema.call(null,output_schema28199_28213,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28200_28214,input_schema28204_28215], null)));

var ufv___28250 = schema.utils.use_fn_validation;
var output_schema28235_28251 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.vt.CellLine], null);
var input_schema28236_28252 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_schema28241_28253 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"char-attrs","char-attrs",196440072,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker28237_28254 = (new cljs.core.Delay(((function (ufv___28250,output_schema28235_28251,input_schema28236_28252,input_schema28241_28253){
return (function (){
return schema.core.checker.call(null,input_schema28236_28252);
});})(ufv___28250,output_schema28235_28251,input_schema28236_28252,input_schema28241_28253))
,null));
var output_checker28238_28255 = (new cljs.core.Delay(((function (ufv___28250,output_schema28235_28251,input_schema28236_28252,input_schema28241_28253,input_checker28237_28254){
return (function (){
return schema.core.checker.call(null,output_schema28235_28251);
});})(ufv___28250,output_schema28235_28251,input_schema28236_28252,input_schema28241_28253,input_checker28237_28254))
,null));
var input_checker28242_28256 = (new cljs.core.Delay(((function (ufv___28250,output_schema28235_28251,input_schema28236_28252,input_schema28241_28253,input_checker28237_28254,output_checker28238_28255){
return (function (){
return schema.core.checker.call(null,input_schema28241_28253);
});})(ufv___28250,output_schema28235_28251,input_schema28236_28252,input_schema28241_28253,input_checker28237_28254,output_checker28238_28255))
,null));
var output_checker28243_28257 = (new cljs.core.Delay(((function (ufv___28250,output_schema28235_28251,input_schema28236_28252,input_schema28241_28253,input_checker28237_28254,output_checker28238_28255,input_checker28242_28256){
return (function (){
return schema.core.checker.call(null,output_schema28235_28251);
});})(ufv___28250,output_schema28235_28251,input_schema28236_28252,input_schema28241_28253,input_checker28237_28254,output_checker28238_28255,input_checker28242_28256))
,null));
var ret__1656__auto___28258 = (function (){
/**
 * Inputs: ([width height] [width height char-attrs])
 *   Returns: [CellLine]
 */
asciinema.player.vt.empty_screen = ((function (ufv___28250,output_schema28235_28251,input_schema28236_28252,input_schema28241_28253,input_checker28237_28254,output_checker28238_28255,input_checker28242_28256,output_checker28243_28257){
return (function asciinema$player$vt$empty_screen(var_args){
var args28247 = [];
var len__19846__auto___28259 = arguments.length;
var i__19847__auto___28260 = (0);
while(true){
if((i__19847__auto___28260 < len__19846__auto___28259)){
args28247.push((arguments[i__19847__auto___28260]));

var G__28261 = (i__19847__auto___28260 + (1));
i__19847__auto___28260 = G__28261;
continue;
} else {
}
break;
}

var G__28249 = args28247.length;
switch (G__28249) {
case 2:
return asciinema.player.vt.empty_screen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return asciinema.player.vt.empty_screen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28247.length)].join('')));

}
});})(ufv___28250,output_schema28235_28251,input_schema28236_28252,input_schema28241_28253,input_checker28237_28254,output_checker28238_28255,input_checker28242_28256,output_checker28243_28257))
;

asciinema.player.vt.empty_screen.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___28250,output_schema28235_28251,input_schema28236_28252,input_schema28241_28253,input_checker28237_28254,output_checker28238_28255,input_checker28242_28256,output_checker28243_28257){
return (function (G__28239,G__28240){
var validate__212__auto__ = ufv___28250.get_cell();
if(cljs.core.truth_(validate__212__auto__)){
var args__213__auto___28263 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28239,G__28240], null);
var temp__4425__auto___28264 = cljs.core.deref.call(null,input_checker28237_28254).call(null,args__213__auto___28263);
if(cljs.core.truth_(temp__4425__auto___28264)){
var error__214__auto___28265 = temp__4425__auto___28264;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"empty-screen","empty-screen",-1820747637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellLine","CellLine",-317574363,null)], null)], null)),cljs.core.pr_str.call(null,error__214__auto___28265)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28236_28252,new cljs.core.Keyword(null,"value","value",305978217),args__213__auto___28263,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28265], null));
} else {
}
} else {
}

var o__215__auto__ = (function (){var width = G__28239;
var height = G__28240;
while(true){
return asciinema.player.vt.empty_screen.call(null,width,height,asciinema.player.vt.normal_char_attrs);
break;
}
})();
if(cljs.core.truth_(validate__212__auto__)){
var temp__4425__auto___28266 = cljs.core.deref.call(null,output_checker28238_28255).call(null,o__215__auto__);
if(cljs.core.truth_(temp__4425__auto___28266)){
var error__214__auto___28267 = temp__4425__auto___28266;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"empty-screen","empty-screen",-1820747637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellLine","CellLine",-317574363,null)], null)], null)),cljs.core.pr_str.call(null,error__214__auto___28267)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28235_28251,new cljs.core.Keyword(null,"value","value",305978217),o__215__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28267], null));
} else {
}
} else {
}

return o__215__auto__;
});})(ufv___28250,output_schema28235_28251,input_schema28236_28252,input_schema28241_28253,input_checker28237_28254,output_checker28238_28255,input_checker28242_28256,output_checker28243_28257))
;

asciinema.player.vt.empty_screen.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___28250,output_schema28235_28251,input_schema28236_28252,input_schema28241_28253,input_checker28237_28254,output_checker28238_28255,input_checker28242_28256,output_checker28243_28257){
return (function (G__28244,G__28245,G__28246){
var validate__212__auto__ = ufv___28250.get_cell();
if(cljs.core.truth_(validate__212__auto__)){
var args__213__auto___28268 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28244,G__28245,G__28246], null);
var temp__4425__auto___28269 = cljs.core.deref.call(null,input_checker28242_28256).call(null,args__213__auto___28268);
if(cljs.core.truth_(temp__4425__auto___28269)){
var error__214__auto___28270 = temp__4425__auto___28269;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"empty-screen","empty-screen",-1820747637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellLine","CellLine",-317574363,null)], null)], null)),cljs.core.pr_str.call(null,error__214__auto___28270)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28241_28253,new cljs.core.Keyword(null,"value","value",305978217),args__213__auto___28268,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28270], null));
} else {
}
} else {
}

var o__215__auto__ = (function (){var width = G__28244;
var height = G__28245;
var char_attrs = G__28246;
while(true){
var line = asciinema.player.vt.empty_line.call(null,width,char_attrs);
return cljs.core.vec.call(null,cljs.core.repeat.call(null,height,line));
break;
}
})();
if(cljs.core.truth_(validate__212__auto__)){
var temp__4425__auto___28271 = cljs.core.deref.call(null,output_checker28243_28257).call(null,o__215__auto__);
if(cljs.core.truth_(temp__4425__auto___28271)){
var error__214__auto___28272 = temp__4425__auto___28271;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"empty-screen","empty-screen",-1820747637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellLine","CellLine",-317574363,null)], null)], null)),cljs.core.pr_str.call(null,error__214__auto___28272)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28235_28251,new cljs.core.Keyword(null,"value","value",305978217),o__215__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28272], null));
} else {
}
} else {
}

return o__215__auto__;
});})(ufv___28250,output_schema28235_28251,input_schema28236_28252,input_schema28241_28253,input_checker28237_28254,output_checker28238_28255,input_checker28242_28256,output_checker28243_28257))
;

return asciinema.player.vt.empty_screen.cljs$lang$maxFixedArity = 3;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asciinema.player.vt.empty_screen),schema.core.make_fn_schema.call(null,output_schema28235_28251,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28236_28252,input_schema28241_28253], null)));

var ufv___28279 = schema.utils.use_fn_validation;
var output_schema28273_28280 = asciinema.player.vt.VT;
var input_schema28274_28281 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Num,cljs.core.with_meta(new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null))),schema.core.one.call(null,schema.core.Num,cljs.core.with_meta(new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)))], null);
var input_checker28275_28282 = (new cljs.core.Delay(((function (ufv___28279,output_schema28273_28280,input_schema28274_28281){
return (function (){
return schema.core.checker.call(null,input_schema28274_28281);
});})(ufv___28279,output_schema28273_28280,input_schema28274_28281))
,null));
var output_checker28276_28283 = (new cljs.core.Delay(((function (ufv___28279,output_schema28273_28280,input_schema28274_28281,input_checker28275_28282){
return (function (){
return schema.core.checker.call(null,output_schema28273_28280);
});})(ufv___28279,output_schema28273_28280,input_schema28274_28281,input_checker28275_28282))
,null));
var ret__1656__auto___28284 = /**
 * Inputs: [width :- s/Num height :- s/Num]
 *   Returns: VT
 */
asciinema.player.vt.make_vt = ((function (ufv___28279,output_schema28273_28280,input_schema28274_28281,input_checker28275_28282,output_checker28276_28283){
return (function asciinema$player$vt$make_vt(G__28277,G__28278){
var validate__212__auto__ = ufv___28279.get_cell();
if(cljs.core.truth_(validate__212__auto__)){
var args__213__auto___28285 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28277,G__28278], null);
var temp__4425__auto___28286 = cljs.core.deref.call(null,input_checker28275_28282).call(null,args__213__auto___28285);
if(cljs.core.truth_(temp__4425__auto___28286)){
var error__214__auto___28287 = temp__4425__auto___28286;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"make-vt","make-vt",-592180733,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"VT","VT",-1472079567,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"VT","VT",-1472079567,null)], null)),cljs.core.pr_str.call(null,error__214__auto___28287)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28274_28281,new cljs.core.Keyword(null,"value","value",305978217),args__213__auto___28285,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28287], null));
} else {
}
} else {
}

var o__215__auto__ = (function (){var width = G__28277;
var height = G__28278;
while(true){
return asciinema.player.vt.map__GT_VT.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455),new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583),new cljs.core.Keyword(null,"bottom-margin","bottom-margin",-701300733),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"next-print-wraps","next-print-wraps",-1664999738),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"insert-mode","insert-mode",894811791),new cljs.core.Keyword(null,"charset-fn","charset-fn",1374523920),new cljs.core.Keyword(null,"new-line-mode","new-line-mode",1467504785),new cljs.core.Keyword(null,"other-buffer-saved","other-buffer-saved",-2048065486),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"saved","saved",288760660),new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912),new cljs.core.Keyword(null,"top-margin","top-margin",655579514),new cljs.core.Keyword(null,"other-buffer-lines","other-buffer-lines",-1562366021),new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"height","height",1025178622)],[asciinema.player.vt.normal_char_attrs,true,(height - (1)),asciinema.player.vt.default_tabs.call(null,width),false,width,asciinema.player.vt.empty_screen.call(null,width,height),asciinema.player.vt.initial_cursor,false,asciinema.player.vt.default_charset,false,asciinema.player.vt.initial_saved_cursor,asciinema.player.vt.initial_parser,asciinema.player.vt.initial_saved_cursor,false,(0),null,new cljs.core.Keyword(null,"primary","primary",817773892),height]));
break;
}
})();
if(cljs.core.truth_(validate__212__auto__)){
var temp__4425__auto___28288 = cljs.core.deref.call(null,output_checker28276_28283).call(null,o__215__auto__);
if(cljs.core.truth_(temp__4425__auto___28288)){
var error__214__auto___28289 = temp__4425__auto___28288;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"make-vt","make-vt",-592180733,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"VT","VT",-1472079567,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"VT","VT",-1472079567,null)], null)),cljs.core.pr_str.call(null,error__214__auto___28289)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28273_28280,new cljs.core.Keyword(null,"value","value",305978217),o__215__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28289], null));
} else {
}
} else {
}

return o__215__auto__;
});})(ufv___28279,output_schema28273_28280,input_schema28274_28281,input_checker28275_28282,output_checker28276_28283))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asciinema.player.vt.make_vt),schema.core.__GT_FnSchema.call(null,output_schema28273_28280,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28274_28281], null)));

asciinema.player.vt.show_cursor = (function asciinema$player$vt$show_cursor(var_args){
var args28290 = [];
var len__19846__auto___28293 = arguments.length;
var i__19847__auto___28294 = (0);
while(true){
if((i__19847__auto___28294 < len__19846__auto___28293)){
args28290.push((arguments[i__19847__auto___28294]));

var G__28295 = (i__19847__auto___28294 + (1));
i__19847__auto___28294 = G__28295;
continue;
} else {
}
break;
}

var G__28292 = args28290.length;
switch (G__28292) {
case 1:
return asciinema.player.vt.show_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return asciinema.player.vt.show_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28290.length)].join('')));

}
});

asciinema.player.vt.show_cursor.cljs$core$IFn$_invoke$arity$1 = (function (vt){
return asciinema.player.vt.show_cursor.call(null,vt,true);
});

asciinema.player.vt.show_cursor.cljs$core$IFn$_invoke$arity$2 = (function (vt,show_QMARK_){
return cljs.core.assoc_in.call(null,vt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),show_QMARK_);
});

asciinema.player.vt.show_cursor.cljs$lang$maxFixedArity = 2;
asciinema.player.vt.set_margin = (function asciinema$player$vt$set_margin(vt,top,bottom){
return cljs.core.assoc.call(null,vt,new cljs.core.Keyword(null,"top-margin","top-margin",655579514),top,new cljs.core.Keyword(null,"bottom-margin","bottom-margin",-701300733),bottom);
});
asciinema.player.vt.scroll_up_lines = (function asciinema$player$vt$scroll_up_lines(lines,n,filler){
var n__$1 = (function (){var x__19126__auto__ = n;
var y__19127__auto__ = cljs.core.count.call(null,lines);
return ((x__19126__auto__ < y__19127__auto__) ? x__19126__auto__ : y__19127__auto__);
})();
return cljs.core.concat.call(null,cljs.core.drop.call(null,n__$1,lines),cljs.core.repeat.call(null,n__$1,filler));
});
asciinema.player.vt.scroll_up = (function asciinema$player$vt$scroll_up(var_args){
var args28297 = [];
var len__19846__auto___28303 = arguments.length;
var i__19847__auto___28304 = (0);
while(true){
if((i__19847__auto___28304 < len__19846__auto___28303)){
args28297.push((arguments[i__19847__auto___28304]));

var G__28305 = (i__19847__auto___28304 + (1));
i__19847__auto___28304 = G__28305;
continue;
} else {
}
break;
}

var G__28299 = args28297.length;
switch (G__28299) {
case 1:
return asciinema.player.vt.scroll_up.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return asciinema.player.vt.scroll_up.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28297.length)].join('')));

}
});

asciinema.player.vt.scroll_up.cljs$core$IFn$_invoke$arity$1 = (function (vt){
return asciinema.player.vt.scroll_up.call(null,vt,(1));
});

asciinema.player.vt.scroll_up.cljs$core$IFn$_invoke$arity$2 = (function (p__28300,n){
var map__28301 = p__28300;
var map__28301__$1 = ((((!((map__28301 == null)))?((((map__28301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28301):map__28301);
var vt = map__28301__$1;
var width = cljs.core.get.call(null,map__28301__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var top_margin = cljs.core.get.call(null,map__28301__$1,new cljs.core.Keyword(null,"top-margin","top-margin",655579514));
var bottom_margin = cljs.core.get.call(null,map__28301__$1,new cljs.core.Keyword(null,"bottom-margin","bottom-margin",-701300733));
var char_attrs = cljs.core.get.call(null,map__28301__$1,new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455));
var filler = asciinema.player.vt.empty_line.call(null,width,char_attrs);
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null),((function (filler,map__28301,map__28301__$1,vt,width,top_margin,bottom_margin,char_attrs){
return (function (lines){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.take.call(null,top_margin,lines),asciinema.player.vt.scroll_up_lines.call(null,cljs.core.subvec.call(null,lines,top_margin,(bottom_margin + (1))),n,filler),cljs.core.drop.call(null,(bottom_margin + (1)),lines)));
});})(filler,map__28301,map__28301__$1,vt,width,top_margin,bottom_margin,char_attrs))
);
});

asciinema.player.vt.scroll_up.cljs$lang$maxFixedArity = 2;
asciinema.player.vt.scroll_down_lines = (function asciinema$player$vt$scroll_down_lines(lines,n,filler){
var height = cljs.core.count.call(null,lines);
var n__$1 = (function (){var x__19126__auto__ = n;
var y__19127__auto__ = height;
return ((x__19126__auto__ < y__19127__auto__) ? x__19126__auto__ : y__19127__auto__);
})();
return cljs.core.concat.call(null,cljs.core.repeat.call(null,n__$1,filler),cljs.core.take.call(null,(height - n__$1),lines));
});
asciinema.player.vt.scroll_down = (function asciinema$player$vt$scroll_down(var_args){
var args28307 = [];
var len__19846__auto___28313 = arguments.length;
var i__19847__auto___28314 = (0);
while(true){
if((i__19847__auto___28314 < len__19846__auto___28313)){
args28307.push((arguments[i__19847__auto___28314]));

var G__28315 = (i__19847__auto___28314 + (1));
i__19847__auto___28314 = G__28315;
continue;
} else {
}
break;
}

var G__28309 = args28307.length;
switch (G__28309) {
case 1:
return asciinema.player.vt.scroll_down.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return asciinema.player.vt.scroll_down.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28307.length)].join('')));

}
});

asciinema.player.vt.scroll_down.cljs$core$IFn$_invoke$arity$1 = (function (vt){
return asciinema.player.vt.scroll_down.call(null,vt,(1));
});

asciinema.player.vt.scroll_down.cljs$core$IFn$_invoke$arity$2 = (function (p__28310,n){
var map__28311 = p__28310;
var map__28311__$1 = ((((!((map__28311 == null)))?((((map__28311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28311):map__28311);
var vt = map__28311__$1;
var width = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var top_margin = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"top-margin","top-margin",655579514));
var bottom_margin = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"bottom-margin","bottom-margin",-701300733));
var char_attrs = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455));
var filler = asciinema.player.vt.empty_line.call(null,width,char_attrs);
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null),((function (filler,map__28311,map__28311__$1,vt,width,top_margin,bottom_margin,char_attrs){
return (function (lines){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.take.call(null,top_margin,lines),asciinema.player.vt.scroll_down_lines.call(null,cljs.core.subvec.call(null,lines,top_margin,(bottom_margin + (1))),n,filler),cljs.core.drop.call(null,(bottom_margin + (1)),lines)));
});})(filler,map__28311,map__28311__$1,vt,width,top_margin,bottom_margin,char_attrs))
);
});

asciinema.player.vt.scroll_down.cljs$lang$maxFixedArity = 2;
asciinema.player.vt.move_cursor_to_col = (function asciinema$player$vt$move_cursor_to_col(vt,x){
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,vt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"x","x",2099068185)], null),x),new cljs.core.Keyword(null,"next-print-wraps","next-print-wraps",-1664999738),false);
});
asciinema.player.vt.move_cursor_to_row = (function asciinema$player$vt$move_cursor_to_row(p__28317,y){
var map__28322 = p__28317;
var map__28322__$1 = ((((!((map__28322 == null)))?((((map__28322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28322):map__28322);
var vt = map__28322__$1;
var map__28323 = cljs.core.get.call(null,map__28322__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28323__$1 = ((((!((map__28323 == null)))?((((map__28323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28323):map__28323);
var x = cljs.core.get.call(null,map__28323__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var width = cljs.core.get.call(null,map__28322__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,vt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"x","x",2099068185)], null),(function (){var x__19126__auto__ = x;
var y__19127__auto__ = (width - (1));
return ((x__19126__auto__ < y__19127__auto__) ? x__19126__auto__ : y__19127__auto__);
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"y","y",-1757859776)], null),y),new cljs.core.Keyword(null,"next-print-wraps","next-print-wraps",-1664999738),false);
});
asciinema.player.vt.move_cursor_to_home = (function asciinema$player$vt$move_cursor_to_home(p__28326){
var map__28329 = p__28326;
var map__28329__$1 = ((((!((map__28329 == null)))?((((map__28329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28329):map__28329);
var vt = map__28329__$1;
var origin_mode = cljs.core.get.call(null,map__28329__$1,new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912));
var top_margin = cljs.core.get.call(null,map__28329__$1,new cljs.core.Keyword(null,"top-margin","top-margin",655579514));
var top = (cljs.core.truth_(origin_mode)?top_margin:(0));
return asciinema.player.vt.move_cursor_to_row.call(null,asciinema.player.vt.move_cursor_to_col.call(null,vt,(0)),top);
});
asciinema.player.vt.move_cursor_down = (function asciinema$player$vt$move_cursor_down(p__28331){
var map__28336 = p__28331;
var map__28336__$1 = ((((!((map__28336 == null)))?((((map__28336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28336):map__28336);
var vt = map__28336__$1;
var map__28337 = cljs.core.get.call(null,map__28336__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28337__$1 = ((((!((map__28337 == null)))?((((map__28337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28337):map__28337);
var y = cljs.core.get.call(null,map__28337__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var bottom_margin = cljs.core.get.call(null,map__28336__$1,new cljs.core.Keyword(null,"bottom-margin","bottom-margin",-701300733));
var height = cljs.core.get.call(null,map__28336__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var last_row = (height - (1));
if(cljs.core._EQ_.call(null,y,bottom_margin)){
return asciinema.player.vt.scroll_up.call(null,vt);
} else {
if((y < last_row)){
return asciinema.player.vt.move_cursor_to_row.call(null,vt,(y + (1)));
} else {
return vt;

}
}
});
asciinema.player.vt.switch_to_alternate_buffer = (function asciinema$player$vt$switch_to_alternate_buffer(p__28340){
var map__28343 = p__28340;
var map__28343__$1 = ((((!((map__28343 == null)))?((((map__28343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28343):map__28343);
var vt = map__28343__$1;
var buffer = cljs.core.get.call(null,map__28343__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var width = cljs.core.get.call(null,map__28343__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__28343__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var char_attrs = cljs.core.get.call(null,map__28343__$1,new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455));
if(cljs.core._EQ_.call(null,buffer,new cljs.core.Keyword(null,"primary","primary",817773892))){
return cljs.core.assoc.call(null,vt,new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"alternate","alternate",-931038644),new cljs.core.Keyword(null,"other-buffer-lines","other-buffer-lines",-1562366021),new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(vt),new cljs.core.Keyword(null,"other-buffer-saved","other-buffer-saved",-2048065486),new cljs.core.Keyword(null,"saved","saved",288760660).cljs$core$IFn$_invoke$arity$1(vt),new cljs.core.Keyword(null,"lines","lines",-700165781),asciinema.player.vt.empty_screen.call(null,width,height,char_attrs),new cljs.core.Keyword(null,"saved","saved",288760660),new cljs.core.Keyword(null,"other-buffer-saved","other-buffer-saved",-2048065486).cljs$core$IFn$_invoke$arity$1(vt));
} else {
return vt;
}
});
asciinema.player.vt.switch_to_primary_buffer = (function asciinema$player$vt$switch_to_primary_buffer(p__28345){
var map__28348 = p__28345;
var map__28348__$1 = ((((!((map__28348 == null)))?((((map__28348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28348):map__28348);
var vt = map__28348__$1;
var buffer = cljs.core.get.call(null,map__28348__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
if(cljs.core._EQ_.call(null,buffer,new cljs.core.Keyword(null,"alternate","alternate",-931038644))){
return cljs.core.assoc.call(null,vt,new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"other-buffer-lines","other-buffer-lines",-1562366021),null,new cljs.core.Keyword(null,"other-buffer-saved","other-buffer-saved",-2048065486),new cljs.core.Keyword(null,"saved","saved",288760660).cljs$core$IFn$_invoke$arity$1(vt),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"other-buffer-lines","other-buffer-lines",-1562366021).cljs$core$IFn$_invoke$arity$1(vt),new cljs.core.Keyword(null,"saved","saved",288760660),new cljs.core.Keyword(null,"other-buffer-saved","other-buffer-saved",-2048065486).cljs$core$IFn$_invoke$arity$1(vt));
} else {
return vt;
}
});
asciinema.player.vt.save_cursor = (function asciinema$player$vt$save_cursor(p__28350){
var map__28355 = p__28350;
var map__28355__$1 = ((((!((map__28355 == null)))?((((map__28355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28355):map__28355);
var vt = map__28355__$1;
var map__28356 = cljs.core.get.call(null,map__28355__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28356__$1 = ((((!((map__28356 == null)))?((((map__28356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28356):map__28356);
var x = cljs.core.get.call(null,map__28356__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28356__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var char_attrs = cljs.core.get.call(null,map__28355__$1,new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455));
var origin_mode = cljs.core.get.call(null,map__28355__$1,new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912));
var auto_wrap_mode = cljs.core.get.call(null,map__28355__$1,new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583));
return cljs.core.assoc.call(null,vt,new cljs.core.Keyword(null,"saved","saved",288760660),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455),char_attrs,new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912),origin_mode,new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583),auto_wrap_mode], null));
});
asciinema.player.vt.restore_cursor = (function asciinema$player$vt$restore_cursor(p__28359){
var map__28364 = p__28359;
var map__28364__$1 = ((((!((map__28364 == null)))?((((map__28364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28364):map__28364);
var vt = map__28364__$1;
var map__28365 = cljs.core.get.call(null,map__28364__$1,new cljs.core.Keyword(null,"saved","saved",288760660));
var map__28365__$1 = ((((!((map__28365 == null)))?((((map__28365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28365):map__28365);
var cursor = cljs.core.get.call(null,map__28365__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var char_attrs = cljs.core.get.call(null,map__28365__$1,new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455));
var origin_mode = cljs.core.get.call(null,map__28365__$1,new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912));
var auto_wrap_mode = cljs.core.get.call(null,map__28365__$1,new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583));
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,vt,new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455),char_attrs,new cljs.core.Keyword(null,"next-print-wraps","next-print-wraps",-1664999738),false,new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912),origin_mode,new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583),auto_wrap_mode),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484)], null),cljs.core.merge,cursor);
});
asciinema.player.vt.set_mode = (function asciinema$player$vt$set_mode(vt,intermediate,param){
try{if((intermediate === null)){
try{if((param === (4))){
return cljs.core.assoc.call(null,vt,new cljs.core.Keyword(null,"insert-mode","insert-mode",894811791),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28392){if((e28392 instanceof Error)){
var e__20430__auto__ = e28392;
if((e__20430__auto__ === cljs.core.match.backtrack)){
try{if((param === (20))){
return cljs.core.assoc.call(null,vt,new cljs.core.Keyword(null,"new-line-mode","new-line-mode",1467504785),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28393){if((e28393 instanceof Error)){
var e__20430__auto____$1 = e28393;
if((e__20430__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20430__auto____$1;
}
} else {
throw e28393;

}
}} else {
throw e__20430__auto__;
}
} else {
throw e28392;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28383){if((e28383 instanceof Error)){
var e__20430__auto__ = e28383;
if((e__20430__auto__ === cljs.core.match.backtrack)){
try{if((intermediate === (63))){
try{if((param === (6))){
return asciinema.player.vt.move_cursor_to_home.call(null,cljs.core.assoc.call(null,vt,new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912),true));
} else {
throw cljs.core.match.backtrack;

}
}catch (e28385){if((e28385 instanceof Error)){
var e__20430__auto____$1 = e28385;
if((e__20430__auto____$1 === cljs.core.match.backtrack)){
try{if((param === (7))){
return cljs.core.assoc.call(null,vt,new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28386){if((e28386 instanceof Error)){
var e__20430__auto____$2 = e28386;
if((e__20430__auto____$2 === cljs.core.match.backtrack)){
try{if((param === (25))){
return asciinema.player.vt.show_cursor.call(null,vt);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28387){if((e28387 instanceof Error)){
var e__20430__auto____$3 = e28387;
if((e__20430__auto____$3 === cljs.core.match.backtrack)){
try{if((param === (47))){
return asciinema.player.vt.switch_to_alternate_buffer.call(null,vt);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28388){if((e28388 instanceof Error)){
var e__20430__auto____$4 = e28388;
if((e__20430__auto____$4 === cljs.core.match.backtrack)){
try{if((param === (1047))){
return asciinema.player.vt.switch_to_alternate_buffer.call(null,vt);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28389){if((e28389 instanceof Error)){
var e__20430__auto____$5 = e28389;
if((e__20430__auto____$5 === cljs.core.match.backtrack)){
try{if((param === (1048))){
return asciinema.player.vt.save_cursor.call(null,vt);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28390){if((e28390 instanceof Error)){
var e__20430__auto____$6 = e28390;
if((e__20430__auto____$6 === cljs.core.match.backtrack)){
try{if((param === (1049))){
return asciinema.player.vt.switch_to_alternate_buffer.call(null,asciinema.player.vt.save_cursor.call(null,vt));
} else {
throw cljs.core.match.backtrack;

}
}catch (e28391){if((e28391 instanceof Error)){
var e__20430__auto____$7 = e28391;
if((e__20430__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20430__auto____$7;
}
} else {
throw e28391;

}
}} else {
throw e__20430__auto____$6;
}
} else {
throw e28390;

}
}} else {
throw e__20430__auto____$5;
}
} else {
throw e28389;

}
}} else {
throw e__20430__auto____$4;
}
} else {
throw e28388;

}
}} else {
throw e__20430__auto____$3;
}
} else {
throw e28387;

}
}} else {
throw e__20430__auto____$2;
}
} else {
throw e28386;

}
}} else {
throw e__20430__auto____$1;
}
} else {
throw e28385;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28384){if((e28384 instanceof Error)){
var e__20430__auto____$1 = e28384;
if((e__20430__auto____$1 === cljs.core.match.backtrack)){
return vt;
} else {
throw e__20430__auto____$1;
}
} else {
throw e28384;

}
}} else {
throw e__20430__auto__;
}
} else {
throw e28383;

}
}});
asciinema.player.vt.reset_mode = (function asciinema$player$vt$reset_mode(vt,intermediate,param){
try{if((intermediate === null)){
try{if((param === (4))){
return cljs.core.assoc.call(null,vt,new cljs.core.Keyword(null,"insert-mode","insert-mode",894811791),false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28418){if((e28418 instanceof Error)){
var e__20430__auto__ = e28418;
if((e__20430__auto__ === cljs.core.match.backtrack)){
try{if((param === (20))){
return cljs.core.assoc.call(null,vt,new cljs.core.Keyword(null,"new-line-mode","new-line-mode",1467504785),false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28419){if((e28419 instanceof Error)){
var e__20430__auto____$1 = e28419;
if((e__20430__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20430__auto____$1;
}
} else {
throw e28419;

}
}} else {
throw e__20430__auto__;
}
} else {
throw e28418;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28409){if((e28409 instanceof Error)){
var e__20430__auto__ = e28409;
if((e__20430__auto__ === cljs.core.match.backtrack)){
try{if((intermediate === (63))){
try{if((param === (6))){
return asciinema.player.vt.move_cursor_to_home.call(null,cljs.core.assoc.call(null,vt,new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912),false));
} else {
throw cljs.core.match.backtrack;

}
}catch (e28411){if((e28411 instanceof Error)){
var e__20430__auto____$1 = e28411;
if((e__20430__auto____$1 === cljs.core.match.backtrack)){
try{if((param === (7))){
return cljs.core.assoc.call(null,vt,new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583),false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28412){if((e28412 instanceof Error)){
var e__20430__auto____$2 = e28412;
if((e__20430__auto____$2 === cljs.core.match.backtrack)){
try{if((param === (25))){
return asciinema.player.vt.show_cursor.call(null,vt,false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28413){if((e28413 instanceof Error)){
var e__20430__auto____$3 = e28413;
if((e__20430__auto____$3 === cljs.core.match.backtrack)){
try{if((param === (47))){
return asciinema.player.vt.switch_to_primary_buffer.call(null,vt);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28414){if((e28414 instanceof Error)){
var e__20430__auto____$4 = e28414;
if((e__20430__auto____$4 === cljs.core.match.backtrack)){
try{if((param === (1047))){
return asciinema.player.vt.switch_to_primary_buffer.call(null,vt);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28415){if((e28415 instanceof Error)){
var e__20430__auto____$5 = e28415;
if((e__20430__auto____$5 === cljs.core.match.backtrack)){
try{if((param === (1048))){
return asciinema.player.vt.restore_cursor.call(null,vt);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28416){if((e28416 instanceof Error)){
var e__20430__auto____$6 = e28416;
if((e__20430__auto____$6 === cljs.core.match.backtrack)){
try{if((param === (1049))){
return asciinema.player.vt.restore_cursor.call(null,asciinema.player.vt.switch_to_primary_buffer.call(null,vt));
} else {
throw cljs.core.match.backtrack;

}
}catch (e28417){if((e28417 instanceof Error)){
var e__20430__auto____$7 = e28417;
if((e__20430__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20430__auto____$7;
}
} else {
throw e28417;

}
}} else {
throw e__20430__auto____$6;
}
} else {
throw e28416;

}
}} else {
throw e__20430__auto____$5;
}
} else {
throw e28415;

}
}} else {
throw e__20430__auto____$4;
}
} else {
throw e28414;

}
}} else {
throw e__20430__auto____$3;
}
} else {
throw e28413;

}
}} else {
throw e__20430__auto____$2;
}
} else {
throw e28412;

}
}} else {
throw e__20430__auto____$1;
}
} else {
throw e28411;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28410){if((e28410 instanceof Error)){
var e__20430__auto____$1 = e28410;
if((e__20430__auto____$1 === cljs.core.match.backtrack)){
return vt;
} else {
throw e__20430__auto____$1;
}
} else {
throw e28410;

}
}} else {
throw e__20430__auto__;
}
} else {
throw e28409;

}
}});
asciinema.player.vt.execute_bs = (function asciinema$player$vt$execute_bs(p__28420){
var map__28425 = p__28420;
var map__28425__$1 = ((((!((map__28425 == null)))?((((map__28425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28425):map__28425);
var vt = map__28425__$1;
var map__28426 = cljs.core.get.call(null,map__28425__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28426__$1 = ((((!((map__28426 == null)))?((((map__28426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28426):map__28426);
var x = cljs.core.get.call(null,map__28426__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return asciinema.player.vt.move_cursor_to_col.call(null,vt,(function (){var x__19119__auto__ = (x - (1));
var y__19120__auto__ = (0);
return ((x__19119__auto__ > y__19120__auto__) ? x__19119__auto__ : y__19120__auto__);
})());
});
asciinema.player.vt.move_cursor_to_next_tab = (function asciinema$player$vt$move_cursor_to_next_tab(p__28429,n){
var map__28434 = p__28429;
var map__28434__$1 = ((((!((map__28434 == null)))?((((map__28434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28434):map__28434);
var vt = map__28434__$1;
var map__28435 = cljs.core.get.call(null,map__28434__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28435__$1 = ((((!((map__28435 == null)))?((((map__28435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28435):map__28435);
var x = cljs.core.get.call(null,map__28435__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var tabs = cljs.core.get.call(null,map__28434__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var width = cljs.core.get.call(null,map__28434__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var n__$1 = (n - (1));
var right_margin = (width - (1));
var next_tabs = cljs.core.drop_while.call(null,cljs.core.partial.call(null,cljs.core._GT__EQ_,x),tabs);
var new_x = cljs.core.nth.call(null,next_tabs,n__$1,right_margin);
return asciinema.player.vt.move_cursor_to_col.call(null,vt,new_x);
});
asciinema.player.vt.move_cursor_to_prev_tab = (function asciinema$player$vt$move_cursor_to_prev_tab(p__28438,n){
var map__28443 = p__28438;
var map__28443__$1 = ((((!((map__28443 == null)))?((((map__28443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28443):map__28443);
var vt = map__28443__$1;
var map__28444 = cljs.core.get.call(null,map__28443__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28444__$1 = ((((!((map__28444 == null)))?((((map__28444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28444):map__28444);
var x = cljs.core.get.call(null,map__28444__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var tabs = cljs.core.get.call(null,map__28443__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var width = cljs.core.get.call(null,map__28443__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var n__$1 = (n - (1));
var prev_tabs = cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core._GT_,x),tabs);
var new_x = cljs.core.nth.call(null,cljs.core.reverse.call(null,prev_tabs),n__$1,(0));
return asciinema.player.vt.move_cursor_to_col.call(null,vt,new_x);
});
asciinema.player.vt.execute_ht = (function asciinema$player$vt$execute_ht(vt){
return asciinema.player.vt.move_cursor_to_next_tab.call(null,vt,(1));
});
asciinema.player.vt.execute_cr = (function asciinema$player$vt$execute_cr(vt){
return asciinema.player.vt.move_cursor_to_col.call(null,vt,(0));
});
asciinema.player.vt.execute_lf = (function asciinema$player$vt$execute_lf(p__28447){
var map__28450 = p__28447;
var map__28450__$1 = ((((!((map__28450 == null)))?((((map__28450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28450):map__28450);
var vt = map__28450__$1;
var new_line_mode = cljs.core.get.call(null,map__28450__$1,new cljs.core.Keyword(null,"new-line-mode","new-line-mode",1467504785));
var vt__$1 = asciinema.player.vt.move_cursor_down.call(null,vt);
if(cljs.core.truth_(new_line_mode)){
return asciinema.player.vt.execute_cr.call(null,vt__$1);
} else {
return vt__$1;
}
});
asciinema.player.vt.execute_so = (function asciinema$player$vt$execute_so(vt){
return cljs.core.assoc.call(null,vt,new cljs.core.Keyword(null,"charset-fn","charset-fn",1374523920),asciinema.player.vt.special_charset);
});
asciinema.player.vt.execute_si = (function asciinema$player$vt$execute_si(vt){
return cljs.core.assoc.call(null,vt,new cljs.core.Keyword(null,"charset-fn","charset-fn",1374523920),asciinema.player.vt.default_charset);
});
asciinema.player.vt.execute_nel = (function asciinema$player$vt$execute_nel(vt){
return asciinema.player.vt.execute_cr.call(null,asciinema.player.vt.move_cursor_down.call(null,vt));
});
asciinema.player.vt.execute_hts = (function asciinema$player$vt$execute_hts(p__28452){
var map__28457 = p__28452;
var map__28457__$1 = ((((!((map__28457 == null)))?((((map__28457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28457):map__28457);
var vt = map__28457__$1;
var map__28458 = cljs.core.get.call(null,map__28457__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28458__$1 = ((((!((map__28458 == null)))?((((map__28458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28458):map__28458);
var x = cljs.core.get.call(null,map__28458__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var width = cljs.core.get.call(null,map__28457__$1,new cljs.core.Keyword(null,"width","width",-384071477));
if((((0) < x)) && ((x < width))){
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354)], null),cljs.core.conj,x);
} else {
return vt;
}
});
asciinema.player.vt.execute_ri = (function asciinema$player$vt$execute_ri(p__28461){
var map__28466 = p__28461;
var map__28466__$1 = ((((!((map__28466 == null)))?((((map__28466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28466):map__28466);
var vt = map__28466__$1;
var map__28467 = cljs.core.get.call(null,map__28466__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28467__$1 = ((((!((map__28467 == null)))?((((map__28467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28467):map__28467);
var y = cljs.core.get.call(null,map__28467__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var top_margin = cljs.core.get.call(null,map__28466__$1,new cljs.core.Keyword(null,"top-margin","top-margin",655579514));
if(cljs.core._EQ_.call(null,y,top_margin)){
return asciinema.player.vt.scroll_down.call(null,vt);
} else {
if((y > (0))){
return asciinema.player.vt.move_cursor_to_row.call(null,vt,(y - (1)));
} else {
return vt;

}
}
});
asciinema.player.vt.execute_decaln = (function asciinema$player$vt$execute_decaln(p__28470){
var map__28473 = p__28470;
var map__28473__$1 = ((((!((map__28473 == null)))?((((map__28473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28473):map__28473);
var vt = map__28473__$1;
var width = cljs.core.get.call(null,map__28473__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__28473__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.assoc.call(null,vt,new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.vec.call(null,cljs.core.repeat.call(null,height,cljs.core.vec.call(null,cljs.core.repeat.call(null,width,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(69),asciinema.player.vt.normal_char_attrs], null))))));
});
asciinema.player.vt.execute_sc = (function asciinema$player$vt$execute_sc(vt){
return asciinema.player.vt.save_cursor.call(null,vt);
});
asciinema.player.vt.execute_rc = (function asciinema$player$vt$execute_rc(vt){
return asciinema.player.vt.restore_cursor.call(null,vt);
});
asciinema.player.vt.split_coll = (function asciinema$player$vt$split_coll(elem,coll){
var coll__$1 = coll;
var parts = cljs.core.PersistentVector.EMPTY;
var part = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,coll__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var e = temp__4423__auto__;
if(cljs.core._EQ_.call(null,e,elem)){
var G__28475 = cljs.core.rest.call(null,coll__$1);
var G__28476 = cljs.core.conj.call(null,parts,part);
var G__28477 = cljs.core.PersistentVector.EMPTY;
coll__$1 = G__28475;
parts = G__28476;
part = G__28477;
continue;
} else {
var G__28478 = cljs.core.rest.call(null,coll__$1);
var G__28479 = parts;
var G__28480 = cljs.core.conj.call(null,part,e);
coll__$1 = G__28478;
parts = G__28479;
part = G__28480;
continue;
}
} else {
if(cljs.core.seq.call(null,part)){
return cljs.core.conj.call(null,parts,part);
} else {
return parts;
}
}
break;
}
});
asciinema.player.vt.reduce_param = (function asciinema$player$vt$reduce_param(chars){
var digits = cljs.core.map.call(null,(function (p1__28481_SHARP_){
return (p1__28481_SHARP_ - (48));
}),chars);
var components = cljs.core.map.call(null,cljs.core._STAR_,cljs.core.reverse.call(null,digits),cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(10)),(1)));
return cljs.core.reduce.call(null,cljs.core._PLUS_,(0),components);
});
asciinema.player.vt.get_intermediate = (function asciinema$player$vt$get_intermediate(vt,n){
return cljs.core.get_in.call(null,vt,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"intermediate-chars","intermediate-chars",93692085),n], null));
});
asciinema.player.vt.get_cached_params = cljs.core.memoize.call(null,(function (chars){
var groups = asciinema.player.vt.split_coll.call(null,(59),chars);
return cljs.core.map.call(null,asciinema.player.vt.reduce_param,groups);
}));
asciinema.player.vt.get_params = (function asciinema$player$vt$get_params(vt){
return asciinema.player.vt.get_cached_params.call(null,cljs.core.get_in.call(null,vt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"param-chars","param-chars",38609125)], null)));
});
asciinema.player.vt.get_param = (function asciinema$player$vt$get_param(vt,n,default$){
var v = cljs.core.nth.call(null,asciinema.player.vt.get_params.call(null,vt),n,(0));
if((v === (0))){
return default$;
} else {
return v;
}
});
asciinema.player.vt.execute_ich = (function asciinema$player$vt$execute_ich(p__28482){
var map__28487 = p__28482;
var map__28487__$1 = ((((!((map__28487 == null)))?((((map__28487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28487):map__28487);
var vt = map__28487__$1;
var map__28488 = cljs.core.get.call(null,map__28487__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28488__$1 = ((((!((map__28488 == null)))?((((map__28488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28488):map__28488);
var x = cljs.core.get.call(null,map__28488__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28488__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__28487__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var char_attrs = cljs.core.get.call(null,map__28487__$1,new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455));
var n = asciinema.player.vt.get_param.call(null,vt,(0),(1));
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),y], null),((function (n,map__28487,map__28487__$1,vt,map__28488,map__28488__$1,x,y,width,char_attrs){
return (function (line){
return cljs.core.vec.call(null,cljs.core.take.call(null,width,cljs.core.concat.call(null,cljs.core.take.call(null,x,line),cljs.core.repeat.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.vt.space,char_attrs], null)),cljs.core.drop.call(null,x,line))));
});})(n,map__28487,map__28487__$1,vt,map__28488,map__28488__$1,x,y,width,char_attrs))
);
});
asciinema.player.vt.execute_cuu = (function asciinema$player$vt$execute_cuu(p__28491){
var map__28496 = p__28491;
var map__28496__$1 = ((((!((map__28496 == null)))?((((map__28496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28496):map__28496);
var vt = map__28496__$1;
var map__28497 = cljs.core.get.call(null,map__28496__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28497__$1 = ((((!((map__28497 == null)))?((((map__28497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28497):map__28497);
var y = cljs.core.get.call(null,map__28497__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var top_margin = cljs.core.get.call(null,map__28496__$1,new cljs.core.Keyword(null,"top-margin","top-margin",655579514));
var n = asciinema.player.vt.get_param.call(null,vt,(0),(1));
var new_y = (((y < top_margin))?(function (){var x__19119__auto__ = (0);
var y__19120__auto__ = (y - n);
return ((x__19119__auto__ > y__19120__auto__) ? x__19119__auto__ : y__19120__auto__);
})():(function (){var x__19119__auto__ = top_margin;
var y__19120__auto__ = (y - n);
return ((x__19119__auto__ > y__19120__auto__) ? x__19119__auto__ : y__19120__auto__);
})());
return asciinema.player.vt.move_cursor_to_row.call(null,vt,new_y);
});
asciinema.player.vt.execute_cud = (function asciinema$player$vt$execute_cud(p__28500){
var map__28505 = p__28500;
var map__28505__$1 = ((((!((map__28505 == null)))?((((map__28505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28505):map__28505);
var vt = map__28505__$1;
var map__28506 = cljs.core.get.call(null,map__28505__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28506__$1 = ((((!((map__28506 == null)))?((((map__28506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28506):map__28506);
var y = cljs.core.get.call(null,map__28506__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var bottom_margin = cljs.core.get.call(null,map__28505__$1,new cljs.core.Keyword(null,"bottom-margin","bottom-margin",-701300733));
var height = cljs.core.get.call(null,map__28505__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var n = asciinema.player.vt.get_param.call(null,vt,(0),(1));
var new_y = (((y > bottom_margin))?(function (){var x__19126__auto__ = (height - (1));
var y__19127__auto__ = (y + n);
return ((x__19126__auto__ < y__19127__auto__) ? x__19126__auto__ : y__19127__auto__);
})():(function (){var x__19126__auto__ = bottom_margin;
var y__19127__auto__ = (y + n);
return ((x__19126__auto__ < y__19127__auto__) ? x__19126__auto__ : y__19127__auto__);
})());
return asciinema.player.vt.move_cursor_to_row.call(null,vt,new_y);
});
asciinema.player.vt.execute_cuf = (function asciinema$player$vt$execute_cuf(p__28509){
var map__28514 = p__28509;
var map__28514__$1 = ((((!((map__28514 == null)))?((((map__28514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28514):map__28514);
var vt = map__28514__$1;
var map__28515 = cljs.core.get.call(null,map__28514__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28515__$1 = ((((!((map__28515 == null)))?((((map__28515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28515):map__28515);
var x = cljs.core.get.call(null,map__28515__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var width = cljs.core.get.call(null,map__28514__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var n = asciinema.player.vt.get_param.call(null,vt,(0),(1));
var new_x = (function (){var x__19126__auto__ = (x + n);
var y__19127__auto__ = (width - (1));
return ((x__19126__auto__ < y__19127__auto__) ? x__19126__auto__ : y__19127__auto__);
})();
return asciinema.player.vt.move_cursor_to_col.call(null,vt,new_x);
});
asciinema.player.vt.execute_cub = (function asciinema$player$vt$execute_cub(p__28518){
var map__28523 = p__28518;
var map__28523__$1 = ((((!((map__28523 == null)))?((((map__28523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28523):map__28523);
var vt = map__28523__$1;
var map__28524 = cljs.core.get.call(null,map__28523__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28524__$1 = ((((!((map__28524 == null)))?((((map__28524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28524):map__28524);
var x = cljs.core.get.call(null,map__28524__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var width = cljs.core.get.call(null,map__28523__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var n = asciinema.player.vt.get_param.call(null,vt,(0),(1));
var new_x = (function (){var x__19119__auto__ = (x - n);
var y__19120__auto__ = (0);
return ((x__19119__auto__ > y__19120__auto__) ? x__19119__auto__ : y__19120__auto__);
})();
return asciinema.player.vt.move_cursor_to_col.call(null,vt,new_x);
});
asciinema.player.vt.execute_cnl = (function asciinema$player$vt$execute_cnl(vt){
return asciinema.player.vt.move_cursor_to_col.call(null,asciinema.player.vt.execute_cud.call(null,vt),(0));
});
asciinema.player.vt.execute_cpl = (function asciinema$player$vt$execute_cpl(vt){
return asciinema.player.vt.move_cursor_to_col.call(null,asciinema.player.vt.execute_cuu.call(null,vt),(0));
});
asciinema.player.vt.execute_cha = (function asciinema$player$vt$execute_cha(p__28527){
var map__28530 = p__28527;
var map__28530__$1 = ((((!((map__28530 == null)))?((((map__28530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28530):map__28530);
var vt = map__28530__$1;
var width = cljs.core.get.call(null,map__28530__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var n = asciinema.player.vt.get_param.call(null,vt,(0),(1));
var new_x = (((n <= width))?(n - (1)):(width - (1)));
return asciinema.player.vt.move_cursor_to_col.call(null,vt,new_x);
});
asciinema.player.vt.top_limit = (function asciinema$player$vt$top_limit(p__28532){
var map__28535 = p__28532;
var map__28535__$1 = ((((!((map__28535 == null)))?((((map__28535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28535):map__28535);
var vt = map__28535__$1;
var origin_mode = cljs.core.get.call(null,map__28535__$1,new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912));
var top_margin = cljs.core.get.call(null,map__28535__$1,new cljs.core.Keyword(null,"top-margin","top-margin",655579514));
if(cljs.core.truth_(origin_mode)){
return top_margin;
} else {
return (0);
}
});
asciinema.player.vt.bottom_limit = (function asciinema$player$vt$bottom_limit(p__28537){
var map__28540 = p__28537;
var map__28540__$1 = ((((!((map__28540 == null)))?((((map__28540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28540):map__28540);
var vt = map__28540__$1;
var origin_mode = cljs.core.get.call(null,map__28540__$1,new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912));
var bottom_margin = cljs.core.get.call(null,map__28540__$1,new cljs.core.Keyword(null,"bottom-margin","bottom-margin",-701300733));
var height = cljs.core.get.call(null,map__28540__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(origin_mode)){
return bottom_margin;
} else {
return (height - (1));
}
});
asciinema.player.vt.adjust_y_to_limits = (function asciinema$player$vt$adjust_y_to_limits(vt,y){
var top = asciinema.player.vt.top_limit.call(null,vt);
var bottom = asciinema.player.vt.bottom_limit.call(null,vt);
return asciinema.player.util.adjust_to_range.call(null,(top + y),top,bottom);
});
asciinema.player.vt.execute_cup = (function asciinema$player$vt$execute_cup(p__28542){
var map__28545 = p__28542;
var map__28545__$1 = ((((!((map__28545 == null)))?((((map__28545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28545):map__28545);
var vt = map__28545__$1;
var width = cljs.core.get.call(null,map__28545__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__28545__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var ps1 = asciinema.player.vt.get_param.call(null,vt,(0),(1));
var ps2 = asciinema.player.vt.get_param.call(null,vt,(1),(1));
var new_x = asciinema.player.util.adjust_to_range.call(null,(ps2 - (1)),(0),(width - (1)));
var new_y = asciinema.player.vt.adjust_y_to_limits.call(null,vt,(ps1 - (1)));
return asciinema.player.vt.move_cursor_to_row.call(null,asciinema.player.vt.move_cursor_to_col.call(null,cljs.core.assoc.call(null,vt,new cljs.core.Keyword(null,"next-print-wraps","next-print-wraps",-1664999738),false),new_x),new_y);
});
asciinema.player.vt.execute_cht = (function asciinema$player$vt$execute_cht(vt){
var n = asciinema.player.vt.get_param.call(null,vt,(0),(1));
return asciinema.player.vt.move_cursor_to_next_tab.call(null,vt,n);
});
asciinema.player.vt.clear_line_right = (function asciinema$player$vt$clear_line_right(line,x,char_attrs){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.take.call(null,x,line),cljs.core.repeat.call(null,(cljs.core.count.call(null,line) - x),asciinema.player.vt.empty_cell.call(null,char_attrs))));
});
asciinema.player.vt.clear_to_end_of_screen = (function asciinema$player$vt$clear_to_end_of_screen(p__28547){
var map__28552 = p__28547;
var map__28552__$1 = ((((!((map__28552 == null)))?((((map__28552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28552):map__28552);
var vt = map__28552__$1;
var map__28553 = cljs.core.get.call(null,map__28552__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28553__$1 = ((((!((map__28553 == null)))?((((map__28553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28553):map__28553);
var x = cljs.core.get.call(null,map__28553__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28553__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__28552__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__28552__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var char_attrs = cljs.core.get.call(null,map__28552__$1,new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455));
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null),((function (map__28552,map__28552__$1,vt,map__28553,map__28553__$1,x,y,width,height,char_attrs){
return (function (lines){
var top_lines = cljs.core.take.call(null,y,lines);
var curr_line = asciinema.player.vt.clear_line_right.call(null,cljs.core.nth.call(null,lines,y),x,char_attrs);
var bottom_lines = cljs.core.repeat.call(null,((height - y) - (1)),asciinema.player.vt.empty_line.call(null,width,char_attrs));
return cljs.core.vec.call(null,cljs.core.concat.call(null,top_lines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_line], null),bottom_lines));
});})(map__28552,map__28552__$1,vt,map__28553,map__28553__$1,x,y,width,height,char_attrs))
);
});
asciinema.player.vt.clear_line_left = (function asciinema$player$vt$clear_line_left(line,x,char_attrs){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.repeat.call(null,(x + (1)),asciinema.player.vt.empty_cell.call(null,char_attrs)),cljs.core.drop.call(null,(x + (1)),line)));
});
asciinema.player.vt.clear_to_beginning_of_screen = (function asciinema$player$vt$clear_to_beginning_of_screen(p__28556){
var map__28561 = p__28556;
var map__28561__$1 = ((((!((map__28561 == null)))?((((map__28561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28561):map__28561);
var vt = map__28561__$1;
var map__28562 = cljs.core.get.call(null,map__28561__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28562__$1 = ((((!((map__28562 == null)))?((((map__28562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28562):map__28562);
var x = cljs.core.get.call(null,map__28562__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28562__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__28561__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__28561__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var char_attrs = cljs.core.get.call(null,map__28561__$1,new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455));
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null),((function (map__28561,map__28561__$1,vt,map__28562,map__28562__$1,x,y,width,height,char_attrs){
return (function (lines){
var top_lines = cljs.core.repeat.call(null,y,asciinema.player.vt.empty_line.call(null,width,char_attrs));
var curr_line = asciinema.player.vt.clear_line_left.call(null,cljs.core.nth.call(null,lines,y),x,char_attrs);
var bottom_lines = cljs.core.drop.call(null,(y + (1)),lines);
return cljs.core.vec.call(null,cljs.core.concat.call(null,top_lines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_line], null),bottom_lines));
});})(map__28561,map__28561__$1,vt,map__28562,map__28562__$1,x,y,width,height,char_attrs))
);
});
asciinema.player.vt.clear_screen = (function asciinema$player$vt$clear_screen(p__28565){
var map__28568 = p__28565;
var map__28568__$1 = ((((!((map__28568 == null)))?((((map__28568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28568):map__28568);
var vt = map__28568__$1;
var width = cljs.core.get.call(null,map__28568__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__28568__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var char_attrs = cljs.core.get.call(null,map__28568__$1,new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455));
return cljs.core.assoc_in.call(null,vt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null),asciinema.player.vt.empty_screen.call(null,width,height,char_attrs));
});
asciinema.player.vt.execute_ed = (function asciinema$player$vt$execute_ed(vt){
var n = asciinema.player.vt.get_param.call(null,vt,(0),(0));
var pred__28573 = cljs.core._EQ_;
var expr__28574 = n;
if(cljs.core.truth_(pred__28573.call(null,(0),expr__28574))){
return asciinema.player.vt.clear_to_end_of_screen.call(null,vt);
} else {
if(cljs.core.truth_(pred__28573.call(null,(1),expr__28574))){
return asciinema.player.vt.clear_to_beginning_of_screen.call(null,vt);
} else {
if(cljs.core.truth_(pred__28573.call(null,(2),expr__28574))){
return asciinema.player.vt.clear_screen.call(null,vt);
} else {
return vt;
}
}
}
});
asciinema.player.vt.execute_el = (function asciinema$player$vt$execute_el(p__28576){
var map__28584 = p__28576;
var map__28584__$1 = ((((!((map__28584 == null)))?((((map__28584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28584):map__28584);
var vt = map__28584__$1;
var map__28585 = cljs.core.get.call(null,map__28584__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28585__$1 = ((((!((map__28585 == null)))?((((map__28585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28585):map__28585);
var x = cljs.core.get.call(null,map__28585__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28585__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__28584__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__28584__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var char_attrs = cljs.core.get.call(null,map__28584__$1,new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455));
var n = asciinema.player.vt.get_param.call(null,vt,(0),(0));
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),y], null),((function (n,map__28584,map__28584__$1,vt,map__28585,map__28585__$1,x,y,width,height,char_attrs){
return (function (line){
var pred__28588 = cljs.core._EQ_;
var expr__28589 = n;
if(cljs.core.truth_(pred__28588.call(null,(0),expr__28589))){
return asciinema.player.vt.clear_line_right.call(null,line,x,char_attrs);
} else {
if(cljs.core.truth_(pred__28588.call(null,(1),expr__28589))){
return asciinema.player.vt.clear_line_left.call(null,line,x,char_attrs);
} else {
if(cljs.core.truth_(pred__28588.call(null,(2),expr__28589))){
return asciinema.player.vt.empty_line.call(null,width,char_attrs);
} else {
return line;
}
}
}
});})(n,map__28584,map__28584__$1,vt,map__28585,map__28585__$1,x,y,width,height,char_attrs))
);
});
asciinema.player.vt.execute_su = (function asciinema$player$vt$execute_su(vt){
var n = asciinema.player.vt.get_param.call(null,vt,(0),(1));
return asciinema.player.vt.scroll_up.call(null,vt,n);
});
asciinema.player.vt.execute_sd = (function asciinema$player$vt$execute_sd(vt){
var n = asciinema.player.vt.get_param.call(null,vt,(0),(1));
return asciinema.player.vt.scroll_down.call(null,vt,n);
});
asciinema.player.vt.execute_il = (function asciinema$player$vt$execute_il(p__28591){
var map__28596 = p__28591;
var map__28596__$1 = ((((!((map__28596 == null)))?((((map__28596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28596):map__28596);
var vt = map__28596__$1;
var map__28597 = cljs.core.get.call(null,map__28596__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28597__$1 = ((((!((map__28597 == null)))?((((map__28597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28597):map__28597);
var y = cljs.core.get.call(null,map__28597__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var bottom_margin = cljs.core.get.call(null,map__28596__$1,new cljs.core.Keyword(null,"bottom-margin","bottom-margin",-701300733));
var width = cljs.core.get.call(null,map__28596__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__28596__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var char_attrs = cljs.core.get.call(null,map__28596__$1,new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455));
var n = asciinema.player.vt.get_param.call(null,vt,(0),(1));
var filler = asciinema.player.vt.empty_line.call(null,width,char_attrs);
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null),((function (n,filler,map__28596,map__28596__$1,vt,map__28597,map__28597__$1,y,bottom_margin,width,height,char_attrs){
return (function (lines){
return cljs.core.vec.call(null,(((y <= bottom_margin))?cljs.core.concat.call(null,cljs.core.take.call(null,y,lines),asciinema.player.vt.scroll_down_lines.call(null,cljs.core.subvec.call(null,lines,y,(bottom_margin + (1))),n,filler),cljs.core.drop.call(null,(bottom_margin + (1)),lines)):cljs.core.concat.call(null,cljs.core.take.call(null,y,lines),asciinema.player.vt.scroll_down_lines.call(null,cljs.core.drop.call(null,y,lines),n,filler))));
});})(n,filler,map__28596,map__28596__$1,vt,map__28597,map__28597__$1,y,bottom_margin,width,height,char_attrs))
);
});
asciinema.player.vt.execute_dl = (function asciinema$player$vt$execute_dl(p__28600){
var map__28605 = p__28600;
var map__28605__$1 = ((((!((map__28605 == null)))?((((map__28605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28605):map__28605);
var vt = map__28605__$1;
var map__28606 = cljs.core.get.call(null,map__28605__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28606__$1 = ((((!((map__28606 == null)))?((((map__28606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28606):map__28606);
var y = cljs.core.get.call(null,map__28606__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var bottom_margin = cljs.core.get.call(null,map__28605__$1,new cljs.core.Keyword(null,"bottom-margin","bottom-margin",-701300733));
var width = cljs.core.get.call(null,map__28605__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__28605__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var char_attrs = cljs.core.get.call(null,map__28605__$1,new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455));
var n = asciinema.player.vt.get_param.call(null,vt,(0),(1));
var filler = asciinema.player.vt.empty_line.call(null,width,char_attrs);
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null),((function (n,filler,map__28605,map__28605__$1,vt,map__28606,map__28606__$1,y,bottom_margin,width,height,char_attrs){
return (function (lines){
return cljs.core.vec.call(null,(((y <= bottom_margin))?cljs.core.concat.call(null,cljs.core.take.call(null,y,lines),asciinema.player.vt.scroll_up_lines.call(null,cljs.core.subvec.call(null,lines,y,(bottom_margin + (1))),n,filler),cljs.core.drop.call(null,(bottom_margin + (1)),lines)):cljs.core.concat.call(null,cljs.core.take.call(null,y,lines),asciinema.player.vt.scroll_up_lines.call(null,cljs.core.drop.call(null,y,lines),n,filler))));
});})(n,filler,map__28605,map__28605__$1,vt,map__28606,map__28606__$1,y,bottom_margin,width,height,char_attrs))
);
});
asciinema.player.vt.execute_dch = (function asciinema$player$vt$execute_dch(p__28609){
var map__28614 = p__28609;
var map__28614__$1 = ((((!((map__28614 == null)))?((((map__28614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28614):map__28614);
var vt = map__28614__$1;
var map__28615 = cljs.core.get.call(null,map__28614__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28615__$1 = ((((!((map__28615 == null)))?((((map__28615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28615):map__28615);
var x = cljs.core.get.call(null,map__28615__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28615__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__28614__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var char_attrs = cljs.core.get.call(null,map__28614__$1,new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455));
var vt__$1 = (((x >= width))?asciinema.player.vt.move_cursor_to_col.call(null,vt,(width - (1))):vt);
var x__$1 = cljs.core.get_in.call(null,vt__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"x","x",2099068185)], null));
var n = (function (){var x__19126__auto__ = asciinema.player.vt.get_param.call(null,vt__$1,(0),(1));
var y__19127__auto__ = (width - x__$1);
return ((x__19126__auto__ < y__19127__auto__) ? x__19126__auto__ : y__19127__auto__);
})();
return cljs.core.update_in.call(null,vt__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),y], null),((function (vt__$1,x__$1,n,map__28614,map__28614__$1,vt,map__28615,map__28615__$1,x,y,width,char_attrs){
return (function (line){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.take.call(null,x__$1,line),cljs.core.drop.call(null,(x__$1 + n),line),cljs.core.repeat.call(null,n,asciinema.player.vt.empty_cell.call(null,char_attrs))));
});})(vt__$1,x__$1,n,map__28614,map__28614__$1,vt,map__28615,map__28615__$1,x,y,width,char_attrs))
);
});
asciinema.player.vt.execute_ctc = (function asciinema$player$vt$execute_ctc(p__28618){
var map__28626 = p__28618;
var map__28626__$1 = ((((!((map__28626 == null)))?((((map__28626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28626):map__28626);
var vt = map__28626__$1;
var map__28627 = cljs.core.get.call(null,map__28626__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28627__$1 = ((((!((map__28627 == null)))?((((map__28627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28627):map__28627);
var x = cljs.core.get.call(null,map__28627__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var width = cljs.core.get.call(null,map__28626__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var n = asciinema.player.vt.get_param.call(null,vt,(0),(0));
var pred__28630 = cljs.core._EQ_;
var expr__28631 = n;
if(cljs.core.truth_(pred__28630.call(null,(0),expr__28631))){
if((((0) < x)) && ((x < width))){
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354)], null),cljs.core.conj,x);
} else {
return vt;
}
} else {
if(cljs.core.truth_(pred__28630.call(null,(2),expr__28631))){
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354)], null),cljs.core.disj,x);
} else {
if(cljs.core.truth_(pred__28630.call(null,(5),expr__28631))){
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354)], null),cljs.core.empty);
} else {
return vt;
}
}
}
});
asciinema.player.vt.execute_ech = (function asciinema$player$vt$execute_ech(p__28633){
var map__28638 = p__28633;
var map__28638__$1 = ((((!((map__28638 == null)))?((((map__28638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28638):map__28638);
var vt = map__28638__$1;
var map__28639 = cljs.core.get.call(null,map__28638__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28639__$1 = ((((!((map__28639 == null)))?((((map__28639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28639):map__28639);
var x = cljs.core.get.call(null,map__28639__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28639__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__28638__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var char_attrs = cljs.core.get.call(null,map__28638__$1,new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455));
var n = (function (){var x__19126__auto__ = asciinema.player.vt.get_param.call(null,vt,(0),(1));
var y__19127__auto__ = (width - x);
return ((x__19126__auto__ < y__19127__auto__) ? x__19126__auto__ : y__19127__auto__);
})();
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),y], null),((function (n,map__28638,map__28638__$1,vt,map__28639,map__28639__$1,x,y,width,char_attrs){
return (function (line){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.take.call(null,x,line),cljs.core.repeat.call(null,n,asciinema.player.vt.empty_cell.call(null,char_attrs)),cljs.core.drop.call(null,(x + n),line)));
});})(n,map__28638,map__28638__$1,vt,map__28639,map__28639__$1,x,y,width,char_attrs))
);
});
asciinema.player.vt.execute_cbt = (function asciinema$player$vt$execute_cbt(vt){
var n = asciinema.player.vt.get_param.call(null,vt,(0),(1));
return asciinema.player.vt.move_cursor_to_prev_tab.call(null,vt,n);
});
asciinema.player.vt.execute_tbc = (function asciinema$player$vt$execute_tbc(p__28642){
var map__28650 = p__28642;
var map__28650__$1 = ((((!((map__28650 == null)))?((((map__28650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28650):map__28650);
var vt = map__28650__$1;
var map__28651 = cljs.core.get.call(null,map__28650__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28651__$1 = ((((!((map__28651 == null)))?((((map__28651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28651):map__28651);
var x = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var n = asciinema.player.vt.get_param.call(null,vt,(0),(0));
var pred__28654 = cljs.core._EQ_;
var expr__28655 = n;
if(cljs.core.truth_(pred__28654.call(null,(0),expr__28655))){
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354)], null),cljs.core.disj,x);
} else {
if(cljs.core.truth_(pred__28654.call(null,(3),expr__28655))){
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354)], null),cljs.core.empty);
} else {
return vt;
}
}
});
asciinema.player.vt.execute_sm = (function asciinema$player$vt$execute_sm(vt){
var intermediate = asciinema.player.vt.get_intermediate.call(null,vt,(0));
return cljs.core.reduce.call(null,((function (intermediate){
return (function (p1__28657_SHARP_,p2__28658_SHARP_){
return asciinema.player.vt.set_mode.call(null,p1__28657_SHARP_,intermediate,p2__28658_SHARP_);
});})(intermediate))
,vt,asciinema.player.vt.get_params.call(null,vt));
});
asciinema.player.vt.execute_rm = (function asciinema$player$vt$execute_rm(vt){
var intermediate = asciinema.player.vt.get_intermediate.call(null,vt,(0));
return cljs.core.reduce.call(null,((function (intermediate){
return (function (p1__28659_SHARP_,p2__28660_SHARP_){
return asciinema.player.vt.reset_mode.call(null,p1__28659_SHARP_,intermediate,p2__28660_SHARP_);
});})(intermediate))
,vt,asciinema.player.vt.get_params.call(null,vt));
});
asciinema.player.vt.reset_attrs = (function asciinema$player$vt$reset_attrs(vt){
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455)], null),cljs.core.empty);
});
asciinema.player.vt.set_attr = (function asciinema$player$vt$set_attr(vt,attr_name,value){
return cljs.core.assoc_in.call(null,vt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455),attr_name], null),value);
});
asciinema.player.vt.unset_attr = (function asciinema$player$vt$unset_attr(vt,attr_name){
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455)], null),cljs.core.dissoc,attr_name);
});
asciinema.player.vt.execute_sgr = (function asciinema$player$vt$execute_sgr(vt){
var params = (function (){var or__18788__auto__ = cljs.core.seq.call(null,asciinema.player.vt.get_params.call(null,vt));
if(or__18788__auto__){
return or__18788__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null);
}
})();
var vt__$1 = vt;
var G__28709 = params;
var vec__28710 = G__28709;
var p1 = cljs.core.nth.call(null,vec__28710,(0),null);
var p2 = cljs.core.nth.call(null,vec__28710,(1),null);
var p3 = cljs.core.nth.call(null,vec__28710,(2),null);
var _ = cljs.core.nthnext.call(null,vec__28710,(3));
var params__$1 = vec__28710;
var vt__$2 = vt__$1;
var G__28709__$1 = G__28709;
while(true){
var vt__$3 = vt__$2;
var vec__28711 = G__28709__$1;
var p1__$1 = cljs.core.nth.call(null,vec__28711,(0),null);
var p2__$1 = cljs.core.nth.call(null,vec__28711,(1),null);
var p3__$1 = cljs.core.nth.call(null,vec__28711,(2),null);
var ___$1 = cljs.core.nthnext.call(null,vec__28711,(3));
var params__$2 = vec__28711;
if(cljs.core.truth_(p1__$1)){
if((p1__$1 === (0))){
var G__28751 = asciinema.player.vt.reset_attrs.call(null,vt__$3);
var G__28752 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28751;
G__28709__$1 = G__28752;
continue;
} else {
if((p1__$1 === (1))){
var G__28753 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bold","bold",-116809535),true);
var G__28754 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28753;
G__28709__$1 = G__28754;
continue;
} else {
if((p1__$1 === (3))){
var G__28755 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"italic","italic",32599196),true);
var G__28756 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28755;
G__28709__$1 = G__28756;
continue;
} else {
if((p1__$1 === (4))){
var G__28757 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"underline","underline",2018066703),true);
var G__28758 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28757;
G__28709__$1 = G__28758;
continue;
} else {
if((p1__$1 === (5))){
var G__28759 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"blink","blink",-271985917),true);
var G__28760 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28759;
G__28709__$1 = G__28760;
continue;
} else {
if((p1__$1 === (7))){
var G__28761 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"inverse","inverse",-1623859672),true);
var G__28762 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28761;
G__28709__$1 = G__28762;
continue;
} else {
if((p1__$1 === (21))){
var G__28763 = asciinema.player.vt.unset_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bold","bold",-116809535));
var G__28764 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28763;
G__28709__$1 = G__28764;
continue;
} else {
if((p1__$1 === (22))){
var G__28765 = asciinema.player.vt.unset_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bold","bold",-116809535));
var G__28766 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28765;
G__28709__$1 = G__28766;
continue;
} else {
if((p1__$1 === (23))){
var G__28767 = asciinema.player.vt.unset_attr.call(null,vt__$3,new cljs.core.Keyword(null,"italic","italic",32599196));
var G__28768 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28767;
G__28709__$1 = G__28768;
continue;
} else {
if((p1__$1 === (24))){
var G__28769 = asciinema.player.vt.unset_attr.call(null,vt__$3,new cljs.core.Keyword(null,"underline","underline",2018066703));
var G__28770 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28769;
G__28709__$1 = G__28770;
continue;
} else {
if((p1__$1 === (25))){
var G__28771 = asciinema.player.vt.unset_attr.call(null,vt__$3,new cljs.core.Keyword(null,"blink","blink",-271985917));
var G__28772 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28771;
G__28709__$1 = G__28772;
continue;
} else {
if((p1__$1 === (27))){
var G__28773 = asciinema.player.vt.unset_attr.call(null,vt__$3,new cljs.core.Keyword(null,"inverse","inverse",-1623859672));
var G__28774 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28773;
G__28709__$1 = G__28774;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28661_SHARP_){
return (((30) <= p1__28661_SHARP_)) && ((p1__28661_SHARP_ <= (37)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var fg = p1__$1;
var G__28775 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"fg","fg",-101797208),(fg - (30)));
var G__28776 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28775;
G__28709__$1 = G__28776;
continue;
} else {
if((p1__$1 === (38))){
if((p2__$1 === (5))){
if(cljs.core.some_QMARK_.call(null,p3__$1)){
var fg = p3__$1;
var G__28777 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"fg","fg",-101797208),fg);
var G__28778 = cljs.core.drop.call(null,(3),params__$2);
vt__$2 = G__28777;
G__28709__$1 = G__28778;
continue;
} else {
if((p1__$1 === (39))){
var G__28779 = asciinema.player.vt.unset_attr.call(null,vt__$3,new cljs.core.Keyword(null,"fg","fg",-101797208));
var G__28780 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28779;
G__28709__$1 = G__28780;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28662_SHARP_){
return (((40) <= p1__28662_SHARP_)) && ((p1__28662_SHARP_ <= (47)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var bg = p1__$1;
var G__28781 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421),(bg - (40)));
var G__28782 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28781;
G__28709__$1 = G__28782;
continue;
} else {
if((p1__$1 === (48))){
if((p2__$1 === (5))){
if(cljs.core.some_QMARK_.call(null,p3__$1)){
var bg = p3__$1;
var G__28783 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421),bg);
var G__28784 = cljs.core.drop.call(null,(3),params__$2);
vt__$2 = G__28783;
G__28709__$1 = G__28784;
continue;
} else {
if((p1__$1 === (49))){
var G__28785 = asciinema.player.vt.unset_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421));
var G__28786 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28785;
G__28709__$1 = G__28786;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28663_SHARP_){
return (((90) <= p1__28663_SHARP_)) && ((p1__28663_SHARP_ <= (97)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var fg = p1__$1;
var G__28787 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"fg","fg",-101797208),(fg - (82)));
var G__28788 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28787;
G__28709__$1 = G__28788;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28664_SHARP_){
return (((100) <= p1__28664_SHARP_)) && ((p1__28664_SHARP_ <= (107)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var bg = p1__$1;
var G__28789 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421),(bg - (92)));
var G__28790 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28789;
G__28709__$1 = G__28790;
continue;
} else {
var G__28791 = vt__$3;
var G__28792 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28791;
G__28709__$1 = G__28792;
continue;

}

}

}

}
} else {
if((p1__$1 === (49))){
var G__28793 = asciinema.player.vt.unset_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421));
var G__28794 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28793;
G__28709__$1 = G__28794;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28663_SHARP_){
return (((90) <= p1__28663_SHARP_)) && ((p1__28663_SHARP_ <= (97)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var fg = p1__$1;
var G__28795 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"fg","fg",-101797208),(fg - (82)));
var G__28796 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28795;
G__28709__$1 = G__28796;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28664_SHARP_){
return (((100) <= p1__28664_SHARP_)) && ((p1__28664_SHARP_ <= (107)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var bg = p1__$1;
var G__28797 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421),(bg - (92)));
var G__28798 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28797;
G__28709__$1 = G__28798;
continue;
} else {
var G__28799 = vt__$3;
var G__28800 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28799;
G__28709__$1 = G__28800;
continue;

}

}

}

}
} else {
if((p1__$1 === (49))){
var G__28801 = asciinema.player.vt.unset_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421));
var G__28802 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28801;
G__28709__$1 = G__28802;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28663_SHARP_){
return (((90) <= p1__28663_SHARP_)) && ((p1__28663_SHARP_ <= (97)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var fg = p1__$1;
var G__28803 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"fg","fg",-101797208),(fg - (82)));
var G__28804 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28803;
G__28709__$1 = G__28804;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28664_SHARP_){
return (((100) <= p1__28664_SHARP_)) && ((p1__28664_SHARP_ <= (107)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var bg = p1__$1;
var G__28805 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421),(bg - (92)));
var G__28806 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28805;
G__28709__$1 = G__28806;
continue;
} else {
var G__28807 = vt__$3;
var G__28808 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28807;
G__28709__$1 = G__28808;
continue;

}

}

}

}

}

}

}
} else {
if((p1__$1 === (39))){
var G__28809 = asciinema.player.vt.unset_attr.call(null,vt__$3,new cljs.core.Keyword(null,"fg","fg",-101797208));
var G__28810 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28809;
G__28709__$1 = G__28810;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28662_SHARP_){
return (((40) <= p1__28662_SHARP_)) && ((p1__28662_SHARP_ <= (47)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var bg = p1__$1;
var G__28811 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421),(bg - (40)));
var G__28812 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28811;
G__28709__$1 = G__28812;
continue;
} else {
if((p1__$1 === (48))){
if((p2__$1 === (5))){
if(cljs.core.some_QMARK_.call(null,p3__$1)){
var bg = p3__$1;
var G__28813 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421),bg);
var G__28814 = cljs.core.drop.call(null,(3),params__$2);
vt__$2 = G__28813;
G__28709__$1 = G__28814;
continue;
} else {
if((p1__$1 === (49))){
var G__28815 = asciinema.player.vt.unset_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421));
var G__28816 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28815;
G__28709__$1 = G__28816;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28663_SHARP_){
return (((90) <= p1__28663_SHARP_)) && ((p1__28663_SHARP_ <= (97)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var fg = p1__$1;
var G__28817 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"fg","fg",-101797208),(fg - (82)));
var G__28818 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28817;
G__28709__$1 = G__28818;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28664_SHARP_){
return (((100) <= p1__28664_SHARP_)) && ((p1__28664_SHARP_ <= (107)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var bg = p1__$1;
var G__28819 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421),(bg - (92)));
var G__28820 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28819;
G__28709__$1 = G__28820;
continue;
} else {
var G__28821 = vt__$3;
var G__28822 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28821;
G__28709__$1 = G__28822;
continue;

}

}

}

}
} else {
if((p1__$1 === (49))){
var G__28823 = asciinema.player.vt.unset_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421));
var G__28824 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28823;
G__28709__$1 = G__28824;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28663_SHARP_){
return (((90) <= p1__28663_SHARP_)) && ((p1__28663_SHARP_ <= (97)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var fg = p1__$1;
var G__28825 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"fg","fg",-101797208),(fg - (82)));
var G__28826 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28825;
G__28709__$1 = G__28826;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28664_SHARP_){
return (((100) <= p1__28664_SHARP_)) && ((p1__28664_SHARP_ <= (107)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var bg = p1__$1;
var G__28827 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421),(bg - (92)));
var G__28828 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28827;
G__28709__$1 = G__28828;
continue;
} else {
var G__28829 = vt__$3;
var G__28830 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28829;
G__28709__$1 = G__28830;
continue;

}

}

}

}
} else {
if((p1__$1 === (49))){
var G__28831 = asciinema.player.vt.unset_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421));
var G__28832 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28831;
G__28709__$1 = G__28832;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28663_SHARP_){
return (((90) <= p1__28663_SHARP_)) && ((p1__28663_SHARP_ <= (97)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var fg = p1__$1;
var G__28833 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"fg","fg",-101797208),(fg - (82)));
var G__28834 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28833;
G__28709__$1 = G__28834;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28664_SHARP_){
return (((100) <= p1__28664_SHARP_)) && ((p1__28664_SHARP_ <= (107)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var bg = p1__$1;
var G__28835 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421),(bg - (92)));
var G__28836 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28835;
G__28709__$1 = G__28836;
continue;
} else {
var G__28837 = vt__$3;
var G__28838 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28837;
G__28709__$1 = G__28838;
continue;

}

}

}

}

}

}

}
} else {
if((p1__$1 === (39))){
var G__28839 = asciinema.player.vt.unset_attr.call(null,vt__$3,new cljs.core.Keyword(null,"fg","fg",-101797208));
var G__28840 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28839;
G__28709__$1 = G__28840;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28662_SHARP_){
return (((40) <= p1__28662_SHARP_)) && ((p1__28662_SHARP_ <= (47)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var bg = p1__$1;
var G__28841 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421),(bg - (40)));
var G__28842 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28841;
G__28709__$1 = G__28842;
continue;
} else {
if((p1__$1 === (48))){
if((p2__$1 === (5))){
if(cljs.core.some_QMARK_.call(null,p3__$1)){
var bg = p3__$1;
var G__28843 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421),bg);
var G__28844 = cljs.core.drop.call(null,(3),params__$2);
vt__$2 = G__28843;
G__28709__$1 = G__28844;
continue;
} else {
if((p1__$1 === (49))){
var G__28845 = asciinema.player.vt.unset_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421));
var G__28846 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28845;
G__28709__$1 = G__28846;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28663_SHARP_){
return (((90) <= p1__28663_SHARP_)) && ((p1__28663_SHARP_ <= (97)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var fg = p1__$1;
var G__28847 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"fg","fg",-101797208),(fg - (82)));
var G__28848 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28847;
G__28709__$1 = G__28848;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28664_SHARP_){
return (((100) <= p1__28664_SHARP_)) && ((p1__28664_SHARP_ <= (107)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var bg = p1__$1;
var G__28849 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421),(bg - (92)));
var G__28850 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28849;
G__28709__$1 = G__28850;
continue;
} else {
var G__28851 = vt__$3;
var G__28852 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28851;
G__28709__$1 = G__28852;
continue;

}

}

}

}
} else {
if((p1__$1 === (49))){
var G__28853 = asciinema.player.vt.unset_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421));
var G__28854 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28853;
G__28709__$1 = G__28854;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28663_SHARP_){
return (((90) <= p1__28663_SHARP_)) && ((p1__28663_SHARP_ <= (97)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var fg = p1__$1;
var G__28855 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"fg","fg",-101797208),(fg - (82)));
var G__28856 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28855;
G__28709__$1 = G__28856;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28664_SHARP_){
return (((100) <= p1__28664_SHARP_)) && ((p1__28664_SHARP_ <= (107)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var bg = p1__$1;
var G__28857 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421),(bg - (92)));
var G__28858 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28857;
G__28709__$1 = G__28858;
continue;
} else {
var G__28859 = vt__$3;
var G__28860 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28859;
G__28709__$1 = G__28860;
continue;

}

}

}

}
} else {
if((p1__$1 === (49))){
var G__28861 = asciinema.player.vt.unset_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421));
var G__28862 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28861;
G__28709__$1 = G__28862;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28663_SHARP_){
return (((90) <= p1__28663_SHARP_)) && ((p1__28663_SHARP_ <= (97)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var fg = p1__$1;
var G__28863 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"fg","fg",-101797208),(fg - (82)));
var G__28864 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28863;
G__28709__$1 = G__28864;
continue;
} else {
if(((function (vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params){
return (function (p1__28664_SHARP_){
return (((100) <= p1__28664_SHARP_)) && ((p1__28664_SHARP_ <= (107)));
});})(vt__$2,G__28709__$1,vt__$3,vec__28711,p1__$1,p2__$1,p3__$1,___$1,params__$2,vt__$1,G__28709,vec__28710,p1,p2,p3,_,params__$1,params))
.call(null,p1__$1)){
var bg = p1__$1;
var G__28865 = asciinema.player.vt.set_attr.call(null,vt__$3,new cljs.core.Keyword(null,"bg","bg",-206688421),(bg - (92)));
var G__28866 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28865;
G__28709__$1 = G__28866;
continue;
} else {
var G__28867 = vt__$3;
var G__28868 = cljs.core.rest.call(null,params__$2);
vt__$2 = G__28867;
G__28709__$1 = G__28868;
continue;

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
} else {
return vt__$3;
}
break;
}
});
asciinema.player.vt.execute_vpa = (function asciinema$player$vt$execute_vpa(vt){
var n = asciinema.player.vt.get_param.call(null,vt,(0),(1));
var new_y = asciinema.player.vt.adjust_y_to_limits.call(null,vt,(n - (1)));
return asciinema.player.vt.move_cursor_to_row.call(null,vt,new_y);
});
asciinema.player.vt.execute_decstr = (function asciinema$player$vt$execute_decstr(p__28869){
var map__28872 = p__28869;
var map__28872__$1 = ((((!((map__28872 == null)))?((((map__28872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28872):map__28872);
var vt = map__28872__$1;
var height = cljs.core.get.call(null,map__28872__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core._EQ_.call(null,asciinema.player.vt.get_intermediate.call(null,vt,(0)),(33))){
return cljs.core.assoc.call(null,asciinema.player.vt.set_margin.call(null,asciinema.player.vt.show_cursor.call(null,vt),(0),(height - (1))),new cljs.core.Keyword(null,"insert-mode","insert-mode",894811791),false,new cljs.core.Keyword(null,"origin-mode","origin-mode",-1430095912),false,new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455),asciinema.player.vt.normal_char_attrs,new cljs.core.Keyword(null,"saved","saved",288760660),asciinema.player.vt.initial_saved_cursor);
} else {
return vt;
}
});
asciinema.player.vt.execute_decstbm = (function asciinema$player$vt$execute_decstbm(p__28874){
var map__28877 = p__28874;
var map__28877__$1 = ((((!((map__28877 == null)))?((((map__28877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28877):map__28877);
var vt = map__28877__$1;
var height = cljs.core.get.call(null,map__28877__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var top = (asciinema.player.vt.get_param.call(null,vt,(0),(1)) - (1));
var bottom = (asciinema.player.vt.get_param.call(null,vt,(1),height) - (1));
if((((-1) < top)) && (((top < bottom)) && ((bottom < height)))){
return asciinema.player.vt.move_cursor_to_home.call(null,asciinema.player.vt.set_margin.call(null,vt,top,bottom));
} else {
return vt;
}
});
asciinema.player.vt.ignore = (function asciinema$player$vt$ignore(vt,input){
return vt;
});
asciinema.player.vt.replace_char = (function asciinema$player$vt$replace_char(line,x,cell){
return cljs.core.assoc_in.call(null,line,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cell);
});
asciinema.player.vt.insert_char = (function asciinema$player$vt$insert_char(line,x,cell){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.take.call(null,x,line),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell], null),cljs.core.take.call(null,((cljs.core.count.call(null,line) - x) - (1)),cljs.core.drop.call(null,x,line))));
});
asciinema.player.vt.wrap = (function asciinema$player$vt$wrap(p__28879){
var map__28884 = p__28879;
var map__28884__$1 = ((((!((map__28884 == null)))?((((map__28884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28884):map__28884);
var vt = map__28884__$1;
var map__28885 = cljs.core.get.call(null,map__28884__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28885__$1 = ((((!((map__28885 == null)))?((((map__28885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28885):map__28885);
var y = cljs.core.get.call(null,map__28885__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var height = cljs.core.get.call(null,map__28884__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var vt__$1 = asciinema.player.vt.move_cursor_to_col.call(null,vt,(0));
if(cljs.core._EQ_.call(null,height,(y + (1)))){
return asciinema.player.vt.scroll_up.call(null,vt__$1);
} else {
return asciinema.player.vt.move_cursor_to_row.call(null,vt__$1,(y + (1)));
}
});
asciinema.player.vt.do_print = (function asciinema$player$vt$do_print(p__28888,input){
var map__28893 = p__28888;
var map__28893__$1 = ((((!((map__28893 == null)))?((((map__28893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28893):map__28893);
var vt = map__28893__$1;
var map__28894 = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var map__28894__$1 = ((((!((map__28894 == null)))?((((map__28894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28894):map__28894);
var x = cljs.core.get.call(null,map__28894__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28894__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var char_attrs = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"char-attrs","char-attrs",-1444091455));
var auto_wrap_mode = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583));
var insert_mode = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"insert-mode","insert-mode",894811791));
var charset_fn = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"charset-fn","charset-fn",1374523920));
var input__$1 = (((((95) < input)) && ((input < (127))))?charset_fn.call(null,input):input);
var cell = asciinema.player.vt.cell.call(null,input__$1,char_attrs);
if(cljs.core._EQ_.call(null,width,(x + (1)))){
if(cljs.core.truth_(auto_wrap_mode)){
return cljs.core.assoc.call(null,asciinema.player.vt.move_cursor_to_col.call(null,cljs.core.assoc_in.call(null,vt,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),y,x], null),cell),(x + (1))),new cljs.core.Keyword(null,"next-print-wraps","next-print-wraps",-1664999738),true);
} else {
return cljs.core.assoc_in.call(null,vt,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),y,x], null),cell);
}
} else {
var f = (cljs.core.truth_(insert_mode)?asciinema.player.vt.insert_char:asciinema.player.vt.replace_char);
return asciinema.player.vt.move_cursor_to_col.call(null,cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),y], null),f,x,cell),(x + (1)));
}
});
asciinema.player.vt.print = (function asciinema$player$vt$print(p__28897,input){
var map__28900 = p__28897;
var map__28900__$1 = ((((!((map__28900 == null)))?((((map__28900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28900):map__28900);
var vt = map__28900__$1;
var auto_wrap_mode = cljs.core.get.call(null,map__28900__$1,new cljs.core.Keyword(null,"auto-wrap-mode","auto-wrap-mode",-2049555583));
var next_print_wraps = cljs.core.get.call(null,map__28900__$1,new cljs.core.Keyword(null,"next-print-wraps","next-print-wraps",-1664999738));
if(cljs.core.truth_((function (){var and__18776__auto__ = auto_wrap_mode;
if(cljs.core.truth_(and__18776__auto__)){
return next_print_wraps;
} else {
return and__18776__auto__;
}
})())){
return asciinema.player.vt.do_print.call(null,asciinema.player.vt.wrap.call(null,vt),input);
} else {
return asciinema.player.vt.do_print.call(null,vt,input);
}
});
asciinema.player.vt.execute = (function asciinema$player$vt$execute(vt,input){
var temp__4423__auto__ = (function (){var pred__28905 = cljs.core._EQ_;
var expr__28906 = input;
if(cljs.core.truth_(pred__28905.call(null,(8),expr__28906))){
return asciinema.player.vt.execute_bs;
} else {
if(cljs.core.truth_(pred__28905.call(null,(9),expr__28906))){
return asciinema.player.vt.execute_ht;
} else {
if(cljs.core.truth_(pred__28905.call(null,(10),expr__28906))){
return asciinema.player.vt.execute_lf;
} else {
if(cljs.core.truth_(pred__28905.call(null,(11),expr__28906))){
return asciinema.player.vt.execute_lf;
} else {
if(cljs.core.truth_(pred__28905.call(null,(12),expr__28906))){
return asciinema.player.vt.execute_lf;
} else {
if(cljs.core.truth_(pred__28905.call(null,(13),expr__28906))){
return asciinema.player.vt.execute_cr;
} else {
if(cljs.core.truth_(pred__28905.call(null,(14),expr__28906))){
return asciinema.player.vt.execute_so;
} else {
if(cljs.core.truth_(pred__28905.call(null,(15),expr__28906))){
return asciinema.player.vt.execute_si;
} else {
if(cljs.core.truth_(pred__28905.call(null,(132),expr__28906))){
return asciinema.player.vt.execute_lf;
} else {
if(cljs.core.truth_(pred__28905.call(null,(133),expr__28906))){
return asciinema.player.vt.execute_nel;
} else {
if(cljs.core.truth_(pred__28905.call(null,(136),expr__28906))){
return asciinema.player.vt.execute_hts;
} else {
if(cljs.core.truth_(pred__28905.call(null,(141),expr__28906))){
return asciinema.player.vt.execute_ri;
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
})();
if(cljs.core.truth_(temp__4423__auto__)){
var action = temp__4423__auto__;
return action.call(null,vt);
} else {
return vt;
}
});
asciinema.player.vt.clear = (function asciinema$player$vt$clear(vt,input){
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intermediate-chars","intermediate-chars",93692085),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"param-chars","param-chars",38609125),cljs.core.PersistentVector.EMPTY], null));
});
asciinema.player.vt.collect = (function asciinema$player$vt$collect(vt,input){
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"intermediate-chars","intermediate-chars",93692085)], null),cljs.core.conj,input);
});
asciinema.player.vt.param = (function asciinema$player$vt$param(vt,input){
return cljs.core.update_in.call(null,vt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"param-chars","param-chars",38609125)], null),cljs.core.conj,input);
});
asciinema.player.vt.esc_dispatch = (function asciinema$player$vt$esc_dispatch(vt,input){
var ocr_28923 = asciinema.player.vt.get_intermediate.call(null,vt,(0));
var input__$1 = input;
try{if((ocr_28923 === null)){
try{if(((function (ocr_28923,input__$1){
return (function (p1__28908_SHARP_){
return (((64) <= p1__28908_SHARP_)) && ((p1__28908_SHARP_ <= (95)));
});})(ocr_28923,input__$1))
.call(null,input__$1)){
return asciinema.player.vt.execute.call(null,vt,(input__$1 + (64)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e28933){if((e28933 instanceof Error)){
var e__20430__auto__ = e28933;
if((e__20430__auto__ === cljs.core.match.backtrack)){
try{if((input__$1 === (55))){
return asciinema.player.vt.execute_sc.call(null,vt);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28934){if((e28934 instanceof Error)){
var e__20430__auto____$1 = e28934;
if((e__20430__auto____$1 === cljs.core.match.backtrack)){
try{if((input__$1 === (56))){
return asciinema.player.vt.execute_rc.call(null,vt);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28935){if((e28935 instanceof Error)){
var e__20430__auto____$2 = e28935;
if((e__20430__auto____$2 === cljs.core.match.backtrack)){
try{if((input__$1 === (99))){
return asciinema.player.vt.make_vt.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vt),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vt));
} else {
throw cljs.core.match.backtrack;

}
}catch (e28936){if((e28936 instanceof Error)){
var e__20430__auto____$3 = e28936;
if((e__20430__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20430__auto____$3;
}
} else {
throw e28936;

}
}} else {
throw e__20430__auto____$2;
}
} else {
throw e28935;

}
}} else {
throw e__20430__auto____$1;
}
} else {
throw e28934;

}
}} else {
throw e__20430__auto__;
}
} else {
throw e28933;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28928){if((e28928 instanceof Error)){
var e__20430__auto__ = e28928;
if((e__20430__auto__ === cljs.core.match.backtrack)){
try{if((ocr_28923 === (35))){
try{if((input__$1 === (56))){
return asciinema.player.vt.execute_decaln.call(null,vt);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28932){if((e28932 instanceof Error)){
var e__20430__auto____$1 = e28932;
if((e__20430__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20430__auto____$1;
}
} else {
throw e28932;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28929){if((e28929 instanceof Error)){
var e__20430__auto____$1 = e28929;
if((e__20430__auto____$1 === cljs.core.match.backtrack)){
try{if((ocr_28923 === (40))){
try{if((input__$1 === (48))){
return asciinema.player.vt.execute_so.call(null,vt);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28931){if((e28931 instanceof Error)){
var e__20430__auto____$2 = e28931;
if((e__20430__auto____$2 === cljs.core.match.backtrack)){
return asciinema.player.vt.execute_si.call(null,vt);
} else {
throw e__20430__auto____$2;
}
} else {
throw e28931;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28930){if((e28930 instanceof Error)){
var e__20430__auto____$2 = e28930;
if((e__20430__auto____$2 === cljs.core.match.backtrack)){
return vt;
} else {
throw e__20430__auto____$2;
}
} else {
throw e28930;

}
}} else {
throw e__20430__auto____$1;
}
} else {
throw e28929;

}
}} else {
throw e__20430__auto__;
}
} else {
throw e28928;

}
}});
asciinema.player.vt.csi_dispatch = (function asciinema$player$vt$csi_dispatch(vt,input){
var temp__4423__auto__ = (function (){var pred__28940 = cljs.core._EQ_;
var expr__28941 = input;
if(cljs.core.truth_(pred__28940.call(null,(64),expr__28941))){
return asciinema.player.vt.execute_ich;
} else {
if(cljs.core.truth_(pred__28940.call(null,(65),expr__28941))){
return asciinema.player.vt.execute_cuu;
} else {
if(cljs.core.truth_(pred__28940.call(null,(66),expr__28941))){
return asciinema.player.vt.execute_cud;
} else {
if(cljs.core.truth_(pred__28940.call(null,(67),expr__28941))){
return asciinema.player.vt.execute_cuf;
} else {
if(cljs.core.truth_(pred__28940.call(null,(68),expr__28941))){
return asciinema.player.vt.execute_cub;
} else {
if(cljs.core.truth_(pred__28940.call(null,(69),expr__28941))){
return asciinema.player.vt.execute_cnl;
} else {
if(cljs.core.truth_(pred__28940.call(null,(70),expr__28941))){
return asciinema.player.vt.execute_cpl;
} else {
if(cljs.core.truth_(pred__28940.call(null,(71),expr__28941))){
return asciinema.player.vt.execute_cha;
} else {
if(cljs.core.truth_(pred__28940.call(null,(72),expr__28941))){
return asciinema.player.vt.execute_cup;
} else {
if(cljs.core.truth_(pred__28940.call(null,(73),expr__28941))){
return asciinema.player.vt.execute_cht;
} else {
if(cljs.core.truth_(pred__28940.call(null,(74),expr__28941))){
return asciinema.player.vt.execute_ed;
} else {
if(cljs.core.truth_(pred__28940.call(null,(75),expr__28941))){
return asciinema.player.vt.execute_el;
} else {
if(cljs.core.truth_(pred__28940.call(null,(76),expr__28941))){
return asciinema.player.vt.execute_il;
} else {
if(cljs.core.truth_(pred__28940.call(null,(77),expr__28941))){
return asciinema.player.vt.execute_dl;
} else {
if(cljs.core.truth_(pred__28940.call(null,(80),expr__28941))){
return asciinema.player.vt.execute_dch;
} else {
if(cljs.core.truth_(pred__28940.call(null,(83),expr__28941))){
return asciinema.player.vt.execute_su;
} else {
if(cljs.core.truth_(pred__28940.call(null,(84),expr__28941))){
return asciinema.player.vt.execute_sd;
} else {
if(cljs.core.truth_(pred__28940.call(null,(87),expr__28941))){
return asciinema.player.vt.execute_ctc;
} else {
if(cljs.core.truth_(pred__28940.call(null,(88),expr__28941))){
return asciinema.player.vt.execute_ech;
} else {
if(cljs.core.truth_(pred__28940.call(null,(90),expr__28941))){
return asciinema.player.vt.execute_cbt;
} else {
if(cljs.core.truth_(pred__28940.call(null,(96),expr__28941))){
return asciinema.player.vt.execute_cha;
} else {
if(cljs.core.truth_(pred__28940.call(null,(97),expr__28941))){
return asciinema.player.vt.execute_cuf;
} else {
if(cljs.core.truth_(pred__28940.call(null,(100),expr__28941))){
return asciinema.player.vt.execute_vpa;
} else {
if(cljs.core.truth_(pred__28940.call(null,(101),expr__28941))){
return asciinema.player.vt.execute_cuu;
} else {
if(cljs.core.truth_(pred__28940.call(null,(102),expr__28941))){
return asciinema.player.vt.execute_cup;
} else {
if(cljs.core.truth_(pred__28940.call(null,(103),expr__28941))){
return asciinema.player.vt.execute_tbc;
} else {
if(cljs.core.truth_(pred__28940.call(null,(104),expr__28941))){
return asciinema.player.vt.execute_sm;
} else {
if(cljs.core.truth_(pred__28940.call(null,(108),expr__28941))){
return asciinema.player.vt.execute_rm;
} else {
if(cljs.core.truth_(pred__28940.call(null,(109),expr__28941))){
return asciinema.player.vt.execute_sgr;
} else {
if(cljs.core.truth_(pred__28940.call(null,(112),expr__28941))){
return asciinema.player.vt.execute_decstr;
} else {
if(cljs.core.truth_(pred__28940.call(null,(114),expr__28941))){
return asciinema.player.vt.execute_decstbm;
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
})();
if(cljs.core.truth_(temp__4423__auto__)){
var action = temp__4423__auto__;
return action.call(null,vt);
} else {
return vt;
}
});
asciinema.player.vt.hook = (function asciinema$player$vt$hook(vt,input){
return vt;
});
asciinema.player.vt.put = (function asciinema$player$vt$put(vt,input){
return vt;
});
asciinema.player.vt.unhook = (function asciinema$player$vt$unhook(vt,input){
return vt;
});
asciinema.player.vt.osc_start = (function asciinema$player$vt$osc_start(vt,input){
return vt;
});
asciinema.player.vt.osc_put = (function asciinema$player$vt$osc_put(vt,input){
return vt;
});
asciinema.player.vt.osc_end = (function asciinema$player$vt$osc_end(vt,input){
return vt;
});
asciinema.player.vt.c0_prime_QMARK_ = cljs.core.set.call(null,cljs.core.list((0),(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16),(17),(18),(19),(20),(21),(22),(23),(25),(28),(29),(30),(31)));
asciinema.player.vt.anywhere_state = cljs.core.PersistentArrayMap.fromArray([cljs.core.set.call(null,cljs.core.list((24),(26),(128),(129),(130),(131),(132),(133),(134),(135),(136),(137),(138),(139),(140),(141),(142),(143),(145),(146),(147),(148),(149),(150),(151),(153),(154))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.execute,new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"ground","ground",1193572934)], null),cljs.core.set.call(null,cljs.core.list((156))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"ground","ground",1193572934)], null),cljs.core.set.call(null,cljs.core.list((27))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"escape","escape",-991601952)], null),cljs.core.set.call(null,cljs.core.list((152),(158),(159))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"sos-pm-apc-string","sos-pm-apc-string",398998091)], null),cljs.core.set.call(null,cljs.core.list((144))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"dcs-entry","dcs-entry",216833388)], null),cljs.core.set.call(null,cljs.core.list((157))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"osc-string","osc-string",-486531128)], null),cljs.core.set.call(null,cljs.core.list((155))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"csi-entry","csi-entry",-1787942099)], null)], true, false);
asciinema.player.vt.states = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dcs-param","dcs-param",-971011648),new cljs.core.Keyword(null,"escape","escape",-991601952),new cljs.core.Keyword(null,"ground","ground",1193572934),new cljs.core.Keyword(null,"dcs-passthrough","dcs-passthrough",-671044440),new cljs.core.Keyword(null,"csi-param","csi-param",-1120111192),new cljs.core.Keyword(null,"dcs-intermediate","dcs-intermediate",480808872),new cljs.core.Keyword(null,"osc-string","osc-string",-486531128),new cljs.core.Keyword(null,"sos-pm-apc-string","sos-pm-apc-string",398998091),new cljs.core.Keyword(null,"dcs-entry","dcs-entry",216833388),new cljs.core.Keyword(null,"csi-entry","csi-entry",-1787942099),new cljs.core.Keyword(null,"escape-intermediate","escape-intermediate",1036490448),new cljs.core.Keyword(null,"csi-intermediate","csi-intermediate",-410048175),new cljs.core.Keyword(null,"csi-ignore","csi-ignore",-764437550),new cljs.core.Keyword(null,"dcs-ignore","dcs-ignore",198619612)],[cljs.core.PersistentArrayMap.fromArray([asciinema.player.vt.c0_prime_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.ignore], null),cljs.core.set.call(null,cljs.core.list((32),(33),(34),(35),(36),(37),(38),(39),(40),(41),(42),(43),(44),(45),(46),(47))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.collect,new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"dcs-intermediate","dcs-intermediate",480808872)], null),cljs.core.set.call(null,cljs.core.list((48),(49),(50),(51),(52),(53),(54),(55),(56),(57),(59))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.param], null),cljs.core.set.call(null,cljs.core.list((58),(60),(61),(62),(63))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"dcs-ignore","dcs-ignore",198619612)], null),cljs.core.set.call(null,cljs.core.list((64),(65),(66),(67),(68),(69),(70),(71),(72),(73),(74),(75),(76),(77),(78),(79),(80),(81),(82),(83),(84),(85),(86),(87),(88),(89),(90),(91),(92),(93),(94),(95),(96),(97),(98),(99),(100),(101),(102),(103),(104),(105),(106),(107),(108),(109),(110),(111),(112),(113),(114),(115),(116),(117),(118),(119),(120),(121),(122),(123),(124),(125),(126))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"dcs-passthrough","dcs-passthrough",-671044440)], null),cljs.core.set.call(null,cljs.core.list((127))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.ignore], null)], true, false),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),cljs.core.set.call(null,cljs.core.list((88),(94),(95))),asciinema.player.vt.c0_prime_QMARK_,cljs.core.set.call(null,cljs.core.list((91))),cljs.core.set.call(null,cljs.core.list((80))),cljs.core.set.call(null,cljs.core.list((32),(33),(34),(35),(36),(37),(38),(39),(40),(41),(42),(43),(44),(45),(46),(47))),cljs.core.set.call(null,cljs.core.list((127))),cljs.core.set.call(null,cljs.core.list((48),(49),(50),(51),(52),(53),(54),(55),(56),(57),(58),(59),(60),(61),(62),(63),(64),(65),(66),(67),(68),(69),(70),(71),(72),(73),(74),(75),(76),(77),(78),(79),(81),(82),(83),(84),(85),(86),(87),(89),(90),(92),(96),(97),(98),(99),(100),(101),(102),(103),(104),(105),(106),(107),(108),(109),(110),(111),(112),(113),(114),(115),(116),(117),(118),(119),(120),(121),(122),(123),(124),(125),(126))),cljs.core.set.call(null,cljs.core.list((93)))],[asciinema.player.vt.clear,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"sos-pm-apc-string","sos-pm-apc-string",398998091)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.execute], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"csi-entry","csi-entry",-1787942099)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"dcs-entry","dcs-entry",216833388)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.collect,new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"escape-intermediate","escape-intermediate",1036490448)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.ignore], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.esc_dispatch,new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"ground","ground",1193572934)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"osc-string","osc-string",-486531128)], null)]),cljs.core.PersistentArrayMap.fromArray([asciinema.player.vt.c0_prime_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.execute], null),cljs.core.set.call(null,cljs.core.list((32),(33),(34),(35),(36),(37),(38),(39),(40),(41),(42),(43),(44),(45),(46),(47),(48),(49),(50),(51),(52),(53),(54),(55),(56),(57),(58),(59),(60),(61),(62),(63),(64),(65),(66),(67),(68),(69),(70),(71),(72),(73),(74),(75),(76),(77),(78),(79),(80),(81),(82),(83),(84),(85),(86),(87),(88),(89),(90),(91),(92),(93),(94),(95),(96),(97),(98),(99),(100),(101),(102),(103),(104),(105),(106),(107),(108),(109),(110),(111),(112),(113),(114),(115),(116),(117),(118),(119),(120),(121),(122),(123),(124),(125),(126),(127),(160),(161),(162),(163),(164),(165),(166),(167),(168),(169),(170),(171),(172),(173),(174),(175),(176),(177),(178),(179),(180),(181),(182),(183),(184),(185),(186),(187),(188),(189),(190),(191),(192),(193),(194),(195),(196),(197),(198),(199),(200),(201),(202),(203),(204),(205),(206),(207),(208),(209),(210),(211),(212),(213),(214),(215),(216),(217),(218),(219),(220),(221),(222),(223),(224),(225),(226),(227),(228),(229),(230),(231),(232),(233),(234),(235),(236),(237),(238),(239),(240),(241),(242),(243),(244),(245),(246),(247),(248),(249),(250),(251),(252),(253),(254),(255))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.print], null)], true, false),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),asciinema.player.vt.hook,asciinema.player.vt.c0_prime_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.put], null),cljs.core.set.call(null,cljs.core.list((32),(33),(34),(35),(36),(37),(38),(39),(40),(41),(42),(43),(44),(45),(46),(47),(48),(49),(50),(51),(52),(53),(54),(55),(56),(57),(58),(59),(60),(61),(62),(63),(64),(65),(66),(67),(68),(69),(70),(71),(72),(73),(74),(75),(76),(77),(78),(79),(80),(81),(82),(83),(84),(85),(86),(87),(88),(89),(90),(91),(92),(93),(94),(95),(96),(97),(98),(99),(100),(101),(102),(103),(104),(105),(106),(107),(108),(109),(110),(111),(112),(113),(114),(115),(116),(117),(118),(119),(120),(121),(122),(123),(124),(125),(126))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.put], null),cljs.core.set.call(null,cljs.core.list((127))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.ignore], null),new cljs.core.Keyword(null,"on-exit","on-exit",1821961613),asciinema.player.vt.unhook], true, false),cljs.core.PersistentArrayMap.fromArray([asciinema.player.vt.c0_prime_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.execute], null),cljs.core.set.call(null,cljs.core.list((48),(49),(50),(51),(52),(53),(54),(55),(56),(57),(59))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.param], null),cljs.core.set.call(null,cljs.core.list((58),(60),(61),(62),(63))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"csi-ignore","csi-ignore",-764437550)], null),cljs.core.set.call(null,cljs.core.list((32),(33),(34),(35),(36),(37),(38),(39),(40),(41),(42),(43),(44),(45),(46),(47))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.collect,new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"csi-intermediate","csi-intermediate",-410048175)], null),cljs.core.set.call(null,cljs.core.list((64),(65),(66),(67),(68),(69),(70),(71),(72),(73),(74),(75),(76),(77),(78),(79),(80),(81),(82),(83),(84),(85),(86),(87),(88),(89),(90),(91),(92),(93),(94),(95),(96),(97),(98),(99),(100),(101),(102),(103),(104),(105),(106),(107),(108),(109),(110),(111),(112),(113),(114),(115),(116),(117),(118),(119),(120),(121),(122),(123),(124),(125),(126))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.csi_dispatch,new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"ground","ground",1193572934)], null),cljs.core.set.call(null,cljs.core.list((127))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.ignore], null)], true, false),cljs.core.PersistentArrayMap.fromArray([asciinema.player.vt.c0_prime_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.ignore], null),cljs.core.set.call(null,cljs.core.list((32),(33),(34),(35),(36),(37),(38),(39),(40),(41),(42),(43),(44),(45),(46),(47))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.collect], null),cljs.core.set.call(null,cljs.core.list((48),(49),(50),(51),(52),(53),(54),(55),(56),(57),(58),(59),(60),(61),(62),(63))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"dcs-ignore","dcs-ignore",198619612)], null),cljs.core.set.call(null,cljs.core.list((64),(65),(66),(67),(68),(69),(70),(71),(72),(73),(74),(75),(76),(77),(78),(79),(80),(81),(82),(83),(84),(85),(86),(87),(88),(89),(90),(91),(92),(93),(94),(95),(96),(97),(98),(99),(100),(101),(102),(103),(104),(105),(106),(107),(108),(109),(110),(111),(112),(113),(114),(115),(116),(117),(118),(119),(120),(121),(122),(123),(124),(125),(126))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"dcs-passthrough","dcs-passthrough",-671044440)], null),cljs.core.set.call(null,cljs.core.list((127))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.ignore], null)], true, false),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),asciinema.player.vt.osc_start,cljs.core.disj.call(null,asciinema.player.vt.c0_prime_QMARK_,(7)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.ignore], null),cljs.core.set.call(null,cljs.core.list((32),(33),(34),(35),(36),(37),(38),(39),(40),(41),(42),(43),(44),(45),(46),(47),(48),(49),(50),(51),(52),(53),(54),(55),(56),(57),(58),(59),(60),(61),(62),(63),(64),(65),(66),(67),(68),(69),(70),(71),(72),(73),(74),(75),(76),(77),(78),(79),(80),(81),(82),(83),(84),(85),(86),(87),(88),(89),(90),(91),(92),(93),(94),(95),(96),(97),(98),(99),(100),(101),(102),(103),(104),(105),(106),(107),(108),(109),(110),(111),(112),(113),(114),(115),(116),(117),(118),(119),(120),(121),(122),(123),(124),(125),(126),(127))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.osc_put], null),cljs.core.set.call(null,cljs.core.list((7))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"ground","ground",1193572934)], null),new cljs.core.Keyword(null,"on-exit","on-exit",1821961613),asciinema.player.vt.osc_end], true, false),cljs.core.PersistentArrayMap.fromArray([asciinema.player.vt.c0_prime_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.ignore], null),cljs.core.set.call(null,cljs.core.list((32),(33),(34),(35),(36),(37),(38),(39),(40),(41),(42),(43),(44),(45),(46),(47),(48),(49),(50),(51),(52),(53),(54),(55),(56),(57),(58),(59),(60),(61),(62),(63),(64),(65),(66),(67),(68),(69),(70),(71),(72),(73),(74),(75),(76),(77),(78),(79),(80),(81),(82),(83),(84),(85),(86),(87),(88),(89),(90),(91),(92),(93),(94),(95),(96),(97),(98),(99),(100),(101),(102),(103),(104),(105),(106),(107),(108),(109),(110),(111),(112),(113),(114),(115),(116),(117),(118),(119),(120),(121),(122),(123),(124),(125),(126),(127))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.ignore], null)], true, false),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),asciinema.player.vt.clear,asciinema.player.vt.c0_prime_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.ignore], null),cljs.core.set.call(null,cljs.core.list((32),(33),(34),(35),(36),(37),(38),(39),(40),(41),(42),(43),(44),(45),(46),(47))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.collect,new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"dcs-intermediate","dcs-intermediate",480808872)], null),cljs.core.set.call(null,cljs.core.list((58))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"dcs-ignore","dcs-ignore",198619612)], null),cljs.core.set.call(null,cljs.core.list((48),(49),(50),(51),(52),(53),(54),(55),(56),(57),(59))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.param,new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"dcs-param","dcs-param",-971011648)], null),cljs.core.set.call(null,cljs.core.list((60),(61),(62),(63))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.collect,new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"dcs-param","dcs-param",-971011648)], null),cljs.core.set.call(null,cljs.core.list((64),(65),(66),(67),(68),(69),(70),(71),(72),(73),(74),(75),(76),(77),(78),(79),(80),(81),(82),(83),(84),(85),(86),(87),(88),(89),(90),(91),(92),(93),(94),(95),(96),(97),(98),(99),(100),(101),(102),(103),(104),(105),(106),(107),(108),(109),(110),(111),(112),(113),(114),(115),(116),(117),(118),(119),(120),(121),(122),(123),(124),(125),(126))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"dcs-passthrough","dcs-passthrough",-671044440)], null),cljs.core.set.call(null,cljs.core.list((127))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.ignore], null)], true, false),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),asciinema.player.vt.clear,asciinema.player.vt.c0_prime_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.execute], null),cljs.core.set.call(null,cljs.core.list((64),(65),(66),(67),(68),(69),(70),(71),(72),(73),(74),(75),(76),(77),(78),(79),(80),(81),(82),(83),(84),(85),(86),(87),(88),(89),(90),(91),(92),(93),(94),(95),(96),(97),(98),(99),(100),(101),(102),(103),(104),(105),(106),(107),(108),(109),(110),(111),(112),(113),(114),(115),(116),(117),(118),(119),(120),(121),(122),(123),(124),(125),(126))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.csi_dispatch,new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"ground","ground",1193572934)], null),cljs.core.set.call(null,cljs.core.list((48),(49),(50),(51),(52),(53),(54),(55),(56),(57),(59))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.param,new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"csi-param","csi-param",-1120111192)], null),cljs.core.set.call(null,cljs.core.list((60),(61),(62),(63))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.collect,new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"csi-param","csi-param",-1120111192)], null),cljs.core.set.call(null,cljs.core.list((58))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"csi-ignore","csi-ignore",-764437550)], null),cljs.core.set.call(null,cljs.core.list((32),(33),(34),(35),(36),(37),(38),(39),(40),(41),(42),(43),(44),(45),(46),(47))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.collect,new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"csi-intermediate","csi-intermediate",-410048175)], null),cljs.core.set.call(null,cljs.core.list((127))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.ignore], null)], true, false),cljs.core.PersistentArrayMap.fromArray([asciinema.player.vt.c0_prime_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.execute], null),cljs.core.set.call(null,cljs.core.list((32),(33),(34),(35),(36),(37),(38),(39),(40),(41),(42),(43),(44),(45),(46),(47))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.collect], null),cljs.core.set.call(null,cljs.core.list((48),(49),(50),(51),(52),(53),(54),(55),(56),(57),(58),(59),(60),(61),(62),(63),(64),(65),(66),(67),(68),(69),(70),(71),(72),(73),(74),(75),(76),(77),(78),(79),(80),(81),(82),(83),(84),(85),(86),(87),(88),(89),(90),(91),(92),(93),(94),(95),(96),(97),(98),(99),(100),(101),(102),(103),(104),(105),(106),(107),(108),(109),(110),(111),(112),(113),(114),(115),(116),(117),(118),(119),(120),(121),(122),(123),(124),(125),(126))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.esc_dispatch,new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"ground","ground",1193572934)], null),cljs.core.set.call(null,cljs.core.list((127))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.ignore], null)], true, false),cljs.core.PersistentArrayMap.fromArray([asciinema.player.vt.c0_prime_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.execute], null),cljs.core.set.call(null,cljs.core.list((32),(33),(34),(35),(36),(37),(38),(39),(40),(41),(42),(43),(44),(45),(46),(47))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.collect], null),cljs.core.set.call(null,cljs.core.list((64),(65),(66),(67),(68),(69),(70),(71),(72),(73),(74),(75),(76),(77),(78),(79),(80),(81),(82),(83),(84),(85),(86),(87),(88),(89),(90),(91),(92),(93),(94),(95),(96),(97),(98),(99),(100),(101),(102),(103),(104),(105),(106),(107),(108),(109),(110),(111),(112),(113),(114),(115),(116),(117),(118),(119),(120),(121),(122),(123),(124),(125),(126))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.csi_dispatch,new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"ground","ground",1193572934)], null),cljs.core.set.call(null,cljs.core.list((48),(49),(50),(51),(52),(53),(54),(55),(56),(57),(58),(59),(60),(61),(62),(63))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"csi-ignore","csi-ignore",-764437550)], null),cljs.core.set.call(null,cljs.core.list((127))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.ignore], null)], true, false),cljs.core.PersistentArrayMap.fromArray([asciinema.player.vt.c0_prime_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.execute], null),cljs.core.set.call(null,cljs.core.list((32),(33),(34),(35),(36),(37),(38),(39),(40),(41),(42),(43),(44),(45),(46),(47),(48),(49),(50),(51),(52),(53),(54),(55),(56),(57),(58),(59),(60),(61),(62),(63))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.ignore], null),cljs.core.set.call(null,cljs.core.list((64),(65),(66),(67),(68),(69),(70),(71),(72),(73),(74),(75),(76),(77),(78),(79),(80),(81),(82),(83),(84),(85),(86),(87),(88),(89),(90),(91),(92),(93),(94),(95),(96),(97),(98),(99),(100),(101),(102),(103),(104),(105),(106),(107),(108),(109),(110),(111),(112),(113),(114),(115),(116),(117),(118),(119),(120),(121),(122),(123),(124),(125),(126))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"ground","ground",1193572934)], null),cljs.core.set.call(null,cljs.core.list((127))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.ignore], null)], true, false),cljs.core.PersistentArrayMap.fromArray([asciinema.player.vt.c0_prime_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.ignore], null),cljs.core.set.call(null,cljs.core.list((32),(33),(34),(35),(36),(37),(38),(39),(40),(41),(42),(43),(44),(45),(46),(47),(48),(49),(50),(51),(52),(53),(54),(55),(56),(57),(58),(59),(60),(61),(62),(63),(64),(65),(66),(67),(68),(69),(70),(71),(72),(73),(74),(75),(76),(77),(78),(79),(80),(81),(82),(83),(84),(85),(86),(87),(88),(89),(90),(91),(92),(93),(94),(95),(96),(97),(98),(99),(100),(101),(102),(103),(104),(105),(106),(107),(108),(109),(110),(111),(112),(113),(114),(115),(116),(117),(118),(119),(120),(121),(122),(123),(124),(125),(126),(127))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),asciinema.player.vt.ignore], null)], true, false)]);
asciinema.player.vt.get_transition = (function asciinema$player$vt$get_transition(rules,input){
return cljs.core.some.call(null,(function (p__28945){
var vec__28946 = p__28945;
var pred = cljs.core.nth.call(null,vec__28946,(0),null);
var cfg = cljs.core.nth.call(null,vec__28946,(1),null);
if(cljs.core.truth_(pred.call(null,input))){
return cfg;
} else {
return null;
}
}),rules);
});
asciinema.player.vt.parse = cljs.core.memoize.call(null,(function (current_state,input){
var current_state_cfg = cljs.core.get.call(null,asciinema.player.vt.states,current_state);
var transition = (function (){var or__18788__auto__ = asciinema.player.vt.get_transition.call(null,asciinema.player.vt.anywhere_state,input);
if(cljs.core.truth_(or__18788__auto__)){
return or__18788__auto__;
} else {
return asciinema.player.vt.get_transition.call(null,current_state_cfg,(((input >= (160)))?(65):input));
}
})();
var transition_action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(transition);
var temp__4423__auto__ = new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(transition);
if(cljs.core.truth_(temp__4423__auto__)){
var new_state = temp__4423__auto__;
var new_state_cfg = cljs.core.get.call(null,asciinema.player.vt.states,new_state);
var exit_action = new cljs.core.Keyword(null,"on-exit","on-exit",1821961613).cljs$core$IFn$_invoke$arity$1(current_state_cfg);
var entry_action = new cljs.core.Keyword(null,"on-enter","on-enter",-928988216).cljs$core$IFn$_invoke$arity$1(new_state_cfg);
var actions = cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit_action,transition_action,entry_action], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_state,actions], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_state,(cljs.core.truth_(transition_action)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transition_action], null):cljs.core.PersistentVector.EMPTY)], null);
}
}));
asciinema.player.vt.execute_actions = (function asciinema$player$vt$execute_actions(vt,actions,input){
return cljs.core.reduce.call(null,(function (vt__$1,f){
return f.call(null,vt__$1,input);
}),vt,actions);
});
var ufv___28963 = schema.utils.use_fn_validation;
var output_schema28947_28964 = asciinema.player.vt.VT;
var input_schema28948_28965 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,asciinema.player.vt.VT,cljs.core.with_meta(new cljs.core.Symbol(null,"vt","vt",-1355277565,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"VT","VT",-1472079567,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"VT","VT",-1472079567,null)], null))),schema.core.one.call(null,schema.core.Num,cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Num","s/Num",-2044935073,null)], null)))], null);
var input_checker28949_28966 = (new cljs.core.Delay(((function (ufv___28963,output_schema28947_28964,input_schema28948_28965){
return (function (){
return schema.core.checker.call(null,input_schema28948_28965);
});})(ufv___28963,output_schema28947_28964,input_schema28948_28965))
,null));
var output_checker28950_28967 = (new cljs.core.Delay(((function (ufv___28963,output_schema28947_28964,input_schema28948_28965,input_checker28949_28966){
return (function (){
return schema.core.checker.call(null,output_schema28947_28964);
});})(ufv___28963,output_schema28947_28964,input_schema28948_28965,input_checker28949_28966))
,null));
var ret__1656__auto___28968 = /**
 * Inputs: [vt :- VT input :- s/Num]
 *   Returns: VT
 */
asciinema.player.vt.feed_one = ((function (ufv___28963,output_schema28947_28964,input_schema28948_28965,input_checker28949_28966,output_checker28950_28967){
return (function asciinema$player$vt$feed_one(G__28951,G__28952){
var validate__212__auto__ = ufv___28963.get_cell();
if(cljs.core.truth_(validate__212__auto__)){
var args__213__auto___28969 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28951,G__28952], null);
var temp__4425__auto___28970 = cljs.core.deref.call(null,input_checker28949_28966).call(null,args__213__auto___28969);
if(cljs.core.truth_(temp__4425__auto___28970)){
var error__214__auto___28971 = temp__4425__auto___28970;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"feed-one","feed-one",-1177005984,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"VT","VT",-1472079567,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"VT","VT",-1472079567,null)], null)),cljs.core.pr_str.call(null,error__214__auto___28971)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28948_28965,new cljs.core.Keyword(null,"value","value",305978217),args__213__auto___28969,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28971], null));
} else {
}
} else {
}

var o__215__auto__ = (function (){var vt = G__28951;
var input = G__28952;
while(true){
var map__28958 = vt;
var map__28958__$1 = ((((!((map__28958 == null)))?((((map__28958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28958):map__28958);
var map__28959 = cljs.core.get.call(null,map__28958__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var map__28959__$1 = ((((!((map__28959 == null)))?((((map__28959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28959):map__28959);
var old_state = cljs.core.get.call(null,map__28959__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var vec__28960 = asciinema.player.vt.parse.call(null,old_state,input);
var new_state = cljs.core.nth.call(null,vec__28960,(0),null);
var actions = cljs.core.nth.call(null,vec__28960,(1),null);
return asciinema.player.vt.execute_actions.call(null,cljs.core.assoc_in.call(null,vt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new_state),actions,input);
break;
}
})();
if(cljs.core.truth_(validate__212__auto__)){
var temp__4425__auto___28972 = cljs.core.deref.call(null,output_checker28950_28967).call(null,o__215__auto__);
if(cljs.core.truth_(temp__4425__auto___28972)){
var error__214__auto___28973 = temp__4425__auto___28972;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"feed-one","feed-one",-1177005984,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"VT","VT",-1472079567,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"VT","VT",-1472079567,null)], null)),cljs.core.pr_str.call(null,error__214__auto___28973)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28947_28964,new cljs.core.Keyword(null,"value","value",305978217),o__215__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28973], null));
} else {
}
} else {
}

return o__215__auto__;
});})(ufv___28963,output_schema28947_28964,input_schema28948_28965,input_checker28949_28966,output_checker28950_28967))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asciinema.player.vt.feed_one),schema.core.__GT_FnSchema.call(null,output_schema28947_28964,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28948_28965], null)));

asciinema.player.vt.feed = (function asciinema$player$vt$feed(vt,inputs){
return cljs.core.reduce.call(null,asciinema.player.vt.feed_one,vt,inputs);
});
asciinema.player.vt.feed_str = (function asciinema$player$vt$feed_str(vt,str){
var codes = cljs.core.mapv.call(null,(function (p1__28974_SHARP_){
return str.charCodeAt(p1__28974_SHARP_);
}),cljs.core.range.call(null,cljs.core.count.call(null,str)));
return asciinema.player.vt.feed.call(null,vt,codes);
});
var ufv___28980 = schema.utils.use_fn_validation;
var output_schema28975_28981 = schema.core.Str;
var input_schema28976_28982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.vt.CodePoint], null),cljs.core.with_meta(new cljs.core.Symbol(null,"chars","chars",545901210,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CodePoint","CodePoint",-132710345,null)], null)], null)))], null);
var input_checker28977_28983 = (new cljs.core.Delay(((function (ufv___28980,output_schema28975_28981,input_schema28976_28982){
return (function (){
return schema.core.checker.call(null,input_schema28976_28982);
});})(ufv___28980,output_schema28975_28981,input_schema28976_28982))
,null));
var output_checker28978_28984 = (new cljs.core.Delay(((function (ufv___28980,output_schema28975_28981,input_schema28976_28982,input_checker28977_28983){
return (function (){
return schema.core.checker.call(null,output_schema28975_28981);
});})(ufv___28980,output_schema28975_28981,input_schema28976_28982,input_checker28977_28983))
,null));
var ret__1656__auto___28985 = /**
 * Inputs: [chars :- [CodePoint]]
 *   Returns: s/Str
 */
asciinema.player.vt.chars__GT_string = ((function (ufv___28980,output_schema28975_28981,input_schema28976_28982,input_checker28977_28983,output_checker28978_28984){
return (function asciinema$player$vt$chars__GT_string(G__28979){
var validate__212__auto__ = ufv___28980.get_cell();
if(cljs.core.truth_(validate__212__auto__)){
var args__213__auto___28986 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28979], null);
var temp__4425__auto___28987 = cljs.core.deref.call(null,input_checker28977_28983).call(null,args__213__auto___28986);
if(cljs.core.truth_(temp__4425__auto___28987)){
var error__214__auto___28988 = temp__4425__auto___28987;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"chars->string","chars->string",1561377348,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)),cljs.core.pr_str.call(null,error__214__auto___28988)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28976_28982,new cljs.core.Keyword(null,"value","value",305978217),args__213__auto___28986,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28988], null));
} else {
}
} else {
}

var o__215__auto__ = (function (){var chars = G__28979;
while(true){
return cljs.core.apply.call(null,String.fromCharCode,chars);
break;
}
})();
if(cljs.core.truth_(validate__212__auto__)){
var temp__4425__auto___28989 = cljs.core.deref.call(null,output_checker28978_28984).call(null,o__215__auto__);
if(cljs.core.truth_(temp__4425__auto___28989)){
var error__214__auto___28990 = temp__4425__auto___28989;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"chars->string","chars->string",1561377348,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)),cljs.core.pr_str.call(null,error__214__auto___28990)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28975_28981,new cljs.core.Keyword(null,"value","value",305978217),o__215__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___28990], null));
} else {
}
} else {
}

return o__215__auto__;
});})(ufv___28980,output_schema28975_28981,input_schema28976_28982,input_checker28977_28983,output_checker28978_28984))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asciinema.player.vt.chars__GT_string),schema.core.__GT_FnSchema.call(null,output_schema28975_28981,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28976_28982], null)));

var ufv___29000 = schema.utils.use_fn_validation;
var output_schema28991_29001 = asciinema.player.vt.FragmentLine;
var input_schema28992_29002 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,asciinema.player.vt.CellLine,cljs.core.with_meta(new cljs.core.Symbol(null,"line","line",1852876762,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CellLine","CellLine",-317574363,null)], null)))], null);
var input_checker28993_29003 = (new cljs.core.Delay(((function (ufv___29000,output_schema28991_29001,input_schema28992_29002){
return (function (){
return schema.core.checker.call(null,input_schema28992_29002);
});})(ufv___29000,output_schema28991_29001,input_schema28992_29002))
,null));
var output_checker28994_29004 = (new cljs.core.Delay(((function (ufv___29000,output_schema28991_29001,input_schema28992_29002,input_checker28993_29003){
return (function (){
return schema.core.checker.call(null,output_schema28991_29001);
});})(ufv___29000,output_schema28991_29001,input_schema28992_29002,input_checker28993_29003))
,null));
var ret__1656__auto___29005 = /**
 * Inputs: [line :- CellLine]
 *   Returns: FragmentLine
 * 
 *   Joins together all neighbouring cells having the same color attributes.
 */
asciinema.player.vt.compact_line = ((function (ufv___29000,output_schema28991_29001,input_schema28992_29002,input_checker28993_29003,output_checker28994_29004){
return (function asciinema$player$vt$compact_line(G__28995){
var validate__212__auto__ = ufv___29000.get_cell();
if(cljs.core.truth_(validate__212__auto__)){
var args__213__auto___29006 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28995], null);
var temp__4425__auto___29007 = cljs.core.deref.call(null,input_checker28993_29003).call(null,args__213__auto___29006);
if(cljs.core.truth_(temp__4425__auto___29007)){
var error__214__auto___29008 = temp__4425__auto___29007;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compact-line","compact-line",2002027170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"FragmentLine","FragmentLine",-2134154876,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Joins together all neighbouring cells having the same color attributes."], null)),cljs.core.pr_str.call(null,error__214__auto___29008)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28992_29002,new cljs.core.Keyword(null,"value","value",305978217),args__213__auto___29006,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___29008], null));
} else {
}
} else {
}

var o__215__auto__ = (function (){var line = G__28995;
while(true){
var vec__28998 = line;
var cell = cljs.core.nth.call(null,vec__28998,(0),null);
var cells = cljs.core.nthnext.call(null,vec__28998,(1));
var segments = cljs.core.PersistentVector.EMPTY;
var chars = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cell)], null);
var attrs = cljs.core.last.call(null,cell);
var cells__$1 = cells;
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,cells__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__28999 = temp__4423__auto__;
var char$ = cljs.core.nth.call(null,vec__28999,(0),null);
var new_attrs = cljs.core.nth.call(null,vec__28999,(1),null);
if(cljs.core._EQ_.call(null,new_attrs,attrs)){
var G__29009 = segments;
var G__29010 = cljs.core.conj.call(null,chars,char$);
var G__29011 = attrs;
var G__29012 = cljs.core.rest.call(null,cells__$1);
segments = G__29009;
chars = G__29010;
attrs = G__29011;
cells__$1 = G__29012;
continue;
} else {
var G__29013 = cljs.core.conj.call(null,segments,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.vt.chars__GT_string.call(null,chars),attrs], null));
var G__29014 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [char$], null);
var G__29015 = new_attrs;
var G__29016 = cljs.core.rest.call(null,cells__$1);
segments = G__29013;
chars = G__29014;
attrs = G__29015;
cells__$1 = G__29016;
continue;
}
} else {
return cljs.core.conj.call(null,segments,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [asciinema.player.vt.chars__GT_string.call(null,chars),attrs], null));
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__212__auto__)){
var temp__4425__auto___29017 = cljs.core.deref.call(null,output_checker28994_29004).call(null,o__215__auto__);
if(cljs.core.truth_(temp__4425__auto___29017)){
var error__214__auto___29018 = temp__4425__auto___29017;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compact-line","compact-line",2002027170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"FragmentLine","FragmentLine",-2134154876,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Joins together all neighbouring cells having the same color attributes."], null)),cljs.core.pr_str.call(null,error__214__auto___29018)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28991_29001,new cljs.core.Keyword(null,"value","value",305978217),o__215__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__214__auto___29018], null));
} else {
}
} else {
}

return o__215__auto__;
});})(ufv___29000,output_schema28991_29001,input_schema28992_29002,input_checker28993_29003,output_checker28994_29004))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,asciinema.player.vt.compact_line),schema.core.__GT_FnSchema.call(null,output_schema28991_29001,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28992_29002], null)));

asciinema.player.vt.compact_lines = (function asciinema$player$vt$compact_lines(lines){
return cljs.core.map.call(null,asciinema.player.vt.compact_line,lines);
});

//# sourceMappingURL=vt.js.map