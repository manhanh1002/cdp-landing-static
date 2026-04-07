"use strict";
(self["webpackChunkesoft_gatsby"] = self["webpackChunkesoft_gatsby"] || []).push([[4886],{

/***/ 8202:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ component_Menu; }
});

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(4160);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(4051);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(1555);
// EXTERNAL MODULE: ./node_modules/react-icons/fa6/index.mjs
var fa6 = __webpack_require__(6204);
// EXTERNAL MODULE: ./src/assets/img/demo/demo1.jpg
var demo1 = __webpack_require__(1326);
// EXTERNAL MODULE: ./src/assets/img/demo/demo2.jpg
var demo2 = __webpack_require__(9086);
// EXTERNAL MODULE: ./src/assets/img/demo/demo3.jpg
var demo3 = __webpack_require__(3142);
// EXTERNAL MODULE: ./src/assets/img/demo/demo4.jpg
var demo4 = __webpack_require__(2127);
// EXTERNAL MODULE: ./src/assets/img/demo/demo5.jpg
var demo5 = __webpack_require__(9648);
// EXTERNAL MODULE: ./src/assets/img/demo/demo6.jpg
var demo6 = __webpack_require__(611);
// EXTERNAL MODULE: ./src/assets/img/demo/demo7.jpg
var demo7 = __webpack_require__(1367);
// EXTERNAL MODULE: ./src/assets/img/demo/demo8.jpg
var demo8 = __webpack_require__(6794);
// EXTERNAL MODULE: ./src/assets/img/demo/demo9.jpg
var demo9 = __webpack_require__(2131);
// EXTERNAL MODULE: ./src/assets/img/demo/rtl.png
var rtl = __webpack_require__(1038);
;// CONCATENATED MODULE: ./src/components/layout/Topbar/component/data.ts
const menu=[{title:'Home',icon:'FaAngleDown',demos:[{image:demo1/* default */.Z,multiPage:'/multi/home-1',onePage:'/single/home-1',title:'01. Time Tracker'},{image:demo2/* default */.Z,multiPage:'/multi/home-2',onePage:'/single/home-2',title:'02. Web Page Builder'},{image:demo3/* default */.Z,multiPage:'/multi/home-3',onePage:'/single/home-3',title:'03. POS Software'},{image:demo4/* default */.Z,multiPage:'/multi/home-4',onePage:'/single/home-4',title:'04. Password Manager'},{image:demo5/* default */.Z,multiPage:'/multi/home-5',onePage:'/single/home-5',title:'05. HR Software'},{image:demo6/* default */.Z,multiPage:'/multi/home-6',onePage:'/single/home-6',title:'06. Email Marketing'},{image:demo7/* default */.Z,multiPage:'/multi/home-7',onePage:'/single/home-7',title:'07. Project Management'},{image:demo8/* default */.Z,multiPage:'/multi/home-8',onePage:'/single/home-8',title:'08. SEO Software'},{image:demo9/* default */.Z,multiPage:'/multi/home-9',onePage:'/single/home-9',title:'09. Social Media'},{image:rtl/* default */.Z,multiPage:'/multi/rtl',onePage:'/single/rtl',title:'10. RTL Version'}]},{title:'About Us',link:'/about'},{title:'Pages',subMenu:[{title:'Contact Us',link:'/contact'},{title:'Features',link:'/features'},{title:'Testimonial',link:'/testimonial'},{title:'Pricing',link:'/pricing'},{title:'Download',link:'/download'},{title:'404',link:'/error'}]},{title:'Blog',subMenu:[{title:'Blog',link:'/blog'},{title:'Details Left',link:'/blog-details-sidebar-left'},{title:'Details Right',link:'/blog-details-sidebar-right'},{title:'Blog Details',link:'/blog-details'}]},{title:'Account',subMenu:[{title:'Create Account',link:'/account'},{title:'Login',link:'/login'},{title:'Forgot',link:'/forgot'},{title:'Reset',link:'/reset'},{title:'Verify Email',link:'/verify'},{title:'Success',link:'/form-success'}]}];/* harmony default export */ var data = (menu);
;// CONCATENATED MODULE: ./src/components/layout/Topbar/component/Menu.tsx
const Menu=()=>{return/*#__PURE__*/react.createElement("ul",null,data.map((item,idx)=>/*#__PURE__*/react.createElement("li",{key:idx,className:item.subMenu||item.demos?'dropdown-menu-parrent':''},item.demos?/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:""},item.title," ",/*#__PURE__*/react.createElement(fa6/* FaAngleDown */.iUH,null)),/*#__PURE__*/react.createElement("div",{className:"tp-submenu"},/*#__PURE__*/react.createElement(Row/* default */.Z,null,/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:12},/*#__PURE__*/react.createElement("div",{className:"all-images-menu"},item.demos.slice(0,5).map((demo,i)=>/*#__PURE__*/react.createElement("div",{className:"homemenu-thumb",key:i,style:i===4?{margin:'0 0 20px 0'}:{}},/*#__PURE__*/react.createElement("div",{className:"img1"},/*#__PURE__*/react.createElement("img",{src:demo.image,alt:""})),/*#__PURE__*/react.createElement("div",{className:"homemenu-btn"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{className:"header-btn1",to:demo.multiPage},"Multi Page ",/*#__PURE__*/react.createElement(fa6/* FaArrowRight */.Z1Y,null)),/*#__PURE__*/react.createElement("div",{className:"space16"}),/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{className:"header-btn1",to:demo.onePage,target:"_blank"},"One page ",/*#__PURE__*/react.createElement(fa6/* FaArrowRight */.Z1Y,null))),/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:demo.multiPage,className:"bottom-heading"},demo.title)))),/*#__PURE__*/react.createElement("div",{className:"all-images-menu"},item.demos.slice(5).map((demo,i)=>/*#__PURE__*/react.createElement("div",{className:"homemenu-thumb",key:i,style:i===item.demos.slice(5).length-1?{margin:'0 0 20px 0'}:{}},/*#__PURE__*/react.createElement("div",{className:"img1"},/*#__PURE__*/react.createElement("img",{src:demo.image,alt:""})),demo.title==='10. RTL Version'&&/*#__PURE__*/react.createElement("div",{className:"text"},/*#__PURE__*/react.createElement("h2",null,"RTL")),/*#__PURE__*/react.createElement("div",{className:"homemenu-btn"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{className:"header-btn1",to:demo.multiPage},"Multi Page ",/*#__PURE__*/react.createElement(fa6/* FaArrowRight */.Z1Y,null)),/*#__PURE__*/react.createElement("div",{className:"space16"}),/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{className:"header-btn1",to:demo.onePage,target:"_blank"},"One page ",/*#__PURE__*/react.createElement(fa6/* FaArrowRight */.Z1Y,null))),/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:demo.multiPage,className:"bottom-heading"},demo.title)))))))):item.subMenu?/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:""},item.title," ",/*#__PURE__*/react.createElement(fa6/* FaAngleDown */.iUH,null)),/*#__PURE__*/react.createElement("ul",null,item.subMenu.map((sub,subIdx)=>/*#__PURE__*/react.createElement("li",{key:subIdx},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:sub.link},sub.title))))):/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:item.link},item.title))));};/* harmony default export */ var component_Menu = (Menu);

/***/ }),

/***/ 8513:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: function() { return /* reexport */ PageMeta/* Head */.F; },
  "default": function() { return /* binding */ home_9; }
});

