"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 8322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CustomDocument)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ../../node_modules/next/document.js
var next_document = __webpack_require__(331);
;// CONCATENATED MODULE: external "styled-components"
const external_styled_components_namespaceObject = require("styled-components");
;// CONCATENATED MODULE: ./pages/_document.tsx




class CustomDocument extends next_document["default"] {
    static getInitialProps({ renderPage  }) {
        const sheet = new external_styled_components_namespaceObject.ServerStyleSheet();
        const page = renderPage((App)=>(props)=>sheet.collectStyles(/*#__PURE__*/ jsx_runtime_.jsx(App, {
                    ...props
                }))
        );
        const styleTags = sheet.getStyleElement();
        return {
            ...page,
            styleTags
        };
    }
    render() {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Head, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "preconnect",
                            href: "https://fonts.googleapis.com"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "preconnect",
                            href: "https://fonts.gstatic.com",
                            crossOrigin: ""
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            href: "https://fonts.googleapis.com/css2?family=Space+Mono&display=swap",
                            rel: "stylesheet"
                        }),
                        this.props.styleTags
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            children: "document.body.className = ((document.body.className) ? document.body.className + ` js-enabled` : `js-enabled`);"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#content",
                            className: "govuk-skip-link",
                            "data-module": "govuk-skip-link",
                            children: "Skip to main content"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            id: "top"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {})
                    ]
                })
            ]
        }));
    }
}



/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [47,331], () => (__webpack_exec__(8322)));
module.exports = __webpack_exports__;

})();