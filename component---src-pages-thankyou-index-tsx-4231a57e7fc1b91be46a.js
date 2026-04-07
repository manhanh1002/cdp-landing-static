(self["webpackChunkesoft_gatsby"] = self["webpackChunkesoft_gatsby"] || []).push([[8219],{

/***/ 1063:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: function() { return /* binding */ currentYear; }
/* harmony export */ });
const currentYear=new Date().getFullYear();

/***/ }),

/***/ 8007:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
const useScrollEvent=()=>{const{0:scrollPassed,1:setScrollPassed}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);const{0:scrollY,1:setScrollY}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);const{0:scrollHeight,1:setScrollHeight}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);const handleScroll=()=>{setScrollY(window.scrollY);setScrollPassed((window.scrollY+window.innerHeight)*100/document.body.offsetHeight);};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{window.addEventListener('scroll',handleScroll,{passive:true});setScrollY(window.scrollY);setScrollHeight(document.body.offsetHeight);return()=>{window.removeEventListener('scroll',handleScroll);};},[]);return{scrollPassed,scrollY,scrollHeight};};/* harmony default export */ __webpack_exports__.Z = (useScrollEvent);

/***/ }),

/***/ 8708:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
const useToggle=function(initialState){if(initialState===void 0){initialState=false;}const{0:isOpen,1:setIsOpen}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);const show=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>setIsOpen(true),[]);const hide=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>setIsOpen(false),[]);const toggle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>setIsOpen(!isOpen),[isOpen]);return{isOpen,toggle,show,hide};};/* harmony default export */ __webpack_exports__.Z = (useToggle);

/***/ }),

/***/ 6622:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ components_Footer; }
});

// UNUSED EXPORTS: footerData

