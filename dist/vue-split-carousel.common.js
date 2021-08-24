module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "4365":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9c14");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("695b58f8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "495c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("c222");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("7c209f58", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "54c6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SplitCarousel_vue_vue_type_style_index_0_id_3b1d70bc_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4365");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SplitCarousel_vue_vue_type_style_index_0_id_3b1d70bc_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SplitCarousel_vue_vue_type_style_index_0_id_3b1d70bc_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "9c14":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".split-carousel[data-v-3b1d70bc]{display:flex;width:100%;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.split-carousel__viewport[data-v-3b1d70bc]{flex-grow:1;overflow:hidden;align-self:stretch;position:relative}.split-carousel__viewport--static[data-v-3b1d70bc]{display:flex;align-items:center;justify-content:space-between}.split-carousel__viewport--static[data-v-3b1d70bc] .split-carousel__item{align-self:stretch}.split-carousel__left[data-v-3b1d70bc],.split-carousel__right[data-v-3b1d70bc]{align-self:center;padding:5px}.split-carousel__left-button[data-v-3b1d70bc],.split-carousel__right-button[data-v-3b1d70bc]{height:30px;width:30px;text-align:center;line-height:30px;border:1px solid #dcdfe6;border-radius:50%;cursor:pointer;background-color:#fff;transition:border-color,background-color .15s;display:flex;align-items:center;justify-content:center}.split-carousel__left-button[data-v-3b1d70bc]:hover,.split-carousel__right-button[data-v-3b1d70bc]:hover{border-color:#c6e2ff;background-color:#ecf5ff}.split-carousel__left-button:hover .arrow[data-v-3b1d70bc],.split-carousel__right-button:hover .arrow[data-v-3b1d70bc]{border-top-color:#c6e2ff;border-left-color:#c6e2ff}.arrow[data-v-3b1d70bc]{height:6px;width:6px;border:2px solid;transition:border-color .15s;border-top-color:#dcdfe6;border-left-color:#dcdfe6;border-right-color:transparent;border-bottom-color:transparent}.arrow.left[data-v-3b1d70bc]{transform:translateX(2px) rotate(-45deg)}.arrow.right[data-v-3b1d70bc]{transform:translateX(-2px) rotate(135deg)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "a3af":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SplitCarouselItem_vue_vue_type_style_index_0_id_75895804_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("495c");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SplitCarouselItem_vue_vue_type_style_index_0_id_75895804_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SplitCarouselItem_vue_vue_type_style_index_0_id_75895804_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c222":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".split-carousel__item[data-v-75895804]{display:none;transition-property:transform;will-change:transfrom}.split-carousel__item--transition[data-v-75895804]{position:absolute;left:0;top:0;height:100%}.split-carousel__item--stag[data-v-75895804]{display:block}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SplitCarousel.vue?vue&type=template&id=3b1d70bc&scoped=true


const _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withScopeId"])("data-v-3b1d70bc");

Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-3b1d70bc");

const _hoisted_1 = {
  key: 1,
  class: "split-carousel__left-button"
};

const _hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "arrow left"
}, null, -1);

const _hoisted_3 = {
  key: 1,
  class: "split-carousel__right-button"
};

const _hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "arrow right"
}, null, -1);

Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: "split-carousel",
    style: {
      height: `${typeof _ctx.height === 'string' ? _ctx.height : `${_ctx.height}px`}`
    }
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: "split-carousel__left",
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.prev && _ctx.prev(...args))
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", null, [_ctx.hasLeftSlot ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "left", {
    key: 0
  }, undefined, true) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("button", _hoisted_1, [_hoisted_2]))], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isLeftArrowVisiable]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    ref: "viewportDOMRef",
    class: ["split-carousel__viewport", {
      'split-carousel__viewport--static': _ctx.layout.isStatic
    }],
    onMouseenter: _cache[2] || (_cache[2] = (...args) => _ctx.enter && _ctx.enter(...args)),
    onMouseleave: _cache[3] || (_cache[3] = (...args) => _ctx.leave && _ctx.leave(...args))
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {}, undefined, true)], 34), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: "split-carousel__right",
    onClick: _cache[4] || (_cache[4] = (...args) => _ctx.next && _ctx.next(...args))
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", null, [_ctx.hasRightSlot ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "right", {
    key: 0
  }, undefined, true) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("button", _hoisted_3, [_hoisted_4]))], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isRightArrowVisiable]])])], 4);
});
// CONCATENATED MODULE: ./src/components/SplitCarousel.vue?vue&type=template&id=3b1d70bc&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SplitCarousel.vue?vue&type=script&lang=ts

