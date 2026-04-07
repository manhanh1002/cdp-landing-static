"use strict";
(self["webpackChunkesoft_gatsby"] = self["webpackChunkesoft_gatsby"] || []).push([[2672],{

/***/ 7514:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7177);
/* harmony import */ var _restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8490);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7294);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6899);




function NoopTransition({
  children,
  in: inProp,
  onExited,
  mountOnEnter,
  unmountOnExit
}) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const hasEnteredRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(inProp);
  const handleExited = (0,_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(onExited);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (inProp) hasEnteredRef.current = true;else {
      handleExited(ref.current);
    }
  }, [inProp, handleExited]);
  const combinedRef = (0,_restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(ref, (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .getChildRef */ .IV)(children));
  const child = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(children, {
    ref: combinedRef
  });
  if (inProp) return child;
  if (unmountOnExit) {
    return null;
  }
  if (!hasEnteredRef.current && mountOnEnter) {
    return null;
  }
  return child;
}
/* harmony default export */ __webpack_exports__.Z = (NoopTransition);

/***/ }),

/***/ 7126:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: function() { return /* binding */ makeEventKey; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

const SelectableContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const makeEventKey = (eventKey, href = null) => {
  if (eventKey != null) return String(eventKey);
  return href || null;
};
/* harmony default export */ __webpack_exports__.Z = (SelectableContext);

/***/ }),

/***/ 6626:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

const TabContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/* harmony default export */ __webpack_exports__.Z = (TabContext);

/***/ }),

/***/ 5963:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: function() { return /* binding */ useTabPanel; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6626);
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7126);
/* harmony import */ var _NoopTransition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7514);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);
const _excluded = ["active", "eventKey", "mountOnEnter", "transition", "unmountOnExit", "role", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"],
  _excluded2 = ["activeKey", "getControlledId", "getControllerId"],
  _excluded3 = ["as"];
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }






function useTabPanel(_ref) {
  let {
      active,
      eventKey,
      mountOnEnter,
      transition,
      unmountOnExit,
      role = 'tabpanel',
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_TabContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
  if (!context) return [Object.assign({}, props, {
    role
  }), {
    eventKey,
    isActive: active,
    mountOnEnter,
    transition,
    unmountOnExit,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  }];
  const {
      activeKey,
      getControlledId,
      getControllerId
    } = context,
    rest = _objectWithoutPropertiesLoose(context, _excluded2);
  const key = (0,_SelectableContext__WEBPACK_IMPORTED_MODULE_3__/* .makeEventKey */ .h)(eventKey);
  return [Object.assign({}, props, {
    role,
    id: getControlledId(eventKey),
    'aria-labelledby': getControllerId(eventKey)
  }), {
    eventKey,
    isActive: active == null && key != null ? (0,_SelectableContext__WEBPACK_IMPORTED_MODULE_3__/* .makeEventKey */ .h)(activeKey) === key : active,
    transition: transition || rest.transition,
    mountOnEnter: mountOnEnter != null ? mountOnEnter : rest.mountOnEnter,
    unmountOnExit: unmountOnExit != null ? unmountOnExit : rest.unmountOnExit,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  }];
}
const TabPanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(_ref2, ref) => {
  let {
      as: Component = 'div'
    } = _ref2,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded3);
  const [tabPanelProps, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = _NoopTransition__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
  }] = useTabPanel(props);
  // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
  // conflict with the top level one.
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_TabContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.Provider, {
    value: null,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SelectableContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.Provider, {
      value: null,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Transition, {
        in: isActive,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, Object.assign({}, tabPanelProps, {
          ref: ref,
          hidden: !isActive,
          "aria-hidden": !isActive
        }))
      })
    })
  });
});
TabPanel.displayName = 'TabPanel';
/* harmony default export */ __webpack_exports__.Z = (TabPanel);

/***/ }),

/***/ 7893:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */
function useCommittedRef(value) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref;
}
/* harmony default export */ __webpack_exports__.Z = (useCommittedRef);

/***/ }),

/***/ 7177:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ useEventCallback; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7893);


function useEventCallback(fn) {
  const ref = (0,_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(fn);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (...args) {
    return ref.current && ref.current(...args);
  }, [ref]);
}

/***/ }),

/***/ 8490:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export mergeRefs */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

