(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/components/Col.js":
/*!*******************************!*\
  !*** ./src/components/Col.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  xl = 1,
  lg = 1,
  md = 1,
  sm = 1
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: `col-xl-${xl} col-lg-${lg} col-md-${md} col-sm-${sm}`
}, children));

/***/ }),

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  onSubmit
}) => {
  const serializeArray = elements => {
    const data = {};

    for (let input of elements) {
      if (input.name !== "" && !input.name.endsWith("[]")) {
        data[input.name] = input.value;
      } else if (input.name !== "" && input.name.endsWith("[]")) {
        const inputName = input.name.replace("[]", "");
        Array.isArray(data[inputName]) ? data[inputName].push(input.value) : data[inputName] = [input.value];
      }
    }

    return data;
  };

  const dispatchEvent = (events, elements, inputContaineErrors = []) => {
    let formNode = new Set(["INPUT", "SELECT", "TEXTAREA"]);

    for (let input of elements) {
      if (formNode.has(input.nodeName) && inputContaineErrors.includes(input.name)) {
        events.map(event => input.dispatchEvent(event));
      }
    }
  };

  const isValidForm = (events, object) => {
    let validation,
        error = false;
    let inputs = [];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(children, child => {
      if (child.props.validate) {
        validation = Array.isArray(child.props.validate) ? child.props.validate : [child.props.validate];
        error = validation.some(fn => fn.apply(null, [object[child.props.name]]));

        if (error) {
          inputs.push(child.props.name);
        }
      }
    });
    return inputs;
  };

  const handleSubmit = event => {
    event.preventDefault();
    const object = serializeArray(event.target.elements);
    const inputContaineErrors = isValidForm([new Event("blur")], object);

    if (!inputContaineErrors.length) {
      Object.keys(object).forEach(key => (object[key] === null || object[key] === "") && delete object[key]);
      onSubmit(object);
    } else {
      const blurEvent = new Event("blur");
      const changeEvent = new Event("focus");
      dispatchEvent([blurEvent, changeEvent], event.target.elements, inputContaineErrors);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, children);
});

/***/ }),

/***/ "./src/components/InputSelect.js":
/*!***************************************!*\
  !*** ./src/components/InputSelect.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const ControlComponent = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "form-control-select"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.selectProps.label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["components"].Control, props));

/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    onBlur,
    onChange,
    error = null,
    ...input
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group mb-3 " + (error ? " has-danger " : "")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    className: error ? " is-invalid " : "",
    onChange: onBlur,
    components: {
      Control: ControlComponent
    }
  }, input)));
});

/***/ }),

/***/ "./src/components/InputText.js":
/*!*************************************!*\
  !*** ./src/components/InputText.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    onBlur,
    type = "text",
    icon,
    error = null,
    ...input
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group input-group-alternative mb-3 " + (error ? " has-danger " : "")
  }, icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group-prepend"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "input-group-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: `ni ${icon}`
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    className: "form-control " + (error ? " is-invalid " : ""),
    type: type,
    onBlur: onBlur
  }, input))));
});

/***/ }),

/***/ "./src/components/InputTextarea.js":
/*!*****************************************!*\
  !*** ./src/components/InputTextarea.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    onBlur,
    type = "text",
    icon,
    error = null,
    ...input
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group input-group-alternative mb-3 " + (error ? " has-danger " : "")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", _extends({
    rows: "9",
    className: "form-control form-control-alternative" + (error ? " is-invalid " : ""),
    onBlur: onBlur
  }, input))));
});

/***/ }),

/***/ "./src/components/Row.js":
/*!*******************************!*\
  !*** ./src/components/Row.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  pt = 0,
  pb = 0
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: `row pt-${pt} pb-${pb} justify-content-center`
}, children));

/***/ }),

/***/ "./src/components/Text.js":
/*!********************************!*\
  !*** ./src/components/Text.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  align = 'left',
  mb = 0,
  mt = 0,
  object
}) => {
  const renderElem = () => {
    if (typeof object === 'string' && !/<[a-z/][\s\S]*>/i.test(object)) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        key: 0,
        className: "m-0 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        key: 0
      }, "Oops! "), object);
    }

    if (typeof object === 'object' && Object.entries(object).length) {
      return Object.entries(object).map(([key, value], i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        key: key,
        className: "m-0 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        key: key
      }, key.toUpperCase(), ": "), Array.isArray(value) ? value.join(', ') : value));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: 0,
      className: "m-0 p-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      key: 0
    }, "Oops! "), "Something went wrong");
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, renderElem(object));
});

/***/ }),

/***/ "./src/components/TrelloForm.js":
/*!**************************************!*\
  !*** ./src/components/TrelloForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/validation */ "./src/utils/validation.js");
/* harmony import */ var _utils_browserInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/browserInfo */ "./src/utils/browserInfo.js");
/* harmony import */ var _InputText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputText */ "./src/components/InputText.js");
/* harmony import */ var _InputSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputSelect */ "./src/components/InputSelect.js");
/* harmony import */ var _InputTextarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InputTextarea */ "./src/components/InputTextarea.js");
/* harmony import */ var _TextAlign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextAlign */ "./src/components/TextAlign.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./src/components/Button.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Form */ "./src/components/Form.js");
/* harmony import */ var _hocomponents_Field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hocomponents/Field */ "./src/hocomponents/Field.js");