;// CONCATENATED MODULE: ./src/assets/img/logo/footer-logo1.png
/* harmony default export */ var footer_logo1 = (__webpack_require__.p + "static/footer-logo1-3a9c7c03081a9df1c6f8c9811ffbc09d.png");
;// CONCATENATED MODULE: ./src/assets/img/others/meta.png
/* harmony default export */ var meta = (__webpack_require__.p + "static/meta-9424f044031dd1c63e8a1805d951af18.png");
;// CONCATENATED MODULE: ./src/assets/img/others/zalominiapp.png
/* harmony default export */ var zalominiapp = (__webpack_require__.p + "static/zalominiapp-1ecc8d8aeb7a3cc0d6e984bbae744d2a.png");
// EXTERNAL MODULE: ./src/components/CurrentYear.tsx
var CurrentYear = __webpack_require__(1063);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(4160);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Container.js
var Container = __webpack_require__(682);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(4051);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(1555);
// EXTERNAL MODULE: ./node_modules/react-icons/fa6/index.mjs
var fa6 = __webpack_require__(6204);
;// CONCATENATED MODULE: ./src/pages/single/home-9/components/Footer.tsx
const footerData=[{title:'Product',links:[{label:'Pricing'},{label:'Integration'},{label:'Features'},{label:'Templates'},{label:'Changelog'}]},{title:'Support',links:[{label:'On-boarding'},{label:'Help center'},{label:'Contact us'},{label:'Experts'},{label:'Status'}]},{title:'Resources',links:[{label:'Community'},{label:'Affiliates'},{label:'Partnerships'},{label:'Perks & Benefits'},{label:'Api docs'}]},{title:'Company',links:[{label:'About'},{label:'Our blog'},{label:'In the press'},{label:'Brand assets'},{label:'Work with us'}]},{title:'Download',links:[{label:'iPhone & iPad'},{label:'Android'},{label:'MacOS'},{label:'Window'}]}];const Footer=()=>{return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("div",{className:"footer2 footer-home9"},/*#__PURE__*/react.createElement("div",{className:"footer-home9-top"},/*#__PURE__*/react.createElement(Container/* default */.Z,null,/*#__PURE__*/react.createElement(Row/* default */.Z,{className:"align-items-start"},/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:8,md:12},/*#__PURE__*/react.createElement("div",{className:"footer-home9-left"},/*#__PURE__*/react.createElement("div",{className:"footer-home9-logo"},/*#__PURE__*/react.createElement("img",{src:footer_logo1,alt:"CDP.vn"})),/*#__PURE__*/react.createElement("p",{className:"footer-home9-company"},"C\xD4NG TY TNHH GI\u1EA2I PH\xC1P C\xD4NG NGH\u1EC6 VIK SOLUTION - GI\u1EA2I PH\xC1P T\u1EF0 \u0110\u1ED8NG H\xD3A DOANH NGHI\u1EC6P"),/*#__PURE__*/react.createElement("p",{className:"footer-home9-label"},"Tr\u1EE5 s\u1EDF:"),/*#__PURE__*/react.createElement("p",{className:"footer-home9-text"},"T\xF2a A Vi\u1EC7t \u0110\u1EE9c Complex - Thanh Xu\xE2n - H\xE0 N\u1ED9i."),/*#__PURE__*/react.createElement("p",{className:"footer-home9-label"},"Chi nh\xE1nh:"),/*#__PURE__*/react.createElement("p",{className:"footer-home9-text"},"T\u1EA7ng 4, T\xF2a nh\xE0 IELTS Mentor - 179 L\u1EA1c Long Qu\xE2n, Ph\u01B0\u1EDDng H\u1EA1c Th\xE0nh, TP Thanh Ho\xE1."),/*#__PURE__*/react.createElement("p",{className:"footer-home9-text"},"T\u1EA7ng 7, T\xF2a A Sky Center - 5B Ph\u1ED5 Quang, Ph\u01B0\u1EDDng 2, Qu\u1EADn T\xE2n B\xECnh, TP H\u1ED3 Ch\xED Minh."))),/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:4,md:12},/*#__PURE__*/react.createElement("div",{className:"footer-home9-right"},/*#__PURE__*/react.createElement("div",{className:"footer-home9-badges"},/*#__PURE__*/react.createElement("img",{src:meta,alt:"Meta Business Partner"}),/*#__PURE__*/react.createElement("img",{src:zalominiapp,alt:"Certified Partner"})),/*#__PURE__*/react.createElement("ul",{className:"footer-home9-social"},/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"https://www.facebook.com/socialcdp"},/*#__PURE__*/react.createElement(fa6/* FaFacebookF */.tBk,null))),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"https://www.linkedin.com/company/vik-group"},/*#__PURE__*/react.createElement(fa6/* FaLinkedinIn */.BUd,null))),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"https://www.youtube.com/@smaxvideo461"},/*#__PURE__*/react.createElement(fa6/* FaYoutube */.V2E,null))))))))),/*#__PURE__*/react.createElement("div",{className:"footer-home9-bottom"},/*#__PURE__*/react.createElement(Container/* default */.Z,null,/*#__PURE__*/react.createElement(Row/* default */.Z,{className:"align-items-center"},/*#__PURE__*/react.createElement(Col/* default */.Z,{md:6,xs:12},/*#__PURE__*/react.createElement("div",{className:"footer-home9-links"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"#"},"\u0110i\u1EC1u Kho\u1EA3n D\u1ECBch V\u1EE5"),/*#__PURE__*/react.createElement("span",{className:"divider"},"|"),/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"#"},"Ch\xEDnh S\xE1ch B\u1EA3o M\u1EADt"))),/*#__PURE__*/react.createElement(Col/* default */.Z,{md:6,xs:12},/*#__PURE__*/react.createElement("div",{className:"footer-home9-copy text-md-end text-start"},/*#__PURE__*/react.createElement("span",null,"\xA9",CurrentYear/* currentYear */.V," CDP.vn, All Right Reserved."))))))));};/* harmony default export */ var components_Footer = (Footer);

/***/ }),

/***/ 2237:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ components_Navbar; }
});

