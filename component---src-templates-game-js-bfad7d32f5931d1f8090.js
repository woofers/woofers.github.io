(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{242:function(t,e,n){"use strict";n.r(e);var r=n(1),i=n(0),s=n(277),c=n(278),a=n(261),o=(n(116),n(325)),l={name:"122y91a",styles:"position:absolute;top:0;left:0;width:100%;height:100%;"},u=function(t){return Object(r.jsx)("div",{css:function(e){return Object(r.css)(o.a,";text-align:center;margin:",e.margins.small," 0;position:relative;padding-bottom:",100/t.aspectRatio,"%;")}},Object(r.jsx)("iframe",{title:t.title,src:t.src,css:l,frameBorder:"0",allowFullScreen:!0}))};u.defaultProps={aspectRatio:16/9};var p=n(498),d=n.n(p),j=n(54),m=function(t){return Object(r.css)("margin:",t.margins.small," 0;.p8_menu_button{button{background:",t.colors.pico,";}&:hover{button{background:",t.colors.text,";}}}.p8_menu_button img{border-radius:0;max-width:none;}#p8_start_button{border-radius:",t.margins.image,";img{margin-bottom:auto;}}")},b=Object(j.b)(function(t){return Object(r.jsx)(d.a,{src:t.src,autoPlay:!0,legacyButtons:!1,hideCursor:!1,blockKeys:!1,center:!0,placeholder:t.placeholder,css:m})}),g={name:"1mpur7a",styles:"display:grid;grid-template-columns:repeat(auto-fill,minmax(0px,463px));grid-column-gap:50px;grid-row-gap:6px;justify-content:center;"},x=function(t){return Object(r.jsx)("div",{css:t.portrait&&"pico"!==t.lang?g:""},"pico"===t.lang?Object(r.jsx)(b,{src:t.src,placeholder:t.placeholder}):Object(r.jsx)(u,{aspectRatio:t.portrait&&"pico"!==t.lang?9/16:16/9,title:t.title,src:t.src}),Object(r.jsx)(a.a,{html:t.instruction}))},f=n(255);n.d(e,"pageQuery",function(){return O});var h=function(t){var e,n;function i(){return t.apply(this,arguments)||this}return n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.prototype.render=function(){var t=this.props.data.orgContent,e=t.fields.path,n=t.meta,i=n.title,a=n.date,o=n.icon,l=n.landscape,u=n.lang,p=n.game,d=n.placeholder,j=this.props.data.site.siteMetadata.nav.projects,m=t.meta.icon_mode,b=t.meta.icon_type,g=[{name:"Projects",link:j},{name:i,link:e},{name:"Play"}];return Object(r.jsx)(f.a,{title:i,site:this.props.data.site.siteMetadata.title},Object(r.jsx)(c.a,{links:g}),Object(r.jsx)(s.a,{title:i,date:a,icon:{image:o,mode:m,type:b}}),Object(r.jsx)(x,{title:i,src:p,portrait:"nil"===l,instruction:t.html,lang:u,placeholder:d}))},i}(i.Component),O=(e.default=h,"749673028")},255:function(t,e,n){"use strict";var r=n(1),i=(n(0),n(88)),s=n.n(i),c=function(t){return Object(r.jsx)("div",null,Object(r.jsx)(s.a,null,Object(r.jsx)("meta",{property:"og:title",content:t.title}),Object(r.jsx)("title",null,(e=t.title,n=t.site,e?e+" - "+n:n))),t.children);var e,n};n.d(e,"a",function(){return a});var a=function(t){return Object(r.jsx)(c,{title:t.title,site:t.site},Object(r.jsx)("article",null,t.children))}},261:function(t,e,n){"use strict";n.d(e,"a",function(){return s});n(116);var r=n(1),i=(n(0),{name:"6d63t",styles:"div:first-of-type h1{display:none;}"}),s=function(t){var e=i;return Object(r.jsx)("div",{css:function(n){return Object(r.css)(t.hideTitle?e:""," div{margin-bottom:",n.margins.small,";text-align:'left';}")},dangerouslySetInnerHTML:{__html:t.html}})}},277:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(1),i=(n(0),{name:"1q7j8z9",styles:"border-radius:0 !important;"}),s=function(t){var e=i;return Object(r.jsx)("div",{style:{textAlign:"right"}},t.title?Object(r.jsx)("div",null,Object(r.jsx)("h1",{css:function(e){return Object(r.css)("display:",t.icon?"inline":"block",";margin:",e.margins.extraSmall," 0;")}},t.title),t.icon?Object(r.jsx)("img",{css:function(n){return Object(r.css)("normal"===t.icon.type?e:""," margin-left:10px;image-rendering:",t.icon.mode,";")},width:"55px",height:"55px",src:t.icon.image,"aria-hidden":"true",alt:""}):null):null,t.date?Object(r.jsx)("p",null,t.date):null)}},278:function(t,e,n){"use strict";n.d(e,"a",function(){return d});n(66),n(6);var r=n(1),i=(n(0),n(35)),s=n(117),c=n(15),a={name:"in3yi3",styles:"font-weight:bold;"},o=function(t){return Object(r.css)("color:",t.colors.text,";")},l={name:"1mp6ni1",styles:"margin:0 7px;"},u=function(t){return l},p=function(t){return Object(r.jsx)(s.a,{css:u,icon:t.icon?t.icon:c.g})},d=function(t){var e=t.links.length;return Object(r.jsx)("nav",{"aria-label":"breadcrumbs",css:o},t.links?t.links.map(function(n,s){var c=n.name,o=n.link;return e<=s+1?Object(r.jsx)("span",{css:a,key:s,"aria-current":"page"},c):Object(r.jsx)("span",{key:s},Object(r.jsx)(i.Link,{to:o},c),Object(r.jsx)(p,{icon:t.separator}))}):null)}},325:function(t,e,n){"use strict";n(1);e.a={name:"264w4v",styles:"-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;"}}}]);
//# sourceMappingURL=component---src-templates-game-js-bfad7d32f5931d1f8090.js.map