// EXTERNAL MODULE: ./src/components/layout/BasicLayout.tsx
var BasicLayout = __webpack_require__(7935);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/assets/img/icons/home5-btn-icon1.svg
var home5_btn_icon1 = __webpack_require__(6333);
// EXTERNAL MODULE: ./src/assets/img/others/cta5-main-img.png
var cta5_main_img = __webpack_require__(2261);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(4160);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Container.js
var Container = __webpack_require__(682);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(4051);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(1555);
;// CONCATENATED MODULE: ./src/pages/multi/home-9/components/CTA.tsx
const CTA=()=>{return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("div",{className:"space60"}),/*#__PURE__*/react.createElement("div",{className:"cta5"},/*#__PURE__*/react.createElement(Container/* default */.Z,null,/*#__PURE__*/react.createElement("div",{className:"cta5-bg"},/*#__PURE__*/react.createElement(Row/* default */.Z,null,/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:6},/*#__PURE__*/react.createElement("div",{className:"heading5-w"},/*#__PURE__*/react.createElement("h2",null,"Y\xEAu C\u1EA7u L\u1ED9 Tr\xECnh Ri\xEAng cho Doanh nghi\u1EC7p B\u1EA1n"),/*#__PURE__*/react.createElement("div",{className:"space16"}),/*#__PURE__*/react.createElement("p",null,"H\xE3y \u0111\u1EC3 l\u1EA1i th\xF4ng tin, c\xE1c chuy\xEAn gia gi\u1EA3i ph\xE1p th\u1EF1c chi\u1EBFn c\u1EE7a ch\xFAng t\xF4i s\u1EBD li\xEAn h\u1EC7 \u0111\u1EC3 ph\xE2n t\xEDch m\xF4 h\xECnh kinh doanh v\xE0 t\u01B0 v\u1EA5n mi\u1EC5n ph\xED cho b\u1EA1n."),/*#__PURE__*/react.createElement("div",{className:"space30"}),/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/account",className:"theme-btn12",style:{textDecoration:'none',textEmphasisColor:'#1e40af'}},/*#__PURE__*/react.createElement("span",{className:"arrow"},/*#__PURE__*/react.createElement("img",{src:home5_btn_icon1/* default */.Z,alt:""})),' ',"Nh\u1EADn T\u01B0 V\u1EA5n Ngay"))),/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:6},/*#__PURE__*/react.createElement("div",{className:"main-image"},/*#__PURE__*/react.createElement("img",{src:cta5_main_img/* default */.Z,alt:""}))))))));};/* harmony default export */ var components_CTA = (CTA);
// EXTERNAL MODULE: ./src/assets/img/icons/footer-icon1.png
var footer_icon1 = __webpack_require__(285);
// EXTERNAL MODULE: ./src/assets/img/icons/footer-icon2.png
var footer_icon2 = __webpack_require__(5362);
// EXTERNAL MODULE: ./src/assets/img/icons/footer-icon3.png
var footer_icon3 = __webpack_require__(7735);
// EXTERNAL MODULE: ./src/assets/img/logo/header-logo8.png
var header_logo8 = __webpack_require__(8820);
// EXTERNAL MODULE: ./src/components/CurrentYear.tsx
var CurrentYear = __webpack_require__(1063);
// EXTERNAL MODULE: ./node_modules/react-icons/fa6/index.mjs
var fa6 = __webpack_require__(6204);
;// CONCATENATED MODULE: ./src/pages/multi/home-9/components/Footer.tsx
const footerData=[{title:'Product',links:[{label:'Pricing'},{label:'Integration'},{label:'Features'},{label:'Templates'},{label:'Changelog'}]},{title:'Support',links:[{label:'On-boarding'},{label:'Help center'},{label:'Contact us'},{label:'Experts'},{label:'Status'}]},{title:'Resources',links:[{label:'Community'},{label:'Affiliates'},{label:'Partnerships'},{label:'Perks & Benefits'},{label:'Api docs'}]},{title:'Company',links:[{label:'About'},{label:'Our blog'},{label:'In the press'},{label:'Brand assets'},{label:'Work with us'}]},{title:'Download',links:[{label:'iPhone & iPad'},{label:'Android'},{label:'MacOS'},{label:'Window'}]}];const Footer=()=>{return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("div",{className:"footer2 _relative"},/*#__PURE__*/react.createElement(Container/* default */.Z,null,/*#__PURE__*/react.createElement(Row/* default */.Z,null,/*#__PURE__*/react.createElement("div",{className:"footer-icon-box-all"},/*#__PURE__*/react.createElement("div",{className:"footer-icon-box"},/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("img",{src:footer_icon1/* default */.Z,alt:""})),/*#__PURE__*/react.createElement("div",{className:"headding"},/*#__PURE__*/react.createElement("p",{style:{color:'#1C2A57'}},"Mi\u1EC5n ph\xED t\u01B0 v\u1EA5n 1-1 v\u1EDBi chuy\xEAn gia"))),/*#__PURE__*/react.createElement("div",{className:"footer-icon-box"},/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("img",{src:footer_icon2/* default */.Z,alt:""})),/*#__PURE__*/react.createElement("div",{className:"headding"},/*#__PURE__*/react.createElement("p",{style:{color:'#1C2A57'}},"\u01AFu ti\xEAn b\u1EA3o m\u1EADt d\u1EEF li\u1EC7u & ri\xEAng t\u01B0"))),/*#__PURE__*/react.createElement("div",{className:"footer-icon-box"},/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("img",{src:footer_icon3/* default */.Z,alt:""})),/*#__PURE__*/react.createElement("div",{className:"headding"},/*#__PURE__*/react.createElement("p",{style:{color:'#1C2A57'}},"T\u1EADp trung v\xE0o hi\u1EC7u qu\u1EA3 tri\u1EC3n khai th\u1EF1c t\u1EBF"))))),/*#__PURE__*/react.createElement("div",{className:"space50"}),/*#__PURE__*/react.createElement(Row/* default */.Z,null,footerData.map((section,idx)=>/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:true,md:6,xs:12,key:idx},/*#__PURE__*/react.createElement("div",{className:"single-footer-items"},/*#__PURE__*/react.createElement("h3",null,section.title),/*#__PURE__*/react.createElement("ul",{className:"menu-list"},section.links.map((link,linkIdx)=>/*#__PURE__*/react.createElement("li",{key:linkIdx},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:""},link.label))))))),/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:3,md:6,xs:12},/*#__PURE__*/react.createElement("div",{className:"single-footer-items"},/*#__PURE__*/react.createElement("h3",null,"Product"),/*#__PURE__*/react.createElement("ul",{className:"social-icons"},/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"#"},/*#__PURE__*/react.createElement(fa6/* FaLinkedinIn */.BUd,null))),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"#"},/*#__PURE__*/react.createElement(fa6/* FaXTwitter */.LCd,null))),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"#"},/*#__PURE__*/react.createElement(fa6/* FaYoutube */.V2E,null))),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"#"},/*#__PURE__*/react.createElement(fa6/* FaInstagram */.Zf_,null))))))),/*#__PURE__*/react.createElement("div",{className:"space40"}),/*#__PURE__*/react.createElement("div",{className:"copyright-area"},/*#__PURE__*/react.createElement(Row/* default */.Z,{className:"align-items-center"},/*#__PURE__*/react.createElement(Col/* default */.Z,{md:5},/*#__PURE__*/react.createElement("div",{className:"logo"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/multi/home-1"},/*#__PURE__*/react.createElement("img",{src:header_logo8/* default */.Z,alt:""})))),/*#__PURE__*/react.createElement(Col/* default */.Z,{md:7},/*#__PURE__*/react.createElement("div",{className:"coppyright text-right"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"#"},"@",CurrentYear/* currentYear */.V," CDP.vn"),/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"https://vik.group"},"1 s\u1EA3n ph\u1EA9m c\u1EE7a Vik.group"))))))));};/* harmony default export */ var components_Footer = (Footer);
// EXTERNAL MODULE: ./src/assets/img/bg/header4-bg.png
var header4_bg = __webpack_require__(6098);
// EXTERNAL MODULE: ./src/assets/img/hero/hero4-mobilebg.png
var hero4_mobilebg = __webpack_require__(378);
// EXTERNAL MODULE: ./src/assets/img/icons/span4-icon.png
var span4_icon = __webpack_require__(278);
// EXTERNAL MODULE: ./src/components/GlightBox.tsx
var GlightBox = __webpack_require__(1034);
;// CONCATENATED MODULE: ./src/pages/multi/home-9/components/Hero.tsx
const Hero=()=>{return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("div",{className:"hero-area4",style:{'--bg-desktop':"url("+header4_bg/* default */.Z+")",'--bg-mobile':"url("+hero4_mobilebg/* default */.Z+")"}},/*#__PURE__*/react.createElement(Container/* default */.Z,null,/*#__PURE__*/react.createElement(Row/* default */.Z,{className:"align-items-center"},/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:7,className:"m-auto text-center"},/*#__PURE__*/react.createElement("div",{className:"main-headding pbmit-heading-subheading animation-style2"},/*#__PURE__*/react.createElement("span",{className:"span"},/*#__PURE__*/react.createElement("img",{src:span4_icon/* default */.Z,alt:""}),"  Meta Busines Partner"),/*#__PURE__*/react.createElement("h1",{className:"text-anime-style-3"},/*#__PURE__*/react.createElement("span",{style:{color:'#F1F5FA'}},"NextCDP with "),/*#__PURE__*/react.createElement("span",{style:{color:'#051c42ff'}},"Social & AI")),/*#__PURE__*/react.createElement("h3",{className:"text-anime-style-3",style:{color:'white'}},"T\u1ED1i \u01AFu Hi\u1EC7u Qu\u1EA3 B\xE1n H\xE0ng - T\u1EF1 \u0110\u1ED9ng H\xF3a Ch\u0103m S\xF3c Kh\xE1ch H\xE0ng"),/*#__PURE__*/react.createElement("p",{"data-aos":"fade-up","data-aos-duration":"800"},"K\u1EBFt n\u1ED1i m\u1ECDi \u0111i\u1EC3m ch\u1EA1m d\u1EEF li\u1EC7u, t\u1ED1i \u01B0u to\xE0n b\u1ED9 h\xE0nh tr\xECnh kh\xE1ch h\xE0ng, gi\xFAp doanh nghi\u1EC7p t\u0103ng tr\u01B0\u1EDFng b\u1EE9t ph\xE1 v\xE0 b\u1EC1n v\u1EEFng."),/*#__PURE__*/react.createElement("div",{className:"butons","data-aos":"fade-up","data-aos-duration":"1000"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"#",className:"theme-btn4"},"Y\xEAu c\u1EA7u t\u01B0 v\u1EA5n l\u1ED9 tr\xECnh"),/*#__PURE__*/react.createElement("div",{className:"video-btn"},/*#__PURE__*/react.createElement(GlightBox/* default */.Z,null,/*#__PURE__*/react.createElement("a",{href:"https://www.youtube.com/watch?v=Hz2F_S3Tl0Y",className:"glightbox play-btn glightbox-video"},/*#__PURE__*/react.createElement("span",null,/*#__PURE__*/react.createElement(fa6/* FaPlay */.gmG,null)),' ',"Xem gi\u1EDBi thi\u1EC7u chi ti\u1EBFt"))))))),/*#__PURE__*/react.createElement(Row/* default */.Z,null,/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:12},/*#__PURE__*/react.createElement("div",{className:"hero4-images-all"}))))));};/* harmony default export */ var components_Hero = (Hero);
// EXTERNAL MODULE: ./src/assets/img/icons/system-icon5.svg
var system_icon5 = __webpack_require__(3829);
// EXTERNAL MODULE: ./src/assets/img/icons/system-icon6.svg
var system_icon6 = __webpack_require__(3016);
// EXTERNAL MODULE: ./src/assets/img/icons/system-icon7.svg
var system_icon7 = __webpack_require__(7701);
// EXTERNAL MODULE: ./src/assets/img/icons/system-icon8.svg
var system_icon8 = __webpack_require__(4284);
// EXTERNAL MODULE: ./src/assets/img/others/system9-img3.png
var system9_img3 = __webpack_require__(9552);
// EXTERNAL MODULE: ./src/assets/img/others/system9-img4.png
var system9_img4 = __webpack_require__(7919);
// EXTERNAL MODULE: ./src/assets/img/shapes/system-shape5.png
var system_shape5 = __webpack_require__(2691);
// EXTERNAL MODULE: ./src/assets/img/shapes/system-shape6.png
var system_shape6 = __webpack_require__(9368);
// EXTERNAL MODULE: ./src/assets/img/shapes/system-shape7.png
var system_shape7 = __webpack_require__(300);
// EXTERNAL MODULE: ./src/assets/img/shapes/system-shape8.png
var system_shape8 = __webpack_require__(6826);
;// CONCATENATED MODULE: ./src/pages/multi/home-9/components/Integration.tsx
const Integration=()=>{return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("div",{className:"buy-sell-bottom2",id:"system"},/*#__PURE__*/react.createElement(Container/* default */.Z,null,/*#__PURE__*/react.createElement("div",{className:"space100"}),/*#__PURE__*/react.createElement(Row/* default */.Z,null,/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:6,className:"m-auto text-center"},/*#__PURE__*/react.createElement("div",{className:"heading9"},/*#__PURE__*/react.createElement("h2",{className:"text-anime-style-3",style:{color:'#1C2A57',fontWeight:'700',lineHeight:'1.5',marginBottom:'10px'}},"Tri\u1EC3n Khai ",/*#__PURE__*/react.createElement("span",{style:{color:'#1E40AF'}},"Nhanh Ch\xF3ng")," - Th\u1EA5y Ngay ",/*#__PURE__*/react.createElement("span",{style:{color:'#1E40AF'}},"Hi\u1EC7u Qu\u1EA3")),/*#__PURE__*/react.createElement("p",{style:{color:'#1B2A57'}},"\u0110\u1ED9i ng\u0169 chuy\xEAn gia c\u1EE7a Smax.ai s\u1EBD \u0111\u1ED3ng h\xE0nh c\xF9ng doanh nghi\u1EC7p trong su\u1ED1t qu\xE1 tr\xECnh tri\u1EC3n khai. "))))),/*#__PURE__*/react.createElement(Container/* default */.Z,null,/*#__PURE__*/react.createElement("div",{className:"bg"},/*#__PURE__*/react.createElement(Row/* default */.Z,{className:"align-items-center"},/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:3},/*#__PURE__*/react.createElement("div",{className:"box-area-all","data-aos":"flip-right","data-aos-duration":"900"},/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("img",{src:system_icon7/* default */.Z,alt:"",width:"32",height:"32"})),/*#__PURE__*/react.createElement("div",{className:"single-box heading7"},/*#__PURE__*/react.createElement("h5",{style:{color:'#1E3A8A',fontWeight:'700',lineHeight:'1.5'}},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:""},"Review H\u1EC7 Th\u1ED1ng")),/*#__PURE__*/react.createElement("div",{className:"space10"}),/*#__PURE__*/react.createElement("p",{style:{color:'#1E3A8A'}},"\u0110\xE1nh gi\xE1 hi\u1EC7n tr\u1EA1ng \u0111\u1EC3 \u0111\u01B0a ra gi\u1EA3i ph\xE1p ph\xF9 h\u1EE3p ",/*#__PURE__*/react.createElement("span",{style:{fontWeight:'600'}},"(1 tu\u1EA7n)")))),/*#__PURE__*/react.createElement("div",{className:"space50"}),/*#__PURE__*/react.createElement("div",{className:"box-area-all box-area-all2","data-aos":"flip-right","data-aos-duration":"900"},/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("img",{src:system_icon8/* default */.Z,alt:"",width:"32",height:"32"})),/*#__PURE__*/react.createElement("div",{className:"single-box heading7"},/*#__PURE__*/react.createElement("h5",{style:{color:'#1E3A8A',fontWeight:'700',lineHeight:'1.5'}},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:""},"\u0110\xE1nh Gi\xE1 & T\u1ED1i \u01AFu")),/*#__PURE__*/react.createElement("div",{className:"space10"}),/*#__PURE__*/react.createElement("p",{style:{color:'#1E3A8A'}},"Nghi\u1EC7m thu, \u0111\xE1nh gi\xE1 & l\xEAn k\u1EBF ho\u1EA1ch giai \u0111o\u1EA1n sau ",/*#__PURE__*/react.createElement("span",{style:{fontWeight:'600'}},"(1 tu\u1EA7n)"))))),/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:6},/*#__PURE__*/react.createElement("div",{className:"service1-main-images","data-aos":"zoom-out","data-aos-duration":"900"},/*#__PURE__*/react.createElement("div",{className:"main-img1"},/*#__PURE__*/react.createElement("img",{src:system9_img3/* default */.Z,alt:""})),/*#__PURE__*/react.createElement("div",{className:"main-img2 animate1"},/*#__PURE__*/react.createElement("img",{src:system9_img4/* default */.Z,alt:""})),/*#__PURE__*/react.createElement("div",{className:"shape1"},/*#__PURE__*/react.createElement("img",{src:system_shape5/* default */.Z,alt:""})),/*#__PURE__*/react.createElement("div",{className:"shape2"},/*#__PURE__*/react.createElement("img",{src:system_shape6/* default */.Z,alt:""})),/*#__PURE__*/react.createElement("div",{className:"shape4"},/*#__PURE__*/react.createElement("img",{src:system_shape7/* default */.Z,alt:""})),/*#__PURE__*/react.createElement("div",{className:"shape3"},/*#__PURE__*/react.createElement("img",{src:system_shape8/* default */.Z,alt:""})))),/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:3},/*#__PURE__*/react.createElement("div",{className:"box-area-all box-area-all3","data-aos":"flip-right","data-aos-duration":"900"},/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("img",{src:system_icon5/* default */.Z,alt:"",width:"32",height:"32"})),/*#__PURE__*/react.createElement("div",{className:"single-box heading7"},/*#__PURE__*/react.createElement("h5",{style:{color:'#1E3A8A',fontWeight:'700',lineHeight:'1.5'}},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:""},"K\u1EBFt N\u1ED1i D\u1EEF Li\u1EC7u")),/*#__PURE__*/react.createElement("div",{className:"space10"}),/*#__PURE__*/react.createElement("p",{style:{color:'#1E3A8A'}},"T\xEDch h\u1EE3p Smax v\u1EDBi c\xE1c n\u1EC1n t\u1EA3ng POS, Facebook, Zalo ",/*#__PURE__*/react.createElement("span",{style:{fontWeight:'600'}},"(2 tu\u1EA7n)")))),/*#__PURE__*/react.createElement("div",{className:"space50"}),/*#__PURE__*/react.createElement("div",{className:"box-area-all box-area-all4","data-aos":"flip-right","data-aos-duration":"900"},/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("img",{src:system_icon6/* default */.Z,alt:"",width:"32",height:"32"})),/*#__PURE__*/react.createElement("div",{className:"single-box heading7"},/*#__PURE__*/react.createElement("h5",{style:{color:'#1E3A8A',fontWeight:'700',lineHeight:'1.5'}},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:""},"Tri\u1EC3n Khai Gi\u1EA3i Ph\xE1p")),/*#__PURE__*/react.createElement("div",{className:"space10"}),/*#__PURE__*/react.createElement("p",{style:{color:'#1E3A8A'}},"Tri\u1EC3n khai k\u1ECBch b\u1EA3n t\u1EF1 \u0111\u1ED9ng & t\u1ED1i \u01B0u theo th\u1EE9 t\u1EF1 \u01B0u ti\xEAn ",/*#__PURE__*/react.createElement("span",{style:{fontWeight:'600'}},"(4-8 tu\u1EA7n)"))))))))),/*#__PURE__*/react.createElement("div",{className:"space100"}));};/* harmony default export */ var components_Integration = (Integration);
// EXTERNAL MODULE: ./src/assets/img/others/solu-tab1.png
var solu_tab1 = __webpack_require__(5364);
// EXTERNAL MODULE: ./src/assets/img/others/solu-tab2.png
var solu_tab2 = __webpack_require__(7571);
// EXTERNAL MODULE: ./src/assets/img/others/solu-tab3.png
var solu_tab3 = __webpack_require__(8012);
// EXTERNAL MODULE: ./src/assets/img/others/solu-tab4.png
var solu_tab4 = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/pages/multi/home-9/components/Media.tsx
const mediaTabs=[{key:'retail-fashion',label:'Bán Lẻ & Thời Trang',image:solu_tab1/* default */.Z,scenarios:[{title:'Tạo Minigame Để Thu Thập Data',description:'Kịch bản: Khởi tạo các chiến dịch Minigame theo dịp lễ để thu thập Data của khách hàng quan tâm.'},{title:'Up-Sell/Cross-Sale Thông Minh',description:'Kịch bản: Dựa trên lịch sử mua hàng, tự động gợi ý sản phẩm liên quan để tăng giá trị đơn hàng.'},{title:'Tối Ưu Ads Với Dataset',description:'Kịch bản: Đồng bộ giá trị đơn hàng qua Dataset để tìm kiếm khách hàng có sức chi tiêu cao, tăng ROAS.'},{title:'Trợ Lý AI Bán Hàng 24/7',description:'Kịch bản: Triển khai trợ lý AI tư vấn, trả lời câu hỏi và chốt đơn tự động, giảm tải cho đội ngũ sale.'},{title:'Phân Tích Insight Khách Hàng Với AI',description:'Kịch bản: Tự động phân tích hội thoại để nắm bắt insight khách hàng và đánh giá chất lượng tư vấn.'}]},{key:'service-spa',label:'Dịch Vụ & Spa',image:solu_tab2/* default */.Z,scenarios:[{title:'Tự Động Nhắc Lịch Hẹn',description:'Kịch bản: Gửi tin nhắn FMM/ZNS/SMS nhắc khách về lịch hẹn đã đặt, giảm tỷ lệ vắng hẹn.'},{title:'Chăm Sóc Sau Dịch Vụ',description:'Kịch bản: Gửi tin nhắn hỏi thăm, hướng dẫn chăm sóc và xin đánh giá sau khi khách sử dụng dịch vụ.'},{title:'Bán Thêm Theo Liệu Trình',description:'Kịch bản: Dựa trên liệu trình đã dùng, gửi ưu đãi cho liệu trình tiếp theo để khuyến khích quay lại.'},{title:'Trợ Lý AI Tư Vấn',description:'Kịch bản: Trợ lý AI tự động trả lời câu hỏi về dịch vụ, liệu trình, giá và chương trình ưu đãi.'},{title:'Tối Ưu Ads Với Dataset',description:'Kịch bản: Sử dụng Dataset để tìm khách hàng có nhu cầu cao, tối ưu chi phí quảng cáo.'}]},{key:'real-estate',label:'Bất Động Sản',image:solu_tab3/* default */.Z,scenarios:[{title:'Phân Tích Insight Bằng AI',description:'Kịch bản: AI phân tích cuộc trò chuyện để tìm ra các mối quan tâm, băn khoăn phổ biến của khách hàng.'},{title:'Tối Ưu Quảng Cáo FB Ads Theo Leads',description:'Kịch bản: Đồng bộ tín hiệu leads chất lượng về Meta để tối ưu quảng cáo, giảm chi phí mỗi leads.'},{title:'Phân Loại & Chấm Điểm Leads',description:'Kịch bản: Tự động gắn thẻ, chấm điểm leads dựa trên tương tác để ưu tiên khách hàng tiềm năng.'},{title:'Tư Vấn Dự Án Cá Nhân Hóa',description:'Kịch bản: Gửi thông tin, hình ảnh và chính sách dự án phù hợp với nhu cầu từng nhóm khách hàng.'},{title:'Trợ Lý AI Sàng Lọc Leads',description:'Kịch bản: AI tự động hỏi đáp để phân loại nóng/ấm/lạnh, giúp đội sale tiết kiệm thời gian.'}]},{key:'education',label:'Giáo Dục',image:solu_tab4/* default */.Z,scenarios:[{title:'Phân Tích Insight Bằng AI',description:'Kịch bản: AI phân tích câu hỏi của học viên để xác định phần kiến thức khó và cải thiện chương trình.'},{title:'Chatbot Tư Vấn 24/7',description:'Kịch bản: Chatbot tự động trả lời câu hỏi thường gặp về khóa học, học phí, lịch khai giảng.'},{title:'Nuôi Dưỡng Học Viên Tiềm Năng',description:'Kịch bản: Gửi tài liệu học thử, feedback và ưu đãi cho những người đã quan tâm đến khóa học.'},{title:'Thông Báo & Chăm Sóc Tự Động',description:'Kịch bản: Gửi nhắc lịch học, thông báo thay đổi và tài liệu bổ sung qua Zalo hoặc nền tảng nhắn tin.'},{title:'Trợ Lý AI Tuyển Sinh 24/7',description:'Kịch bản: AI tư vấn lộ trình phù hợp và giải đáp câu hỏi chuyên sâu, hỗ trợ đội ngũ tuyển sinh.'}]}];const Media=()=>{const{0:active,1:setActive}=(0,react.useState)('retail-fashion');const current=mediaTabs.find(t=>t.key===active);return/*#__PURE__*/react.createElement("div",{className:"midea-markating sp"},/*#__PURE__*/react.createElement(Container/* default */.Z,null,/*#__PURE__*/react.createElement(Row/* default */.Z,null,/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:5,className:"m-auto text-center"},/*#__PURE__*/react.createElement("div",{className:"headding4 pbmit-heading-subheading animation-style2"},/*#__PURE__*/react.createElement("h2",{className:"text-anime-style-3",style:{color:'#1C2A57',marginBottom:'10px'}},"K\u1ECBch B\u1EA3n \u1EE8ng D\u1EE5ng ",/*#__PURE__*/react.createElement("span",{style:{color:'#1E40AF'}},"Th\u1EF1c T\u1EBF Cho T\u1EEBng Ng\xE0nh")),/*#__PURE__*/react.createElement("p",{style:{color:'#1B2A57'}},"Xem c\xE1ch CDP.vn gi\u1EA3i quy\u1EBFt nh\u1EEFng th\xE1ch th\u1EE9c \u0111\u1EB7c th\xF9 v\xE0 t\u1EA1o ra t\u0103ng tr\u01B0\u1EDFng v\u01B0\u1EE3t tr\u1ED9i cho doanh nghi\u1EC7p c\u1EE7a b\u1EA1n")))),/*#__PURE__*/react.createElement("div",{className:"space60"}),/*#__PURE__*/react.createElement(Row/* default */.Z,null,/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:12},/*#__PURE__*/react.createElement("div",{className:"media-tabs"},mediaTabs.map(tab=>/*#__PURE__*/react.createElement("button",{key:tab.key,type:"button",className:"media-tab-btn "+(active===tab.key?'active':''),onClick:()=>setActive(tab.key)},tab.label))))),/*#__PURE__*/react.createElement(Row/* default */.Z,{className:"align-items-stretch media-tab-row"},/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:6,className:"media-tab-left"},/*#__PURE__*/react.createElement("div",{className:"image media-tab-image","data-aos":"flip-right","data-aos-duration":"900"},/*#__PURE__*/react.createElement("img",{src:current.image,alt:current.label}))),/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:6,className:"media-tab-right"},/*#__PURE__*/react.createElement("div",{className:"media-box-all"},current.scenarios.map((item,idx)=>/*#__PURE__*/react.createElement("div",{key:idx,"data-aos-duration":900+idx*100,"data-aos":"fade-left"},/*#__PURE__*/react.createElement("div",{className:"single-box"},/*#__PURE__*/react.createElement("div",{className:"headding4"},/*#__PURE__*/react.createElement("h4",{style:{color:'#1E3A8A',fontWeight:'700'}},item.title),/*#__PURE__*/react.createElement("div",{className:"space10"}),/*#__PURE__*/react.createElement("p",{style:{color:'#1B2A57'}},item.description))))))))));};/* harmony default export */ var components_Media = (Media);
// EXTERNAL MODULE: ./src/assets/img/logo/header-logo2.png
var header_logo2 = __webpack_require__(4023);
// EXTERNAL MODULE: ./src/components/layout/Topbar/component/Menu.tsx + 1 modules
var Menu = __webpack_require__(8202);
// EXTERNAL MODULE: ./src/hooks/useScrollEvent.ts
var useScrollEvent = __webpack_require__(8007);
// EXTERNAL MODULE: ./src/assets/img/logo/header-logo1.png
var header_logo1 = __webpack_require__(3033);
// EXTERNAL MODULE: ./src/hooks/useToggle.ts
var useToggle = __webpack_require__(8708);
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.mjs
var fi = __webpack_require__(2777);
// EXTERNAL MODULE: ./node_modules/react-icons/sl/index.mjs
var sl = __webpack_require__(6977);
// EXTERNAL MODULE: ./src/components/layout/Topbar/component/MobileMenu.tsx
var MobileMenu = __webpack_require__(9904);
;// CONCATENATED MODULE: ./src/pages/multi/home-9/components/MobileTop.tsx
const MobileTop=()=>{const{isOpen,toggle}=(0,useToggle/* default */.Z)();const sidebarRef=(0,react.useRef)(null);(0,react.useEffect)(()=>{const handleClickOutside=event=>{if(isOpen&&sidebarRef.current&&!sidebarRef.current.contains(event.target)){toggle();}};document.addEventListener('mousedown',handleClickOutside);return()=>document.removeEventListener('mousedown',handleClickOutside);},[isOpen,toggle]);return/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("div",{className:"mobile-header mobile-header3 d-block d-lg-none "},/*#__PURE__*/react.createElement(Container/* default */.Z,{fluid:true},/*#__PURE__*/react.createElement(Col/* default */.Z,{xs:12},/*#__PURE__*/react.createElement("div",{className:"mobile-header-elements"},/*#__PURE__*/react.createElement("div",{className:"mobile-logo"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/multi/home-1"},/*#__PURE__*/react.createElement("img",{src:header_logo2/* default */.Z,alt:""}))),/*#__PURE__*/react.createElement("div",{onClick:toggle,className:"mobile-nav-icon"},/*#__PURE__*/react.createElement(fa6/* FaBarsStaggered */.EgE,null)))))),/*#__PURE__*/react.createElement("div",{ref:sidebarRef,className:"mobile-sidebar mobile-sidebar4  d-block d-lg-none "+(isOpen?'mobile-menu-active':'')},/*#__PURE__*/react.createElement("div",{className:"logo-m"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/multi/home-1"},/*#__PURE__*/react.createElement("img",{src:header_logo1/* default */.Z,alt:""}))),/*#__PURE__*/react.createElement("div",{onClick:toggle,className:"menu-close"},/*#__PURE__*/react.createElement(fa6/* FaXmark */._0w,null)),/*#__PURE__*/react.createElement("div",{className:"mobile-nav"},/*#__PURE__*/react.createElement(MobileMenu/* default */.Z,null),/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{className:"sidebar1-btn",to:"/contact"},/*#__PURE__*/react.createElement("span",null,"Book a Consultation"),/*#__PURE__*/react.createElement("span",{className:"arrow"},/*#__PURE__*/react.createElement(fa6/* FaArrowRight */.Z1Y,null))),/*#__PURE__*/react.createElement("div",{className:"contact-infos"},/*#__PURE__*/react.createElement("h3",null,"Contact Info"),/*#__PURE__*/react.createElement("div",{className:"box"},/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("span",null,/*#__PURE__*/react.createElement(fi/* FiPhone */.tUt,null))),/*#__PURE__*/react.createElement("div",{className:"pera"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"tel:921-888-0022"},"921-888-0022"))),/*#__PURE__*/react.createElement("div",{className:"box"},/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("span",null,/*#__PURE__*/react.createElement(fa6/* FaRegEnvelope */.uWG,null))),/*#__PURE__*/react.createElement("div",{className:"pera"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"mailto:example@visafast.com"},"example@visafast.com")))),/*#__PURE__*/react.createElement("div",{className:"contact-infos"},/*#__PURE__*/react.createElement("h3",null,"Our Location"),/*#__PURE__*/react.createElement("div",{className:"box"},/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("span",null,/*#__PURE__*/react.createElement(sl/* SlLocationPin */.OxZ,null))),/*#__PURE__*/react.createElement("div",{className:"pera"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:""},"55 East Birchwood Ave.Brooklyn, ",/*#__PURE__*/react.createElement("br",null),"New York 11201,United States")))),/*#__PURE__*/react.createElement("div",{className:"contact-infos"},/*#__PURE__*/react.createElement("h3",null,"Our Location"),/*#__PURE__*/react.createElement("ul",{className:"icon-list"},/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:""},/*#__PURE__*/react.createElement(fa6/* FaLinkedinIn */.BUd,null))),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:""},/*#__PURE__*/react.createElement(fa6/* FaXTwitter */.LCd,null))),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:""},/*#__PURE__*/react.createElement(fa6/* FaYoutube */.V2E,null))),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:""},/*#__PURE__*/react.createElement(fa6/* FaInstagram */.Zf_,null))))))));};/* harmony default export */ var components_MobileTop = (MobileTop);
;// CONCATENATED MODULE: ./src/pages/multi/home-9/components/Navbar.tsx
const Navbar=()=>{const{scrollY}=(0,useScrollEvent/* default */.Z)();return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement("div",{className:"header-area header-area9 header-area-all d-none d-lg-block "+(scrollY>100&&'sticky'),id:"header"},/*#__PURE__*/react.createElement(Container/* default */.Z,null,/*#__PURE__*/react.createElement(Row/* default */.Z,null,/*#__PURE__*/react.createElement(Col/* default */.Z,{xs:12},/*#__PURE__*/react.createElement("div",{className:"header-elements"},/*#__PURE__*/react.createElement("div",{className:"site-logo home1-site-logo"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/multi/home-1"},/*#__PURE__*/react.createElement("img",{src:header_logo2/* default */.Z,alt:""}))),/*#__PURE__*/react.createElement("div",{className:"main-menu-ex main-menu-ex1"},/*#__PURE__*/react.createElement(Menu/* default */.Z,null)),/*#__PURE__*/react.createElement("div",{className:"header-buttons"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/account",className:"theme-btn15"},"T\u01B0 V\u1EA5n Ngay",' ',/*#__PURE__*/react.createElement("span",null,/*#__PURE__*/react.createElement(fa6/* FaArrowRight */.Z1Y,null)))))))))),/*#__PURE__*/react.createElement(components_MobileTop,null));};/* harmony default export */ var components_Navbar = (Navbar);
// EXTERNAL MODULE: ./src/assets/img/blog/left-image1.png
var left_image1 = __webpack_require__(9729);
// EXTERNAL MODULE: ./src/assets/img/blog/center-image2.png
var center_image2 = __webpack_require__(599);
// EXTERNAL MODULE: ./src/assets/img/blog/right-image3.png
var right_image3 = __webpack_require__(3847);
;// CONCATENATED MODULE: ./src/assets/img/shapes/home4-shape2.png
/* harmony default export */ var home4_shape2 = (__webpack_require__.p + "static/home4-shape2-2aa892d53398f39d339da2bcf4920884.png");
;// CONCATENATED MODULE: ./src/pages/multi/home-9/components/Post.tsx
const Post=()=>{return/*#__PURE__*/react.createElement("div",{className:"post-area sp _relative",id:"post"},/*#__PURE__*/react.createElement(Container/* default */.Z,null,/*#__PURE__*/react.createElement(Row/* default */.Z,null,/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:5,className:"m-auto text-center"},/*#__PURE__*/react.createElement("div",{className:"headding4 pbmit-heading-subheading animation-style2"},/*#__PURE__*/react.createElement("h2",{className:"text-anime-style-3",style:{color:'#1C2A57',marginBottom:'10px'}},"M\u1ED9t N\u1EC1n T\u1EA3ng Cho M\u1ECDi ",/*#__PURE__*/react.createElement("span",{style:{color:'#1E40AF'}},"Nhu C\u1EA7u T\u0103ng Tr\u01B0\u1EDFng")),/*#__PURE__*/react.createElement("div",{className:"space16"}),/*#__PURE__*/react.createElement("p",{"data-aos":"fade-up","data-aos-duration":"900",style:{color:'#1C2A57'}},"Thay v\xEC s\u1EED d\u1EE5ng h\xE0ng ch\u1EE5c c\xF4ng c\u1EE5 r\u1EDDi r\u1EA1c, CDP.vn cung c\u1EA5p h\u1EC7 sinh th\xE1i \u0111\u1ED3ng b\u1ED9, n\u01A1i d\u1EEF li\u1EC7u \u0111\u01B0\u1EE3c h\u1EE3p nh\u1EA5t v\xE0 l\xE0m gi\xE0u li\xEAn t\u1EE5c.")))),/*#__PURE__*/react.createElement("div",{className:"space30"}),/*#__PURE__*/react.createElement(Row/* default */.Z,{className:"align-items-center justify-content-center"},/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:4,md:4,className:"mb-4 mb-md-0"},/*#__PURE__*/react.createElement("div",{className:"image-box text-center","data-aos":"zoom-out","data-aos-duration":"800"},/*#__PURE__*/react.createElement("img",{src:left_image1/* default */.Z,alt:"Social CDP",className:"img-fluid rounded"}))),/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:4,md:4,className:"mb-4 mb-md-0"},/*#__PURE__*/react.createElement("div",{className:"image-box text-center","data-aos":"zoom-out","data-aos-duration":"900"},/*#__PURE__*/react.createElement("img",{src:center_image2/* default */.Z,alt:"Platform Hub",className:"img-fluid rounded"}))),/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:4,md:4},/*#__PURE__*/react.createElement("div",{className:"image-box text-center","data-aos":"zoom-out","data-aos-duration":"1000"},/*#__PURE__*/react.createElement("img",{src:right_image3/* default */.Z,alt:"Ecom CDP",className:"img-fluid rounded"})))),/*#__PURE__*/react.createElement("div",{className:"space30"}),/*#__PURE__*/react.createElement(Row/* default */.Z,{className:"justify-content-center g-4"},/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:6,md:6},/*#__PURE__*/react.createElement("div",{className:"content-box p-4 h-100 rounded-4",style:{backgroundColor:'#EFF6FF'},"data-aos":"fade-up","data-aos-duration":"800"},/*#__PURE__*/react.createElement("h3",{className:"fw-bold mb-3",style:{color:'#1E40AF'}},"Social CDP"),/*#__PURE__*/react.createElement("p",{className:"mb-0 text-dark",style:{color:'#1C2A57'}},"Chuy\xEAn gia thu th\u1EADp v\xE0 chuy\u1EC3n \u0111\u1ED5i d\u1EEF li\u1EC7u t\u1EEB c\xE1c k\xEAnh h\u1ED9i tho\u1EA1i (Messenger, Zalo, TikTok), t\u1EF1 \u0111\u1ED9ng h\xF3a t\u01B0\u01A1ng t\xE1c v\xE0 t\u1ED1i \u01B0u qu\u1EA3ng c\xE1o."))),/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:6,md:6},/*#__PURE__*/react.createElement("div",{className:"content-box p-4 h-100 rounded-4",style:{backgroundColor:'#EFF6FF'},"data-aos":"fade-up","data-aos-duration":"900"},/*#__PURE__*/react.createElement("h3",{className:"fw-bold mb-3",style:{color:'#1E40AF'}},"Ecom CDP"),/*#__PURE__*/react.createElement("p",{className:"mb-0 text-dark",style:{color:'#1C2A57'}},"Tr\xE1i tim c\u1EE7a d\u1EEF li\u1EC7u b\xE1n h\xE0ng, \u0111\u1ED3ng b\u1ED9 \u0111\u01A1n h\xE0ng, loyalty, h\xE0nh vi mua s\u1EAFm t\u1EEB Website, S\xE0n TM\u0110T v\xE0 h\u1EC7 th\u1ED1ng POS (Sapo, KiotViet...)."))))),/*#__PURE__*/react.createElement("img",{className:"shape1",src:home4_shape2,alt:""}));};/* harmony default export */ var components_Post = (Post);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Tab.js
var Tab = __webpack_require__(6841);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/shared/src/utils.js
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};


//# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/Icon.js
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const Icon = (0,react.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => (0,react.createElement)(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => (0,react.createElement)(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);


//# sourceMappingURL=Icon.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const createLucideIcon = (iconName, iconNode) => {
  const Component = (0,react.forwardRef)(
    ({ className, ...props }, ref) => (0,react.createElement)(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};


//# sourceMappingURL=createLucideIcon.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/database.js
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
];
const Database = createLucideIcon("database", __iconNode);


//# sourceMappingURL=database.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/scan-face.js
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const scan_face_iconNode = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 9h.01", key: "x1ddxp" }]
];
const ScanFace = createLucideIcon("scan-face", scan_face_iconNode);


//# sourceMappingURL=scan-face.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/users.js
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const users_iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", users_iconNode);


//# sourceMappingURL=users.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/message-square.js
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const message_square_iconNode = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
];
const MessageSquare = createLucideIcon("message-square", message_square_iconNode);


//# sourceMappingURL=message-square.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/target.js
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const target_iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", target_iconNode);


//# sourceMappingURL=target.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/workflow.js
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const workflow_iconNode = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
];
const Workflow = createLucideIcon("workflow", workflow_iconNode);


//# sourceMappingURL=workflow.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/sparkles.js
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const sparkles_iconNode = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", sparkles_iconNode);