// EXTERNAL MODULE: ./src/assets/img/logo/header-logo1.png
var header_logo1 = __webpack_require__(3033);
// EXTERNAL MODULE: ./src/hooks/useScrollEvent.ts
var useScrollEvent = __webpack_require__(8007);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(4160);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Container.js
var Container = __webpack_require__(682);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(4051);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(1555);
// EXTERNAL MODULE: ./src/assets/img/logo/header-logo2.png
var header_logo2 = __webpack_require__(4023);
// EXTERNAL MODULE: ./node_modules/react-icons/fa6/index.mjs
var fa6 = __webpack_require__(6204);
// EXTERNAL MODULE: ./src/hooks/useToggle.ts
var useToggle = __webpack_require__(8708);
;// CONCATENATED MODULE: ./src/pages/single/home-9/components/NavMenu.tsx
const sections=[{id:'post',label:'Giải Pháp'},{id:'work',label:'Hành Trình KH'},{id:'service',label:'Tính Năng'},{id:'industry',label:'Ứng dụng'},{id:'system',label:'Lộ trình'},{id:'tes',label:'Khách Hàng'},{id:'contact',label:'Liên Hệ'}];const NavMenu=()=>{const{0:activeId,1:setActiveId}=(0,react.useState)('');(0,react.useEffect)(()=>{const handleScroll=()=>{const scrollPosition=window.scrollY+100;let newActiveId='';for(const section of sections){const element=document.getElementById(section.id);if(element){const offsetTop=element.offsetTop;const offsetHeight=element.offsetHeight;if(scrollPosition>=offsetTop&&scrollPosition<offsetTop+offsetHeight){newActiveId=section.id;break;}}}setActiveId(newActiveId);};window.addEventListener('scroll',handleScroll);return()=>window.removeEventListener('scroll',handleScroll);},[]);return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("ul",{id:"list-example"},sections.map(_ref=>{let{id,label}=_ref;return/*#__PURE__*/react.createElement("li",{key:id},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{className:"list-group-item list-group-item-action "+(activeId===id?'active':''),to:"#"+id},label));})));};/* harmony default export */ var components_NavMenu = (NavMenu);
;// CONCATENATED MODULE: ./src/pages/single/home-9/components/MobileTop.tsx
const MobileTop=()=>{const{isOpen,toggle}=(0,useToggle/* default */.Z)();const sidebarRef=(0,react.useRef)(null);(0,react.useEffect)(()=>{const handleClickOutside=event=>{if(isOpen&&sidebarRef.current&&!sidebarRef.current.contains(event.target)){toggle();}};document.addEventListener('mousedown',handleClickOutside);return()=>document.removeEventListener('mousedown',handleClickOutside);},[isOpen,toggle]);return/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("div",{className:"mobile-header mobile-header3 d-block d-lg-none "},/*#__PURE__*/react.createElement(Container/* default */.Z,{fluid:true},/*#__PURE__*/react.createElement(Col/* default */.Z,{xs:12},/*#__PURE__*/react.createElement("div",{className:"mobile-header-elements"},/*#__PURE__*/react.createElement("div",{className:"mobile-logo"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/multi/home-1"},/*#__PURE__*/react.createElement("img",{src:header_logo2/* default */.Z,alt:""}))),/*#__PURE__*/react.createElement("div",{onClick:toggle,className:"mobile-nav-icon"},/*#__PURE__*/react.createElement(fa6/* FaBarsStaggered */.EgE,null)))))),/*#__PURE__*/react.createElement("div",{ref:sidebarRef,className:"mobile-sidebar mobile-sidebar4  d-block d-lg-none "+(isOpen?'mobile-menu-active':'')},/*#__PURE__*/react.createElement("div",{className:"logo-m"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/"},/*#__PURE__*/react.createElement("img",{src:header_logo1/* default */.Z,alt:""}))),/*#__PURE__*/react.createElement("div",{onClick:toggle,className:"menu-close"},/*#__PURE__*/react.createElement(fa6/* FaXmark */._0w,null)),/*#__PURE__*/react.createElement("div",{className:"mobile-nav"},/*#__PURE__*/react.createElement("ul",{id:"list-example"},sections.map(_ref=>{let{id,label}=_ref;return/*#__PURE__*/react.createElement("li",{key:id},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{className:"list-group-item list-group-item-action",to:"#"+id,onClick:toggle},label));})),/*#__PURE__*/react.createElement("a",{className:"sidebar1-btn",href:FORM_URL,target:"_blank",rel:"noopener noreferrer"},/*#__PURE__*/react.createElement("span",null,"T\u01B0 V\u1EA5n Ngay")))));};/* harmony default export */ var components_MobileTop = (MobileTop);
;// CONCATENATED MODULE: ./src/pages/single/home-9/components/Navbar.tsx
const Navbar_FORM_URL='https://webview.smax.ai/public/69ce2d1d0c7f3f53a3edbd20?page_id=fb816898231517528&type=embedded';const Navbar=()=>{const{scrollY}=(0,useScrollEvent/* default */.Z)();return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement("div",{className:"header-area header-area4 header-area-all d-none d-lg-block "+(scrollY>100&&'sticky'),id:"header"},/*#__PURE__*/react.createElement(Container/* default */.Z,null,/*#__PURE__*/react.createElement(Row/* default */.Z,null,/*#__PURE__*/react.createElement(Col/* default */.Z,{xs:12},/*#__PURE__*/react.createElement("div",{className:"header-elements"},/*#__PURE__*/react.createElement("div",{className:"site-logo home1-site-logo"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"#"},/*#__PURE__*/react.createElement("img",{src:header_logo1/* default */.Z,alt:""}))),/*#__PURE__*/react.createElement("div",{className:"main-menu-ex main-menu-ex1"},/*#__PURE__*/react.createElement(components_NavMenu,null)),/*#__PURE__*/react.createElement("div",{className:"header4-buttons"},/*#__PURE__*/react.createElement("a",{href:Navbar_FORM_URL,target:"_blank",rel:"noopener noreferrer",className:"theme-btn4"},"T\u01B0 V\u1EA5n Ngay")))))))),/*#__PURE__*/react.createElement(components_MobileTop,null));};/* harmony default export */ var components_Navbar = (Navbar);

