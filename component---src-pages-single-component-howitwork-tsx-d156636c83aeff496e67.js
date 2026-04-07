(self["webpackChunkesoft_gatsby"] = self["webpackChunkesoft_gatsby"] || []).push([[8857],{

/***/ 9388:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_img_logo_span9_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9866);
/* harmony import */ var _assets_img_shapes_home2_element1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3769);
/* harmony import */ var _assets_img_shapes_home2_element2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1608);
/* harmony import */ var _assets_img_work_work2_img1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2918);
/* harmony import */ var _assets_img_work_work2_img2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5656);
/* harmony import */ var _assets_img_work_work2_img3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7895);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7294);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(682);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4051);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1555);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6841);








const tabContents = [{
  title: 'Create Engaging Campaigns',
  image: _assets_img_work_work2_img1_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  duration: '800'
}, {
  title: 'Automate Workflows',
  image: _assets_img_work_work2_img2_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
  duration: '1000'
}, {
  title: 'Grow Your Reach',
  image: _assets_img_work_work2_img3_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
  duration: '1100'
}];
const Work = () => {
  const {
    0: activeTab,
    1: setActiveTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('tab1');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "space100"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "work2 _relative",
    id: "work"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    lg: 6,
    className: "m-auto text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "heading9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("span", {
    className: "span",
    "data-aos": "zoom-in-left",
    "data-aos-duration": "700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("img", {
    src: _assets_img_logo_span9_svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
    alt: ""
  }), " Keep track of your employee data"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h2", {
    className: "text-anime-style-3"
  }, "HRMS Software Will Be Your Organization Data Warehouse")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    lg: 9,
    className: "m-auto text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("ul", {
    className: "nav nav-pills mb-3",
    id: "pills-tab",
    role: "tablist"
  }, [1, 2, 3].map(num => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("li", {
    className: "nav-item",
    role: "presentation",
    key: num
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("button", {
    className: "nav-link" + (activeTab === "tab" + num ? ' active' : ''),
    id: "tab" + num + "-tab",
    type: "button",
    role: "tab",
    "aria-controls": "tab" + num,
    "aria-selected": activeTab === "tab" + num,
    onClick: () => setActiveTab("tab" + num)
  }, num)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    lg: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.Container, {
    activeKey: activeTab
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.Content, null, [1, 2, 3].map(tabIndex => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.Pane, {
    key: tabIndex,
    eventKey: "tab" + tabIndex,
    id: "tab" + tabIndex
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null, tabContents.map((item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    lg: 4,
    key: i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tabs-box-item",
    "data-aos": "fade-up",
    "data-aos-duration": item.duration || '800'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h3", null, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("img", {
    src: item.image,
    alt: item.title
  })))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("img", {
    className: "shape1",
    src: _assets_img_shapes_home2_element1_png__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
    alt: "shape1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("img", {
    className: "shape2",
    src: _assets_img_shapes_home2_element2_png__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    alt: "shape2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "space40"
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ }),

/***/ 1555:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useCol */
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3967);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6792);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
"use client";





function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useBootstrapPrefix */ .vE)(bsPrefix, 'col');
  const breakpoints = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useBootstrapBreakpoints */ .pi)();
  const minBreakpoint = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useBootstrapMinBreakpoint */ .zG)();
  const spans = [];
  const classes = [];
  breakpoints.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;
    if (typeof propValue === 'object' && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }
    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : '';
    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null) classes.push(`order${infix}-${order}`);
    if (offset != null) classes.push(`offset${infix}-${offset}`);
  });
  return [{
    ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}
const Col = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref) => {
  const [{
    className,
    ...colProps
  }, {
    as: Component = 'div',
    bsPrefix,
    spans
  }] = useCol(props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ...colProps,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, !spans.length && bsPrefix)
  });
});
Col.displayName = 'Col';
/* harmony default export */ __webpack_exports__.Z = (Col);

/***/ }),

/***/ 682:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3967);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6792);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
"use client";





const Container = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  fluid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  className,
  ...props
}, ref) => {
  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useBootstrapPrefix */ .vE)(bsPrefix, 'container');
  const suffix = typeof fluid === 'string' ? `-${fluid}` : '-fluid';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = 'Container';
/* harmony default export */ __webpack_exports__.Z = (Container);

/***/ }),

/***/ 4051:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3967);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6792);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
"use client";





const Row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const decoratedBsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useBootstrapPrefix */ .vE)(bsPrefix, 'row');
  const breakpoints = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useBootstrapBreakpoints */ .pi)();
  const minBreakpoint = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useBootstrapMinBreakpoint */ .zG)();
  const sizePrefix = `${decoratedBsPrefix}-cols`;
  const classes = [];
  breakpoints.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let cols;
    if (propValue != null && typeof propValue === 'object') {
      ({
        cols
      } = propValue);
    } else {
      cols = propValue;
    }
    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : '';
    if (cols != null) classes.push(`${sizePrefix}${infix}-${cols}`);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, decoratedBsPrefix, ...classes)
  });
});
Row.displayName = 'Row';
/* harmony default export */ __webpack_exports__.Z = (Row);

