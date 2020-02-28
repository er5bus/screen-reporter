(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/components/Alert.js":
/*!*********************************!*\
  !*** ./src/components/Alert.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Alert = ({
  children,
  style
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: `alert alert-${style}`,
  role: "alert"
}, children);

Alert.Error = ({
  object,
  style = "danger"
}) => {
  const transformMessage = () => {
    const {
      message
    } = object;

    if (typeof message === 'string') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        key: 0,
        className: "m-0 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        key: 0
      }, "Oops! "), message.message);
    }

    if (typeof message === 'object' && Object.entries(message).length) {
      return Object.entries(message).map(([key, value], i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
    }, "Oops! "), "Bad things happend");
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Alert, {
    style: style
  }, transformMessage());
};

Alert.Success = ({
  object,
  style = "success"
}) => {
  const transformMessage = () => {
    if (typeof object === 'object' && Object.entries(object).length) {
      return Object.entries(object).map(([key, value], i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        key: key,
        className: "m-0 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        key: key
      }, key.toUpperCase(), ": "), Array.isArray(value) ? value.join(', ') : value));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "m-0 p-0"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Well done! "), object);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Alert, {
    style: style
  }, transformMessage());
};

/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

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

/***/ "./src/components/EditProfileForm.js":
/*!*******************************************!*\
  !*** ./src/components/EditProfileForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/validation */ "./src/utils/validation.js");
/* harmony import */ var _InputText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputText */ "./src/components/InputText.js");
/* harmony import */ var _TextAlign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextAlign */ "./src/components/TextAlign.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./src/components/Button.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Form */ "./src/components/Form.js");
/* harmony import */ var _hocomponents_Field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hocomponents/Field */ "./src/hocomponents/Field.js");







const TextField = Object(_hocomponents_Field__WEBPACK_IMPORTED_MODULE_6__["default"])(_InputText__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (({
  onSubmit,
  initData = {}
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onSubmit: onSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextField, {
    name: "email",
    type: "text",
    icon: "ni-email-83",
    placeholder: "What's your work email?",
    defaultValue: initData && initData.email,
    validate: [_utils_validation__WEBPACK_IMPORTED_MODULE_1__["default"].required, _utils_validation__WEBPACK_IMPORTED_MODULE_1__["default"].email]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextField, {
    name: "fullname",
    type: "text",
    icon: "ni-circle-08",
    placeholder: "Full name",
    defaultValue: initData && initData.fullname,
    validate: _utils_validation__WEBPACK_IMPORTED_MODULE_1__["default"].required
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextField, {
    name: "password",
    type: "password",
    icon: "ni-lock-circle-open",
    placeholder: "Pick a password to change the old one",
    validate: [_utils_validation__WEBPACK_IMPORTED_MODULE_1__["default"].minLength(4)]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextField, {
    name: "current_password",
    type: "password",
    icon: "ni-lock-circle-open",
    placeholder: "Current Password",
    validate: [_utils_validation__WEBPACK_IMPORTED_MODULE_1__["default"].required, _utils_validation__WEBPACK_IMPORTED_MODULE_1__["default"].minLength(4)]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextAlign__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mt: 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "submit",
    style: "info",
    text: "Update account"
  })));
});

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

/***/ "./src/components/TextMuted.js":
/*!*************************************!*\
  !*** ./src/components/TextMuted.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextAlign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextAlign */ "./src/components/TextAlign.js");


/* harmony default export */ __webpack_exports__["default"] = (({
  text,
  align = 'center',
  mb = 0,
  mt = 0
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextAlign__WEBPACK_IMPORTED_MODULE_1__["default"], {
  align: align,
  mb: mb,
  mt: mt
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
  className: "text-muted"
}, text)));

/***/ }),

/***/ "./src/containers/ProfilePage.js":
/*!***************************************!*\
  !*** ./src/containers/ProfilePage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _components_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Col */ "./src/components/Col.js");
/* harmony import */ var _components_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Row */ "./src/components/Row.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card.js");
/* harmony import */ var _components_TextAlign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/TextAlign */ "./src/components/TextAlign.js");
/* harmony import */ var _components_TextMuted__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/TextMuted */ "./src/components/TextMuted.js");
/* harmony import */ var _components_EditProfileForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/EditProfileForm */ "./src/components/EditProfileForm.js");
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Alert */ "./src/components/Alert.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















class EditProfilePage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onSubmitForm", values => {
      this.props.editProfile(values, this.props.currentUser.id);
    });
  }

  componentDidMount() {
    this.props.removeMessages();
  }

  render() {
    const {
      error,
      success,
      currentUser
    } = this.props;

    if (!currentUser) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: _constants__WEBPACK_IMPORTED_MODULE_4__["ROUTING"].LOGIN_PAGE
      });
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"].Dropdown, {
        text: currentUser.fullname
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"].DropdownLinkItem, {
        to: _constants__WEBPACK_IMPORTED_MODULE_4__["ROUTING"].PROFILE_PAGE,
        text: "Profile"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"].DropdownLinkItem, {
        to: _constants__WEBPACK_IMPORTED_MODULE_4__["ROUTING"].OPTIONS_PAGE,
        text: "Integrations"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"].DropdownItem, {
        onClick: this.props.logout,
        text: "Logout"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
        fullWidth: false,
        mt: 300
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Row__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
        xl: 6,
        lg: 7,
        md: 8,
        sm: 12
      }, error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Alert__WEBPACK_IMPORTED_MODULE_14__["default"].Error, {
        object: error
      }), success && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Alert__WEBPACK_IMPORTED_MODULE_14__["default"].Success, {
        object: success
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
        bg: "secondary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"].Title, {
        text: "Update Your informations"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
        px: 5,
        py: 5
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EditProfileForm__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onSubmit: this.onSubmitForm,
        initData: currentUser
      })))))));
    }
  }

}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
  removeMessages: _actions__WEBPACK_IMPORTED_MODULE_5__["removeMessages"],
  editProfile: _actions__WEBPACK_IMPORTED_MODULE_5__["editProfile"],
  logout: _actions__WEBPACK_IMPORTED_MODULE_5__["logout"]
}, dispatch);

const mapStateToProps = state => state.auth;

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(EditProfilePage));

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
//# sourceMappingURL=6.chunk.js.map