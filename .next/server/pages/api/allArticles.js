"use strict";
(() => {
var exports = {};
exports.id = 8;
exports.ids = [8];
exports.modules = {

/***/ 7798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ contentful)
});

;// CONCATENATED MODULE: external "contentful"
const external_contentful_namespaceObject = require("contentful");
;// CONCATENATED MODULE: ./helpers/contentful.tsx

/* harmony default export */ const contentful = ((0,external_contentful_namespaceObject.createClient)({
    space: process.env.CONTENTFUL_PROD_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ''
}));


/***/ }),

/***/ 6623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _helpers_contentful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7798);

function handler(req, res) {
    return _helpers_contentful__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getEntries */ .Z.getEntries({
        content_type: 'chapters'
    }).then((result)=>{
        res.status(200).json({
            message: 'ok',
            result
        });
    }).catch((err)=>{
        res.status(500).json({
            message: err.name + err.message + err.stack.toString()
        });
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6623));
module.exports = __webpack_exports__;

})();