//# sourceMappingURL=sparkles.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/heart.js
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const heart_iconNode = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
];
const Heart = createLucideIcon("heart", heart_iconNode);


//# sourceMappingURL=heart.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/star.js
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const star_iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", star_iconNode);


//# sourceMappingURL=star.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/shield-check.js
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const shield_check_iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", shield_check_iconNode);


//# sourceMappingURL=shield-check.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/file-text.js
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const file_text_iconNode = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", file_text_iconNode);


//# sourceMappingURL=file-text.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/chart-line.js
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const chart_line_iconNode = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
];
const ChartLine = createLucideIcon("chart-line", chart_line_iconNode);


//# sourceMappingURL=chart-line.js.map

;// CONCATENATED MODULE: ./src/pages/multi/home-9/components/Services.tsx
const tabData={'social-connect':[{icon:/*#__PURE__*/react.createElement(Database,{size:24}),title:'Đồng Bộ Dữ Liệu Đa Kênh',paragraph:'Tự động hợp nhất dữ liệu từ Social (Facebook, Instagram, Zalo, TikTok), E-com (Sàn TMĐT, Website) và POS (Sapo, KiotViet...).',duration:'800'},{icon:/*#__PURE__*/react.createElement(ScanFace,{size:24}),title:'Xây Dựng Chân Dung 360°',paragraph:'Hợp nhất và định danh khách hàng trên các nền tảng khác nhau để có một góc nhìn toàn diện, duy nhất về từng cá nhân.',duration:'900'},{icon:/*#__PURE__*/react.createElement(Users,{size:24}),title:'Phân Nhóm Thông Minh',paragraph:'Tự động phân nhóm KH theo nhân khẩu học, hành vi mua sắm, RFM, tags để cá nhân hóa chiến dịch.',duration:'1000'},{icon:/*#__PURE__*/react.createElement(MessageSquare,{size:24}),title:'Phân Tích Hội Thoại Bằng AI',paragraph:'Tự động lắng nghe, thấu hiểu insight khách hàng và đo lường, chấm điểm chất lượng hội thoại của đội ngũ CSKH.',duration:'1100'}],'social-care':[{icon:/*#__PURE__*/react.createElement(Target,{size:24}),title:'Tối Ưu Ads Với Dataset',paragraph:'Gửi tín hiệu Lead, Purchase, Value về cho Meta để tối ưu quảng cáo chính xác, giảm chi phí và tăng ROAS.',duration:'800'},{icon:/*#__PURE__*/react.createElement(Workflow,{size:24}),title:'Automation Đa Kênh',paragraph:'Thiết lập kịch bản tự động với Facebook Marketing Messages (FMM), ZNS, tự động kết bạn và mời vào nhóm Zalo VIP.',duration:'900'},{icon:/*#__PURE__*/react.createElement(Sparkles,{size:24}),title:'Cá Nhân Hóa Trải Nghiệm',paragraph:'Tạo trải nghiệm mua sắm liền mạch với MiniApp/MiniWeb và thu hút khách hàng bằng Gamification (Vòng quay, Mở quà).',duration:'1000'},{icon:/*#__PURE__*/react.createElement(Heart,{size:24}),title:'Chăm Sóc Khách Trung Thành',paragraph:'Xây dựng hệ thống Loyalty, tích điểm, đổi quà, tự động thu thập feedback, survey sau khi khách mua hàng.',duration:'1100'}],'social-insight':[{icon:/*#__PURE__*/react.createElement(Star,{size:24}),title:'Chấm Điểm Leads & Sales',paragraph:'Đưa ra hệ thống chấm điểm hiệu suất chiến dịch marketing và kịch bản bán hàng thông qua dữ liệu tin nhắn thu thập từ các chiến dịch.',duration:'800'},{icon:/*#__PURE__*/react.createElement(ShieldCheck,{size:24}),title:'Chân Dung Khách Hàng 360',paragraph:'Cung cấp cái nhìn 360 độ về tình hình kinh doanh, hiệu suất phễu bán hàng và hoạt động của đội ngũ.',duration:'900'},{icon:/*#__PURE__*/react.createElement(FileText,{size:24}),title:'Báo Cáo RFM & Loyalty',paragraph:'Phân tích sâu về giá trị vòng đời khách hàng (CLV), xác định các tệp khách hàng giá trị cao để có chiến lược chăm sóc phù hợp.',duration:'1000'},{icon:/*#__PURE__*/react.createElement(ChartLine,{size:24}),title:'Báo Cáo Chiến Dịch Real-Time',paragraph:'Đo lường hiệu quả (ROI, Doanh thu, Chi phí) của từng chiến dịch marketing, remarketing trên một dashboard duy nhất.',duration:'1100'}]};const Services=()=>{const{0:activeTab,1:setActiveTab}=(0,react.useState)('social-connect');const tabs=[{key:'social-connect',label:'Social Connect',subtitle:'Thu Thập & Làm Giàu Dữ Liệu',activeClass:'active-connect',bgClass:'bg-connect'},{key:'social-care',label:'Social Care',subtitle:'Tương Tác & Tối Ưu Chuyển Đổi',activeClass:'active-care',bgClass:'bg-care'},{key:'social-insight',label:'Social Insight',subtitle:'Báo Cáo & Phân Tích',activeClass:'active-insight',bgClass:'bg-insight'}];return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("div",{className:"space100"}),/*#__PURE__*/react.createElement("div",{className:"work3 work-vertical-tabs _relative",id:"work"},/*#__PURE__*/react.createElement(Container/* default */.Z,null,/*#__PURE__*/react.createElement(Row/* default */.Z,null,/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:6,className:"m-auto text-center"},/*#__PURE__*/react.createElement("div",{className:"headding4 pbmit-heading-subheading animation-style2"},/*#__PURE__*/react.createElement("h2",{className:"text-anime-style-3",style:{color:'#1C2A57',marginBottom:'10px'}},"CDP.Vn Ho\u1EA1t \u0110\u1ED9ng ",/*#__PURE__*/react.createElement("br",null),/*#__PURE__*/react.createElement("span",{style:{color:'#1E40AF'}},"Nh\u01B0 Th\u1EBF N\xE0o?")),/*#__PURE__*/react.createElement("p",{style:{color:'#1C2A57'}},"Kh\xE1m ph\xE1 b\u1ED9 c\xF4ng c\u1EE5 m\u1EA1nh m\u1EBD gi\xFAp b\u1EA1n l\xE0m ch\u1EE7 d\u1EEF li\u1EC7u v\xE0 t\u1EF1 \u0111\u1ED9ng h\xF3a t\u0103ng tr\u01B0\u1EDFng tr\xEAn m\u1ECDi \u0111i\u1EC3m ch\u1EA1m. ")))),/*#__PURE__*/react.createElement(Row/* default */.Z,{className:"mt-5"},/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:9,className:"order-lg-1 order-2 mt-4 mt-lg-0"},/*#__PURE__*/react.createElement(ScrollTabs,{tabs:tabs,activeTab:activeTab,onChange:setActiveTab},/*#__PURE__*/react.createElement(Tab/* default */.Z.Container,{activeKey:activeTab},/*#__PURE__*/react.createElement(Tab/* default */.Z.Content,null,tabs.map(_ref=>{let{key,bgClass}=_ref;return/*#__PURE__*/react.createElement(Tab/* default */.Z.Pane,{key:key,eventKey:key,id:key},/*#__PURE__*/react.createElement(Row/* default */.Z,{className:"g-4"},tabData[key].map((item,i)=>/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:6,md:6,key:i},/*#__PURE__*/react.createElement("div",{className:"tabs-box-item "+bgClass,"data-aos":"fade-up","data-aos-duration":item.duration||'800'},/*#__PURE__*/react.createElement("div",{className:"icon-box "+bgClass},item.icon),/*#__PURE__*/react.createElement("h3",{className:activeTab===key?'active':''},item.title),/*#__PURE__*/react.createElement("p",{style:{color:'#1B2A57'}},item.paragraph))))));}))))),/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:3,className:"order-lg-2 order-1"},/*#__PURE__*/react.createElement("div",{className:"nav flex-column",role:"tablist"},tabs.map(_ref2=>{let{key,label,subtitle,activeClass}=_ref2;return/*#__PURE__*/react.createElement("div",{key:key,className:"nav-item "+(activeTab===key?activeClass:''),onClick:()=>setActiveTab(key)},/*#__PURE__*/react.createElement("button",{className:""+(activeTab===key?"active "+activeClass:''),id:key+"-tab",type:"button",role:"tab","aria-controls":key,"aria-selected":activeTab===key},label),activeTab===key&&/*#__PURE__*/react.createElement("div",{className:"tab-subtitle"},subtitle));})))),/*#__PURE__*/react.createElement(Row/* default */.Z,{className:"my-4"},/*#__PURE__*/react.createElement(Col/* default */.Z,null,/*#__PURE__*/react.createElement("div",{style:{height:'4rem'}}))))));};/* harmony default export */ var components_Services = (Services);const ScrollTabs=_ref3=>{let{tabs,activeTab,onChange,children}=_ref3;const ref=(0,react.useRef)(null);const accRef=(0,react.useRef)(0);const dirRef=(0,react.useRef)(null);const cooldownRef=(0,react.useRef)(false);(0,react.useEffect)(()=>{const handler=e=>{const el=ref.current;if(!el)return;const rect=el.getBoundingClientRect();const inView=rect.top<window.innerHeight&&rect.bottom>0;if(!inView)return;const idx=tabs.findIndex(t=>t.key===activeTab);const direction=e.deltaY>0?'down':e.deltaY<0?'up':null;if(!direction)return;const THRESHOLD=200;if(dirRef.current&&dirRef.current!==direction){accRef.current=0;}dirRef.current=direction;const canScrollTabs=direction==='down'&&idx<tabs.length-1||direction==='up'&&idx>0;if(canScrollTabs){e.preventDefault();accRef.current+=Math.abs(e.deltaY);if(accRef.current>=THRESHOLD&&!cooldownRef.current){const nextIdx=direction==='down'?idx+1:idx-1;onChange(tabs[nextIdx].key);accRef.current=0;cooldownRef.current=true;setTimeout(()=>{cooldownRef.current=false;},900);}}else{accRef.current=0;// allow page to scroll at boundaries
}};const el=ref.current;if(el)el.addEventListener('wheel',handler,{passive:false});return()=>{if(el)el.removeEventListener('wheel',handler);};},[activeTab,tabs,onChange]);return/*#__PURE__*/react.createElement("div",{ref:ref},children);};
// EXTERNAL MODULE: ./src/assets/img/logo/teas4-logo1.png
var teas4_logo1 = __webpack_require__(3600);
// EXTERNAL MODULE: ./src/assets/img/logo/teas4-logo2.png
var teas4_logo2 = __webpack_require__(8079);
// EXTERNAL MODULE: ./src/assets/img/logo/teas4-logo3.png
var teas4_logo3 = __webpack_require__(3536);
// EXTERNAL MODULE: ./src/assets/img/logo/teas4-logo4.png
var teas4_logo4 = __webpack_require__(3934);
// EXTERNAL MODULE: ./src/assets/img/logo/teas4-logo5.png
var teas4_logo5 = __webpack_require__(3062);
// EXTERNAL MODULE: ./src/assets/img/logo/tes2-slider2-logo1.png
var tes2_slider2_logo1 = __webpack_require__(6764);
// EXTERNAL MODULE: ./src/assets/img/logo/tes2-slider2-logo2.png
var tes2_slider2_logo2 = __webpack_require__(3759);
// EXTERNAL MODULE: ./src/assets/img/logo/tes2-slider2-logo3.png
var tes2_slider2_logo3 = __webpack_require__(4107);
// EXTERNAL MODULE: ./src/assets/img/logo/tes2-slider2-logo4.png
var tes2_slider2_logo4 = __webpack_require__(7752);
// EXTERNAL MODULE: ./src/assets/img/logo/tes2-slider2-logo5.png
var tes2_slider2_logo5 = __webpack_require__(1826);
// EXTERNAL MODULE: ./node_modules/react-slick/lib/index.js
var lib = __webpack_require__(6066);
;// CONCATENATED MODULE: ./src/pages/multi/home-9/components/Testimonial.tsx
const Testimonial=()=>{const stars=Array(5).fill(null);const logos1=[teas4_logo1/* default */.Z,teas4_logo2/* default */.Z,teas4_logo3/* default */.Z,teas4_logo4/* default */.Z,teas4_logo5/* default */.Z,teas4_logo1/* default */.Z,teas4_logo2/* default */.Z,teas4_logo3/* default */.Z,teas4_logo4/* default */.Z,teas4_logo5/* default */.Z];const logos2=[tes2_slider2_logo1/* default */.Z,tes2_slider2_logo2/* default */.Z,tes2_slider2_logo3/* default */.Z,tes2_slider2_logo4/* default */.Z,tes2_slider2_logo5/* default */.Z,tes2_slider2_logo1/* default */.Z,tes2_slider2_logo2/* default */.Z,tes2_slider2_logo3/* default */.Z,tes2_slider2_logo4/* default */.Z,tes2_slider2_logo5/* default */.Z];const sliderRef=(0,react.useRef)(null);const setting={margin:'30',slidesToShow:1,arrows:false,centerMode:false,loop:true,draggable:true,fade:false,responsive:[{breakpoint:769,settings:{arrows:false,centerMode:false,centerPadding:'40px',slidesToShow:1}},{breakpoint:480,settings:{arrows:false,centerMode:false,centerPadding:'40px',slidesToShow:1}}]};const setting2={slidesToShow:5,slidesToScroll:1,dots:false,arrows:false,infinite:true,autoplay:true,autoplaySpeed:1000,// wait 1 second
speed:2000,// 0.5 second scroll animation
cssEase:'ease-in-out',// smooth easing
responsive:[{breakpoint:769,settings:{centerMode:true,centerPadding:'40px',slidesToShow:3}},{breakpoint:480,settings:{centerMode:true,centerPadding:'40px',slidesToShow:2}}]};const setting3={slidesToShow:5,slidesToScroll:1,dots:false,arrows:false,infinite:true,autoplay:true,autoplaySpeed:1000,// wait 1 second
speed:1035,// 0.5 second scroll animation
cssEase:'ease-in-out',// smooth easing
responsive:[{breakpoint:769,settings:{centerMode:true,centerPadding:'40px',slidesToShow:3}},{breakpoint:480,settings:{centerMode:true,centerPadding:'40px',slidesToShow:2}}]};return/*#__PURE__*/react.createElement("div",{className:"testimonial4 sp",id:"tes"},/*#__PURE__*/react.createElement(Container/* default */.Z,null,/*#__PURE__*/react.createElement(Row/* default */.Z,null,/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:6,className:"m-auto text-center"},/*#__PURE__*/react.createElement("div",{className:"headding4 pbmit-heading-subheading animation-style2"},/*#__PURE__*/react.createElement("h2",{className:"text-anime-style-3",style:{color:'#1C2A57',lineHeight:'1.5',marginBottom:'10px'}},"Kh\xE1ch H\xE0ng ",/*#__PURE__*/react.createElement("span",{style:{color:'#1E40AF'}}," Tin D\xF9ng")),/*#__PURE__*/react.createElement("p",{style:{color:'#1b2a57'}},"C\xF9ng v\u1EDBi ",/*#__PURE__*/react.createElement("span",{style:{color:'#1E40AF'}},"50,000+")," Doanh nghi\u1EC7p/ T\u1ED5 ch\u1EE9c/ \u0110\u1ED9i nh\xF3m Tin ch\u1ECDn VIK ")))),/*#__PURE__*/react.createElement(Row/* default */.Z,null,/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:8,className:"m-auto text-center"},/*#__PURE__*/react.createElement(lib/* default */.Z,Object.assign({},setting2,{className:"tes4-logo-slider1"}),logos1.map((logo,i)=>/*#__PURE__*/react.createElement("div",{className:"single-logo",key:"logo1-"+i},/*#__PURE__*/react.createElement("img",{src:logo,alt:""})))),/*#__PURE__*/react.createElement(lib/* default */.Z,Object.assign({},setting3,{className:"tes4-logo-slider2"}),logos2.map((logo,i)=>/*#__PURE__*/react.createElement("div",{className:"single-logo",key:"logo2-"+i},/*#__PURE__*/react.createElement("img",{src:logo,alt:""}))))))));};/* harmony default export */ var components_Testimonial = (Testimonial);
// EXTERNAL MODULE: ./src/assets/img/work/work4-img1.png
var work4_img1 = __webpack_require__(5939);
// EXTERNAL MODULE: ./src/assets/img/work/work4-img2.png
var work4_img2 = __webpack_require__(7737);
// EXTERNAL MODULE: ./src/assets/img/work/work4-img3.png
var work4_img3 = __webpack_require__(8654);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Image.js
var Image = __webpack_require__(1330);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.mjs
var md = __webpack_require__(80);
// EXTERNAL MODULE: ./node_modules/react-icons/si/index.mjs
var si = __webpack_require__(9715);
// EXTERNAL MODULE: ./node_modules/react-icons/pi/index.mjs
var pi = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/react-icons/ri/index.mjs
var ri = __webpack_require__(7696);
// EXTERNAL MODULE: ./node_modules/react-icons/gi/index.mjs
var gi = __webpack_require__(1054);
;// CONCATENATED MODULE: ./src/pages/multi/home-9/components/Work.tsx
const Work=()=>{const{0:active,1:setActive}=(0,react.useState)('attract');const tabs=[{key:'attract',titleLeft:'Khách Vãng Lai',titleRight:'Khách Tiềm Năng',description:'Định danh, thu thập thông tin và giảm chi phí trên mỗi khách hàng tiềm năng.',centerImage:work4_img1/* default */.Z,leftBoxes:[{title:'Chatbot AI 24/7',desc:'Tự động trả lời, thu thập thông tin và tư vấn sản phẩm ngay lập tức.',icon:si/* SiChatbot */._t9},{title:'Thu Hút Leads Bằng Gamification',desc:'Sử dụng minigame tăng tương tác và khuyến khích khách hàng để lại thông tin.',icon:pi/* PiGameControllerFill */.R2z}],rightBoxes:[{title:'Tối Ưu Ads Với Dataset',desc:'Đồng bộ tín hiệu Lead để tối ưu quảng cáo chính xác hơn.',icon:md/* MdDatasetLinked */.wLG},{title:'Bám Đuổi Remarketing 0đ',desc:'Tự động bám đuổi 24h với khách đã tương tác nhưng chưa mua.',icon:md/* MdOutlineLoop */.DFb}]},{key:'convert',titleLeft:'Khách Tiềm Năng',titleRight:'Người Mua Hàng',description:'Gia tăng tỷ lệ chốt đơn và giá trị đơn hàng trung bình (AOV).',centerImage:work4_img2/* default */.Z,leftBoxes:[{title:'MiniApp/MiniWeb Trong Chat',desc:'Trải nghiệm mua sắm và thanh toán liền mạch ngay trong nền tảng chat.',icon:ri/* RiChatAiLine */.$_s},{title:'Tối Ưu Ads Theo Purchase & Value',desc:'Đồng bộ tín hiệu đơn hàng và giá trị tìm đúng người mua có chi tiêu cao.',icon:md/* MdOutlineSettingsSuggest */.Pfl}],rightBoxes:[{title:'Remarketing Đa Kênh FMM/ZNS',desc:'Gửi tin nhắn nhắc nhớ và thúc đẩy mua hàng trên nhiều kênh.',icon:md/* MdOutlineSendToMobile */.dpq},{title:'Ưu Đãi Cá Nhân Hóa 1‑1',desc:'Tự động tạo Combo, Flashsale phù hợp lịch sử xem và mua.',icon:ri/* RiDiscountPercentLine */.tmX}]},{key:'retain',titleLeft:'Người Mua Hàng',titleRight:'Khách Trung Thành',description:'Tăng tỷ lệ quay lại, giá trị trọn đời (CLV) và khách giới thiệu.',centerImage:work4_img3/* default */.Z,leftBoxes:[{title:'Chương Trình Loyalty Tự Động',desc:'Tự động tích điểm sau mỗi lần mua và đổi quà, phân hạng thành viên.',icon:md/* MdOutlineLoyalty */.vCV},{title:'Chăm Sóc 1‑1 Qua Zalo',desc:'Kết bạn, vào nhóm VIP để gửi ưu đãi và chăm sóc độc quyền.',icon:gi/* GiLoveMystery */.wSp}],rightBoxes:[{title:'Thu Thập Feedback Tự Động',desc:'Xin đánh giá, khảo sát mức độ hài lòng sau khi bán hàng.',icon:md/* MdOutlineRateReview */.I8D},{title:'Phân Nhóm Khách Hàng RFM',desc:'Tự động phân nhóm để xây dựng chiến dịch giữ chân hiệu quả.',icon:md/* MdOutlineGroups */.snE}]}];const current=tabs.find(t=>t.key===active);return/*#__PURE__*/react.createElement("div",{className:"work2 sp",id:"work"},/*#__PURE__*/react.createElement(Container/* default */.Z,null,/*#__PURE__*/react.createElement(Row/* default */.Z,null,/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:8,className:"m-auto text-center"},/*#__PURE__*/react.createElement("div",{className:"headding4 pbmit-heading-subheading animation-style2"},/*#__PURE__*/react.createElement("h2",{className:"text-anime-style-3",style:{color:'#1C2A57',marginBottom:'10px'}},"T\u1ED1i \u01AFu To\xE0n B\u1ED9 ",/*#__PURE__*/react.createElement("span",{style:{color:'#1E40AF'}},"H\xE0nh Tr\xECnh Kh\xE1ch H\xE0ng")),/*#__PURE__*/react.createElement("div",{className:"space16"}),/*#__PURE__*/react.createElement("p",{"data-aos":"fade-up","data-aos-duration":"800",style:{color:'#324766'}},"T\u1EEB ng\u01B0\u1EDDi l\u1EA1 \u0111\u1EBFn kh\xE1ch h\xE0ng trung th\xE0nh, CDP.vn \u0111\u1ED3ng h\xE0nh v\xE0 t\u1ED1i \u01B0u t\u1EEBng giai \u0111o\u1EA1n")))),/*#__PURE__*/react.createElement(Work_ScrollTabs,{tabs:tabs.map(t=>t.key),activeTab:active,onChange:setActive},/*#__PURE__*/react.createElement(Row/* default */.Z,null,/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:8,className:"m-auto text-center"},/*#__PURE__*/react.createElement("div",{className:"work-tabs-progress","data-aos":"fade-up","data-aos-duration":"800"},/*#__PURE__*/react.createElement("div",{className:"nav",role:"tablist",style:{justifyContent:'space-between'}},/*#__PURE__*/react.createElement("button",{className:"nav-link "+(active==='attract'?'active':''),onClick:()=>setActive('attract')},"Giai \u0110o\u1EA1n 1: Thu H\xFAt"),/*#__PURE__*/react.createElement("button",{className:"nav-link "+(active==='convert'?'active':''),onClick:()=>setActive('convert')},"Giai \u0110o\u1EA1n 2: Chuy\u1EC3n \u0110\u1ED5i"),/*#__PURE__*/react.createElement("button",{className:"nav-link "+(active==='retain'?'active':''),onClick:()=>setActive('retain')},"Giai \u0110o\u1EA1n 3: Gi\u1EEF Ch\xE2n"))),/*#__PURE__*/react.createElement("div",{className:"space16"}),/*#__PURE__*/react.createElement("h2",{className:"text-anime-style-3",style:{fontWeight:700,color:'#1E3A8A',marginTop:24}},current.titleLeft," ",/*#__PURE__*/react.createElement(md/* MdDoubleArrow */.m7R,{style:{color:'#fff',backgroundColor:'#1E3A8A',borderRadius:4,width:24,height:24,margin:'0 12px'}})," ",current.titleRight),/*#__PURE__*/react.createElement("p",{style:{marginTop:8,marginBottom:24,color:'#485F7F'}},current.description))),/*#__PURE__*/react.createElement(Row/* default */.Z,{className:"align-items-center"},/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:4},/*#__PURE__*/react.createElement("div",{className:"tab-content"},current.leftBoxes.map((b,i)=>/*#__PURE__*/react.createElement("div",{key:i,className:"tabs-box-item",style:{marginBottom:20,textAlign:'left'},"data-aos":"fade-up","data-aos-duration":"800","data-aos-delay":100*(i+1)},/*#__PURE__*/react.createElement(b.icon,{size:28,style:{marginBottom:8,color:'#ffffff',backgroundColor:'#1E3A8A',padding:8,borderRadius:8,width:36,height:36}}),/*#__PURE__*/react.createElement("p",{style:{marginBottom:4,fontWeight:600,color:'#1E3A8A',fontSize:22}},b.title),/*#__PURE__*/react.createElement("p",{style:{color:'#1B2A57'}},b.desc))))),/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:4,className:"text-center"},/*#__PURE__*/react.createElement(Image/* default */.Z,{src:current.centerImage,alt:"Center",fluid:true,"data-aos":"zoom-in","data-aos-duration":"800"})),/*#__PURE__*/react.createElement(Col/* default */.Z,{lg:4},/*#__PURE__*/react.createElement("div",{className:"tab-content"},current.rightBoxes.map((b,i)=>/*#__PURE__*/react.createElement("div",{key:i,className:"tabs-box-item",style:{marginBottom:20,textAlign:'left'},"data-aos":"fade-up","data-aos-duration":"800","data-aos-delay":100*(i+1)},/*#__PURE__*/react.createElement(b.icon,{size:28,style:{marginBottom:8,color:'#ffffff',backgroundColor:'#1E3A8A',padding:8,borderRadius:8,width:36,height:36}}),/*#__PURE__*/react.createElement("p",{style:{marginBottom:4,fontWeight:600,color:'#1E3A8A',fontSize:22}},b.title),/*#__PURE__*/react.createElement("p",{style:{color:'#1B2A57'}},b.desc)))))))));};/* harmony default export */ var components_Work = (Work);const Work_ScrollTabs=_ref=>{let{tabs,activeTab,onChange,children}=_ref;const ref=(0,react.useRef)(null);const accRef=(0,react.useRef)(0);const dirRef=(0,react.useRef)(null);const cooldownRef=(0,react.useRef)(false);(0,react.useEffect)(()=>{const handler=e=>{const el=ref.current;if(!el)return;const rect=el.getBoundingClientRect();const inView=rect.top<window.innerHeight&&rect.bottom>0;if(!inView)return;const idx=tabs.findIndex(t=>t===activeTab);const direction=e.deltaY>0?'down':e.deltaY<0?'up':null;if(!direction)return;const THRESHOLD=200;if(dirRef.current&&dirRef.current!==direction){accRef.current=0;}dirRef.current=direction;const canScrollTabs=direction==='down'&&idx<tabs.length-1||direction==='up'&&idx>0;if(canScrollTabs){e.preventDefault();accRef.current+=Math.abs(e.deltaY);if(accRef.current>=THRESHOLD&&!cooldownRef.current){const nextIdx=direction==='down'?idx+1:idx-1;onChange(tabs[nextIdx]);accRef.current=0;cooldownRef.current=true;setTimeout(()=>{cooldownRef.current=false;},900);}}else{accRef.current=0;}};const el=ref.current;if(el)el.addEventListener('wheel',handler,{passive:false});return()=>{if(el)el.removeEventListener('wheel',handler);};},[activeTab,tabs,onChange]);return/*#__PURE__*/react.createElement("div",{ref:ref},children);};
// EXTERNAL MODULE: ./src/components/PageMeta.tsx + 1 modules
var PageMeta = __webpack_require__(9819);
;// CONCATENATED MODULE: ./src/pages/multi/home-9/index.tsx












