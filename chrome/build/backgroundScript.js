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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/backgroundScript.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

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

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


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

/***/ "./src/assets/audio/camera-click.mp3":
/*!*******************************************!*\
  !*** ./src/assets/audio/camera-click.mp3 ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d5fb3f65dc1f611fc2f9aed9d1b76a6d.mp3");

/***/ }),

/***/ "./src/backgroundScript.js":
/*!*********************************!*\
  !*** ./src/backgroundScript.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_browserAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/browserAPI */ "./src/utils/browserAPI/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");


 // Listen for a click on the camera icon.

_utils_browserAPI__WEBPACK_IMPORTED_MODULE_1__["default"].browserAction.onClick(() => {
  _utils_browserAPI__WEBPACK_IMPORTED_MODULE_1__["default"].tab.captureCurrentScreen(imageURI => {
    const screenCapture = {
      imageURI,
      uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
    };
    _utils_browserAPI__WEBPACK_IMPORTED_MODULE_1__["default"].storage.addItem(_constants__WEBPACK_IMPORTED_MODULE_2__["STORAGE"].SCREEN_CAPTURE, screenCapture, success => _utils_browserAPI__WEBPACK_IMPORTED_MODULE_1__["default"].tab.redirectToPage(_constants__WEBPACK_IMPORTED_MODULE_2__["PAGE"], _constants__WEBPACK_IMPORTED_MODULE_2__["ROUTING"].SCREEN_CAPTURE_EDITOR.PATH.replace(_constants__WEBPACK_IMPORTED_MODULE_2__["ROUTING"].SCREEN_CAPTURE_EDITOR.PARAM, screenCapture.uuid)), err => console.error(err));
  });
});

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: PAGE, API_BASE_URL, ROUTING, TRELLO, CAPTURE_OPTIONS, CAPTURE_ANNOTATION_OPTIONS, ACTIONS, HTTP_METHODS, ENDPOINT, STORAGE, STORAGE_METHODS, INIT_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE", function() { return PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTING", function() { return ROUTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRELLO", function() { return TRELLO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPTURE_OPTIONS", function() { return CAPTURE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPTURE_ANNOTATION_OPTIONS", function() { return CAPTURE_ANNOTATION_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS", function() { return ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_METHODS", function() { return HTTP_METHODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDPOINT", function() { return ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE", function() { return STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_METHODS", function() { return STORAGE_METHODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_STATE", function() { return INIT_STATE; });
const PAGE = "index.html";
const API_BASE_URL = "http://167.114.113.160:5000";
const ROUTING = {
  OPTIONS_PAGE: "/options",
  SCREEN_CAPTURE_EDITOR: {
    PATH: "/screen-capture/:uuid/",
    PARAM: ":uuid"
  },
  LOGIN_PAGE: "/login",
  REGISTER_PAGE: "/register",
  FORGOT_PASSWORD_PAGE: "/forgot-password",
  TRELLO_PAGE: "/trello",
  POST_PAGE: "/status",
  PROFILE_PAGE: "/profile"
};
const TRELLO = {
  AUTH_URL: "https://trello.com/1/authorize",
  TOKEN: "22ac062e43a16df65c5325dd965f3d1a",
  APP_NAME: "Screen reporter App",
  RESPONSE_TYPE: "token",
  CALLBACK_METHOD: "fragment",
  SCOPE: "read,write",
  EXPIRATION: 'never' // 1hour, 1day, 30days 

};
const CAPTURE_OPTIONS = {
  format: 'jpeg'
};
const CAPTURE_ANNOTATION_OPTIONS = {
  type: "image/jpeg",
  quality: 1
};
const ACTIONS = {
  CALL_API: 'CALL_API',
  CALL_STORAGE: 'CALL_STORAGE',
  CALL_TAB: 'CALL_TAB',
  REMOVE_MESSAGES: 'REMOVE_MESSAGES',
  SAVE_ANNOTATED_IMAGE: 'SAVE_ANNOTATED_IMAGE',
  CREATE_ACCOUNT_FAILED: 'CREATE_ACCOUNT_FAILED',
  CREATE_ACCOUNT_SUCCEEDED: 'CREATE_ACCOUNT_SUCCEEDED',
  LOGIN_ACCOUNT_FAILED: 'LOGIN_ACCOUNT_FAILED',
  LOGIN_ACCOUNT_SUCCEDED: 'LOGIN_ACCOUNT_SUCCEDED',
  LOGOUT_ACCOUNT_FAILED: 'LOGOUT_ACCOUNT_FAILED',
  LOGOUT_ACCOUNT_SUCCEDED: 'LOGOUT_ACCOUNT_SUCCEDED',
  FETCH_INTEGRATION_FAILED: 'FETCH_INTEGRATION_FAILED',
  FETCH_INTEGRATION_SUCCEDED: 'FETCH_INTEGRATION_SUCCEDED',
  ADD_INTEGRATION_FAILED: 'ADD_INTEGRATION_FAILED',
  ADD_INTEGRATION_SUCCEDED: 'ADD_INTEGRATION_SUCCEDED',
  EDIT_INTEGRATION_FAILED: 'EDIT_INTEGRATION_FAILED',
  EDIT_INTEGRATION_SUCCEDED: 'EDIT_INTEGRATION_SUCCEDED',
  REMOVE_INTEGRATION_FAILED: 'REMOVE_INTEGRATION_FAILED',
  REMOVE_INTEGRATION_SUCCEDED: 'REMOVE_INTEGRATION_SUCCEDED',
  FETCH_SETTINGS_SUCCEDED: 'FETCH_SETTINGS_SUCCEDED',
  FETCH_SETTINGS_FAILED: 'FETCH_SETTINGS_FAILED',
  EDIT_SETTINGS_FAILED: 'EDIT_SETTINGS_FAILED',
  EDIT_SETTINGS_SUCCEDED: 'EDIT_SETTINGS_SUCCEDED',
  FETCH_SCREENSHOT_SUCCEDED: 'FETCH_SCREENSHOT_SUCCEDED',
  FETCH_SCREENSHOT_FAILED: 'FETCH_SCREENSHOT_FAILED',
  EDIT_SCREENSHOT_SUCCEDED: 'EDIT_SCREENSHOT_SUCCEDED',
  EDIT_SCREENSHOT_FAILED: 'EDIT_SCREENSHOT_FAILED',
  REMOVE_SCREENSHOT_SUCCEDED: 'REMOVE_SCREENSHOT_SUCCEDED',
  REMOVE_SCREENSHOT_FAILED: 'REMOVE_SCREENSHOT_FAILED',
  FETCH_TRELLO_BOARDS_SUCCEDED: 'FETCH_TRELLO_BOARDS_SUCCEDED',
  FETCH_TRELLO_BOARDS_FAILED: 'FETCH_TRELLO_BOARDS_FAILED',
  FETCH_TRELLO_LISTS_SUCCEDED: 'FETCH_TRELLO_LISTS_SUCCEDED',
  FETCH_TRELLO_LISTS_FAILED: 'FETCH_TRELLO_LISTS_FAILED',
  FETCH_TRELLO_LABELS_SUCCEDED: 'FETCH_TRELLO_LABELS_SUCCEDED',
  FETCH_TRELLO_LABELS_FAILED: 'FETCH_TRELLO_LABELS_FAILED',
  FETCH_TRELLO_MEMBER_SUCCEDED: 'FETCH_TRELLO_MEMBER_SUCCEDED',
  FETCH_TRELLO_MEMBER_FAILED: 'FETCH_TRELLO_MEMBER_FAILED',
  CREATE_TRELLO_CARD_INIT: 'CREATE_TRELLO_CARD_INIT',
  CREATE_TRELLO_CARD_SUCCEDED: 'CREATE_TRELLO_CARD_SUCCEDED',
  CREATE_TRELLO_CARD_FAILED: 'CREATE_TRELLO_CARD_FAILED',
  RESET_PASSWORD_SUCCEDED: 'RESET_PASSWORD_SUCCEDED',
  RESET_PASSWORD_FAILED: 'RESET_PASSWORD_FAILED',
  UPDATE_ACCOUNT_SUCCEDED: 'UPDATE_ACCOUNT_SUCCEDED',
  UPDATE_ACCOUNT_FAILED: 'UPDATE_ACCOUNT_FAILED'
};
const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};
const ENDPOINT = {
  REGISTER: '/api/auth/register',
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  INTEGRATIONS: '/api/integrations',
  USER: '/api/user/:param',
  INTEGRATION: '/api/integration/:param',
  SETTINGS: '/api/settings',
  RESET: '/api/auth/reset/:param',
  TRELLO: {
    BOARDS: '/api/trello/boards',
    LISTS: '/api/trello/board/:param/lists',
    MEMBERS: '/api/trello/board/:param/members',
    LABELS: '/api/trello/board/:param/labels',
    CREATE_CARD: '/api/trello/create-card'
  }
};
const STORAGE = {
  STORE: "STORE_STORAGE_KEY",
  SCREEN_CAPTURE: "SCREEN_CAPTURE_STORAGE_KEY"
};
const STORAGE_METHODS = {
  SET_ITEM: "SET_ITEM",
  GET_ITEM: "GET_ITEM",
  EDIT_ITEM: "EDIT_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM"
};
const INIT_STATE = {
  auth: {
    currentUser: null,
    token: null,
    success: null,
    error: null
  },
  integrations: {
    integrationsList: {
      integrations: [],
      success: null,
      error: null
    },
    trello: {
      boards: [],
      labels: [],
      lists: [],
      members: [],
      initCardCreation: false,
      success: null,
      error: null
    }
  },
  settings: {
    settings: {
      color: 'blue',
      fontsize: '20px',
      linewidth: 5
    },
    success: null,
    error: null
  },
  screenshots: {
    screenshot: null,
    annotatedScreenshot: null,
    error: null
  }
};

/***/ }),

/***/ "./src/utils/browserAPI/browserAction.js":
/*!***********************************************!*\
  !*** ./src/utils/browserAPI/browserAction.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const chromeBrowserAction = function () {
  const browser = chrome.browserAction;
  return {
    onClick: function (callback) {
      browser.onClicked.addListener(callback);
    }
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (chromeBrowserAction);

/***/ }),