/***/ }),

/***/ 6841:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TabContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6505);
/* harmony import */ var _TabContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8752);
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5103);




const propTypes = {
  eventKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)]),
  /**
   * Content for the tab title.
   */
  title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node).isRequired,
  /**
   * The disabled state of the tab.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  /**
   * Class to pass to the underlying nav link.
   */
  tabClassName: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  /**
   * Object containing attributes to pass to underlying nav link.
   */
  tabAttrs: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)
};
const Tab = () => {
  throw new Error('ReactBootstrap: The `Tab` component is not meant to be rendered! ' + "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " + 'For custom tabs components use TabPane and TabsContainer directly');
};
Tab.propTypes = propTypes;
/* harmony default export */ __webpack_exports__.Z = (Object.assign(Tab, {
  Container: _TabContainer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  Content: _TabContent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  Pane: _TabPane__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
}));

/***/ }),

/***/ 6792:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pi: function() { return /* binding */ useBootstrapBreakpoints; },
/* harmony export */   vE: function() { return /* binding */ useBootstrapPrefix; },
/* harmony export */   zG: function() { return /* binding */ useBootstrapMinBreakpoint; }
/* harmony export */ });
/* unused harmony exports DEFAULT_BREAKPOINTS, DEFAULT_MIN_BREAKPOINT, useIsRTL, createBootstrapComponent, ThemeConsumer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);
"use client";




const DEFAULT_BREAKPOINTS = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const DEFAULT_MIN_BREAKPOINT = 'xs';
const ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  prefixes: {},
  breakpoints: DEFAULT_BREAKPOINTS,
  minBreakpoint: DEFAULT_MIN_BREAKPOINT
});
const {
  Consumer,
  Provider
} = ThemeContext;
function ThemeProvider({
  prefixes = {},
  breakpoints = DEFAULT_BREAKPOINTS,
  minBreakpoint = DEFAULT_MIN_BREAKPOINT,
  dir,
  children
}) {
  const contextValue = useMemo(() => ({
    prefixes: {
      ...prefixes
    },
    breakpoints,
    minBreakpoint,
    dir
  }), [prefixes, breakpoints, minBreakpoint, dir]);
  return /*#__PURE__*/_jsx(Provider, {
    value: contextValue,
    children: children
  });
}
function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useBootstrapBreakpoints() {
  const {
    breakpoints
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
  return breakpoints;
}
function useBootstrapMinBreakpoint() {
  const {
    minBreakpoint
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
  return minBreakpoint;
}
function useIsRTL() {
  const {
    dir
  } = useContext(ThemeContext);
  return dir === 'rtl';
}
function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  const isClassy = Component.prototype && Component.prototype.isReactComponent;
  // If it's a functional component make sure we don't break it with a ref
  const {
    prefix,
    forwardRefAs = isClassy ? 'ref' : 'innerRef'
  } = opts;
  const Wrapped = /*#__PURE__*/React.forwardRef(({
    ...props
  }, ref) => {
    props[forwardRefAs] = ref;
    const bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
    return /*#__PURE__*/_jsx(Component, {
      ...props,
      bsPrefix: bsPrefix
    });
  });
  Wrapped.displayName = `Bootstrap(${Component.displayName || Component.name})`;
  return Wrapped;
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ThemeProvider)));

/***/ }),