/***/ }),

/***/ 8167:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: function() { return /* binding */ Head; },
  "default": function() { return /* binding */ thankyou; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(4160);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Container.js
var Container = __webpack_require__(682);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(4051);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(1555);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.mjs
var fa = __webpack_require__(2091);
// EXTERNAL MODULE: ./src/pages/single/home-9/components/Navbar.tsx + 2 modules
var Navbar = __webpack_require__(2237);
// EXTERNAL MODULE: ./src/pages/single/home-9/components/Footer.tsx + 3 modules
var Footer = __webpack_require__(6622);
;// CONCATENATED MODULE: ./src/pages/thankyou/components/ThankYouPage.tsx
const ThankYouPage=()=>{(0,react.useEffect)(()=>{// Track thankyou page view
if(typeof window!=='undefined'&&window.gtag){window.gtag('event','thankyou_page_view',{event_category:'conversion',event_label:'form_submission'});}// Facebook Pixel (if loaded)
if(typeof window!=='undefined'&&window.fbq){window.fbq('track','Lead',{content_name:'thankyou_page'});}},[]);return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Navbar/* default */.Z,null),/*#__PURE__*/react.createElement("div",{className:"thankyou-area",style:{background:'linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 40%)',paddingTop:'80px',paddingBottom:'80px',minHeight:'60vh',display:'flex',alignItems:'center'}},/*#__PURE__*/react.createElement(Container/* default */.Z,null,/*#__PURE__*/react.createElement(Row/* default */.Z,{className:"justify-content-center"},/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:8,md:10,xs:12},/*#__PURE__*/react.createElement("div",{className:"thankyou-content text-center"},/*#__PURE__*/react.createElement("div",{className:"thankyou-icon mb-4"},/*#__PURE__*/react.createElement(fa/* FaCheckCircle */.FJM,{size:80,color:"#1E40AF"})),/*#__PURE__*/react.createElement("h1",{style:{color:'#1B2A57',fontSize:'clamp(28px, 5vw, 48px)',fontWeight:700,lineHeight:1.2,marginBottom:'16px'}},"C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 \u0111\u1EC3 l\u1EA1i th\xF4ng tin!"),/*#__PURE__*/react.createElement("p",{style:{color:'#4B5563',fontSize:'clamp(16px, 2.5vw, 20px)',lineHeight:1.6,maxWidth:'560px',margin:'0 auto 40px'}},"\u0110\u1ED9i ng\u0169 t\u01B0 v\u1EA5n c\u1EE7a ch\xFAng t\xF4i s\u1EBD li\xEAn h\u1EC7 v\u1EDBi b\u1EA1n trong",' ',/*#__PURE__*/react.createElement("strong",{style:{color:'#1E40AF'}},"v\xF2ng 24h"),"."),/*#__PURE__*/react.createElement("div",{className:"thankyou-actions d-flex flex-wrap gap-3 justify-content-center"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/#service",className:"theme-btn4",style:{display:'inline-flex',alignItems:'center',gap:'8px'}},"Kh\xE1m ph\xE1 t\xEDnh n\u0103ng"),/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/",className:"theme-btn",style:{display:'inline-flex',alignItems:'center',gap:'8px'}},"V\u1EC1 trang ch\u1EE7"))))))),/*#__PURE__*/react.createElement(Footer/* default */.Z,null));};/* harmony default export */ var components_ThankYouPage = (ThankYouPage);
;// CONCATENATED MODULE: ./src/pages/thankyou/index.tsx


const index = () => {
  return /*#__PURE__*/react.createElement(components_ThankYouPage, null);
};
/* harmony default export */ var thankyou = (index);
const Head = () => {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("title", null, "C\u1EA3m \u01A1n b\u1EA1n! | CDP.vn"), /*#__PURE__*/react.createElement("meta", {
    name: "description",
    content: "C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 \u0111\u1EC3 l\u1EA1i th\xF4ng tin. \u0110\u1ED9i ng\u0169 t\u01B0 v\u1EA5n c\u1EE7a ch\xFAng t\xF4i s\u1EBD li\xEAn h\u1EC7 trong 24h."
  }));
};

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

/***/ 3033:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__.Z = (__webpack_require__.p + "static/header-logo1-c39c0b1e3aa6478c180427c44f0a9ad0.png");

/***/ }),

/***/ 4023:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__.Z = (__webpack_require__.p + "static/header-logo2-c39c0b1e3aa6478c180427c44f0a9ad0.png");

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


/***/ }),

/***/ 3621:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w_: function() { return /* reexport */ GenIcon; }
});

