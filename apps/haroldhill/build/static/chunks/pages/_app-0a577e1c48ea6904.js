(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{5351:function(e,t,o){"use strict";o.d(t,{PB:function(){return d}});var a=o(2784),r=o(7729);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}var p=["keyOverride"],l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},h=function(e,t,o){void 0===t&&(t=[]);var r=void 0===o?{}:o,n=r.defaultWidth,i=r.defaultHeight;return t.reduce((function(t,o,r){return t.push(a.createElement("meta",{key:"og:"+e+":0"+r,property:"og:"+e,content:o.url})),o.alt&&t.push(a.createElement("meta",{key:"og:"+e+":alt0"+r,property:"og:"+e+":alt",content:o.alt})),o.secureUrl&&t.push(a.createElement("meta",{key:"og:"+e+":secure_url0"+r,property:"og:"+e+":secure_url",content:o.secureUrl.toString()})),o.type&&t.push(a.createElement("meta",{key:"og:"+e+":type0"+r,property:"og:"+e+":type",content:o.type.toString()})),o.width?t.push(a.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:o.width.toString()})):n&&t.push(a.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:n.toString()})),o.height?t.push(a.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:o.height.toString()})):i&&t.push(a.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:i.toString()})),t}),[])},c=function(e){var t,o,r,c=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);var s="";e.title?(s=e.title,l.templateTitle&&(s=l.templateTitle.replace(/%s/g,(function(){return s})))):e.defaultTitle&&(s=e.defaultTitle),s&&c.push(a.createElement("title",{key:"title"},s));var d,u,m=e.noindex||l.noindex||e.dangerouslySetAllPagesToNoIndex,g=e.nofollow||l.nofollow||e.dangerouslySetAllPagesToNoFollow,f="";if(e.robotsProps){var y=e.robotsProps,G=y.nosnippet,k=y.maxSnippet,v=y.maxImagePreview,b=y.maxVideoPreview,E=y.noarchive,w=y.noimageindex,O=y.notranslate,T=y.unavailableAfter;f=(G?",nosnippet":"")+(k?",max-snippet:"+k:"")+(v?",max-image-preview:"+v:"")+(E?",noarchive":"")+(T?",unavailable_after:"+T:"")+(w?",noimageindex":"")+(b?",max-video-preview:"+b:"")+(O?",notranslate":"")}(m||g?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),c.push(a.createElement("meta",{key:"robots",name:"robots",content:(m?"noindex":"index")+","+(g?"nofollow":"follow")+f}))):c.push(a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+f})),e.description&&c.push(a.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&c.push(a.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&c.push(a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){c.push(a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&c.push(a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&c.push(a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&c.push(a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&c.push(a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),null!=(t=e.openGraph)&&t.title||s)&&c.push(a.createElement("meta",{key:"og:title",property:"og:title",content:(null==(d=e.openGraph)?void 0:d.title)||s}));(null!=(o=e.openGraph)&&o.description||e.description)&&c.push(a.createElement("meta",{key:"og:description",property:"og:description",content:(null==(u=e.openGraph)?void 0:u.description)||e.description}));if(e.openGraph){if((e.openGraph.url||e.canonical)&&c.push(a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var _=e.openGraph.type.toLowerCase();c.push(a.createElement("meta",{key:"og:type",property:"og:type",content:_})),"profile"===_&&e.openGraph.profile?(e.openGraph.profile.firstName&&c.push(a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&c.push(a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&c.push(a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&c.push(a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===_&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){c.push(a.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&c.push(a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&c.push(a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){c.push(a.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===_&&e.openGraph.article?(e.openGraph.article.publishedTime&&c.push(a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&c.push(a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&c.push(a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){c.push(a.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&c.push(a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){c.push(a.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==_&&"video.episode"!==_&&"video.tv_show"!==_&&"video.other"!==_||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&c.push(a.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&c.push(a.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){c.push(a.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){c.push(a.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&c.push(a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&c.push(a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){c.push(a.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&c.push(a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&c.push.apply(c,h("image",e.openGraph.images,{defaultWidth:l.defaultOpenGraphImageWidth,defaultHeight:l.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(l.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(l.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&c.push.apply(c,h("video",e.openGraph.videos,{defaultWidth:l.defaultOpenGraphVideoWidth,defaultHeight:l.defaultOpenGraphVideoHeight})),e.openGraph.audio&&c.push.apply(c,h("audio",e.openGraph.audio)),e.openGraph.locale&&c.push(a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&c.push(a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&c.push(a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,o,r=e.keyOverride,l=i(e,p);c.push(a.createElement("meta",n({key:"meta:"+(null!=(t=null!=(o=null!=r?r:l.name)?o:l.property)?t:l.httpEquiv)},l)))})),null!=(r=e.additionalLinkTags)&&r.length&&e.additionalLinkTags.forEach((function(e){var t;c.push(a.createElement("link",n({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),c},s=function(e){return a.createElement(r.default,null,c(e))},d=function(e){var t=e.title,o=e.themeColor,r=e.noindex,n=void 0!==r&&r,i=e.nofollow,p=e.robotsProps,l=e.description,h=e.canonical,d=e.openGraph,u=e.facebook,m=e.twitter,g=e.additionalMetaTags,f=e.titleTemplate,y=e.defaultTitle,G=e.mobileAlternate,k=e.languageAlternates,v=e.additionalLinkTags,b=e.useAppDir,E=void 0!==b&&b;return a.createElement(a.Fragment,null,E?c({title:t,themeColor:o,noindex:n,nofollow:i,robotsProps:p,description:l,canonical:h,facebook:u,openGraph:d,additionalMetaTags:g,twitter:m,titleTemplate:f,defaultTitle:y,mobileAlternate:G,languageAlternates:k,additionalLinkTags:v}):a.createElement(s,{title:t,themeColor:o,noindex:n,nofollow:i,robotsProps:p,description:l,canonical:h,facebook:u,openGraph:d,additionalMetaTags:g,twitter:m,titleTemplate:f,defaultTitle:y,mobileAlternate:G,languageAlternates:k,additionalLinkTags:v}))},u=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"});new RegExp("["+Object.keys(u).join("")+"]","g")},3394:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o(5118)}])},5118:function(e,t,o){"use strict";o.r(t);var a=o(2322),r=(o(2784),o(5351));o(1155),o(8113),o(4702),o(8485);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},a=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),a.forEach((function(t){n(e,t,o[t])}))}return e}t.default=function(e){var t=e.Component,o=e.pageProps;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.PB,{title:"Harold Hill: A People's History",description:"A social history of the Harold Hill estate in east London",openGraph:{title:"Harold Hill: A People's History",type:"website",locale:"en_GB",url:"http://localhost:3000",images:[{url:"".concat("http://localhost:3000","/haroldhill.png"),width:600,height:600,alt:"Harold Hill: A People's History"}]},noindex:!0}),(0,a.jsx)(t,i({},o))]})}},8113:function(){},8485:function(){},4702:function(){},1155:function(){},7729:function(e,t,o){e.exports=o(5913)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(3394),t(3642)}));var o=e.O();_N_E=o}]);