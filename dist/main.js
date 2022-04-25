/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  box-sizing: border-box;\n  text-decoration: none;\n  font-family: inherit;\n  border: none;\n  outline: none;\n}\n\nbody {\n  font-family: \"Roboto Mono\", \"Courier New\", Courier, monospace;\n  background-color: #1d3557;\n  color: #f1faee;\n  padding: 30px;\n}\n\n#todo-form {\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: auto;\n  z-index: 101;\n  background-color: #1d3557;\n  color: #f1faee;\n  height: 100%;\n  width: 360px;\n  padding: 30px;\n  transition: transform 0.5s ease;\n  transform: translateX(-360px);\n}\n#todo-form .form-control {\n  margin-top: 20px;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n}\n#todo-form .form-control input[type=text],\n#todo-form .form-control textarea,\n#todo-form .form-control select,\n#todo-form .form-control button {\n  font-size: 16px;\n  padding: 8px;\n  border-radius: 5px;\n  background-color: #f1faee;\n  color: #1d3557;\n}\n#todo-form .form-control input[type=text]:focus, #todo-form .form-control input[type=text]:hover,\n#todo-form .form-control textarea:focus,\n#todo-form .form-control textarea:hover,\n#todo-form .form-control select:focus,\n#todo-form .form-control select:hover,\n#todo-form .form-control button:focus,\n#todo-form .form-control button:hover {\n  background-color: #a8dadc;\n}\n#todo-form .form-control textarea {\n  max-width: 100%;\n}\n#todo-form .form-control input[type=radio] {\n  accent-color: #f1faee;\n  width: 20px;\n  height: 20px;\n}\n#todo-form .form-control .selection {\n  display: flex;\n  gap: 20px;\n}\n#todo-form .form-control .selection label,\n#todo-form .form-control .selection input[type=radio] {\n  cursor: pointer;\n}\n#todo-form .form-control .selection .radio-control {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n#todo-form .form-control button {\n  background-color: #e63946;\n  color: #f1faee;\n  padding: 10px;\n  cursor: pointer;\n  border: none;\n}\n#todo-form .form-control button:hover, #todo-form .form-control button:focus {\n  color: #1d3557;\n  background-color: #a8dadc;\n}\n\nbutton#show-form {\n  width: 100px;\n  height: 100px;\n  border-radius: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f1faee;\n  color: #1d3557;\n  font-size: 50px;\n  cursor: pointer;\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n}\nbutton#show-form:hover {\n  background-color: #457b9d;\n}\n\n.projects {\n  column-width: 300px;\n  column-gap: 20px;\n}\n.projects .project {\n  page-break-inside: avoid;\n  background-color: #f1faee;\n  color: #1d3557;\n  border-radius: 5px;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.projects .project h3 {\n  text-transform: uppercase;\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n.projects .project .todo {\n  background-color: #a8dadc;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.projects .project .todo.high {\n  color: #f1faee;\n  background-color: #457b9d;\n}\n.projects .project .todo.completed {\n  background-color: #e63946;\n  color: #f1faee;\n}\n.projects .project .todo:hover {\n  cursor: pointer;\n  transform: scale(1.03);\n}\n.projects .project .todo:last-child {\n  margin-bottom: 0;\n}\n.projects .project .todo div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}\n.projects .project .todo div p {\n  text-transform: uppercase;\n  font-size: 14px;\n}\n.projects .project .todo .actions {\n  margin-top: 5px;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 5px;\n}\n.projects .project .todo .actions button {\n  width: 25px;\n  height: 25px;\n  border-radius: 20px;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-transform: uppercase;\n  background-color: #f1faee;\n  cursor: pointer;\n}\n.projects .project .todo .actions button:hover {\n  background-color: #1d3557;\n  color: #f1faee;\n}\n\n.todo-xl {\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: auto;\n  z-index: 101;\n  width: 100%;\n  height: 100%;\n  padding: 30px;\n  background-color: rgba(0, 0, 0, 0.9);\n  color: #f1faee;\n}\n.todo-xl h1 {\n  text-transform: uppercase;\n}\n.todo-xl p {\n  margin: 20px 0;\n}\n.todo-xl h3 {\n  text-transform: capitalize !important;\n  font-size: 20px !important;\n}\n.todo-xl button.edit {\n  display: inline-block;\n  margin-top: 20px;\n  background-color: #f1faee;\n  color: #1d3557;\n  font-weight: bold;\n  font-size: 16px;\n  padding: 10px 30px;\n  border-radius: 5px;\n}\n.todo-xl button.edit:hover {\n  cursor: pointer;\n  background-color: #457b9d;\n  color: #f1faee;\n}\n.todo-xl button.close {\n  position: absolute;\n  top: 30px;\n  right: 30px;\n  height: 50px;\n  width: 50px;\n  font-size: 20px;\n  color: #f1faee;\n  background-color: #e63946;\n  font-weight: bold;\n  border-radius: 50px;\n}\n.todo-xl button.close:hover {\n  cursor: pointer;\n  color: #1d3557;\n  background-color: #f1faee;\n}", "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/colors.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono');\r\n@import 'colors';\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n  font-family: inherit;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\nbody {\r\n  font-family: 'Roboto Mono', 'Courier New', Courier, monospace;\r\n  background-color: $base-color;\r\n  color: $text-color;\r\n  padding: 30px;\r\n}\r\n\r\n#todo-form {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  overflow: auto;\r\n  z-index: 101;\r\n\r\n  background-color: $base-color;\r\n  color: $text-color;\r\n  height: 100%;\r\n  width: 360px;\r\n  padding: 30px;\r\n\r\n  transition: transform 0.5s ease;\r\n  transform: translateX(-360px);\r\n\r\n  .form-control {\r\n    margin-top: 20px;\r\n    display: flex;\r\n    gap: 10px;\r\n    flex-direction: column;\r\n\r\n    input[type='text'],\r\n    textarea,\r\n    select,\r\n    button {\r\n      font-size: 16px;\r\n      padding: 8px;\r\n      border-radius: 5px;\r\n      background-color: $text-color;\r\n      color: $base-color;\r\n\r\n      &:focus,\r\n      &:hover {\r\n        background-color: $primary-color;\r\n      }\r\n    }\r\n\r\n    textarea {\r\n      max-width: 100%;\r\n    }\r\n\r\n    input[type='radio'] {\r\n      accent-color: $text-color;\r\n      width: 20px;\r\n      height: 20px;\r\n    }\r\n\r\n    .selection {\r\n      display: flex;\r\n      gap: 20px;\r\n\r\n      label,\r\n      input[type='radio'] {\r\n        cursor: pointer;\r\n      }\r\n\r\n      .radio-control {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 5px;\r\n      }\r\n    }\r\n\r\n    button {\r\n      background-color: $tertiary-color;\r\n      color: $text-color;\r\n      padding: 10px;\r\n      cursor: pointer;\r\n      border: none;\r\n\r\n      &:hover,\r\n      &:focus {\r\n        color: $base-color;\r\n        background-color: $primary-color;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nbutton#show-form {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 100px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: $text-color;\r\n  color: $base-color;\r\n  font-size: 50px;\r\n  cursor: pointer;\r\n\r\n  position: fixed;\r\n  bottom: 30px;\r\n  right: 30px;\r\n\r\n  &:hover {\r\n    background-color: $secondary-color;\r\n  }\r\n}\r\n\r\n.projects {\r\n  column-width: 300px;\r\n  column-gap: 20px;\r\n\r\n  .project {\r\n    page-break-inside: avoid;\r\n    background-color: $text-color;\r\n    color: $base-color;\r\n    border-radius: 5px;\r\n    padding: 20px;\r\n    margin-bottom: 20px;\r\n\r\n    h3 {\r\n      text-transform: uppercase;\r\n      font-size: 24px;\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n    .todo {\r\n      background-color: $primary-color;\r\n      border-radius: 5px;\r\n      padding: 10px;\r\n      margin-bottom: 10px;\r\n\r\n      &.high {\r\n        color: $text-color;\r\n        background-color: $secondary-color;\r\n      }\r\n\r\n      &.completed {\r\n        background-color: $tertiary-color;\r\n        color: $text-color;\r\n      }\r\n\r\n      &:hover {\r\n        cursor: pointer;\r\n        transform: scale(1.03);\r\n      }\r\n\r\n      &:last-child {\r\n        margin-bottom: 0;\r\n      }\r\n\r\n      div {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        gap: 10px;\r\n\r\n        p {\r\n          text-transform: uppercase;\r\n          font-size: 14px;\r\n        }\r\n      }\r\n\r\n      .actions {\r\n        margin-top: 5px;\r\n        display: flex;\r\n        justify-content: end;\r\n        align-items: center;\r\n        gap: 5px;\r\n\r\n        button {\r\n          width: 25px;\r\n          height: 25px;\r\n          border-radius: 20px;\r\n          font-weight: bold;\r\n          display: flex;\r\n          justify-content: center;\r\n          align-items: center;\r\n          text-transform: uppercase;\r\n          background-color: $text-color;\r\n          cursor: pointer;\r\n\r\n          &:hover {\r\n            background-color: $base-color;\r\n            color: $text-color;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.todo-xl {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  overflow: auto;\r\n  z-index: 101;\r\n\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 30px;\r\n\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n  color: $text-color;\r\n\r\n  h1 {\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  p {\r\n    margin: 20px 0;\r\n  }\r\n\r\n  h3 {\r\n    text-transform: capitalize !important;\r\n    font-size: 20px !important;\r\n  }\r\n\r\n  button.edit {\r\n    display: inline-block;\r\n    margin-top: 20px;\r\n    background-color: $text-color;\r\n    color: $base-color;\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n    padding: 10px 30px;\r\n    border-radius: 5px;\r\n\r\n    &:hover {\r\n      cursor: pointer;\r\n      background-color: $secondary-color;\r\n      color: $text-color;\r\n    }\r\n  }\r\n\r\n  button.close {\r\n    position: absolute;\r\n    top: 30px;\r\n    right: 30px;\r\n    height: 50px;\r\n    width: 50px;\r\n    font-size: 20px;\r\n    color: $text-color;\r\n    background-color: $tertiary-color;\r\n    font-weight: bold;\r\n    border-radius: 50px;\r\n\r\n    &:hover {\r\n      cursor: pointer;\r\n      color: $base-color;\r\n      background-color: $text-color;\r\n    }\r\n  }\r\n}\r\n","$base-color: #1d3557;\r\n$text-color: #f1faee;\r\n$primary-color: #a8dadc;\r\n$secondary-color: #457b9d;\r\n$tertiary-color: #e63946;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/layout/intro.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/layout/intro.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".intro p {\n  margin-top: 20px;\n}\n.intro .indicator {\n  margin-top: 20px;\n  display: flex;\n  gap: 20px;\n}\n.intro .indicator .color {\n  width: 30px;\n  height: 30px;\n  border-radius: 30px;\n}\n.intro .indicator #color-0 {\n  background-color: #a8dadc;\n}\n.intro .indicator #color-1 {\n  background-color: #457b9d;\n}\n.intro .indicator #color-2 {\n  background-color: #e63946;\n}", "",{"version":3,"sources":["webpack://./src/layout/intro.scss","webpack://./src/colors.scss"],"names":[],"mappings":"AAGE;EACE,gBAAA;AAFJ;AAKE;EACE,gBAAA;EACA,aAAA;EACA,SAAA;AAHJ;AAKI;EACE,WAAA;EACA,YAAA;EACA,mBAAA;AAHN;AAMI;EACE,yBCjBU;ADahB;AAOI;EACE,yBCpBY;ADelB;AAQI;EACE,yBCvBW;ADiBjB","sourcesContent":["@import '../colors.scss';\r\n\r\n.intro {\r\n  p {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .indicator {\r\n    margin-top: 20px;\r\n    display: flex;\r\n    gap: 20px;\r\n\r\n    .color {\r\n      width: 30px;\r\n      height: 30px;\r\n      border-radius: 30px;\r\n    }\r\n\r\n    #color-0 {\r\n      background-color: $primary-color;\r\n    }\r\n\r\n    #color-1 {\r\n      background-color: $secondary-color;\r\n    }\r\n\r\n    #color-2 {\r\n      background-color: $tertiary-color;\r\n    }\r\n  }\r\n}\r\n","$base-color: #1d3557;\r\n$text-color: #f1faee;\r\n$primary-color: #a8dadc;\r\n$secondary-color: #457b9d;\r\n$tertiary-color: #e63946;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/layout/overlay.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/layout/overlay.scss ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".overlay {\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 100;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/layout/overlay.scss"],"names":[],"mappings":"AAAA;EACE,oCAAA;EACA,YAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;AACF","sourcesContent":[".overlay {\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  z-index: 100;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/layout/intro.scss":
/*!*******************************!*\
  !*** ./src/layout/intro.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_intro_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./intro.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/layout/intro.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_intro_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_intro_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_intro_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_intro_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/layout/overlay.scss":
/*!*********************************!*\
  !*** ./src/layout/overlay.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_overlay_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./overlay.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/layout/overlay.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_overlay_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_overlay_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_overlay_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_overlay_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/create/Todo.js":
/*!****************************!*\
  !*** ./src/create/Todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Todo {
  constructor(title, description, dueDate, priority, project) {
    this.id = new Date().toISOString();
    this.completed = false;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = this.project || 'due tasks';
  }

  isComplete() {
    this.completed = !this.completed;
  }

  changePriority(value) {
    this.priority = value;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./src/create/createTodo.js":
/*!**********************************!*\
  !*** ./src/create/createTodo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./src/create/Todo.js");


const createTodo = (todos, todoObj) => {
  let todo = null;
  todo = new _Todo__WEBPACK_IMPORTED_MODULE_0__["default"](
    todoObj.title,
    todoObj.description,
    todoObj.dueDate,
    todoObj.priority
  );
  if (!!todoObj.project) todo.project = todoObj.project.toLowerCase();
  if (todos[todo.project]) todos[todo.project].push(todo);
  else {
    todos[todo.project] = [];
    todos[todo.project].push(todo);
  }

  return todo;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodo);


/***/ }),