/* harmony default export */ var SplitCarouselvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "SplitCarousel",
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 500
    },
    interval: {
      type: Number,
      default: 3000
    },
    loop: {
      type: Boolean,
      default: true
    },
    displayAmount: {
      type: Number,
      default: 4
    },
    height: {
      type: [Number, String],
      default: 80
    },
    itemWidth: {
      type: Number,
      default: 120
    },
    pauseOnHover: {
      type: Boolean,
      default: true
    },
    timingFunction: {
      type: String,
      default: "ease"
    },
    arrowVisible: {
      type: String,
      validator: i => ["default", "always"].includes(i),
      default: "default"
    }
  },

  setup(props, context) {
    const viewportDOMRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    const items = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])([]);

    const addItem = item => items.value.push(item);

    const removeItem = uid => {
      const index = items.value.findIndex(item => item.uid === uid);

      if (index !== -1) {
        items.value.splice(index, 1);
      }
    }; // layout


    const viewportWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
    const layout = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      const gapWidth = (viewportWidth.value - props.itemWidth * props.displayAmount) / (props.displayAmount - 1);
      const itemBlockWidth = gapWidth + props.itemWidth;
      return {
        isStatic: items.value.length <= props.displayAmount,
        gapWidth,
        viewportWidth: viewportWidth.value,
        itemWidth: props.itemWidth,
        itemBlockWidth,
        prependPosition: -1 * itemBlockWidth,
        appendPostion: viewportWidth.value + gapWidth
      };
    }); // index

    const activeIndex = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
    const isLastIndex = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => activeIndex.value + props.displayAmount === items.value.length);
    const isFirstIndex = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => activeIndex.value === 0);
    const isNeedReset = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => props.displayAmount + 2 >= items.value.length);
    const reset = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
      resetting: false,
      action: "next"
    });
    const stag = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      var _list2, _list3;

      const index = activeIndex.value;
      const list = items.value;
      const endIndex = list.length - 1;
      const stagUids = Array.from({
        length: props.displayAmount
      }).map((v, offset) => {
        var _list;

        return (_list = list[(index + offset) % list.length]) === null || _list === void 0 ? void 0 : _list.uid;
      });
      const result = {
        prependUid: (_list2 = list[isFirstIndex.value ? endIndex : index - 1]) === null || _list2 === void 0 ? void 0 : _list2.uid,
        stagUids,
        appendUid: (_list3 = list[(index + props.displayAmount) % list.length]) === null || _list3 === void 0 ? void 0 : _list3.uid
      };

      if (result.prependUid === result.appendUid) {
        const invalidUid = -1;

        if (reset.action === "prev") {
          result.prependUid = invalidUid;
        }

        if (reset.action === "next") {
          result.appendUid = invalidUid;
        }
      }

      return result;
    });
    const refsProps = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toRefs"])(props);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])("injectCarouselScope", {
      speed: refsProps.speed,
      timingFunction: refsProps.timingFunction,
      stag,
      reset,
      addItem,
      removeItem,
      layout
    }); //arrow

    const isLeftArrowVisiable = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      if (props.arrowVisible === "default") {
        if (layout.value.isStatic) {
          return false;
        }

        if (isFirstIndex.value && !props.loop) {
          return false;
        }
      }

      return true;
    });
    const isRightArrowVisiable = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      if (props.arrowVisible === "default") {
        if (layout.value.isStatic) {
          return false;
        }

        if (isLastIndex.value && !props.loop) {
          return false;
        }
      }

      return true;
    }); // play method

    const slide = action => {
      if (layout.value.isStatic) return;

      if (!props.loop) {
        if (action === "next" && isLastIndex.value) return;
        if (action === "prev" && isFirstIndex.value) return;
      }

      const setIndex = () => {
        if (action === "next") {
          activeIndex.value = (activeIndex.value + 1) % items.value.length;
        }

        if (action === "prev") {
          activeIndex.value = isFirstIndex.value ? items.value.length - 1 : activeIndex.value - 1;
        }
      };

      if (!isNeedReset.value) {
        setIndex();
        return;
      }

      reset.resetting = true;
      reset.action = action;
      requestAnimationFrame(() => {
        // this frame setting edge item position
        requestAnimationFrame(() => {
          reset.resetting = false;
          setIndex();
        });
      });
    };

    let timer;

    const next = () => {
      clearTimeout(timer);
      slide("next");

      if (props.autoplay) {
        timer = setTimeout(() => next(), props.interval);
      }
    };

    const prev = () => {
      clearTimeout(timer);
      slide("prev");

      if (props.autoplay) {
        timer = setTimeout(() => prev(), props.interval);
      }
    };

    const enter = () => {
      if (props.autoplay && props.pauseOnHover) {
        clearTimeout(timer);
      }
    };

    const leave = () => {
      if (props.autoplay && props.pauseOnHover) {
        clearTimeout(timer);
        timer = setTimeout(() => next(), props.interval);
      }
    }; // autoplay


    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.autoplay, autoplay => {
      if (autoplay) {
        timer = setTimeout(() => next(), props.interval);
      } else {
        clearTimeout(timer);
      }
    });

    const handlePageVisiblityChange = () => {
      if (document.visibilityState === "hidden") {
        clearTimeout(timer);
      }

      if (document.visibilityState === "visible" && props.autoplay) {
        timer = setTimeout(() => next(), props.interval);
      }
    }; // init layout,handle page visibility


    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(() => {
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(() => {
        if (viewportDOMRef.value !== null) {
          viewportWidth.value = viewportDOMRef.value.clientWidth;
        }

        if (props.autoplay) {
          timer = setTimeout(() => next(), props.interval);
        }

        document.addEventListener("visibilitychange", handlePageVisiblityChange);
      });
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(() => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", handlePageVisiblityChange);
    });
    return {
      prev,
      next,
      enter,
      leave,
      layout,
      viewportDOMRef,
      hasLeftSlot: context.slots.left !== undefined,
      hasRightSlot: context.slots.right !== undefined,
      isLeftArrowVisiable,
      isRightArrowVisiable
    };
  }

}));
// CONCATENATED MODULE: ./src/components/SplitCarousel.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./src/components/SplitCarousel.vue?vue&type=style&index=0&id=3b1d70bc&scoped=true&lang=scss
var SplitCarouselvue_type_style_index_0_id_3b1d70bc_scoped_true_lang_scss = __webpack_require__("54c6");

