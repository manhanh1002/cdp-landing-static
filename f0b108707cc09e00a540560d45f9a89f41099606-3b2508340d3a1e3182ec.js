(self["webpackChunkesoft_gatsby"] = self["webpackChunkesoft_gatsby"] || []).push([[1672],{

/***/ 861:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FT: function() { return /* binding */ useButtonProps; }
/* harmony export */ });
/* unused harmony export isTrivialHref */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);
const _excluded = ["as", "disabled"];
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }


function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  role,
  onClick,
  tabIndex = 0,
  type
}) {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = 'a';
    } else {
      tagName = 'button';
    }
  }
  const meta = {
    tagName
  };
  if (tagName === 'button') {
    return [{
      type: type || 'button',
      disabled
    }, meta];
  }
  const handleClick = event => {
    if (disabled || tagName === 'a' && isTrivialHref(href)) {
      event.preventDefault();
    }
    if (disabled) {
      event.stopPropagation();
      return;
    }
    onClick == null ? void 0 : onClick(event);
  };
  const handleKeyDown = event => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };
  if (tagName === 'a') {
    // Ensure there's a href so Enter can trigger anchor button.
    href || (href = '#');
    if (disabled) {
      href = undefined;
    }
  }
  return [{
    role: role != null ? role : 'button',
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: undefined,
    tabIndex: disabled ? undefined : tabIndex,
    href,
    target: tagName === 'a' ? target : undefined,
    'aria-disabled': !disabled ? undefined : disabled,
    rel: tagName === 'a' ? rel : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta];
}
const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref, ref) => {
  let {
      as: asProp,
      disabled
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  const [buttonProps, {
    tagName: Component
  }] = useButtonProps(Object.assign({
    tagName: asProp,
    disabled
  }, props));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, Object.assign({}, props, buttonProps, {
    ref: ref
  }));
});
Button.displayName = 'Button';
/* harmony default export */ __webpack_exports__.ZP = (Button);

/***/ }),

/***/ 9819:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: function() { return /* binding */ Head; }
});

;// CONCATENATED MODULE: ./src/assets/img/logo/title5.png
/* harmony default export */ var title5 = ("data:image/png;base64,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");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/PageMeta.tsx
const Head=()=>{return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("title",null,"CDP.vn - Gi\u1EA3i ph\xE1p t\u0103ng tr\u01B0\u1EDFng \u0111a k\xEAnh v\u1EDBi d\u1EEF li\u1EC7u t\u1EADp trung"),/*#__PURE__*/react.createElement("link",{rel:"icon",href:title5,type:"image/png"}));};

/***/ }),

/***/ 5005:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3967);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _restart_ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(861);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6792);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
"use client";






const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  as,
  bsPrefix,
  variant = 'primary',
  size,
  active = false,
  disabled = false,
  className,
  ...props
}, ref) => {
  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useBootstrapPrefix */ .vE)(bsPrefix, 'btn');
  const [buttonProps, {
    tagName
  }] = (0,_restart_ui_Button__WEBPACK_IMPORTED_MODULE_4__/* .useButtonProps */ .FT)({
    tagName: as,
    disabled,
    ...props
  });
  const Component = tagName;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ...buttonProps,
    ...props,
    ref: ref,
    disabled: disabled,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, prefix, active && 'active', variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && disabled && 'disabled')
  });
});
Button.displayName = 'Button';
/* harmony default export */ __webpack_exports__.Z = (Button);

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

/***/ 7833:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ esm_Form; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(3967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Feedback.js




const propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: (prop_types_default()).string,
  /** Display feedback as a tooltip. */
  tooltip: (prop_types_default()).bool,
  as: (prop_types_default()).elementType
};
const Feedback = /*#__PURE__*/react.forwardRef(
// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  as: Component = 'div',
  className,
  type = 'valid',
  tooltip = false,
  ...props
}, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
  ...props,
  ref: ref,
  className: classnames_default()(className, `${type}-${tooltip ? 'tooltip' : 'feedback'}`)
}));
Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
/* harmony default export */ var esm_Feedback = (Feedback);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormContext.js
"use client";



// TODO

const FormContext = /*#__PURE__*/react.createContext({});
/* harmony default export */ var esm_FormContext = (FormContext);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/ThemeProvider.js
var ThemeProvider = __webpack_require__(6792);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormCheckInput.js
"use client";







const FormCheckInput = /*#__PURE__*/react.forwardRef(({
  id,
  bsPrefix,
  className,
  type = 'checkbox',
  isValid = false,
  isInvalid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react.useContext)(esm_FormContext);
  bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'form-check-input');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ...props,
    ref: ref,
    type: type,
    id: id || controlId,
    className: classnames_default()(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
  });
});
FormCheckInput.displayName = 'FormCheckInput';
/* harmony default export */ var esm_FormCheckInput = (FormCheckInput);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormCheckLabel.js
"use client";







