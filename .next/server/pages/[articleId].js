(() => {
var exports = {};
exports.id = 714;
exports.ids = [714,405];
exports.modules = {

/***/ 8620:
/***/ ((module) => {

// Exports
module.exports = {
	"backToTop": "article_backToTop__www8g",
	"backToTop__icon": "article_backToTop__icon__YKSHO"
};


/***/ }),

/***/ 1032:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2134);
/* harmony import */ var _helpers_findParent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1425);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__]);
isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const fetchData = async ()=>{
    const content = await (0,isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__["default"])(`${"http://localhost:3000"}/api/allArticlesFiltered`);
    return await content.json();
};
function useResults(id) {
    const { 0: results , 1: setResults  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let ignore = false;
        fetchData().then((json)=>{
            if (!ignore) {
                const result = (0,_helpers_findParent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(id, json);
                setResults(result);
            }
        });
        return ()=>{
            ignore = true;
        };
    }, [
        id
    ]);
    return results;
}
const Caption = (props)=>{
    const { id  } = props;
    const results = useResults(id);
    return results ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "govuk-caption-xl",
        children: results
    }) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Caption);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5471);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_3__);




const mainTitle = `Harold Hill: A People's History`;
function Layout({ children , title  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        title,
                        " - ",
                        mainTitle
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `govuk-width-container ${(_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().container)}`,
                id: "content",
                children: children
            })
        ]
    }));
};


/***/ }),

/***/ 3921:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9097);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__]);
isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const fetchData = async (articleId)=>{
    const content = await (0,isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__["default"])(`${"http://localhost:3000"}/api/navigationArticles?articleId=` + articleId + '&direction=next');
    return await content.json();
};
function useResults(articleId) {
    const { 0: results , 1: setResults  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let ignore = false;
        fetchData(articleId).then((nextArticle)=>{
            var ref;
            if (nextArticle.message === 'ok' && !ignore) setResults(nextArticle === null || nextArticle === void 0 ? void 0 : (ref = nextArticle.result) === null || ref === void 0 ? void 0 : ref.fullSlug);
        });
        return ()=>{
            ignore = true;
        };
    }, [
        articleId
    ]);
    return results;
}
const Previous = (props)=>{
    const { articleId  } = props;
    const next = useResults(articleId);
    const NextLink = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ onClick , href  }, ref)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: href,
                ref: ref,
                className: `govuk-forward-link`,
                children: "Next"
            })
        }));
    });
    NextLink.displayName = 'NextLink';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: next && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: next,
            passHref: true,
            // @ts-ignore
            legacyBehavior: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextLink, {})
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Previous));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5849:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9097);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__]);
isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const fetchData = async (articleId)=>{
    const content = await (0,isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__["default"])(`${"http://localhost:3000"}/api/navigationArticles?articleId=` + articleId + '&direction=previous');
    return await content.json();
};
function useResults(articleId) {
    const { 0: results , 1: setResults  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let ignore = false;
        fetchData(articleId).then((prevArticle)=>{
            var ref;
            if (prevArticle.message === 'ok' && !ignore) setResults(prevArticle === null || prevArticle === void 0 ? void 0 : (ref = prevArticle.result) === null || ref === void 0 ? void 0 : ref.fullSlug);
        });
        return ()=>{
            ignore = true;
        };
    }, [
        articleId
    ]);
    return results;
}
const Previous = (props)=>{
    const { articleId  } = props;
    const previous = useResults(articleId);
    const PreviousLink = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ onClick , href  }, ref)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: href,
                ref: ref,
                className: `govuk-back-link`,
                children: "Previous"
            })
        }));
    });
    PreviousLink.displayName = 'PreviousLink';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: previous && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: previous,
            passHref: true,
            // @ts-ignore
            legacyBehavior: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PreviousLink, {})
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Previous));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const findParent = (id, result)=>{
    var ref;
    const anArray = result === null || result === void 0 ? void 0 : (ref = result.result) === null || ref === void 0 ? void 0 : ref.mappedArticles;
    let title;
    anArray.forEach((item)=>{
        item.pages.forEach((it)=>{
            if (it.id === id.toString().split('-').pop() || '') {
                title = item.title;
            }
        });
    });
    return title;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findParent);


/***/ }),

