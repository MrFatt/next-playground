module.exports=__NEXT_REGISTER_PAGE("/post",function(){return{page:(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{92:function(e,n,t){e.exports=t(93)},93:function(e,n,t){"use strict";t.r(n);var r=t(4),a=t.n(r),o=t(0),u=t.n(o),c=(t(94),t(12));function i(e,n,t,r,a,o,u){try{var c=e[o](u),i=c.value}catch(e){return void t(e)}c.done?n(i):Promise.resolve(i).then(r,a)}var s=function(e){var n=e.show;return u.a.createElement("div",null,u.a.createElement("h1",null,n.name),u.a.createElement("p",null,n.summary.replace(/<[/]?[pb]>/g,"")),u.a.createElement("img",{src:n.image.medium}))},l=function(e){return u.a.createElement(c.a,null,u.a.createElement(s,e))};l.getInitialProps=function(){var e=function(e){return function(){var n=this,t=arguments;return new Promise(function(r,a){var o=e.apply(n,t);function u(e){i(o,r,a,u,c,"next",e)}function c(e){i(o,r,a,u,c,"throw",e)}u(void 0)})}}(a.a.mark(function e(n){var t,r,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query,e.next=3,fetch("https://api.tvmaze.com/shows/".concat(t.id));case 3:return r=e.sent,e.next=6,r.json();case 6:return o=e.sent,console.log("Fetched show: ".concat(o.name)),e.abrupt("return",{show:o});case 9:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}(),n.default=l},94:function(e,n,t){e.exports=t(14)}},[[92,1,0]]]).default}});