/***/ "./src/create/todoObj.js":
/*!*******************************!*\
  !*** ./src/create/todoObj.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_parseDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/parseDate */ "./src/utils/parseDate.js");


const todoObj = () => {
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const date = document.querySelector('#date').value;
  const month = document.querySelector('#month').value;
  const dueDate = (0,_utils_parseDate__WEBPACK_IMPORTED_MODULE_0__["default"])(date, month);
  const priority = document.querySelector(
    'input[name="priority"]:checked'
  ).value;
  const project = document.querySelector('#project').value;

  return { title, description, dueDate, priority, project };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoObj);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todos": () => (/* binding */ todos)
/* harmony export */ });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _layout_intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/intro */ "./src/layout/intro.js");
/* harmony import */ var _layout_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/form */ "./src/layout/form.js");
/* harmony import */ var _layout_showFormBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/showFormBtn */ "./src/layout/showFormBtn.js");
/* harmony import */ var _layout_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/overlay */ "./src/layout/overlay.js");
/* harmony import */ var _create_createTodo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/createTodo */ "./src/create/createTodo.js");
/* harmony import */ var _create_todoObj__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create/todoObj */ "./src/create/todoObj.js");
/* harmony import */ var _read_readTodos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./read/readTodos */ "./src/read/readTodos.js");
/* harmony import */ var _update_editTodo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update/editTodo */ "./src/update/editTodo.js");











// app state
let todos = {};

if (localStorage.getItem('projects')) {
  todos = JSON.parse(localStorage.getItem('projects'));
}

const main = () => {
  const root = document.getElementById('root');

  // intro
  root.appendChild((0,_layout_intro__WEBPACK_IMPORTED_MODULE_1__["default"])());

  if (localStorage.getItem('projects')) {
    document.querySelector('.intro').style.display = 'none';
    root.appendChild((0,_read_readTodos__WEBPACK_IMPORTED_MODULE_7__["default"])(JSON.parse(localStorage.getItem('projects'))));
  }

  const content = document.createElement('div');
  content.classList.add('main');
  root.appendChild(content);

  // form
  content.appendChild(_layout_form__WEBPACK_IMPORTED_MODULE_2__["default"]);
  root.appendChild((0,_layout_showFormBtn__WEBPACK_IMPORTED_MODULE_3__["default"])());
  root.appendChild((0,_layout_overlay__WEBPACK_IMPORTED_MODULE_4__["default"])());

  const form = _layout_form__WEBPACK_IMPORTED_MODULE_2__["default"].querySelector('form');
  form.addEventListener('submit', (e) => {
    let oldTodos = JSON.stringify(todos);
    e.preventDefault();
    if (form.dataset.edit === 'false') {
      (0,_create_createTodo__WEBPACK_IMPORTED_MODULE_5__["default"])(todos, (0,_create_todoObj__WEBPACK_IMPORTED_MODULE_6__["default"])());
    } else if (form.dataset.edit === 'true') {
      (0,_update_editTodo__WEBPACK_IMPORTED_MODULE_8__["default"])(form.dataset.id, (0,_create_todoObj__WEBPACK_IMPORTED_MODULE_6__["default"])());
      form.removeAttribute('data-id');
      form.dataset.edit = 'false';
    }
    form.reset();

    if (todos) document.querySelector('.intro').style.display = 'none';

    _layout_form__WEBPACK_IMPORTED_MODULE_2__["default"].style.transform = 'translateX(-360px)';
    document.querySelector('.overlay').style.display = 'none';

    const allProjects = document.querySelector('.projects');
    if (allProjects) allProjects.remove();

    if (oldTodos !== JSON.stringify(todos)) {
      localStorage.setItem('projects', JSON.stringify(todos));
      root.appendChild((0,_read_readTodos__WEBPACK_IMPORTED_MODULE_7__["default"])(JSON.parse(localStorage.getItem('projects'))));
    }
  });

  // show/hide form on-demand
  document.querySelector('#show-form').addEventListener('click', () => {
    const overlay = document.querySelector('.overlay');
    _layout_form__WEBPACK_IMPORTED_MODULE_2__["default"].style.transform = 'translateX(0)';
    overlay.style.display = 'block';
  });

  document.querySelector('.overlay').addEventListener('click', (e) => {
    form.reset();
    _layout_form__WEBPACK_IMPORTED_MODULE_2__["default"].style.transform = 'translateX(-360px)';
    form.dataset.edit = 'false';
    form.querySelector('button').textContent = 'Create';
    form.querySelector('#project-field').style.display = 'flex';
    form.querySelector('.selection').parentElement.style.display = 'flex';

    e.target.style.display = 'none';
  });
};

