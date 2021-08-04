/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nbody {\n\n    display: grid;\n    height: 100vh;\n\n}\n/* main app display */\n\n#content {\n\n    align-self: center;\n    justify-self: center;\n    height: 600px;\n    width: 1000px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: auto 1fr;\n}\n\n#header {\n\n    grid-row: 1;\n    grid-column: 1/-1;\n    height: 100px;\n    border-style: solid;\n    border-width: 2px;\n}\n\n#sideBar {\n\n    grid-column: 1;\n    border-style: solid;\n    border-width: 2px;\n    grid-row: 2;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;    \n    justify-content: center;\n\n}\n\n#sideContainer {\n    \n    display: grid;\n    grid-row: 1;\n    grid-template-columns: 1fr;\n}\n\n.sideBarTitle {\n\n    border:solid 2px;\n    display: grid;\n    justify-content: center;\n    align-content: center;\n}\n\n#display {\n\n    grid-column: 2;\n    border-style: solid;\n    border-width: 2px;\n    grid-row: 2;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-auto-rows: 80px;\n    overflow-y: scroll;\n\n}\n\n#buttonContainer {\n\n    display: grid;\n    justify-content: end;\n    grid-row: 2;\n    align-content: end;\n\n}\n\n#addNewButton {\n\n    width: 60px;\n    height:40px;\n}\n\n.todo {\n\n    grid-column: 1/-1;\n    height:80px;\n    border:solid 2px;\n    display: grid;\n}\n\n.hidden {\n\n    display: none !important;\n}\n\n/*app display end */\n\n/*form stuff*/\n\n#formContainer {\n\n    position: fixed;\n    width:750px;\n    height:400px;\n    border:solid 2px;\n    display: grid;\n    justify-self: center;\n    align-self: center;\n    z-index: 1;\n    background-color: wheat;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n\n#todoForm {\n\n    border: solid 1px;\n    grid-column: 2;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    grid-template-columns: repeat(4, 1fr);\n}\n\n.title {\n\n    height:8vh;\n    grid-column: 1/-1;\n    grid-row:1;\n}\n\n.desc {\n\n    grid-column: 1/-1;\n}\n.formDate {\n\n    grid-column: 1;\n}\n#todoSubmit{\n    grid-column-end:  -1;\n}\n/*form stuff end*/\n\n\n.todoElement {\n\n\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;CAGC;AACD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiFI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;;AAEA,gDAAgD;AAChD;;;;;;;;;;;IAWI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;;;IAII,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;IACb,aAAa;;AAEjB;AACA,qBAAqB;;AAErB;;IAEI,kBAAkB;IAClB,oBAAoB;IACpB,aAAa;IACb,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;AAChC;;AAEA;;IAEI,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;;IAEI,cAAc;IACd,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;IACX,aAAa;IACb,0BAA0B;IAC1B,2BAA2B;IAC3B,uBAAuB;;AAE3B;;AAEA;;IAEI,aAAa;IACb,WAAW;IACX,0BAA0B;AAC9B;;AAEA;;IAEI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;;IAEI,cAAc;IACd,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;IACX,aAAa;IACb,0BAA0B;IAC1B,oBAAoB;IACpB,kBAAkB;;AAEtB;;AAEA;;IAEI,aAAa;IACb,oBAAoB;IACpB,WAAW;IACX,kBAAkB;;AAEtB;;AAEA;;IAEI,WAAW;IACX,WAAW;AACf;;AAEA;;IAEI,iBAAiB;IACjB,WAAW;IACX,gBAAgB;IAChB,aAAa;AACjB;;AAEA;;IAEI,wBAAwB;AAC5B;;AAEA,mBAAmB;;AAEnB,aAAa;;AAEb;;IAEI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,oBAAoB;IACpB,kBAAkB;IAClB,UAAU;IACV,uBAAuB;IACvB,aAAa;IACb,8BAA8B;AAClC;;;AAGA;;IAEI,iBAAiB;IACjB,cAAc;IACd,aAAa;IACb,iCAAiC;IACjC,qCAAqC;AACzC;;AAEA;;IAEI,UAAU;IACV,iBAAiB;IACjB,UAAU;AACd;;AAEA;;IAEI,iBAAiB;AACrB;AACA;;IAEI,cAAc;AAClB;AACA;IACI,oBAAoB;AACxB;AACA,iBAAiB;;;AAGjB;;;AAGA","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nbody {\n\n    display: grid;\n    height: 100vh;\n\n}\n/* main app display */\n\n#content {\n\n    align-self: center;\n    justify-self: center;\n    height: 600px;\n    width: 1000px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: auto 1fr;\n}\n\n#header {\n\n    grid-row: 1;\n    grid-column: 1/-1;\n    height: 100px;\n    border-style: solid;\n    border-width: 2px;\n}\n\n#sideBar {\n\n    grid-column: 1;\n    border-style: solid;\n    border-width: 2px;\n    grid-row: 2;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;    \n    justify-content: center;\n\n}\n\n#sideContainer {\n    \n    display: grid;\n    grid-row: 1;\n    grid-template-columns: 1fr;\n}\n\n.sideBarTitle {\n\n    border:solid 2px;\n    display: grid;\n    justify-content: center;\n    align-content: center;\n}\n\n#display {\n\n    grid-column: 2;\n    border-style: solid;\n    border-width: 2px;\n    grid-row: 2;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-auto-rows: 80px;\n    overflow-y: scroll;\n\n}\n\n#buttonContainer {\n\n    display: grid;\n    justify-content: end;\n    grid-row: 2;\n    align-content: end;\n\n}\n\n#addNewButton {\n\n    width: 60px;\n    height:40px;\n}\n\n.todo {\n\n    grid-column: 1/-1;\n    height:80px;\n    border:solid 2px;\n    display: grid;\n}\n\n.hidden {\n\n    display: none !important;\n}\n\n/*app display end */\n\n/*form stuff*/\n\n#formContainer {\n\n    position: fixed;\n    width:750px;\n    height:400px;\n    border:solid 2px;\n    display: grid;\n    justify-self: center;\n    align-self: center;\n    z-index: 1;\n    background-color: wheat;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n\n#todoForm {\n\n    border: solid 1px;\n    grid-column: 2;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    grid-template-columns: repeat(4, 1fr);\n}\n\n.title {\n\n    height:8vh;\n    grid-column: 1/-1;\n    grid-row:1;\n}\n\n.desc {\n\n    grid-column: 1/-1;\n}\n.formDate {\n\n    grid-column: 1;\n}\n#todoSubmit{\n    grid-column-end:  -1;\n}\n/*form stuff end*/\n\n\n.todoElement {\n\n\n}\n\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialLoad": () => (/* binding */ initialLoad),
/* harmony export */   "setDisplay": () => (/* binding */ setDisplay),
/* harmony export */   "toggleForm": () => (/* binding */ toggleForm)
/* harmony export */ });
/* harmony import */ var _helpers_divGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/divGenerator */ "./src/helpers/divGenerator.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");



