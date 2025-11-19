(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var Df={exports:{}},Tl={},xf={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function b0(){if(gy)return Se;gy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.iterator;function I(O){return O===null||typeof O!="object"?null:(O=w&&O[w]||O["@@iterator"],typeof O=="function"?O:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,G={};function W(O,q,Te){this.props=O,this.context=q,this.refs=G,this.updater=Te||V}W.prototype.isReactComponent={},W.prototype.setState=function(O,q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,q,"setState")},W.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function fe(){}fe.prototype=W.prototype;function pe(O,q,Te){this.props=O,this.context=q,this.refs=G,this.updater=Te||V}var ye=pe.prototype=new fe;ye.constructor=pe,z(ye,W.prototype),ye.isPureReactComponent=!0;var xe=Array.isArray,Ke=Object.prototype.hasOwnProperty,Oe={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function C(O,q,Te){var Ie,Ae={},Re=null,ze=null;if(q!=null)for(Ie in q.ref!==void 0&&(ze=q.ref),q.key!==void 0&&(Re=""+q.key),q)Ke.call(q,Ie)&&!N.hasOwnProperty(Ie)&&(Ae[Ie]=q[Ie]);var Ve=arguments.length-2;if(Ve===1)Ae.children=Te;else if(1<Ve){for(var $e=Array(Ve),nn=0;nn<Ve;nn++)$e[nn]=arguments[nn+2];Ae.children=$e}if(O&&O.defaultProps)for(Ie in Ve=O.defaultProps,Ve)Ae[Ie]===void 0&&(Ae[Ie]=Ve[Ie]);return{$$typeof:n,type:O,key:Re,ref:ze,props:Ae,_owner:Oe.current}}function R(O,q){return{$$typeof:n,type:O.type,key:q,ref:O.ref,props:O.props,_owner:O._owner}}function x(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function P(O){var q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Te){return q[Te]})}var L=/\/+/g;function A(O,q){return typeof O=="object"&&O!==null&&O.key!=null?P(""+O.key):q.toString(36)}function Qe(O,q,Te,Ie,Ae){var Re=typeof O;(Re==="undefined"||Re==="boolean")&&(O=null);var ze=!1;if(O===null)ze=!0;else switch(Re){case"string":case"number":ze=!0;break;case"object":switch(O.$$typeof){case n:case e:ze=!0}}if(ze)return ze=O,Ae=Ae(ze),O=Ie===""?"."+A(ze,0):Ie,xe(Ae)?(Te="",O!=null&&(Te=O.replace(L,"$&/")+"/"),Qe(Ae,q,Te,"",function(nn){return nn})):Ae!=null&&(x(Ae)&&(Ae=R(Ae,Te+(!Ae.key||ze&&ze.key===Ae.key?"":(""+Ae.key).replace(L,"$&/")+"/")+O)),q.push(Ae)),1;if(ze=0,Ie=Ie===""?".":Ie+":",xe(O))for(var Ve=0;Ve<O.length;Ve++){Re=O[Ve];var $e=Ie+A(Re,Ve);ze+=Qe(Re,q,Te,$e,Ae)}else if($e=I(O),typeof $e=="function")for(O=$e.call(O),Ve=0;!(Re=O.next()).done;)Re=Re.value,$e=Ie+A(Re,Ve++),ze+=Qe(Re,q,Te,$e,Ae);else if(Re==="object")throw q=String(O),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return ze}function kt(O,q,Te){if(O==null)return O;var Ie=[],Ae=0;return Qe(O,Ie,"","",function(Re){return q.call(Te,Re,Ae++)}),Ie}function Wt(O){if(O._status===-1){var q=O._result;q=q(),q.then(function(Te){(O._status===0||O._status===-1)&&(O._status=1,O._result=Te)},function(Te){(O._status===0||O._status===-1)&&(O._status=2,O._result=Te)}),O._status===-1&&(O._status=0,O._result=q)}if(O._status===1)return O._result.default;throw O._result}var st={current:null},J={transition:null},ce={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:J,ReactCurrentOwner:Oe};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:kt,forEach:function(O,q,Te){kt(O,function(){q.apply(this,arguments)},Te)},count:function(O){var q=0;return kt(O,function(){q++}),q},toArray:function(O){return kt(O,function(q){return q})||[]},only:function(O){if(!x(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Se.Component=W,Se.Fragment=t,Se.Profiler=o,Se.PureComponent=pe,Se.StrictMode=r,Se.Suspense=p,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Se.act=ie,Se.cloneElement=function(O,q,Te){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ie=z({},O.props),Ae=O.key,Re=O.ref,ze=O._owner;if(q!=null){if(q.ref!==void 0&&(Re=q.ref,ze=Oe.current),q.key!==void 0&&(Ae=""+q.key),O.type&&O.type.defaultProps)var Ve=O.type.defaultProps;for($e in q)Ke.call(q,$e)&&!N.hasOwnProperty($e)&&(Ie[$e]=q[$e]===void 0&&Ve!==void 0?Ve[$e]:q[$e])}var $e=arguments.length-2;if($e===1)Ie.children=Te;else if(1<$e){Ve=Array($e);for(var nn=0;nn<$e;nn++)Ve[nn]=arguments[nn+2];Ie.children=Ve}return{$$typeof:n,type:O.type,key:Ae,ref:Re,props:Ie,_owner:ze}},Se.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},Se.createElement=C,Se.createFactory=function(O){var q=C.bind(null,O);return q.type=O,q},Se.createRef=function(){return{current:null}},Se.forwardRef=function(O){return{$$typeof:d,render:O}},Se.isValidElement=x,Se.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:Wt}},Se.memo=function(O,q){return{$$typeof:_,type:O,compare:q===void 0?null:q}},Se.startTransition=function(O){var q=J.transition;J.transition={};try{O()}finally{J.transition=q}},Se.unstable_act=ie,Se.useCallback=function(O,q){return st.current.useCallback(O,q)},Se.useContext=function(O){return st.current.useContext(O)},Se.useDebugValue=function(){},Se.useDeferredValue=function(O){return st.current.useDeferredValue(O)},Se.useEffect=function(O,q){return st.current.useEffect(O,q)},Se.useId=function(){return st.current.useId()},Se.useImperativeHandle=function(O,q,Te){return st.current.useImperativeHandle(O,q,Te)},Se.useInsertionEffect=function(O,q){return st.current.useInsertionEffect(O,q)},Se.useLayoutEffect=function(O,q){return st.current.useLayoutEffect(O,q)},Se.useMemo=function(O,q){return st.current.useMemo(O,q)},Se.useReducer=function(O,q,Te){return st.current.useReducer(O,q,Te)},Se.useRef=function(O){return st.current.useRef(O)},Se.useState=function(O){return st.current.useState(O)},Se.useSyncExternalStore=function(O,q,Te){return st.current.useSyncExternalStore(O,q,Te)},Se.useTransition=function(){return st.current.useTransition()},Se.version="18.3.1",Se}var _y;function zp(){return _y||(_y=1,xf.exports=b0()),xf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy;function V0(){if(yy)return Tl;yy=1;var n=zp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,_){var E,w={},I=null,V=null;_!==void 0&&(I=""+_),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(V=p.ref);for(E in p)r.call(p,E)&&!a.hasOwnProperty(E)&&(w[E]=p[E]);if(d&&d.defaultProps)for(E in p=d.defaultProps,p)w[E]===void 0&&(w[E]=p[E]);return{$$typeof:e,type:d,key:I,ref:V,props:w,_owner:o.current}}return Tl.Fragment=t,Tl.jsx=u,Tl.jsxs=u,Tl}var vy;function F0(){return vy||(vy=1,Df.exports=V0()),Df.exports}var ne=F0(),gt=zp(),Mc={},Of={exports:{}},hn={},Lf={exports:{}},Mf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ey;function U0(){return Ey||(Ey=1,(function(n){function e(J,ce){var ie=J.length;J.push(ce);e:for(;0<ie;){var O=ie-1>>>1,q=J[O];if(0<o(q,ce))J[O]=ce,J[ie]=q,ie=O;else break e}}function t(J){return J.length===0?null:J[0]}function r(J){if(J.length===0)return null;var ce=J[0],ie=J.pop();if(ie!==ce){J[0]=ie;e:for(var O=0,q=J.length,Te=q>>>1;O<Te;){var Ie=2*(O+1)-1,Ae=J[Ie],Re=Ie+1,ze=J[Re];if(0>o(Ae,ie))Re<q&&0>o(ze,Ae)?(J[O]=ze,J[Re]=ie,O=Re):(J[O]=Ae,J[Ie]=ie,O=Ie);else if(Re<q&&0>o(ze,ie))J[O]=ze,J[Re]=ie,O=Re;else break e}}return ce}function o(J,ce){var ie=J.sortIndex-ce.sortIndex;return ie!==0?ie:J.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var p=[],_=[],E=1,w=null,I=3,V=!1,z=!1,G=!1,W=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ye(J){for(var ce=t(_);ce!==null;){if(ce.callback===null)r(_);else if(ce.startTime<=J)r(_),ce.sortIndex=ce.expirationTime,e(p,ce);else break;ce=t(_)}}function xe(J){if(G=!1,ye(J),!z)if(t(p)!==null)z=!0,Wt(Ke);else{var ce=t(_);ce!==null&&st(xe,ce.startTime-J)}}function Ke(J,ce){z=!1,G&&(G=!1,fe(C),C=-1),V=!0;var ie=I;try{for(ye(ce),w=t(p);w!==null&&(!(w.expirationTime>ce)||J&&!P());){var O=w.callback;if(typeof O=="function"){w.callback=null,I=w.priorityLevel;var q=O(w.expirationTime<=ce);ce=n.unstable_now(),typeof q=="function"?w.callback=q:w===t(p)&&r(p),ye(ce)}else r(p);w=t(p)}if(w!==null)var Te=!0;else{var Ie=t(_);Ie!==null&&st(xe,Ie.startTime-ce),Te=!1}return Te}finally{w=null,I=ie,V=!1}}var Oe=!1,N=null,C=-1,R=5,x=-1;function P(){return!(n.unstable_now()-x<R)}function L(){if(N!==null){var J=n.unstable_now();x=J;var ce=!0;try{ce=N(!0,J)}finally{ce?A():(Oe=!1,N=null)}}else Oe=!1}var A;if(typeof pe=="function")A=function(){pe(L)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,kt=Qe.port2;Qe.port1.onmessage=L,A=function(){kt.postMessage(null)}}else A=function(){W(L,0)};function Wt(J){N=J,Oe||(Oe=!0,A())}function st(J,ce){C=W(function(){J(n.unstable_now())},ce)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(J){J.callback=null},n.unstable_continueExecution=function(){z||V||(z=!0,Wt(Ke))},n.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<J?Math.floor(1e3/J):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(J){switch(I){case 1:case 2:case 3:var ce=3;break;default:ce=I}var ie=I;I=ce;try{return J()}finally{I=ie}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(J,ce){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ie=I;I=J;try{return ce()}finally{I=ie}},n.unstable_scheduleCallback=function(J,ce,ie){var O=n.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?O+ie:O):ie=O,J){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ie+q,J={id:E++,callback:ce,priorityLevel:J,startTime:ie,expirationTime:q,sortIndex:-1},ie>O?(J.sortIndex=ie,e(_,J),t(p)===null&&J===t(_)&&(G?(fe(C),C=-1):G=!0,st(xe,ie-O))):(J.sortIndex=q,e(p,J),z||V||(z=!0,Wt(Ke))),J},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(J){var ce=I;return function(){var ie=I;I=ce;try{return J.apply(this,arguments)}finally{I=ie}}}})(Mf)),Mf}var wy;function j0(){return wy||(wy=1,Lf.exports=U0()),Lf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty;function z0(){if(Ty)return hn;Ty=1;var n=zp(),e=j0();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},w={};function I(i){return p.call(w,i)?!0:p.call(E,i)?!1:_.test(i)?w[i]=!0:(E[i]=!0,!1)}function V(i,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function z(i,s,l,h){if(s===null||typeof s>"u"||V(i,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function G(i,s,l,h,f,m,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=m,this.removeEmptyString=v}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){W[i]=new G(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];W[s]=new G(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){W[i]=new G(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){W[i]=new G(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){W[i]=new G(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){W[i]=new G(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){W[i]=new G(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){W[i]=new G(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){W[i]=new G(i,5,!1,i.toLowerCase(),null,!1,!1)});var fe=/[\-:]([a-z])/g;function pe(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(fe,pe);W[s]=new G(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(fe,pe);W[s]=new G(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(fe,pe);W[s]=new G(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){W[i]=new G(i,1,!1,i.toLowerCase(),null,!1,!1)}),W.xlinkHref=new G("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){W[i]=new G(i,1,!1,i.toLowerCase(),null,!0,!0)});function ye(i,s,l,h){var f=W.hasOwnProperty(s)?W[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(z(s,l,f,h)&&(l=null),h||f===null?I(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):f.mustUseProperty?i[f.propertyName]=l===null?f.type===3?!1:"":l:(s=f.attributeName,h=f.attributeNamespace,l===null?i.removeAttribute(s):(f=f.type,l=f===3||f===4&&l===!0?"":""+l,h?i.setAttributeNS(h,s,l):i.setAttribute(s,l))))}var xe=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ke=Symbol.for("react.element"),Oe=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),P=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),kt=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),st=Symbol.for("react.offscreen"),J=Symbol.iterator;function ce(i){return i===null||typeof i!="object"?null:(i=J&&i[J]||i["@@iterator"],typeof i=="function"?i:null)}var ie=Object.assign,O;function q(i){if(O===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var Te=!1;function Ie(i,s){if(!i||Te)return"";Te=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(U){var h=U}Reflect.construct(i,[],s)}else{try{s.call()}catch(U){h=U}i.call(s.prototype)}else{try{throw Error()}catch(U){h=U}i()}}catch(U){if(U&&h&&typeof U.stack=="string"){for(var f=U.stack.split(`
`),m=h.stack.split(`
`),v=f.length-1,S=m.length-1;1<=v&&0<=S&&f[v]!==m[S];)S--;for(;1<=v&&0<=S;v--,S--)if(f[v]!==m[S]){if(v!==1||S!==1)do if(v--,S--,0>S||f[v]!==m[S]){var k=`
`+f[v].replace(" at new "," at ");return i.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",i.displayName)),k}while(1<=v&&0<=S);break}}}finally{Te=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?q(i):""}function Ae(i){switch(i.tag){case 5:return q(i.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return i=Ie(i.type,!1),i;case 11:return i=Ie(i.type.render,!1),i;case 1:return i=Ie(i.type,!0),i;default:return""}}function Re(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case N:return"Fragment";case Oe:return"Portal";case R:return"Profiler";case C:return"StrictMode";case A:return"Suspense";case Qe:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case P:return(i.displayName||"Context")+".Consumer";case x:return(i._context.displayName||"Context")+".Provider";case L:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case kt:return s=i.displayName||null,s!==null?s:Re(i.type)||"Memo";case Wt:s=i._payload,i=i._init;try{return Re(i(s))}catch{}}return null}function ze(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(s);case 8:return s===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ve(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function $e(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function nn(i){var s=$e(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),h=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){h=""+v,m.call(this,v)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(v){h=""+v},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function io(i){i._valueTracker||(i._valueTracker=nn(i))}function ka(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return i&&(h=$e(i)?i.checked?"true":"false":i.value),i=h,i!==l?(s.setValue(i),!0):!1}function ui(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function so(i,s){var l=s.checked;return ie({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Eu(i,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=Ve(s.value!=null?s.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function oo(i,s){s=s.checked,s!=null&&ye(i,"checked",s,!1)}function cs(i,s){oo(i,s);var l=Ve(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?yt(i,s.type,l):s.hasOwnProperty("defaultValue")&&yt(i,s.type,Ve(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Pa(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function yt(i,s,l){(s!=="number"||ui(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var dt=Array.isArray;function Fn(i,s,l,h){if(i=i.options,s){s={};for(var f=0;f<l.length;f++)s["$"+l[f]]=!0;for(l=0;l<i.length;l++)f=s.hasOwnProperty("$"+i[l].value),i[l].selected!==f&&(i[l].selected=f),f&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Ve(l),s=null,f=0;f<i.length;f++){if(i[f].value===l){i[f].selected=!0,h&&(i[f].defaultSelected=!0);return}s!==null||i[f].disabled||(s=i[f])}s!==null&&(s.selected=!0)}}function Na(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Da(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(dt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:Ve(l)}}function wu(i,s){var l=Ve(s.value),h=Ve(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function ci(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function xa(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ao(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?xa(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var hi,Tu=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,f){MSApp.execUnsafeLocalFunction(function(){return i(s,l,h,f)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(hi=hi||document.createElement("div"),hi.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=hi.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function hs(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iu=["Webkit","ms","Moz","O"];Object.keys(di).forEach(function(i){Iu.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),di[s]=di[i]})});function fi(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||di.hasOwnProperty(i)&&di[i]?(""+s).trim():s+"px"}function lo(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,f=fi(l,s[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,f):i[l]=f}}var Oa=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Un(i,s){if(s){if(Oa[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function uo(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pi=null;function co(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Pr=null,Nr=null,ct=null;function La(i){if(i=al(i)){if(typeof Pr!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Yu(s),Pr(i.stateNode,i.type,s))}}function mi(i){Nr?ct?ct.push(i):ct=[i]:Nr=i}function gi(){if(Nr){var i=Nr,s=ct;if(ct=Nr=null,La(i),s)for(i=0;i<s.length;i++)La(s[i])}}function Su(i,s){return i(s)}function Cu(){}var tr=!1;function Au(i,s,l){if(tr)return i(s,l);tr=!0;try{return Su(i,s,l)}finally{tr=!1,(Nr!==null||ct!==null)&&(Cu(),gi())}}function ds(i,s){var l=i.stateNode;if(l===null)return null;var h=Yu(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var _i=!1;if(d)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){_i=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{_i=!1}function Ru(i,s,l,h,f,m,v,S,k){var U=Array.prototype.slice.call(arguments,3);try{s.apply(l,U)}catch(K){this.onError(K)}}var Dr=!1,nr=null,ho=!1,Cn=null,ku={onError:function(i){Dr=!0,nr=i}};function Pu(i,s,l,h,f,m,v,S,k){Dr=!1,nr=null,Ru.apply(ku,arguments)}function Ma(i,s,l,h,f,m,v,S,k){if(Pu.apply(this,arguments),Dr){if(Dr){var U=nr;Dr=!1,nr=null}else throw Error(t(198));ho||(ho=!0,Cn=U)}}function jn(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function ba(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Nu(i){if(jn(i)!==i)throw Error(t(188))}function Du(i){var s=i.alternate;if(!s){if(s=jn(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,h=s;;){var f=l.return;if(f===null)break;var m=f.alternate;if(m===null){if(h=f.return,h!==null){l=h;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===l)return Nu(f),i;if(m===h)return Nu(f),s;m=m.sibling}throw Error(t(188))}if(l.return!==h.return)l=f,h=m;else{for(var v=!1,S=f.child;S;){if(S===l){v=!0,l=f,h=m;break}if(S===h){v=!0,h=f,l=m;break}S=S.sibling}if(!v){for(S=m.child;S;){if(S===l){v=!0,l=m,h=f;break}if(S===h){v=!0,h=m,l=f;break}S=S.sibling}if(!v)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function xu(i){return i=Du(i),i!==null?fs(i):null}function fs(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=fs(i);if(s!==null)return s;i=i.sibling}return null}var Va=e.unstable_scheduleCallback,fo=e.unstable_cancelCallback,ps=e.unstable_shouldYield,xr=e.unstable_requestPaint,Je=e.unstable_now,ad=e.unstable_getCurrentPriorityLevel,po=e.unstable_ImmediatePriority,Fa=e.unstable_UserBlockingPriority,ms=e.unstable_NormalPriority,Ua=e.unstable_LowPriority,mo=e.unstable_IdlePriority,gs=null,pn=null;function Ou(i){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(gs,i,void 0,(i.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:_s,rr=Math.log,An=Math.LN2;function _s(i){return i>>>=0,i===0?32:31-(rr(i)/An|0)|0}var ir=64,vi=4194304;function je(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Or(i,s){var l=i.pendingLanes;if(l===0)return 0;var h=0,f=i.suspendedLanes,m=i.pingedLanes,v=l&268435455;if(v!==0){var S=v&~f;S!==0?h=je(S):(m&=v,m!==0&&(h=je(m)))}else v=l&~f,v!==0?h=je(v):m!==0&&(h=je(m));if(h===0)return 0;if(s!==0&&s!==h&&(s&f)===0&&(f=h&-h,m=s&-s,f>=m||f===16&&(m&4194240)!==0))return s;if((h&4)!==0&&(h|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=h;0<s;)l=31-mn(s),f=1<<l,h|=i[l],s&=~f;return h}function ys(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vs(i,s){for(var l=i.suspendedLanes,h=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes;0<m;){var v=31-mn(m),S=1<<v,k=f[v];k===-1?((S&l)===0||(S&h)!==0)&&(f[v]=ys(S,s)):k<=s&&(i.expiredLanes|=S),m&=~S}}function ja(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function za(){var i=ir;return ir<<=1,(ir&4194240)===0&&(ir=64),i}function Ba(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Es(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-mn(s),i[s]=l}function ld(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var f=31-mn(l),m=1<<f;s[f]=0,h[f]=-1,i[f]=-1,l&=~m}}function Wa(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var h=31-mn(l),f=1<<h;f&s|i[h]&s&&(i[h]|=s),l&=~f}}var Ne=0;function sr(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Ha,go,qa,$a,Ga,or=!1,_o=[],ar=null,lr=null,Mt=null,ws=new Map,Lr=new Map,gn=[],Lu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ei(i,s){switch(i){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":ws.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(s.pointerId)}}function zn(i,s,l,h,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:m,targetContainers:[f]},s!==null&&(s=al(s),s!==null&&go(s)),i):(i.eventSystemFlags|=h,s=i.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),i)}function Mu(i,s,l,h,f){switch(s){case"focusin":return ar=zn(ar,i,s,l,h,f),!0;case"dragenter":return lr=zn(lr,i,s,l,h,f),!0;case"mouseover":return Mt=zn(Mt,i,s,l,h,f),!0;case"pointerover":var m=f.pointerId;return ws.set(m,zn(ws.get(m)||null,i,s,l,h,f)),!0;case"gotpointercapture":return m=f.pointerId,Lr.set(m,zn(Lr.get(m)||null,i,s,l,h,f)),!0}return!1}function yo(i){var s=Cs(i.target);if(s!==null){var l=jn(s);if(l!==null){if(s=l.tag,s===13){if(s=ba(l),s!==null){i.blockedOn=s,Ga(i.priority,function(){qa(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Ge(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=vo(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);pi=h,l.target.dispatchEvent(h),pi=null}else return s=al(l),s!==null&&go(s),i.blockedOn=l,!1;s.shift()}return!0}function bu(i,s,l){Ge(i)&&l.delete(s)}function ud(){or=!1,ar!==null&&Ge(ar)&&(ar=null),lr!==null&&Ge(lr)&&(lr=null),Mt!==null&&Ge(Mt)&&(Mt=null),ws.forEach(bu),Lr.forEach(bu)}function wi(i,s){i.blockedOn===s&&(i.blockedOn=null,or||(or=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ud)))}function Ti(i){function s(f){return wi(f,i)}if(0<_o.length){wi(_o[0],i);for(var l=1;l<_o.length;l++){var h=_o[l];h.blockedOn===i&&(h.blockedOn=null)}}for(ar!==null&&wi(ar,i),lr!==null&&wi(lr,i),Mt!==null&&wi(Mt,i),ws.forEach(s),Lr.forEach(s),l=0;l<gn.length;l++)h=gn[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<gn.length&&(l=gn[0],l.blockedOn===null);)yo(l),l.blockedOn===null&&gn.shift()}var Mr=xe.ReactCurrentBatchConfig,br=!0;function ur(i,s,l,h){var f=Ne,m=Mr.transition;Mr.transition=null;try{Ne=1,Ka(i,s,l,h)}finally{Ne=f,Mr.transition=m}}function Vu(i,s,l,h){var f=Ne,m=Mr.transition;Mr.transition=null;try{Ne=4,Ka(i,s,l,h)}finally{Ne=f,Mr.transition=m}}function Ka(i,s,l,h){if(br){var f=vo(i,s,l,h);if(f===null)Ed(i,s,h,cr,l),Ei(i,h);else if(Mu(f,i,s,l,h))h.stopPropagation();else if(Ei(i,h),s&4&&-1<Lu.indexOf(i)){for(;f!==null;){var m=al(f);if(m!==null&&Ha(m),m=vo(i,s,l,h),m===null&&Ed(i,s,h,cr,l),m===f)break;f=m}f!==null&&h.stopPropagation()}else Ed(i,s,h,null,l)}}var cr=null;function vo(i,s,l,h){if(cr=null,i=co(h),i=Cs(i),i!==null)if(s=jn(i),s===null)i=null;else if(l=s.tag,l===13){if(i=ba(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return cr=i,null}function Eo(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ad()){case po:return 1;case Fa:return 4;case ms:case Ua:return 16;case mo:return 536870912;default:return 16}default:return 16}}var _n=null,wo=null,Vr=null;function Fu(){if(Vr)return Vr;var i,s=wo,l=s.length,h,f="value"in _n?_n.value:_n.textContent,m=f.length;for(i=0;i<l&&s[i]===f[i];i++);var v=l-i;for(h=1;h<=v&&s[l-h]===f[m-h];h++);return Vr=f.slice(i,1<h?1-h:void 0)}function Ts(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function hr(){return!0}function Qa(){return!1}function Ht(i){function s(l,h,f,m,v){this._reactName=l,this._targetInst=f,this.type=h,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var S in i)i.hasOwnProperty(S)&&(l=i[S],this[S]=l?l(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?hr:Qa,this.isPropagationStopped=Qa,this}return ie(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),s}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Is=Ht(dr),Ii=ie({},dr,{view:0,detail:0}),To=Ht(Ii),Io,So,yn,Ss=ie({},Ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ee,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==yn&&(yn&&i.type==="mousemove"?(Io=i.screenX-yn.screenX,So=i.screenY-yn.screenY):So=Io=0,yn=i),Io)},movementY:function(i){return"movementY"in i?i.movementY:So}}),Ya=Ht(Ss),Uu=ie({},Ss,{dataTransfer:0}),ju=Ht(Uu),Co=ie({},Ii,{relatedTarget:0}),bt=Ht(Co),zu=ie({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Bu=Ht(zu),Si=ie({},dr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),c=Ht(Si),g=ie({},dr,{data:0}),y=Ht(g),T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=j[i])?!!s[i]:!1}function Ee(){return X}var ft=ie({},Ii,{key:function(i){if(i.key){var s=T[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Ts(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?b[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ee,charCode:function(i){return i.type==="keypress"?Ts(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ts(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),He=Ht(ft),vt=ie({},Ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vn=Ht(vt),Fr=ie({},Ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ee}),fr=Ht(Fr),pr=ie({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ao=Ht(pr),Xa=ie({},Ss,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),NS=Ht(Xa),DS=[9,13,27,32],cd=d&&"CompositionEvent"in window,Ja=null;d&&"documentMode"in document&&(Ja=document.documentMode);var xS=d&&"TextEvent"in window&&!Ja,lg=d&&(!cd||Ja&&8<Ja&&11>=Ja),ug=" ",cg=!1;function hg(i,s){switch(i){case"keyup":return DS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dg(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ro=!1;function OS(i,s){switch(i){case"compositionend":return dg(s);case"keypress":return s.which!==32?null:(cg=!0,ug);case"textInput":return i=s.data,i===ug&&cg?null:i;default:return null}}function LS(i,s){if(Ro)return i==="compositionend"||!cd&&hg(i,s)?(i=Fu(),Vr=wo=_n=null,Ro=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return lg&&s.locale!=="ko"?null:s.data;default:return null}}var MS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fg(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!MS[i.type]:s==="textarea"}function pg(i,s,l,h){mi(h),s=Gu(s,"onChange"),0<s.length&&(l=new Is("onChange","change",null,l,h),i.push({event:l,listeners:s}))}var Za=null,el=null;function bS(i){xg(i,0)}function Wu(i){var s=xo(i);if(ka(s))return i}function VS(i,s){if(i==="change")return s}var mg=!1;if(d){var hd;if(d){var dd="oninput"in document;if(!dd){var gg=document.createElement("div");gg.setAttribute("oninput","return;"),dd=typeof gg.oninput=="function"}hd=dd}else hd=!1;mg=hd&&(!document.documentMode||9<document.documentMode)}function _g(){Za&&(Za.detachEvent("onpropertychange",yg),el=Za=null)}function yg(i){if(i.propertyName==="value"&&Wu(el)){var s=[];pg(s,el,i,co(i)),Au(bS,s)}}function FS(i,s,l){i==="focusin"?(_g(),Za=s,el=l,Za.attachEvent("onpropertychange",yg)):i==="focusout"&&_g()}function US(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Wu(el)}function jS(i,s){if(i==="click")return Wu(s)}function zS(i,s){if(i==="input"||i==="change")return Wu(s)}function BS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Bn=typeof Object.is=="function"?Object.is:BS;function tl(i,s){if(Bn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var f=l[h];if(!p.call(s,f)||!Bn(i[f],s[f]))return!1}return!0}function vg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Eg(i,s){var l=vg(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=s&&h>=s)return{node:l,offset:s-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=vg(l)}}function wg(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?wg(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Tg(){for(var i=window,s=ui();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=ui(i.document)}return s}function fd(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function WS(i){var s=Tg(),l=i.focusedElem,h=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&wg(l.ownerDocument.documentElement,l)){if(h!==null&&fd(l)){if(s=h.start,i=h.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var f=l.textContent.length,m=Math.min(h.start,f);h=h.end===void 0?m:Math.min(h.end,f),!i.extend&&m>h&&(f=h,h=m,m=f),f=Eg(l,m);var v=Eg(l,h);f&&v&&(i.rangeCount!==1||i.anchorNode!==f.node||i.anchorOffset!==f.offset||i.focusNode!==v.node||i.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),i.removeAllRanges(),m>h?(i.addRange(s),i.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var HS=d&&"documentMode"in document&&11>=document.documentMode,ko=null,pd=null,nl=null,md=!1;function Ig(i,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;md||ko==null||ko!==ui(h)||(h=ko,"selectionStart"in h&&fd(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),nl&&tl(nl,h)||(nl=h,h=Gu(pd,"onSelect"),0<h.length&&(s=new Is("onSelect","select",null,s,l),i.push({event:s,listeners:h}),s.target=ko)))}function Hu(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Po={animationend:Hu("Animation","AnimationEnd"),animationiteration:Hu("Animation","AnimationIteration"),animationstart:Hu("Animation","AnimationStart"),transitionend:Hu("Transition","TransitionEnd")},gd={},Sg={};d&&(Sg=document.createElement("div").style,"AnimationEvent"in window||(delete Po.animationend.animation,delete Po.animationiteration.animation,delete Po.animationstart.animation),"TransitionEvent"in window||delete Po.transitionend.transition);function qu(i){if(gd[i])return gd[i];if(!Po[i])return i;var s=Po[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in Sg)return gd[i]=s[l];return i}var Cg=qu("animationend"),Ag=qu("animationiteration"),Rg=qu("animationstart"),kg=qu("transitionend"),Pg=new Map,Ng="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ci(i,s){Pg.set(i,s),a(s,[i])}for(var _d=0;_d<Ng.length;_d++){var yd=Ng[_d],qS=yd.toLowerCase(),$S=yd[0].toUpperCase()+yd.slice(1);Ci(qS,"on"+$S)}Ci(Cg,"onAnimationEnd"),Ci(Ag,"onAnimationIteration"),Ci(Rg,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(kg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GS=new Set("cancel close invalid load scroll toggle".split(" ").concat(rl));function Dg(i,s,l){var h=i.type||"unknown-event";i.currentTarget=l,Ma(h,s,void 0,i),i.currentTarget=null}function xg(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],f=h.event;h=h.listeners;e:{var m=void 0;if(s)for(var v=h.length-1;0<=v;v--){var S=h[v],k=S.instance,U=S.currentTarget;if(S=S.listener,k!==m&&f.isPropagationStopped())break e;Dg(f,S,U),m=k}else for(v=0;v<h.length;v++){if(S=h[v],k=S.instance,U=S.currentTarget,S=S.listener,k!==m&&f.isPropagationStopped())break e;Dg(f,S,U),m=k}}}if(ho)throw i=Cn,ho=!1,Cn=null,i}function Ze(i,s){var l=s[Ad];l===void 0&&(l=s[Ad]=new Set);var h=i+"__bubble";l.has(h)||(Og(s,i,2,!1),l.add(h))}function vd(i,s,l){var h=0;s&&(h|=4),Og(l,i,h,s)}var $u="_reactListening"+Math.random().toString(36).slice(2);function il(i){if(!i[$u]){i[$u]=!0,r.forEach(function(l){l!=="selectionchange"&&(GS.has(l)||vd(l,!1,i),vd(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[$u]||(s[$u]=!0,vd("selectionchange",!1,s))}}function Og(i,s,l,h){switch(Eo(s)){case 1:var f=ur;break;case 4:f=Vu;break;default:f=Ka}l=f.bind(null,s,l,i),f=void 0,!_i||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?i.addEventListener(s,l,{capture:!0,passive:f}):i.addEventListener(s,l,!0):f!==void 0?i.addEventListener(s,l,{passive:f}):i.addEventListener(s,l,!1)}function Ed(i,s,l,h,f){var m=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var v=h.tag;if(v===3||v===4){var S=h.stateNode.containerInfo;if(S===f||S.nodeType===8&&S.parentNode===f)break;if(v===4)for(v=h.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;v=v.return}for(;S!==null;){if(v=Cs(S),v===null)return;if(k=v.tag,k===5||k===6){h=m=v;continue e}S=S.parentNode}}h=h.return}Au(function(){var U=m,K=co(l),Q=[];e:{var $=Pg.get(i);if($!==void 0){var te=Is,oe=i;switch(i){case"keypress":if(Ts(l)===0)break e;case"keydown":case"keyup":te=He;break;case"focusin":oe="focus",te=bt;break;case"focusout":oe="blur",te=bt;break;case"beforeblur":case"afterblur":te=bt;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=ju;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=fr;break;case Cg:case Ag:case Rg:te=Bu;break;case kg:te=Ao;break;case"scroll":te=To;break;case"wheel":te=NS;break;case"copy":case"cut":case"paste":te=c;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=vn}var ae=(s&4)!==0,pt=!ae&&i==="scroll",M=ae?$!==null?$+"Capture":null:$;ae=[];for(var D=U,F;D!==null;){F=D;var Y=F.stateNode;if(F.tag===5&&Y!==null&&(F=Y,M!==null&&(Y=ds(D,M),Y!=null&&ae.push(sl(D,Y,F)))),pt)break;D=D.return}0<ae.length&&($=new te($,oe,null,l,K),Q.push({event:$,listeners:ae}))}}if((s&7)===0){e:{if($=i==="mouseover"||i==="pointerover",te=i==="mouseout"||i==="pointerout",$&&l!==pi&&(oe=l.relatedTarget||l.fromElement)&&(Cs(oe)||oe[Ur]))break e;if((te||$)&&($=K.window===K?K:($=K.ownerDocument)?$.defaultView||$.parentWindow:window,te?(oe=l.relatedTarget||l.toElement,te=U,oe=oe?Cs(oe):null,oe!==null&&(pt=jn(oe),oe!==pt||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(te=null,oe=U),te!==oe)){if(ae=Ya,Y="onMouseLeave",M="onMouseEnter",D="mouse",(i==="pointerout"||i==="pointerover")&&(ae=vn,Y="onPointerLeave",M="onPointerEnter",D="pointer"),pt=te==null?$:xo(te),F=oe==null?$:xo(oe),$=new ae(Y,D+"leave",te,l,K),$.target=pt,$.relatedTarget=F,Y=null,Cs(K)===U&&(ae=new ae(M,D+"enter",oe,l,K),ae.target=F,ae.relatedTarget=pt,Y=ae),pt=Y,te&&oe)t:{for(ae=te,M=oe,D=0,F=ae;F;F=No(F))D++;for(F=0,Y=M;Y;Y=No(Y))F++;for(;0<D-F;)ae=No(ae),D--;for(;0<F-D;)M=No(M),F--;for(;D--;){if(ae===M||M!==null&&ae===M.alternate)break t;ae=No(ae),M=No(M)}ae=null}else ae=null;te!==null&&Lg(Q,$,te,ae,!1),oe!==null&&pt!==null&&Lg(Q,pt,oe,ae,!0)}}e:{if($=U?xo(U):window,te=$.nodeName&&$.nodeName.toLowerCase(),te==="select"||te==="input"&&$.type==="file")var le=VS;else if(fg($))if(mg)le=zS;else{le=US;var he=FS}else(te=$.nodeName)&&te.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(le=jS);if(le&&(le=le(i,U))){pg(Q,le,l,K);break e}he&&he(i,$,U),i==="focusout"&&(he=$._wrapperState)&&he.controlled&&$.type==="number"&&yt($,"number",$.value)}switch(he=U?xo(U):window,i){case"focusin":(fg(he)||he.contentEditable==="true")&&(ko=he,pd=U,nl=null);break;case"focusout":nl=pd=ko=null;break;case"mousedown":md=!0;break;case"contextmenu":case"mouseup":case"dragend":md=!1,Ig(Q,l,K);break;case"selectionchange":if(HS)break;case"keydown":case"keyup":Ig(Q,l,K)}var de;if(cd)e:{switch(i){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Ro?hg(i,l)&&(_e="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(_e="onCompositionStart");_e&&(lg&&l.locale!=="ko"&&(Ro||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Ro&&(de=Fu()):(_n=K,wo="value"in _n?_n.value:_n.textContent,Ro=!0)),he=Gu(U,_e),0<he.length&&(_e=new y(_e,i,null,l,K),Q.push({event:_e,listeners:he}),de?_e.data=de:(de=dg(l),de!==null&&(_e.data=de)))),(de=xS?OS(i,l):LS(i,l))&&(U=Gu(U,"onBeforeInput"),0<U.length&&(K=new y("onBeforeInput","beforeinput",null,l,K),Q.push({event:K,listeners:U}),K.data=de))}xg(Q,s)})}function sl(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Gu(i,s){for(var l=s+"Capture",h=[];i!==null;){var f=i,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=ds(i,l),m!=null&&h.unshift(sl(i,m,f)),m=ds(i,s),m!=null&&h.push(sl(i,m,f))),i=i.return}return h}function No(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Lg(i,s,l,h,f){for(var m=s._reactName,v=[];l!==null&&l!==h;){var S=l,k=S.alternate,U=S.stateNode;if(k!==null&&k===h)break;S.tag===5&&U!==null&&(S=U,f?(k=ds(l,m),k!=null&&v.unshift(sl(l,k,S))):f||(k=ds(l,m),k!=null&&v.push(sl(l,k,S)))),l=l.return}v.length!==0&&i.push({event:s,listeners:v})}var KS=/\r\n?/g,QS=/\u0000|\uFFFD/g;function Mg(i){return(typeof i=="string"?i:""+i).replace(KS,`
`).replace(QS,"")}function Ku(i,s,l){if(s=Mg(s),Mg(i)!==s&&l)throw Error(t(425))}function Qu(){}var wd=null,Td=null;function Id(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Sd=typeof setTimeout=="function"?setTimeout:void 0,YS=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,XS=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(i){return bg.resolve(null).then(i).catch(JS)}:Sd;function JS(i){setTimeout(function(){throw i})}function Cd(i,s){var l=s,h=0;do{var f=l.nextSibling;if(i.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(h===0){i.removeChild(f),Ti(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=f}while(l);Ti(s)}function Ai(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Vg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Do=Math.random().toString(36).slice(2),mr="__reactFiber$"+Do,ol="__reactProps$"+Do,Ur="__reactContainer$"+Do,Ad="__reactEvents$"+Do,ZS="__reactListeners$"+Do,e0="__reactHandles$"+Do;function Cs(i){var s=i[mr];if(s)return s;for(var l=i.parentNode;l;){if(s=l[Ur]||l[mr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Vg(i);i!==null;){if(l=i[mr])return l;i=Vg(i)}return s}i=l,l=i.parentNode}return null}function al(i){return i=i[mr]||i[Ur],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function xo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Yu(i){return i[ol]||null}var Rd=[],Oo=-1;function Ri(i){return{current:i}}function et(i){0>Oo||(i.current=Rd[Oo],Rd[Oo]=null,Oo--)}function Ye(i,s){Oo++,Rd[Oo]=i.current,i.current=s}var ki={},qt=Ri(ki),on=Ri(!1),As=ki;function Lo(i,s){var l=i.type.contextTypes;if(!l)return ki;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in l)f[m]=s[m];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=f),f}function an(i){return i=i.childContextTypes,i!=null}function Xu(){et(on),et(qt)}function Fg(i,s,l){if(qt.current!==ki)throw Error(t(168));Ye(qt,s),Ye(on,l)}function Ug(i,s,l){var h=i.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,ze(i)||"Unknown",f));return ie({},l,h)}function Ju(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||ki,As=qt.current,Ye(qt,i),Ye(on,on.current),!0}function jg(i,s,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=Ug(i,s,As),h.__reactInternalMemoizedMergedChildContext=i,et(on),et(qt),Ye(qt,i)):et(on),Ye(on,l)}var jr=null,Zu=!1,kd=!1;function zg(i){jr===null?jr=[i]:jr.push(i)}function t0(i){Zu=!0,zg(i)}function Pi(){if(!kd&&jr!==null){kd=!0;var i=0,s=Ne;try{var l=jr;for(Ne=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}jr=null,Zu=!1}catch(f){throw jr!==null&&(jr=jr.slice(i+1)),Va(po,Pi),f}finally{Ne=s,kd=!1}}return null}var Mo=[],bo=0,ec=null,tc=0,Rn=[],kn=0,Rs=null,zr=1,Br="";function ks(i,s){Mo[bo++]=tc,Mo[bo++]=ec,ec=i,tc=s}function Bg(i,s,l){Rn[kn++]=zr,Rn[kn++]=Br,Rn[kn++]=Rs,Rs=i;var h=zr;i=Br;var f=32-mn(h)-1;h&=~(1<<f),l+=1;var m=32-mn(s)+f;if(30<m){var v=f-f%5;m=(h&(1<<v)-1).toString(32),h>>=v,f-=v,zr=1<<32-mn(s)+f|l<<f|h,Br=m+i}else zr=1<<m|l<<f|h,Br=i}function Pd(i){i.return!==null&&(ks(i,1),Bg(i,1,0))}function Nd(i){for(;i===ec;)ec=Mo[--bo],Mo[bo]=null,tc=Mo[--bo],Mo[bo]=null;for(;i===Rs;)Rs=Rn[--kn],Rn[kn]=null,Br=Rn[--kn],Rn[kn]=null,zr=Rn[--kn],Rn[kn]=null}var En=null,wn=null,ot=!1,Wn=null;function Wg(i,s){var l=xn(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function Hg(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,En=i,wn=Ai(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,En=i,wn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=Rs!==null?{id:zr,overflow:Br}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=xn(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,En=i,wn=null,!0):!1;default:return!1}}function Dd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function xd(i){if(ot){var s=wn;if(s){var l=s;if(!Hg(i,s)){if(Dd(i))throw Error(t(418));s=Ai(l.nextSibling);var h=En;s&&Hg(i,s)?Wg(h,l):(i.flags=i.flags&-4097|2,ot=!1,En=i)}}else{if(Dd(i))throw Error(t(418));i.flags=i.flags&-4097|2,ot=!1,En=i}}}function qg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;En=i}function nc(i){if(i!==En)return!1;if(!ot)return qg(i),ot=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Id(i.type,i.memoizedProps)),s&&(s=wn)){if(Dd(i))throw $g(),Error(t(418));for(;s;)Wg(i,s),s=Ai(s.nextSibling)}if(qg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){wn=Ai(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}wn=null}}else wn=En?Ai(i.stateNode.nextSibling):null;return!0}function $g(){for(var i=wn;i;)i=Ai(i.nextSibling)}function Vo(){wn=En=null,ot=!1}function Od(i){Wn===null?Wn=[i]:Wn.push(i)}var n0=xe.ReactCurrentBatchConfig;function ll(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var f=h,m=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(v){var S=f.refs;v===null?delete S[m]:S[m]=v},s._stringRef=m,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function rc(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Gg(i){var s=i._init;return s(i._payload)}function Kg(i){function s(M,D){if(i){var F=M.deletions;F===null?(M.deletions=[D],M.flags|=16):F.push(D)}}function l(M,D){if(!i)return null;for(;D!==null;)s(M,D),D=D.sibling;return null}function h(M,D){for(M=new Map;D!==null;)D.key!==null?M.set(D.key,D):M.set(D.index,D),D=D.sibling;return M}function f(M,D){return M=Vi(M,D),M.index=0,M.sibling=null,M}function m(M,D,F){return M.index=F,i?(F=M.alternate,F!==null?(F=F.index,F<D?(M.flags|=2,D):F):(M.flags|=2,D)):(M.flags|=1048576,D)}function v(M){return i&&M.alternate===null&&(M.flags|=2),M}function S(M,D,F,Y){return D===null||D.tag!==6?(D=Cf(F,M.mode,Y),D.return=M,D):(D=f(D,F),D.return=M,D)}function k(M,D,F,Y){var le=F.type;return le===N?K(M,D,F.props.children,Y,F.key):D!==null&&(D.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Wt&&Gg(le)===D.type)?(Y=f(D,F.props),Y.ref=ll(M,D,F),Y.return=M,Y):(Y=Rc(F.type,F.key,F.props,null,M.mode,Y),Y.ref=ll(M,D,F),Y.return=M,Y)}function U(M,D,F,Y){return D===null||D.tag!==4||D.stateNode.containerInfo!==F.containerInfo||D.stateNode.implementation!==F.implementation?(D=Af(F,M.mode,Y),D.return=M,D):(D=f(D,F.children||[]),D.return=M,D)}function K(M,D,F,Y,le){return D===null||D.tag!==7?(D=bs(F,M.mode,Y,le),D.return=M,D):(D=f(D,F),D.return=M,D)}function Q(M,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Cf(""+D,M.mode,F),D.return=M,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ke:return F=Rc(D.type,D.key,D.props,null,M.mode,F),F.ref=ll(M,null,D),F.return=M,F;case Oe:return D=Af(D,M.mode,F),D.return=M,D;case Wt:var Y=D._init;return Q(M,Y(D._payload),F)}if(dt(D)||ce(D))return D=bs(D,M.mode,F,null),D.return=M,D;rc(M,D)}return null}function $(M,D,F,Y){var le=D!==null?D.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return le!==null?null:S(M,D,""+F,Y);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Ke:return F.key===le?k(M,D,F,Y):null;case Oe:return F.key===le?U(M,D,F,Y):null;case Wt:return le=F._init,$(M,D,le(F._payload),Y)}if(dt(F)||ce(F))return le!==null?null:K(M,D,F,Y,null);rc(M,F)}return null}function te(M,D,F,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(F)||null,S(D,M,""+Y,le);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Ke:return M=M.get(Y.key===null?F:Y.key)||null,k(D,M,Y,le);case Oe:return M=M.get(Y.key===null?F:Y.key)||null,U(D,M,Y,le);case Wt:var he=Y._init;return te(M,D,F,he(Y._payload),le)}if(dt(Y)||ce(Y))return M=M.get(F)||null,K(D,M,Y,le,null);rc(D,Y)}return null}function oe(M,D,F,Y){for(var le=null,he=null,de=D,_e=D=0,Dt=null;de!==null&&_e<F.length;_e++){de.index>_e?(Dt=de,de=null):Dt=de.sibling;var Ue=$(M,de,F[_e],Y);if(Ue===null){de===null&&(de=Dt);break}i&&de&&Ue.alternate===null&&s(M,de),D=m(Ue,D,_e),he===null?le=Ue:he.sibling=Ue,he=Ue,de=Dt}if(_e===F.length)return l(M,de),ot&&ks(M,_e),le;if(de===null){for(;_e<F.length;_e++)de=Q(M,F[_e],Y),de!==null&&(D=m(de,D,_e),he===null?le=de:he.sibling=de,he=de);return ot&&ks(M,_e),le}for(de=h(M,de);_e<F.length;_e++)Dt=te(de,M,_e,F[_e],Y),Dt!==null&&(i&&Dt.alternate!==null&&de.delete(Dt.key===null?_e:Dt.key),D=m(Dt,D,_e),he===null?le=Dt:he.sibling=Dt,he=Dt);return i&&de.forEach(function(Fi){return s(M,Fi)}),ot&&ks(M,_e),le}function ae(M,D,F,Y){var le=ce(F);if(typeof le!="function")throw Error(t(150));if(F=le.call(F),F==null)throw Error(t(151));for(var he=le=null,de=D,_e=D=0,Dt=null,Ue=F.next();de!==null&&!Ue.done;_e++,Ue=F.next()){de.index>_e?(Dt=de,de=null):Dt=de.sibling;var Fi=$(M,de,Ue.value,Y);if(Fi===null){de===null&&(de=Dt);break}i&&de&&Fi.alternate===null&&s(M,de),D=m(Fi,D,_e),he===null?le=Fi:he.sibling=Fi,he=Fi,de=Dt}if(Ue.done)return l(M,de),ot&&ks(M,_e),le;if(de===null){for(;!Ue.done;_e++,Ue=F.next())Ue=Q(M,Ue.value,Y),Ue!==null&&(D=m(Ue,D,_e),he===null?le=Ue:he.sibling=Ue,he=Ue);return ot&&ks(M,_e),le}for(de=h(M,de);!Ue.done;_e++,Ue=F.next())Ue=te(de,M,_e,Ue.value,Y),Ue!==null&&(i&&Ue.alternate!==null&&de.delete(Ue.key===null?_e:Ue.key),D=m(Ue,D,_e),he===null?le=Ue:he.sibling=Ue,he=Ue);return i&&de.forEach(function(M0){return s(M,M0)}),ot&&ks(M,_e),le}function pt(M,D,F,Y){if(typeof F=="object"&&F!==null&&F.type===N&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Ke:e:{for(var le=F.key,he=D;he!==null;){if(he.key===le){if(le=F.type,le===N){if(he.tag===7){l(M,he.sibling),D=f(he,F.props.children),D.return=M,M=D;break e}}else if(he.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Wt&&Gg(le)===he.type){l(M,he.sibling),D=f(he,F.props),D.ref=ll(M,he,F),D.return=M,M=D;break e}l(M,he);break}else s(M,he);he=he.sibling}F.type===N?(D=bs(F.props.children,M.mode,Y,F.key),D.return=M,M=D):(Y=Rc(F.type,F.key,F.props,null,M.mode,Y),Y.ref=ll(M,D,F),Y.return=M,M=Y)}return v(M);case Oe:e:{for(he=F.key;D!==null;){if(D.key===he)if(D.tag===4&&D.stateNode.containerInfo===F.containerInfo&&D.stateNode.implementation===F.implementation){l(M,D.sibling),D=f(D,F.children||[]),D.return=M,M=D;break e}else{l(M,D);break}else s(M,D);D=D.sibling}D=Af(F,M.mode,Y),D.return=M,M=D}return v(M);case Wt:return he=F._init,pt(M,D,he(F._payload),Y)}if(dt(F))return oe(M,D,F,Y);if(ce(F))return ae(M,D,F,Y);rc(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,D!==null&&D.tag===6?(l(M,D.sibling),D=f(D,F),D.return=M,M=D):(l(M,D),D=Cf(F,M.mode,Y),D.return=M,M=D),v(M)):l(M,D)}return pt}var Fo=Kg(!0),Qg=Kg(!1),ic=Ri(null),sc=null,Uo=null,Ld=null;function Md(){Ld=Uo=sc=null}function bd(i){var s=ic.current;et(ic),i._currentValue=s}function Vd(i,s,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),i===l)break;i=i.return}}function jo(i,s){sc=i,Ld=Uo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(ln=!0),i.firstContext=null)}function Pn(i){var s=i._currentValue;if(Ld!==i)if(i={context:i,memoizedValue:s,next:null},Uo===null){if(sc===null)throw Error(t(308));Uo=i,sc.dependencies={lanes:0,firstContext:i}}else Uo=Uo.next=i;return s}var Ps=null;function Fd(i){Ps===null?Ps=[i]:Ps.push(i)}function Yg(i,s,l,h){var f=s.interleaved;return f===null?(l.next=l,Fd(s)):(l.next=f.next,f.next=l),s.interleaved=l,Wr(i,h)}function Wr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Ni=!1;function Ud(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xg(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Hr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Di(i,s,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Fe&2)!==0){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Wr(i,l)}return f=h.interleaved,f===null?(s.next=s,Fd(h)):(s.next=f.next,f.next=s),h.interleaved=s,Wr(i,l)}function oc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,Wa(i,l)}}function Jg(i,s){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var f=null,m=null;if(l=l.firstBaseUpdate,l!==null){do{var v={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};m===null?f=m=v:m=m.next=v,l=l.next}while(l!==null);m===null?f=m=s:m=m.next=s}else f=m=s;l={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function ac(i,s,l,h){var f=i.updateQueue;Ni=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var k=S,U=k.next;k.next=null,v===null?m=U:v.next=U,v=k;var K=i.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==v&&(S===null?K.firstBaseUpdate=U:S.next=U,K.lastBaseUpdate=k))}if(m!==null){var Q=f.baseState;v=0,K=U=k=null,S=m;do{var $=S.lane,te=S.eventTime;if((h&$)===$){K!==null&&(K=K.next={eventTime:te,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var oe=i,ae=S;switch($=s,te=l,ae.tag){case 1:if(oe=ae.payload,typeof oe=="function"){Q=oe.call(te,Q,$);break e}Q=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ae.payload,$=typeof oe=="function"?oe.call(te,Q,$):oe,$==null)break e;Q=ie({},Q,$);break e;case 2:Ni=!0}}S.callback!==null&&S.lane!==0&&(i.flags|=64,$=f.effects,$===null?f.effects=[S]:$.push(S))}else te={eventTime:te,lane:$,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(U=K=te,k=Q):K=K.next=te,v|=$;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;$=S,S=$.next,$.next=null,f.lastBaseUpdate=$,f.shared.pending=null}}while(!0);if(K===null&&(k=Q),f.baseState=k,f.firstBaseUpdate=U,f.lastBaseUpdate=K,s=f.shared.interleaved,s!==null){f=s;do v|=f.lane,f=f.next;while(f!==s)}else m===null&&(f.shared.lanes=0);xs|=v,i.lanes=v,i.memoizedState=Q}}function Zg(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var h=i[s],f=h.callback;if(f!==null){if(h.callback=null,h=l,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var ul={},gr=Ri(ul),cl=Ri(ul),hl=Ri(ul);function Ns(i){if(i===ul)throw Error(t(174));return i}function jd(i,s){switch(Ye(hl,s),Ye(cl,i),Ye(gr,ul),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ao(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=ao(s,i)}et(gr),Ye(gr,s)}function zo(){et(gr),et(cl),et(hl)}function e_(i){Ns(hl.current);var s=Ns(gr.current),l=ao(s,i.type);s!==l&&(Ye(cl,i),Ye(gr,l))}function zd(i){cl.current===i&&(et(gr),et(cl))}var at=Ri(0);function lc(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Bd=[];function Wd(){for(var i=0;i<Bd.length;i++)Bd[i]._workInProgressVersionPrimary=null;Bd.length=0}var uc=xe.ReactCurrentDispatcher,Hd=xe.ReactCurrentBatchConfig,Ds=0,lt=null,St=null,Pt=null,cc=!1,dl=!1,fl=0,r0=0;function $t(){throw Error(t(321))}function qd(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Bn(i[l],s[l]))return!1;return!0}function $d(i,s,l,h,f,m){if(Ds=m,lt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,uc.current=i===null||i.memoizedState===null?a0:l0,i=l(h,f),dl){m=0;do{if(dl=!1,fl=0,25<=m)throw Error(t(301));m+=1,Pt=St=null,s.updateQueue=null,uc.current=u0,i=l(h,f)}while(dl)}if(uc.current=fc,s=St!==null&&St.next!==null,Ds=0,Pt=St=lt=null,cc=!1,s)throw Error(t(300));return i}function Gd(){var i=fl!==0;return fl=0,i}function _r(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?lt.memoizedState=Pt=i:Pt=Pt.next=i,Pt}function Nn(){if(St===null){var i=lt.alternate;i=i!==null?i.memoizedState:null}else i=St.next;var s=Pt===null?lt.memoizedState:Pt.next;if(s!==null)Pt=s,St=i;else{if(i===null)throw Error(t(310));St=i,i={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Pt===null?lt.memoizedState=Pt=i:Pt=Pt.next=i}return Pt}function pl(i,s){return typeof s=="function"?s(i):s}function Kd(i){var s=Nn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=St,f=h.baseQueue,m=l.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}h.baseQueue=f=m,l.pending=null}if(f!==null){m=f.next,h=h.baseState;var S=v=null,k=null,U=m;do{var K=U.lane;if((Ds&K)===K)k!==null&&(k=k.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),h=U.hasEagerState?U.eagerState:i(h,U.action);else{var Q={lane:K,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};k===null?(S=k=Q,v=h):k=k.next=Q,lt.lanes|=K,xs|=K}U=U.next}while(U!==null&&U!==m);k===null?v=h:k.next=S,Bn(h,s.memoizedState)||(ln=!0),s.memoizedState=h,s.baseState=v,s.baseQueue=k,l.lastRenderedState=h}if(i=l.interleaved,i!==null){f=i;do m=f.lane,lt.lanes|=m,xs|=m,f=f.next;while(f!==i)}else f===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Qd(i){var s=Nn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,f=l.pending,m=s.memoizedState;if(f!==null){l.pending=null;var v=f=f.next;do m=i(m,v.action),v=v.next;while(v!==f);Bn(m,s.memoizedState)||(ln=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),l.lastRenderedState=m}return[m,h]}function t_(){}function n_(i,s){var l=lt,h=Nn(),f=s(),m=!Bn(h.memoizedState,f);if(m&&(h.memoizedState=f,ln=!0),h=h.queue,Yd(s_.bind(null,l,h,i),[i]),h.getSnapshot!==s||m||Pt!==null&&Pt.memoizedState.tag&1){if(l.flags|=2048,ml(9,i_.bind(null,l,h,f,s),void 0,null),Nt===null)throw Error(t(349));(Ds&30)!==0||r_(l,s,f)}return f}function r_(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=lt.updateQueue,s===null?(s={lastEffect:null,stores:null},lt.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function i_(i,s,l,h){s.value=l,s.getSnapshot=h,o_(s)&&a_(i)}function s_(i,s,l){return l(function(){o_(s)&&a_(i)})}function o_(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Bn(i,l)}catch{return!0}}function a_(i){var s=Wr(i,1);s!==null&&Gn(s,i,1,-1)}function l_(i){var s=_r();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:i},s.queue=i,i=i.dispatch=o0.bind(null,lt,i),[s.memoizedState,i]}function ml(i,s,l,h){return i={tag:i,create:s,destroy:l,deps:h,next:null},s=lt.updateQueue,s===null?(s={lastEffect:null,stores:null},lt.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,s.lastEffect=i)),i}function u_(){return Nn().memoizedState}function hc(i,s,l,h){var f=_r();lt.flags|=i,f.memoizedState=ml(1|s,l,void 0,h===void 0?null:h)}function dc(i,s,l,h){var f=Nn();h=h===void 0?null:h;var m=void 0;if(St!==null){var v=St.memoizedState;if(m=v.destroy,h!==null&&qd(h,v.deps)){f.memoizedState=ml(s,l,m,h);return}}lt.flags|=i,f.memoizedState=ml(1|s,l,m,h)}function c_(i,s){return hc(8390656,8,i,s)}function Yd(i,s){return dc(2048,8,i,s)}function h_(i,s){return dc(4,2,i,s)}function d_(i,s){return dc(4,4,i,s)}function f_(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function p_(i,s,l){return l=l!=null?l.concat([i]):null,dc(4,4,f_.bind(null,s,i),l)}function Xd(){}function m_(i,s){var l=Nn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&qd(s,h[1])?h[0]:(l.memoizedState=[i,s],i)}function g_(i,s){var l=Nn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&qd(s,h[1])?h[0]:(i=i(),l.memoizedState=[i,s],i)}function __(i,s,l){return(Ds&21)===0?(i.baseState&&(i.baseState=!1,ln=!0),i.memoizedState=l):(Bn(l,s)||(l=za(),lt.lanes|=l,xs|=l,i.baseState=!0),s)}function i0(i,s){var l=Ne;Ne=l!==0&&4>l?l:4,i(!0);var h=Hd.transition;Hd.transition={};try{i(!1),s()}finally{Ne=l,Hd.transition=h}}function y_(){return Nn().memoizedState}function s0(i,s,l){var h=Mi(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},v_(i))E_(s,l);else if(l=Yg(i,s,l,h),l!==null){var f=sn();Gn(l,i,h,f),w_(l,s,h)}}function o0(i,s,l){var h=Mi(i),f={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(v_(i))E_(s,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,S=m(v,l);if(f.hasEagerState=!0,f.eagerState=S,Bn(S,v)){var k=s.interleaved;k===null?(f.next=f,Fd(s)):(f.next=k.next,k.next=f),s.interleaved=f;return}}catch{}finally{}l=Yg(i,s,f,h),l!==null&&(f=sn(),Gn(l,i,h,f),w_(l,s,h))}}function v_(i){var s=i.alternate;return i===lt||s!==null&&s===lt}function E_(i,s){dl=cc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function w_(i,s,l){if((l&4194240)!==0){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,Wa(i,l)}}var fc={readContext:Pn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},a0={readContext:Pn,useCallback:function(i,s){return _r().memoizedState=[i,s===void 0?null:s],i},useContext:Pn,useEffect:c_,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,hc(4194308,4,f_.bind(null,s,i),l)},useLayoutEffect:function(i,s){return hc(4194308,4,i,s)},useInsertionEffect:function(i,s){return hc(4,2,i,s)},useMemo:function(i,s){var l=_r();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var h=_r();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},h.queue=i,i=i.dispatch=s0.bind(null,lt,i),[h.memoizedState,i]},useRef:function(i){var s=_r();return i={current:i},s.memoizedState=i},useState:l_,useDebugValue:Xd,useDeferredValue:function(i){return _r().memoizedState=i},useTransition:function(){var i=l_(!1),s=i[0];return i=i0.bind(null,i[1]),_r().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var h=lt,f=_r();if(ot){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),Nt===null)throw Error(t(349));(Ds&30)!==0||r_(h,s,l)}f.memoizedState=l;var m={value:l,getSnapshot:s};return f.queue=m,c_(s_.bind(null,h,m,i),[i]),h.flags|=2048,ml(9,i_.bind(null,h,m,l,s),void 0,null),l},useId:function(){var i=_r(),s=Nt.identifierPrefix;if(ot){var l=Br,h=zr;l=(h&~(1<<32-mn(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=fl++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=r0++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},l0={readContext:Pn,useCallback:m_,useContext:Pn,useEffect:Yd,useImperativeHandle:p_,useInsertionEffect:h_,useLayoutEffect:d_,useMemo:g_,useReducer:Kd,useRef:u_,useState:function(){return Kd(pl)},useDebugValue:Xd,useDeferredValue:function(i){var s=Nn();return __(s,St.memoizedState,i)},useTransition:function(){var i=Kd(pl)[0],s=Nn().memoizedState;return[i,s]},useMutableSource:t_,useSyncExternalStore:n_,useId:y_,unstable_isNewReconciler:!1},u0={readContext:Pn,useCallback:m_,useContext:Pn,useEffect:Yd,useImperativeHandle:p_,useInsertionEffect:h_,useLayoutEffect:d_,useMemo:g_,useReducer:Qd,useRef:u_,useState:function(){return Qd(pl)},useDebugValue:Xd,useDeferredValue:function(i){var s=Nn();return St===null?s.memoizedState=i:__(s,St.memoizedState,i)},useTransition:function(){var i=Qd(pl)[0],s=Nn().memoizedState;return[i,s]},useMutableSource:t_,useSyncExternalStore:n_,useId:y_,unstable_isNewReconciler:!1};function Hn(i,s){if(i&&i.defaultProps){s=ie({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Jd(i,s,l,h){s=i.memoizedState,l=l(h,s),l=l==null?s:ie({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var pc={isMounted:function(i){return(i=i._reactInternals)?jn(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var h=sn(),f=Mi(i),m=Hr(h,f);m.payload=s,l!=null&&(m.callback=l),s=Di(i,m,f),s!==null&&(Gn(s,i,f,h),oc(s,i,f))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var h=sn(),f=Mi(i),m=Hr(h,f);m.tag=1,m.payload=s,l!=null&&(m.callback=l),s=Di(i,m,f),s!==null&&(Gn(s,i,f,h),oc(s,i,f))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=sn(),h=Mi(i),f=Hr(l,h);f.tag=2,s!=null&&(f.callback=s),s=Di(i,f,h),s!==null&&(Gn(s,i,h,l),oc(s,i,h))}};function T_(i,s,l,h,f,m,v){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,m,v):s.prototype&&s.prototype.isPureReactComponent?!tl(l,h)||!tl(f,m):!0}function I_(i,s,l){var h=!1,f=ki,m=s.contextType;return typeof m=="object"&&m!==null?m=Pn(m):(f=an(s)?As:qt.current,h=s.contextTypes,m=(h=h!=null)?Lo(i,f):ki),s=new s(l,m),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=pc,i.stateNode=s,s._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=f,i.__reactInternalMemoizedMaskedChildContext=m),s}function S_(i,s,l,h){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==i&&pc.enqueueReplaceState(s,s.state,null)}function Zd(i,s,l,h){var f=i.stateNode;f.props=l,f.state=i.memoizedState,f.refs={},Ud(i);var m=s.contextType;typeof m=="object"&&m!==null?f.context=Pn(m):(m=an(s)?As:qt.current,f.context=Lo(i,m)),f.state=i.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(Jd(i,s,m,l),f.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&pc.enqueueReplaceState(f,f.state,null),ac(i,l,f,h),f.state=i.memoizedState),typeof f.componentDidMount=="function"&&(i.flags|=4194308)}function Bo(i,s){try{var l="",h=s;do l+=Ae(h),h=h.return;while(h);var f=l}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:i,source:s,stack:f,digest:null}}function ef(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function tf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var c0=typeof WeakMap=="function"?WeakMap:Map;function C_(i,s,l){l=Hr(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){wc||(wc=!0,_f=h),tf(i,s)},l}function A_(i,s,l){l=Hr(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;l.payload=function(){return h(f)},l.callback=function(){tf(i,s)}}var m=i.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(l.callback=function(){tf(i,s),typeof h!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),l}function R_(i,s,l){var h=i.pingCache;if(h===null){h=i.pingCache=new c0;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(l)||(f.add(l),i=S0.bind(null,i,s,l),s.then(i,i))}function k_(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function P_(i,s,l,h,f){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Hr(-1,1),s.tag=2,Di(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=f,i)}var h0=xe.ReactCurrentOwner,ln=!1;function rn(i,s,l,h){s.child=i===null?Qg(s,null,l,h):Fo(s,i.child,l,h)}function N_(i,s,l,h,f){l=l.render;var m=s.ref;return jo(s,f),h=$d(i,s,l,h,m,f),l=Gd(),i!==null&&!ln?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~f,qr(i,s,f)):(ot&&l&&Pd(s),s.flags|=1,rn(i,s,h,f),s.child)}function D_(i,s,l,h,f){if(i===null){var m=l.type;return typeof m=="function"&&!Sf(m)&&m.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=m,x_(i,s,m,h,f)):(i=Rc(l.type,null,h,s,s.mode,f),i.ref=s.ref,i.return=s,s.child=i)}if(m=i.child,(i.lanes&f)===0){var v=m.memoizedProps;if(l=l.compare,l=l!==null?l:tl,l(v,h)&&i.ref===s.ref)return qr(i,s,f)}return s.flags|=1,i=Vi(m,h),i.ref=s.ref,i.return=s,s.child=i}function x_(i,s,l,h,f){if(i!==null){var m=i.memoizedProps;if(tl(m,h)&&i.ref===s.ref)if(ln=!1,s.pendingProps=h=m,(i.lanes&f)!==0)(i.flags&131072)!==0&&(ln=!0);else return s.lanes=i.lanes,qr(i,s,f)}return nf(i,s,l,h,f)}function O_(i,s,l){var h=s.pendingProps,f=h.children,m=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ye(Ho,Tn),Tn|=l;else{if((l&1073741824)===0)return i=m!==null?m.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Ye(Ho,Tn),Tn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=m!==null?m.baseLanes:l,Ye(Ho,Tn),Tn|=h}else m!==null?(h=m.baseLanes|l,s.memoizedState=null):h=l,Ye(Ho,Tn),Tn|=h;return rn(i,s,f,l),s.child}function L_(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function nf(i,s,l,h,f){var m=an(l)?As:qt.current;return m=Lo(s,m),jo(s,f),l=$d(i,s,l,h,m,f),h=Gd(),i!==null&&!ln?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~f,qr(i,s,f)):(ot&&h&&Pd(s),s.flags|=1,rn(i,s,l,f),s.child)}function M_(i,s,l,h,f){if(an(l)){var m=!0;Ju(s)}else m=!1;if(jo(s,f),s.stateNode===null)gc(i,s),I_(s,l,h),Zd(s,l,h,f),h=!0;else if(i===null){var v=s.stateNode,S=s.memoizedProps;v.props=S;var k=v.context,U=l.contextType;typeof U=="object"&&U!==null?U=Pn(U):(U=an(l)?As:qt.current,U=Lo(s,U));var K=l.getDerivedStateFromProps,Q=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==h||k!==U)&&S_(s,v,h,U),Ni=!1;var $=s.memoizedState;v.state=$,ac(s,h,v,f),k=s.memoizedState,S!==h||$!==k||on.current||Ni?(typeof K=="function"&&(Jd(s,l,K,h),k=s.memoizedState),(S=Ni||T_(s,l,S,h,$,k,U))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=k),v.props=h,v.state=k,v.context=U,h=S):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{v=s.stateNode,Xg(i,s),S=s.memoizedProps,U=s.type===s.elementType?S:Hn(s.type,S),v.props=U,Q=s.pendingProps,$=v.context,k=l.contextType,typeof k=="object"&&k!==null?k=Pn(k):(k=an(l)?As:qt.current,k=Lo(s,k));var te=l.getDerivedStateFromProps;(K=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==Q||$!==k)&&S_(s,v,h,k),Ni=!1,$=s.memoizedState,v.state=$,ac(s,h,v,f);var oe=s.memoizedState;S!==Q||$!==oe||on.current||Ni?(typeof te=="function"&&(Jd(s,l,te,h),oe=s.memoizedState),(U=Ni||T_(s,l,U,h,$,oe,k)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(h,oe,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(h,oe,k)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===i.memoizedProps&&$===i.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===i.memoizedProps&&$===i.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=oe),v.props=h,v.state=oe,v.context=k,h=U):(typeof v.componentDidUpdate!="function"||S===i.memoizedProps&&$===i.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===i.memoizedProps&&$===i.memoizedState||(s.flags|=1024),h=!1)}return rf(i,s,l,h,m,f)}function rf(i,s,l,h,f,m){L_(i,s);var v=(s.flags&128)!==0;if(!h&&!v)return f&&jg(s,l,!1),qr(i,s,m);h=s.stateNode,h0.current=s;var S=v&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,i!==null&&v?(s.child=Fo(s,i.child,null,m),s.child=Fo(s,null,S,m)):rn(i,s,S,m),s.memoizedState=h.state,f&&jg(s,l,!0),s.child}function b_(i){var s=i.stateNode;s.pendingContext?Fg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Fg(i,s.context,!1),jd(i,s.containerInfo)}function V_(i,s,l,h,f){return Vo(),Od(f),s.flags|=256,rn(i,s,l,h),s.child}var sf={dehydrated:null,treeContext:null,retryLane:0};function of(i){return{baseLanes:i,cachePool:null,transitions:null}}function F_(i,s,l){var h=s.pendingProps,f=at.current,m=!1,v=(s.flags&128)!==0,S;if((S=v)||(S=i!==null&&i.memoizedState===null?!1:(f&2)!==0),S?(m=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(f|=1),Ye(at,f&1),i===null)return xd(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=h.children,i=h.fallback,m?(h=s.mode,m=s.child,v={mode:"hidden",children:v},(h&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=kc(v,h,0,null),i=bs(i,h,l,null),m.return=s,i.return=s,m.sibling=i,s.child=m,s.child.memoizedState=of(l),s.memoizedState=sf,i):af(s,v));if(f=i.memoizedState,f!==null&&(S=f.dehydrated,S!==null))return d0(i,s,v,h,S,f,l);if(m){m=h.fallback,v=s.mode,f=i.child,S=f.sibling;var k={mode:"hidden",children:h.children};return(v&1)===0&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=k,s.deletions=null):(h=Vi(f,k),h.subtreeFlags=f.subtreeFlags&14680064),S!==null?m=Vi(S,m):(m=bs(m,v,l,null),m.flags|=2),m.return=s,h.return=s,h.sibling=m,s.child=h,h=m,m=s.child,v=i.child.memoizedState,v=v===null?of(l):{baseLanes:v.baseLanes|l,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=i.childLanes&~l,s.memoizedState=sf,h}return m=i.child,i=m.sibling,h=Vi(m,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=l),h.return=s,h.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=h,s.memoizedState=null,h}function af(i,s){return s=kc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function mc(i,s,l,h){return h!==null&&Od(h),Fo(s,i.child,null,l),i=af(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function d0(i,s,l,h,f,m,v){if(l)return s.flags&256?(s.flags&=-257,h=ef(Error(t(422))),mc(i,s,v,h)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(m=h.fallback,f=s.mode,h=kc({mode:"visible",children:h.children},f,0,null),m=bs(m,f,v,null),m.flags|=2,h.return=s,m.return=s,h.sibling=m,s.child=h,(s.mode&1)!==0&&Fo(s,i.child,null,v),s.child.memoizedState=of(v),s.memoizedState=sf,m);if((s.mode&1)===0)return mc(i,s,v,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var S=h.dgst;return h=S,m=Error(t(419)),h=ef(m,h,void 0),mc(i,s,v,h)}if(S=(v&i.childLanes)!==0,ln||S){if(h=Nt,h!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(h.suspendedLanes|v))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Wr(i,f),Gn(h,i,f,-1))}return If(),h=ef(Error(t(421))),mc(i,s,v,h)}return f.data==="$?"?(s.flags|=128,s.child=i.child,s=C0.bind(null,i),f._reactRetry=s,null):(i=m.treeContext,wn=Ai(f.nextSibling),En=s,ot=!0,Wn=null,i!==null&&(Rn[kn++]=zr,Rn[kn++]=Br,Rn[kn++]=Rs,zr=i.id,Br=i.overflow,Rs=s),s=af(s,h.children),s.flags|=4096,s)}function U_(i,s,l){i.lanes|=s;var h=i.alternate;h!==null&&(h.lanes|=s),Vd(i.return,s,l)}function lf(i,s,l,h,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:f}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=h,m.tail=l,m.tailMode=f)}function j_(i,s,l){var h=s.pendingProps,f=h.revealOrder,m=h.tail;if(rn(i,s,h.children,l),h=at.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&U_(i,l,s);else if(i.tag===19)U_(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(Ye(at,h),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(l=s.child,f=null;l!==null;)i=l.alternate,i!==null&&lc(i)===null&&(f=l),l=l.sibling;l=f,l===null?(f=s.child,s.child=null):(f=l.sibling,l.sibling=null),lf(s,!1,f,l,m);break;case"backwards":for(l=null,f=s.child,s.child=null;f!==null;){if(i=f.alternate,i!==null&&lc(i)===null){s.child=f;break}i=f.sibling,f.sibling=l,l=f,f=i}lf(s,!0,l,null,m);break;case"together":lf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function gc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function qr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),xs|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Vi(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Vi(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function f0(i,s,l){switch(s.tag){case 3:b_(s),Vo();break;case 5:e_(s);break;case 1:an(s.type)&&Ju(s);break;case 4:jd(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;Ye(ic,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(Ye(at,at.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?F_(i,s,l):(Ye(at,at.current&1),i=qr(i,s,l),i!==null?i.sibling:null);Ye(at,at.current&1);break;case 19:if(h=(l&s.childLanes)!==0,(i.flags&128)!==0){if(h)return j_(i,s,l);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ye(at,at.current),h)break;return null;case 22:case 23:return s.lanes=0,O_(i,s,l)}return qr(i,s,l)}var z_,uf,B_,W_;z_=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},uf=function(){},B_=function(i,s,l,h){var f=i.memoizedProps;if(f!==h){i=s.stateNode,Ns(gr.current);var m=null;switch(l){case"input":f=so(i,f),h=so(i,h),m=[];break;case"select":f=ie({},f,{value:void 0}),h=ie({},h,{value:void 0}),m=[];break;case"textarea":f=Na(i,f),h=Na(i,h),m=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Qu)}Un(l,h);var v;l=null;for(U in f)if(!h.hasOwnProperty(U)&&f.hasOwnProperty(U)&&f[U]!=null)if(U==="style"){var S=f[U];for(v in S)S.hasOwnProperty(v)&&(l||(l={}),l[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?m||(m=[]):(m=m||[]).push(U,null));for(U in h){var k=h[U];if(S=f?.[U],h.hasOwnProperty(U)&&k!==S&&(k!=null||S!=null))if(U==="style")if(S){for(v in S)!S.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(l||(l={}),l[v]="");for(v in k)k.hasOwnProperty(v)&&S[v]!==k[v]&&(l||(l={}),l[v]=k[v])}else l||(m||(m=[]),m.push(U,l)),l=k;else U==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,S=S?S.__html:void 0,k!=null&&S!==k&&(m=m||[]).push(U,k)):U==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(U,""+k):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(k!=null&&U==="onScroll"&&Ze("scroll",i),m||S===k||(m=[])):(m=m||[]).push(U,k))}l&&(m=m||[]).push("style",l);var U=m;(s.updateQueue=U)&&(s.flags|=4)}},W_=function(i,s,l,h){l!==h&&(s.flags|=4)};function gl(i,s){if(!ot)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Gt(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(s)for(var f=i.child;f!==null;)l|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)l|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=h,i.childLanes=l,s}function p0(i,s,l){var h=s.pendingProps;switch(Nd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(s),null;case 1:return an(s.type)&&Xu(),Gt(s),null;case 3:return h=s.stateNode,zo(),et(on),et(qt),Wd(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(nc(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Wn!==null&&(Ef(Wn),Wn=null))),uf(i,s),Gt(s),null;case 5:zd(s);var f=Ns(hl.current);if(l=s.type,i!==null&&s.stateNode!=null)B_(i,s,l,h,f),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Gt(s),null}if(i=Ns(gr.current),nc(s)){h=s.stateNode,l=s.type;var m=s.memoizedProps;switch(h[mr]=s,h[ol]=m,i=(s.mode&1)!==0,l){case"dialog":Ze("cancel",h),Ze("close",h);break;case"iframe":case"object":case"embed":Ze("load",h);break;case"video":case"audio":for(f=0;f<rl.length;f++)Ze(rl[f],h);break;case"source":Ze("error",h);break;case"img":case"image":case"link":Ze("error",h),Ze("load",h);break;case"details":Ze("toggle",h);break;case"input":Eu(h,m),Ze("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!m.multiple},Ze("invalid",h);break;case"textarea":Da(h,m),Ze("invalid",h)}Un(l,m),f=null;for(var v in m)if(m.hasOwnProperty(v)){var S=m[v];v==="children"?typeof S=="string"?h.textContent!==S&&(m.suppressHydrationWarning!==!0&&Ku(h.textContent,S,i),f=["children",S]):typeof S=="number"&&h.textContent!==""+S&&(m.suppressHydrationWarning!==!0&&Ku(h.textContent,S,i),f=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Ze("scroll",h)}switch(l){case"input":io(h),Pa(h,m,!0);break;case"textarea":io(h),ci(h);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(h.onclick=Qu)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=xa(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=v.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=v.createElement(l,{is:h.is}):(i=v.createElement(l),l==="select"&&(v=i,h.multiple?v.multiple=!0:h.size&&(v.size=h.size))):i=v.createElementNS(i,l),i[mr]=s,i[ol]=h,z_(i,s,!1,!1),s.stateNode=i;e:{switch(v=uo(l,h),l){case"dialog":Ze("cancel",i),Ze("close",i),f=h;break;case"iframe":case"object":case"embed":Ze("load",i),f=h;break;case"video":case"audio":for(f=0;f<rl.length;f++)Ze(rl[f],i);f=h;break;case"source":Ze("error",i),f=h;break;case"img":case"image":case"link":Ze("error",i),Ze("load",i),f=h;break;case"details":Ze("toggle",i),f=h;break;case"input":Eu(i,h),f=so(i,h),Ze("invalid",i);break;case"option":f=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},f=ie({},h,{value:void 0}),Ze("invalid",i);break;case"textarea":Da(i,h),f=Na(i,h),Ze("invalid",i);break;default:f=h}Un(l,f),S=f;for(m in S)if(S.hasOwnProperty(m)){var k=S[m];m==="style"?lo(i,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Tu(i,k)):m==="children"?typeof k=="string"?(l!=="textarea"||k!=="")&&hs(i,k):typeof k=="number"&&hs(i,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Ze("scroll",i):k!=null&&ye(i,m,k,v))}switch(l){case"input":io(i),Pa(i,h,!1);break;case"textarea":io(i),ci(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Ve(h.value));break;case"select":i.multiple=!!h.multiple,m=h.value,m!=null?Fn(i,!!h.multiple,m,!1):h.defaultValue!=null&&Fn(i,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(i.onclick=Qu)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Gt(s),null;case 6:if(i&&s.stateNode!=null)W_(i,s,i.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=Ns(hl.current),Ns(gr.current),nc(s)){if(h=s.stateNode,l=s.memoizedProps,h[mr]=s,(m=h.nodeValue!==l)&&(i=En,i!==null))switch(i.tag){case 3:Ku(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Ku(h.nodeValue,l,(i.mode&1)!==0)}m&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[mr]=s,s.stateNode=h}return Gt(s),null;case 13:if(et(at),h=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(ot&&wn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)$g(),Vo(),s.flags|=98560,m=!1;else if(m=nc(s),h!==null&&h.dehydrated!==null){if(i===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[mr]=s}else Vo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Gt(s),m=!1}else Wn!==null&&(Ef(Wn),Wn=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(at.current&1)!==0?Ct===0&&(Ct=3):If())),s.updateQueue!==null&&(s.flags|=4),Gt(s),null);case 4:return zo(),uf(i,s),i===null&&il(s.stateNode.containerInfo),Gt(s),null;case 10:return bd(s.type._context),Gt(s),null;case 17:return an(s.type)&&Xu(),Gt(s),null;case 19:if(et(at),m=s.memoizedState,m===null)return Gt(s),null;if(h=(s.flags&128)!==0,v=m.rendering,v===null)if(h)gl(m,!1);else{if(Ct!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(v=lc(i),v!==null){for(s.flags|=128,gl(m,!1),h=v.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)m=l,i=h,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=i,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,i=v.dependencies,m.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Ye(at,at.current&1|2),s.child}i=i.sibling}m.tail!==null&&Je()>qo&&(s.flags|=128,h=!0,gl(m,!1),s.lanes=4194304)}else{if(!h)if(i=lc(v),i!==null){if(s.flags|=128,h=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),gl(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!ot)return Gt(s),null}else 2*Je()-m.renderingStartTime>qo&&l!==1073741824&&(s.flags|=128,h=!0,gl(m,!1),s.lanes=4194304);m.isBackwards?(v.sibling=s.child,s.child=v):(l=m.last,l!==null?l.sibling=v:s.child=v,m.last=v)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=Je(),s.sibling=null,l=at.current,Ye(at,h?l&1|2:l&1),s):(Gt(s),null);case 22:case 23:return Tf(),h=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(Tn&1073741824)!==0&&(Gt(s),s.subtreeFlags&6&&(s.flags|=8192)):Gt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function m0(i,s){switch(Nd(s),s.tag){case 1:return an(s.type)&&Xu(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return zo(),et(on),et(qt),Wd(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return zd(s),null;case 13:if(et(at),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Vo()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return et(at),null;case 4:return zo(),null;case 10:return bd(s.type._context),null;case 22:case 23:return Tf(),null;case 24:return null;default:return null}}var _c=!1,Kt=!1,g0=typeof WeakSet=="function"?WeakSet:Set,se=null;function Wo(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){ht(i,s,h)}else l.current=null}function cf(i,s,l){try{l()}catch(h){ht(i,s,h)}}var H_=!1;function _0(i,s){if(wd=br,i=Tg(),fd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var f=h.anchorOffset,m=h.focusNode;h=h.focusOffset;try{l.nodeType,m.nodeType}catch{l=null;break e}var v=0,S=-1,k=-1,U=0,K=0,Q=i,$=null;t:for(;;){for(var te;Q!==l||f!==0&&Q.nodeType!==3||(S=v+f),Q!==m||h!==0&&Q.nodeType!==3||(k=v+h),Q.nodeType===3&&(v+=Q.nodeValue.length),(te=Q.firstChild)!==null;)$=Q,Q=te;for(;;){if(Q===i)break t;if($===l&&++U===f&&(S=v),$===m&&++K===h&&(k=v),(te=Q.nextSibling)!==null)break;Q=$,$=Q.parentNode}Q=te}l=S===-1||k===-1?null:{start:S,end:k}}else l=null}l=l||{start:0,end:0}}else l=null;for(Td={focusedElem:i,selectionRange:l},br=!1,se=s;se!==null;)if(s=se,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,se=i;else for(;se!==null;){s=se;try{var oe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var ae=oe.memoizedProps,pt=oe.memoizedState,M=s.stateNode,D=M.getSnapshotBeforeUpdate(s.elementType===s.type?ae:Hn(s.type,ae),pt);M.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){ht(s,s.return,Y)}if(i=s.sibling,i!==null){i.return=s.return,se=i;break}se=s.return}return oe=H_,H_=!1,oe}function _l(i,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&i)===i){var m=f.destroy;f.destroy=void 0,m!==void 0&&cf(s,l,m)}f=f.next}while(f!==h)}}function yc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function hf(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function q_(i){var s=i.alternate;s!==null&&(i.alternate=null,q_(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[mr],delete s[ol],delete s[Ad],delete s[ZS],delete s[e0])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function $_(i){return i.tag===5||i.tag===3||i.tag===4}function G_(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||$_(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function df(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Qu));else if(h!==4&&(i=i.child,i!==null))for(df(i,s,l),i=i.sibling;i!==null;)df(i,s,l),i=i.sibling}function ff(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(ff(i,s,l),i=i.sibling;i!==null;)ff(i,s,l),i=i.sibling}var Vt=null,qn=!1;function xi(i,s,l){for(l=l.child;l!==null;)K_(i,s,l),l=l.sibling}function K_(i,s,l){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(gs,l)}catch{}switch(l.tag){case 5:Kt||Wo(l,s);case 6:var h=Vt,f=qn;Vt=null,xi(i,s,l),Vt=h,qn=f,Vt!==null&&(qn?(i=Vt,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Vt.removeChild(l.stateNode));break;case 18:Vt!==null&&(qn?(i=Vt,l=l.stateNode,i.nodeType===8?Cd(i.parentNode,l):i.nodeType===1&&Cd(i,l),Ti(i)):Cd(Vt,l.stateNode));break;case 4:h=Vt,f=qn,Vt=l.stateNode.containerInfo,qn=!0,xi(i,s,l),Vt=h,qn=f;break;case 0:case 11:case 14:case 15:if(!Kt&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var m=f,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&cf(l,s,v),f=f.next}while(f!==h)}xi(i,s,l);break;case 1:if(!Kt&&(Wo(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(S){ht(l,s,S)}xi(i,s,l);break;case 21:xi(i,s,l);break;case 22:l.mode&1?(Kt=(h=Kt)||l.memoizedState!==null,xi(i,s,l),Kt=h):xi(i,s,l);break;default:xi(i,s,l)}}function Q_(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new g0),s.forEach(function(h){var f=A0.bind(null,i,h);l.has(h)||(l.add(h),h.then(f,f))})}}function $n(i,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var f=l[h];try{var m=i,v=s,S=v;e:for(;S!==null;){switch(S.tag){case 5:Vt=S.stateNode,qn=!1;break e;case 3:Vt=S.stateNode.containerInfo,qn=!0;break e;case 4:Vt=S.stateNode.containerInfo,qn=!0;break e}S=S.return}if(Vt===null)throw Error(t(160));K_(m,v,f),Vt=null,qn=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(U){ht(f,s,U)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Y_(s,i),s=s.sibling}function Y_(i,s){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if($n(s,i),yr(i),h&4){try{_l(3,i,i.return),yc(3,i)}catch(ae){ht(i,i.return,ae)}try{_l(5,i,i.return)}catch(ae){ht(i,i.return,ae)}}break;case 1:$n(s,i),yr(i),h&512&&l!==null&&Wo(l,l.return);break;case 5:if($n(s,i),yr(i),h&512&&l!==null&&Wo(l,l.return),i.flags&32){var f=i.stateNode;try{hs(f,"")}catch(ae){ht(i,i.return,ae)}}if(h&4&&(f=i.stateNode,f!=null)){var m=i.memoizedProps,v=l!==null?l.memoizedProps:m,S=i.type,k=i.updateQueue;if(i.updateQueue=null,k!==null)try{S==="input"&&m.type==="radio"&&m.name!=null&&oo(f,m),uo(S,v);var U=uo(S,m);for(v=0;v<k.length;v+=2){var K=k[v],Q=k[v+1];K==="style"?lo(f,Q):K==="dangerouslySetInnerHTML"?Tu(f,Q):K==="children"?hs(f,Q):ye(f,K,Q,U)}switch(S){case"input":cs(f,m);break;case"textarea":wu(f,m);break;case"select":var $=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var te=m.value;te!=null?Fn(f,!!m.multiple,te,!1):$!==!!m.multiple&&(m.defaultValue!=null?Fn(f,!!m.multiple,m.defaultValue,!0):Fn(f,!!m.multiple,m.multiple?[]:"",!1))}f[ol]=m}catch(ae){ht(i,i.return,ae)}}break;case 6:if($n(s,i),yr(i),h&4){if(i.stateNode===null)throw Error(t(162));f=i.stateNode,m=i.memoizedProps;try{f.nodeValue=m}catch(ae){ht(i,i.return,ae)}}break;case 3:if($n(s,i),yr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Ti(s.containerInfo)}catch(ae){ht(i,i.return,ae)}break;case 4:$n(s,i),yr(i);break;case 13:$n(s,i),yr(i),f=i.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(gf=Je())),h&4&&Q_(i);break;case 22:if(K=l!==null&&l.memoizedState!==null,i.mode&1?(Kt=(U=Kt)||K,$n(s,i),Kt=U):$n(s,i),yr(i),h&8192){if(U=i.memoizedState!==null,(i.stateNode.isHidden=U)&&!K&&(i.mode&1)!==0)for(se=i,K=i.child;K!==null;){for(Q=se=K;se!==null;){switch($=se,te=$.child,$.tag){case 0:case 11:case 14:case 15:_l(4,$,$.return);break;case 1:Wo($,$.return);var oe=$.stateNode;if(typeof oe.componentWillUnmount=="function"){h=$,l=$.return;try{s=h,oe.props=s.memoizedProps,oe.state=s.memoizedState,oe.componentWillUnmount()}catch(ae){ht(h,l,ae)}}break;case 5:Wo($,$.return);break;case 22:if($.memoizedState!==null){Z_(Q);continue}}te!==null?(te.return=$,se=te):Z_(Q)}K=K.sibling}e:for(K=null,Q=i;;){if(Q.tag===5){if(K===null){K=Q;try{f=Q.stateNode,U?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(S=Q.stateNode,k=Q.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,S.style.display=fi("display",v))}catch(ae){ht(i,i.return,ae)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=U?"":Q.memoizedProps}catch(ae){ht(i,i.return,ae)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===i)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===i)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===i)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:$n(s,i),yr(i),h&4&&Q_(i);break;case 21:break;default:$n(s,i),yr(i)}}function yr(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if($_(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(hs(f,""),h.flags&=-33);var m=G_(i);ff(i,m,f);break;case 3:case 4:var v=h.stateNode.containerInfo,S=G_(i);df(i,S,v);break;default:throw Error(t(161))}}catch(k){ht(i,i.return,k)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function y0(i,s,l){se=i,X_(i)}function X_(i,s,l){for(var h=(i.mode&1)!==0;se!==null;){var f=se,m=f.child;if(f.tag===22&&h){var v=f.memoizedState!==null||_c;if(!v){var S=f.alternate,k=S!==null&&S.memoizedState!==null||Kt;S=_c;var U=Kt;if(_c=v,(Kt=k)&&!U)for(se=f;se!==null;)v=se,k=v.child,v.tag===22&&v.memoizedState!==null?ey(f):k!==null?(k.return=v,se=k):ey(f);for(;m!==null;)se=m,X_(m),m=m.sibling;se=f,_c=S,Kt=U}J_(i)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,se=m):J_(i)}}function J_(i){for(;se!==null;){var s=se;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Kt||yc(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Kt)if(l===null)h.componentDidMount();else{var f=s.elementType===s.type?l.memoizedProps:Hn(s.type,l.memoizedProps);h.componentDidUpdate(f,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&Zg(s,m,h);break;case 3:var v=s.updateQueue;if(v!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Zg(s,v,l)}break;case 5:var S=s.stateNode;if(l===null&&s.flags&4){l=S;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&l.focus();break;case"img":k.src&&(l.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var U=s.alternate;if(U!==null){var K=U.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Ti(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Kt||s.flags&512&&hf(s)}catch($){ht(s,s.return,$)}}if(s===i){se=null;break}if(l=s.sibling,l!==null){l.return=s.return,se=l;break}se=s.return}}function Z_(i){for(;se!==null;){var s=se;if(s===i){se=null;break}var l=s.sibling;if(l!==null){l.return=s.return,se=l;break}se=s.return}}function ey(i){for(;se!==null;){var s=se;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{yc(4,s)}catch(k){ht(s,l,k)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(k){ht(s,f,k)}}var m=s.return;try{hf(s)}catch(k){ht(s,m,k)}break;case 5:var v=s.return;try{hf(s)}catch(k){ht(s,v,k)}}}catch(k){ht(s,s.return,k)}if(s===i){se=null;break}var S=s.sibling;if(S!==null){S.return=s.return,se=S;break}se=s.return}}var v0=Math.ceil,vc=xe.ReactCurrentDispatcher,pf=xe.ReactCurrentOwner,Dn=xe.ReactCurrentBatchConfig,Fe=0,Nt=null,Et=null,Ft=0,Tn=0,Ho=Ri(0),Ct=0,yl=null,xs=0,Ec=0,mf=0,vl=null,un=null,gf=0,qo=1/0,$r=null,wc=!1,_f=null,Oi=null,Tc=!1,Li=null,Ic=0,El=0,yf=null,Sc=-1,Cc=0;function sn(){return(Fe&6)!==0?Je():Sc!==-1?Sc:Sc=Je()}function Mi(i){return(i.mode&1)===0?1:(Fe&2)!==0&&Ft!==0?Ft&-Ft:n0.transition!==null?(Cc===0&&(Cc=za()),Cc):(i=Ne,i!==0||(i=window.event,i=i===void 0?16:Eo(i.type)),i)}function Gn(i,s,l,h){if(50<El)throw El=0,yf=null,Error(t(185));Es(i,l,h),((Fe&2)===0||i!==Nt)&&(i===Nt&&((Fe&2)===0&&(Ec|=l),Ct===4&&bi(i,Ft)),cn(i,h),l===1&&Fe===0&&(s.mode&1)===0&&(qo=Je()+500,Zu&&Pi()))}function cn(i,s){var l=i.callbackNode;vs(i,s);var h=Or(i,i===Nt?Ft:0);if(h===0)l!==null&&fo(l),i.callbackNode=null,i.callbackPriority=0;else if(s=h&-h,i.callbackPriority!==s){if(l!=null&&fo(l),s===1)i.tag===0?t0(ny.bind(null,i)):zg(ny.bind(null,i)),XS(function(){(Fe&6)===0&&Pi()}),l=null;else{switch(sr(h)){case 1:l=po;break;case 4:l=Fa;break;case 16:l=ms;break;case 536870912:l=mo;break;default:l=ms}l=cy(l,ty.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function ty(i,s){if(Sc=-1,Cc=0,(Fe&6)!==0)throw Error(t(327));var l=i.callbackNode;if($o()&&i.callbackNode!==l)return null;var h=Or(i,i===Nt?Ft:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||s)s=Ac(i,h);else{s=h;var f=Fe;Fe|=2;var m=iy();(Nt!==i||Ft!==s)&&($r=null,qo=Je()+500,Ls(i,s));do try{T0();break}catch(S){ry(i,S)}while(!0);Md(),vc.current=m,Fe=f,Et!==null?s=0:(Nt=null,Ft=0,s=Ct)}if(s!==0){if(s===2&&(f=ja(i),f!==0&&(h=f,s=vf(i,f))),s===1)throw l=yl,Ls(i,0),bi(i,h),cn(i,Je()),l;if(s===6)bi(i,h);else{if(f=i.current.alternate,(h&30)===0&&!E0(f)&&(s=Ac(i,h),s===2&&(m=ja(i),m!==0&&(h=m,s=vf(i,m))),s===1))throw l=yl,Ls(i,0),bi(i,h),cn(i,Je()),l;switch(i.finishedWork=f,i.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:Ms(i,un,$r);break;case 3:if(bi(i,h),(h&130023424)===h&&(s=gf+500-Je(),10<s)){if(Or(i,0)!==0)break;if(f=i.suspendedLanes,(f&h)!==h){sn(),i.pingedLanes|=i.suspendedLanes&f;break}i.timeoutHandle=Sd(Ms.bind(null,i,un,$r),s);break}Ms(i,un,$r);break;case 4:if(bi(i,h),(h&4194240)===h)break;for(s=i.eventTimes,f=-1;0<h;){var v=31-mn(h);m=1<<v,v=s[v],v>f&&(f=v),h&=~m}if(h=f,h=Je()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*v0(h/1960))-h,10<h){i.timeoutHandle=Sd(Ms.bind(null,i,un,$r),h);break}Ms(i,un,$r);break;case 5:Ms(i,un,$r);break;default:throw Error(t(329))}}}return cn(i,Je()),i.callbackNode===l?ty.bind(null,i):null}function vf(i,s){var l=vl;return i.current.memoizedState.isDehydrated&&(Ls(i,s).flags|=256),i=Ac(i,s),i!==2&&(s=un,un=l,s!==null&&Ef(s)),i}function Ef(i){un===null?un=i:un.push.apply(un,i)}function E0(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var f=l[h],m=f.getSnapshot;f=f.value;try{if(!Bn(m(),f))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function bi(i,s){for(s&=~mf,s&=~Ec,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-mn(s),h=1<<l;i[l]=-1,s&=~h}}function ny(i){if((Fe&6)!==0)throw Error(t(327));$o();var s=Or(i,0);if((s&1)===0)return cn(i,Je()),null;var l=Ac(i,s);if(i.tag!==0&&l===2){var h=ja(i);h!==0&&(s=h,l=vf(i,h))}if(l===1)throw l=yl,Ls(i,0),bi(i,s),cn(i,Je()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Ms(i,un,$r),cn(i,Je()),null}function wf(i,s){var l=Fe;Fe|=1;try{return i(s)}finally{Fe=l,Fe===0&&(qo=Je()+500,Zu&&Pi())}}function Os(i){Li!==null&&Li.tag===0&&(Fe&6)===0&&$o();var s=Fe;Fe|=1;var l=Dn.transition,h=Ne;try{if(Dn.transition=null,Ne=1,i)return i()}finally{Ne=h,Dn.transition=l,Fe=s,(Fe&6)===0&&Pi()}}function Tf(){Tn=Ho.current,et(Ho)}function Ls(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,YS(l)),Et!==null)for(l=Et.return;l!==null;){var h=l;switch(Nd(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Xu();break;case 3:zo(),et(on),et(qt),Wd();break;case 5:zd(h);break;case 4:zo();break;case 13:et(at);break;case 19:et(at);break;case 10:bd(h.type._context);break;case 22:case 23:Tf()}l=l.return}if(Nt=i,Et=i=Vi(i.current,null),Ft=Tn=s,Ct=0,yl=null,mf=Ec=xs=0,un=vl=null,Ps!==null){for(s=0;s<Ps.length;s++)if(l=Ps[s],h=l.interleaved,h!==null){l.interleaved=null;var f=h.next,m=l.pending;if(m!==null){var v=m.next;m.next=f,h.next=v}l.pending=h}Ps=null}return i}function ry(i,s){do{var l=Et;try{if(Md(),uc.current=fc,cc){for(var h=lt.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}cc=!1}if(Ds=0,Pt=St=lt=null,dl=!1,fl=0,pf.current=null,l===null||l.return===null){Ct=1,yl=s,Et=null;break}e:{var m=i,v=l.return,S=l,k=s;if(s=Ft,S.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var U=k,K=S,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var $=K.alternate;$?(K.updateQueue=$.updateQueue,K.memoizedState=$.memoizedState,K.lanes=$.lanes):(K.updateQueue=null,K.memoizedState=null)}var te=k_(v);if(te!==null){te.flags&=-257,P_(te,v,S,m,s),te.mode&1&&R_(m,U,s),s=te,k=U;var oe=s.updateQueue;if(oe===null){var ae=new Set;ae.add(k),s.updateQueue=ae}else oe.add(k);break e}else{if((s&1)===0){R_(m,U,s),If();break e}k=Error(t(426))}}else if(ot&&S.mode&1){var pt=k_(v);if(pt!==null){(pt.flags&65536)===0&&(pt.flags|=256),P_(pt,v,S,m,s),Od(Bo(k,S));break e}}m=k=Bo(k,S),Ct!==4&&(Ct=2),vl===null?vl=[m]:vl.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var M=C_(m,k,s);Jg(m,M);break e;case 1:S=k;var D=m.type,F=m.stateNode;if((m.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Oi===null||!Oi.has(F)))){m.flags|=65536,s&=-s,m.lanes|=s;var Y=A_(m,S,s);Jg(m,Y);break e}}m=m.return}while(m!==null)}oy(l)}catch(le){s=le,Et===l&&l!==null&&(Et=l=l.return);continue}break}while(!0)}function iy(){var i=vc.current;return vc.current=fc,i===null?fc:i}function If(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Nt===null||(xs&268435455)===0&&(Ec&268435455)===0||bi(Nt,Ft)}function Ac(i,s){var l=Fe;Fe|=2;var h=iy();(Nt!==i||Ft!==s)&&($r=null,Ls(i,s));do try{w0();break}catch(f){ry(i,f)}while(!0);if(Md(),Fe=l,vc.current=h,Et!==null)throw Error(t(261));return Nt=null,Ft=0,Ct}function w0(){for(;Et!==null;)sy(Et)}function T0(){for(;Et!==null&&!ps();)sy(Et)}function sy(i){var s=uy(i.alternate,i,Tn);i.memoizedProps=i.pendingProps,s===null?oy(i):Et=s,pf.current=null}function oy(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=p0(l,s,Tn),l!==null){Et=l;return}}else{if(l=m0(l,s),l!==null){l.flags&=32767,Et=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Ct=6,Et=null;return}}if(s=s.sibling,s!==null){Et=s;return}Et=s=i}while(s!==null);Ct===0&&(Ct=5)}function Ms(i,s,l){var h=Ne,f=Dn.transition;try{Dn.transition=null,Ne=1,I0(i,s,l,h)}finally{Dn.transition=f,Ne=h}return null}function I0(i,s,l,h){do $o();while(Li!==null);if((Fe&6)!==0)throw Error(t(327));l=i.finishedWork;var f=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var m=l.lanes|l.childLanes;if(ld(i,m),i===Nt&&(Et=Nt=null,Ft=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Tc||(Tc=!0,cy(ms,function(){return $o(),null})),m=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||m){m=Dn.transition,Dn.transition=null;var v=Ne;Ne=1;var S=Fe;Fe|=4,pf.current=null,_0(i,l),Y_(l,i),WS(Td),br=!!wd,Td=wd=null,i.current=l,y0(l),xr(),Fe=S,Ne=v,Dn.transition=m}else i.current=l;if(Tc&&(Tc=!1,Li=i,Ic=f),m=i.pendingLanes,m===0&&(Oi=null),Ou(l.stateNode),cn(i,Je()),s!==null)for(h=i.onRecoverableError,l=0;l<s.length;l++)f=s[l],h(f.value,{componentStack:f.stack,digest:f.digest});if(wc)throw wc=!1,i=_f,_f=null,i;return(Ic&1)!==0&&i.tag!==0&&$o(),m=i.pendingLanes,(m&1)!==0?i===yf?El++:(El=0,yf=i):El=0,Pi(),null}function $o(){if(Li!==null){var i=sr(Ic),s=Dn.transition,l=Ne;try{if(Dn.transition=null,Ne=16>i?16:i,Li===null)var h=!1;else{if(i=Li,Li=null,Ic=0,(Fe&6)!==0)throw Error(t(331));var f=Fe;for(Fe|=4,se=i.current;se!==null;){var m=se,v=m.child;if((se.flags&16)!==0){var S=m.deletions;if(S!==null){for(var k=0;k<S.length;k++){var U=S[k];for(se=U;se!==null;){var K=se;switch(K.tag){case 0:case 11:case 15:_l(8,K,m)}var Q=K.child;if(Q!==null)Q.return=K,se=Q;else for(;se!==null;){K=se;var $=K.sibling,te=K.return;if(q_(K),K===U){se=null;break}if($!==null){$.return=te,se=$;break}se=te}}}var oe=m.alternate;if(oe!==null){var ae=oe.child;if(ae!==null){oe.child=null;do{var pt=ae.sibling;ae.sibling=null,ae=pt}while(ae!==null)}}se=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,se=v;else e:for(;se!==null;){if(m=se,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:_l(9,m,m.return)}var M=m.sibling;if(M!==null){M.return=m.return,se=M;break e}se=m.return}}var D=i.current;for(se=D;se!==null;){v=se;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,se=F;else e:for(v=D;se!==null;){if(S=se,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:yc(9,S)}}catch(le){ht(S,S.return,le)}if(S===v){se=null;break e}var Y=S.sibling;if(Y!==null){Y.return=S.return,se=Y;break e}se=S.return}}if(Fe=f,Pi(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(gs,i)}catch{}h=!0}return h}finally{Ne=l,Dn.transition=s}}return!1}function ay(i,s,l){s=Bo(l,s),s=C_(i,s,1),i=Di(i,s,1),s=sn(),i!==null&&(Es(i,1,s),cn(i,s))}function ht(i,s,l){if(i.tag===3)ay(i,i,l);else for(;s!==null;){if(s.tag===3){ay(s,i,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Oi===null||!Oi.has(h))){i=Bo(l,i),i=A_(s,i,1),s=Di(s,i,1),i=sn(),s!==null&&(Es(s,1,i),cn(s,i));break}}s=s.return}}function S0(i,s,l){var h=i.pingCache;h!==null&&h.delete(s),s=sn(),i.pingedLanes|=i.suspendedLanes&l,Nt===i&&(Ft&l)===l&&(Ct===4||Ct===3&&(Ft&130023424)===Ft&&500>Je()-gf?Ls(i,0):mf|=l),cn(i,s)}function ly(i,s){s===0&&((i.mode&1)===0?s=1:(s=vi,vi<<=1,(vi&130023424)===0&&(vi=4194304)));var l=sn();i=Wr(i,s),i!==null&&(Es(i,s,l),cn(i,l))}function C0(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),ly(i,l)}function A0(i,s){var l=0;switch(i.tag){case 13:var h=i.stateNode,f=i.memoizedState;f!==null&&(l=f.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),ly(i,l)}var uy;uy=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||on.current)ln=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return ln=!1,f0(i,s,l);ln=(i.flags&131072)!==0}else ln=!1,ot&&(s.flags&1048576)!==0&&Bg(s,tc,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;gc(i,s),i=s.pendingProps;var f=Lo(s,qt.current);jo(s,l),f=$d(null,s,h,i,f,l);var m=Gd();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,an(h)?(m=!0,Ju(s)):m=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Ud(s),f.updater=pc,s.stateNode=f,f._reactInternals=s,Zd(s,h,i,l),s=rf(null,s,h,!0,m,l)):(s.tag=0,ot&&m&&Pd(s),rn(null,s,f,l),s=s.child),s;case 16:h=s.elementType;e:{switch(gc(i,s),i=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=k0(h),i=Hn(h,i),f){case 0:s=nf(null,s,h,i,l);break e;case 1:s=M_(null,s,h,i,l);break e;case 11:s=N_(null,s,h,i,l);break e;case 14:s=D_(null,s,h,Hn(h.type,i),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Hn(h,f),nf(i,s,h,f,l);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Hn(h,f),M_(i,s,h,f,l);case 3:e:{if(b_(s),i===null)throw Error(t(387));h=s.pendingProps,m=s.memoizedState,f=m.element,Xg(i,s),ac(s,h,null,l);var v=s.memoizedState;if(h=v.element,m.isDehydrated)if(m={element:h,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){f=Bo(Error(t(423)),s),s=V_(i,s,h,l,f);break e}else if(h!==f){f=Bo(Error(t(424)),s),s=V_(i,s,h,l,f);break e}else for(wn=Ai(s.stateNode.containerInfo.firstChild),En=s,ot=!0,Wn=null,l=Qg(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Vo(),h===f){s=qr(i,s,l);break e}rn(i,s,h,l)}s=s.child}return s;case 5:return e_(s),i===null&&xd(s),h=s.type,f=s.pendingProps,m=i!==null?i.memoizedProps:null,v=f.children,Id(h,f)?v=null:m!==null&&Id(h,m)&&(s.flags|=32),L_(i,s),rn(i,s,v,l),s.child;case 6:return i===null&&xd(s),null;case 13:return F_(i,s,l);case 4:return jd(s,s.stateNode.containerInfo),h=s.pendingProps,i===null?s.child=Fo(s,null,h,l):rn(i,s,h,l),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Hn(h,f),N_(i,s,h,f,l);case 7:return rn(i,s,s.pendingProps,l),s.child;case 8:return rn(i,s,s.pendingProps.children,l),s.child;case 12:return rn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,m=s.memoizedProps,v=f.value,Ye(ic,h._currentValue),h._currentValue=v,m!==null)if(Bn(m.value,v)){if(m.children===f.children&&!on.current){s=qr(i,s,l);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var S=m.dependencies;if(S!==null){v=m.child;for(var k=S.firstContext;k!==null;){if(k.context===h){if(m.tag===1){k=Hr(-1,l&-l),k.tag=2;var U=m.updateQueue;if(U!==null){U=U.shared;var K=U.pending;K===null?k.next=k:(k.next=K.next,K.next=k),U.pending=k}}m.lanes|=l,k=m.alternate,k!==null&&(k.lanes|=l),Vd(m.return,l,s),S.lanes|=l;break}k=k.next}}else if(m.tag===10)v=m.type===s.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=l,S=v.alternate,S!==null&&(S.lanes|=l),Vd(v,l,s),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===s){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}rn(i,s,f.children,l),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,jo(s,l),f=Pn(f),h=h(f),s.flags|=1,rn(i,s,h,l),s.child;case 14:return h=s.type,f=Hn(h,s.pendingProps),f=Hn(h.type,f),D_(i,s,h,f,l);case 15:return x_(i,s,s.type,s.pendingProps,l);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Hn(h,f),gc(i,s),s.tag=1,an(h)?(i=!0,Ju(s)):i=!1,jo(s,l),I_(s,h,f),Zd(s,h,f,l),rf(null,s,h,!0,i,l);case 19:return j_(i,s,l);case 22:return O_(i,s,l)}throw Error(t(156,s.tag))};function cy(i,s){return Va(i,s)}function R0(i,s,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(i,s,l,h){return new R0(i,s,l,h)}function Sf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function k0(i){if(typeof i=="function")return Sf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===L)return 11;if(i===kt)return 14}return 2}function Vi(i,s){var l=i.alternate;return l===null?(l=xn(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Rc(i,s,l,h,f,m){var v=2;if(h=i,typeof i=="function")Sf(i)&&(v=1);else if(typeof i=="string")v=5;else e:switch(i){case N:return bs(l.children,f,m,s);case C:v=8,f|=8;break;case R:return i=xn(12,l,s,f|2),i.elementType=R,i.lanes=m,i;case A:return i=xn(13,l,s,f),i.elementType=A,i.lanes=m,i;case Qe:return i=xn(19,l,s,f),i.elementType=Qe,i.lanes=m,i;case st:return kc(l,f,m,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case x:v=10;break e;case P:v=9;break e;case L:v=11;break e;case kt:v=14;break e;case Wt:v=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=xn(v,l,s,f),s.elementType=i,s.type=h,s.lanes=m,s}function bs(i,s,l,h){return i=xn(7,i,h,s),i.lanes=l,i}function kc(i,s,l,h){return i=xn(22,i,h,s),i.elementType=st,i.lanes=l,i.stateNode={isHidden:!1},i}function Cf(i,s,l){return i=xn(6,i,null,s),i.lanes=l,i}function Af(i,s,l){return s=xn(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function P0(i,s,l,h,f){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ba(0),this.expirationTimes=Ba(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ba(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Rf(i,s,l,h,f,m,v,S,k){return i=new P0(i,s,l,S,k),s===1?(s=1,m===!0&&(s|=8)):s=0,m=xn(3,null,null,s),i.current=m,m.stateNode=i,m.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ud(m),i}function N0(i,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Oe,key:h==null?null:""+h,children:i,containerInfo:s,implementation:l}}function hy(i){if(!i)return ki;i=i._reactInternals;e:{if(jn(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(an(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(an(l))return Ug(i,l,s)}return s}function dy(i,s,l,h,f,m,v,S,k){return i=Rf(l,h,!0,i,f,m,v,S,k),i.context=hy(null),l=i.current,h=sn(),f=Mi(l),m=Hr(h,f),m.callback=s??null,Di(l,m,f),i.current.lanes=f,Es(i,f,h),cn(i,h),i}function Pc(i,s,l,h){var f=s.current,m=sn(),v=Mi(f);return l=hy(l),s.context===null?s.context=l:s.pendingContext=l,s=Hr(m,v),s.payload={element:i},h=h===void 0?null:h,h!==null&&(s.callback=h),i=Di(f,s,v),i!==null&&(Gn(i,f,v,m),oc(i,f,v)),v}function Nc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function fy(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function kf(i,s){fy(i,s),(i=i.alternate)&&fy(i,s)}function D0(){return null}var py=typeof reportError=="function"?reportError:function(i){console.error(i)};function Pf(i){this._internalRoot=i}Dc.prototype.render=Pf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Pc(i,s,null,null)},Dc.prototype.unmount=Pf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Os(function(){Pc(null,i,null,null)}),s[Ur]=null}};function Dc(i){this._internalRoot=i}Dc.prototype.unstable_scheduleHydration=function(i){if(i){var s=$a();i={blockedOn:null,target:i,priority:s};for(var l=0;l<gn.length&&s!==0&&s<gn[l].priority;l++);gn.splice(l,0,i),l===0&&yo(i)}};function Nf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function xc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function my(){}function x0(i,s,l,h,f){if(f){if(typeof h=="function"){var m=h;h=function(){var U=Nc(v);m.call(U)}}var v=dy(s,h,i,0,null,!1,!1,"",my);return i._reactRootContainer=v,i[Ur]=v.current,il(i.nodeType===8?i.parentNode:i),Os(),v}for(;f=i.lastChild;)i.removeChild(f);if(typeof h=="function"){var S=h;h=function(){var U=Nc(k);S.call(U)}}var k=Rf(i,0,!1,null,null,!1,!1,"",my);return i._reactRootContainer=k,i[Ur]=k.current,il(i.nodeType===8?i.parentNode:i),Os(function(){Pc(s,k,l,h)}),k}function Oc(i,s,l,h,f){var m=l._reactRootContainer;if(m){var v=m;if(typeof f=="function"){var S=f;f=function(){var k=Nc(v);S.call(k)}}Pc(s,v,i,f)}else v=x0(l,s,i,f,h);return Nc(v)}Ha=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=je(s.pendingLanes);l!==0&&(Wa(s,l|1),cn(s,Je()),(Fe&6)===0&&(qo=Je()+500,Pi()))}break;case 13:Os(function(){var h=Wr(i,1);if(h!==null){var f=sn();Gn(h,i,1,f)}}),kf(i,1)}},go=function(i){if(i.tag===13){var s=Wr(i,134217728);if(s!==null){var l=sn();Gn(s,i,134217728,l)}kf(i,134217728)}},qa=function(i){if(i.tag===13){var s=Mi(i),l=Wr(i,s);if(l!==null){var h=sn();Gn(l,i,s,h)}kf(i,s)}},$a=function(){return Ne},Ga=function(i,s){var l=Ne;try{return Ne=i,s()}finally{Ne=l}},Pr=function(i,s,l){switch(s){case"input":if(cs(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==i&&h.form===i.form){var f=Yu(h);if(!f)throw Error(t(90));ka(h),cs(h,f)}}}break;case"textarea":wu(i,l);break;case"select":s=l.value,s!=null&&Fn(i,!!l.multiple,s,!1)}},Su=wf,Cu=Os;var O0={usingClientEntryPoint:!1,Events:[al,xo,Yu,mi,gi,wf]},wl={findFiberByHostInstance:Cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L0={bundleType:wl.bundleType,version:wl.version,rendererPackageName:wl.rendererPackageName,rendererConfig:wl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=xu(i),i===null?null:i.stateNode},findFiberByHostInstance:wl.findFiberByHostInstance||D0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{gs=Lc.inject(L0),pn=Lc}catch{}}return hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O0,hn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nf(s))throw Error(t(200));return N0(i,s,null,l)},hn.createRoot=function(i,s){if(!Nf(i))throw Error(t(299));var l=!1,h="",f=py;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=Rf(i,1,!1,null,null,l,!1,h,f),i[Ur]=s.current,il(i.nodeType===8?i.parentNode:i),new Pf(s)},hn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=xu(s),i=i===null?null:i.stateNode,i},hn.flushSync=function(i){return Os(i)},hn.hydrate=function(i,s,l){if(!xc(s))throw Error(t(200));return Oc(null,i,s,!0,l)},hn.hydrateRoot=function(i,s,l){if(!Nf(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,f=!1,m="",v=py;if(l!=null&&(l.unstable_strictMode===!0&&(f=!0),l.identifierPrefix!==void 0&&(m=l.identifierPrefix),l.onRecoverableError!==void 0&&(v=l.onRecoverableError)),s=dy(s,null,i,1,l??null,f,!1,m,v),i[Ur]=s.current,il(i),h)for(i=0;i<h.length;i++)l=h[i],f=l._getVersion,f=f(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,f]:s.mutableSourceEagerHydrationData.push(l,f);return new Dc(s)},hn.render=function(i,s,l){if(!xc(s))throw Error(t(200));return Oc(null,i,s,!1,l)},hn.unmountComponentAtNode=function(i){if(!xc(i))throw Error(t(40));return i._reactRootContainer?(Os(function(){Oc(null,null,i,!1,function(){i._reactRootContainer=null,i[Ur]=null})}),!0):!1},hn.unstable_batchedUpdates=wf,hn.unstable_renderSubtreeIntoContainer=function(i,s,l,h){if(!xc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Oc(i,s,l,!1,h)},hn.version="18.3.1-next-f1338f8080-20240426",hn}var Iy;function B0(){if(Iy)return Of.exports;Iy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Of.exports=z0(),Of.exports}var Sy;function W0(){if(Sy)return Mc;Sy=1;var n=B0();return Mc.createRoot=n.createRoot,Mc.hydrateRoot=n.hydrateRoot,Mc}var H0=W0();const q0=()=>{};var Cy={};/**
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
 */const zE={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const Z=function(n,e){if(!n)throw _a(e)},_a=function(n){return new Error("Firebase Database ("+zE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const BE=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},$0=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const o=n[t++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],u=n[t++],d=n[t++],p=((o&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|u&63)}}return e.join("")},Bp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const a=n[o],u=o+1<n.length,d=u?n[o+1]:0,p=o+2<n.length,_=p?n[o+2]:0,E=a>>2,w=(a&3)<<4|d>>4;let I=(d&15)<<2|_>>6,V=_&63;p||(V=64,u||(I=64)),r.push(t[E],t[w],t[I],t[V])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(BE(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):$0(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const _=o<n.length?t[n.charAt(o)]:64;++o;const w=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||d==null||_==null||w==null)throw new G0;const I=a<<2|d>>4;if(r.push(I),_!==64){const V=d<<4&240|_>>2;if(r.push(V),w!==64){const z=_<<6&192|w;r.push(z)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class G0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WE=function(n){const e=BE(n);return Bp.encodeByteArray(e,!0)},nh=function(n){return WE(n).replace(/\./g,"")},rh=function(n){try{return Bp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function K0(n){return HE(void 0,n)}function HE(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Q0(t)||(n[t]=HE(n[t],e[t]));return n}function Q0(n){return n!=="__proto__"}/**
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
 */function Y0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const X0=()=>Y0().__FIREBASE_DEFAULTS__,J0=()=>{if(typeof process>"u"||typeof Cy>"u")return;const n=Cy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Z0=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&rh(n[1]);return e&&JSON.parse(e)},Dh=()=>{try{return q0()||X0()||J0()||Z0()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},qE=n=>Dh()?.emulatorHosts?.[n],$E=n=>{const e=qE(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},GE=()=>Dh()?.config,KE=n=>Dh()?.[`_${n}`];/**
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
 */class Wp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function os(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Hp(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function QE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[nh(JSON.stringify(t)),nh(JSON.stringify(u)),""].join(".")}const Ll={};function eC(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ll))Ll[e]?n.emulator.push(e):n.prod.push(e);return n}function tC(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ay=!1;function qp(n,e){if(typeof window>"u"||typeof document>"u"||!os(window.location.host)||Ll[n]===e||Ll[n]||Ay)return;Ll[n]=e;function t(I){return`__firebase__banner__${I}`}const r="__firebase__banner",a=eC().prod.length>0;function u(){const I=document.getElementById(r);I&&I.remove()}function d(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function p(I,V){I.setAttribute("width","24"),I.setAttribute("id",V),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function _(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Ay=!0,u()},I}function E(I,V){I.setAttribute("id",V),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function w(){const I=tC(r),V=t("text"),z=document.getElementById(V)||document.createElement("span"),G=t("learnmore"),W=document.getElementById(G)||document.createElement("a"),fe=t("preprendIcon"),pe=document.getElementById(fe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ye=I.element;d(ye),E(W,G);const xe=_();p(pe,fe),ye.append(pe,z,W,xe),document.body.appendChild(ye)}a?(z.innerText="Preview backend disconnected.",pe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(pe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",V)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function tn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $p(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tn())}function nC(){const n=Dh()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function iC(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function YE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sC(){const n=tn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function oC(){return zE.NODE_ADMIN===!0}function aC(){return!nC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lC(){try{return typeof indexedDB=="object"}catch{return!1}}function uC(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const cC="FirebaseError";class oi extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=cC,Object.setPrototypeOf(this,oi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,su.prototype.create)}}class su{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],u=a?hC(a,r):"Error",d=`${this.serviceName}: ${u} (${o}).`;return new oi(o,d,r)}}function hC(n,e){return n.replace(dC,(t,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const dC=/\{\$([^}]+)}/g;/**
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
 */function Hl(n){return JSON.parse(n)}function jt(n){return JSON.stringify(n)}/**
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
 */const XE=function(n){let e={},t={},r={},o="";try{const a=n.split(".");e=Hl(rh(a[0])||""),t=Hl(rh(a[1])||""),o=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:o}},fC=function(n){const e=XE(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},pC=function(n){const e=XE(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ai(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function aa(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function tp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ih(n,e,t){const r={};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=e.call(t,n[o],o,n));return r}function Xi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const o of t){if(!r.includes(o))return!1;const a=n[o],u=e[o];if(Ry(a)&&Ry(u)){if(!Xi(a,u))return!1}else if(a!==u)return!1}for(const o of r)if(!t.includes(o))return!1;return!0}function Ry(n){return n!==null&&typeof n=="object"}/**
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
 */function ya(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Rl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,a]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function kl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class mC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let w=0;w<16;w++)r[w]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let w=0;w<16;w++)r[w]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let w=16;w<80;w++){const I=r[w-3]^r[w-8]^r[w-14]^r[w-16];r[w]=(I<<1|I>>>31)&4294967295}let o=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],p=this.chain_[4],_,E;for(let w=0;w<80;w++){w<40?w<20?(_=d^a&(u^d),E=1518500249):(_=a^u^d,E=1859775393):w<60?(_=a&u|d&(a|u),E=2400959708):(_=a^u^d,E=3395469782);const I=(o<<5|o>>>27)+_+p+E+r[w]&4294967295;p=d,d=u,u=(a<<30|a>>>2)&4294967295,a=o,o=I}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let o=0;const a=this.buf_;let u=this.inbuf_;for(;o<t;){if(u===0)for(;o<=r;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(a[u]=e.charCodeAt(o),++u,++o,u===this.blockSize){this.compress_(a),u=0;break}}else for(;o<t;)if(a[u]=e[o],++u,++o,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let o=0;o<5;o++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[o]>>a&255,++r;return e}}function gC(n,e){const t=new _C(n,e);return t.subscribe.bind(t)}class _C{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let o;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");yC(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:r},o.next===void 0&&(o.next=bf),o.error===void 0&&(o.error=bf),o.complete===void 0&&(o.complete=bf);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yC(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function bf(){}function vC(n,e){return`${n} failed: ${e} argument `}/**
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
 */const EC=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);if(o>=55296&&o<=56319){const a=o-55296;r++,Z(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;o=65536+(a<<10)+u}o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):o<65536?(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},xh=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Rt(n){return n&&n._delegate?n._delegate:n}class Ji{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vs="[DEFAULT]";/**
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
 */class wC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Wp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IC(e))try{this.getOrInitializeService({instanceIdentifier:Vs})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(e=Vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vs){return this.instances.has(e)}getOptions(e=Vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(o)}return o}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(r)??new Set;o.add(e),this.onInitCallbacks.set(r,o);const a=this.instances.get(r);return a&&e(a,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const o of r)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TC(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vs){return this.component?this.component.multipleInstances?e:Vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TC(n){return n===Vs?void 0:n}function IC(n){return n.instantiationMode==="EAGER"}/**
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
 */class SC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ce||(Ce={}));const CC={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},AC=Ce.INFO,RC={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},kC=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=RC[e];if(o)console[o](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oh{constructor(e){this.name=e,this._logLevel=AC,this._logHandler=kC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const PC=(n,e)=>e.some(t=>n instanceof t);let ky,Py;function NC(){return ky||(ky=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DC(){return Py||(Py=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const JE=new WeakMap,np=new WeakMap,ZE=new WeakMap,Vf=new WeakMap,Gp=new WeakMap;function xC(n){const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Hi(n.result)),o()},u=()=>{r(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&JE.set(t,n)}).catch(()=>{}),Gp.set(e,n),e}function OC(n){if(np.has(n))return;const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),o()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});np.set(n,e)}let rp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return np.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ZE.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Hi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function LC(n){rp=n(rp)}function MC(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ff(this),e,...t);return ZE.set(r,e.sort?e.sort():[e]),Hi(r)}:DC().includes(n)?function(...e){return n.apply(Ff(this),e),Hi(JE.get(this))}:function(...e){return Hi(n.apply(Ff(this),e))}}function bC(n){return typeof n=="function"?MC(n):(n instanceof IDBTransaction&&OC(n),PC(n,NC())?new Proxy(n,rp):n)}function Hi(n){if(n instanceof IDBRequest)return xC(n);if(Vf.has(n))return Vf.get(n);const e=bC(n);return e!==n&&(Vf.set(n,e),Gp.set(e,n)),e}const Ff=n=>Gp.get(n);function VC(n,e,{blocked:t,upgrade:r,blocking:o,terminated:a}={}){const u=indexedDB.open(n,e),d=Hi(u);return r&&u.addEventListener("upgradeneeded",p=>{r(Hi(u.result),p.oldVersion,p.newVersion,Hi(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{a&&p.addEventListener("close",()=>a()),o&&p.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),d}const FC=["get","getKey","getAll","getAllKeys","count"],UC=["put","add","delete","clear"],Uf=new Map;function Ny(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Uf.get(e))return Uf.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=UC.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(o||FC.includes(t)))return;const a=async function(u,...d){const p=this.transaction(u,o?"readwrite":"readonly");let _=p.store;return r&&(_=_.index(d.shift())),(await Promise.all([_[t](...d),o&&p.done]))[0]};return Uf.set(e,a),a}LC(n=>({...n,get:(e,t,r)=>Ny(e,t)||n.get(e,t,r),has:(e,t)=>!!Ny(e,t)||n.has(e,t)}));/**
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
 */class jC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zC(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function zC(n){return n.getComponent()?.type==="VERSION"}const ip="@firebase/app",Dy="0.14.6";/**
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
 */const ti=new Oh("@firebase/app"),BC="@firebase/app-compat",WC="@firebase/analytics-compat",HC="@firebase/analytics",qC="@firebase/app-check-compat",$C="@firebase/app-check",GC="@firebase/auth",KC="@firebase/auth-compat",QC="@firebase/database",YC="@firebase/data-connect",XC="@firebase/database-compat",JC="@firebase/functions",ZC="@firebase/functions-compat",eA="@firebase/installations",tA="@firebase/installations-compat",nA="@firebase/messaging",rA="@firebase/messaging-compat",iA="@firebase/performance",sA="@firebase/performance-compat",oA="@firebase/remote-config",aA="@firebase/remote-config-compat",lA="@firebase/storage",uA="@firebase/storage-compat",cA="@firebase/firestore",hA="@firebase/ai",dA="@firebase/firestore-compat",fA="firebase",pA="12.6.0";/**
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
 */const sp="[DEFAULT]",mA={[ip]:"fire-core",[BC]:"fire-core-compat",[HC]:"fire-analytics",[WC]:"fire-analytics-compat",[$C]:"fire-app-check",[qC]:"fire-app-check-compat",[GC]:"fire-auth",[KC]:"fire-auth-compat",[QC]:"fire-rtdb",[YC]:"fire-data-connect",[XC]:"fire-rtdb-compat",[JC]:"fire-fn",[ZC]:"fire-fn-compat",[eA]:"fire-iid",[tA]:"fire-iid-compat",[nA]:"fire-fcm",[rA]:"fire-fcm-compat",[iA]:"fire-perf",[sA]:"fire-perf-compat",[oA]:"fire-rc",[aA]:"fire-rc-compat",[lA]:"fire-gcs",[uA]:"fire-gcs-compat",[cA]:"fire-fst",[dA]:"fire-fst-compat",[hA]:"fire-vertex","fire-js":"fire-js",[fA]:"fire-js-all"};/**
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
 */const sh=new Map,gA=new Map,op=new Map;function xy(n,e){try{n.container.addComponent(e)}catch(t){ti.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ws(n){const e=n.name;if(op.has(e))return ti.debug(`There were multiple attempts to register component ${e}.`),!1;op.set(e,n);for(const t of sh.values())xy(t,n);for(const t of gA.values())xy(t,n);return!0}function Lh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function fn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const _A={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qi=new su("app","Firebase",_A);/**
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
 */class yA{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ji("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qi.create("app-deleted",{appName:this._name})}}/**
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
 */const Xs=pA;function ew(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:sp,automaticDataCollectionEnabled:!0,...e},o=r.name;if(typeof o!="string"||!o)throw qi.create("bad-app-name",{appName:String(o)});if(t||(t=GE()),!t)throw qi.create("no-options");const a=sh.get(o);if(a){if(Xi(t,a.options)&&Xi(r,a.config))return a;throw qi.create("duplicate-app",{appName:o})}const u=new SC(o);for(const p of op.values())u.addComponent(p);const d=new yA(t,r,u);return sh.set(o,d),d}function Kp(n=sp){const e=sh.get(n);if(!e&&n===sp&&GE())return ew();if(!e)throw qi.create("no-app",{appName:n});return e}function Tr(n,e,t){let r=mA[n]??n;t&&(r+=`-${t}`);const o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${r}" with version "${e}":`];o&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ti.warn(u.join(" "));return}Ws(new Ji(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const vA="firebase-heartbeat-database",EA=1,ql="firebase-heartbeat-store";let jf=null;function tw(){return jf||(jf=VC(vA,EA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ql)}catch(t){console.warn(t)}}}}).catch(n=>{throw qi.create("idb-open",{originalErrorMessage:n.message})})),jf}async function wA(n){try{const t=(await tw()).transaction(ql),r=await t.objectStore(ql).get(nw(n));return await t.done,r}catch(e){if(e instanceof oi)ti.warn(e.message);else{const t=qi.create("idb-get",{originalErrorMessage:e?.message});ti.warn(t.message)}}}async function Oy(n,e){try{const r=(await tw()).transaction(ql,"readwrite");await r.objectStore(ql).put(e,nw(n)),await r.done}catch(t){if(t instanceof oi)ti.warn(t.message);else{const r=qi.create("idb-set",{originalErrorMessage:t?.message});ti.warn(r.message)}}}function nw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const TA=1024,IA=30;class SA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new AA(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ly();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>IA){const o=RA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ti.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ly(),{heartbeatsToSend:t,unsentEntries:r}=CA(this._heartbeatsCache.heartbeats),o=nh(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return ti.warn(e),""}}}function Ly(){return new Date().toISOString().substring(0,10)}function CA(n,e=TA){const t=[];let r=n.slice();for(const o of n){const a=t.find(u=>u.agent===o.agent);if(a){if(a.dates.push(o.date),My(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),My(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class AA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lC()?uC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await wA(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Oy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Oy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function My(n){return nh(JSON.stringify({version:2,heartbeats:n})).length}function RA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function kA(n){Ws(new Ji("platform-logger",e=>new jC(e),"PRIVATE")),Ws(new Ji("heartbeat",e=>new SA(e),"PRIVATE")),Tr(ip,Dy,n),Tr(ip,Dy,"esm2020"),Tr("fire-js","")}kA("");function rw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PA=rw,iw=new su("auth","Firebase",rw());/**
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
 */const oh=new Oh("@firebase/auth");function NA(n,...e){oh.logLevel<=Ce.WARN&&oh.warn(`Auth (${Xs}): ${n}`,...e)}function Hc(n,...e){oh.logLevel<=Ce.ERROR&&oh.error(`Auth (${Xs}): ${n}`,...e)}/**
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
 */function bn(n,...e){throw Yp(n,...e)}function Jn(n,...e){return Yp(n,...e)}function Qp(n,e,t){const r={...PA(),[e]:t};return new su("auth","Firebase",r).create(e,{appName:n.name})}function Xr(n){return Qp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function DA(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&bn(n,"argument-error"),Qp(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yp(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return iw.create(n,...e)}function me(n,e,...t){if(!n)throw Yp(e,...t)}function Kr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Hc(e),new Error(e)}function ni(n,e){n||Kr(e)}/**
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
 */function ap(){return typeof self<"u"&&self.location?.href||""}function xA(){return by()==="http:"||by()==="https:"}function by(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function OA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xA()||iC()||"connection"in navigator)?navigator.onLine:!0}function LA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ou{constructor(e,t){this.shortDelay=e,this.longDelay=t,ni(t>e,"Short delay should be less than long delay!"),this.isMobile=$p()||YE()}get(){return OA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xp(n,e){ni(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class sw{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const MA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],VA=new ou(3e4,6e4);function as(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function li(n,e,t,r,o={}){return ow(n,o,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=ya({key:n.config.apiKey,...u}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const _={method:e,headers:p,...a};return rC()||(_.referrerPolicy="no-referrer"),n.emulatorConfig&&os(n.emulatorConfig.host)&&(_.credentials="include"),sw.fetch()(await aw(n,n.config.apiHost,t,d),_)})}async function ow(n,e,t){n._canInitEmulator=!1;const r={...MA,...e};try{const o=new UA(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw bc(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[p,_]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw bc(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw bc(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw bc(n,"user-disabled",u);const E=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Qp(n,E,_);bn(n,E)}}catch(o){if(o instanceof oi)throw o;bn(n,"network-request-failed",{message:String(o)})}}async function au(n,e,t,r,o={}){const a=await li(n,e,t,r,o);return"mfaPendingCredential"in a&&bn(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function aw(n,e,t,r){const o=`${e}${t}?${r}`,a=n,u=a.config.emulator?Xp(n.config,o):`${n.config.apiScheme}://${o}`;return bA.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function FA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class UA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Jn(this.auth,"network-request-failed")),VA.get())})}}function bc(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const o=Jn(n,e,r);return o.customData._tokenResponse=t,o}function Vy(n){return n!==void 0&&n.enterprise!==void 0}class jA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return FA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function zA(n,e){return li(n,"GET","/v2/recaptchaConfig",as(n,e))}/**
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
 */async function BA(n,e){return li(n,"POST","/v1/accounts:delete",e)}async function ah(n,e){return li(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ml(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WA(n,e=!1){const t=Rt(n),r=await t.getIdToken(e),o=Jp(r);me(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,u=a?.sign_in_provider;return{claims:o,token:r,authTime:Ml(zf(o.auth_time)),issuedAtTime:Ml(zf(o.iat)),expirationTime:Ml(zf(o.exp)),signInProvider:u||null,signInSecondFactor:a?.sign_in_second_factor||null}}function zf(n){return Number(n)*1e3}function Jp(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Hc("JWT malformed, contained fewer than 3 sections"),null;try{const o=rh(t);return o?JSON.parse(o):(Hc("Failed to decode base64 JWT payload"),null)}catch(o){return Hc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Fy(n){const e=Jp(n);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function la(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof oi&&HA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function HA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class qA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ml(this.lastLoginAt),this.creationTime=Ml(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lh(n){const e=n.auth,t=await n.getIdToken(),r=await la(n,ah(e,{idToken:t}));me(r?.users.length,e,"internal-error");const o=r.users[0];n._notifyReloadListener(o);const a=o.providerUserInfo?.length?lw(o.providerUserInfo):[],u=GA(n.providerData,a),d=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!u?.length,_=d?p:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new lp(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(n,E)}async function $A(n){const e=Rt(n);await lh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GA(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function lw(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function KA(n,e){const t=await ow(n,{},async()=>{const r=ya({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,u=await aw(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:r};return n.emulatorConfig&&os(n.emulatorConfig.host)&&(p.credentials="include"),sw.fetch()(u,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function QA(n,e){return li(n,"POST","/v2/accounts:revokeToken",as(n,e))}/**
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
 */class ea{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){me(e.length!==0,"internal-error");const t=Fy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:a}=await KA(e,t);this.updateTokensAndExpiration(r,o,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:a}=t,u=new ea;return r&&(me(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),o&&(me(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),a&&(me(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ea,this.toJSON())}_performRefresh(){return Kr("not implemented")}}/**
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
 */function Ui(n,e){me(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Qn{constructor({uid:e,auth:t,stsTokenManager:r,...o}){this.providerId="firebase",this.proactiveRefresh=new qA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new lp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await la(this,this.stsTokenManager.getToken(this.auth,e));return me(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return WA(this,e)}reload(){return $A(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await lh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(Xr(this.auth));const e=await this.getIdToken();return await la(this,BA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,o=t.email??void 0,a=t.phoneNumber??void 0,u=t.photoURL??void 0,d=t.tenantId??void 0,p=t._redirectEventId??void 0,_=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:w,emailVerified:I,isAnonymous:V,providerData:z,stsTokenManager:G}=t;me(w&&G,e,"internal-error");const W=ea.fromJSON(this.name,G);me(typeof w=="string",e,"internal-error"),Ui(r,e.name),Ui(o,e.name),me(typeof I=="boolean",e,"internal-error"),me(typeof V=="boolean",e,"internal-error"),Ui(a,e.name),Ui(u,e.name),Ui(d,e.name),Ui(p,e.name),Ui(_,e.name),Ui(E,e.name);const fe=new Qn({uid:w,auth:e,email:o,emailVerified:I,displayName:r,isAnonymous:V,photoURL:u,phoneNumber:a,tenantId:d,stsTokenManager:W,createdAt:_,lastLoginAt:E});return z&&Array.isArray(z)&&(fe.providerData=z.map(pe=>({...pe}))),p&&(fe._redirectEventId=p),fe}static async _fromIdTokenResponse(e,t,r=!1){const o=new ea;o.updateFromServerResponse(t);const a=new Qn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await lh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const o=t.users[0];me(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?lw(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!a?.length,d=new ea;d.updateFromIdToken(r);const p=new Qn({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:u}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new lp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!a?.length};return Object.assign(p,_),p}}/**
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
 */const Uy=new Map;function Qr(n){ni(n instanceof Function,"Expected a class definition");let e=Uy.get(n);return e?(ni(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Uy.set(n,e),e)}/**
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
 */class uw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}uw.type="NONE";const jy=uw;/**
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
 */function qc(n,e,t){return`firebase:${n}:${e}:${t}`}class ta{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:a}=this.auth;this.fullUserKey=qc(this.userKey,o.apiKey,a),this.fullPersistenceKey=qc("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ah(this.auth,{idToken:e}).catch(()=>{});return t?Qn._fromGetAccountInfoResponse(this.auth,t,e):null}return Qn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ta(Qr(jy),e,r);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let a=o[0]||Qr(jy);const u=qc(r,e.config.apiKey,e.name);let d=null;for(const _ of t)try{const E=await _._get(u);if(E){let w;if(typeof E=="string"){const I=await ah(e,{idToken:E}).catch(()=>{});if(!I)break;w=await Qn._fromGetAccountInfoResponse(e,I,E)}else w=Qn._fromJSON(e,E);_!==a&&(d=w),a=_;break}}catch{}const p=o.filter(_=>_._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new ta(a,e,r):(a=p[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async _=>{if(_!==a)try{await _._remove(u)}catch{}})),new ta(a,e,r))}}/**
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
 */function zy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mw(e))return"Blackberry";if(gw(e))return"Webos";if(hw(e))return"Safari";if((e.includes("chrome/")||dw(e))&&!e.includes("edge/"))return"Chrome";if(pw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function cw(n=tn()){return/firefox\//i.test(n)}function hw(n=tn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dw(n=tn()){return/crios\//i.test(n)}function fw(n=tn()){return/iemobile/i.test(n)}function pw(n=tn()){return/android/i.test(n)}function mw(n=tn()){return/blackberry/i.test(n)}function gw(n=tn()){return/webos/i.test(n)}function Zp(n=tn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function YA(n=tn()){return Zp(n)&&!!window.navigator?.standalone}function XA(){return sC()&&document.documentMode===10}function _w(n=tn()){return Zp(n)||pw(n)||gw(n)||mw(n)||/windows phone/i.test(n)||fw(n)}/**
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
 */function yw(n,e=[]){let t;switch(n){case"Browser":t=zy(tn());break;case"Worker":t=`${zy(tn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xs}/${r}`}/**
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
 */class JA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const p=e(a);u(p)}catch(p){d(p)}});r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function ZA(n,e={}){return li(n,"GET","/v2/passwordPolicy",as(n,e))}/**
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
 */const eR=6;class tR{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??eR,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class nR{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new By(this),this.idTokenSubscription=new By(this),this.beforeStateQueue=new JA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ta.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ah(this,{idToken:e}),r=await Qn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(fn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,u=r?._redirectEventId,d=await this.tryRedirectSignIn(e);(!a||a===u)&&d?.user&&(r=d.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await lh(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(Xr(this));const t=e?Rt(e):null;return t&&me(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(Xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(Xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ZA(this),t=new tR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new su("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await QA(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qr(e)||this._popupRedirectResolver;me(t,this,"argument-error"),this.redirectPersistenceManager=await ta.create(this,[Qr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,o);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(fn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&NA(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ls(n){return Rt(n)}class By{constructor(e){this.auth=e,this.observer=null,this.addObserver=gC(t=>this.observer=t)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rR(n){Mh=n}function vw(n){return Mh.loadJS(n)}function iR(){return Mh.recaptchaEnterpriseScript}function sR(){return Mh.gapiScript}function oR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class aR{constructor(){this.enterprise=new lR}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class lR{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const uR="recaptcha-enterprise",Ew="NO_RECAPTCHA";class cR{constructor(e){this.type=uR,this.auth=ls(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{zA(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const _=new jA(p);return a.tenantId==null?a._agentRecaptchaConfig=_:a._tenantRecaptchaConfigs[a.tenantId]=_,u(_.siteKey)}}).catch(p=>{d(p)})})}function o(a,u,d){const p=window.grecaptcha;Vy(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:e}).then(_=>{u(_)}).catch(()=>{u(Ew)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new aR().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&Vy(window.grecaptcha))o(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=iR();p.length!==0&&(p+=d),vw(p).then(()=>{o(d,a,u)}).catch(_=>{u(_)})}}).catch(d=>{u(d)})})}}async function Wy(n,e,t,r=!1,o=!1){const a=new cR(n);let u;if(o)u=Ew;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,_=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:_,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function up(n,e,t,r,o){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Wy(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Wy(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(a)})}/**
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
 */function hR(n,e){const t=Lh(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(Xi(a,e??{}))return o;bn(o,"already-initialized")}return t.initialize({options:e})}function dR(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Qr);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function fR(n,e,t){const r=ls(n);me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,a=ww(e),{host:u,port:d}=pR(e),p=d===null?"":`:${d}`,_={url:`${a}//${u}${p}/`},E=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){me(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),me(Xi(_,r.config.emulator)&&Xi(E,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=_,r.emulatorConfig=E,r.settings.appVerificationDisabledForTesting=!0,os(u)?(Hp(`${a}//${u}${p}`),qp("Auth",!0)):mR()}function ww(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function pR(n){const e=ww(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const a=o[1];return{host:a,port:Hy(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:Hy(u)}}}function Hy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function mR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class em{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Kr("not implemented")}_getIdTokenResponse(e){return Kr("not implemented")}_linkToIdToken(e,t){return Kr("not implemented")}_getReauthenticationResolver(e){return Kr("not implemented")}}async function gR(n,e){return li(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function _R(n,e){return au(n,"POST","/v1/accounts:signInWithPassword",as(n,e))}/**
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
 */async function yR(n,e){return au(n,"POST","/v1/accounts:signInWithEmailLink",as(n,e))}async function vR(n,e){return au(n,"POST","/v1/accounts:signInWithEmailLink",as(n,e))}/**
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
 */class $l extends em{constructor(e,t,r,o=null){super("password",r),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new $l(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new $l(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return up(e,t,"signInWithPassword",_R);case"emailLink":return yR(e,{email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return up(e,r,"signUpPassword",gR);case"emailLink":return vR(e,{idToken:t,email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function na(n,e){return au(n,"POST","/v1/accounts:signInWithIdp",as(n,e))}/**
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
 */const ER="http://localhost";class Hs extends em{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):bn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o,...a}=t;if(!r||!o)return null;const u=new Hs(r,o);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return na(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,na(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,na(e,t)}buildRequest(){const e={requestUri:ER,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ya(t)}return e}}/**
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
 */function wR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TR(n){const e=Rl(kl(n)).link,t=e?Rl(kl(e)).deep_link_id:null,r=Rl(kl(n)).deep_link_id;return(r?Rl(kl(r)).link:null)||r||t||e||n}class tm{constructor(e){const t=Rl(kl(e)),r=t.apiKey??null,o=t.oobCode??null,a=wR(t.mode??null);me(r&&o&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=TR(e);try{return new tm(t)}catch{return null}}}/**
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
 */class va{constructor(){this.providerId=va.PROVIDER_ID}static credential(e,t){return $l._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=tm.parseLink(t);return me(r,"argument-error"),$l._fromEmailAndCode(e,r.code,r.tenantId)}}va.PROVIDER_ID="password";va.EMAIL_PASSWORD_SIGN_IN_METHOD="password";va.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class nm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class lu extends nm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ji extends lu{constructor(){super("facebook.com")}static credential(e){return Hs._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ji.credential(e.oauthAccessToken)}catch{return null}}}ji.FACEBOOK_SIGN_IN_METHOD="facebook.com";ji.PROVIDER_ID="facebook.com";/**
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
 */class Gr extends lu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Hs._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Gr.credential(t,r)}catch{return null}}}Gr.GOOGLE_SIGN_IN_METHOD="google.com";Gr.PROVIDER_ID="google.com";/**
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
 */class zi extends lu{constructor(){super("github.com")}static credential(e){return Hs._fromParams({providerId:zi.PROVIDER_ID,signInMethod:zi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zi.credentialFromTaggedObject(e)}static credentialFromError(e){return zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zi.credential(e.oauthAccessToken)}catch{return null}}}zi.GITHUB_SIGN_IN_METHOD="github.com";zi.PROVIDER_ID="github.com";/**
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
 */class Bi extends lu{constructor(){super("twitter.com")}static credential(e,t){return Hs._fromParams({providerId:Bi.PROVIDER_ID,signInMethod:Bi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Bi.credentialFromTaggedObject(e)}static credentialFromError(e){return Bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Bi.credential(t,r)}catch{return null}}}Bi.TWITTER_SIGN_IN_METHOD="twitter.com";Bi.PROVIDER_ID="twitter.com";/**
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
 */async function IR(n,e){return au(n,"POST","/v1/accounts:signUp",as(n,e))}/**
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
 */class qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const a=await Qn._fromIdTokenResponse(e,r,o),u=qy(r);return new qs({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=qy(r);return new qs({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function qy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class uh extends oi{constructor(e,t,r,o){super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,uh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new uh(e,t,r,o)}}function Tw(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?uh._fromErrorAndOperation(n,a,e,r):a})}async function SR(n,e,t=!1){const r=await la(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return qs._forOperation(n,"link",r)}/**
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
 */async function CR(n,e,t=!1){const{auth:r}=n;if(fn(r.app))return Promise.reject(Xr(r));const o="reauthenticate";try{const a=await la(n,Tw(r,o,e,n),t);me(a.idToken,r,"internal-error");const u=Jp(a.idToken);me(u,r,"internal-error");const{sub:d}=u;return me(n.uid===d,r,"user-mismatch"),qs._forOperation(n,o,a)}catch(a){throw a?.code==="auth/user-not-found"&&bn(r,"user-mismatch"),a}}/**
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
 */async function Iw(n,e,t=!1){if(fn(n.app))return Promise.reject(Xr(n));const r="signIn",o=await Tw(n,r,e),a=await qs._fromIdTokenResponse(n,r,o);return t||await n._updateCurrentUser(a.user),a}async function AR(n,e){return Iw(ls(n),e)}/**
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
 */async function Sw(n){const e=ls(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function RR(n,e,t){if(fn(n.app))return Promise.reject(Xr(n));const r=ls(n),u=await up(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",IR).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Sw(n),p}),d=await qs._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function kR(n,e,t){return fn(n.app)?Promise.reject(Xr(n)):AR(Rt(n),va.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Sw(n),r})}/**
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
 */async function PR(n,e){return li(n,"POST","/v1/accounts:update",e)}/**
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
 */async function NR(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Rt(n),a={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await la(r,PR(r.auth,a));r.displayName=u.displayName||null,r.photoURL=u.photoUrl||null;const d=r.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=r.displayName,d.photoURL=r.photoURL),await r._updateTokensIfNecessary(u)}function DR(n,e,t,r){return Rt(n).onIdTokenChanged(e,t,r)}function xR(n,e,t){return Rt(n).beforeAuthStateChanged(e,t)}function Cw(n,e,t,r){return Rt(n).onAuthStateChanged(e,t,r)}function OR(n){return Rt(n).signOut()}const ch="__sak";/**
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
 */class Aw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ch,"1"),this.storage.removeItem(ch),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const LR=1e3,MR=10;class Rw extends Aw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_w(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,p)=>{this.notifyListeners(u,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);XA()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,MR):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},LR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rw.type="LOCAL";const bR=Rw;/**
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
 */class kw extends Aw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}kw.type="SESSION";const Pw=kw;/**
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
 */function VR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class bh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const r=new bh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:a}=t.data,u=this.handlersMap[o];if(!u?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const d=Array.from(u).map(async _=>_(t.origin,a)),p=await VR(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bh.receivers=[];/**
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
 */function rm(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class FR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,u;return new Promise((d,p)=>{const _=rm("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},r);u={messageChannel:o,onMessage(w){const I=w;if(I.data.eventId===_)switch(I.data.status){case"ack":clearTimeout(E),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(I.data.response);break;default:clearTimeout(E),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Ir(){return window}function UR(n){Ir().location.href=n}/**
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
 */function Nw(){return typeof Ir().WorkerGlobalScope<"u"&&typeof Ir().importScripts=="function"}async function jR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zR(){return navigator?.serviceWorker?.controller||null}function BR(){return Nw()?self:null}/**
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
 */const Dw="firebaseLocalStorageDb",WR=1,hh="firebaseLocalStorage",xw="fbase_key";class uu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vh(n,e){return n.transaction([hh],e?"readwrite":"readonly").objectStore(hh)}function HR(){const n=indexedDB.deleteDatabase(Dw);return new uu(n).toPromise()}function cp(){const n=indexedDB.open(Dw,WR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(hh,{keyPath:xw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(hh)?e(r):(r.close(),await HR(),e(await cp()))})})}async function $y(n,e,t){const r=Vh(n,!0).put({[xw]:e,value:t});return new uu(r).toPromise()}async function qR(n,e){const t=Vh(n,!1).get(e),r=await new uu(t).toPromise();return r===void 0?null:r.value}function Gy(n,e){const t=Vh(n,!0).delete(e);return new uu(t).toPromise()}const $R=800,GR=3;class Ow{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>GR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bh._getInstance(BR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await jR(),!this.activeServiceWorker)return;this.sender=new FR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cp();return await $y(e,ch,"1"),await Gy(e,ch),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>$y(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>qR(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Gy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=Vh(o,!1).getAll();return new uu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$R)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ow.type="LOCAL";const KR=Ow;new ou(3e4,6e4);/**
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
 */function Lw(n,e){return e?Qr(e):(me(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class im extends em{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return na(e,this._buildIdpRequest())}_linkToIdToken(e,t){return na(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return na(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function QR(n){return Iw(n.auth,new im(n),n.bypassAuthState)}function YR(n){const{auth:e,user:t}=n;return me(t,e,"internal-error"),CR(t,new im(n),n.bypassAuthState)}async function XR(n){const{auth:e,user:t}=n;return me(t,e,"internal-error"),SR(t,new im(n),n.bypassAuthState)}/**
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
 */class Mw{constructor(e,t,r,o,a=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QR;case"linkViaPopup":case"linkViaRedirect":return XR;case"reauthViaPopup":case"reauthViaRedirect":return YR;default:bn(this.auth,"internal-error")}}resolve(e){ni(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ni(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const JR=new ou(2e3,1e4);async function ZR(n,e,t){if(fn(n.app))return Promise.reject(Jn(n,"operation-not-supported-in-this-environment"));const r=ls(n);DA(n,e,nm);const o=Lw(r,t);return new Us(r,"signInViaPopup",e,o).executeNotNull()}class Us extends Mw{constructor(e,t,r,o,a){super(e,t,o,a),this.provider=r,this.authWindow=null,this.pollId=null,Us.currentPopupAction&&Us.currentPopupAction.cancel(),Us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){ni(this.filter.length===1,"Popup operations only handle one event");const e=rm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Us.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JR.get())};e()}}Us.currentPopupAction=null;/**
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
 */const e1="pendingRedirect",$c=new Map;class t1 extends Mw{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=$c.get(this.auth._key());if(!e){try{const r=await n1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}$c.set(this.auth._key(),e)}return this.bypassAuthState||$c.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function n1(n,e){const t=s1(e),r=i1(n);if(!await r._isAvailable())return!1;const o=await r._get(t)==="true";return await r._remove(t),o}function r1(n,e){$c.set(n._key(),e)}function i1(n){return Qr(n._redirectPersistence)}function s1(n){return qc(e1,n.config.apiKey,n.name)}async function o1(n,e,t=!1){if(fn(n.app))return Promise.reject(Xr(n));const r=ls(n),o=Lw(r,e),u=await new t1(r,o,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const a1=600*1e3;class l1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!u1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!bw(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Jn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=a1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ky(e))}saveEventToCache(e){this.cachedEventUids.add(Ky(e)),this.lastProcessedEventTime=Date.now()}}function Ky(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function bw({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function u1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bw(n);default:return!1}}/**
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
 */async function c1(n,e={}){return li(n,"GET","/v1/projects",e)}/**
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
 */const h1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,d1=/^https?/;async function f1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await c1(n);for(const t of e)try{if(p1(t))return}catch{}bn(n,"unauthorized-domain")}function p1(n){const e=ap(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!d1.test(t))return!1;if(h1.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const m1=new ou(3e4,6e4);function Qy(){const n=Ir().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function g1(n){return new Promise((e,t)=>{function r(){Qy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qy(),t(Jn(n,"network-request-failed"))},timeout:m1.get()})}if(Ir().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Ir().gapi?.load)r();else{const o=oR("iframefcb");return Ir()[o]=()=>{gapi.load?r():t(Jn(n,"network-request-failed"))},vw(`${sR()}?onload=${o}`).catch(a=>t(a))}}).catch(e=>{throw Gc=null,e})}let Gc=null;function _1(n){return Gc=Gc||g1(n),Gc}/**
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
 */const y1=new ou(5e3,15e3),v1="__/auth/iframe",E1="emulator/auth/iframe",w1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},T1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function I1(n){const e=n.config;me(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xp(e,E1):`https://${n.config.authDomain}/${v1}`,r={apiKey:e.apiKey,appName:n.name,v:Xs},o=T1.get(n.config.apiHost);o&&(r.eid=o);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${ya(r).slice(1)}`}async function S1(n){const e=await _1(n),t=Ir().gapi;return me(t,n,"internal-error"),e.open({where:document.body,url:I1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:w1,dontclear:!0},r=>new Promise(async(o,a)=>{await r.restyle({setHideOnLeave:!1});const u=Jn(n,"network-request-failed"),d=Ir().setTimeout(()=>{a(u)},y1.get());function p(){Ir().clearTimeout(d),o(r)}r.ping(p).then(p,()=>{a(u)})}))}/**
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
 */const C1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},A1=500,R1=600,k1="_blank",P1="http://localhost";class Yy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N1(n,e,t,r=A1,o=R1){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const p={...C1,width:r.toString(),height:o.toString(),top:a,left:u},_=tn().toLowerCase();t&&(d=dw(_)?k1:t),cw(_)&&(e=e||P1,p.scrollbars="yes");const E=Object.entries(p).reduce((I,[V,z])=>`${I}${V}=${z},`,"");if(YA(_)&&d!=="_self")return D1(e||"",d),new Yy(null);const w=window.open(e||"",d,E);me(w,n,"popup-blocked");try{w.focus()}catch{}return new Yy(w)}function D1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const x1="__/auth/handler",O1="emulator/auth/handler",L1=encodeURIComponent("fac");async function Xy(n,e,t,r,o,a){me(n.config.authDomain,n,"auth-domain-config-required"),me(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Xs,eventId:o};if(e instanceof nm){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",tp(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,w]of Object.entries({}))u[E]=w}if(e instanceof lu){const E=e.getScopes().filter(w=>w!=="");E.length>0&&(u.scopes=E.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const E of Object.keys(d))d[E]===void 0&&delete d[E];const p=await n._getAppCheckToken(),_=p?`#${L1}=${encodeURIComponent(p)}`:"";return`${M1(n)}?${ya(d).slice(1)}${_}`}function M1({config:n}){return n.emulator?Xp(n,O1):`https://${n.authDomain}/${x1}`}/**
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
 */const Bf="webStorageSupport";class b1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pw,this._completeRedirectFn=o1,this._overrideRedirectResult=r1}async _openPopup(e,t,r,o){ni(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await Xy(e,t,r,ap(),o);return N1(e,a,rm())}async _openRedirect(e,t,r,o){await this._originValidation(e);const a=await Xy(e,t,r,ap(),o);return UR(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(ni(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await S1(e),r=new l1(e);return t.register("authEvent",o=>(me(o?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Bf,{type:Bf},o=>{const a=o?.[0]?.[Bf];a!==void 0&&t(!!a),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=f1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _w()||hw()||Zp()}}const V1=b1;var Jy="@firebase/auth",Zy="1.11.1";/**
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
 */class F1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function U1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function j1(n){Ws(new Ji("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;me(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yw(n)},_=new nR(r,o,a,p);return dR(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ws(new Ji("auth-internal",e=>{const t=ls(e.getProvider("auth").getImmediate());return(r=>new F1(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tr(Jy,Zy,U1(n)),Tr(Jy,Zy,"esm2020")}/**
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
 */const z1=300,B1=KE("authIdTokenMaxAge")||z1;let ev=null;const W1=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>B1)return;const o=t?.token;ev!==o&&(ev=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function H1(n=Kp()){const e=Lh(n,"auth");if(e.isInitialized())return e.getImmediate();const t=hR(n,{popupRedirectResolver:V1,persistence:[KR,bR,Pw]}),r=KE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=W1(a.toString());xR(t,u,()=>u(t.currentUser)),DR(t,d=>u(d))}}const o=qE("auth");return o&&fR(t,`http://${o}`),t}function q1(){return document.getElementsByTagName("head")?.[0]??document}rR({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const a=Jn("internal-error");a.customData=o,t(a)},r.type="text/javascript",r.charset="UTF-8",q1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});j1("Browser");var $1="firebase",G1="12.6.0";/**
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
 */Tr($1,G1,"app");var tv={};const nv="@firebase/database",rv="1.1.0";/**
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
 */let Vw="";function K1(n){Vw=n}/**
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
 */class Q1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),jt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Hl(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Y1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ai(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Fw=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Q1(e)}}catch{}return new Y1},js=Fw("localStorage"),X1=Fw("sessionStorage");/**
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
 */const ra=new Oh("@firebase/database"),J1=(function(){let n=1;return function(){return n++}})(),Uw=function(n){const e=EC(n),t=new mC;t.update(e);const r=t.digest();return Bp.encodeByteArray(r)},cu=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=cu.apply(null,r):typeof r=="object"?e+=jt(r):e+=r,e+=" "}return e};let bl=null,iv=!0;const Z1=function(n,e){Z(!0,"Can't turn on custom loggers persistently."),ra.logLevel=Ce.VERBOSE,bl=ra.log.bind(ra)},Xt=function(...n){if(iv===!0&&(iv=!1,bl===null&&X1.get("logging_enabled")===!0&&Z1()),bl){const e=cu.apply(null,n);bl(e)}},hu=function(n){return function(...e){Xt(n,...e)}},hp=function(...n){const e="FIREBASE INTERNAL ERROR: "+cu(...n);ra.error(e)},ri=function(...n){const e=`FIREBASE FATAL ERROR: ${cu(...n)}`;throw ra.error(e),new Error(e)},Sn=function(...n){const e="FIREBASE WARNING: "+cu(...n);ra.warn(e)},ek=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Sn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},jw=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},tk=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ua="[MIN_NAME]",$s="[MAX_NAME]",Ea=function(n,e){if(n===e)return 0;if(n===ua||e===$s)return-1;if(e===ua||n===$s)return 1;{const t=sv(n),r=sv(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},nk=function(n,e){return n===e?0:n<e?-1:1},Il=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+jt(e))},sm=function(n){if(typeof n!="object"||n===null)return jt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=jt(e[r]),t+=":",t+=sm(n[e[r]]);return t+="}",t},zw=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let o=0;o<t;o+=e)o+e>t?r.push(n.substring(o,t)):r.push(n.substring(o,o+e));return r};function Vn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Bw=function(n){Z(!jw(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let o,a,u,d,p;n===0?(a=0,u=0,o=1/n===-1/0?1:0):(o=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const _=[];for(p=t;p;p-=1)_.push(u%2?1:0),u=Math.floor(u/2);for(p=e;p;p-=1)_.push(a%2?1:0),a=Math.floor(a/2);_.push(o?1:0),_.reverse();const E=_.join("");let w="";for(p=0;p<64;p+=8){let I=parseInt(E.substr(p,8),2).toString(16);I.length===1&&(I="0"+I),w=w+I}return w.toLowerCase()},rk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ik=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},sk=new RegExp("^-?(0*)\\d{1,10}$"),ok=-2147483648,ak=2147483647,sv=function(n){if(sk.test(n)){const e=Number(n);if(e>=ok&&e<=ak)return e}return null},du=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Sn("Exception was thrown by user callback.",t),e},Math.floor(0))}},lk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Vl=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class uk{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,fn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Sn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ck{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Xt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Sn(e)}}class Kc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Kc.OWNER="owner";/**
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
 */const om="5",Ww="v",Hw="s",qw="r",$w="f",Gw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Kw="ls",Qw="p",dp="ac",Yw="websocket",Xw="long_polling";/**
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
 */class Jw{constructor(e,t,r,o,a=!1,u="",d=!1,p=!1,_=null){this.secure=t,this.namespace=r,this.webSocketOnly=o,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=_,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=js.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&js.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function hk(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Zw(n,e,t){Z(typeof e=="string","typeof type must == string"),Z(typeof t=="object","typeof params must == object");let r;if(e===Yw)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Xw)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hk(n)&&(t.ns=n.namespace);const o=[];return Vn(t,(a,u)=>{o.push(a+"="+u)}),r+o.join("&")}/**
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
 */class dk{constructor(){this.counters_={}}incrementCounter(e,t=1){ai(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return K0(this.counters_)}}/**
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
 */const Wf={},Hf={};function am(n){const e=n.toString();return Wf[e]||(Wf[e]=new dk),Wf[e]}function fk(n,e){const t=n.toString();return Hf[t]||(Hf[t]=e()),Hf[t]}/**
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
 */class pk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<r.length;++o)r[o]&&du(()=>{this.onMessage_(r[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ov="start",mk="close",gk="pLPCommand",_k="pRTLPCB",eT="id",tT="pw",nT="ser",yk="cb",vk="seg",Ek="ts",wk="d",Tk="dframe",rT=1870,iT=30,Ik=rT-iT,Sk=25e3,Ck=3e4;class Jo{constructor(e,t,r,o,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=o,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=hu(e),this.stats_=am(t),this.urlFn=p=>(this.appCheckToken&&(p[dp]=this.appCheckToken),Zw(t,Xw,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new pk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ck)),tk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new lm((...a)=>{const[u,d,p,_,E]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===ov)this.id=d,this.password=p;else if(u===mk)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[ov]="t",r[nT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[yk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Ww]=om,this.transportSessionId&&(r[Hw]=this.transportSessionId),this.lastSessionId&&(r[Kw]=this.lastSessionId),this.applicationId&&(r[Qw]=this.applicationId),this.appCheckToken&&(r[dp]=this.appCheckToken),typeof location<"u"&&location.hostname&&Gw.test(location.hostname)&&(r[qw]=$w);const o=this.urlFn(r);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jo.forceAllow_=!0}static forceDisallow(){Jo.forceDisallow_=!0}static isAvailable(){return Jo.forceAllow_?!0:!Jo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rk()&&!ik()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=WE(t),o=zw(r,Ik);for(let a=0;a<o.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[Tk]="t",r[eT]=e,r[tT]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=jt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class lm{constructor(e,t,r,o){this.onDisconnect=r,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=J1(),window[gk+this.uniqueCallbackIdentifier]=e,window[_k+this.uniqueCallbackIdentifier]=t,this.myIFrame=lm.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){Xt("frame writing exception"),d.stack&&Xt(d.stack),Xt(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Xt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[eT]=this.myID,e[tT]=this.myPW,e[nT]=this.currentSerial;let t=this.urlFn(e),r="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+iT+r.length<=rT;){const u=this.pendingSegs.shift();r=r+"&"+vk+o+"="+u.seg+"&"+Ek+o+"="+u.ts+"&"+wk+o+"="+u.d,o++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},o=setTimeout(r,Math.floor(Sk)),a=()=>{clearTimeout(o),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const o=r.readyState;(!o||o==="loaded"||o==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Xt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Ak=16384,Rk=45e3;let dh=null;typeof MozWebSocket<"u"?dh=MozWebSocket:typeof WebSocket<"u"&&(dh=WebSocket);class Kn{constructor(e,t,r,o,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=o,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=hu(this.connId),this.stats_=am(t),this.connURL=Kn.connectionURL_(t,u,d,o,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,o,a){const u={};return u[Ww]=om,typeof location<"u"&&location.hostname&&Gw.test(location.hostname)&&(u[qw]=$w),t&&(u[Hw]=t),r&&(u[Kw]=r),o&&(u[dp]=o),a&&(u[Qw]=a),Zw(e,Yw,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,js.set("previous_websocket_failure",!0);try{let r;oC(),this.mySock=new dh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){Kn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&dh!==null&&!Kn.forceDisallow_}static previouslyFailed(){return js.isInMemoryStorage||js.get("previous_websocket_failure")===!0}markConnectionHealthy(){js.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Hl(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Z(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=zw(t,Ak);r.length>1&&this.sendString_(String(r.length));for(let o=0;o<r.length;o++)this.sendString_(r[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Rk))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kn.responsesRequiredToBeHealthy=2;Kn.healthyTimeout=3e4;/**
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
 */class Gl{static get ALL_TRANSPORTS(){return[Jo,Kn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Kn&&Kn.isAvailable();let r=t&&!Kn.previouslyFailed();if(e.webSocketOnly&&(t||Sn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Kn];else{const o=this.transports_=[];for(const a of Gl.ALL_TRANSPORTS)a&&a.isAvailable()&&o.push(a);Gl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Gl.globalTransportInitialized_=!1;/**
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
 */const kk=6e4,Pk=5e3,Nk=10*1024,Dk=100*1024,qf="t",av="d",xk="s",lv="r",Ok="e",uv="o",cv="a",hv="n",dv="p",Lk="h";class Mk{constructor(e,t,r,o,a,u,d,p,_,E){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=o,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=p,this.onKill_=_,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=hu("c:"+this.id+":"),this.transportManager_=new Gl(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Vl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Dk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Nk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qf in e){const t=e[qf];t===cv?this.upgradeIfSecondaryHealthy_():t===lv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===uv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Il("t",e),r=Il("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:dv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:cv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:hv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Il("t",e),r=Il("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Il(qf,e);if(av in e){const r=e[av];if(t===Lk){const o={...r};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(t===hv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===xk?this.onConnectionShutdown_(r):t===lv?this.onReset_(r):t===Ok?hp("Server Error: "+r):t===uv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hp("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),om!==r&&Sn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Vl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Vl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Pk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:dv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(js.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class sT{put(e,t,r,o){}merge(e,t,r,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class oT{constructor(e){this.allowedEvents_=e,this.listeners_={},Z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let o=0;o<r.length;o++)r[o].callback.apply(r[o].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const o=this.getInitialEvent(e);o&&t.apply(r,o)}off(e,t,r){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let a=0;a<o.length;a++)if(o[a].callback===t&&(!r||r===o[a].context)){o.splice(a,1);return}}validateEventType_(e){Z(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class fh extends oT{static getInstance(){return new fh}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$p()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return Z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const fv=32,pv=768;class it{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[r]=this.pieces_[o],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function qe(){return new it("")}function Me(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Zi(n){return n.pieces_.length-n.pieceNum_}function nt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new it(n.pieces_,e)}function aT(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function bk(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function lT(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function uT(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new it(e,0)}function Lt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof it)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&t.push(r[o])}return new it(t,0)}function De(n){return n.pieceNum_>=n.pieces_.length}function Mn(n,e){const t=Me(n),r=Me(e);if(t===null)return e;if(t===r)return Mn(nt(n),nt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function cT(n,e){if(Zi(n)!==Zi(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Yn(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Zi(n)>Zi(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class Vk{constructor(e,t){this.errorPrefix_=t,this.parts_=lT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=xh(this.parts_[r]);hT(this)}}function Fk(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=xh(e),hT(n)}function Uk(n){const e=n.parts_.pop();n.byteLength_-=xh(e),n.parts_.length>0&&(n.byteLength_-=1)}function hT(n){if(n.byteLength_>pv)throw new Error(n.errorPrefix_+"has a key path longer than "+pv+" bytes ("+n.byteLength_+").");if(n.parts_.length>fv)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fv+") or object contains a cycle "+Fs(n))}function Fs(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class um extends oT{static getInstance(){return new um}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return Z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Sl=1e3,jk=300*1e3,mv=30*1e3,zk=1.3,Bk=3e4,Wk="server_kill",gv=3;class Jr extends sT{constructor(e,t,r,o,a,u,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=o,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=Jr.nextPersistentConnectionId_++,this.log_=hu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Sl,this.maxReconnectDelay_=jk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");um.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const o=++this.requestNumber_,a={r:o,a:e,b:t};this.log_(jt(a)),Z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[o]=r)}get(e){this.initConnection_();const t=new Wp,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,o){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),Z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Z(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:o,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),o=t._queryIdentifier;this.log_("Listen on "+r+" for "+o);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const p=d.d,_=d.s;Jr.warnOnListenWarnings_(p,t),(this.listens.get(r)&&this.listens.get(r).get(o))===e&&(this.log_("listen response",d),_!=="ok"&&this.removeListen_(r,o),e.onComplete&&e.onComplete(_,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ai(e,"w")){const r=aa(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const o='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();Sn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||pC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=mv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=fC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,o=>{const a=o.s,u=o.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+o),Z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,o)&&this.connected_&&this.sendUnlisten_(r,o,e._queryObject,t)}sendUnlisten_(e,t,r,o){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";o&&(a.q=r,a.t=o),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,o){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{o&&setTimeout(()=>{o(u.s,u.d)},Math.floor(0))})}put(e,t,r,o){this.putInternal("p",e,t,r,o)}merge(e,t,r,o){this.putInternal("m",e,t,r,o)}putInternal(e,t,r,o,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:o}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+jt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):hp("Unrecognized action received from server: "+jt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Sl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Sl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Bk&&(this.reconnectDelay_=Sl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Jr.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const p=function(){d?d.close():(u=!0,r())},_=function(w){Z(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(w)};this.realtime_={close:p,sendRequest:_};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[w,I]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);u?Xt("getToken() completed but was canceled"):(Xt("getToken() completed. Creating connection."),this.authToken_=w&&w.accessToken,this.appCheckToken_=I&&I.token,d=new Mk(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,V=>{Sn(V+" ("+this.repoInfo_.toString()+")"),this.interrupt(Wk)},a))}catch(w){this.log_("Failed to get token: "+w),u||(this.repoInfo_.nodeAdmin&&Sn(w),p())}}}interrupt(e){Xt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Xt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],tp(this.interruptReasons_)&&(this.reconnectDelay_=Sl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>sm(a)).join("$"):r="default";const o=this.removeListen_(e,r);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,t){const r=new it(e).toString();let o;if(this.listens.has(r)){const a=this.listens.get(r);o=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else o=void 0;return o}onAuthRevoked_(e,t){Xt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=gv&&(this.reconnectDelay_=mv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Xt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=gv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Vw.replace(/\./g,"-")]=1,$p()?e["framework.cordova"]=1:YE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fh.getInstance().currentlyOnline();return tp(this.interruptReasons_)&&e}}Jr.nextPersistentConnectionId_=0;Jr.nextConnectionId_=0;/**
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
 */class be{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new be(e,t)}}/**
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
 */class Fh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new be(ua,e),o=new be(ua,t);return this.compare(r,o)!==0}minPost(){return be.MIN}}/**
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
 */let Vc;class dT extends Fh{static get __EMPTY_NODE(){return Vc}static set __EMPTY_NODE(e){Vc=e}compare(e,t){return Ea(e.name,t.name)}isDefinedOn(e){throw _a("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return be.MIN}maxPost(){return new be($s,Vc)}makePost(e,t){return Z(typeof e=="string","KeyIndex indexValue must always be a string."),new be(e,Vc)}toString(){return".key"}}const ia=new dT;/**
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
 */let Fc=class{constructor(e,t,r,o,a=null){this.isReverse_=o,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,o&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},In=class Pl{constructor(e,t,r,o,a){this.key=e,this.value=t,this.color=r??Pl.RED,this.left=o??Er.EMPTY_NODE,this.right=a??Er.EMPTY_NODE}copy(e,t,r,o,a){return new Pl(e??this.key,t??this.value,r??this.color,o??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const a=r(e,o.key);return a<0?o=o.copy(null,null,null,o.left.insert(e,t,r),null):a===0?o=o.copy(null,t,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Er.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,o;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Er.EMPTY_NODE;o=r.right.min_(),r=r.copy(o.key,o.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};In.RED=!0;In.BLACK=!1;class Hk{copy(e,t,r,o,a){return this}insert(e,t,r){return new In(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Er=class Qc{constructor(e,t=Qc.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Qc(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,In.BLACK,null,null))}remove(e){return new Qc(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,In.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,o=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return o?o.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(o=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Fc(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Fc(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Fc(this.root_,null,this.comparator_,!0,e)}};Er.EMPTY_NODE=new Hk;/**
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
 */function qk(n,e){return Ea(n.name,e.name)}function cm(n,e){return Ea(n,e)}/**
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
 */let fp;function $k(n){fp=n}const fT=function(n){return typeof n=="number"?"number:"+Bw(n):"string:"+n},pT=function(n){if(n.isLeafNode()){const e=n.val();Z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ai(e,".sv"),"Priority must be a string or number.")}else Z(n===fp||n.isEmpty(),"priority of unexpected type.");Z(n===fp||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let _v;class xt{static set __childrenNodeConstructor(e){_v=e}static get __childrenNodeConstructor(){return _v}constructor(e,t=xt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),pT(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return De(e)?this:Me(e)===".priority"?this.priorityNode_:xt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:xt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Me(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(Z(r!==".priority"||Zi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,xt.__childrenNodeConstructor.EMPTY_NODE.updateChild(nt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+fT(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Bw(this.value_):e+=this.value_,this.lazyHash_=Uw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xt.__childrenNodeConstructor?-1:(Z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,o=xt.VALUE_TYPE_ORDER.indexOf(t),a=xt.VALUE_TYPE_ORDER.indexOf(r);return Z(o>=0,"Unknown leaf type: "+t),Z(a>=0,"Unknown leaf type: "+r),o===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}xt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let mT,gT;function Gk(n){mT=n}function Kk(n){gT=n}class Qk extends Fh{compare(e,t){const r=e.node.getPriority(),o=t.node.getPriority(),a=r.compareTo(o);return a===0?Ea(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return be.MIN}maxPost(){return new be($s,new xt("[PRIORITY-POST]",gT))}makePost(e,t){const r=mT(e);return new be(t,new xt("[PRIORITY-POST]",r))}toString(){return".priority"}}const en=new Qk;/**
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
 */const Yk=Math.log(2);class Xk{constructor(e){const t=a=>parseInt(Math.log(a)/Yk,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const o=r(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ph=function(n,e,t,r){n.sort(e);const o=function(p,_){const E=_-p;let w,I;if(E===0)return null;if(E===1)return w=n[p],I=t?t(w):w,new In(I,w.node,In.BLACK,null,null);{const V=parseInt(E/2,10)+p,z=o(p,V),G=o(V+1,_);return w=n[V],I=t?t(w):w,new In(I,w.node,In.BLACK,z,G)}},a=function(p){let _=null,E=null,w=n.length;const I=function(z,G){const W=w-z,fe=w;w-=z;const pe=o(W+1,fe),ye=n[W],xe=t?t(ye):ye;V(new In(xe,ye.node,G,null,pe))},V=function(z){_?(_.left=z,_=z):(E=z,_=z)};for(let z=0;z<p.count;++z){const G=p.nextBitIsOne(),W=Math.pow(2,p.count-(z+1));G?I(W,In.BLACK):(I(W,In.BLACK),I(W,In.RED))}return E},u=new Xk(n.length),d=a(u);return new Er(r||e,d)};/**
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
 */let $f;const Go={};class Yr{static get Default(){return Z(Go&&en,"ChildrenNode.ts has not been loaded"),$f=$f||new Yr({".priority":Go},{".priority":en}),$f}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=aa(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Er?t:null}hasIndex(e){return ai(this.indexSet_,e.toString())}addIndex(e,t){Z(e!==ia,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let o=!1;const a=t.getIterator(be.Wrap);let u=a.getNext();for(;u;)o=o||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;o?d=ph(r,e.getCompare()):d=Go;const p=e.toString(),_={...this.indexSet_};_[p]=e;const E={...this.indexes_};return E[p]=d,new Yr(E,_)}addToIndexes(e,t){const r=ih(this.indexes_,(o,a)=>{const u=aa(this.indexSet_,a);if(Z(u,"Missing index implementation for "+a),o===Go)if(u.isDefinedOn(e.node)){const d=[],p=t.getIterator(be.Wrap);let _=p.getNext();for(;_;)_.name!==e.name&&d.push(_),_=p.getNext();return d.push(e),ph(d,u.getCompare())}else return Go;else{const d=t.get(e.name);let p=o;return d&&(p=p.remove(new be(e.name,d))),p.insert(e,e.node)}});return new Yr(r,this.indexSet_)}removeFromIndexes(e,t){const r=ih(this.indexes_,o=>{if(o===Go)return o;{const a=t.get(e.name);return a?o.remove(new be(e.name,a)):o}});return new Yr(r,this.indexSet_)}}/**
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
 */let Cl;class Be{static get EMPTY_NODE(){return Cl||(Cl=new Be(new Er(cm),null,Yr.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&pT(this.priorityNode_),this.children_.isEmpty()&&Z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Cl}updatePriority(e){return this.children_.isEmpty()?this:new Be(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Cl:t}}getChild(e){const t=Me(e);return t===null?this:this.getImmediateChild(t).getChild(nt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(Z(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new be(e,t);let o,a;t.isEmpty()?(o=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(o=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=o.isEmpty()?Cl:this.priorityNode_;return new Be(o,u,a)}}updateChild(e,t){const r=Me(e);if(r===null)return t;{Z(Me(e)!==".priority"||Zi(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(r).updateChild(nt(e),t);return this.updateImmediateChild(r,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,o=0,a=!0;if(this.forEachChild(en,(u,d)=>{t[u]=d.val(e),r++,a&&Be.INTEGER_REGEXP_.test(u)?o=Math.max(o,Number(u)):a=!1}),!e&&a&&o<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+fT(this.getPriority().val())+":"),this.forEachChild(en,(t,r)=>{const o=r.hash();o!==""&&(e+=":"+t+":"+o)}),this.lazyHash_=e===""?"":Uw(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const o=this.resolveIndex_(r);if(o){const a=o.getPredecessorKey(new be(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new be(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new be(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(o=>t(o.name,o.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,be.Wrap);let a=o.peek();for(;a!=null&&t.compare(a,e)<0;)o.getNext(),a=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,be.Wrap);let a=o.peek();for(;a!=null&&t.compare(a,e)>0;)o.getNext(),a=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fu?-1:0}withIndex(e){if(e===ia||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Be(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ia||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(en),o=t.getIterator(en);let a=r.getNext(),u=o.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=o.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===ia?null:this.indexMap_.get(e.toString())}}Be.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Jk extends Be{constructor(){super(new Er(cm),Be.EMPTY_NODE,Yr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Be.EMPTY_NODE}isEmpty(){return!1}}const fu=new Jk;Object.defineProperties(be,{MIN:{value:new be(ua,Be.EMPTY_NODE)},MAX:{value:new be($s,fu)}});dT.__EMPTY_NODE=Be.EMPTY_NODE;xt.__childrenNodeConstructor=Be;$k(fu);Kk(fu);/**
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
 */const Zk=!0;function Jt(n,e=null){if(n===null)return Be.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),Z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new xt(t,Jt(e))}if(!(n instanceof Array)&&Zk){const t=[];let r=!1;if(Vn(n,(u,d)=>{if(u.substring(0,1)!=="."){const p=Jt(d);p.isEmpty()||(r=r||!p.getPriority().isEmpty(),t.push(new be(u,p)))}}),t.length===0)return Be.EMPTY_NODE;const a=ph(t,qk,u=>u.name,cm);if(r){const u=ph(t,en.getCompare());return new Be(a,Jt(e),new Yr({".priority":u},{".priority":en}))}else return new Be(a,Jt(e),Yr.Default)}else{let t=Be.EMPTY_NODE;return Vn(n,(r,o)=>{if(ai(n,r)&&r.substring(0,1)!=="."){const a=Jt(o);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(Jt(e))}}Gk(Jt);/**
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
 */class eP extends Fh{constructor(e){super(),this.indexPath_=e,Z(!De(e)&&Me(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),o=this.extractChild(t.node),a=r.compareTo(o);return a===0?Ea(e.name,t.name):a}makePost(e,t){const r=Jt(e),o=Be.EMPTY_NODE.updateChild(this.indexPath_,r);return new be(t,o)}maxPost(){const e=Be.EMPTY_NODE.updateChild(this.indexPath_,fu);return new be($s,e)}toString(){return lT(this.indexPath_,0).join("/")}}/**
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
 */class tP extends Fh{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Ea(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return be.MIN}maxPost(){return be.MAX}makePost(e,t){const r=Jt(e);return new be(t,r)}toString(){return".value"}}const nP=new tP;/**
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
 */function rP(n){return{type:"value",snapshotNode:n}}function iP(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function sP(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function yv(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function oP(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class hm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=en}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ua}hasEnd(){return this.endSet_}getIndexEndValue(){return Z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$s}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===en}copy(){const e=new hm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vv(n){const e={};if(n.isDefault())return e;let t;if(n.index_===en?t="$priority":n.index_===nP?t="$value":n.index_===ia?t="$key":(Z(n.index_ instanceof eP,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=jt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=jt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+jt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=jt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+jt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ev(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==en&&(e.i=n.index_.toString()),e}/**
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
 */class mh extends sT{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(Z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,o){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.log_=hu("p:rest:"),this.listens_={}}listen(e,t,r,o){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=mh.getListenId_(e,r),d={};this.listens_[u]=d;const p=vv(e._queryParams);this.restRequest_(a+".json",p,(_,E)=>{let w=E;if(_===404&&(w=null,_=null),_===null&&this.onDataUpdate_(a,w,!1,r),aa(this.listens_,u)===d){let I;_?_===401?I="permission_denied":I="rest_error:"+_:I="ok",o(I,null)}})}unlisten(e,t){const r=mh.getListenId_(e,t);delete this.listens_[r]}get(e){const t=vv(e._queryParams),r=e._path.toString(),o=new Wp;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),o.resolve(d)):o.reject(new Error(d))}),o.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,a])=>{o&&o.accessToken&&(t.auth=o.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ya(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=Hl(d.responseText)}catch{Sn("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,p)}else d.status!==401&&d.status!==404&&Sn("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
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
 */class aP{constructor(){this.rootNode_=Be.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function gh(){return{value:null,children:new Map}}function _T(n,e,t){if(De(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Me(e);n.children.has(r)||n.children.set(r,gh());const o=n.children.get(r);e=nt(e),_T(o,e,t)}}function pp(n,e,t){n.value!==null?t(e,n.value):lP(n,(r,o)=>{const a=new it(e.toString()+"/"+r);pp(o,a,t)})}function lP(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class uP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Vn(this.last_,(r,o)=>{t[r]=t[r]-o}),this.last_=e,t}}/**
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
 */const wv=10*1e3,cP=30*1e3,hP=300*1e3;class dP{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new uP(e);const r=wv+(cP-wv)*Math.random();Vl(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Vn(e,(o,a)=>{a>0&&ai(this.statsToReport_,o)&&(t[o]=a,r=!0)}),r&&this.server_.reportStats(t),Vl(this.reportStats_.bind(this),Math.floor(Math.random()*2*hP))}}/**
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
 */var wr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wr||(wr={}));function yT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function vT(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ET(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class _h{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=wr.ACK_USER_WRITE,this.source=yT()}operationForChild(e){if(De(this.path)){if(this.affectedTree.value!=null)return Z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new it(e));return new _h(qe(),t,this.revert)}}else return Z(Me(this.path)===e,"operationForChild called for unrelated child."),new _h(nt(this.path),this.affectedTree,this.revert)}}/**
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
 */class Gs{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=wr.OVERWRITE}operationForChild(e){return De(this.path)?new Gs(this.source,qe(),this.snap.getImmediateChild(e)):new Gs(this.source,nt(this.path),this.snap)}}/**
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
 */class Kl{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=wr.MERGE}operationForChild(e){if(De(this.path)){const t=this.children.subtree(new it(e));return t.isEmpty()?null:t.value?new Gs(this.source,qe(),t.value):new Kl(this.source,qe(),t)}else return Z(Me(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Kl(this.source,nt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class dm{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(De(e))return this.isFullyInitialized()&&!this.filtered_;const t=Me(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function fP(n,e,t,r){const o=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(oP(u.childName,u.snapshotNode))}),Al(n,o,"child_removed",e,r,t),Al(n,o,"child_added",e,r,t),Al(n,o,"child_moved",a,r,t),Al(n,o,"child_changed",e,r,t),Al(n,o,"value",e,r,t),o}function Al(n,e,t,r,o,a){const u=r.filter(d=>d.type===t);u.sort((d,p)=>mP(n,d,p)),u.forEach(d=>{const p=pP(n,d,a);o.forEach(_=>{_.respondsTo(d.type)&&e.push(_.createEvent(p,n.query_))})})}function pP(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function mP(n,e,t){if(e.childName==null||t.childName==null)throw _a("Should only compare child_ events.");const r=new be(e.childName,e.snapshotNode),o=new be(t.childName,t.snapshotNode);return n.index_.compare(r,o)}/**
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
 */function wT(n,e){return{eventCache:n,serverCache:e}}function Fl(n,e,t,r){return wT(new dm(e,t,r),n.serverCache)}function TT(n,e,t,r){return wT(n.eventCache,new dm(e,t,r))}function mp(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ks(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Gf;const gP=()=>(Gf||(Gf=new Er(nk)),Gf);class tt{static fromObject(e){let t=new tt(null);return Vn(e,(r,o)=>{t=t.set(new it(r),o)}),t}constructor(e,t=gP()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:qe(),value:this.value};if(De(e))return null;{const r=Me(e),o=this.children.get(r);if(o!==null){const a=o.findRootMostMatchingPathAndValue(nt(e),t);return a!=null?{path:Lt(new it(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(De(e))return this;{const t=Me(e),r=this.children.get(t);return r!==null?r.subtree(nt(e)):new tt(null)}}set(e,t){if(De(e))return new tt(t,this.children);{const r=Me(e),a=(this.children.get(r)||new tt(null)).set(nt(e),t),u=this.children.insert(r,a);return new tt(this.value,u)}}remove(e){if(De(e))return this.children.isEmpty()?new tt(null):new tt(null,this.children);{const t=Me(e),r=this.children.get(t);if(r){const o=r.remove(nt(e));let a;return o.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,o),this.value===null&&a.isEmpty()?new tt(null):new tt(this.value,a)}else return this}}get(e){if(De(e))return this.value;{const t=Me(e),r=this.children.get(t);return r?r.get(nt(e)):null}}setTree(e,t){if(De(e))return t;{const r=Me(e),a=(this.children.get(r)||new tt(null)).setTree(nt(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new tt(this.value,u)}}fold(e){return this.fold_(qe(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((o,a)=>{r[o]=a.fold_(Lt(e,o),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,qe(),t)}findOnPath_(e,t,r){const o=this.value?r(t,this.value):!1;if(o)return o;if(De(e))return null;{const a=Me(e),u=this.children.get(a);return u?u.findOnPath_(nt(e),Lt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,qe(),t)}foreachOnPath_(e,t,r){if(De(e))return this;{this.value&&r(t,this.value);const o=Me(e),a=this.children.get(o);return a?a.foreachOnPath_(nt(e),Lt(t,o),r):new tt(null)}}foreach(e){this.foreach_(qe(),e)}foreach_(e,t){this.children.inorderTraversal((r,o)=>{o.foreach_(Lt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class Zn{constructor(e){this.writeTree_=e}static empty(){return new Zn(new tt(null))}}function Ul(n,e,t){if(De(e))return new Zn(new tt(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const o=r.path;let a=r.value;const u=Mn(o,e);return a=a.updateChild(u,t),new Zn(n.writeTree_.set(o,a))}else{const o=new tt(t),a=n.writeTree_.setTree(e,o);return new Zn(a)}}}function Tv(n,e,t){let r=n;return Vn(t,(o,a)=>{r=Ul(r,Lt(e,o),a)}),r}function Iv(n,e){if(De(e))return Zn.empty();{const t=n.writeTree_.setTree(e,new tt(null));return new Zn(t)}}function gp(n,e){return Js(n,e)!=null}function Js(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Mn(t.path,e)):null}function Sv(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(en,(r,o)=>{e.push(new be(r,o))}):n.writeTree_.children.inorderTraversal((r,o)=>{o.value!=null&&e.push(new be(r,o.value))}),e}function $i(n,e){if(De(e))return n;{const t=Js(n,e);return t!=null?new Zn(new tt(t)):new Zn(n.writeTree_.subtree(e))}}function _p(n){return n.writeTree_.isEmpty()}function ca(n,e){return IT(qe(),n.writeTree_,e)}function IT(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((o,a)=>{o===".priority"?(Z(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=IT(Lt(n,o),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Lt(n,".priority"),r)),t}}/**
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
 */function ST(n,e){return PT(e,n)}function _P(n,e,t,r,o){Z(r>n.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:o}),o&&(n.visibleWrites=Ul(n.visibleWrites,e,t)),n.lastWriteId=r}function yP(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function vP(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);Z(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let o=r.visible,a=!1,u=n.allWrites.length-1;for(;o&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&EP(d,r.path)?o=!1:Yn(r.path,d.path)&&(a=!0)),u--}if(o){if(a)return wP(n),!0;if(r.snap)n.visibleWrites=Iv(n.visibleWrites,r.path);else{const d=r.children;Vn(d,p=>{n.visibleWrites=Iv(n.visibleWrites,Lt(r.path,p))})}return!0}else return!1}function EP(n,e){if(n.snap)return Yn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Yn(Lt(n.path,t),e))return!0;return!1}function wP(n){n.visibleWrites=CT(n.allWrites,TP,qe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function TP(n){return n.visible}function CT(n,e,t){let r=Zn.empty();for(let o=0;o<n.length;++o){const a=n[o];if(e(a)){const u=a.path;let d;if(a.snap)Yn(t,u)?(d=Mn(t,u),r=Ul(r,d,a.snap)):Yn(u,t)&&(d=Mn(u,t),r=Ul(r,qe(),a.snap.getChild(d)));else if(a.children){if(Yn(t,u))d=Mn(t,u),r=Tv(r,d,a.children);else if(Yn(u,t))if(d=Mn(u,t),De(d))r=Tv(r,qe(),a.children);else{const p=aa(a.children,Me(d));if(p){const _=p.getChild(nt(d));r=Ul(r,qe(),_)}}}else throw _a("WriteRecord should have .snap or .children")}}return r}function AT(n,e,t,r,o){if(!r&&!o){const a=Js(n.visibleWrites,e);if(a!=null)return a;{const u=$i(n.visibleWrites,e);if(_p(u))return t;if(t==null&&!gp(u,qe()))return null;{const d=t||Be.EMPTY_NODE;return ca(u,d)}}}else{const a=$i(n.visibleWrites,e);if(!o&&_p(a))return t;if(!o&&t==null&&!gp(a,qe()))return null;{const u=function(_){return(_.visible||o)&&(!r||!~r.indexOf(_.writeId))&&(Yn(_.path,e)||Yn(e,_.path))},d=CT(n.allWrites,u,e),p=t||Be.EMPTY_NODE;return ca(d,p)}}}function IP(n,e,t){let r=Be.EMPTY_NODE;const o=Js(n.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(en,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=$i(n.visibleWrites,e);return t.forEachChild(en,(u,d)=>{const p=ca($i(a,new it(u)),d);r=r.updateImmediateChild(u,p)}),Sv(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=$i(n.visibleWrites,e);return Sv(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function SP(n,e,t,r,o){Z(r||o,"Either existingEventSnap or existingServerSnap must exist");const a=Lt(e,t);if(gp(n.visibleWrites,a))return null;{const u=$i(n.visibleWrites,a);return _p(u)?o.getChild(t):ca(u,o.getChild(t))}}function CP(n,e,t,r){const o=Lt(e,t),a=Js(n.visibleWrites,o);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=$i(n.visibleWrites,o);return ca(u,r.getNode().getImmediateChild(t))}else return null}function AP(n,e){return Js(n.visibleWrites,e)}function RP(n,e,t,r,o,a,u){let d;const p=$i(n.visibleWrites,e),_=Js(p,qe());if(_!=null)d=_;else if(t!=null)d=ca(p,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const E=[],w=u.getCompare(),I=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let V=I.getNext();for(;V&&E.length<o;)w(V,r)!==0&&E.push(V),V=I.getNext();return E}else return[]}function kP(){return{visibleWrites:Zn.empty(),allWrites:[],lastWriteId:-1}}function yp(n,e,t,r){return AT(n.writeTree,n.treePath,e,t,r)}function RT(n,e){return IP(n.writeTree,n.treePath,e)}function Cv(n,e,t,r){return SP(n.writeTree,n.treePath,e,t,r)}function yh(n,e){return AP(n.writeTree,Lt(n.treePath,e))}function PP(n,e,t,r,o,a){return RP(n.writeTree,n.treePath,e,t,r,o,a)}function fm(n,e,t){return CP(n.writeTree,n.treePath,e,t)}function kT(n,e){return PT(Lt(n.treePath,e),n.writeTree)}function PT(n,e){return{treePath:n,writeTree:e}}/**
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
 */class NP{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;Z(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),Z(r!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(r);if(o){const a=o.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,yv(r,e.snapshotNode,o.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,sP(r,o.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,iP(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,yv(r,e.snapshotNode,o.oldSnap));else throw _a("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class DP{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const NT=new DP;class pm{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new dm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fm(this.writes_,e,r)}}getChildAfterChild(e,t,r){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ks(this.viewCache_),a=PP(this.writes_,o,t,1,r,e);return a.length===0?null:a[0]}}function xP(n,e){Z(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),Z(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function OP(n,e,t,r,o){const a=new NP;let u,d;if(t.type===wr.OVERWRITE){const _=t;_.source.fromUser?u=vp(n,e,_.path,_.snap,r,o,a):(Z(_.source.fromServer,"Unknown source."),d=_.source.tagged||e.serverCache.isFiltered()&&!De(_.path),u=vh(n,e,_.path,_.snap,r,o,d,a))}else if(t.type===wr.MERGE){const _=t;_.source.fromUser?u=MP(n,e,_.path,_.children,r,o,a):(Z(_.source.fromServer,"Unknown source."),d=_.source.tagged||e.serverCache.isFiltered(),u=Ep(n,e,_.path,_.children,r,o,d,a))}else if(t.type===wr.ACK_USER_WRITE){const _=t;_.revert?u=FP(n,e,_.path,r,o,a):u=bP(n,e,_.path,_.affectedTree,r,o,a)}else if(t.type===wr.LISTEN_COMPLETE)u=VP(n,e,t.path,r,a);else throw _a("Unknown operation type: "+t.type);const p=a.getChanges();return LP(e,u,p),{viewCache:u,changes:p}}function LP(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const o=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=mp(n);(t.length>0||!n.eventCache.isFullyInitialized()||o&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(rP(mp(e)))}}function DT(n,e,t,r,o,a){const u=e.eventCache;if(yh(r,t)!=null)return e;{let d,p;if(De(t))if(Z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const _=Ks(e),E=_ instanceof Be?_:Be.EMPTY_NODE,w=RT(r,E);d=n.filter.updateFullNode(e.eventCache.getNode(),w,a)}else{const _=yp(r,Ks(e));d=n.filter.updateFullNode(e.eventCache.getNode(),_,a)}else{const _=Me(t);if(_===".priority"){Z(Zi(t)===1,"Can't have a priority with additional path components");const E=u.getNode();p=e.serverCache.getNode();const w=Cv(r,t,E,p);w!=null?d=n.filter.updatePriority(E,w):d=u.getNode()}else{const E=nt(t);let w;if(u.isCompleteForChild(_)){p=e.serverCache.getNode();const I=Cv(r,t,u.getNode(),p);I!=null?w=u.getNode().getImmediateChild(_).updateChild(E,I):w=u.getNode().getImmediateChild(_)}else w=fm(r,_,e.serverCache);w!=null?d=n.filter.updateChild(u.getNode(),_,w,E,o,a):d=u.getNode()}}return Fl(e,d,u.isFullyInitialized()||De(t),n.filter.filtersNodes())}}function vh(n,e,t,r,o,a,u,d){const p=e.serverCache;let _;const E=u?n.filter:n.filter.getIndexedFilter();if(De(t))_=E.updateFullNode(p.getNode(),r,null);else if(E.filtersNodes()&&!p.isFiltered()){const V=p.getNode().updateChild(t,r);_=E.updateFullNode(p.getNode(),V,null)}else{const V=Me(t);if(!p.isCompleteForPath(t)&&Zi(t)>1)return e;const z=nt(t),W=p.getNode().getImmediateChild(V).updateChild(z,r);V===".priority"?_=E.updatePriority(p.getNode(),W):_=E.updateChild(p.getNode(),V,W,z,NT,null)}const w=TT(e,_,p.isFullyInitialized()||De(t),E.filtersNodes()),I=new pm(o,w,a);return DT(n,w,t,o,I,d)}function vp(n,e,t,r,o,a,u){const d=e.eventCache;let p,_;const E=new pm(o,e,a);if(De(t))_=n.filter.updateFullNode(e.eventCache.getNode(),r,u),p=Fl(e,_,!0,n.filter.filtersNodes());else{const w=Me(t);if(w===".priority")_=n.filter.updatePriority(e.eventCache.getNode(),r),p=Fl(e,_,d.isFullyInitialized(),d.isFiltered());else{const I=nt(t),V=d.getNode().getImmediateChild(w);let z;if(De(I))z=r;else{const G=E.getCompleteChild(w);G!=null?aT(I)===".priority"&&G.getChild(uT(I)).isEmpty()?z=G:z=G.updateChild(I,r):z=Be.EMPTY_NODE}if(V.equals(z))p=e;else{const G=n.filter.updateChild(d.getNode(),w,z,I,E,u);p=Fl(e,G,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function Av(n,e){return n.eventCache.isCompleteForChild(e)}function MP(n,e,t,r,o,a,u){let d=e;return r.foreach((p,_)=>{const E=Lt(t,p);Av(e,Me(E))&&(d=vp(n,d,E,_,o,a,u))}),r.foreach((p,_)=>{const E=Lt(t,p);Av(e,Me(E))||(d=vp(n,d,E,_,o,a,u))}),d}function Rv(n,e,t){return t.foreach((r,o)=>{e=e.updateChild(r,o)}),e}function Ep(n,e,t,r,o,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,_;De(t)?_=r:_=new tt(null).setTree(t,r);const E=e.serverCache.getNode();return _.children.inorderTraversal((w,I)=>{if(E.hasChild(w)){const V=e.serverCache.getNode().getImmediateChild(w),z=Rv(n,V,I);p=vh(n,p,new it(w),z,o,a,u,d)}}),_.children.inorderTraversal((w,I)=>{const V=!e.serverCache.isCompleteForChild(w)&&I.value===null;if(!E.hasChild(w)&&!V){const z=e.serverCache.getNode().getImmediateChild(w),G=Rv(n,z,I);p=vh(n,p,new it(w),G,o,a,u,d)}}),p}function bP(n,e,t,r,o,a,u){if(yh(o,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(r.value!=null){if(De(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return vh(n,e,t,p.getNode().getChild(t),o,a,d,u);if(De(t)){let _=new tt(null);return p.getNode().forEachChild(ia,(E,w)=>{_=_.set(new it(E),w)}),Ep(n,e,t,_,o,a,d,u)}else return e}else{let _=new tt(null);return r.foreach((E,w)=>{const I=Lt(t,E);p.isCompleteForPath(I)&&(_=_.set(E,p.getNode().getChild(I)))}),Ep(n,e,t,_,o,a,d,u)}}function VP(n,e,t,r,o){const a=e.serverCache,u=TT(e,a.getNode(),a.isFullyInitialized()||De(t),a.isFiltered());return DT(n,u,t,r,NT,o)}function FP(n,e,t,r,o,a){let u;if(yh(r,t)!=null)return e;{const d=new pm(r,e,o),p=e.eventCache.getNode();let _;if(De(t)||Me(t)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=yp(r,Ks(e));else{const w=e.serverCache.getNode();Z(w instanceof Be,"serverChildren would be complete if leaf node"),E=RT(r,w)}E=E,_=n.filter.updateFullNode(p,E,a)}else{const E=Me(t);let w=fm(r,E,e.serverCache);w==null&&e.serverCache.isCompleteForChild(E)&&(w=p.getImmediateChild(E)),w!=null?_=n.filter.updateChild(p,E,w,nt(t),d,a):e.eventCache.getNode().hasChild(E)?_=n.filter.updateChild(p,E,Be.EMPTY_NODE,nt(t),d,a):_=p,_.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=yp(r,Ks(e)),u.isLeafNode()&&(_=n.filter.updateFullNode(_,u,a)))}return u=e.serverCache.isFullyInitialized()||yh(r,qe())!=null,Fl(e,_,u,n.filter.filtersNodes())}}function UP(n,e){const t=Ks(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!De(e)&&!t.getImmediateChild(Me(e)).isEmpty())?t.getChild(e):null}function kv(n,e,t,r){e.type===wr.MERGE&&e.source.queryId!==null&&(Z(Ks(n.viewCache_),"We should always have a full cache before handling merges"),Z(mp(n.viewCache_),"Missing event cache, even though we have a server cache"));const o=n.viewCache_,a=OP(n.processor_,o,e,t,r);return xP(n.processor_,a.viewCache),Z(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,jP(n,a.changes,a.viewCache.eventCache.getNode())}function jP(n,e,t,r){const o=n.eventRegistrations_;return fP(n.eventGenerator_,e,t,o)}/**
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
 */let Pv;function zP(n){Z(!Pv,"__referenceConstructor has already been defined"),Pv=n}function mm(n,e,t,r){const o=e.source.queryId;if(o!==null){const a=n.views.get(o);return Z(a!=null,"SyncTree gave us an op for an invalid query."),kv(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(kv(u,e,t,r));return a}}function gm(n,e){let t=null;for(const r of n.views.values())t=t||UP(r,e);return t}/**
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
 */let Nv;function BP(n){Z(!Nv,"__referenceConstructor has already been defined"),Nv=n}class Dv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new tt(null),this.pendingWriteTree_=kP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function WP(n,e,t,r,o){return _P(n.pendingWriteTree_,e,t,r,o),o?jh(n,new Gs(yT(),e,t)):[]}function Zo(n,e,t=!1){const r=yP(n.pendingWriteTree_,e);if(vP(n.pendingWriteTree_,e)){let a=new tt(null);return r.snap!=null?a=a.set(qe(),!0):Vn(r.children,u=>{a=a.set(new it(u),!0)}),jh(n,new _h(r.path,a,t))}else return[]}function Uh(n,e,t){return jh(n,new Gs(vT(),e,t))}function HP(n,e,t){const r=tt.fromObject(t);return jh(n,new Kl(vT(),e,r))}function qP(n,e,t,r){const o=MT(n,r);if(o!=null){const a=bT(o),u=a.path,d=a.queryId,p=Mn(u,e),_=new Gs(ET(d),p,t);return VT(n,u,_)}else return[]}function $P(n,e,t,r){const o=MT(n,r);if(o){const a=bT(o),u=a.path,d=a.queryId,p=Mn(u,e),_=tt.fromObject(t),E=new Kl(ET(d),p,_);return VT(n,u,E)}else return[]}function xT(n,e,t){const o=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const p=Mn(u,e),_=gm(d,p);if(_)return _});return AT(o,e,a,t,!0)}function jh(n,e){return OT(e,n.syncPointTree_,null,ST(n.pendingWriteTree_,qe()))}function OT(n,e,t,r){if(De(n.path))return LT(n,e,t,r);{const o=e.get(qe());t==null&&o!=null&&(t=gm(o,qe()));let a=[];const u=Me(n.path),d=n.operationForChild(u),p=e.children.get(u);if(p&&d){const _=t?t.getImmediateChild(u):null,E=kT(r,u);a=a.concat(OT(d,p,_,E))}return o&&(a=a.concat(mm(o,n,r,t))),a}}function LT(n,e,t,r){const o=e.get(qe());t==null&&o!=null&&(t=gm(o,qe()));let a=[];return e.children.inorderTraversal((u,d)=>{const p=t?t.getImmediateChild(u):null,_=kT(r,u),E=n.operationForChild(u);E&&(a=a.concat(LT(E,d,p,_)))}),o&&(a=a.concat(mm(o,n,r,t))),a}function MT(n,e){return n.tagToQueryMap.get(e)}function bT(n){const e=n.indexOf("$");return Z(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new it(n.substr(0,e))}}function VT(n,e,t){const r=n.syncPointTree_.get(e);Z(r,"Missing sync point for query tag that we're tracking");const o=ST(n.pendingWriteTree_,e);return mm(r,t,o,null)}/**
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
 */class _m{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new _m(t)}node(){return this.node_}}class ym{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Lt(this.path_,e);return new ym(this.syncTree_,t)}node(){return xT(this.syncTree_,this.path_)}}const GP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},xv=function(n,e,t){if(!n||typeof n!="object")return n;if(Z(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return KP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return QP(n[".sv"],e);Z(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},KP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:Z(!1,"Unexpected server value: "+n)}},QP=function(n,e,t){n.hasOwnProperty("increment")||Z(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&Z(!1,"Unexpected increment value: "+r);const o=e.node();if(Z(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return r;const u=o.getValue();return typeof u!="number"?r:u+r},YP=function(n,e,t,r){return vm(e,new ym(t,n),r)},XP=function(n,e,t){return vm(n,new _m(e),t)};function vm(n,e,t){const r=n.getPriority().val(),o=xv(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=xv(u.getValue(),e,t);return d!==u.getValue()||o!==u.getPriority().val()?new xt(d,Jt(o)):n}else{const u=n;return a=u,o!==u.getPriority().val()&&(a=a.updatePriority(new xt(o))),u.forEachChild(en,(d,p)=>{const _=vm(p,e.getImmediateChild(d),t);_!==p&&(a=a.updateImmediateChild(d,_))}),a}}/**
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
 */class Em{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function wm(n,e){let t=e instanceof it?e:new it(e),r=n,o=Me(t);for(;o!==null;){const a=aa(r.node.children,o)||{children:{},childCount:0};r=new Em(o,r,a),t=nt(t),o=Me(t)}return r}function wa(n){return n.node.value}function FT(n,e){n.node.value=e,wp(n)}function UT(n){return n.node.childCount>0}function JP(n){return wa(n)===void 0&&!UT(n)}function zh(n,e){Vn(n.node.children,(t,r)=>{e(new Em(t,n,r))})}function jT(n,e,t,r){t&&e(n),zh(n,o=>{jT(o,e,!0)})}function ZP(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function pu(n){return new it(n.parent===null?n.name:pu(n.parent)+"/"+n.name)}function wp(n){n.parent!==null&&eN(n.parent,n.name,n)}function eN(n,e,t){const r=JP(t),o=ai(n.node.children,e);r&&o?(delete n.node.children[e],n.node.childCount--,wp(n)):!r&&!o&&(n.node.children[e]=t.node,n.node.childCount++,wp(n))}/**
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
 */const tN=/[\[\].#$\/\u0000-\u001F\u007F]/,nN=/[\[\].#$\u0000-\u001F\u007F]/,Kf=10*1024*1024,zT=function(n){return typeof n=="string"&&n.length!==0&&!tN.test(n)},rN=function(n){return typeof n=="string"&&n.length!==0&&!nN.test(n)},iN=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rN(n)},BT=function(n,e,t){const r=t instanceof it?new Vk(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Fs(r));if(typeof e=="function")throw new Error(n+"contains a function "+Fs(r)+" with contents = "+e.toString());if(jw(e))throw new Error(n+"contains "+e.toString()+" "+Fs(r));if(typeof e=="string"&&e.length>Kf/3&&xh(e)>Kf)throw new Error(n+"contains a string greater than "+Kf+" utf8 bytes "+Fs(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,a=!1;if(Vn(e,(u,d)=>{if(u===".value")o=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!zT(u)))throw new Error(n+" contains an invalid key ("+u+") "+Fs(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Fk(r,u),BT(n,d,r),Uk(r)}),o&&a)throw new Error(n+' contains ".value" child '+Fs(r)+" in addition to actual children.")}},sN=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!iN(t))throw new Error(vC(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class oN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function aN(n,e){let t=null;for(let r=0;r<e.length;r++){const o=e[r],a=o.getPath();t!==null&&!cT(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(o)}t&&n.eventLists_.push(t)}function Zs(n,e,t){aN(n,t),lN(n,r=>Yn(r,e)||Yn(e,r))}function lN(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const o=n.eventLists_[r];if(o){const a=o.path;e(a)?(uN(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function uN(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();bl&&Xt("event: "+t.toString()),du(r)}}}/**
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
 */const cN="repo_interrupt",hN=25;class dN{constructor(e,t,r,o){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new oN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gh(),this.transactionQueueTree_=new Em,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fN(n,e,t){if(n.stats_=am(n.repoInfo_),n.forceRestClient_||lk())n.server_=new mh(n.repoInfo_,(r,o,a,u)=>{Ov(n,r,o,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Lv(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{jt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Jr(n.repoInfo_,e,(r,o,a,u)=>{Ov(n,r,o,a,u)},r=>{Lv(n,r)},r=>{mN(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=fk(n.repoInfo_,()=>new dP(n.stats_,n.server_)),n.infoData_=new aP,n.infoSyncTree_=new Dv({startListening:(r,o,a,u)=>{let d=[];const p=n.infoData_.getNode(r._path);return p.isEmpty()||(d=Uh(n.infoSyncTree_,r._path,p),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),Tm(n,"connected",!1),n.serverSyncTree_=new Dv({startListening:(r,o,a,u)=>(n.server_.listen(r,a,o,(d,p)=>{const _=u(d,p);Zs(n.eventQueue_,r._path,_)}),[]),stopListening:(r,o)=>{n.server_.unlisten(r,o)}})}function pN(n){const t=n.infoData_.getNode(new it(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function WT(n){return GP({timestamp:pN(n)})}function Ov(n,e,t,r,o){n.dataUpdateCount++;const a=new it(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(o)if(r){const p=ih(t,_=>Jt(_));u=$P(n.serverSyncTree_,a,p,o)}else{const p=Jt(t);u=qP(n.serverSyncTree_,a,p,o)}else if(r){const p=ih(t,_=>Jt(_));u=HP(n.serverSyncTree_,a,p)}else{const p=Jt(t);u=Uh(n.serverSyncTree_,a,p)}let d=a;u.length>0&&(d=Sm(n,a)),Zs(n.eventQueue_,d,u)}function Lv(n,e){Tm(n,"connected",e),e===!1&&_N(n)}function mN(n,e){Vn(e,(t,r)=>{Tm(n,t,r)})}function Tm(n,e,t){const r=new it("/.info/"+e),o=Jt(t);n.infoData_.updateSnapshot(r,o);const a=Uh(n.infoSyncTree_,r,o);Zs(n.eventQueue_,r,a)}function gN(n){return n.nextWriteId_++}function _N(n){HT(n,"onDisconnectEvents");const e=WT(n),t=gh();pp(n.onDisconnect_,qe(),(o,a)=>{const u=YP(o,a,n.serverSyncTree_,e);_T(t,o,u)});let r=[];pp(t,qe(),(o,a)=>{r=r.concat(Uh(n.serverSyncTree_,o,a));const u=wN(n,o);Sm(n,u)}),n.onDisconnect_=gh(),Zs(n.eventQueue_,qe(),r)}function yN(n){n.persistentConnection_&&n.persistentConnection_.interrupt(cN)}function HT(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Xt(t,...e)}function qT(n,e,t){return xT(n.serverSyncTree_,e,t)||Be.EMPTY_NODE}function Im(n,e=n.transactionQueueTree_){if(e||Bh(n,e),wa(e)){const t=GT(n,e);Z(t.length>0,"Sending zero length transaction queue"),t.every(o=>o.status===0)&&vN(n,pu(e),t)}else UT(e)&&zh(e,t=>{Im(n,t)})}function vN(n,e,t){const r=t.map(_=>_.currentWriteId),o=qT(n,e,r);let a=o;const u=o.hash();for(let _=0;_<t.length;_++){const E=t[_];Z(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const w=Mn(e,E.path);a=a.updateChild(w,E.currentOutputSnapshotRaw)}const d=a.val(!0),p=e;n.server_.put(p.toString(),d,_=>{HT(n,"transaction put response",{path:p.toString(),status:_});let E=[];if(_==="ok"){const w=[];for(let I=0;I<t.length;I++)t[I].status=2,E=E.concat(Zo(n.serverSyncTree_,t[I].currentWriteId)),t[I].onComplete&&w.push(()=>t[I].onComplete(null,!0,t[I].currentOutputSnapshotResolved)),t[I].unwatcher();Bh(n,wm(n.transactionQueueTree_,e)),Im(n,n.transactionQueueTree_),Zs(n.eventQueue_,e,E);for(let I=0;I<w.length;I++)du(w[I])}else{if(_==="datastale")for(let w=0;w<t.length;w++)t[w].status===3?t[w].status=4:t[w].status=0;else{Sn("transaction at "+p.toString()+" failed: "+_);for(let w=0;w<t.length;w++)t[w].status=4,t[w].abortReason=_}Sm(n,e)}},u)}function Sm(n,e){const t=$T(n,e),r=pu(t),o=GT(n,t);return EN(n,o,r),r}function EN(n,e,t){if(e.length===0)return;const r=[];let o=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],_=Mn(t,p.path);let E=!1,w;if(Z(_!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)E=!0,w=p.abortReason,o=o.concat(Zo(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=hN)E=!0,w="maxretry",o=o.concat(Zo(n.serverSyncTree_,p.currentWriteId,!0));else{const I=qT(n,p.path,u);p.currentInputSnapshot=I;const V=e[d].update(I.val());if(V!==void 0){BT("transaction failed: Data returned ",V,p.path);let z=Jt(V);typeof V=="object"&&V!=null&&ai(V,".priority")||(z=z.updatePriority(I.getPriority()));const W=p.currentWriteId,fe=WT(n),pe=XP(z,I,fe);p.currentOutputSnapshotRaw=z,p.currentOutputSnapshotResolved=pe,p.currentWriteId=gN(n),u.splice(u.indexOf(W),1),o=o.concat(WP(n.serverSyncTree_,p.path,pe,p.currentWriteId,p.applyLocally)),o=o.concat(Zo(n.serverSyncTree_,W,!0))}else E=!0,w="nodata",o=o.concat(Zo(n.serverSyncTree_,p.currentWriteId,!0))}Zs(n.eventQueue_,t,o),o=[],E&&(e[d].status=2,(function(I){setTimeout(I,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(w==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(w),!1,null))))}Bh(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)du(r[d]);Im(n,n.transactionQueueTree_)}function $T(n,e){let t,r=n.transactionQueueTree_;for(t=Me(e);t!==null&&wa(r)===void 0;)r=wm(r,t),e=nt(e),t=Me(e);return r}function GT(n,e){const t=[];return KT(n,e,t),t.sort((r,o)=>r.order-o.order),t}function KT(n,e,t){const r=wa(e);if(r)for(let o=0;o<r.length;o++)t.push(r[o]);zh(e,o=>{KT(n,o,t)})}function Bh(n,e){const t=wa(e);if(t){let r=0;for(let o=0;o<t.length;o++)t[o].status!==2&&(t[r]=t[o],r++);t.length=r,FT(e,t.length>0?t:void 0)}zh(e,r=>{Bh(n,r)})}function wN(n,e){const t=pu($T(n,e)),r=wm(n.transactionQueueTree_,e);return ZP(r,o=>{Qf(n,o)}),Qf(n,r),jT(r,o=>{Qf(n,o)}),t}function Qf(n,e){const t=wa(e);if(t){const r=[];let o=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(Z(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(Z(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),o=o.concat(Zo(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?FT(e,void 0):t.length=a+1,Zs(n.eventQueue_,pu(e),o);for(let u=0;u<r.length;u++)du(r[u])}}/**
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
 */function TN(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let o=t[r];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function IN(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Sn(`Invalid query segment '${t}' in query '${n}'`)}return e}const Mv=function(n,e){const t=SN(n),r=t.namespace;t.domain==="firebase.com"&&ri(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&ri("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||ek();const o=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Jw(t.host,t.secure,r,o,e,"",r!==t.subdomain),path:new it(t.pathString)}},SN=function(n){let e="",t="",r="",o="",a="",u=!0,d="https",p=443;if(typeof n=="string"){let _=n.indexOf("//");_>=0&&(d=n.substring(0,_-1),n=n.substring(_+2));let E=n.indexOf("/");E===-1&&(E=n.length);let w=n.indexOf("?");w===-1&&(w=n.length),e=n.substring(0,Math.min(E,w)),E<w&&(o=TN(n.substring(E,w)));const I=IN(n.substring(Math.min(n.length,w)));_=e.indexOf(":"),_>=0?(u=d==="https"||d==="wss",p=parseInt(e.substring(_+1),10)):_=e.length;const V=e.slice(0,_);if(V.toLowerCase()==="localhost")t="localhost";else if(V.split(".").length<=2)t=V;else{const z=e.indexOf(".");r=e.substring(0,z).toLowerCase(),t=e.substring(z+1),a=r}"ns"in I&&(a=I.ns)}return{host:e,port:p,domain:t,subdomain:r,secure:u,scheme:d,pathString:o,namespace:a}};/**
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
 */class Cm{constructor(e,t,r,o){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=o}get key(){return De(this._path)?null:aT(this._path)}get ref(){return new Ta(this._repo,this._path)}get _queryIdentifier(){const e=Ev(this._queryParams),t=sm(e);return t==="{}"?"default":t}get _queryObject(){return Ev(this._queryParams)}isEqual(e){if(e=Rt(e),!(e instanceof Cm))return!1;const t=this._repo===e._repo,r=cT(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return t&&r&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+bk(this._path)}}class Ta extends Cm{constructor(e,t){super(e,t,new hm,!1)}get parent(){const e=uT(this._path);return e===null?null:new Ta(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}zP(Ta);BP(Ta);/**
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
 */const CN="FIREBASE_DATABASE_EMULATOR_HOST",Tp={};let AN=!1;function RN(n,e,t,r){const o=e.lastIndexOf(":"),a=e.substring(0,o),u=os(a);n.repoInfo_=new Jw(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function kN(n,e,t,r,o){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||ri("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Xt("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=Mv(a,o),d=u.repoInfo,p;typeof process<"u"&&tv&&(p=tv[CN]),p?(a=`http://${p}?ns=${d.namespace}`,u=Mv(a,o),d=u.repoInfo):u.repoInfo.secure;const _=new ck(n.name,n.options,e);sN("Invalid Firebase Database URL",u),De(u.path)||ri("Database URL must point to the root of a Firebase Database (not including a child path).");const E=NN(d,n,_,new uk(n,t));return new DN(E,n)}function PN(n,e){const t=Tp[e];(!t||t[n.key]!==n)&&ri(`Database ${e}(${n.repoInfo_}) has already been deleted.`),yN(n),delete t[n.key]}function NN(n,e,t,r){let o=Tp[e.name];o||(o={},Tp[e.name]=o);let a=o[n.toURLString()];return a&&ri("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new dN(n,AN,t,r),o[n.toURLString()]=a,a}class DN{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ta(this._repo,qe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(PN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ri("Cannot call "+e+" on a deleted database.")}}function xN(n=Kp(),e){const t=Lh(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=$E("database");r&&ON(t,...r)}return t}function ON(n,e,t,r={}){n=Rt(n),n._checkNotDeleted("useEmulator");const o=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(o===n._repoInternal.repoInfo_.host&&Xi(r,a.repoInfo_.emulatorOptions))return;ri("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&ri('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Kc(Kc.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:QE(r.mockUserToken,n.app.options.projectId);u=new Kc(d)}os(e)&&(Hp(e),qp("Database",!0)),RN(a,o,r,u)}/**
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
 */function LN(n){K1(Xs),Ws(new Ji("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return kN(r,o,a,t)},"PUBLIC").setMultipleInstances(!0)),Tr(nv,rv,n),Tr(nv,rv,"esm2020")}Jr.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Jr.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};LN();var bv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gi,QT;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,C){function R(){}R.prototype=C.prototype,N.F=C.prototype,N.prototype=new R,N.prototype.constructor=N,N.D=function(x,P,L){for(var A=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)A[Qe-2]=arguments[Qe];return C.prototype[P].apply(x,A)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,C,R){R||(R=0);const x=Array(16);if(typeof C=="string")for(var P=0;P<16;++P)x[P]=C.charCodeAt(R++)|C.charCodeAt(R++)<<8|C.charCodeAt(R++)<<16|C.charCodeAt(R++)<<24;else for(P=0;P<16;++P)x[P]=C[R++]|C[R++]<<8|C[R++]<<16|C[R++]<<24;C=N.g[0],R=N.g[1],P=N.g[2];let L=N.g[3],A;A=C+(L^R&(P^L))+x[0]+3614090360&4294967295,C=R+(A<<7&4294967295|A>>>25),A=L+(P^C&(R^P))+x[1]+3905402710&4294967295,L=C+(A<<12&4294967295|A>>>20),A=P+(R^L&(C^R))+x[2]+606105819&4294967295,P=L+(A<<17&4294967295|A>>>15),A=R+(C^P&(L^C))+x[3]+3250441966&4294967295,R=P+(A<<22&4294967295|A>>>10),A=C+(L^R&(P^L))+x[4]+4118548399&4294967295,C=R+(A<<7&4294967295|A>>>25),A=L+(P^C&(R^P))+x[5]+1200080426&4294967295,L=C+(A<<12&4294967295|A>>>20),A=P+(R^L&(C^R))+x[6]+2821735955&4294967295,P=L+(A<<17&4294967295|A>>>15),A=R+(C^P&(L^C))+x[7]+4249261313&4294967295,R=P+(A<<22&4294967295|A>>>10),A=C+(L^R&(P^L))+x[8]+1770035416&4294967295,C=R+(A<<7&4294967295|A>>>25),A=L+(P^C&(R^P))+x[9]+2336552879&4294967295,L=C+(A<<12&4294967295|A>>>20),A=P+(R^L&(C^R))+x[10]+4294925233&4294967295,P=L+(A<<17&4294967295|A>>>15),A=R+(C^P&(L^C))+x[11]+2304563134&4294967295,R=P+(A<<22&4294967295|A>>>10),A=C+(L^R&(P^L))+x[12]+1804603682&4294967295,C=R+(A<<7&4294967295|A>>>25),A=L+(P^C&(R^P))+x[13]+4254626195&4294967295,L=C+(A<<12&4294967295|A>>>20),A=P+(R^L&(C^R))+x[14]+2792965006&4294967295,P=L+(A<<17&4294967295|A>>>15),A=R+(C^P&(L^C))+x[15]+1236535329&4294967295,R=P+(A<<22&4294967295|A>>>10),A=C+(P^L&(R^P))+x[1]+4129170786&4294967295,C=R+(A<<5&4294967295|A>>>27),A=L+(R^P&(C^R))+x[6]+3225465664&4294967295,L=C+(A<<9&4294967295|A>>>23),A=P+(C^R&(L^C))+x[11]+643717713&4294967295,P=L+(A<<14&4294967295|A>>>18),A=R+(L^C&(P^L))+x[0]+3921069994&4294967295,R=P+(A<<20&4294967295|A>>>12),A=C+(P^L&(R^P))+x[5]+3593408605&4294967295,C=R+(A<<5&4294967295|A>>>27),A=L+(R^P&(C^R))+x[10]+38016083&4294967295,L=C+(A<<9&4294967295|A>>>23),A=P+(C^R&(L^C))+x[15]+3634488961&4294967295,P=L+(A<<14&4294967295|A>>>18),A=R+(L^C&(P^L))+x[4]+3889429448&4294967295,R=P+(A<<20&4294967295|A>>>12),A=C+(P^L&(R^P))+x[9]+568446438&4294967295,C=R+(A<<5&4294967295|A>>>27),A=L+(R^P&(C^R))+x[14]+3275163606&4294967295,L=C+(A<<9&4294967295|A>>>23),A=P+(C^R&(L^C))+x[3]+4107603335&4294967295,P=L+(A<<14&4294967295|A>>>18),A=R+(L^C&(P^L))+x[8]+1163531501&4294967295,R=P+(A<<20&4294967295|A>>>12),A=C+(P^L&(R^P))+x[13]+2850285829&4294967295,C=R+(A<<5&4294967295|A>>>27),A=L+(R^P&(C^R))+x[2]+4243563512&4294967295,L=C+(A<<9&4294967295|A>>>23),A=P+(C^R&(L^C))+x[7]+1735328473&4294967295,P=L+(A<<14&4294967295|A>>>18),A=R+(L^C&(P^L))+x[12]+2368359562&4294967295,R=P+(A<<20&4294967295|A>>>12),A=C+(R^P^L)+x[5]+4294588738&4294967295,C=R+(A<<4&4294967295|A>>>28),A=L+(C^R^P)+x[8]+2272392833&4294967295,L=C+(A<<11&4294967295|A>>>21),A=P+(L^C^R)+x[11]+1839030562&4294967295,P=L+(A<<16&4294967295|A>>>16),A=R+(P^L^C)+x[14]+4259657740&4294967295,R=P+(A<<23&4294967295|A>>>9),A=C+(R^P^L)+x[1]+2763975236&4294967295,C=R+(A<<4&4294967295|A>>>28),A=L+(C^R^P)+x[4]+1272893353&4294967295,L=C+(A<<11&4294967295|A>>>21),A=P+(L^C^R)+x[7]+4139469664&4294967295,P=L+(A<<16&4294967295|A>>>16),A=R+(P^L^C)+x[10]+3200236656&4294967295,R=P+(A<<23&4294967295|A>>>9),A=C+(R^P^L)+x[13]+681279174&4294967295,C=R+(A<<4&4294967295|A>>>28),A=L+(C^R^P)+x[0]+3936430074&4294967295,L=C+(A<<11&4294967295|A>>>21),A=P+(L^C^R)+x[3]+3572445317&4294967295,P=L+(A<<16&4294967295|A>>>16),A=R+(P^L^C)+x[6]+76029189&4294967295,R=P+(A<<23&4294967295|A>>>9),A=C+(R^P^L)+x[9]+3654602809&4294967295,C=R+(A<<4&4294967295|A>>>28),A=L+(C^R^P)+x[12]+3873151461&4294967295,L=C+(A<<11&4294967295|A>>>21),A=P+(L^C^R)+x[15]+530742520&4294967295,P=L+(A<<16&4294967295|A>>>16),A=R+(P^L^C)+x[2]+3299628645&4294967295,R=P+(A<<23&4294967295|A>>>9),A=C+(P^(R|~L))+x[0]+4096336452&4294967295,C=R+(A<<6&4294967295|A>>>26),A=L+(R^(C|~P))+x[7]+1126891415&4294967295,L=C+(A<<10&4294967295|A>>>22),A=P+(C^(L|~R))+x[14]+2878612391&4294967295,P=L+(A<<15&4294967295|A>>>17),A=R+(L^(P|~C))+x[5]+4237533241&4294967295,R=P+(A<<21&4294967295|A>>>11),A=C+(P^(R|~L))+x[12]+1700485571&4294967295,C=R+(A<<6&4294967295|A>>>26),A=L+(R^(C|~P))+x[3]+2399980690&4294967295,L=C+(A<<10&4294967295|A>>>22),A=P+(C^(L|~R))+x[10]+4293915773&4294967295,P=L+(A<<15&4294967295|A>>>17),A=R+(L^(P|~C))+x[1]+2240044497&4294967295,R=P+(A<<21&4294967295|A>>>11),A=C+(P^(R|~L))+x[8]+1873313359&4294967295,C=R+(A<<6&4294967295|A>>>26),A=L+(R^(C|~P))+x[15]+4264355552&4294967295,L=C+(A<<10&4294967295|A>>>22),A=P+(C^(L|~R))+x[6]+2734768916&4294967295,P=L+(A<<15&4294967295|A>>>17),A=R+(L^(P|~C))+x[13]+1309151649&4294967295,R=P+(A<<21&4294967295|A>>>11),A=C+(P^(R|~L))+x[4]+4149444226&4294967295,C=R+(A<<6&4294967295|A>>>26),A=L+(R^(C|~P))+x[11]+3174756917&4294967295,L=C+(A<<10&4294967295|A>>>22),A=P+(C^(L|~R))+x[2]+718787259&4294967295,P=L+(A<<15&4294967295|A>>>17),A=R+(L^(P|~C))+x[9]+3951481745&4294967295,N.g[0]=N.g[0]+C&4294967295,N.g[1]=N.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,N.g[2]=N.g[2]+P&4294967295,N.g[3]=N.g[3]+L&4294967295}r.prototype.v=function(N,C){C===void 0&&(C=N.length);const R=C-this.blockSize,x=this.C;let P=this.h,L=0;for(;L<C;){if(P==0)for(;L<=R;)o(this,N,L),L+=this.blockSize;if(typeof N=="string"){for(;L<C;)if(x[P++]=N.charCodeAt(L++),P==this.blockSize){o(this,x),P=0;break}}else for(;L<C;)if(x[P++]=N[L++],P==this.blockSize){o(this,x),P=0;break}}this.h=P,this.o+=C},r.prototype.A=function(){var N=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);N[0]=128;for(var C=1;C<N.length-8;++C)N[C]=0;C=this.o*8;for(var R=N.length-8;R<N.length;++R)N[R]=C&255,C/=256;for(this.v(N),N=Array(16),C=0,R=0;R<4;++R)for(let x=0;x<32;x+=8)N[C++]=this.g[R]>>>x&255;return N};function a(N,C){var R=d;return Object.prototype.hasOwnProperty.call(R,N)?R[N]:R[N]=C(N)}function u(N,C){this.h=C;const R=[];let x=!0;for(let P=N.length-1;P>=0;P--){const L=N[P]|0;x&&L==C||(R[P]=L,x=!1)}this.g=R}var d={};function p(N){return-128<=N&&N<128?a(N,function(C){return new u([C|0],C<0?-1:0)}):new u([N|0],N<0?-1:0)}function _(N){if(isNaN(N)||!isFinite(N))return w;if(N<0)return W(_(-N));const C=[];let R=1;for(let x=0;N>=R;x++)C[x]=N/R|0,R*=4294967296;return new u(C,0)}function E(N,C){if(N.length==0)throw Error("number format error: empty string");if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(N.charAt(0)=="-")return W(E(N.substring(1),C));if(N.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=_(Math.pow(C,8));let x=w;for(let L=0;L<N.length;L+=8){var P=Math.min(8,N.length-L);const A=parseInt(N.substring(L,L+P),C);P<8?(P=_(Math.pow(C,P)),x=x.j(P).add(_(A))):(x=x.j(R),x=x.add(_(A)))}return x}var w=p(0),I=p(1),V=p(16777216);n=u.prototype,n.m=function(){if(G(this))return-W(this).m();let N=0,C=1;for(let R=0;R<this.g.length;R++){const x=this.i(R);N+=(x>=0?x:4294967296+x)*C,C*=4294967296}return N},n.toString=function(N){if(N=N||10,N<2||36<N)throw Error("radix out of range: "+N);if(z(this))return"0";if(G(this))return"-"+W(this).toString(N);const C=_(Math.pow(N,6));var R=this;let x="";for(;;){const P=xe(R,C).g;R=fe(R,P.j(C));let L=((R.g.length>0?R.g[0]:R.h)>>>0).toString(N);if(R=P,z(R))return L+x;for(;L.length<6;)L="0"+L;x=L+x}},n.i=function(N){return N<0?0:N<this.g.length?this.g[N]:this.h};function z(N){if(N.h!=0)return!1;for(let C=0;C<N.g.length;C++)if(N.g[C]!=0)return!1;return!0}function G(N){return N.h==-1}n.l=function(N){return N=fe(this,N),G(N)?-1:z(N)?0:1};function W(N){const C=N.g.length,R=[];for(let x=0;x<C;x++)R[x]=~N.g[x];return new u(R,~N.h).add(I)}n.abs=function(){return G(this)?W(this):this},n.add=function(N){const C=Math.max(this.g.length,N.g.length),R=[];let x=0;for(let P=0;P<=C;P++){let L=x+(this.i(P)&65535)+(N.i(P)&65535),A=(L>>>16)+(this.i(P)>>>16)+(N.i(P)>>>16);x=A>>>16,L&=65535,A&=65535,R[P]=A<<16|L}return new u(R,R[R.length-1]&-2147483648?-1:0)};function fe(N,C){return N.add(W(C))}n.j=function(N){if(z(this)||z(N))return w;if(G(this))return G(N)?W(this).j(W(N)):W(W(this).j(N));if(G(N))return W(this.j(W(N)));if(this.l(V)<0&&N.l(V)<0)return _(this.m()*N.m());const C=this.g.length+N.g.length,R=[];for(var x=0;x<2*C;x++)R[x]=0;for(x=0;x<this.g.length;x++)for(let P=0;P<N.g.length;P++){const L=this.i(x)>>>16,A=this.i(x)&65535,Qe=N.i(P)>>>16,kt=N.i(P)&65535;R[2*x+2*P]+=A*kt,pe(R,2*x+2*P),R[2*x+2*P+1]+=L*kt,pe(R,2*x+2*P+1),R[2*x+2*P+1]+=A*Qe,pe(R,2*x+2*P+1),R[2*x+2*P+2]+=L*Qe,pe(R,2*x+2*P+2)}for(N=0;N<C;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=C;N<2*C;N++)R[N]=0;return new u(R,0)};function pe(N,C){for(;(N[C]&65535)!=N[C];)N[C+1]+=N[C]>>>16,N[C]&=65535,C++}function ye(N,C){this.g=N,this.h=C}function xe(N,C){if(z(C))throw Error("division by zero");if(z(N))return new ye(w,w);if(G(N))return C=xe(W(N),C),new ye(W(C.g),W(C.h));if(G(C))return C=xe(N,W(C)),new ye(W(C.g),C.h);if(N.g.length>30){if(G(N)||G(C))throw Error("slowDivide_ only works with positive integers.");for(var R=I,x=C;x.l(N)<=0;)R=Ke(R),x=Ke(x);var P=Oe(R,1),L=Oe(x,1);for(x=Oe(x,2),R=Oe(R,2);!z(x);){var A=L.add(x);A.l(N)<=0&&(P=P.add(R),L=A),x=Oe(x,1),R=Oe(R,1)}return C=fe(N,P.j(C)),new ye(P,C)}for(P=w;N.l(C)>=0;){for(R=Math.max(1,Math.floor(N.m()/C.m())),x=Math.ceil(Math.log(R)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),L=_(R),A=L.j(C);G(A)||A.l(N)>0;)R-=x,L=_(R),A=L.j(C);z(L)&&(L=I),P=P.add(L),N=fe(N,A)}return new ye(P,N)}n.B=function(N){return xe(this,N).h},n.and=function(N){const C=Math.max(this.g.length,N.g.length),R=[];for(let x=0;x<C;x++)R[x]=this.i(x)&N.i(x);return new u(R,this.h&N.h)},n.or=function(N){const C=Math.max(this.g.length,N.g.length),R=[];for(let x=0;x<C;x++)R[x]=this.i(x)|N.i(x);return new u(R,this.h|N.h)},n.xor=function(N){const C=Math.max(this.g.length,N.g.length),R=[];for(let x=0;x<C;x++)R[x]=this.i(x)^N.i(x);return new u(R,this.h^N.h)};function Ke(N){const C=N.g.length+1,R=[];for(let x=0;x<C;x++)R[x]=N.i(x)<<1|N.i(x-1)>>>31;return new u(R,N.h)}function Oe(N,C){const R=C>>5;C%=32;const x=N.g.length-R,P=[];for(let L=0;L<x;L++)P[L]=C>0?N.i(L+R)>>>C|N.i(L+R+1)<<32-C:N.i(L+R);return new u(P,N.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,QT=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=_,u.fromString=E,Gi=u}).apply(typeof bv<"u"?bv:typeof self<"u"?self:typeof window<"u"?window:{});var Uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var YT,Nl,XT,Yc,Ip,JT,ZT,eI;(function(){var n,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uc=="object"&&Uc];for(var g=0;g<c.length;++g){var y=c[g];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=t(this);function o(c,g){if(g)e:{var y=r;c=c.split(".");for(var T=0;T<c.length-1;T++){var b=c[T];if(!(b in y))break e;y=y[b]}c=c[c.length-1],T=y[c],g=g(T),g!=T&&g!=null&&e(y,c,{configurable:!0,writable:!0,value:g})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(g){var y=[],T;for(T in g)Object.prototype.hasOwnProperty.call(g,T)&&y.push([T,g[T]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function d(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function p(c,g,y){return c.call.apply(c.bind,arguments)}function _(c,g,y){return _=p,_.apply(null,arguments)}function E(c,g){var y=Array.prototype.slice.call(arguments,1);return function(){var T=y.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function w(c,g){function y(){}y.prototype=g.prototype,c.Z=g.prototype,c.prototype=new y,c.prototype.constructor=c,c.Ob=function(T,b,j){for(var X=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)X[Ee-2]=arguments[Ee];return g.prototype[b].apply(T,X)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function V(c){const g=c.length;if(g>0){const y=Array(g);for(let T=0;T<g;T++)y[T]=c[T];return y}return[]}function z(c,g){for(let T=1;T<arguments.length;T++){const b=arguments[T];var y=typeof b;if(y=y!="object"?y:b?Array.isArray(b)?"array":y:"null",y=="array"||y=="object"&&typeof b.length=="number"){y=c.length||0;const j=b.length||0;c.length=y+j;for(let X=0;X<j;X++)c[y+X]=b[X]}else c.push(b)}}class G{constructor(g,y){this.i=g,this.j=y,this.h=0,this.g=null}get(){let g;return this.h>0?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function W(c){u.setTimeout(()=>{throw c},0)}function fe(){var c=N;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class pe{constructor(){this.h=this.g=null}add(g,y){const T=ye.get();T.set(g,y),this.h?this.h.next=T:this.g=T,this.h=T}}var ye=new G(()=>new xe,c=>c.reset());class xe{constructor(){this.next=this.g=this.h=null}set(g,y){this.h=g,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ke,Oe=!1,N=new pe,C=()=>{const c=Promise.resolve(void 0);Ke=()=>{c.then(R)}};function R(){for(var c;c=fe();){try{c.h.call(c.g)}catch(y){W(y)}var g=ye;g.j(c),g.h<100&&(g.h++,c.next=g.g,g.g=c)}Oe=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var L=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};u.addEventListener("test",y,g),u.removeEventListener("test",y,g)}catch{}return c})();function A(c){return/^[\s\xa0]*$/.test(c)}function Qe(c,g){P.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,g)}w(Qe,P),Qe.prototype.init=function(c,g){const y=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget,g||(y=="mouseover"?g=c.fromElement:y=="mouseout"&&(g=c.toElement)),this.relatedTarget=g,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Qe.Z.h.call(this)},Qe.prototype.h=function(){Qe.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var kt="closure_listenable_"+(Math.random()*1e6|0),Wt=0;function st(c,g,y,T,b){this.listener=c,this.proxy=null,this.src=g,this.type=y,this.capture=!!T,this.ha=b,this.key=++Wt,this.da=this.fa=!1}function J(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function ce(c,g,y){for(const T in c)g.call(y,c[T],T,c)}function ie(c,g){for(const y in c)g.call(void 0,c[y],y,c)}function O(c){const g={};for(const y in c)g[y]=c[y];return g}const q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Te(c,g){let y,T;for(let b=1;b<arguments.length;b++){T=arguments[b];for(y in T)c[y]=T[y];for(let j=0;j<q.length;j++)y=q[j],Object.prototype.hasOwnProperty.call(T,y)&&(c[y]=T[y])}}function Ie(c){this.src=c,this.g={},this.h=0}Ie.prototype.add=function(c,g,y,T,b){const j=c.toString();c=this.g[j],c||(c=this.g[j]=[],this.h++);const X=Re(c,g,T,b);return X>-1?(g=c[X],y||(g.fa=!1)):(g=new st(g,this.src,j,!!T,b),g.fa=y,c.push(g)),g};function Ae(c,g){const y=g.type;if(y in c.g){var T=c.g[y],b=Array.prototype.indexOf.call(T,g,void 0),j;(j=b>=0)&&Array.prototype.splice.call(T,b,1),j&&(J(g),c.g[y].length==0&&(delete c.g[y],c.h--))}}function Re(c,g,y,T){for(let b=0;b<c.length;++b){const j=c[b];if(!j.da&&j.listener==g&&j.capture==!!y&&j.ha==T)return b}return-1}var ze="closure_lm_"+(Math.random()*1e6|0),Ve={};function $e(c,g,y,T,b){if(Array.isArray(g)){for(let j=0;j<g.length;j++)$e(c,g[j],y,T,b);return null}return y=Pa(y),c&&c[kt]?c.J(g,y,d(T)?!!T.capture:!1,b):nn(c,g,y,!1,T,b)}function nn(c,g,y,T,b,j){if(!g)throw Error("Invalid event type");const X=d(b)?!!b.capture:!!b;let Ee=oo(c);if(Ee||(c[ze]=Ee=new Ie(c)),y=Ee.add(g,y,T,X,j),y.proxy)return y;if(T=io(),y.proxy=T,T.src=c,T.listener=y,c.addEventListener)L||(b=X),b===void 0&&(b=!1),c.addEventListener(g.toString(),T,b);else if(c.attachEvent)c.attachEvent(so(g.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return y}function io(){function c(y){return g.call(c.src,c.listener,y)}const g=Eu;return c}function ka(c,g,y,T,b){if(Array.isArray(g))for(var j=0;j<g.length;j++)ka(c,g[j],y,T,b);else T=d(T)?!!T.capture:!!T,y=Pa(y),c&&c[kt]?(c=c.i,j=String(g).toString(),j in c.g&&(g=c.g[j],y=Re(g,y,T,b),y>-1&&(J(g[y]),Array.prototype.splice.call(g,y,1),g.length==0&&(delete c.g[j],c.h--)))):c&&(c=oo(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Re(g,y,T,b)),(y=c>-1?g[c]:null)&&ui(y))}function ui(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[kt])Ae(g.i,c);else{var y=c.type,T=c.proxy;g.removeEventListener?g.removeEventListener(y,T,c.capture):g.detachEvent?g.detachEvent(so(y),T):g.addListener&&g.removeListener&&g.removeListener(T),(y=oo(g))?(Ae(y,c),y.h==0&&(y.src=null,g[ze]=null)):J(c)}}}function so(c){return c in Ve?Ve[c]:Ve[c]="on"+c}function Eu(c,g){if(c.da)c=!0;else{g=new Qe(g,this);const y=c.listener,T=c.ha||c.src;c.fa&&ui(c),c=y.call(T,g)}return c}function oo(c){return c=c[ze],c instanceof Ie?c:null}var cs="__closure_events_fn_"+(Math.random()*1e9>>>0);function Pa(c){return typeof c=="function"?c:(c[cs]||(c[cs]=function(g){return c.handleEvent(g)}),c[cs])}function yt(){x.call(this),this.i=new Ie(this),this.M=this,this.G=null}w(yt,x),yt.prototype[kt]=!0,yt.prototype.removeEventListener=function(c,g,y,T){ka(this,c,g,y,T)};function dt(c,g){var y,T=c.G;if(T)for(y=[];T;T=T.G)y.push(T);if(c=c.M,T=g.type||g,typeof g=="string")g=new P(g,c);else if(g instanceof P)g.target=g.target||c;else{var b=g;g=new P(T,c),Te(g,b)}b=!0;let j,X;if(y)for(X=y.length-1;X>=0;X--)j=g.g=y[X],b=Fn(j,T,!0,g)&&b;if(j=g.g=c,b=Fn(j,T,!0,g)&&b,b=Fn(j,T,!1,g)&&b,y)for(X=0;X<y.length;X++)j=g.g=y[X],b=Fn(j,T,!1,g)&&b}yt.prototype.N=function(){if(yt.Z.N.call(this),this.i){var c=this.i;for(const g in c.g){const y=c.g[g];for(let T=0;T<y.length;T++)J(y[T]);delete c.g[g],c.h--}}this.G=null},yt.prototype.J=function(c,g,y,T){return this.i.add(String(c),g,!1,y,T)},yt.prototype.K=function(c,g,y,T){return this.i.add(String(c),g,!0,y,T)};function Fn(c,g,y,T){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();let b=!0;for(let j=0;j<g.length;++j){const X=g[j];if(X&&!X.da&&X.capture==y){const Ee=X.listener,ft=X.ha||X.src;X.fa&&Ae(c.i,X),b=Ee.call(ft,T)!==!1&&b}}return b&&!T.defaultPrevented}function Na(c,g){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=_(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(g)>2147483647?-1:u.setTimeout(c,g||0)}function Da(c){c.g=Na(()=>{c.g=null,c.i&&(c.i=!1,Da(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class wu extends x{constructor(g,y){super(),this.m=g,this.l=y,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Da(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ci(c){x.call(this),this.h=c,this.g={}}w(ci,x);var xa=[];function ao(c){ce(c.g,function(g,y){this.g.hasOwnProperty(y)&&ui(g)},c),c.g={}}ci.prototype.N=function(){ci.Z.N.call(this),ao(this)},ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hi=u.JSON.stringify,Tu=u.JSON.parse,hs=class{stringify(c){return u.JSON.stringify(c,void 0)}parse(c){return u.JSON.parse(c,void 0)}};function di(){}function Iu(){}var fi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function lo(){P.call(this,"d")}w(lo,P);function Oa(){P.call(this,"c")}w(Oa,P);var Un={},uo=null;function pi(){return uo=uo||new yt}Un.Ia="serverreachability";function co(c){P.call(this,Un.Ia,c)}w(co,P);function Pr(c){const g=pi();dt(g,new co(g))}Un.STAT_EVENT="statevent";function Nr(c,g){P.call(this,Un.STAT_EVENT,c),this.stat=g}w(Nr,P);function ct(c){const g=pi();dt(g,new Nr(g,c))}Un.Ja="timingevent";function La(c,g){P.call(this,Un.Ja,c),this.size=g}w(La,P);function mi(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){c()},g)}function gi(){this.g=!0}gi.prototype.ua=function(){this.g=!1};function Su(c,g,y,T,b,j){c.info(function(){if(c.g)if(j){var X="",Ee=j.split("&");for(let He=0;He<Ee.length;He++){var ft=Ee[He].split("=");if(ft.length>1){const vt=ft[0];ft=ft[1];const vn=vt.split("_");X=vn.length>=2&&vn[1]=="type"?X+(vt+"="+ft+"&"):X+(vt+"=redacted&")}}}else X=null;else X=j;return"XMLHTTP REQ ("+T+") [attempt "+b+"]: "+g+`
`+y+`
`+X})}function Cu(c,g,y,T,b,j,X){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+b+"]: "+g+`
`+y+`
`+j+" "+X})}function tr(c,g,y,T){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+ds(c,y)+(T?" "+T:"")})}function Au(c,g){c.info(function(){return"TIMEOUT: "+g})}gi.prototype.info=function(){};function ds(c,g){if(!c.g)return g;if(!g)return null;try{const j=JSON.parse(g);if(j){for(c=0;c<j.length;c++)if(Array.isArray(j[c])){var y=j[c];if(!(y.length<2)){var T=y[1];if(Array.isArray(T)&&!(T.length<1)){var b=T[0];if(b!="noop"&&b!="stop"&&b!="close")for(let X=1;X<T.length;X++)T[X]=""}}}}return hi(j)}catch{return g}}var _i={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},yi={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ru;function Dr(){}w(Dr,di),Dr.prototype.g=function(){return new XMLHttpRequest},Ru=new Dr;function nr(c){return encodeURIComponent(String(c))}function ho(c){var g=1;c=c.split(":");const y=[];for(;g>0&&c.length;)y.push(c.shift()),g--;return c.length&&y.push(c.join(":")),y}function Cn(c,g,y,T){this.j=c,this.i=g,this.l=y,this.S=T||1,this.V=new ci(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ku}function ku(){this.i=null,this.g="",this.h=!1}var Pu={},Ma={};function jn(c,g,y){c.M=1,c.A=Or(An(g)),c.u=y,c.R=!0,ba(c,null)}function ba(c,g){c.F=Date.now(),fs(c),c.B=An(c.A);var y=c.B,T=c.S;Array.isArray(T)||(T=[String(T)]),$a(y.i,"t",T),c.C=0,y=c.j.L,c.h=new ku,c.g=Uu(c.j,y?g:null,!c.u),c.P>0&&(c.O=new wu(_(c.Y,c,c.g),c.P)),g=c.V,y=c.g,T=c.ba;var b="readystatechange";Array.isArray(b)||(b&&(xa[0]=b.toString()),b=xa);for(let j=0;j<b.length;j++){const X=$e(y,b[j],T||g.handleEvent,!1,g.h||g);if(!X)break;g.g[X.key]=X}g=c.J?O(c.J):{},c.u?(c.v||(c.v="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,g)):(c.v="GET",c.g.ea(c.B,c.v,null,g)),Pr(),Su(c.i,c.v,c.B,c.l,c.S,c.u)}Cn.prototype.ba=function(c){c=c.target;const g=this.O;g&&ur(c)==3?g.j():this.Y(c)},Cn.prototype.Y=function(c){try{if(c==this.g)e:{const Ee=ur(this.g),ft=this.g.ya(),He=this.g.ca();if(!(Ee<3)&&(Ee!=3||this.g&&(this.h.h||this.g.la()||Vu(this.g)))){this.K||Ee!=4||ft==7||(ft==8||He<=0?Pr(3):Pr(2)),fo(this);var g=this.g.ca();this.X=g;var y=Nu(this);if(this.o=g==200,Cu(this.i,this.v,this.B,this.l,this.S,Ee,g),this.o){if(this.U&&!this.L){t:{if(this.g){var T,b=this.g;if((T=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(T)){var j=T;break t}}j=null}if(c=j)tr(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Je(this,c);else{this.o=!1,this.m=3,ct(12),xr(this),ps(this);break e}}if(this.R){c=!0;let vt;for(;!this.K&&this.C<y.length;)if(vt=xu(this,y),vt==Ma){Ee==4&&(this.m=4,ct(14),c=!1),tr(this.i,this.l,null,"[Incomplete Response]");break}else if(vt==Pu){this.m=4,ct(15),tr(this.i,this.l,y,"[Invalid Chunk]"),c=!1;break}else tr(this.i,this.l,vt,null),Je(this,vt);if(Du(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||y.length!=0||this.h.h||(this.m=1,ct(16),c=!1),this.o=this.o&&c,!c)tr(this.i,this.l,y,"[Invalid Chunked Response]"),xr(this),ps(this);else if(y.length>0&&!this.W){this.W=!0;var X=this.j;X.g==this&&X.aa&&!X.P&&(X.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Is(X),X.P=!0,ct(11))}}else tr(this.i,this.l,y,null),Je(this,y);Ee==4&&xr(this),this.o&&!this.K&&(Ee==4?Io(this.j,this):(this.o=!1,fs(this)))}else Ka(this.g),g==400&&y.indexOf("Unknown SID")>0?(this.m=3,ct(12)):(this.m=0,ct(13)),xr(this),ps(this)}}}catch{}finally{}};function Nu(c){if(!Du(c))return c.g.la();const g=Vu(c.g);if(g==="")return"";let y="";const T=g.length,b=ur(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return xr(c),ps(c),"";c.h.i=new u.TextDecoder}for(let j=0;j<T;j++)c.h.h=!0,y+=c.h.i.decode(g[j],{stream:!(b&&j==T-1)});return g.length=0,c.h.g+=y,c.C=0,c.h.g}function Du(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function xu(c,g){var y=c.C,T=g.indexOf(`
`,y);return T==-1?Ma:(y=Number(g.substring(y,T)),isNaN(y)?Pu:(T+=1,T+y>g.length?Ma:(g=g.slice(T,T+y),c.C=T+y,g)))}Cn.prototype.cancel=function(){this.K=!0,xr(this)};function fs(c){c.T=Date.now()+c.H,Va(c,c.H)}function Va(c,g){if(c.D!=null)throw Error("WatchDog timer not null");c.D=mi(_(c.aa,c),g)}function fo(c){c.D&&(u.clearTimeout(c.D),c.D=null)}Cn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(Au(this.i,this.B),this.M!=2&&(Pr(),ct(17)),xr(this),this.m=2,ps(this)):Va(this,this.T-c)};function ps(c){c.j.I==0||c.K||Io(c.j,c)}function xr(c){fo(c);var g=c.O;g&&typeof g.dispose=="function"&&g.dispose(),c.O=null,ao(c.V),c.g&&(g=c.g,c.g=null,g.abort(),g.dispose())}function Je(c,g){try{var y=c.j;if(y.I!=0&&(y.g==c||Ua(y.h,c))){if(!c.L&&Ua(y.h,c)&&y.I==3){try{var T=y.Ba.g.parse(g)}catch{T=null}if(Array.isArray(T)&&T.length==3){var b=T;if(b[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<c.F)To(y),_n(y);else break e;dr(y),ct(18)}}else y.xa=b[1],0<y.xa-y.K&&b[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=mi(_(y.Va,y),6e3));ms(y.h)<=1&&y.ta&&(y.ta=void 0)}else yn(y,11)}else if((c.L||y.g==c)&&To(y),!A(g))for(b=y.Ba.g.parse(g),g=0;g<b.length;g++){let He=b[g];const vt=He[0];if(!(vt<=y.K))if(y.K=vt,He=He[1],y.I==2)if(He[0]=="c"){y.M=He[1],y.ba=He[2];const vn=He[3];vn!=null&&(y.ka=vn,y.j.info("VER="+y.ka));const Fr=He[4];Fr!=null&&(y.za=Fr,y.j.info("SVER="+y.za));const fr=He[5];fr!=null&&typeof fr=="number"&&fr>0&&(T=1.5*fr,y.O=T,y.j.info("backChannelRequestTimeoutMs_="+T)),T=y;const pr=c.g;if(pr){const Ao=pr.g?pr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ao){var j=T.h;j.g||Ao.indexOf("spdy")==-1&&Ao.indexOf("quic")==-1&&Ao.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(mo(j,j.h),j.h=null))}if(T.G){const Xa=pr.g?pr.g.getResponseHeader("X-HTTP-Session-Id"):null;Xa&&(T.wa=Xa,je(T.J,T.G,Xa))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-c.F,y.j.info("Handshake RTT: "+y.T+"ms")),T=y;var X=c;if(T.na=Ya(T,T.L?T.ba:null,T.W),X.L){gs(T.h,X);var Ee=X,ft=T.O;ft&&(Ee.H=ft),Ee.D&&(fo(Ee),fs(Ee)),T.g=X}else Ht(T);y.i.length>0&&Vr(y)}else He[0]!="stop"&&He[0]!="close"||yn(y,7);else y.I==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?yn(y,7):Eo(y):He[0]!="noop"&&y.l&&y.l.qa(He),y.A=0)}}Pr(4)}catch{}}var ad=class{constructor(c,g){this.g=c,this.map=g}};function po(c){this.l=c||10,u.PerformanceNavigationTiming?(c=u.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fa(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ms(c){return c.h?1:c.g?c.g.size:0}function Ua(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function mo(c,g){c.g?c.g.add(g):c.h=g}function gs(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}po.prototype.cancel=function(){if(this.i=pn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function pn(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const y of c.g.values())g=g.concat(y.G);return g}return V(c.i)}var Ou=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mn(c,g){if(c){c=c.split("&");for(let y=0;y<c.length;y++){const T=c[y].indexOf("=");let b,j=null;T>=0?(b=c[y].substring(0,T),j=c[y].substring(T+1)):b=c[y],g(b,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function rr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let g;c instanceof rr?(this.l=c.l,_s(this,c.j),this.o=c.o,this.g=c.g,ir(this,c.u),this.h=c.h,vi(this,Ga(c.i)),this.m=c.m):c&&(g=String(c).match(Ou))?(this.l=!1,_s(this,g[1]||"",!0),this.o=ys(g[2]||""),this.g=ys(g[3]||"",!0),ir(this,g[4]),this.h=ys(g[5]||"",!0),vi(this,g[6]||"",!0),this.m=ys(g[7]||"")):(this.l=!1,this.i=new Ne(null,this.l))}rr.prototype.toString=function(){const c=[];var g=this.j;g&&c.push(vs(g,za,!0),":");var y=this.g;return(y||g=="file")&&(c.push("//"),(g=this.o)&&c.push(vs(g,za,!0),"@"),c.push(nr(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&c.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(vs(y,y.charAt(0)=="/"?Es:Ba,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",vs(y,Wa)),c.join("")},rr.prototype.resolve=function(c){const g=An(this);let y=!!c.j;y?_s(g,c.j):y=!!c.o,y?g.o=c.o:y=!!c.g,y?g.g=c.g:y=c.u!=null;var T=c.h;if(y)ir(g,c.u);else if(y=!!c.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var b=g.h.lastIndexOf("/");b!=-1&&(T=g.h.slice(0,b+1)+T)}if(b=T,b==".."||b==".")T="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){T=b.lastIndexOf("/",0)==0,b=b.split("/");const j=[];for(let X=0;X<b.length;){const Ee=b[X++];Ee=="."?T&&X==b.length&&j.push(""):Ee==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),T&&X==b.length&&j.push("")):(j.push(Ee),T=!0)}T=j.join("/")}else T=b}return y?g.h=T:y=c.i.toString()!=="",y?vi(g,Ga(c.i)):y=!!c.m,y&&(g.m=c.m),g};function An(c){return new rr(c)}function _s(c,g,y){c.j=y?ys(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function ir(c,g){if(g){if(g=Number(g),isNaN(g)||g<0)throw Error("Bad port number "+g);c.u=g}else c.u=null}function vi(c,g,y){g instanceof Ne?(c.i=g,_o(c.i,c.l)):(y||(g=vs(g,ld)),c.i=new Ne(g,c.l))}function je(c,g,y){c.i.set(g,y)}function Or(c){return je(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function ys(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function vs(c,g,y){return typeof c=="string"?(c=encodeURI(c).replace(g,ja),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function ja(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var za=/[#\/\?@]/g,Ba=/[#\?:]/g,Es=/[#\?]/g,ld=/[#\?@]/g,Wa=/#/g;function Ne(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function sr(c){c.g||(c.g=new Map,c.h=0,c.i&&mn(c.i,function(g,y){c.add(decodeURIComponent(g.replace(/\+/g," ")),y)}))}n=Ne.prototype,n.add=function(c,g){sr(this),this.i=null,c=or(this,c);let y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(g),this.h+=1,this};function Ha(c,g){sr(c),g=or(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function go(c,g){return sr(c),g=or(c,g),c.g.has(g)}n.forEach=function(c,g){sr(this),this.g.forEach(function(y,T){y.forEach(function(b){c.call(g,b,T,this)},this)},this)};function qa(c,g){sr(c);let y=[];if(typeof g=="string")go(c,g)&&(y=y.concat(c.g.get(or(c,g))));else for(c=Array.from(c.g.values()),g=0;g<c.length;g++)y=y.concat(c[g]);return y}n.set=function(c,g){return sr(this),this.i=null,c=or(this,c),go(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=qa(this,c),c.length>0?String(c[0]):g):g};function $a(c,g,y){Ha(c,g),y.length>0&&(c.i=null,c.g.set(or(c,g),V(y)),c.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(let T=0;T<g.length;T++){var y=g[T];const b=nr(y);y=qa(this,y);for(let j=0;j<y.length;j++){let X=b;y[j]!==""&&(X+="="+nr(y[j])),c.push(X)}}return this.i=c.join("&")};function Ga(c){const g=new Ne;return g.i=c.i,c.g&&(g.g=new Map(c.g),g.h=c.h),g}function or(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function _o(c,g){g&&!c.j&&(sr(c),c.i=null,c.g.forEach(function(y,T){const b=T.toLowerCase();T!=b&&(Ha(this,T),$a(this,b,y))},c)),c.j=g}function ar(c,g){const y=new gi;if(u.Image){const T=new Image;T.onload=E(Mt,y,"TestLoadImage: loaded",!0,g,T),T.onerror=E(Mt,y,"TestLoadImage: error",!1,g,T),T.onabort=E(Mt,y,"TestLoadImage: abort",!1,g,T),T.ontimeout=E(Mt,y,"TestLoadImage: timeout",!1,g,T),u.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else g(!1)}function lr(c,g){const y=new gi,T=new AbortController,b=setTimeout(()=>{T.abort(),Mt(y,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:T.signal}).then(j=>{clearTimeout(b),j.ok?Mt(y,"TestPingServer: ok",!0,g):Mt(y,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(b),Mt(y,"TestPingServer: error",!1,g)})}function Mt(c,g,y,T,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),T(y)}catch{}}function ws(){this.g=new hs}function Lr(c){this.i=c.Sb||null,this.h=c.ab||!1}w(Lr,di),Lr.prototype.g=function(){return new gn(this.i,this.h)};function gn(c,g){yt.call(this),this.H=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(gn,yt),n=gn.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=g,this.readyState=1,zn(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const g={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(g.body=c),(this.H||u).fetch(new Request(this.D,g)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ei(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,zn(this)),this.g&&(this.readyState=3,zn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Lu(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Lu(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.B.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?Ei(this):zn(this),this.readyState==3&&Lu(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,Ei(this))},n.Na=function(c){this.g&&(this.response=c,Ei(this))},n.ga=function(){this.g&&Ei(this)};function Ei(c){c.readyState=4,c.l=null,c.j=null,c.B=null,zn(c)}n.setRequestHeader=function(c,g){this.A.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var y=g.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=g.next();return c.join(`\r
`)};function zn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(gn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Mu(c){let g="";return ce(c,function(y,T){g+=T,g+=":",g+=y,g+=`\r
`}),g}function yo(c,g,y){e:{for(T in y){var T=!1;break e}T=!0}T||(y=Mu(y),typeof c=="string"?y!=null&&nr(y):je(c,g,y))}function Ge(c){yt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(Ge,yt);var bu=/^https?$/i,ud=["POST","PUT"];n=Ge.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,g,y,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ru.g(),this.g.onreadystatechange=I(_(this.Ca,this));try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(j){wi(this,j);return}if(c=y||"",y=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var b in T)y.set(b,T[b]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const j of T.keys())y.set(j,T.get(j));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),b=u.FormData&&c instanceof u.FormData,!(Array.prototype.indexOf.call(ud,g,void 0)>=0)||T||b||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,X]of y)this.g.setRequestHeader(j,X);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(j){wi(this,j)}};function wi(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.o=5,Ti(c),br(c)}function Ti(c){c.A||(c.A=!0,dt(c,"complete"),dt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,dt(this,"complete"),dt(this,"abort"),br(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),br(this,!0)),Ge.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Mr(this):this.Xa())},n.Xa=function(){Mr(this)};function Mr(c){if(c.h&&typeof a<"u"){if(c.v&&ur(c)==4)setTimeout(c.Ca.bind(c),0);else if(dt(c,"readystatechange"),ur(c)==4){c.h=!1;try{const j=c.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var y;if(!(y=g)){var T;if(T=j===0){let X=String(c.D).match(Ou)[1]||null;!X&&u.self&&u.self.location&&(X=u.self.location.protocol.slice(0,-1)),T=!bu.test(X?X.toLowerCase():"")}y=T}if(y)dt(c,"complete"),dt(c,"success");else{c.o=6;try{var b=ur(c)>2?c.g.statusText:""}catch{b=""}c.l=b+" ["+c.ca()+"]",Ti(c)}}finally{br(c)}}}}function br(c,g){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const y=c.g;c.g=null,g||dt(c,"ready");try{y.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ur(c){return c.g?c.g.readyState:0}n.ca=function(){try{return ur(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Tu(g)}};function Vu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ka(c){const g={};c=(c.g&&ur(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(A(c[T]))continue;var y=ho(c[T]);const b=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=g[b]||[];g[b]=j,j.push(y)}ie(g,function(T){return T.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function cr(c,g,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||g}function vo(c){this.za=0,this.i=[],this.j=new gi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=cr("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=cr("baseRetryDelayMs",5e3,c),this.Za=cr("retryDelaySeedMs",1e4,c),this.Ta=cr("forwardChannelMaxRetries",2,c),this.va=cr("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new po(c&&c.concurrentRequestLimit),this.Ba=new ws,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=vo.prototype,n.ka=8,n.I=1,n.connect=function(c,g,y,T){ct(0),this.W=c,this.H=g||{},y&&T!==void 0&&(this.H.OSID=y,this.H.OAID=T),this.F=this.X,this.J=Ya(this,null,this.W),Vr(this)};function Eo(c){if(wo(c),c.I==3){var g=c.V++,y=An(c.J);if(je(y,"SID",c.M),je(y,"RID",g),je(y,"TYPE","terminate"),hr(c,y),g=new Cn(c,c.j,g),g.M=2,g.A=Or(An(y)),y=!1,u.navigator&&u.navigator.sendBeacon)try{y=u.navigator.sendBeacon(g.A.toString(),"")}catch{}!y&&u.Image&&(new Image().src=g.A,y=!0),y||(g.g=Uu(g.j,null),g.g.ea(g.A)),g.F=Date.now(),fs(g)}Ss(c)}function _n(c){c.g&&(Is(c),c.g.cancel(),c.g=null)}function wo(c){_n(c),c.v&&(u.clearTimeout(c.v),c.v=null),To(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&u.clearTimeout(c.m),c.m=null)}function Vr(c){if(!Fa(c.h)&&!c.m){c.m=!0;var g=c.Ea;Ke||C(),Oe||(Ke(),Oe=!0),N.add(g,c),c.D=0}}function Fu(c,g){return ms(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=g.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=mi(_(c.Ea,c,g),So(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const b=new Cn(this,this.j,c);let j=this.o;if(this.U&&(j?(j=O(j),Te(j,this.U)):j=this.U),this.u!==null||this.R||(b.J=j,j=null),this.S)e:{for(var g=0,y=0;y<this.i.length;y++){t:{var T=this.i[y];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(g+=T,g>4096){g=y;break e}if(g===4096||y===this.i.length-1){g=y+1;break e}}g=1e3}else g=1e3;g=Qa(this,b,g),y=An(this.J),je(y,"RID",c),je(y,"CVER",22),this.G&&je(y,"X-HTTP-Session-Id",this.G),hr(this,y),j&&(this.R?g="headers="+nr(Mu(j))+"&"+g:this.u&&yo(y,this.u,j)),mo(this.h,b),this.Ra&&je(y,"TYPE","init"),this.S?(je(y,"$req",g),je(y,"SID","null"),b.U=!0,jn(b,y,null)):jn(b,y,g),this.I=2}}else this.I==3&&(c?Ts(this,c):this.i.length==0||Fa(this.h)||Ts(this))};function Ts(c,g){var y;g?y=g.l:y=c.V++;const T=An(c.J);je(T,"SID",c.M),je(T,"RID",y),je(T,"AID",c.K),hr(c,T),c.u&&c.o&&yo(T,c.u,c.o),y=new Cn(c,c.j,y,c.D+1),c.u===null&&(y.J=c.o),g&&(c.i=g.G.concat(c.i)),g=Qa(c,y,1e3),y.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),mo(c.h,y),jn(y,T,g)}function hr(c,g){c.H&&ce(c.H,function(y,T){je(g,T,y)}),c.l&&ce({},function(y,T){je(g,T,y)})}function Qa(c,g,y){y=Math.min(c.i.length,y);const T=c.l?_(c.l.Ka,c.l,c):null;e:{var b=c.i;let Ee=-1;for(;;){const ft=["count="+y];Ee==-1?y>0?(Ee=b[0].g,ft.push("ofs="+Ee)):Ee=0:ft.push("ofs="+Ee);let He=!0;for(let vt=0;vt<y;vt++){var j=b[vt].g;const vn=b[vt].map;if(j-=Ee,j<0)Ee=Math.max(0,b[vt].g-100),He=!1;else try{j="req"+j+"_"||"";try{var X=vn instanceof Map?vn:Object.entries(vn);for(const[Fr,fr]of X){let pr=fr;d(fr)&&(pr=hi(fr)),ft.push(j+Fr+"="+encodeURIComponent(pr))}}catch(Fr){throw ft.push(j+"type="+encodeURIComponent("_badmap")),Fr}}catch{T&&T(vn)}}if(He){X=ft.join("&");break e}}X=void 0}return c=c.i.splice(0,y),g.G=c,X}function Ht(c){if(!c.g&&!c.v){c.Y=1;var g=c.Da;Ke||C(),Oe||(Ke(),Oe=!0),N.add(g,c),c.A=0}}function dr(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=mi(_(c.Da,c),So(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Ii(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=mi(_(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ct(10),_n(this),Ii(this))};function Is(c){c.B!=null&&(u.clearTimeout(c.B),c.B=null)}function Ii(c){c.g=new Cn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var g=An(c.na);je(g,"RID","rpc"),je(g,"SID",c.M),je(g,"AID",c.K),je(g,"CI",c.F?"0":"1"),!c.F&&c.ia&&je(g,"TO",c.ia),je(g,"TYPE","xmlhttp"),hr(c,g),c.u&&c.o&&yo(g,c.u,c.o),c.O&&(c.g.H=c.O);var y=c.g;c=c.ba,y.M=1,y.A=Or(An(g)),y.u=null,y.R=!0,ba(y,c)}n.Va=function(){this.C!=null&&(this.C=null,_n(this),dr(this),ct(19))};function To(c){c.C!=null&&(u.clearTimeout(c.C),c.C=null)}function Io(c,g){var y=null;if(c.g==g){To(c),Is(c),c.g=null;var T=2}else if(Ua(c.h,g))y=g.G,gs(c.h,g),T=1;else return;if(c.I!=0){if(g.o)if(T==1){y=g.u?g.u.length:0,g=Date.now()-g.F;var b=c.D;T=pi(),dt(T,new La(T,y)),Vr(c)}else Ht(c);else if(b=g.m,b==3||b==0&&g.X>0||!(T==1&&Fu(c,g)||T==2&&dr(c)))switch(y&&y.length>0&&(g=c.h,g.i=g.i.concat(y)),b){case 1:yn(c,5);break;case 4:yn(c,10);break;case 3:yn(c,6);break;default:yn(c,2)}}}function So(c,g){let y=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(y*=2),y*g}function yn(c,g){if(c.j.info("Error code "+g),g==2){var y=_(c.bb,c),T=c.Ua;const b=!T;T=new rr(T||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||_s(T,"https"),Or(T),b?ar(T.toString(),y):lr(T.toString(),y)}else ct(2);c.I=0,c.l&&c.l.pa(g),Ss(c),wo(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Ss(c){if(c.I=0,c.ja=[],c.l){const g=pn(c.h);(g.length!=0||c.i.length!=0)&&(z(c.ja,g),z(c.ja,c.i),c.h.i.length=0,V(c.i),c.i.length=0),c.l.oa()}}function Ya(c,g,y){var T=y instanceof rr?An(y):new rr(y);if(T.g!="")g&&(T.g=g+"."+T.g),ir(T,T.u);else{var b=u.location;T=b.protocol,g=g?g+"."+b.hostname:b.hostname,b=+b.port;const j=new rr(null);T&&_s(j,T),g&&(j.g=g),b&&ir(j,b),y&&(j.h=y),T=j}return y=c.G,g=c.wa,y&&g&&je(T,y,g),je(T,"VER",c.ka),hr(c,T),T}function Uu(c,g,y){if(g&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Aa&&!c.ma?new Ge(new Lr({ab:y})):new Ge(c.ma),g.Fa(c.L),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ju(){}n=ju.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Co(){}Co.prototype.g=function(c,g){return new bt(c,g)};function bt(c,g){yt.call(this),this.g=new vo(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.sa&&(c?c["X-WebChannel-Client-Profile"]=g.sa:c={"X-WebChannel-Client-Profile":g.sa}),this.g.U=c,(c=g&&g.Qb)&&!A(c)&&(this.g.u=c),this.A=g&&g.supportsCrossDomainXhr||!1,this.v=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!A(g)&&(this.g.G=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Si(this)}w(bt,yt),bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){Eo(this.g)},bt.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.v&&(y={},y.__data__=hi(c),c=y);g.i.push(new ad(g.Ya++,c)),g.I==3&&Vr(g)},bt.prototype.N=function(){this.g.l=null,delete this.j,Eo(this.g),delete this.g,bt.Z.N.call(this)};function zu(c){lo.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const y in g){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}w(zu,lo);function Bu(){Oa.call(this),this.status=1}w(Bu,Oa);function Si(c){this.g=c}w(Si,ju),Si.prototype.ra=function(){dt(this.g,"a")},Si.prototype.qa=function(c){dt(this.g,new zu(c))},Si.prototype.pa=function(c){dt(this.g,new Bu)},Si.prototype.oa=function(){dt(this.g,"b")},Co.prototype.createWebChannel=Co.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,eI=function(){return new Co},ZT=function(){return pi()},JT=Un,Ip={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_i.NO_ERROR=0,_i.TIMEOUT=8,_i.HTTP_ERROR=6,Yc=_i,yi.COMPLETE="complete",XT=yi,Iu.EventType=fi,fi.OPEN="a",fi.CLOSE="b",fi.ERROR="c",fi.MESSAGE="d",yt.prototype.listen=yt.prototype.J,Nl=Iu,Ge.prototype.listenOnce=Ge.prototype.K,Ge.prototype.getLastError=Ge.prototype.Ha,Ge.prototype.getLastErrorCode=Ge.prototype.ya,Ge.prototype.getStatus=Ge.prototype.ca,Ge.prototype.getResponseJson=Ge.prototype.La,Ge.prototype.getResponseText=Ge.prototype.la,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Fa,YT=Ge}).apply(typeof Uc<"u"?Uc:typeof self<"u"?self:typeof window<"u"?window:{});const Vv="@firebase/firestore",Fv="4.9.2";/**
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
 */class Yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Yt.UNAUTHENTICATED=new Yt(null),Yt.GOOGLE_CREDENTIALS=new Yt("google-credentials-uid"),Yt.FIRST_PARTY=new Yt("first-party-uid"),Yt.MOCK_USER=new Yt("mock-user");/**
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
 */let Ia="12.3.0";/**
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
 */const Qs=new Oh("@firebase/firestore");function Ko(){return Qs.logLevel}function re(n,...e){if(Qs.logLevel<=Ce.DEBUG){const t=e.map(Am);Qs.debug(`Firestore (${Ia}): ${n}`,...t)}}function ii(n,...e){if(Qs.logLevel<=Ce.ERROR){const t=e.map(Am);Qs.error(`Firestore (${Ia}): ${n}`,...t)}}function ha(n,...e){if(Qs.logLevel<=Ce.WARN){const t=e.map(Am);Qs.warn(`Firestore (${Ia}): ${n}`,...t)}}function Am(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function ge(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,tI(n,r,t)}function tI(n,e,t){let r=`FIRESTORE (${Ia}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ii(r),new Error(r)}function We(n,e,t,r){let o="Unexpected state";typeof t=="string"?o=t:r=t,n||tI(e,o,r)}function we(n,e){return n}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends oi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ki{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class nI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Yt.UNAUTHENTICATED)))}shutdown(){}}class bN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class VN{constructor(e){this.t=e,this.currentUser=Yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){We(this.o===void 0,42304);let r=this.i;const o=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let a=new Ki;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Ki,e.enqueueRetryable((()=>o(this.currentUser)))};const u=()=>{const p=a;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},d=p=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Ki)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(We(typeof r.accessToken=="string",31837,{l:r}),new nI(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string",2055,{h:e}),new Yt(e)}}class FN{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class UN{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new FN(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Uv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jN{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,fn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){We(this.o===void 0,3512);const r=a=>{a.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,re("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const o=a=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>o(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Uv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(We(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Uv(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function zN(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Rm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=zN(40);for(let a=0;a<o.length;++a)r.length<20&&o[a]<t&&(r+=e.charAt(o[a]%62))}return r}}function ke(n,e){return n<e?-1:n>e?1:0}function Sp(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const o=n.charAt(r),a=e.charAt(r);if(o!==a)return Yf(o)===Yf(a)?ke(o,a):Yf(o)?1:-1}return ke(n.length,e.length)}const BN=55296,WN=57343;function Yf(n){const e=n.charCodeAt(0);return e>=BN&&e<=WN}function da(n,e,t){return n.length===e.length&&n.every(((r,o)=>t(r,e[o])))}/**
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
 */const jv="__name__";class vr{constructor(e,t,r){t===void 0?t=0:t>e.length&&ge(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ge(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return vr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof vr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let o=0;o<r;o++){const a=vr.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return ke(e.length,t.length)}static compareSegments(e,t){const r=vr.isNumericId(e),o=vr.isNumericId(t);return r&&!o?-1:!r&&o?1:r&&o?vr.extractNumericId(e).compare(vr.extractNumericId(t)):Sp(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gi.fromString(e.substring(4,e.length-2))}}class Xe extends vr{construct(e,t,r){return new Xe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((o=>o.length>0)))}return new Xe(t)}static emptyPath(){return new Xe([])}}const HN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class zt extends vr{construct(e,t,r){return new zt(e,t,r)}static isValidIdentifier(e){return HN.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),zt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===jv}static keyField(){return new zt([jv])}static fromServerFormat(e){const t=[];let r="",o=0;const a=()=>{if(r.length===0)throw new ee(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ee(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ee(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,o+=2}else d==="`"?(u=!u,o++):d!=="."||u?(r+=d,o++):(a(),o++)}if(a(),u)throw new ee(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new zt(t)}static emptyPath(){return new zt([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(Xe.fromString(e))}static fromName(e){return new ue(Xe.fromString(e).popFirst(5))}static empty(){return new ue(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new Xe(e.slice()))}}/**
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
 */function rI(n,e,t){if(!t)throw new ee(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function qN(n,e,t,r){if(e===!0&&r===!0)throw new ee(B.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function zv(n){if(!ue.isDocumentKey(n))throw new ee(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Bv(n){if(ue.isDocumentKey(n))throw new ee(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function iI(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Wh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ge(12329,{type:typeof n})}function Qi(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ee(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wh(n);throw new ee(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function It(n,e){const t={typeString:n};return e&&(t.value=e),t}function mu(n,e){if(!iI(n))throw new ee(B.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const o=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(o&&typeof u!==o){t=`JSON field '${r}' must be a ${o}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new ee(B.INVALID_ARGUMENT,t);return!0}/**
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
 */const Wv=-62135596800,Hv=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Hv);return new rt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Wv)throw new ee(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hv}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:rt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(mu(e,rt._jsonSchema))return new rt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Wv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}rt._jsonSchemaVersion="firestore/timestamp/1.0",rt._jsonSchema={type:It("string",rt._jsonSchemaVersion),seconds:It("number"),nanoseconds:It("number")};/**
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
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new rt(0,0))}static max(){return new ve(new rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ql=-1;function $N(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(r===1e9?new rt(t+1,0):new rt(t,r));return new es(o,ue.empty(),e)}function GN(n){return new es(n.readTime,n.key,Ql)}class es{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new es(ve.min(),ue.empty(),Ql)}static max(){return new es(ve.max(),ue.empty(),Ql)}}function KN(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ue.comparator(n.documentKey,e.documentKey),t!==0?t:ke(n.largestBatchId,e.largestBatchId))}/**
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
 */const QN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Sa(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==QN)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((r,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,r)=>{t(e)}))}static reject(e){return new H(((t,r)=>{r(e)}))}static waitFor(e){return new H(((t,r)=>{let o=0,a=0,u=!1;e.forEach((d=>{++o,d.next((()=>{++a,u&&a===o&&t()}),(p=>r(p)))})),u=!0,a===o&&t()}))}static or(e){let t=H.resolve(!1);for(const r of e)t=t.next((o=>o?H.resolve(o):r()));return t}static forEach(e,t){const r=[];return e.forEach(((o,a)=>{r.push(t.call(this,o,a))})),this.waitFor(r)}static mapArray(e,t){return new H(((r,o)=>{const a=e.length,u=new Array(a);let d=0;for(let p=0;p<a;p++){const _=p;t(e[_]).next((E=>{u[_]=E,++d,d===a&&r(u)}),(E=>o(E)))}}))}static doWhile(e,t){return new H(((r,o)=>{const a=()=>{e()===!0?t().next((()=>{a()}),o):r()};a()}))}}function XN(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ca(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Hh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Hh.ce=-1;/**
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
 */const km=-1;function qh(n){return n==null}function Eh(n){return n===0&&1/n==-1/0}function JN(n){return typeof n=="number"&&Number.isInteger(n)&&!Eh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const sI="";function ZN(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=qv(e)),e=eD(n.get(t),e);return qv(e)}function eD(n,e){let t=e;const r=n.length;for(let o=0;o<r;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case sI:t+="";break;default:t+=a}}return t}function qv(n){return n+sI+""}/**
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
 */function $v(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function eo(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function oI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ut{constructor(e,t){this.comparator=e,this.root=t||Ut.EMPTY}insert(e,t){return new ut(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ut.BLACK,null,null))}remove(e){return new ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ut.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return t+r.left.size;o<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jc(this.root,e,this.comparator,!1)}getReverseIterator(){return new jc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jc(this.root,e,this.comparator,!0)}}class jc{constructor(e,t,r,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ut{constructor(e,t,r,o,a){this.key=e,this.value=t,this.color=r??Ut.RED,this.left=o??Ut.EMPTY,this.right=a??Ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,o,a){return new Ut(e??this.key,t??this.value,r??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const a=r(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,r),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ut.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}Ut.EMPTY=null,Ut.RED=!0,Ut.BLACK=!1;Ut.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,t,r,o,a){return this}insert(e,t,r){return new Ut(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class At{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Gv(this.data.getIterator())}getIteratorFrom(e){return new Gv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new At(this.comparator);return t.data=e,t}}class Gv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xn{constructor(e){this.fields=e,e.sort(zt.comparator)}static empty(){return new Xn([])}unionWith(e){let t=new At(zt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Xn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return da(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class aI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Bt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new aI("Invalid base64 string: "+a):a}})(e);return new Bt(t)}static fromUint8Array(e){const t=(function(o){let a="";for(let u=0;u<o.length;++u)a+=String.fromCharCode(o[u]);return a})(e);return new Bt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const tD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ts(n){if(We(!!n,39018),typeof n=="string"){let e=0;const t=tD.exec(n);if(We(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:mt(n.seconds),nanos:mt(n.nanos)}}function mt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ns(n){return typeof n=="string"?Bt.fromBase64String(n):Bt.fromUint8Array(n)}/**
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
 */const lI="server_timestamp",uI="__type__",cI="__previous_value__",hI="__local_write_time__";function Pm(n){return(n?.mapValue?.fields||{})[uI]?.stringValue===lI}function $h(n){const e=n.mapValue.fields[cI];return Pm(e)?$h(e):e}function Yl(n){const e=ts(n.mapValue.fields[hI].timestampValue);return new rt(e.seconds,e.nanos)}/**
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
 */class nD{constructor(e,t,r,o,a,u,d,p,_,E){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=o,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=_,this.isUsingEmulator=E}}const wh="(default)";class Xl{constructor(e,t){this.projectId=e,this.database=t||wh}static empty(){return new Xl("","")}get isDefaultDatabase(){return this.database===wh}isEqual(e){return e instanceof Xl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const dI="__type__",rD="__max__",zc={mapValue:{}},fI="__vector__",Th="value";function rs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pm(n)?4:sD(n)?9007199254740991:iD(n)?10:11:ge(28295,{value:n})}function kr(n,e){if(n===e)return!0;const t=rs(n);if(t!==rs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Yl(n).isEqual(Yl(e));case 3:return(function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const u=ts(o.timestampValue),d=ts(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,a){return ns(o.bytesValue).isEqual(ns(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,a){return mt(o.geoPointValue.latitude)===mt(a.geoPointValue.latitude)&&mt(o.geoPointValue.longitude)===mt(a.geoPointValue.longitude)})(n,e);case 2:return(function(o,a){if("integerValue"in o&&"integerValue"in a)return mt(o.integerValue)===mt(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const u=mt(o.doubleValue),d=mt(a.doubleValue);return u===d?Eh(u)===Eh(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return da(n.arrayValue.values||[],e.arrayValue.values||[],kr);case 10:case 11:return(function(o,a){const u=o.mapValue.fields||{},d=a.mapValue.fields||{};if($v(u)!==$v(d))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(d[p]===void 0||!kr(u[p],d[p])))return!1;return!0})(n,e);default:return ge(52216,{left:n})}}function Jl(n,e){return(n.values||[]).find((t=>kr(t,e)))!==void 0}function fa(n,e){if(n===e)return 0;const t=rs(n),r=rs(e);if(t!==r)return ke(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=mt(a.integerValue||a.doubleValue),p=mt(u.integerValue||u.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return Kv(n.timestampValue,e.timestampValue);case 4:return Kv(Yl(n),Yl(e));case 5:return Sp(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=ns(a),p=ns(u);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),p=u.split("/");for(let _=0;_<d.length&&_<p.length;_++){const E=ke(d[_],p[_]);if(E!==0)return E}return ke(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=ke(mt(a.latitude),mt(u.latitude));return d!==0?d:ke(mt(a.longitude),mt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Qv(n.arrayValue,e.arrayValue);case 10:return(function(a,u){const d=a.fields||{},p=u.fields||{},_=d[Th]?.arrayValue,E=p[Th]?.arrayValue,w=ke(_?.values?.length||0,E?.values?.length||0);return w!==0?w:Qv(_,E)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===zc.mapValue&&u===zc.mapValue)return 0;if(a===zc.mapValue)return 1;if(u===zc.mapValue)return-1;const d=a.fields||{},p=Object.keys(d),_=u.fields||{},E=Object.keys(_);p.sort(),E.sort();for(let w=0;w<p.length&&w<E.length;++w){const I=Sp(p[w],E[w]);if(I!==0)return I;const V=fa(d[p[w]],_[E[w]]);if(V!==0)return V}return ke(p.length,E.length)})(n.mapValue,e.mapValue);default:throw ge(23264,{he:t})}}function Kv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ke(n,e);const t=ts(n),r=ts(e),o=ke(t.seconds,r.seconds);return o!==0?o:ke(t.nanos,r.nanos)}function Qv(n,e){const t=n.values||[],r=e.values||[];for(let o=0;o<t.length&&o<r.length;++o){const a=fa(t[o],r[o]);if(a)return a}return ke(t.length,r.length)}function pa(n){return Cp(n)}function Cp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=ts(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return ns(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ue.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",o=!0;for(const a of t.values||[])o?o=!1:r+=",",r+=Cp(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const u of r)a?a=!1:o+=",",o+=`${u}:${Cp(t.fields[u])}`;return o+"}"})(n.mapValue):ge(61005,{value:n})}function Xc(n){switch(rs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$h(n);return e?16+Xc(e):16;case 5:return 2*n.stringValue.length;case 6:return ns(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((o,a)=>o+Xc(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let o=0;return eo(r.fields,((a,u)=>{o+=a.length+Xc(u)})),o})(n.mapValue);default:throw ge(13486,{value:n})}}function Yv(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ap(n){return!!n&&"integerValue"in n}function Nm(n){return!!n&&"arrayValue"in n}function Xv(n){return!!n&&"nullValue"in n}function Jv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Jc(n){return!!n&&"mapValue"in n}function iD(n){return(n?.mapValue?.fields||{})[dI]?.stringValue===fI}function jl(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return eo(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=jl(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=jl(n.arrayValue.values[t]);return e}return{...n}}function sD(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===rD}/**
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
 */class On{constructor(e){this.value=e}static empty(){return new On({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Jc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=jl(t)}setAll(e){let t=zt.emptyPath(),r={},o=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,r,o),r={},o=[],t=d.popLast()}u?r[d.lastSegment()]=jl(u):o.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,o)}delete(e){const t=this.field(e.popLast());Jc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return kr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=t.mapValue.fields[e.get(r)];Jc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,r){eo(t,((o,a)=>e[o]=a));for(const o of r)delete e[o]}clone(){return new On(jl(this.value))}}function pI(n){const e=[];return eo(n.fields,((t,r)=>{const o=new zt([t]);if(Jc(r)){const a=pI(r.mapValue).fields;if(a.length===0)e.push(o);else for(const u of a)e.push(o.child(u))}else e.push(o)})),new Xn(e)}/**
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
 */class Zt{constructor(e,t,r,o,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=o,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new Zt(e,0,ve.min(),ve.min(),ve.min(),On.empty(),0)}static newFoundDocument(e,t,r,o){return new Zt(e,1,t,ve.min(),r,o,0)}static newNoDocument(e,t){return new Zt(e,2,t,ve.min(),ve.min(),On.empty(),0)}static newUnknownDocument(e,t){return new Zt(e,3,t,ve.min(),ve.min(),On.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=On.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=On.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ih{constructor(e,t){this.position=e,this.inclusive=t}}function Zv(n,e,t){let r=0;for(let o=0;o<n.position.length;o++){const a=e[o],u=n.position[o];if(a.field.isKeyField()?r=ue.comparator(ue.fromName(u.referenceValue),t.key):r=fa(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function eE(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!kr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Zl{constructor(e,t="asc"){this.field=e,this.dir=t}}function oD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class mI{}class Tt extends mI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new lD(e,t,r):t==="array-contains"?new hD(e,r):t==="in"?new dD(e,r):t==="not-in"?new fD(e,r):t==="array-contains-any"?new pD(e,r):new Tt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new uD(e,r):new cD(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(fa(t,this.value)):t!==null&&rs(this.value)===rs(t)&&this.matchesComparison(fa(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class er extends mI{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new er(e,t)}matches(e){return gI(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function gI(n){return n.op==="and"}function _I(n){return aD(n)&&gI(n)}function aD(n){for(const e of n.filters)if(e instanceof er)return!1;return!0}function Rp(n){if(n instanceof Tt)return n.field.canonicalString()+n.op.toString()+pa(n.value);if(_I(n))return n.filters.map((e=>Rp(e))).join(",");{const e=n.filters.map((t=>Rp(t))).join(",");return`${n.op}(${e})`}}function yI(n,e){return n instanceof Tt?(function(r,o){return o instanceof Tt&&r.op===o.op&&r.field.isEqual(o.field)&&kr(r.value,o.value)})(n,e):n instanceof er?(function(r,o){return o instanceof er&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce(((a,u,d)=>a&&yI(u,o.filters[d])),!0):!1})(n,e):void ge(19439)}function vI(n){return n instanceof Tt?(function(t){return`${t.field.canonicalString()} ${t.op} ${pa(t.value)}`})(n):n instanceof er?(function(t){return t.op.toString()+" {"+t.getFilters().map(vI).join(" ,")+"}"})(n):"Filter"}class lD extends Tt{constructor(e,t,r){super(e,t,r),this.key=ue.fromName(r.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}class uD extends Tt{constructor(e,t){super(e,"in",t),this.keys=EI("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class cD extends Tt{constructor(e,t){super(e,"not-in",t),this.keys=EI("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function EI(n,e){return(e.arrayValue?.values||[]).map((t=>ue.fromName(t.referenceValue)))}class hD extends Tt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Nm(t)&&Jl(t.arrayValue,this.value)}}class dD extends Tt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Jl(this.value.arrayValue,t)}}class fD extends Tt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Jl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Jl(this.value.arrayValue,t)}}class pD extends Tt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Nm(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Jl(this.value.arrayValue,r)))}}/**
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
 */class mD{constructor(e,t=null,r=[],o=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=o,this.limit=a,this.startAt=u,this.endAt=d,this.Te=null}}function tE(n,e=null,t=[],r=[],o=null,a=null,u=null){return new mD(n,e,t,r,o,a,u)}function Dm(n){const e=we(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Rp(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),qh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>pa(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>pa(r))).join(",")),e.Te=t}return e.Te}function xm(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!oD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!yI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!eE(n.startAt,e.startAt)&&eE(n.endAt,e.endAt)}function kp(n){return ue.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Aa{constructor(e,t=null,r=[],o=[],a=null,u="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=o,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function gD(n,e,t,r,o,a,u,d){return new Aa(n,e,t,r,o,a,u,d)}function Gh(n){return new Aa(n)}function nE(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function wI(n){return n.collectionGroup!==null}function zl(n){const e=we(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new At(zt.comparator);return u.filters.forEach((p=>{p.getFlattenedFilters().forEach((_=>{_.isInequality()&&(d=d.add(_.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new Zl(a,r))})),t.has(zt.keyField().canonicalString())||e.Ie.push(new Zl(zt.keyField(),r))}return e.Ie}function Sr(n){const e=we(n);return e.Ee||(e.Ee=_D(e,zl(n))),e.Ee}function _D(n,e){if(n.limitType==="F")return tE(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const a=o.dir==="desc"?"asc":"desc";return new Zl(o.field,a)}));const t=n.endAt?new Ih(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ih(n.startAt.position,n.startAt.inclusive):null;return tE(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Pp(n,e){const t=n.filters.concat([e]);return new Aa(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Sh(n,e,t){return new Aa(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Kh(n,e){return xm(Sr(n),Sr(e))&&n.limitType===e.limitType}function TI(n){return`${Dm(Sr(n))}|lt:${n.limitType}`}function Qo(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((o=>vI(o))).join(", ")}]`),qh(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((o=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(o))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((o=>pa(o))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((o=>pa(o))).join(",")),`Target(${r})`})(Sr(n))}; limitType=${n.limitType})`}function Qh(n,e){return e.isFoundDocument()&&(function(r,o){const a=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ue.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,o){for(const a of zl(r))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,o){for(const a of r.filters)if(!a.matches(o))return!1;return!0})(n,e)&&(function(r,o){return!(r.startAt&&!(function(u,d,p){const _=Zv(u,d,p);return u.inclusive?_<=0:_<0})(r.startAt,zl(r),o)||r.endAt&&!(function(u,d,p){const _=Zv(u,d,p);return u.inclusive?_>=0:_>0})(r.endAt,zl(r),o))})(n,e)}function yD(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function II(n){return(e,t)=>{let r=!1;for(const o of zl(n)){const a=vD(o,e,t);if(a!==0)return a;r=r||o.field.isKeyField()}return 0}}function vD(n,e,t){const r=n.field.isKeyField()?ue.comparator(e.key,t.key):(function(a,u,d){const p=u.data.field(a),_=d.data.field(a);return p!==null&&_!==null?fa(p,_):ge(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ge(19790,{direction:n.dir})}}/**
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
 */class to{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[o,a]of r)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[t]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){eo(this.inner,((t,r)=>{for(const[o,a]of r)e(o,a)}))}isEmpty(){return oI(this.inner)}size(){return this.innerSize}}/**
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
 */const ED=new ut(ue.comparator);function si(){return ED}const SI=new ut(ue.comparator);function Dl(...n){let e=SI;for(const t of n)e=e.insert(t.key,t);return e}function CI(n){let e=SI;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function zs(){return Bl()}function AI(){return Bl()}function Bl(){return new to((n=>n.toString()),((n,e)=>n.isEqual(e)))}const wD=new ut(ue.comparator),TD=new At(ue.comparator);function Pe(...n){let e=TD;for(const t of n)e=e.add(t);return e}const ID=new At(ke);function SD(){return ID}/**
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
 */function Om(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Eh(e)?"-0":e}}function RI(n){return{integerValue:""+n}}function CD(n,e){return JN(e)?RI(e):Om(n,e)}/**
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
 */class Yh{constructor(){this._=void 0}}function AD(n,e,t){return n instanceof eu?(function(o,a){const u={fields:{[uI]:{stringValue:lI},[hI]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&Pm(a)&&(a=$h(a)),a&&(u.fields[cI]=a),{mapValue:u}})(t,e):n instanceof tu?PI(n,e):n instanceof nu?NI(n,e):(function(o,a){const u=kI(o,a),d=rE(u)+rE(o.Ae);return Ap(u)&&Ap(o.Ae)?RI(d):Om(o.serializer,d)})(n,e)}function RD(n,e,t){return n instanceof tu?PI(n,e):n instanceof nu?NI(n,e):t}function kI(n,e){return n instanceof Ch?(function(r){return Ap(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class eu extends Yh{}class tu extends Yh{constructor(e){super(),this.elements=e}}function PI(n,e){const t=DI(e);for(const r of n.elements)t.some((o=>kr(o,r)))||t.push(r);return{arrayValue:{values:t}}}class nu extends Yh{constructor(e){super(),this.elements=e}}function NI(n,e){let t=DI(e);for(const r of n.elements)t=t.filter((o=>!kr(o,r)));return{arrayValue:{values:t}}}class Ch extends Yh{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function rE(n){return mt(n.integerValue||n.doubleValue)}function DI(n){return Nm(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class kD{constructor(e,t){this.field=e,this.transform=t}}function PD(n,e){return n.field.isEqual(e.field)&&(function(r,o){return r instanceof tu&&o instanceof tu||r instanceof nu&&o instanceof nu?da(r.elements,o.elements,kr):r instanceof Ch&&o instanceof Ch?kr(r.Ae,o.Ae):r instanceof eu&&o instanceof eu})(n.transform,e.transform)}class ND{constructor(e,t){this.version=e,this.transformResults=t}}class Zr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Zr}static exists(e){return new Zr(void 0,e)}static updateTime(e){return new Zr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Xh{}function xI(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new LI(n.key,Zr.none()):new gu(n.key,n.data,Zr.none());{const t=n.data,r=On.empty();let o=new At(zt.comparator);for(let a of e.fields)if(!o.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),o=o.add(a)}return new no(n.key,r,new Xn(o.toArray()),Zr.none())}}function DD(n,e,t){n instanceof gu?(function(o,a,u){const d=o.value.clone(),p=sE(o.fieldTransforms,a,u.transformResults);d.setAll(p),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof no?(function(o,a,u){if(!Zc(o.precondition,a))return void a.convertToUnknownDocument(u.version);const d=sE(o.fieldTransforms,a,u.transformResults),p=a.data;p.setAll(OI(o)),p.setAll(d),a.convertToFoundDocument(u.version,p).setHasCommittedMutations()})(n,e,t):(function(o,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function Wl(n,e,t,r){return n instanceof gu?(function(a,u,d,p){if(!Zc(a.precondition,u))return d;const _=a.value.clone(),E=oE(a.fieldTransforms,p,u);return _.setAll(E),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),null})(n,e,t,r):n instanceof no?(function(a,u,d,p){if(!Zc(a.precondition,u))return d;const _=oE(a.fieldTransforms,p,u),E=u.data;return E.setAll(OI(a)),E.setAll(_),u.convertToFoundDocument(u.version,E).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((w=>w.field)))})(n,e,t,r):(function(a,u,d){return Zc(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function xD(n,e){let t=null;for(const r of n.fieldTransforms){const o=e.data.field(r.field),a=kI(r.transform,o||null);a!=null&&(t===null&&(t=On.empty()),t.set(r.field,a))}return t||null}function iE(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&da(r,o,((a,u)=>PD(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class gu extends Xh{constructor(e,t,r,o=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class no extends Xh{constructor(e,t,r,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function OI(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function sE(n,e,t){const r=new Map;We(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let o=0;o<t.length;o++){const a=n[o],u=a.transform,d=e.data.field(a.field);r.set(a.field,RD(u,d,t[o]))}return r}function oE(n,e,t){const r=new Map;for(const o of n){const a=o.transform,u=t.data.field(o.field);r.set(o.field,AD(a,u,e))}return r}class LI extends Xh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OD extends Xh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class LD{constructor(e,t,r,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&DD(a,e,r[o])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Wl(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Wl(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=AI();return this.mutations.forEach((o=>{const a=e.get(o.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(o.key)?null:d;const p=xI(u,d);p!==null&&r.set(o.key,p),u.isValidDocument()||u.convertToNoDocument(ve.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&da(this.mutations,e.mutations,((t,r)=>iE(t,r)))&&da(this.baseMutations,e.baseMutations,((t,r)=>iE(t,r)))}}class Lm{constructor(e,t,r,o){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=o}static from(e,t,r){We(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let o=(function(){return wD})();const a=e.mutations;for(let u=0;u<a.length;u++)o=o.insert(a[u].key,r[u].version);return new Lm(e,t,r,o)}}/**
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
 */class MD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var wt,Le;function VD(n){switch(n){case B.OK:return ge(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return ge(15467,{code:n})}}function MI(n){if(n===void 0)return ii("GRPC error has no .code"),B.UNKNOWN;switch(n){case wt.OK:return B.OK;case wt.CANCELLED:return B.CANCELLED;case wt.UNKNOWN:return B.UNKNOWN;case wt.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case wt.INTERNAL:return B.INTERNAL;case wt.UNAVAILABLE:return B.UNAVAILABLE;case wt.UNAUTHENTICATED:return B.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case wt.NOT_FOUND:return B.NOT_FOUND;case wt.ALREADY_EXISTS:return B.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return B.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case wt.ABORTED:return B.ABORTED;case wt.OUT_OF_RANGE:return B.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return B.UNIMPLEMENTED;case wt.DATA_LOSS:return B.DATA_LOSS;default:return ge(39323,{code:n})}}(Le=wt||(wt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function FD(){return new TextEncoder}/**
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
 */const UD=new Gi([4294967295,4294967295],0);function aE(n){const e=FD().encode(n),t=new QT;return t.update(e),new Uint8Array(t.digest())}function lE(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Gi([t,r],0),new Gi([o,a],0)]}class Mm{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new xl(`Invalid padding: ${t}`);if(r<0)throw new xl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xl(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new xl(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Gi.fromNumber(this.ge)}ye(e,t,r){let o=e.add(t.multiply(Gi.fromNumber(r)));return o.compare(UD)===1&&(o=new Gi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=aE(e),[r,o]=lE(t);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,o,a);if(!this.we(u))return!1}return!0}static create(e,t,r){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Mm(a,o,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.ge===0)return;const t=aE(e),[r,o]=lE(t);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,o,a);this.Se(u)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class xl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Jh{constructor(e,t,r,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const o=new Map;return o.set(e,_u.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Jh(ve.min(),o,new ut(ke),si(),Pe())}}class _u{constructor(e,t,r,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new _u(r,t,Pe(),Pe(),Pe())}}/**
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
 */class eh{constructor(e,t,r,o){this.be=e,this.removedTargetIds=t,this.key=r,this.De=o}}class bI{constructor(e,t){this.targetId=e,this.Ce=t}}class VI{constructor(e,t,r=Bt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=o}}class uE{constructor(){this.ve=0,this.Fe=cE(),this.Me=Bt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Pe(),t=Pe(),r=Pe();return this.Fe.forEach(((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:r=r.add(o);break;default:ge(38017,{changeType:a})}})),new _u(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=cE()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,We(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class jD{constructor(e){this.Ge=e,this.ze=new Map,this.je=si(),this.Je=Bc(),this.He=Bc(),this.Ye=new ut(ke)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:ge(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,r=e.Ce.count,o=this.ot(t);if(o){const a=o.target;if(kp(a))if(r===0){const u=new ue(a.path);this.et(t,u,Zt.newNoDocument(u,ve.min()))}else We(r===1,20013,{expectedCount:r});else{const u=this._t(t);if(u!==r){const d=this.ut(e),p=d?this.ct(d,e,u):1;if(p!==0){this.it(t);const _=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=t;let u,d;try{u=ns(r).toUint8Array()}catch(p){if(p instanceof aI)return ha("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Mm(u,o,a)}catch(p){return ha(p instanceof xl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let o=0;return r.forEach((a=>{const u=this.Ge.ht(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.et(t,a,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((a,u)=>{const d=this.ot(u);if(d){if(a.current&&kp(d.target)){const p=new ue(d.target.path);this.It(p).has(u)||this.Et(u,p)||this.et(u,p,Zt.newNoDocument(p,e))}a.Be&&(t.set(u,a.ke()),a.qe())}}));let r=Pe();this.He.forEach(((a,u)=>{let d=!0;u.forEachWhile((p=>{const _=this.ot(p);return!_||_.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.je.forEach(((a,u)=>u.setReadTime(e)));const o=new Jh(e,t,this.Ye,this.je,r);return this.je=si(),this.Je=Bc(),this.He=Bc(),this.Ye=new ut(ke),o}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new uE,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new At(ke),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new At(ke),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new uE),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Bc(){return new ut(ue.comparator)}function cE(){return new ut(ue.comparator)}const zD={asc:"ASCENDING",desc:"DESCENDING"},BD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},WD={and:"AND",or:"OR"};class HD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Np(n,e){return n.useProto3Json||qh(e)?e:{value:e}}function Ah(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function FI(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function qD(n,e){return Ah(n,e.toTimestamp())}function Cr(n){return We(!!n,49232),ve.fromTimestamp((function(t){const r=ts(t);return new rt(r.seconds,r.nanos)})(n))}function bm(n,e){return Dp(n,e).canonicalString()}function Dp(n,e){const t=(function(o){return new Xe(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function UI(n){const e=Xe.fromString(n);return We(HI(e),10190,{key:e.toString()}),e}function xp(n,e){return bm(n.databaseId,e.path)}function Xf(n,e){const t=UI(e);if(t.get(1)!==n.databaseId.projectId)throw new ee(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ee(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ue(zI(t))}function jI(n,e){return bm(n.databaseId,e)}function $D(n){const e=UI(n);return e.length===4?Xe.emptyPath():zI(e)}function Op(n){return new Xe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function zI(n){return We(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function hE(n,e,t){return{name:xp(n,e),fields:t.value.mapValue.fields}}function GD(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ge(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=(function(_,E){return _.useProto3Json?(We(E===void 0||typeof E=="string",58123),Bt.fromBase64String(E||"")):(We(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Bt.fromUint8Array(E||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(_){const E=_.code===void 0?B.UNKNOWN:MI(_.code);return new ee(E,_.message||"")})(u);t=new VI(r,o,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=Xf(n,r.document.name),a=Cr(r.document.updateTime),u=r.document.createTime?Cr(r.document.createTime):ve.min(),d=new On({mapValue:{fields:r.document.fields}}),p=Zt.newFoundDocument(o,a,u,d),_=r.targetIds||[],E=r.removedTargetIds||[];t=new eh(_,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=Xf(n,r.document),a=r.readTime?Cr(r.readTime):ve.min(),u=Zt.newNoDocument(o,a),d=r.removedTargetIds||[];t=new eh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=Xf(n,r.document),a=r.removedTargetIds||[];t=new eh([],a,o,null)}else{if(!("filter"in e))return ge(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:a}=r,u=new bD(o,a),d=r.targetId;t=new bI(d,u)}}return t}function KD(n,e){let t;if(e instanceof gu)t={update:hE(n,e.key,e.value)};else if(e instanceof LI)t={delete:xp(n,e.key)};else if(e instanceof no)t={update:hE(n,e.key,e.data),updateMask:rx(e.fieldMask)};else{if(!(e instanceof OD))return ge(16599,{Vt:e.type});t={verify:xp(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof eu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof tu)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof nu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Ch)return{fieldPath:u.field.canonicalString(),increment:d.Ae};throw ge(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(o,a){return a.updateTime!==void 0?{updateTime:qD(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:ge(27497)})(n,e.precondition)),t}function QD(n,e){return n&&n.length>0?(We(e!==void 0,14353),n.map((t=>(function(o,a){let u=o.updateTime?Cr(o.updateTime):Cr(a);return u.isEqual(ve.min())&&(u=Cr(a)),new ND(u,o.transformResults||[])})(t,e)))):[]}function YD(n,e){return{documents:[jI(n,e.path)]}}function XD(n,e){const t={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=jI(n,o);const a=(function(_){if(_.length!==0)return WI(er.create(_,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(_){if(_.length!==0)return _.map((E=>(function(I){return{field:Yo(I.field),direction:ex(I.dir)}})(E)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Np(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function JD(n){let e=$D(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let o=null;if(r>0){We(r===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let a=[];t.where&&(a=(function(w){const I=BI(w);return I instanceof er&&_I(I)?I.getFilters():[I]})(t.where));let u=[];t.orderBy&&(u=(function(w){return w.map((I=>(function(z){return new Zl(Xo(z.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(z.direction))})(I)))})(t.orderBy));let d=null;t.limit&&(d=(function(w){let I;return I=typeof w=="object"?w.value:w,qh(I)?null:I})(t.limit));let p=null;t.startAt&&(p=(function(w){const I=!!w.before,V=w.values||[];return new Ih(V,I)})(t.startAt));let _=null;return t.endAt&&(_=(function(w){const I=!w.before,V=w.values||[];return new Ih(V,I)})(t.endAt)),gD(e,o,u,a,d,"F",p,_)}function ZD(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function BI(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Xo(t.unaryFilter.field);return Tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=Xo(t.unaryFilter.field);return Tt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Xo(t.unaryFilter.field);return Tt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Xo(t.unaryFilter.field);return Tt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Tt.create(Xo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return er.create(t.compositeFilter.filters.map((r=>BI(r))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ge(1026)}})(t.compositeFilter.op))})(n):ge(30097,{filter:n})}function ex(n){return zD[n]}function tx(n){return BD[n]}function nx(n){return WD[n]}function Yo(n){return{fieldPath:n.canonicalString()}}function Xo(n){return zt.fromServerFormat(n.fieldPath)}function WI(n){return n instanceof Tt?(function(t){if(t.op==="=="){if(Jv(t.value))return{unaryFilter:{field:Yo(t.field),op:"IS_NAN"}};if(Xv(t.value))return{unaryFilter:{field:Yo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Jv(t.value))return{unaryFilter:{field:Yo(t.field),op:"IS_NOT_NAN"}};if(Xv(t.value))return{unaryFilter:{field:Yo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yo(t.field),op:tx(t.op),value:t.value}}})(n):n instanceof er?(function(t){const r=t.getFilters().map((o=>WI(o)));return r.length===1?r[0]:{compositeFilter:{op:nx(t.op),filters:r}}})(n):ge(54877,{filter:n})}function rx(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function HI(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Wi{constructor(e,t,r,o,a=ve.min(),u=ve.min(),d=Bt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Wi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ix{constructor(e){this.yt=e}}function sx(n){const e=JD({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Sh(e,e.limit,"L"):e}/**
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
 */class ox{constructor(){this.Cn=new ax}addToCollectionParentIndex(e,t){return this.Cn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(es.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(es.min())}updateCollectionGroup(e,t,r){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class ax{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t]||new At(Xe.comparator),a=!o.has(r);return this.index[t]=o.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t];return o&&o.has(r)}getEntries(e){return(this.index[e]||new At(Xe.comparator)).toArray()}}/**
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
 */const dE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qI=41943040;class dn{static withCacheSize(e){return new dn(e,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */dn.DEFAULT_COLLECTION_PERCENTILE=10,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dn.DEFAULT=new dn(qI,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dn.DISABLED=new dn(-1,0,0);/**
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
 */class ma{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ma(0)}static cr(){return new ma(-1)}}/**
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
 */const fE="LruGarbageCollector",lx=1048576;function pE([n,e],[t,r]){const o=ke(n,t);return o===0?ke(e,r):o}class ux{constructor(e){this.Ir=e,this.buffer=new At(pE),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();pE(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class cx{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){re(fE,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ca(t)?re(fE,"Ignoring IndexedDB error during garbage collection: ",t):await Sa(t)}await this.Vr(3e5)}))}}class hx{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(Hh.ce);const r=new ux(t);return this.mr.forEachTarget(e,(o=>r.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>r.Ar(o))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(dE)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),dE):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,o,a,u,d,p,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,u=Date.now(),this.nthSequenceNumber(e,o)))).next((w=>(r=w,d=Date.now(),this.removeTargets(e,r,t)))).next((w=>(a=w,p=Date.now(),this.removeOrphanedDocuments(e,r)))).next((w=>(_=Date.now(),Ko()<=Ce.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-E}ms
	Determined least recently used ${o} in `+(d-u)+`ms
	Removed ${a} targets in `+(p-d)+`ms
	Removed ${w} documents in `+(_-p)+`ms
Total Duration: ${_-E}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:w}))))}}function dx(n,e){return new hx(n,e)}/**
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
 */class fx{constructor(){this.changes=new to((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?H.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class px{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class mx{constructor(e,t,r,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(r=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(r!==null&&Wl(r.mutation,o,Xn.empty(),rt.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Pe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Pe()){const o=zs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,r).next((a=>{let u=Dl();return a.forEach(((d,p)=>{u=u.insert(d,p.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=zs();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Pe())))}populateOverlays(e,t,r){const o=[];return r.forEach((a=>{t.has(a)||o.push(a)})),this.documentOverlayCache.getOverlays(e,o).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,o){let a=si();const u=Bl(),d=(function(){return Bl()})();return t.forEach(((p,_)=>{const E=r.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof no)?a=a.insert(_.key,_):E!==void 0?(u.set(_.key,E.mutation.getFieldMask()),Wl(E.mutation,_,E.mutation.getFieldMask(),rt.now())):u.set(_.key,Xn.empty())})),this.recalculateAndSaveOverlays(e,a).next((p=>(p.forEach(((_,E)=>u.set(_,E))),t.forEach(((_,E)=>d.set(_,new px(E,u.get(_)??null)))),d)))}recalculateAndSaveOverlays(e,t){const r=Bl();let o=new ut(((u,d)=>u-d)),a=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((p=>{const _=t.get(p);if(_===null)return;let E=r.get(p)||Xn.empty();E=d.applyToLocalView(_,E),r.set(p,E);const w=(o.get(d.batchId)||Pe()).add(p);o=o.insert(d.batchId,w)}))})).next((()=>{const u=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),_=p.key,E=p.value,w=AI();E.forEach((I=>{if(!a.has(I)){const V=xI(t.get(I),r.get(I));V!==null&&w.set(I,V),a=a.add(I)}})),u.push(this.documentOverlayCache.saveOverlays(e,_,w))}return H.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,o){return(function(u){return ue.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):wI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,o):this.getDocumentsMatchingCollectionQuery(e,t,r,o)}getNextDocuments(e,t,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,o).next((a=>{const u=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,o-a.size):H.resolve(zs());let d=Ql,p=a;return u.next((_=>H.forEach(_,((E,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),a.get(E)?H.resolve():this.remoteDocumentCache.getEntry(e,E).next((I=>{p=p.insert(E,I)}))))).next((()=>this.populateOverlays(e,_,a))).next((()=>this.computeViews(e,p,_,Pe()))).next((E=>({batchId:d,changes:CI(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ue(t)).next((r=>{let o=Dl();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,o){const a=t.collectionGroup;let u=Dl();return this.indexManager.getCollectionParents(e,a).next((d=>H.forEach(d,(p=>{const _=(function(w,I){return new Aa(I,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,p.child(a));return this.getDocumentsMatchingCollectionQuery(e,_,r,o).next((E=>{E.forEach(((w,I)=>{u=u.insert(w,I)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,o)))).next((u=>{a.forEach(((p,_)=>{const E=_.getKey();u.get(E)===null&&(u=u.insert(E,Zt.newInvalidDocument(E)))}));let d=Dl();return u.forEach(((p,_)=>{const E=a.get(p);E!==void 0&&Wl(E.mutation,_,Xn.empty(),rt.now()),Qh(t,_)&&(d=d.insert(p,_))})),d}))}}/**
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
 */class gx{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return H.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:Cr(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:sx(o.bundledQuery),readTime:Cr(o.readTime)}})(t)),H.resolve()}}/**
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
 */class _x{constructor(){this.overlays=new ut(ue.comparator),this.qr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const r=zs();return H.forEach(t,(o=>this.getOverlay(e,o).next((a=>{a!==null&&r.set(o,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((o,a)=>{this.St(e,t,a)})),H.resolve()}removeOverlaysForBatchId(e,t,r){const o=this.qr.get(r);return o!==void 0&&(o.forEach((a=>this.overlays=this.overlays.remove(a))),this.qr.delete(r)),H.resolve()}getOverlaysForCollection(e,t,r){const o=zs(),a=t.length+1,u=new ue(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const p=d.getNext().value,_=p.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===a&&p.largestBatchId>r&&o.set(p.getKey(),p)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,r,o){let a=new ut(((_,E)=>_-E));const u=this.overlays.getIterator();for(;u.hasNext();){const _=u.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>r){let E=a.get(_.largestBatchId);E===null&&(E=zs(),a=a.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const d=zs(),p=a.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((_,E)=>d.set(_,E))),!(d.size()>=o)););return H.resolve(d)}St(e,t,r){const o=this.overlays.get(r.key);if(o!==null){const u=this.qr.get(o.largestBatchId).delete(r.key);this.qr.set(o.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new MD(t,r));let a=this.qr.get(t);a===void 0&&(a=Pe(),this.qr.set(t,a)),this.qr.set(t,a.add(r.key))}}/**
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
 */class yx{constructor(){this.sessionToken=Bt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class Vm{constructor(){this.Qr=new At(Ot.$r),this.Ur=new At(Ot.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Ot(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new Ot(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new ue(new Xe([])),r=new Ot(t,e),o=new Ot(t,e+1),a=[];return this.Ur.forEachInRange([r,o],(u=>{this.Gr(u),a.push(u.key)})),a}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ue(new Xe([])),r=new Ot(t,e),o=new Ot(t,e+1);let a=Pe();return this.Ur.forEachInRange([r,o],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new Ot(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ot{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ue.comparator(e.key,t.key)||ke(e.Yr,t.Yr)}static Kr(e,t){return ke(e.Yr,t.Yr)||ue.comparator(e.key,t.key)}}/**
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
 */class vx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new At(Ot.$r)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,o){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new LD(a,t,r,o);this.mutationQueue.push(u);for(const d of o)this.Zr=this.Zr.add(new Ot(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return H.resolve(u)}lookupMutationBatch(e,t){return H.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=this.ei(r),a=o<0?0:o;return H.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?km:this.tr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ot(t,0),o=new Ot(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([r,o],(u=>{const d=this.Xr(u.Yr);a.push(d)})),H.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new At(ke);return t.forEach((o=>{const a=new Ot(o,0),u=new Ot(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,u],(d=>{r=r.add(d.Yr)}))})),H.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1;let a=r;ue.isDocumentKey(a)||(a=a.child(""));const u=new Ot(new ue(a),0);let d=new At(ke);return this.Zr.forEachWhile((p=>{const _=p.key.path;return!!r.isPrefixOf(_)&&(_.length===o&&(d=d.add(p.Yr)),!0)}),u),H.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((r=>{const o=this.Xr(r);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){We(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return H.forEach(t.mutations,(o=>{const a=new Ot(o.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new Ot(t,0),o=this.Zr.firstAfterOrEqual(r);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Ex{constructor(e){this.ri=e,this.docs=(function(){return new ut(ue.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,o=this.docs.get(r),a=o?o.size:0,u=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return H.resolve(r?r.document.mutableCopy():Zt.newInvalidDocument(t))}getEntries(e,t){let r=si();return t.forEach((o=>{const a=this.docs.get(o);r=r.insert(o,a?a.document.mutableCopy():Zt.newInvalidDocument(o))})),H.resolve(r)}getDocumentsMatchingQuery(e,t,r,o){let a=si();const u=t.path,d=new ue(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:_,value:{document:E}}=p.getNext();if(!u.isPrefixOf(_.path))break;_.path.length>u.length+1||KN(GN(E),r)<=0||(o.has(E.key)||Qh(t,E))&&(a=a.insert(E.key,E.mutableCopy()))}return H.resolve(a)}getAllFromCollectionGroup(e,t,r,o){ge(9500)}ii(e,t){return H.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new wx(this)}getSize(e){return H.resolve(this.size)}}class wx extends fx{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(r)})),H.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class Tx{constructor(e){this.persistence=e,this.si=new to((t=>Dm(t)),xm),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.oi=0,this._i=new Vm,this.targetCount=0,this.ai=ma.ur()}forEachTarget(e,t){return this.si.forEach(((r,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),H.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ma(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Pr(t),H.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,r){let o=0;const a=[];return this.si.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.si.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)})),H.waitFor(a).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return H.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),H.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach((u=>{a.push(o.markPotentiallyOrphaned(e,u))})),H.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return H.resolve(r)}containsKey(e,t){return H.resolve(this._i.containsKey(t))}}/**
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
 */class $I{constructor(e,t){this.ui={},this.overlays={},this.ci=new Hh(0),this.li=!1,this.li=!0,this.hi=new yx,this.referenceDelegate=e(this),this.Pi=new Tx(this),this.indexManager=new ox,this.remoteDocumentCache=(function(o){return new Ex(o)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new ix(t),this.Ii=new gx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _x,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new vx(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){re("MemoryPersistence","Starting transaction:",e);const o=new Ix(this.ci.next());return this.referenceDelegate.Ei(),r(o).next((a=>this.referenceDelegate.di(o).next((()=>a)))).toPromise().then((a=>(o.raiseOnCommittedEvent(),a)))}Ai(e,t){return H.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class Ix extends YN{constructor(e){super(),this.currentSequenceNumber=e}}class Fm{constructor(e){this.persistence=e,this.Ri=new Vm,this.Vi=null}static mi(e){return new Fm(e)}get fi(){if(this.Vi)return this.Vi;throw ge(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),H.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((a=>this.fi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.fi,(r=>{const o=ue.fromPath(r);return this.gi(e,o).next((a=>{a||t.removeEntry(o,ve.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return H.or([()=>H.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Rh{constructor(e,t){this.persistence=e,this.pi=new to((r=>ZN(r.path)),((r,o)=>r.isEqual(o))),this.garbageCollector=dx(this,t)}static mi(e,t){return new Rh(e,t)}Ei(){}di(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((o=>r+o))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return H.forEach(this.pi,((r,o)=>this.br(e,r,o).next((a=>a?H.resolve():t(o)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.ii(e,(u=>this.br(e,u,t).next((d=>{d||(r++,a.removeEntry(u,ve.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),H.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),H.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Xc(e.data.value)),t}br(e,t,r){return H.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return H.resolve(o!==void 0&&o>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Um{constructor(e,t,r,o){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=o}static As(e,t){let r=Pe(),o=Pe();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new Um(e,t.fromCache,r,o)}}/**
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
 */class Sx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Cx{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return aC()?8:XN(tn())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,o){const a={result:null};return this.ys(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ws(e,t,o,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new Sx;return this.Ss(e,t,u).next((d=>{if(a.result=d,this.Vs)return this.bs(e,t,u,d.size)}))})).next((()=>a.result))}bs(e,t,r,o){return r.documentReadCount<this.fs?(Ko()<=Ce.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Qo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),H.resolve()):(Ko()<=Ce.DEBUG&&re("QueryEngine","Query:",Qo(t),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.gs*o?(Ko()<=Ce.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Qo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sr(t))):H.resolve())}ys(e,t){if(nE(t))return H.resolve(null);let r=Sr(t);return this.indexManager.getIndexType(e,r).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Sh(t,null,"F"),r=Sr(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=Pe(...a);return this.ps.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((p=>{const _=this.Ds(t,d);return this.Cs(t,_,u,p.readTime)?this.ys(e,Sh(t,null,"F")):this.vs(e,_,t,p)}))))})))))}ws(e,t,r,o){return nE(t)||o.isEqual(ve.min())?H.resolve(null):this.ps.getDocuments(e,r).next((a=>{const u=this.Ds(t,a);return this.Cs(t,u,r,o)?H.resolve(null):(Ko()<=Ce.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Qo(t)),this.vs(e,u,t,$N(o,Ql)).next((d=>d)))}))}Ds(e,t){let r=new At(II(e));return t.forEach(((o,a)=>{Qh(e,a)&&(r=r.add(a))})),r}Cs(e,t,r,o){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}Ss(e,t,r){return Ko()<=Ce.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Qo(t)),this.ps.getDocumentsMatchingQuery(e,t,es.min(),r)}vs(e,t,r,o){return this.ps.getDocumentsMatchingQuery(e,r,o).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
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
 */const jm="LocalStore",Ax=3e8;class Rx{constructor(e,t,r,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new ut(ke),this.xs=new to((a=>Dm(a)),xm),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mx(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function kx(n,e,t,r){return new Rx(n,e,t,r)}async function GI(n,e){const t=we(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let o;return t.mutationQueue.getAllMutationBatches(r).next((a=>(o=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let p=Pe();for(const _ of o){u.push(_.batchId);for(const E of _.mutations)p=p.add(E.key)}for(const _ of a){d.push(_.batchId);for(const E of _.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(r,p).next((_=>({Ls:_,removedBatchIds:u,addedBatchIds:d})))}))}))}function Px(n,e){const t=we(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const o=e.batch.keys(),a=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,p,_,E){const w=_.batch,I=w.keys();let V=H.resolve();return I.forEach((z=>{V=V.next((()=>E.getEntry(p,z))).next((G=>{const W=_.docVersions.get(z);We(W!==null,48541),G.version.compareTo(W)<0&&(w.applyToRemoteDocument(G,_),G.isValidDocument()&&(G.setReadTime(_.commitVersion),E.addEntry(G)))}))})),V.next((()=>d.mutationQueue.removeMutationBatch(p,w)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let p=Pe();for(let _=0;_<d.mutationResults.length;++_)d.mutationResults[_].transformResults.length>0&&(p=p.add(d.batch.mutations[_].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(r,o)))}))}function KI(n){const e=we(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Nx(n,e){const t=we(n),r=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const d=[];e.targetChanges.forEach(((E,w)=>{const I=o.get(w);if(!I)return;d.push(t.Pi.removeMatchingKeys(a,E.removedDocuments,w).next((()=>t.Pi.addMatchingKeys(a,E.addedDocuments,w))));let V=I.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?V=V.withResumeToken(Bt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):E.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(E.resumeToken,r)),o=o.insert(w,V),(function(G,W,fe){return G.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=Ax?!0:fe.addedDocuments.size+fe.modifiedDocuments.size+fe.removedDocuments.size>0})(I,V,E)&&d.push(t.Pi.updateTargetData(a,V))}));let p=si(),_=Pe();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,E))})),d.push(Dx(a,u,e.documentUpdates).next((E=>{p=E.ks,_=E.qs}))),!r.isEqual(ve.min())){const E=t.Pi.getLastRemoteSnapshotVersion(a).next((w=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(E)}return H.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,p,_))).next((()=>p))})).then((a=>(t.Ms=o,a)))}function Dx(n,e,t){let r=Pe(),o=Pe();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=si();return t.forEach(((d,p)=>{const _=a.get(d);p.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(ve.min())?(e.removeEntry(d,p.readTime),u=u.insert(d,p)):!_.isValidDocument()||p.version.compareTo(_.version)>0||p.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(p),u=u.insert(d,p)):re(jm,"Ignoring outdated watch update for ",d,". Current version:",_.version," Watch version:",p.version)})),{ks:u,qs:o}}))}function xx(n,e){const t=we(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=km),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Ox(n,e){const t=we(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let o;return t.Pi.getTargetData(r,e).next((a=>a?(o=a,H.resolve(o)):t.Pi.allocateTargetId(r).next((u=>(o=new Wi(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,o).next((()=>o)))))))})).then((r=>{const o=t.Ms.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function Lp(n,e,t){const r=we(n),o=r.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,o)))}catch(u){if(!Ca(u))throw u;re(jm,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ms=r.Ms.remove(e),r.xs.delete(o.target)}function mE(n,e,t){const r=we(n);let o=ve.min(),a=Pe();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(p,_,E){const w=we(p),I=w.xs.get(E);return I!==void 0?H.resolve(w.Ms.get(I)):w.Pi.getTargetData(_,E)})(r,u,Sr(e)).next((d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(u,d.targetId).next((p=>{a=p}))})).next((()=>r.Fs.getDocumentsMatchingQuery(u,e,t?o:ve.min(),t?a:Pe()))).next((d=>(Lx(r,yD(e),d),{documents:d,Qs:a})))))}function Lx(n,e,t){let r=n.Os.get(e)||ve.min();t.forEach(((o,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.Os.set(e,r)}class gE{constructor(){this.activeTargetIds=SD()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Mx{constructor(){this.Mo=new gE,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new gE,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bx{Oo(e){}shutdown(){}}/**
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
 */const _E="ConnectivityMonitor";class yE{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){re(_E,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){re(_E,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wc=null;function Mp(){return Wc===null?Wc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Wc++,"0x"+Wc.toString(16)}/**
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
 */const Jf="RestConnection",Vx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Fx{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${o}`,this.Wo=this.databaseId.database===wh?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Go(e,t,r,o,a){const u=Mp(),d=this.zo(e,t.toUriEncodedString());re(Jf,`Sending RPC '${e}' ${u}:`,d,r);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,o,a);const{host:_}=new URL(d),E=os(_);return this.Jo(e,d,p,r,E).then((w=>(re(Jf,`Received RPC '${e}' ${u}: `,w),w)),(w=>{throw ha(Jf,`RPC '${e}' ${u} failed with error: `,w,"url: ",d,"request:",r),w}))}Ho(e,t,r,o,a,u){return this.Go(e,t,r,o,a)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ia})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,a)=>e[a]=o)),r&&r.headers.forEach(((o,a)=>e[a]=o))}zo(e,t){const r=Vx[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Ux{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Qt="WebChannelConnection";class jx extends Fx{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,o,a){const u=Mp();return new Promise(((d,p)=>{const _=new YT;_.setWithCredentials(!0),_.listenOnce(XT.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Yc.NO_ERROR:const w=_.getResponseJson();re(Qt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),d(w);break;case Yc.TIMEOUT:re(Qt,`RPC '${e}' ${u} timed out`),p(new ee(B.DEADLINE_EXCEEDED,"Request time out"));break;case Yc.HTTP_ERROR:const I=_.getStatus();if(re(Qt,`RPC '${e}' ${u} failed with status:`,I,"response text:",_.getResponseText()),I>0){let V=_.getResponseJson();Array.isArray(V)&&(V=V[0]);const z=V?.error;if(z&&z.status&&z.message){const G=(function(fe){const pe=fe.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(pe)>=0?pe:B.UNKNOWN})(z.status);p(new ee(G,z.message))}else p(new ee(B.UNKNOWN,"Server responded with status "+_.getStatus()))}else p(new ee(B.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{l_:e,streamId:u,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{re(Qt,`RPC '${e}' ${u} completed.`)}}));const E=JSON.stringify(o);re(Qt,`RPC '${e}' ${u} sending request:`,o),_.send(t,"POST",E,r,15)}))}T_(e,t,r){const o=Mp(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=eI(),d=ZT(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(p.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,r),p.encodeInitMessageHeaders=!0;const E=a.join("");re(Qt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const w=u.createWebChannel(E,p);this.I_(w);let I=!1,V=!1;const z=new Ux({Yo:W=>{V?re(Qt,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(I||(re(Qt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),I=!0),re(Qt,`RPC '${e}' stream ${o} sending:`,W),w.send(W))},Zo:()=>w.close()}),G=(W,fe,pe)=>{W.listen(fe,(ye=>{try{pe(ye)}catch(xe){setTimeout((()=>{throw xe}),0)}}))};return G(w,Nl.EventType.OPEN,(()=>{V||(re(Qt,`RPC '${e}' stream ${o} transport opened.`),z.o_())})),G(w,Nl.EventType.CLOSE,(()=>{V||(V=!0,re(Qt,`RPC '${e}' stream ${o} transport closed`),z.a_(),this.E_(w))})),G(w,Nl.EventType.ERROR,(W=>{V||(V=!0,ha(Qt,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),z.a_(new ee(B.UNAVAILABLE,"The operation could not be completed")))})),G(w,Nl.EventType.MESSAGE,(W=>{if(!V){const fe=W.data[0];We(!!fe,16349);const pe=fe,ye=pe?.error||pe[0]?.error;if(ye){re(Qt,`RPC '${e}' stream ${o} received error:`,ye);const xe=ye.status;let Ke=(function(C){const R=wt[C];if(R!==void 0)return MI(R)})(xe),Oe=ye.message;Ke===void 0&&(Ke=B.INTERNAL,Oe="Unknown error status: "+xe+" with message "+ye.message),V=!0,z.a_(new ee(Ke,Oe)),w.close()}else re(Qt,`RPC '${e}' stream ${o} received:`,fe),z.u_(fe)}})),G(d,JT.STAT_EVENT,(W=>{W.stat===Ip.PROXY?re(Qt,`RPC '${e}' stream ${o} detected buffering proxy`):W.stat===Ip.NOPROXY&&re(Qt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{z.__()}),0),z}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Zf(){return typeof document<"u"?document:null}/**
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
 */function Zh(n){return new HD(n,!0)}/**
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
 */class QI{constructor(e,t,r=1e3,o=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=o,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-r);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const vE="PersistentStream";class YI{constructor(e,t,r,o,a,u,d,p){this.Mi=e,this.S_=r,this.b_=o,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new QI(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(ii(t.toString()),ii("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,o])=>{this.D_===t&&this.G_(r,o)}),(r=>{e((()=>{const o=new ee(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(o)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{r((()=>this.z_(o)))})),this.stream.onMessage((o=>{r((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(vE,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(re(vE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class zx extends YI{constructor(e,t,r,o,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,o,u),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=GD(this.serializer,e),r=(function(a){if(!("targetChange"in a))return ve.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?ve.min():u.readTime?Cr(u.readTime):ve.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Op(this.serializer),t.addTarget=(function(a,u){let d;const p=u.target;if(d=kp(p)?{documents:YD(a,p)}:{query:XD(a,p).ft},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=FI(a,u.resumeToken);const _=Np(a,u.expectedCount);_!==null&&(d.expectedCount=_)}else if(u.snapshotVersion.compareTo(ve.min())>0){d.readTime=Ah(a,u.snapshotVersion.toTimestamp());const _=Np(a,u.expectedCount);_!==null&&(d.expectedCount=_)}return d})(this.serializer,e);const r=ZD(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Op(this.serializer),t.removeTarget=e,this.q_(t)}}class Bx extends YI{constructor(e,t,r,o,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,o,u),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return We(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,We(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){We(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=QD(e.writeResults,e.commitTime),r=Cr(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Op(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>KD(this.serializer,r)))};this.q_(t)}}/**
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
 */class Wx{}class Hx extends Wx{constructor(e,t,r,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ee(B.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Go(e,Dp(t,r),o,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ee(B.UNKNOWN,a.toString())}))}Ho(e,t,r,o,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Ho(e,Dp(t,r),o,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ee(B.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class qx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ii(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ys="RemoteStore";class $x{constructor(e,t,r,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo((u=>{r.enqueueAndForget((async()=>{ro(this)&&(re(Ys,"Restarting streams for network reachability change."),await(async function(p){const _=we(p);_.Ea.add(4),await yu(_),_.Ra.set("Unknown"),_.Ea.delete(4),await ed(_)})(this))}))})),this.Ra=new qx(r,o)}}async function ed(n){if(ro(n))for(const e of n.da)await e(!0)}async function yu(n){for(const e of n.da)await e(!1)}function XI(n,e){const t=we(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Hm(t)?Wm(t):Ra(t).O_()&&Bm(t,e))}function zm(n,e){const t=we(n),r=Ra(t);t.Ia.delete(e),r.O_()&&JI(t,e),t.Ia.size===0&&(r.O_()?r.L_():ro(t)&&t.Ra.set("Unknown"))}function Bm(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ra(n).Y_(e)}function JI(n,e){n.Va.Ue(e),Ra(n).Z_(e)}function Wm(n){n.Va=new jD({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ra(n).start(),n.Ra.ua()}function Hm(n){return ro(n)&&!Ra(n).x_()&&n.Ia.size>0}function ro(n){return we(n).Ea.size===0}function ZI(n){n.Va=void 0}async function Gx(n){n.Ra.set("Online")}async function Kx(n){n.Ia.forEach(((e,t)=>{Bm(n,e)}))}async function Qx(n,e){ZI(n),Hm(n)?(n.Ra.ha(e),Wm(n)):n.Ra.set("Unknown")}async function Yx(n,e,t){if(n.Ra.set("Online"),e instanceof VI&&e.state===2&&e.cause)try{await(async function(o,a){const u=a.cause;for(const d of a.targetIds)o.Ia.has(d)&&(await o.remoteSyncer.rejectListen(d,u),o.Ia.delete(d),o.Va.removeTarget(d))})(n,e)}catch(r){re(Ys,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await kh(n,r)}else if(e instanceof eh?n.Va.Ze(e):e instanceof bI?n.Va.st(e):n.Va.tt(e),!t.isEqual(ve.min()))try{const r=await KI(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Va.Tt(u);return d.targetChanges.forEach(((p,_)=>{if(p.resumeToken.approximateByteSize()>0){const E=a.Ia.get(_);E&&a.Ia.set(_,E.withResumeToken(p.resumeToken,u))}})),d.targetMismatches.forEach(((p,_)=>{const E=a.Ia.get(p);if(!E)return;a.Ia.set(p,E.withResumeToken(Bt.EMPTY_BYTE_STRING,E.snapshotVersion)),JI(a,p);const w=new Wi(E.target,p,_,E.sequenceNumber);Bm(a,w)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){re(Ys,"Failed to raise snapshot:",r),await kh(n,r)}}async function kh(n,e,t){if(!Ca(e))throw e;n.Ea.add(1),await yu(n),n.Ra.set("Offline"),t||(t=()=>KI(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{re(Ys,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await ed(n)}))}function eS(n,e){return e().catch((t=>kh(n,t,e)))}async function td(n){const e=we(n),t=is(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:km;for(;Xx(e);)try{const o=await xx(e.localStore,r);if(o===null){e.Ta.length===0&&t.L_();break}r=o.batchId,Jx(e,o)}catch(o){await kh(e,o)}tS(e)&&nS(e)}function Xx(n){return ro(n)&&n.Ta.length<10}function Jx(n,e){n.Ta.push(e);const t=is(n);t.O_()&&t.X_&&t.ea(e.mutations)}function tS(n){return ro(n)&&!is(n).x_()&&n.Ta.length>0}function nS(n){is(n).start()}async function Zx(n){is(n).ra()}async function eO(n){const e=is(n);for(const t of n.Ta)e.ea(t.mutations)}async function tO(n,e,t){const r=n.Ta.shift(),o=Lm.from(r,e,t);await eS(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await td(n)}async function nO(n,e){e&&is(n).X_&&await(async function(r,o){if((function(u){return VD(u)&&u!==B.ABORTED})(o.code)){const a=r.Ta.shift();is(r).B_(),await eS(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,o))),await td(r)}})(n,e),tS(n)&&nS(n)}async function EE(n,e){const t=we(n);t.asyncQueue.verifyOperationInProgress(),re(Ys,"RemoteStore received new credentials");const r=ro(t);t.Ea.add(3),await yu(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ed(t)}async function rO(n,e){const t=we(n);e?(t.Ea.delete(2),await ed(t)):e||(t.Ea.add(2),await yu(t),t.Ra.set("Unknown"))}function Ra(n){return n.ma||(n.ma=(function(t,r,o){const a=we(t);return a.sa(),new zx(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Xo:Gx.bind(null,n),t_:Kx.bind(null,n),r_:Qx.bind(null,n),H_:Yx.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Hm(n)?Wm(n):n.Ra.set("Unknown")):(await n.ma.stop(),ZI(n))}))),n.ma}function is(n){return n.fa||(n.fa=(function(t,r,o){const a=we(t);return a.sa(),new Bx(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Zx.bind(null,n),r_:nO.bind(null,n),ta:eO.bind(null,n),na:tO.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await td(n)):(await n.fa.stop(),n.Ta.length>0&&(re(Ys,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class qm{constructor(e,t,r,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=o,this.removalCallback=a,this.deferred=new Ki,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,o,a){const u=Date.now()+r,d=new qm(e,t,u,o,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $m(n,e){if(ii("AsyncQueue",`${e}: ${n}`),Ca(n))return new ee(B.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class sa{static emptySet(e){return new sa(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ue.comparator(t.key,r.key):(t,r)=>ue.comparator(t.key,r.key),this.keyedMap=Dl(),this.sortedSet=new ut(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof sa)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new sa;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class wE{constructor(){this.ga=new ut(ue.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ge(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class ga{constructor(e,t,r,o,a,u,d,p,_){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=_}static fromInitialDocuments(e,t,r,o,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new ga(e,t,sa.emptySet(t),u,r,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Kh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==r[o].type||!t[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
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
 */class iO{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class sO{constructor(){this.queries=TE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const o=we(t),a=o.queries;o.queries=TE(),a.forEach(((u,d)=>{for(const p of d.Sa)p.onError(r)}))})(this,new ee(B.ABORTED,"Firestore shutting down"))}}function TE(){return new to((n=>TI(n)),Kh)}async function rS(n,e){const t=we(n);let r=3;const o=e.query;let a=t.queries.get(o);a?!a.ba()&&e.Da()&&(r=2):(a=new iO,r=e.Da()?0:1);try{switch(r){case 0:a.wa=await t.onListen(o,!0);break;case 1:a.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(u){const d=$m(u,`Initialization of query '${Qo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&Gm(t)}async function iS(n,e){const t=we(n),r=e.query;let o=3;const a=t.queries.get(r);if(a){const u=a.Sa.indexOf(e);u>=0&&(a.Sa.splice(u,1),a.Sa.length===0?o=e.Da()?0:1:!a.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function oO(n,e){const t=we(n);let r=!1;for(const o of e){const a=o.query,u=t.queries.get(a);if(u){for(const d of u.Sa)d.Fa(o)&&(r=!0);u.wa=o}}r&&Gm(t)}function aO(n,e,t){const r=we(n),o=r.queries.get(e);if(o)for(const a of o.Sa)a.onError(t);r.queries.delete(e)}function Gm(n){n.Ca.forEach((e=>{e.next()}))}var bp,IE;(IE=bp||(bp={})).Ma="default",IE.Cache="cache";class sS{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new ga(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ga.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==bp.Cache}}/**
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
 */class oS{constructor(e){this.key=e}}class aS{constructor(e){this.key=e}}class lO{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pe(),this.mutatedKeys=Pe(),this.eu=II(e),this.tu=new sa(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new wE,o=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,u=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,w)=>{const I=o.get(E),V=Qh(this.query,w)?w:null,z=!!I&&this.mutatedKeys.has(I.key),G=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let W=!1;I&&V?I.data.isEqual(V.data)?z!==G&&(r.track({type:3,doc:V}),W=!0):this.su(I,V)||(r.track({type:2,doc:V}),W=!0,(p&&this.eu(V,p)>0||_&&this.eu(V,_)<0)&&(d=!0)):!I&&V?(r.track({type:0,doc:V}),W=!0):I&&!V&&(r.track({type:1,doc:I}),W=!0,(p||_)&&(d=!0)),W&&(V?(u=u.add(V),a=G?a.add(E):a.delete(E)):(u=u.delete(E),a=a.delete(E)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const E=this.query.limitType==="F"?u.last():u.first();u=u.delete(E.key),a=a.delete(E.key),r.track({type:1,doc:E})}return{tu:u,iu:r,Cs:d,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,o){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const u=e.iu.ya();u.sort(((E,w)=>(function(V,z){const G=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{Rt:W})}};return G(V)-G(z)})(E.type,w.type)||this.eu(E.doc,w.doc))),this.ou(r),o=o??!1;const d=t&&!o?this._u():[],p=this.Xa.size===0&&this.current&&!o?1:0,_=p!==this.Za;return this.Za=p,u.length!==0||_?{snapshot:new ga(this.query,e.tu,a,u,e.mutatedKeys,p===0,_,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new wE,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Pe(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new aS(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new oS(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=Pe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ga.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Km="SyncEngine";class uO{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class cO{constructor(e){this.key=e,this.hu=!1}}class hO{constructor(e,t,r,o,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new to((d=>TI(d)),Kh),this.Iu=new Map,this.Eu=new Set,this.du=new ut(ue.comparator),this.Au=new Map,this.Ru=new Vm,this.Vu={},this.mu=new Map,this.fu=ma.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function dO(n,e,t=!0){const r=fS(n);let o;const a=r.Tu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.lu()):o=await lS(r,e,t,!0),o}async function fO(n,e){const t=fS(n);await lS(t,e,!0,!1)}async function lS(n,e,t,r){const o=await Ox(n.localStore,Sr(e)),a=o.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await pO(n,e,a,u==="current",o.resumeToken)),n.isPrimaryClient&&t&&XI(n.remoteStore,o),d}async function pO(n,e,t,r,o){n.pu=(w,I,V)=>(async function(G,W,fe,pe){let ye=W.view.ru(fe);ye.Cs&&(ye=await mE(G.localStore,W.query,!1).then((({documents:N})=>W.view.ru(N,ye))));const xe=pe&&pe.targetChanges.get(W.targetId),Ke=pe&&pe.targetMismatches.get(W.targetId)!=null,Oe=W.view.applyChanges(ye,G.isPrimaryClient,xe,Ke);return CE(G,W.targetId,Oe.au),Oe.snapshot})(n,w,I,V);const a=await mE(n.localStore,e,!0),u=new lO(e,a.Qs),d=u.ru(a.documents),p=_u.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",o),_=u.applyChanges(d,n.isPrimaryClient,p);CE(n,t,_.au);const E=new uO(e,t,u);return n.Tu.set(e,E),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),_.snapshot}async function mO(n,e,t){const r=we(n),o=r.Tu.get(e),a=r.Iu.get(o.targetId);if(a.length>1)return r.Iu.set(o.targetId,a.filter((u=>!Kh(u,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await Lp(r.localStore,o.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(o.targetId),t&&zm(r.remoteStore,o.targetId),Vp(r,o.targetId)})).catch(Sa)):(Vp(r,o.targetId),await Lp(r.localStore,o.targetId,!0))}async function gO(n,e){const t=we(n),r=t.Tu.get(e),o=t.Iu.get(r.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),zm(t.remoteStore,r.targetId))}async function _O(n,e,t){const r=SO(n);try{const o=await(function(u,d){const p=we(u),_=rt.now(),E=d.reduce(((V,z)=>V.add(z.key)),Pe());let w,I;return p.persistence.runTransaction("Locally write mutations","readwrite",(V=>{let z=si(),G=Pe();return p.Ns.getEntries(V,E).next((W=>{z=W,z.forEach(((fe,pe)=>{pe.isValidDocument()||(G=G.add(fe))}))})).next((()=>p.localDocuments.getOverlayedDocuments(V,z))).next((W=>{w=W;const fe=[];for(const pe of d){const ye=xD(pe,w.get(pe.key).overlayedDocument);ye!=null&&fe.push(new no(pe.key,ye,pI(ye.value.mapValue),Zr.exists(!0)))}return p.mutationQueue.addMutationBatch(V,_,fe,d)})).next((W=>{I=W;const fe=W.applyToLocalDocumentSet(w,G);return p.documentOverlayCache.saveOverlays(V,W.batchId,fe)}))})).then((()=>({batchId:I.batchId,changes:CI(w)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(o.batchId),(function(u,d,p){let _=u.Vu[u.currentUser.toKey()];_||(_=new ut(ke)),_=_.insert(d,p),u.Vu[u.currentUser.toKey()]=_})(r,o.batchId,t),await vu(r,o.changes),await td(r.remoteStore)}catch(o){const a=$m(o,"Failed to persist write");t.reject(a)}}async function uS(n,e){const t=we(n);try{const r=await Nx(t.localStore,e);e.targetChanges.forEach(((o,a)=>{const u=t.Au.get(a);u&&(We(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?u.hu=!0:o.modifiedDocuments.size>0?We(u.hu,14607):o.removedDocuments.size>0&&(We(u.hu,42227),u.hu=!1))})),await vu(t,r,e)}catch(r){await Sa(r)}}function SE(n,e,t){const r=we(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const o=[];r.Tu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&o.push(d.snapshot)})),(function(u,d){const p=we(u);p.onlineState=d;let _=!1;p.queries.forEach(((E,w)=>{for(const I of w.Sa)I.va(d)&&(_=!0)})),_&&Gm(p)})(r.eventManager,e),o.length&&r.Pu.H_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yO(n,e,t){const r=we(n);r.sharedClientState.updateQueryState(e,"rejected",t);const o=r.Au.get(e),a=o&&o.key;if(a){let u=new ut(ue.comparator);u=u.insert(a,Zt.newNoDocument(a,ve.min()));const d=Pe().add(a),p=new Jh(ve.min(),new Map,new ut(ke),u,d);await uS(r,p),r.du=r.du.remove(a),r.Au.delete(e),Qm(r)}else await Lp(r.localStore,e,!1).then((()=>Vp(r,e,t))).catch(Sa)}async function vO(n,e){const t=we(n),r=e.batch.batchId;try{const o=await Px(t.localStore,e);hS(t,r,null),cS(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await vu(t,o)}catch(o){await Sa(o)}}async function EO(n,e,t){const r=we(n);try{const o=await(function(u,d){const p=we(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return p.mutationQueue.lookupMutationBatch(_,d).next((w=>(We(w!==null,37113),E=w.keys(),p.mutationQueue.removeMutationBatch(_,w)))).next((()=>p.mutationQueue.performConsistencyCheck(_))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(_,E,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>p.localDocuments.getDocuments(_,E)))}))})(r.localStore,e);hS(r,e,t),cS(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await vu(r,o)}catch(o){await Sa(o)}}function cS(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function hS(n,e,t){const r=we(n);let o=r.Vu[r.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),r.Vu[r.currentUser.toKey()]=o}}function Vp(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||dS(n,r)}))}function dS(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(zm(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Qm(n))}function CE(n,e,t){for(const r of t)r instanceof oS?(n.Ru.addReference(r.key,e),wO(n,r)):r instanceof aS?(re(Km,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||dS(n,r.key)):ge(19791,{wu:r})}function wO(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(re(Km,"New document in limbo: "+t),n.Eu.add(r),Qm(n))}function Qm(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new ue(Xe.fromString(e)),r=n.fu.next();n.Au.set(r,new cO(t)),n.du=n.du.insert(t,r),XI(n.remoteStore,new Wi(Sr(Gh(t.path)),r,"TargetPurposeLimboResolution",Hh.ce))}}async function vu(n,e,t){const r=we(n),o=[],a=[],u=[];r.Tu.isEmpty()||(r.Tu.forEach(((d,p)=>{u.push(r.pu(p,e,t).then((_=>{if((_||t)&&r.isPrimaryClient){const E=_?!_.fromCache:t?.targetChanges.get(p.targetId)?.current;r.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(_){o.push(_);const E=Um.As(p.targetId,_);a.push(E)}})))})),await Promise.all(u),r.Pu.H_(o),await(async function(p,_){const E=we(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>H.forEach(_,(I=>H.forEach(I.Es,(V=>E.persistence.referenceDelegate.addReference(w,I.targetId,V))).next((()=>H.forEach(I.ds,(V=>E.persistence.referenceDelegate.removeReference(w,I.targetId,V)))))))))}catch(w){if(!Ca(w))throw w;re(jm,"Failed to update sequence numbers: "+w)}for(const w of _){const I=w.targetId;if(!w.fromCache){const V=E.Ms.get(I),z=V.snapshotVersion,G=V.withLastLimboFreeSnapshotVersion(z);E.Ms=E.Ms.insert(I,G)}}})(r.localStore,a))}async function TO(n,e){const t=we(n);if(!t.currentUser.isEqual(e)){re(Km,"User change. New user:",e.toKey());const r=await GI(t.localStore,e);t.currentUser=e,(function(a,u){a.mu.forEach((d=>{d.forEach((p=>{p.reject(new ee(B.CANCELLED,u))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await vu(t,r.Ls)}}function IO(n,e){const t=we(n),r=t.Au.get(e);if(r&&r.hu)return Pe().add(r.key);{let o=Pe();const a=t.Iu.get(e);if(!a)return o;for(const u of a){const d=t.Tu.get(u);o=o.unionWith(d.view.nu)}return o}}function fS(n){const e=we(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=uS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yO.bind(null,e),e.Pu.H_=oO.bind(null,e.eventManager),e.Pu.yu=aO.bind(null,e.eventManager),e}function SO(n){const e=we(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EO.bind(null,e),e}class Ph{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return kx(this.persistence,new Cx,e.initialUser,this.serializer)}Cu(e){return new $I(Fm.mi,this.serializer)}Du(e){return new Mx}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ph.provider={build:()=>new Ph};class CO extends Ph{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){We(this.persistence.referenceDelegate instanceof Rh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new cx(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?dn.withCacheSize(this.cacheSizeBytes):dn.DEFAULT;return new $I((r=>Rh.mi(r,t)),this.serializer)}}class Fp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>SE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=TO.bind(null,this.syncEngine),await rO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new sO})()}createDatastore(e){const t=Zh(e.databaseInfo.databaseId),r=(function(a){return new jx(a)})(e.databaseInfo);return(function(a,u,d,p){return new Hx(a,u,d,p)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,o,a,u,d){return new $x(r,o,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>SE(this.syncEngine,t,0)),(function(){return yE.v()?new yE:new bx})())}createSyncEngine(e,t){return(function(o,a,u,d,p,_,E){const w=new hO(o,a,u,d,p,_);return E&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=we(t);re(Ys,"RemoteStore shutting down."),r.Ea.add(5),await yu(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Fp.provider={build:()=>new Fp};/**
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
 */class pS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ii("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const ss="FirestoreClient";class AO{constructor(e,t,r,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=o,this.user=Yt.UNAUTHENTICATED,this.clientId=Rm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{re(ss,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(re(ss,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ki;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=$m(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ep(n,e){n.asyncQueue.verifyOperationInProgress(),re(ss,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async o=>{r.isEqual(o)||(await GI(e.localStore,o),r=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function AE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await RO(n);re(ss,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>EE(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,o)=>EE(e.remoteStore,o))),n._onlineComponents=e}async function RO(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(ss,"Using user provided OfflineComponentProvider");try{await ep(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===B.FAILED_PRECONDITION||o.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;ha("Error using user provided cache. Falling back to memory cache: "+t),await ep(n,new Ph)}}else re(ss,"Using default OfflineComponentProvider"),await ep(n,new CO(void 0));return n._offlineComponents}async function mS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(ss,"Using user provided OnlineComponentProvider"),await AE(n,n._uninitializedComponentsProvider._online)):(re(ss,"Using default OnlineComponentProvider"),await AE(n,new Fp))),n._onlineComponents}function kO(n){return mS(n).then((e=>e.syncEngine))}async function Up(n){const e=await mS(n),t=e.eventManager;return t.onListen=dO.bind(null,e.syncEngine),t.onUnlisten=mO.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=fO.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=gO.bind(null,e.syncEngine),t}function PO(n,e,t={}){const r=new Ki;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,p,_){const E=new pS({next:I=>{E.Nu(),u.enqueueAndForget((()=>iS(a,w)));const V=I.docs.has(d);!V&&I.fromCache?_.reject(new ee(B.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&I.fromCache&&p&&p.source==="server"?_.reject(new ee(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(I)},error:I=>_.reject(I)}),w=new sS(Gh(d.path),E,{includeMetadataChanges:!0,qa:!0});return rS(a,w)})(await Up(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function gS(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const RE=new Map;/**
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
 */const _S="firestore.googleapis.com",kE=!0;class PE{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_S,this.ssl=kE}else this.host=e.host,this.ssl=e.ssl??kE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=qI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<lx)throw new ee(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gS(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,o){return r.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nd{constructor(e,t,r,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new PE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new PE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new MN;switch(r.type){case"firstParty":return new UN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=RE.get(t);r&&(re("ComponentProvider","Removing Datastore"),RE.delete(t),r.terminate())})(this),Promise.resolve()}}function NO(n,e,t,r={}){n=Qi(n,nd);const o=os(e),a=n._getSettings(),u={...a,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;o&&(Hp(`https://${d}`),qp("Firestore",!0)),a.host!==_S&&a.host!==d&&ha("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...a,host:d,ssl:o,emulatorOptions:r};if(!Xi(p,u)&&(n._setSettings(p),r.mockUserToken)){let _,E;if(typeof r.mockUserToken=="string")_=r.mockUserToken,E=Yt.MOCK_USER;else{_=QE(r.mockUserToken,n._app?.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new ee(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Yt(w)}n._authCredentials=new bN(new nI(_,E))}}/**
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
 */class us{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new us(this.firestore,e,this._query)}}class _t{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}toJSON(){return{type:_t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(mu(t,_t._jsonSchema))return new _t(e,r||null,new ue(Xe.fromString(t.referencePath)))}}_t._jsonSchemaVersion="firestore/documentReference/1.0",_t._jsonSchema={type:It("string",_t._jsonSchemaVersion),referencePath:It("string")};class Yi extends us{constructor(e,t,r){super(e,t,Gh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new ue(e))}withConverter(e){return new Yi(this.firestore,e,this._path)}}function DO(n,e,...t){if(n=Rt(n),rI("collection","path",e),n instanceof nd){const r=Xe.fromString(e,...t);return Bv(r),new Yi(n,null,r)}{if(!(n instanceof _t||n instanceof Yi))throw new ee(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Xe.fromString(e,...t));return Bv(r),new Yi(n.firestore,null,r)}}function rd(n,e,...t){if(n=Rt(n),arguments.length===1&&(e=Rm.newId()),rI("doc","path",e),n instanceof nd){const r=Xe.fromString(e,...t);return zv(r),new _t(n,null,new ue(r))}{if(!(n instanceof _t||n instanceof Yi))throw new ee(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Xe.fromString(e,...t));return zv(r),new _t(n.firestore,n instanceof Yi?n.converter:null,new ue(r))}}/**
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
 */const NE="AsyncQueue";class DE{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new QI(this,"async_queue_retry"),this._c=()=>{const r=Zf();r&&re(NE,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Zf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Zf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ki;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ca(e))throw e;re(NE,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,ii("INTERNAL UNHANDLED ERROR: ",xE(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=qm.createAndSchedule(this,e,t,r,(a=>this.hc(a)));return this.tc.push(o),o}uc(){this.nc&&ge(47125,{Pc:xE(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function xE(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
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
 */function OE(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const o=t;for(const a of r)if(a in o&&typeof o[a]=="function")return!0;return!1})(n,["next","error","complete"])}class ru extends nd{constructor(e,t,r,o){super(e,t,r,o),this.type="firestore",this._queue=new DE,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new DE(e),this._firestoreClient=void 0,await e}}}function xO(n,e){const t=typeof n=="object"?n:Kp(),r=typeof n=="string"?n:wh,o=Lh(t,"firestore").getImmediate({identifier:r});if(!o._initialized){const a=$E("firestore");a&&NO(o,...a)}return o}function Ym(n){if(n._terminated)throw new ee(B.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||OO(n),n._firestoreClient}function OO(n){const e=n._freezeSettings(),t=(function(o,a,u,d){return new nD(o,a,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,gS(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new AO(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(o){const a=o?._online.build();return{_offline:o?._offline.build(a),_online:a}})(n._componentsProvider))}/**
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
 */class Ln{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ln(Bt.fromBase64String(e))}catch(t){throw new ee(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ln(Bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ln._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(mu(e,Ln._jsonSchema))return Ln.fromBase64String(e.bytes)}}Ln._jsonSchemaVersion="firestore/bytes/1.0",Ln._jsonSchema={type:It("string",Ln._jsonSchemaVersion),bytes:It("string")};/**
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
 */class Xm{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new zt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Jm{constructor(e){this._methodName=e}}/**
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
 */class Ar{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ar._jsonSchemaVersion}}static fromJSON(e){if(mu(e,Ar._jsonSchema))return new Ar(e.latitude,e.longitude)}}Ar._jsonSchemaVersion="firestore/geoPoint/1.0",Ar._jsonSchema={type:It("string",Ar._jsonSchemaVersion),latitude:It("number"),longitude:It("number")};/**
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
 */class Rr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,o){if(r.length!==o.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==o[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Rr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(mu(e,Rr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Rr(e.vectorValues);throw new ee(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Rr._jsonSchemaVersion="firestore/vectorValue/1.0",Rr._jsonSchema={type:It("string",Rr._jsonSchemaVersion),vectorValues:It("object")};/**
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
 */const LO=/^__.*__$/;class MO{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new no(e,this.data,this.fieldMask,t,this.fieldTransforms):new gu(e,this.data,t,this.fieldTransforms)}}function yS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{Ac:n})}}class Zm{constructor(e,t,r,o,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=o,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Zm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Nh(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(yS(this.Ac)&&LO.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class bO{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Zh(e)}Cc(e,t,r,o=!1){return new Zm({Ac:e,methodName:t,Dc:r,path:zt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vS(n){const e=n._freezeSettings(),t=Zh(n._databaseId);return new bO(n._databaseId,!!e.ignoreUndefinedProperties,t)}function VO(n,e,t,r,o,a={}){const u=n.Cc(a.merge||a.mergeFields?2:0,e,t,o);TS("Data must be an object, but it was:",u,r);const d=ES(r,u);let p,_;if(a.merge)p=new Xn(u.fieldMask),_=u.fieldTransforms;else if(a.mergeFields){const E=[];for(const w of a.mergeFields){const I=UO(e,w,t);if(!u.contains(I))throw new ee(B.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);zO(E,I)||E.push(I)}p=new Xn(E),_=u.fieldTransforms.filter((w=>p.covers(w.field)))}else p=null,_=u.fieldTransforms;return new MO(new On(d),p,_)}class eg extends Jm{_toFieldTransform(e){return new kD(e.path,new eu)}isEqual(e){return e instanceof eg}}function FO(n,e,t,r=!1){return tg(t,n.Cc(r?4:3,e))}function tg(n,e){if(wS(n=Rt(n)))return TS("Unsupported field value:",e,n),ES(n,e);if(n instanceof Jm)return(function(r,o){if(!yS(o.Ac))throw o.Sc(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(o);a&&o.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,o){const a=[];let u=0;for(const d of r){let p=tg(d,o.wc(u));p==null&&(p={nullValue:"NULL_VALUE"}),a.push(p),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,o){if((r=Rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return CD(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=rt.fromDate(r);return{timestampValue:Ah(o.serializer,a)}}if(r instanceof rt){const a=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ah(o.serializer,a)}}if(r instanceof Ar)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ln)return{bytesValue:FI(o.serializer,r._byteString)};if(r instanceof _t){const a=o.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw o.Sc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:bm(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof Rr)return(function(u,d){return{mapValue:{fields:{[dI]:{stringValue:fI},[Th]:{arrayValue:{values:u.toArray().map((_=>{if(typeof _!="number")throw d.Sc("VectorValues must only contain numeric values.");return Om(d.serializer,_)}))}}}}}})(r,o);throw o.Sc(`Unsupported field value: ${Wh(r)}`)})(n,e)}function ES(n,e){const t={};return oI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):eo(n,((r,o)=>{const a=tg(o,e.mc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function wS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof rt||n instanceof Ar||n instanceof Ln||n instanceof _t||n instanceof Jm||n instanceof Rr)}function TS(n,e,t){if(!wS(t)||!iI(t)){const r=Wh(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function UO(n,e,t){if((e=Rt(e))instanceof Xm)return e._internalPath;if(typeof e=="string")return IS(n,e);throw Nh("Field path arguments must be of type string or ",n,!1,void 0,t)}const jO=new RegExp("[~\\*/\\[\\]]");function IS(n,e,t){if(e.search(jO)>=0)throw Nh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Xm(...e.split("."))._internalPath}catch{throw Nh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Nh(n,e,t,r,o){const a=r&&!r.isEmpty(),u=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(a||u)&&(p+=" (found",a&&(p+=` in field ${r}`),u&&(p+=` in document ${o}`),p+=")"),new ee(B.INVALID_ARGUMENT,d+n+p)}function zO(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class SS{constructor(e,t,r,o,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(id("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class BO extends SS{data(){return super.data()}}function id(n,e){return typeof e=="string"?IS(n,e):e instanceof Xm?e._internalPath:e._delegate._internalPath}/**
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
 */function WO(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ee(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ng{}class rg extends ng{}function HO(n,e,...t){let r=[];e instanceof ng&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((p=>p instanceof ig)).length,d=a.filter((p=>p instanceof sd)).length;if(u>1||u>0&&d>0)throw new ee(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const o of r)n=o._apply(n);return n}class sd extends rg{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new sd(e,t,r)}_apply(e){const t=this._parse(e);return CS(e._query,t),new us(e.firestore,e.converter,Pp(e._query,t))}_parse(e){const t=vS(e.firestore);return(function(a,u,d,p,_,E,w){let I;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ee(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){ME(w,E);const z=[];for(const G of w)z.push(LE(p,a,G));I={arrayValue:{values:z}}}else I=LE(p,a,w)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||ME(w,E),I=FO(d,u,w,E==="in"||E==="not-in");return Tt.create(_,E,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function qO(n,e,t){const r=e,o=id("where",n);return sd._create(o,r,t)}class ig extends ng{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ig(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:er.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,a){let u=o;const d=a.getFlattenedFilters();for(const p of d)CS(u,p),u=Pp(u,p)})(e._query,t),new us(e.firestore,e.converter,Pp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class sg extends rg{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new sg(e,t)}_apply(e){const t=(function(o,a,u){if(o.startAt!==null)throw new ee(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ee(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Zl(a,u)})(e._query,this._field,this._direction);return new us(e.firestore,e.converter,(function(o,a){const u=o.explicitOrderBy.concat([a]);return new Aa(o.path,o.collectionGroup,u,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function $O(n,e="asc"){const t=e,r=id("orderBy",n);return sg._create(r,t)}class og extends rg{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new og(e,t,r)}_apply(e){return new us(e.firestore,e.converter,Sh(e._query,this._limit,this._limitType))}}function GO(n){return og._create("limit",n,"F")}function LE(n,e,t){if(typeof(t=Rt(t))=="string"){if(t==="")throw new ee(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wI(e)&&t.indexOf("/")!==-1)throw new ee(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Xe.fromString(t));if(!ue.isDocumentKey(r))throw new ee(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Yv(n,new ue(r))}if(t instanceof _t)return Yv(n,t._key);throw new ee(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wh(t)}.`)}function ME(n,e){if(!Array.isArray(n)||n.length===0)throw new ee(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function CS(n,e){const t=(function(o,a){for(const u of o)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class KO{convertValue(e,t="none"){switch(rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return eo(e,((o,a)=>{r[o]=this.convertValue(a,t)})),r}convertVectorValue(e){const t=e.fields?.[Th].arrayValue?.values?.map((r=>mt(r.doubleValue)));return new Rr(t)}convertGeoPoint(e){return new Ar(mt(e.latitude),mt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=$h(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Yl(e));default:return null}}convertTimestamp(e){const t=ts(e);return new rt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Xe.fromString(e);We(HI(r),9688,{name:e});const o=new Xl(r.get(1),r.get(3)),a=new ue(r.popFirst(5));return o.isEqual(t)||ii(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function QO(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Ol{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bs extends SS{constructor(e,t,r,o,a,u){super(e,t,r,o,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new th(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(id("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Bs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Bs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Bs._jsonSchema={type:It("string",Bs._jsonSchemaVersion),bundleSource:It("string","DocumentSnapshot"),bundleName:It("string"),bundle:It("string")};class th extends Bs{data(e={}){return super.data(e)}}class oa{constructor(e,t,r,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ol(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new th(this._firestore,this._userDataWriter,r.key,r,new Ol(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,a){if(o._snapshot.oldDocs.isEmpty()){let u=0;return o._snapshot.docChanges.map((d=>{const p=new th(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Ol(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}}))}{let u=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const p=new th(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Ol(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return d.type!==0&&(_=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),E=u.indexOf(d.doc.key)),{type:YO(d.type),doc:p,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=oa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Rm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],o=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),o.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function YO(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge(61501,{type:n})}}/**
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
 */function od(n){n=Qi(n,_t);const e=Qi(n.firestore,ru);return PO(Ym(e),n._key).then((t=>kS(e,n,t)))}oa._jsonSchemaVersion="firestore/querySnapshot/1.0",oa._jsonSchema={type:It("string",oa._jsonSchemaVersion),bundleSource:It("string","QuerySnapshot"),bundleName:It("string"),bundle:It("string")};class AS extends KO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ln(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,t)}}function RS(n,e,t){n=Qi(n,_t);const r=Qi(n.firestore,ru),o=QO(n.converter,e,t);return JO(r,[VO(vS(r),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Zr.none())])}function XO(n,...e){n=Rt(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||OE(e[r])||(t=e[r++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(OE(e[r])){const p=e[r];e[r]=p.next?.bind(p),e[r+1]=p.error?.bind(p),e[r+2]=p.complete?.bind(p)}let a,u,d;if(n instanceof _t)u=Qi(n.firestore,ru),d=Gh(n._key.path),a={next:p=>{e[r]&&e[r](kS(u,n,p))},error:e[r+1],complete:e[r+2]};else{const p=Qi(n,us);u=Qi(p.firestore,ru),d=p._query;const _=new AS(u);a={next:E=>{e[r]&&e[r](new oa(u,_,p,E))},error:e[r+1],complete:e[r+2]},WO(n._query)}return(function(_,E,w,I){const V=new pS(I),z=new sS(E,V,w);return _.asyncQueue.enqueueAndForget((async()=>rS(await Up(_),z))),()=>{V.Nu(),_.asyncQueue.enqueueAndForget((async()=>iS(await Up(_),z)))}})(Ym(u),d,o,a)}function JO(n,e){return(function(r,o){const a=new Ki;return r.asyncQueue.enqueueAndForget((async()=>_O(await kO(r),o,a))),a.promise})(Ym(n),e)}function kS(n,e,t){const r=t.docs.get(e._key),o=new AS(n);return new Bs(n,o,e._key,r,new Ol(t.hasPendingWrites,t.fromCache),e.converter)}function PS(){return new eg("serverTimestamp")}(function(e,t=!0){(function(o){Ia=o})(Xs),Ws(new Ji("firestore",((r,{instanceIdentifier:o,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new ru(new VN(r.getProvider("auth-internal")),new jN(u,r.getProvider("app-check-internal")),(function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ee(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xl(_.options.projectId,E)})(u,o),u);return a={useFetchStreams:t,...a},d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),Tr(Vv,Fv,e),Tr(Vv,Fv,"esm2020")})();const ZO={apiKey:"AIzaSyB1z04jNS4gnwWa4VI10cXinj2PBg3KHe0",authDomain:"boulder-gym.firebaseapp.com",projectId:"boulder-gym",storageBucket:"boulder-gym.firebasestorage.app",messagingSenderId:"837049852336",appId:"1:837049852336:web:73b74809c9f120dc75b675",measurementId:"G-PKT03CZKTN"},ag=ew(ZO);xN(ag);const iu=xO(ag),ei=H1(ag),e2=new Gr;async function bE(){const n=ei.currentUser;if(!n)return;const e=rd(iu,"users",n.uid);(await od(e)).exists()||await RS(e,{displayName:n.displayName||n.email?.split("@")[0]||"",email:n.email||null,photoURL:n.photoURL||null,roles:{},createdAt:PS()},{merge:!0})}function VE(n){switch(n){case"auth/invalid-email":return"Invalid email address.";case"auth/missing-password":return"Please enter your password.";case"auth/weak-password":return"Password should be at least 6 characters.";case"auth/email-already-in-use":return"That email is already in use.";case"auth/invalid-credential":case"auth/wrong-password":return"Wrong email or password.";case"auth/popup-closed-by-user":return"Popup closed before completing sign in.";default:return"Something went wrong. Please try again."}}function t2(){const[n,e]=gt.useState("signin"),[t,r]=gt.useState(""),[o,a]=gt.useState(""),[u,d]=gt.useState(""),[p,_]=gt.useState(!1),[E,w]=gt.useState(null);async function I(){try{_(!0),w(null),await ZR(ei,e2),await bE()}catch(z){w(VE(z?.code))}finally{_(!1)}}async function V(z){z.preventDefault();try{if(_(!0),w(null),n==="signin")await kR(ei,t,o);else{const G=await RR(ei,t,o);u.trim()&&await NR(G.user,{displayName:u.trim()})}await bE()}catch(G){w(VE(G?.code))}finally{_(!1)}}return ne.jsxs("div",{className:"max-w-md mx-auto rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 p-6",children:[ne.jsx("h1",{className:"text-xl font-semibold mb-1",children:n==="signin"?"Sign in":"Create an account"}),ne.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-4",children:"Use Google or email/password."}),E&&ne.jsx("div",{className:"mb-3 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 rounded-lg p-2",children:E}),ne.jsx("button",{onClick:I,disabled:p,className:"w-full mb-4 px-3 py-2 rounded-xl text-sm font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-zinc-800",children:"Continue with Google"}),ne.jsxs("form",{onSubmit:V,className:"space-y-3",children:[n==="signup"&&ne.jsxs("div",{children:[ne.jsx("label",{className:"block text-sm mb-1",children:"Display name"}),ne.jsx("input",{type:"text",value:u,onChange:z=>d(z.target.value),className:"w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 text-sm",placeholder:"Jane Doe"})]}),ne.jsxs("div",{children:[ne.jsx("label",{className:"block text-sm mb-1",children:"Email"}),ne.jsx("input",{type:"email",value:t,onChange:z=>r(z.target.value),className:"w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 text-sm",placeholder:"you@example.com",required:!0})]}),ne.jsxs("div",{children:[ne.jsx("label",{className:"block text-sm mb-1",children:"Password"}),ne.jsx("input",{type:"password",value:o,onChange:z=>a(z.target.value),className:"w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 text-sm",placeholder:"••••••••",required:!0})]}),ne.jsx("button",{type:"submit",disabled:p,className:"w-full px-3 py-2 rounded-xl text-sm font-medium bg-black text-white dark:bg-white dark:text-black",children:p?n==="signin"?"Signing in…":"Creating…":n==="signin"?"Sign in":"Create account"})]}),ne.jsx("div",{className:"text-xs text-gray-600 dark:text-gray-400 mt-3",children:n==="signin"?ne.jsxs(ne.Fragment,{children:["No account yet?"," ",ne.jsx("button",{className:"underline",onClick:()=>e("signup"),children:"Create one"})]}):ne.jsxs(ne.Fragment,{children:["Already have an account?"," ",ne.jsx("button",{className:"underline",onClick:()=>e("signin"),children:"Sign in"})]})})]})}const FE={display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",backgroundColor:"#f5f6fa",fontFamily:"Arial, sans-serif"},UE={backgroundColor:"#fff",borderRadius:"12px",padding:"2rem",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.1)",textAlign:"center",width:"320px",transition:"transform 0.2s ease"},n2={width:"96px",height:"96px",borderRadius:"50%",objectFit:"cover",marginBottom:"1rem"},r2={fontSize:"1.4rem",fontWeight:600,marginBottom:"0.25rem",color:"#222"},i2={fontSize:"0.95rem",color:"#555",marginBottom:"1rem"},s2={fontSize:"0.9rem",color:"#666"},o2={fontWeight:500,color:"#333"},a2={color:"#555",fontSize:"1rem"};function l2(){const[n,e]=gt.useState(null);return gt.useEffect(()=>{const t=Cw(ei,r=>{e(r)});return()=>t()},[]),n?ne.jsx("div",{style:FE,children:ne.jsxs("div",{style:{...UE,cursor:"default",transform:"translateY(0)"},onMouseEnter:t=>{t.currentTarget.style.transform="translateY(-3px)"},onMouseLeave:t=>{t.currentTarget.style.transform="translateY(0)"},children:[ne.jsx("img",{src:n.photoURL||"https://via.placeholder.com/96?text=User",alt:n.displayName??"User photo",style:n2}),ne.jsx("h2",{style:r2,children:n.displayName}),ne.jsx("p",{style:i2,children:n.email}),ne.jsxs("div",{style:s2,children:[ne.jsx("span",{style:o2,children:"Account created:"})," ",n.metadata.creationTime?new Date(n.metadata.creationTime).toLocaleString():"Unknown"]})]})}):ne.jsx("div",{style:FE,children:ne.jsx("div",{style:UE,children:ne.jsx("p",{style:a2,children:"Loading user info..."})})})}function jp({children:n}){return ne.jsx("div",{className:"rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 p-4 shadow-sm",children:n})}function jE({title:n,right:e,children:t}){return ne.jsxs("section",{className:"space-y-3",children:[ne.jsxs("div",{className:"flex items-center justify-between",children:[ne.jsx("h2",{className:"text-base font-semibold tracking-tight",children:n}),e]}),ne.jsx(jp,{children:t})]})}function u2(){const[n,e]=gt.useState(ei.currentUser),[t,r]=gt.useState(!ei.currentUser);return gt.useEffect(()=>{const o=Cw(ei,a=>{e(a),r(!1)});return()=>o()},[]),{user:n,loading:t}}function c2(n){const[e,t]=gt.useState(null);return gt.useEffect(()=>{if(!n){t(null);return}const r=rd(iu,"users",n);od(r).then(o=>t(o.exists()?o.data():null))},[n]),{profile:e}}function h2(n){const[e,t]=gt.useState([]),[r,o]=gt.useState(!!n);return gt.useEffect(()=>{if(!n)return;const a=HO(DO(iu,"signups"),qO("uid","==",n),$O("createdAt","desc"),GO(5)),u=XO(a,async d=>{const p=[];for(const _ of d.docs){const E=_.get("assignmentId"),w=rd(iu,"assignments",E),I=await od(w);I.exists()&&p.push({id:I.id,data:I.data()})}t(p),o(!1)});return()=>u()},[n]),{items:e,loading:r}}async function d2(n){const e=rd(iu,"users",n.uid);(await od(e)).exists()||await RS(e,{displayName:n.displayName||n.email?.split("@")[0]||"",email:n.email||null,photoURL:n.photoURL||null,roles:{},createdAt:PS()},{merge:!0})}function f2(){const{user:n,loading:e}=u2(),{profile:t}=c2(n?.uid),{items:r}=h2(n?.uid),[o,a]=gt.useState(!1),[u,d]=gt.useState(null),[p,_]=gt.useState(!1);gt.useEffect(()=>{n&&d2(n)},[n]);async function E(){try{d(null),a(!0),await OR(ei)}catch(I){d(I?.message??"Failed to sign out.")}finally{a(!1)}}if(e)return ne.jsx("div",{className:"p-6 max-w-xl mx-auto",children:ne.jsx(jp,{children:ne.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Loading your session…"})})});if(!n)return ne.jsx("div",{className:"p-6 max-w-xl mx-auto",children:ne.jsx(t2,{})});if(p)return ne.jsxs("div",{className:"p-6 space-y-6",children:[ne.jsxs("header",{className:"flex items-center justify-between",children:[ne.jsx("h1",{className:"text-2xl font-bold",children:"Your Profile"}),ne.jsx("button",{onClick:()=>_(!1),className:"inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800",children:"Back"})]}),ne.jsx(l2,{})]});const w=t?.displayName||n.displayName||n.email||"there";return ne.jsxs("div",{className:"p-6 space-y-6",children:[ne.jsxs("header",{className:"flex items-center justify-between",children:[ne.jsxs("div",{children:[ne.jsxs("h1",{className:"text-2xl font-bold",children:["Welcome, ",w," 👋"]}),ne.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"You’re signed in with Firebase Auth."})]}),ne.jsx("button",{onClick:E,disabled:o,className:"inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800 disabled:opacity-60","aria-label":"Sign out",children:o?"Signing out…":"Sign out"})]}),u&&ne.jsx(jp,{children:ne.jsx("p",{className:"text-sm text-red-600 dark:text-red-400",children:u})}),ne.jsx(jE,{title:"Your account",children:ne.jsx("button",{onClick:()=>_(!0),className:"w-full rounded-xl px-3 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800",children:"View Profile"})}),ne.jsx(jE,{title:"Your latest signups",children:r.length===0?ne.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"No recent signups yet."}):ne.jsx("ul",{className:"space-y-2",children:r.map(({id:I,data:V})=>ne.jsx("li",{className:"flex items-center justify-between",children:ne.jsxs("div",{children:[ne.jsx("p",{className:"font-medium",children:V.title}),V.location&&ne.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:V.location})]})},I))})})]})}function p2(){return ne.jsx(ne.Fragment,{children:ne.jsx(f2,{})})}H0.createRoot(document.getElementById("root")).render(ne.jsx(gt.StrictMode,{children:ne.jsx(p2,{})}));
