!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("@qcharts/core/dist/index.js")):"function"==typeof define&&define.amd?define(["@qcharts/core/dist/index.js"],e):"object"==typeof exports?exports.QchartsVue=e(require("@qcharts/core/dist/index.js")):t.QchartsVue=e(t.qcharts)}(window,(function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=14)}([function(t,e,n){"use strict";function r(t,e,n,r,o,i,s,a){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):o&&(u=a?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(t,e){return u.call(e),f(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:c}}n.d(e,"a",(function(){return r}))},function(e,n){e.exports=t},,,function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(t,e){return e?e.querySelector(t):document.querySelector(t)},u=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=a.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,f=0,l=[],p=n(16);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(g(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(g(r.parts[s],e));i[r.id]={id:r.id,refs:1,parts:a}}}}function h(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function v(t,e){var n=u(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=u(t.insertAt.before,n);n.insertBefore(e,o)}}function y(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return m(e,t.attrs),v(t,e),e}function m(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function g(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var s=f++;n=c||(c=b(e)),r=O.bind(null,n,s,!1),o=O.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),v(t,e),e}(e),r=_.bind(null,n,e),o=function(){y(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=j.bind(null,n),o=function(){y(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return d(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}t&&d(h(t,e),e);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete i[a.id]}}}};var x,w=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function O(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function j(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function _(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=p(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}},,function(t,e,n){var r=n(19),o=n(20),i=n(13),s=n(21);t.exports=function(t){return r(t)||o(t)||i(t)||s()},t.exports.default=t.exports,t.exports.__esModule=!0},,function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,n){var r=n(23);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,o);r.locals&&(t.exports=r.locals)},,function(t,e,n){var r=n(10);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,n){"use strict";n.r(e);var r=n(7),o=n.n(r),i=n(9),s=n.n(i),a=n(1),u=n.n(a),c=Symbol("bus");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var l={name:"q-chart",props:{data:{type:Array,default:function(){}},dataFields:{type:Object,default:function(){}},theme:{type:Object,default:function(){}}},data:function(){return{visuals:[],plugins:[]}},watch:{data:{deep:!0,handler:function(t){this.chart.source(t,this.dataFields)}}},created:function(){var t=this;this[c].on("addVisuals",(function(e){t.visuals.push(e)})),this[c].on("addPlugins",(function(e){t.plugins.push(e)}))},mounted:function(){var t=new a.Chart({container:this.$el}),e=this.data?o()(this.data):[],n=this.dataFields?function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},this.dataFields):{};t.source(e,n);var r=t.dataset;this.theme&&a.theme.set(this.theme);var i=[],u=[];this.visuals.forEach((function(t){if(t.rows){var e=r.selectRows(t.rows);Object.freeze(e),t.visual.source(e),u.push(r.selectRows(t.rows))}i.push(t.visual)}));var c=[];this.plugins.forEach((function(t){c.push(t)})),t.append([].concat(i,c)),this.chart=t},methods:{}},p=(n(22),n(0)),d=Object(p.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"q-charts"},[this._t("default")],2)}),[],!1,null,null,null).exports,h={renderedVisuals:new Map};function v(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,i=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw i}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var b=function(t){return{render:function(){},props:{attrs:{type:Object,default:function(){}}},data:function(){return{plugin:null}},created:function(){var e=this;if(t){if(this.attrs&&this.attrs.target){var n,r=v(this.global.renderedVisuals.keys());try{for(r.s();!(n=r.n()).done;){var o=n.value;if(o===this.attrs.target){this.attrs.target=this.global.renderedVisuals.get(o);break}}}catch(t){r.e(t)}finally{r.f()}}var i=u.a[t];this.plugin=new i(this.attrs),Object.keys(this.$attrs).forEach((function(t){-1!==t.indexOf("style-")&&e.plugin.style(t.substr(6),e.$attrs[t])})),this.$vnode.componentOptions.listeners&&Object.keys(this.$vnode.componentOptions.listeners).forEach((function(t){e.plugin.on(t,e.$vnode.componentOptions.listeners[t])})),this[c].emit("addPlugins",this.plugin)}}}},m=function(t){return{render:function(){},props:{rows:{type:String|Array,default:null},attrs:{type:Object,default:function(){}},name:{type:String,default:""}},data:function(){return{visual:null}},created:function(){var e=this;if(t){var n=u.a[t];this.visual=new n(this.attrs),Object.keys(this.$attrs).forEach((function(t){var n=e.$attrs[t];0===t.indexOf("theme")&&e.visual.theme.set(n),-1!==t.indexOf("style-")&&e.visual.style(t.substr(6),n)})),this.$vnode.componentOptions.listeners&&Object.keys(this.$vnode.componentOptions.listeners).forEach((function(t){e.visual.on(t,e.$vnode.componentOptions.listeners[t])})),this.name&&this.global.renderedVisuals.set(this.name,this.visual),this[c].emit("addVisuals",{visual:this.visual,rows:this.rows})}}}},g=["h","version","BaseVisual","BasePlugin","Chart","Dataset","Global","Axis","Tooltip","Legend"],x=Object.keys(u.a).filter((function(t){return g.indexOf(t)<0})),w=[{name:"Chart",component:d}].concat(o()(x.map((function(t){return{name:t,component:m(t)}}))),o()(["Axis","Tooltip","Legend"].map((function(t){return{name:t,component:b(t)}})))),O={version:"1.0.3",install:function(t){w.map((function(e){var n=e.name.replace(e.name[0],e.name[0].toLocaleLowerCase());t.component("q-".concat(n),e.component)}));var e=new t({methods:{emit:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];this.$emit.apply(this,[t].concat(n))},on:function(t,e){this.$on(t,e)},off:function(t,e){this.$off(t,e)}}});t.prototype[c]=e,t.prototype.global=h}};e.default=O;"undefined"!=typeof window&&window.Vue&&window.Vue.use(O)},,function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},,,function(t,e,n){var r=n(10);t.exports=function(t){if(Array.isArray(t))return r(t)},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,n){"use strict";n(11)},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"\n.q-charts {\n  position: relative;\n  height: 100%;\n}\n",""])}])}));