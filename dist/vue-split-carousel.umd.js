(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueSplitCarousel"] = factory();
	else
		root["vueSplitCarousel"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(3)(function () {
  return Object.defineProperty({}, 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

var core = __webpack_require__(9);

var hide = __webpack_require__(15);

var redefine = __webpack_require__(19);

var ctx = __webpack_require__(22);

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

    if (target) redefine(target, key, out, type & $export.U); // export

    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

global.core = core; // type bitmap

$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.6.5'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);

var IE8_DOM_DEFINE = __webpack_require__(16);

var toPrimitive = __webpack_require__(11);

var dP = Object.defineProperty;
exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(2); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(28);

var defined = __webpack_require__(12);

module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);

var createDesc = __webpack_require__(18);

module.exports = __webpack_require__(1) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(3)(function () {
  return Object.defineProperty(__webpack_require__(17)('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

var document = __webpack_require__(0).document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

var hide = __webpack_require__(15);

var has = __webpack_require__(5);

var SRC = __webpack_require__(20)('src');

var $toString = __webpack_require__(34);

var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(9).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(9);

var global = __webpack_require__(0);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(35) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(36);

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);

var defined = __webpack_require__(12);

var fails = __webpack_require__(3);

var spaces = __webpack_require__(24);

var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
}; // 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim


var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ }),
/* 25 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(27);

var createDesc = __webpack_require__(18);

var toIObject = __webpack_require__(13);

var toPrimitive = __webpack_require__(11);

var has = __webpack_require__(5);

var IE8_DOM_DEFINE = __webpack_require__(16);

var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __webpack_require__(1) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {
    /* empty */
  }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(25); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);

var toIObject = __webpack_require__(13);

var arrayIndexOf = __webpack_require__(42)(false);

var IE_PROTO = __webpack_require__(31)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key); // Don't enum bug & hidden keys


  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }

  return result;
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(21)('keys');

var uid = __webpack_require__(20);

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(29);

var enumBugKeys = __webpack_require__(14);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);

var $parseInt = __webpack_require__(37); // 20.1.2.13 Number.parseInt(string, radix)


$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {
  parseInt: $parseInt
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21)('native-function-to-string', Function.toString);

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(0).parseInt;

var $trim = __webpack_require__(23).trim;

var ws = __webpack_require__(24);

var hex = /^[-+]?0[xX]/;
module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
} : $parseInt;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(0);

var has = __webpack_require__(5);

var cof = __webpack_require__(25);

var inheritIfRequired = __webpack_require__(39);

var toPrimitive = __webpack_require__(11);

var fails = __webpack_require__(3);

var gOPN = __webpack_require__(41).f;

var gOPD = __webpack_require__(26).f;

var dP = __webpack_require__(10).f;

var $trim = __webpack_require__(23).trim;

var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype; // Opera ~12 has broken Object#toString

var BROKEN_COF = cof(__webpack_require__(45)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype; // 7.1.3 ToNumber(argument)

var toNumber = function (argument) {
  var it = toPrimitive(argument, false);

  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;

    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        // fast equal /^0b[01]+$/i

        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        // fast equal /^0o[0-7]+$/i

        default:
          return +it;
      }

      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i); // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols

        if (code < 48 || code > maxCode) return NaN;
      }

      return parseInt(digits, radix);
    }
  }

  return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number // check on 1..constructor(foo) case
    && (BROKEN_COF ? fails(function () {
      proto.valueOf.call(that);
    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };

  for (var keys = __webpack_require__(1) ? gOPN(Base) : ( // ES3:
  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES6 (in case, if modules with ES6 Number statics required before):
  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }

  $Number.prototype = proto;
  proto.constructor = $Number;

  __webpack_require__(19)(global, NUMBER, $Number);
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

var setPrototypeOf = __webpack_require__(40).set;

module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;

  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }

  return that;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */
var isObject = __webpack_require__(2);

var anObject = __webpack_require__(4);

var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};

module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(22)(Function.call, __webpack_require__(26).f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }

    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(29);

var hiddenKeys = __webpack_require__(14).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(13);

var toLength = __webpack_require__(43);

var toAbsoluteIndex = __webpack_require__(44);

module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(30);

var min = Math.min;

module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(30);

var max = Math.max;
var min = Math.min;

module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(4);

var dPs = __webpack_require__(46);

var enumBugKeys = __webpack_require__(14);

var IE_PROTO = __webpack_require__(31)('IE_PROTO');

var Empty = function () {
  /* empty */
};

var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(17)('iframe');

  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';

  __webpack_require__(47).appendChild(iframe);

  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);

  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;

  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];

  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = createDict();

  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);