/***/ "./src/utils/browserAPI/identity.js":
/*!******************************************!*\
  !*** ./src/utils/browserAPI/identity.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const chromeIdentity = function () {
  const browser = chrome.identity;

  function generateUrl(page, query = []) {
    return `${page}?${arrayToURL(query)}`;
  }

  function arrayToURL(object) {
    let query = [];
    Object.keys(object).forEach(key => {
      query.push(`${key}=${encodeURIComponent(object[key])}`);
    });
    return query.join('&');
  }

  return {
    getRedirectURL: function (path = "") {
      return browser.getRedirectURL(path);
    },
    launchWebAuthFlow: function (page, query, onSuccess = f => f, onError = f => f) {
      const authUrl = generateUrl(page, query);
      browser.launchWebAuthFlow({
        url: authUrl,
        interactive: true
      }, function (redirectUrl) {
        if (chrome.runtime.lastError) {
          onError(new Error(chrome.runtime.lastError));
          return;
        }

        const url = new URL(redirectUrl.replace('#', '?'));
        console.log(url);
        onSuccess.apply({
          authUrl,
          redirectUrl
        }, [url.searchParams]);
      });
    }
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (chromeIdentity);

/***/ }),

/***/ "./src/utils/browserAPI/index.js":
/*!***************************************!*\
  !*** ./src/utils/browserAPI/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  browserAction: __webpack_require__(/*! ./browserAction */ "./src/utils/browserAPI/browserAction.js").default,
  storage: __webpack_require__(/*! ./storage */ "./src/utils/browserAPI/storage.js").default,
  tab: __webpack_require__(/*! ./tabs */ "./src/utils/browserAPI/tabs.js").default,
  identity: __webpack_require__(/*! ./identity */ "./src/utils/browserAPI/identity.js").default
});