// CONCATENATED MODULE: ./src/components/SplitCarousel.vue





SplitCarouselvue_type_script_lang_ts.render = render
SplitCarouselvue_type_script_lang_ts.__scopeId = "data-v-3b1d70bc"

/* harmony default export */ var SplitCarousel = (SplitCarouselvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SplitCarouselItem.vue?vue&type=template&id=75895804&scoped=true


const SplitCarouselItemvue_type_template_id_75895804_scoped_true_withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withScopeId"])("data-v-75895804");

const SplitCarouselItemvue_type_template_id_75895804_scoped_true_render = /*#__PURE__*/SplitCarouselItemvue_type_template_id_75895804_scoped_true_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ["split-carousel__item", {
      'split-carousel__item--transition': !_ctx.layout.isStatic
    }],
    style: _ctx.itemStyle
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {}, undefined, true)], 6);
});
// CONCATENATED MODULE: ./src/components/SplitCarouselItem.vue?vue&type=template&id=75895804&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SplitCarouselItem.vue?vue&type=script&lang=ts

/* harmony default export */ var SplitCarouselItemvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "SplitCarouselItem",

  setup() {
    const instance = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["getCurrentInstance"])();
    const injectCarouselScope = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("injectCarouselScope");
    const isMounted = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);

    if (!instance || !injectCarouselScope) {
      throw Error("SplitCarouselItem Must include by SplitCarousel");
    }

    const {
      layout,
      stag,
      reset,
      addItem,
      removeItem
    } = injectCarouselScope; // register/unregister

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(() => {
      addItem({
        uid: instance.uid
      });
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isMounted.value = true;
        });
      });
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(() => {
      removeItem(instance.uid);
    }); // itemStyle

    const isPrepend = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => instance.uid === stag.value.prependUid);
    const isAppend = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => instance.uid === stag.value.appendUid);
    const stagIndex = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return stag.value.stagUids.findIndex(uid => uid === instance.uid);
    });
    const inStag = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => stagIndex.value !== -1);
    const noAnimate = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      if (!isMounted.value) {
        return true;
      }

      if (reset.resetting) {
        return true;
      }

      return false;
    });
    const itemStyle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      const {
        itemWidth,
        isStatic,
        itemBlockWidth,
        appendPostion,
        prependPosition
      } = layout.value;
      let style = {
        width: `${itemWidth}px`,
        transitionDuration: `${noAnimate.value ? 0 : injectCarouselScope.speed.value}ms`,
        transitionTimingFunction: injectCarouselScope.timingFunction.value
      };

      if (isStatic) {
        style.display = "block";
        return style;
      }

      if (inStag.value) {
        style = { ...style,
          display: "block",
          transform: `translateX(${stagIndex.value * itemBlockWidth}px)`
        };
      }

      if (isPrepend.value) {
        const needReset = reset.resetting && reset.action === "next";
        style = { ...style,
          display: "block",
          transform: `translateX(${needReset ? appendPostion : prependPosition}px)`
        };
      }

      if (isAppend.value) {
        const needReset = reset.resetting && reset.action === "prev";
        style = { ...style,
          display: "block",
          transform: `translateX(${needReset ? prependPosition : appendPostion}px)`
        };
      }

      return style;
    });
    return {
      itemStyle,
      layout
    };
  }

}));
// CONCATENATED MODULE: ./src/components/SplitCarouselItem.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./src/components/SplitCarouselItem.vue?vue&type=style&index=0&id=75895804&scoped=true&lang=scss
var SplitCarouselItemvue_type_style_index_0_id_75895804_scoped_true_lang_scss = __webpack_require__("a3af");

// CONCATENATED MODULE: ./src/components/SplitCarouselItem.vue





SplitCarouselItemvue_type_script_lang_ts.render = SplitCarouselItemvue_type_template_id_75895804_scoped_true_render
SplitCarouselItemvue_type_script_lang_ts.__scopeId = "data-v-75895804"

/* harmony default export */ var SplitCarouselItem = (SplitCarouselItemvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/bundle-entry.ts



const install = (app, option) => {
  const prefix = (option === null || option === void 0 ? void 0 : option.prefix) || "";
  app.component(`${prefix}SplitCarousel`, SplitCarousel);
  app.component(`${prefix}SplitCarouselItem`, SplitCarouselItem);
};

/* harmony default export */ var bundle_entry = ({
  SplitCarousel: SplitCarousel,
  SplitCarouselItem: SplitCarouselItem,
  install
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (bundle_entry);



/***/ })

/******/ });