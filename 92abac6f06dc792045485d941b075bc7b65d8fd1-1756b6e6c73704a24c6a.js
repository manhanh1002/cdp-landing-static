(self["webpackChunkesoft_gatsby"] = self["webpackChunkesoft_gatsby"] || []).push([[1714],{

/***/ 9712:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;
__webpack_unused_export__=Component=>Component;

/***/ }),

/***/ 7935:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2711);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4886);
const BasicLayout=_ref=>{let{children}=_ref;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{aos__WEBPACK_IMPORTED_MODULE_0___default().init();},[]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense,{fallback:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Loader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null)},children));};/* harmony default export */ __webpack_exports__.Z = (BasicLayout);

/***/ }),

/***/ 2090:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3967);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2081);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6792);
/* harmony import */ var _AccordionBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8829);
/* harmony import */ var _AccordionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9937);
/* harmony import */ var _AccordionCollapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1359);
/* harmony import */ var _AccordionContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8792);
/* harmony import */ var _AccordionHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7852);
/* harmony import */ var _AccordionItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3234);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
"use client";













const Accordion = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((props, ref) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    activeKey,
    bsPrefix,
    className,
    onSelect,
    flush,
    alwaysOpen,
    ...controlledProps
  } = (0,uncontrollable__WEBPACK_IMPORTED_MODULE_2__/* .useUncontrolled */ .Ch)(props, {
    activeKey: 'onSelect'
  });
  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__/* .useBootstrapPrefix */ .vE)(bsPrefix, 'accordion');
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    activeEventKey: activeKey,
    onSelect,
    alwaysOpen
  }), [activeKey, onSelect, alwaysOpen]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_AccordionContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component, {
      ref: ref,
      ...controlledProps,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, prefix, flush && `${prefix}-flush`)
    })
  });
});
Accordion.displayName = 'Accordion';
/* harmony default export */ __webpack_exports__.Z = (Object.assign(Accordion, {
  Button: _AccordionButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
  Collapse: _AccordionCollapse__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
  Item: _AccordionItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
  Header: _AccordionHeader__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
  Body: _AccordionBody__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z
}));

/***/ }),

/***/ 8829:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3967);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6792);
/* harmony import */ var _AccordionCollapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1359);
/* harmony import */ var _AccordionItemContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4496);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
"use client";








const AccordionBody = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  bsPrefix,
  className,
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useBootstrapPrefix */ .vE)(bsPrefix, 'accordion-body');
  const {
    eventKey
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_AccordionItemContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_AccordionCollapse__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    eventKey: eventKey,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
      ref: ref,
      ...props,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix)
    })
  });
});
AccordionBody.displayName = 'AccordionBody';
/* harmony default export */ __webpack_exports__.Z = (AccordionBody);

/***/ }),

/***/ 9937:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useAccordionButton */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3967);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AccordionContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8792);
/* harmony import */ var _AccordionItemContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4496);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6792);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
"use client";








function useAccordionButton(eventKey, onClick) {
  const {
    activeEventKey,
    onSelect,
    alwaysOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AccordionContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
  return e => {
    /*
      Compare the event key in context with the given event key.
      If they are the same, then collapse the component.
    */
    let eventKeyPassed = eventKey === activeEventKey ? null : eventKey;
    if (alwaysOpen) {
      if (Array.isArray(activeEventKey)) {
        if (activeEventKey.includes(eventKey)) {
          eventKeyPassed = activeEventKey.filter(k => k !== eventKey);
        } else {
          eventKeyPassed = [...activeEventKey, eventKey];
        }
      } else {
        // activeEventKey is undefined.
        eventKeyPassed = [eventKey];
      }
    }
    onSelect == null || onSelect(eventKeyPassed, e);
    onClick == null || onClick(e);
  };
}
const AccordionButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'button',
  bsPrefix,
  className,
  onClick,
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__/* .useBootstrapPrefix */ .vE)(bsPrefix, 'accordion-button');
  const {
    eventKey
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AccordionItemContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
  const accordionOnClick = useAccordionButton(eventKey, onClick);
  const {
    activeEventKey
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AccordionContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
  if (Component === 'button') {
    props.type = 'button';
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ref: ref,
    onClick: accordionOnClick,
    ...props,
    "aria-expanded": Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : eventKey === activeEventKey,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, bsPrefix, !(0,_AccordionContext__WEBPACK_IMPORTED_MODULE_3__/* .isAccordionItemSelected */ .T)(activeEventKey, eventKey) && 'collapsed')
  });
});
AccordionButton.displayName = 'AccordionButton';
/* harmony default export */ __webpack_exports__.Z = (AccordionButton);

/***/ }),