const sideBarTitles = ["Home", "Today", "Week", "Projects", "Notes"];
let header = _helpers_divGenerator__WEBPACK_IMPORTED_MODULE_0__.divGenerator.createDiv("header");
let sidebar = _helpers_divGenerator__WEBPACK_IMPORTED_MODULE_0__.divGenerator.createDiv("sideBar");
let sideContainer = _helpers_divGenerator__WEBPACK_IMPORTED_MODULE_0__.divGenerator.createDiv("sideContainer");
let buttonContainer = _helpers_divGenerator__WEBPACK_IMPORTED_MODULE_0__.divGenerator.createDiv("buttonContainer");
let addNewButton = document.createElement("button");
let display = _helpers_divGenerator__WEBPACK_IMPORTED_MODULE_0__.divGenerator.createDiv("display");
let content = document.querySelector("#content");


let formContainer = _helpers_divGenerator__WEBPACK_IMPORTED_MODULE_0__.divGenerator.createDiv("formContainer");
formContainer.classList.add("hidden");
let form = document.createElement("FORM");
form.id = "todoForm"
let title = document.createElement("input");
title.type = "text";
title.classList.add("title")
let desc = document.createElement("input");
desc.type = "text";
desc.classList.add("desc");
let date = document.createElement("input");
date.type = "date";
date.classList.add("formDate");
//priority
let submitButton = document.createElement("input")
submitButton.setAttribute("type", "submit");
submitButton.id = "todoSubmit";
form.append(title);
form.append(desc);
form.append(date);
form.append(submitButton);
formContainer.append(form);
form.addEventListener("submit", _logic__WEBPACK_IMPORTED_MODULE_1__.formsubmit)



let initialLoad = function () {

    sidebar.appendChild(sideContainer);
    sidebar.appendChild(buttonContainer);
    buttonContainer.appendChild(addNewButton);
    addNewButton.id = "addNewButton";

    content.appendChild(header);
    content.appendChild(sidebar);
    content.appendChild(display);

    document.body.appendChild(formContainer);

    sideBarTitles.forEach((title) => {

        let currentTitle = _helpers_divGenerator__WEBPACK_IMPORTED_MODULE_0__.divGenerator.createDivWithClass("sideBarTitle");
        currentTitle.id = title;
        currentTitle.innerText = title;
        sideContainer.appendChild(currentTitle);
        currentTitle.addEventListener("click", _logic__WEBPACK_IMPORTED_MODULE_1__.titleClick);
    })

    addNewButton.addEventListener("click", _logic__WEBPACK_IMPORTED_MODULE_1__.addButtonClick);
}

