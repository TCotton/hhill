"use strict";
(() => {
var exports = {};
exports.id = 358;
exports.ids = [358,405];
exports.modules = {

/***/ 2219:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4796);
/* harmony import */ var _testing_library_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7432);
/* harmony import */ var _testing_library_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_testing_library_react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_1__]);
_index__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



jest.mock('isomorphic-unfetch', ()=>jest.fn(()=>Promise.resolve({
            json: ()=>Promise.resolve({
                    message: 'ok',
                    result: {
                        items: [
                            {
                                fields: {
                                    title: 'Beginnings and Foundations ',
                                    slug: 'beginnings-foundations',
                                    pages: [
                                        {
                                            fields: {
                                                title: 'The Beginning',
                                                slug: 'the-beginning',
                                                contentRichText: 'contentRichText'
                                            }
                                        },
                                        {
                                            fields: {
                                                title: 'The Foundation',
                                                slug: 'the-foundation',
                                                contentRichText: 'contentRichText'
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                })
        })
    )
);
describe('Index', ()=>{
    it('should not render undefined', async ()=>{
        const { baseElement  } = (0,_testing_library_react__WEBPACK_IMPORTED_MODULE_2__.render)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_1__["default"], {}));
        await (0,_testing_library_react__WEBPACK_IMPORTED_MODULE_2__.waitFor)(()=>{
            expect(baseElement).toBeDefined();
        });
    });
    it('should render with the correct text', async ()=>{
        const { findByText  } = (0,_testing_library_react__WEBPACK_IMPORTED_MODULE_2__.render)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_1__["default"], {}));
        expect(await findByText('Beginnings and Foundations')).toBeTruthy();
        expect(await findByText('The Beginning')).toBeTruthy();
        expect(await findByText('The Foundation')).toBeTruthy();
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2132:
/***/ ((module) => {

module.exports = require("@radix-ui/react-icons");

/***/ }),

/***/ 9822:
/***/ ((module) => {

module.exports = require("@radix-ui/react-navigation-menu");

/***/ }),

/***/ 7432:
/***/ ((module) => {

module.exports = require("@testing-library/react");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

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

/***/ }),

/***/ 2134:
/***/ ((module) => {

module.exports = import("isomorphic-unfetch");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [47,97,26,796], () => (__webpack_exec__(2219)));
module.exports = __webpack_exports__;

})();