main();


/***/ }),

/***/ "./src/layout/form.js":
/*!****************************!*\
  !*** ./src/layout/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const formHTML = () => {
  const day = new Date().getDate();
  const month = new Date().getMonth();

  let html = `<form data-edit="false">
        <div class="form-control">
            <label for="title">Task</label>
            <input type="text" name="title" id="title" required />
        </div>
        <div class="form-control">
        <label for="description">Description</label>
        <textarea name="description" id="description" rows="5" required></textarea>
        </div>
        <div class="form-control" id="project-field">
            <label for="project">Project</label>
            <input type="text" name="project" id="project" placeholder="Optional" />
        </div>
        <div class="form-control">
            <p>Due Date</p>
            <div class="date">
            <label for="date">Date</label>
            <select name="date" id="date">`;

  for (let i = 1; i <= 31; i++) {
    if (i === day) html += `<option value="${i}" selected>${i}</option>`;
    else html += `<option value="${i}">${i}</option>`;
  }

  html += `</select>
            <label for="month">Month</label>
            <select name="month" id="month">`;

  [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ].forEach((m, index) => {
    if (index === month) {
      html += `<option value="${m}" selected>${m.toUpperCase()}</option>`;
    } else html += `<option value="${m}">${m.toUpperCase()}</option>`;
  });

  html += `</select>
            </div>
        </div>
        <div class="form-control">
            <p>Priority</p>
            <div class="selection">
                <div class="radio-control">
                    <label for="high">High</label>
                    <input type="radio" name="priority" id="high" value="high" />
                </div>
                <div class="radio-control">
                    <label for="low">Low</label>
                    <input type="radio" name="priority" id="low" value="low" checked />
                </div>
                </div>
            </div>
        </div>
        <div class="form-control">
            <button type="submit" id="to-do-btn">Create</button>
        </div>
    </form>`;

  return html;
};
const formContainer = document.createElement('div');
formContainer.setAttribute('id', 'todo-form');
const heading = document.createElement('h2');
heading.textContent = 'Create a new task';
formContainer.appendChild(heading);
formContainer.insertAdjacentHTML('beforeend', formHTML());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formContainer);


/***/ }),

/***/ "./src/layout/intro.js":
/*!*****************************!*\
  !*** ./src/layout/intro.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _intro_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro.scss */ "./src/layout/intro.scss");


const intro = () => {
  const rootDiv = document.createElement('div');
  rootDiv.classList.add('intro');

  const heading = document.createElement('h1');
  heading.textContent = 'To-Do on Steroids';
  rootDiv.appendChild(heading);

  const caption = document.createElement('p');
  caption.textContent =
    'An advanced version of staple front-end development project.';
  rootDiv.appendChild(caption);

  [
    'Low priority (default)',
    'High priority',
    'Complete (ready to delete)',
  ].forEach((value, index) => {
    const holderDiv = document.createElement('div');
    holderDiv.classList.add('indicator');

    const colorIndicator = document.createElement('div');
    colorIndicator.classList.add('color');
    colorIndicator.setAttribute('id', `color-${index}`);
    holderDiv.appendChild(colorIndicator);

    const colorCaption = document.createElement('h3');
    colorCaption.textContent = value;
    holderDiv.appendChild(colorCaption);

    rootDiv.appendChild(holderDiv);
  });

  const actions = document.createElement('div');
  actions.setAttribute('class', 'actions');
  rootDiv.appendChild(actions);

  const priority = document.createElement('p');
  priority.textContent = 'P - Toggle priority from low to high or vice-versa.';
  actions.appendChild(priority);

  const status = document.createElement('p');
  status.textContent = 'C - Set status to complete or revert back to wokring.';
  actions.appendChild(status);

  const del = document.createElement('p');
  del.textContent = 'D - Delete a specific/completed task.';
  actions.appendChild(del);

  return rootDiv;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intro);


/***/ }),

/***/ "./src/layout/overlay.js":
/*!*******************************!*\
  !*** ./src/layout/overlay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overlay_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlay.scss */ "./src/layout/overlay.scss");


const overlay = () => {
  const rootDiv = document.createElement('div');
  rootDiv.classList.add('overlay');

  return rootDiv;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (overlay);


/***/ }),

/***/ "./src/layout/showFormBtn.js":
/*!***********************************!*\
  !*** ./src/layout/showFormBtn.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showFormBtn = () => {
  const newTodoBtn = document.createElement('button');
  newTodoBtn.setAttribute('id', 'show-form');
  newTodoBtn.textContent = '+';
  return newTodoBtn;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showFormBtn);


/***/ }),

/***/ "./src/read/readTodo.js":
/*!******************************!*\
  !*** ./src/read/readTodo.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");


const readTodo = (taskId) => {
  for (let project in _index__WEBPACK_IMPORTED_MODULE_0__.todos) {
    for (let todo of _index__WEBPACK_IMPORTED_MODULE_0__.todos[project]) {
      if (todo.id === taskId) return todo;
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (readTodo);


/***/ }),

/***/ "./src/read/readTodoHTML.js":
/*!**********************************!*\
  !*** ./src/read/readTodoHTML.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const readTodoHTML = (task) => {
  const rootDiv = document.createElement('div');
  rootDiv.classList.add('todo-xl');

  const title = document.createElement('h1');
  title.textContent = `${task.title} (${task.project})`;
  rootDiv.appendChild(title);

  const description = document.createElement('p');
  description.textContent = task.description;
  rootDiv.appendChild(description);

  const dueDate = document.createElement('h3');
  dueDate.textContent = `Due date: ${task.dueDate}`;
  rootDiv.appendChild(dueDate);

  const priority = document.createElement('h3');
  priority.textContent = `Priority: ${task.priority}`;
  rootDiv.appendChild(priority);

  const completed = document.createElement('h3');
  completed.textContent = `Status: ${
    task.completed ? 'Complete' : 'Uncomplete'
  }`;
  rootDiv.appendChild(completed);

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit');
  editBtn.textContent = 'Edit';
  editBtn.setAttribute('data-id', task.id);
  rootDiv.appendChild(editBtn);
  editBtn.addEventListener('click', (e) => {
    const overlay = document.querySelector('.overlay');
    const formContainer = document.querySelector('#todo-form');
    formContainer.style.transform = 'translateX(0)';
    formContainer.style.zIndex = 104;
    overlay.style.display = 'block';
    overlay.style.zIndex = 103;
    const form = formContainer.querySelector('form');
    form.dataset.edit = 'true';
    form.setAttribute('data-id', e.target.dataset.id);
    const button = form.querySelector('button');
    button.textContent = 'Change';
    const projectField = form.querySelector('#project-field');
    projectField.style.display = 'none';
    const priority = form.querySelector('.selection');
    priority.parentElement.style.display = 'none';

    const title = form.querySelector('#title');
    title.value = task.title;

    const description = form.querySelector('#description');
    description.value = task.description;

    const date = form.querySelector('#date');
    date.value = task.dueDate.split(' ')[1];

    const month = form.querySelector('#month');
    month.value = task.dueDate.split(' ')[0];
  });

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close');
  closeBtn.innerHTML = '&#10006';
  rootDiv.appendChild(closeBtn);
  closeBtn.addEventListener('click', (e) => {
    e.target.parentElement.remove();
  });

  return rootDiv;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (readTodoHTML);


/***/ }),

/***/ "./src/read/readTodos.js":
/*!*******************************!*\
  !*** ./src/read/readTodos.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _update_updateHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../update/updateHelper */ "./src/update/updateHelper.js");
/* harmony import */ var _readTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./readTodo */ "./src/read/readTodo.js");
/* harmony import */ var _readTodoHTML__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./readTodoHTML */ "./src/read/readTodoHTML.js");




const actionBtn = (action, type, taskId) => {
  const btn = document.createElement('button');
  btn.textContent = type;
  btn.setAttribute('data-action', action);
  btn.setAttribute('data-id', taskId);

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const el = e.target.parentElement.parentElement;
    (0,_update_updateHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(el, action);
  });

  return btn;
};

const readTodos = (projects) => {
  const rootDiv = document.createElement('div');
  rootDiv.classList.add('projects');

  for (let project in projects) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    rootDiv.appendChild(projectDiv);

    const heading = document.createElement('h3');
    heading.textContent = project;
    projectDiv.appendChild(heading);

    for (let todo of projects[project]) {
      const todoDiv = document.createElement('div');
      todoDiv.setAttribute('data-id', todo.id);
      todoDiv.classList.add('todo');
      projectDiv.appendChild(todoDiv);

      todoDiv.addEventListener('click', (e) => {
        const todoXL = document.querySelector('.todo-xl');
        projectDiv.appendChild((0,_readTodoHTML__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_readTodo__WEBPACK_IMPORTED_MODULE_1__["default"])(todo.id)));
      });

      if (todo.priority === 'high') todoDiv.classList.add('high');
      if (todo.completed) todoDiv.classList.add('completed');

      const flexDiv = document.createElement('div');
      todoDiv.appendChild(flexDiv);

      const heading = document.createElement('h4');
      heading.textContent = todo.title;
      flexDiv.appendChild(heading);

      const date = document.createElement('p');
      date.textContent = todo.dueDate;
      flexDiv.appendChild(date);

      const actions = document.createElement('div');
      actions.setAttribute('class', 'actions');
      todoDiv.appendChild(actions);

      const changePriorityBtn = actionBtn('priority', 'p', todo.id);
      actions.appendChild(changePriorityBtn);

      const changeStatusBtn = actionBtn('completed', 'c', todo.id);
      actions.appendChild(changeStatusBtn);

      const deleteTodoBtn = actionBtn('delete', 'd', todo.id);
      actions.appendChild(deleteTodoBtn);
    }
  }

  return rootDiv;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (readTodos);


