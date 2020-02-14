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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/eventPage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./src/browserAPI/browserAction.js":
/*!*****************************************!*\
  !*** ./src/browserAPI/browserAction.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var chromeBrowserAction = function () {
  var browser = chrome.browserAction;
  return {
    onClick: function onClick(callback) {
      browser.onClicked.addListener(callback);
    }
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (chromeBrowserAction);

/***/ }),

/***/ "./src/browserAPI/identity.js":
/*!************************************!*\
  !*** ./src/browserAPI/identity.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var chromeIdentity = function () {
  var browser = chrome.identity;

  function generateUrl(page) {
    var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    return "".concat(page, "?").concat(arrayToURL(query));
  }

  function arrayToURL(object) {
    var query = [];
    Object.keys(object).forEach(function (key) {
      query.push("".concat(key, "=").concat(encodeURIComponent(object[key])));
    });
    return query.join('&');
  }

  return {
    getRedirectURL: function getRedirectURL() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      return browser.getRedirectURL(path);
    },
    launchWebAuthFlow: function launchWebAuthFlow(page, query) {
      var onSuccess = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (f) {
        return f;
      };
      var onError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (f) {
        return f;
      };
      var authUrl = generateUrl(page, query);
      browser.launchWebAuthFlow({
        url: authUrl,
        interactive: true
      }, function (redirectUrl) {
        if (chrome.runtime.lastError) {
          onError(new Error(chrome.runtime.lastError));
          return;
        }

        var url = new URL(redirectUrl.replace('#', '?'));
        console.log(url);
        onSuccess.apply({
          authUrl: authUrl,
          redirectUrl: redirectUrl
        }, [url.searchParams]);
      });
    }
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (chromeIdentity);

/***/ }),

/***/ "./src/browserAPI/index.js":
/*!*********************************!*\
  !*** ./src/browserAPI/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  browserAction: __webpack_require__(/*! ./browserAction */ "./src/browserAPI/browserAction.js")["default"],
  storage: __webpack_require__(/*! ./storage */ "./src/browserAPI/storage.js")["default"],
  tab: __webpack_require__(/*! ./tabs */ "./src/browserAPI/tabs.js")["default"],
  identity: __webpack_require__(/*! ./identity */ "./src/browserAPI/identity.js")["default"]
});

/***/ }),

/***/ "./src/browserAPI/storage.js":
/*!***********************************!*\
  !*** ./src/browserAPI/storage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var chromeStorage = function () {
  var browser = chrome.storage.local;
  var that = this;
  var CRITERIA = {
    EQ: "EQUAL",
    NEQ: "NEQUAL",
    LT: "LESS_THAN",
    MT: "MORE_THAN"
  };

  var searchCriteriaCallback = function searchCriteriaCallback(_ref) {
    var key = _ref.key,
        operator = _ref.operator,
        value = _ref.value;
    return function (object) {
      switch (operator) {
        case CRITERIA.EQ:
          return object[key] === value;

        case CRITERIA.NEQ:
          return object[key] !== value;

        case CRITERIA.LT:
          return object[key] <= value;

        case CRITERIA.MT:
          return object[key] >= value;

        default:
          throw Error("Not valid operator");
      }
    };
  };

  return {
    criteria: CRITERIA,
    createCriteria: function createCriteria(key, operator, value) {
      return {
        key: key,
        operator: operator,
        value: value
      };
    },
    getItem: function getItem(key) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return new Promise(function (resolve, reject) {
        try {
          browser.get(key, function (items) {
            resolve(items[key] || defaultValue);
          });
        } catch (e) {
          reject(e);
        }
      });
    },
    setItem: function setItem(key, value) {
      return new Promise(function (resolve, reject) {
        try {
          browser.set(_defineProperty({}, key, value), function (items) {
            resolve(true);
          });
        } catch (e) {
          reject(e);
        }
      });
    },
    searchForItem: function searchForItem(key, criteria) {
      var resolve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (f) {
        return f;
      };
      var reject = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (f) {
        return f;
      };
      this.getItem(key).then(function (items) {
        return resolve((items || []).filter(searchCriteriaCallback(criteria)));
      })["catch"](function (err) {
        return reject(err);
      });
    },
    removeItem: function removeItem(key, criteria) {
      var _this = this;

      var resolve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (f) {
        return f;
      };
      var reject = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (f) {
        return f;
      };
      this.searchForItem(key, criteria).then(function (filteredItems) {
        _this.setItem(key, filteredItems);
      })["catch"](function (err) {
        return reject(err);
      });
    },
    addItem: function addItem(key, object) {
      var _this2 = this;

      var resolve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (f) {
        return f;
      };
      var reject = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (f) {
        return f;
      };
      this.getItem(key).then(function (items) {
        var newItems = (items || []).concat([object]);

        _this2.setItem(key, newItems).then(function (res) {
          return resolve(res);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    },
    onChange: function onChange(callback) {
      browser.storage.onChanged.addListener(callback);
    }
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (chromeStorage);

/***/ }),