const home9 = () => {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(BasicLayout/* default */.Z, null, /*#__PURE__*/react.createElement(components_Navbar, null), /*#__PURE__*/react.createElement(components_Hero, null), /*#__PURE__*/react.createElement(components_Post, null), /*#__PURE__*/react.createElement(components_Work, null), /*#__PURE__*/react.createElement(components_Services, null), /*#__PURE__*/react.createElement(components_Media, null), /*#__PURE__*/react.createElement(components_Integration, null), /*#__PURE__*/react.createElement(components_Testimonial, null), /*#__PURE__*/react.createElement(components_CTA, null), /*#__PURE__*/react.createElement(components_Footer, null)));
};
/* harmony default export */ var home_9 = (home9);


/***/ }),

/***/ 285:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__.Z = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKFSURBVHgB7ViLcdswDIWzQN0NuEG0QTVCRvAG9QZWJog6gbNBs4HaCdRMIG0gdwKUPEEpRIMQJCufS/LucKZMEHwERAIiwCc+EDawAhBx63+COPb3abPZ/IHXhCeWeTl4qVFH6L/z4uCl4CfLvVS4DNUSsuZwU0gPXvZR18nLg5dHarfwP/TfvGQwfg0CSi+3/nU4wVoIq/fSCF7JjeOD9++j8Q2u9QoIBBsrOaMtB5dAMNpdapRsdqsRRXmD1PR+LrG3Rfk0qGAJ/MAdNxIZn01UIFjj2An7OfbiMDf0vJ0iSjou8f/ZWByHvpu18MiLu4nJwkQHPN/9NdlRF+fbBesrwAruRaEv9V5ZkPL+4M3aSjBjRo8JHYlomKgkz9yj7Nltwl7J9DILyT0bkCt6R6ZXSgSiySvFVs70pjdQZDi1csd0fk7Yq6YWTZFJRu9KGHNNv62SW29Y+wfouGVtMZQ0T0uPX8FAckCr9GVsgl+KXtx/ragODvkSd2gkF2WVC5CsiK4UZY3kU8WNE8VG1P+oqLpUh0Ty7zAI0xmAfxYcQMd31n6QFGgeR4/aQp4GWI8gvmvvpImx/2xI7lqmO/sI4od5mdCRDvMG+7OzIHJd1K8d5kemN32Y06CBwFnSx5XTItlshoWCFZhI+piuZnYoezbYcagXGGIxYyHJk36Hz1uqNWxRDuYAxxuomiJoXLhW9O5gCfCtfz6QUR6OgLf3IZYgutgo9ufhKrYsRAOOOO9yoIrGmwnOvWYpYJzmAlro0+Rvaofc76DP/aHquYHzOiCUd8Wq1ywRWYeXXVjl8FIgsqGKt1z9hUPdlu4ErHKJSqQDCR7WFvqL1OcJ6SfeK/4B1Ly/Z4XLkCAAAAAASUVORK5CYII=");