var anObject = __webpack_require__(4);

var getKeys = __webpack_require__(32);

module.exports = __webpack_require__(1) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;

  while (length > i) dP.f(O, P = keys[i++], Properties[P]);

  return O;
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;

module.exports = document && document.documentElement;

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(8);

$export($export.S + $export.F, 'Object', {
  assign: __webpack_require__(50)
});

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.2.1 Object.assign(target, source, ...)

var getKeys = __webpack_require__(32);

var gOPS = __webpack_require__(51);

var pIE = __webpack_require__(27);

var toObject = __webpack_require__(52);

var IObject = __webpack_require__(28);

var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

module.exports = !$assign || __webpack_require__(3)(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;

  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  }

  return T;
} : $assign;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(12);

module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/split-carousel/index.vue?vue&type=template&id=072aecd9&
var render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"split-carousel",style:({padding:("0 " + _vm.arrowAreaWidth + _vm.cssUnit)})},[_c('div',{staticClass:"arrow-control left-arrow",on:{"click":function($event){return _vm.handleControl('left')}}},[(_vm.$slots['left-arrow'] === void 0)?_c('div',[_vm._v("\n      left\n    ")]):_vm._t("left-arrow")],2),_vm._v(" "),_c('div',{staticClass:"content",on:{"mouseenter":function($event){return _vm.cancelPlay()},"mouseleave":function($event){return _vm.play()}}},[_c('div',{staticClass:"content--container",class:( _obj = {}, _obj[("content--container__" + _vm.itemAlign)] = _vm.isStaticMode, _obj ),style:({
           'width':("" + (_vm.isStaticMode ? 'auto':("" + ((_vm.itemWidthWithSpace)*(_vm.displayAmount+2)) + _vm.cssUnit))),
           'margin-left': ("" + (_vm.isStaticMode ? 0 :-(_vm.itemWidthWithSpace)) + _vm.cssUnit),
           'height':("" + _vm.height + _vm.cssUnit)
         })},[_vm._t("default")],2)]),_vm._v(" "),_c('div',{staticClass:"arrow-control right-arrow",on:{"click":function($event){return _vm.handleControl('right')}}},[(_vm.$slots['right-arrow'] === void 0)?_c('div',[_vm._v("\n      right\n    ")]):_vm._t("right-arrow")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/split-carousel/index.vue?vue&type=template&id=072aecd9&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.parse-int.js
var es6_number_parse_int = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/split-carousel/index.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var split_carouselvue_type_script_lang_js_ = ({
  props: {
    /* play */
    speed: {
      type: Number,
      default: 500
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    hoverCanclePlay: {
      type: Boolean,
      default: true
    },
    playDirection: {
      default: 'ltr',
      validator: function validator(val) {
        return ['rtl', 'ltr'].indexOf(val) !== -1;
      }
    },
    interval: {
      type: Number,
      default: 3000
    },
    loop: {
      type: Boolean,
      default: true
    },
    startIndex: {
      type: Number,
      default: 0
    },

    /* style unit */
    cssUnit: {
      type: String,
      default: 'px'
    },
    height: {
      type: Number,
      default: 80
    },

    /* arrow controller */
    arrowAreaWidth: {
      type: Number,
      default: 50
    },

    /* item */
    timingFunction: {
      type: String,
      default: 'easein'
    },
    displayAmount: {
      type: Number,
      default: 1
    },
    itemWidth: {
      type: Number,
      default: 120
    },
    itemAlign: {
      validator: function validator(value) {
        return ['center', 'left', 'right'].indexOf(value) !== -1;
      },
      default: 'center'
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.initCarousel();
    setTimeout(function () {
      _this.isInit = true;

      if (_this.autoplay) {
        _this.play();
      }
    }, 16);
  },
  destroyed: function destroyed() {
    this.cancelPlay();
    clearTimeout(this.timer);
  },
  data: function data() {
    return {
      itemSpace: 0,
      itemList: [],
      itemStageIndexList: [],
      index: this.startIndex,
      containerWidth: 'auto',
      isReseting: false,
      isUnavailable: false,
      isInit: false,
      timer: null,
      autoplayTimer: null
    };
  },
  computed: {
    itemAmount: function itemAmount() {
      return this.itemList.length;
    },
    itemWidthWithSpace: function itemWidthWithSpace() {
      return this.itemWidth + this.itemSpace;
    },
    isStaticMode: function isStaticMode() {
      return this.itemAmount <= this.displayAmount;
    },
    isNeedReset: function isNeedReset() {
      return this.itemAmount > this.displayAmount && this.itemAmount === this.displayAmount + 1;
    }
  },
  watch: {
    autoplay: function autoplay() {
      if (this.autoplay) {
        this.play();
      } else {
        this.cancelPlay();
      }
    }
  },
  methods: {
    initCarousel: function initCarousel() {
      var containerWidth = window.getComputedStyle(this.$el).width;
      containerWidth = Number.parseInt(containerWidth);
      var space = (containerWidth - this.displayAmount * this.itemWidth) / (this.displayAmount - 1);

      if (Math.abs(containerWidth - this.itemWidth) < 1) {
        space = 0;
      }

      if (false) {}

      this.itemSpace = space;
    },
    getItems: function getItems() {
      var list = [];

      if (this.$slots.default !== void 0) {
        list = this.$slots.default.filter(function (item) {
          return item.tag !== void 0;
        });
      }

      this.itemList = list;
    },
    setIndex: function setIndex(index) {
      if (this.isReseting || this.isUnavailable) return;
      var toRight = index > this.index;

      if (!this.loop && (index < 0 || index > this.itemAmount - this.displayAmount)) {
        return;
      }

      if (index < 0) {
        index = this.itemAmount - 1;
      }

      if (index >= this.itemAmount) {
        index %= this.itemAmount;
      }

      this.index = index;
      this.updateStageIndexList(toRight);
    },
    updateItems: function updateItems() {
      this.getItems();
      this.updateStageIndexList();
    },

    /* caculate order of carousel items */
    updateStageIndexList: function updateStageIndexList(toRight) {
      var _this2 = this;

      if (!this.isStaticMode) {
        var indexList = [];

        for (var i = 0; i < this.displayAmount + 2; i++) {
          indexList[i] = this.index - 1 + i;

          if (indexList[i] < 0) {
            indexList[i] += this.itemAmount;
          }

          if (indexList[i] >= this.itemAmount) {
            indexList[i] %= this.itemAmount;
          }
        }
        /*
            when item amount equal display amount plus 1,
            to ensure animation visual effects,
            need to reset edge item position by carousel's next move direction
          */


        if (this.isNeedReset && this.isInit) {
          clearTimeout(this.timer);
          this.isReseting = true;
          this.isUnavailable = true;

          if (toRight) {
            this.itemStageIndexList.splice(0, 1, -1);
            this.timer = setTimeout(function () {
              _this2.itemStageIndexList = indexList;
              _this2.isReseting = false;
              _this2.isUnavailable = false;
            }, 16);
          } else {
            var cloneList = indexList.slice();
            cloneList[0] = -1;
            this.itemStageIndexList = cloneList;
            this.isReseting = false;
            this.timer = setTimeout(function () {
              _this2.isReseting = true;
              _this2.itemStageIndexList = indexList;
              _this2.timer = setTimeout(function () {
                _this2.isReseting = false;
                _this2.isUnavailable = false;
              }, 16);
            }, this.speed);
          }
        } else {
          if (this.isInit) {
            this.$emit('change', this.index);
          }

          this.itemStageIndexList = indexList;
        }
      }
    },
    play: function play() {
      var _this3 = this;

      clearTimeout(this.autoplayTimer);
      this.autoplayTimer = setTimeout(function () {
        if (_this3.playDirection !== 'rtl') {
          _this3.setIndex(_this3.index + 1);
        } else {
          _this3.setIndex(_this3.index - 1);
        }

        _this3.play();
      }, this.interval);
    },
    cancelPlay: function cancelPlay() {
      clearTimeout(this.autoplayTimer);
    },
    handleControl: function handleControl(direction) {
      var _this4 = this;

      if (direction === 'right') {
        this.setIndex(this.index + 1);
      } else {
        this.setIndex(this.index - 1);
      }

      if (this.autoplay) {
        this.cancelPlay();
        this.autoplayTimer = setTimeout(function () {
          if (_this4.autoplay) {
            _this4.play();
          }
        }, this.interval);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/split-carousel/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_split_carouselvue_type_script_lang_js_ = (split_carouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/split-carousel/index.vue?vue&type=style&index=0&lang=scss&
var split_carouselvue_type_style_index_0_lang_scss_ = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/split-carousel/index.vue






/* normalize component */

var component = normalizeComponent(
  src_split_carouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var split_carousel = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/split-carousel-item/index.vue?vue&type=template&id=15803282&
var split_carousel_itemvue_type_template_id_15803282_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.inStage)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isMounted),expression:"isMounted"}],staticClass:"split-carousel-item",class:{'is-static':_vm.$parent.isStaticMode},style:(_vm.itemStyle)},[_c('div',{staticClass:"split-carousel-item--content"},[_vm._t("default")],2)]):_vm._e()}
var split_carousel_itemvue_type_template_id_15803282_staticRenderFns = []


// CONCATENATED MODULE: ./src/split-carousel-item/index.vue?vue&type=template&id=15803282&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/split-carousel-item/index.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var split_carousel_itemvue_type_script_lang_js_ = ({
  created: function created() {
    this.$parent && this.$parent.updateItems();
  },
  destroyed: function destroyed() {
    this.$parent && this.$parent.updateItems();
  },
  data: function data() {
    return {
      prevIndex: -1,
      isMounted: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.prevIndex = this.stageIndex;
    this.$nextTick(function () {
      _this.isMounted = true;
    });
  },
  computed: {
    itemIndex: function itemIndex() {
      return this.$parent.itemList.indexOf(this.$vnode);
    },
    stageIndex: function stageIndex() {
      return this.$parent.itemStageIndexList.indexOf(this.itemIndex);
    },
    noMarginRight: function noMarginRight() {
      return this.$parent.isStaticMode && this.itemIndex === this.$parent.itemAmount - 1;
    },
    inStage: function inStage() {
      return this.$parent.isStaticMode || this.stageIndex !== -1;
    },
    noAnimate: function noAnimate() {
      var last = this.$parent.itemStageIndexList.length - 1;
      return this.$parent.isReseting || !this.isMounted || this.prevIndex === 0 && this.stageIndex === last || this.prevIndex === last && this.stageIndex === 0 || this.prevIndex === this.stageIndex;
    },
    itemStyle: function itemStyle() {
      var style = {
        'margin-right': "".concat(this.noMarginRight ? 0 : this.$parent.itemSpace).concat(this.$parent.cssUnit),
        'width': "".concat(this.$parent.itemWidth).concat(this.$parent.cssUnit),
        'transition-timing-function': this.$parent.timingFunction
      };

      if (!this.$parent.isStaticMode) {
        style = Object.assign(style, {
          'left': "".concat(this.stageIndex * this.$parent.itemWidthWithSpace).concat(this.$parent.cssUnit),
          'transition-duration': "".concat(this.noAnimate ? 0 : this.$parent.speed, "ms")
        });
      }

      return style;
    }
  },
  watch: {
    stageIndex: function stageIndex(val, oldVal) {
      this.prevIndex = oldVal === void 0 ? this.stageIndex : oldVal;
    }
  }
});
// CONCATENATED MODULE: ./src/split-carousel-item/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_split_carousel_itemvue_type_script_lang_js_ = (split_carousel_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/split-carousel-item/index.vue?vue&type=style&index=0&lang=scss&
var split_carousel_itemvue_type_style_index_0_lang_scss_ = __webpack_require__(53);

// CONCATENATED MODULE: ./src/split-carousel-item/index.vue






/* normalize component */

var split_carousel_item_component = normalizeComponent(
  src_split_carousel_itemvue_type_script_lang_js_,
  split_carousel_itemvue_type_template_id_15803282_render,
  split_carousel_itemvue_type_template_id_15803282_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var split_carousel_item = (split_carousel_item_component.exports);
// CONCATENATED MODULE: ./src/index.js


/* harmony default export */ var src = __webpack_exports__["default"] = ({
  install: function install(Vue) {
    Vue.component('split-carousel', split_carousel);
    Vue.component('split-carousel-item', split_carousel_item);
  }
});

/***/ })
/******/ ]);
});