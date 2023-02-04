exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 152:
/***/ ((module) => {

// Exports
module.exports = {
	"siteHeader": "Header_siteHeader__h1lGw",
	"header": "Header_header__l1qoc",
	"center": "Header_center__TpUai"
};


/***/ }),

/***/ 7059:
/***/ ((module) => {

// Exports
module.exports = {
	"NavigationMenuRoot": "MenuItems_NavigationMenuRoot__yk0_t",
	"NavigationMenuList": "MenuItems_NavigationMenuList__IFDk2",
	"NavigationMenuTrigger": "MenuItems_NavigationMenuTrigger__Ptuj3",
	"NavigationMenuLink": "MenuItems_NavigationMenuLink___EoEh",
	"NavigationMenuContent": "MenuItems_NavigationMenuContent__F5CkK",
	"enterFromLeft": "MenuItems_enterFromLeft__bOVM6",
	"enterFromRight": "MenuItems_enterFromRight__ADgtg",
	"exitToLeft": "MenuItems_exitToLeft__3GN3E",
	"exitToRight": "MenuItems_exitToRight__FRYFV",
	"NavigationMenuIndicator": "MenuItems_NavigationMenuIndicator__65bft",
	"fadeIn": "MenuItems_fadeIn__bdc5q",
	"fadeOut": "MenuItems_fadeOut__enCA5",
	"NavigationMenuViewport": "MenuItems_NavigationMenuViewport__aljvu",
	"scaleIn": "MenuItems_scaleIn__JlRBy",
	"scaleOut": "MenuItems_scaleOut__xJKrE",
	"List": "MenuItems_List__JRW15",
	"one": "MenuItems_one__b3ayV",
	"two": "MenuItems_two__fILu3",
	"ListItemLink": "MenuItems_ListItemLink__47i9o",
	"ListItemHeading": "MenuItems_ListItemHeading__48xHQ",
	"ListItemText": "MenuItems_ListItemText__qlRBv",
	"Callout": "MenuItems_Callout__jZjDu",
	"CalloutHeading": "MenuItems_CalloutHeading__ScDd9",
	"CalloutText": "MenuItems_CalloutText__j_Z_d",
	"ViewportPosition": "MenuItems_ViewportPosition__1wEmi",
	"CaretDown": "MenuItems_CaretDown__dRDdv",
	"Arrow": "MenuItems_Arrow__Wbcyu"
};


/***/ }),

/***/ 5471:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "layout_container__fbLkO",
	"indexListItem": "layout_indexListItem__3G_aX",
	"indexUl": "layout_indexUl__Zp5pb"
};


/***/ }),

/***/ 1644:
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
/* harmony import */ var _MenuItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5190);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9097);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(152);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MenuItems__WEBPACK_IMPORTED_MODULE_2__]);
_MenuItems__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Header = ()=>{
    const MyLink = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ onClick , href  }, ref)=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: href,
            ref: ref,
            className: `govuk-link govuk-link--inverse govuk-link--no-underline ${(_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().header)}`,
            "data-testid": "header-link",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                    children: "HAROLD HILL"
                }),
                ": A People's History",
                ' '
            ]
        }));
    });
    MyLink.displayName = 'MyButton';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "govuk-header ",
        role: "banner",
        "data-module": "govuk-header",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "govuk-header__container govuk-width-container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "govuk-grid-row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `govuk-grid-column-two-thirds-from-desktop ${(_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().center)}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: `govuk-heading-m ${(_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().siteHeader)}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                href: "/",
                                passHref: true,
                                // @ts-ignore
                                legacyBehavior: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyLink, {})
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "govuk-grid-column-one-third-from-desktop",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            "aria-label": "Menu",
                            className: "govuk-header__navigation",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuItems__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5190:
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
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(342);
/* harmony import */ var _helpers_mappedArticlesFn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8678);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__]);
isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const getArticles = async ()=>{
    const content = await (0,isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__["default"])(`${"http://localhost:3000"}/api/allArticles`);
    const articles = await content.json();
    return (0,_helpers_mappedArticlesFn__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(articles.result);
};
const MenuItems = ()=>{
    const { 0: articles1 , 1: setArticles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getArticles().then((articles)=>{
            setArticles(articles);
        });
        return ()=>{
            setArticles(null);
        };
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: articles1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            articles: articles1
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItems);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9822);
/* harmony import */ var _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2132);
/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MenuItems_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7059);
/* harmony import */ var _MenuItems_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MenuItems_module_css__WEBPACK_IMPORTED_MODULE_5__);






const ChildList = (props)=>{
    const article = props.article;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        children: article.pages.map((page)=>{
            const href = `${page.slug}-${page.id}`;
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                title: page.title,
                href: href,
                "data-testid": "page",
                className: "govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"
            }, page.id));
        })
    }));
};
const Navigation = (props)=>{
    const articles = props.articles;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Root, {
        className: (_MenuItems_module_css__WEBPACK_IMPORTED_MODULE_5___default().NavigationMenuRoot),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.List, {
                className: `${(_MenuItems_module_css__WEBPACK_IMPORTED_MODULE_5___default().NavigationMenuList)}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Item, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Trigger, {
                                className: `${(_MenuItems_module_css__WEBPACK_IMPORTED_MODULE_5___default().NavigationMenuTrigger)} .gem-c-layout-super-navigation-header__navigation-top-toggle-button`,
                                "data-testid": "button",
                                children: [
                                    "Menu ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_4__.CaretDownIcon, {
                                        className: (_MenuItems_module_css__WEBPACK_IMPORTED_MODULE_5___default().CaretDown),
                                        "aria-hidden": true
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Content, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "govuk-list govuk-list--spaced gem-c-layout-super-navigation-header__navigation-second-items",
                                    children: articles.map((article)=>{
                                        const id = `${article.slug}-${article.title}` + Math.random().toString(36).substr(2, 9);
                                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItemNoLink, {
                                                title: article.title,
                                                childList: article
                                            })
                                        }, id));
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Indicator, {
                        className: (_MenuItems_module_css__WEBPACK_IMPORTED_MODULE_5___default().NavigationMenuIndicator),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_MenuItems_module_css__WEBPACK_IMPORTED_MODULE_5___default().Arrow)
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_MenuItems_module_css__WEBPACK_IMPORTED_MODULE_5___default().ViewportPosition),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Viewport, {
                    className: (_MenuItems_module_css__WEBPACK_IMPORTED_MODULE_5___default().NavigationMenuViewport)
                })
            })
        ]
    }));
};
const ListItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ className , children , title , ...props }, forwardedRef)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: "gem-c-layout-super-navigation-header__dropdown-list-item",
        "data-testid": "ListItem",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "govuk-link",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Link, {
                asChild: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ListItemLink', className),
                    ...props,
                    ref: forwardedRef,
                    children: title
                })
            })
        })
    })
);
ListItem.displayName = 'ListItem';
const ListItemNoLink = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ className , children , title , childList  }, forwardedRef)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        "data-testid": "article",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('gem-c-layout-super-navigation-header__dropdown-list-item', className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                ref: forwardedRef,
                className: "govuk-heading-s",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChildList, {
                article: childList
            })
        ]
    })
);
ListItemNoLink.displayName = 'ListItemNoLink';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);


/***/ }),

/***/ 8678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mappedArticlesFn = (data)=>{
    return data.items.map((article)=>{
        var ref7, ref1;
        return {
            title: (ref7 = article.fields) === null || ref7 === void 0 ? void 0 : ref7.title,
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
            }) : {}
        };
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mappedArticlesFn);


/***/ })

};
;