const TextField = Object(_hocomponents_Field__WEBPACK_IMPORTED_MODULE_9__["default"])(_InputText__WEBPACK_IMPORTED_MODULE_3__["default"]);
const TextareaField = Object(_hocomponents_Field__WEBPACK_IMPORTED_MODULE_9__["default"])(_InputTextarea__WEBPACK_IMPORTED_MODULE_5__["default"]);
const SelectField = Object(_hocomponents_Field__WEBPACK_IMPORTED_MODULE_9__["default"])(_InputSelect__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (({
  onSubmit = f => f,
  onChangeBoard = f => f,
  boards,
  lists,
  members,
  labels
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onSubmit: onSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectField, {
    name: "board",
    placeholder: "Select Board",
    label: "Board *",
    onChange: onChangeBoard,
    options: boards,
    validate: [_utils_validation__WEBPACK_IMPORTED_MODULE_1__["default"].required]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextField, {
    name: "name",
    type: "text",
    placeholder: "Explain your feedback",
    validate: _utils_validation__WEBPACK_IMPORTED_MODULE_1__["default"].required
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextareaField, {
    name: "description",
    type: "text",
    placeholder: "Descriptions (steps to reproduce)",
    validate: [_utils_validation__WEBPACK_IMPORTED_MODULE_1__["default"].required],
    defaultValue: _utils_browserInfo__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectField, {
    name: "list",
    label: "List *",
    options: lists,
    placeholder: "Select List",
    validate: [_utils_validation__WEBPACK_IMPORTED_MODULE_1__["default"].required]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectField, {
    name: "labels[]",
    type: "text",
    label: "Label",
    isMulti: true,
    options: labels,
    placeholder: "Select Label"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectField, {
    name: "members[]",
    type: "text",
    label: "Members",
    options: members,
    isMulti: true,
    placeholder: "Select Members"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextAlign__WEBPACK_IMPORTED_MODULE_6__["default"], {
    mt: 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "submit",
    style: "info",
    text: "Create card"
  })));
});

/***/ }),

/***/ "./src/hocomponents/Field.js":
/*!***********************************!*\
  !*** ./src/hocomponents/Field.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (Component => {
  var _temp;

  return _temp = class Field extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);

      _defineProperty(this, "onBlur", event => {
        const value = event && event.target ? event.target.value : event.value;
        const {
          onChange = false,
          validate
        } = this.props;
        let {
          error
        } = this.state;

        if (validate) {
          const validation = Array.isArray(validate) ? validate : [validate];
          error = validation.some(fn => fn.apply(null, [value]));
          this.setState({
            error
          });
        }

        if (onChange) {
          onChange.apply(null, [value]);
        }
      });

      this.state = {
        error: false
      };
    }

    render() {
      const {
        validate,
        ...input
      } = this.props;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
        onBlur: this.onBlur
      }, this.state, input));
    }

  }, _temp;
});

/***/ }),

/***/ "./src/utils/browserInfo.js":
/*!**********************************!*\
  !*** ./src/utils/browserInfo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * JavaScript Client Detection
 * (C) viazenetti GmbH (Christian Ludwig)
 */
/* harmony default export */ __webpack_exports__["default"] = ((function (window) {
  let unknown = '-'; // screen

  let screenSize = '';

  if (screen.width) {
    let width = screen.width ? screen.width : '';
    let height = screen.height ? screen.height : '';
    screenSize += '' + width + " x " + height;
  } // browser


  let nVer = navigator.appVersion;
  let nAgt = navigator.userAgent;
  let browser = navigator.appName;
  let version = '' + parseFloat(navigator.appVersion);
  let majorVersion = parseInt(navigator.appVersion, 10);
  let nameOffset, verOffset, ix; // Opera

  if ((verOffset = nAgt.indexOf('Opera')) != -1) {
    browser = 'Opera';
    version = nAgt.substring(verOffset + 6);

    if ((verOffset = nAgt.indexOf('Version')) != -1) {
      version = nAgt.substring(verOffset + 8);
    }
  } // Opera Next


  if ((verOffset = nAgt.indexOf('OPR')) != -1) {
    browser = 'Opera';
    version = nAgt.substring(verOffset + 4);
  } // Edge
  else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
      browser = 'Microsoft Edge';
      version = nAgt.substring(verOffset + 5);
    } // MSIE
    else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
        browser = 'Microsoft Internet Explorer';
        version = nAgt.substring(verOffset + 5);
      } // Chrome
      else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
          browser = 'Chrome';
          version = nAgt.substring(verOffset + 7);
        } // Safari
        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
            browser = 'Safari';
            version = nAgt.substring(verOffset + 7);

            if ((verOffset = nAgt.indexOf('Version')) != -1) {
              version = nAgt.substring(verOffset + 8);
            }
          } // Firefox
          else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
              browser = 'Firefox';
              version = nAgt.substring(verOffset + 8);
            } // MSIE 11+
            else if (nAgt.indexOf('Trident/') != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(nAgt.indexOf('rv:') + 3);
              } // Other browsers
              else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                  browser = nAgt.substring(nameOffset, verOffset);
                  version = nAgt.substring(verOffset + 1);

                  if (browser.toLowerCase() == browser.toUpperCase()) {
                    browser = navigator.appName;
                  }
                } // trim the version string


  if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
  if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
  if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);
  majorVersion = parseInt('' + version, 10);

  if (isNaN(majorVersion)) {
    version = '' + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
  } // mobile version


  let mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer); // cookie

  let cookieEnabled = navigator.cookieEnabled ? true : false;

  if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
    document.cookie = 'testcookie';
    cookieEnabled = document.cookie.indexOf('testcookie') != -1 ? true : false;
  } // system


  let os = unknown;
  let clientStrings = [{
    s: 'Windows 10',
    r: /(Windows 10.0|Windows NT 10.0)/
  }, {
    s: 'Windows 8.1',
    r: /(Windows 8.1|Windows NT 6.3)/
  }, {
    s: 'Windows 8',
    r: /(Windows 8|Windows NT 6.2)/
  }, {
    s: 'Windows 7',
    r: /(Windows 7|Windows NT 6.1)/
  }, {
    s: 'Windows Vista',
    r: /Windows NT 6.0/
  }, {
    s: 'Windows Server 2003',
    r: /Windows NT 5.2/
  }, {
    s: 'Windows XP',
    r: /(Windows NT 5.1|Windows XP)/
  }, {
    s: 'Windows 2000',
    r: /(Windows NT 5.0|Windows 2000)/
  }, {
    s: 'Windows ME',
    r: /(Win 9x 4.90|Windows ME)/
  }, {
    s: 'Windows 98',
    r: /(Windows 98|Win98)/
  }, {
    s: 'Windows 95',
    r: /(Windows 95|Win95|Windows_95)/
  }, {
    s: 'Windows NT 4.0',
    r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
  }, {
    s: 'Windows CE',
    r: /Windows CE/
  }, {
    s: 'Windows 3.11',
    r: /Win16/
  }, {
    s: 'Android',
    r: /Android/
  }, {
    s: 'Open BSD',
    r: /OpenBSD/
  }, {
    s: 'Sun OS',
    r: /SunOS/
  }, {
    s: 'Chrome OS',
    r: /CrOS/
  }, {
    s: 'Linux',
    r: /(Linux|X11(?!.*CrOS))/
  }, {
    s: 'iOS',
    r: /(iPhone|iPad|iPod)/
  }, {
    s: 'Mac OS X',
    r: /Mac OS X/
  }, {
    s: 'Mac OS',
    r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
  }, {
    s: 'QNX',
    r: /QNX/
  }, {
    s: 'UNIX',
    r: /UNIX/
  }, {
    s: 'BeOS',
    r: /BeOS/
  }, {
    s: 'OS/2',
    r: /OS\/2/
  }, {
    s: 'Search Bot',
    r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
  }];

  for (let id in clientStrings) {
    let cs = clientStrings[id];

    if (cs.r.test(nAgt)) {
      os = cs.s;
      break;
    }
  }

  let osVersion = unknown;

  if (/Windows/.test(os)) {
    osVersion = /Windows (.*)/.exec(os)[1];
    os = 'Windows';
  }

  switch (os) {
    case 'Mac OS X':
      osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
      break;

    case 'Android':
      osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
      break;

    case 'iOS':
      osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
      osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
      break;
  } // flash (you'll need to include swfobject)

  /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */


  let flashVersion = 'no check';

  if (typeof swfobject != 'undefined') {
    let fv = swfobject.getFlashPlayerVersion();

    if (fv.major > 0) {
      flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
    } else {
      flashVersion = unknown;
    }
  }

  return `-------------------------------------
  *  Screen: ${screenSize}
  *  Browser: ${browser}
  *  Browser Version: ${version}
  *  Browser Major Version: ${majorVersion}
  *  Mobile: ${mobile}
  *  OS: ${os}
  *  osVersion: ${osVersion}
  -------------------------------------`;
})(window));

/***/ }),

/***/ "./src/utils/validation.js":
/*!*********************************!*\
  !*** ./src/utils/validation.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const rules = {
  required: value => !value,
  minLength: min => value => value && (value.length < min ? true : false),
  maxLength: max => value => value && value.length > max ? true : false,
  email: value => value ? !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value) : false,
  min: min => value => value && !isFinite(value) && parseInt(value) > min ? true : false,
  max: max => value => value && !isFinite(value) && parseInt(value) < max ? true : false,
  pattern: pattern => value => !value ? false : !pattern.test(value),
  equalTo: eq => value => !value ? false : eq != value,
  digits: value => !value || !/^\d+$/.test(value)
};
/* harmony default export */ __webpack_exports__["default"] = (rules);

/***/ })

}]);
//# sourceMappingURL=2.chunk.js.map