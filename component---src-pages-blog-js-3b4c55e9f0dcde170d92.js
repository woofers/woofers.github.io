(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1083:function(t,n){},1096:function(t,n){},1098:function(t,n){},241:function(t,n,e){"use strict";e.r(n),e.d(n,"pageQuery",function(){return j});e(118),e(170),e(119),e(116);var r=e(1),i=e(0),o=e.n(i),s=e(35),a=e(1061),u=e.n(a),c=e(255),l=e(261);var d=function(t){return Object(r.css)("div{margin-bottom:",t.margins.small,";}")},f=function(t){var n,e;function i(){return t.apply(this,arguments)||this}e=t,(n=i).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e;var o=i.prototype;return o.sortedPosts=function(){var t=this.props.data.allOrgContent.edges,n=function(t){return t.meta?t.meta.date:""};return t.sort(function(t,e){return function(t,n,e){return t||n?t?n&&e(t,n)?1:-1:1:0}(n(t.node),n(e.node),function(t,n){return new Date(t)<new Date(n)})}),t},o.render=function(){var t=this.props.data.site.siteMetadata,n=t.title,e=t.nav,i=this.sortedPosts().map(function(t){var n=t.node,i=n.fields.path,o=n.meta,a=o.title||i,c=e.blog,d=o.date;if(!i||!i.startsWith(c))return null;var f=u.a.load(n.html)("p","body");return f.find("h1").remove(),Object(r.jsx)("div",{css:function(t){return{marginBottom:t.margins.medium}},key:i},Object(r.jsx)("h1",{css:function(t){return{marginBottom:t.margins.superSmall}}},Object(r.jsx)(s.Link,{css:function(t){return{lineHeight:t.fonts.large}},to:n.fields.path},a)),d?Object(r.jsx)("span",{style:{fontWeight:"bold"}},d):null,f.length?Object(r.jsx)("div",null,Object(r.jsx)(l.a,{html:f.html()}),Object(r.jsx)(s.Link,{css:function(t){return{color:t.colors.text+" !important"}},to:n.fields.path,"aria-label":"Continue reading "+a},"Continue reading"," . . .")):null)});return Object(r.jsx)(c.a,{title:"Posts",site:n},Object(r.jsx)("div",{css:d},i))},i}(o.a.Component);n.default=f;var j="309459475"},255:function(t,n,e){"use strict";var r=e(1),i=(e(0),e(88)),o=e.n(i),s=function(t){return Object(r.jsx)("div",null,Object(r.jsx)(o.a,null,Object(r.jsx)("meta",{property:"og:title",content:t.title}),Object(r.jsx)("title",null,(n=t.title,e=t.site,n?n+" - "+e:e))),t.children);var n,e};e.d(n,"a",function(){return a});var a=function(t){return Object(r.jsx)(s,{title:t.title,site:t.site},Object(r.jsx)("article",null,t.children))}},261:function(t,n,e){"use strict";e.d(n,"a",function(){return o});e(116);var r=e(1),i=(e(0),{name:"6d63t",styles:"div:first-of-type h1{display:none;}"}),o=function(t){var n=i;return Object(r.jsx)("div",{css:function(e){return Object(r.css)(t.hideTitle?n:""," div{margin-bottom:",e.margins.small,";text-align:'left';}")},dangerouslySetInnerHTML:{__html:t.html}})}}}]);
//# sourceMappingURL=component---src-pages-blog-js-3b4c55e9f0dcde170d92.js.map