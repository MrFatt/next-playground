webpackHotUpdate("static/development/pages/post.js",{

/***/ "./helpers/utils.js":
/*!**************************!*\
  !*** ./helpers/utils.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var updateImageRef = function updateImageRef(text, name) {
  var imageRegex = new RegExp(/\!\[(.*)\]\(images\/(.*)\)/g);
  var regExpExecArray = imageRegex.exec(text);

  while (regExpExecArray) {
    text = text.replace(regExpExecArray[0], "![".concat(regExpExecArray[1], "](https://github.com/TWNTF/Translations/raw/master/docs/").concat(encodeURI(name), "/images/").concat(regExpExecArray[2], "/)"));
    regExpExecArray = imageRegex.exec(text);
  }

  return text;
};

var updatePostRef = function updatePostRef(text) {
  var postRegex = new RegExp(/\[(.*)\]\(\.\.\/(.*)\/README\.md\)/);
  var regExpExecArray = postRegex.exec(text);

  while (regExpExecArray) {
    text = text.replace(regExpExecArray[0], "[".concat(regExpExecArray[1], "](").concat(regExpExecArray[2], ")"));
    regExpExecArray = postRegex.exec(text);
  }

  return text;
};

/* harmony default export */ __webpack_exports__["default"] = (function (text, name) {
  var updatedText = updateImageRef(text, name);
  return updatePostRef(updatedText);
});

/***/ })

})
//# sourceMappingURL=post.js.33816b4daa9137dce894.hot-update.js.map