/***/ 7918:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2134);
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4390);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6688);
/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2509);
/* harmony import */ var rehype_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2920);
/* harmony import */ var rehype_stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5390);
/* harmony import */ var rehype_add_classes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(699);
/* harmony import */ var rehype_add_classes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rehype_add_classes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1871);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6809);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6627);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1644);
/* harmony import */ var _article_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8620);
/* harmony import */ var _article_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_article_module_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Previous__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5849);
/* harmony import */ var _components_Next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3921);
/* harmony import */ var _components_Caption__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1032);
/* harmony import */ var _helpers_mappedArticlesFn__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8678);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__, unified__WEBPACK_IMPORTED_MODULE_2__, remark_parse__WEBPACK_IMPORTED_MODULE_3__, remark_rehype__WEBPACK_IMPORTED_MODULE_4__, rehype_format__WEBPACK_IMPORTED_MODULE_5__, rehype_stringify__WEBPACK_IMPORTED_MODULE_6__, rehype_raw__WEBPACK_IMPORTED_MODULE_8__, remark_gfm__WEBPACK_IMPORTED_MODULE_9__, _components_Header__WEBPACK_IMPORTED_MODULE_12__, _components_Previous__WEBPACK_IMPORTED_MODULE_13__, _components_Next__WEBPACK_IMPORTED_MODULE_14__, _components_Caption__WEBPACK_IMPORTED_MODULE_15__]);
([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__, unified__WEBPACK_IMPORTED_MODULE_2__, remark_parse__WEBPACK_IMPORTED_MODULE_3__, remark_rehype__WEBPACK_IMPORTED_MODULE_4__, rehype_format__WEBPACK_IMPORTED_MODULE_5__, rehype_stringify__WEBPACK_IMPORTED_MODULE_6__, rehype_raw__WEBPACK_IMPORTED_MODULE_8__, remark_gfm__WEBPACK_IMPORTED_MODULE_9__, _components_Header__WEBPACK_IMPORTED_MODULE_12__, _components_Previous__WEBPACK_IMPORTED_MODULE_13__, _components_Next__WEBPACK_IMPORTED_MODULE_14__, _components_Caption__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const BackToTop = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "app-back-to-top back-to-top",
        "data-module": "app-back-to-top",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: `govuk-link govuk-link--no-visited-state app-back-to-top__link ${(_article_module_css__WEBPACK_IMPORTED_MODULE_16___default().backToTop)}`,
            href: "#top",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    role: "presentation",
                    focusable: "false",
                    className: `app-back-to-top__icon ${(_article_module_css__WEBPACK_IMPORTED_MODULE_16___default().backToTop__icon)}`,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "13",
                    height: "17",
                    viewBox: "0 0 13 17",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fill: "currentColor",
                        d: "M6.5 0L0 6.5 1.4 8l4-4v12.7h2V4l4.3 4L13 6.4z"
                    })
                }),
                "Back to top"
            ]
        })
    }));
};
function ArticleId(props) {
    const { title , contentRichText , id  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                title: title,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                    className: "govuk-main-wrapper",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "govuk-grid-row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "govuk-grid-column-two-thirds",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Previous__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        articleId: id
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Caption__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        id: id
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "govuk-heading-l",
                                        children: title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: contentRichText
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Next__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        articleId: id
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "govuk-grid-column-one-third",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackToTop, {})
                            })
                        ]
                    })
                })
            })
        ]
    }));
}
const getArticles = async ()=>{
    const content = await (0,isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__["default"])(`${"http://localhost:3000"}/api/allArticles`);
    const articles = await content.json();
    const mappedArticles = (0,_helpers_mappedArticlesFn__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(articles.result);
    return {
        articles: mappedArticles.flatMap((article)=>article.pages
        ),
        mappedArticles
    };
};
const getStaticProps = async ({ params  })=>{
    // TODO: fix this
    // @ts-ignore
    const { articleId  } = params;
    const content = await (0,isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__["default"])(`${"http://localhost:3000"}/api/article?id=${articleId}`);
    const article = await content.json();
    const processedContent = await (0,unified__WEBPACK_IMPORTED_MODULE_2__.unified)().use(remark_parse__WEBPACK_IMPORTED_MODULE_3__["default"]).use(remark_gfm__WEBPACK_IMPORTED_MODULE_9__["default"]).use(remark_rehype__WEBPACK_IMPORTED_MODULE_4__["default"], {
        allowDangerousHtml: true
    }).use(rehype_raw__WEBPACK_IMPORTED_MODULE_8__["default"]).use((rehype_add_classes__WEBPACK_IMPORTED_MODULE_7___default()), {
        p: 'govuk-body',
        h1: 'govuk-heading-l',
        h2: 'govuk-heading-m',
        h3: 'govuk-heading-m',
        h4: 'govuk-heading-m',
        h5: 'govuk-heading-m',
        h6: 'govuk-heading-m',
        a: 'govuk-link'
    }).use(rehype_format__WEBPACK_IMPORTED_MODULE_5__["default"]).use(rehype_stringify__WEBPACK_IMPORTED_MODULE_6__["default"]).process(article.result.fields.contentRichText);
    const contentHtml = processedContent.toString();
    return {
        props: {
            title: article.result.fields.title || 'no title',
            contentRichText: contentHtml || 'no content',
            id: article.result.sys.id || null
        }
    };
};
const getStaticPaths = async ()=>{
    const { articles  } = await getArticles();
    return {
        paths: articles.map((article)=>{
            return {
                params: {
                    articleId: `${article.slug}-${article.id}`
                }
            };
        }),
        fallback: false
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleId);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2132:
/***/ ((module) => {

"use strict";
module.exports = require("@radix-ui/react-icons");

/***/ }),

/***/ 9822:
/***/ ((module) => {

"use strict";
module.exports = require("@radix-ui/react-navigation-menu");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 699:
/***/ ((module) => {

"use strict";
module.exports = require("rehype-add-classes");

/***/ }),

/***/ 2134:
/***/ ((module) => {

"use strict";
module.exports = import("isomorphic-unfetch");;

/***/ }),

/***/ 2920:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-format");;

/***/ }),

/***/ 1871:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-raw");;

/***/ }),

/***/ 5390:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-stringify");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

"use strict";
module.exports = import("remark-gfm");;

/***/ }),

/***/ 6688:
/***/ ((module) => {

"use strict";
module.exports = import("remark-parse");;

/***/ }),

/***/ 2509:
/***/ ((module) => {

"use strict";
module.exports = import("remark-rehype");;

/***/ }),

/***/ 4390:
/***/ ((module) => {

"use strict";
module.exports = import("unified");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [47,97,26], () => (__webpack_exec__(7918)));
module.exports = __webpack_exports__;

})();