let toggleForm = function () {

    formContainer.classList.toggle("hidden");
}

let setDisplay = function (todo) {

    let todoContainer = _helpers_divGenerator__WEBPACK_IMPORTED_MODULE_0__.divGenerator.createDivWithClass("todoElement");

    let checkBoxWrapper = _helpers_divGenerator__WEBPACK_IMPORTED_MODULE_0__.divGenerator.createDivWithClass("checkBoxWrapper"); //check if completed
    let titleWrapper = _helpers_divGenerator__WEBPACK_IMPORTED_MODULE_0__.divGenerator.createDivWithClass("titleWrapper"); //will hold todo title
    let descButtonWrapper = _helpers_divGenerator__WEBPACK_IMPORTED_MODULE_0__.divGenerator.createDivWithClass("descButtonWrap"); //holds a button to display a window with the description
    let iconWrap = _helpers_divGenerator__WEBPACK_IMPORTED_MODULE_0__.divGenerator.createDivWithClass("iconWrap"); //holds the bin & edit icon

    //append all the above to the container

    //then append the correct elements to each (title, descbutton, icons etc)

    //then append to the display   

    display.append(element);
}



/***/ }),

/***/ "./src/elementFactory.js":
/*!*******************************!*\
  !*** ./src/elementFactory.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementGenerator": () => (/* binding */ elementGenerator)
/* harmony export */ });
const Todo = function (title, desc, date, priority) {

    let getTitle = () => {

        return title;
    }

    let getDesc = () => {

        return desc;
    }

    let getDate = () => {

        return date;
    }

    let getPriority = () => {

        return priority;
    }

    return {
        getTitle,
        getDesc,
        getDate,
        getPriority
    }
}

const Note = (title, contents) => {


} 

const Project = (title) => {


}

const elementGenerator = function() {

const createToDo = function(title, desc, date, priority) {

    return Todo(title, desc, date, priority);

}

return {createToDo}

}



/***/ }),

/***/ "./src/helpers/divGenerator.js":
/*!*************************************!*\
  !*** ./src/helpers/divGenerator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "divGenerator": () => (/* binding */ divGenerator)
/* harmony export */ });
let divGenerator = {};

divGenerator.createDiv = (id) => {

    let div = document.createElement("div");
    div.id = id;
    return div;
}

divGenerator.createDivWithClass = (className) => {

    let div = document.createElement("div");
    div.classList.add(className);
    return div;
}

divGenerator.createTodoContainer = (todo) => {

    
}



/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addButtonClick": () => (/* binding */ addButtonClick),
/* harmony export */   "titleClick": () => (/* binding */ titleClick),
/* harmony export */   "formsubmit": () => (/* binding */ formsubmit)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _elementFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementFactory */ "./src/elementFactory.js");
/* harmony import */ var _helpers_divGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/divGenerator */ "./src/helpers/divGenerator.js");





let currentSelection = "Home";

let todoList = []; //store all todos here, then arr filter them to day/week/projects

let titleClick = function (e) {

    currentSelection = e.target.innerText;
    console.log(currentSelection);

    //will update display to the chosen module (ie projects, notes etc)  
}

let addButtonClick = function (e) {

    console.log(currentSelection);    
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.toggleForm)();


    //will add to the currently clicked display
    //so create - currentSelection - div
    //get the currentSelection type module - generate contents, add contents to div append to display
}

