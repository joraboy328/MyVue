!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r=window.webpackJsonp;window.webpackJsonp=function(e,n,i){for(var a,u,c=0,s=[];c<e.length;c++)u=e[c],o[u]&&s.push(o[u][0]),o[u]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);for(r&&r(e,n,i);s.length;)s.shift()()};var n={},o={3:0};e.e=function(t){function r(){u.onerror=u.onload=null,clearTimeout(c);var e=o[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),o[t]=void 0)}var n=o[t];if(0===n)return new Promise(function(t){t()});if(n)return n[2];var i=new Promise(function(e,r){n=o[t]=[e,r]});n[2]=i;var a=document.getElementsByTagName("head")[0],u=document.createElement("script");u.type="text/javascript",u.charset="utf-8",u.async=!0,u.timeout=12e4,e.nc&&u.setAttribute("nonce",e.nc),u.src=e.p+""+t+".51e06406a74316dd00e6.js";var c=setTimeout(r,12e4);return u.onerror=u.onload=r,a.appendChild(u),i},e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e.oe=function(t){throw console.error(t),t},e(e.s=3)}([function(t,e,r){var n=r(2)(r(4),r(8),null,null);n.options.__file="C:\\Users\\gang.liu\\Documents\\MyVue\\vue-book-master\\router\\app.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},function(t,e,r){"use strict";function n(t,e){}function o(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function i(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}function a(t,e){for(var r in e)t[r]=e[r];return t}function u(t,e,r){void 0===e&&(e={});var n,o=r||c;try{n=o(t||"")}catch(t){n={}}for(var i in e)n[i]=e[i];return n}function c(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var r=t.replace(/\+/g," ").split("="),n=Ft(r.shift()),o=r.length>0?Ft(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]}),e):e}function s(t){var e=t?Object.keys(t).map(function(e){var r=t[e];if(void 0===r)return"";if(null===r)return Bt(e);if(Array.isArray(r)){var n=[];return r.forEach(function(t){void 0!==t&&(null===t?n.push(Bt(e)):n.push(Bt(e)+"="+Bt(t)))}),n.join("&")}return Bt(e)+"="+Bt(r)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}function p(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=f(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:l(e,o),matched:t?h(t):[]};return r&&(a.redirectedFrom=l(r,o)),Object.freeze(a)}function f(t){if(Array.isArray(t))return t.map(f);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=f(t[r]);return e}return t}function h(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function l(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;void 0===o&&(o="");var i=e||s;return(r||"/")+i(n)+o}function d(t,e){return e===Vt?t===e:!!e&&(t.path&&e.path?t.path.replace(Ht,"")===e.path.replace(Ht,"")&&t.hash===e.hash&&v(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&v(t.query,e.query)&&v(t.params,e.params)))}function v(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every(function(r){var n=t[r],o=e[r];return"object"==typeof n&&"object"==typeof o?v(n,o):String(n)===String(o)})}function y(t,e){return 0===t.path.replace(Ht,"/").indexOf(e.path.replace(Ht,"/"))&&(!e.hash||t.hash===e.hash)&&m(t.query,e.query)}function m(t,e){for(var r in e)if(!(r in t))return!1;return!0}function g(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){if(/\b_blank\b/i.test(t.currentTarget.getAttribute("target")))return}return t.preventDefault&&t.preventDefault(),!0}}function b(t){if(t)for(var e,r=0;r<t.length;r++){if(e=t[r],"a"===e.tag)return e;if(e.children&&(e=b(e.children)))return e}}function w(t){if(!w.installed||Lt!==t){w.installed=!0,Lt=t;var e=function(t){return void 0!==t},r=function(t,r){var n=t.$options._parentVnode;e(n)&&e(n=n.data)&&e(n=n.registerRouteInstance)&&n(t,r)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("router-view",qt),t.component("router-link",Nt);var n=t.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}function x(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function k(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}function E(t){return t.replace(/\/\//g,"/")}function O(t,e){for(var r,n=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(r=Zt.exec(t));){var c=r[0],s=r[1],p=r.index;if(a+=t.slice(i,p),i=p+c.length,s)a+=s[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,b="+"===y||"*"===y,w="?"===y||"*"===y,x=r[2]||u,k=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:w,repeat:b,partial:g,asterisk:!!m,pattern:k?T(k):m?".*":"[^"+A(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function _(t,e){return C(O(t,e))}function R(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function j(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function C(t){for(var e=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(r,n){for(var o="",i=r||{},a=n||{},u=a.pretty?R:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if("string"!=typeof s){var p,f=i[s.name];if(null==f){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(Kt(f)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=u(f[h]),!e[c].test(p))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===h?s.prefix:s.delimiter)+p}}else{if(p=s.asterisk?j(f):u(f),!e[c].test(p))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+p+'"');o+=s.prefix+p}}else o+=s}return o}}function A(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function T(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function S(t,e){return t.keys=e,t}function $(t){return t.sensitive?"":"i"}function P(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return S(t,e)}function L(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(U(t[o],e,r).source);return S(new RegExp("(?:"+n.join("|")+")",$(r)),e)}function q(t,e,r){return M(O(t,r),e,r)}function M(t,e,r){Kt(e)||(r=e||r,e=[]),r=r||{};for(var n=r.strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=A(u);else{var c=A(u.prefix),s="(?:"+u.pattern+")";e.push(u),u.repeat&&(s+="(?:"+c+s+")*"),s=u.optional?u.partial?c+"("+s+")?":"(?:"+c+"("+s+"))?":c+"("+s+")",i+=s}}var p=A(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",S(new RegExp("^"+i,$(r)),e)}function U(t,e,r){return Kt(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?P(t,e):Kt(t)?L(t,e,r):q(t,e,r)}function I(t,e,r){try{return(te[t]||(te[t]=Qt.compile(t)))(e||{},{pretty:!0})}catch(t){return""}}function B(t,e,r,n){var o=e||[],i=r||Object.create(null),a=n||Object.create(null);t.forEach(function(t){F(o,i,a,t)});for(var u=0,c=o.length;u<c;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),c--,u--);return{pathList:o,pathMap:i,nameMap:a}}function F(t,e,r,n,o,i){var a=n.path,u=n.name,c=n.pathToRegexpOptions||{},s=V(a,o,c.strict);"boolean"==typeof n.caseSensitive&&(c.sensitive=n.caseSensitive);var p={path:s,regex:H(s,c),components:n.components||{default:n.component},instances:{},name:u,parent:o,matchAs:i,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:null==n.props?{}:n.components?n.props:{default:n.props}};if(n.children&&n.children.forEach(function(n){var o=i?E(i+"/"+n.path):void 0;F(t,e,r,n,p,o)}),void 0!==n.alias){(Array.isArray(n.alias)?n.alias:[n.alias]).forEach(function(i){var a={path:i,children:n.children};F(t,e,r,a,o,p.path||"/")})}e[p.path]||(t.push(p.path),e[p.path]=p),u&&(r[u]||(r[u]=p))}function H(t,e){var r=Qt(t,[],e);return r}function V(t,e,r){return r||(t=t.replace(/\/$/,"")),"/"===t[0]?t:null==e?t:E(e.path+"/"+t)}function z(t,e,r,n){var o="string"==typeof t?{path:t}:t;if(o.name||o._normalized)return o;if(!o.path&&o.params&&e){o=D({},o),o._normalized=!0;var i=D(D({},e.params),o.params);if(e.name)o.name=e.name,o.params=i;else if(e.matched.length){var a=e.matched[e.matched.length-1].path;o.path=I(a,i,"path "+e.path)}return o}var c=k(o.path||""),s=e&&e.path||"/",p=c.path?x(c.path,s,r||o.append):s,f=u(c.query,o.query,n&&n.options.parseQuery),h=o.hash||c.hash;return h&&"#"!==h.charAt(0)&&(h="#"+h),{_normalized:!0,path:p,query:f,hash:h}}function D(t,e){for(var r in e)t[r]=e[r];return t}function N(t,e){function r(t){B(t,c,s,f)}function n(t,r,n){var o=z(t,r,!1,e),i=o.name;if(i){var u=f[i];if(!u)return a(null,o);var p=u.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof o.params&&(o.params={}),r&&"object"==typeof r.params)for(var h in r.params)!(h in o.params)&&p.indexOf(h)>-1&&(o.params[h]=r.params[h]);if(u)return o.path=I(u.path,o.params,'named route "'+i+'"'),a(u,o,n)}else if(o.path){o.params={};for(var l=0;l<c.length;l++){var d=c[l],v=s[d];if(J(v.regex,o.path,o.params))return a(v,o,n)}}return a(null,o)}function o(t,r){var o=t.redirect,i="function"==typeof o?o(p(t,r,null,e)):o;if("string"==typeof i&&(i={path:i}),!i||"object"!=typeof i)return a(null,r);var u=i,c=u.name,s=u.path,h=r.query,l=r.hash,d=r.params;if(h=u.hasOwnProperty("query")?u.query:h,l=u.hasOwnProperty("hash")?u.hash:l,d=u.hasOwnProperty("params")?u.params:d,c){f[c];return n({_normalized:!0,name:c,query:h,hash:l,params:d},void 0,r)}if(s){var v=K(s,t);return n({_normalized:!0,path:I(v,d,'redirect route with path "'+v+'"'),query:h,hash:l},void 0,r)}return a(null,r)}function i(t,e,r){var o=I(r,e.params,'aliased route with path "'+r+'"'),i=n({_normalized:!0,path:o});if(i){var u=i.matched,c=u[u.length-1];return e.params=i.params,a(c,e)}return a(null,e)}function a(t,r,n){return t&&t.redirect?o(t,n||r):t&&t.matchAs?i(t,r,t.matchAs):p(t,r,n,e)}var u=B(t),c=u.pathList,s=u.pathMap,f=u.nameMap;return{match:n,addRoutes:r}}function J(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],u="string"==typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name]=u)}return!0}function K(t,e){return x(t,e.parent?e.parent.path:"/",!0)}function Q(){window.history.replaceState({key:it()},""),window.addEventListener("popstate",function(t){Y(),t.state&&t.state.key&&at(t.state.key)})}function X(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick(function(){var t=W(),i=o(e,r,n?t:null);i&&("function"==typeof i.then?i.then(function(e){nt(e,t)}).catch(function(t){}):nt(i,t))})}}function Y(){var t=it();t&&(ee[t]={x:window.pageXOffset,y:window.pageYOffset})}function W(){var t=it();if(t)return ee[t]}function G(t,e){var r=document.documentElement,n=r.getBoundingClientRect(),o=t.getBoundingClientRect();return{x:o.left-n.left-e.x,y:o.top-n.top-e.y}}function Z(t){return rt(t.x)||rt(t.y)}function tt(t){return{x:rt(t.x)?t.x:window.pageXOffset,y:rt(t.y)?t.y:window.pageYOffset}}function et(t){return{x:rt(t.x)?t.x:0,y:rt(t.y)?t.y:0}}function rt(t){return"number"==typeof t}function nt(t,e){var r="object"==typeof t;if(r&&"string"==typeof t.selector){var n=document.querySelector(t.selector);if(n){var o=t.offset&&"object"==typeof t.offset?t.offset:{};o=et(o),e=G(n,o)}else Z(t)&&(e=tt(t))}else r&&Z(t)&&(e=tt(t));e&&window.scrollTo(e.x,e.y)}function ot(){return ne.now().toFixed(3)}function it(){return oe}function at(t){oe=t}function ut(t,e){Y();var r=window.history;try{e?r.replaceState({key:oe},"",t):(oe=ot(),r.pushState({key:oe},"",t))}catch(r){window.location[e?"replace":"assign"](t)}}function ct(t){ut(t,!0)}function st(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],function(){n(o+1)}):n(o+1)};n(0)}function pt(t){return function(e,r,n){var i=!1,a=0,u=null;ft(t,function(t,e,r,c){if("function"==typeof t&&void 0===t.cid){i=!0,a++;var s,p=dt(function(e){lt(e)&&(e=e.default),t.resolved="function"==typeof e?e:Lt.extend(e),r.components[c]=e,--a<=0&&n()}),f=dt(function(t){var e="Failed to resolve async component "+c+": "+t;u||(u=o(t)?t:new Error(e),n(u))});try{s=t(p,f)}catch(t){f(t)}if(s)if("function"==typeof s.then)s.then(p,f);else{var h=s.component;h&&"function"==typeof h.then&&h.then(p,f)}}}),i||n()}}function ft(t,e){return ht(t.map(function(t){return Object.keys(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r)})}))}function ht(t){return Array.prototype.concat.apply([],t)}function lt(t){return t.__esModule||ie&&"Module"===t[Symbol.toStringTag]}function dt(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}function vt(t){if(!t)if(Jt){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function yt(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}function mt(t,e,r,n){var o=ft(t,function(t,n,o,i){var a=gt(t,e);if(a)return Array.isArray(a)?a.map(function(t){return r(t,n,o,i)}):r(a,n,o,i)});return ht(n?o.reverse():o)}function gt(t,e){return"function"!=typeof t&&(t=Lt.extend(t)),t.options[e]}function bt(t){return mt(t,"beforeRouteLeave",xt,!0)}function wt(t){return mt(t,"beforeRouteUpdate",xt)}function xt(t,e){if(e)return function(){return t.apply(e,arguments)}}function kt(t,e,r){return mt(t,"beforeRouteEnter",function(t,n,o,i){return Et(t,o,i,e,r)})}function Et(t,e,r,n,o){return function(i,a,u){return t(i,a,function(t){u(t),"function"==typeof t&&n.push(function(){Ot(t,e.instances,r,o)})})}}function Ot(t,e,r,n){e[r]?t(e[r]):n()&&setTimeout(function(){Ot(t,e,r,n)},16)}function _t(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function Rt(t){var e=_t(t);if(!/^\/#/.test(e))return window.location.replace(E(t+"/#"+e)),!0}function jt(){var t=Ct();return"/"===t.charAt(0)||(St("/"+t),!1)}function Ct(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)}function At(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function Tt(t){re?ut(At(t)):window.location.hash=t}function St(t){re?ct(At(t)):window.location.replace(At(t))}function $t(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function Pt(t,e,r){var n="hash"===r?"#"+e:e;return t?E(t+"/"+n):n}Object.defineProperty(e,"__esModule",{value:!0});var Lt,qt={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,n=e.children,o=e.parent,u=e.data;u.routerView=!0;for(var c=o.$createElement,s=r.name,p=o.$route,f=o._routerViewCache||(o._routerViewCache={}),h=0,l=!1;o&&o._routerRoot!==o;)o.$vnode&&o.$vnode.data.routerView&&h++,o._inactive&&(l=!0),o=o.$parent;if(u.routerViewDepth=h,l)return c(f[s],u,n);var d=p.matched[h];if(!d)return f[s]=null,c();var v=f[s]=d.components[s];u.registerRouteInstance=function(t,e){var r=d.instances[s];(e&&r!==t||!e&&r===t)&&(d.instances[s]=e)},(u.hook||(u.hook={})).prepatch=function(t,e){d.instances[s]=e.componentInstance};var y=u.props=i(p,d.props&&d.props[s]);if(y){y=u.props=a({},y);var m=u.attrs=u.attrs||{};for(var g in y)v.props&&g in v.props||(m[g]=y[g],delete y[g])}return c(v,u,n)}},Mt=/[!'()*]/g,Ut=function(t){return"%"+t.charCodeAt(0).toString(16)},It=/%2C/g,Bt=function(t){return encodeURIComponent(t).replace(Mt,Ut).replace(It,",")},Ft=decodeURIComponent,Ht=/\/?$/,Vt=p(null,{path:"/"}),zt=[String,Object],Dt=[String,Array],Nt={name:"router-link",props:{to:{type:zt,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:Dt,default:"click"}},render:function(t){var e=this,r=this.$router,n=this.$route,o=r.resolve(this.to,n,this.append),i=o.location,a=o.route,u=o.href,c={},s=r.options.linkActiveClass,f=r.options.linkExactActiveClass,h=null==s?"router-link-active":s,l=null==f?"router-link-exact-active":f,v=null==this.activeClass?h:this.activeClass,m=null==this.exactActiveClass?l:this.exactActiveClass,w=i.path?p(null,i,null,r):a;c[m]=d(n,w),c[v]=this.exact?c[m]:y(n,w);var x=function(t){g(t)&&(e.replace?r.replace(i):r.push(i))},k={click:g};Array.isArray(this.event)?this.event.forEach(function(t){k[t]=x}):k[this.event]=x;var E={class:c};if("a"===this.tag)E.on=k,E.attrs={href:u};else{var O=b(this.$slots.default);if(O){O.isStatic=!1;var _=Lt.util.extend;(O.data=_({},O.data)).on=k;(O.data.attrs=_({},O.data.attrs)).href=u}else E.on=k}return t(this.tag,E,this.$slots.default)}},Jt="undefined"!=typeof window,Kt=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Qt=U,Xt=O,Yt=_,Wt=C,Gt=M,Zt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");Qt.parse=Xt,Qt.compile=Yt,Qt.tokensToFunction=Wt,Qt.tokensToRegExp=Gt;var te=Object.create(null),ee=Object.create(null),re=Jt&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),ne=Jt&&window.performance&&window.performance.now?window.performance:Date,oe=ot(),ie="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,ae=function(t,e){this.router=t,this.base=vt(e),this.current=Vt,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};ae.prototype.listen=function(t){this.cb=t},ae.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},ae.prototype.onError=function(t){this.errorCbs.push(t)},ae.prototype.transitionTo=function(t,e,r){var n=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){n.updateRoute(o),e&&e(o),n.ensureURL(),n.ready||(n.ready=!0,n.readyCbs.forEach(function(t){t(o)}))},function(t){r&&r(t),t&&!n.ready&&(n.ready=!0,n.readyErrorCbs.forEach(function(e){e(t)}))})},ae.prototype.confirmTransition=function(t,e,r){var i=this,a=this.current,u=function(t){o(t)&&(i.errorCbs.length?i.errorCbs.forEach(function(e){e(t)}):(n(!1,"uncaught error during route navigation:"),console.error(t))),r&&r(t)};if(d(t,a)&&t.matched.length===a.matched.length)return this.ensureURL(),u();var c=yt(this.current.matched,t.matched),s=c.updated,p=c.deactivated,f=c.activated,h=[].concat(bt(p),this.router.beforeHooks,wt(s),f.map(function(t){return t.beforeEnter}),pt(f));this.pending=t;var l=function(e,r){if(i.pending!==t)return u();try{e(t,a,function(t){!1===t||o(t)?(i.ensureURL(!0),u(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(u(),"object"==typeof t&&t.replace?i.replace(t):i.push(t)):r(t)})}catch(t){u(t)}};st(h,l,function(){var r=[];st(kt(f,r,function(){return i.current===t}).concat(i.router.resolveHooks),l,function(){if(i.pending!==t)return u();i.pending=null,e(t),i.router.app&&i.router.app.$nextTick(function(){r.forEach(function(t){t()})})})})},ae.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(r){r&&r(t,e)})};var ue=function(t){function e(e,r){var n=this;t.call(this,e,r);var o=e.options.scrollBehavior;o&&Q();var i=_t(this.base);window.addEventListener("popstate",function(t){var r=n.current,a=_t(n.base);n.current===Vt&&a===i||n.transitionTo(a,function(t){o&&X(e,t,r,!0)})})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,function(t){ut(E(n.base+t.fullPath)),X(n.router,t,i,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,function(t){ct(E(n.base+t.fullPath)),X(n.router,t,i,!1),e&&e(t)},r)},e.prototype.ensureURL=function(t){if(_t(this.base)!==this.current.fullPath){var e=E(this.base+this.current.fullPath);t?ut(e):ct(e)}},e.prototype.getCurrentLocation=function(){return _t(this.base)},e}(ae),ce=function(t){function e(e,r,n){t.call(this,e,r),n&&Rt(this.base)||jt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router,r=e.options.scrollBehavior,n=re&&r;n&&Q(),window.addEventListener(re?"popstate":"hashchange",function(){var e=t.current;jt()&&t.transitionTo(Ct(),function(r){n&&X(t.router,r,e,!0),re||St(r.fullPath)})})},e.prototype.push=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,function(t){Tt(t.fullPath),X(n.router,t,i,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,function(t){St(t.fullPath),X(n.router,t,i,!1),e&&e(t)},r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Ct()!==e&&(t?Tt(e):St(e))},e.prototype.getCurrentLocation=function(){return Ct()},e}(ae),se=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)},r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,function(){e.index=r,e.updateRoute(n)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(ae),pe=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=N(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!re&&!1!==t.fallback,this.fallback&&(e="hash"),Jt||(e="abstract"),this.mode=e,e){case"history":this.history=new ue(this,t.base);break;case"hash":this.history=new ce(this,t.base,this.fallback);break;case"abstract":this.history=new se(this,t.base)}},fe={currentRoute:{configurable:!0}};pe.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},fe.currentRoute.get=function(){return this.history&&this.history.current},pe.prototype.init=function(t){var e=this;if(this.apps.push(t),!this.app){this.app=t;var r=this.history;if(r instanceof ue)r.transitionTo(r.getCurrentLocation());else if(r instanceof ce){var n=function(){r.setupListeners()};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},pe.prototype.beforeEach=function(t){return $t(this.beforeHooks,t)},pe.prototype.beforeResolve=function(t){return $t(this.resolveHooks,t)},pe.prototype.afterEach=function(t){return $t(this.afterHooks,t)},pe.prototype.onReady=function(t,e){this.history.onReady(t,e)},pe.prototype.onError=function(t){this.history.onError(t)},pe.prototype.push=function(t,e,r){this.history.push(t,e,r)},pe.prototype.replace=function(t,e,r){this.history.replace(t,e,r)},pe.prototype.go=function(t){this.history.go(t)},pe.prototype.back=function(){this.go(-1)},pe.prototype.forward=function(){this.go(1)},pe.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},pe.prototype.resolve=function(t,e,r){var n=z(t,e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:Pt(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},pe.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==Vt&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(pe.prototype,fe),pe.install=w,pe.version="2.8.1",Jt&&window.Vue&&window.Vue.use(pe),e.default=pe},function(t,e){t.exports=function(t,e,r,n){var o,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,i=t.default);var u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),r&&(u._scopeId=r),n){var c=Object.create(u.computed||null);Object.keys(n).forEach(function(t){var e=n[t];c[t]=function(){return e}}),u.computed=c}return{esModule:o,exports:i,options:u}}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=r(!function(){var t=new Error('Cannot find module "vue"');throw t.code="MODULE_NOT_FOUND",t}()),i=n(o),a=r(1),u=n(a),c=r(0),s=n(c);i.default.use(u.default);var p=[{path:"/index",meta:{title:"首页"},component:function(t){return r.e(1).then(function(){var e=[r(6)];t.apply(null,e)}.bind(this)).catch(r.oe)}},{path:"/about",meta:{title:"关于"},component:function(t){return r.e(2).then(function(){var e=[r(5)];t.apply(null,e)}.bind(this)).catch(r.oe)}},{path:"/user/:id",meta:{title:"个人主页"},component:function(t){return r.e(0).then(function(){var e=[r(7)];t.apply(null,e)}.bind(this)).catch(r.oe)}},{path:"*",redirect:"/index"}],f={mode:"history",routes:p},h=new u.default(f);h.beforeEach(function(t,e,r){window.document.title=t.meta.title,r()}),h.afterEach(function(t,e,r){window.scrollTo(0,0)}),new i.default({el:"#app",router:h,render:function(t){return t(s.default)}})},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},,,,function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-view")],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}]);