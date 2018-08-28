webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_PostContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostContent */ "./components/PostContent.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/yli149/Documents/workspace/next-playground/pages/post.js";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        {\n          organization(login: \"TWNTF\") {\n            repository(name: \"Translations\") {\n              resourcePath\n              object(\n                # expression: ", "\n                expression: \"master:docs/React Native at Airbnb/blogs/React-Native-at-Airbnb.md\"\n              ) {\n                ... on Blob {\n                  text\n                }\n              }\n            }\n          }\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var getPath = function getPath(title) {
  return title;
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var title = props.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject(), getPath(title)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, function (_ref) {
    var data = _ref.data;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PostContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: data.organization.repository.object,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      }
    }));
  });
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=post.js.bf62a9e0dd838c740a83.hot-update.js.map