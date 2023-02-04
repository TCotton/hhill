"use strict";
(() => {
var exports = {};
exports.id = 663;
exports.ids = [663];
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

/***/ 9224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./helpers/navigationArticlesFilter.ts
const navigationArticlesFilter = (articles, direction, articleId)=>{
    const directionNumber = direction === 'next' ? 1 : -1;
    const article1 = articles.items.map((article)=>{
        var ref7, ref1;
        return {
            title: article === null || article === void 0 ? void 0 : (ref7 = article.fields) === null || ref7 === void 0 ? void 0 : ref7.title,
            slug: (ref1 = article.fields) === null || ref1 === void 0 ? void 0 : ref1.slug,
            pages: Array.isArray(article.fields.pages) ? article.fields.pages.map((page)=>{
                var ref, ref2, ref3, ref4, ref5, ref6;
                return {
                    title: (ref = page.fields) === null || ref === void 0 ? void 0 : ref.title,
                    contentRichText: (ref2 = page.fields) === null || ref2 === void 0 ? void 0 : ref2.contentRichText,
                    slug: (ref3 = page.fields) === null || ref3 === void 0 ? void 0 : ref3.slug,
                    fullSlug: `${(ref4 = page.fields) === null || ref4 === void 0 ? void 0 : ref4.slug}-${(ref5 = page.sys) === null || ref5 === void 0 ? void 0 : ref5.id}`,
                    id: (ref6 = page.sys) === null || ref6 === void 0 ? void 0 : ref6.id
                };
            }) : []
        };
    });
    const orderedArticles = article1.flatMap((article)=>article.pages
    ).map((page, index)=>Object.assign(page, {
            newId: index
        })
    );
    const currentArticle = orderedArticles.find((article)=>{
        return (article === null || article === void 0 ? void 0 : article.id) === articleId;
    }) || {};
    return orderedArticles.find((article)=>{
        return (article === null || article === void 0 ? void 0 : article.newId) === (currentArticle === null || currentArticle === void 0 ? void 0 : currentArticle.newId) + directionNumber;
    });
};
/* harmony default export */ const helpers_navigationArticlesFilter = (navigationArticlesFilter);

// EXTERNAL MODULE: ./helpers/contentful.tsx + 1 modules
var contentful = __webpack_require__(7798);
;// CONCATENATED MODULE: ./pages/api/navigationArticles.ts


function handler(req, res) {
    const direction = req.query.direction;
    const articleId = req.query.articleId;
    return contentful/* default.getEntries */.Z.getEntries({
        content_type: 'chapters'
    }).then((result)=>{
        res.status(200).json({
            message: 'ok',
            result: helpers_navigationArticlesFilter(result, direction, articleId)
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
var __webpack_exports__ = (__webpack_exec__(9224));
module.exports = __webpack_exports__;

})();