const FormCheckLabel = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react.useContext)(esm_FormContext);
  bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'form-check-label');
  return /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
    ...props,
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: classnames_default()(className, bsPrefix)
  });
});
FormCheckLabel.displayName = 'FormCheckLabel';
/* harmony default export */ var esm_FormCheckLabel = (FormCheckLabel);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/ElementChildren.js


/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */
function map(children, func) {
  let index = 0;
  return React.Children.map(children, child => /*#__PURE__*/React.isValidElement(child) ? func(child, index++) : child);
}

/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */
function forEach(children, func) {
  let index = 0;
  React.Children.forEach(children, child => {
    if ( /*#__PURE__*/React.isValidElement(child)) func(child, index++);
  });
}

/**
 * Finds whether a component's `children` prop includes a React element of the
 * specified type.
 */
function hasChildOfType(children, type) {
  return react.Children.toArray(children).some(child => /*#__PURE__*/react.isValidElement(child) && child.type === type);
}

;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormCheck.js
"use client";













const FormCheck = /*#__PURE__*/react.forwardRef(({
  id,
  bsPrefix,
  bsSwitchPrefix,
  inline = false,
  reverse = false,
  disabled = false,
  isValid = false,
  isInvalid = false,
  feedbackTooltip = false,
  feedback,
  feedbackType,
  className,
  style,
  title = '',
  type = 'checkbox',
  label,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as = 'input',
  ...props
}, ref) => {
  bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'form-check');
  bsSwitchPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsSwitchPrefix, 'form-switch');
  const {
    controlId
  } = (0,react.useContext)(esm_FormContext);
  const innerFormContext = (0,react.useMemo)(() => ({
    controlId: id || controlId
  }), [controlId, id]);
  const hasLabel = !children && label != null && label !== false || hasChildOfType(children, esm_FormCheckLabel);
  const input = /*#__PURE__*/(0,jsx_runtime.jsx)(esm_FormCheckInput, {
    ...props,
    type: type === 'switch' ? 'checkbox' : type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    disabled: disabled,
    as: as
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_FormContext.Provider, {
    value: innerFormContext,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: style,
      className: classnames_default()(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === 'switch' && bsSwitchPrefix),
      children: children || /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [input, hasLabel && /*#__PURE__*/(0,jsx_runtime.jsx)(esm_FormCheckLabel, {
          title: title,
          children: label
        }), feedback && /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Feedback, {
          type: feedbackType,
          tooltip: feedbackTooltip,
          children: feedback
        })]
      })
    })
  });
});
FormCheck.displayName = 'FormCheck';
/* harmony default export */ var esm_FormCheck = (Object.assign(FormCheck, {
  Input: esm_FormCheckInput,
  Label: esm_FormCheckLabel
}));
// EXTERNAL MODULE: ./node_modules/warning/warning.js
var warning = __webpack_require__(2473);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormControl.js
"use client";









const FormControl = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  type,
  size,
  htmlSize,
  id,
  className,
  isValid = false,
  isInvalid = false,
  plaintext,
  readOnly,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react.useContext)(esm_FormContext);
  bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'form-control');
   false ? 0 : void 0;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ...props,
    type: type,
    size: htmlSize,
    ref: ref,
    readOnly: readOnly,
    id: id || controlId,
    className: classnames_default()(className, plaintext ? `${bsPrefix}-plaintext` : bsPrefix, size && `${bsPrefix}-${size}`, type === 'color' && `${bsPrefix}-color`, isValid && 'is-valid', isInvalid && 'is-invalid')
  });
});
FormControl.displayName = 'FormControl';
/* harmony default export */ var esm_FormControl = (Object.assign(FormControl, {
  Feedback: esm_Feedback
}));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormFloating.js
"use client";





const FormFloating = /*#__PURE__*/react.forwardRef(({
  className,
  bsPrefix,
  as: Component = 'div',
  ...props
}, ref) => {
  bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'form-floating');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    className: classnames_default()(className, bsPrefix),
    ...props
  });
});
FormFloating.displayName = 'FormFloating';
/* harmony default export */ var esm_FormFloating = (FormFloating);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormGroup.js




const FormGroup = /*#__PURE__*/react.forwardRef(({
  controlId,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const context = (0,react.useMemo)(() => ({
    controlId
  }), [controlId]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_FormContext.Provider, {
    value: context,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
      ...props,
      ref: ref
    })
  });
});
FormGroup.displayName = 'FormGroup';
/* harmony default export */ var esm_FormGroup = (FormGroup);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(1555);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormLabel.js
"use client";









