"use strict";var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _extends2=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var _templateObject=_taggedTemplateLiteral([""," is not an array"],[""," is not an array"]),_templateObject2=_taggedTemplateLiteral([""," is not an object"],[""," is not an object"]),_templateObject3=_taggedTemplateLiteral([""," doesn't have length ",""],[""," doesn't have length ",""]),_templateObject4=_taggedTemplateLiteral([""," is not equal to ",""],[""," is not equal to ",""]),_templateObject5=_taggedTemplateLiteral([""," is not deeply equal to ",""],[""," is not deeply equal to ",""]),_templateObject6=_taggedTemplateLiteral([""," does not contain ",""],[""," does not contain ",""]),_templateObject7=_taggedTemplateLiteral([""," is not true"],[""," is not true"]),_templateObject8=_taggedTemplateLiteral([""," is not false"],[""," is not false"]),_templateObject9=_taggedTemplateLiteral([""," does not have property '","'"],[""," does not have property '","'"]),_templateObject10=_taggedTemplateLiteral(["<","> does not exist in ",""],["<","> does not exist in ",""]),_templateObject11=_taggedTemplateLiteral([""," is not a promise"],[""," is not a promise"]),_templateObject12=_taggedTemplateLiteral(["'","' does not resolve to '","'"],["'","' does not resolve to '","'"]),_templateObject13=_taggedTemplateLiteral(["'","' is not of type '","'"],["'","' is not of type '","'"]),_templateObject14=_taggedTemplateLiteral(["'","' is not greater than ",""],["'","' is not greater than ",""]),_templateObject15=_taggedTemplateLiteral(["'","' is not less than ",""],["'","' is not less than ",""]),_templateObject16=_taggedTemplateLiteral(["'","' is less than ",""],["'","' is less than ",""]),_templateObject17=_taggedTemplateLiteral(["'","' is greater than ",""],["'","' is greater than ",""]);function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function _toArray(arr){return Array.isArray(arr)?arr:Array.from(arr);}function _classCallCheck2(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperty2(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toConsumableArray2(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}(function(f){if((typeof exports==="undefined"?"undefined":_typeof2(exports))==="object"&&typeof module!=="undefined"){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else{var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else{g=this;}g.Gunner=f();}})(function(){var define,module,exports;return function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a;}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r);},p,p.exports,r,e,n,t);}return n[i].exports;}for(var u="function"==typeof require&&require,i=0;i<t.length;i++){o(t[i]);}return o;}return r;}()({1:[function(require,module,exports){module.exports=require('../src/gunner');},{"../src/gunner":235}],2:[function(require,module,exports){(function(global){(function(f){if((typeof exports==="undefined"?"undefined":_typeof2(exports))==="object"&&typeof module!=="undefined"){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else{var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else{g=this;}g.isEq=f();}})(function(){var define,module,exports;return function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++){s(r[o]);}return s;}return e;}()({1:[function(require,module,exports){"use strict";var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};var isEq=function isEq(item1,item2,compareKeys){if(item1===item2)return true;if((typeof item1==="undefined"?"undefined":_typeof(item1))!==(typeof item2==="undefined"?"undefined":_typeof(item2)))return false;if(Array.isArray(item1)&&!Array.isArray(item2)||Array.isArray(item2)&&!Array.isArray(item1))return false;if(typeof item1==="number"){if(isNaN(item1)&&isNaN(item2))return false;else return item1===item2;}if(typeof item1==="string"||typeof item1==="boolean"||item1===null||item1===undefined){return item1===item2;}if(item1 instanceof RegExp)return String(item1)===String(item2);if((typeof item1==="undefined"?"undefined":_typeof(item1))!=="object"||(typeof item2==="undefined"?"undefined":_typeof(item2))!=="object")return item1===item2;var item1Keys=Object.keys(item1);var item2Keys=Object.keys(item2);if(!compareKeys){compareKeys=item1Keys;if(item1Keys.length!==item2Keys.length){return false;}}if(!Array.isArray(compareKeys))throw new Error("[isEq] third parameter should be an array of keys!");if(compareKeys.length===0)return true;for(var KeyIndex in compareKeys){var Key=compareKeys[KeyIndex];if(Array.isArray(item1[Key])&&Array.isArray(item2[Key])){Key=KeyIndex;}if(item1[Key]!==item2[Key]){if(_typeof(item1[Key]==="object")&&_typeof(item2[Key]==="object")||Array.isArray(item1[Key])&&Array.isArray(item2[Key])){if(!isEq(item1[Key],item2[Key])){return false;}}else{return false;}}}return true;};module.exports=isEq;},{}]},{},[1])(1);});}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],3:[function(require,module,exports){(function(global){"use strict";var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}(function(f){if((typeof exports==="undefined"?"undefined":_typeof(exports))==="object"&&typeof module!=="undefined"){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else{var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else{g=this;}g.promiseObject=f();}})(function(){var define,module,exports;return function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a;}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r);},p,p.exports,r,e,n,t);}return n[i].exports;}for(var u="function"==typeof require&&require,i=0;i<t.length;i++){o(t[i]);}return o;}return r;}()({1:[function(require,module,exports){module.exports=require("../index.js");},{"../index.js":2}],2:[function(require,module,exports){"use strict";var isObject=function isObject(x){return x&&(typeof x==="undefined"?"undefined":_typeof(x))==="object"&&x.constructor===Object;};var $SELF=typeof Symbol!=="undefined"?Symbol("SELF"):"[~~//-- SELF --//~~]";var makeCyclic=function makeCyclic(object,query){var start=function start(obj){return Object.keys(obj).reduce(function(acc,key){var value=obj[key];if(value===query){obj[key]=object;return[].concat(_toConsumableArray(acc),[key]);}if(isObject(value))return[].concat(_toConsumableArray(acc),_toConsumableArray(start(value,query)));else return acc;},[]);};return start(object);};var PromiseMap=function PromiseMap(arr,functor){return Promise.all(arr.map(function(x){return Promise.resolve(x).then(functor);}));};var ResolveObject=function ResolveObject(obj){return Promise.all(Object.keys(obj).map(function(key){return Promise.resolve(obj[key]).then(function(val){return obj[key]=val;});})).then(function(_){return obj;});};var PromiseObject=function PromiseObject(object){var shouldReplaceSelf=false;var ResolveDeepObject=function ResolveDeepObject(obj){return Promise.resolve(obj).then(function(resolvedObject){if(Array.isArray(resolvedObject)){return PromiseMap(resolvedObject,function(obj){return ResolveDeepObject(obj);});}else if(isObject(resolvedObject)){return ResolveObject(Object.keys(resolvedObject).reduce(function(acc,key){if(resolvedObject[key]===object){shouldReplaceSelf=true;return _extends({},acc,_defineProperty({},key,$SELF));}return _extends({},acc,_defineProperty({},key,ResolveDeepObject(resolvedObject[key])));},{}));}return resolvedObject;});};return ResolveDeepObject(object).then(function(obj){if(shouldReplaceSelf)makeCyclic(obj,$SELF);return obj;});};module.exports=PromiseObject;},{}]},{},[1])(1);});}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"../index.js":4}],4:[function(require,module,exports){"use strict";/**
 * Returns true if x is an object, false otherwise.
 * @param {any} x
 * @returns {Boolean}
 */var isObject=function isObject(x){return x&&(typeof x==="undefined"?"undefined":_typeof2(x))==='object'&&x.constructor===Object;};/* A well known Symbol. */var $SELF=typeof Symbol!=='undefined'?Symbol('SELF'):'[~~//-- SELF --//~~]';/**
 * Replaces values that match the query parameter
 * with a reference to the parent parameter.
 * @param {Object} object Object to make cyclic.
 * @param {any} query Query to match against.
 * @returns {Object}
 */var makeCyclic=function makeCyclic(object,query){var start=function start(obj){return Object.keys(obj).reduce(function(acc,key){var value=obj[key];if(value===query){obj[key]=object;return[].concat(_toConsumableArray2(acc),[key]);};if(isObject(value))return[].concat(_toConsumableArray2(acc),_toConsumableArray2(start(value,query)));else return acc;},[]);};return start(object);};/**
 * Promise.map polyfill.
 * @param {Array.<any>} arr Array of Promises.
 * @param {Function} functor Function to call resolved values.
 */var PromiseMap=function PromiseMap(arr,functor){return Promise.all(arr.map(function(x){return Promise.resolve(x).then(functor);}));};/**
 * Resolve a flat object's promises.
 * @param {Object}
 * @returns {Object}
 */var ResolveObject=function ResolveObject(obj){return Promise.all(Object.keys(obj).map(function(key){return Promise.resolve(obj[key]).then(function(val){return obj[key]=val;});})).then(function(_){return obj;});};/**
 * Recursively resolves deep objects with nested promises.
 * @param {Object} object Object or value to resolve.
 * @returns {Object} Resolved object.
 */var PromiseObject=function PromiseObject(object){var shouldReplaceSelf=false;var ResolveDeepObject=function ResolveDeepObject(obj){return Promise.resolve(obj).then(function(resolvedObject){if(Array.isArray(resolvedObject)){// Promise and map every item to recursively deep resolve.
return PromiseMap(resolvedObject,function(obj){return ResolveDeepObject(obj);});}else if(isObject(resolvedObject)){return ResolveObject(Object.keys(resolvedObject).reduce(function(acc,key){if(resolvedObject[key]===object){shouldReplaceSelf=true;return _extends2({},acc,_defineProperty2({},key,$SELF));}return _extends2({},acc,_defineProperty2({},key,ResolveDeepObject(resolvedObject[key])));},{}));}return resolvedObject;});};return ResolveDeepObject(object).then(function(obj){// Replace $SELF with reference to obj
if(shouldReplaceSelf)makeCyclic(obj,$SELF);return obj;});};module.exports=PromiseObject;},{}],5:[function(require,module,exports){(function(global){'use strict';// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function compare(a,b){if(a===b){return 0;}var x=a.length;var y=b.length;for(var i=0,len=Math.min(x,y);i<len;++i){if(a[i]!==b[i]){x=a[i];y=b[i];break;}}if(x<y){return-1;}if(y<x){return 1;}return 0;}function isBuffer(b){if(global.Buffer&&typeof global.Buffer.isBuffer==='function'){return global.Buffer.isBuffer(b);}return!!(b!=null&&b._isBuffer);}// based on node assert, original notice:
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
var util=require('util/');var hasOwn=Object.prototype.hasOwnProperty;var pSlice=Array.prototype.slice;var functionsHaveNames=function(){return function foo(){}.name==='foo';}();function pToString(obj){return Object.prototype.toString.call(obj);}function isView(arrbuf){if(isBuffer(arrbuf)){return false;}if(typeof global.ArrayBuffer!=='function'){return false;}if(typeof ArrayBuffer.isView==='function'){return ArrayBuffer.isView(arrbuf);}if(!arrbuf){return false;}if(arrbuf instanceof DataView){return true;}if(arrbuf.buffer&&arrbuf.buffer instanceof ArrayBuffer){return true;}return false;}// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.
var assert=module.exports=ok;// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })
var regex=/\s*function\s+([^\(\s]*)\s*/;// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func){if(!util.isFunction(func)){return;}if(functionsHaveNames){return func.name;}var str=func.toString();var match=str.match(regex);return match&&match[1];}assert.AssertionError=function AssertionError(options){this.name='AssertionError';this.actual=options.actual;this.expected=options.expected;this.operator=options.operator;if(options.message){this.message=options.message;this.generatedMessage=false;}else{this.message=getMessage(this);this.generatedMessage=true;}var stackStartFunction=options.stackStartFunction||fail;if(Error.captureStackTrace){Error.captureStackTrace(this,stackStartFunction);}else{// non v8 browsers so we can have a stacktrace
var err=new Error();if(err.stack){var out=err.stack;// try to strip useless frames
var fn_name=getName(stackStartFunction);var idx=out.indexOf('\n'+fn_name);if(idx>=0){// once we have located the function frame
// we need to strip out everything before it (and its line)
var next_line=out.indexOf('\n',idx+1);out=out.substring(next_line+1);}this.stack=out;}}};// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError,Error);function truncate(s,n){if(typeof s==='string'){return s.length<n?s:s.slice(0,n);}else{return s;}}function inspect(something){if(functionsHaveNames||!util.isFunction(something)){return util.inspect(something);}var rawname=getName(something);var name=rawname?': '+rawname:'';return'[Function'+name+']';}function getMessage(self){return truncate(inspect(self.actual),128)+' '+self.operator+' '+truncate(inspect(self.expected),128);}// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.
// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.
function fail(actual,expected,message,operator,stackStartFunction){throw new assert.AssertionError({message:message,actual:actual,expected:expected,operator:operator,stackStartFunction:stackStartFunction});}// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail=fail;// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.
function ok(value,message){if(!value)fail(value,true,message,'==',assert.ok);}assert.ok=ok;// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);
assert.equal=function equal(actual,expected,message){if(actual!=expected)fail(actual,expected,message,'==',assert.equal);};// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);
assert.notEqual=function notEqual(actual,expected,message){if(actual==expected){fail(actual,expected,message,'!=',assert.notEqual);}};// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);
assert.deepEqual=function deepEqual(actual,expected,message){if(!_deepEqual(actual,expected,false)){fail(actual,expected,message,'deepEqual',assert.deepEqual);}};assert.deepStrictEqual=function deepStrictEqual(actual,expected,message){if(!_deepEqual(actual,expected,true)){fail(actual,expected,message,'deepStrictEqual',assert.deepStrictEqual);}};function _deepEqual(actual,expected,strict,memos){// 7.1. All identical values are equivalent, as determined by ===.
if(actual===expected){return true;}else if(isBuffer(actual)&&isBuffer(expected)){return compare(actual,expected)===0;// 7.2. If the expected value is a Date object, the actual value is
// equivalent if it is also a Date object that refers to the same time.
}else if(util.isDate(actual)&&util.isDate(expected)){return actual.getTime()===expected.getTime();// 7.3 If the expected value is a RegExp object, the actual value is
// equivalent if it is also a RegExp object with the same source and
// properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
}else if(util.isRegExp(actual)&&util.isRegExp(expected)){return actual.source===expected.source&&actual.global===expected.global&&actual.multiline===expected.multiline&&actual.lastIndex===expected.lastIndex&&actual.ignoreCase===expected.ignoreCase;// 7.4. Other pairs that do not both pass typeof value == 'object',
// equivalence is determined by ==.
}else if((actual===null||(typeof actual==="undefined"?"undefined":_typeof2(actual))!=='object')&&(expected===null||(typeof expected==="undefined"?"undefined":_typeof2(expected))!=='object')){return strict?actual===expected:actual==expected;// If both values are instances of typed arrays, wrap their underlying
// ArrayBuffers in a Buffer each to increase performance
// This optimization requires the arrays to have the same type as checked by
// Object.prototype.toString (aka pToString). Never perform binary
// comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
// bit patterns are not identical.
}else if(isView(actual)&&isView(expected)&&pToString(actual)===pToString(expected)&&!(actual instanceof Float32Array||actual instanceof Float64Array)){return compare(new Uint8Array(actual.buffer),new Uint8Array(expected.buffer))===0;// 7.5 For all other Object pairs, including Array objects, equivalence is
// determined by having the same number of owned properties (as verified
// with Object.prototype.hasOwnProperty.call), the same set of keys
// (although not necessarily the same order), equivalent values for every
// corresponding key, and an identical 'prototype' property. Note: this
// accounts for both named and indexed properties on Arrays.
}else if(isBuffer(actual)!==isBuffer(expected)){return false;}else{memos=memos||{actual:[],expected:[]};var actualIndex=memos.actual.indexOf(actual);if(actualIndex!==-1){if(actualIndex===memos.expected.indexOf(expected)){return true;}}memos.actual.push(actual);memos.expected.push(expected);return objEquiv(actual,expected,strict,memos);}}function isArguments(object){return Object.prototype.toString.call(object)=='[object Arguments]';}function objEquiv(a,b,strict,actualVisitedObjects){if(a===null||a===undefined||b===null||b===undefined)return false;// if one is a primitive, the other must be same
if(util.isPrimitive(a)||util.isPrimitive(b))return a===b;if(strict&&Object.getPrototypeOf(a)!==Object.getPrototypeOf(b))return false;var aIsArgs=isArguments(a);var bIsArgs=isArguments(b);if(aIsArgs&&!bIsArgs||!aIsArgs&&bIsArgs)return false;if(aIsArgs){a=pSlice.call(a);b=pSlice.call(b);return _deepEqual(a,b,strict);}var ka=objectKeys(a);var kb=objectKeys(b);var key,i;// having the same number of owned properties (keys incorporates
// hasOwnProperty)
if(ka.length!==kb.length)return false;//the same set of keys (although not necessarily the same order),
ka.sort();kb.sort();//~~~cheap key test
for(i=ka.length-1;i>=0;i--){if(ka[i]!==kb[i])return false;}//equivalent values for every corresponding key, and
//~~~possibly expensive deep test
for(i=ka.length-1;i>=0;i--){key=ka[i];if(!_deepEqual(a[key],b[key],strict,actualVisitedObjects))return false;}return true;}// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);
assert.notDeepEqual=function notDeepEqual(actual,expected,message){if(_deepEqual(actual,expected,false)){fail(actual,expected,message,'notDeepEqual',assert.notDeepEqual);}};assert.notDeepStrictEqual=notDeepStrictEqual;function notDeepStrictEqual(actual,expected,message){if(_deepEqual(actual,expected,true)){fail(actual,expected,message,'notDeepStrictEqual',notDeepStrictEqual);}}// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);
assert.strictEqual=function strictEqual(actual,expected,message){if(actual!==expected){fail(actual,expected,message,'===',assert.strictEqual);}};// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);
assert.notStrictEqual=function notStrictEqual(actual,expected,message){if(actual===expected){fail(actual,expected,message,'!==',assert.notStrictEqual);}};function expectedException(actual,expected){if(!actual||!expected){return false;}if(Object.prototype.toString.call(expected)=='[object RegExp]'){return expected.test(actual);}try{if(actual instanceof expected){return true;}}catch(e){// Ignore.  The instanceof check doesn't work for arrow functions.
}if(Error.isPrototypeOf(expected)){return false;}return expected.call({},actual)===true;}function _tryBlock(block){var error;try{block();}catch(e){error=e;}return error;}function _throws(shouldThrow,block,expected,message){var actual;if(typeof block!=='function'){throw new TypeError('"block" argument must be a function');}if(typeof expected==='string'){message=expected;expected=null;}actual=_tryBlock(block);message=(expected&&expected.name?' ('+expected.name+').':'.')+(message?' '+message:'.');if(shouldThrow&&!actual){fail(actual,expected,'Missing expected exception'+message);}var userProvidedMessage=typeof message==='string';var isUnwantedException=!shouldThrow&&util.isError(actual);var isUnexpectedException=!shouldThrow&&actual&&!expected;if(isUnwantedException&&userProvidedMessage&&expectedException(actual,expected)||isUnexpectedException){fail(actual,expected,'Got unwanted exception'+message);}if(shouldThrow&&actual&&expected&&!expectedException(actual,expected)||!shouldThrow&&actual){throw actual;}}// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);
assert.throws=function(block,/*optional*/error,/*optional*/message){_throws(true,block,error,message);};// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow=function(block,/*optional*/error,/*optional*/message){_throws(false,block,error,message);};assert.ifError=function(err){if(err)throw err;};var objectKeys=Object.keys||function(obj){var keys=[];for(var key in obj){if(hasOwn.call(obj,key))keys.push(key);}return keys;};}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"util/":214}],6:[function(require,module,exports){'use strict';exports.byteLength=byteLength;exports.toByteArray=toByteArray;exports.fromByteArray=fromByteArray;var lookup=[];var revLookup=[];var Arr=typeof Uint8Array!=='undefined'?Uint8Array:Array;var code='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';for(var i=0,len=code.length;i<len;++i){lookup[i]=code[i];revLookup[code.charCodeAt(i)]=i;}// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)]=62;revLookup['_'.charCodeAt(0)]=63;function getLens(b64){var len=b64.length;if(len%4>0){throw new Error('Invalid string. Length must be a multiple of 4');}// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var validLen=b64.indexOf('=');if(validLen===-1)validLen=len;var placeHoldersLen=validLen===len?0:4-validLen%4;return[validLen,placeHoldersLen];}// base64 is 4/3 + up to two characters of the original data
function byteLength(b64){var lens=getLens(b64);var validLen=lens[0];var placeHoldersLen=lens[1];return(validLen+placeHoldersLen)*3/4-placeHoldersLen;}function _byteLength(b64,validLen,placeHoldersLen){return(validLen+placeHoldersLen)*3/4-placeHoldersLen;}function toByteArray(b64){var tmp;var lens=getLens(b64);var validLen=lens[0];var placeHoldersLen=lens[1];var arr=new Arr(_byteLength(b64,validLen,placeHoldersLen));var curByte=0;// if there are placeholders, only get up to the last complete 4 chars
var len=placeHoldersLen>0?validLen-4:validLen;for(var i=0;i<len;i+=4){tmp=revLookup[b64.charCodeAt(i)]<<18|revLookup[b64.charCodeAt(i+1)]<<12|revLookup[b64.charCodeAt(i+2)]<<6|revLookup[b64.charCodeAt(i+3)];arr[curByte++]=tmp>>16&0xFF;arr[curByte++]=tmp>>8&0xFF;arr[curByte++]=tmp&0xFF;}if(placeHoldersLen===2){tmp=revLookup[b64.charCodeAt(i)]<<2|revLookup[b64.charCodeAt(i+1)]>>4;arr[curByte++]=tmp&0xFF;}if(placeHoldersLen===1){tmp=revLookup[b64.charCodeAt(i)]<<10|revLookup[b64.charCodeAt(i+1)]<<4|revLookup[b64.charCodeAt(i+2)]>>2;arr[curByte++]=tmp>>8&0xFF;arr[curByte++]=tmp&0xFF;}return arr;}function tripletToBase64(num){return lookup[num>>18&0x3F]+lookup[num>>12&0x3F]+lookup[num>>6&0x3F]+lookup[num&0x3F];}function encodeChunk(uint8,start,end){var tmp;var output=[];for(var i=start;i<end;i+=3){tmp=(uint8[i]<<16&0xFF0000)+(uint8[i+1]<<8&0xFF00)+(uint8[i+2]&0xFF);output.push(tripletToBase64(tmp));}return output.join('');}function fromByteArray(uint8){var tmp;var len=uint8.length;var extraBytes=len%3;// if we have 1 byte left, pad 2 bytes
var parts=[];var maxChunkLength=16383;// must be multiple of 3
// go through the array every three bytes, we'll deal with trailing stuff later
for(var i=0,len2=len-extraBytes;i<len2;i+=maxChunkLength){parts.push(encodeChunk(uint8,i,i+maxChunkLength>len2?len2:i+maxChunkLength));}// pad the end with zeros, but make sure to not forget the extra bytes
if(extraBytes===1){tmp=uint8[len-1];parts.push(lookup[tmp>>2]+lookup[tmp<<4&0x3F]+'==');}else if(extraBytes===2){tmp=(uint8[len-2]<<8)+uint8[len-1];parts.push(lookup[tmp>>10]+lookup[tmp>>4&0x3F]+lookup[tmp<<2&0x3F]+'=');}return parts.join('');}},{}],7:[function(require,module,exports){},{}],8:[function(require,module,exports){/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 *//* eslint-disable no-proto */'use strict';var base64=require('base64-js');var ieee754=require('ieee754');exports.Buffer=Buffer;exports.SlowBuffer=SlowBuffer;exports.INSPECT_MAX_BYTES=50;var K_MAX_LENGTH=0x7fffffff;exports.kMaxLength=K_MAX_LENGTH;/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */Buffer.TYPED_ARRAY_SUPPORT=typedArraySupport();if(!Buffer.TYPED_ARRAY_SUPPORT&&typeof console!=='undefined'&&typeof console.error==='function'){console.error('This browser lacks typed array (Uint8Array) support which is required by '+'`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');}function typedArraySupport(){// Can typed array instances can be augmented?
try{var arr=new Uint8Array(1);arr.__proto__={__proto__:Uint8Array.prototype,foo:function foo(){return 42;}};return arr.foo()===42;}catch(e){return false;}}Object.defineProperty(Buffer.prototype,'parent',{enumerable:true,get:function get(){if(!Buffer.isBuffer(this))return undefined;return this.buffer;}});Object.defineProperty(Buffer.prototype,'offset',{enumerable:true,get:function get(){if(!Buffer.isBuffer(this))return undefined;return this.byteOffset;}});function createBuffer(length){if(length>K_MAX_LENGTH){throw new RangeError('The value "'+length+'" is invalid for option "size"');}// Return an augmented `Uint8Array` instance
var buf=new Uint8Array(length);buf.__proto__=Buffer.prototype;return buf;}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function Buffer(arg,encodingOrOffset,length){// Common case.
if(typeof arg==='number'){if(typeof encodingOrOffset==='string'){throw new TypeError('The "string" argument must be of type string. Received type number');}return allocUnsafe(arg);}return from(arg,encodingOrOffset,length);}// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if(typeof Symbol!=='undefined'&&Symbol.species!=null&&Buffer[Symbol.species]===Buffer){Object.defineProperty(Buffer,Symbol.species,{value:null,configurable:true,enumerable:false,writable:false});}Buffer.poolSize=8192;// not used by this implementation
function from(value,encodingOrOffset,length){if(typeof value==='string'){return fromString(value,encodingOrOffset);}if(ArrayBuffer.isView(value)){return fromArrayLike(value);}if(value==null){throw TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, '+'or Array-like Object. Received type '+(typeof value==="undefined"?"undefined":_typeof2(value)));}if(isInstance(value,ArrayBuffer)||value&&isInstance(value.buffer,ArrayBuffer)){return fromArrayBuffer(value,encodingOrOffset,length);}if(typeof value==='number'){throw new TypeError('The "value" argument must not be of type number. Received type number');}var valueOf=value.valueOf&&value.valueOf();if(valueOf!=null&&valueOf!==value){return Buffer.from(valueOf,encodingOrOffset,length);}var b=fromObject(value);if(b)return b;if(typeof Symbol!=='undefined'&&Symbol.toPrimitive!=null&&typeof value[Symbol.toPrimitive]==='function'){return Buffer.from(value[Symbol.toPrimitive]('string'),encodingOrOffset,length);}throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, '+'or Array-like Object. Received type '+(typeof value==="undefined"?"undefined":_typeof2(value)));}/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/Buffer.from=function(value,encodingOrOffset,length){return from(value,encodingOrOffset,length);};// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__=Uint8Array.prototype;Buffer.__proto__=Uint8Array;function assertSize(size){if(typeof size!=='number'){throw new TypeError('"size" argument must be of type number');}else if(size<0){throw new RangeError('The value "'+size+'" is invalid for option "size"');}}function alloc(size,fill,encoding){assertSize(size);if(size<=0){return createBuffer(size);}if(fill!==undefined){// Only pay attention to encoding if it's a string. This
// prevents accidentally sending in a number that would
// be interpretted as a start offset.
return typeof encoding==='string'?createBuffer(size).fill(fill,encoding):createBuffer(size).fill(fill);}return createBuffer(size);}/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/Buffer.alloc=function(size,fill,encoding){return alloc(size,fill,encoding);};function allocUnsafe(size){assertSize(size);return createBuffer(size<0?0:checked(size)|0);}/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */Buffer.allocUnsafe=function(size){return allocUnsafe(size);};/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */Buffer.allocUnsafeSlow=function(size){return allocUnsafe(size);};function fromString(string,encoding){if(typeof encoding!=='string'||encoding===''){encoding='utf8';}if(!Buffer.isEncoding(encoding)){throw new TypeError('Unknown encoding: '+encoding);}var length=byteLength(string,encoding)|0;var buf=createBuffer(length);var actual=buf.write(string,encoding);if(actual!==length){// Writing a hex string, for example, that contains invalid characters will
// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
buf=buf.slice(0,actual);}return buf;}function fromArrayLike(array){var length=array.length<0?0:checked(array.length)|0;var buf=createBuffer(length);for(var i=0;i<length;i+=1){buf[i]=array[i]&255;}return buf;}function fromArrayBuffer(array,byteOffset,length){if(byteOffset<0||array.byteLength<byteOffset){throw new RangeError('"offset" is outside of buffer bounds');}if(array.byteLength<byteOffset+(length||0)){throw new RangeError('"length" is outside of buffer bounds');}var buf;if(byteOffset===undefined&&length===undefined){buf=new Uint8Array(array);}else if(length===undefined){buf=new Uint8Array(array,byteOffset);}else{buf=new Uint8Array(array,byteOffset,length);}// Return an augmented `Uint8Array` instance
buf.__proto__=Buffer.prototype;return buf;}function fromObject(obj){if(Buffer.isBuffer(obj)){var len=checked(obj.length)|0;var buf=createBuffer(len);if(buf.length===0){return buf;}obj.copy(buf,0,0,len);return buf;}if(obj.length!==undefined){if(typeof obj.length!=='number'||numberIsNaN(obj.length)){return createBuffer(0);}return fromArrayLike(obj);}if(obj.type==='Buffer'&&Array.isArray(obj.data)){return fromArrayLike(obj.data);}}function checked(length){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(length>=K_MAX_LENGTH){throw new RangeError('Attempt to allocate Buffer larger than maximum '+'size: 0x'+K_MAX_LENGTH.toString(16)+' bytes');}return length|0;}function SlowBuffer(length){if(+length!=length){// eslint-disable-line eqeqeq
length=0;}return Buffer.alloc(+length);}Buffer.isBuffer=function isBuffer(b){return b!=null&&b._isBuffer===true&&b!==Buffer.prototype;// so Buffer.isBuffer(Buffer.prototype) will be false
};Buffer.compare=function compare(a,b){if(isInstance(a,Uint8Array))a=Buffer.from(a,a.offset,a.byteLength);if(isInstance(b,Uint8Array))b=Buffer.from(b,b.offset,b.byteLength);if(!Buffer.isBuffer(a)||!Buffer.isBuffer(b)){throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');}if(a===b)return 0;var x=a.length;var y=b.length;for(var i=0,len=Math.min(x,y);i<len;++i){if(a[i]!==b[i]){x=a[i];y=b[i];break;}}if(x<y)return-1;if(y<x)return 1;return 0;};Buffer.isEncoding=function isEncoding(encoding){switch(String(encoding).toLowerCase()){case'hex':case'utf8':case'utf-8':case'ascii':case'latin1':case'binary':case'base64':case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return true;default:return false;}};Buffer.concat=function concat(list,length){if(!Array.isArray(list)){throw new TypeError('"list" argument must be an Array of Buffers');}if(list.length===0){return Buffer.alloc(0);}var i;if(length===undefined){length=0;for(i=0;i<list.length;++i){length+=list[i].length;}}var buffer=Buffer.allocUnsafe(length);var pos=0;for(i=0;i<list.length;++i){var buf=list[i];if(isInstance(buf,Uint8Array)){buf=Buffer.from(buf);}if(!Buffer.isBuffer(buf)){throw new TypeError('"list" argument must be an Array of Buffers');}buf.copy(buffer,pos);pos+=buf.length;}return buffer;};function byteLength(string,encoding){if(Buffer.isBuffer(string)){return string.length;}if(ArrayBuffer.isView(string)||isInstance(string,ArrayBuffer)){return string.byteLength;}if(typeof string!=='string'){throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. '+'Received type '+(typeof string==="undefined"?"undefined":_typeof2(string)));}var len=string.length;var mustMatch=arguments.length>2&&arguments[2]===true;if(!mustMatch&&len===0)return 0;// Use a for loop to avoid recursion
var loweredCase=false;for(;;){switch(encoding){case'ascii':case'latin1':case'binary':return len;case'utf8':case'utf-8':return utf8ToBytes(string).length;case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return len*2;case'hex':return len>>>1;case'base64':return base64ToBytes(string).length;default:if(loweredCase){return mustMatch?-1:utf8ToBytes(string).length;// assume utf8
}encoding=(''+encoding).toLowerCase();loweredCase=true;}}}Buffer.byteLength=byteLength;function slowToString(encoding,start,end){var loweredCase=false;// No need to verify that "this.length <= MAX_UINT32" since it's a read-only
// property of a typed array.
// This behaves neither like String nor Uint8Array in that we set start/end
// to their upper/lower bounds if the value passed is out of range.
// undefined is handled specially as per ECMA-262 6th Edition,
// Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
if(start===undefined||start<0){start=0;}// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if(start>this.length){return'';}if(end===undefined||end>this.length){end=this.length;}if(end<=0){return'';}// Force coersion to uint32. This will also coerce falsey/NaN values to 0.
end>>>=0;start>>>=0;if(end<=start){return'';}if(!encoding)encoding='utf8';while(true){switch(encoding){case'hex':return hexSlice(this,start,end);case'utf8':case'utf-8':return utf8Slice(this,start,end);case'ascii':return asciiSlice(this,start,end);case'latin1':case'binary':return latin1Slice(this,start,end);case'base64':return base64Slice(this,start,end);case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return utf16leSlice(this,start,end);default:if(loweredCase)throw new TypeError('Unknown encoding: '+encoding);encoding=(encoding+'').toLowerCase();loweredCase=true;}}}// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer=true;function swap(b,n,m){var i=b[n];b[n]=b[m];b[m]=i;}Buffer.prototype.swap16=function swap16(){var len=this.length;if(len%2!==0){throw new RangeError('Buffer size must be a multiple of 16-bits');}for(var i=0;i<len;i+=2){swap(this,i,i+1);}return this;};Buffer.prototype.swap32=function swap32(){var len=this.length;if(len%4!==0){throw new RangeError('Buffer size must be a multiple of 32-bits');}for(var i=0;i<len;i+=4){swap(this,i,i+3);swap(this,i+1,i+2);}return this;};Buffer.prototype.swap64=function swap64(){var len=this.length;if(len%8!==0){throw new RangeError('Buffer size must be a multiple of 64-bits');}for(var i=0;i<len;i+=8){swap(this,i,i+7);swap(this,i+1,i+6);swap(this,i+2,i+5);swap(this,i+3,i+4);}return this;};Buffer.prototype.toString=function toString(){var length=this.length;if(length===0)return'';if(arguments.length===0)return utf8Slice(this,0,length);return slowToString.apply(this,arguments);};Buffer.prototype.toLocaleString=Buffer.prototype.toString;Buffer.prototype.equals=function equals(b){if(!Buffer.isBuffer(b))throw new TypeError('Argument must be a Buffer');if(this===b)return true;return Buffer.compare(this,b)===0;};Buffer.prototype.inspect=function inspect(){var str='';var max=exports.INSPECT_MAX_BYTES;str=this.toString('hex',0,max).replace(/(.{2})/g,'$1 ').trim();if(this.length>max)str+=' ... ';return'<Buffer '+str+'>';};Buffer.prototype.compare=function compare(target,start,end,thisStart,thisEnd){if(isInstance(target,Uint8Array)){target=Buffer.from(target,target.offset,target.byteLength);}if(!Buffer.isBuffer(target)){throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. '+'Received type '+(typeof target==="undefined"?"undefined":_typeof2(target)));}if(start===undefined){start=0;}if(end===undefined){end=target?target.length:0;}if(thisStart===undefined){thisStart=0;}if(thisEnd===undefined){thisEnd=this.length;}if(start<0||end>target.length||thisStart<0||thisEnd>this.length){throw new RangeError('out of range index');}if(thisStart>=thisEnd&&start>=end){return 0;}if(thisStart>=thisEnd){return-1;}if(start>=end){return 1;}start>>>=0;end>>>=0;thisStart>>>=0;thisEnd>>>=0;if(this===target)return 0;var x=thisEnd-thisStart;var y=end-start;var len=Math.min(x,y);var thisCopy=this.slice(thisStart,thisEnd);var targetCopy=target.slice(start,end);for(var i=0;i<len;++i){if(thisCopy[i]!==targetCopy[i]){x=thisCopy[i];y=targetCopy[i];break;}}if(x<y)return-1;if(y<x)return 1;return 0;};// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer,val,byteOffset,encoding,dir){// Empty buffer means no match
if(buffer.length===0)return-1;// Normalize byteOffset
if(typeof byteOffset==='string'){encoding=byteOffset;byteOffset=0;}else if(byteOffset>0x7fffffff){byteOffset=0x7fffffff;}else if(byteOffset<-0x80000000){byteOffset=-0x80000000;}byteOffset=+byteOffset;// Coerce to Number.
if(numberIsNaN(byteOffset)){// byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
byteOffset=dir?0:buffer.length-1;}// Normalize byteOffset: negative offsets start from the end of the buffer
if(byteOffset<0)byteOffset=buffer.length+byteOffset;if(byteOffset>=buffer.length){if(dir)return-1;else byteOffset=buffer.length-1;}else if(byteOffset<0){if(dir)byteOffset=0;else return-1;}// Normalize val
if(typeof val==='string'){val=Buffer.from(val,encoding);}// Finally, search either indexOf (if dir is true) or lastIndexOf
if(Buffer.isBuffer(val)){// Special case: looking for empty string/buffer always fails
if(val.length===0){return-1;}return arrayIndexOf(buffer,val,byteOffset,encoding,dir);}else if(typeof val==='number'){val=val&0xFF;// Search for a byte value [0-255]
if(typeof Uint8Array.prototype.indexOf==='function'){if(dir){return Uint8Array.prototype.indexOf.call(buffer,val,byteOffset);}else{return Uint8Array.prototype.lastIndexOf.call(buffer,val,byteOffset);}}return arrayIndexOf(buffer,[val],byteOffset,encoding,dir);}throw new TypeError('val must be string, number or Buffer');}function arrayIndexOf(arr,val,byteOffset,encoding,dir){var indexSize=1;var arrLength=arr.length;var valLength=val.length;if(encoding!==undefined){encoding=String(encoding).toLowerCase();if(encoding==='ucs2'||encoding==='ucs-2'||encoding==='utf16le'||encoding==='utf-16le'){if(arr.length<2||val.length<2){return-1;}indexSize=2;arrLength/=2;valLength/=2;byteOffset/=2;}}function read(buf,i){if(indexSize===1){return buf[i];}else{return buf.readUInt16BE(i*indexSize);}}var i;if(dir){var foundIndex=-1;for(i=byteOffset;i<arrLength;i++){if(read(arr,i)===read(val,foundIndex===-1?0:i-foundIndex)){if(foundIndex===-1)foundIndex=i;if(i-foundIndex+1===valLength)return foundIndex*indexSize;}else{if(foundIndex!==-1)i-=i-foundIndex;foundIndex=-1;}}}else{if(byteOffset+valLength>arrLength)byteOffset=arrLength-valLength;for(i=byteOffset;i>=0;i--){var found=true;for(var j=0;j<valLength;j++){if(read(arr,i+j)!==read(val,j)){found=false;break;}}if(found)return i;}}return-1;}Buffer.prototype.includes=function includes(val,byteOffset,encoding){return this.indexOf(val,byteOffset,encoding)!==-1;};Buffer.prototype.indexOf=function indexOf(val,byteOffset,encoding){return bidirectionalIndexOf(this,val,byteOffset,encoding,true);};Buffer.prototype.lastIndexOf=function lastIndexOf(val,byteOffset,encoding){return bidirectionalIndexOf(this,val,byteOffset,encoding,false);};function hexWrite(buf,string,offset,length){offset=Number(offset)||0;var remaining=buf.length-offset;if(!length){length=remaining;}else{length=Number(length);if(length>remaining){length=remaining;}}var strLen=string.length;if(length>strLen/2){length=strLen/2;}for(var i=0;i<length;++i){var parsed=parseInt(string.substr(i*2,2),16);if(numberIsNaN(parsed))return i;buf[offset+i]=parsed;}return i;}function utf8Write(buf,string,offset,length){return blitBuffer(utf8ToBytes(string,buf.length-offset),buf,offset,length);}function asciiWrite(buf,string,offset,length){return blitBuffer(asciiToBytes(string),buf,offset,length);}function latin1Write(buf,string,offset,length){return asciiWrite(buf,string,offset,length);}function base64Write(buf,string,offset,length){return blitBuffer(base64ToBytes(string),buf,offset,length);}function ucs2Write(buf,string,offset,length){return blitBuffer(utf16leToBytes(string,buf.length-offset),buf,offset,length);}Buffer.prototype.write=function write(string,offset,length,encoding){// Buffer#write(string)
if(offset===undefined){encoding='utf8';length=this.length;offset=0;// Buffer#write(string, encoding)
}else if(length===undefined&&typeof offset==='string'){encoding=offset;length=this.length;offset=0;// Buffer#write(string, offset[, length][, encoding])
}else if(isFinite(offset)){offset=offset>>>0;if(isFinite(length)){length=length>>>0;if(encoding===undefined)encoding='utf8';}else{encoding=length;length=undefined;}}else{throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');}var remaining=this.length-offset;if(length===undefined||length>remaining)length=remaining;if(string.length>0&&(length<0||offset<0)||offset>this.length){throw new RangeError('Attempt to write outside buffer bounds');}if(!encoding)encoding='utf8';var loweredCase=false;for(;;){switch(encoding){case'hex':return hexWrite(this,string,offset,length);case'utf8':case'utf-8':return utf8Write(this,string,offset,length);case'ascii':return asciiWrite(this,string,offset,length);case'latin1':case'binary':return latin1Write(this,string,offset,length);case'base64':// Warning: maxLength not taken into account in base64Write
return base64Write(this,string,offset,length);case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return ucs2Write(this,string,offset,length);default:if(loweredCase)throw new TypeError('Unknown encoding: '+encoding);encoding=(''+encoding).toLowerCase();loweredCase=true;}}};Buffer.prototype.toJSON=function toJSON(){return{type:'Buffer',data:Array.prototype.slice.call(this._arr||this,0)};};function base64Slice(buf,start,end){if(start===0&&end===buf.length){return base64.fromByteArray(buf);}else{return base64.fromByteArray(buf.slice(start,end));}}function utf8Slice(buf,start,end){end=Math.min(buf.length,end);var res=[];var i=start;while(i<end){var firstByte=buf[i];var codePoint=null;var bytesPerSequence=firstByte>0xEF?4:firstByte>0xDF?3:firstByte>0xBF?2:1;if(i+bytesPerSequence<=end){var secondByte,thirdByte,fourthByte,tempCodePoint;switch(bytesPerSequence){case 1:if(firstByte<0x80){codePoint=firstByte;}break;case 2:secondByte=buf[i+1];if((secondByte&0xC0)===0x80){tempCodePoint=(firstByte&0x1F)<<0x6|secondByte&0x3F;if(tempCodePoint>0x7F){codePoint=tempCodePoint;}}break;case 3:secondByte=buf[i+1];thirdByte=buf[i+2];if((secondByte&0xC0)===0x80&&(thirdByte&0xC0)===0x80){tempCodePoint=(firstByte&0xF)<<0xC|(secondByte&0x3F)<<0x6|thirdByte&0x3F;if(tempCodePoint>0x7FF&&(tempCodePoint<0xD800||tempCodePoint>0xDFFF)){codePoint=tempCodePoint;}}break;case 4:secondByte=buf[i+1];thirdByte=buf[i+2];fourthByte=buf[i+3];if((secondByte&0xC0)===0x80&&(thirdByte&0xC0)===0x80&&(fourthByte&0xC0)===0x80){tempCodePoint=(firstByte&0xF)<<0x12|(secondByte&0x3F)<<0xC|(thirdByte&0x3F)<<0x6|fourthByte&0x3F;if(tempCodePoint>0xFFFF&&tempCodePoint<0x110000){codePoint=tempCodePoint;}}}}if(codePoint===null){// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
codePoint=0xFFFD;bytesPerSequence=1;}else if(codePoint>0xFFFF){// encode to utf16 (surrogate pair dance)
codePoint-=0x10000;res.push(codePoint>>>10&0x3FF|0xD800);codePoint=0xDC00|codePoint&0x3FF;}res.push(codePoint);i+=bytesPerSequence;}return decodeCodePointsArray(res);}// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH=0x1000;function decodeCodePointsArray(codePoints){var len=codePoints.length;if(len<=MAX_ARGUMENTS_LENGTH){return String.fromCharCode.apply(String,codePoints);// avoid extra slice()
}// Decode in chunks to avoid "call stack size exceeded".
var res='';var i=0;while(i<len){res+=String.fromCharCode.apply(String,codePoints.slice(i,i+=MAX_ARGUMENTS_LENGTH));}return res;}function asciiSlice(buf,start,end){var ret='';end=Math.min(buf.length,end);for(var i=start;i<end;++i){ret+=String.fromCharCode(buf[i]&0x7F);}return ret;}function latin1Slice(buf,start,end){var ret='';end=Math.min(buf.length,end);for(var i=start;i<end;++i){ret+=String.fromCharCode(buf[i]);}return ret;}function hexSlice(buf,start,end){var len=buf.length;if(!start||start<0)start=0;if(!end||end<0||end>len)end=len;var out='';for(var i=start;i<end;++i){out+=toHex(buf[i]);}return out;}function utf16leSlice(buf,start,end){var bytes=buf.slice(start,end);var res='';for(var i=0;i<bytes.length;i+=2){res+=String.fromCharCode(bytes[i]+bytes[i+1]*256);}return res;}Buffer.prototype.slice=function slice(start,end){var len=this.length;start=~~start;end=end===undefined?len:~~end;if(start<0){start+=len;if(start<0)start=0;}else if(start>len){start=len;}if(end<0){end+=len;if(end<0)end=0;}else if(end>len){end=len;}if(end<start)end=start;var newBuf=this.subarray(start,end);// Return an augmented `Uint8Array` instance
newBuf.__proto__=Buffer.prototype;return newBuf;};/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function checkOffset(offset,ext,length){if(offset%1!==0||offset<0)throw new RangeError('offset is not uint');if(offset+ext>length)throw new RangeError('Trying to access beyond buffer length');}Buffer.prototype.readUIntLE=function readUIntLE(offset,byteLength,noAssert){offset=offset>>>0;byteLength=byteLength>>>0;if(!noAssert)checkOffset(offset,byteLength,this.length);var val=this[offset];var mul=1;var i=0;while(++i<byteLength&&(mul*=0x100)){val+=this[offset+i]*mul;}return val;};Buffer.prototype.readUIntBE=function readUIntBE(offset,byteLength,noAssert){offset=offset>>>0;byteLength=byteLength>>>0;if(!noAssert){checkOffset(offset,byteLength,this.length);}var val=this[offset+--byteLength];var mul=1;while(byteLength>0&&(mul*=0x100)){val+=this[offset+--byteLength]*mul;}return val;};Buffer.prototype.readUInt8=function readUInt8(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,1,this.length);return this[offset];};Buffer.prototype.readUInt16LE=function readUInt16LE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,2,this.length);return this[offset]|this[offset+1]<<8;};Buffer.prototype.readUInt16BE=function readUInt16BE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,2,this.length);return this[offset]<<8|this[offset+1];};Buffer.prototype.readUInt32LE=function readUInt32LE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,4,this.length);return(this[offset]|this[offset+1]<<8|this[offset+2]<<16)+this[offset+3]*0x1000000;};Buffer.prototype.readUInt32BE=function readUInt32BE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,4,this.length);return this[offset]*0x1000000+(this[offset+1]<<16|this[offset+2]<<8|this[offset+3]);};Buffer.prototype.readIntLE=function readIntLE(offset,byteLength,noAssert){offset=offset>>>0;byteLength=byteLength>>>0;if(!noAssert)checkOffset(offset,byteLength,this.length);var val=this[offset];var mul=1;var i=0;while(++i<byteLength&&(mul*=0x100)){val+=this[offset+i]*mul;}mul*=0x80;if(val>=mul)val-=Math.pow(2,8*byteLength);return val;};Buffer.prototype.readIntBE=function readIntBE(offset,byteLength,noAssert){offset=offset>>>0;byteLength=byteLength>>>0;if(!noAssert)checkOffset(offset,byteLength,this.length);var i=byteLength;var mul=1;var val=this[offset+--i];while(i>0&&(mul*=0x100)){val+=this[offset+--i]*mul;}mul*=0x80;if(val>=mul)val-=Math.pow(2,8*byteLength);return val;};Buffer.prototype.readInt8=function readInt8(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,1,this.length);if(!(this[offset]&0x80))return this[offset];return(0xff-this[offset]+1)*-1;};Buffer.prototype.readInt16LE=function readInt16LE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,2,this.length);var val=this[offset]|this[offset+1]<<8;return val&0x8000?val|0xFFFF0000:val;};Buffer.prototype.readInt16BE=function readInt16BE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,2,this.length);var val=this[offset+1]|this[offset]<<8;return val&0x8000?val|0xFFFF0000:val;};Buffer.prototype.readInt32LE=function readInt32LE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,4,this.length);return this[offset]|this[offset+1]<<8|this[offset+2]<<16|this[offset+3]<<24;};Buffer.prototype.readInt32BE=function readInt32BE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,4,this.length);return this[offset]<<24|this[offset+1]<<16|this[offset+2]<<8|this[offset+3];};Buffer.prototype.readFloatLE=function readFloatLE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,4,this.length);return ieee754.read(this,offset,true,23,4);};Buffer.prototype.readFloatBE=function readFloatBE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,4,this.length);return ieee754.read(this,offset,false,23,4);};Buffer.prototype.readDoubleLE=function readDoubleLE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,8,this.length);return ieee754.read(this,offset,true,52,8);};Buffer.prototype.readDoubleBE=function readDoubleBE(offset,noAssert){offset=offset>>>0;if(!noAssert)checkOffset(offset,8,this.length);return ieee754.read(this,offset,false,52,8);};function checkInt(buf,value,offset,ext,max,min){if(!Buffer.isBuffer(buf))throw new TypeError('"buffer" argument must be a Buffer instance');if(value>max||value<min)throw new RangeError('"value" argument is out of bounds');if(offset+ext>buf.length)throw new RangeError('Index out of range');}Buffer.prototype.writeUIntLE=function writeUIntLE(value,offset,byteLength,noAssert){value=+value;offset=offset>>>0;byteLength=byteLength>>>0;if(!noAssert){var maxBytes=Math.pow(2,8*byteLength)-1;checkInt(this,value,offset,byteLength,maxBytes,0);}var mul=1;var i=0;this[offset]=value&0xFF;while(++i<byteLength&&(mul*=0x100)){this[offset+i]=value/mul&0xFF;}return offset+byteLength;};Buffer.prototype.writeUIntBE=function writeUIntBE(value,offset,byteLength,noAssert){value=+value;offset=offset>>>0;byteLength=byteLength>>>0;if(!noAssert){var maxBytes=Math.pow(2,8*byteLength)-1;checkInt(this,value,offset,byteLength,maxBytes,0);}var i=byteLength-1;var mul=1;this[offset+i]=value&0xFF;while(--i>=0&&(mul*=0x100)){this[offset+i]=value/mul&0xFF;}return offset+byteLength;};Buffer.prototype.writeUInt8=function writeUInt8(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,1,0xff,0);this[offset]=value&0xff;return offset+1;};Buffer.prototype.writeUInt16LE=function writeUInt16LE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,2,0xffff,0);this[offset]=value&0xff;this[offset+1]=value>>>8;return offset+2;};Buffer.prototype.writeUInt16BE=function writeUInt16BE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,2,0xffff,0);this[offset]=value>>>8;this[offset+1]=value&0xff;return offset+2;};Buffer.prototype.writeUInt32LE=function writeUInt32LE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0);this[offset+3]=value>>>24;this[offset+2]=value>>>16;this[offset+1]=value>>>8;this[offset]=value&0xff;return offset+4;};Buffer.prototype.writeUInt32BE=function writeUInt32BE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0);this[offset]=value>>>24;this[offset+1]=value>>>16;this[offset+2]=value>>>8;this[offset+3]=value&0xff;return offset+4;};Buffer.prototype.writeIntLE=function writeIntLE(value,offset,byteLength,noAssert){value=+value;offset=offset>>>0;if(!noAssert){var limit=Math.pow(2,8*byteLength-1);checkInt(this,value,offset,byteLength,limit-1,-limit);}var i=0;var mul=1;var sub=0;this[offset]=value&0xFF;while(++i<byteLength&&(mul*=0x100)){if(value<0&&sub===0&&this[offset+i-1]!==0){sub=1;}this[offset+i]=(value/mul>>0)-sub&0xFF;}return offset+byteLength;};Buffer.prototype.writeIntBE=function writeIntBE(value,offset,byteLength,noAssert){value=+value;offset=offset>>>0;if(!noAssert){var limit=Math.pow(2,8*byteLength-1);checkInt(this,value,offset,byteLength,limit-1,-limit);}var i=byteLength-1;var mul=1;var sub=0;this[offset+i]=value&0xFF;while(--i>=0&&(mul*=0x100)){if(value<0&&sub===0&&this[offset+i+1]!==0){sub=1;}this[offset+i]=(value/mul>>0)-sub&0xFF;}return offset+byteLength;};Buffer.prototype.writeInt8=function writeInt8(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,1,0x7f,-0x80);if(value<0)value=0xff+value+1;this[offset]=value&0xff;return offset+1;};Buffer.prototype.writeInt16LE=function writeInt16LE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000);this[offset]=value&0xff;this[offset+1]=value>>>8;return offset+2;};Buffer.prototype.writeInt16BE=function writeInt16BE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000);this[offset]=value>>>8;this[offset+1]=value&0xff;return offset+2;};Buffer.prototype.writeInt32LE=function writeInt32LE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000);this[offset]=value&0xff;this[offset+1]=value>>>8;this[offset+2]=value>>>16;this[offset+3]=value>>>24;return offset+4;};Buffer.prototype.writeInt32BE=function writeInt32BE(value,offset,noAssert){value=+value;offset=offset>>>0;if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000);if(value<0)value=0xffffffff+value+1;this[offset]=value>>>24;this[offset+1]=value>>>16;this[offset+2]=value>>>8;this[offset+3]=value&0xff;return offset+4;};function checkIEEE754(buf,value,offset,ext,max,min){if(offset+ext>buf.length)throw new RangeError('Index out of range');if(offset<0)throw new RangeError('Index out of range');}function writeFloat(buf,value,offset,littleEndian,noAssert){value=+value;offset=offset>>>0;if(!noAssert){checkIEEE754(buf,value,offset,4,3.4028234663852886e+38,-3.4028234663852886e+38);}ieee754.write(buf,value,offset,littleEndian,23,4);return offset+4;}Buffer.prototype.writeFloatLE=function writeFloatLE(value,offset,noAssert){return writeFloat(this,value,offset,true,noAssert);};Buffer.prototype.writeFloatBE=function writeFloatBE(value,offset,noAssert){return writeFloat(this,value,offset,false,noAssert);};function writeDouble(buf,value,offset,littleEndian,noAssert){value=+value;offset=offset>>>0;if(!noAssert){checkIEEE754(buf,value,offset,8,1.7976931348623157E+308,-1.7976931348623157E+308);}ieee754.write(buf,value,offset,littleEndian,52,8);return offset+8;}Buffer.prototype.writeDoubleLE=function writeDoubleLE(value,offset,noAssert){return writeDouble(this,value,offset,true,noAssert);};Buffer.prototype.writeDoubleBE=function writeDoubleBE(value,offset,noAssert){return writeDouble(this,value,offset,false,noAssert);};// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy=function copy(target,targetStart,start,end){if(!Buffer.isBuffer(target))throw new TypeError('argument should be a Buffer');if(!start)start=0;if(!end&&end!==0)end=this.length;if(targetStart>=target.length)targetStart=target.length;if(!targetStart)targetStart=0;if(end>0&&end<start)end=start;// Copy 0 bytes; we're done
if(end===start)return 0;if(target.length===0||this.length===0)return 0;// Fatal error conditions
if(targetStart<0){throw new RangeError('targetStart out of bounds');}if(start<0||start>=this.length)throw new RangeError('Index out of range');if(end<0)throw new RangeError('sourceEnd out of bounds');// Are we oob?
if(end>this.length)end=this.length;if(target.length-targetStart<end-start){end=target.length-targetStart+start;}var len=end-start;if(this===target&&typeof Uint8Array.prototype.copyWithin==='function'){// Use built-in when available, missing from IE11
this.copyWithin(targetStart,start,end);}else if(this===target&&start<targetStart&&targetStart<end){// descending copy from end
for(var i=len-1;i>=0;--i){target[i+targetStart]=this[i+start];}}else{Uint8Array.prototype.set.call(target,this.subarray(start,end),targetStart);}return len;};// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill=function fill(val,start,end,encoding){// Handle string cases:
if(typeof val==='string'){if(typeof start==='string'){encoding=start;start=0;end=this.length;}else if(typeof end==='string'){encoding=end;end=this.length;}if(encoding!==undefined&&typeof encoding!=='string'){throw new TypeError('encoding must be a string');}if(typeof encoding==='string'&&!Buffer.isEncoding(encoding)){throw new TypeError('Unknown encoding: '+encoding);}if(val.length===1){var code=val.charCodeAt(0);if(encoding==='utf8'&&code<128||encoding==='latin1'){// Fast path: If `val` fits into a single byte, use that numeric value.
val=code;}}}else if(typeof val==='number'){val=val&255;}// Invalid ranges are not set to a default, so can range check early.
if(start<0||this.length<start||this.length<end){throw new RangeError('Out of range index');}if(end<=start){return this;}start=start>>>0;end=end===undefined?this.length:end>>>0;if(!val)val=0;var i;if(typeof val==='number'){for(i=start;i<end;++i){this[i]=val;}}else{var bytes=Buffer.isBuffer(val)?val:Buffer.from(val,encoding);var len=bytes.length;if(len===0){throw new TypeError('The value "'+val+'" is invalid for argument "value"');}for(i=0;i<end-start;++i){this[i+start]=bytes[i%len];}}return this;};// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE=/[^+/0-9A-Za-z-_]/g;function base64clean(str){// Node takes equal signs as end of the Base64 encoding
str=str.split('=')[0];// Node strips out invalid characters like \n and \t from the string, base64-js does not
str=str.trim().replace(INVALID_BASE64_RE,'');// Node converts strings with length < 2 to ''
if(str.length<2)return'';// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
while(str.length%4!==0){str=str+'=';}return str;}function toHex(n){if(n<16)return'0'+n.toString(16);return n.toString(16);}function utf8ToBytes(string,units){units=units||Infinity;var codePoint;var length=string.length;var leadSurrogate=null;var bytes=[];for(var i=0;i<length;++i){codePoint=string.charCodeAt(i);// is surrogate component
if(codePoint>0xD7FF&&codePoint<0xE000){// last char was a lead
if(!leadSurrogate){// no lead yet
if(codePoint>0xDBFF){// unexpected trail
if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);continue;}else if(i+1===length){// unpaired lead
if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);continue;}// valid lead
leadSurrogate=codePoint;continue;}// 2 leads in a row
if(codePoint<0xDC00){if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);leadSurrogate=codePoint;continue;}// valid surrogate pair
codePoint=(leadSurrogate-0xD800<<10|codePoint-0xDC00)+0x10000;}else if(leadSurrogate){// valid bmp char, but last char was a lead
if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);}leadSurrogate=null;// encode utf8
if(codePoint<0x80){if((units-=1)<0)break;bytes.push(codePoint);}else if(codePoint<0x800){if((units-=2)<0)break;bytes.push(codePoint>>0x6|0xC0,codePoint&0x3F|0x80);}else if(codePoint<0x10000){if((units-=3)<0)break;bytes.push(codePoint>>0xC|0xE0,codePoint>>0x6&0x3F|0x80,codePoint&0x3F|0x80);}else if(codePoint<0x110000){if((units-=4)<0)break;bytes.push(codePoint>>0x12|0xF0,codePoint>>0xC&0x3F|0x80,codePoint>>0x6&0x3F|0x80,codePoint&0x3F|0x80);}else{throw new Error('Invalid code point');}}return bytes;}function asciiToBytes(str){var byteArray=[];for(var i=0;i<str.length;++i){// Node's code seems to be doing this and not & 0x7F..
byteArray.push(str.charCodeAt(i)&0xFF);}return byteArray;}function utf16leToBytes(str,units){var c,hi,lo;var byteArray=[];for(var i=0;i<str.length;++i){if((units-=2)<0)break;c=str.charCodeAt(i);hi=c>>8;lo=c%256;byteArray.push(lo);byteArray.push(hi);}return byteArray;}function base64ToBytes(str){return base64.toByteArray(base64clean(str));}function blitBuffer(src,dst,offset,length){for(var i=0;i<length;++i){if(i+offset>=dst.length||i>=src.length)break;dst[i+offset]=src[i];}return i;}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj,type){return obj instanceof type||obj!=null&&obj.constructor!=null&&obj.constructor.name!=null&&obj.constructor.name===type.name;}function numberIsNaN(obj){// For IE11 support
return obj!==obj;// eslint-disable-line no-self-compare
}},{"base64-js":6,"ieee754":12}],9:[function(require,module,exports){(function(Buffer){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(arg){if(Array.isArray){return Array.isArray(arg);}return objectToString(arg)==='[object Array]';}exports.isArray=isArray;function isBoolean(arg){return typeof arg==='boolean';}exports.isBoolean=isBoolean;function isNull(arg){return arg===null;}exports.isNull=isNull;function isNullOrUndefined(arg){return arg==null;}exports.isNullOrUndefined=isNullOrUndefined;function isNumber(arg){return typeof arg==='number';}exports.isNumber=isNumber;function isString(arg){return typeof arg==='string';}exports.isString=isString;function isSymbol(arg){return(typeof arg==="undefined"?"undefined":_typeof2(arg))==='symbol';}exports.isSymbol=isSymbol;function isUndefined(arg){return arg===void 0;}exports.isUndefined=isUndefined;function isRegExp(re){return objectToString(re)==='[object RegExp]';}exports.isRegExp=isRegExp;function isObject(arg){return(typeof arg==="undefined"?"undefined":_typeof2(arg))==='object'&&arg!==null;}exports.isObject=isObject;function isDate(d){return objectToString(d)==='[object Date]';}exports.isDate=isDate;function isError(e){return objectToString(e)==='[object Error]'||e instanceof Error;}exports.isError=isError;function isFunction(arg){return typeof arg==='function';}exports.isFunction=isFunction;function isPrimitive(arg){return arg===null||typeof arg==='boolean'||typeof arg==='number'||typeof arg==='string'||(typeof arg==="undefined"?"undefined":_typeof2(arg))==='symbol'||// ES6 symbol
typeof arg==='undefined';}exports.isPrimitive=isPrimitive;exports.isBuffer=Buffer.isBuffer;function objectToString(o){return Object.prototype.toString.call(o);}}).call(this,{"isBuffer":require("../../../../../is-buffer/1.1.6/node_modules/is-buffer/index.js")});},{"../../../../../is-buffer/1.1.6/node_modules/is-buffer/index.js":15}],10:[function(require,module,exports){var Stream=require("stream");var writeMethods=["write","end","destroy"];var readMethods=["resume","pause"];var readEvents=["data","close"];var slice=Array.prototype.slice;module.exports=duplex;function forEach(arr,fn){if(arr.forEach){return arr.forEach(fn);}for(var i=0;i<arr.length;i++){fn(arr[i],i);}}function duplex(writer,reader){var stream=new Stream();var ended=false;forEach(writeMethods,proxyWriter);forEach(readMethods,proxyReader);forEach(readEvents,proxyStream);reader.on("end",handleEnd);writer.on("drain",function(){stream.emit("drain");});writer.on("error",reemit);reader.on("error",reemit);stream.writable=writer.writable;stream.readable=reader.readable;return stream;function proxyWriter(methodName){stream[methodName]=method;function method(){return writer[methodName].apply(writer,arguments);}}function proxyReader(methodName){stream[methodName]=method;function method(){stream.emit(methodName);var func=reader[methodName];if(func){return func.apply(reader,arguments);}reader.emit(methodName);}}function proxyStream(methodName){reader.on(methodName,reemit);function reemit(){var args=slice.call(arguments);args.unshift(methodName);stream.emit.apply(stream,args);}}function handleEnd(){if(ended){return;}ended=true;var args=slice.call(arguments);args.unshift("end");stream.emit.apply(stream,args);}function reemit(err){stream.emit("error",err);}}},{"stream":204}],11:[function(require,module,exports){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var objectCreate=Object.create||objectCreatePolyfill;var objectKeys=Object.keys||objectKeysPolyfill;var bind=Function.prototype.bind||functionBindPolyfill;function EventEmitter(){if(!this._events||!Object.prototype.hasOwnProperty.call(this,'_events')){this._events=objectCreate(null);this._eventsCount=0;}this._maxListeners=this._maxListeners||undefined;}module.exports=EventEmitter;// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter=EventEmitter;EventEmitter.prototype._events=undefined;EventEmitter.prototype._maxListeners=undefined;// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners=10;var hasDefineProperty;try{var o={};if(Object.defineProperty)Object.defineProperty(o,'x',{value:0});hasDefineProperty=o.x===0;}catch(err){hasDefineProperty=false;}if(hasDefineProperty){Object.defineProperty(EventEmitter,'defaultMaxListeners',{enumerable:true,get:function get(){return defaultMaxListeners;},set:function set(arg){// check whether the input is a positive number (whose value is zero or
// greater and not a NaN).
if(typeof arg!=='number'||arg<0||arg!==arg)throw new TypeError('"defaultMaxListeners" must be a positive number');defaultMaxListeners=arg;}});}else{EventEmitter.defaultMaxListeners=defaultMaxListeners;}// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners=function setMaxListeners(n){if(typeof n!=='number'||n<0||isNaN(n))throw new TypeError('"n" argument must be a positive number');this._maxListeners=n;return this;};function $getMaxListeners(that){if(that._maxListeners===undefined)return EventEmitter.defaultMaxListeners;return that._maxListeners;}EventEmitter.prototype.getMaxListeners=function getMaxListeners(){return $getMaxListeners(this);};// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler,isFn,self){if(isFn)handler.call(self);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i){listeners[i].call(self);}}}function emitOne(handler,isFn,self,arg1){if(isFn)handler.call(self,arg1);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i){listeners[i].call(self,arg1);}}}function emitTwo(handler,isFn,self,arg1,arg2){if(isFn)handler.call(self,arg1,arg2);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i){listeners[i].call(self,arg1,arg2);}}}function emitThree(handler,isFn,self,arg1,arg2,arg3){if(isFn)handler.call(self,arg1,arg2,arg3);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i){listeners[i].call(self,arg1,arg2,arg3);}}}function emitMany(handler,isFn,self,args){if(isFn)handler.apply(self,args);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i){listeners[i].apply(self,args);}}}EventEmitter.prototype.emit=function emit(type){var er,handler,len,args,i,events;var doError=type==='error';events=this._events;if(events)doError=doError&&events.error==null;else if(!doError)return false;// If there is no 'error' event listener then throw.
if(doError){if(arguments.length>1)er=arguments[1];if(er instanceof Error){throw er;// Unhandled 'error' event
}else{// At least give some kind of context to the user
var err=new Error('Unhandled "error" event. ('+er+')');err.context=er;throw err;}return false;}handler=events[type];if(!handler)return false;var isFn=typeof handler==='function';len=arguments.length;switch(len){// fast cases
case 1:emitNone(handler,isFn,this);break;case 2:emitOne(handler,isFn,this,arguments[1]);break;case 3:emitTwo(handler,isFn,this,arguments[1],arguments[2]);break;case 4:emitThree(handler,isFn,this,arguments[1],arguments[2],arguments[3]);break;// slower
default:args=new Array(len-1);for(i=1;i<len;i++){args[i-1]=arguments[i];}emitMany(handler,isFn,this,args);}return true;};function _addListener(target,type,listener,prepend){var m;var events;var existing;if(typeof listener!=='function')throw new TypeError('"listener" argument must be a function');events=target._events;if(!events){events=target._events=objectCreate(null);target._eventsCount=0;}else{// To avoid recursion in the case that type === "newListener"! Before
// adding it to the listeners, first emit "newListener".
if(events.newListener){target.emit('newListener',type,listener.listener?listener.listener:listener);// Re-assign `events` because a newListener handler could have caused the
// this._events to be assigned to a new object
events=target._events;}existing=events[type];}if(!existing){// Optimize the case of one listener. Don't need the extra array object.
existing=events[type]=listener;++target._eventsCount;}else{if(typeof existing==='function'){// Adding the second element, need to change to array.
existing=events[type]=prepend?[listener,existing]:[existing,listener];}else{// If we've already got an array, just append.
if(prepend){existing.unshift(listener);}else{existing.push(listener);}}// Check for listener leak
if(!existing.warned){m=$getMaxListeners(target);if(m&&m>0&&existing.length>m){existing.warned=true;var w=new Error('Possible EventEmitter memory leak detected. '+existing.length+' "'+String(type)+'" listeners '+'added. Use emitter.setMaxListeners() to '+'increase limit.');w.name='MaxListenersExceededWarning';w.emitter=target;w.type=type;w.count=existing.length;if((typeof console==="undefined"?"undefined":_typeof2(console))==='object'&&console.warn){console.warn('%s: %s',w.name,w.message);}}}}return target;}EventEmitter.prototype.addListener=function addListener(type,listener){return _addListener(this,type,listener,false);};EventEmitter.prototype.on=EventEmitter.prototype.addListener;EventEmitter.prototype.prependListener=function prependListener(type,listener){return _addListener(this,type,listener,true);};function onceWrapper(){if(!this.fired){this.target.removeListener(this.type,this.wrapFn);this.fired=true;switch(arguments.length){case 0:return this.listener.call(this.target);case 1:return this.listener.call(this.target,arguments[0]);case 2:return this.listener.call(this.target,arguments[0],arguments[1]);case 3:return this.listener.call(this.target,arguments[0],arguments[1],arguments[2]);default:var args=new Array(arguments.length);for(var i=0;i<args.length;++i){args[i]=arguments[i];}this.listener.apply(this.target,args);}}}function _onceWrap(target,type,listener){var state={fired:false,wrapFn:undefined,target:target,type:type,listener:listener};var wrapped=bind.call(onceWrapper,state);wrapped.listener=listener;state.wrapFn=wrapped;return wrapped;}EventEmitter.prototype.once=function once(type,listener){if(typeof listener!=='function')throw new TypeError('"listener" argument must be a function');this.on(type,_onceWrap(this,type,listener));return this;};EventEmitter.prototype.prependOnceListener=function prependOnceListener(type,listener){if(typeof listener!=='function')throw new TypeError('"listener" argument must be a function');this.prependListener(type,_onceWrap(this,type,listener));return this;};// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener=function removeListener(type,listener){var list,events,position,i,originalListener;if(typeof listener!=='function')throw new TypeError('"listener" argument must be a function');events=this._events;if(!events)return this;list=events[type];if(!list)return this;if(list===listener||list.listener===listener){if(--this._eventsCount===0)this._events=objectCreate(null);else{delete events[type];if(events.removeListener)this.emit('removeListener',type,list.listener||listener);}}else if(typeof list!=='function'){position=-1;for(i=list.length-1;i>=0;i--){if(list[i]===listener||list[i].listener===listener){originalListener=list[i].listener;position=i;break;}}if(position<0)return this;if(position===0)list.shift();else spliceOne(list,position);if(list.length===1)events[type]=list[0];if(events.removeListener)this.emit('removeListener',type,originalListener||listener);}return this;};EventEmitter.prototype.removeAllListeners=function removeAllListeners(type){var listeners,events,i;events=this._events;if(!events)return this;// not listening for removeListener, no need to emit
if(!events.removeListener){if(arguments.length===0){this._events=objectCreate(null);this._eventsCount=0;}else if(events[type]){if(--this._eventsCount===0)this._events=objectCreate(null);else delete events[type];}return this;}// emit removeListener for all listeners on all events
if(arguments.length===0){var keys=objectKeys(events);var key;for(i=0;i<keys.length;++i){key=keys[i];if(key==='removeListener')continue;this.removeAllListeners(key);}this.removeAllListeners('removeListener');this._events=objectCreate(null);this._eventsCount=0;return this;}listeners=events[type];if(typeof listeners==='function'){this.removeListener(type,listeners);}else if(listeners){// LIFO order
for(i=listeners.length-1;i>=0;i--){this.removeListener(type,listeners[i]);}}return this;};function _listeners(target,type,unwrap){var events=target._events;if(!events)return[];var evlistener=events[type];if(!evlistener)return[];if(typeof evlistener==='function')return unwrap?[evlistener.listener||evlistener]:[evlistener];return unwrap?unwrapListeners(evlistener):arrayClone(evlistener,evlistener.length);}EventEmitter.prototype.listeners=function listeners(type){return _listeners(this,type,true);};EventEmitter.prototype.rawListeners=function rawListeners(type){return _listeners(this,type,false);};EventEmitter.listenerCount=function(emitter,type){if(typeof emitter.listenerCount==='function'){return emitter.listenerCount(type);}else{return listenerCount.call(emitter,type);}};EventEmitter.prototype.listenerCount=listenerCount;function listenerCount(type){var events=this._events;if(events){var evlistener=events[type];if(typeof evlistener==='function'){return 1;}else if(evlistener){return evlistener.length;}}return 0;}EventEmitter.prototype.eventNames=function eventNames(){return this._eventsCount>0?Reflect.ownKeys(this._events):[];};// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list,index){for(var i=index,k=i+1,n=list.length;k<n;i+=1,k+=1){list[i]=list[k];}list.pop();}function arrayClone(arr,n){var copy=new Array(n);for(var i=0;i<n;++i){copy[i]=arr[i];}return copy;}function unwrapListeners(arr){var ret=new Array(arr.length);for(var i=0;i<ret.length;++i){ret[i]=arr[i].listener||arr[i];}return ret;}function objectCreatePolyfill(proto){var F=function F(){};F.prototype=proto;return new F();}function objectKeysPolyfill(obj){var keys=[];for(var k in obj){if(Object.prototype.hasOwnProperty.call(obj,k)){keys.push(k);}}return k;}function functionBindPolyfill(context){var fn=this;return function(){return fn.apply(context,arguments);};}},{}],12:[function(require,module,exports){exports.read=function(buffer,offset,isLE,mLen,nBytes){var e,m;var eLen=nBytes*8-mLen-1;var eMax=(1<<eLen)-1;var eBias=eMax>>1;var nBits=-7;var i=isLE?nBytes-1:0;var d=isLE?-1:1;var s=buffer[offset+i];i+=d;e=s&(1<<-nBits)-1;s>>=-nBits;nBits+=eLen;for(;nBits>0;e=e*256+buffer[offset+i],i+=d,nBits-=8){}m=e&(1<<-nBits)-1;e>>=-nBits;nBits+=mLen;for(;nBits>0;m=m*256+buffer[offset+i],i+=d,nBits-=8){}if(e===0){e=1-eBias;}else if(e===eMax){return m?NaN:(s?-1:1)*Infinity;}else{m=m+Math.pow(2,mLen);e=e-eBias;}return(s?-1:1)*m*Math.pow(2,e-mLen);};exports.write=function(buffer,value,offset,isLE,mLen,nBytes){var e,m,c;var eLen=nBytes*8-mLen-1;var eMax=(1<<eLen)-1;var eBias=eMax>>1;var rt=mLen===23?Math.pow(2,-24)-Math.pow(2,-77):0;var i=isLE?0:nBytes-1;var d=isLE?1:-1;var s=value<0||value===0&&1/value<0?1:0;value=Math.abs(value);if(isNaN(value)||value===Infinity){m=isNaN(value)?1:0;e=eMax;}else{e=Math.floor(Math.log(value)/Math.LN2);if(value*(c=Math.pow(2,-e))<1){e--;c*=2;}if(e+eBias>=1){value+=rt/c;}else{value+=rt*Math.pow(2,1-eBias);}if(value*c>=2){e++;c/=2;}if(e+eBias>=eMax){m=0;e=eMax;}else if(e+eBias>=1){m=(value*c-1)*Math.pow(2,mLen);e=e+eBias;}else{m=value*Math.pow(2,eBias-1)*Math.pow(2,mLen);e=0;}}for(;mLen>=8;buffer[offset+i]=m&0xff,i+=d,m/=256,mLen-=8){}e=e<<mLen|m;eLen+=mLen;for(;eLen>0;buffer[offset+i]=e&0xff,i+=d,e/=256,eLen-=8){}buffer[offset+i-d]|=s*128;};},{}],13:[function(require,module,exports){if(typeof Object.create==='function'){// implementation from standard node.js 'util' module
module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:false,writable:true,configurable:true}});};}else{// old school shim for old browsers
module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;var TempCtor=function TempCtor(){};TempCtor.prototype=superCtor.prototype;ctor.prototype=new TempCtor();ctor.prototype.constructor=ctor;};}},{}],14:[function(require,module,exports){arguments[4][13][0].apply(exports,arguments);},{"dup":13}],15:[function(require,module,exports){/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports=function(obj){return obj!=null&&(isBuffer(obj)||isSlowBuffer(obj)||!!obj._isBuffer);};function isBuffer(obj){return!!obj.constructor&&typeof obj.constructor.isBuffer==='function'&&obj.constructor.isBuffer(obj);}// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj){return typeof obj.readFloatLE==='function'&&typeof obj.slice==='function'&&isBuffer(obj.slice(0,0));}},{}],16:[function(require,module,exports){var toString={}.toString;module.exports=Array.isArray||function(arr){return toString.call(arr)=='[object Array]';};},{}],17:[function(require,module,exports){'use strict';var yaml=require('./lib/js-yaml.js');module.exports=yaml;},{"./lib/js-yaml.js":18}],18:[function(require,module,exports){'use strict';var loader=require('./js-yaml/loader');var dumper=require('./js-yaml/dumper');function deprecated(name){return function(){throw new Error('Function '+name+' is deprecated and cannot be used.');};}module.exports.Type=require('./js-yaml/type');module.exports.Schema=require('./js-yaml/schema');module.exports.FAILSAFE_SCHEMA=require('./js-yaml/schema/failsafe');module.exports.JSON_SCHEMA=require('./js-yaml/schema/json');module.exports.CORE_SCHEMA=require('./js-yaml/schema/core');module.exports.DEFAULT_SAFE_SCHEMA=require('./js-yaml/schema/default_safe');module.exports.DEFAULT_FULL_SCHEMA=require('./js-yaml/schema/default_full');module.exports.load=loader.load;module.exports.loadAll=loader.loadAll;module.exports.safeLoad=loader.safeLoad;module.exports.safeLoadAll=loader.safeLoadAll;module.exports.dump=dumper.dump;module.exports.safeDump=dumper.safeDump;module.exports.YAMLException=require('./js-yaml/exception');// Deprecated schema names from JS-YAML 2.0.x
module.exports.MINIMAL_SCHEMA=require('./js-yaml/schema/failsafe');module.exports.SAFE_SCHEMA=require('./js-yaml/schema/default_safe');module.exports.DEFAULT_SCHEMA=require('./js-yaml/schema/default_full');// Deprecated functions from JS-YAML 1.x.x
module.exports.scan=deprecated('scan');module.exports.parse=deprecated('parse');module.exports.compose=deprecated('compose');module.exports.addConstructor=deprecated('addConstructor');},{"./js-yaml/dumper":20,"./js-yaml/exception":21,"./js-yaml/loader":22,"./js-yaml/schema":24,"./js-yaml/schema/core":25,"./js-yaml/schema/default_full":26,"./js-yaml/schema/default_safe":27,"./js-yaml/schema/failsafe":28,"./js-yaml/schema/json":29,"./js-yaml/type":30}],19:[function(require,module,exports){'use strict';function isNothing(subject){return typeof subject==='undefined'||subject===null;}function isObject(subject){return(typeof subject==="undefined"?"undefined":_typeof2(subject))==='object'&&subject!==null;}function toArray(sequence){if(Array.isArray(sequence))return sequence;else if(isNothing(sequence))return[];return[sequence];}function extend(target,source){var index,length,key,sourceKeys;if(source){sourceKeys=Object.keys(source);for(index=0,length=sourceKeys.length;index<length;index+=1){key=sourceKeys[index];target[key]=source[key];}}return target;}function repeat(string,count){var result='',cycle;for(cycle=0;cycle<count;cycle+=1){result+=string;}return result;}function isNegativeZero(number){return number===0&&Number.NEGATIVE_INFINITY===1/number;}module.exports.isNothing=isNothing;module.exports.isObject=isObject;module.exports.toArray=toArray;module.exports.repeat=repeat;module.exports.isNegativeZero=isNegativeZero;module.exports.extend=extend;},{}],20:[function(require,module,exports){'use strict';/*eslint-disable no-use-before-define*/var common=require('./common');var YAMLException=require('./exception');var DEFAULT_FULL_SCHEMA=require('./schema/default_full');var DEFAULT_SAFE_SCHEMA=require('./schema/default_safe');var _toString=Object.prototype.toString;var _hasOwnProperty=Object.prototype.hasOwnProperty;var CHAR_TAB=0x09;/* Tab */var CHAR_LINE_FEED=0x0A;/* LF */var CHAR_SPACE=0x20;/* Space */var CHAR_EXCLAMATION=0x21;/* ! */var CHAR_DOUBLE_QUOTE=0x22;/* " */var CHAR_SHARP=0x23;/* # */var CHAR_PERCENT=0x25;/* % */var CHAR_AMPERSAND=0x26;/* & */var CHAR_SINGLE_QUOTE=0x27;/* ' */var CHAR_ASTERISK=0x2A;/* * */var CHAR_COMMA=0x2C;/* , */var CHAR_MINUS=0x2D;/* - */var CHAR_COLON=0x3A;/* : */var CHAR_GREATER_THAN=0x3E;/* > */var CHAR_QUESTION=0x3F;/* ? */var CHAR_COMMERCIAL_AT=0x40;/* @ */var CHAR_LEFT_SQUARE_BRACKET=0x5B;/* [ */var CHAR_RIGHT_SQUARE_BRACKET=0x5D;/* ] */var CHAR_GRAVE_ACCENT=0x60;/* ` */var CHAR_LEFT_CURLY_BRACKET=0x7B;/* { */var CHAR_VERTICAL_LINE=0x7C;/* | */var CHAR_RIGHT_CURLY_BRACKET=0x7D;/* } */var ESCAPE_SEQUENCES={};ESCAPE_SEQUENCES[0x00]='\\0';ESCAPE_SEQUENCES[0x07]='\\a';ESCAPE_SEQUENCES[0x08]='\\b';ESCAPE_SEQUENCES[0x09]='\\t';ESCAPE_SEQUENCES[0x0A]='\\n';ESCAPE_SEQUENCES[0x0B]='\\v';ESCAPE_SEQUENCES[0x0C]='\\f';ESCAPE_SEQUENCES[0x0D]='\\r';ESCAPE_SEQUENCES[0x1B]='\\e';ESCAPE_SEQUENCES[0x22]='\\"';ESCAPE_SEQUENCES[0x5C]='\\\\';ESCAPE_SEQUENCES[0x85]='\\N';ESCAPE_SEQUENCES[0xA0]='\\_';ESCAPE_SEQUENCES[0x2028]='\\L';ESCAPE_SEQUENCES[0x2029]='\\P';var DEPRECATED_BOOLEANS_SYNTAX=['y','Y','yes','Yes','YES','on','On','ON','n','N','no','No','NO','off','Off','OFF'];function compileStyleMap(schema,map){var result,keys,index,length,tag,style,type;if(map===null)return{};result={};keys=Object.keys(map);for(index=0,length=keys.length;index<length;index+=1){tag=keys[index];style=String(map[tag]);if(tag.slice(0,2)==='!!'){tag='tag:yaml.org,2002:'+tag.slice(2);}type=schema.compiledTypeMap['fallback'][tag];if(type&&_hasOwnProperty.call(type.styleAliases,style)){style=type.styleAliases[style];}result[tag]=style;}return result;}function encodeHex(character){var string,handle,length;string=character.toString(16).toUpperCase();if(character<=0xFF){handle='x';length=2;}else if(character<=0xFFFF){handle='u';length=4;}else if(character<=0xFFFFFFFF){handle='U';length=8;}else{throw new YAMLException('code point within a string may not be greater than 0xFFFFFFFF');}return'\\'+handle+common.repeat('0',length-string.length)+string;}function State(options){this.schema=options['schema']||DEFAULT_FULL_SCHEMA;this.indent=Math.max(1,options['indent']||2);this.skipInvalid=options['skipInvalid']||false;this.flowLevel=common.isNothing(options['flowLevel'])?-1:options['flowLevel'];this.styleMap=compileStyleMap(this.schema,options['styles']||null);this.sortKeys=options['sortKeys']||false;this.lineWidth=options['lineWidth']||80;this.noRefs=options['noRefs']||false;this.noCompatMode=options['noCompatMode']||false;this.condenseFlow=options['condenseFlow']||false;this.implicitTypes=this.schema.compiledImplicit;this.explicitTypes=this.schema.compiledExplicit;this.tag=null;this.result='';this.duplicates=[];this.usedDuplicates=null;}// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string,spaces){var ind=common.repeat(' ',spaces),position=0,next=-1,result='',line,length=string.length;while(position<length){next=string.indexOf('\n',position);if(next===-1){line=string.slice(position);position=length;}else{line=string.slice(position,next+1);position=next+1;}if(line.length&&line!=='\n')result+=ind;result+=line;}return result;}function generateNextLine(state,level){return'\n'+common.repeat(' ',state.indent*level);}function testImplicitResolving(state,str){var index,length,type;for(index=0,length=state.implicitTypes.length;index<length;index+=1){type=state.implicitTypes[index];if(type.resolve(str)){return true;}}return false;}// [33] s-white ::= s-space | s-tab
function isWhitespace(c){return c===CHAR_SPACE||c===CHAR_TAB;}// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c){return 0x00020<=c&&c<=0x00007E||0x000A1<=c&&c<=0x00D7FF&&c!==0x2028&&c!==0x2029||0x0E000<=c&&c<=0x00FFFD&&c!==0xFEFF/* BOM */||0x10000<=c&&c<=0x10FFFF;}// Simplified test for values allowed after the first character in plain style.
function isPlainSafe(c){// Uses a subset of nb-char - c-flow-indicator - ":" - "#"
// where nb-char ::= c-printable - b-char - c-byte-order-mark.
return isPrintable(c)&&c!==0xFEFF// - c-flow-indicator
&&c!==CHAR_COMMA&&c!==CHAR_LEFT_SQUARE_BRACKET&&c!==CHAR_RIGHT_SQUARE_BRACKET&&c!==CHAR_LEFT_CURLY_BRACKET&&c!==CHAR_RIGHT_CURLY_BRACKET// - ":" - "#"
&&c!==CHAR_COLON&&c!==CHAR_SHARP;}// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c){// Uses a subset of ns-char - c-indicator
// where ns-char = nb-char - s-white.
return isPrintable(c)&&c!==0xFEFF&&!isWhitespace(c)// - s-white
// - (c-indicator ::=
// “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
&&c!==CHAR_MINUS&&c!==CHAR_QUESTION&&c!==CHAR_COLON&&c!==CHAR_COMMA&&c!==CHAR_LEFT_SQUARE_BRACKET&&c!==CHAR_RIGHT_SQUARE_BRACKET&&c!==CHAR_LEFT_CURLY_BRACKET&&c!==CHAR_RIGHT_CURLY_BRACKET// | “#” | “&” | “*” | “!” | “|” | “>” | “'” | “"”
&&c!==CHAR_SHARP&&c!==CHAR_AMPERSAND&&c!==CHAR_ASTERISK&&c!==CHAR_EXCLAMATION&&c!==CHAR_VERTICAL_LINE&&c!==CHAR_GREATER_THAN&&c!==CHAR_SINGLE_QUOTE&&c!==CHAR_DOUBLE_QUOTE// | “%” | “@” | “`”)
&&c!==CHAR_PERCENT&&c!==CHAR_COMMERCIAL_AT&&c!==CHAR_GRAVE_ACCENT;}// Determines whether block indentation indicator is required.
function needIndentIndicator(string){var leadingSpaceRe=/^\n* /;return leadingSpaceRe.test(string);}var STYLE_PLAIN=1,STYLE_SINGLE=2,STYLE_LITERAL=3,STYLE_FOLDED=4,STYLE_DOUBLE=5;// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string,singleLineOnly,indentPerLevel,lineWidth,testAmbiguousType){var i;var char;var hasLineBreak=false;var hasFoldableLine=false;// only checked if shouldTrackWidth
var shouldTrackWidth=lineWidth!==-1;var previousLineBreak=-1;// count the first line correctly
var plain=isPlainSafeFirst(string.charCodeAt(0))&&!isWhitespace(string.charCodeAt(string.length-1));if(singleLineOnly){// Case: no block styles.
// Check for disallowed characters to rule out plain and single.
for(i=0;i<string.length;i++){char=string.charCodeAt(i);if(!isPrintable(char)){return STYLE_DOUBLE;}plain=plain&&isPlainSafe(char);}}else{// Case: block styles permitted.
for(i=0;i<string.length;i++){char=string.charCodeAt(i);if(char===CHAR_LINE_FEED){hasLineBreak=true;// Check if any line can be folded.
if(shouldTrackWidth){hasFoldableLine=hasFoldableLine||// Foldable line = too long, and not more-indented.
i-previousLineBreak-1>lineWidth&&string[previousLineBreak+1]!==' ';previousLineBreak=i;}}else if(!isPrintable(char)){return STYLE_DOUBLE;}plain=plain&&isPlainSafe(char);}// in case the end is missing a \n
hasFoldableLine=hasFoldableLine||shouldTrackWidth&&i-previousLineBreak-1>lineWidth&&string[previousLineBreak+1]!==' ';}// Although every style can represent \n without escaping, prefer block styles
// for multiline, since they're more readable and they don't add empty lines.
// Also prefer folding a super-long line.
if(!hasLineBreak&&!hasFoldableLine){// Strings interpretable as another type have to be quoted;
// e.g. the string 'true' vs. the boolean true.
return plain&&!testAmbiguousType(string)?STYLE_PLAIN:STYLE_SINGLE;}// Edge case: block indentation indicator can only have one digit.
if(indentPerLevel>9&&needIndentIndicator(string)){return STYLE_DOUBLE;}// At this point we know block styles are valid.
// Prefer literal style unless we want to fold.
return hasFoldableLine?STYLE_FOLDED:STYLE_LITERAL;}// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state,string,level,iskey){state.dump=function(){if(string.length===0){return"''";}if(!state.noCompatMode&&DEPRECATED_BOOLEANS_SYNTAX.indexOf(string)!==-1){return"'"+string+"'";}var indent=state.indent*Math.max(1,level);// no 0-indent scalars
// As indentation gets deeper, let the width decrease monotonically
// to the lower bound min(state.lineWidth, 40).
// Note that this implies
//  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
//  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
// This behaves better than a constant minimum width which disallows narrower options,
// or an indent threshold which causes the width to suddenly increase.
var lineWidth=state.lineWidth===-1?-1:Math.max(Math.min(state.lineWidth,40),state.lineWidth-indent);// Without knowing if keys are implicit/explicit, assume implicit for safety.
var singleLineOnly=iskey// No block styles in flow mode.
||state.flowLevel>-1&&level>=state.flowLevel;function testAmbiguity(string){return testImplicitResolving(state,string);}switch(chooseScalarStyle(string,singleLineOnly,state.indent,lineWidth,testAmbiguity)){case STYLE_PLAIN:return string;case STYLE_SINGLE:return"'"+string.replace(/'/g,"''")+"'";case STYLE_LITERAL:return'|'+blockHeader(string,state.indent)+dropEndingNewline(indentString(string,indent));case STYLE_FOLDED:return'>'+blockHeader(string,state.indent)+dropEndingNewline(indentString(foldString(string,lineWidth),indent));case STYLE_DOUBLE:return'"'+escapeString(string,lineWidth)+'"';default:throw new YAMLException('impossible error: invalid scalar style');}}();}// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string,indentPerLevel){var indentIndicator=needIndentIndicator(string)?String(indentPerLevel):'';// note the special case: the string '\n' counts as a "trailing" empty line.
var clip=string[string.length-1]==='\n';var keep=clip&&(string[string.length-2]==='\n'||string==='\n');var chomp=keep?'+':clip?'':'-';return indentIndicator+chomp+'\n';}// (See the note for writeScalar.)
function dropEndingNewline(string){return string[string.length-1]==='\n'?string.slice(0,-1):string;}// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string,width){// In folded style, $k$ consecutive newlines output as $k+1$ newlines—
// unless they're before or after a more-indented line, or at the very
// beginning or end, in which case $k$ maps to $k$.
// Therefore, parse each chunk as newline(s) followed by a content line.
var lineRe=/(\n+)([^\n]*)/g;// first line (possibly an empty line)
var result=function(){var nextLF=string.indexOf('\n');nextLF=nextLF!==-1?nextLF:string.length;lineRe.lastIndex=nextLF;return foldLine(string.slice(0,nextLF),width);}();// If we haven't reached the first content line yet, don't add an extra \n.
var prevMoreIndented=string[0]==='\n'||string[0]===' ';var moreIndented;// rest of the lines
var match;while(match=lineRe.exec(string)){var prefix=match[1],line=match[2];moreIndented=line[0]===' ';result+=prefix+(!prevMoreIndented&&!moreIndented&&line!==''?'\n':'')+foldLine(line,width);prevMoreIndented=moreIndented;}return result;}// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line,width){if(line===''||line[0]===' ')return line;// Since a more-indented line adds a \n, breaks can't be followed by a space.
var breakRe=/ [^ ]/g;// note: the match index will always be <= length-2.
var match;// start is an inclusive index. end, curr, and next are exclusive.
var start=0,end,curr=0,next=0;var result='';// Invariants: 0 <= start <= length-1.
//   0 <= curr <= next <= max(0, length-2). curr - start <= width.
// Inside the loop:
//   A match implies length >= 2, so curr and next are <= length-2.
while(match=breakRe.exec(line)){next=match.index;// maintain invariant: curr - start <= width
if(next-start>width){end=curr>start?curr:next;// derive end <= length-2
result+='\n'+line.slice(start,end);// skip the space that was output as \n
start=end+1;// derive start <= length-1
}curr=next;}// By the invariants, start <= length-1, so there is something left over.
// It is either the whole string or a part starting from non-whitespace.
result+='\n';// Insert a break if the remainder is too long and there is a break available.
if(line.length-start>width&&curr>start){result+=line.slice(start,curr)+'\n'+line.slice(curr+1);}else{result+=line.slice(start);}return result.slice(1);// drop extra \n joiner
}// Escapes a double-quoted string.
function escapeString(string){var result='';var char,nextChar;var escapeSeq;for(var i=0;i<string.length;i++){char=string.charCodeAt(i);// Check for surrogate pairs (reference Unicode 3.0 section "3.7 Surrogates").
if(char>=0xD800&&char<=0xDBFF/* high surrogate */){nextChar=string.charCodeAt(i+1);if(nextChar>=0xDC00&&nextChar<=0xDFFF/* low surrogate */){// Combine the surrogate pair and store it escaped.
result+=encodeHex((char-0xD800)*0x400+nextChar-0xDC00+0x10000);// Advance index one extra since we already used that char here.
i++;continue;}}escapeSeq=ESCAPE_SEQUENCES[char];result+=!escapeSeq&&isPrintable(char)?string[i]:escapeSeq||encodeHex(char);}return result;}function writeFlowSequence(state,level,object){var _result='',_tag=state.tag,index,length;for(index=0,length=object.length;index<length;index+=1){// Write only valid elements.
if(writeNode(state,level,object[index],false,false)){if(index!==0)_result+=','+(!state.condenseFlow?' ':'');_result+=state.dump;}}state.tag=_tag;state.dump='['+_result+']';}function writeBlockSequence(state,level,object,compact){var _result='',_tag=state.tag,index,length;for(index=0,length=object.length;index<length;index+=1){// Write only valid elements.
if(writeNode(state,level+1,object[index],true,true)){if(!compact||index!==0){_result+=generateNextLine(state,level);}if(state.dump&&CHAR_LINE_FEED===state.dump.charCodeAt(0)){_result+='-';}else{_result+='- ';}_result+=state.dump;}}state.tag=_tag;state.dump=_result||'[]';// Empty sequence if no valid values.
}function writeFlowMapping(state,level,object){var _result='',_tag=state.tag,objectKeyList=Object.keys(object),index,length,objectKey,objectValue,pairBuffer;for(index=0,length=objectKeyList.length;index<length;index+=1){pairBuffer=state.condenseFlow?'"':'';if(index!==0)pairBuffer+=', ';objectKey=objectKeyList[index];objectValue=object[objectKey];if(!writeNode(state,level,objectKey,false,false)){continue;// Skip this pair because of invalid key;
}if(state.dump.length>1024)pairBuffer+='? ';pairBuffer+=state.dump+(state.condenseFlow?'"':'')+':'+(state.condenseFlow?'':' ');if(!writeNode(state,level,objectValue,false,false)){continue;// Skip this pair because of invalid value.
}pairBuffer+=state.dump;// Both key and value are valid.
_result+=pairBuffer;}state.tag=_tag;state.dump='{'+_result+'}';}function writeBlockMapping(state,level,object,compact){var _result='',_tag=state.tag,objectKeyList=Object.keys(object),index,length,objectKey,objectValue,explicitPair,pairBuffer;// Allow sorting keys so that the output file is deterministic
if(state.sortKeys===true){// Default sorting
objectKeyList.sort();}else if(typeof state.sortKeys==='function'){// Custom sort function
objectKeyList.sort(state.sortKeys);}else if(state.sortKeys){// Something is wrong
throw new YAMLException('sortKeys must be a boolean or a function');}for(index=0,length=objectKeyList.length;index<length;index+=1){pairBuffer='';if(!compact||index!==0){pairBuffer+=generateNextLine(state,level);}objectKey=objectKeyList[index];objectValue=object[objectKey];if(!writeNode(state,level+1,objectKey,true,true,true)){continue;// Skip this pair because of invalid key.
}explicitPair=state.tag!==null&&state.tag!=='?'||state.dump&&state.dump.length>1024;if(explicitPair){if(state.dump&&CHAR_LINE_FEED===state.dump.charCodeAt(0)){pairBuffer+='?';}else{pairBuffer+='? ';}}pairBuffer+=state.dump;if(explicitPair){pairBuffer+=generateNextLine(state,level);}if(!writeNode(state,level+1,objectValue,true,explicitPair)){continue;// Skip this pair because of invalid value.
}if(state.dump&&CHAR_LINE_FEED===state.dump.charCodeAt(0)){pairBuffer+=':';}else{pairBuffer+=': ';}pairBuffer+=state.dump;// Both key and value are valid.
_result+=pairBuffer;}state.tag=_tag;state.dump=_result||'{}';// Empty mapping if no valid pairs.
}function detectType(state,object,explicit){var _result,typeList,index,length,type,style;typeList=explicit?state.explicitTypes:state.implicitTypes;for(index=0,length=typeList.length;index<length;index+=1){type=typeList[index];if((type.instanceOf||type.predicate)&&(!type.instanceOf||(typeof object==="undefined"?"undefined":_typeof2(object))==='object'&&object instanceof type.instanceOf)&&(!type.predicate||type.predicate(object))){state.tag=explicit?type.tag:'?';if(type.represent){style=state.styleMap[type.tag]||type.defaultStyle;if(_toString.call(type.represent)==='[object Function]'){_result=type.represent(object,style);}else if(_hasOwnProperty.call(type.represent,style)){_result=type.represent[style](object,style);}else{throw new YAMLException('!<'+type.tag+'> tag resolver accepts not "'+style+'" style');}state.dump=_result;}return true;}}return false;}// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state,level,object,block,compact,iskey){state.tag=null;state.dump=object;if(!detectType(state,object,false)){detectType(state,object,true);}var type=_toString.call(state.dump);if(block){block=state.flowLevel<0||state.flowLevel>level;}var objectOrArray=type==='[object Object]'||type==='[object Array]',duplicateIndex,duplicate;if(objectOrArray){duplicateIndex=state.duplicates.indexOf(object);duplicate=duplicateIndex!==-1;}if(state.tag!==null&&state.tag!=='?'||duplicate||state.indent!==2&&level>0){compact=false;}if(duplicate&&state.usedDuplicates[duplicateIndex]){state.dump='*ref_'+duplicateIndex;}else{if(objectOrArray&&duplicate&&!state.usedDuplicates[duplicateIndex]){state.usedDuplicates[duplicateIndex]=true;}if(type==='[object Object]'){if(block&&Object.keys(state.dump).length!==0){writeBlockMapping(state,level,state.dump,compact);if(duplicate){state.dump='&ref_'+duplicateIndex+state.dump;}}else{writeFlowMapping(state,level,state.dump);if(duplicate){state.dump='&ref_'+duplicateIndex+' '+state.dump;}}}else if(type==='[object Array]'){if(block&&state.dump.length!==0){writeBlockSequence(state,level,state.dump,compact);if(duplicate){state.dump='&ref_'+duplicateIndex+state.dump;}}else{writeFlowSequence(state,level,state.dump);if(duplicate){state.dump='&ref_'+duplicateIndex+' '+state.dump;}}}else if(type==='[object String]'){if(state.tag!=='?'){writeScalar(state,state.dump,level,iskey);}}else{if(state.skipInvalid)return false;throw new YAMLException('unacceptable kind of an object to dump '+type);}if(state.tag!==null&&state.tag!=='?'){state.dump='!<'+state.tag+'> '+state.dump;}}return true;}function getDuplicateReferences(object,state){var objects=[],duplicatesIndexes=[],index,length;inspectNode(object,objects,duplicatesIndexes);for(index=0,length=duplicatesIndexes.length;index<length;index+=1){state.duplicates.push(objects[duplicatesIndexes[index]]);}state.usedDuplicates=new Array(length);}function inspectNode(object,objects,duplicatesIndexes){var objectKeyList,index,length;if(object!==null&&(typeof object==="undefined"?"undefined":_typeof2(object))==='object'){index=objects.indexOf(object);if(index!==-1){if(duplicatesIndexes.indexOf(index)===-1){duplicatesIndexes.push(index);}}else{objects.push(object);if(Array.isArray(object)){for(index=0,length=object.length;index<length;index+=1){inspectNode(object[index],objects,duplicatesIndexes);}}else{objectKeyList=Object.keys(object);for(index=0,length=objectKeyList.length;index<length;index+=1){inspectNode(object[objectKeyList[index]],objects,duplicatesIndexes);}}}}}function dump(input,options){options=options||{};var state=new State(options);if(!state.noRefs)getDuplicateReferences(input,state);if(writeNode(state,0,input,true,true))return state.dump+'\n';return'';}function safeDump(input,options){return dump(input,common.extend({schema:DEFAULT_SAFE_SCHEMA},options));}module.exports.dump=dump;module.exports.safeDump=safeDump;},{"./common":19,"./exception":21,"./schema/default_full":26,"./schema/default_safe":27}],21:[function(require,module,exports){// YAML error class. http://stackoverflow.com/questions/8458984
//
'use strict';function YAMLException(reason,mark){// Super constructor
Error.call(this);this.name='YAMLException';this.reason=reason;this.mark=mark;this.message=(this.reason||'(unknown reason)')+(this.mark?' '+this.mark.toString():'');// Include stack trace in error object
if(Error.captureStackTrace){// Chrome and NodeJS
Error.captureStackTrace(this,this.constructor);}else{// FF, IE 10+ and Safari 6+. Fallback for others
this.stack=new Error().stack||'';}}// Inherit from Error
YAMLException.prototype=Object.create(Error.prototype);YAMLException.prototype.constructor=YAMLException;YAMLException.prototype.toString=function toString(compact){var result=this.name+': ';result+=this.reason||'(unknown reason)';if(!compact&&this.mark){result+=' '+this.mark.toString();}return result;};module.exports=YAMLException;},{}],22:[function(require,module,exports){'use strict';/*eslint-disable max-len,no-use-before-define*/var common=require('./common');var YAMLException=require('./exception');var Mark=require('./mark');var DEFAULT_SAFE_SCHEMA=require('./schema/default_safe');var DEFAULT_FULL_SCHEMA=require('./schema/default_full');var _hasOwnProperty=Object.prototype.hasOwnProperty;var CONTEXT_FLOW_IN=1;var CONTEXT_FLOW_OUT=2;var CONTEXT_BLOCK_IN=3;var CONTEXT_BLOCK_OUT=4;var CHOMPING_CLIP=1;var CHOMPING_STRIP=2;var CHOMPING_KEEP=3;var PATTERN_NON_PRINTABLE=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;var PATTERN_NON_ASCII_LINE_BREAKS=/[\x85\u2028\u2029]/;var PATTERN_FLOW_INDICATORS=/[,\[\]\{\}]/;var PATTERN_TAG_HANDLE=/^(?:!|!!|![a-z\-]+!)$/i;var PATTERN_TAG_URI=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function is_EOL(c){return c===0x0A/* LF */||c===0x0D/* CR */;}function is_WHITE_SPACE(c){return c===0x09/* Tab */||c===0x20/* Space */;}function is_WS_OR_EOL(c){return c===0x09/* Tab */||c===0x20/* Space */||c===0x0A/* LF */||c===0x0D/* CR */;}function is_FLOW_INDICATOR(c){return c===0x2C/* , */||c===0x5B/* [ */||c===0x5D/* ] */||c===0x7B/* { */||c===0x7D/* } */;}function fromHexCode(c){var lc;if(0x30/* 0 */<=c&&c<=0x39/* 9 */){return c-0x30;}/*eslint-disable no-bitwise*/lc=c|0x20;if(0x61/* a */<=lc&&lc<=0x66/* f */){return lc-0x61+10;}return-1;}function escapedHexLen(c){if(c===0x78/* x */){return 2;}if(c===0x75/* u */){return 4;}if(c===0x55/* U */){return 8;}return 0;}function fromDecimalCode(c){if(0x30/* 0 */<=c&&c<=0x39/* 9 */){return c-0x30;}return-1;}function simpleEscapeSequence(c){/* eslint-disable indent */return c===0x30/* 0 */?'\x00':c===0x61/* a */?'\x07':c===0x62/* b */?'\x08':c===0x74/* t */?'\x09':c===0x09/* Tab */?'\x09':c===0x6E/* n */?'\x0A':c===0x76/* v */?'\x0B':c===0x66/* f */?'\x0C':c===0x72/* r */?'\x0D':c===0x65/* e */?'\x1B':c===0x20/* Space */?' ':c===0x22/* " */?'\x22':c===0x2F/* / */?'/':c===0x5C/* \ */?'\x5C':c===0x4E/* N */?'\x85':c===0x5F/* _ */?'\xA0':c===0x4C/* L */?"\u2028":c===0x50/* P */?"\u2029":'';}function charFromCodepoint(c){if(c<=0xFFFF){return String.fromCharCode(c);}// Encode UTF-16 surrogate pair
// https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
return String.fromCharCode((c-0x010000>>10)+0xD800,(c-0x010000&0x03FF)+0xDC00);}var simpleEscapeCheck=new Array(256);// integer, for fast access
var simpleEscapeMap=new Array(256);for(var i=0;i<256;i++){simpleEscapeCheck[i]=simpleEscapeSequence(i)?1:0;simpleEscapeMap[i]=simpleEscapeSequence(i);}function State(input,options){this.input=input;this.filename=options['filename']||null;this.schema=options['schema']||DEFAULT_FULL_SCHEMA;this.onWarning=options['onWarning']||null;this.legacy=options['legacy']||false;this.json=options['json']||false;this.listener=options['listener']||null;this.implicitTypes=this.schema.compiledImplicit;this.typeMap=this.schema.compiledTypeMap;this.length=input.length;this.position=0;this.line=0;this.lineStart=0;this.lineIndent=0;this.documents=[];/*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/}function generateError(state,message){return new YAMLException(message,new Mark(state.filename,state.input,state.position,state.line,state.position-state.lineStart));}function throwError(state,message){throw generateError(state,message);}function throwWarning(state,message){if(state.onWarning){state.onWarning.call(null,generateError(state,message));}}var directiveHandlers={YAML:function handleYamlDirective(state,name,args){var match,major,minor;if(state.version!==null){throwError(state,'duplication of %YAML directive');}if(args.length!==1){throwError(state,'YAML directive accepts exactly one argument');}match=/^([0-9]+)\.([0-9]+)$/.exec(args[0]);if(match===null){throwError(state,'ill-formed argument of the YAML directive');}major=parseInt(match[1],10);minor=parseInt(match[2],10);if(major!==1){throwError(state,'unacceptable YAML version of the document');}state.version=args[0];state.checkLineBreaks=minor<2;if(minor!==1&&minor!==2){throwWarning(state,'unsupported YAML version of the document');}},TAG:function handleTagDirective(state,name,args){var handle,prefix;if(args.length!==2){throwError(state,'TAG directive accepts exactly two arguments');}handle=args[0];prefix=args[1];if(!PATTERN_TAG_HANDLE.test(handle)){throwError(state,'ill-formed tag handle (first argument) of the TAG directive');}if(_hasOwnProperty.call(state.tagMap,handle)){throwError(state,'there is a previously declared suffix for "'+handle+'" tag handle');}if(!PATTERN_TAG_URI.test(prefix)){throwError(state,'ill-formed tag prefix (second argument) of the TAG directive');}state.tagMap[handle]=prefix;}};function captureSegment(state,start,end,checkJson){var _position,_length,_character,_result;if(start<end){_result=state.input.slice(start,end);if(checkJson){for(_position=0,_length=_result.length;_position<_length;_position+=1){_character=_result.charCodeAt(_position);if(!(_character===0x09||0x20<=_character&&_character<=0x10FFFF)){throwError(state,'expected valid JSON character');}}}else if(PATTERN_NON_PRINTABLE.test(_result)){throwError(state,'the stream contains non-printable characters');}state.result+=_result;}}function mergeMappings(state,destination,source,overridableKeys){var sourceKeys,key,index,quantity;if(!common.isObject(source)){throwError(state,'cannot merge mappings; the provided source object is unacceptable');}sourceKeys=Object.keys(source);for(index=0,quantity=sourceKeys.length;index<quantity;index+=1){key=sourceKeys[index];if(!_hasOwnProperty.call(destination,key)){destination[key]=source[key];overridableKeys[key]=true;}}}function storeMappingPair(state,_result,overridableKeys,keyTag,keyNode,valueNode,startLine,startPos){var index,quantity;keyNode=String(keyNode);if(_result===null){_result={};}if(keyTag==='tag:yaml.org,2002:merge'){if(Array.isArray(valueNode)){for(index=0,quantity=valueNode.length;index<quantity;index+=1){mergeMappings(state,_result,valueNode[index],overridableKeys);}}else{mergeMappings(state,_result,valueNode,overridableKeys);}}else{if(!state.json&&!_hasOwnProperty.call(overridableKeys,keyNode)&&_hasOwnProperty.call(_result,keyNode)){state.line=startLine||state.line;state.position=startPos||state.position;throwError(state,'duplicated mapping key');}_result[keyNode]=valueNode;delete overridableKeys[keyNode];}return _result;}function readLineBreak(state){var ch;ch=state.input.charCodeAt(state.position);if(ch===0x0A/* LF */){state.position++;}else if(ch===0x0D/* CR */){state.position++;if(state.input.charCodeAt(state.position)===0x0A/* LF */){state.position++;}}else{throwError(state,'a line break is expected');}state.line+=1;state.lineStart=state.position;}function skipSeparationSpace(state,allowComments,checkIndent){var lineBreaks=0,ch=state.input.charCodeAt(state.position);while(ch!==0){while(is_WHITE_SPACE(ch)){ch=state.input.charCodeAt(++state.position);}if(allowComments&&ch===0x23/* # */){do{ch=state.input.charCodeAt(++state.position);}while(ch!==0x0A/* LF */&&ch!==0x0D/* CR */&&ch!==0);}if(is_EOL(ch)){readLineBreak(state);ch=state.input.charCodeAt(state.position);lineBreaks++;state.lineIndent=0;while(ch===0x20/* Space */){state.lineIndent++;ch=state.input.charCodeAt(++state.position);}}else{break;}}if(checkIndent!==-1&&lineBreaks!==0&&state.lineIndent<checkIndent){throwWarning(state,'deficient indentation');}return lineBreaks;}function testDocumentSeparator(state){var _position=state.position,ch;ch=state.input.charCodeAt(_position);// Condition state.position === state.lineStart is tested
// in parent on each call, for efficiency. No needs to test here again.
if((ch===0x2D/* - */||ch===0x2E/* . */)&&ch===state.input.charCodeAt(_position+1)&&ch===state.input.charCodeAt(_position+2)){_position+=3;ch=state.input.charCodeAt(_position);if(ch===0||is_WS_OR_EOL(ch)){return true;}}return false;}function writeFoldedLines(state,count){if(count===1){state.result+=' ';}else if(count>1){state.result+=common.repeat('\n',count-1);}}function readPlainScalar(state,nodeIndent,withinFlowCollection){var preceding,following,captureStart,captureEnd,hasPendingContent,_line,_lineStart,_lineIndent,_kind=state.kind,_result=state.result,ch;ch=state.input.charCodeAt(state.position);if(is_WS_OR_EOL(ch)||is_FLOW_INDICATOR(ch)||ch===0x23/* # */||ch===0x26/* & */||ch===0x2A/* * */||ch===0x21/* ! */||ch===0x7C/* | */||ch===0x3E/* > */||ch===0x27/* ' */||ch===0x22/* " */||ch===0x25/* % */||ch===0x40/* @ */||ch===0x60/* ` */){return false;}if(ch===0x3F/* ? */||ch===0x2D/* - */){following=state.input.charCodeAt(state.position+1);if(is_WS_OR_EOL(following)||withinFlowCollection&&is_FLOW_INDICATOR(following)){return false;}}state.kind='scalar';state.result='';captureStart=captureEnd=state.position;hasPendingContent=false;while(ch!==0){if(ch===0x3A/* : */){following=state.input.charCodeAt(state.position+1);if(is_WS_OR_EOL(following)||withinFlowCollection&&is_FLOW_INDICATOR(following)){break;}}else if(ch===0x23/* # */){preceding=state.input.charCodeAt(state.position-1);if(is_WS_OR_EOL(preceding)){break;}}else if(state.position===state.lineStart&&testDocumentSeparator(state)||withinFlowCollection&&is_FLOW_INDICATOR(ch)){break;}else if(is_EOL(ch)){_line=state.line;_lineStart=state.lineStart;_lineIndent=state.lineIndent;skipSeparationSpace(state,false,-1);if(state.lineIndent>=nodeIndent){hasPendingContent=true;ch=state.input.charCodeAt(state.position);continue;}else{state.position=captureEnd;state.line=_line;state.lineStart=_lineStart;state.lineIndent=_lineIndent;break;}}if(hasPendingContent){captureSegment(state,captureStart,captureEnd,false);writeFoldedLines(state,state.line-_line);captureStart=captureEnd=state.position;hasPendingContent=false;}if(!is_WHITE_SPACE(ch)){captureEnd=state.position+1;}ch=state.input.charCodeAt(++state.position);}captureSegment(state,captureStart,captureEnd,false);if(state.result){return true;}state.kind=_kind;state.result=_result;return false;}function readSingleQuotedScalar(state,nodeIndent){var ch,captureStart,captureEnd;ch=state.input.charCodeAt(state.position);if(ch!==0x27/* ' */){return false;}state.kind='scalar';state.result='';state.position++;captureStart=captureEnd=state.position;while((ch=state.input.charCodeAt(state.position))!==0){if(ch===0x27/* ' */){captureSegment(state,captureStart,state.position,true);ch=state.input.charCodeAt(++state.position);if(ch===0x27/* ' */){captureStart=state.position;state.position++;captureEnd=state.position;}else{return true;}}else if(is_EOL(ch)){captureSegment(state,captureStart,captureEnd,true);writeFoldedLines(state,skipSeparationSpace(state,false,nodeIndent));captureStart=captureEnd=state.position;}else if(state.position===state.lineStart&&testDocumentSeparator(state)){throwError(state,'unexpected end of the document within a single quoted scalar');}else{state.position++;captureEnd=state.position;}}throwError(state,'unexpected end of the stream within a single quoted scalar');}function readDoubleQuotedScalar(state,nodeIndent){var captureStart,captureEnd,hexLength,hexResult,tmp,ch;ch=state.input.charCodeAt(state.position);if(ch!==0x22/* " */){return false;}state.kind='scalar';state.result='';state.position++;captureStart=captureEnd=state.position;while((ch=state.input.charCodeAt(state.position))!==0){if(ch===0x22/* " */){captureSegment(state,captureStart,state.position,true);state.position++;return true;}else if(ch===0x5C/* \ */){captureSegment(state,captureStart,state.position,true);ch=state.input.charCodeAt(++state.position);if(is_EOL(ch)){skipSeparationSpace(state,false,nodeIndent);// TODO: rework to inline fn with no type cast?
}else if(ch<256&&simpleEscapeCheck[ch]){state.result+=simpleEscapeMap[ch];state.position++;}else if((tmp=escapedHexLen(ch))>0){hexLength=tmp;hexResult=0;for(;hexLength>0;hexLength--){ch=state.input.charCodeAt(++state.position);if((tmp=fromHexCode(ch))>=0){hexResult=(hexResult<<4)+tmp;}else{throwError(state,'expected hexadecimal character');}}state.result+=charFromCodepoint(hexResult);state.position++;}else{throwError(state,'unknown escape sequence');}captureStart=captureEnd=state.position;}else if(is_EOL(ch)){captureSegment(state,captureStart,captureEnd,true);writeFoldedLines(state,skipSeparationSpace(state,false,nodeIndent));captureStart=captureEnd=state.position;}else if(state.position===state.lineStart&&testDocumentSeparator(state)){throwError(state,'unexpected end of the document within a double quoted scalar');}else{state.position++;captureEnd=state.position;}}throwError(state,'unexpected end of the stream within a double quoted scalar');}function readFlowCollection(state,nodeIndent){var readNext=true,_line,_tag=state.tag,_result,_anchor=state.anchor,following,terminator,isPair,isExplicitPair,isMapping,overridableKeys={},keyNode,keyTag,valueNode,ch;ch=state.input.charCodeAt(state.position);if(ch===0x5B/* [ */){terminator=0x5D;/* ] */isMapping=false;_result=[];}else if(ch===0x7B/* { */){terminator=0x7D;/* } */isMapping=true;_result={};}else{return false;}if(state.anchor!==null){state.anchorMap[state.anchor]=_result;}ch=state.input.charCodeAt(++state.position);while(ch!==0){skipSeparationSpace(state,true,nodeIndent);ch=state.input.charCodeAt(state.position);if(ch===terminator){state.position++;state.tag=_tag;state.anchor=_anchor;state.kind=isMapping?'mapping':'sequence';state.result=_result;return true;}else if(!readNext){throwError(state,'missed comma between flow collection entries');}keyTag=keyNode=valueNode=null;isPair=isExplicitPair=false;if(ch===0x3F/* ? */){following=state.input.charCodeAt(state.position+1);if(is_WS_OR_EOL(following)){isPair=isExplicitPair=true;state.position++;skipSeparationSpace(state,true,nodeIndent);}}_line=state.line;composeNode(state,nodeIndent,CONTEXT_FLOW_IN,false,true);keyTag=state.tag;keyNode=state.result;skipSeparationSpace(state,true,nodeIndent);ch=state.input.charCodeAt(state.position);if((isExplicitPair||state.line===_line)&&ch===0x3A/* : */){isPair=true;ch=state.input.charCodeAt(++state.position);skipSeparationSpace(state,true,nodeIndent);composeNode(state,nodeIndent,CONTEXT_FLOW_IN,false,true);valueNode=state.result;}if(isMapping){storeMappingPair(state,_result,overridableKeys,keyTag,keyNode,valueNode);}else if(isPair){_result.push(storeMappingPair(state,null,overridableKeys,keyTag,keyNode,valueNode));}else{_result.push(keyNode);}skipSeparationSpace(state,true,nodeIndent);ch=state.input.charCodeAt(state.position);if(ch===0x2C/* , */){readNext=true;ch=state.input.charCodeAt(++state.position);}else{readNext=false;}}throwError(state,'unexpected end of the stream within a flow collection');}function readBlockScalar(state,nodeIndent){var captureStart,folding,chomping=CHOMPING_CLIP,didReadContent=false,detectedIndent=false,textIndent=nodeIndent,emptyLines=0,atMoreIndented=false,tmp,ch;ch=state.input.charCodeAt(state.position);if(ch===0x7C/* | */){folding=false;}else if(ch===0x3E/* > */){folding=true;}else{return false;}state.kind='scalar';state.result='';while(ch!==0){ch=state.input.charCodeAt(++state.position);if(ch===0x2B/* + */||ch===0x2D/* - */){if(CHOMPING_CLIP===chomping){chomping=ch===0x2B/* + */?CHOMPING_KEEP:CHOMPING_STRIP;}else{throwError(state,'repeat of a chomping mode identifier');}}else if((tmp=fromDecimalCode(ch))>=0){if(tmp===0){throwError(state,'bad explicit indentation width of a block scalar; it cannot be less than one');}else if(!detectedIndent){textIndent=nodeIndent+tmp-1;detectedIndent=true;}else{throwError(state,'repeat of an indentation width identifier');}}else{break;}}if(is_WHITE_SPACE(ch)){do{ch=state.input.charCodeAt(++state.position);}while(is_WHITE_SPACE(ch));if(ch===0x23/* # */){do{ch=state.input.charCodeAt(++state.position);}while(!is_EOL(ch)&&ch!==0);}}while(ch!==0){readLineBreak(state);state.lineIndent=0;ch=state.input.charCodeAt(state.position);while((!detectedIndent||state.lineIndent<textIndent)&&ch===0x20/* Space */){state.lineIndent++;ch=state.input.charCodeAt(++state.position);}if(!detectedIndent&&state.lineIndent>textIndent){textIndent=state.lineIndent;}if(is_EOL(ch)){emptyLines++;continue;}// End of the scalar.
if(state.lineIndent<textIndent){// Perform the chomping.
if(chomping===CHOMPING_KEEP){state.result+=common.repeat('\n',didReadContent?1+emptyLines:emptyLines);}else if(chomping===CHOMPING_CLIP){if(didReadContent){// i.e. only if the scalar is not empty.
state.result+='\n';}}// Break this `while` cycle and go to the funciton's epilogue.
break;}// Folded style: use fancy rules to handle line breaks.
if(folding){// Lines starting with white space characters (more-indented lines) are not folded.
if(is_WHITE_SPACE(ch)){atMoreIndented=true;// except for the first content line (cf. Example 8.1)
state.result+=common.repeat('\n',didReadContent?1+emptyLines:emptyLines);// End of more-indented block.
}else if(atMoreIndented){atMoreIndented=false;state.result+=common.repeat('\n',emptyLines+1);// Just one line break - perceive as the same line.
}else if(emptyLines===0){if(didReadContent){// i.e. only if we have already read some scalar content.
state.result+=' ';}// Several line breaks - perceive as different lines.
}else{state.result+=common.repeat('\n',emptyLines);}// Literal style: just add exact number of line breaks between content lines.
}else{// Keep all line breaks except the header line break.
state.result+=common.repeat('\n',didReadContent?1+emptyLines:emptyLines);}didReadContent=true;detectedIndent=true;emptyLines=0;captureStart=state.position;while(!is_EOL(ch)&&ch!==0){ch=state.input.charCodeAt(++state.position);}captureSegment(state,captureStart,state.position,false);}return true;}function readBlockSequence(state,nodeIndent){var _line,_tag=state.tag,_anchor=state.anchor,_result=[],following,detected=false,ch;if(state.anchor!==null){state.anchorMap[state.anchor]=_result;}ch=state.input.charCodeAt(state.position);while(ch!==0){if(ch!==0x2D/* - */){break;}following=state.input.charCodeAt(state.position+1);if(!is_WS_OR_EOL(following)){break;}detected=true;state.position++;if(skipSeparationSpace(state,true,-1)){if(state.lineIndent<=nodeIndent){_result.push(null);ch=state.input.charCodeAt(state.position);continue;}}_line=state.line;composeNode(state,nodeIndent,CONTEXT_BLOCK_IN,false,true);_result.push(state.result);skipSeparationSpace(state,true,-1);ch=state.input.charCodeAt(state.position);if((state.line===_line||state.lineIndent>nodeIndent)&&ch!==0){throwError(state,'bad indentation of a sequence entry');}else if(state.lineIndent<nodeIndent){break;}}if(detected){state.tag=_tag;state.anchor=_anchor;state.kind='sequence';state.result=_result;return true;}return false;}function readBlockMapping(state,nodeIndent,flowIndent){var following,allowCompact,_line,_pos,_tag=state.tag,_anchor=state.anchor,_result={},overridableKeys={},keyTag=null,keyNode=null,valueNode=null,atExplicitKey=false,detected=false,ch;if(state.anchor!==null){state.anchorMap[state.anchor]=_result;}ch=state.input.charCodeAt(state.position);while(ch!==0){following=state.input.charCodeAt(state.position+1);_line=state.line;// Save the current line.
_pos=state.position;//
// Explicit notation case. There are two separate blocks:
// first for the key (denoted by "?") and second for the value (denoted by ":")
//
if((ch===0x3F/* ? */||ch===0x3A/* : */)&&is_WS_OR_EOL(following)){if(ch===0x3F/* ? */){if(atExplicitKey){storeMappingPair(state,_result,overridableKeys,keyTag,keyNode,null);keyTag=keyNode=valueNode=null;}detected=true;atExplicitKey=true;allowCompact=true;}else if(atExplicitKey){// i.e. 0x3A/* : */ === character after the explicit key.
atExplicitKey=false;allowCompact=true;}else{throwError(state,'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');}state.position+=1;ch=following;//
// Implicit notation case. Flow-style node as the key first, then ":", and the value.
//
}else if(composeNode(state,flowIndent,CONTEXT_FLOW_OUT,false,true)){if(state.line===_line){ch=state.input.charCodeAt(state.position);while(is_WHITE_SPACE(ch)){ch=state.input.charCodeAt(++state.position);}if(ch===0x3A/* : */){ch=state.input.charCodeAt(++state.position);if(!is_WS_OR_EOL(ch)){throwError(state,'a whitespace character is expected after the key-value separator within a block mapping');}if(atExplicitKey){storeMappingPair(state,_result,overridableKeys,keyTag,keyNode,null);keyTag=keyNode=valueNode=null;}detected=true;atExplicitKey=false;allowCompact=false;keyTag=state.tag;keyNode=state.result;}else if(detected){throwError(state,'can not read an implicit mapping pair; a colon is missed');}else{state.tag=_tag;state.anchor=_anchor;return true;// Keep the result of `composeNode`.
}}else if(detected){throwError(state,'can not read a block mapping entry; a multiline key may not be an implicit key');}else{state.tag=_tag;state.anchor=_anchor;return true;// Keep the result of `composeNode`.
}}else{break;// Reading is done. Go to the epilogue.
}//
// Common reading code for both explicit and implicit notations.
//
if(state.line===_line||state.lineIndent>nodeIndent){if(composeNode(state,nodeIndent,CONTEXT_BLOCK_OUT,true,allowCompact)){if(atExplicitKey){keyNode=state.result;}else{valueNode=state.result;}}if(!atExplicitKey){storeMappingPair(state,_result,overridableKeys,keyTag,keyNode,valueNode,_line,_pos);keyTag=keyNode=valueNode=null;}skipSeparationSpace(state,true,-1);ch=state.input.charCodeAt(state.position);}if(state.lineIndent>nodeIndent&&ch!==0){throwError(state,'bad indentation of a mapping entry');}else if(state.lineIndent<nodeIndent){break;}}//
// Epilogue.
//
// Special case: last mapping's node contains only the key in explicit notation.
if(atExplicitKey){storeMappingPair(state,_result,overridableKeys,keyTag,keyNode,null);}// Expose the resulting mapping.
if(detected){state.tag=_tag;state.anchor=_anchor;state.kind='mapping';state.result=_result;}return detected;}function readTagProperty(state){var _position,isVerbatim=false,isNamed=false,tagHandle,tagName,ch;ch=state.input.charCodeAt(state.position);if(ch!==0x21/* ! */)return false;if(state.tag!==null){throwError(state,'duplication of a tag property');}ch=state.input.charCodeAt(++state.position);if(ch===0x3C/* < */){isVerbatim=true;ch=state.input.charCodeAt(++state.position);}else if(ch===0x21/* ! */){isNamed=true;tagHandle='!!';ch=state.input.charCodeAt(++state.position);}else{tagHandle='!';}_position=state.position;if(isVerbatim){do{ch=state.input.charCodeAt(++state.position);}while(ch!==0&&ch!==0x3E/* > */);if(state.position<state.length){tagName=state.input.slice(_position,state.position);ch=state.input.charCodeAt(++state.position);}else{throwError(state,'unexpected end of the stream within a verbatim tag');}}else{while(ch!==0&&!is_WS_OR_EOL(ch)){if(ch===0x21/* ! */){if(!isNamed){tagHandle=state.input.slice(_position-1,state.position+1);if(!PATTERN_TAG_HANDLE.test(tagHandle)){throwError(state,'named tag handle cannot contain such characters');}isNamed=true;_position=state.position+1;}else{throwError(state,'tag suffix cannot contain exclamation marks');}}ch=state.input.charCodeAt(++state.position);}tagName=state.input.slice(_position,state.position);if(PATTERN_FLOW_INDICATORS.test(tagName)){throwError(state,'tag suffix cannot contain flow indicator characters');}}if(tagName&&!PATTERN_TAG_URI.test(tagName)){throwError(state,'tag name cannot contain such characters: '+tagName);}if(isVerbatim){state.tag=tagName;}else if(_hasOwnProperty.call(state.tagMap,tagHandle)){state.tag=state.tagMap[tagHandle]+tagName;}else if(tagHandle==='!'){state.tag='!'+tagName;}else if(tagHandle==='!!'){state.tag='tag:yaml.org,2002:'+tagName;}else{throwError(state,'undeclared tag handle "'+tagHandle+'"');}return true;}function readAnchorProperty(state){var _position,ch;ch=state.input.charCodeAt(state.position);if(ch!==0x26/* & */)return false;if(state.anchor!==null){throwError(state,'duplication of an anchor property');}ch=state.input.charCodeAt(++state.position);_position=state.position;while(ch!==0&&!is_WS_OR_EOL(ch)&&!is_FLOW_INDICATOR(ch)){ch=state.input.charCodeAt(++state.position);}if(state.position===_position){throwError(state,'name of an anchor node must contain at least one character');}state.anchor=state.input.slice(_position,state.position);return true;}function readAlias(state){var _position,alias,ch;ch=state.input.charCodeAt(state.position);if(ch!==0x2A/* * */)return false;ch=state.input.charCodeAt(++state.position);_position=state.position;while(ch!==0&&!is_WS_OR_EOL(ch)&&!is_FLOW_INDICATOR(ch)){ch=state.input.charCodeAt(++state.position);}if(state.position===_position){throwError(state,'name of an alias node must contain at least one character');}alias=state.input.slice(_position,state.position);if(!state.anchorMap.hasOwnProperty(alias)){throwError(state,'unidentified alias "'+alias+'"');}state.result=state.anchorMap[alias];skipSeparationSpace(state,true,-1);return true;}function composeNode(state,parentIndent,nodeContext,allowToSeek,allowCompact){var allowBlockStyles,allowBlockScalars,allowBlockCollections,indentStatus=1,// 1: this>parent, 0: this=parent, -1: this<parent
atNewLine=false,hasContent=false,typeIndex,typeQuantity,type,flowIndent,blockIndent;if(state.listener!==null){state.listener('open',state);}state.tag=null;state.anchor=null;state.kind=null;state.result=null;allowBlockStyles=allowBlockScalars=allowBlockCollections=CONTEXT_BLOCK_OUT===nodeContext||CONTEXT_BLOCK_IN===nodeContext;if(allowToSeek){if(skipSeparationSpace(state,true,-1)){atNewLine=true;if(state.lineIndent>parentIndent){indentStatus=1;}else if(state.lineIndent===parentIndent){indentStatus=0;}else if(state.lineIndent<parentIndent){indentStatus=-1;}}}if(indentStatus===1){while(readTagProperty(state)||readAnchorProperty(state)){if(skipSeparationSpace(state,true,-1)){atNewLine=true;allowBlockCollections=allowBlockStyles;if(state.lineIndent>parentIndent){indentStatus=1;}else if(state.lineIndent===parentIndent){indentStatus=0;}else if(state.lineIndent<parentIndent){indentStatus=-1;}}else{allowBlockCollections=false;}}}if(allowBlockCollections){allowBlockCollections=atNewLine||allowCompact;}if(indentStatus===1||CONTEXT_BLOCK_OUT===nodeContext){if(CONTEXT_FLOW_IN===nodeContext||CONTEXT_FLOW_OUT===nodeContext){flowIndent=parentIndent;}else{flowIndent=parentIndent+1;}blockIndent=state.position-state.lineStart;if(indentStatus===1){if(allowBlockCollections&&(readBlockSequence(state,blockIndent)||readBlockMapping(state,blockIndent,flowIndent))||readFlowCollection(state,flowIndent)){hasContent=true;}else{if(allowBlockScalars&&readBlockScalar(state,flowIndent)||readSingleQuotedScalar(state,flowIndent)||readDoubleQuotedScalar(state,flowIndent)){hasContent=true;}else if(readAlias(state)){hasContent=true;if(state.tag!==null||state.anchor!==null){throwError(state,'alias node should not have any properties');}}else if(readPlainScalar(state,flowIndent,CONTEXT_FLOW_IN===nodeContext)){hasContent=true;if(state.tag===null){state.tag='?';}}if(state.anchor!==null){state.anchorMap[state.anchor]=state.result;}}}else if(indentStatus===0){// Special case: block sequences are allowed to have same indentation level as the parent.
// http://www.yaml.org/spec/1.2/spec.html#id2799784
hasContent=allowBlockCollections&&readBlockSequence(state,blockIndent);}}if(state.tag!==null&&state.tag!=='!'){if(state.tag==='?'){for(typeIndex=0,typeQuantity=state.implicitTypes.length;typeIndex<typeQuantity;typeIndex+=1){type=state.implicitTypes[typeIndex];// Implicit resolving is not allowed for non-scalar types, and '?'
// non-specific tag is only assigned to plain scalars. So, it isn't
// needed to check for 'kind' conformity.
if(type.resolve(state.result)){// `state.result` updated in resolver if matched
state.result=type.construct(state.result);state.tag=type.tag;if(state.anchor!==null){state.anchorMap[state.anchor]=state.result;}break;}}}else if(_hasOwnProperty.call(state.typeMap[state.kind||'fallback'],state.tag)){type=state.typeMap[state.kind||'fallback'][state.tag];if(state.result!==null&&type.kind!==state.kind){throwError(state,'unacceptable node kind for !<'+state.tag+'> tag; it should be "'+type.kind+'", not "'+state.kind+'"');}if(!type.resolve(state.result)){// `state.result` updated in resolver if matched
throwError(state,'cannot resolve a node with !<'+state.tag+'> explicit tag');}else{state.result=type.construct(state.result);if(state.anchor!==null){state.anchorMap[state.anchor]=state.result;}}}else{throwError(state,'unknown tag !<'+state.tag+'>');}}if(state.listener!==null){state.listener('close',state);}return state.tag!==null||state.anchor!==null||hasContent;}function readDocument(state){var documentStart=state.position,_position,directiveName,directiveArgs,hasDirectives=false,ch;state.version=null;state.checkLineBreaks=state.legacy;state.tagMap={};state.anchorMap={};while((ch=state.input.charCodeAt(state.position))!==0){skipSeparationSpace(state,true,-1);ch=state.input.charCodeAt(state.position);if(state.lineIndent>0||ch!==0x25/* % */){break;}hasDirectives=true;ch=state.input.charCodeAt(++state.position);_position=state.position;while(ch!==0&&!is_WS_OR_EOL(ch)){ch=state.input.charCodeAt(++state.position);}directiveName=state.input.slice(_position,state.position);directiveArgs=[];if(directiveName.length<1){throwError(state,'directive name must not be less than one character in length');}while(ch!==0){while(is_WHITE_SPACE(ch)){ch=state.input.charCodeAt(++state.position);}if(ch===0x23/* # */){do{ch=state.input.charCodeAt(++state.position);}while(ch!==0&&!is_EOL(ch));break;}if(is_EOL(ch))break;_position=state.position;while(ch!==0&&!is_WS_OR_EOL(ch)){ch=state.input.charCodeAt(++state.position);}directiveArgs.push(state.input.slice(_position,state.position));}if(ch!==0)readLineBreak(state);if(_hasOwnProperty.call(directiveHandlers,directiveName)){directiveHandlers[directiveName](state,directiveName,directiveArgs);}else{throwWarning(state,'unknown document directive "'+directiveName+'"');}}skipSeparationSpace(state,true,-1);if(state.lineIndent===0&&state.input.charCodeAt(state.position)===0x2D/* - */&&state.input.charCodeAt(state.position+1)===0x2D/* - */&&state.input.charCodeAt(state.position+2)===0x2D/* - */){state.position+=3;skipSeparationSpace(state,true,-1);}else if(hasDirectives){throwError(state,'directives end mark is expected');}composeNode(state,state.lineIndent-1,CONTEXT_BLOCK_OUT,false,true);skipSeparationSpace(state,true,-1);if(state.checkLineBreaks&&PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart,state.position))){throwWarning(state,'non-ASCII line breaks are interpreted as content');}state.documents.push(state.result);if(state.position===state.lineStart&&testDocumentSeparator(state)){if(state.input.charCodeAt(state.position)===0x2E/* . */){state.position+=3;skipSeparationSpace(state,true,-1);}return;}if(state.position<state.length-1){throwError(state,'end of the stream or a document separator is expected');}else{return;}}function loadDocuments(input,options){input=String(input);options=options||{};if(input.length!==0){// Add tailing `\n` if not exists
if(input.charCodeAt(input.length-1)!==0x0A/* LF */&&input.charCodeAt(input.length-1)!==0x0D/* CR */){input+='\n';}// Strip BOM
if(input.charCodeAt(0)===0xFEFF){input=input.slice(1);}}var state=new State(input,options);// Use 0 as string terminator. That significantly simplifies bounds check.
state.input+='\0';while(state.input.charCodeAt(state.position)===0x20/* Space */){state.lineIndent+=1;state.position+=1;}while(state.position<state.length-1){readDocument(state);}return state.documents;}function loadAll(input,iterator,options){var documents=loadDocuments(input,options),index,length;if(typeof iterator!=='function'){return documents;}for(index=0,length=documents.length;index<length;index+=1){iterator(documents[index]);}}function load(input,options){var documents=loadDocuments(input,options);if(documents.length===0){/*eslint-disable no-undefined*/return undefined;}else if(documents.length===1){return documents[0];}throw new YAMLException('expected a single document in the stream, but found more');}function safeLoadAll(input,output,options){if(typeof output==='function'){loadAll(input,output,common.extend({schema:DEFAULT_SAFE_SCHEMA},options));}else{return loadAll(input,common.extend({schema:DEFAULT_SAFE_SCHEMA},options));}}function safeLoad(input,options){return load(input,common.extend({schema:DEFAULT_SAFE_SCHEMA},options));}module.exports.loadAll=loadAll;module.exports.load=load;module.exports.safeLoadAll=safeLoadAll;module.exports.safeLoad=safeLoad;},{"./common":19,"./exception":21,"./mark":23,"./schema/default_full":26,"./schema/default_safe":27}],23:[function(require,module,exports){'use strict';var common=require('./common');function Mark(name,buffer,position,line,column){this.name=name;this.buffer=buffer;this.position=position;this.line=line;this.column=column;}Mark.prototype.getSnippet=function getSnippet(indent,maxLength){var head,start,tail,end,snippet;if(!this.buffer)return null;indent=indent||4;maxLength=maxLength||75;head='';start=this.position;while(start>0&&"\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(start-1))===-1){start-=1;if(this.position-start>maxLength/2-1){head=' ... ';start+=5;break;}}tail='';end=this.position;while(end<this.buffer.length&&"\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(end))===-1){end+=1;if(end-this.position>maxLength/2-1){tail=' ... ';end-=5;break;}}snippet=this.buffer.slice(start,end);return common.repeat(' ',indent)+head+snippet+tail+'\n'+common.repeat(' ',indent+this.position-start+head.length)+'^';};Mark.prototype.toString=function toString(compact){var snippet,where='';if(this.name){where+='in "'+this.name+'" ';}where+='at line '+(this.line+1)+', column '+(this.column+1);if(!compact){snippet=this.getSnippet();if(snippet){where+=':\n'+snippet;}}return where;};module.exports=Mark;},{"./common":19}],24:[function(require,module,exports){'use strict';/*eslint-disable max-len*/var common=require('./common');var YAMLException=require('./exception');var Type=require('./type');function compileList(schema,name,result){var exclude=[];schema.include.forEach(function(includedSchema){result=compileList(includedSchema,name,result);});schema[name].forEach(function(currentType){result.forEach(function(previousType,previousIndex){if(previousType.tag===currentType.tag&&previousType.kind===currentType.kind){exclude.push(previousIndex);}});result.push(currentType);});return result.filter(function(type,index){return exclude.indexOf(index)===-1;});}function compileMap()/* lists... */{var result={scalar:{},sequence:{},mapping:{},fallback:{}},index,length;function collectType(type){result[type.kind][type.tag]=result['fallback'][type.tag]=type;}for(index=0,length=arguments.length;index<length;index+=1){arguments[index].forEach(collectType);}return result;}function Schema(definition){this.include=definition.include||[];this.implicit=definition.implicit||[];this.explicit=definition.explicit||[];this.implicit.forEach(function(type){if(type.loadKind&&type.loadKind!=='scalar'){throw new YAMLException('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');}});this.compiledImplicit=compileList(this,'implicit',[]);this.compiledExplicit=compileList(this,'explicit',[]);this.compiledTypeMap=compileMap(this.compiledImplicit,this.compiledExplicit);}Schema.DEFAULT=null;Schema.create=function createSchema(){var schemas,types;switch(arguments.length){case 1:schemas=Schema.DEFAULT;types=arguments[0];break;case 2:schemas=arguments[0];types=arguments[1];break;default:throw new YAMLException('Wrong number of arguments for Schema.create function');}schemas=common.toArray(schemas);types=common.toArray(types);if(!schemas.every(function(schema){return schema instanceof Schema;})){throw new YAMLException('Specified list of super schemas (or a single Schema object) contains a non-Schema object.');}if(!types.every(function(type){return type instanceof Type;})){throw new YAMLException('Specified list of YAML types (or a single Type object) contains a non-Type object.');}return new Schema({include:schemas,explicit:types});};module.exports=Schema;},{"./common":19,"./exception":21,"./type":30}],25:[function(require,module,exports){// Standard YAML's Core schema.
// http://www.yaml.org/spec/1.2/spec.html#id2804923
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, Core schema has no distinctions from JSON schema is JS-YAML.
'use strict';var Schema=require('../schema');module.exports=new Schema({include:[require('./json')]});},{"../schema":24,"./json":29}],26:[function(require,module,exports){// JS-YAML's default schema for `load` function.
// It is not described in the YAML specification.
//
// This schema is based on JS-YAML's default safe schema and includes
// JavaScript-specific types: !!js/undefined, !!js/regexp and !!js/function.
//
// Also this schema is used as default base schema at `Schema.create` function.
'use strict';var Schema=require('../schema');module.exports=Schema.DEFAULT=new Schema({include:[require('./default_safe')],explicit:[require('../type/js/undefined'),require('../type/js/regexp'),require('../type/js/function')]});},{"../schema":24,"../type/js/function":35,"../type/js/regexp":36,"../type/js/undefined":37,"./default_safe":27}],27:[function(require,module,exports){// JS-YAML's default schema for `safeLoad` function.
// It is not described in the YAML specification.
//
// This schema is based on standard YAML's Core schema and includes most of
// extra types described at YAML tag repository. (http://yaml.org/type/)
'use strict';var Schema=require('../schema');module.exports=new Schema({include:[require('./core')],implicit:[require('../type/timestamp'),require('../type/merge')],explicit:[require('../type/binary'),require('../type/omap'),require('../type/pairs'),require('../type/set')]});},{"../schema":24,"../type/binary":31,"../type/merge":39,"../type/omap":41,"../type/pairs":42,"../type/set":44,"../type/timestamp":46,"./core":25}],28:[function(require,module,exports){// Standard YAML's Failsafe schema.
// http://www.yaml.org/spec/1.2/spec.html#id2802346
'use strict';var Schema=require('../schema');module.exports=new Schema({explicit:[require('../type/str'),require('../type/seq'),require('../type/map')]});},{"../schema":24,"../type/map":38,"../type/seq":43,"../type/str":45}],29:[function(require,module,exports){// Standard YAML's JSON schema.
// http://www.yaml.org/spec/1.2/spec.html#id2803231
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, this schema is not such strict as defined in the YAML specification.
// It allows numbers in binary notaion, use `Null` and `NULL` as `null`, etc.
'use strict';var Schema=require('../schema');module.exports=new Schema({include:[require('./failsafe')],implicit:[require('../type/null'),require('../type/bool'),require('../type/int'),require('../type/float')]});},{"../schema":24,"../type/bool":32,"../type/float":33,"../type/int":34,"../type/null":40,"./failsafe":28}],30:[function(require,module,exports){'use strict';var YAMLException=require('./exception');var TYPE_CONSTRUCTOR_OPTIONS=['kind','resolve','construct','instanceOf','predicate','represent','defaultStyle','styleAliases'];var YAML_NODE_KINDS=['scalar','sequence','mapping'];function compileStyleAliases(map){var result={};if(map!==null){Object.keys(map).forEach(function(style){map[style].forEach(function(alias){result[String(alias)]=style;});});}return result;}function Type(tag,options){options=options||{};Object.keys(options).forEach(function(name){if(TYPE_CONSTRUCTOR_OPTIONS.indexOf(name)===-1){throw new YAMLException('Unknown option "'+name+'" is met in definition of "'+tag+'" YAML type.');}});// TODO: Add tag format check.
this.tag=tag;this.kind=options['kind']||null;this.resolve=options['resolve']||function(){return true;};this.construct=options['construct']||function(data){return data;};this.instanceOf=options['instanceOf']||null;this.predicate=options['predicate']||null;this.represent=options['represent']||null;this.defaultStyle=options['defaultStyle']||null;this.styleAliases=compileStyleAliases(options['styleAliases']||null);if(YAML_NODE_KINDS.indexOf(this.kind)===-1){throw new YAMLException('Unknown kind "'+this.kind+'" is specified for "'+tag+'" YAML type.');}}module.exports=Type;},{"./exception":21}],31:[function(require,module,exports){'use strict';/*eslint-disable no-bitwise*/var NodeBuffer;try{// A trick for browserified version, to not include `Buffer` shim
var _require=require;NodeBuffer=_require('buffer').Buffer;}catch(__){}var Type=require('../type');// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';function resolveYamlBinary(data){if(data===null)return false;var code,idx,bitlen=0,max=data.length,map=BASE64_MAP;// Convert one by one.
for(idx=0;idx<max;idx++){code=map.indexOf(data.charAt(idx));// Skip CR/LF
if(code>64)continue;// Fail on illegal characters
if(code<0)return false;bitlen+=6;}// If there are any bits left, source was corrupted
return bitlen%8===0;}function constructYamlBinary(data){var idx,tailbits,input=data.replace(/[\r\n=]/g,''),// remove CR/LF & padding to simplify scan
max=input.length,map=BASE64_MAP,bits=0,result=[];// Collect by 6*4 bits (3 bytes)
for(idx=0;idx<max;idx++){if(idx%4===0&&idx){result.push(bits>>16&0xFF);result.push(bits>>8&0xFF);result.push(bits&0xFF);}bits=bits<<6|map.indexOf(input.charAt(idx));}// Dump tail
tailbits=max%4*6;if(tailbits===0){result.push(bits>>16&0xFF);result.push(bits>>8&0xFF);result.push(bits&0xFF);}else if(tailbits===18){result.push(bits>>10&0xFF);result.push(bits>>2&0xFF);}else if(tailbits===12){result.push(bits>>4&0xFF);}// Wrap into Buffer for NodeJS and leave Array for browser
if(NodeBuffer){// Support node 6.+ Buffer API when available
return NodeBuffer.from?NodeBuffer.from(result):new NodeBuffer(result);}return result;}function representYamlBinary(object/*, style*/){var result='',bits=0,idx,tail,max=object.length,map=BASE64_MAP;// Convert every three bytes to 4 ASCII characters.
for(idx=0;idx<max;idx++){if(idx%3===0&&idx){result+=map[bits>>18&0x3F];result+=map[bits>>12&0x3F];result+=map[bits>>6&0x3F];result+=map[bits&0x3F];}bits=(bits<<8)+object[idx];}// Dump tail
tail=max%3;if(tail===0){result+=map[bits>>18&0x3F];result+=map[bits>>12&0x3F];result+=map[bits>>6&0x3F];result+=map[bits&0x3F];}else if(tail===2){result+=map[bits>>10&0x3F];result+=map[bits>>4&0x3F];result+=map[bits<<2&0x3F];result+=map[64];}else if(tail===1){result+=map[bits>>2&0x3F];result+=map[bits<<4&0x3F];result+=map[64];result+=map[64];}return result;}function isBinary(object){return NodeBuffer&&NodeBuffer.isBuffer(object);}module.exports=new Type('tag:yaml.org,2002:binary',{kind:'scalar',resolve:resolveYamlBinary,construct:constructYamlBinary,predicate:isBinary,represent:representYamlBinary});},{"../type":30}],32:[function(require,module,exports){'use strict';var Type=require('../type');function resolveYamlBoolean(data){if(data===null)return false;var max=data.length;return max===4&&(data==='true'||data==='True'||data==='TRUE')||max===5&&(data==='false'||data==='False'||data==='FALSE');}function constructYamlBoolean(data){return data==='true'||data==='True'||data==='TRUE';}function isBoolean(object){return Object.prototype.toString.call(object)==='[object Boolean]';}module.exports=new Type('tag:yaml.org,2002:bool',{kind:'scalar',resolve:resolveYamlBoolean,construct:constructYamlBoolean,predicate:isBoolean,represent:{lowercase:function lowercase(object){return object?'true':'false';},uppercase:function uppercase(object){return object?'TRUE':'FALSE';},camelcase:function camelcase(object){return object?'True':'False';}},defaultStyle:'lowercase'});},{"../type":30}],33:[function(require,module,exports){'use strict';var common=require('../common');var Type=require('../type');var YAML_FLOAT_PATTERN=new RegExp(// 2.5e4, 2.5 and integers
'^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?'+// .2e4, .2
// special case, seems not from spec
'|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?'+// 20:59
'|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*'+// .inf
'|[-+]?\\.(?:inf|Inf|INF)'+// .nan
'|\\.(?:nan|NaN|NAN))$');function resolveYamlFloat(data){if(data===null)return false;if(!YAML_FLOAT_PATTERN.test(data)||// Quick hack to not allow integers end with `_`
// Probably should update regexp & check speed
data[data.length-1]==='_'){return false;}return true;}function constructYamlFloat(data){var value,sign,base,digits;value=data.replace(/_/g,'').toLowerCase();sign=value[0]==='-'?-1:1;digits=[];if('+-'.indexOf(value[0])>=0){value=value.slice(1);}if(value==='.inf'){return sign===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;}else if(value==='.nan'){return NaN;}else if(value.indexOf(':')>=0){value.split(':').forEach(function(v){digits.unshift(parseFloat(v,10));});value=0.0;base=1;digits.forEach(function(d){value+=d*base;base*=60;});return sign*value;}return sign*parseFloat(value,10);}var SCIENTIFIC_WITHOUT_DOT=/^[-+]?[0-9]+e/;function representYamlFloat(object,style){var res;if(isNaN(object)){switch(style){case'lowercase':return'.nan';case'uppercase':return'.NAN';case'camelcase':return'.NaN';}}else if(Number.POSITIVE_INFINITY===object){switch(style){case'lowercase':return'.inf';case'uppercase':return'.INF';case'camelcase':return'.Inf';}}else if(Number.NEGATIVE_INFINITY===object){switch(style){case'lowercase':return'-.inf';case'uppercase':return'-.INF';case'camelcase':return'-.Inf';}}else if(common.isNegativeZero(object)){return'-0.0';}res=object.toString(10);// JS stringifier can build scientific format without dots: 5e-100,
// while YAML requres dot: 5.e-100. Fix it with simple hack
return SCIENTIFIC_WITHOUT_DOT.test(res)?res.replace('e','.e'):res;}function isFloat(object){return Object.prototype.toString.call(object)==='[object Number]'&&(object%1!==0||common.isNegativeZero(object));}module.exports=new Type('tag:yaml.org,2002:float',{kind:'scalar',resolve:resolveYamlFloat,construct:constructYamlFloat,predicate:isFloat,represent:representYamlFloat,defaultStyle:'lowercase'});},{"../common":19,"../type":30}],34:[function(require,module,exports){'use strict';var common=require('../common');var Type=require('../type');function isHexCode(c){return 0x30/* 0 */<=c&&c<=0x39/* 9 */||0x41/* A */<=c&&c<=0x46/* F */||0x61/* a */<=c&&c<=0x66/* f */;}function isOctCode(c){return 0x30/* 0 */<=c&&c<=0x37/* 7 */;}function isDecCode(c){return 0x30/* 0 */<=c&&c<=0x39/* 9 */;}function resolveYamlInteger(data){if(data===null)return false;var max=data.length,index=0,hasDigits=false,ch;if(!max)return false;ch=data[index];// sign
if(ch==='-'||ch==='+'){ch=data[++index];}if(ch==='0'){// 0
if(index+1===max)return true;ch=data[++index];// base 2, base 8, base 16
if(ch==='b'){// base 2
index++;for(;index<max;index++){ch=data[index];if(ch==='_')continue;if(ch!=='0'&&ch!=='1')return false;hasDigits=true;}return hasDigits&&ch!=='_';}if(ch==='x'){// base 16
index++;for(;index<max;index++){ch=data[index];if(ch==='_')continue;if(!isHexCode(data.charCodeAt(index)))return false;hasDigits=true;}return hasDigits&&ch!=='_';}// base 8
for(;index<max;index++){ch=data[index];if(ch==='_')continue;if(!isOctCode(data.charCodeAt(index)))return false;hasDigits=true;}return hasDigits&&ch!=='_';}// base 10 (except 0) or base 60
// value should not start with `_`;
if(ch==='_')return false;for(;index<max;index++){ch=data[index];if(ch==='_')continue;if(ch===':')break;if(!isDecCode(data.charCodeAt(index))){return false;}hasDigits=true;}// Should have digits and should not end with `_`
if(!hasDigits||ch==='_')return false;// if !base60 - done;
if(ch!==':')return true;// base60 almost not used, no needs to optimize
return /^(:[0-5]?[0-9])+$/.test(data.slice(index));}function constructYamlInteger(data){var value=data,sign=1,ch,base,digits=[];if(value.indexOf('_')!==-1){value=value.replace(/_/g,'');}ch=value[0];if(ch==='-'||ch==='+'){if(ch==='-')sign=-1;value=value.slice(1);ch=value[0];}if(value==='0')return 0;if(ch==='0'){if(value[1]==='b')return sign*parseInt(value.slice(2),2);if(value[1]==='x')return sign*parseInt(value,16);return sign*parseInt(value,8);}if(value.indexOf(':')!==-1){value.split(':').forEach(function(v){digits.unshift(parseInt(v,10));});value=0;base=1;digits.forEach(function(d){value+=d*base;base*=60;});return sign*value;}return sign*parseInt(value,10);}function isInteger(object){return Object.prototype.toString.call(object)==='[object Number]'&&object%1===0&&!common.isNegativeZero(object);}module.exports=new Type('tag:yaml.org,2002:int',{kind:'scalar',resolve:resolveYamlInteger,construct:constructYamlInteger,predicate:isInteger,represent:{binary:function binary(obj){return obj>=0?'0b'+obj.toString(2):'-0b'+obj.toString(2).slice(1);},octal:function octal(obj){return obj>=0?'0'+obj.toString(8):'-0'+obj.toString(8).slice(1);},decimal:function decimal(obj){return obj.toString(10);},/* eslint-disable max-len */hexadecimal:function hexadecimal(obj){return obj>=0?'0x'+obj.toString(16).toUpperCase():'-0x'+obj.toString(16).toUpperCase().slice(1);}},defaultStyle:'decimal',styleAliases:{binary:[2,'bin'],octal:[8,'oct'],decimal:[10,'dec'],hexadecimal:[16,'hex']}});},{"../common":19,"../type":30}],35:[function(require,module,exports){'use strict';var esprima;// Browserified version does not have esprima
//
// 1. For node.js just require module as deps
// 2. For browser try to require mudule via external AMD system.
//    If not found - try to fallback to window.esprima. If not
//    found too - then fail to parse.
//
try{// workaround to exclude package from browserify list.
var _require=require;esprima=_require('esprima');}catch(_){/*global window */if(typeof window!=='undefined')esprima=window.esprima;}var Type=require('../../type');function resolveJavascriptFunction(data){if(data===null)return false;try{var source='('+data+')',ast=esprima.parse(source,{range:true});if(ast.type!=='Program'||ast.body.length!==1||ast.body[0].type!=='ExpressionStatement'||ast.body[0].expression.type!=='ArrowFunctionExpression'&&ast.body[0].expression.type!=='FunctionExpression'){return false;}return true;}catch(err){return false;}}function constructJavascriptFunction(data){/*jslint evil:true*/var source='('+data+')',ast=esprima.parse(source,{range:true}),params=[],body;if(ast.type!=='Program'||ast.body.length!==1||ast.body[0].type!=='ExpressionStatement'||ast.body[0].expression.type!=='ArrowFunctionExpression'&&ast.body[0].expression.type!=='FunctionExpression'){throw new Error('Failed to resolve function');}ast.body[0].expression.params.forEach(function(param){params.push(param.name);});body=ast.body[0].expression.body.range;// Esprima's ranges include the first '{' and the last '}' characters on
// function expressions. So cut them out.
if(ast.body[0].expression.body.type==='BlockStatement'){/*eslint-disable no-new-func*/return new Function(params,source.slice(body[0]+1,body[1]-1));}// ES6 arrow functions can omit the BlockStatement. In that case, just return
// the body.
/*eslint-disable no-new-func*/return new Function(params,'return '+source.slice(body[0],body[1]));}function representJavascriptFunction(object/*, style*/){return object.toString();}function isFunction(object){return Object.prototype.toString.call(object)==='[object Function]';}module.exports=new Type('tag:yaml.org,2002:js/function',{kind:'scalar',resolve:resolveJavascriptFunction,construct:constructJavascriptFunction,predicate:isFunction,represent:representJavascriptFunction});},{"../../type":30}],36:[function(require,module,exports){'use strict';var Type=require('../../type');function resolveJavascriptRegExp(data){if(data===null)return false;if(data.length===0)return false;var regexp=data,tail=/\/([gim]*)$/.exec(data),modifiers='';// if regexp starts with '/' it can have modifiers and must be properly closed
// `/foo/gim` - modifiers tail can be maximum 3 chars
if(regexp[0]==='/'){if(tail)modifiers=tail[1];if(modifiers.length>3)return false;// if expression starts with /, is should be properly terminated
if(regexp[regexp.length-modifiers.length-1]!=='/')return false;}return true;}function constructJavascriptRegExp(data){var regexp=data,tail=/\/([gim]*)$/.exec(data),modifiers='';// `/foo/gim` - tail can be maximum 4 chars
if(regexp[0]==='/'){if(tail)modifiers=tail[1];regexp=regexp.slice(1,regexp.length-modifiers.length-1);}return new RegExp(regexp,modifiers);}function representJavascriptRegExp(object/*, style*/){var result='/'+object.source+'/';if(object.global)result+='g';if(object.multiline)result+='m';if(object.ignoreCase)result+='i';return result;}function isRegExp(object){return Object.prototype.toString.call(object)==='[object RegExp]';}module.exports=new Type('tag:yaml.org,2002:js/regexp',{kind:'scalar',resolve:resolveJavascriptRegExp,construct:constructJavascriptRegExp,predicate:isRegExp,represent:representJavascriptRegExp});},{"../../type":30}],37:[function(require,module,exports){'use strict';var Type=require('../../type');function resolveJavascriptUndefined(){return true;}function constructJavascriptUndefined(){/*eslint-disable no-undefined*/return undefined;}function representJavascriptUndefined(){return'';}function isUndefined(object){return typeof object==='undefined';}module.exports=new Type('tag:yaml.org,2002:js/undefined',{kind:'scalar',resolve:resolveJavascriptUndefined,construct:constructJavascriptUndefined,predicate:isUndefined,represent:representJavascriptUndefined});},{"../../type":30}],38:[function(require,module,exports){'use strict';var Type=require('../type');module.exports=new Type('tag:yaml.org,2002:map',{kind:'mapping',construct:function construct(data){return data!==null?data:{};}});},{"../type":30}],39:[function(require,module,exports){'use strict';var Type=require('../type');function resolveYamlMerge(data){return data==='<<'||data===null;}module.exports=new Type('tag:yaml.org,2002:merge',{kind:'scalar',resolve:resolveYamlMerge});},{"../type":30}],40:[function(require,module,exports){'use strict';var Type=require('../type');function resolveYamlNull(data){if(data===null)return true;var max=data.length;return max===1&&data==='~'||max===4&&(data==='null'||data==='Null'||data==='NULL');}function constructYamlNull(){return null;}function isNull(object){return object===null;}module.exports=new Type('tag:yaml.org,2002:null',{kind:'scalar',resolve:resolveYamlNull,construct:constructYamlNull,predicate:isNull,represent:{canonical:function canonical(){return'~';},lowercase:function lowercase(){return'null';},uppercase:function uppercase(){return'NULL';},camelcase:function camelcase(){return'Null';}},defaultStyle:'lowercase'});},{"../type":30}],41:[function(require,module,exports){'use strict';var Type=require('../type');var _hasOwnProperty=Object.prototype.hasOwnProperty;var _toString=Object.prototype.toString;function resolveYamlOmap(data){if(data===null)return true;var objectKeys=[],index,length,pair,pairKey,pairHasKey,object=data;for(index=0,length=object.length;index<length;index+=1){pair=object[index];pairHasKey=false;if(_toString.call(pair)!=='[object Object]')return false;for(pairKey in pair){if(_hasOwnProperty.call(pair,pairKey)){if(!pairHasKey)pairHasKey=true;else return false;}}if(!pairHasKey)return false;if(objectKeys.indexOf(pairKey)===-1)objectKeys.push(pairKey);else return false;}return true;}function constructYamlOmap(data){return data!==null?data:[];}module.exports=new Type('tag:yaml.org,2002:omap',{kind:'sequence',resolve:resolveYamlOmap,construct:constructYamlOmap});},{"../type":30}],42:[function(require,module,exports){'use strict';var Type=require('../type');var _toString=Object.prototype.toString;function resolveYamlPairs(data){if(data===null)return true;var index,length,pair,keys,result,object=data;result=new Array(object.length);for(index=0,length=object.length;index<length;index+=1){pair=object[index];if(_toString.call(pair)!=='[object Object]')return false;keys=Object.keys(pair);if(keys.length!==1)return false;result[index]=[keys[0],pair[keys[0]]];}return true;}function constructYamlPairs(data){if(data===null)return[];var index,length,pair,keys,result,object=data;result=new Array(object.length);for(index=0,length=object.length;index<length;index+=1){pair=object[index];keys=Object.keys(pair);result[index]=[keys[0],pair[keys[0]]];}return result;}module.exports=new Type('tag:yaml.org,2002:pairs',{kind:'sequence',resolve:resolveYamlPairs,construct:constructYamlPairs});},{"../type":30}],43:[function(require,module,exports){'use strict';var Type=require('../type');module.exports=new Type('tag:yaml.org,2002:seq',{kind:'sequence',construct:function construct(data){return data!==null?data:[];}});},{"../type":30}],44:[function(require,module,exports){'use strict';var Type=require('../type');var _hasOwnProperty=Object.prototype.hasOwnProperty;function resolveYamlSet(data){if(data===null)return true;var key,object=data;for(key in object){if(_hasOwnProperty.call(object,key)){if(object[key]!==null)return false;}}return true;}function constructYamlSet(data){return data!==null?data:{};}module.exports=new Type('tag:yaml.org,2002:set',{kind:'mapping',resolve:resolveYamlSet,construct:constructYamlSet});},{"../type":30}],45:[function(require,module,exports){'use strict';var Type=require('../type');module.exports=new Type('tag:yaml.org,2002:str',{kind:'scalar',construct:function construct(data){return data!==null?data:'';}});},{"../type":30}],46:[function(require,module,exports){'use strict';var Type=require('../type');var YAML_DATE_REGEXP=new RegExp('^([0-9][0-9][0-9][0-9])'+// [1] year
'-([0-9][0-9])'+// [2] month
'-([0-9][0-9])$');// [3] day
var YAML_TIMESTAMP_REGEXP=new RegExp('^([0-9][0-9][0-9][0-9])'+// [1] year
'-([0-9][0-9]?)'+// [2] month
'-([0-9][0-9]?)'+// [3] day
'(?:[Tt]|[ \\t]+)'+// ...
'([0-9][0-9]?)'+// [4] hour
':([0-9][0-9])'+// [5] minute
':([0-9][0-9])'+// [6] second
'(?:\\.([0-9]*))?'+// [7] fraction
'(?:[ \\t]*(Z|([-+])([0-9][0-9]?)'+// [8] tz [9] tz_sign [10] tz_hour
'(?::([0-9][0-9]))?))?$');// [11] tz_minute
function resolveYamlTimestamp(data){if(data===null)return false;if(YAML_DATE_REGEXP.exec(data)!==null)return true;if(YAML_TIMESTAMP_REGEXP.exec(data)!==null)return true;return false;}function constructYamlTimestamp(data){var match,year,month,day,hour,minute,second,fraction=0,delta=null,tz_hour,tz_minute,date;match=YAML_DATE_REGEXP.exec(data);if(match===null)match=YAML_TIMESTAMP_REGEXP.exec(data);if(match===null)throw new Error('Date resolve error');// match: [1] year [2] month [3] day
year=+match[1];month=+match[2]-1;// JS month starts with 0
day=+match[3];if(!match[4]){// no hour
return new Date(Date.UTC(year,month,day));}// match: [4] hour [5] minute [6] second [7] fraction
hour=+match[4];minute=+match[5];second=+match[6];if(match[7]){fraction=match[7].slice(0,3);while(fraction.length<3){// milli-seconds
fraction+='0';}fraction=+fraction;}// match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute
if(match[9]){tz_hour=+match[10];tz_minute=+(match[11]||0);delta=(tz_hour*60+tz_minute)*60000;// delta in mili-seconds
if(match[9]==='-')delta=-delta;}date=new Date(Date.UTC(year,month,day,hour,minute,second,fraction));if(delta)date.setTime(date.getTime()-delta);return date;}function representYamlTimestamp(object/*, style*/){return object.toISOString();}module.exports=new Type('tag:yaml.org,2002:timestamp',{kind:'scalar',resolve:resolveYamlTimestamp,construct:constructYamlTimestamp,instanceOf:Date,represent:representYamlTimestamp});},{"../type":30}],47:[function(require,module,exports){exports=module.exports=stringify;exports.getSerialize=serializer;function stringify(obj,replacer,spaces,cycleReplacer){return JSON.stringify(obj,serializer(replacer,cycleReplacer),spaces);}function serializer(replacer,cycleReplacer){var stack=[],keys=[];if(cycleReplacer==null)cycleReplacer=function cycleReplacer(key,value){if(stack[0]===value)return"[Circular ~]";return"[Circular ~."+keys.slice(0,stack.indexOf(value)).join(".")+"]";};return function(key,value){if(stack.length>0){var thisPos=stack.indexOf(this);~thisPos?stack.splice(thisPos+1):stack.push(this);~thisPos?keys.splice(thisPos,Infinity,key):keys.push(key);if(~stack.indexOf(value))value=cycleReplacer.call(this,key,value);}else stack.push(value);return replacer==null?value:replacer.call(this,key,value);};}},{}],48:[function(require,module,exports){var getNative=require('./_getNative'),root=require('./_root');/* Built-in method references that are verified to be native. */var DataView=getNative(root,'DataView');module.exports=DataView;},{"./_getNative":112,"./_root":149}],49:[function(require,module,exports){var hashClear=require('./_hashClear'),hashDelete=require('./_hashDelete'),hashGet=require('./_hashGet'),hashHas=require('./_hashHas'),hashSet=require('./_hashSet');/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;module.exports=Hash;},{"./_hashClear":118,"./_hashDelete":119,"./_hashGet":120,"./_hashHas":121,"./_hashSet":122}],50:[function(require,module,exports){var listCacheClear=require('./_listCacheClear'),listCacheDelete=require('./_listCacheDelete'),listCacheGet=require('./_listCacheGet'),listCacheHas=require('./_listCacheHas'),listCacheSet=require('./_listCacheSet');/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;module.exports=ListCache;},{"./_listCacheClear":130,"./_listCacheDelete":131,"./_listCacheGet":132,"./_listCacheHas":133,"./_listCacheSet":134}],51:[function(require,module,exports){var getNative=require('./_getNative'),root=require('./_root');/* Built-in method references that are verified to be native. */var Map=getNative(root,'Map');module.exports=Map;},{"./_getNative":112,"./_root":149}],52:[function(require,module,exports){var mapCacheClear=require('./_mapCacheClear'),mapCacheDelete=require('./_mapCacheDelete'),mapCacheGet=require('./_mapCacheGet'),mapCacheHas=require('./_mapCacheHas'),mapCacheSet=require('./_mapCacheSet');/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;module.exports=MapCache;},{"./_mapCacheClear":135,"./_mapCacheDelete":136,"./_mapCacheGet":137,"./_mapCacheHas":138,"./_mapCacheSet":139}],53:[function(require,module,exports){var getNative=require('./_getNative'),root=require('./_root');/* Built-in method references that are verified to be native. */var Promise=getNative(root,'Promise');module.exports=Promise;},{"./_getNative":112,"./_root":149}],54:[function(require,module,exports){var getNative=require('./_getNative'),root=require('./_root');/* Built-in method references that are verified to be native. */var Set=getNative(root,'Set');module.exports=Set;},{"./_getNative":112,"./_root":149}],55:[function(require,module,exports){var MapCache=require('./_MapCache'),setCacheAdd=require('./_setCacheAdd'),setCacheHas=require('./_setCacheHas');/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;module.exports=SetCache;},{"./_MapCache":52,"./_setCacheAdd":150,"./_setCacheHas":151}],56:[function(require,module,exports){var ListCache=require('./_ListCache'),stackClear=require('./_stackClear'),stackDelete=require('./_stackDelete'),stackGet=require('./_stackGet'),stackHas=require('./_stackHas'),stackSet=require('./_stackSet');/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;module.exports=Stack;},{"./_ListCache":50,"./_stackClear":155,"./_stackDelete":156,"./_stackGet":157,"./_stackHas":158,"./_stackSet":159}],57:[function(require,module,exports){var root=require('./_root');/** Built-in value references. */var _Symbol=root.Symbol;module.exports=_Symbol;},{"./_root":149}],58:[function(require,module,exports){var root=require('./_root');/** Built-in value references. */var Uint8Array=root.Uint8Array;module.exports=Uint8Array;},{"./_root":149}],59:[function(require,module,exports){var getNative=require('./_getNative'),root=require('./_root');/* Built-in method references that are verified to be native. */var WeakMap=getNative(root,'WeakMap');module.exports=WeakMap;},{"./_getNative":112,"./_root":149}],60:[function(require,module,exports){/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}module.exports=apply;},{}],61:[function(require,module,exports){/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */function arrayEvery(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(!predicate(array[index],index,array)){return false;}}return true;}module.exports=arrayEvery;},{}],62:[function(require,module,exports){/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}module.exports=arrayFilter;},{}],63:[function(require,module,exports){var baseTimes=require('./_baseTimes'),isArguments=require('./isArguments'),isArray=require('./isArray'),isBuffer=require('./isBuffer'),isIndex=require('./_isIndex'),isTypedArray=require('./isTypedArray');/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(// Safari 9 has enumerable `arguments.length` in strict mode.
key=='length'||// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=='offset'||key=='parent')||// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||// Skip index properties.
isIndex(key,length)))){result.push(key);}}return result;}module.exports=arrayLikeKeys;},{"./_baseTimes":94,"./_isIndex":123,"./isArguments":171,"./isArray":172,"./isBuffer":174,"./isTypedArray":181}],64:[function(require,module,exports){/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}module.exports=arrayMap;},{}],65:[function(require,module,exports){/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}module.exports=arrayPush;},{}],66:[function(require,module,exports){/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}module.exports=arraySome;},{}],67:[function(require,module,exports){var baseAssignValue=require('./_baseAssignValue'),eq=require('./eq');/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}module.exports=assignValue;},{"./_baseAssignValue":70,"./eq":166}],68:[function(require,module,exports){var eq=require('./eq');/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}module.exports=assocIndexOf;},{"./eq":166}],69:[function(require,module,exports){var copyObject=require('./_copyObject'),keys=require('./keys');/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}module.exports=baseAssign;},{"./_copyObject":99,"./keys":182}],70:[function(require,module,exports){var defineProperty=require('./_defineProperty');/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function baseAssignValue(object,key,value){if(key=='__proto__'&&defineProperty){defineProperty(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else{object[key]=value;}}module.exports=baseAssignValue;},{"./_defineProperty":104}],71:[function(require,module,exports){var isObject=require('./isObject');/** Built-in value references. */var objectCreate=Object.create;/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */var baseCreate=function(){function object(){}return function(proto){if(!isObject(proto)){return{};}if(objectCreate){return objectCreate(proto);}object.prototype=proto;var result=new object();object.prototype=undefined;return result;};}();module.exports=baseCreate;},{"./isObject":178}],72:[function(require,module,exports){var baseForOwn=require('./_baseForOwn'),createBaseEach=require('./_createBaseEach');/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */var baseEach=createBaseEach(baseForOwn);module.exports=baseEach;},{"./_baseForOwn":75,"./_createBaseEach":102}],73:[function(require,module,exports){var baseEach=require('./_baseEach');/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`
 */function baseEvery(collection,predicate){var result=true;baseEach(collection,function(value,index,collection){result=!!predicate(value,index,collection);return result;});return result;}module.exports=baseEvery;},{"./_baseEach":72}],74:[function(require,module,exports){var createBaseFor=require('./_createBaseFor');/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */var baseFor=createBaseFor();module.exports=baseFor;},{"./_createBaseFor":103}],75:[function(require,module,exports){var baseFor=require('./_baseFor'),keys=require('./keys');/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys);}module.exports=baseForOwn;},{"./_baseFor":74,"./keys":182}],76:[function(require,module,exports){var castPath=require('./_castPath'),toKey=require('./_toKey');/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */function baseGet(object,path){path=castPath(path,object);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined;}module.exports=baseGet;},{"./_castPath":98,"./_toKey":161}],77:[function(require,module,exports){var arrayPush=require('./_arrayPush'),isArray=require('./isArray');/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}module.exports=baseGetAllKeys;},{"./_arrayPush":65,"./isArray":172}],78:[function(require,module,exports){var _Symbol2=require('./_Symbol'),getRawTag=require('./_getRawTag'),objectToString=require('./_objectToString');/** `Object#toString` result references. */var nullTag='[object Null]',undefinedTag='[object Undefined]';/** Built-in value references. */var symToStringTag=_Symbol2?_Symbol2.toStringTag:undefined;/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}module.exports=baseGetTag;},{"./_Symbol":57,"./_getRawTag":113,"./_objectToString":146}],79:[function(require,module,exports){/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */function baseHasIn(object,key){return object!=null&&key in Object(object);}module.exports=baseHasIn;},{}],80:[function(require,module,exports){var baseGetTag=require('./_baseGetTag'),isObjectLike=require('./isObjectLike');/** `Object#toString` result references. */var argsTag='[object Arguments]';/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag;}module.exports=baseIsArguments;},{"./_baseGetTag":78,"./isObjectLike":179}],81:[function(require,module,exports){var baseIsEqualDeep=require('./_baseIsEqualDeep'),isObjectLike=require('./isObjectLike');/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true;}if(value==null||other==null||!isObjectLike(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);}module.exports=baseIsEqual;},{"./_baseIsEqualDeep":82,"./isObjectLike":179}],82:[function(require,module,exports){var Stack=require('./_Stack'),equalArrays=require('./_equalArrays'),equalByTag=require('./_equalByTag'),equalObjects=require('./_equalObjects'),getTag=require('./_getTag'),isArray=require('./isArray'),isBuffer=require('./isBuffer'),isTypedArray=require('./isTypedArray');/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',objectTag='[object Object]';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=objIsArr?arrayTag:getTag(object),othTag=othIsArr?arrayTag:getTag(other);objTag=objTag==argsTag?objectTag:objTag;othTag=othTag==argsTag?objectTag:othTag;var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other)){return false;}objIsArr=true;objIsObj=false;}if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);}if(!(bitmask&COMPARE_PARTIAL_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,bitmask,customizer,equalFunc,stack);}module.exports=baseIsEqualDeep;},{"./_Stack":56,"./_equalArrays":105,"./_equalByTag":106,"./_equalObjects":107,"./_getTag":115,"./isArray":172,"./isBuffer":174,"./isTypedArray":181}],83:[function(require,module,exports){var Stack=require('./_Stack'),baseIsEqual=require('./_baseIsEqual');/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined?baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG,customizer,stack):result)){return false;}}}return true;}module.exports=baseIsMatch;},{"./_Stack":56,"./_baseIsEqual":81}],84:[function(require,module,exports){var isFunction=require('./isFunction'),isMasked=require('./_isMasked'),isObject=require('./isObject'),toSource=require('./_toSource');/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used for built-in method references. */var funcProto=Function.prototype,objectProto=Object.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}module.exports=baseIsNative;},{"./_isMasked":127,"./_toSource":162,"./isFunction":176,"./isObject":178}],85:[function(require,module,exports){var baseGetTag=require('./_baseGetTag'),isLength=require('./isLength'),isObjectLike=require('./isObjectLike');/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}module.exports=baseIsTypedArray;},{"./_baseGetTag":78,"./isLength":177,"./isObjectLike":179}],86:[function(require,module,exports){var baseMatches=require('./_baseMatches'),baseMatchesProperty=require('./_baseMatchesProperty'),identity=require('./identity'),isArray=require('./isArray'),property=require('./property');/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
if(typeof value=='function'){return value;}if(value==null){return identity;}if((typeof value==="undefined"?"undefined":_typeof2(value))=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}module.exports=baseIteratee;},{"./_baseMatches":88,"./_baseMatchesProperty":89,"./identity":170,"./isArray":172,"./property":184}],87:[function(require,module,exports){var isPrototype=require('./_isPrototype'),nativeKeys=require('./_nativeKeys');/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}module.exports=baseKeys;},{"./_isPrototype":128,"./_nativeKeys":144}],88:[function(require,module,exports){var baseIsMatch=require('./_baseIsMatch'),getMatchData=require('./_getMatchData'),matchesStrictComparable=require('./_matchesStrictComparable');/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}module.exports=baseMatches;},{"./_baseIsMatch":83,"./_getMatchData":111,"./_matchesStrictComparable":141}],89:[function(require,module,exports){var baseIsEqual=require('./_baseIsEqual'),get=require('./get'),hasIn=require('./hasIn'),isKey=require('./_isKey'),isStrictComparable=require('./_isStrictComparable'),matchesStrictComparable=require('./_matchesStrictComparable'),toKey=require('./_toKey');/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG);};}module.exports=baseMatchesProperty;},{"./_baseIsEqual":81,"./_isKey":125,"./_isStrictComparable":129,"./_matchesStrictComparable":141,"./_toKey":161,"./get":168,"./hasIn":169}],90:[function(require,module,exports){/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}module.exports=baseProperty;},{}],91:[function(require,module,exports){var baseGet=require('./_baseGet');/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}module.exports=basePropertyDeep;},{"./_baseGet":76}],92:[function(require,module,exports){var identity=require('./identity'),overRest=require('./_overRest'),setToString=require('./_setToString');/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */function baseRest(func,start){return setToString(overRest(func,start,identity),func+'');}module.exports=baseRest;},{"./_overRest":148,"./_setToString":153,"./identity":170}],93:[function(require,module,exports){var constant=require('./constant'),defineProperty=require('./_defineProperty'),identity=require('./identity');/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */var baseSetToString=!defineProperty?identity:function(func,string){return defineProperty(func,'toString',{'configurable':true,'enumerable':false,'value':constant(string),'writable':true});};module.exports=baseSetToString;},{"./_defineProperty":104,"./constant":164,"./identity":170}],94:[function(require,module,exports){/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}module.exports=baseTimes;},{}],95:[function(require,module,exports){var _Symbol3=require('./_Symbol'),arrayMap=require('./_arrayMap'),isArray=require('./isArray'),isSymbol=require('./isSymbol');/** Used as references for various `Number` constants. */var INFINITY=1/0;/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol3?_Symbol3.prototype:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isArray(value)){// Recursively convert values (susceptible to call stack limits).
return arrayMap(value,baseToString)+'';}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}module.exports=baseToString;},{"./_Symbol":57,"./_arrayMap":64,"./isArray":172,"./isSymbol":180}],96:[function(require,module,exports){/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function baseUnary(func){return function(value){return func(value);};}module.exports=baseUnary;},{}],97:[function(require,module,exports){/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function cacheHas(cache,key){return cache.has(key);}module.exports=cacheHas;},{}],98:[function(require,module,exports){var isArray=require('./isArray'),isKey=require('./_isKey'),stringToPath=require('./_stringToPath'),toString=require('./toString');/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */function castPath(value,object){if(isArray(value)){return value;}return isKey(value,object)?[value]:stringToPath(toString(value));}module.exports=castPath;},{"./_isKey":125,"./_stringToPath":160,"./isArray":172,"./toString":187}],99:[function(require,module,exports){var assignValue=require('./_assignValue'),baseAssignValue=require('./_baseAssignValue');/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;if(newValue===undefined){newValue=source[key];}if(isNew){baseAssignValue(object,key,newValue);}else{assignValue(object,key,newValue);}}return object;}module.exports=copyObject;},{"./_assignValue":67,"./_baseAssignValue":70}],100:[function(require,module,exports){var root=require('./_root');/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];module.exports=coreJsData;},{"./_root":149}],101:[function(require,module,exports){var baseRest=require('./_baseRest'),isIterateeCall=require('./_isIterateeCall');/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=assigner.length>3&&typeof customizer=='function'?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object;});}module.exports=createAssigner;},{"./_baseRest":92,"./_isIterateeCall":124}],102:[function(require,module,exports){var isArrayLike=require('./isArrayLike');/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(collection==null){return collection;}if(!isArrayLike(collection)){return eachFunc(collection,iteratee);}var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);while(fromRight?index--:++index<length){if(iteratee(iterable[index],index,iterable)===false){break;}}return collection;};}module.exports=createBaseEach;},{"./isArrayLike":173}],103:[function(require,module,exports){/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break;}}return object;};}module.exports=createBaseFor;},{}],104:[function(require,module,exports){var getNative=require('./_getNative');var defineProperty=function(){try{var func=getNative(Object,'defineProperty');func({},'',{});return func;}catch(e){}}();module.exports=defineProperty;},{"./_getNative":112}],105:[function(require,module,exports){var SetCache=require('./_SetCache'),arraySome=require('./_arraySome'),cacheHas=require('./_cacheHas');/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Assume cyclic values are equal.
var stacked=stack.get(array);if(stacked&&stack.get(other)){return stacked==other;}var index=-1,result=true,seen=bitmask&COMPARE_UNORDERED_FLAG?new SetCache():undefined;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}module.exports=equalArrays;},{"./_SetCache":55,"./_arraySome":66,"./_cacheHas":97}],106:[function(require,module,exports){var _Symbol4=require('./_Symbol'),Uint8Array=require('./_Uint8Array'),eq=require('./eq'),equalArrays=require('./_equalArrays'),mapToArray=require('./_mapToArray'),setToArray=require('./_setToArray');/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/** `Object#toString` result references. */var boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',mapTag='[object Map]',numberTag='[object Number]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]';/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol4?_Symbol4.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return object==other+'';case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&COMPARE_PARTIAL_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=COMPARE_UNORDERED_FLAG;// Recursively compare objects (susceptible to call stack limits).
stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack['delete'](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}module.exports=equalByTag;},{"./_Symbol":57,"./_Uint8Array":58,"./_equalArrays":105,"./_mapToArray":140,"./_setToArray":152,"./eq":166}],107:[function(require,module,exports){var getAllKeys=require('./_getAllKeys');/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1;/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,objProps=getAllKeys(object),objLength=objProps.length,othProps=getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty.call(other,key))){return false;}}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked&&stack.get(other)){return stacked==other;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}module.exports=equalObjects;},{"./_getAllKeys":109}],108:[function(require,module,exports){(function(global){/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==="undefined"?"undefined":_typeof2(global))=='object'&&global&&global.Object===Object&&global;module.exports=freeGlobal;}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],109:[function(require,module,exports){var baseGetAllKeys=require('./_baseGetAllKeys'),getSymbols=require('./_getSymbols'),keys=require('./keys');/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}module.exports=getAllKeys;},{"./_baseGetAllKeys":77,"./_getSymbols":114,"./keys":182}],110:[function(require,module,exports){var isKeyable=require('./_isKeyable');/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}module.exports=getMapData;},{"./_isKeyable":126}],111:[function(require,module,exports){var isStrictComparable=require('./_isStrictComparable'),keys=require('./keys');/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}module.exports=getMatchData;},{"./_isStrictComparable":129,"./keys":182}],112:[function(require,module,exports){var baseIsNative=require('./_baseIsNative'),getValue=require('./_getValue');/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}module.exports=getNative;},{"./_baseIsNative":84,"./_getValue":116}],113:[function(require,module,exports){var _Symbol5=require('./_Symbol');/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto.toString;/** Built-in value references. */var symToStringTag=_Symbol5?_Symbol5.toStringTag:undefined;/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result;}module.exports=getRawTag;},{"./_Symbol":57}],114:[function(require,module,exports){var arrayFilter=require('./_arrayFilter'),stubArray=require('./stubArray');/** Used for built-in method references. */var objectProto=Object.prototype;/** Built-in value references. */var propertyIsEnumerable=objectProto.propertyIsEnumerable;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols;/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbols=!nativeGetSymbols?stubArray:function(object){if(object==null){return[];}object=Object(object);return arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable.call(object,symbol);});};module.exports=getSymbols;},{"./_arrayFilter":62,"./stubArray":185}],115:[function(require,module,exports){var DataView=require('./_DataView'),Map=require('./_Map'),Promise=require('./_Promise'),Set=require('./_Set'),WeakMap=require('./_WeakMap'),baseGetTag=require('./_baseGetTag'),toSource=require('./_toSource');/** `Object#toString` result references. */var mapTag='[object Map]',objectTag='[object Object]',promiseTag='[object Promise]',setTag='[object Set]',weakMapTag='[object WeakMap]';var dataViewTag='[object DataView]';/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=baseGetTag(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):'';if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}module.exports=getTag;},{"./_DataView":48,"./_Map":51,"./_Promise":53,"./_Set":54,"./_WeakMap":59,"./_baseGetTag":78,"./_toSource":162}],116:[function(require,module,exports){/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}module.exports=getValue;},{}],117:[function(require,module,exports){var castPath=require('./_castPath'),isArguments=require('./isArguments'),isArray=require('./isArray'),isIndex=require('./_isIndex'),isLength=require('./isLength'),toKey=require('./_toKey');/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */function hasPath(object,path,hasFunc){path=castPath(path,object);var index=-1,length=path.length,result=false;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result||++index!=length){return result;}length=object==null?0:object.length;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object));}module.exports=hasPath;},{"./_castPath":98,"./_isIndex":123,"./_toKey":161,"./isArguments":171,"./isArray":172,"./isLength":177}],118:[function(require,module,exports){var nativeCreate=require('./_nativeCreate');/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}module.exports=hashClear;},{"./_nativeCreate":143}],119:[function(require,module,exports){/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}module.exports=hashDelete;},{}],120:[function(require,module,exports){var nativeCreate=require('./_nativeCreate');/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}module.exports=hashGet;},{"./_nativeCreate":143}],121:[function(require,module,exports){var nativeCreate=require('./_nativeCreate');/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}module.exports=hashHas;},{"./_nativeCreate":143}],122:[function(require,module,exports){var nativeCreate=require('./_nativeCreate');/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}module.exports=hashSet;},{"./_nativeCreate":143}],123:[function(require,module,exports){/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){var type=typeof value==="undefined"?"undefined":_typeof2(value);length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(type=='number'||type!='symbol'&&reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}module.exports=isIndex;},{}],124:[function(require,module,exports){var eq=require('./eq'),isArrayLike=require('./isArrayLike'),isIndex=require('./_isIndex'),isObject=require('./isObject');/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */function isIterateeCall(value,index,object){if(!isObject(object)){return false;}var type=typeof index==="undefined"?"undefined":_typeof2(index);if(type=='number'?isArrayLike(object)&&isIndex(index,object.length):type=='string'&&index in object){return eq(object[index],value);}return false;}module.exports=isIterateeCall;},{"./_isIndex":123,"./eq":166,"./isArrayLike":173,"./isObject":178}],125:[function(require,module,exports){var isArray=require('./isArray'),isSymbol=require('./isSymbol');/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */function isKey(value,object){if(isArray(value)){return false;}var type=typeof value==="undefined"?"undefined":_typeof2(value);if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}module.exports=isKey;},{"./isArray":172,"./isSymbol":180}],126:[function(require,module,exports){/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(value){var type=typeof value==="undefined"?"undefined":_typeof2(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}module.exports=isKeyable;},{}],127:[function(require,module,exports){var coreJsData=require('./_coreJsData');/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}module.exports=isMasked;},{"./_coreJsData":100}],128:[function(require,module,exports){/** Used for built-in method references. */var objectProto=Object.prototype;/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}module.exports=isPrototype;},{}],129:[function(require,module,exports){var isObject=require('./isObject');/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */function isStrictComparable(value){return value===value&&!isObject(value);}module.exports=isStrictComparable;},{"./isObject":178}],130:[function(require,module,exports){/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[];this.size=0;}module.exports=listCacheClear;},{}],131:[function(require,module,exports){var assocIndexOf=require('./_assocIndexOf');/** Used for built-in method references. */var arrayProto=Array.prototype;/** Built-in value references. */var splice=arrayProto.splice;/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}--this.size;return true;}module.exports=listCacheDelete;},{"./_assocIndexOf":68}],132:[function(require,module,exports){var assocIndexOf=require('./_assocIndexOf');/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}module.exports=listCacheGet;},{"./_assocIndexOf":68}],133:[function(require,module,exports){var assocIndexOf=require('./_assocIndexOf');/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}module.exports=listCacheHas;},{"./_assocIndexOf":68}],134:[function(require,module,exports){var assocIndexOf=require('./_assocIndexOf');/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}return this;}module.exports=listCacheSet;},{"./_assocIndexOf":68}],135:[function(require,module,exports){var Hash=require('./_Hash'),ListCache=require('./_ListCache'),Map=require('./_Map');/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.size=0;this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}module.exports=mapCacheClear;},{"./_Hash":49,"./_ListCache":50,"./_Map":51}],136:[function(require,module,exports){var getMapData=require('./_getMapData');/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(key){var result=getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}module.exports=mapCacheDelete;},{"./_getMapData":110}],137:[function(require,module,exports){var getMapData=require('./_getMapData');/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(key){return getMapData(this,key).get(key);}module.exports=mapCacheGet;},{"./_getMapData":110}],138:[function(require,module,exports){var getMapData=require('./_getMapData');/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(key){return getMapData(this,key).has(key);}module.exports=mapCacheHas;},{"./_getMapData":110}],139:[function(require,module,exports){var getMapData=require('./_getMapData');/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}module.exports=mapCacheSet;},{"./_getMapData":110}],140:[function(require,module,exports){/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}module.exports=mapToArray;},{}],141:[function(require,module,exports){/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object));};}module.exports=matchesStrictComparable;},{}],142:[function(require,module,exports){var memoize=require('./memoize');/** Used as the maximum memoize cache size. */var MAX_MEMOIZE_SIZE=500;/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */function memoizeCapped(func){var result=memoize(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear();}return key;});var cache=result.cache;return result;}module.exports=memoizeCapped;},{"./memoize":183}],143:[function(require,module,exports){var getNative=require('./_getNative');/* Built-in method references that are verified to be native. */var nativeCreate=getNative(Object,'create');module.exports=nativeCreate;},{"./_getNative":112}],144:[function(require,module,exports){var overArg=require('./_overArg');/* Built-in method references for those with the same name as other `lodash` methods. */var nativeKeys=overArg(Object.keys,Object);module.exports=nativeKeys;},{"./_overArg":147}],145:[function(require,module,exports){var freeGlobal=require('./_freeGlobal');/** Detect free variable `exports`. */var freeExports=(typeof exports==="undefined"?"undefined":_typeof2(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&(typeof module==="undefined"?"undefined":_typeof2(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{// Use `util.types` for Node.js 10+.
var types=freeModule&&freeModule.require&&freeModule.require('util').types;if(types){return types;}// Legacy `process.binding('util')` for Node.js < 10.
return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}();module.exports=nodeUtil;},{"./_freeGlobal":108}],146:[function(require,module,exports){/** Used for built-in method references. */var objectProto=Object.prototype;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto.toString;/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function objectToString(value){return nativeObjectToString.call(value);}module.exports=objectToString;},{}],147:[function(require,module,exports){/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(func,transform){return function(arg){return func(transform(arg));};}module.exports=overArg;},{}],148:[function(require,module,exports){var apply=require('./_apply');/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max;/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */function overRest(func,start,transform){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=transform(array);return apply(func,this,otherArgs);};}module.exports=overRest;},{"./_apply":60}],149:[function(require,module,exports){var freeGlobal=require('./_freeGlobal');/** Detect free variable `self`. */var freeSelf=(typeof self==="undefined"?"undefined":_typeof2(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();module.exports=root;},{"./_freeGlobal":108}],150:[function(require,module,exports){/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}module.exports=setCacheAdd;},{}],151:[function(require,module,exports){/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */function setCacheHas(value){return this.__data__.has(value);}module.exports=setCacheHas;},{}],152:[function(require,module,exports){/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}module.exports=setToArray;},{}],153:[function(require,module,exports){var baseSetToString=require('./_baseSetToString'),shortOut=require('./_shortOut');/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */var setToString=shortOut(baseSetToString);module.exports=setToString;},{"./_baseSetToString":93,"./_shortOut":154}],154:[function(require,module,exports){/** Used to detect hot functions by number of calls within a span of milliseconds. */var HOT_COUNT=800,HOT_SPAN=16;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeNow=Date.now;/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return arguments[0];}}else{count=0;}return func.apply(undefined,arguments);};}module.exports=shortOut;},{}],155:[function(require,module,exports){var ListCache=require('./_ListCache');/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function stackClear(){this.__data__=new ListCache();this.size=0;}module.exports=stackClear;},{"./_ListCache":50}],156:[function(require,module,exports){/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}module.exports=stackDelete;},{}],157:[function(require,module,exports){/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(key){return this.__data__.get(key);}module.exports=stackGet;},{}],158:[function(require,module,exports){/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(key){return this.__data__.has(key);}module.exports=stackHas;},{}],159:[function(require,module,exports){var ListCache=require('./_ListCache'),Map=require('./_Map'),MapCache=require('./_MapCache');/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}module.exports=stackSet;},{"./_ListCache":50,"./_Map":51,"./_MapCache":52}],160:[function(require,module,exports){var memoizeCapped=require('./_memoizeCapped');/** Used to match property names within property paths. */var rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */var stringToPath=memoizeCapped(function(string){var result=[];if(string.charCodeAt(0)===46/* . */){result.push('');}string.replace(rePropName,function(match,number,quote,subString){result.push(quote?subString.replace(reEscapeChar,'$1'):number||match);});return result;});module.exports=stringToPath;},{"./_memoizeCapped":142}],161:[function(require,module,exports){var isSymbol=require('./isSymbol');/** Used as references for various `Number` constants. */var INFINITY=1/0;/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}module.exports=toKey;},{"./isSymbol":180}],162:[function(require,module,exports){/** Used for built-in method references. */var funcProto=Function.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}module.exports=toSource;},{}],163:[function(require,module,exports){var assignValue=require('./_assignValue'),copyObject=require('./_copyObject'),createAssigner=require('./_createAssigner'),isArrayLike=require('./isArrayLike'),isPrototype=require('./_isPrototype'),keys=require('./keys');/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */var assign=createAssigner(function(object,source){if(isPrototype(source)||isArrayLike(source)){copyObject(source,keys(source),object);return;}for(var key in source){if(hasOwnProperty.call(source,key)){assignValue(object,key,source[key]);}}});module.exports=assign;},{"./_assignValue":67,"./_copyObject":99,"./_createAssigner":101,"./_isPrototype":128,"./isArrayLike":173,"./keys":182}],164:[function(require,module,exports){/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */function constant(value){return function(){return value;};}module.exports=constant;},{}],165:[function(require,module,exports){var baseAssign=require('./_baseAssign'),baseCreate=require('./_baseCreate');/**
 * Creates an object that inherits from the `prototype` object. If a
 * `properties` object is given, its own enumerable string keyed properties
 * are assigned to the created object.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Object
 * @param {Object} prototype The object to inherit from.
 * @param {Object} [properties] The properties to assign to the object.
 * @returns {Object} Returns the new object.
 * @example
 *
 * function Shape() {
 *   this.x = 0;
 *   this.y = 0;
 * }
 *
 * function Circle() {
 *   Shape.call(this);
 * }
 *
 * Circle.prototype = _.create(Shape.prototype, {
 *   'constructor': Circle
 * });
 *
 * var circle = new Circle;
 * circle instanceof Circle;
 * // => true
 *
 * circle instanceof Shape;
 * // => true
 */function create(prototype,properties){var result=baseCreate(prototype);return properties==null?result:baseAssign(result,properties);}module.exports=create;},{"./_baseAssign":69,"./_baseCreate":71}],166:[function(require,module,exports){/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function eq(value,other){return value===other||value!==value&&other!==other;}module.exports=eq;},{}],167:[function(require,module,exports){var arrayEvery=require('./_arrayEvery'),baseEvery=require('./_baseEvery'),baseIteratee=require('./_baseIteratee'),isArray=require('./isArray'),isIterateeCall=require('./_isIterateeCall');/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */function every(collection,predicate,guard){var func=isArray(collection)?arrayEvery:baseEvery;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,baseIteratee(predicate,3));}module.exports=every;},{"./_arrayEvery":61,"./_baseEvery":73,"./_baseIteratee":86,"./_isIterateeCall":124,"./isArray":172}],168:[function(require,module,exports){var baseGet=require('./_baseGet');/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}module.exports=get;},{"./_baseGet":76}],169:[function(require,module,exports){var baseHasIn=require('./_baseHasIn'),hasPath=require('./_hasPath');/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}module.exports=hasIn;},{"./_baseHasIn":79,"./_hasPath":117}],170:[function(require,module,exports){/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */function identity(value){return value;}module.exports=identity;},{}],171:[function(require,module,exports){var baseIsArguments=require('./_baseIsArguments'),isObjectLike=require('./isObjectLike');/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Built-in value references. */var propertyIsEnumerable=objectProto.propertyIsEnumerable;/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee');};module.exports=isArguments;},{"./_baseIsArguments":80,"./isObjectLike":179}],172:[function(require,module,exports){/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */var isArray=Array.isArray;module.exports=isArray;},{}],173:[function(require,module,exports){var isFunction=require('./isFunction'),isLength=require('./isLength');/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}module.exports=isArrayLike;},{"./isFunction":176,"./isLength":177}],174:[function(require,module,exports){var root=require('./_root'),stubFalse=require('./stubFalse');/** Detect free variable `exports`. */var freeExports=(typeof exports==="undefined"?"undefined":_typeof2(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&(typeof module==="undefined"?"undefined":_typeof2(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeIsBuffer=Buffer?Buffer.isBuffer:undefined;/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var isBuffer=nativeIsBuffer||stubFalse;module.exports=isBuffer;},{"./_root":149,"./stubFalse":186}],175:[function(require,module,exports){var baseKeys=require('./_baseKeys'),getTag=require('./_getTag'),isArguments=require('./isArguments'),isArray=require('./isArray'),isArrayLike=require('./isArrayLike'),isBuffer=require('./isBuffer'),isPrototype=require('./_isPrototype'),isTypedArray=require('./isTypedArray');/** `Object#toString` result references. */var mapTag='[object Map]',setTag='[object Set]';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */function isEmpty(value){if(value==null){return true;}if(isArrayLike(value)&&(isArray(value)||typeof value=='string'||typeof value.splice=='function'||isBuffer(value)||isTypedArray(value)||isArguments(value))){return!value.length;}var tag=getTag(value);if(tag==mapTag||tag==setTag){return!value.size;}if(isPrototype(value)){return!baseKeys(value).length;}for(var key in value){if(hasOwnProperty.call(value,key)){return false;}}return true;}module.exports=isEmpty;},{"./_baseKeys":87,"./_getTag":115,"./_isPrototype":128,"./isArguments":171,"./isArray":172,"./isArrayLike":173,"./isBuffer":174,"./isTypedArray":181}],176:[function(require,module,exports){var baseGetTag=require('./_baseGetTag'),isObject=require('./isObject');/** `Object#toString` result references. */var asyncTag='[object AsyncFunction]',funcTag='[object Function]',genTag='[object GeneratorFunction]',proxyTag='[object Proxy]';/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function isFunction(value){if(!isObject(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}module.exports=isFunction;},{"./_baseGetTag":78,"./isObject":178}],177:[function(require,module,exports){/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}module.exports=isLength;},{}],178:[function(require,module,exports){/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject(value){var type=typeof value==="undefined"?"undefined":_typeof2(value);return value!=null&&(type=='object'||type=='function');}module.exports=isObject;},{}],179:[function(require,module,exports){/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(value){return value!=null&&(typeof value==="undefined"?"undefined":_typeof2(value))=='object';}module.exports=isObjectLike;},{}],180:[function(require,module,exports){var baseGetTag=require('./_baseGetTag'),isObjectLike=require('./isObjectLike');/** `Object#toString` result references. */var symbolTag='[object Symbol]';/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function isSymbol(value){return(typeof value==="undefined"?"undefined":_typeof2(value))=='symbol'||isObjectLike(value)&&baseGetTag(value)==symbolTag;}module.exports=isSymbol;},{"./_baseGetTag":78,"./isObjectLike":179}],181:[function(require,module,exports){var baseIsTypedArray=require('./_baseIsTypedArray'),baseUnary=require('./_baseUnary'),nodeUtil=require('./_nodeUtil');/* Node.js helper references. */var nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;module.exports=isTypedArray;},{"./_baseIsTypedArray":85,"./_baseUnary":96,"./_nodeUtil":145}],182:[function(require,module,exports){var arrayLikeKeys=require('./_arrayLikeKeys'),baseKeys=require('./_baseKeys'),isArrayLike=require('./isArrayLike');/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}module.exports=keys;},{"./_arrayLikeKeys":63,"./_baseKeys":87,"./isArrayLike":173}],183:[function(require,module,exports){var MapCache=require('./_MapCache');/** Error message constants. */var FUNC_ERROR_TEXT='Expected a function';/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */function memoize(func,resolver){if(typeof func!='function'||resolver!=null&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function memoized(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Expose `MapCache`.
memoize.Cache=MapCache;module.exports=memoize;},{"./_MapCache":52}],184:[function(require,module,exports){var baseProperty=require('./_baseProperty'),basePropertyDeep=require('./_basePropertyDeep'),isKey=require('./_isKey'),toKey=require('./_toKey');/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}module.exports=property;},{"./_baseProperty":90,"./_basePropertyDeep":91,"./_isKey":125,"./_toKey":161}],185:[function(require,module,exports){/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function stubArray(){return[];}module.exports=stubArray;},{}],186:[function(require,module,exports){/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return false;}module.exports=stubFalse;},{}],187:[function(require,module,exports){var baseToString=require('./_baseToString');/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */function toString(value){return value==null?'':baseToString(value);}module.exports=toString;},{"./_baseToString":95}],188:[function(require,module,exports){(function(process){'use strict';if(!process.version||process.version.indexOf('v0.')===0||process.version.indexOf('v1.')===0&&process.version.indexOf('v1.8.')!==0){module.exports={nextTick:nextTick};}else{module.exports=process;}function nextTick(fn,arg1,arg2,arg3){if(typeof fn!=='function'){throw new TypeError('"callback" argument must be a function');}var len=arguments.length;var args,i;switch(len){case 0:case 1:return process.nextTick(fn);case 2:return process.nextTick(function afterTickOne(){fn.call(null,arg1);});case 3:return process.nextTick(function afterTickTwo(){fn.call(null,arg1,arg2);});case 4:return process.nextTick(function afterTickThree(){fn.call(null,arg1,arg2,arg3);});default:args=new Array(len-1);i=0;while(i<args.length){args[i++]=arguments[i];}return process.nextTick(function afterTick(){fn.apply(null,args);});}}}).call(this,require('_process'));},{"_process":189}],189:[function(require,module,exports){// shim for using process in browser
var process=module.exports={};// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){//normal enviroments in sane situations
return setTimeout(fun,0);}// if setTimeout wasn't available but was latter defined
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedSetTimeout(fun,0);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cachedSetTimeout.call(null,fun,0);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){//normal enviroments in sane situations
return clearTimeout(marker);}// if clearTimeout wasn't available but was latter defined
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedClearTimeout(marker);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cachedClearTimeout.call(null,marker);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};// v8 likes predictible objects
function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[];};process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};},{}],190:[function(require,module,exports){module.exports=require('./lib/_stream_duplex.js');},{"./lib/_stream_duplex.js":191}],191:[function(require,module,exports){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
'use strict';/*<replacement>*/var pna=require('process-nextick-args');/*</replacement>*//*<replacement>*/var objectKeys=Object.keys||function(obj){var keys=[];for(var key in obj){keys.push(key);}return keys;};/*</replacement>*/module.exports=Duplex;/*<replacement>*/var util=require('core-util-is');util.inherits=require('inherits');/*</replacement>*/var Readable=require('./_stream_readable');var Writable=require('./_stream_writable');util.inherits(Duplex,Readable);{// avoid scope creep, the keys array can then be collected
var keys=objectKeys(Writable.prototype);for(var v=0;v<keys.length;v++){var method=keys[v];if(!Duplex.prototype[method])Duplex.prototype[method]=Writable.prototype[method];}}function Duplex(options){if(!(this instanceof Duplex))return new Duplex(options);Readable.call(this,options);Writable.call(this,options);if(options&&options.readable===false)this.readable=false;if(options&&options.writable===false)this.writable=false;this.allowHalfOpen=true;if(options&&options.allowHalfOpen===false)this.allowHalfOpen=false;this.once('end',onend);}Object.defineProperty(Duplex.prototype,'writableHighWaterMark',{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:false,get:function get(){return this._writableState.highWaterMark;}});// the no-half-open enforcer
function onend(){// if we allow half-open state, or if the writable side ended,
// then we're ok.
if(this.allowHalfOpen||this._writableState.ended)return;// no more data can be written.
// But allow more writes to happen in this tick.
pna.nextTick(onEndNT,this);}function onEndNT(self){self.end();}Object.defineProperty(Duplex.prototype,'destroyed',{get:function get(){if(this._readableState===undefined||this._writableState===undefined){return false;}return this._readableState.destroyed&&this._writableState.destroyed;},set:function set(value){// we ignore the value if the stream
// has not been initialized yet
if(this._readableState===undefined||this._writableState===undefined){return;}// backward compatibility, the user is explicitly
// managing destroyed
this._readableState.destroyed=value;this._writableState.destroyed=value;}});Duplex.prototype._destroy=function(err,cb){this.push(null);this.end();pna.nextTick(cb,err);};},{"./_stream_readable":193,"./_stream_writable":195,"core-util-is":9,"inherits":14,"process-nextick-args":188}],192:[function(require,module,exports){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
'use strict';module.exports=PassThrough;var Transform=require('./_stream_transform');/*<replacement>*/var util=require('core-util-is');util.inherits=require('inherits');/*</replacement>*/util.inherits(PassThrough,Transform);function PassThrough(options){if(!(this instanceof PassThrough))return new PassThrough(options);Transform.call(this,options);}PassThrough.prototype._transform=function(chunk,encoding,cb){cb(null,chunk);};},{"./_stream_transform":194,"core-util-is":9,"inherits":14}],193:[function(require,module,exports){(function(process,global){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';/*<replacement>*/var pna=require('process-nextick-args');/*</replacement>*/module.exports=Readable;/*<replacement>*/var isArray=require('isarray');/*</replacement>*//*<replacement>*/var Duplex;/*</replacement>*/Readable.ReadableState=ReadableState;/*<replacement>*/var EE=require('events').EventEmitter;var EElistenerCount=function EElistenerCount(emitter,type){return emitter.listeners(type).length;};/*</replacement>*//*<replacement>*/var Stream=require('./internal/streams/stream');/*</replacement>*//*<replacement>*/var Buffer=require('safe-buffer').Buffer;var OurUint8Array=global.Uint8Array||function(){};function _uint8ArrayToBuffer(chunk){return Buffer.from(chunk);}function _isUint8Array(obj){return Buffer.isBuffer(obj)||obj instanceof OurUint8Array;}/*</replacement>*//*<replacement>*/var util=require('core-util-is');util.inherits=require('inherits');/*</replacement>*//*<replacement>*/var debugUtil=require('util');var debug=void 0;if(debugUtil&&debugUtil.debuglog){debug=debugUtil.debuglog('stream');}else{debug=function debug(){};}/*</replacement>*/var BufferList=require('./internal/streams/BufferList');var destroyImpl=require('./internal/streams/destroy');var StringDecoder;util.inherits(Readable,Stream);var kProxyEvents=['error','close','destroy','pause','resume'];function prependListener(emitter,event,fn){// Sadly this is not cacheable as some libraries bundle their own
// event emitter implementation with them.
if(typeof emitter.prependListener==='function')return emitter.prependListener(event,fn);// This is a hack to make sure that our error handler is attached before any
// userland ones.  NEVER DO THIS. This is here only because this code needs
// to continue to work with older versions of Node.js that do not include
// the prependListener() method. The goal is to eventually remove this hack.
if(!emitter._events||!emitter._events[event])emitter.on(event,fn);else if(isArray(emitter._events[event]))emitter._events[event].unshift(fn);else emitter._events[event]=[fn,emitter._events[event]];}function ReadableState(options,stream){Duplex=Duplex||require('./_stream_duplex');options=options||{};// Duplex streams are both readable and writable, but share
// the same options object.
// However, some cases require setting options to different
// values for the readable and the writable sides of the duplex stream.
// These options can be provided separately as readableXXX and writableXXX.
var isDuplex=stream instanceof Duplex;// object stream flag. Used to make read(n) ignore n and to
// make all the buffer merging and length checks go away
this.objectMode=!!options.objectMode;if(isDuplex)this.objectMode=this.objectMode||!!options.readableObjectMode;// the point at which it stops calling _read() to fill the buffer
// Note: 0 is a valid value, means "don't call _read preemptively ever"
var hwm=options.highWaterMark;var readableHwm=options.readableHighWaterMark;var defaultHwm=this.objectMode?16:16*1024;if(hwm||hwm===0)this.highWaterMark=hwm;else if(isDuplex&&(readableHwm||readableHwm===0))this.highWaterMark=readableHwm;else this.highWaterMark=defaultHwm;// cast to ints.
this.highWaterMark=Math.floor(this.highWaterMark);// A linked list is used to store data chunks instead of an array because the
// linked list can remove elements from the beginning faster than
// array.shift()
this.buffer=new BufferList();this.length=0;this.pipes=null;this.pipesCount=0;this.flowing=null;this.ended=false;this.endEmitted=false;this.reading=false;// a flag to be able to tell if the event 'readable'/'data' is emitted
// immediately, or on a later tick.  We set this to true at first, because
// any actions that shouldn't happen until "later" should generally also
// not happen before the first read call.
this.sync=true;// whenever we return null, then we set a flag to say
// that we're awaiting a 'readable' event emission.
this.needReadable=false;this.emittedReadable=false;this.readableListening=false;this.resumeScheduled=false;// has it been destroyed
this.destroyed=false;// Crypto is kind of old and crusty.  Historically, its default string
// encoding is 'binary' so we have to make this configurable.
// Everything else in the universe uses 'utf8', though.
this.defaultEncoding=options.defaultEncoding||'utf8';// the number of writers that are awaiting a drain event in .pipe()s
this.awaitDrain=0;// if true, a maybeReadMore has been scheduled
this.readingMore=false;this.decoder=null;this.encoding=null;if(options.encoding){if(!StringDecoder)StringDecoder=require('string_decoder/').StringDecoder;this.decoder=new StringDecoder(options.encoding);this.encoding=options.encoding;}}function Readable(options){Duplex=Duplex||require('./_stream_duplex');if(!(this instanceof Readable))return new Readable(options);this._readableState=new ReadableState(options,this);// legacy
this.readable=true;if(options){if(typeof options.read==='function')this._read=options.read;if(typeof options.destroy==='function')this._destroy=options.destroy;}Stream.call(this);}Object.defineProperty(Readable.prototype,'destroyed',{get:function get(){if(this._readableState===undefined){return false;}return this._readableState.destroyed;},set:function set(value){// we ignore the value if the stream
// has not been initialized yet
if(!this._readableState){return;}// backward compatibility, the user is explicitly
// managing destroyed
this._readableState.destroyed=value;}});Readable.prototype.destroy=destroyImpl.destroy;Readable.prototype._undestroy=destroyImpl.undestroy;Readable.prototype._destroy=function(err,cb){this.push(null);cb(err);};// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push=function(chunk,encoding){var state=this._readableState;var skipChunkCheck;if(!state.objectMode){if(typeof chunk==='string'){encoding=encoding||state.defaultEncoding;if(encoding!==state.encoding){chunk=Buffer.from(chunk,encoding);encoding='';}skipChunkCheck=true;}}else{skipChunkCheck=true;}return readableAddChunk(this,chunk,encoding,false,skipChunkCheck);};// Unshift should *always* be something directly out of read()
Readable.prototype.unshift=function(chunk){return readableAddChunk(this,chunk,null,true,false);};function readableAddChunk(stream,chunk,encoding,addToFront,skipChunkCheck){var state=stream._readableState;if(chunk===null){state.reading=false;onEofChunk(stream,state);}else{var er;if(!skipChunkCheck)er=chunkInvalid(state,chunk);if(er){stream.emit('error',er);}else if(state.objectMode||chunk&&chunk.length>0){if(typeof chunk!=='string'&&!state.objectMode&&Object.getPrototypeOf(chunk)!==Buffer.prototype){chunk=_uint8ArrayToBuffer(chunk);}if(addToFront){if(state.endEmitted)stream.emit('error',new Error('stream.unshift() after end event'));else addChunk(stream,state,chunk,true);}else if(state.ended){stream.emit('error',new Error('stream.push() after EOF'));}else{state.reading=false;if(state.decoder&&!encoding){chunk=state.decoder.write(chunk);if(state.objectMode||chunk.length!==0)addChunk(stream,state,chunk,false);else maybeReadMore(stream,state);}else{addChunk(stream,state,chunk,false);}}}else if(!addToFront){state.reading=false;}}return needMoreData(state);}function addChunk(stream,state,chunk,addToFront){if(state.flowing&&state.length===0&&!state.sync){stream.emit('data',chunk);stream.read(0);}else{// update the buffer info.
state.length+=state.objectMode?1:chunk.length;if(addToFront)state.buffer.unshift(chunk);else state.buffer.push(chunk);if(state.needReadable)emitReadable(stream);}maybeReadMore(stream,state);}function chunkInvalid(state,chunk){var er;if(!_isUint8Array(chunk)&&typeof chunk!=='string'&&chunk!==undefined&&!state.objectMode){er=new TypeError('Invalid non-string/buffer chunk');}return er;}// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state){return!state.ended&&(state.needReadable||state.length<state.highWaterMark||state.length===0);}Readable.prototype.isPaused=function(){return this._readableState.flowing===false;};// backwards compatibility.
Readable.prototype.setEncoding=function(enc){if(!StringDecoder)StringDecoder=require('string_decoder/').StringDecoder;this._readableState.decoder=new StringDecoder(enc);this._readableState.encoding=enc;return this;};// Don't raise the hwm > 8MB
var MAX_HWM=0x800000;function computeNewHighWaterMark(n){if(n>=MAX_HWM){n=MAX_HWM;}else{// Get the next highest power of 2 to prevent increasing hwm excessively in
// tiny amounts
n--;n|=n>>>1;n|=n>>>2;n|=n>>>4;n|=n>>>8;n|=n>>>16;n++;}return n;}// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n,state){if(n<=0||state.length===0&&state.ended)return 0;if(state.objectMode)return 1;if(n!==n){// Only flow one buffer at a time
if(state.flowing&&state.length)return state.buffer.head.data.length;else return state.length;}// If we're asking for more than the current hwm, then raise the hwm.
if(n>state.highWaterMark)state.highWaterMark=computeNewHighWaterMark(n);if(n<=state.length)return n;// Don't have enough
if(!state.ended){state.needReadable=true;return 0;}return state.length;}// you can override either this method, or the async _read(n) below.
Readable.prototype.read=function(n){debug('read',n);n=parseInt(n,10);var state=this._readableState;var nOrig=n;if(n!==0)state.emittedReadable=false;// if we're doing read(0) to trigger a readable event, but we
// already have a bunch of data in the buffer, then just trigger
// the 'readable' event and move on.
if(n===0&&state.needReadable&&(state.length>=state.highWaterMark||state.ended)){debug('read: emitReadable',state.length,state.ended);if(state.length===0&&state.ended)endReadable(this);else emitReadable(this);return null;}n=howMuchToRead(n,state);// if we've ended, and we're now clear, then finish it up.
if(n===0&&state.ended){if(state.length===0)endReadable(this);return null;}// All the actual chunk generation logic needs to be
// *below* the call to _read.  The reason is that in certain
// synthetic stream cases, such as passthrough streams, _read
// may be a completely synchronous operation which may change
// the state of the read buffer, providing enough data when
// before there was *not* enough.
//
// So, the steps are:
// 1. Figure out what the state of things will be after we do
// a read from the buffer.
//
// 2. If that resulting state will trigger a _read, then call _read.
// Note that this may be asynchronous, or synchronous.  Yes, it is
// deeply ugly to write APIs this way, but that still doesn't mean
// that the Readable class should behave improperly, as streams are
// designed to be sync/async agnostic.
// Take note if the _read call is sync or async (ie, if the read call
// has returned yet), so that we know whether or not it's safe to emit
// 'readable' etc.
//
// 3. Actually pull the requested chunks out of the buffer and return.
// if we need a readable event, then we need to do some reading.
var doRead=state.needReadable;debug('need readable',doRead);// if we currently have less than the highWaterMark, then also read some
if(state.length===0||state.length-n<state.highWaterMark){doRead=true;debug('length less than watermark',doRead);}// however, if we've ended, then there's no point, and if we're already
// reading, then it's unnecessary.
if(state.ended||state.reading){doRead=false;debug('reading or ended',doRead);}else if(doRead){debug('do read');state.reading=true;state.sync=true;// if the length is currently zero, then we *need* a readable event.
if(state.length===0)state.needReadable=true;// call internal read method
this._read(state.highWaterMark);state.sync=false;// If _read pushed data synchronously, then `reading` will be false,
// and we need to re-evaluate how much data we can return to the user.
if(!state.reading)n=howMuchToRead(nOrig,state);}var ret;if(n>0)ret=fromList(n,state);else ret=null;if(ret===null){state.needReadable=true;n=0;}else{state.length-=n;}if(state.length===0){// If we have nothing in the buffer, then we want to know
// as soon as we *do* get something into the buffer.
if(!state.ended)state.needReadable=true;// If we tried to read() past the EOF, then emit end on the next tick.
if(nOrig!==n&&state.ended)endReadable(this);}if(ret!==null)this.emit('data',ret);return ret;};function onEofChunk(stream,state){if(state.ended)return;if(state.decoder){var chunk=state.decoder.end();if(chunk&&chunk.length){state.buffer.push(chunk);state.length+=state.objectMode?1:chunk.length;}}state.ended=true;// emit 'readable' now to make sure it gets picked up.
emitReadable(stream);}// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream){var state=stream._readableState;state.needReadable=false;if(!state.emittedReadable){debug('emitReadable',state.flowing);state.emittedReadable=true;if(state.sync)pna.nextTick(emitReadable_,stream);else emitReadable_(stream);}}function emitReadable_(stream){debug('emit readable');stream.emit('readable');flow(stream);}// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream,state){if(!state.readingMore){state.readingMore=true;pna.nextTick(maybeReadMore_,stream,state);}}function maybeReadMore_(stream,state){var len=state.length;while(!state.reading&&!state.flowing&&!state.ended&&state.length<state.highWaterMark){debug('maybeReadMore read 0');stream.read(0);if(len===state.length)// didn't get any data, stop spinning.
break;else len=state.length;}state.readingMore=false;}// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read=function(n){this.emit('error',new Error('_read() is not implemented'));};Readable.prototype.pipe=function(dest,pipeOpts){var src=this;var state=this._readableState;switch(state.pipesCount){case 0:state.pipes=dest;break;case 1:state.pipes=[state.pipes,dest];break;default:state.pipes.push(dest);break;}state.pipesCount+=1;debug('pipe count=%d opts=%j',state.pipesCount,pipeOpts);var doEnd=(!pipeOpts||pipeOpts.end!==false)&&dest!==process.stdout&&dest!==process.stderr;var endFn=doEnd?onend:unpipe;if(state.endEmitted)pna.nextTick(endFn);else src.once('end',endFn);dest.on('unpipe',onunpipe);function onunpipe(readable,unpipeInfo){debug('onunpipe');if(readable===src){if(unpipeInfo&&unpipeInfo.hasUnpiped===false){unpipeInfo.hasUnpiped=true;cleanup();}}}function onend(){debug('onend');dest.end();}// when the dest drains, it reduces the awaitDrain counter
// on the source.  This would be more elegant with a .once()
// handler in flow(), but adding and removing repeatedly is
// too slow.
var ondrain=pipeOnDrain(src);dest.on('drain',ondrain);var cleanedUp=false;function cleanup(){debug('cleanup');// cleanup event handlers once the pipe is broken
dest.removeListener('close',onclose);dest.removeListener('finish',onfinish);dest.removeListener('drain',ondrain);dest.removeListener('error',onerror);dest.removeListener('unpipe',onunpipe);src.removeListener('end',onend);src.removeListener('end',unpipe);src.removeListener('data',ondata);cleanedUp=true;// if the reader is waiting for a drain event from this
// specific writer, then it would cause it to never start
// flowing again.
// So, if this is awaiting a drain, then we just call it now.
// If we don't know, then assume that we are waiting for one.
if(state.awaitDrain&&(!dest._writableState||dest._writableState.needDrain))ondrain();}// If the user pushes more data while we're writing to dest then we'll end up
// in ondata again. However, we only want to increase awaitDrain once because
// dest will only emit one 'drain' event for the multiple writes.
// => Introduce a guard on increasing awaitDrain.
var increasedAwaitDrain=false;src.on('data',ondata);function ondata(chunk){debug('ondata');increasedAwaitDrain=false;var ret=dest.write(chunk);if(false===ret&&!increasedAwaitDrain){// If the user unpiped during `dest.write()`, it is possible
// to get stuck in a permanently paused state if that write
// also returned false.
// => Check whether `dest` is still a piping destination.
if((state.pipesCount===1&&state.pipes===dest||state.pipesCount>1&&indexOf(state.pipes,dest)!==-1)&&!cleanedUp){debug('false write response, pause',src._readableState.awaitDrain);src._readableState.awaitDrain++;increasedAwaitDrain=true;}src.pause();}}// if the dest has an error, then stop piping into it.
// however, don't suppress the throwing behavior for this.
function onerror(er){debug('onerror',er);unpipe();dest.removeListener('error',onerror);if(EElistenerCount(dest,'error')===0)dest.emit('error',er);}// Make sure our error handler is attached before userland ones.
prependListener(dest,'error',onerror);// Both close and finish should trigger unpipe, but only once.
function onclose(){dest.removeListener('finish',onfinish);unpipe();}dest.once('close',onclose);function onfinish(){debug('onfinish');dest.removeListener('close',onclose);unpipe();}dest.once('finish',onfinish);function unpipe(){debug('unpipe');src.unpipe(dest);}// tell the dest that it's being piped to
dest.emit('pipe',src);// start the flow if it hasn't been started already.
if(!state.flowing){debug('pipe resume');src.resume();}return dest;};function pipeOnDrain(src){return function(){var state=src._readableState;debug('pipeOnDrain',state.awaitDrain);if(state.awaitDrain)state.awaitDrain--;if(state.awaitDrain===0&&EElistenerCount(src,'data')){state.flowing=true;flow(src);}};}Readable.prototype.unpipe=function(dest){var state=this._readableState;var unpipeInfo={hasUnpiped:false};// if we're not piping anywhere, then do nothing.
if(state.pipesCount===0)return this;// just one destination.  most common case.
if(state.pipesCount===1){// passed in one, but it's not the right one.
if(dest&&dest!==state.pipes)return this;if(!dest)dest=state.pipes;// got a match.
state.pipes=null;state.pipesCount=0;state.flowing=false;if(dest)dest.emit('unpipe',this,unpipeInfo);return this;}// slow case. multiple pipe destinations.
if(!dest){// remove all.
var dests=state.pipes;var len=state.pipesCount;state.pipes=null;state.pipesCount=0;state.flowing=false;for(var i=0;i<len;i++){dests[i].emit('unpipe',this,unpipeInfo);}return this;}// try to find the right one.
var index=indexOf(state.pipes,dest);if(index===-1)return this;state.pipes.splice(index,1);state.pipesCount-=1;if(state.pipesCount===1)state.pipes=state.pipes[0];dest.emit('unpipe',this,unpipeInfo);return this;};// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on=function(ev,fn){var res=Stream.prototype.on.call(this,ev,fn);if(ev==='data'){// Start flowing on next tick if stream isn't explicitly paused
if(this._readableState.flowing!==false)this.resume();}else if(ev==='readable'){var state=this._readableState;if(!state.endEmitted&&!state.readableListening){state.readableListening=state.needReadable=true;state.emittedReadable=false;if(!state.reading){pna.nextTick(nReadingNextTick,this);}else if(state.length){emitReadable(this);}}}return res;};Readable.prototype.addListener=Readable.prototype.on;function nReadingNextTick(self){debug('readable nexttick read 0');self.read(0);}// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume=function(){var state=this._readableState;if(!state.flowing){debug('resume');state.flowing=true;resume(this,state);}return this;};function resume(stream,state){if(!state.resumeScheduled){state.resumeScheduled=true;pna.nextTick(resume_,stream,state);}}function resume_(stream,state){if(!state.reading){debug('resume read 0');stream.read(0);}state.resumeScheduled=false;state.awaitDrain=0;stream.emit('resume');flow(stream);if(state.flowing&&!state.reading)stream.read(0);}Readable.prototype.pause=function(){debug('call pause flowing=%j',this._readableState.flowing);if(false!==this._readableState.flowing){debug('pause');this._readableState.flowing=false;this.emit('pause');}return this;};function flow(stream){var state=stream._readableState;debug('flow',state.flowing);while(state.flowing&&stream.read()!==null){}}// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap=function(stream){var _this=this;var state=this._readableState;var paused=false;stream.on('end',function(){debug('wrapped end');if(state.decoder&&!state.ended){var chunk=state.decoder.end();if(chunk&&chunk.length)_this.push(chunk);}_this.push(null);});stream.on('data',function(chunk){debug('wrapped data');if(state.decoder)chunk=state.decoder.write(chunk);// don't skip over falsy values in objectMode
if(state.objectMode&&(chunk===null||chunk===undefined))return;else if(!state.objectMode&&(!chunk||!chunk.length))return;var ret=_this.push(chunk);if(!ret){paused=true;stream.pause();}});// proxy all the other methods.
// important when wrapping filters and duplexes.
for(var i in stream){if(this[i]===undefined&&typeof stream[i]==='function'){this[i]=function(method){return function(){return stream[method].apply(stream,arguments);};}(i);}}// proxy certain important events.
for(var n=0;n<kProxyEvents.length;n++){stream.on(kProxyEvents[n],this.emit.bind(this,kProxyEvents[n]));}// when we try to consume some more bytes, simply unpause the
// underlying stream.
this._read=function(n){debug('wrapped _read',n);if(paused){paused=false;stream.resume();}};return this;};Object.defineProperty(Readable.prototype,'readableHighWaterMark',{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:false,get:function get(){return this._readableState.highWaterMark;}});// exposed for testing purposes only.
Readable._fromList=fromList;// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n,state){// nothing buffered
if(state.length===0)return null;var ret;if(state.objectMode)ret=state.buffer.shift();else if(!n||n>=state.length){// read it all, truncate the list
if(state.decoder)ret=state.buffer.join('');else if(state.buffer.length===1)ret=state.buffer.head.data;else ret=state.buffer.concat(state.length);state.buffer.clear();}else{// read part of list
ret=fromListPartial(n,state.buffer,state.decoder);}return ret;}// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n,list,hasStrings){var ret;if(n<list.head.data.length){// slice is the same for buffers and strings
ret=list.head.data.slice(0,n);list.head.data=list.head.data.slice(n);}else if(n===list.head.data.length){// first chunk is a perfect match
ret=list.shift();}else{// result spans more than one buffer
ret=hasStrings?copyFromBufferString(n,list):copyFromBuffer(n,list);}return ret;}// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n,list){var p=list.head;var c=1;var ret=p.data;n-=ret.length;while(p=p.next){var str=p.data;var nb=n>str.length?str.length:n;if(nb===str.length)ret+=str;else ret+=str.slice(0,n);n-=nb;if(n===0){if(nb===str.length){++c;if(p.next)list.head=p.next;else list.head=list.tail=null;}else{list.head=p;p.data=str.slice(nb);}break;}++c;}list.length-=c;return ret;}// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n,list){var ret=Buffer.allocUnsafe(n);var p=list.head;var c=1;p.data.copy(ret);n-=p.data.length;while(p=p.next){var buf=p.data;var nb=n>buf.length?buf.length:n;buf.copy(ret,ret.length-n,0,nb);n-=nb;if(n===0){if(nb===buf.length){++c;if(p.next)list.head=p.next;else list.head=list.tail=null;}else{list.head=p;p.data=buf.slice(nb);}break;}++c;}list.length-=c;return ret;}function endReadable(stream){var state=stream._readableState;// If we get here before consuming all the bytes, then that is a
// bug in node.  Should never happen.
if(state.length>0)throw new Error('"endReadable()" called on non-empty stream');if(!state.endEmitted){state.ended=true;pna.nextTick(endReadableNT,state,stream);}}function endReadableNT(state,stream){// Check that we didn't get one last unshift.
if(!state.endEmitted&&state.length===0){state.endEmitted=true;stream.readable=false;stream.emit('end');}}function indexOf(xs,x){for(var i=0,l=xs.length;i<l;i++){if(xs[i]===x)return i;}return-1;}}).call(this,require('_process'),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"./_stream_duplex":191,"./internal/streams/BufferList":196,"./internal/streams/destroy":197,"./internal/streams/stream":198,"_process":189,"core-util-is":9,"events":11,"inherits":14,"isarray":16,"process-nextick-args":188,"safe-buffer":203,"string_decoder/":205,"util":7}],194:[function(require,module,exports){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
'use strict';module.exports=Transform;var Duplex=require('./_stream_duplex');/*<replacement>*/var util=require('core-util-is');util.inherits=require('inherits');/*</replacement>*/util.inherits(Transform,Duplex);function afterTransform(er,data){var ts=this._transformState;ts.transforming=false;var cb=ts.writecb;if(!cb){return this.emit('error',new Error('write callback called multiple times'));}ts.writechunk=null;ts.writecb=null;if(data!=null)// single equals check for both `null` and `undefined`
this.push(data);cb(er);var rs=this._readableState;rs.reading=false;if(rs.needReadable||rs.length<rs.highWaterMark){this._read(rs.highWaterMark);}}function Transform(options){if(!(this instanceof Transform))return new Transform(options);Duplex.call(this,options);this._transformState={afterTransform:afterTransform.bind(this),needTransform:false,transforming:false,writecb:null,writechunk:null,writeencoding:null};// start out asking for a readable event once data is transformed.
this._readableState.needReadable=true;// we have implemented the _read method, and done the other things
// that Readable wants before the first _read call, so unset the
// sync guard flag.
this._readableState.sync=false;if(options){if(typeof options.transform==='function')this._transform=options.transform;if(typeof options.flush==='function')this._flush=options.flush;}// When the writable side finishes, then flush out anything remaining.
this.on('prefinish',prefinish);}function prefinish(){var _this=this;if(typeof this._flush==='function'){this._flush(function(er,data){done(_this,er,data);});}else{done(this,null,null);}}Transform.prototype.push=function(chunk,encoding){this._transformState.needTransform=false;return Duplex.prototype.push.call(this,chunk,encoding);};// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform=function(chunk,encoding,cb){throw new Error('_transform() is not implemented');};Transform.prototype._write=function(chunk,encoding,cb){var ts=this._transformState;ts.writecb=cb;ts.writechunk=chunk;ts.writeencoding=encoding;if(!ts.transforming){var rs=this._readableState;if(ts.needTransform||rs.needReadable||rs.length<rs.highWaterMark)this._read(rs.highWaterMark);}};// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read=function(n){var ts=this._transformState;if(ts.writechunk!==null&&ts.writecb&&!ts.transforming){ts.transforming=true;this._transform(ts.writechunk,ts.writeencoding,ts.afterTransform);}else{// mark that we need a transform, so that any data that comes in
// will get processed, now that we've asked for it.
ts.needTransform=true;}};Transform.prototype._destroy=function(err,cb){var _this2=this;Duplex.prototype._destroy.call(this,err,function(err2){cb(err2);_this2.emit('close');});};function done(stream,er,data){if(er)return stream.emit('error',er);if(data!=null)// single equals check for both `null` and `undefined`
stream.push(data);// if there's nothing in the write buffer, then that means
// that nothing more will ever be provided
if(stream._writableState.length)throw new Error('Calling transform done when ws.length != 0');if(stream._transformState.transforming)throw new Error('Calling transform done when still transforming');return stream.push(null);}},{"./_stream_duplex":191,"core-util-is":9,"inherits":14}],195:[function(require,module,exports){(function(process,global,setImmediate){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
'use strict';/*<replacement>*/var pna=require('process-nextick-args');/*</replacement>*/module.exports=Writable;/* <replacement> */function WriteReq(chunk,encoding,cb){this.chunk=chunk;this.encoding=encoding;this.callback=cb;this.next=null;}// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state){var _this=this;this.next=null;this.entry=null;this.finish=function(){onCorkedFinish(_this,state);};}/* </replacement> *//*<replacement>*/var asyncWrite=!process.browser&&['v0.10','v0.9.'].indexOf(process.version.slice(0,5))>-1?setImmediate:pna.nextTick;/*</replacement>*//*<replacement>*/var Duplex;/*</replacement>*/Writable.WritableState=WritableState;/*<replacement>*/var util=require('core-util-is');util.inherits=require('inherits');/*</replacement>*//*<replacement>*/var internalUtil={deprecate:require('util-deprecate')};/*</replacement>*//*<replacement>*/var Stream=require('./internal/streams/stream');/*</replacement>*//*<replacement>*/var Buffer=require('safe-buffer').Buffer;var OurUint8Array=global.Uint8Array||function(){};function _uint8ArrayToBuffer(chunk){return Buffer.from(chunk);}function _isUint8Array(obj){return Buffer.isBuffer(obj)||obj instanceof OurUint8Array;}/*</replacement>*/var destroyImpl=require('./internal/streams/destroy');util.inherits(Writable,Stream);function nop(){}function WritableState(options,stream){Duplex=Duplex||require('./_stream_duplex');options=options||{};// Duplex streams are both readable and writable, but share
// the same options object.
// However, some cases require setting options to different
// values for the readable and the writable sides of the duplex stream.
// These options can be provided separately as readableXXX and writableXXX.
var isDuplex=stream instanceof Duplex;// object stream flag to indicate whether or not this stream
// contains buffers or objects.
this.objectMode=!!options.objectMode;if(isDuplex)this.objectMode=this.objectMode||!!options.writableObjectMode;// the point at which write() starts returning false
// Note: 0 is a valid value, means that we always return false if
// the entire buffer is not flushed immediately on write()
var hwm=options.highWaterMark;var writableHwm=options.writableHighWaterMark;var defaultHwm=this.objectMode?16:16*1024;if(hwm||hwm===0)this.highWaterMark=hwm;else if(isDuplex&&(writableHwm||writableHwm===0))this.highWaterMark=writableHwm;else this.highWaterMark=defaultHwm;// cast to ints.
this.highWaterMark=Math.floor(this.highWaterMark);// if _final has been called
this.finalCalled=false;// drain event flag.
this.needDrain=false;// at the start of calling end()
this.ending=false;// when end() has been called, and returned
this.ended=false;// when 'finish' is emitted
this.finished=false;// has it been destroyed
this.destroyed=false;// should we decode strings into buffers before passing to _write?
// this is here so that some node-core streams can optimize string
// handling at a lower level.
var noDecode=options.decodeStrings===false;this.decodeStrings=!noDecode;// Crypto is kind of old and crusty.  Historically, its default string
// encoding is 'binary' so we have to make this configurable.
// Everything else in the universe uses 'utf8', though.
this.defaultEncoding=options.defaultEncoding||'utf8';// not an actual buffer we keep track of, but a measurement
// of how much we're waiting to get pushed to some underlying
// socket or file.
this.length=0;// a flag to see when we're in the middle of a write.
this.writing=false;// when true all writes will be buffered until .uncork() call
this.corked=0;// a flag to be able to tell if the onwrite cb is called immediately,
// or on a later tick.  We set this to true at first, because any
// actions that shouldn't happen until "later" should generally also
// not happen before the first write call.
this.sync=true;// a flag to know if we're processing previously buffered items, which
// may call the _write() callback in the same tick, so that we don't
// end up in an overlapped onwrite situation.
this.bufferProcessing=false;// the callback that's passed to _write(chunk,cb)
this.onwrite=function(er){onwrite(stream,er);};// the callback that the user supplies to write(chunk,encoding,cb)
this.writecb=null;// the amount that is being written when _write is called.
this.writelen=0;this.bufferedRequest=null;this.lastBufferedRequest=null;// number of pending user-supplied write callbacks
// this must be 0 before 'finish' can be emitted
this.pendingcb=0;// emit prefinish if the only thing we're waiting for is _write cbs
// This is relevant for synchronous Transform streams
this.prefinished=false;// True if the error was already emitted and should not be thrown again
this.errorEmitted=false;// count buffered requests
this.bufferedRequestCount=0;// allocate the first CorkedRequest, there is always
// one allocated and free to use, and we maintain at most two
this.corkedRequestsFree=new CorkedRequest(this);}WritableState.prototype.getBuffer=function getBuffer(){var current=this.bufferedRequest;var out=[];while(current){out.push(current);current=current.next;}return out;};(function(){try{Object.defineProperty(WritableState.prototype,'buffer',{get:internalUtil.deprecate(function(){return this.getBuffer();},'_writableState.buffer is deprecated. Use _writableState.getBuffer '+'instead.','DEP0003')});}catch(_){}})();// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;if(typeof Symbol==='function'&&Symbol.hasInstance&&typeof Function.prototype[Symbol.hasInstance]==='function'){realHasInstance=Function.prototype[Symbol.hasInstance];Object.defineProperty(Writable,Symbol.hasInstance,{value:function value(object){if(realHasInstance.call(this,object))return true;if(this!==Writable)return false;return object&&object._writableState instanceof WritableState;}});}else{realHasInstance=function realHasInstance(object){return object instanceof this;};}function Writable(options){Duplex=Duplex||require('./_stream_duplex');// Writable ctor is applied to Duplexes, too.
// `realHasInstance` is necessary because using plain `instanceof`
// would return false, as no `_writableState` property is attached.
// Trying to use the custom `instanceof` for Writable here will also break the
// Node.js LazyTransform implementation, which has a non-trivial getter for
// `_writableState` that would lead to infinite recursion.
if(!realHasInstance.call(Writable,this)&&!(this instanceof Duplex)){return new Writable(options);}this._writableState=new WritableState(options,this);// legacy.
this.writable=true;if(options){if(typeof options.write==='function')this._write=options.write;if(typeof options.writev==='function')this._writev=options.writev;if(typeof options.destroy==='function')this._destroy=options.destroy;if(typeof options.final==='function')this._final=options.final;}Stream.call(this);}// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe=function(){this.emit('error',new Error('Cannot pipe, not readable'));};function writeAfterEnd(stream,cb){var er=new Error('write after end');// TODO: defer error events consistently everywhere, not just the cb
stream.emit('error',er);pna.nextTick(cb,er);}// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream,state,chunk,cb){var valid=true;var er=false;if(chunk===null){er=new TypeError('May not write null values to stream');}else if(typeof chunk!=='string'&&chunk!==undefined&&!state.objectMode){er=new TypeError('Invalid non-string/buffer chunk');}if(er){stream.emit('error',er);pna.nextTick(cb,er);valid=false;}return valid;}Writable.prototype.write=function(chunk,encoding,cb){var state=this._writableState;var ret=false;var isBuf=!state.objectMode&&_isUint8Array(chunk);if(isBuf&&!Buffer.isBuffer(chunk)){chunk=_uint8ArrayToBuffer(chunk);}if(typeof encoding==='function'){cb=encoding;encoding=null;}if(isBuf)encoding='buffer';else if(!encoding)encoding=state.defaultEncoding;if(typeof cb!=='function')cb=nop;if(state.ended)writeAfterEnd(this,cb);else if(isBuf||validChunk(this,state,chunk,cb)){state.pendingcb++;ret=writeOrBuffer(this,state,isBuf,chunk,encoding,cb);}return ret;};Writable.prototype.cork=function(){var state=this._writableState;state.corked++;};Writable.prototype.uncork=function(){var state=this._writableState;if(state.corked){state.corked--;if(!state.writing&&!state.corked&&!state.finished&&!state.bufferProcessing&&state.bufferedRequest)clearBuffer(this,state);}};Writable.prototype.setDefaultEncoding=function setDefaultEncoding(encoding){// node::ParseEncoding() requires lower case.
if(typeof encoding==='string')encoding=encoding.toLowerCase();if(!(['hex','utf8','utf-8','ascii','binary','base64','ucs2','ucs-2','utf16le','utf-16le','raw'].indexOf((encoding+'').toLowerCase())>-1))throw new TypeError('Unknown encoding: '+encoding);this._writableState.defaultEncoding=encoding;return this;};function decodeChunk(state,chunk,encoding){if(!state.objectMode&&state.decodeStrings!==false&&typeof chunk==='string'){chunk=Buffer.from(chunk,encoding);}return chunk;}Object.defineProperty(Writable.prototype,'writableHighWaterMark',{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:false,get:function get(){return this._writableState.highWaterMark;}});// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream,state,isBuf,chunk,encoding,cb){if(!isBuf){var newChunk=decodeChunk(state,chunk,encoding);if(chunk!==newChunk){isBuf=true;encoding='buffer';chunk=newChunk;}}var len=state.objectMode?1:chunk.length;state.length+=len;var ret=state.length<state.highWaterMark;// we must ensure that previous needDrain will not be reset to false.
if(!ret)state.needDrain=true;if(state.writing||state.corked){var last=state.lastBufferedRequest;state.lastBufferedRequest={chunk:chunk,encoding:encoding,isBuf:isBuf,callback:cb,next:null};if(last){last.next=state.lastBufferedRequest;}else{state.bufferedRequest=state.lastBufferedRequest;}state.bufferedRequestCount+=1;}else{doWrite(stream,state,false,len,chunk,encoding,cb);}return ret;}function doWrite(stream,state,writev,len,chunk,encoding,cb){state.writelen=len;state.writecb=cb;state.writing=true;state.sync=true;if(writev)stream._writev(chunk,state.onwrite);else stream._write(chunk,encoding,state.onwrite);state.sync=false;}function onwriteError(stream,state,sync,er,cb){--state.pendingcb;if(sync){// defer the callback if we are being called synchronously
// to avoid piling up things on the stack
pna.nextTick(cb,er);// this can emit finish, and it will always happen
// after error
pna.nextTick(finishMaybe,stream,state);stream._writableState.errorEmitted=true;stream.emit('error',er);}else{// the caller expect this to happen before if
// it is async
cb(er);stream._writableState.errorEmitted=true;stream.emit('error',er);// this can emit finish, but finish must
// always follow error
finishMaybe(stream,state);}}function onwriteStateUpdate(state){state.writing=false;state.writecb=null;state.length-=state.writelen;state.writelen=0;}function onwrite(stream,er){var state=stream._writableState;var sync=state.sync;var cb=state.writecb;onwriteStateUpdate(state);if(er)onwriteError(stream,state,sync,er,cb);else{// Check if we're actually ready to finish, but don't emit yet
var finished=needFinish(state);if(!finished&&!state.corked&&!state.bufferProcessing&&state.bufferedRequest){clearBuffer(stream,state);}if(sync){/*<replacement>*/asyncWrite(afterWrite,stream,state,finished,cb);/*</replacement>*/}else{afterWrite(stream,state,finished,cb);}}}function afterWrite(stream,state,finished,cb){if(!finished)onwriteDrain(stream,state);state.pendingcb--;cb();finishMaybe(stream,state);}// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream,state){if(state.length===0&&state.needDrain){state.needDrain=false;stream.emit('drain');}}// if there's something in the buffer waiting, then process it
function clearBuffer(stream,state){state.bufferProcessing=true;var entry=state.bufferedRequest;if(stream._writev&&entry&&entry.next){// Fast case, write everything using _writev()
var l=state.bufferedRequestCount;var buffer=new Array(l);var holder=state.corkedRequestsFree;holder.entry=entry;var count=0;var allBuffers=true;while(entry){buffer[count]=entry;if(!entry.isBuf)allBuffers=false;entry=entry.next;count+=1;}buffer.allBuffers=allBuffers;doWrite(stream,state,true,state.length,buffer,'',holder.finish);// doWrite is almost always async, defer these to save a bit of time
// as the hot path ends with doWrite
state.pendingcb++;state.lastBufferedRequest=null;if(holder.next){state.corkedRequestsFree=holder.next;holder.next=null;}else{state.corkedRequestsFree=new CorkedRequest(state);}state.bufferedRequestCount=0;}else{// Slow case, write chunks one-by-one
while(entry){var chunk=entry.chunk;var encoding=entry.encoding;var cb=entry.callback;var len=state.objectMode?1:chunk.length;doWrite(stream,state,false,len,chunk,encoding,cb);entry=entry.next;state.bufferedRequestCount--;// if we didn't call the onwrite immediately, then
// it means that we need to wait until it does.
// also, that means that the chunk and cb are currently
// being processed, so move the buffer counter past them.
if(state.writing){break;}}if(entry===null)state.lastBufferedRequest=null;}state.bufferedRequest=entry;state.bufferProcessing=false;}Writable.prototype._write=function(chunk,encoding,cb){cb(new Error('_write() is not implemented'));};Writable.prototype._writev=null;Writable.prototype.end=function(chunk,encoding,cb){var state=this._writableState;if(typeof chunk==='function'){cb=chunk;chunk=null;encoding=null;}else if(typeof encoding==='function'){cb=encoding;encoding=null;}if(chunk!==null&&chunk!==undefined)this.write(chunk,encoding);// .end() fully uncorks
if(state.corked){state.corked=1;this.uncork();}// ignore unnecessary end() calls.
if(!state.ending&&!state.finished)endWritable(this,state,cb);};function needFinish(state){return state.ending&&state.length===0&&state.bufferedRequest===null&&!state.finished&&!state.writing;}function callFinal(stream,state){stream._final(function(err){state.pendingcb--;if(err){stream.emit('error',err);}state.prefinished=true;stream.emit('prefinish');finishMaybe(stream,state);});}function prefinish(stream,state){if(!state.prefinished&&!state.finalCalled){if(typeof stream._final==='function'){state.pendingcb++;state.finalCalled=true;pna.nextTick(callFinal,stream,state);}else{state.prefinished=true;stream.emit('prefinish');}}}function finishMaybe(stream,state){var need=needFinish(state);if(need){prefinish(stream,state);if(state.pendingcb===0){state.finished=true;stream.emit('finish');}}return need;}function endWritable(stream,state,cb){state.ending=true;finishMaybe(stream,state);if(cb){if(state.finished)pna.nextTick(cb);else stream.once('finish',cb);}state.ended=true;stream.writable=false;}function onCorkedFinish(corkReq,state,err){var entry=corkReq.entry;corkReq.entry=null;while(entry){var cb=entry.callback;state.pendingcb--;cb(err);entry=entry.next;}if(state.corkedRequestsFree){state.corkedRequestsFree.next=corkReq;}else{state.corkedRequestsFree=corkReq;}}Object.defineProperty(Writable.prototype,'destroyed',{get:function get(){if(this._writableState===undefined){return false;}return this._writableState.destroyed;},set:function set(value){// we ignore the value if the stream
// has not been initialized yet
if(!this._writableState){return;}// backward compatibility, the user is explicitly
// managing destroyed
this._writableState.destroyed=value;}});Writable.prototype.destroy=destroyImpl.destroy;Writable.prototype._undestroy=destroyImpl.undestroy;Writable.prototype._destroy=function(err,cb){this.end();cb(err);};}).call(this,require('_process'),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("timers").setImmediate);},{"./_stream_duplex":191,"./internal/streams/destroy":197,"./internal/streams/stream":198,"_process":189,"core-util-is":9,"inherits":14,"process-nextick-args":188,"safe-buffer":203,"timers":211,"util-deprecate":212}],196:[function(require,module,exports){'use strict';function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Buffer=require('safe-buffer').Buffer;var util=require('util');function copyBuffer(src,target,offset){src.copy(target,offset);}module.exports=function(){function BufferList(){_classCallCheck(this,BufferList);this.head=null;this.tail=null;this.length=0;}BufferList.prototype.push=function push(v){var entry={data:v,next:null};if(this.length>0)this.tail.next=entry;else this.head=entry;this.tail=entry;++this.length;};BufferList.prototype.unshift=function unshift(v){var entry={data:v,next:this.head};if(this.length===0)this.tail=entry;this.head=entry;++this.length;};BufferList.prototype.shift=function shift(){if(this.length===0)return;var ret=this.head.data;if(this.length===1)this.head=this.tail=null;else this.head=this.head.next;--this.length;return ret;};BufferList.prototype.clear=function clear(){this.head=this.tail=null;this.length=0;};BufferList.prototype.join=function join(s){if(this.length===0)return'';var p=this.head;var ret=''+p.data;while(p=p.next){ret+=s+p.data;}return ret;};BufferList.prototype.concat=function concat(n){if(this.length===0)return Buffer.alloc(0);if(this.length===1)return this.head.data;var ret=Buffer.allocUnsafe(n>>>0);var p=this.head;var i=0;while(p){copyBuffer(p.data,ret,i);i+=p.data.length;p=p.next;}return ret;};return BufferList;}();if(util&&util.inspect&&util.inspect.custom){module.exports.prototype[util.inspect.custom]=function(){var obj=util.inspect({length:this.length});return this.constructor.name+' '+obj;};}},{"safe-buffer":203,"util":7}],197:[function(require,module,exports){'use strict';/*<replacement>*/var pna=require('process-nextick-args');/*</replacement>*/// undocumented cb() API, needed for core, not for public API
function destroy(err,cb){var _this=this;var readableDestroyed=this._readableState&&this._readableState.destroyed;var writableDestroyed=this._writableState&&this._writableState.destroyed;if(readableDestroyed||writableDestroyed){if(cb){cb(err);}else if(err&&(!this._writableState||!this._writableState.errorEmitted)){pna.nextTick(emitErrorNT,this,err);}return this;}// we set destroyed to true before firing error callbacks in order
// to make it re-entrance safe in case destroy() is called within callbacks
if(this._readableState){this._readableState.destroyed=true;}// if this is a duplex stream mark the writable part as destroyed as well
if(this._writableState){this._writableState.destroyed=true;}this._destroy(err||null,function(err){if(!cb&&err){pna.nextTick(emitErrorNT,_this,err);if(_this._writableState){_this._writableState.errorEmitted=true;}}else if(cb){cb(err);}});return this;}function undestroy(){if(this._readableState){this._readableState.destroyed=false;this._readableState.reading=false;this._readableState.ended=false;this._readableState.endEmitted=false;}if(this._writableState){this._writableState.destroyed=false;this._writableState.ended=false;this._writableState.ending=false;this._writableState.finished=false;this._writableState.errorEmitted=false;}}function emitErrorNT(self,err){self.emit('error',err);}module.exports={destroy:destroy,undestroy:undestroy};},{"process-nextick-args":188}],198:[function(require,module,exports){module.exports=require('events').EventEmitter;},{"events":11}],199:[function(require,module,exports){module.exports=require('./readable').PassThrough;},{"./readable":200}],200:[function(require,module,exports){exports=module.exports=require('./lib/_stream_readable.js');exports.Stream=exports;exports.Readable=exports;exports.Writable=require('./lib/_stream_writable.js');exports.Duplex=require('./lib/_stream_duplex.js');exports.Transform=require('./lib/_stream_transform.js');exports.PassThrough=require('./lib/_stream_passthrough.js');},{"./lib/_stream_duplex.js":191,"./lib/_stream_passthrough.js":192,"./lib/_stream_readable.js":193,"./lib/_stream_transform.js":194,"./lib/_stream_writable.js":195}],201:[function(require,module,exports){module.exports=require('./readable').Transform;},{"./readable":200}],202:[function(require,module,exports){module.exports=require('./lib/_stream_writable.js');},{"./lib/_stream_writable.js":195}],203:[function(require,module,exports){/* eslint-disable node/no-deprecated-api */var buffer=require('buffer');var Buffer=buffer.Buffer;// alternative to using Object.keys for old browsers
function copyProps(src,dst){for(var key in src){dst[key]=src[key];}}if(Buffer.from&&Buffer.alloc&&Buffer.allocUnsafe&&Buffer.allocUnsafeSlow){module.exports=buffer;}else{// Copy properties from require('buffer')
copyProps(buffer,exports);exports.Buffer=SafeBuffer;}function SafeBuffer(arg,encodingOrOffset,length){return Buffer(arg,encodingOrOffset,length);}// Copy static methods from Buffer
copyProps(Buffer,SafeBuffer);SafeBuffer.from=function(arg,encodingOrOffset,length){if(typeof arg==='number'){throw new TypeError('Argument must not be a number');}return Buffer(arg,encodingOrOffset,length);};SafeBuffer.alloc=function(size,fill,encoding){if(typeof size!=='number'){throw new TypeError('Argument must be a number');}var buf=Buffer(size);if(fill!==undefined){if(typeof encoding==='string'){buf.fill(fill,encoding);}else{buf.fill(fill);}}else{buf.fill(0);}return buf;};SafeBuffer.allocUnsafe=function(size){if(typeof size!=='number'){throw new TypeError('Argument must be a number');}return Buffer(size);};SafeBuffer.allocUnsafeSlow=function(size){if(typeof size!=='number'){throw new TypeError('Argument must be a number');}return buffer.SlowBuffer(size);};},{"buffer":8}],204:[function(require,module,exports){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
module.exports=Stream;var EE=require('events').EventEmitter;var inherits=require('inherits');inherits(Stream,EE);Stream.Readable=require('readable-stream/readable.js');Stream.Writable=require('readable-stream/writable.js');Stream.Duplex=require('readable-stream/duplex.js');Stream.Transform=require('readable-stream/transform.js');Stream.PassThrough=require('readable-stream/passthrough.js');// Backwards-compat with node 0.4.x
Stream.Stream=Stream;// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.
function Stream(){EE.call(this);}Stream.prototype.pipe=function(dest,options){var source=this;function ondata(chunk){if(dest.writable){if(false===dest.write(chunk)&&source.pause){source.pause();}}}source.on('data',ondata);function ondrain(){if(source.readable&&source.resume){source.resume();}}dest.on('drain',ondrain);// If the 'end' option is not supplied, dest.end() will be called when
// source gets the 'end' or 'close' events.  Only dest.end() once.
if(!dest._isStdio&&(!options||options.end!==false)){source.on('end',onend);source.on('close',onclose);}var didOnEnd=false;function onend(){if(didOnEnd)return;didOnEnd=true;dest.end();}function onclose(){if(didOnEnd)return;didOnEnd=true;if(typeof dest.destroy==='function')dest.destroy();}// don't leave dangling pipes when there are errors.
function onerror(er){cleanup();if(EE.listenerCount(this,'error')===0){throw er;// Unhandled stream error in pipe.
}}source.on('error',onerror);dest.on('error',onerror);// remove all the event listeners that were added.
function cleanup(){source.removeListener('data',ondata);dest.removeListener('drain',ondrain);source.removeListener('end',onend);source.removeListener('close',onclose);source.removeListener('error',onerror);dest.removeListener('error',onerror);source.removeListener('end',cleanup);source.removeListener('close',cleanup);dest.removeListener('close',cleanup);}source.on('end',cleanup);source.on('close',cleanup);dest.on('close',cleanup);dest.emit('pipe',source);// Allow for unix-like usage: A.pipe(B).pipe(C)
return dest;};},{"events":11,"inherits":14,"readable-stream/duplex.js":190,"readable-stream/passthrough.js":199,"readable-stream/readable.js":200,"readable-stream/transform.js":201,"readable-stream/writable.js":202}],205:[function(require,module,exports){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';/*<replacement>*/var Buffer=require('safe-buffer').Buffer;/*</replacement>*/var isEncoding=Buffer.isEncoding||function(encoding){encoding=''+encoding;switch(encoding&&encoding.toLowerCase()){case'hex':case'utf8':case'utf-8':case'ascii':case'binary':case'base64':case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':case'raw':return true;default:return false;}};function _normalizeEncoding(enc){if(!enc)return'utf8';var retried;while(true){switch(enc){case'utf8':case'utf-8':return'utf8';case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return'utf16le';case'latin1':case'binary':return'latin1';case'base64':case'ascii':case'hex':return enc;default:if(retried)return;// undefined
enc=(''+enc).toLowerCase();retried=true;}}};// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc){var nenc=_normalizeEncoding(enc);if(typeof nenc!=='string'&&(Buffer.isEncoding===isEncoding||!isEncoding(enc)))throw new Error('Unknown encoding: '+enc);return nenc||enc;}// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder=StringDecoder;function StringDecoder(encoding){this.encoding=normalizeEncoding(encoding);var nb;switch(this.encoding){case'utf16le':this.text=utf16Text;this.end=utf16End;nb=4;break;case'utf8':this.fillLast=utf8FillLast;nb=4;break;case'base64':this.text=base64Text;this.end=base64End;nb=3;break;default:this.write=simpleWrite;this.end=simpleEnd;return;}this.lastNeed=0;this.lastTotal=0;this.lastChar=Buffer.allocUnsafe(nb);}StringDecoder.prototype.write=function(buf){if(buf.length===0)return'';var r;var i;if(this.lastNeed){r=this.fillLast(buf);if(r===undefined)return'';i=this.lastNeed;this.lastNeed=0;}else{i=0;}if(i<buf.length)return r?r+this.text(buf,i):this.text(buf,i);return r||'';};StringDecoder.prototype.end=utf8End;// Returns only complete characters in a Buffer
StringDecoder.prototype.text=utf8Text;// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast=function(buf){if(this.lastNeed<=buf.length){buf.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed);return this.lastChar.toString(this.encoding,0,this.lastTotal);}buf.copy(this.lastChar,this.lastTotal-this.lastNeed,0,buf.length);this.lastNeed-=buf.length;};// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte){if(byte<=0x7F)return 0;else if(byte>>5===0x06)return 2;else if(byte>>4===0x0E)return 3;else if(byte>>3===0x1E)return 4;return byte>>6===0x02?-1:-2;}// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self,buf,i){var j=buf.length-1;if(j<i)return 0;var nb=utf8CheckByte(buf[j]);if(nb>=0){if(nb>0)self.lastNeed=nb-1;return nb;}if(--j<i||nb===-2)return 0;nb=utf8CheckByte(buf[j]);if(nb>=0){if(nb>0)self.lastNeed=nb-2;return nb;}if(--j<i||nb===-2)return 0;nb=utf8CheckByte(buf[j]);if(nb>=0){if(nb>0){if(nb===2)nb=0;else self.lastNeed=nb-3;}return nb;}return 0;}// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self,buf,p){if((buf[0]&0xC0)!==0x80){self.lastNeed=0;return"\uFFFD";}if(self.lastNeed>1&&buf.length>1){if((buf[1]&0xC0)!==0x80){self.lastNeed=1;return"\uFFFD";}if(self.lastNeed>2&&buf.length>2){if((buf[2]&0xC0)!==0x80){self.lastNeed=2;return"\uFFFD";}}}}// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf){var p=this.lastTotal-this.lastNeed;var r=utf8CheckExtraBytes(this,buf,p);if(r!==undefined)return r;if(this.lastNeed<=buf.length){buf.copy(this.lastChar,p,0,this.lastNeed);return this.lastChar.toString(this.encoding,0,this.lastTotal);}buf.copy(this.lastChar,p,0,buf.length);this.lastNeed-=buf.length;}// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf,i){var total=utf8CheckIncomplete(this,buf,i);if(!this.lastNeed)return buf.toString('utf8',i);this.lastTotal=total;var end=buf.length-(total-this.lastNeed);buf.copy(this.lastChar,0,end);return buf.toString('utf8',i,end);}// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf){var r=buf&&buf.length?this.write(buf):'';if(this.lastNeed)return r+"\uFFFD";return r;}// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf,i){if((buf.length-i)%2===0){var r=buf.toString('utf16le',i);if(r){var c=r.charCodeAt(r.length-1);if(c>=0xD800&&c<=0xDBFF){this.lastNeed=2;this.lastTotal=4;this.lastChar[0]=buf[buf.length-2];this.lastChar[1]=buf[buf.length-1];return r.slice(0,-1);}}return r;}this.lastNeed=1;this.lastTotal=2;this.lastChar[0]=buf[buf.length-1];return buf.toString('utf16le',i,buf.length-1);}// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf){var r=buf&&buf.length?this.write(buf):'';if(this.lastNeed){var end=this.lastTotal-this.lastNeed;return r+this.lastChar.toString('utf16le',0,end);}return r;}function base64Text(buf,i){var n=(buf.length-i)%3;if(n===0)return buf.toString('base64',i);this.lastNeed=3-n;this.lastTotal=3;if(n===1){this.lastChar[0]=buf[buf.length-1];}else{this.lastChar[0]=buf[buf.length-2];this.lastChar[1]=buf[buf.length-1];}return buf.toString('base64',i,buf.length-n);}function base64End(buf){var r=buf&&buf.length?this.write(buf):'';if(this.lastNeed)return r+this.lastChar.toString('base64',0,3-this.lastNeed);return r;}// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf){return buf.toString(this.encoding);}function simpleEnd(buf){return buf&&buf.length?this.write(buf):'';}},{"safe-buffer":203}],206:[function(require,module,exports){(function(process,Buffer){// Transforms a stream of TAP into a stream of result objects
// and string comments.  Emits "results" event with summary.
var Writable=require('stream').Writable;if(!Writable){try{Writable=require('readable-stream').Writable;}catch(er){throw new Error('Please install "readable-stream" to use this module '+'with Node.js v0.8 and before');}}var yaml=require('js-yaml');var util=require('util');var assert=require('assert');util.inherits(Parser,Writable);module.exports=Parser;var testPointRE=/^(not )?ok(?: ([0-9]+))?(?:(?: - )?(.*))?\n$/;function parseDirective(line){line=line.trim();var time=line.match(/^time=((?:[1-9][0-9]*|0)(?:\.[0-9]+)?)(ms|s)$/i);if(time){var n=+time[1];if(time[2]==='s')n*=1000;return['time',n];}var type=line.match(/^(todo|skip)\b/i);if(!type)return false;return[type[1].toLowerCase(),line.substr(type[1].length).trim()||true];}function Result(line,count){var parsed=line.match(testPointRE);assert(parsed,'invalid line to Result');var ok=!parsed[1];var id=+(parsed[2]||count+1);this.ok=ok;this.id=id;var src=line;Object.defineProperty(this,'src',{value:line,writable:true,enumerable:false,configurable:false});this.src=line;var rest=parsed[3]||'';var name;rest=rest.replace(/([^\\]|^)((?:\\\\)*)#/g,'$1\n$2').split('\n');name=rest.shift();rest=rest.filter(function(r){return r.trim();}).join('#');// now, let's see if there's a directive in there.
var dir=parseDirective(rest.trim());if(!dir)name+=rest?'#'+rest:'';else this[dir[0]]=dir[1];if(name)this.name=name.trim();return this;}Object.defineProperty(Result.prototype,'toString',{value:function value(){return this.src;},enumerable:false,writable:true,configurable:true});function Parser(options,onComplete){if(typeof options==='function'){onComplete=options;options={};}if(!(this instanceof Parser))return new Parser(options,onComplete);options=options||{};if(onComplete)this.on('complete',onComplete);this.sawValidTap=false;this.failures=[];this.indent=options.indent||'';this.level=options.level||0;Writable.call(this);this.buffer='';this.bailedOut=false;this.planStart=-1;this.planEnd=-1;this.planComment='';this.yamlish='';this.yind='';this.child=null;this.current=null;this.commentQueue=[];this.count=0;this.pass=0;this.fail=0;this.todo=0;this.skip=0;this.ok=true;this.strict=false;this.postPlan=false;}Parser.prototype.createResult=function(line){if(!testPointRE.test(line))return null;this.emitResult();return new Result(line,this.count);};Parser.prototype.nonTap=function(data){if(this.strict){this.failures.push({tapError:'Non-TAP data encountered in strict mode',data:data});this.ok=false;}this.emit('extra',data);};Parser.prototype.processYamlish=function(){var yamlish=this.yamlish;this.yamlish='';this.yind='';if(!this.current){this.nonTap(yamlish);return;}try{var diags=yaml.safeLoad(yamlish);}catch(er){this.nonTap(yamlish);return;}this.current.src+=yamlish;this.current.diag=diags;this.emitResult();};Parser.prototype.write=function(chunk,encoding,cb){if(typeof encoding==='string'&&encoding!=='utf8')chunk=new Buffer(chunk,encoding);if(Buffer.isBuffer(chunk))chunk+='';if(typeof encoding==='function'){cb=encoding;encoding=null;}if(this.bailedOut){if(cb)process.nextTick(cb);return true;}this.buffer+=chunk;do{var match=this.buffer.match(/^.*\r?\n/);if(!match||this.bailedOut)break;this.buffer=this.buffer.substr(match[0].length);this._parse(match[0]);}while(this.buffer.length);if(cb)process.nextTick(cb);return true;};Parser.prototype.end=function(chunk,encoding,cb){if(chunk){if(typeof encoding==='function'){cb=encoding;encoding=null;}this.write(chunk,encoding);}if(this.buffer)this.write('\n');// if we have yamlish, means we didn't finish with a ...
if(this.yamlish)this.nonTap(this.yamlish);this.emitResult();var skipAll;if(this.planEnd===0&&this.planStart===1){this.ok=true;skipAll=true;}else if(this.count!==this.planEnd-this.planStart+1)this.ok=false;if(this.ok&&!skipAll&&this.first!==this.planStart)this.ok=false;if(this.ok&&!skipAll&&this.last!==this.planEnd)this.ok=false;var final={ok:this.ok,count:this.count,pass:this.pass};if(this.fail)final.fail=this.fail;if(this.bailedOut)final.bailout=this.bailedOut;if(this.todo)final.todo=this.todo;if(this.skip)final.skip=this.skip;if(this.planStart!==-1){final.plan={start:this.planStart,end:this.planEnd};if(skipAll){final.plan.skipAll=true;if(this.planComment)final.plan.skipReason=this.planComment;}}// We didn't get any actual tap, so just treat this like a
// 1..0 test, because it was probably just console.log junk
if(!this.sawValidTap){final.plan={start:1,end:0};final.ok=true;}if(this.failures.length)final.failures=this.failures;this.emit('complete',final);Writable.prototype.end.call(this,null,null,cb);};Parser.prototype.bailout=function(reason){this.bailedOut=reason||true;this.ok=false;this.emit('bailout',reason);};Parser.prototype.clearCommentQueue=function(){for(var c=0;c<this.commentQueue.length;c++){this.emit('comment',this.commentQueue[c]);}this.commentQueue.length=0;};Parser.prototype.emitResult=function(){if(this.child){this.child.end();this.child=null;}this.yamlish='';this.yind='';if(!this.current)return this.clearCommentQueue();var res=this.current;this.current=null;this.count++;if(res.ok){this.pass++;}else{this.fail++;if(!res.todo&&!res.skip){this.ok=false;this.failures.push(res);}}if(res.skip)this.skip++;if(res.todo)this.todo++;this.emit('assert',res);this.clearCommentQueue();};Parser.prototype.startChild=function(indent,line){if(!line.substr(indent.length).match(/^# Subtest:/)){this.nonTap(line);return;}this.emitResult();this.child=new Parser({indent:indent,parent:this,level:this.level+1});this.emit('child',this.child);this.child.on('bailout',this.bailout.bind(this));var self=this;this.child.on('complete',function(results){if(this.sawValidTap&&!results.ok)self.ok=false;});this.child.write(line.substr(indent.length));};Parser.prototype.emitComment=function(line){if(this.current||this.commentQueue.length)this.commentQueue.push(line);else this.emit('comment',line);};Parser.prototype._parse=function(line){// normalize line endings
line=line.replace(/\r\n$/,'\n');// ignore empty lines, except if they are (or could be) part of yaml
// >\nfoo\n\nbar\n is yaml for `"foo\nbar"`
// >\nfoo\nbar\n is yaml for `"foo bar"`
if(line==='\n'||line.trim()===''){if(this.child){this.child.write('\n');}else if(this.yind){this.yamlish+='\n';}return;}// After a bailout, everything is ignored
if(this.bailedOut)return;this.emit('line',line);// The only Pragma supported is strict. Others may be added.
var pragma=line.match(/^pragma ([+-])strict\n$/);if(pragma){this.strict=pragma[1]==='+';this.emit('pragma',{strict:this.strict});return;}var bailout=line.match(/^bail out!(.*)\n$/i);if(bailout){this.sawValidTap=true;var reason=bailout[1].trim();this.bailout(reason);return;}// If version is specified, must be at the very beginning.
var version=line.match(/^TAP version ([0-9]+)\n$/i);if(version){version=parseInt(version[1],10);if(version>=13&&this.planStart===-1&&this.count===0)this.emit('version',version);else this.nonTap(line);return;}// still belongs to the child.
if(this.child){if(line.indexOf(this.child.indent)===0){line=line.substr(this.child.indent.length);this.child.write(line);return;}if(line.trim().charAt(0)==='#'){this.emitComment(line);return;}// a child test can only end when we get an test point line.
// anything else is extra.
if(this.child.sawValidTap&&!/^(not )?ok/.test(line)){this.nonTap(line);return;}}// comment, but let "# Subtest:" comments start a child
var c=line.match(/^(\s+)?#(.*)/);if(c&&!(c[1]&&/^ Subtest: /.test(c[2]))){this.emitComment(line);return;}// if we got a plan at the end, or a 1..0 plan, then we can't
// have any more results, yamlish, or child sets.
if(this.postPlan){this.nonTap(line);return;}var indent=line.match(/^[ \t]+/);if(indent){indent=indent[0];// if we don't have a current res, then it can't be yamlish.
// If it is a subtest command, then it's a child test.
if(!this.current){this.startChild(indent,line);return;}// if we are not currently processing yamlish, then it has to
// be either the start of a child, or the start of yamlish.
if(!this.yind){// either this starts yamlish, or it is a child.
if(line===indent+'---\n')this.yind=indent;else this.startChild(indent,line);return;}// now we know it is yamlish
// if it's not as indented, then it's broken.
// The whole yamlish chunk is garbage.
if(indent.indexOf(this.yind)!==0){// oops!  was not actually yamlish, I guess.
// treat as garbage
this.nonTap(this.yamlish+line);this.emitResult();return;}// yamlish ends with "...\n"
if(line===this.yind+'...\n'){this.processYamlish();return;}// ok!  it is valid yamlish indentation, and not the ...
// save it to parse later.
this.yamlish+=line;return;}// not indented.  if we were doing yamlish, then it didn't go good
if(this.yind){this.nonTap(this.yamlish);this.yamlish='';this.yind='';}var plan=line.match(/^([0-9]+)\.\.([0-9]+)(?:\s+(?:#\s*(.*)))?\n$/);if(plan){if(this.planStart!==-1){// this is not valid tap, just garbage
this.nonTap(line);return;}this.sawValidTap=true;this.emitResult();var start=+plan[1];var end=+plan[2];var comment=plan[3];this.planStart=start;this.planEnd=end;var p={start:start,end:end};if(comment)this.planComment=p.comment=comment;this.emit('plan',p);// This means that the plan is coming at the END of all the tests
// Plans MUST be either at the beginning or the very end.  We treat
// plans like '1..0' the same, since they indicate that no tests
// will be coming.
if(this.count!==0||this.planEnd===0)this.postPlan=true;return;}var res=this.createResult(line);if(!res){this.nonTap(line);return;}if(this.planStart!==-1){var lessThanStart=+res.id<this.planStart;var greaterThanEnd=+res.id>this.planEnd;if(lessThanStart||greaterThanEnd){this.ok=false;if(lessThanStart)res.tapError='id less than plan start';else res.tapError='id greater than plan end';this.failures.push(res);}}this.sawValidTap=true;if(res.id){if(!this.first||res.id<this.first)this.first=res.id;if(!this.last||res.id>this.last)this.last=res.id;}// hold onto it, because we might get yamlish diagnostics
this.current=res;};}).call(this,require('_process'),require("buffer").Buffer);},{"_process":189,"assert":5,"buffer":8,"js-yaml":17,"readable-stream":200,"stream":204,"util":216}],207:[function(require,module,exports){var parser=require('tap-parser');var through=require('through2');var duplexer=require('duplexer');var extend=require('xtend');var serialize=require('./serialize');module.exports=converter;var defaults={// Whether the TAP comments should not be used as test-suite names
dontUseCommentsAsTestNames:false,// Whether . in test-suite names should be replaced with Unicode dot
// NOTE: this feature exist because many xUnit reporters assume . in
// test-suite name implies package hierarchy, which may not be the case.
replaceWithUnicodeDot:false,// If specified, all test-suites will be prefixed with the given
// package name.
// NOTE: replaceWithUnicodeDot does not apply to package and . can be
// used to specify package hierarchy.
package:'',// Whether tap parser should be in strict mode or not, false by default.
strict:false};function converter(options){options=extend(defaults,options);var outStream=through();var tapParser=parser();tapParser.strict=options.strict;var testSuites=[];var testCase;var noMoreTests=false;var exitCode=0;var planPresent=false;tapParser.on('comment',function(comment){// comment specifies boundaries between testsuites, unless feature disabled.
if(options.dontUseCommentsAsTestNames){return;}if(noMoreTests){return;}// create new test
testCase=newTest(comment);});tapParser.on('plan',function(){planPresent=true;});tapParser.on('assert',function(assert){// no test name was given, so all asserts go in a single test
if(!testCase){testCase=newTest('Default');}testCase.asserts.push(assert);});tapParser.on('extra',function(e){if(testCase){testCase.extra.push(e);}});tapParser.on('extra',function(line){});tapParser.on('plan',function(p){noMoreTests=true;});tapParser.on('complete',function(r){// output any parse errors
if(testCase&&!testSuites.filter(function(ts){return ts.id===testCase.id;}).length){testSuites.push(testCase);}if(r.failures){r.failures.forEach(function(fail){if(fail.tapError){var err=new Error('TAP parse error: '+fail.tapError);exitCode=1;outStream.emit('error',err);}});}// treat # SKIP and # TODO the same
// see https://github.com/aghassemi/tap-xunit/issues/8
testSuites.forEach(function(suite){suite.asserts.forEach(function(a){a.skip=a.skip||a.todo;if(!a.ok&&!a.skip){exitCode=1;}});});if(tapParser.sawValidTap&&planPresent){var xmlString=serialize(testSuites);outStream.push(xmlString+'\n');}else{// Fail, no valid tap found (normally means no plan line present)
// Note that is a less strict check than TapParser's strict mode.
exitCode=1;}result.exitCode=exitCode;outStream.emit('end');});var result=duplexer(tapParser,outStream);return result;function newTest(testName){testSuites.push({id:testSuites.length,extra:[],asserts:[],testName:formatTestName(testName)});return testSuites[testSuites.length-1];}function formatTestName(testName){if(options.replaceWithUnicodeDot){var unicodeDot="\uFF0E";//full width unicode dot
testName=testName.replace(/\./g,unicodeDot);}if(options.package){testName=options.package+'.'+testName;}if(testName.indexOf('#')===0){testName=testName.substr(1);}return testName.trim();}}},{"./serialize":209,"duplexer":10,"tap-parser":206,"through2":210,"xtend":234}],208:[function(require,module,exports){var NOT_SAFE_IN_XML_1_0=/[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm;module.exports=function sanitizeString(str){return str.replace(NOT_SAFE_IN_XML_1_0,'');};},{}],209:[function(require,module,exports){var xmlbuilder=require('xmlbuilder');var sanitizeString=require('./sanitize-string');module.exports=function serialize(testCases){var rootXml=xmlbuilder.create('testsuites');testCases.forEach(function(suite){var suiteElement=rootXml.ele('testsuite');var skipped;var failureElement;suiteElement.att('tests',suite.asserts.length);skipped=suite.asserts.filter(function(a){return a.skip;}).length;if(skipped){suiteElement.att('skipped',skipped);}suiteElement.att('failures',suite.asserts.filter(function(a){return!a.ok&&!a.skip;}).length);suiteElement.att('errors','0');suiteElement.att('name',suite.testName||'');suite.asserts.forEach(function(a,i){var testCaseElement=suiteElement.ele('testcase',{name:'#'+a.id+' '+a.name});if(a.skip){testCaseElement.ele('skipped');}if(!a.ok&&!a.skip){failureElement=testCaseElement.ele('failure');if(a.diag){failureElement.txt(formatFailure(a.diag));}}if(i===suite.asserts.length-1){suite.extra.forEach(function(extraContent){testCaseElement.ele('system-out',sanitizeString(extraContent));});}});});return rootXml.end({pretty:true,indent:'  ',newline:'\n'});};function formatFailure(diag){var text='\n          ---\n';for(var key in diag){if(diag.hasOwnProperty(key)&&diag[key]!==undefined){var value=diag[key];text+='            '+key+': '+((typeof value==="undefined"?"undefined":_typeof2(value))==='object'?JSON.stringify(value):value)+'\n';}}text+='          ...\n      ';return text;}},{"./sanitize-string":208,"xmlbuilder":233}],210:[function(require,module,exports){(function(process){var Transform=require('readable-stream/transform'),inherits=require('util').inherits,xtend=require('xtend');function DestroyableTransform(opts){Transform.call(this,opts);this._destroyed=false;}inherits(DestroyableTransform,Transform);DestroyableTransform.prototype.destroy=function(err){if(this._destroyed)return;this._destroyed=true;var self=this;process.nextTick(function(){if(err)self.emit('error',err);self.emit('close');});};// a noop _transform function
function noop(chunk,enc,callback){callback(null,chunk);}// create a new export function, used by both the main export and
// the .ctor export, contains common logic for dealing with arguments
function through2(construct){return function(options,transform,flush){if(typeof options=='function'){flush=transform;transform=options;options={};}if(typeof transform!='function')transform=noop;if(typeof flush!='function')flush=null;return construct(options,transform,flush);};}// main export, just make me a transform stream!
module.exports=through2(function(options,transform,flush){var t2=new DestroyableTransform(options);t2._transform=transform;if(flush)t2._flush=flush;return t2;});// make me a reusable prototype that I can `new`, or implicitly `new`
// with a constructor call
module.exports.ctor=through2(function(options,transform,flush){function Through2(override){if(!(this instanceof Through2))return new Through2(override);this.options=xtend(options,override);DestroyableTransform.call(this,this.options);}inherits(Through2,DestroyableTransform);Through2.prototype._transform=transform;if(flush)Through2.prototype._flush=flush;return Through2;});module.exports.obj=through2(function(options,transform,flush){var t2=new DestroyableTransform(xtend({objectMode:true,highWaterMark:16},options));t2._transform=transform;if(flush)t2._flush=flush;return t2;});}).call(this,require('_process'));},{"_process":189,"readable-stream/transform":201,"util":216,"xtend":234}],211:[function(require,module,exports){(function(setImmediate,clearImmediate){var nextTick=require('process/browser.js').nextTick;var apply=Function.prototype.apply;var slice=Array.prototype.slice;var immediateIds={};var nextImmediateId=0;// DOM APIs, for completeness
exports.setTimeout=function(){return new Timeout(apply.call(setTimeout,window,arguments),clearTimeout);};exports.setInterval=function(){return new Timeout(apply.call(setInterval,window,arguments),clearInterval);};exports.clearTimeout=exports.clearInterval=function(timeout){timeout.close();};function Timeout(id,clearFn){this._id=id;this._clearFn=clearFn;}Timeout.prototype.unref=Timeout.prototype.ref=function(){};Timeout.prototype.close=function(){this._clearFn.call(window,this._id);};// Does not start the time, just sets up the members needed.
exports.enroll=function(item,msecs){clearTimeout(item._idleTimeoutId);item._idleTimeout=msecs;};exports.unenroll=function(item){clearTimeout(item._idleTimeoutId);item._idleTimeout=-1;};exports._unrefActive=exports.active=function(item){clearTimeout(item._idleTimeoutId);var msecs=item._idleTimeout;if(msecs>=0){item._idleTimeoutId=setTimeout(function onTimeout(){if(item._onTimeout)item._onTimeout();},msecs);}};// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate=typeof setImmediate==="function"?setImmediate:function(fn){var id=nextImmediateId++;var args=arguments.length<2?false:slice.call(arguments,1);immediateIds[id]=true;nextTick(function onNextTick(){if(immediateIds[id]){// fn.call() is faster so we optimize for the common use-case
// @see http://jsperf.com/call-apply-segu
if(args){fn.apply(null,args);}else{fn.call(null);}// Prevent ids from leaking
exports.clearImmediate(id);}});return id;};exports.clearImmediate=typeof clearImmediate==="function"?clearImmediate:function(id){delete immediateIds[id];};}).call(this,require("timers").setImmediate,require("timers").clearImmediate);},{"process/browser.js":189,"timers":211}],212:[function(require,module,exports){(function(global){/**
 * Module exports.
 */module.exports=deprecate;/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */function deprecate(fn,msg){if(config('noDeprecation')){return fn;}var warned=false;function deprecated(){if(!warned){if(config('throwDeprecation')){throw new Error(msg);}else if(config('traceDeprecation')){console.trace(msg);}else{console.warn(msg);}warned=true;}return fn.apply(this,arguments);}return deprecated;}/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */function config(name){// accessing global.localStorage can trigger a DOMException in sandboxed iframes
try{if(!global.localStorage)return false;}catch(_){return false;}var val=global.localStorage[name];if(null==val)return false;return String(val).toLowerCase()==='true';}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],213:[function(require,module,exports){module.exports=function isBuffer(arg){return arg&&(typeof arg==="undefined"?"undefined":_typeof2(arg))==='object'&&typeof arg.copy==='function'&&typeof arg.fill==='function'&&typeof arg.readUInt8==='function';};},{}],214:[function(require,module,exports){(function(process,global){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var formatRegExp=/%[sdj%]/g;exports.format=function(f){if(!isString(f)){var objects=[];for(var i=0;i<arguments.length;i++){objects.push(inspect(arguments[i]));}return objects.join(' ');}var i=1;var args=arguments;var len=args.length;var str=String(f).replace(formatRegExp,function(x){if(x==='%%')return'%';if(i>=len)return x;switch(x){case'%s':return String(args[i++]);case'%d':return Number(args[i++]);case'%j':try{return JSON.stringify(args[i++]);}catch(_){return'[Circular]';}default:return x;}});for(var x=args[i];i<len;x=args[++i]){if(isNull(x)||!isObject(x)){str+=' '+x;}else{str+=' '+inspect(x);}}return str;};// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate=function(fn,msg){// Allow for deprecating things in the process of starting up.
if(isUndefined(global.process)){return function(){return exports.deprecate(fn,msg).apply(this,arguments);};}if(process.noDeprecation===true){return fn;}var warned=false;function deprecated(){if(!warned){if(process.throwDeprecation){throw new Error(msg);}else if(process.traceDeprecation){console.trace(msg);}else{console.error(msg);}warned=true;}return fn.apply(this,arguments);}return deprecated;};var debugs={};var debugEnviron;exports.debuglog=function(set){if(isUndefined(debugEnviron))debugEnviron=process.env.NODE_DEBUG||'';set=set.toUpperCase();if(!debugs[set]){if(new RegExp('\\b'+set+'\\b','i').test(debugEnviron)){var pid=process.pid;debugs[set]=function(){var msg=exports.format.apply(exports,arguments);console.error('%s %d: %s',set,pid,msg);};}else{debugs[set]=function(){};}}return debugs[set];};/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 *//* legacy: obj, showHidden, depth, colors*/function inspect(obj,opts){// default options
var ctx={seen:[],stylize:stylizeNoColor};// legacy...
if(arguments.length>=3)ctx.depth=arguments[2];if(arguments.length>=4)ctx.colors=arguments[3];if(isBoolean(opts)){// legacy...
ctx.showHidden=opts;}else if(opts){// got an "options" object
exports._extend(ctx,opts);}// set default options
if(isUndefined(ctx.showHidden))ctx.showHidden=false;if(isUndefined(ctx.depth))ctx.depth=2;if(isUndefined(ctx.colors))ctx.colors=false;if(isUndefined(ctx.customInspect))ctx.customInspect=true;if(ctx.colors)ctx.stylize=stylizeWithColor;return formatValue(ctx,obj,ctx.depth);}exports.inspect=inspect;// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors={'bold':[1,22],'italic':[3,23],'underline':[4,24],'inverse':[7,27],'white':[37,39],'grey':[90,39],'black':[30,39],'blue':[34,39],'cyan':[36,39],'green':[32,39],'magenta':[35,39],'red':[31,39],'yellow':[33,39]};// Don't use 'blue' not visible on cmd.exe
inspect.styles={'special':'cyan','number':'yellow','boolean':'yellow','undefined':'grey','null':'bold','string':'green','date':'magenta',// "name": intentionally not styling
'regexp':'red'};function stylizeWithColor(str,styleType){var style=inspect.styles[styleType];if(style){return"\x1B["+inspect.colors[style][0]+'m'+str+"\x1B["+inspect.colors[style][1]+'m';}else{return str;}}function stylizeNoColor(str,styleType){return str;}function arrayToHash(array){var hash={};array.forEach(function(val,idx){hash[val]=true;});return hash;}function formatValue(ctx,value,recurseTimes){// Provide a hook for user-specified inspect functions.
// Check that value is an object with an inspect function on it
if(ctx.customInspect&&value&&isFunction(value.inspect)&&// Filter out the util module, it's inspect function is special
value.inspect!==exports.inspect&&// Also filter out any prototype objects using the circular check.
!(value.constructor&&value.constructor.prototype===value)){var ret=value.inspect(recurseTimes,ctx);if(!isString(ret)){ret=formatValue(ctx,ret,recurseTimes);}return ret;}// Primitive types cannot have properties
var primitive=formatPrimitive(ctx,value);if(primitive){return primitive;}// Look up the keys of the object.
var keys=Object.keys(value);var visibleKeys=arrayToHash(keys);if(ctx.showHidden){keys=Object.getOwnPropertyNames(value);}// IE doesn't make error fields non-enumerable
// http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
if(isError(value)&&(keys.indexOf('message')>=0||keys.indexOf('description')>=0)){return formatError(value);}// Some type of object without properties can be shortcutted.
if(keys.length===0){if(isFunction(value)){var name=value.name?': '+value.name:'';return ctx.stylize('[Function'+name+']','special');}if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),'regexp');}if(isDate(value)){return ctx.stylize(Date.prototype.toString.call(value),'date');}if(isError(value)){return formatError(value);}}var base='',array=false,braces=['{','}'];// Make Array say that they are Array
if(isArray(value)){array=true;braces=['[',']'];}// Make functions say that they are functions
if(isFunction(value)){var n=value.name?': '+value.name:'';base=' [Function'+n+']';}// Make RegExps say that they are RegExps
if(isRegExp(value)){base=' '+RegExp.prototype.toString.call(value);}// Make dates with properties first say the date
if(isDate(value)){base=' '+Date.prototype.toUTCString.call(value);}// Make error with message first say the error
if(isError(value)){base=' '+formatError(value);}if(keys.length===0&&(!array||value.length==0)){return braces[0]+base+braces[1];}if(recurseTimes<0){if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),'regexp');}else{return ctx.stylize('[Object]','special');}}ctx.seen.push(value);var output;if(array){output=formatArray(ctx,value,recurseTimes,visibleKeys,keys);}else{output=keys.map(function(key){return formatProperty(ctx,value,recurseTimes,visibleKeys,key,array);});}ctx.seen.pop();return reduceToSingleString(output,base,braces);}function formatPrimitive(ctx,value){if(isUndefined(value))return ctx.stylize('undefined','undefined');if(isString(value)){var simple='\''+JSON.stringify(value).replace(/^"|"$/g,'').replace(/'/g,"\\'").replace(/\\"/g,'"')+'\'';return ctx.stylize(simple,'string');}if(isNumber(value))return ctx.stylize(''+value,'number');if(isBoolean(value))return ctx.stylize(''+value,'boolean');// For some reason typeof null is "object", so special case here.
if(isNull(value))return ctx.stylize('null','null');}function formatError(value){return'['+Error.prototype.toString.call(value)+']';}function formatArray(ctx,value,recurseTimes,visibleKeys,keys){var output=[];for(var i=0,l=value.length;i<l;++i){if(hasOwnProperty(value,String(i))){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,String(i),true));}else{output.push('');}}keys.forEach(function(key){if(!key.match(/^\d+$/)){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,key,true));}});return output;}function formatProperty(ctx,value,recurseTimes,visibleKeys,key,array){var name,str,desc;desc=Object.getOwnPropertyDescriptor(value,key)||{value:value[key]};if(desc.get){if(desc.set){str=ctx.stylize('[Getter/Setter]','special');}else{str=ctx.stylize('[Getter]','special');}}else{if(desc.set){str=ctx.stylize('[Setter]','special');}}if(!hasOwnProperty(visibleKeys,key)){name='['+key+']';}if(!str){if(ctx.seen.indexOf(desc.value)<0){if(isNull(recurseTimes)){str=formatValue(ctx,desc.value,null);}else{str=formatValue(ctx,desc.value,recurseTimes-1);}if(str.indexOf('\n')>-1){if(array){str=str.split('\n').map(function(line){return'  '+line;}).join('\n').substr(2);}else{str='\n'+str.split('\n').map(function(line){return'   '+line;}).join('\n');}}}else{str=ctx.stylize('[Circular]','special');}}if(isUndefined(name)){if(array&&key.match(/^\d+$/)){return str;}name=JSON.stringify(''+key);if(name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){name=name.substr(1,name.length-2);name=ctx.stylize(name,'name');}else{name=name.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'");name=ctx.stylize(name,'string');}}return name+': '+str;}function reduceToSingleString(output,base,braces){var numLinesEst=0;var length=output.reduce(function(prev,cur){numLinesEst++;if(cur.indexOf('\n')>=0)numLinesEst++;return prev+cur.replace(/\u001b\[\d\d?m/g,'').length+1;},0);if(length>60){return braces[0]+(base===''?'':base+'\n ')+' '+output.join(',\n  ')+' '+braces[1];}return braces[0]+base+' '+output.join(', ')+' '+braces[1];}// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar){return Array.isArray(ar);}exports.isArray=isArray;function isBoolean(arg){return typeof arg==='boolean';}exports.isBoolean=isBoolean;function isNull(arg){return arg===null;}exports.isNull=isNull;function isNullOrUndefined(arg){return arg==null;}exports.isNullOrUndefined=isNullOrUndefined;function isNumber(arg){return typeof arg==='number';}exports.isNumber=isNumber;function isString(arg){return typeof arg==='string';}exports.isString=isString;function isSymbol(arg){return(typeof arg==="undefined"?"undefined":_typeof2(arg))==='symbol';}exports.isSymbol=isSymbol;function isUndefined(arg){return arg===void 0;}exports.isUndefined=isUndefined;function isRegExp(re){return isObject(re)&&objectToString(re)==='[object RegExp]';}exports.isRegExp=isRegExp;function isObject(arg){return(typeof arg==="undefined"?"undefined":_typeof2(arg))==='object'&&arg!==null;}exports.isObject=isObject;function isDate(d){return isObject(d)&&objectToString(d)==='[object Date]';}exports.isDate=isDate;function isError(e){return isObject(e)&&(objectToString(e)==='[object Error]'||e instanceof Error);}exports.isError=isError;function isFunction(arg){return typeof arg==='function';}exports.isFunction=isFunction;function isPrimitive(arg){return arg===null||typeof arg==='boolean'||typeof arg==='number'||typeof arg==='string'||(typeof arg==="undefined"?"undefined":_typeof2(arg))==='symbol'||// ES6 symbol
typeof arg==='undefined';}exports.isPrimitive=isPrimitive;exports.isBuffer=require('./support/isBuffer');function objectToString(o){return Object.prototype.toString.call(o);}function pad(n){return n<10?'0'+n.toString(10):n.toString(10);}var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];// 26 Feb 16:19:34
function timestamp(){var d=new Date();var time=[pad(d.getHours()),pad(d.getMinutes()),pad(d.getSeconds())].join(':');return[d.getDate(),months[d.getMonth()],time].join(' ');}// log is just a thin wrapper to console.log that prepends a timestamp
exports.log=function(){console.log('%s - %s',timestamp(),exports.format.apply(exports,arguments));};/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */exports.inherits=require('inherits');exports._extend=function(origin,add){// Don't do anything if add isn't an object
if(!add||!isObject(add))return origin;var keys=Object.keys(add);var i=keys.length;while(i--){origin[keys[i]]=add[keys[i]];}return origin;};function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop);}}).call(this,require('_process'),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"./support/isBuffer":213,"_process":189,"inherits":13}],215:[function(require,module,exports){arguments[4][213][0].apply(exports,arguments);},{"dup":213}],216:[function(require,module,exports){arguments[4][214][0].apply(exports,arguments);},{"./support/isBuffer":215,"_process":189,"dup":214,"inherits":14}],217:[function(require,module,exports){// Generated by CoffeeScript 1.9.1
(function(){var XMLAttribute,create;create=require('lodash/create');module.exports=XMLAttribute=function(){function XMLAttribute(parent,name,value){this.stringify=parent.stringify;if(name==null){throw new Error("Missing attribute name of element "+parent.name);}if(value==null){throw new Error("Missing attribute value for attribute "+name+" of element "+parent.name);}this.name=this.stringify.attName(name);this.value=this.stringify.attValue(value);}XMLAttribute.prototype.clone=function(){return create(XMLAttribute.prototype,this);};XMLAttribute.prototype.toString=function(options,level){return' '+this.name+'="'+this.value+'"';};return XMLAttribute;}();}).call(this);},{"lodash/create":165}],218:[function(require,module,exports){// Generated by CoffeeScript 1.9.1
(function(){var XMLBuilder,XMLDeclaration,XMLDocType,XMLElement,XMLStringifier;XMLStringifier=require('./XMLStringifier');XMLDeclaration=require('./XMLDeclaration');XMLDocType=require('./XMLDocType');XMLElement=require('./XMLElement');module.exports=XMLBuilder=function(){function XMLBuilder(name,options){var root,temp;if(name==null){throw new Error("Root element needs a name");}if(options==null){options={};}this.options=options;this.stringify=new XMLStringifier(options);temp=new XMLElement(this,'doc');root=temp.element(name);root.isRoot=true;root.documentObject=this;this.rootObject=root;if(!options.headless){root.declaration(options);if(options.pubID!=null||options.sysID!=null){root.doctype(options);}}}XMLBuilder.prototype.root=function(){return this.rootObject;};XMLBuilder.prototype.end=function(options){return this.toString(options);};XMLBuilder.prototype.toString=function(options){var indent,newline,offset,pretty,r,ref,ref1,ref2;pretty=(options!=null?options.pretty:void 0)||false;indent=(ref=options!=null?options.indent:void 0)!=null?ref:'  ';offset=(ref1=options!=null?options.offset:void 0)!=null?ref1:0;newline=(ref2=options!=null?options.newline:void 0)!=null?ref2:'\n';r='';if(this.xmldec!=null){r+=this.xmldec.toString(options);}if(this.doctype!=null){r+=this.doctype.toString(options);}r+=this.rootObject.toString(options);if(pretty&&r.slice(-newline.length)===newline){r=r.slice(0,-newline.length);}return r;};return XMLBuilder;}();}).call(this);},{"./XMLDeclaration":225,"./XMLDocType":226,"./XMLElement":227,"./XMLStringifier":231}],219:[function(require,module,exports){// Generated by CoffeeScript 1.9.1
(function(){var XMLCData,XMLNode,create,extend=function extend(child,parent){for(var key in parent){if(hasProp.call(parent,key))child[key]=parent[key];}function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor();child.__super__=parent.prototype;return child;},hasProp={}.hasOwnProperty;create=require('lodash/create');XMLNode=require('./XMLNode');module.exports=XMLCData=function(superClass){extend(XMLCData,superClass);function XMLCData(parent,text){XMLCData.__super__.constructor.call(this,parent);if(text==null){throw new Error("Missing CDATA text");}this.text=this.stringify.cdata(text);}XMLCData.prototype.clone=function(){return create(XMLCData.prototype,this);};XMLCData.prototype.toString=function(options,level){var indent,newline,offset,pretty,r,ref,ref1,ref2,space;pretty=(options!=null?options.pretty:void 0)||false;indent=(ref=options!=null?options.indent:void 0)!=null?ref:'  ';offset=(ref1=options!=null?options.offset:void 0)!=null?ref1:0;newline=(ref2=options!=null?options.newline:void 0)!=null?ref2:'\n';level||(level=0);space=new Array(level+offset+1).join(indent);r='';if(pretty){r+=space;}r+='<![CDATA['+this.text+']]>';if(pretty){r+=newline;}return r;};return XMLCData;}(XMLNode);}).call(this);},{"./XMLNode":228,"lodash/create":165}],220:[function(require,module,exports){// Generated by CoffeeScript 1.9.1
(function(){var XMLComment,XMLNode,create,extend=function extend(child,parent){for(var key in parent){if(hasProp.call(parent,key))child[key]=parent[key];}function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor();child.__super__=parent.prototype;return child;},hasProp={}.hasOwnProperty;create=require('lodash/create');XMLNode=require('./XMLNode');module.exports=XMLComment=function(superClass){extend(XMLComment,superClass);function XMLComment(parent,text){XMLComment.__super__.constructor.call(this,parent);if(text==null){throw new Error("Missing comment text");}this.text=this.stringify.comment(text);}XMLComment.prototype.clone=function(){return create(XMLComment.prototype,this);};XMLComment.prototype.toString=function(options,level){var indent,newline,offset,pretty,r,ref,ref1,ref2,space;pretty=(options!=null?options.pretty:void 0)||false;indent=(ref=options!=null?options.indent:void 0)!=null?ref:'  ';offset=(ref1=options!=null?options.offset:void 0)!=null?ref1:0;newline=(ref2=options!=null?options.newline:void 0)!=null?ref2:'\n';level||(level=0);space=new Array(level+offset+1).join(indent);r='';if(pretty){r+=space;}r+='<!-- '+this.text+' -->';if(pretty){r+=newline;}return r;};return XMLComment;}(XMLNode);}).call(this);},{"./XMLNode":228,"lodash/create":165}],221:[function(require,module,exports){// Generated by CoffeeScript 1.9.1
(function(){var XMLDTDAttList,create;create=require('lodash/create');module.exports=XMLDTDAttList=function(){function XMLDTDAttList(parent,elementName,attributeName,attributeType,defaultValueType,defaultValue){this.stringify=parent.stringify;if(elementName==null){throw new Error("Missing DTD element name");}if(attributeName==null){throw new Error("Missing DTD attribute name");}if(!attributeType){throw new Error("Missing DTD attribute type");}if(!defaultValueType){throw new Error("Missing DTD attribute default");}if(defaultValueType.indexOf('#')!==0){defaultValueType='#'+defaultValueType;}if(!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)){throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT");}if(defaultValue&&!defaultValueType.match(/^(#FIXED|#DEFAULT)$/)){throw new Error("Default value only applies to #FIXED or #DEFAULT");}this.elementName=this.stringify.eleName(elementName);this.attributeName=this.stringify.attName(attributeName);this.attributeType=this.stringify.dtdAttType(attributeType);this.defaultValue=this.stringify.dtdAttDefault(defaultValue);this.defaultValueType=defaultValueType;}XMLDTDAttList.prototype.toString=function(options,level){var indent,newline,offset,pretty,r,ref,ref1,ref2,space;pretty=(options!=null?options.pretty:void 0)||false;indent=(ref=options!=null?options.indent:void 0)!=null?ref:'  ';offset=(ref1=options!=null?options.offset:void 0)!=null?ref1:0;newline=(ref2=options!=null?options.newline:void 0)!=null?ref2:'\n';level||(level=0);space=new Array(level+offset+1).join(indent);r='';if(pretty){r+=space;}r+='<!ATTLIST '+this.elementName+' '+this.attributeName+' '+this.attributeType;if(this.defaultValueType!=='#DEFAULT'){r+=' '+this.defaultValueType;}if(this.defaultValue){r+=' "'+this.defaultValue+'"';}r+='>';if(pretty){r+=newline;}return r;};return XMLDTDAttList;}();}).call(this);},{"lodash/create":165}],222:[function(require,module,exports){// Generated by CoffeeScript 1.9.1
(function(){var XMLDTDElement,create;create=require('lodash/create');module.exports=XMLDTDElement=function(){function XMLDTDElement(parent,name,value){this.stringify=parent.stringify;if(name==null){throw new Error("Missing DTD element name");}if(!value){value='(#PCDATA)';}if(Array.isArray(value)){value='('+value.join(',')+')';}this.name=this.stringify.eleName(name);this.value=this.stringify.dtdElementValue(value);}XMLDTDElement.prototype.toString=function(options,level){var indent,newline,offset,pretty,r,ref,ref1,ref2,space;pretty=(options!=null?options.pretty:void 0)||false;indent=(ref=options!=null?options.indent:void 0)!=null?ref:'  ';offset=(ref1=options!=null?options.offset:void 0)!=null?ref1:0;newline=(ref2=options!=null?options.newline:void 0)!=null?ref2:'\n';level||(level=0);space=new Array(level+offset+1).join(indent);r='';if(pretty){r+=space;}r+='<!ELEMENT '+this.name+' '+this.value+'>';if(pretty){r+=newline;}return r;};return XMLDTDElement;}();}).call(this);},{"lodash/create":165}],223:[function(require,module,exports){// Generated by CoffeeScript 1.9.1
(function(){var XMLDTDEntity,create,isObject;create=require('lodash/create');isObject=require('lodash/isObject');module.exports=XMLDTDEntity=function(){function XMLDTDEntity(parent,pe,name,value){this.stringify=parent.stringify;if(name==null){throw new Error("Missing entity name");}if(value==null){throw new Error("Missing entity value");}this.pe=!!pe;this.name=this.stringify.eleName(name);if(!isObject(value)){this.value=this.stringify.dtdEntityValue(value);}else{if(!value.pubID&&!value.sysID){throw new Error("Public and/or system identifiers are required for an external entity");}if(value.pubID&&!value.sysID){throw new Error("System identifier is required for a public external entity");}if(value.pubID!=null){this.pubID=this.stringify.dtdPubID(value.pubID);}if(value.sysID!=null){this.sysID=this.stringify.dtdSysID(value.sysID);}if(value.nData!=null){this.nData=this.stringify.dtdNData(value.nData);}if(this.pe&&this.nData){throw new Error("Notation declaration is not allowed in a parameter entity");}}}XMLDTDEntity.prototype.toString=function(options,level){var indent,newline,offset,pretty,r,ref,ref1,ref2,space;pretty=(options!=null?options.pretty:void 0)||false;indent=(ref=options!=null?options.indent:void 0)!=null?ref:'  ';offset=(ref1=options!=null?options.offset:void 0)!=null?ref1:0;newline=(ref2=options!=null?options.newline:void 0)!=null?ref2:'\n';level||(level=0);space=new Array(level+offset+1).join(indent);r='';if(pretty){r+=space;}r+='<!ENTITY';if(this.pe){r+=' %';}r+=' '+this.name;if(this.value){r+=' "'+this.value+'"';}else{if(this.pubID&&this.sysID){r+=' PUBLIC "'+this.pubID+'" "'+this.sysID+'"';}else if(this.sysID){r+=' SYSTEM "'+this.sysID+'"';}if(this.nData){r+=' NDATA '+this.nData;}}r+='>';if(pretty){r+=newline;}return r;};return XMLDTDEntity;}();}).call(this);},{"lodash/create":165,"lodash/isObject":178}],224:[function(require,module,exports){// Generated by CoffeeScript 1.9.1
(function(){var XMLDTDNotation,create;create=require('lodash/create');module.exports=XMLDTDNotation=function(){function XMLDTDNotation(parent,name,value){this.stringify=parent.stringify;if(name==null){throw new Error("Missing notation name");}if(!value.pubID&&!value.sysID){throw new Error("Public or system identifiers are required for an external entity");}this.name=this.stringify.eleName(name);if(value.pubID!=null){this.pubID=this.stringify.dtdPubID(value.pubID);}if(value.sysID!=null){this.sysID=this.stringify.dtdSysID(value.sysID);}}XMLDTDNotation.prototype.toString=function(options,level){var indent,newline,offset,pretty,r,ref,ref1,ref2,space;pretty=(options!=null?options.pretty:void 0)||false;indent=(ref=options!=null?options.indent:void 0)!=null?ref:'  ';offset=(ref1=options!=null?options.offset:void 0)!=null?ref1:0;newline=(ref2=options!=null?options.newline:void 0)!=null?ref2:'\n';level||(level=0);space=new Array(level+offset+1).join(indent);r='';if(pretty){r+=space;}r+='<!NOTATION '+this.name;if(this.pubID&&this.sysID){r+=' PUBLIC "'+this.pubID+'" "'+this.sysID+'"';}else if(this.pubID){r+=' PUBLIC "'+this.pubID+'"';}else if(this.sysID){r+=' SYSTEM "'+this.sysID+'"';}r+='>';if(pretty){r+=newline;}return r;};return XMLDTDNotation;}();}).call(this);},{"lodash/create":165}],225:[function(require,module,exports){// Generated by CoffeeScript 1.9.1
(function(){var XMLDeclaration,XMLNode,create,isObject,extend=function extend(child,parent){for(var key in parent){if(hasProp.call(parent,key))child[key]=parent[key];}function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor();child.__super__=parent.prototype;return child;},hasProp={}.hasOwnProperty;create=require('lodash/create');isObject=require('lodash/isObject');XMLNode=require('./XMLNode');module.exports=XMLDeclaration=function(superClass){extend(XMLDeclaration,superClass);function XMLDeclaration(parent,version,encoding,standalone){var ref;XMLDeclaration.__super__.constructor.call(this,parent);if(isObject(version)){ref=version,version=ref.version,encoding=ref.encoding,standalone=ref.standalone;}if(!version){version='1.0';}this.version=this.stringify.xmlVersion(version);if(encoding!=null){this.encoding=this.stringify.xmlEncoding(encoding);}if(standalone!=null){this.standalone=this.stringify.xmlStandalone(standalone);}}XMLDeclaration.prototype.toString=function(options,level){var indent,newline,offset,pretty,r,ref,ref1,ref2,space;pretty=(options!=null?options.pretty:void 0)||false;indent=(ref=options!=null?options.indent:void 0)!=null?ref:'  ';offset=(ref1=options!=null?options.offset:void 0)!=null?ref1:0;newline=(ref2=options!=null?options.newline:void 0)!=null?ref2:'\n';level||(level=0);space=new Array(level+offset+1).join(indent);r='';if(pretty){r+=space;}r+='<?xml';r+=' version="'+this.version+'"';if(this.encoding!=null){r+=' encoding="'+this.encoding+'"';}if(this.standalone!=null){r+=' standalone="'+this.standalone+'"';}r+='?>';if(pretty){r+=newline;}return r;};return XMLDeclaration;}(XMLNode);}).call(this);},{"./XMLNode":228,"lodash/create":165,"lodash/isObject":178}],226:[function(require,module,exports){// Generated by CoffeeScript 1.9.1
(function(){var XMLCData,XMLComment,XMLDTDAttList,XMLDTDElement,XMLDTDEntity,XMLDTDNotation,XMLDocType,XMLProcessingInstruction,create,isObject;create=require('lodash/create');isObject=require('lodash/isObject');XMLCData=require('./XMLCData');XMLComment=require('./XMLComment');XMLDTDAttList=require('./XMLDTDAttList');XMLDTDEntity=require('./XMLDTDEntity');XMLDTDElement=require('./XMLDTDElement');XMLDTDNotation=require('./XMLDTDNotation');XMLProcessingInstruction=require('./XMLProcessingInstruction');module.exports=XMLDocType=function(){function XMLDocType(parent,pubID,sysID){var ref,ref1;this.documentObject=parent;this.stringify=this.documentObject.stringify;this.children=[];if(isObject(pubID)){ref=pubID,pubID=ref.pubID,sysID=ref.sysID;}if(sysID==null){ref1=[pubID,sysID],sysID=ref1[0],pubID=ref1[1];}if(pubID!=null){this.pubID=this.stringify.dtdPubID(pubID);}if(sysID!=null){this.sysID=this.stringify.dtdSysID(sysID);}}XMLDocType.prototype.element=function(name,value){var child;child=new XMLDTDElement(this,name,value);this.children.push(child);return this;};XMLDocType.prototype.attList=function(elementName,attributeName,attributeType,defaultValueType,defaultValue){var child;child=new XMLDTDAttList(this,elementName,attributeName,attributeType,defaultValueType,defaultValue);this.children.push(child);return this;};XMLDocType.prototype.entity=function(name,value){var child;child=new XMLDTDEntity(this,false,name,value);this.children.push(child);return this;};XMLDocType.prototype.pEntity=function(name,value){var child;child=new XMLDTDEntity(this,true,name,value);this.children.push(child);return this;};XMLDocType.prototype.notation=function(name,value){var child;child=new XMLDTDNotation(this,name,value);this.children.push(child);return this;};XMLDocType.prototype.cdata=function(value){var child;child=new XMLCData(this,value);this.children.push(child);return this;};XMLDocType.prototype.comment=function(value){var child;child=new XMLComment(this,value);this.children.push(child);return this;};XMLDocType.prototype.instruction=function(target,value){var child;child=new XMLProcessingInstruction(this,target,value);this.children.push(child);return this;};XMLDocType.prototype.root=function(){return this.documentObject.root();};XMLDocType.prototype.document=function(){return this.documentObject;};XMLDocType.prototype.toString=function(options,level){var child,i,indent,len,newline,offset,pretty,r,ref,ref1,ref2,ref3,space;pretty=(options!=null?options.pretty:void 0)||false;indent=(ref=options!=null?options.indent:void 0)!=null?ref:'  ';offset=(ref1=options!=null?options.offset:void 0)!=null?ref1:0;newline=(ref2=options!=null?options.newline:void 0)!=null?ref2:'\n';level||(level=0);space=new Array(level+offset+1).join(indent);r='';if(pretty){r+=space;}r+='<!DOCTYPE '+this.root().name;if(this.pubID&&this.sysID){r+=' PUBLIC "'+this.pubID+'" "'+this.sysID+'"';}else if(this.sysID){r+=' SYSTEM "'+this.sysID+'"';}if(this.children.length>0){r+=' [';if(pretty){r+=newline;}ref3=this.children;for(i=0,len=ref3.length;i<len;i++){child=ref3[i];r+=child.toString(options,level+1);}r+=']';}r+='>';if(pretty){r+=newline;}return r;};XMLDocType.prototype.ele=function(name,value){return this.element(name,value);};XMLDocType.prototype.att=function(elementName,attributeName,attributeType,defaultValueType,defaultValue){return this.attList(elementName,attributeName,attributeType,defaultValueType,defaultValue);};XMLDocType.prototype.ent=function(name,value){return this.entity(name,value);};XMLDocType.prototype.pent=function(name,value){return this.pEntity(name,value);};XMLDocType.prototype.not=function(name,value){return this.notation(name,value);};XMLDocType.prototype.dat=function(value){return this.cdata(value);};XMLDocType.prototype.com=function(value){return this.comment(value);};XMLDocType.prototype.ins=function(target,value){return this.instruction(target,value);};XMLDocType.prototype.up=function(){return this.root();};XMLDocType.prototype.doc=function(){return this.document();};return XMLDocType;}();}).call(this);},{"./XMLCData":219,"./XMLComment":220,"./XMLDTDAttList":221,"./XMLDTDElement":222,"./XMLDTDEntity":223,"./XMLDTDNotation":224,"./XMLProcessingInstruction":229,"lodash/create":165,"lodash/isObject":178}],227:[function(require,module,exports){// Generated by CoffeeScript 1.9.1
(function(){var XMLAttribute,XMLElement,XMLNode,XMLProcessingInstruction,create,every,isFunction,isObject,extend=function extend(child,parent){for(var key in parent){if(hasProp.call(parent,key))child[key]=parent[key];}function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor();child.__super__=parent.prototype;return child;},hasProp={}.hasOwnProperty;create=require('lodash/create');isObject=require('lodash/isObject');isFunction=require('lodash/isFunction');every=require('lodash/every');XMLNode=require('./XMLNode');XMLAttribute=require('./XMLAttribute');XMLProcessingInstruction=require('./XMLProcessingInstruction');module.exports=XMLElement=function(superClass){extend(XMLElement,superClass);function XMLElement(parent,name,attributes){XMLElement.__super__.constructor.call(this,parent);if(name==null){throw new Error("Missing element name");}this.name=this.stringify.eleName(name);this.children=[];this.instructions=[];this.attributes={};if(attributes!=null){this.attribute(attributes);}}XMLElement.prototype.clone=function(){var att,attName,clonedSelf,i,len,pi,ref,ref1;clonedSelf=create(XMLElement.prototype,this);if(clonedSelf.isRoot){clonedSelf.documentObject=null;}clonedSelf.attributes={};ref=this.attributes;for(attName in ref){if(!hasProp.call(ref,attName))continue;att=ref[attName];clonedSelf.attributes[attName]=att.clone();}clonedSelf.instructions=[];ref1=this.instructions;for(i=0,len=ref1.length;i<len;i++){pi=ref1[i];clonedSelf.instructions.push(pi.clone());}clonedSelf.children=[];this.children.forEach(function(child){var clonedChild;clonedChild=child.clone();clonedChild.parent=clonedSelf;return clonedSelf.children.push(clonedChild);});return clonedSelf;};XMLElement.prototype.attribute=function(name,value){var attName,attValue;if(name!=null){name=name.valueOf();}if(isObject(name)){for(attName in name){if(!hasProp.call(name,attName))continue;attValue=name[attName];this.attribute(attName,attValue);}}else{if(isFunction(value)){value=value.apply();}if(!this.options.skipNullAttributes||value!=null){this.attributes[name]=new XMLAttribute(this,name,value);}}return this;};XMLElement.prototype.removeAttribute=function(name){var attName,i,len;if(name==null){throw new Error("Missing attribute name");}name=name.valueOf();if(Array.isArray(name)){for(i=0,len=name.length;i<len;i++){attName=name[i];delete this.attributes[attName];}}else{delete this.attributes[name];}return this;};XMLElement.prototype.instruction=function(target,value){var i,insTarget,insValue,instruction,len;if(target!=null){target=target.valueOf();}if(value!=null){value=value.valueOf();}if(Array.isArray(target)){for(i=0,len=target.length;i<len;i++){insTarget=target[i];this.instruction(insTarget);}}else if(isObject(target)){for(insTarget in target){if(!hasProp.call(target,insTarget))continue;insValue=target[insTarget];this.instruction(insTarget,insValue);}}else{if(isFunction(value)){value=value.apply();}instruction=new XMLProcessingInstruction(this,target,value);this.instructions.push(instruction);}return this;};XMLElement.prototype.toString=function(options,level){var att,child,i,indent,instruction,j,len,len1,name,newline,offset,pretty,r,ref,ref1,ref2,ref3,ref4,ref5,space;pretty=(options!=null?options.pretty:void 0)||false;indent=(ref=options!=null?options.indent:void 0)!=null?ref:'  ';offset=(ref1=options!=null?options.offset:void 0)!=null?ref1:0;newline=(ref2=options!=null?options.newline:void 0)!=null?ref2:'\n';level||(level=0);space=new Array(level+offset+1).join(indent);r='';ref3=this.instructions;for(i=0,len=ref3.length;i<len;i++){instruction=ref3[i];r+=instruction.toString(options,level);}if(pretty){r+=space;}r+='<'+this.name;ref4=this.attributes;for(name in ref4){if(!hasProp.call(ref4,name))continue;att=ref4[name];r+=att.toString(options);}if(this.children.length===0||every(this.children,function(e){return e.value==='';})){r+='/>';if(pretty){r+=newline;}}else if(pretty&&this.children.length===1&&this.children[0].value!=null){r+='>';r+=this.children[0].value;r+='</'+this.name+'>';r+=newline;}else{r+='>';if(pretty){r+=newline;}ref5=this.children;for(j=0,len1=ref5.length;j<len1;j++){child=ref5[j];r+=child.toString(options,level+1);}if(pretty){r+=space;}r+='</'+this.name+'>';if(pretty){r+=newline;}}return r;};XMLElement.prototype.att=function(name,value){return this.attribute(name,value);};XMLElement.prototype.ins=function(target,value){return this.instruction(target,value);};XMLElement.prototype.a=function(name,value){return this.attribute(name,value);};XMLElement.prototype.i=function(target,value){return this.instruction(target,value);};return XMLElement;}(XMLNode);}).call(this);},{"./XMLAttribute":217,"./XMLNode":228,"./XMLProcessingInstruction":229,"lodash/create":165,"lodash/every":167,"lodash/isFunction":176,"lodash/isObject":178}],228:[function(require,module,exports){// Generated by CoffeeScript 1.9.1
(function(){var XMLCData,XMLComment,XMLDeclaration,XMLDocType,XMLElement,XMLNode,XMLRaw,XMLText,isEmpty,isFunction,isObject,hasProp={}.hasOwnProperty;isObject=require('lodash/isObject');isFunction=require('lodash/isFunction');isEmpty=require('lodash/isEmpty');XMLElement=null;XMLCData=null;XMLComment=null;XMLDeclaration=null;XMLDocType=null;XMLRaw=null;XMLText=null;module.exports=XMLNode=function(){function XMLNode(parent){this.parent=parent;this.options=this.parent.options;this.stringify=this.parent.stringify;if(XMLElement===null){XMLElement=require('./XMLElement');XMLCData=require('./XMLCData');XMLComment=require('./XMLComment');XMLDeclaration=require('./XMLDeclaration');XMLDocType=require('./XMLDocType');XMLRaw=require('./XMLRaw');XMLText=require('./XMLText');}}XMLNode.prototype.element=function(name,attributes,text){var childNode,item,j,k,key,lastChild,len,len1,ref,val;lastChild=null;if(attributes==null){attributes={};}attributes=attributes.valueOf();if(!isObject(attributes)){ref=[attributes,text],text=ref[0],attributes=ref[1];}if(name!=null){name=name.valueOf();}if(Array.isArray(name)){for(j=0,len=name.length;j<len;j++){item=name[j];lastChild=this.element(item);}}else if(isFunction(name)){lastChild=this.element(name.apply());}else if(isObject(name)){for(key in name){if(!hasProp.call(name,key))continue;val=name[key];if(isFunction(val)){val=val.apply();}if(isObject(val)&&isEmpty(val)){val=null;}if(!this.options.ignoreDecorators&&this.stringify.convertAttKey&&key.indexOf(this.stringify.convertAttKey)===0){lastChild=this.attribute(key.substr(this.stringify.convertAttKey.length),val);}else if(!this.options.ignoreDecorators&&this.stringify.convertPIKey&&key.indexOf(this.stringify.convertPIKey)===0){lastChild=this.instruction(key.substr(this.stringify.convertPIKey.length),val);}else if(!this.options.separateArrayItems&&Array.isArray(val)){for(k=0,len1=val.length;k<len1;k++){item=val[k];childNode={};childNode[key]=item;lastChild=this.element(childNode);}}else if(isObject(val)){lastChild=this.element(key);lastChild.element(val);}else{lastChild=this.element(key,val);}}}else{if(!this.options.ignoreDecorators&&this.stringify.convertTextKey&&name.indexOf(this.stringify.convertTextKey)===0){lastChild=this.text(text);}else if(!this.options.ignoreDecorators&&this.stringify.convertCDataKey&&name.indexOf(this.stringify.convertCDataKey)===0){lastChild=this.cdata(text);}else if(!this.options.ignoreDecorators&&this.stringify.convertCommentKey&&name.indexOf(this.stringify.convertCommentKey)===0){lastChild=this.comment(text);}else if(!this.options.ignoreDecorators&&this.stringify.convertRawKey&&name.indexOf(this.stringify.convertRawKey)===0){lastChild=this.raw(text);}else{lastChild=this.node(name,attributes,text);}}if(lastChild==null){throw new Error("Could not create any elements with: "+name);}return lastChild;};XMLNode.prototype.insertBefore=function(name,attributes,text){var child,i,removed;if(this.isRoot){throw new Error("Cannot insert elements at root level");}i=this.parent.children.indexOf(this);removed=this.parent.children.splice(i);child=this.parent.element(name,attributes,text);Array.prototype.push.apply(this.parent.children,removed);return child;};XMLNode.prototype.insertAfter=function(name,attributes,text){var child,i,removed;if(this.isRoot){throw new Error("Cannot insert elements at root level");}i=this.parent.children.indexOf(this);removed=this.parent.children.splice(i+1);child=this.parent.element(name,attributes,text);Array.prototype.push.apply(this.parent.children,removed);return child;};XMLNode.prototype.remove=function(){var i,ref;if(this.isRoot){throw new Error("Cannot remove the root element");}i=this.parent.children.indexOf(this);[].splice.apply(this.parent.children,[i,i-i+1].concat(ref=[])),ref;return this.parent;};XMLNode.prototype.node=function(name,attributes,text){var child,ref;if(name!=null){name=name.valueOf();}if(attributes==null){attributes={};}attributes=attributes.valueOf();if(!isObject(attributes)){ref=[attributes,text],text=ref[0],attributes=ref[1];}child=new XMLElement(this,name,attributes);if(text!=null){child.text(text);}this.children.push(child);return child;};XMLNode.prototype.text=function(value){var child;child=new XMLText(this,value);this.children.push(child);return this;};XMLNode.prototype.cdata=function(value){var child;child=new XMLCData(this,value);this.children.push(child);return this;};XMLNode.prototype.comment=function(value){var child;child=new XMLComment(this,value);this.children.push(child);return this;};XMLNode.prototype.raw=function(value){var child;child=new XMLRaw(this,value);this.children.push(child);return this;};XMLNode.prototype.declaration=function(version,encoding,standalone){var doc,xmldec;doc=this.document();xmldec=new XMLDeclaration(doc,version,encoding,standalone);doc.xmldec=xmldec;return doc.root();};XMLNode.prototype.doctype=function(pubID,sysID){var doc,doctype;doc=this.document();doctype=new XMLDocType(doc,pubID,sysID);doc.doctype=doctype;return doctype;};XMLNode.prototype.up=function(){if(this.isRoot){throw new Error("The root node has no parent. Use doc() if you need to get the document object.");}return this.parent;};XMLNode.prototype.root=function(){var child;if(this.isRoot){return this;}child=this.parent;while(!child.isRoot){child=child.parent;}return child;};XMLNode.prototype.document=function(){return this.root().documentObject;};XMLNode.prototype.end=function(options){return this.document().toString(options);};XMLNode.prototype.prev=function(){var i;if(this.isRoot){throw new Error("Root node has no siblings");}i=this.parent.children.indexOf(this);if(i<1){throw new Error("Already at the first node");}return this.parent.children[i-1];};XMLNode.prototype.next=function(){var i;if(this.isRoot){throw new Error("Root node has no siblings");}i=this.parent.children.indexOf(this);if(i===-1||i===this.parent.children.length-1){throw new Error("Already at the last node");}return this.parent.children[i+1];};XMLNode.prototype.importXMLBuilder=function(xmlbuilder){var clonedRoot;clonedRoot=xmlbuilder.root().clone();clonedRoot.parent=this;clonedRoot.isRoot=false;this.children.push(clonedRoot);return this;};XMLNode.prototype.ele=function(name,attributes,text){return this.element(name,attributes,text);};XMLNode.prototype.nod=function(name,attributes,text){return this.node(name,attributes,text);};XMLNode.prototype.txt=function(value){return this.text(value);};XMLNode.prototype.dat=function(value){return this.cdata(value);};XMLNode.prototype.com=function(value){return this.comment(value);};XMLNode.prototype.doc=function(){return this.document();};XMLNode.prototype.dec=function(version,encoding,standalone){return this.declaration(version,encoding,standalone);};XMLNode.prototype.dtd=function(pubID,sysID){return this.doctype(pubID,sysID);};XMLNode.prototype.e=function(name,attributes,text){return this.element(name,attributes,text);};XMLNode.prototype.n=function(name,attributes,text){return this.node(name,attributes,text);};XMLNode.prototype.t=function(value){return this.text(value);};XMLNode.prototype.d=function(value){return this.cdata(value);};XMLNode.prototype.c=function(value){return this.comment(value);};XMLNode.prototype.r=function(value){return this.raw(value);};XMLNode.prototype.u=function(){return this.up();};return XMLNode;}();}).call(this);},{"./XMLCData":219,"./XMLComment":220,"./XMLDeclaration":225,"./XMLDocType":226,"./XMLElement":227,"./XMLRaw":230,"./XMLText":232,"lodash/isEmpty":175,"lodash/isFunction":176,"lodash/isObject":178}],229:[function(require,module,exports){// Generated by CoffeeScript 1.9.1
(function(){var XMLProcessingInstruction,create;create=require('lodash/create');module.exports=XMLProcessingInstruction=function(){function XMLProcessingInstruction(parent,target,value){this.stringify=parent.stringify;if(target==null){throw new Error("Missing instruction target");}this.target=this.stringify.insTarget(target);if(value){this.value=this.stringify.insValue(value);}}XMLProcessingInstruction.prototype.clone=function(){return create(XMLProcessingInstruction.prototype,this);};XMLProcessingInstruction.prototype.toString=function(options,level){var indent,newline,offset,pretty,r,ref,ref1,ref2,space;pretty=(options!=null?options.pretty:void 0)||false;indent=(ref=options!=null?options.indent:void 0)!=null?ref:'  ';offset=(ref1=options!=null?options.offset:void 0)!=null?ref1:0;newline=(ref2=options!=null?options.newline:void 0)!=null?ref2:'\n';level||(level=0);space=new Array(level+offset+1).join(indent);r='';if(pretty){r+=space;}r+='<?';r+=this.target;if(this.value){r+=' '+this.value;}r+='?>';if(pretty){r+=newline;}return r;};return XMLProcessingInstruction;}();}).call(this);},{"lodash/create":165}],230:[function(require,module,exports){// Generated by CoffeeScript 1.9.1
(function(){var XMLNode,XMLRaw,create,extend=function extend(child,parent){for(var key in parent){if(hasProp.call(parent,key))child[key]=parent[key];}function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor();child.__super__=parent.prototype;return child;},hasProp={}.hasOwnProperty;create=require('lodash/create');XMLNode=require('./XMLNode');module.exports=XMLRaw=function(superClass){extend(XMLRaw,superClass);function XMLRaw(parent,text){XMLRaw.__super__.constructor.call(this,parent);if(text==null){throw new Error("Missing raw text");}this.value=this.stringify.raw(text);}XMLRaw.prototype.clone=function(){return create(XMLRaw.prototype,this);};XMLRaw.prototype.toString=function(options,level){var indent,newline,offset,pretty,r,ref,ref1,ref2,space;pretty=(options!=null?options.pretty:void 0)||false;indent=(ref=options!=null?options.indent:void 0)!=null?ref:'  ';offset=(ref1=options!=null?options.offset:void 0)!=null?ref1:0;newline=(ref2=options!=null?options.newline:void 0)!=null?ref2:'\n';level||(level=0);space=new Array(level+offset+1).join(indent);r='';if(pretty){r+=space;}r+=this.value;if(pretty){r+=newline;}return r;};return XMLRaw;}(XMLNode);}).call(this);},{"./XMLNode":228,"lodash/create":165}],231:[function(require,module,exports){// Generated by CoffeeScript 1.9.1
(function(){var XMLStringifier,bind=function bind(fn,me){return function(){return fn.apply(me,arguments);};},hasProp={}.hasOwnProperty;module.exports=XMLStringifier=function(){function XMLStringifier(options){this.assertLegalChar=bind(this.assertLegalChar,this);var key,ref,value;this.allowSurrogateChars=options!=null?options.allowSurrogateChars:void 0;this.noDoubleEncoding=options!=null?options.noDoubleEncoding:void 0;ref=(options!=null?options.stringify:void 0)||{};for(key in ref){if(!hasProp.call(ref,key))continue;value=ref[key];this[key]=value;}}XMLStringifier.prototype.eleName=function(val){val=''+val||'';return this.assertLegalChar(val);};XMLStringifier.prototype.eleText=function(val){val=''+val||'';return this.assertLegalChar(this.elEscape(val));};XMLStringifier.prototype.cdata=function(val){val=''+val||'';if(val.match(/]]>/)){throw new Error("Invalid CDATA text: "+val);}return this.assertLegalChar(val);};XMLStringifier.prototype.comment=function(val){val=''+val||'';if(val.match(/--/)){throw new Error("Comment text cannot contain double-hypen: "+val);}return this.assertLegalChar(val);};XMLStringifier.prototype.raw=function(val){return''+val||'';};XMLStringifier.prototype.attName=function(val){return''+val||'';};XMLStringifier.prototype.attValue=function(val){val=''+val||'';return this.attEscape(val);};XMLStringifier.prototype.insTarget=function(val){return''+val||'';};XMLStringifier.prototype.insValue=function(val){val=''+val||'';if(val.match(/\?>/)){throw new Error("Invalid processing instruction value: "+val);}return val;};XMLStringifier.prototype.xmlVersion=function(val){val=''+val||'';if(!val.match(/1\.[0-9]+/)){throw new Error("Invalid version number: "+val);}return val;};XMLStringifier.prototype.xmlEncoding=function(val){val=''+val||'';if(!val.match(/^[A-Za-z](?:[A-Za-z0-9._-]|-)*$/)){throw new Error("Invalid encoding: "+val);}return val;};XMLStringifier.prototype.xmlStandalone=function(val){if(val){return"yes";}else{return"no";}};XMLStringifier.prototype.dtdPubID=function(val){return''+val||'';};XMLStringifier.prototype.dtdSysID=function(val){return''+val||'';};XMLStringifier.prototype.dtdElementValue=function(val){return''+val||'';};XMLStringifier.prototype.dtdAttType=function(val){return''+val||'';};XMLStringifier.prototype.dtdAttDefault=function(val){if(val!=null){return''+val||'';}else{return val;}};XMLStringifier.prototype.dtdEntityValue=function(val){return''+val||'';};XMLStringifier.prototype.dtdNData=function(val){return''+val||'';};XMLStringifier.prototype.convertAttKey='@';XMLStringifier.prototype.convertPIKey='?';XMLStringifier.prototype.convertTextKey='#text';XMLStringifier.prototype.convertCDataKey='#cdata';XMLStringifier.prototype.convertCommentKey='#comment';XMLStringifier.prototype.convertRawKey='#raw';XMLStringifier.prototype.assertLegalChar=function(str){var chars,chr;if(this.allowSurrogateChars){chars=/[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uFFFE-\uFFFF]/;}else{chars=/[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE-\uFFFF]/;}chr=str.match(chars);if(chr){throw new Error("Invalid character ("+chr+") in string: "+str+" at index "+chr.index);}return str;};XMLStringifier.prototype.elEscape=function(str){var ampregex;ampregex=this.noDoubleEncoding?/(?!&\S+;)&/g:/&/g;return str.replace(ampregex,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\r/g,'&#xD;');};XMLStringifier.prototype.attEscape=function(str){var ampregex;ampregex=this.noDoubleEncoding?/(?!&\S+;)&/g:/&/g;return str.replace(ampregex,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');};return XMLStringifier;}();}).call(this);},{}],232:[function(require,module,exports){// Generated by CoffeeScript 1.9.1
(function(){var XMLNode,XMLText,create,extend=function extend(child,parent){for(var key in parent){if(hasProp.call(parent,key))child[key]=parent[key];}function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor();child.__super__=parent.prototype;return child;},hasProp={}.hasOwnProperty;create=require('lodash/create');XMLNode=require('./XMLNode');module.exports=XMLText=function(superClass){extend(XMLText,superClass);function XMLText(parent,text){XMLText.__super__.constructor.call(this,parent);if(text==null){throw new Error("Missing element text");}this.value=this.stringify.eleText(text);}XMLText.prototype.clone=function(){return create(XMLText.prototype,this);};XMLText.prototype.toString=function(options,level){var indent,newline,offset,pretty,r,ref,ref1,ref2,space;pretty=(options!=null?options.pretty:void 0)||false;indent=(ref=options!=null?options.indent:void 0)!=null?ref:'  ';offset=(ref1=options!=null?options.offset:void 0)!=null?ref1:0;newline=(ref2=options!=null?options.newline:void 0)!=null?ref2:'\n';level||(level=0);space=new Array(level+offset+1).join(indent);r='';if(pretty){r+=space;}r+=this.value;if(pretty){r+=newline;}return r;};return XMLText;}(XMLNode);}).call(this);},{"./XMLNode":228,"lodash/create":165}],233:[function(require,module,exports){// Generated by CoffeeScript 1.9.1
(function(){var XMLBuilder,assign;assign=require('lodash/assign');XMLBuilder=require('./XMLBuilder');module.exports.create=function(name,xmldec,doctype,options){options=assign({},xmldec,doctype,options);return new XMLBuilder(name,options).root();};}).call(this);},{"./XMLBuilder":218,"lodash/assign":163}],234:[function(require,module,exports){module.exports=extend;var hasOwnProperty=Object.prototype.hasOwnProperty;function extend(){var target={};for(var i=0;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;}},{}],235:[function(require,module,exports){(function(process){'use strict';var _require2=require('./util'),arrayOrPush=_require2.arrayOrPush;var caller=require('./lib/caller');var emitter=require('./lib/emitter');var reporters=require('./reporters');var testrunner=require('./lib/testrunner');var expect=require('./lib/expect');var symbols=require('./util/symbols');var Gunner=function(){function Gunner(name){var _beforeHooks,_afterHooks;_classCallCheck2(this,Gunner);this.name=name;this.__suite__={tests:[],beforeHooks:(_beforeHooks={},_defineProperty2(_beforeHooks,symbols.Start,[]),_defineProperty2(_beforeHooks,symbols.End,[]),_defineProperty2(_beforeHooks,'*',[]),_beforeHooks),afterHooks:(_afterHooks={},_defineProperty2(_afterHooks,symbols.Start,[]),_defineProperty2(_afterHooks,symbols.End,[]),_defineProperty2(_afterHooks,'*',[]),_afterHooks)};}_createClass(Gunner,[{key:"test",value:function test(description,_test){var existing=this.__suite__.tests.find(function(x){return x.description===description;});if(existing)throw new Error("Test '"+description+"' already exists!");var unit={description:description,type:'test',run:function run(state){return caller(_test,state);}};this.__suite__.tests.push(unit);return this;}},{key:"before",value:function before(description,_run,label){var unit={description:description,label:label,type:'hook',run:function run(state){return caller(_run,state);}};arrayOrPush(this.__suite__.beforeHooks,description,unit);return this;}},{key:"after",value:function after(description,_run2,label){var unit={description:description,label:label,type:'hook',run:function run(state){return caller(_run2,state);}};arrayOrPush(this.__suite__.afterHooks,description,unit);return this;}},{key:"run",value:function run(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};if(options.reporter===true)reporters.default(emitter,options);else if(typeof options.reporter==='function')options.reporter(emitter,options);else if(reporters[options.reporter])reporters[options.reporter](emitter,options);emitter.emit('start');return testrunner(this,options).then(function(results){results.success=results.filter(function(r){return r.status==='ok';});results.successPercent=Math.floor(results.success.length/results.length*100);if(results.successPercent!==100&&typeof process!=='undefined')process.exitCode=1;emitter.emit('test end',results);emitter.emit('end',results);return results;});}}]);return Gunner;}();module.exports=Gunner;module.exports.expect=expect;module.exports.expectMany=expect.expectMany;module.exports.Start=symbols.Start;module.exports.End=symbols.End;module.exports.Gunner=module.exports;}).call(this,require('_process'));},{"./lib/caller":239,"./lib/emitter":240,"./lib/expect":241,"./lib/testrunner":242,"./reporters":244,"./util":247,"./util/symbols":248,"_process":189}],236:[function(require,module,exports){var _require3=require('../util'),isPromise=_require3.isPromise;var createRejectionStatement=function createRejectionStatement(statement){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}return Promise.reject(statement?statement.apply(undefined,args):'');};var assertPromise=function assertPromise(bool,statementTuple){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var _statementTuple=_toArray(statementTuple),statement=_statementTuple[0],args=_statementTuple.slice(1);statement=options.skipStatement?function(){return options.skipStatement;}:statement;if(isPromise(bool))return bool.catch(function(){return createRejectionStatement.apply(undefined,[statement].concat(_toConsumableArray2(args)));});return bool?Promise.resolve():createRejectionStatement.apply(undefined,[statement].concat(_toConsumableArray2(args)));};module.exports=assertPromise;},{"../util":247}],237:[function(require,module,exports){var isEq=require('@codefeathers/iseq');var U=require('../util');var _=U.taggedStringify;module.exports.done=[function(){return true;},function(){return null;}];module.exports.fail=[function(){return false;},function(_,rejection){return rejection;}];module.exports.exists=[function(val){return typeof val!=='undefined';},function(){return"Value is undefined";}];module.exports.isArray=[function(val){return Array.isArray(val);},function(val){return _(_templateObject,val);}];module.exports.isObject=[function(val){return(typeof val==="undefined"?"undefined":_typeof2(val))==='object'&&val!==null;},function(val){return _(_templateObject2,val);}];module.exports.hasLength=[function(val,l){return val.length===l;},function(val,l){return _(_templateObject3,val,l);}];module.exports.equals=[function(val,thing){return val===thing;},function(val,thing){return _(_templateObject4,val,thing);}];module.exports.deepEquals=[function(val,match){return isEq(val,match);},function(val,match){return _(_templateObject5,val,match);}];module.exports.contains=[function(val,match){return isEq(val,match,Object.keys(match));},function(val,match){return _(_templateObject6,val,match);}];module.exports.isTrue=[function(val){return val===true;},function(val){return _(_templateObject7,val);}];module.exports.isFalse=[function(val){return val===false;},function(val){return _(_templateObject8,val);}];module.exports.hasProp=[function(val,prop){return val.hasOwnProperty(prop);},function(val,prop){return _(_templateObject9,val,prop);}];module.exports.hasPair=[function(val){for(var _len2=arguments.length,pair=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){pair[_key2-1]=arguments[_key2];}return isEq(val[pair[0]],pair[1]);},function(val){for(var _len3=arguments.length,pair=Array(_len3>1?_len3-1:0),_key3=1;_key3<_len3;_key3++){pair[_key3-1]=arguments[_key3];}return _(_templateObject10,pair,val);}];module.exports.isPromise=[function(val){return U.isPromise(val);},function(val){return _(_templateObject11,val);},{shouldCatch:true}];module.exports.resolvesTo=[function(val,thing){return U.isPromise(val)?val.then(function(x){return x===thing?Promise.resolve():Promise.reject();}):Promise.reject(val+" was not a Promise");},function(val,thing){return _(_templateObject12,val,thing);}];module.exports.isType=[function(val,type){return type==='nil'&&(val==='null'||val==='undefined')||(typeof val==="undefined"?"undefined":_typeof2(val))===type||Array.isArray(val)&&type==="array"&&val===null&&type!=='object';},function(val,type){return _(_templateObject13,val,type);}];module.exports.greaterThan=[function(val,compare){return val>compare;},function(val,compare){return _(_templateObject14,val,compare);}];module.exports.lessThan=[function(val,compare){return val<compare;},function(val,compare){return _(_templateObject15,val,compare);}];module.exports.gte=[function(val,compare){return val>=compare;},function(val,compare){return _(_templateObject16,val,compare);}];module.exports.lte=[function(val,compare){return val<=compare;},function(val,compare){return _(_templateObject17,val,compare);}];/* Convenience aliases */module.exports.success=module.exports.done;module.exports.succeed=module.exports.done;module.exports.failure=module.exports.fail;module.exports.equal=module.exports.equals;module.exports.deepEqual=module.exports.deepEquals;module.exports.match=module.exports.deepEquals;module.exports.greaterThanOrEqualTo=module.exports.gte;module.exports.lessThanOrEqualTo=module.exports.lte;},{"../util":247,"@codefeathers/iseq":2}],238:[function(require,module,exports){// Only imported for JSDoc
/* eslint-disable-next-line */var Gunner=require('../gunner');var symbols=require('../util/symbols');var wrap=function wrap(type){return function(unit){return{type:type,unit:unit};};};/**
 * runs the test suite
 * @param {Gunner} instance
 */var buildTestTree=function buildTestTree(instance){var testQueue=[];Array.prototype.push.apply(testQueue,instance.__suite__.beforeHooks[symbols.Start].map(wrap('@start')));testQueue.push.apply(instance.__suite__.afterHooks[symbols.Start].map(wrap('@start')));instance.__suite__.tests.forEach(function(test){return Array.prototype.push.apply(testQueue,instance.__suite__.beforeHooks['*'].map(wrap('@every'))),Array.prototype.push.apply(testQueue,(instance.__suite__.beforeHooks[test.description]||[]).map(wrap('@this'))),testQueue.push(wrap('@test')(test)),Array.prototype.push.apply(testQueue,(instance.__suite__.afterHooks[test.description]||[]).map(wrap('@afterTest'))),Array.prototype.push.apply(testQueue,instance.__suite__.afterHooks['*'].map(wrap('@afterEvery')));});Array.prototype.push.apply(testQueue,instance.__suite__.beforeHooks[symbols.End].map(wrap('@beforeend')));Array.prototype.push.apply(testQueue,instance.__suite__.afterHooks[symbols.End].map(wrap('@end')));return testQueue;};module.exports=buildTestTree;},{"../gunner":235,"../util/symbols":248}],239:[function(require,module,exports){var _require4=require('../util'),isPromise=_require4.isPromise;var caller=function caller(test,state){var value=void 0,error=void 0,errored=void 0;try{value=test(state);}catch(e){errored=true;error=e;}var promise=isPromise(value);if(promise){return value.then(function(res){return{status:'ok',resolve:res,promise:true};}).catch(function(rej){return{status:'notOk',rejection:rej,promise:true};});}else{return Promise.resolve(_extends2({status:errored?'notOk':'ok'},!errored&&{value:value},errored&&{error:error},{promise:false}));}};module.exports=caller;},{"../util":247}],240:[function(require,module,exports){var EventEmitter=require('events');var GunnerEmitter=function(_EventEmitter){_inherits(GunnerEmitter,_EventEmitter);function GunnerEmitter(){_classCallCheck2(this,GunnerEmitter);return _possibleConstructorReturn(this,(GunnerEmitter.__proto__||Object.getPrototypeOf(GunnerEmitter)).apply(this,arguments));}return GunnerEmitter;}(EventEmitter);module.exports=new GunnerEmitter();},{"events":11}],241:[function(require,module,exports){'use strict';var _require5=require('../util'),liftPromise=_require5.liftPromise,lowerCaseFirstLetter=_require5.lowerCaseFirstLetter;var library=require('./assertionsLibrary');var assertPromise=require('./assertPromise');var expectPromise=function expectPromise(pred,statement){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};return function(toTest){return function(){for(var _len4=arguments.length,testValues=Array(_len4),_key4=0;_key4<_len4;_key4++){testValues[_key4]=arguments[_key4];}return liftPromise(function(resolvedValue){return assertPromise(pred.apply(undefined,[toTest].concat(testValues)),[statement,resolvedValue].concat(testValues));},toTest).catch(function(rejectedValue){return options.shouldCatch?assertPromise(pred.apply(undefined,[toTest].concat(testValues)),[statement,rejectedValue].concat(testValues),{skipStatement:rejectedValue}):Promise.reject(rejectedValue);});};};};var expects=Object.keys(library).reduce(function(acc,e){var _library$e=_slicedToArray(library[e],3),pred=_library$e[0],statement=_library$e[1],options=_library$e[2];acc[e]=expectPromise(pred,statement,options);return acc;},{});var negateP=function negateP(prom){return prom.then(Promise.reject,Promise.resolve);};var expect=function expect(thing,args){return new Proxy({},{get:function get(obj,prop){var toCheck=args?thing.apply(undefined,_toConsumableArray2(args)):thing;if(expects.hasOwnProperty(prop))return function(){return expects[prop](toCheck).apply(undefined,arguments);};else if(prop.slice(0,3)==='not')return function(){return negateP(expects[lowerCaseFirstLetter(prop.slice(3))](toCheck).apply(undefined,arguments));};else throw new Error('Unknown assertion method',prop);}});};var expectMany=function expectMany(){for(var _len5=arguments.length,expects=Array(_len5),_key5=0;_key5<_len5;_key5++){expects[_key5]=arguments[_key5];}return Promise.all(expects);};module.exports=expect;module.exports.expectMany=expectMany;},{"../util":247,"./assertPromise":236,"./assertionsLibrary":237}],242:[function(require,module,exports){// Only imported for JSDoc
/* eslint-disable-next-line */var Gunner=require('../gunner');Promise.object=require('@codefeathers/promise.object');var _require6=require('../util'),last=_require6.last,pipe=_require6.pipe,pick=_require6.pick,assignToObject=_require6.assignToObject;var buildTestQueue=require('./buildTestQueue');var findSkip=function findSkip(skip,unit){var startFailed=skip.findIndex(function(x){return x.type==='@start';});var everyFailed=skip.findIndex(function(x){return x.type==='@every';});var beforeFailed=skip.findIndex(function(x){return x.description===unit.description;});return startFailed!==-1&&'A start hook failed\n'+skip[startFailed].error||everyFailed!==-1&&'An every hook failed\n'+skip[everyFailed].error||beforeFailed!==-1&&'A before test hook failed\n'+skip[beforeFailed].error;};var reduceQueue=function reduceQueue(queue){return queue.reduce(function(acc,item){return Promise.resolve(acc).then(function(acc){return Promise.all([last(acc.results),Promise.object(acc.state)]).then(function(_ref){var _ref2=_slicedToArray(_ref,2),state=_ref2[1];var toSkip=findSkip(acc.skip,item.unit);return[toSkip,state];}).then(function(_ref3){var _ref4=_slicedToArray(_ref3,2),toSkip=_ref4[0],state=_ref4[1];return toSkip?{status:'skip',description:toSkip}:item.unit.run(state);}).then(function(result){var status=result.status;if(item.type==='@test'){var resultObject=_extends2({status:status,description:item.unit.description},(status==='notOk'||status==='skip')&&{reason:result.error||result.rejection||result.description});acc.results.push(resultObject);}else{var identifier=item.unit.label||queue.filter(function(i){return i.type===item.type;}).filter(function(i){return i.unit.description===item.unit.description;}).length;var stateAddition=/* eslint-disable-next-line */status==='ok'?result.promise?result.resolve:result.value:null;if(identifier&&stateAddition)assignToObject(acc.state,item.type)(identifier,stateAddition);}if(status==='notOk'){acc.skip.push({type:item.type,description:item.unit.description,error:result.promise?result.rejection:result.error});}return acc;});});},{results:[],state:{},skip:[]});};/**
 * runs the test suite
 * @param {Gunner} instance
 * @param {object} options
 */var testrunner=function testrunner(instance){return Promise.object(pipe(buildTestQueue,reduceQueue,pick('results'))(instance));};module.exports=testrunner;},{"../gunner":235,"../util":247,"./buildTestQueue":238,"@codefeathers/promise.object":3}],243:[function(require,module,exports){var statusMap={'ok':['ok','✅'],'notOk':['notOk','❌'],'skip':['skip','⚠️']};var Default=function Default(runner,options){runner.on('start',function(){return console.log('Started tests');});runner.on('test end',function(results){results.forEach(function(x){var s=statusMap[x.status];console.log('>',s[0],s[1],x.description);options.trace&&x.reason&&console.log('\n---\n\n',x.reason,'\n\n---\n');});});runner.on('end',function(results){console.log(results.success.length,'tests of',results.length,'passed');console.log('Success ratio:',results.successPercent,'%');});};module.exports=Default;},{}],244:[function(require,module,exports){module.exports={default:require('./default'),tap:require('./tap'),xunit:require('./xunit')};},{"./default":243,"./tap":245,"./xunit":246}],245:[function(require,module,exports){var statusMap={'ok':'ok','notOk':'not ok','skip':'skip'};var convert=function convert(results,options){return"\nTAP version 13\n"+(results.length?'1':0)+".."+results.length+"\n"+results.map(function(r,i){var status=statusMap[r.status];var message=options.trace&&r.reason&&(r.reason.stack?r.reason.stack:r.reason)||'';return status+" "+(i+1)+" - "+r.description+(message&&'\n  ---\n  message: |\n    '+message+'\n  ---\n');}).join('\n')+"\n";};var TAP=function TAP(runner,options){runner.on('end',function(results){return console.log(convert(results,options));});};module.exports=TAP;module.exports.convert=convert;},{}],246:[function(require,module,exports){(function(process){var Readable=require('stream').Readable;var TAP=require('./tap');var xUnitConverter=require('tap-xunit');var streamify=function streamify(text){var s=new Readable();s._read=function(){};s.push(text);s.push(null);return s;};var xunit=function xunit(runner){runner.on('end',function(results){return streamify(TAP.convert(results,{trace:false})).pipe(xUnitConverter()).pipe(process.stdout);});};module.exports=xunit;}).call(this,require('_process'));},{"./tap":245,"_process":189,"stream":204,"tap-xunit":207}],247:[function(require,module,exports){var _stringify=require('json-stringify-safe');var isObject=function isObject(x){return x&&(typeof x==="undefined"?"undefined":_typeof2(x))==='object';};var stringify=function stringify(obj){return isObject(obj)?obj.stack||_stringify(obj):obj;};var deepFlatten=function deepFlatten(arr){var _ref5;return(_ref5=[]).concat.apply(_ref5,_toConsumableArray2(arr.map(function(v){return Array.isArray(v)?deepFlatten(v):v;})));};/* Returns true if a promise is passed */var isPromise=function isPromise(prom){return prom&&typeof prom.then==='function';};/* Lift a value or promise into a function */var liftPromise=function liftPromise(fn,thing){return isPromise(thing)?thing.then(fn):fn(thing);};module.exports={/* Returns true if an object is passed */isObject:isObject,/* Returns true if a promise is passed */isPromise:isPromise,/* Lift a value or promise into a function */liftPromise:liftPromise,/* Returns the element found at the given path or undefined */path:function path(obj){return function(path){return path.reduce(function(result,segment){return result&&result[segment];},obj);};},/* Picks a key from an object */pick:function pick(key){return function(obj){return obj[key];};},/* Pipe a value or promise through any number of unary functions */pipe:function pipe(){for(var _len6=arguments.length,fns=Array(_len6),_key6=0;_key6<_len6;_key6++){fns[_key6]=arguments[_key6];}return function(arg){return fns.reduce(function(acc,fn){return liftPromise(fn,acc);},arg);};},/* Reduces an array */reduce:function reduce(fn,def){return function(arr){return arr.reduce(fn,def);};},/* Flattens an array of arrays to an array */flatten:function flatten(arrData){return[].concat.apply([],arrData);},/* Deep flattens arrays */deepFlatten:deepFlatten,/* Maps a function over an array */map:function map(fn){return function(x){return x.map(fn);};},/* Filter an array using provided function */filter:function filter(fn){return function(x){return x.filter(fn);};},/* Returns identity */identity:function identity(x){return x;},/* Wraps a value in an object with given key */wrapWith:function wrapWith(x){return function(y){return _defineProperty2({},x,y);};},/* Unwraps a value from an object with given key */unwrapFrom:function unwrapFrom(x){return function(y){return y[x];};},/* Resolves an array of Promises */promiseAll:function promiseAll(x){return Promise.all(x);},/* Pass partial arguments and return a function that accepts the rest */partial:function partial(fn){for(var _len7=arguments.length,args=Array(_len7>1?_len7-1:0),_key7=1;_key7<_len7;_key7++){args[_key7-1]=arguments[_key7];}return function(){for(var _len8=arguments.length,rest=Array(_len8),_key8=0;_key8<_len8;_key8++){rest[_key8]=arguments[_key8];}return fn.apply(undefined,args.concat(rest));};},/* Item is in collection */isIn:function isIn(collection,item){return collection.indexOf(item)!==-1;},/* Collection contains given path */containsPath:function containsPath(collection,path){return collection.some(function(x){return path.match(new RegExp("/"+x+"/?$"));});},/* Stringifies object or coerces to string */stringify:stringify,/* Tagged Stringify */taggedStringify:function taggedStringify(strings){for(var _len9=arguments.length,expr=Array(_len9>1?_len9-1:0),_key9=1;_key9<_len9;_key9++){expr[_key9-1]=arguments[_key9];}return strings.reduce(function(acc,curr,i){return acc+curr+(stringify(expr[i])||'');},'');},/* Short circuits with given value on pred. Else calls function */short:function short(pred,shorter){return function(fn){return function(value){return pred(value)?shorter(value):fn(value);};};},/* Check if object has given property */hasProp:function hasProp(obj){return function(prop){return prop in obj;};},/* Fetches last element from list */last:function last(arr){return arr[arr.length-1];},/* Uppercases first letter of word */upperCaseFirstLetter:function upperCaseFirstLetter(word){return word[0].toUpperCase()+word.slice(1);},/* Lowercases first letter of word */lowerCaseFirstLetter:function lowerCaseFirstLetter(word){return word[0].toLowerCase()+word.slice(1);},/* Creates an array or pushes to an existing one */arrayOrPush:function arrayOrPush(obj,key,item){return Array.isArray(obj[key])?obj[key].push(item):obj[key]=[item];},/* Assigns to key or creates a new object */assignToObject:function assignToObject(obj,path){return function(key,value){return isObject(obj[path])?obj[path][key]=value:obj[path]=_defineProperty2({},key,value);};}};},{"json-stringify-safe":47}],248:[function(require,module,exports){module.exports={Start:Symbol('Start'),End:Symbol('End'),expect:Symbol('expect'),pass:'pass',fail:'fail'};},{}]},{},[1])(1);});