/***/ }),

/***/ "./src/utils/browserAPI/storage.js":
/*!*****************************************!*\
  !*** ./src/utils/browserAPI/storage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const CRITERIA = {
  EQ: "EQUAL",
  NEQ: "NEQUAL",
  LT: "LESS_THAN",
  MT: "MORE_THAN"
};

const ArrayList = function (data = {}) {
  this.data = data || {};
  this.length = Object.keys(data).length || 0;
};

ArrayList.prototype = {
  addItem: function (data) {
    this.data[this.length] = data;
    this.length++;
  },
  setItem: function (data) {
    this.data = data;
  },
  getItem: function (key) {
    return this.data[key];
  },
  getData: function () {
    return this.data;
  },
  findOne: function (criteria) {
    const key = Object.keys(this.data).filter(key => this.criteriaCallback(criteria)(this.data[key])).pop();
    return this.getItem(key);
  },
  update: function (criteria, data) {
    const key = Object.keys(this.data).filter(key => this.criteriaCallback(criteria)(this.data[key])).pop();
    this.data[key] = { ...this.data[key],
      ...data
    };
  },
  delete: function (criteria) {
    const deletedKey = Object.keys(this.data).filter(key => this.criteriaCallback(criteria)(this.data[key])).pop();
    delete this.data[deletedKey];
  },
  map: function (callback = f => f) {
    return Object.keys(this.data).map(object => callback.apply(this, [object]));
  },
  criteriaCallback: ({
    key,
    operator,
    value
  }) => object => {
    if (!object) {
      return false;
    }

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
  }
};

const chromeStorage = function () {
  const browser = chrome.storage.local;
  const that = this;
  return {
    criteria: CRITERIA,
    createCriteria: function (key, operator, value) {
      return {
        key,
        operator,
        value
      };
    },
    getItem: (key, defaultValue = []) => new Promise((resolve, reject) => {
      try {
        browser.get(key, items => {
          resolve(items[key] && JSON.parse(items[key]) || defaultValue);
        });
      } catch (e) {
        reject(e);
      }
    }),
    setItem: (key, value) => new Promise((resolve, reject) => {
      try {
        browser.set({
          [key]: JSON.stringify(value)
        }, items => {
          const error = chrome.runtime.lastError;

          if (error) {
            reject(error);
          }

          resolve(true);
        });
      } catch (e) {
        reject(e);
      }
    }),
    searchForItem: function (key, criteria, resolve = f => f, reject = f => f) {
      this.getItem(key).then(items => {
        const itemsArray = new ArrayList(items);
        const item = itemsArray.findOne(criteria);

        if (item) {
          resolve(item);
        } else {
          throw new Error("item not found");
        }
      }).catch(err => reject(err));
    },
    updateItem: function (key, updatedItem, criteria, resolve = f => f, reject = f => f) {
      this.getItem(key).then(items => {
        const itemsArray = new ArrayList(items);
        itemsArray.update(criteria, updatedItem);
        this.setItem(key, itemsArray.getData()).then(done => resolve(updatedItem)).catch(err => reject(err));
      }).catch(err => reject(err));
    },
    removeItem: function (key, criteria, resolve = f => f, reject = f => f) {
      this.getItem(key).then(items => {
        const itemsArray = new ArrayList(items);
        itemsArray.delete(criteria);
        this.setItem(key, itemsArray.getData()).then(done => resolve(filteredItems)).catch(err => reject(err));
      }).catch(err => reject(err));
    },
    addItem: function (key, object, resolve = f => f, reject = f => f) {
      const newItemsList = new ArrayList();
      newItemsList.addItem(object);
      this.setItem(key, newItemsList.getData()).then(res => resolve(res)).catch(err => reject(err));
    },
    onChange: function (callback) {
      browser.storage.onChanged.addListener(callback);
    }
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (chromeStorage);

/***/ }),

/***/ "./src/utils/browserAPI/tabs.js":
/*!**************************************!*\
  !*** ./src/utils/browserAPI/tabs.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_audio_camera_click_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/audio/camera-click.mp3 */ "./src/assets/audio/camera-click.mp3");


const chromeTabs = function () {
  const tabs = chrome.tabs;
  const extension = chrome.extension;
  const sound = new Audio(_assets_audio_camera_click_mp3__WEBPACK_IMPORTED_MODULE_0__["default"]);
  return {
    captureCurrentScreen: function (callback) {
      sound.play();
      tabs.captureVisibleTab(callback);
    },
    redirectToPage: function (page, route, callback = f => f) {
      const url = `${page}#${route}`;
      tabs.create({
        url
      }, callback);
    }
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (chromeTabs);

/***/ })

/******/ });
//# sourceMappingURL=backgroundScript.js.map