/***/ }),

/***/ 5362:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__.Z = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJpSURBVHgB5VjrcdswDIZ7/R9vUI2gDapM0IzgDeINqk4QdwJng7oTqBvYnYDqBHYmQMETdaEgggJp+aJcvjucLQqPjxQBPgA+GhBxTVLAEuHIfSc54yv2iyFsiZAYDMO8OVEiUEYIzkZ0pVV0gdZOLL6SbL3nHgeSB9Z2IflBcvLa2tVq1cIcIHKPbK5JsDqVs6mUNoZkA9cAu2TQwBIqma1mKvR4ghxglxAaNCjMOeejUfqpJC6fIzw37PkPyV/o5pdFS3KieXWSHLg5d+9G2Urhvf7m2no8uBh6kONfrKcFzAgcf6mDpPsp4meQtbNlouzvTtKNkVwMtCN5gdvgIsSbBnblw8cRroDzt0dWE61fbYZzh6G1eAuZcAT9wl5772oW5zyZoAJBg5mZHSBosfPer5PjBQyme5ZGcORP0Gskp5uAwxIyECFYJuhXIcUdUxLnIXZr+lNolFMJenZ8kPb9O78E8RJwlpzRTw3dNu3oB3f/GxiXr/vY8unAi/kLBIJXmt5T23NIL3cE+84FbDeScjMVJEIml2ARsDVTBoYbkKwVRHMJmkC8QmPICdQBPYmouiqQ3jaZoGfM5+dR0ONEk8oWjpfFtJKHw89wjuiVLliTGoR1MH1/gCyJ4AZgo9hIeu9+PznYQ1JPv8CMCCTIi6QbO4j9Y88Hcvzbe25h4iDmEeIHsTsYHsJ6f2kIZLiEBuc50haQAxxvOiQY1K1MEnZwDbAruEYRKOeaxepM7vpTL6wKr6kieQT9hdVPGB7+27mPyUGg/uova/M8J9ECl3yJ2sMRfWZzrUa2e1oMHOFlkrsl/gObQuY+DdJ4vQAAAABJRU5ErkJggg==");

