webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/PostContent.js":
/*!***********************************!*\
  !*** ./components/PostContent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/yli149/Documents/workspace/next-playground/components/PostContent.js";



var markdownIt = __webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js");

var PostContent = function PostContent(props) {
  var postHTML = markdownIt().render(props.data.text);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-1594618571"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: postHTML
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-1594618571"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1594618571",
    css: "h1,h2,h3,h4,h5,h6{font-family:\"Open Sans\",\"Microsoft YaHei\",\"\u5FAE\u8F6F\u96C5\u9ED1\",STXihei, \"\u534E\u6587\u7EC6\u9ED1\",sans-serif;}p,ul,li,a{font-family:\"Roboto\",\"Microsoft YaHei\",\"\u5FAE\u8F6F\u96C5\u9ED1\",STXihei, \"\u534E\u6587\u7EC6\u9ED1\",serif;}blockquote{padding:0 1em;color:#6a737d;border-left:0.25em solid #dfe2e5;margin-left:0;margin-bottom:16px;margin-top:0;}p,li{word-wrap:break-word;font-size:21px;line-height:1.58;-webkit-letter-spacing:-0.003em;-moz-letter-spacing:-0.003em;-ms-letter-spacing:-0.003em;letter-spacing:-0.003em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdENvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU1MsQUFTaUMsQUFPTCxBQUlELEFBU08sY0FSUCxPQVNDLE9BUmtCLFFBU2hCLGlCQUNPLFFBVFYsT0FOaEIsT0FPcUIsQ0FkckIsa0JBZWUsYUFDZiwyREFPQSIsImZpbGUiOiJjb21wb25lbnRzL1Bvc3RDb250ZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95bGkxNDkvRG9jdW1lbnRzL3dvcmtzcGFjZS9uZXh0LXBsYXlncm91bmQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtYXJrZG93bkl0ID0gcmVxdWlyZShcIm1hcmtkb3duLWl0XCIpO1xuXG5jb25zdCBQb3N0Q29udGVudCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBwb3N0SFRNTCA9IG1hcmtkb3duSXQoKS5yZW5kZXIocHJvcHMuZGF0YS50ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdEhUTUwgfX0gLz5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGgxLFxuICAgICAgICAgIGgyLFxuICAgICAgICAgIGgzLFxuICAgICAgICAgIGg0LFxuICAgICAgICAgIGg1LFxuICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIuW+rui9r+mbhem7kVwiLCBTVFhpaGVpLFxuICAgICAgICAgICAgICBcIuWNjuaWh+e7hum7kVwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwLFxuICAgICAgICAgIHVsLFxuICAgICAgICAgIGxpLFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiTWljcm9zb2Z0IFlhSGVpXCIsIFwi5b6u6L2v6ZuF6buRXCIsIFNUWGloZWksXG4gICAgICAgICAgICAgIFwi5Y2O5paH57uG6buRXCIsIHNlcmlmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJsb2NrcXVvdGUge1xuICAgICAgICAgICAgcGFkZGluZzogMCAxZW07XG4gICAgICAgICAgICBjb2xvcjogIzZhNzM3ZDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwLjI1ZW0gc29saWQgI2RmZTJlNTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcCwgbGl7XG4gICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ODtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMDNlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdENvbnRlbnQ7XG4iXX0= */\n/*@ sourceURL=components/PostContent.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PostContent);

/***/ })

})
//# sourceMappingURL=post.js.840a44a74ffcc1d38bd5.hot-update.js.map