const toFnRef = ref => !ref || typeof ref === 'function' ? ref : value => {
  ref.current = value;
};
function mergeRefs(refA, refB) {
  const a = toFnRef(refA);
  const b = toFnRef(refB);
  return value => {
    if (a) a(value);
    if (b) b(value);
  };
}

/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */
function useMergedRefs(refA, refB) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => mergeRefs(refA, refB), [refA, refB]);
}
/* harmony default export */ __webpack_exports__.Z = (useMergedRefs);

/***/ }),

/***/ 1068:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3967);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7762);
/* harmony import */ var _restart_ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6899);
/* harmony import */ var _transitionEndListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3652);
/* harmony import */ var _triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4509);
/* harmony import */ var _TransitionWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2796);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);









const fadeStyles = {
  [react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_3__/* .ENTERING */ .d0]: 'show',
  [react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_3__/* .ENTERED */ .cn]: 'show'
};
const Fade = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  className,
  children,
  transitionClasses = {},
  onEnter,
  ...rest
}, ref) => {
  const props = {
    in: false,
    timeout: 300,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    ...rest
  };
  const handleEnter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((node, isAppearing) => {
    (0,_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(node);
    onEnter == null || onEnter(node, isAppearing);
  }, [onEnter]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TransitionWrapper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    ref: ref,
    addEndListener: _transitionEndListener__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    ...props,
    onEnter: handleEnter,
    childRef: (0,_restart_ui_utils__WEBPACK_IMPORTED_MODULE_7__/* .getChildRef */ .IV)(children),
    children: (status, innerProps) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(children, {
      ...innerProps,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('fade', className, children.props.className, fadeStyles[status], transitionClasses[status])
    })
  });
});
Fade.displayName = 'Fade';
/* harmony default export */ __webpack_exports__.Z = (Fade);

/***/ }),

/***/ 6505:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ esm_TabContainer; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/node_modules/uncontrollable/lib/esm/index.js
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
function useUncontrolledProp(propValue, defaultValue, handler) {
  const wasPropRef = (0,react.useRef)(propValue !== undefined);
  const [stateValue, setState] = (0,react.useState)(defaultValue);
  const isProp = propValue !== undefined;
  const wasProp = wasPropRef.current;
  wasPropRef.current = isProp;

  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */
  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }
  return [isProp ? propValue : stateValue, (0,react.useCallback)((...args) => {
    const [value, ...rest] = args;
    let returnValue = handler == null ? void 0 : handler(value, ...rest);
    setState(value);
    return returnValue;
  }, [handler])];
}

