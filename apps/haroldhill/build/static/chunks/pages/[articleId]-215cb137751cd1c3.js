(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[714],{2015:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[articleId]",function(){return n(450)}])},6527:function(e,t,n){"use strict";n.d(t,{Z:function(){return H}});var r=n(2322),i=n(2784),a=n(4776),o=n.n(a),s=n(6528),c=n.n(s),l=n(9364),u=n(2779),d=n.n(u),v=n(7298),f=n(6876),h=n.n(f);function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){_(e,t,n[t])}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var g=function(e){var t=e.article;return(0,r.jsx)("ul",{children:t.pages.map((function(e){var t="".concat(e.slug,"-").concat(e.id);return(0,r.jsx)(x,{title:e.title,href:t,"data-testid":"page",className:"govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"},e.id)}))})},x=i.forwardRef((function(e,t){var n=e.className,i=(e.children,e.title),a=p(e,["className","children","title"]);return(0,r.jsx)("li",{className:"gem-c-layout-super-navigation-header__dropdown-list-item","data-testid":"ListItem",children:(0,r.jsx)("p",{className:"govuk-link",children:(0,r.jsx)(l.rU,{asChild:!0,children:(0,r.jsx)("a",m({className:d()("ListItemLink",n)},a,{ref:t,children:i}))})})})}));x.displayName="ListItem";var j=i.forwardRef((function(e,t){var n=e.className,i=(e.children,e.title),a=e.childList;return(0,r.jsxs)("li",{"data-testid":"article",className:d()("gem-c-layout-super-navigation-header__dropdown-list-item",n),children:[(0,r.jsx)("p",{ref:t,className:"govuk-heading-s",children:i}),(0,r.jsx)(g,{article:a})]})}));j.displayName="ListItemNoLink";var k=function(e){var t=e.articles;return(0,r.jsxs)(l.fC,{className:h().NavigationMenuRoot,children:[(0,r.jsxs)(l.aV,{className:"".concat(h().NavigationMenuList),children:[(0,r.jsxs)(l.ck,{children:[(0,r.jsxs)(l.xz,{className:"".concat(h().NavigationMenuTrigger," .gem-c-layout-super-navigation-header__navigation-top-toggle-button"),"data-testid":"button",children:["Menu ",(0,r.jsx)(v.VAA,{className:h().CaretDown,"aria-hidden":!0})]}),(0,r.jsx)(l.VY,{children:(0,r.jsx)("ul",{className:"govuk-list govuk-list--spaced gem-c-layout-super-navigation-header__navigation-second-items",children:t.map((function(e){var t="".concat(e.slug,"-").concat(e.title)+Math.random().toString(36).substr(2,9);return(0,r.jsx)("span",{children:(0,r.jsx)(j,{title:e.title,childList:e})},t)}))})})]}),(0,r.jsx)(l.z$,{className:h().NavigationMenuIndicator,children:(0,r.jsx)("div",{className:h().Arrow})})]}),(0,r.jsx)("div",{className:h().ViewportPosition,children:(0,r.jsx)(l.l_,{className:h().NavigationMenuViewport})})]})},N=n(8678);function w(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,i)}var y=function(){var e,t=(e=o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c()("".concat("http://localhost:3000","/api/allArticles"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",(0,N.Z)(n.result));case 7:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){w(a,r,i,o,s,"next",e)}function s(e){w(a,r,i,o,s,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}(),I=function(){var e=(0,i.useState)(null),t=e[0],n=e[1];return(0,i.useEffect)((function(){return y().then((function(e){n(e)})),function(){n(null)}}),[]),(0,r.jsx)(r.Fragment,{children:t&&(0,r.jsx)(k,{articles:t})})},M=n(9097),b=n(1385),L=n.n(b),H=function(){var e=i.forwardRef((function(e,t){e.onClick;var n=e.href;return(0,r.jsxs)("a",{href:n,ref:t,className:"govuk-link govuk-link--inverse govuk-link--no-underline ".concat(L().header),"data-testid":"header-link",children:[(0,r.jsx)("em",{children:"HAROLD HILL"}),": A People's History"," "]})}));return e.displayName="MyButton",(0,r.jsx)("header",{className:"govuk-header ",role:"banner","data-module":"govuk-header",children:(0,r.jsx)("div",{className:"govuk-header__container govuk-width-container",children:(0,r.jsxs)("div",{className:"govuk-grid-row",children:[(0,r.jsx)("div",{className:"govuk-grid-column-two-thirds-from-desktop ".concat(L().center),children:(0,r.jsx)("p",{className:"govuk-heading-m ".concat(L().siteHeader),children:(0,r.jsx)(M.default,{href:"/",passHref:!0,legacyBehavior:!0,children:(0,r.jsx)(e,{})})})}),(0,r.jsx)("div",{className:"govuk-grid-column-one-third-from-desktop",children:(0,r.jsx)("nav",{"aria-label":"Menu",className:"govuk-header__navigation",children:(0,r.jsx)(I,{})})})]})})})}},8678:function(e,t){"use strict";t.Z=function(e){return e.items.map((function(e){var t,n;return{title:null===(t=e.fields)||void 0===t?void 0:t.title,slug:null===(n=e.fields)||void 0===n?void 0:n.slug,pages:Array.isArray(e.fields.pages)?e.fields.pages.map((function(e){var t,n,r,i,a,o;return{title:null===(t=e.fields)||void 0===t?void 0:t.title,contentRichText:null===(n=e.fields)||void 0===n?void 0:n.contentRichText,slug:null===(r=e.fields)||void 0===r?void 0:r.slug,fullSlug:"".concat(null===(i=e.fields)||void 0===i?void 0:i.slug,"-").concat(null===(a=e.sys)||void 0===a?void 0:a.id),id:null===(o=e.sys)||void 0===o?void 0:o.id}})):{}}}))}},450:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return T},default:function(){return P}});var r=n(2322),i=n(2784),a=n(6874),o=n.n(a),s=n(5351);function c(e){var t=e.children,n=e.title;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.PB,{title:"".concat(n," - ").concat("Harold Hill: A People's History"),openGraph:{title:"Harold Hill: A People's History",siteName:"Harold Hill: A People's History",type:"website",locale:"en_GB",url:"http://localhost:3000",images:[{url:"".concat("http://localhost:3000","/haroldhill.png"),width:600,height:600,alt:"Harold Hill: A People's History"}]},noindex:!0}),(0,r.jsx)("div",{className:"govuk-width-container ".concat(o().container),id:"content",children:t})]})}var l=n(6527),u=n(256),d=n.n(u),v=n(4776),f=n.n(v),h=n(9097),_=n(6528),m=n.n(_);function p(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,i)}var g=function(){var e,t=(e=f().mark((function e(t){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("".concat("http://localhost:3000","/api/navigationArticles?articleId=")+t+"&direction=previous");case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){p(a,r,i,o,s,"next",e)}function s(e){p(a,r,i,o,s,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}();var x=function(e){var t=function(e){var t=(0,i.useState)(null),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=!1;return g(e).then((function(e){var n;"ok"!==e.message||t||r(null===e||void 0===e||null===(n=e.result)||void 0===n?void 0:n.fullSlug)})),function(){t=!0}}),[e]),n}(e.articleId),n=i.forwardRef((function(e,t){e.onClick;var n=e.href;return(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:n,ref:t,className:"govuk-back-link",children:"Previous"})})}));return n.displayName="PreviousLink",(0,r.jsx)(r.Fragment,{children:t&&(0,r.jsx)(h.default,{href:t,passHref:!0,legacyBehavior:!0,children:(0,r.jsx)(n,{})})})},j=i.memo(x);function k(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,i)}var N=function(){var e,t=(e=f().mark((function e(t){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("".concat("http://localhost:3000","/api/navigationArticles?articleId=")+t+"&direction=next");case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){k(a,r,i,o,s,"next",e)}function s(e){k(a,r,i,o,s,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}();var w=function(e){var t=function(e){var t=(0,i.useState)(null),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=!1;return N(e).then((function(e){var n;"ok"!==e.message||t||r(null===e||void 0===e||null===(n=e.result)||void 0===n?void 0:n.fullSlug)})),function(){t=!0}}),[e]),n}(e.articleId),n=i.forwardRef((function(e,t){e.onClick;var n=e.href;return(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:n,ref:t,className:"govuk-forward-link",children:"Next"})})}));return n.displayName="NextLink",(0,r.jsx)(r.Fragment,{children:t&&(0,r.jsx)(h.default,{href:t,passHref:!0,legacyBehavior:!0,children:(0,r.jsx)(n,{})})})},y=i.memo(w),I=function(e,t){var n,r;return(null===t||void 0===t||null===(n=t.result)||void 0===n?void 0:n.mappedArticles).forEach((function(t){t.pages.forEach((function(n){n.id===e.toString().split("-").pop()&&(r=t.title)}))})),r};function M(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,i)}var b=function(){var e,t=(e=f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("".concat("http://localhost:3000","/api/allArticlesFiltered"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){M(a,r,i,o,s,"next",e)}function s(e){M(a,r,i,o,s,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();var L=function(e){var t=function(e){var t=(0,i.useState)(null),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=!1;return b().then((function(n){if(!t){var i=I(e,n);r(i)}})),function(){t=!0}}),[e]),n}(e.id);return t?(0,r.jsx)("span",{className:"govuk-caption-xl",children:t}):null},H=function(){return(0,r.jsx)("div",{className:"app-back-to-top back-to-top","data-module":"app-back-to-top",children:(0,r.jsxs)("a",{className:"govuk-link govuk-link--no-visited-state app-back-to-top__link ".concat(d().backToTop),href:"#top",children:[(0,r.jsx)("svg",{role:"presentation",focusable:"false",className:"app-back-to-top__icon ".concat(d().backToTop__icon),xmlns:"http://www.w3.org/2000/svg",width:"13",height:"17",viewBox:"0 0 13 17",children:(0,r.jsx)("path",{fill:"currentColor",d:"M6.5 0L0 6.5 1.4 8l4-4v12.7h2V4l4.3 4L13 6.4z"})}),"Back to top"]})})};var T=!0,P=function(e){var t=e.title,n=e.contentRichText,i=e.id;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)(c,{title:t,children:(0,r.jsx)("main",{className:"govuk-main-wrapper",children:(0,r.jsxs)("div",{className:"govuk-grid-row",children:[(0,r.jsxs)("div",{className:"govuk-grid-column-two-thirds",children:[(0,r.jsx)(j,{articleId:i}),(0,r.jsx)(L,{id:i}),(0,r.jsx)("h1",{className:"govuk-heading-l",children:t}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:n}}),(0,r.jsx)(y,{articleId:i})]}),(0,r.jsx)("div",{className:"govuk-grid-column-one-third",children:(0,r.jsx)(H,{})})]})})})]})}},1385:function(e){e.exports={siteHeader:"Header_siteHeader__h1lGw",header:"Header_header__l1qoc",center:"Header_center__TpUai"}},6876:function(e){e.exports={NavigationMenuRoot:"MenuItems_NavigationMenuRoot__yk0_t",NavigationMenuList:"MenuItems_NavigationMenuList__IFDk2",NavigationMenuTrigger:"MenuItems_NavigationMenuTrigger__Ptuj3",NavigationMenuLink:"MenuItems_NavigationMenuLink___EoEh",NavigationMenuContent:"MenuItems_NavigationMenuContent__F5CkK",enterFromLeft:"MenuItems_enterFromLeft__bOVM6",enterFromRight:"MenuItems_enterFromRight__ADgtg",exitToLeft:"MenuItems_exitToLeft__3GN3E",exitToRight:"MenuItems_exitToRight__FRYFV",NavigationMenuIndicator:"MenuItems_NavigationMenuIndicator__65bft",fadeIn:"MenuItems_fadeIn__bdc5q",fadeOut:"MenuItems_fadeOut__enCA5",NavigationMenuViewport:"MenuItems_NavigationMenuViewport__aljvu",scaleIn:"MenuItems_scaleIn__JlRBy",scaleOut:"MenuItems_scaleOut__xJKrE",List:"MenuItems_List__JRW15",one:"MenuItems_one__b3ayV",two:"MenuItems_two__fILu3",ListItemLink:"MenuItems_ListItemLink__47i9o",ListItemHeading:"MenuItems_ListItemHeading__48xHQ",ListItemText:"MenuItems_ListItemText__qlRBv",Callout:"MenuItems_Callout__jZjDu",CalloutHeading:"MenuItems_CalloutHeading__ScDd9",CalloutText:"MenuItems_CalloutText__j_Z_d",ViewportPosition:"MenuItems_ViewportPosition__1wEmi",CaretDown:"MenuItems_CaretDown__dRDdv",Arrow:"MenuItems_Arrow__Wbcyu"}},6874:function(e){e.exports={container:"layout_container__fbLkO",indexListItem:"layout_indexListItem__3G_aX",indexUl:"layout_indexUl__Zp5pb"}},256:function(e){e.exports={backToTop:"article_backToTop__www8g",backToTop__icon:"article_backToTop__icon__YKSHO"}}},function(e){e.O(0,[647,154,774,888,179],(function(){return t=2015,e(e.s=t);var t}));var t=e.O();_N_E=t}]);