/***/ "./src/browserAPI/tabs.js":
/*!********************************!*\
  !*** ./src/browserAPI/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var chromeTabs = function () {
  var browser = chrome.tabs;
  var extension = chrome.extension;

  function generateTabUrl(page) {
    var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    return extension.getURL("".concat(page, "?").concat(arrayToURL(query)));
  }

  function arrayToURL(object) {
    var query = [];
    Object.keys(object).forEach(function (key) {
      query.push("".concat(key, "=").concat(object[key]));
    });
    return query.join('&');
  }

  return {
    captureCurrentScreen: function captureCurrentScreen(callback) {
      browser.captureVisibleTab(callback);
    },
    redirectToPage: function redirectToPage(page, query) {
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (f) {
        return f;
      };
      var url = generateTabUrl(page, query);
      browser.create({
        url: url
      }, callback);
    }
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (chromeTabs);

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: SCREEN_CAPTRUE_STORAGE_KEY, SETTINGS_STORAGE_KEY, PAGES, TRELLO, CAPTURE_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREEN_CAPTRUE_STORAGE_KEY", function() { return SCREEN_CAPTRUE_STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_STORAGE_KEY", function() { return SETTINGS_STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGES", function() { return PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRELLO", function() { return TRELLO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPTURE_OPTIONS", function() { return CAPTURE_OPTIONS; });
var SCREEN_CAPTRUE_STORAGE_KEY = "SCREEN_CAPTRUE_STORAGE_KEY";
var SETTINGS_STORAGE_KEY = "SETTINGS_STORAGE_KEY";
var PAGES = {
  RECEIVER: {
    PATH: "receiver.html",
    PARAM_NAME: "identifier"
  },
  OPTIONS: {
    PATH: "options.html"
  }
};
var TRELLO = {
  AUTH_URL: "https://trello.com/1/authorize",
  TOKEN: "22ac062e43a16df65c5325dd965f3d1a",
  APP_NAME: "Screen reporter App",
  RESPONSE_TYPE: "token",
  CALLBACK_METHOD: "fragment",
  SCOPE: "read,write",
  EXPIRATION: 'never' // 1hour, 1day, 30days 

};
var CAPTURE_OPTIONS = {
  format: 'jpeg'
};

/***/ }),

/***/ "./src/eventPage.js":
/*!**************************!*\
  !*** ./src/eventPage.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browserAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browserAPI */ "./src/browserAPI/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./src/models/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Listen for a click on the camera icon.

_browserAPI__WEBPACK_IMPORTED_MODULE_0__["default"].browserAction.onClick(function () {
  _browserAPI__WEBPACK_IMPORTED_MODULE_0__["default"].tab.captureCurrentScreen(function (imageURI) {
    var screenCapture = new _models__WEBPACK_IMPORTED_MODULE_1__["ScreenCapture"]({
      imageURI: imageURI
    });
    _browserAPI__WEBPACK_IMPORTED_MODULE_0__["default"].storage.addItem(_constants__WEBPACK_IMPORTED_MODULE_2__["SCREEN_CAPTRUE_STORAGE_KEY"], screenCapture.toJson(), function (success) {
      return _browserAPI__WEBPACK_IMPORTED_MODULE_0__["default"].tab.redirectToPage(_constants__WEBPACK_IMPORTED_MODULE_2__["PAGES"].RECEIVER.PATH, _defineProperty({}, _constants__WEBPACK_IMPORTED_MODULE_2__["PAGES"].RECEIVER.PARAM_NAME, screenCapture.uuid));
    }, function (err) {
      return console.error(err);
    });
  });
});

/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! exports provided: ScreenCapture, Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenCapture", function() { return ScreenCapture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");


function ScreenCapture(_ref) {
  var _ref$uuid = _ref.uuid,
      uuid = _ref$uuid === void 0 ? null : _ref$uuid,
      _ref$imageURI = _ref.imageURI,
      imageURI = _ref$imageURI === void 0 ? null : _ref$imageURI;
  this.uuid = uuid || uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()();
  this.imageURI = imageURI;
}
ScreenCapture.prototype = {
  toJson: function toJson() {
    return {
      uuid: this.uuid,
      imageURI: this.imageURI
    };
  }
};
function Settings(_ref2) {
  var _ref2$email = _ref2.email,
      email = _ref2$email === void 0 ? null : _ref2$email,
      _ref2$fullname = _ref2.fullname,
      fullname = _ref2$fullname === void 0 ? null : _ref2$fullname,
      _ref2$apiToken = _ref2.apiToken,
      apiToken = _ref2$apiToken === void 0 ? null : _ref2$apiToken;
  this.email = email;
  this.fullname = fullname;
  this.apiToken = apiToken;
}
Settings.prototype = {
  toJson: function toJson() {
    return {
      email: this.email,
      fullname: this.fullname,
      apiToken: this.apiToken
    };
  }
};

/***/ })

/******/ });
//# sourceMappingURL=eventPage.js.map