/***/ 1359:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ esm_AccordionCollapse; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(3967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/ThemeProvider.js
var ThemeProvider = __webpack_require__(6792);
// EXTERNAL MODULE: ./node_modules/dom-helpers/esm/css.js + 6 modules
var css = __webpack_require__(5175);
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/Transition.js + 3 modules
var Transition = __webpack_require__(7762);
// EXTERNAL MODULE: ./node_modules/@restart/ui/esm/utils.js
var utils = __webpack_require__(6899);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/transitionEndListener.js + 6 modules
var transitionEndListener = __webpack_require__(3652);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/createChainedFunction.js
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction(...funcs) {
  return funcs.filter(f => f != null).reduce((acc, f) => {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }
    if (acc === null) return f;
    return function chainedFunction(...args) {
      // @ts-expect-error ignore "this" error
      acc.apply(this, args);
      // @ts-expect-error ignore "this" error
      f.apply(this, args);
    };
  }, null);
}
/* harmony default export */ var esm_createChainedFunction = (createChainedFunction);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/triggerBrowserReflow.js
var triggerBrowserReflow = __webpack_require__(4509);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/TransitionWrapper.js + 2 modules
var TransitionWrapper = __webpack_require__(2796);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Collapse.js










const MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};
function getDefaultDimensionValue(dimension, elem) {
  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
  const value = elem[offset];
  const margins = MARGINS[dimension];
  return value +
  // @ts-expect-error TODO
  parseInt((0,css/* default */.Z)(elem, margins[0]), 10) +
  // @ts-expect-error TODO
  parseInt((0,css/* default */.Z)(elem, margins[1]), 10);
}
const collapseStyles = {
  [Transition/* EXITED */.Wj]: 'collapse',
  [Transition/* EXITING */.Ix]: 'collapsing',
  [Transition/* ENTERING */.d0]: 'collapsing',
  [Transition/* ENTERED */.cn]: 'collapse show'
};
const Collapse = /*#__PURE__*/react.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  className,
  children,
  dimension = 'height',
  in: inProp = false,
  timeout = 300,
  mountOnEnter = false,
  unmountOnExit = false,
  appear = false,
  getDimensionValue = getDefaultDimensionValue,
  ...props
}, ref) => {
  /* Compute dimension */
  const computedDimension = typeof dimension === 'function' ? dimension() : dimension;

  /* -- Expanding -- */
  const handleEnter = (0,react.useMemo)(() => esm_createChainedFunction(elem => {
    elem.style[computedDimension] = '0';
  }, onEnter), [computedDimension, onEnter]);
  const handleEntering = (0,react.useMemo)(() => esm_createChainedFunction(elem => {
    const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
    elem.style[computedDimension] = `${elem[scroll]}px`;
  }, onEntering), [computedDimension, onEntering]);
  const handleEntered = (0,react.useMemo)(() => esm_createChainedFunction(elem => {
    elem.style[computedDimension] = null;
  }, onEntered), [computedDimension, onEntered]);

  /* -- Collapsing -- */
  const handleExit = (0,react.useMemo)(() => esm_createChainedFunction(elem => {
    elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
    (0,triggerBrowserReflow/* default */.Z)(elem);
  }, onExit), [onExit, getDimensionValue, computedDimension]);
  const handleExiting = (0,react.useMemo)(() => esm_createChainedFunction(elem => {
    elem.style[computedDimension] = null;
  }, onExiting), [computedDimension, onExiting]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionWrapper/* default */.Z, {
    ref: ref,
    addEndListener: transitionEndListener/* default */.Z,
    ...props,
    "aria-expanded": props.role ? inProp : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting,
    childRef: (0,utils/* getChildRef */.IV)(children),
    in: inProp,
    timeout: timeout,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit,
    appear: appear,
    children: (state, innerProps) => /*#__PURE__*/react.cloneElement(children, {
      ...innerProps,
      className: classnames_default()(className, children.props.className, collapseStyles[state], computedDimension === 'width' && 'collapse-horizontal')
    })
  });
});
Collapse.displayName = 'Collapse';
/* harmony default export */ var esm_Collapse = (Collapse);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/AccordionContext.js
var AccordionContext = __webpack_require__(8792);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/AccordionCollapse.js
"use client";








/**
 * This component accepts all of [`Collapse`'s props](/docs/utilities/transitions#collapse-1).
 */
const AccordionCollapse = /*#__PURE__*/react.forwardRef(({
  as: Component = 'div',
  bsPrefix,
  className,
  children,
  eventKey,
  ...props
}, ref) => {
  const {
    activeEventKey
  } = (0,react.useContext)(AccordionContext/* default */.Z);
  bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'accordion-collapse');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Collapse, {
    ref: ref,
    in: (0,AccordionContext/* isAccordionItemSelected */.T)(activeEventKey, eventKey),
    ...props,
    className: classnames_default()(className, bsPrefix),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
      children: react.Children.only(children)
    })
  });
});
AccordionCollapse.displayName = 'AccordionCollapse';
/* harmony default export */ var esm_AccordionCollapse = (AccordionCollapse);

/***/ }),

/***/ 8792:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: function() { return /* binding */ isAccordionItemSelected; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
"use client";


function isAccordionItemSelected(activeEventKey, eventKey) {
  return Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : activeEventKey === eventKey;
}
const context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
context.displayName = 'AccordionContext';
/* harmony default export */ __webpack_exports__.Z = (context);

/***/ }),

/***/ 7852:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3967);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6792);
/* harmony import */ var _AccordionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9937);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
"use client";






const AccordionHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'h2',
  'aria-controls': ariaControls,
  bsPrefix,
  className,
  children,
  onClick,
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useBootstrapPrefix */ .vE)(bsPrefix, 'accordion-header');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_AccordionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      onClick: onClick,
      "aria-controls": ariaControls,
      children: children
    })
  });
});
AccordionHeader.displayName = 'AccordionHeader';
/* harmony default export */ __webpack_exports__.Z = (AccordionHeader);

/***/ }),

/***/ 3234:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3967);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6792);
/* harmony import */ var _AccordionItemContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4496);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
"use client";







const AccordionItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  bsPrefix,
  className,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useBootstrapPrefix */ .vE)(bsPrefix, 'accordion-item');
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    eventKey
  }), [eventKey]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_AccordionItemContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
      ref: ref,
      ...props,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix)
    })
  });
});
AccordionItem.displayName = 'AccordionItem';
/* harmony default export */ __webpack_exports__.Z = (AccordionItem);

/***/ }),

/***/ 4496:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
"use client";


const context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  eventKey: ''
});
context.displayName = 'AccordionItemContext';
/* harmony default export */ __webpack_exports__.Z = (context);

/***/ }),

/***/ 2081:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ch: function() { return /* reexport */ useUncontrolled; }
});

// UNUSED EXPORTS: uncontrollable, useUncontrolledProp

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function extends_extends() {
  return extends_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, extends_extends.apply(null, arguments);
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(1143);
;// CONCATENATED MODULE: ./node_modules/uncontrollable/lib/esm/utils.js


var noop = function noop() {};

function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}

function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;

    if (false) { var handler; }
  });
  return propTypes;
}
function isProp(props, prop) {
  return props[prop] !== undefined;
}
function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function canAcceptRef(component) {
  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}
;// CONCATENATED MODULE: ./node_modules/uncontrollable/lib/esm/hook.js



function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = (0,react.useRef)(propValue !== undefined);

  var _useState = (0,react.useState)(defaultValue),
      stateValue = _useState[0],
      setState = _useState[1];

  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }

  return [isProp ? propValue : stateValue, (0,react.useCallback)(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}


function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var _ref = result,
        defaultValue = _ref[defaultKey(fieldName)],
        propsValue = _ref[fieldName],
        rest = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];

    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
        value = _useUncontrolledProp[0],
        handler = _useUncontrolledProp[1];

    return extends_extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}
// EXTERNAL MODULE: ./.cache/react-lifecycles-compat.js
var react_lifecycles_compat = __webpack_require__(9712);
;// CONCATENATED MODULE: ./node_modules/uncontrollable/lib/esm/uncontrollable.js



var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";




function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }

  var displayName = Component.displayName || Component.name || 'Component';
  var canAcceptRef = Utils.canAcceptRef(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(Utils.defaultKey);
  !(canAcceptRef || !methods.length) ?  false ? 0 : invariant(false) : void 0;

  var UncontrolledComponent =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(UncontrolledComponent, _React$Component);

    function UncontrolledComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];

        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;

            _this._notifying = true;

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));

            _this._notifying = false;
          }

          if (!_this.unmounted) _this.setState(function (_ref) {
            var _extends2;

            var values = _ref.values;
            return {
              values: _extends(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
            };
          });
        };

        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      var values = Object.create(null);
      controlledProps.forEach(function (key) {
        values[key] = _this.props[Utils.defaultKey(key)];
      });
      _this.state = {
        values: values,
        prevProps: {}
      };
      return _this;
    }

    var _proto = UncontrolledComponent.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let setState trigger the update
      return !this._notifying;
    };

    UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
      var values = _ref2.values,
          prevProps = _ref2.prevProps;
      var nextState = {
        values: _extends(Object.create(null), values),
        prevProps: {}
      };
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        nextState.prevProps[key] = props[key];

        if (!Utils.isProp(props, key) && Utils.isProp(prevProps, key)) {
          nextState.values[key] = props[Utils.defaultKey(key)];
        }
      });
      return nextState;
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          innerRef = _this$props2.innerRef,
          props = _objectWithoutPropertiesLoose(_this$props2, ["innerRef"]);

      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this2.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
      });
      return React.createElement(Component, _extends({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };

    return UncontrolledComponent;
  }(React.Component);

  polyfill(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = _extends({
    innerRef: function innerRef() {}
  }, Utils.uncontrolledPropTypes(controlledValues, displayName));
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;

      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;

  if (React.forwardRef) {
    WrappedComponent = React.forwardRef(function (props, ref) {
      return React.createElement(UncontrolledComponent, _extends({}, props, {
        innerRef: ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }

  WrappedComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }

    return uncontrollable(newComponent, _extends({}, controlledValues, additions), nextMethods);
  };

  return WrappedComponent;
}
;// CONCATENATED MODULE: ./node_modules/uncontrollable/lib/esm/index.js



/***/ })

}]);
//# sourceMappingURL=92abac6f06dc792045485d941b075bc7b65d8fd1-1756b6e6c73704a24c6a.js.map