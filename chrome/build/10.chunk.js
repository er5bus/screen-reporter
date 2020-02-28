(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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

/***/ "./src/containers/TrelloPage.js":
/*!**************************************!*\
  !*** ./src/containers/TrelloPage.js ***!
  \**************************************/
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
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button */ "./src/components/Button.js");
/* harmony import */ var _components_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Col */ "./src/components/Col.js");
/* harmony import */ var _components_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Row */ "./src/components/Row.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card.js");
/* harmony import */ var _components_TextAlign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/TextAlign */ "./src/components/TextAlign.js");
/* harmony import */ var _components_TextMuted__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/TextMuted */ "./src/components/TextMuted.js");
/* harmony import */ var _components_TrelloForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/TrelloForm */ "./src/components/TrelloForm.js");
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Alert */ "./src/components/Alert.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Text */ "./src/components/Text.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















class TrelloPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onBoardChange", value => {
      this.props.fetchTrelloBoardLists(value);
      this.props.fetchTrelloBoardMembers(value);
      this.props.fetchTrelloBoardLabels(value);
    });

    _defineProperty(this, "onCreateTrelloCard", values => {
      this.props.createTrelloCard({ ...values,
        attachment: this.props.annotatedScreenshot.imageURI
      });
      this.props.history.push(_constants__WEBPACK_IMPORTED_MODULE_4__["ROUTING"].POST_PAGE);
    });
  }

  componentDidMount() {
    const {
      integrations
    } = this.props;

    if (integrations.length) {
      this.props.fetchTrelloBoards();
    }
  }

  render() {
    const {
      integrations,
      currentUser,
      annotatedScreenshot,
      trello
    } = this.props;

    if (!annotatedScreenshot) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: _constants__WEBPACK_IMPORTED_MODULE_4__["ROUTING"].OPTIONS_PAGE
      });
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"].Link, {
        to: _constants__WEBPACK_IMPORTED_MODULE_4__["ROUTING"].OPTIONS_PAGE,
        text: "Options"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"].Link, {
        to: _constants__WEBPACK_IMPORTED_MODULE_4__["ROUTING"].SCREEN_CAPTURE_EDITOR.PATH.replace(/:uuid/gi, annotatedScreenshot.uuid),
        text: "Go Back to Previous Page"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
        fullWidth: false,
        mt: !integrations.length ? 200 : 400
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Row__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Col__WEBPACK_IMPORTED_MODULE_7__["default"], {
        xl: 8,
        lg: 8,
        md: 8,
        sm: 12
      }, trello.error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Alert__WEBPACK_IMPORTED_MODULE_15__["default"].Error, {
        object: trello.error
      }), !integrations.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_11__["default"], {
        bg: "secondary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_11__["default"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_11__["default"].Title, {
        text: !integrations.length ? "No trello account available" : "Post it on Trello"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_11__["default"].Body, {
        px: 5,
        py: 5
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Text__WEBPACK_IMPORTED_MODULE_16__["default"], {
        object: {
          "Info ": "In order to post this screen capture on trello you need to login then link your trello account"
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextAlign__WEBPACK_IMPORTED_MODULE_12__["default"], {
        align: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: _constants__WEBPACK_IMPORTED_MODULE_4__["ROUTING"].OPTIONS_PAGE
      }, "Check your options page")))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_11__["default"], {
        bg: "secondary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_11__["default"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_11__["default"].Title, {
        text: "Post it on Trello"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_11__["default"].Body, {
        px: 5,
        py: 5
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TrelloForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
        onSubmit: this.onCreateTrelloCard,
        boards: trello.boards,
        onChangeBoard: this.onBoardChange,
        lists: trello.lists,
        labels: trello.labels,
        members: trello.members
      })))))));
    }
  }

}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
  openTab: _actions__WEBPACK_IMPORTED_MODULE_5__["openTab"],
  removeMessages: _actions__WEBPACK_IMPORTED_MODULE_5__["removeMessages"],
  fetchTrelloBoardLabels: _actions__WEBPACK_IMPORTED_MODULE_5__["fetchTrelloBoardLabels"],
  fetchTrelloBoards: _actions__WEBPACK_IMPORTED_MODULE_5__["fetchTrelloBoards"],
  fetchTrelloBoardLists: _actions__WEBPACK_IMPORTED_MODULE_5__["fetchTrelloBoardLists"],
  fetchTrelloBoardMembers: _actions__WEBPACK_IMPORTED_MODULE_5__["fetchTrelloBoardMembers"],
  createTrelloCard: _actions__WEBPACK_IMPORTED_MODULE_5__["createTrelloCard"]
}, dispatch);

const mapStateToProps = state => {
  const {
    currentUser
  } = state.auth;
  const {
    integrationsList: {
      integrations
    },
    trello
  } = state.integrations;
  const {
    screenshot: annotatedScreenshot
  } = state.screenshots;
  return {
    currentUser,
    integrations,
    trello,
    annotatedScreenshot
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(TrelloPage));

/***/ })

}]);
//# sourceMappingURL=10.chunk.js.map