// UNUSED EXPORTS: DefaultContext, IconBase, IconContext, IconsManifest

;// CONCATENATED MODULE: ./node_modules/react-icons/lib/iconsManifest.mjs
var IconsManifest = [
  {
    "id": "ci",
    "name": "Circum Icons",
    "projectUrl": "https://circumicons.com/",
    "license": "MPL-2.0 license",
    "licenseUrl": "https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE"
  },
  {
    "id": "fa",
    "name": "Font Awesome 5",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "fa6",
    "name": "Font Awesome 6",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "lu",
    "name": "Lucide",
    "projectUrl": "https://lucide.dev/",
    "license": "ISC",
    "licenseUrl": "https://github.com/lucide-icons/lucide/blob/main/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "hi2",
    "name": "Heroicons 2",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "sl",
    "name": "Simple Line Icons",
    "projectUrl": "https://thesabbir.github.io/simple-line-icons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "MIT",
    "licenseUrl": "https://github.com/atisawd/boxicons/blob/master/LICENSE"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "tb",
    "name": "Tabler Icons",
    "projectUrl": "https://github.com/tabler/tabler-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "tfi",
    "name": "Themify Icons",
    "projectUrl": "https://github.com/lykmapipo/themify-icons",
    "license": "MIT",
    "licenseUrl": "https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE"
  },
  {
    "id": "rx",
    "name": "Radix Icons",
    "projectUrl": "https://icons.radix-ui.com",
    "license": "MIT",
    "licenseUrl": "https://github.com/radix-ui/icons/blob/master/LICENSE"
  },
  {
    "id": "pi",
    "name": "Phosphor Icons",
    "projectUrl": "https://github.com/phosphor-icons/core",
    "license": "MIT",
    "licenseUrl": "https://github.com/phosphor-icons/core/blob/main/LICENSE"
  },
  {
    "id": "lia",
    "name": "Icons8 Line Awesome",
    "projectUrl": "https://icons8.com/line-awesome",
    "license": "MIT",
    "licenseUrl": "https://github.com/icons8/line-awesome/blob/master/LICENSE.md"
  }
]
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/iconContext.mjs

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react.createContext && /*#__PURE__*/react.createContext(DefaultContext);
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/iconBase.mjs
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/react.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/react.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/react.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/react.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/react.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/index.mjs




/***/ })

}]);
//# sourceMappingURL=component---src-pages-thankyou-index-tsx-4231a57e7fc1b91be46a.js.map