/***/ }),

/***/ "./src/update/editTodo.js":
/*!********************************!*\
  !*** ./src/update/editTodo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _create_todoObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/todoObj */ "./src/create/todoObj.js");



const editTodo = (taskId, todoObj) => {
  for (let project in _index__WEBPACK_IMPORTED_MODULE_0__.todos) {
    for (let todo of _index__WEBPACK_IMPORTED_MODULE_0__.todos[project]) {
      if (todo.id === taskId) {
        todo.title = todoObj.title;
        todo.description = todoObj.description;
        todo.dueDate = todoObj.dueDate;
        todo.priority = todoObj.priority;
        todo.project = project;
      }
    }
  }

  return _index__WEBPACK_IMPORTED_MODULE_0__.todos;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTodo);


/***/ }),

/***/ "./src/update/updateAction.js":
/*!************************************!*\
  !*** ./src/update/updateAction.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const updateAction = (element, projects, action) => {
  const project = element.parentElement.firstChild.textContent;
  const taskId = element.dataset.id;

  for (let task of projects[project]) {
    if (action === 'priority' && task.id === taskId) {
      // if (task.priority === 'low') task.changePriority('high');
      // else task.changePriority('low');
      if (task.priority === 'low') task.priority = 'high';
      else task.priority = 'low';
    } else if (action === 'completed' && task.id === taskId) {
      // task.isComplete();
      task.completed = !task.completed;
    } else if (action === 'delete' && task.id === taskId) {
      projects[project] = [...projects[project]].filter((task) => {
        return task.id !== taskId;
      });
      if (projects[project].length === 0) delete projects[project];
    }
  }
  localStorage.setItem('projects', JSON.stringify(projects));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateAction);


/***/ }),

/***/ "./src/update/updateHelper.js":
/*!************************************!*\
  !*** ./src/update/updateHelper.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _updateAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateAction */ "./src/update/updateAction.js");



const updateHelper = (el, action) => {
  (0,_updateAction__WEBPACK_IMPORTED_MODULE_1__["default"])(el, _index__WEBPACK_IMPORTED_MODULE_0__.todos, action);

  if (action === 'priority') el.classList.toggle('high');
  else if (action === 'completed') el.classList.toggle('completed');
  else if (action === 'delete') {
    const project = el.parentElement;
    el.remove();
    if (action === 'delete' && !project.firstChild.nextElementSibling) {
      project.remove();
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateHelper);


/***/ }),

