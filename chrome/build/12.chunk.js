(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./src/containers/PostPage.js":
/*!************************************!*\
  !*** ./src/containers/PostPage.js ***!
  \************************************/
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
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Text */ "./src/components/Text.js");
/* harmony import */ var _components_TrelloForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/TrelloForm */ "./src/components/TrelloForm.js");
















class PostPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      annotatedScreenshot: {
        uuid
      }
    } = this.props;
    this.props.removeScreenshot({
      uuid
    });
  }

  render() {
    const {
      annotatedScreenshot,
      trello
    } = this.props;

    if (!annotatedScreenshot) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: _constants__WEBPACK_IMPORTED_MODULE_4__["ROUTING"].LOGIN_PAGE
      });
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
        fullWidth: false,
        mt: 200
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Row__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Col__WEBPACK_IMPORTED_MODULE_7__["default"], {
        xl: 8,
        lg: 8,
        md: 8,
        sm: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_11__["default"], {
        bg: "secondary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_11__["default"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_11__["default"].Title, {
        text: "Post it on Trello"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_11__["default"].Body, {
        px: 5,
        py: 5
      }, console.log(trello.success), trello.success && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Text__WEBPACK_IMPORTED_MODULE_13__["default"], {
        object: trello.success
      }), trello.error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Text__WEBPACK_IMPORTED_MODULE_13__["default"], {
        object: trello.error
      }), !(trello.error || trello.success) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Text__WEBPACK_IMPORTED_MODULE_13__["default"], {
        object: {
          "Please wait": "Your card is about to be created"
        }
      })))))));
    }
  }

}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
  removeScreenshot: _actions__WEBPACK_IMPORTED_MODULE_5__["removeScreenshot"]
}, dispatch);

const mapStateToProps = state => {
  const {
    currentUser
  } = state.auth;
  const {
    trello
  } = state.integrations;
  const {
    screenshot: annotatedScreenshot
  } = state.screenshots;
  return {
    currentUser,
    trello,
    annotatedScreenshot
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(PostPage));

/***/ })

}]);
//# sourceMappingURL=12.chunk.js.map