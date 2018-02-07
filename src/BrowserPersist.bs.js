// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Block       = require("bs-platform/lib/js/block.js");
var Curry       = require("bs-platform/lib/js/curry.js");
var Js_exn      = require("bs-platform/lib/js/js_exn.js");
var Json_decode = require("bs-json/src/Json_decode.js");
var Localforage = require("localforage");

function setItemRaw(key, value) {
  return Localforage.setItem(key, value);
}

function setItem(encoder, key, value) {
  return Localforage.setItem(key, Curry._1(encoder, value));
}

function getItemRaw(key) {
  return Localforage.getItem(key);
}

function getItem(decoder, key) {
  return Localforage.getItem(key).then((function (json) {
                var exit = 0;
                var decoded;
                try {
                  decoded = Curry._1(decoder, json);
                  exit = 1;
                }
                catch (raw_exn){
                  var exn = Js_exn.internalToOCamlException(raw_exn);
                  if (exn[0] === Json_decode.DecodeError) {
                    return Promise.resolve(/* Error */Block.__(1, [exn[1]]));
                  } else {
                    throw exn;
                  }
                }
                if (exit === 1) {
                  return Promise.resolve(/* Ok */Block.__(0, [decoded]));
                }
                
              }));
}

exports.setItemRaw = setItemRaw;
exports.setItem    = setItem;
exports.getItemRaw = getItemRaw;
exports.getItem    = getItem;
/* localforage Not a pure module */
