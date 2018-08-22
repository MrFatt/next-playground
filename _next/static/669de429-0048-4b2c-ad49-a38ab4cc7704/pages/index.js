module.exports=__NEXT_REGISTER_PAGE("/",function(){return{page:(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{304:function(t,e,r){t.exports=r(305)},305:function(t,e,r){"use strict";r.r(e);var n=r(12),o=r.n(n),a=r(36),i=r.n(a),u=r(0),c=r.n(u),l=r(81),s=r.n(l),f=r(82),p=r.n(f),y=r(21);function d(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}var h=function(t){var e=t.show;return c.a.createElement("div",null,c.a.createElement("li",null,c.a.createElement(s.a,{href:"".concat("/next-playground","/post/").concat(e.id)},c.a.createElement("a",null,e.name))))},b=function(t){var e=t.shows;return c.a.createElement(y.a,null,c.a.createElement("h1",{className:"jsx-4028648676"},"Batman TV Shows"),c.a.createElement("ul",{className:"jsx-4028648676"},e.map(function(t){var e=t.show;return c.a.createElement(h,{key:e.id,show:e})})),c.a.createElement(i.a,{styleId:"4028648676",css:['h1,a{font-family:"Arial";}',"ul{padding:0;}","li{list-style:none;margin:5px 0;}","a{-webkit-text-decoration:none;text-decoration:none;color:blue;}","a:hover{opacity:0.6;}"]}))};b.getInitialProps=function(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function i(t){d(a,n,o,i,u,"next",t)}function u(t){d(a,n,o,i,u,"throw",t)}i(void 0)})}}(o.a.mark(function t(){var e,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p()("https://api.tvmaze.com/search/shows?q=batman");case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,console.log("show data fetched. Count: ".concat(r.length)),t.abrupt("return",{shows:r});case 8:case"end":return t.stop()}},t,this)})),e.default=b},306:function(t,e,r){"use strict";var n=r(13),o=r(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(r(16)),i=o(r(3)),u=o(r(4)),c=o(r(7)),l=o(r(8)),s=o(r(9)),f=o(r(29)),p=o(r(6)),y=r(54),d=n(r(0)),h=o(r(2)),b=o(r(307)),v=n(r(23)),g=r(17);var m=(0,g.execOnce)(g.warn);var w=function(t){function e(){var t,r;(0,i.default)(this,e);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return r=(0,c.default)(this,(t=(0,l.default)(e)).call.apply(t,[this].concat(o))),(0,p.default)((0,f.default)((0,f.default)(r)),"formatUrls",function(t){var e=null,r=null,n=null;return function(o,a){if(o===e&&a===r)return n;var i=t(o,a);return e=o,r=a,n=i,i}}(function(t,e){return{href:t&&"object"===(0,a.default)(t)?(0,y.format)(t):t,as:e&&"object"===(0,a.default)(e)?(0,y.format)(e):e}})),(0,p.default)((0,f.default)((0,f.default)(r)),"linkClicked",function(t){var e=t.currentTarget,n=e.nodeName,o=e.target;if("A"!==n||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=r.formatUrls(r.props.href,r.props.as),i=a.href,u=a.as;if(function(t){var e=(0,y.parse)(t,!1,!0),r=(0,y.parse)((0,g.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===r.protocol&&e.host===r.host}(i)){var c=window.location.pathname;i=(0,y.resolve)(c,i),u=u?(0,y.resolve)(c,u):i,t.preventDefault();var l=r.props.scroll;null==l&&(l=u.indexOf("#")<0);var s=r.props.replace?"replace":"push";v.default[s](i,u,{shallow:r.props.shallow}).then(function(t){t&&l&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){r.props.onError&&r.props.onError(t)})}}}),r}return(0,s.default)(e,t),(0,u.default)(e,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(t){JSON.stringify(this.props.href)!==JSON.stringify(t.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href,r=(0,y.resolve)(t,e);v.default.prefetch(r)}}},{key:"render",value:function(){var t=this,e=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"==typeof e&&(e=d.default.createElement("a",null,e));var a=d.Children.only(e),i={onClick:function(e){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||n),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=(0,v._rewriteUrlForNextExport)(i.href)),d.default.cloneElement(a,i)}}]),e}(d.Component);(0,p.default)(w,"propTypes",(0,b.default)({href:h.default.oneOfType([h.default.string,h.default.object]).isRequired,as:h.default.oneOfType([h.default.string,h.default.object]),prefetch:h.default.bool,replace:h.default.bool,shallow:h.default.bool,passHref:h.default.bool,scroll:h.default.bool,children:h.default.oneOfType([h.default.element,function(t,e){return"string"==typeof t[e]&&m("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>"),null}]).isRequired}));var j=w;e.default=j},307:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(!(0,a.default)(t))throw new TypeError("given propTypes must be an object");if((0,o.default)(t,c)&&!function(t){return t&&t[c]===l}(t[c]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,n.default)({},t,u({},c,function(t){return(0,n.default)(t,u({},c,l))}(function(){return function(e,r,n){var a=Object.keys(e).filter(function(e){return!(0,o.default)(t,e)});if(a.length>0)return new TypeError(String(n)+": unknown props found: "+String(a.join(", ")));return null}}())))};var n=i(r(308)),o=i(r(313)),a=i(r(314));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c="prop-types-exact: ​",l={};t.exports=e.default},308:function(t,e,r){"use strict";var n=r(74),o=r(76),a=r(78),i=r(312),u=a();n(u,{getPolyfill:a,implementation:o,shim:i}),t.exports=u},309:function(t,e,r){"use strict";var n=Object.prototype.toString;t.exports=function(t){var e=n.call(t),r="[object Arguments]"===e;return r||(r="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee)),r}},310:function(t,e,r){"use strict";var n=Array.prototype.slice,o=Object.prototype.toString;t.exports=function(t){var e=this;if("function"!=typeof e||"[object Function]"!==o.call(e))throw new TypeError("Function.prototype.bind called on incompatible "+e);for(var r,a=n.call(arguments,1),i=Math.max(0,e.length-a.length),u=[],c=0;c<i;c++)u.push("$"+c);if(r=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this,arguments); }")(function(){if(this instanceof r){var o=e.apply(this,a.concat(n.call(arguments)));return Object(o)===o?o:this}return e.apply(t,a.concat(n.call(arguments)))}),e.prototype){var l=function(){};l.prototype=e.prototype,r.prototype=new l,l.prototype=null}return r}},311:function(t,e,r){"use strict";t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var n=Object.getOwnPropertySymbols(t);if(1!==n.length||n[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(t,e);if(42!==o.value||!0!==o.enumerable)return!1}return!0}},312:function(t,e,r){"use strict";var n=r(74),o=r(78);t.exports=function(){var t=o();return n(Object,{assign:t},{assign:function(){return Object.assign!==t}}),t}},313:function(t,e,r){"use strict";var n=r(77);t.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},314:function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=function(t){return t&&"object"===(void 0===t?"undefined":r(t))&&!Array.isArray(t)},t.exports=e.default},74:function(t,e,r){"use strict";var n=r(75),o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),a=Object.prototype.toString,i=Array.prototype.concat,u=Object.defineProperty,c=u&&function(){var t={};try{for(var e in u(t,"x",{enumerable:!1,value:t}),t)return!1;return t.x===t}catch(t){return!1}}(),l=function(t,e,r,n){(!(e in t)||function(t){return"function"==typeof t&&"[object Function]"===a.call(t)}(n)&&n())&&(c?u(t,e,{configurable:!0,enumerable:!1,value:r,writable:!0}):t[e]=r)},s=function(t,e){var r=arguments.length>2?arguments[2]:{},a=n(e);o&&(a=i.call(a,Object.getOwnPropertySymbols(e)));for(var u=0;u<a.length;u+=1)l(t,a[u],e[a[u]],r[a[u]])};s.supportsDescriptors=!!c,t.exports=s},75:function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Object.prototype.toString,a=Array.prototype.slice,i=r(309),u=Object.prototype.propertyIsEnumerable,c=!u.call({toString:null},"toString"),l=u.call(function(){},"prototype"),s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],f=function(t){var e=t.constructor;return e&&e.prototype===t},p={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},y=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!p["$"+t]&&n.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{f(window[t])}catch(t){return!0}}catch(t){return!0}return!1}(),d=function(t){var e=null!==t&&"object"==typeof t,r="[object Function]"===o.call(t),a=i(t),u=e&&"[object String]"===o.call(t),p=[];if(!e&&!r&&!a)throw new TypeError("Object.keys called on a non-object");var d=l&&r;if(u&&t.length>0&&!n.call(t,0))for(var h=0;h<t.length;++h)p.push(String(h));if(a&&t.length>0)for(var b=0;b<t.length;++b)p.push(String(b));else for(var v in t)d&&"prototype"===v||!n.call(t,v)||p.push(String(v));if(c)for(var g=function(t){if("undefined"==typeof window||!y)return f(t);try{return f(t)}catch(t){return!1}}(t),m=0;m<s.length;++m)g&&"constructor"===s[m]||!n.call(t,s[m])||p.push(s[m]);return p};d.shim=function(){if(Object.keys){if(!function(){return 2===(Object.keys(arguments)||"").length}(1,2)){var t=Object.keys;Object.keys=function(e){return i(e)?t(a.call(e)):t(e)}}}else Object.keys=d;return Object.keys||d},t.exports=d},76:function(t,e,r){"use strict";var n=r(75),o=r(77),a=r(311)(),i=Object,u=o.call(Function.call,Array.prototype.push),c=o.call(Function.call,Object.prototype.propertyIsEnumerable),l=a?Object.getOwnPropertySymbols:null;t.exports=function(t,e){if(!function(t){return void 0!==t&&null!==t}(t))throw new TypeError("target must be an object");var r,o,s,f,p,y,d,h=i(t);for(r=1;r<arguments.length;++r){o=i(arguments[r]),f=n(o);var b=a&&(Object.getOwnPropertySymbols||l);if(b)for(p=b(o),s=0;s<p.length;++s)d=p[s],c(o,d)&&u(f,d);for(s=0;s<f.length;++s)y=o[d=f[s]],c(o,d)&&(h[d]=y)}return h}},77:function(t,e,r){"use strict";var n=r(310);t.exports=Function.prototype.bind||n},78:function(t,e,r){"use strict";var n=r(76);t.exports=function(){return Object.assign?function(){if(!Object.assign)return!1;for(var t="abcdefghijklmnopqrst",e=t.split(""),r={},n=0;n<e.length;++n)r[e[n]]=e[n];var o=Object.assign({},r),a="";for(var i in o)a+=i;return t!==a}()?n:function(){if(!Object.assign||!Object.preventExtensions)return!1;var t=Object.preventExtensions({1:2});try{Object.assign(t,"xy")}catch(e){return"y"===t[1]}return!1}()?n:Object.assign:n}},79:function(t,e,r){"use strict";r.r(e);var n="function"==typeof fetch?fetch.bind():function(t,e){return e=e||{},new Promise(function(r,n){var o=new XMLHttpRequest;for(var a in o.open(e.method||"get",t,!0),e.headers)o.setRequestHeader(a,e.headers[a]);function i(){var t,e=[],r=[],n={};return o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(o,a,i){e.push(a=a.toLowerCase()),r.push([a,i]),t=n[a],n[a]=t?t+","+i:i}),{ok:2==(o.status/100|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:i,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return e},entries:function(){return r},get:function(t){return n[t.toLowerCase()]},has:function(t){return t.toLowerCase()in n}}}}o.withCredentials="include"==e.credentials,o.onload=function(){r(i())},o.onerror=n,o.send(e.body)})};e.default=n},81:function(t,e,r){t.exports=r(306)},82:function(t,e,r){t.exports=window.fetch||(window.fetch=r(79).default||r(79))}},[[304,1,0]]]).default}});