function useUncontrolled(props, config) {
  return Object.keys(config).reduce((result, fieldName) => {
    const _ref = result,
      _defaultKey = defaultKey(fieldName),
      {
        [_defaultKey]: defaultValue,
        [fieldName]: propsValue
      } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, [_defaultKey, fieldName].map(_toPropertyKey));
    const handlerName = config[fieldName];
    const [value, handler] = useUncontrolledProp(propsValue, defaultValue, props[handlerName]);
    return Object.assign({}, rest, {
      [fieldName]: value,
      [handlerName]: handler
    });
  }, props);
}
;// CONCATENATED MODULE: ./node_modules/@react-aria/ssr/dist/SSRProvider.mjs


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We must avoid a circular dependency with @react-aria/utils, and this useLayoutEffect is
// guarded by a check that it only runs on the client side.
// eslint-disable-next-line rulesdir/useLayoutEffectRule

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $b5e257d569688ac6$var$defaultContext = {
    prefix: String(Math.round(Math.random() * 10000000000)),
    current: 0
};
const $b5e257d569688ac6$var$SSRContext = /*#__PURE__*/ (0, react).createContext($b5e257d569688ac6$var$defaultContext);
const $b5e257d569688ac6$var$IsSSRContext = /*#__PURE__*/ (0, react).createContext(false);
// This is only used in React < 18.
function $b5e257d569688ac6$var$LegacySSRProvider(props) {
    let cur = (0, $670gB$useContext)($b5e257d569688ac6$var$SSRContext);
    let counter = $b5e257d569688ac6$var$useCounter(cur === $b5e257d569688ac6$var$defaultContext);
    let [isSSR, setIsSSR] = (0, $670gB$useState)(true);
    let value = (0, $670gB$useMemo)(()=>({
            // If this is the first SSRProvider, start with an empty string prefix, otherwise
            // append and increment the counter.
            prefix: cur === $b5e257d569688ac6$var$defaultContext ? '' : `${cur.prefix}-${counter}`,
            current: 0
        }), [
        cur,
        counter
    ]);
    // If on the client, and the component was initially server rendered,
    // then schedule a layout effect to update the component after hydration.
    if (typeof document !== 'undefined') // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, $670gB$useLayoutEffect)(()=>{
        setIsSSR(false);
    }, []);
    return /*#__PURE__*/ (0, $670gB$react).createElement($b5e257d569688ac6$var$SSRContext.Provider, {
        value: value
    }, /*#__PURE__*/ (0, $670gB$react).createElement($b5e257d569688ac6$var$IsSSRContext.Provider, {
        value: isSSR
    }, props.children));
}
let $b5e257d569688ac6$var$warnedAboutSSRProvider = false;
function $b5e257d569688ac6$export$9f8ac96af4b1b2ae(props) {
    if (typeof (0, $670gB$react)['useId'] === 'function') {
        if (false) {}
        return /*#__PURE__*/ (0, $670gB$react).createElement((0, $670gB$react).Fragment, null, props.children);
    }
    return /*#__PURE__*/ (0, $670gB$react).createElement($b5e257d569688ac6$var$LegacySSRProvider, props);
}
let $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
let $b5e257d569688ac6$var$componentIds = new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
    let ctx = (0, react.useContext)($b5e257d569688ac6$var$SSRContext);
    let ref = (0, react.useRef)(null);
    // eslint-disable-next-line rulesdir/pure-render
    if (ref.current === null && !isDisabled) {
        var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        // In strict mode, React renders components twice, and the ref will be reset to null on the second render.
        // This means our id counter will be incremented twice instead of once. This is a problem because on the
        // server, components are only rendered once and so ids generated on the server won't match the client.
        // In React 18, useId was introduced to solve this, but it is not available in older versions. So to solve this
        // we need to use some React internals to access the underlying Fiber instance, which is stable between renders.
        // This is exposed as ReactCurrentOwner in development, which is all we need since StrictMode only runs in development.
        // To ensure that we only increment the global counter once, we store the starting id for this component in
        // a weak map associated with the Fiber. On the second render, we reset the global counter to this value.
        // Since React runs the second render immediately after the first, this is safe.
        // @ts-ignore
        let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, react).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
        if (currentOwner) {
            let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
            if (prevComponentValue == null) // On the first render, and first call to useId, store the id and state in our weak map.
            $b5e257d569688ac6$var$componentIds.set(currentOwner, {
                id: ctx.current,
                state: currentOwner.memoizedState
            });
            else if (currentOwner.memoizedState !== prevComponentValue.state) {
                // On the second render, the memoizedState gets reset by React.
                // Reset the counter, and remove from the weak map so we don't
                // do this for subsequent useId calls.
                ctx.current = prevComponentValue.id;
                $b5e257d569688ac6$var$componentIds.delete(currentOwner);
            }
        }
        // eslint-disable-next-line rulesdir/pure-render
        ref.current = ++ctx.current;
    }
    // eslint-disable-next-line rulesdir/pure-render
    return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
    let ctx = (0, react.useContext)($b5e257d569688ac6$var$SSRContext);
    // If we are rendering in a non-DOM environment, and there's no SSRProvider,
    // provide a warning to hint to the developer to add one.
    if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM && "production" !== 'production') {}
    let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
    let prefix = ctx === $b5e257d569688ac6$var$defaultContext && "production" === 'test' ? 0 : `react-aria${ctx.prefix}`;
    return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
    let id = (0, react).useId();
    let [didSSR] = (0, react.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
    let prefix = didSSR || "production" === 'test' ? 'react-aria' : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
    return defaultId || `${prefix}-${id}`;
}
const $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, react)['useId'] === 'function' ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
    return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
    return true;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
    // noop
    return ()=>{};
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
    // In React 18, we can use useSyncExternalStore to detect if we're server rendering or hydrating.
    if (typeof (0, react)['useSyncExternalStore'] === 'function') return (0, react)['useSyncExternalStore']($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (0, react.useContext)($b5e257d569688ac6$var$IsSSRContext);
}



//# sourceMappingURL=SSRProvider.module.js.map

