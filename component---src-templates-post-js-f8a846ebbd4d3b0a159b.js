(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{192:function(t,e,n){"use strict";n.r(e);var r=n(9),i=n.n(r),s=n(1),c=n(0),o=n(246),a=n(245),u=n(200),l=n(198),p=n(360),f=n.n(p),j=n(247),d=n(28),h=Object(s.css)(".utterances{max-width:none !important;",j.a,";}");n.d(e,"pageQuery",function(){return O});var b,m=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t=this.props.data.orgContent,e=t.meta,n=e.title,r=e.date,i=[{name:"Blog",link:"/blog/"},{name:""+n}];return Object(s.jsx)(l.a,{title:t.meta.title,site:this.props.data.site.siteMetadata.title},Object(s.jsx)(o.a,{links:i}),Object(s.jsx)(a.a,{title:n,date:r}),Object(s.jsx)(u.a,{html:t.html}))},e}(c.Component),O=(e.default=(b=m,Object(d.b)(function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t=this.props.theme,e=function(t,e){return f()(t,"woofers/woofers.github.io",e||"github-light","og:title")}(b,t.comments);return Object(s.jsx)("div",{css:h},Object(s.jsx)(e,this.props))},e}(c.Component))),"3430262699")},198:function(t,e,n){"use strict";var r=n(1),i=(n(0),n(48)),s=n.n(i),c=function(t){return Object(r.jsx)("div",null,Object(r.jsx)(s.a,null,Object(r.jsx)("meta",{property:"og:title",content:t.title}),Object(r.jsx)("title",null,(e=t.title,n=t.site,e?e+" - "+n:n))),t.children);var e,n};n.d(e,"a",function(){return o});var o=function(t){return Object(r.jsx)(c,{title:t.title,site:t.site},Object(r.jsx)("article",null,t.children))}},200:function(t,e,n){"use strict";n.d(e,"a",function(){return s});n(47);var r=n(1),i=(n(0),{name:"6d63t",styles:"div:first-of-type h1{display:none;}"}),s=function(t){var e=i;return Object(r.jsx)("div",{css:function(n){return Object(r.css)(t.hideTitle?e:""," div{margin-bottom:",n.margins.small,";text-align:'left';}")},dangerouslySetInnerHTML:{__html:t.html}})}},245:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(1),i=(n(0),{name:"5qf4e7",styles:"border-radius:0 !important;margin"}),s=function(t){var e=i;return Object(r.jsx)("div",{style:{textAlign:"right"}},t.title?Object(r.jsx)("div",null,Object(r.jsx)("h1",{css:function(e){return Object(r.css)("display:",t.icon?"inline":"block",";margin:",e.margins.extraSmall," 0;")}},t.title),t.icon?Object(r.jsx)("img",{css:function(n){return Object(r.css)("normal"===t.icon.type?e:""," margin-left:10px;image-rendering:",t.icon.mode,";")},width:"55px",height:"55px",src:t.icon.image,"aria-hidden":"true",alt:""}):null):null,t.date?Object(r.jsx)("p",null,t.date):null)}},246:function(t,e,n){"use strict";n.d(e,"a",function(){return f});n(27),n(36);var r=n(1),i=(n(0),n(14)),s=n(72),c=n(8),o={name:"in3yi3",styles:"font-weight:bold;"},a=function(t){return Object(r.css)("color:",t.colors.text,";")},u={name:"1mp6ni1",styles:"margin:0 7px;"},l=function(t){return u},p=function(t){return Object(r.jsx)(s.a,{css:l,icon:t.icon?t.icon:c.f})},f=function(t){var e=t.links.length;return Object(r.jsx)("nav",{"aria-label":"breadcrumbs",css:a},t.links?t.links.map(function(n,s){var c=n.name,a=n.link;return e<=s+1?Object(r.jsx)("span",{css:o,key:s,"aria-current":"page"},c):Object(r.jsx)("span",{key:s},Object(r.jsx)(i.Link,{to:a},c),Object(r.jsx)(p,{icon:t.separator}))}):null)}},247:function(t,e,n){"use strict";n(1);e.a={name:"264w4v",styles:"-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;"}},360:function(t,e,n){t.exports=n(361).default},361:function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t};Object.defineProperty(e,"__esModule",{value:!0});var c=n(0);e.default=function(t,e,n,r){return void 0===n&&(n="github-light"),void 0===r&&(r="pathname"),function(o){function a(){var t=null!==o&&o.apply(this,arguments)||this;return t.withUtterancesContainer=c.createRef(),t.injectScript=function(){var i=document.createElement("script");i.src="https://utteranc.es/client.js",i.async=!0,i.setAttribute("repo",e),i.setAttribute("theme",n),i.setAttribute("issue-term",r),t.withUtterancesContainer.current.appendChild(i)},t.injectPrefetch=function(){document.head.insertAdjacentHTML("beforeend",'<link rel="prefetch" href="https://utteranc.es/client.js" />')},t.injectPreload=function(){document.head.insertAdjacentHTML("beforeend",'<link rel="preload" href="https://utteranc.es/client.js" as="script" />')},t.initUtterances=function(){t.injectPrefetch(),t.injectPreload(),t.injectScript()},t}return i(a,o),a.prototype.componentDidMount=function(){this.initUtterances()},a.prototype.render=function(){return c.createElement("div",{ref:this.withUtterancesContainer},c.createElement(t,s({},this.props)))},a}(c.Component)}}}]);
//# sourceMappingURL=component---src-templates-post-js-f8a846ebbd4d3b0a159b.js.map