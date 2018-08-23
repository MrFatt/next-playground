webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PostOverview.js":
/*!************************************!*\
  !*** ./components/PostOverview.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/yli149/Documents/workspace/next-playground/components/PostOverview.js";




var styles = {
  card: {
    maxWidth: 1000,
    display: "flex",
    marginBottom: 30,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    maxHeight: 140
  },
  media: {
    width: "100%",
    maxWidth: 140
  },
  content: {
    "&:hover": {
      color: "blue",
      opacity: 0.6,
      cursor: "pointer"
    }
  },
  summary: {
    lineClamp: 3,
    boxOrient: "vertical",
    display: "box",
    overflow: "hidden"
  },
  meta: {
    display: 'block',
    marginTop: 5
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(function (props) {
  var classes = props.classes,
      _props$show = props.show,
      medium = _props$show.image.medium,
      summary = _props$show.summary,
      name = _props$show.name,
      id = _props$show.id,
      premiered = _props$show.premiered;
  var backendurl = "";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "".concat(backendurl, "/post/").concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    className: classes.media,
    image: medium || "/static/GitHub-Mark-64px.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "title",
    component: "h2",
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "p",
    className: [classes.content, classes.summary],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, summary.replace(/<[/]?[pb]>/g, "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "p",
    className: classes.meta,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, premiered))));
}));

/***/ })

})
//# sourceMappingURL=index.js.b6eba3ab77c45b9876bd.hot-update.js.map