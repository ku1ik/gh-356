// Compiled by ClojureScript 1.7.170 {}
goog.provide('asciinema.player.dev');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('asciinema.player.vt');
goog.require('schema.core');
goog.require('asciinema.player.core');
goog.require('clojure.walk');
goog.require('cljs.core.async');
goog.require('asciinema.player.util');
goog.require('asciinema.player.source');
schema.core.set_fn_validation_BANG_.call(null,true);
if(typeof asciinema.player.dev.poster_js !== 'undefined'){
} else {
asciinema.player.dev.poster_js = new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["File Edit Options Buffers Tools C++ YASnippet Help                              ",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, ["fg",(1),"inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["* Copyright (c) 2014 Vin\u00EDcius dos San",new cljs.core.PersistentArrayMap(null, 1, ["fg",(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/* Copyright (c) 2014 Vin\u00EDcius dos Sant",new cljs.core.PersistentArrayMap(null, 1, ["fg",(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                                       ",new cljs.core.PersistentArrayMap(null, 1, ["fg",(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                                        ",new cljs.core.PersistentArrayMap(null, 1, ["fg",(1)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["   Distributed under the Boost Softwar",new cljs.core.PersistentArrayMap(null, 1, ["fg",(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["   Distributed under the Boost Software",new cljs.core.PersistentArrayMap(null, 1, ["fg",(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["   file LICENSE_1_0.txt or copy at htt",new cljs.core.PersistentArrayMap(null, 1, ["fg",(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["   file LICENSE_1_0.txt or copy at http",new cljs.core.PersistentArrayMap(null, 1, ["fg",(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                                       ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                                        ",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ifndef",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" BOOST_HTTP_EMBEDDED_SERVER_SOC$",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ifndef",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" BOOST_HTTP_EMBEDDED_SERVER_SOCK$",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#define",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BOOST_HTTP_EMBEDDED_SERVER_SOC",new cljs.core.PersistentArrayMap(null, 1, ["fg",(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#define",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BOOST_HTTP_EMBEDDED_SERVER_SOCK",new cljs.core.PersistentArrayMap(null, 1, ["fg",(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                                       ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                                        ",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#include",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<cstdint>",new cljs.core.PersistentArrayMap(null, 1, ["fg",(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                     ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#include",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<cstdint>",new cljs.core.PersistentArrayMap(null, 1, ["fg",(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                      ",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#include",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<algorithm>",new cljs.core.PersistentArrayMap(null, 1, ["fg",(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                   ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#include",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<algorithm>",new cljs.core.PersistentArrayMap(null, 1, ["fg",(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                    ",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                                       ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                                        ",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#include",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<boost/asio/ip/tcp.hpp>",new cljs.core.PersistentArrayMap(null, 1, ["fg",(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["       ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#include",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<boost/asio/ip/tcp.hpp>",new cljs.core.PersistentArrayMap(null, 1, ["fg",(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["        ",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                                       ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                                        ",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#include",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<boost/http/outgoing_state.hp",new cljs.core.PersistentArrayMap(null, 1, ["fg",(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#include",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<boost/http/outgoing_state.hpp",new cljs.core.PersistentArrayMap(null, 1, ["fg",(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#include",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<boost/http/message.hpp>",new cljs.core.PersistentArrayMap(null, 1, ["fg",(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["      ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#include",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<boost/http/message.hpp>",new cljs.core.PersistentArrayMap(null, 1, ["fg",(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["       ",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#include",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<boost/http/http_errc.hpp>",new cljs.core.PersistentArrayMap(null, 1, ["fg",(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["    ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#include",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<boost/http/http_errc.hpp>",new cljs.core.PersistentArrayMap(null, 1, ["fg",(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["     ",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                                       ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                                        ",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["// TODO: remove me                     ",new cljs.core.PersistentArrayMap(null, 1, ["fg",(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["// TODO: remove me                      ",new cljs.core.PersistentArrayMap(null, 1, ["fg",(1)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#include",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<iostream>",new cljs.core.PersistentArrayMap(null, 1, ["fg",(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                    ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#include",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<iostream>",new cljs.core.PersistentArrayMap(null, 1, ["fg",(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                     ",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#include",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<string>",new cljs.core.PersistentArrayMap(null, 1, ["fg",(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                      ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#include",new cljs.core.PersistentArrayMap(null, 2, ["fg",(4),"bold",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<string>",new cljs.core.PersistentArrayMap(null, 1, ["fg",(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                       ",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                                       ",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                                        ",cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-UUU:----F1  ",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["embedded_server_socket.hpp",new cljs.core.PersistentArrayMap(null, 2, ["bold",true,"inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["|-UUU:----F1  ",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["embedded_server_socket.hpp",new cljs.core.PersistentArrayMap(null, 2, ["bold",true,"inverse",true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.PersistentArrayMap(null, 1, ["inverse",true], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["                                                                                ",cljs.core.PersistentArrayMap.EMPTY], null)], null)], null);
}
if(typeof asciinema.player.dev.poster_json !== 'undefined'){
} else {
asciinema.player.dev.poster_json = clojure.walk.keywordize_keys.call(null,asciinema.player.dev.poster_js);
}
if(typeof asciinema.player.dev.poster_base64_data_uri !== 'undefined'){
} else {
asciinema.player.dev.poster_base64_data_uri = [cljs.core.str("data:application/json;base64,"),cljs.core.str(btoa(JSON.stringify(cljs.core.clj__GT_js.call(null,asciinema.player.dev.poster_js))))].join('');
}
if(typeof asciinema.player.dev.options !== 'undefined'){
} else {
asciinema.player.dev.options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"loop","loop",-395552849),new cljs.core.Keyword(null,"author-img-url","author-img-url",2016975920),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"preload","preload",1646824722),new cljs.core.Keyword(null,"poster","poster",-1616913550),new cljs.core.Keyword(null,"auto-play","auto-play",-645319501),new cljs.core.Keyword(null,"author-url","author-url",1091920533)],[(1),"Something cool",true,"https://gravatar.com/avatar/2807e23da22a140cf573ea75b37d11f6?s=128&d=retro","sickill",false,"data:text/plain,\n\r  test \u001B[1;32msnapshot",false,"http://ku1ik.com/"]);
}
if(typeof asciinema.player.dev.player_state !== 'undefined'){
} else {
asciinema.player.dev.player_state = asciinema.player.core.make_player_ratom.call(null,"/asciicasts/20055.json",asciinema.player.dev.options);
}
asciinema.player.dev.reload = (function asciinema$player$dev$reload(){
asciinema.player.source.init.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,asciinema.player.dev.player_state)));

return asciinema.player.core.mount_player_with_ratom.call(null,asciinema.player.dev.player_state,document.getElementById("player"));
});
asciinema.player.dev.start_dev = (function asciinema$player$dev$start_dev(){
return asciinema.player.dev.reload.call(null);
});
asciinema.player.dev.fetch_json = (function asciinema$player$dev$fetch_json(url){
var ch = cljs.core.async.chan.call(null);
ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (ch){
return (function (res){
return cljs.core.async.put_BANG_.call(null,ch,cljs.core.js__GT_clj.call(null,JSON.parse(res),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});})(ch))
], null));

return ch;
});
asciinema.player.dev.feed_verbose = (function asciinema$player$dev$feed_verbose(vt,str){
var codes = cljs.core.map.call(null,(function (p1__31328_SHARP_){
return p1__31328_SHARP_.charCodeAt((0));
}),str);
return cljs.core.reduce.call(null,((function (codes){
return (function (vt__$1,input){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(vt__$1)));

return asciinema.player.vt.feed_one.call(null,vt__$1,input);
});})(codes))
,vt,codes);
});
asciinema.player.dev.compare = (function asciinema$player$dev$compare(asciicast_filename,check_from){
var c__25119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25119__auto__){
return (function (){
var f__25120__auto__ = (function (){var switch__25007__auto__ = ((function (c__25119__auto__){
return (function (state_31569){
var state_val_31570 = (state_31569[(1)]);
if((state_val_31570 === (7))){
var state_31569__$1 = state_31569;
var statearr_31571_31609 = state_31569__$1;
(statearr_31571_31609[(2)] = null);

(statearr_31571_31609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (20))){
var inst_31556 = (state_31569[(2)]);
var state_31569__$1 = state_31569;
var statearr_31572_31610 = state_31569__$1;
(statearr_31572_31610[(2)] = inst_31556);

(statearr_31572_31610[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (1))){
var inst_31470 = (state_31569[(7)]);
var inst_31470__$1 = [cljs.core.str("/asciicasts/frames-"),cljs.core.str(asciicast_filename)].join('');
var inst_31471 = [cljs.core.str("/asciicasts/"),cljs.core.str(asciicast_filename)].join('');
var inst_31472 = asciinema.player.dev.fetch_json.call(null,inst_31470__$1);
var state_31569__$1 = (function (){var statearr_31573 = state_31569;
(statearr_31573[(8)] = inst_31471);

(statearr_31573[(7)] = inst_31470__$1);

return statearr_31573;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31569__$1,(2),inst_31472);
} else {
if((state_val_31570 === (4))){
var inst_31490 = (state_31569[(9)]);
var inst_31493 = cljs.core.mod.call(null,inst_31490,(100));
var inst_31494 = cljs.core._EQ_.call(null,inst_31493,(0));
var state_31569__$1 = state_31569;
if(inst_31494){
var statearr_31574_31611 = state_31569__$1;
(statearr_31574_31611[(1)] = (6));

} else {
var statearr_31575_31612 = state_31569__$1;
(statearr_31575_31612[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (15))){
var inst_31501 = (state_31569[(10)]);
var inst_31517 = (state_31569[(11)]);
var inst_31490 = (state_31569[(9)]);
var inst_31506 = (state_31569[(12)]);
var inst_31509 = (state_31569[(13)]);
var inst_31522 = cljs.core.print.call(null,inst_31490);
var inst_31523 = cljs.core.print.call(null,"fed: ",inst_31501);
var inst_31524 = cljs.core.print.call(null,"expected cursor:");
var inst_31525 = cljs.core.prn.call(null,inst_31517);
var inst_31526 = cljs.core.print.call(null,"got cursor:");
var inst_31527 = cljs.core.prn.call(null,inst_31509);
var inst_31528 = cljs.core.print.call(null,"prev cursor:");
var inst_31529 = cljs.core.prn.call(null,inst_31506);
var inst_31530 = (function(){throw "expectation failed"})();
var state_31569__$1 = (function (){var statearr_31576 = state_31569;
(statearr_31576[(14)] = inst_31525);

(statearr_31576[(15)] = inst_31528);

(statearr_31576[(16)] = inst_31523);

(statearr_31576[(17)] = inst_31524);

(statearr_31576[(18)] = inst_31527);

(statearr_31576[(19)] = inst_31529);

(statearr_31576[(20)] = inst_31522);

(statearr_31576[(21)] = inst_31526);

return statearr_31576;
})();
var statearr_31577_31613 = state_31569__$1;
(statearr_31577_31613[(2)] = inst_31530);

(statearr_31577_31613[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (13))){
var state_31569__$1 = state_31569;
var statearr_31578_31614 = state_31569__$1;
(statearr_31578_31614[(2)] = null);

(statearr_31578_31614[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (6))){
var inst_31485 = (state_31569[(22)]);
var inst_31490 = (state_31569[(9)]);
var inst_31496 = cljs.core.count.call(null,inst_31485);
var inst_31497 = cljs.core.print.call(null,inst_31490,"/",inst_31496);
var state_31569__$1 = state_31569;
var statearr_31579_31615 = state_31569__$1;
(statearr_31579_31615[(2)] = inst_31497);

(statearr_31579_31615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (17))){
var inst_31508 = (state_31569[(23)]);
var inst_31513 = (state_31569[(24)]);
var inst_31533 = (state_31569[(2)]);
var inst_31534 = cljs.core.not_EQ_.call(null,inst_31508,inst_31513);
var state_31569__$1 = (function (){var statearr_31580 = state_31569;
(statearr_31580[(25)] = inst_31533);

return statearr_31580;
})();
if(inst_31534){
var statearr_31581_31616 = state_31569__$1;
(statearr_31581_31616[(1)] = (18));

} else {
var statearr_31582_31617 = state_31569__$1;
(statearr_31582_31617[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (3))){
var inst_31482 = (state_31569[(26)]);
var inst_31482__$1 = (state_31569[(2)]);
var inst_31483 = new cljs.core.Keyword(null,"stdout","stdout",-531490018).cljs$core$IFn$_invoke$arity$1(inst_31482__$1);
var inst_31484 = cljs.core.map.call(null,cljs.core.last,inst_31483);
var inst_31485 = cljs.core.vec.call(null,inst_31484);
var inst_31486 = cljs.core.print.call(null,"comparing...");
var inst_31487 = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(inst_31482__$1);
var inst_31488 = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(inst_31482__$1);
var inst_31489 = asciinema.player.vt.make_vt.call(null,inst_31487,inst_31488);
var inst_31490 = (0);
var inst_31491 = inst_31489;
var state_31569__$1 = (function (){var statearr_31583 = state_31569;
(statearr_31583[(27)] = inst_31486);

(statearr_31583[(22)] = inst_31485);

(statearr_31583[(28)] = inst_31491);

(statearr_31583[(9)] = inst_31490);

(statearr_31583[(26)] = inst_31482__$1);

return statearr_31583;
})();
var statearr_31584_31618 = state_31569__$1;
(statearr_31584_31618[(2)] = null);

(statearr_31584_31618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (12))){
var inst_31517 = (state_31569[(11)]);
var inst_31509 = (state_31569[(13)]);
var inst_31520 = cljs.core.not_EQ_.call(null,inst_31509,inst_31517);
var state_31569__$1 = state_31569;
if(inst_31520){
var statearr_31585_31619 = state_31569__$1;
(statearr_31585_31619[(1)] = (15));

} else {
var statearr_31586_31620 = state_31569__$1;
(statearr_31586_31620[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (2))){
var inst_31474 = (state_31569[(29)]);
var inst_31471 = (state_31569[(8)]);
var inst_31470 = (state_31569[(7)]);
var inst_31474__$1 = (state_31569[(2)]);
var inst_31475 = (function (){var v0_url = inst_31470;
var v1_url = inst_31471;
var v0_json = inst_31474__$1;
return ((function (v0_url,v1_url,v0_json,inst_31474,inst_31471,inst_31470,inst_31474__$1,state_val_31570,c__25119__auto__){
return (function (p1__31329_SHARP_){
return asciinema.player.source.acc__GT_screen.call(null,cljs.core.last.call(null,p1__31329_SHARP_));
});
;})(v0_url,v1_url,v0_json,inst_31474,inst_31471,inst_31470,inst_31474__$1,state_val_31570,c__25119__auto__))
})();
var inst_31476 = asciinema.player.source.build_v0_frames.call(null,inst_31474__$1);
var inst_31477 = cljs.core.map.call(null,inst_31475,inst_31476);
var inst_31478 = cljs.core.drop.call(null,(1),inst_31477);
var inst_31479 = cljs.core.vec.call(null,inst_31478);
var inst_31480 = asciinema.player.dev.fetch_json.call(null,inst_31471);
var state_31569__$1 = (function (){var statearr_31587 = state_31569;
(statearr_31587[(29)] = inst_31474__$1);

(statearr_31587[(30)] = inst_31479);

return statearr_31587;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31569__$1,(3),inst_31480);
} else {
if((state_val_31570 === (19))){
var state_31569__$1 = state_31569;
var statearr_31588_31621 = state_31569__$1;
(statearr_31588_31621[(2)] = null);

(statearr_31588_31621[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (11))){
var inst_31565 = (state_31569[(2)]);
var state_31569__$1 = state_31569;
var statearr_31589_31622 = state_31569__$1;
(statearr_31589_31622[(2)] = inst_31565);

(statearr_31589_31622[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (9))){
var inst_31491 = (state_31569[(28)]);
var inst_31501 = (state_31569[(10)]);
var inst_31490 = (state_31569[(9)]);
var inst_31503 = (state_31569[(31)]);
var inst_31479 = (state_31569[(30)]);
var inst_31503__$1 = asciinema.player.vt.feed_str.call(null,inst_31491,inst_31501);
var inst_31504 = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(inst_31491);
var inst_31505 = asciinema.player.vt.compact_lines.call(null,inst_31504);
var inst_31506 = new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(inst_31491);
var inst_31507 = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(inst_31503__$1);
var inst_31508 = asciinema.player.vt.compact_lines.call(null,inst_31507);
var inst_31509 = new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(inst_31503__$1);
var inst_31510 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31511 = [inst_31490,new cljs.core.Keyword(null,"lines","lines",-700165781)];
var inst_31512 = (new cljs.core.PersistentVector(null,2,(5),inst_31510,inst_31511,null));
var inst_31513 = cljs.core.get_in.call(null,inst_31479,inst_31512);
var inst_31514 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31515 = [inst_31490,new cljs.core.Keyword(null,"cursor","cursor",1011937484)];
var inst_31516 = (new cljs.core.PersistentVector(null,2,(5),inst_31514,inst_31515,null));
var inst_31517 = cljs.core.get_in.call(null,inst_31479,inst_31516);
var inst_31518 = (inst_31490 >= check_from);
var state_31569__$1 = (function (){var statearr_31590 = state_31569;
(statearr_31590[(23)] = inst_31508);

(statearr_31590[(24)] = inst_31513);

(statearr_31590[(32)] = inst_31505);

(statearr_31590[(11)] = inst_31517);

(statearr_31590[(12)] = inst_31506);

(statearr_31590[(31)] = inst_31503__$1);

(statearr_31590[(13)] = inst_31509);

return statearr_31590;
})();
if(cljs.core.truth_(inst_31518)){
var statearr_31591_31623 = state_31569__$1;
(statearr_31591_31623[(1)] = (12));

} else {
var statearr_31592_31624 = state_31569__$1;
(statearr_31592_31624[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (5))){
var inst_31567 = (state_31569[(2)]);
var state_31569__$1 = state_31569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31569__$1,inst_31567);
} else {
if((state_val_31570 === (14))){
var inst_31490 = (state_31569[(9)]);
var inst_31503 = (state_31569[(31)]);
var inst_31559 = (state_31569[(2)]);
var inst_31560 = (inst_31490 + (1));
var inst_31490__$1 = inst_31560;
var inst_31491 = inst_31503;
var state_31569__$1 = (function (){var statearr_31593 = state_31569;
(statearr_31593[(28)] = inst_31491);

(statearr_31593[(9)] = inst_31490__$1);

(statearr_31593[(33)] = inst_31559);

return statearr_31593;
})();
var statearr_31594_31625 = state_31569__$1;
(statearr_31594_31625[(2)] = null);

(statearr_31594_31625[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (16))){
var state_31569__$1 = state_31569;
var statearr_31595_31626 = state_31569__$1;
(statearr_31595_31626[(2)] = null);

(statearr_31595_31626[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (10))){
var inst_31563 = cljs.core.print.call(null,"success");
var state_31569__$1 = state_31569;
var statearr_31596_31627 = state_31569__$1;
(statearr_31596_31627[(2)] = inst_31563);

(statearr_31596_31627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (18))){
var inst_31508 = (state_31569[(23)]);
var inst_31485 = (state_31569[(22)]);
var inst_31513 = (state_31569[(24)]);
var inst_31505 = (state_31569[(32)]);
var inst_31474 = (state_31569[(29)]);
var inst_31491 = (state_31569[(28)]);
var inst_31501 = (state_31569[(10)]);
var inst_31517 = (state_31569[(11)]);
var inst_31490 = (state_31569[(9)]);
var inst_31506 = (state_31569[(12)]);
var inst_31503 = (state_31569[(31)]);
var inst_31471 = (state_31569[(8)]);
var inst_31479 = (state_31569[(30)]);
var inst_31470 = (state_31569[(7)]);
var inst_31482 = (state_31569[(26)]);
var inst_31509 = (state_31569[(13)]);
var inst_31536 = cljs.core.print.call(null,inst_31490);
var inst_31537 = cljs.core.print.call(null,"fed: ",inst_31501);
var inst_31538 = cljs.core.print.call(null,"prev lines:");
var inst_31539 = cljs.core.prn.call(null,inst_31505);
var inst_31540 = cljs.core.print.call(null,"expected lines:");
var inst_31541 = cljs.core.prn.call(null,inst_31513);
var inst_31542 = cljs.core.print.call(null,"got lines:");
var inst_31543 = cljs.core.prn.call(null,inst_31508);
var inst_31544 = cljs.core.print.call(null,"first non-matching line:");
var inst_31545 = (function (){var expected_lines = inst_31513;
var prev_lines = inst_31505;
var vt = inst_31503;
var v0_url = inst_31470;
var v1_url = inst_31471;
var actual_cursor = inst_31509;
var temp__4423__auto__ = inst_31501;
var v0_frames = inst_31479;
var n = inst_31490;
var expected_cursor = inst_31517;
var prev_vt = inst_31491;
var prev_cursor = inst_31506;
var v0_json = inst_31474;
var v1_stdout = inst_31485;
var str = inst_31501;
var v1_json = inst_31482;
var actual_lines = inst_31508;
return ((function (expected_lines,prev_lines,vt,v0_url,v1_url,actual_cursor,temp__4423__auto__,v0_frames,n,expected_cursor,prev_vt,prev_cursor,v0_json,v1_stdout,str,v1_json,actual_lines,inst_31508,inst_31485,inst_31513,inst_31505,inst_31474,inst_31491,inst_31501,inst_31517,inst_31490,inst_31506,inst_31503,inst_31471,inst_31479,inst_31470,inst_31482,inst_31509,inst_31536,inst_31537,inst_31538,inst_31539,inst_31540,inst_31541,inst_31542,inst_31543,inst_31544,state_val_31570,c__25119__auto__){
return (function (p1__31330_SHARP_){
return cljs.core.apply.call(null,cljs.core.not_EQ_,p1__31330_SHARP_);
});
;})(expected_lines,prev_lines,vt,v0_url,v1_url,actual_cursor,temp__4423__auto__,v0_frames,n,expected_cursor,prev_vt,prev_cursor,v0_json,v1_stdout,str,v1_json,actual_lines,inst_31508,inst_31485,inst_31513,inst_31505,inst_31474,inst_31491,inst_31501,inst_31517,inst_31490,inst_31506,inst_31503,inst_31471,inst_31479,inst_31470,inst_31482,inst_31509,inst_31536,inst_31537,inst_31538,inst_31539,inst_31540,inst_31541,inst_31542,inst_31543,inst_31544,state_val_31570,c__25119__auto__))
})();
var inst_31546 = cljs.core.map.call(null,cljs.core.vector,inst_31513,inst_31508);
var inst_31547 = cljs.core.filter.call(null,inst_31545,inst_31546);
var inst_31548 = cljs.core.first.call(null,inst_31547);
var inst_31549 = cljs.core.first.call(null,inst_31548);
var inst_31550 = cljs.core.prn.call(null,"expected: ",inst_31549);
var inst_31551 = cljs.core.second.call(null,inst_31548);
var inst_31552 = cljs.core.prn.call(null,"got: ",inst_31551);
var inst_31553 = (function(){throw "expectation failed"})();
var state_31569__$1 = (function (){var statearr_31597 = state_31569;
(statearr_31597[(34)] = inst_31552);

(statearr_31597[(35)] = inst_31540);

(statearr_31597[(36)] = inst_31543);

(statearr_31597[(37)] = inst_31541);

(statearr_31597[(38)] = inst_31550);

(statearr_31597[(39)] = inst_31539);

(statearr_31597[(40)] = inst_31542);

(statearr_31597[(41)] = inst_31544);

(statearr_31597[(42)] = inst_31536);

(statearr_31597[(43)] = inst_31537);

(statearr_31597[(44)] = inst_31538);

return statearr_31597;
})();
var statearr_31598_31628 = state_31569__$1;
(statearr_31598_31628[(2)] = inst_31553);

(statearr_31598_31628[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (8))){
var inst_31485 = (state_31569[(22)]);
var inst_31501 = (state_31569[(10)]);
var inst_31490 = (state_31569[(9)]);
var inst_31500 = (state_31569[(2)]);
var inst_31501__$1 = cljs.core.get.call(null,inst_31485,inst_31490);
var state_31569__$1 = (function (){var statearr_31599 = state_31569;
(statearr_31599[(45)] = inst_31500);

(statearr_31599[(10)] = inst_31501__$1);

return statearr_31599;
})();
if(cljs.core.truth_(inst_31501__$1)){
var statearr_31600_31629 = state_31569__$1;
(statearr_31600_31629[(1)] = (9));

} else {
var statearr_31601_31630 = state_31569__$1;
(statearr_31601_31630[(1)] = (10));

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
var asciinema$player$dev$compare_$_state_machine__25008__auto__ = null;
var asciinema$player$dev$compare_$_state_machine__25008__auto____0 = (function (){
var statearr_31605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31605[(0)] = asciinema$player$dev$compare_$_state_machine__25008__auto__);

(statearr_31605[(1)] = (1));

return statearr_31605;
});
var asciinema$player$dev$compare_$_state_machine__25008__auto____1 = (function (state_31569){
while(true){
var ret_value__25009__auto__ = (function (){try{while(true){
var result__25010__auto__ = switch__25007__auto__.call(null,state_31569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25010__auto__;
}
break;
}
}catch (e31606){if((e31606 instanceof Object)){
var ex__25011__auto__ = e31606;
var statearr_31607_31631 = state_31569;
(statearr_31607_31631[(5)] = ex__25011__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31632 = state_31569;
state_31569 = G__31632;
continue;
} else {
return ret_value__25009__auto__;
}
break;
}
});
asciinema$player$dev$compare_$_state_machine__25008__auto__ = function(state_31569){
switch(arguments.length){
case 0:
return asciinema$player$dev$compare_$_state_machine__25008__auto____0.call(this);
case 1:
return asciinema$player$dev$compare_$_state_machine__25008__auto____1.call(this,state_31569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asciinema$player$dev$compare_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$0 = asciinema$player$dev$compare_$_state_machine__25008__auto____0;
asciinema$player$dev$compare_$_state_machine__25008__auto__.cljs$core$IFn$_invoke$arity$1 = asciinema$player$dev$compare_$_state_machine__25008__auto____1;
return asciinema$player$dev$compare_$_state_machine__25008__auto__;
})()
;})(switch__25007__auto__,c__25119__auto__))
})();
var state__25121__auto__ = (function (){var statearr_31608 = f__25120__auto__.call(null);
(statearr_31608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25119__auto__);

return statearr_31608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25121__auto__);
});})(c__25119__auto__))
);

return c__25119__auto__;
});

//# sourceMappingURL=dev.js.map