/***/ 9866:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__.Z = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMTAiIGZpbGw9IiM3MzcxRkMiLz4KPHBhdGggZD0iTTEwLjUwMDQgNEM4LjgzMzgyIDQuOTk0MDEgNy4xNjcyMiA1Ljk4ODAzIDUuNTAwNDkgNi45ODIwNEw1LjUwMDYzIDkuNTM4MTlDNi44MDUwOSAxMC4zMTYzIDguMTA5NTUgMTEuMDk0MyA5LjQxNDAyIDExLjg3MjJMMTAuODQyNSAxMS4wMjAzTDYuOTI5MSA4LjY4NjM4VjcuODM0TDkuMDcyMDkgNi41NTU4NUwxMC41MDA0IDUuNzA0MDVMMTUuNTAwMyA4LjY4NjA5VjYuOTgxOUwxMC41MDA0IDRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTAuNTAwMSA0TDE1LjUgNi45ODE5VjguNjg1OEw5LjA3MTc4IDQuODUxOTVMMTAuNTAwMSA0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTkuMDcxNzQgNC44NTE1NkwxMC41MDAxIDUuNzAzMzdMNS41IDguNjg1NDFMNS41MDAyOCA2Ljk4MTUxTDkuMDcxNzQgNC44NTE1NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik05LjA3MTc0IDQuODUxNTZMMTAuNTAwMSA1LjcwMzM3TDUuNSA4LjY4NTQxTDUuNTAwMjggNi45ODE1MUw5LjA3MTc0IDQuODUxNTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBvcGFjaXR5PSIwLjMiIGQ9Ik0xMC4wNTU2IDUuOTY4NUwxMC41MDAxIDUuNzAzMzdMOS4wNzE3OCA0Ljg1MTU2TDEwLjA1NTYgNS45Njg1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTYuOTI4NzUgNy44MzM5OFYxMC4zOTAzTDUuNTAwMjggOS41MzgzMkw1LjUgOC42ODYwOEw2LjkyODc1IDcuODMzOThaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNi45Mjg3NSA3LjgzMzk4VjEwLjM5MDNMNS41MDAyOCA5LjUzODMyTDUuNSA4LjY4NjA4TDYuOTI4NzUgNy44MzM5OFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIG9wYWNpdHk9IjAuNDUiIGQ9Ik01LjUgOC42ODYwOEw2LjkyODc1IDguMzA1MDhWNy44MzM5OEw1LjUgOC42ODYwOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02LjkyODk2IDguNjg3NUwxMy40MTg3IDEyLjU1ODFMMTEuOTI4NiAxMy40NDY5TDYuOTI4OTYgMTAuMzkxNFY4LjY4NzVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBvcGFjaXR5PSIwLjI1IiBkPSJNNi45Mjg5NiA4LjY4NzVWMTAuMzkxNEw3LjMyMzU1IDEwLjYyNjdMNi45Mjg5NiA4LjY4NzVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTAuNDk5OSAxNS45OTkyQzEyLjE2NjcgMTUuMDA1MiAxMy44MzMxIDE0LjAxMTIgMTUuNDk5OSAxMy4wMTcxTDE1LjQ5OTcgMTAuNDYxQzE0LjE5NTMgOS42ODI4OSAxMi44OTA4IDguOTA0OTIgMTEuNTg2MyA4LjEyNjk1TDEwLjE1NzkgOC45Nzg5TDE0LjA3MTIgMTEuMzEyOFYxMi4xNjUyTDExLjkyODMgMTMuNDQzM0wxMC40OTk5IDE0LjI5NTNMNS41IDExLjMxMzJWMTMuMDE3MUwxMC40OTk5IDE1Ljk5OTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTAuNDk5OSAxNi4wMDA0TDUuNSAxMy4wMTg0VjExLjMxNDVMMTEuOTI4NCAxNS4xNDg0TDEwLjQ5OTkgMTYuMDAwNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMS45MjggMTUuMTQ4NEwxMC40OTk1IDE0LjI5NjVMMTUuNDk5NiAxMS4zMTQ1TDE1LjQ5OTQgMTMuMDE4NEwxMS45MjggMTUuMTQ4NFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMS45MjggMTUuMTQ4NEwxMC40OTk1IDE0LjI5NjVMMTUuNDk5NiAxMS4zMTQ1TDE1LjQ5OTQgMTMuMDE4NEwxMS45MjggMTUuMTQ4NFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIG9wYWNpdHk9IjAuMyIgZD0iTTEwLjk0NDEgMTQuMDMxMkwxMC40OTk1IDE0LjI5NjRMMTEuOTI4IDE1LjE0ODNMMTAuOTQ0MSAxNC4wMzEyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE0LjA3MSAxMi4xNjc2VjkuNjExMzNMMTUuNDk5NCAxMC40NjMzTDE1LjQ5OTcgMTEuMzE1NUwxNC4wNzEgMTIuMTY3NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNC4wNzEgMTIuMTY3NlY5LjYxMTMzTDE1LjQ5OTQgMTAuNDYzM0wxNS40OTk3IDExLjMxNTVMMTQuMDcxIDEyLjE2NzZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBvcGFjaXR5PSIwLjQ1IiBkPSJNMTUuNDk5NyAxMS4zMTQ1TDE0LjA3MSAxMS42OTU0VjEyLjE2NjVMMTUuNDk5NyAxMS4zMTQ1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE0LjA3MTQgMTEuMzEzOUw3LjU4MTU0IDcuNDQzMzRMOS4wNzE3NCA2LjU1NDY5TDE0LjA3MTQgOS42MDk5OVYxMS4zMTM5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC4yNSIgZD0iTTE0LjA3MTEgMTEuMzE0MlY5LjYxMDMzTDEzLjY3NjUgOS4zNzVMMTQuMDcxMSAxMS4zMTQyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 3769:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__.Z = (__webpack_require__.p + "static/home2-element1-84063c809961507afc5a3c478c0bc74c.png");

/***/ }),

/***/ 1608:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__.Z = (__webpack_require__.p + "static/home2-element2-ed9219d22a2ffcdc15f3927bd94ec140.png");

/***/ }),

/***/ 2918:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__.Z = (__webpack_require__.p + "static/work2-img1-81c1cf5cc6a10ea246cb5a1ffdbc8768.png");

/***/ }),

/***/ 5656:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__.Z = (__webpack_require__.p + "static/work2-img2-c7a1c5a3b78cd7ac84e98abf8f49fe6a.png");

/***/ }),

/***/ 7895:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__.Z = (__webpack_require__.p + "static/work2-img3-0498a211846217d4575eb20a6d88c832.png");

/***/ }),

/***/ 3967:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

}]);
//# sourceMappingURL=component---src-pages-single-component-howitwork-tsx-d156636c83aeff496e67.js.map