/***/ "./src/utils/parseDate.js":
/*!********************************!*\
  !*** ./src/utils/parseDate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const parseDate = (date, month) => {
  if (
    date === '31' &&
    (month === 'apr' || month === 'jun' || month === 'sep' || month === 'nov')
  ) {
    date = '30';
  }

  if ((date === '29' || date === '30' || date === '31') && month === 'feb') {
    date = '28';
    if (new Date().getFullYear() % 4 === 0) date = '29';
  }

  return `${month} ${date}`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseDate);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxRQUFRLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFlBQVksWUFBWSxZQUFZLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFlBQVksWUFBWSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFlBQVksWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxhQUFhLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLGFBQWEsOEZBQThGLHFCQUFxQixXQUFXLGdCQUFnQixpQkFBaUIs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTyxFQUFFLEtBQUs7QUFDMUI7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7OztVQ2hCekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2xheW91dC9pbnRyby5zY3NzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2xheW91dC9vdmVybGF5LnNjc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguc2Nzcz83MjIzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2xheW91dC9pbnRyby5zY3NzPzE2OTgiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbGF5b3V0L292ZXJsYXkuc2Nzcz8zYmE1Iiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY3JlYXRlL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY3JlYXRlL2NyZWF0ZVRvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY3JlYXRlL3RvZG9PYmouanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbGF5b3V0L2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbGF5b3V0L2ludHJvLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2xheW91dC9vdmVybGF5LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2xheW91dC9zaG93Rm9ybUJ0bi5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZWFkL3JlYWRUb2RvLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlYWQvcmVhZFRvZG9IVE1MLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3JlYWQvcmVhZFRvZG9zLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VwZGF0ZS9lZGl0VG9kby5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91cGRhdGUvdXBkYXRlQWN0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VwZGF0ZS91cGRhdGVIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdXRpbHMvcGFyc2VEYXRlLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm8pO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMzU1NztcXG4gIGNvbG9yOiAjZjFmYWVlO1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuI3RvZG8tZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB6LWluZGV4OiAxMDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQzNTU3O1xcbiAgY29sb3I6ICNmMWZhZWU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMzYwcHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzYwcHgpO1xcbn1cXG4jdG9kby1mb3JtIC5mb3JtLWNvbnRyb2wge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jdG9kby1mb3JtIC5mb3JtLWNvbnRyb2wgaW5wdXRbdHlwZT10ZXh0XSxcXG4jdG9kby1mb3JtIC5mb3JtLWNvbnRyb2wgdGV4dGFyZWEsXFxuI3RvZG8tZm9ybSAuZm9ybS1jb250cm9sIHNlbGVjdCxcXG4jdG9kby1mb3JtIC5mb3JtLWNvbnRyb2wgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWZhZWU7XFxuICBjb2xvcjogIzFkMzU1NztcXG59XFxuI3RvZG8tZm9ybSAuZm9ybS1jb250cm9sIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsICN0b2RvLWZvcm0gLmZvcm0tY29udHJvbCBpbnB1dFt0eXBlPXRleHRdOmhvdmVyLFxcbiN0b2RvLWZvcm0gLmZvcm0tY29udHJvbCB0ZXh0YXJlYTpmb2N1cyxcXG4jdG9kby1mb3JtIC5mb3JtLWNvbnRyb2wgdGV4dGFyZWE6aG92ZXIsXFxuI3RvZG8tZm9ybSAuZm9ybS1jb250cm9sIHNlbGVjdDpmb2N1cyxcXG4jdG9kby1mb3JtIC5mb3JtLWNvbnRyb2wgc2VsZWN0OmhvdmVyLFxcbiN0b2RvLWZvcm0gLmZvcm0tY29udHJvbCBidXR0b246Zm9jdXMsXFxuI3RvZG8tZm9ybSAuZm9ybS1jb250cm9sIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThkYWRjO1xcbn1cXG4jdG9kby1mb3JtIC5mb3JtLWNvbnRyb2wgdGV4dGFyZWEge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4jdG9kby1mb3JtIC5mb3JtLWNvbnRyb2wgaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgYWNjZW50LWNvbG9yOiAjZjFmYWVlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcbiN0b2RvLWZvcm0gLmZvcm0tY29udHJvbCAuc2VsZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcbiN0b2RvLWZvcm0gLmZvcm0tY29udHJvbCAuc2VsZWN0aW9uIGxhYmVsLFxcbiN0b2RvLWZvcm0gLmZvcm0tY29udHJvbCAuc2VsZWN0aW9uIGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3RvZG8tZm9ybSAuZm9ybS1jb250cm9sIC5zZWxlY3Rpb24gLnJhZGlvLWNvbnRyb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuI3RvZG8tZm9ybSAuZm9ybS1jb250cm9sIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYzOTQ2O1xcbiAgY29sb3I6ICNmMWZhZWU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4jdG9kby1mb3JtIC5mb3JtLWNvbnRyb2wgYnV0dG9uOmhvdmVyLCAjdG9kby1mb3JtIC5mb3JtLWNvbnRyb2wgYnV0dG9uOmZvY3VzIHtcXG4gIGNvbG9yOiAjMWQzNTU3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4ZGFkYztcXG59XFxuXFxuYnV0dG9uI3Nob3ctZm9ybSB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZmFlZTtcXG4gIGNvbG9yOiAjMWQzNTU3O1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAzMHB4O1xcbiAgcmlnaHQ6IDMwcHg7XFxufVxcbmJ1dHRvbiNzaG93LWZvcm06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1N2I5ZDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIGNvbHVtbi13aWR0aDogMzAwcHg7XFxuICBjb2x1bW4tZ2FwOiAyMHB4O1xcbn1cXG4ucHJvamVjdHMgLnByb2plY3Qge1xcbiAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZmFlZTtcXG4gIGNvbG9yOiAjMWQzNTU3O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5wcm9qZWN0cyAucHJvamVjdCBoMyB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLnByb2plY3RzIC5wcm9qZWN0IC50b2RvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGRhZGM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLnByb2plY3RzIC5wcm9qZWN0IC50b2RvLmhpZ2gge1xcbiAgY29sb3I6ICNmMWZhZWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU3YjlkO1xcbn1cXG4ucHJvamVjdHMgLnByb2plY3QgLnRvZG8uY29tcGxldGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjM5NDY7XFxuICBjb2xvcjogI2YxZmFlZTtcXG59XFxuLnByb2plY3RzIC5wcm9qZWN0IC50b2RvOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcbi5wcm9qZWN0cyAucHJvamVjdCAudG9kbzpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5wcm9qZWN0cyAucHJvamVjdCAudG9kbyBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5wcm9qZWN0cyAucHJvamVjdCAudG9kbyBkaXYgcCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4ucHJvamVjdHMgLnByb2plY3QgLnRvZG8gLmFjdGlvbnMge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG4ucHJvamVjdHMgLnByb2plY3QgLnRvZG8gLmFjdGlvbnMgYnV0dG9uIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmYWVlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucHJvamVjdHMgLnByb2plY3QgLnRvZG8gLmFjdGlvbnMgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDM1NTc7XFxuICBjb2xvcjogI2YxZmFlZTtcXG59XFxuXFxuLnRvZG8teGwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgei1pbmRleDogMTAxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbiAgY29sb3I6ICNmMWZhZWU7XFxufVxcbi50b2RvLXhsIGgxIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi50b2RvLXhsIHAge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcbi50b2RvLXhsIGgzIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcXG59XFxuLnRvZG8teGwgYnV0dG9uLmVkaXQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWZhZWU7XFxuICBjb2xvcjogIzFkMzU1NztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4udG9kby14bCBidXR0b24uZWRpdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU3YjlkO1xcbiAgY29sb3I6ICNmMWZhZWU7XFxufVxcbi50b2RvLXhsIGJ1dHRvbi5jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMwcHg7XFxuICByaWdodDogMzBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICNmMWZhZWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYzOTQ2O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG4udG9kby14bCBidXR0b24uY2xvc2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICMxZDM1NTc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmYWVlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2NvbG9ycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSw2REFBQTtFQUNBLHlCQ2hCVztFRGlCWCxjQ2hCVztFRGlCWCxhQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQzVCVztFRDZCWCxjQzVCVztFRDZCWCxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSwrQkFBQTtFQUNBLDZCQUFBO0FBSEY7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQUhKO0FBS0k7Ozs7RUFJRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDakRPO0VEa0RQLGNDbkRPO0FEZ0RiO0FBS007Ozs7Ozs7RUFFRSx5QkNyRFE7QUR1RGhCO0FBRUk7RUFDRSxlQUFBO0FBQU47QUFHSTtFQUNFLHFCQy9ETztFRGdFUCxXQUFBO0VBQ0EsWUFBQTtBQUROO0FBSUk7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUZOO0FBSU07O0VBRUUsZUFBQTtBQUZSO0FBS007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBSFI7QUFPSTtFQUNFLHlCQ2xGVztFRG1GWCxjQ3RGTztFRHVGUCxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFMTjtBQU9NO0VBRUUsY0M5Rks7RUQrRkwseUJDN0ZRO0FEdUZoQjs7QUFZQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQzNHVztFRDRHWCxjQzdHVztFRDhHWCxlQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVZGO0FBWUU7RUFDRSx5QkNuSGM7QUR5R2xCOztBQWNBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQVhGO0FBYUU7RUFDRSx3QkFBQTtFQUNBLHlCQy9IUztFRGdJVCxjQ2pJUztFRGtJVCxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVhKO0FBYUk7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVhOO0FBY0k7RUFDRSx5QkMzSVU7RUQ0SVYsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFaTjtBQWNNO0VBQ0UsY0NsSks7RURtSkwseUJDakpVO0FEcUlsQjtBQWVNO0VBQ0UseUJDcEpTO0VEcUpULGNDeEpLO0FEMkliO0FBZ0JNO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FBZFI7QUFpQk07RUFDRSxnQkFBQTtBQWZSO0FBa0JNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBaEJSO0FBa0JRO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBaEJWO0FBb0JNO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQWxCUjtBQW9CUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkNoTUc7RURpTUgsZUFBQTtBQWxCVjtBQW9CVTtFQUNFLHlCQ3JNQztFRHNNRCxjQ3JNQztBRG1MYjs7QUEwQkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLG9DQUFBO0VBQ0EsY0N6Tlc7QURnTWI7QUEyQkU7RUFDRSx5QkFBQTtBQXpCSjtBQTRCRTtFQUNFLGNBQUE7QUExQko7QUE2QkU7RUFDRSxxQ0FBQTtFQUNBLDBCQUFBO0FBM0JKO0FBOEJFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQzNPUztFRDRPVCxjQzdPUztFRDhPVCxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBNUJKO0FBOEJJO0VBQ0UsZUFBQTtFQUNBLHlCQ2xQWTtFRG1QWixjQ3JQTztBRHlOYjtBQWdDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQ2hRUztFRGlRVCx5QkM5UGE7RUQrUGIsaUJBQUE7RUFDQSxtQkFBQTtBQTlCSjtBQWdDSTtFQUNFLGVBQUE7RUFDQSxjQ3hRTztFRHlRUCx5QkN4UU87QUQwT2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm8nKTtcXHJcXG5AaW1wb3J0ICdjb2xvcnMnO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcXHJcXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWZvcm0ge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgei1pbmRleDogMTAxO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3I7XFxyXFxuICBjb2xvcjogJHRleHQtY29sb3I7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMzYwcHg7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcblxcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzYwcHgpO1xcclxcblxcclxcbiAgLmZvcm0tY29udHJvbCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgaW5wdXRbdHlwZT0ndGV4dCddLFxcclxcbiAgICB0ZXh0YXJlYSxcXHJcXG4gICAgc2VsZWN0LFxcclxcbiAgICBidXR0b24ge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LWNvbG9yO1xcclxcbiAgICAgIGNvbG9yOiAkYmFzZS1jb2xvcjtcXHJcXG5cXHJcXG4gICAgICAmOmZvY3VzLFxcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRleHRhcmVhIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW5wdXRbdHlwZT0ncmFkaW8nXSB7XFxyXFxuICAgICAgYWNjZW50LWNvbG9yOiAkdGV4dC1jb2xvcjtcXHJcXG4gICAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlbGVjdGlvbiB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBnYXA6IDIwcHg7XFxyXFxuXFxyXFxuICAgICAgbGFiZWwsXFxyXFxuICAgICAgaW5wdXRbdHlwZT0ncmFkaW8nXSB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5yYWRpby1jb250cm9sIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgZ2FwOiA1cHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcXHJcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlcixcXHJcXG4gICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgIGNvbG9yOiAkYmFzZS1jb2xvcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5idXR0b24jc2hvdy1mb3JtIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1jb2xvcjtcXHJcXG4gIGNvbG9yOiAkYmFzZS1jb2xvcjtcXHJcXG4gIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMzBweDtcXHJcXG4gIHJpZ2h0OiAzMHB4O1xcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICBjb2x1bW4td2lkdGg6IDMwMHB4O1xcclxcbiAgY29sdW1uLWdhcDogMjBweDtcXHJcXG5cXHJcXG4gIC5wcm9qZWN0IHtcXHJcXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1jb2xvcjtcXHJcXG4gICAgY29sb3I6ICRiYXNlLWNvbG9yO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFxyXFxuICAgIGgzIHtcXHJcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcblxcclxcbiAgICAgICYuaGlnaCB7XFxyXFxuICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAmLmNvbXBsZXRlZCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XFxyXFxuICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJjpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGRpdiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGdhcDogMTBweDtcXHJcXG5cXHJcXG4gICAgICAgIHAge1xcclxcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5hY3Rpb25zIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBnYXA6IDVweDtcXHJcXG5cXHJcXG4gICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtY29sb3I7XFxyXFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3I7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50b2RvLXhsIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIHotaW5kZXg6IDEwMTtcXHJcXG5cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcXHJcXG5cXHJcXG4gIGgxIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHAge1xcclxcbiAgICBtYXJnaW46IDIwcHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGgzIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBidXR0b24uZWRpdCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtY29sb3I7XFxyXFxuICAgIGNvbG9yOiAkYmFzZS1jb2xvcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uLmNsb3NlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDMwcHg7XFxyXFxuICAgIHJpZ2h0OiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIGNvbG9yOiAkYmFzZS1jb2xvcjtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1jb2xvcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIiRiYXNlLWNvbG9yOiAjMWQzNTU3O1xcclxcbiR0ZXh0LWNvbG9yOiAjZjFmYWVlO1xcclxcbiRwcmltYXJ5LWNvbG9yOiAjYThkYWRjO1xcclxcbiRzZWNvbmRhcnktY29sb3I6ICM0NTdiOWQ7XFxyXFxuJHRlcnRpYXJ5LWNvbG9yOiAjZTYzOTQ2O1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pbnRybyBwIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5pbnRybyAuaW5kaWNhdG9yIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4uaW50cm8gLmluZGljYXRvciAuY29sb3Ige1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG4uaW50cm8gLmluZGljYXRvciAjY29sb3ItMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThkYWRjO1xcbn1cXG4uaW50cm8gLmluZGljYXRvciAjY29sb3ItMSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU3YjlkO1xcbn1cXG4uaW50cm8gLmluZGljYXRvciAjY29sb3ItMiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYzOTQ2O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGF5b3V0L2ludHJvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jb2xvcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHRTtFQUNFLGdCQUFBO0FBRko7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFISjtBQUtJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUhOO0FBTUk7RUFDRSx5QkNqQlU7QURhaEI7QUFPSTtFQUNFLHlCQ3BCWTtBRGVsQjtBQVFJO0VBQ0UseUJDdkJXO0FEaUJqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi9jb2xvcnMuc2Nzcyc7XFxyXFxuXFxyXFxuLmludHJvIHtcXHJcXG4gIHAge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmluZGljYXRvciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG5cXHJcXG4gICAgLmNvbG9yIHtcXHJcXG4gICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjY29sb3ItMCB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2NvbG9yLTEge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2NvbG9yLTIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIiRiYXNlLWNvbG9yOiAjMWQzNTU3O1xcclxcbiR0ZXh0LWNvbG9yOiAjZjFmYWVlO1xcclxcbiRwcmltYXJ5LWNvbG9yOiAjYThkYWRjO1xcclxcbiRzZWNvbmRhcnktY29sb3I6ICM0NTdiOWQ7XFxyXFxuJHRlcnRpYXJ5LWNvbG9yOiAjZTYzOTQ2O1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5vdmVybGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXQvb3ZlcmxheS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm92ZXJsYXkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ludHJvLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbnRyby5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9vdmVybGF5LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9vdmVybGF5LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgVG9kbyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xyXG4gICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcclxuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5wcm9qZWN0ID0gdGhpcy5wcm9qZWN0IHx8ICdkdWUgdGFza3MnO1xyXG4gIH1cclxuXHJcbiAgaXNDb21wbGV0ZSgpIHtcclxuICAgIHRoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUHJpb3JpdHkodmFsdWUpIHtcclxuICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG87XHJcbiIsImltcG9ydCBUb2RvIGZyb20gJy4vVG9kbyc7XHJcblxyXG5jb25zdCBjcmVhdGVUb2RvID0gKHRvZG9zLCB0b2RvT2JqKSA9PiB7XHJcbiAgbGV0IHRvZG8gPSBudWxsO1xyXG4gIHRvZG8gPSBuZXcgVG9kbyhcclxuICAgIHRvZG9PYmoudGl0bGUsXHJcbiAgICB0b2RvT2JqLmRlc2NyaXB0aW9uLFxyXG4gICAgdG9kb09iai5kdWVEYXRlLFxyXG4gICAgdG9kb09iai5wcmlvcml0eVxyXG4gICk7XHJcbiAgaWYgKCEhdG9kb09iai5wcm9qZWN0KSB0b2RvLnByb2plY3QgPSB0b2RvT2JqLnByb2plY3QudG9Mb3dlckNhc2UoKTtcclxuICBpZiAodG9kb3NbdG9kby5wcm9qZWN0XSkgdG9kb3NbdG9kby5wcm9qZWN0XS5wdXNoKHRvZG8pO1xyXG4gIGVsc2Uge1xyXG4gICAgdG9kb3NbdG9kby5wcm9qZWN0XSA9IFtdO1xyXG4gICAgdG9kb3NbdG9kby5wcm9qZWN0XS5wdXNoKHRvZG8pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRvZG87XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUb2RvO1xyXG4iLCJpbXBvcnQgcGFyc2VEYXRlIGZyb20gJy4uL3V0aWxzL3BhcnNlRGF0ZSc7XHJcblxyXG5jb25zdCB0b2RvT2JqID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZTtcclxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKS52YWx1ZTtcclxuICBjb25zdCBtb250aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb250aCcpLnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBwYXJzZURhdGUoZGF0ZSwgbW9udGgpO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCdcclxuICApLnZhbHVlO1xyXG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLnZhbHVlO1xyXG5cclxuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvT2JqO1xyXG4iLCJpbXBvcnQgJy4vaW5kZXguc2Nzcyc7XHJcbmltcG9ydCBpbnRybyBmcm9tICcuL2xheW91dC9pbnRybyc7XHJcbmltcG9ydCBmb3JtQ29udGFpbmVyIGZyb20gJy4vbGF5b3V0L2Zvcm0nO1xyXG5pbXBvcnQgc2hvd0Zvcm1CdG4gZnJvbSAnLi9sYXlvdXQvc2hvd0Zvcm1CdG4nO1xyXG5pbXBvcnQgb3ZlcmxheSBmcm9tICcuL2xheW91dC9vdmVybGF5JztcclxuXHJcbmltcG9ydCBjcmVhdGVUb2RvIGZyb20gJy4vY3JlYXRlL2NyZWF0ZVRvZG8nO1xyXG5pbXBvcnQgdG9kb09iaiBmcm9tICcuL2NyZWF0ZS90b2RvT2JqJztcclxuaW1wb3J0IHJlYWRUb2RvcyBmcm9tICcuL3JlYWQvcmVhZFRvZG9zJztcclxuaW1wb3J0IGVkaXRUb2RvIGZyb20gJy4vdXBkYXRlL2VkaXRUb2RvJztcclxuXHJcbi8vIGFwcCBzdGF0ZVxyXG5leHBvcnQgbGV0IHRvZG9zID0ge307XHJcblxyXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHtcclxuICB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xyXG59XHJcblxyXG5jb25zdCBtYWluID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xyXG5cclxuICAvLyBpbnRyb1xyXG4gIHJvb3QuYXBwZW5kQ2hpbGQoaW50cm8oKSk7XHJcblxyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludHJvJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHJvb3QuYXBwZW5kQ2hpbGQocmVhZFRvZG9zKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XHJcbiAgcm9vdC5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcbiAgLy8gZm9ybVxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbiAgcm9vdC5hcHBlbmRDaGlsZChzaG93Rm9ybUJ0bigpKTtcclxuICByb290LmFwcGVuZENoaWxkKG92ZXJsYXkoKSk7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBmb3JtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBsZXQgb2xkVG9kb3MgPSBKU09OLnN0cmluZ2lmeSh0b2Rvcyk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZm9ybS5kYXRhc2V0LmVkaXQgPT09ICdmYWxzZScpIHtcclxuICAgICAgY3JlYXRlVG9kbyh0b2RvcywgdG9kb09iaigpKTtcclxuICAgIH0gZWxzZSBpZiAoZm9ybS5kYXRhc2V0LmVkaXQgPT09ICd0cnVlJykge1xyXG4gICAgICBlZGl0VG9kbyhmb3JtLmRhdGFzZXQuaWQsIHRvZG9PYmooKSk7XHJcbiAgICAgIGZvcm0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgIGZvcm0uZGF0YXNldC5lZGl0ID0gJ2ZhbHNlJztcclxuICAgIH1cclxuICAgIGZvcm0ucmVzZXQoKTtcclxuXHJcbiAgICBpZiAodG9kb3MpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRybycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMzYwcHgpJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xyXG4gICAgaWYgKGFsbFByb2plY3RzKSBhbGxQcm9qZWN0cy5yZW1vdmUoKTtcclxuXHJcbiAgICBpZiAob2xkVG9kb3MgIT09IEpTT04uc3RyaW5naWZ5KHRvZG9zKSkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xyXG4gICAgICByb290LmFwcGVuZENoaWxkKHJlYWRUb2RvcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBzaG93L2hpZGUgZm9ybSBvbi1kZW1hbmRcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdy1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxuICAgIGZvcm1Db250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9KTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICBmb3JtQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0zNjBweCknO1xyXG4gICAgZm9ybS5kYXRhc2V0LmVkaXQgPSAnZmFsc2UnO1xyXG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS50ZXh0Q29udGVudCA9ICdDcmVhdGUnO1xyXG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1maWVsZCcpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rpb24nKS5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcblxyXG4gICAgZS50YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9KTtcclxufTtcclxuXHJcbm1haW4oKTtcclxuIiwiY29uc3QgZm9ybUhUTUwgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF5ID0gbmV3IERhdGUoKS5nZXREYXRlKCk7XHJcbiAgY29uc3QgbW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCk7XHJcblxyXG4gIGxldCBodG1sID0gYDxmb3JtIGRhdGEtZWRpdD1cImZhbHNlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UYXNrPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvblwiIHJvd3M9XCI1XCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwcm9qZWN0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0XCI+UHJvamVjdDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwcm9qZWN0XCIgaWQ9XCJwcm9qZWN0XCIgcGxhY2Vob2xkZXI9XCJPcHRpb25hbFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8cD5EdWUgRGF0ZTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIj5EYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiPmA7XHJcblxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDMxOyBpKyspIHtcclxuICAgIGlmIChpID09PSBkYXkpIGh0bWwgKz0gYDxvcHRpb24gdmFsdWU9XCIke2l9XCIgc2VsZWN0ZWQ+JHtpfTwvb3B0aW9uPmA7XHJcbiAgICBlbHNlIGh0bWwgKz0gYDxvcHRpb24gdmFsdWU9XCIke2l9XCI+JHtpfTwvb3B0aW9uPmA7XHJcbiAgfVxyXG5cclxuICBodG1sICs9IGA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1vbnRoXCI+TW9udGg8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJtb250aFwiIGlkPVwibW9udGhcIj5gO1xyXG5cclxuICBbXHJcbiAgICAnamFuJyxcclxuICAgICdmZWInLFxyXG4gICAgJ21hcicsXHJcbiAgICAnYXByJyxcclxuICAgICdtYXknLFxyXG4gICAgJ2p1bicsXHJcbiAgICAnanVsJyxcclxuICAgICdhdWcnLFxyXG4gICAgJ3NlcCcsXHJcbiAgICAnb2N0JyxcclxuICAgICdub3YnLFxyXG4gICAgJ2RlYycsXHJcbiAgXS5mb3JFYWNoKChtLCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKGluZGV4ID09PSBtb250aCkge1xyXG4gICAgICBodG1sICs9IGA8b3B0aW9uIHZhbHVlPVwiJHttfVwiIHNlbGVjdGVkPiR7bS50b1VwcGVyQ2FzZSgpfTwvb3B0aW9uPmA7XHJcbiAgICB9IGVsc2UgaHRtbCArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7bX1cIj4ke20udG9VcHBlckNhc2UoKX08L29wdGlvbj5gO1xyXG4gIH0pO1xyXG5cclxuICBodG1sICs9IGA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8cD5Qcmlvcml0eTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaGlnaFwiPkhpZ2g8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cImhpZ2hcIiB2YWx1ZT1cImhpZ2hcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW8tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsb3dcIj5Mb3c8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cImxvd1wiIHZhbHVlPVwibG93XCIgY2hlY2tlZCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInRvLWRvLWJ0blwiPkNyZWF0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPmA7XHJcblxyXG4gIHJldHVybiBodG1sO1xyXG59O1xyXG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLWZvcm0nKTtcclxuY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbmhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ3JlYXRlIGEgbmV3IHRhc2snO1xyXG5mb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG5mb3JtQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZm9ybUhUTUwoKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtQ29udGFpbmVyO1xyXG4iLCJpbXBvcnQgJy4vaW50cm8uc2Nzcyc7XHJcblxyXG5jb25zdCBpbnRybyA9ICgpID0+IHtcclxuICBjb25zdCByb290RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcm9vdERpdi5jbGFzc0xpc3QuYWRkKCdpbnRybycpO1xyXG5cclxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1RvLURvIG9uIFN0ZXJvaWRzJztcclxuICByb290RGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG5cclxuICBjb25zdCBjYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNhcHRpb24udGV4dENvbnRlbnQgPVxyXG4gICAgJ0FuIGFkdmFuY2VkIHZlcnNpb24gb2Ygc3RhcGxlIGZyb250LWVuZCBkZXZlbG9wbWVudCBwcm9qZWN0Lic7XHJcbiAgcm9vdERpdi5hcHBlbmRDaGlsZChjYXB0aW9uKTtcclxuXHJcbiAgW1xyXG4gICAgJ0xvdyBwcmlvcml0eSAoZGVmYXVsdCknLFxyXG4gICAgJ0hpZ2ggcHJpb3JpdHknLFxyXG4gICAgJ0NvbXBsZXRlIChyZWFkeSB0byBkZWxldGUpJyxcclxuICBdLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgaG9sZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob2xkZXJEaXYuY2xhc3NMaXN0LmFkZCgnaW5kaWNhdG9yJyk7XHJcblxyXG4gICAgY29uc3QgY29sb3JJbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbG9ySW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ2NvbG9yJyk7XHJcbiAgICBjb2xvckluZGljYXRvci5zZXRBdHRyaWJ1dGUoJ2lkJywgYGNvbG9yLSR7aW5kZXh9YCk7XHJcbiAgICBob2xkZXJEaXYuYXBwZW5kQ2hpbGQoY29sb3JJbmRpY2F0b3IpO1xyXG5cclxuICAgIGNvbnN0IGNvbG9yQ2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjb2xvckNhcHRpb24udGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgIGhvbGRlckRpdi5hcHBlbmRDaGlsZChjb2xvckNhcHRpb24pO1xyXG5cclxuICAgIHJvb3REaXYuYXBwZW5kQ2hpbGQoaG9sZGVyRGl2KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFjdGlvbnMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhY3Rpb25zJyk7XHJcbiAgcm9vdERpdi5hcHBlbmRDaGlsZChhY3Rpb25zKTtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUCAtIFRvZ2dsZSBwcmlvcml0eSBmcm9tIGxvdyB0byBoaWdoIG9yIHZpY2UtdmVyc2EuJztcclxuICBhY3Rpb25zLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxuXHJcbiAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHN0YXR1cy50ZXh0Q29udGVudCA9ICdDIC0gU2V0IHN0YXR1cyB0byBjb21wbGV0ZSBvciByZXZlcnQgYmFjayB0byB3b2tyaW5nLic7XHJcbiAgYWN0aW9ucy5hcHBlbmRDaGlsZChzdGF0dXMpO1xyXG5cclxuICBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZGVsLnRleHRDb250ZW50ID0gJ0QgLSBEZWxldGUgYSBzcGVjaWZpYy9jb21wbGV0ZWQgdGFzay4nO1xyXG4gIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsKTtcclxuXHJcbiAgcmV0dXJuIHJvb3REaXY7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRybztcclxuIiwiaW1wb3J0ICcuL292ZXJsYXkuc2Nzcyc7XHJcblxyXG5jb25zdCBvdmVybGF5ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvb3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByb290RGl2LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcclxuXHJcbiAgcmV0dXJuIHJvb3REaXY7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvdmVybGF5O1xyXG4iLCJjb25zdCBzaG93Rm9ybUJ0biA9ICgpID0+IHtcclxuICBjb25zdCBuZXdUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgbmV3VG9kb0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nob3ctZm9ybScpO1xyXG4gIG5ld1RvZG9CdG4udGV4dENvbnRlbnQgPSAnKyc7XHJcbiAgcmV0dXJuIG5ld1RvZG9CdG47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93Rm9ybUJ0bjtcclxuIiwiaW1wb3J0IHsgdG9kb3MgfSBmcm9tICcuLi9pbmRleCc7XHJcblxyXG5jb25zdCByZWFkVG9kbyA9ICh0YXNrSWQpID0+IHtcclxuICBmb3IgKGxldCBwcm9qZWN0IGluIHRvZG9zKSB7XHJcbiAgICBmb3IgKGxldCB0b2RvIG9mIHRvZG9zW3Byb2plY3RdKSB7XHJcbiAgICAgIGlmICh0b2RvLmlkID09PSB0YXNrSWQpIHJldHVybiB0b2RvO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlYWRUb2RvO1xyXG4iLCJjb25zdCByZWFkVG9kb0hUTUwgPSAodGFzaykgPT4ge1xyXG4gIGNvbnN0IHJvb3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByb290RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8teGwnKTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gYCR7dGFzay50aXRsZX0gKCR7dGFzay5wcm9qZWN0fSlgO1xyXG4gIHJvb3REaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgcm9vdERpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcblxyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlIGRhdGU6ICR7dGFzay5kdWVEYXRlfWA7XHJcbiAgcm9vdERpdi5hcHBlbmRDaGlsZChkdWVEYXRlKTtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIHByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Rhc2sucHJpb3JpdHl9YDtcclxuICByb290RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxuXHJcbiAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBjb21wbGV0ZWQudGV4dENvbnRlbnQgPSBgU3RhdHVzOiAke1xyXG4gICAgdGFzay5jb21wbGV0ZWQgPyAnQ29tcGxldGUnIDogJ1VuY29tcGxldGUnXHJcbiAgfWA7XHJcbiAgcm9vdERpdi5hcHBlbmRDaGlsZChjb21wbGV0ZWQpO1xyXG5cclxuICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XHJcbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcclxuICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHRhc2suaWQpO1xyXG4gIHJvb3REaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XHJcbiAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1mb3JtJyk7XHJcbiAgICBmb3JtQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJztcclxuICAgIGZvcm1Db250YWluZXIuc3R5bGUuekluZGV4ID0gMTA0O1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIG92ZXJsYXkuc3R5bGUuekluZGV4ID0gMTAzO1xyXG4gICAgY29uc3QgZm9ybSA9IGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG4gICAgZm9ybS5kYXRhc2V0LmVkaXQgPSAndHJ1ZSc7XHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGUudGFyZ2V0LmRhdGFzZXQuaWQpO1xyXG4gICAgY29uc3QgYnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdDaGFuZ2UnO1xyXG4gICAgY29uc3QgcHJvamVjdEZpZWxkID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1maWVsZCcpO1xyXG4gICAgcHJvamVjdEZpZWxkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0ucXVlcnlTZWxlY3RvcignLnNlbGVjdGlvbicpO1xyXG4gICAgcHJpb3JpdHkucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcclxuICAgIHRpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XHJcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3QgZGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcclxuICAgIGRhdGUudmFsdWUgPSB0YXNrLmR1ZURhdGUuc3BsaXQoJyAnKVsxXTtcclxuXHJcbiAgICBjb25zdCBtb250aCA9IGZvcm0ucXVlcnlTZWxlY3RvcignI21vbnRoJyk7XHJcbiAgICBtb250aC52YWx1ZSA9IHRhc2suZHVlRGF0ZS5zcGxpdCgnICcpWzBdO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XHJcbiAgY2xvc2VCdG4uaW5uZXJIVE1MID0gJyYjMTAwMDYnO1xyXG4gIHJvb3REaXYuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByb290RGl2O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVhZFRvZG9IVE1MO1xyXG4iLCJpbXBvcnQgdXBkYXRlSGVscGVyIGZyb20gJy4uL3VwZGF0ZS91cGRhdGVIZWxwZXInO1xyXG5pbXBvcnQgcmVhZFRvZG8gZnJvbSAnLi9yZWFkVG9kbyc7XHJcbmltcG9ydCByZWFkVG9kb0hUTUwgZnJvbSAnLi9yZWFkVG9kb0hUTUwnO1xyXG5cclxuY29uc3QgYWN0aW9uQnRuID0gKGFjdGlvbiwgdHlwZSwgdGFza0lkKSA9PiB7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnRuLnRleHRDb250ZW50ID0gdHlwZTtcclxuICBidG4uc2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicsIGFjdGlvbik7XHJcbiAgYnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHRhc2tJZCk7XHJcblxyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgZWwgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB1cGRhdGVIZWxwZXIoZWwsIGFjdGlvbik7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBidG47XHJcbn07XHJcblxyXG5jb25zdCByZWFkVG9kb3MgPSAocHJvamVjdHMpID0+IHtcclxuICBjb25zdCByb290RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcm9vdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xyXG5cclxuICBmb3IgKGxldCBwcm9qZWN0IGluIHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcclxuICAgIHJvb3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XHJcblxyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdDtcclxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcblxyXG4gICAgZm9yIChsZXQgdG9kbyBvZiBwcm9qZWN0c1twcm9qZWN0XSkge1xyXG4gICAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRvZG9EaXYuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgdG9kby5pZCk7XHJcbiAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xyXG4gICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xyXG5cclxuICAgICAgdG9kb0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9kb1hMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8teGwnKTtcclxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHJlYWRUb2RvSFRNTChyZWFkVG9kbyh0b2RvLmlkKSkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0b2RvLnByaW9yaXR5ID09PSAnaGlnaCcpIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgnaGlnaCcpO1xyXG4gICAgICBpZiAodG9kby5jb21wbGV0ZWQpIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XHJcblxyXG4gICAgICBjb25zdCBmbGV4RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoZmxleERpdik7XHJcblxyXG4gICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XHJcbiAgICAgIGZsZXhEaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcblxyXG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xyXG4gICAgICBmbGV4RGl2LmFwcGVuZENoaWxkKGRhdGUpO1xyXG5cclxuICAgICAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBhY3Rpb25zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aW9ucycpO1xyXG4gICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGFjdGlvbnMpO1xyXG5cclxuICAgICAgY29uc3QgY2hhbmdlUHJpb3JpdHlCdG4gPSBhY3Rpb25CdG4oJ3ByaW9yaXR5JywgJ3AnLCB0b2RvLmlkKTtcclxuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChjaGFuZ2VQcmlvcml0eUJ0bik7XHJcblxyXG4gICAgICBjb25zdCBjaGFuZ2VTdGF0dXNCdG4gPSBhY3Rpb25CdG4oJ2NvbXBsZXRlZCcsICdjJywgdG9kby5pZCk7XHJcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoY2hhbmdlU3RhdHVzQnRuKTtcclxuXHJcbiAgICAgIGNvbnN0IGRlbGV0ZVRvZG9CdG4gPSBhY3Rpb25CdG4oJ2RlbGV0ZScsICdkJywgdG9kby5pZCk7XHJcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlVG9kb0J0bik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm9vdERpdjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlYWRUb2RvcztcclxuIiwiaW1wb3J0IHsgdG9kb3MgfSBmcm9tICcuLi9pbmRleCc7XHJcbmltcG9ydCB0b2RvT2JqIGZyb20gJy4uL2NyZWF0ZS90b2RvT2JqJztcclxuXHJcbmNvbnN0IGVkaXRUb2RvID0gKHRhc2tJZCwgdG9kb09iaikgPT4ge1xyXG4gIGZvciAobGV0IHByb2plY3QgaW4gdG9kb3MpIHtcclxuICAgIGZvciAobGV0IHRvZG8gb2YgdG9kb3NbcHJvamVjdF0pIHtcclxuICAgICAgaWYgKHRvZG8uaWQgPT09IHRhc2tJZCkge1xyXG4gICAgICAgIHRvZG8udGl0bGUgPSB0b2RvT2JqLnRpdGxlO1xyXG4gICAgICAgIHRvZG8uZGVzY3JpcHRpb24gPSB0b2RvT2JqLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRvZG8uZHVlRGF0ZSA9IHRvZG9PYmouZHVlRGF0ZTtcclxuICAgICAgICB0b2RvLnByaW9yaXR5ID0gdG9kb09iai5wcmlvcml0eTtcclxuICAgICAgICB0b2RvLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdG9kb3M7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlZGl0VG9kbztcclxuIiwiY29uc3QgdXBkYXRlQWN0aW9uID0gKGVsZW1lbnQsIHByb2plY3RzLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCBwcm9qZWN0ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XHJcbiAgY29uc3QgdGFza0lkID0gZWxlbWVudC5kYXRhc2V0LmlkO1xyXG5cclxuICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3RzW3Byb2plY3RdKSB7XHJcbiAgICBpZiAoYWN0aW9uID09PSAncHJpb3JpdHknICYmIHRhc2suaWQgPT09IHRhc2tJZCkge1xyXG4gICAgICAvLyBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2xvdycpIHRhc2suY2hhbmdlUHJpb3JpdHkoJ2hpZ2gnKTtcclxuICAgICAgLy8gZWxzZSB0YXNrLmNoYW5nZVByaW9yaXR5KCdsb3cnKTtcclxuICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdsb3cnKSB0YXNrLnByaW9yaXR5ID0gJ2hpZ2gnO1xyXG4gICAgICBlbHNlIHRhc2sucHJpb3JpdHkgPSAnbG93JztcclxuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnY29tcGxldGVkJyAmJiB0YXNrLmlkID09PSB0YXNrSWQpIHtcclxuICAgICAgLy8gdGFzay5pc0NvbXBsZXRlKCk7XHJcbiAgICAgIHRhc2suY29tcGxldGVkID0gIXRhc2suY29tcGxldGVkO1xyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdkZWxldGUnICYmIHRhc2suaWQgPT09IHRhc2tJZCkge1xyXG4gICAgICBwcm9qZWN0c1twcm9qZWN0XSA9IFsuLi5wcm9qZWN0c1twcm9qZWN0XV0uZmlsdGVyKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2suaWQgIT09IHRhc2tJZDtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChwcm9qZWN0c1twcm9qZWN0XS5sZW5ndGggPT09IDApIGRlbGV0ZSBwcm9qZWN0c1twcm9qZWN0XTtcclxuICAgIH1cclxuICB9XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUFjdGlvbjtcclxuIiwiaW1wb3J0IHsgdG9kb3MgfSBmcm9tICcuLi9pbmRleCc7XHJcbmltcG9ydCB1cGRhdGVBY3Rpb24gZnJvbSAnLi91cGRhdGVBY3Rpb24nO1xyXG5cclxuY29uc3QgdXBkYXRlSGVscGVyID0gKGVsLCBhY3Rpb24pID0+IHtcclxuICB1cGRhdGVBY3Rpb24oZWwsIHRvZG9zLCBhY3Rpb24pO1xyXG5cclxuICBpZiAoYWN0aW9uID09PSAncHJpb3JpdHknKSBlbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWdoJyk7XHJcbiAgZWxzZSBpZiAoYWN0aW9uID09PSAnY29tcGxldGVkJykgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XHJcbiAgZWxzZSBpZiAoYWN0aW9uID09PSAnZGVsZXRlJykge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGVsLnBhcmVudEVsZW1lbnQ7XHJcbiAgICBlbC5yZW1vdmUoKTtcclxuICAgIGlmIChhY3Rpb24gPT09ICdkZWxldGUnICYmICFwcm9qZWN0LmZpcnN0Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XHJcbiAgICAgIHByb2plY3QucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlSGVscGVyO1xyXG4iLCJjb25zdCBwYXJzZURhdGUgPSAoZGF0ZSwgbW9udGgpID0+IHtcclxuICBpZiAoXHJcbiAgICBkYXRlID09PSAnMzEnICYmXHJcbiAgICAobW9udGggPT09ICdhcHInIHx8IG1vbnRoID09PSAnanVuJyB8fCBtb250aCA9PT0gJ3NlcCcgfHwgbW9udGggPT09ICdub3YnKVxyXG4gICkge1xyXG4gICAgZGF0ZSA9ICczMCc7XHJcbiAgfVxyXG5cclxuICBpZiAoKGRhdGUgPT09ICcyOScgfHwgZGF0ZSA9PT0gJzMwJyB8fCBkYXRlID09PSAnMzEnKSAmJiBtb250aCA9PT0gJ2ZlYicpIHtcclxuICAgIGRhdGUgPSAnMjgnO1xyXG4gICAgaWYgKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAlIDQgPT09IDApIGRhdGUgPSAnMjknO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGAke21vbnRofSAke2RhdGV9YDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhcnNlRGF0ZTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9