/***/ }),

/***/ 7735:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__.Z = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAMAAABU4iNhAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA32AfEEDvnzC/kFCAr3DPoANIFPgAAAD2SURBVDjL7VNRFoMgDKNQUEE3uf9lV5x9rRa2C5gPgRKSvILugQLO3peI/2gxQ/0CpviLt1SNbcQLJ08Q+sQ5tc2US2iLskN994n+COdRHW0fxK5iNuW4moxARFPFDCbq1CNGqN54E3EygmftEon6A8EIHrUA2iyQpL8LnrVCo6i+pMsiyN40eWnzzQiSN28ujpH4mAge3myY2sgGUYiNxd63oIFjnm7sLR0MXaZ48+6ImcXbaDqaF/UE2FtyakN9D3laUZZrVQ91l5ZZLByFDWZD6d00pvHvtVFod8lSE/SQuA8iOsL9Pc4wJKZ4e+HR91HQPfgANh4T99fFmZMAAAAASUVORK5CYII=");

/***/ }),

/***/ 6333:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__.Z = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMSAxMkMyMSAxMi41NTIzIDIwLjU1MjMgMTMgMjAgMTNINEMzLjQ0NzcyIDEzIDMgMTIuNTUyMyAzIDEyQzMgMTEuNDQ3NyAzLjQ0NzcyIDExIDQgMTFIMjBDMjAuNTUyMyAxMSAyMSAxMS40NDc3IDIxIDEyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE4Ljk3MjIgMTJDMTguODc4OSAxMS44NDUyIDE4LjY4MzMgMTEuNTY3MSAxOC40Njk1IDExLjMyNTFDMTguMDQzNyAxMC44NDMyIDE3LjQ1NyAxMC4yOTI4IDE2Ljg0NDUgOS43NjEwNUMxNi4yMzcgOS4yMzM1NyAxNS42MjY1IDguNzQzNjUgMTUuMTY2MSA4LjM4NDM3QzE0LjkzNjUgOC4yMDUxNSAxNC41NDAyIDcuOTA1NzYgMTQuNDA3IDcuODA1MjFDMTMuOTYyNCA3LjQ3NzY4IDEzLjg2NzQgNi44NTE3MyAxNC4xOTQ5IDYuNDA3MDZDMTQuNTIyNCA1Ljk2MjM2IDE1LjE0ODQgNS44NjczNiAxNS41OTMxIDYuMTk0ODdMMTUuNTk2OCA2LjE5NzY3QzE1Ljc0MTIgNi4zMDY3MiAxNi4xNTk4IDYuNjIyOTEgMTYuMzk2NiA2LjgwNzY3QzE2Ljg3MzcgNy4xODAwMiAxNy41MTMyIDcuNjkzMDMgMTguMTU1NyA4LjI1MDg0QzE4Ljc5MzIgOC44MDQzNCAxOS40NTY1IDkuNDIxNiAxOS45NjgyIDEwLjAwMDhDMjAuMjIzMSAxMC4yODkyIDIwLjQ2MTUgMTAuNTkxOCAyMC42NDE3IDEwLjg5MDZDMjAuODA1MyAxMS4xNjIgMjEuMDAwMSAxMS41NTY4IDIxLjAwMDEgMTJDMjEuMDAwMSAxMi40NDMxIDIwLjgwNTMgMTIuODM4IDIwLjY0MTcgMTMuMTA5NEMyMC40NjE1IDEzLjQwODIgMjAuMjIzMSAxMy43MTA4IDE5Ljk2ODIgMTMuOTk5MkMxOS40NTY1IDE0LjU3ODQgMTguNzkzMiAxNS4xOTU3IDE4LjE1NTcgMTUuNzQ5MkMxNy41MTMyIDE2LjMwNyAxNi44NzM3IDE2LjgyIDE2LjM5NjYgMTcuMTkyM0MxNi4xNTk4IDE3LjM3NzEgMTUuNzQxNSAxNy42OTMxIDE1LjU5NzEgMTcuODAyMUwxNS41OTMxIDE3LjgwNTFDMTUuMTQ4NCAxOC4xMzI2IDE0LjUyMjQgMTguMDM3NiAxNC4xOTQ5IDE3LjU5MjlDMTMuODY3NCAxNy4xNDgzIDEzLjk2MjQgMTYuNTIyMyAxNC40MDcgMTYuMTk0OEMxNC41NDAyIDE2LjA5NDIgMTQuOTM2NSAxNS43OTQ4IDE1LjE2NjEgMTUuNjE1NkMxNS42MjY1IDE1LjI1NjQgMTYuMjM3IDE0Ljc2NjQgMTYuODQ0NSAxNC4yMzg5QzE3LjQ1NyAxMy43MDcyIDE4LjA0MzcgMTMuMTU2OCAxOC40Njk1IDEyLjY3NDlDMTguNjgzMyAxMi40MzI5IDE4Ljg3ODkgMTIuMTU0OCAxOC45NzIyIDEyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 8820:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__.Z = (__webpack_require__.p + "static/header-logo8-c39c0b1e3aa6478c180427c44f0a9ad0.png");

/***/ }),

/***/ 2261:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__.Z = (__webpack_require__.p + "static/cta5-main-img-427a908177bf563674cd26ac9635a3c6.png");

/***/ })

}]);
//# sourceMappingURL=component---src-pages-multi-home-9-index-tsx-91c97ef717c74c9c0849.js.map