// EXTERNAL MODULE: ./node_modules/@restart/ui/esm/TabContext.js
var TabContext = __webpack_require__(6626);
// EXTERNAL MODULE: ./node_modules/@restart/ui/esm/SelectableContext.js
var SelectableContext = __webpack_require__(7126);
// EXTERNAL MODULE: ./node_modules/@restart/ui/esm/TabPanel.js
var TabPanel = __webpack_require__(5963);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@restart/ui/esm/Tabs.js








const Tabs = props => {
  const {
    id: userId,
    generateChildId: generateCustomChildId,
    onSelect: propsOnSelect,
    activeKey: propsActiveKey,
    defaultActiveKey,
    transition,
    mountOnEnter,
    unmountOnExit,
    children
  } = props;
  const [activeKey, onSelect] = useUncontrolledProp(propsActiveKey, defaultActiveKey, propsOnSelect);
  const id = $b5e257d569688ac6$export$619500959fc48b26(userId);
  const generateChildId = (0,react.useMemo)(() => generateCustomChildId || ((key, type) => id ? `${id}-${type}-${key}` : null), [id, generateCustomChildId]);
  const tabContext = (0,react.useMemo)(() => ({
    onSelect,
    activeKey,
    transition,
    mountOnEnter: mountOnEnter || false,
    unmountOnExit: unmountOnExit || false,
    getControlledId: key => generateChildId(key, 'tabpane'),
    getControllerId: key => generateChildId(key, 'tab')
  }), [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TabContext/* default */.Z.Provider, {
    value: tabContext,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(SelectableContext/* default */.Z.Provider, {
      value: onSelect || null,
      children: children
    })
  });
};
Tabs.Panel = TabPanel/* default */.Z;
/* harmony default export */ var esm_Tabs = (Tabs);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/getTabTransitionComponent.js
var getTabTransitionComponent = __webpack_require__(6101);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/TabContainer.js



const TabContainer = ({
  transition,
  ...props
}) => /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Tabs, {
  ...props,
  transition: (0,getTabTransitionComponent/* default */.Z)(transition)
});
TabContainer.displayName = 'TabContainer';
/* harmony default export */ var esm_TabContainer = (TabContainer);

/***/ }),

/***/ 8752:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3967);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6792);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
"use client";





const TabContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({
  className,
  bsPrefix,
  as: Component = 'div',
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useBootstrapPrefix */ .vE)(bsPrefix, 'tab-content');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, bsPrefix),
    ...props
  });
});
TabContent.displayName = 'TabContent';
/* harmony default export */ __webpack_exports__.Z = (TabContent);

/***/ }),

/***/ 5103:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3967);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _restart_ui_SelectableContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7126);
/* harmony import */ var _restart_ui_TabContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6626);
/* harmony import */ var _restart_ui_TabPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5963);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6792);
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1068);
/* harmony import */ var _getTabTransitionComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6101);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
"use client";










const TabPane = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  transition,
  ...props
}, ref) => {
  const [{
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    ...rest
  }, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = _Fade__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
  }] = (0,_restart_ui_TabPanel__WEBPACK_IMPORTED_MODULE_4__/* .useTabPanel */ .W)({
    ...props,
    transition: (0,_getTabTransitionComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(transition)
  });
  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__/* .useBootstrapPrefix */ .vE)(bsPrefix, 'tab-pane');

  // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
  // conflict with the top level one.
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_restart_ui_TabContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Provider, {
    value: null,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_restart_ui_SelectableContext__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Provider, {
      value: null,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Transition, {
        in: isActive,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
          ...rest,
          ref: ref,
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, prefix, isActive && 'active')
        })
      })
    })
  });
});
TabPane.displayName = 'TabPane';
/* harmony default export */ __webpack_exports__.Z = (TabPane);

/***/ }),

/***/ 6101:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ getTabTransitionComponent; }
/* harmony export */ });
/* harmony import */ var _restart_ui_NoopTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7514);
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1068);


function getTabTransitionComponent(transition) {
  if (typeof transition === 'boolean') {
    return transition ? _Fade__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z : _restart_ui_NoopTransition__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
  }
  return transition;
}

/***/ })

}]);
//# sourceMappingURL=25b3d88ae3d876fb6d2c053c8513cd975d47202c-93896a22161f2ad007f3.js.map