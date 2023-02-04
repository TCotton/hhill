"use strict";
exports.id = 796;
exports.ids = [796];
exports.modules = {

/***/ 4796:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1644);
/* harmony import */ var _components_layout_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5471);
/* harmony import */ var _components_layout_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_layout_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_mappedArticlesFn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8678);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2134);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_2__, isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Header__WEBPACK_IMPORTED_MODULE_2__, isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const fetchData = async ()=>{
    const content = await (0,isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__["default"])(`${"http://localhost:3000"}/api/allArticles`);
    return await content.json();
};
function useResults() {
    const { 0: results , 1: setResults  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let ignore = false;
        fetchData().then((articles)=>{
            if (articles.message === 'ok' && !ignore) setResults((0,_helpers_mappedArticlesFn__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(articles.result));
        });
        return ()=>{
            ignore = true;
        };
    }, []);
    return results;
}
const ListItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ className , children , title , ...props }, forwardedRef)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: `govuk-list--number ${(_components_layout_module_css__WEBPACK_IMPORTED_MODULE_6___default().indexListItem)}`,
        "data-testid": "list-item",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('', className),
            ...props,
            ref: forwardedRef,
            children: title
        })
    })
);
ListItem.displayName = 'ListItem';
const ChildList = (props)=>{
    const article = props.article;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: `govuk-list govuk-list--spaced ${(_components_layout_module_css__WEBPACK_IMPORTED_MODULE_6___default().indexUl)}`,
        children: Array.isArray(article.pages) && article.pages.map((page)=>{
            const href = `${page.slug}-${page.id}`;
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                title: page.title,
                href: href,
                className: "govuk-link"
            }, href));
        })
    }));
};
const Index = ()=>{
    const articles1 = useResults();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `govuk-width-container ${(_components_layout_module_css__WEBPACK_IMPORTED_MODULE_6___default().container)}`,
                id: "content",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                    className: "govuk-main-wrapper",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "govuk-grid-row",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "govuk-grid-column-two-thirds",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "govuk-heading-l",
                                        children: "Welcome to Harold Hill: A People's History"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "govuk-body",
                                        children: "This history project was written as the turn of the Millennium. Mostly constructed from interviews and the past editions of the Romford Recorder and Romford Times, it aims to tell a story of the Harold Hill housing estate in outer east London from the 1940s to the 1980s. This covers the period from its construction as an LCC “out-county” housing development up until the Right to Buy."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "govuk-body",
                                        children: "Many of the people interviewed for this project have now passed away, and the historical characters mentioned are now two or three generations removed from the current residents. Some are still remembered, but others are mostly forgotten."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "govuk-body",
                                        children: "The 20 years from the late 1990s onwards were not, for various reasons, a particularly good period in Harold Hill’s history. But the estate is changing. Harold Hill is now a mixed community with different languages and races. I welcome this change. The opening of Crossrail, which runs to nearby Harold Wood directly into central London, will bring further transformation."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "govuk-body",
                                        children: "Written 20 years ago, I enjoyed working on this project and I think that shows in the text. It’s a celebration of working class life and living. At 50k words, it’s a large read, so I’ve broken it down into readable chunks."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "govuk-body",
                                        children: "Andrew Walpole"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "govuk-grid-row",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "govuk-grid-column-two-thirds",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "govuk-heading-m",
                                        children: "Content"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "govuk-list govuk-list--spaced",
                                        children: Array.isArray(articles1) && // @ts-ignore
                                        articles1.map((articles)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "govuk-heading-s",
                                                        children: articles.title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChildList, {
                                                        article: articles
                                                    })
                                                ]
                                            }, articles.id + articles.title)
                                        )
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;