let formsubmit = function(e) {

    console.log(e.target.elements)
    let submitted = e.target.elements;
    let todoElements = [];
    let todoDate = "";

    for(let x = 0; x < submitted.length; x ++) {        

        if(submitted[x].type == "text") {

      
            todoElements.push(submitted[x].value)
        }   
        
        if(submitted[x].type == "date") {

           todoDate = submitted[x].value;
        }
    }

    console.log(todoElements);

  
    //needs to create a new todo with the form input
    //then append it to display
    //then reset and close form

    let newTodo = (0,_elementFactory__WEBPACK_IMPORTED_MODULE_1__.elementGenerator)().createToDo(todoElements[0], todoElements[1], todoDate, "low");
    todoList.push(newTodo)
    console.log("Title: " + newTodo.getTitle() + " Desc: " + newTodo.getDesc() + " Date: " + newTodo.getDate()  ); 
    //append to display setDisplay();
    e.preventDefault(); 
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


(0,_dom__WEBPACK_IMPORTED_MODULE_1__.initialLoad)();

//todo generator - title, desc, date, priority 
//note generator - title, contents - note section of ui will be grid auto fill style
//project generator - title
//overall controller for adding each of these (ie list.addNewProect(), list.addNewTodo() etc) -- the above 3 can be separate modules imported into a controller module
//get all contents from a form

//initial load can be its own module
//dom changes can have its own module

//adding todos

//to dos get added to either default location or current selected project - or add to default, then have an id on the todo that can also assign it to a project
//might work like  domstuff.getCurrentSelection() -- returning the currently clicked project, home etc
//<element on click> domstuff.setCurrentSelection()
//default selection == home (onload)

//sorting todos

//<date element onclick> display all todos for that date (either today or this week)
//todos get sorted by date - if date of todo is today, show it in today section of app
//default can show all todos 


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05vQjtBQUNhO0FBQ2pDLGlEQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWxlbWVudEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hlbHBlcnMvZGl2R2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXG52Mi4wIHwgMjAxMTAxMjZcXG5MaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gICAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuYm9keSB7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxufVxcbi8qIG1haW4gYXBwIGRpc3BsYXkgKi9cXG5cXG4jY29udGVudCB7XFxuXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuXFxuI2hlYWRlciB7XFxuXFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcblxcbiNzaWRlQmFyIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjsgICAgXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn1cXG5cXG4jc2lkZUNvbnRhaW5lciB7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcblxcbi5zaWRlQmFyVGl0bGUge1xcblxcbiAgICBib3JkZXI6c29saWQgMnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jZGlzcGxheSB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLWF1dG8tcm93czogODBweDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcbn1cXG5cXG4jYnV0dG9uQ29udGFpbmVyIHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBhbGlnbi1jb250ZW50OiBlbmQ7XFxuXFxufVxcblxcbiNhZGROZXdCdXR0b24ge1xcblxcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OjQwcHg7XFxufVxcblxcbi50b2RvIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGhlaWdodDo4MHB4O1xcbiAgICBib3JkZXI6c29saWQgMnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG5cXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKmFwcCBkaXNwbGF5IGVuZCAqL1xcblxcbi8qZm9ybSBzdHVmZiovXFxuXFxuI2Zvcm1Db250YWluZXIge1xcblxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOjc1MHB4O1xcbiAgICBoZWlnaHQ6NDAwcHg7XFxuICAgIGJvcmRlcjpzb2xpZCAycHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcblxcblxcbiN0b2RvRm9ybSB7XFxuXFxuICAgIGJvcmRlcjogc29saWQgMXB4O1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbn1cXG5cXG4udGl0bGUge1xcblxcbiAgICBoZWlnaHQ6OHZoO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZ3JpZC1yb3c6MTtcXG59XFxuXFxuLmRlc2Mge1xcblxcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuLmZvcm1EYXRlIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxufVxcbiN0b2RvU3VibWl0e1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6ICAtMTtcXG59XFxuLypmb3JtIHN0dWZmIGVuZCovXFxuXFxuXFxuLnRvZG9FbGVtZW50IHtcXG5cXG5cXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUZJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7SUFXSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7OztJQUlJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsYUFBYTs7QUFFakI7QUFDQSxxQkFBcUI7O0FBRXJCOztJQUVJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDRCQUE0QjtBQUNoQzs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQix1QkFBdUI7O0FBRTNCOztBQUVBOztJQUVJLGFBQWE7SUFDYixXQUFXO0lBQ1gsMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsa0JBQWtCOztBQUV0Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxrQkFBa0I7O0FBRXRCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSx3QkFBd0I7QUFDNUI7O0FBRUEsbUJBQW1COztBQUVuQixhQUFhOztBQUViOztJQUVJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7OztBQUdBOztJQUVJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxxQ0FBcUM7QUFDekM7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksY0FBYztBQUNsQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0EsaUJBQWlCOzs7QUFHakI7OztBQUdBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXFxudjIuMCB8IDIwMTEwMTI2XFxuTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICAgIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcbn1cXG4vKiBtYWluIGFwcCBkaXNwbGF5ICovXFxuXFxuI2NvbnRlbnQge1xcblxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB3aWR0aDogMTAwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxufVxcblxcbiNoZWFkZXIge1xcblxcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbn1cXG5cXG4jc2lkZUJhciB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7ICAgIFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuI3NpZGVDb250YWluZXIge1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbn1cXG5cXG4uc2lkZUJhclRpdGxlIHtcXG5cXG4gICAgYm9yZGVyOnNvbGlkIDJweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2Rpc3BsYXkge1xcblxcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDgwcHg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG59XFxuXFxuI2J1dHRvbkNvbnRhaW5lciB7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgYWxpZ24tY29udGVudDogZW5kO1xcblxcbn1cXG5cXG4jYWRkTmV3QnV0dG9uIHtcXG5cXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDo0MHB4O1xcbn1cXG5cXG4udG9kbyB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBoZWlnaHQ6ODBweDtcXG4gICAgYm9yZGVyOnNvbGlkIDJweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuXFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLyphcHAgZGlzcGxheSBlbmQgKi9cXG5cXG4vKmZvcm0gc3R1ZmYqL1xcblxcbiNmb3JtQ29udGFpbmVyIHtcXG5cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDo3NTBweDtcXG4gICAgaGVpZ2h0OjQwMHB4O1xcbiAgICBib3JkZXI6c29saWQgMnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5cXG5cXG4jdG9kb0Zvcm0ge1xcblxcbiAgICBib3JkZXI6IHNvbGlkIDFweDtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG59XFxuXFxuLnRpdGxlIHtcXG5cXG4gICAgaGVpZ2h0Ojh2aDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGdyaWQtcm93OjE7XFxufVxcblxcbi5kZXNjIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcbi5mb3JtRGF0ZSB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbn1cXG4jdG9kb1N1Ym1pdHtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAgLTE7XFxufVxcbi8qZm9ybSBzdHVmZiBlbmQqL1xcblxcblxcbi50b2RvRWxlbWVudCB7XFxuXFxuXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xuICAgIGRpdkdlbmVyYXRvclxufSBmcm9tIFwiLi9oZWxwZXJzL2RpdkdlbmVyYXRvclwiO1xuaW1wb3J0IHtcbiAgICB0aXRsZUNsaWNrLFxuICAgIGFkZEJ1dHRvbkNsaWNrLFxuICAgIGZvcm1zdWJtaXRcbn0gZnJvbSBcIi4vbG9naWNcIlxuXG5jb25zdCBzaWRlQmFyVGl0bGVzID0gW1wiSG9tZVwiLCBcIlRvZGF5XCIsIFwiV2Vla1wiLCBcIlByb2plY3RzXCIsIFwiTm90ZXNcIl07XG5sZXQgaGVhZGVyID0gZGl2R2VuZXJhdG9yLmNyZWF0ZURpdihcImhlYWRlclwiKTtcbmxldCBzaWRlYmFyID0gZGl2R2VuZXJhdG9yLmNyZWF0ZURpdihcInNpZGVCYXJcIik7XG5sZXQgc2lkZUNvbnRhaW5lciA9IGRpdkdlbmVyYXRvci5jcmVhdGVEaXYoXCJzaWRlQ29udGFpbmVyXCIpO1xubGV0IGJ1dHRvbkNvbnRhaW5lciA9IGRpdkdlbmVyYXRvci5jcmVhdGVEaXYoXCJidXR0b25Db250YWluZXJcIik7XG5sZXQgYWRkTmV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmxldCBkaXNwbGF5ID0gZGl2R2VuZXJhdG9yLmNyZWF0ZURpdihcImRpc3BsYXlcIik7XG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuXG5sZXQgZm9ybUNvbnRhaW5lciA9IGRpdkdlbmVyYXRvci5jcmVhdGVEaXYoXCJmb3JtQ29udGFpbmVyXCIpO1xuZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xubGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRk9STVwiKTtcbmZvcm0uaWQgPSBcInRvZG9Gb3JtXCJcbmxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnRpdGxlLnR5cGUgPSBcInRleHRcIjtcbnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKVxubGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5kZXNjLnR5cGUgPSBcInRleHRcIjtcbmRlc2MuY2xhc3NMaXN0LmFkZChcImRlc2NcIik7XG5sZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmRhdGUudHlwZSA9IFwiZGF0ZVwiO1xuZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZm9ybURhdGVcIik7XG4vL3ByaW9yaXR5XG5sZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG5zdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbnN1Ym1pdEJ1dHRvbi5pZCA9IFwidG9kb1N1Ym1pdFwiO1xuZm9ybS5hcHBlbmQodGl0bGUpO1xuZm9ybS5hcHBlbmQoZGVzYyk7XG5mb3JtLmFwcGVuZChkYXRlKTtcbmZvcm0uYXBwZW5kKHN1Ym1pdEJ1dHRvbik7XG5mb3JtQ29udGFpbmVyLmFwcGVuZChmb3JtKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmb3Jtc3VibWl0KVxuXG5cblxubGV0IGluaXRpYWxMb2FkID0gZnVuY3Rpb24gKCkge1xuXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlQ29udGFpbmVyKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZE5ld0J1dHRvbik7XG4gICAgYWRkTmV3QnV0dG9uLmlkID0gXCJhZGROZXdCdXR0b25cIjtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlzcGxheSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXG4gICAgc2lkZUJhclRpdGxlcy5mb3JFYWNoKCh0aXRsZSkgPT4ge1xuXG4gICAgICAgIGxldCBjdXJyZW50VGl0bGUgPSBkaXZHZW5lcmF0b3IuY3JlYXRlRGl2V2l0aENsYXNzKFwic2lkZUJhclRpdGxlXCIpO1xuICAgICAgICBjdXJyZW50VGl0bGUuaWQgPSB0aXRsZTtcbiAgICAgICAgY3VycmVudFRpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgICAgICBzaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRUaXRsZSk7XG4gICAgICAgIGN1cnJlbnRUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGl0bGVDbGljayk7XG4gICAgfSlcblxuICAgIGFkZE5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkQnV0dG9uQ2xpY2spO1xufVxuXG5sZXQgdG9nZ2xlRm9ybSA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn1cblxubGV0IHNldERpc3BsYXkgPSBmdW5jdGlvbiAodG9kbykge1xuXG4gICAgbGV0IHRvZG9Db250YWluZXIgPSBkaXZHZW5lcmF0b3IuY3JlYXRlRGl2V2l0aENsYXNzKFwidG9kb0VsZW1lbnRcIik7XG5cbiAgICBsZXQgY2hlY2tCb3hXcmFwcGVyID0gZGl2R2VuZXJhdG9yLmNyZWF0ZURpdldpdGhDbGFzcyhcImNoZWNrQm94V3JhcHBlclwiKTsgLy9jaGVjayBpZiBjb21wbGV0ZWRcbiAgICBsZXQgdGl0bGVXcmFwcGVyID0gZGl2R2VuZXJhdG9yLmNyZWF0ZURpdldpdGhDbGFzcyhcInRpdGxlV3JhcHBlclwiKTsgLy93aWxsIGhvbGQgdG9kbyB0aXRsZVxuICAgIGxldCBkZXNjQnV0dG9uV3JhcHBlciA9IGRpdkdlbmVyYXRvci5jcmVhdGVEaXZXaXRoQ2xhc3MoXCJkZXNjQnV0dG9uV3JhcFwiKTsgLy9ob2xkcyBhIGJ1dHRvbiB0byBkaXNwbGF5IGEgd2luZG93IHdpdGggdGhlIGRlc2NyaXB0aW9uXG4gICAgbGV0IGljb25XcmFwID0gZGl2R2VuZXJhdG9yLmNyZWF0ZURpdldpdGhDbGFzcyhcImljb25XcmFwXCIpOyAvL2hvbGRzIHRoZSBiaW4gJiBlZGl0IGljb25cblxuICAgIC8vYXBwZW5kIGFsbCB0aGUgYWJvdmUgdG8gdGhlIGNvbnRhaW5lclxuXG4gICAgLy90aGVuIGFwcGVuZCB0aGUgY29ycmVjdCBlbGVtZW50cyB0byBlYWNoICh0aXRsZSwgZGVzY2J1dHRvbiwgaWNvbnMgZXRjKVxuXG4gICAgLy90aGVuIGFwcGVuZCB0byB0aGUgZGlzcGxheSAgIFxuXG4gICAgZGlzcGxheS5hcHBlbmQoZWxlbWVudCk7XG59XG5cbmV4cG9ydCB7XG4gICAgaW5pdGlhbExvYWQsXG4gICAgc2V0RGlzcGxheSxcbiAgICB0b2dnbGVGb3JtXG59IiwiY29uc3QgVG9kbyA9IGZ1bmN0aW9uICh0aXRsZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpIHtcblxuICAgIGxldCBnZXRUaXRsZSA9ICgpID0+IHtcblxuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuXG4gICAgbGV0IGdldERlc2MgPSAoKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIGRlc2M7XG4gICAgfVxuXG4gICAgbGV0IGdldERhdGUgPSAoKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuXG4gICAgbGV0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuXG4gICAgICAgIHJldHVybiBwcmlvcml0eTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRUaXRsZSxcbiAgICAgICAgZ2V0RGVzYyxcbiAgICAgICAgZ2V0RGF0ZSxcbiAgICAgICAgZ2V0UHJpb3JpdHlcbiAgICB9XG59XG5cbmNvbnN0IE5vdGUgPSAodGl0bGUsIGNvbnRlbnRzKSA9PiB7XG5cblxufSBcblxuY29uc3QgUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuXG5cbn1cblxuY29uc3QgZWxlbWVudEdlbmVyYXRvciA9IGZ1bmN0aW9uKCkge1xuXG5jb25zdCBjcmVhdGVUb0RvID0gZnVuY3Rpb24odGl0bGUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KSB7XG5cbiAgICByZXR1cm4gVG9kbyh0aXRsZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xuXG59XG5cbnJldHVybiB7Y3JlYXRlVG9Eb31cblxufVxuXG5leHBvcnQge1xuICAgIGVsZW1lbnRHZW5lcmF0b3Jcbn0iLCJsZXQgZGl2R2VuZXJhdG9yID0ge307XG5cbmRpdkdlbmVyYXRvci5jcmVhdGVEaXYgPSAoaWQpID0+IHtcblxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5pZCA9IGlkO1xuICAgIHJldHVybiBkaXY7XG59XG5cbmRpdkdlbmVyYXRvci5jcmVhdGVEaXZXaXRoQ2xhc3MgPSAoY2xhc3NOYW1lKSA9PiB7XG5cbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybiBkaXY7XG59XG5cbmRpdkdlbmVyYXRvci5jcmVhdGVUb2RvQ29udGFpbmVyID0gKHRvZG8pID0+IHtcblxuICAgIFxufVxuXG5leHBvcnQge1xuICAgIGRpdkdlbmVyYXRvclxufSIsImltcG9ydCB7XG4gICAgc2V0RGlzcGxheSxcbiAgICB0b2dnbGVGb3JtXG59IGZyb20gXCIuL2RvbVwiXG5pbXBvcnQge1xuICAgIGVsZW1lbnRHZW5lcmF0b3Jcbn0gZnJvbSBcIi4vZWxlbWVudEZhY3RvcnlcIlxuaW1wb3J0IHtcbiAgICBkaXZHZW5lcmF0b3Jcbn0gZnJvbSBcIi4vaGVscGVycy9kaXZHZW5lcmF0b3JcIlxuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmxldCBjdXJyZW50U2VsZWN0aW9uID0gXCJIb21lXCI7XG5cbmxldCB0b2RvTGlzdCA9IFtdOyAvL3N0b3JlIGFsbCB0b2RvcyBoZXJlLCB0aGVuIGFyciBmaWx0ZXIgdGhlbSB0byBkYXkvd2Vlay9wcm9qZWN0c1xuXG5sZXQgdGl0bGVDbGljayA9IGZ1bmN0aW9uIChlKSB7XG5cbiAgICBjdXJyZW50U2VsZWN0aW9uID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTZWxlY3Rpb24pO1xuXG4gICAgLy93aWxsIHVwZGF0ZSBkaXNwbGF5IHRvIHRoZSBjaG9zZW4gbW9kdWxlIChpZSBwcm9qZWN0cywgbm90ZXMgZXRjKSAgXG59XG5cbmxldCBhZGRCdXR0b25DbGljayA9IGZ1bmN0aW9uIChlKSB7XG5cbiAgICBjb25zb2xlLmxvZyhjdXJyZW50U2VsZWN0aW9uKTsgICAgXG4gICAgdG9nZ2xlRm9ybSgpO1xuXG5cbiAgICAvL3dpbGwgYWRkIHRvIHRoZSBjdXJyZW50bHkgY2xpY2tlZCBkaXNwbGF5XG4gICAgLy9zbyBjcmVhdGUgLSBjdXJyZW50U2VsZWN0aW9uIC0gZGl2XG4gICAgLy9nZXQgdGhlIGN1cnJlbnRTZWxlY3Rpb24gdHlwZSBtb2R1bGUgLSBnZW5lcmF0ZSBjb250ZW50cywgYWRkIGNvbnRlbnRzIHRvIGRpdiBhcHBlbmQgdG8gZGlzcGxheVxufVxuXG5sZXQgZm9ybXN1Ym1pdCA9IGZ1bmN0aW9uKGUpIHtcblxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmVsZW1lbnRzKVxuICAgIGxldCBzdWJtaXR0ZWQgPSBlLnRhcmdldC5lbGVtZW50cztcbiAgICBsZXQgdG9kb0VsZW1lbnRzID0gW107XG4gICAgbGV0IHRvZG9EYXRlID0gXCJcIjtcblxuICAgIGZvcihsZXQgeCA9IDA7IHggPCBzdWJtaXR0ZWQubGVuZ3RoOyB4ICsrKSB7ICAgICAgICBcblxuICAgICAgICBpZihzdWJtaXR0ZWRbeF0udHlwZSA9PSBcInRleHRcIikge1xuXG4gICAgICBcbiAgICAgICAgICAgIHRvZG9FbGVtZW50cy5wdXNoKHN1Ym1pdHRlZFt4XS52YWx1ZSlcbiAgICAgICAgfSAgIFxuICAgICAgICBcbiAgICAgICAgaWYoc3VibWl0dGVkW3hdLnR5cGUgPT0gXCJkYXRlXCIpIHtcblxuICAgICAgICAgICB0b2RvRGF0ZSA9IHN1Ym1pdHRlZFt4XS52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHRvZG9FbGVtZW50cyk7XG5cbiAgXG4gICAgLy9uZWVkcyB0byBjcmVhdGUgYSBuZXcgdG9kbyB3aXRoIHRoZSBmb3JtIGlucHV0XG4gICAgLy90aGVuIGFwcGVuZCBpdCB0byBkaXNwbGF5XG4gICAgLy90aGVuIHJlc2V0IGFuZCBjbG9zZSBmb3JtXG5cbiAgICBsZXQgbmV3VG9kbyA9IGVsZW1lbnRHZW5lcmF0b3IoKS5jcmVhdGVUb0RvKHRvZG9FbGVtZW50c1swXSwgdG9kb0VsZW1lbnRzWzFdLCB0b2RvRGF0ZSwgXCJsb3dcIik7XG4gICAgdG9kb0xpc3QucHVzaChuZXdUb2RvKVxuICAgIGNvbnNvbGUubG9nKFwiVGl0bGU6IFwiICsgbmV3VG9kby5nZXRUaXRsZSgpICsgXCIgRGVzYzogXCIgKyBuZXdUb2RvLmdldERlc2MoKSArIFwiIERhdGU6IFwiICsgbmV3VG9kby5nZXREYXRlKCkgICk7IFxuICAgIC8vYXBwZW5kIHRvIGRpc3BsYXkgc2V0RGlzcGxheSgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgXG59XG5cblxuZXhwb3J0IHtcbiAgICBhZGRCdXR0b25DbGljayxcbiAgICB0aXRsZUNsaWNrLFxuICAgIGZvcm1zdWJtaXRcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0IHtpbml0aWFsTG9hZH0gZnJvbSBcIi4vZG9tXCJcbmluaXRpYWxMb2FkKCk7XG5cbi8vdG9kbyBnZW5lcmF0b3IgLSB0aXRsZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkgXG4vL25vdGUgZ2VuZXJhdG9yIC0gdGl0bGUsIGNvbnRlbnRzIC0gbm90ZSBzZWN0aW9uIG9mIHVpIHdpbGwgYmUgZ3JpZCBhdXRvIGZpbGwgc3R5bGVcbi8vcHJvamVjdCBnZW5lcmF0b3IgLSB0aXRsZVxuLy9vdmVyYWxsIGNvbnRyb2xsZXIgZm9yIGFkZGluZyBlYWNoIG9mIHRoZXNlIChpZSBsaXN0LmFkZE5ld1Byb2VjdCgpLCBsaXN0LmFkZE5ld1RvZG8oKSBldGMpIC0tIHRoZSBhYm92ZSAzIGNhbiBiZSBzZXBhcmF0ZSBtb2R1bGVzIGltcG9ydGVkIGludG8gYSBjb250cm9sbGVyIG1vZHVsZVxuLy9nZXQgYWxsIGNvbnRlbnRzIGZyb20gYSBmb3JtXG5cbi8vaW5pdGlhbCBsb2FkIGNhbiBiZSBpdHMgb3duIG1vZHVsZVxuLy9kb20gY2hhbmdlcyBjYW4gaGF2ZSBpdHMgb3duIG1vZHVsZVxuXG4vL2FkZGluZyB0b2Rvc1xuXG4vL3RvIGRvcyBnZXQgYWRkZWQgdG8gZWl0aGVyIGRlZmF1bHQgbG9jYXRpb24gb3IgY3VycmVudCBzZWxlY3RlZCBwcm9qZWN0IC0gb3IgYWRkIHRvIGRlZmF1bHQsIHRoZW4gaGF2ZSBhbiBpZCBvbiB0aGUgdG9kbyB0aGF0IGNhbiBhbHNvIGFzc2lnbiBpdCB0byBhIHByb2plY3Rcbi8vbWlnaHQgd29yayBsaWtlICBkb21zdHVmZi5nZXRDdXJyZW50U2VsZWN0aW9uKCkgLS0gcmV0dXJuaW5nIHRoZSBjdXJyZW50bHkgY2xpY2tlZCBwcm9qZWN0LCBob21lIGV0Y1xuLy88ZWxlbWVudCBvbiBjbGljaz4gZG9tc3R1ZmYuc2V0Q3VycmVudFNlbGVjdGlvbigpXG4vL2RlZmF1bHQgc2VsZWN0aW9uID09IGhvbWUgKG9ubG9hZClcblxuLy9zb3J0aW5nIHRvZG9zXG5cbi8vPGRhdGUgZWxlbWVudCBvbmNsaWNrPiBkaXNwbGF5IGFsbCB0b2RvcyBmb3IgdGhhdCBkYXRlIChlaXRoZXIgdG9kYXkgb3IgdGhpcyB3ZWVrKVxuLy90b2RvcyBnZXQgc29ydGVkIGJ5IGRhdGUgLSBpZiBkYXRlIG9mIHRvZG8gaXMgdG9kYXksIHNob3cgaXQgaW4gdG9kYXkgc2VjdGlvbiBvZiBhcHBcbi8vZGVmYXVsdCBjYW4gc2hvdyBhbGwgdG9kb3MgXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==