const FormLabel = /*#__PURE__*/react.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'label',
  bsPrefix,
  column = false,
  visuallyHidden = false,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react.useContext)(esm_FormContext);
  bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'form-label');
  let columnClass = 'col-form-label';
  if (typeof column === 'string') columnClass = `${columnClass} ${columnClass}-${column}`;
  const classes = classnames_default()(className, bsPrefix, visuallyHidden && 'visually-hidden', column && columnClass);
   false ? 0 : void 0;
  htmlFor = htmlFor || controlId;
  if (column) return /*#__PURE__*/(0,jsx_runtime.jsx)(Col/* default */.Z, {
    ref: ref,
    as: "label",
    className: classes,
    htmlFor: htmlFor,
    ...props
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    className: classes,
    htmlFor: htmlFor,
    ...props
  });
});
FormLabel.displayName = 'FormLabel';
/* harmony default export */ var esm_FormLabel = (FormLabel);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormRange.js
"use client";







const FormRange = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  className,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react.useContext)(esm_FormContext);
  bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'form-range');
  return /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
    ...props,
    type: "range",
    ref: ref,
    className: classnames_default()(className, bsPrefix),
    id: id || controlId
  });
});
FormRange.displayName = 'FormRange';
/* harmony default export */ var esm_FormRange = (FormRange);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormSelect.js
"use client";







const FormSelect = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  size,
  htmlSize,
  className,
  isValid = false,
  isInvalid = false,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react.useContext)(esm_FormContext);
  bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'form-select');
  return /*#__PURE__*/(0,jsx_runtime.jsx)("select", {
    ...props,
    size: htmlSize,
    ref: ref,
    className: classnames_default()(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
    id: id || controlId
  });
});
FormSelect.displayName = 'FormSelect';
/* harmony default export */ var esm_FormSelect = (FormSelect);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormText.js
"use client";





const FormText = /*#__PURE__*/react.forwardRef(
// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  bsPrefix,
  className,
  as: Component = 'small',
  muted,
  ...props
}, ref) => {
  bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'form-text');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ...props,
    ref: ref,
    className: classnames_default()(className, bsPrefix, muted && 'text-muted')
  });
});
FormText.displayName = 'FormText';
/* harmony default export */ var esm_FormText = (FormText);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Switch.js



const Switch = /*#__PURE__*/react.forwardRef((props, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)(esm_FormCheck, {
  ...props,
  ref: ref,
  type: "switch"
}));
Switch.displayName = 'Switch';
/* harmony default export */ var esm_Switch = (Object.assign(Switch, {
  Input: esm_FormCheck.Input,
  Label: esm_FormCheck.Label
}));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FloatingLabel.js
"use client";







const FloatingLabel = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  className,
  children,
  controlId,
  label,
  ...props
}, ref) => {
  bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'form-floating');
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(esm_FormGroup, {
    ref: ref,
    className: classnames_default()(className, bsPrefix),
    controlId: controlId,
    ...props,
    children: [children, /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
      htmlFor: controlId,
      children: label
    })]
  });
});
FloatingLabel.displayName = 'FloatingLabel';
/* harmony default export */ var esm_FloatingLabel = (FloatingLabel);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Form.js














const Form_propTypes = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: (prop_types_default()).any,
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: (prop_types_default()).bool,
  as: (prop_types_default()).elementType
};
const Form = /*#__PURE__*/react.forwardRef(({
  className,
  validated,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'form',
  ...props
}, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
  ...props,
  ref: ref,
  className: classnames_default()(className, validated && 'was-validated')
}));
Form.displayName = 'Form';
Form.propTypes = Form_propTypes;
/* harmony default export */ var esm_Form = (Object.assign(Form, {
  Group: esm_FormGroup,
  Control: esm_FormControl,
  Floating: esm_FormFloating,
  Check: esm_FormCheck,
  Switch: esm_Switch,
  Label: esm_FormLabel,
  Text: esm_FormText,
  Range: esm_FormRange,
  Select: esm_FormSelect,
  FloatingLabel: esm_FloatingLabel
}));

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

/***/ 4023:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__.Z = (__webpack_require__.p + "static/header-logo2-c39c0b1e3aa6478c180427c44f0a9ad0.png");

/***/ }),

/***/ 2011:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__.Z = (__webpack_require__.p + "static/apps-shape1-8f2824ab43f2c578b9484783a726d28b.png");

/***/ }),

/***/ 2473:
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


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
//# sourceMappingURL=f0b108707cc09e00a540560d45f9a89f41099606-3b2508340d3a1e3182ec.js.map