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
  console.log(props);
  var postHTML = markdownIt().render(props.text);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-1594618571"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: postHTML
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-1594618571"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1594618571",
    css: "h1,h2,h3,h4,h5,h6{font-family:\"Open Sans\",\"Microsoft YaHei\",\"\u5FAE\u8F6F\u96C5\u9ED1\",STXihei, \"\u534E\u6587\u7EC6\u9ED1\",sans-serif;}p,ul,li,a{font-family:\"Roboto\",\"Microsoft YaHei\",\"\u5FAE\u8F6F\u96C5\u9ED1\",STXihei, \"\u534E\u6587\u7EC6\u9ED1\",serif;}blockquote{padding:0 1em;color:#6a737d;border-left:0.25em solid #dfe2e5;margin-left:0;margin-bottom:16px;margin-top:0;}p,li{word-wrap:break-word;font-size:21px;line-height:1.58;-webkit-letter-spacing:-0.003em;-moz-letter-spacing:-0.003em;-ms-letter-spacing:-0.003em;letter-spacing:-0.003em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdENvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVVMsQUFTaUMsQUFPTCxBQUlELEFBU08sY0FSUCxPQVNDLE9BUmtCLFFBU2hCLGlCQUNPLFFBVFYsT0FOaEIsT0FPcUIsQ0FkckIsa0JBZWUsYUFDZiwyREFPQSIsImZpbGUiOiJjb21wb25lbnRzL1Bvc3RDb250ZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95bGkxNDkvRG9jdW1lbnRzL3dvcmtzcGFjZS9uZXh0LXBsYXlncm91bmQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtYXJrZG93bkl0ID0gcmVxdWlyZShcIm1hcmtkb3duLWl0XCIpO1xuXG5jb25zdCBQb3N0Q29udGVudCA9IChwcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZyhwcm9wcylcbiAgY29uc3QgcG9zdEhUTUwgPSBtYXJrZG93bkl0KCkucmVuZGVyKHByb3BzLnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0SFRNTCB9fSAvPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDEsXG4gICAgICAgICAgaDIsXG4gICAgICAgICAgaDMsXG4gICAgICAgICAgaDQsXG4gICAgICAgICAgaDUsXG4gICAgICAgICAgaDYge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIFwiTWljcm9zb2Z0IFlhSGVpXCIsIFwi5b6u6L2v6ZuF6buRXCIsIFNUWGloZWksXG4gICAgICAgICAgICAgIFwi5Y2O5paH57uG6buRXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAsXG4gICAgICAgICAgdWwsXG4gICAgICAgICAgbGksXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCLlvq7ova/pm4Xpu5FcIiwgU1RYaWhlaSxcbiAgICAgICAgICAgICAgXCLljY7mlofnu4bpu5FcIiwgc2VyaWY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYmxvY2txdW90ZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjNmE3MzdkO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDAuMjVlbSBzb2xpZCAjZGZlMmU1O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwLCBsaXtcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwM2VtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q29udGVudDtcbiJdfQ== */\n/*@ sourceURL=components/PostContent.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PostContent);

/***/ })

})
//# sourceMappingURL=post.js.90c492e9bb4c26e1403f.hot-update.js.map