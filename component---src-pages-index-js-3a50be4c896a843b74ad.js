(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{IoOX:function(D,u,e){D.exports=e("OEht")},M7K5:function(D,u,e){"use strict";var t=e("wx14"),n=e("zLVn"),F=(e("q1tI"),e("AeFk")),r=e("ypIu"),C=e.n(r),i=function(D){var u=D.size,e=D.fallback,r=Object(n.a)(D,["size","fallback"]);return Object(F.c)("div",Object(t.a)({css:function(D){return Object(F.b)("background:",e,";background-image:url(",C.a,");background-position:100% 50%;transition:background-image 0.25s ease-in-out;width:",u,";height:",u,";background-size:100%;border-radius:35%;box-shadow:0.3px -0.4px 0px 2px ",D.colors.text.light,";min-width:",u,";min-height:",u,";","")},role:"img"},r,{"aria-label":"Jaxson Van Doorn"}))};i.defaultProps={size:"90px",fallback:"#f58b71"},u.a=i},OEht:function(D,u,e){var t;e("E9XD"),D.exports=(t=e("q1tI"),function(D){var u={};function e(t){if(u[t])return u[t].exports;var n=u[t]={i:t,l:!1,exports:{}};return D[t].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=D,e.c=u,e.d=function(D,u,t){e.o(D,u)||Object.defineProperty(D,u,{enumerable:!0,get:t})},e.r=function(D){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(D,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(D,"__esModule",{value:!0})},e.t=function(D,u){if(1&u&&(D=e(D)),8&u)return D;if(4&u&&"object"==typeof D&&D&&D.__esModule)return D;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:D}),2&u&&"string"!=typeof D)for(var n in D)e.d(t,n,function(u){return D[u]}.bind(null,n));return t},e.n=function(D){var u=D&&D.__esModule?function(){return D.default}:function(){return D};return e.d(u,"a",u),u},e.o=function(D,u){return Object.prototype.hasOwnProperty.call(D,u)},e.p="",e(e.s=6)}([function(D,u){D.exports=t},function(D,u){D.exports=e("17x9")},function(D,u,e){var t=e(3),n=e(4);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[D.i,n,""]]);var F,r=0,C={injectType:"lazyStyleTag",insert:"head",singleton:!1},i={};n.locals&&(i.locals=n.locals),i.use=function(){return r++||(F=t(n,C)),i},i.unuse=function(){r>0&&!--r&&(F(),F=null)},D.exports=i},function(D,u,e){"use strict";var t,n=function(){var D={};return function(u){if(void 0===D[u]){var e=document.querySelector(u);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(D){e=null}D[u]=e}return D[u]}}(),F=[];function r(D){for(var u=-1,e=0;e<F.length;e++)if(F[e].identifier===D){u=e;break}return u}function C(D,u){for(var e={},t=[],n=0;n<D.length;n++){var C=D[n],i=u.base?C[0]+u.base:C[0],o=e[i]||0,a="".concat(i," ").concat(o);e[i]=o+1;var c=r(a),E={css:C[1],media:C[2],sourceMap:C[3]};-1!==c?(F[c].references++,F[c].updater(E)):F.push({identifier:a,updater:p(E,u),references:1}),t.push(a)}return t}function i(D){var u=document.createElement("style"),t=D.attributes||{};if(void 0===t.nonce){var F=e.nc;F&&(t.nonce=F)}if(Object.keys(t).forEach((function(D){u.setAttribute(D,t[D])})),"function"==typeof D.insert)D.insert(u);else{var r=n(D.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(u)}return u}var o,a=(o=[],function(D,u){return o[D]=u,o.filter(Boolean).join("\n")});function c(D,u,e,t){var n=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(D.styleSheet)D.styleSheet.cssText=a(u,n);else{var F=document.createTextNode(n),r=D.childNodes;r[u]&&D.removeChild(r[u]),r.length?D.insertBefore(F,r[u]):D.appendChild(F)}}function E(D,u,e){var t=e.css,n=e.media,F=e.sourceMap;if(n?D.setAttribute("media",n):D.removeAttribute("media"),F&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(F))))," */")),D.styleSheet)D.styleSheet.cssText=t;else{for(;D.firstChild;)D.removeChild(D.firstChild);D.appendChild(document.createTextNode(t))}}var s=null,l=0;function p(D,u){var e,t,n;if(u.singleton){var F=l++;e=s||(s=i(u)),t=c.bind(null,e,F,!1),n=c.bind(null,e,F,!0)}else e=i(u),t=E.bind(null,e,u),n=function(){!function(D){if(null===D.parentNode)return!1;D.parentNode.removeChild(D)}(e)};return t(D),function(u){if(u){if(u.css===D.css&&u.media===D.media&&u.sourceMap===D.sourceMap)return;t(D=u)}else n()}}D.exports=function(D,u){(u=u||{}).singleton||"boolean"==typeof u.singleton||(u.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=C(D=D||[],u);return function(D){if(D=D||[],"[object Array]"===Object.prototype.toString.call(D)){for(var t=0;t<e.length;t++){var n=r(e[t]);F[n].references--}for(var i=C(D,u),o=0;o<e.length;o++){var a=r(e[o]);0===F[a].references&&(F[a].updater(),F.splice(a,1))}e=i}}}},function(D,u,e){(u=e(5)(!1)).push([D.i,"\n@keyframes typer__animation___hxDXL {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n",""]),u.locals={animation:"typer__animation___hxDXL"},D.exports=u},function(D,u,e){"use strict";D.exports=function(D){var u=[];return u.toString=function(){return this.map((function(u){var e=function(D,u){var e,t,n,F=D[1]||"",r=D[3];if(!r)return F;if(u&&"function"==typeof btoa){var C=(e=r,t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),"/*# ".concat(n," */")),i=r.sources.map((function(D){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(D," */")}));return[F].concat(i).concat([C]).join("\n")}return[F].join("\n")}(u,D);return u[2]?"@media ".concat(u[2]," {").concat(e,"}"):e})).join("")},u.i=function(D,e,t){"string"==typeof D&&(D=[[null,D,""]]);var n={};if(t)for(var F=0;F<this.length;F++){var r=this[F][0];null!=r&&(n[r]=!0)}for(var C=0;C<D.length;C++){var i=[].concat(D[C]);t&&n[i[0]]||(e&&(i[2]?i[2]="".concat(e," and ").concat(i[2]):i[2]=e),u.push(i))}},u}},function(D,u,e){"use strict";e.r(u),e.d(u,"Typer",(function(){return f})),e.d(u,"TyperElement",(function(){return B}));var t=e(0),n=e.n(t),F=e(1),r=e.n(F),C=e(2),i=e.n(C);function o(){return(o=Object.assign||function(D){for(var u=1;u<arguments.length;u++){var e=arguments[u];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(D[t]=e[t])}return D}).apply(this,arguments)}function a(D,u){return function(D){if(Array.isArray(D))return D}(D)||function(D,u){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(D)){var e=[],t=!0,n=!1,F=void 0;try{for(var r,C=D[Symbol.iterator]();!(t=(r=C.next()).done)&&(e.push(r.value),!u||e.length!==u);t=!0);}catch(D){n=!0,F=D}finally{try{t||null==C.return||C.return()}finally{if(n)throw F}}return e}}(D,u)||function(D,u){if(D){if("string"==typeof D)return c(D,u);var e=Object.prototype.toString.call(D).slice(8,-1);return"Object"===e&&D.constructor&&(e=D.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(D,u):void 0}}(D,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(D,u){(null==u||u>D.length)&&(u=D.length);for(var e=0,t=new Array(u);e<u;e++)t[e]=D[e];return t}function E(D,u){var e=Object.keys(D);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(D);u&&(t=t.filter((function(u){return Object.getOwnPropertyDescriptor(D,u).enumerable}))),e.push.apply(e,t)}return e}function s(D,u,e){return u in D?Object.defineProperty(D,u,{value:e,enumerable:!0,configurable:!0,writable:!0}):D[u]=e,D}function l(D,u){if(null==D)return{};var e,t,n=function(D,u){if(null==D)return{};var e,t,n={},F=Object.keys(D);for(t=0;t<F.length;t++)e=F[t],u.indexOf(e)>=0||(n[e]=D[e]);return n}(D,u);if(Object.getOwnPropertySymbols){var F=Object.getOwnPropertySymbols(D);for(t=0;t<F.length;t++)e=F[t],u.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(D,e)&&(n[e]=D[e])}return n}var p={position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},f=function(D){var u=D.prefix,e=D.loop,F=D.cursor,r=D.cursorDelay,C=D.cursorWidth,c=D.children,f=D.className,B=D.typeDelay,d=D.deleteDelay,b=D.emptyDelay,m=D.completedDelay,A=l(D,["prefix","loop","cursor","cursorDelay","cursorWidth","children","className","typeDelay","deleteDelay","emptyDelay","completedDelay"]),h=i.a.locals.animation,y={animation:"".concat(h," ").concat(r,"s infinite"),marginLeft:"3px",display:"inline-block",transform:"scale(".concat(C,", 1)")},g=t.Children.map(c,(function(D){return D.props})),j=g.map((function(D){return D.children})),v=g.map((function(D){return D.children,function(D){for(var u=1;u<arguments.length;u++){var e=null!=arguments[u]?arguments[u]:{};u%2?E(Object(e),!0).forEach((function(u){s(D,u,e[u])})):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(e)):E(Object(e)).forEach((function(u){Object.defineProperty(D,u,Object.getOwnPropertyDescriptor(e,u))}))}return D}({},l(D,["children"]))})),O=j.map((function(D){return"string"==typeof D?D.split(""):void 0===D?[]:Array.isArray(D)?D.reduce((function(D,u){return"string"==typeof u?D.concat(u.split("")):(D.push(u),D)}),[]):[D]})),x=a(Object(t.useState)(0),2),w=x[0],k=x[1],S=a(Object(t.useState)(0),2),M=S[0],z=S[1],P=O[w],T=v[w],I=P.length<=0,N=e||w!==O.length-1||M!==-P.length?Math.abs(M)!==P.length||I?0===M?Math.floor(b/2):M<0?d:B:Math.floor(m/2):null;return Object(t.useEffect)((function(){return i.a.use(),function(){return i.a.unuse()}}),[]),function(D,u){var e=Object(t.useRef)();Object(t.useEffect)((function(){e.current=D}),[D]),Object(t.useEffect)((function(){if(null!==u){var D=setInterval((function(){return e.current.apply(e,arguments)}),u);return function(){return clearInterval(D)}}}),[u])}((function(){z((function(D){return P.length<=D&&!I?-D:((-1===D||I)&&k((function(D){return(D+1)%O.length})),D+1)}))}),N),n.a.createElement("span",A,n.a.createElement("span",{"aria-live":"polite","aria-atomic":!0,style:p},u," ",P),n.a.createElement("span",o({"aria-hidden":!0},T),u," ",P.slice(0,Math.abs(M))),F&&n.a.createElement("span",{"aria-hidden":!0,style:y,className:f},"|"))},B=function(D){var u=D.children,e=l(D,["children"]);return n.a.createElement("span",e,u)},d=r.a.oneOfType([r.a.arrayOf(r.a.node),r.a.node]);B.propTypes={children:d},f.defaultProps={prefix:"",loop:!0,cursor:!0,cursorDelay:2,cursorWidth:1.75,className:"",typeDelay:65,deleteDelay:55,emptyDelay:1e3,completedDelay:3e3},f.propTypes={children:function(){},prefix:d,loop:r.a.bool,cursor:r.a.bool,cursorDelay:r.a.number,cursorWidth:r.a.number,className:r.a.string,typeDelay:r.a.number,deleteDelay:r.a.number,emptyDelay:r.a.number,completedDelay:r.a.number}}]))},RXBc:function(D,u,e){"use strict";e.r(u);var t=e("wx14"),n=e("zLVn"),F=e("q1tI"),r=e.n(F),C=e("AeFk"),i=e("/ab4"),o=e("/m4c"),a=e("Wbzz"),c=e("ma3e"),E=(e("amb+"),e("kNTC"),function(D){return Object(C.b)("display:flex;a{padding:11.5px 20px;font-size:17px;font-weight:700;box-shadow:none;}div{height:50px;}justify-content:flex-end;@media (min-width: ",D.breakpoints.nav.breakpoint,"){justify-content:flex-start;}","")}),s=function(D){var u=Object(a.useStaticQuery)("3745566157");console.log(u);var e=u.site.siteMetadata,t=e.resume,n=e.social,F=(n.twitter,n.github);Object.entries(u.site.siteMetadata.nav);return Object(C.c)("nav",{css:E},Object(C.c)(i.a,{to:F.link,inline:!1,icon:c.b},F.name),Object(C.c)(i.a,{to:t,inline:!1,icon:c.f},"Resume"),Object(C.c)(i.a,{to:"/blog/",inline:!1,icon:c.d}," Blog"))};s.defaultProps={title:""};var l=s,p=e("IoOX");var f=function(D,u){return 1024*(D-55296)+u-56320+65536},B=function(D){return D>65535},d={name:"2jgofw",styles:"border-radius:0!important;margin-bottom:0"},b=function(D){var u,e=D.emoji,F=D.size,r=(D.children,Object(n.a)(D,["emoji","size","children"])),i=function(D){for(var u=[],e=D.split(""),t=function(D){return u.push(D.toString(16))},n=0;n<e.length;n++){var F=e[n].charCodeAt(0);if(n+1>=e.length)break;var r=e[n+1].charCodeAt(0),C=f(F,r);B(C)?(t(C),n++):t(F)}return u}(unescape(escape(e).replace("%uFE0F",""))).filter((function(D){return"200d"!==D})).join("-");return Object(C.c)("img",Object(t.a)({alt:"",css:d,width:F,height:F,src:(u=i,"https://github.githubassets.com/images/icons/emoji/unicode/"+u+".png")},r))};b.defaultProps={emoji:"👾",size:"20px"};var m=b,A=e("iQjg"),h=Object(C.b)(A.c,">span{>span:first-of-type{img{width:0;height:0;}}}",""),y=function(D){return Object(C.c)("div",{css:h},Object(C.c)(p.Typer,{prefix:"I",cursorWidth:3.9},Object(C.c)(p.TyperElement,null,"build games ",Object(C.c)(m,{size:"16px",alt:"controller",emoji:"🎮"})),Object(C.c)(p.TyperElement,null,"design apps ",Object(C.c)(m,{size:"16px",alt:"paintbrush",emoji:"🖌"})),Object(C.c)(p.TyperElement,null,"craft tools ",Object(C.c)(m,{size:"16px",alt:"wrench",emoji:"🔧"}))))},g=e("M7K5"),j=e("LbRr");c.b,c.g,c.h,c.c,c.a,e("pOuo");var v=Object(C.b)("margin-top:10px;margin-left:",40,"px;align-self:center;h1{margin-bottom:0;}",""),O=function(D){return Object(C.b)("margin-left:0;margin-top:15px;@media (min-width: ",D.breakpoints.mobile.breakpoint,"){margin-left:",130,"px;margin-top:0;}>div:first-of-type{max-width:600px;}","")},x={name:"1cete8c",styles:"display:flex;flex:1 1 auto"},w={name:"3g4ai",styles:"display:flex;flex-wrap:wrap;>div{&:not(:last-of-type){margin-right:5px;}}"},k=function(D){var u=D.children,e=Object(a.useStaticQuery)("1180442199").site.siteMetadata,t=e.title,n=(e.tagline,t.split(" ")),F=n[0],r=n.slice(1,n.length).join(" ");return Object(C.c)("div",null,Object(C.c)(j.a,null,Object(C.c)("div",{css:x},Object(C.c)(g.a,null),Object(C.c)("div",{css:v},Object(C.c)("h1",null,Object(C.c)("div",{css:w},Object(C.c)("div",null,F),r&&Object(C.c)("div",null," ",r))),Object(C.c)(y,null))),Object(C.c)(l,null)),Object(C.c)("div",{css:O},u))};k.defaultProps={title:""};var S=k,M=e("Bl7J"),z=e("cSFU"),P=function(D){return Object(C.b)("*::selection{background:",D.colors.selection.home,"!important;}","")},T=Object(z.d)((function(D){var u=D.children,e=D.theme;return Object(C.c)(M.a,{color:e.colors.text.light,background:e.colors.accentGradient},Object(C.c)("div",{css:P},Object(C.c)(S,null,Object(C.c)("main",null,u))))})),I=e("vrFN"),N=e("Tgqd"),_=e("Tt45"),L=e("uFVl"),R=e.n(L),J=function(D){for(var u,e,t=D.text,F=Object(n.a)(D,["text"]),r=[],i=R()(),o=0;u=i.exec(t);){if(e){o=e.index+e[0].length;var a=t.substring(o+1,u.index);a&&r.push(Object(C.c)("span",{key:a+"-"+o+"-"+e[0]+"-text-"+t},a))}var c=u[0];r.push(Object(C.c)("span",{key:t+"-"+u[0]+"-"+u.index},Object(C.c)(m,{emoji:c})," ")),o=u.index+c.length,e=u}var E=t.substring(o,t.length);return E&&r.push(Object(C.c)("span",{key:E+"-last-"+t},E)),Object(C.c)("div",F,r)};var U=function(D){return Object(C.b)("justify-content:space-between;>div{padding:0 10px 0 0;width:min(500px, 100%);&:not(:last-of-type){margin-right:80px;margin-bottom:40px;}}h3{font-size:1.6rem;margin-bottom:20px;transition:transform 0.2s ease;}a{display:block;&:hover{h3{transform:translate(20px, 0px);}}}margin-top:12px;@media (min-width: ",D.breakpoints.normal.breakpoint,"){margin-top:60px;display:flex;h3{font-size:1.7rem;margin-bottom:25px;}}@media (min-width: ",D.breakpoints.large.breakpoint,"){h3{font-size:2rem;}}","")},W={name:"3uksfl",styles:">a{>div{>h3{margin-bottom:5px;}&>div{height:0;opacity:0;overflow:hidden;margin-bottom:15px;}}}>a:hover,>a:focus{>div{&>div{opacity:1;height:25px;overflow:hidden;}}}transition:height 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s,opacity 0.3s"},X={name:"o9ww1u",styles:"opacity:0.5"},q={name:"1izd4lu",styles:"font-size:18px;letter-spacing:-0.1px"},Q={name:"riah1u",styles:"font-weight:700;display:inline-block!important;&:after{content:none;}"},V={name:"8mp68y",styles:"border-bottom:none!important;cursor:help!important;svg{margin-top:-2px;}"},H={name:"aetk3e",styles:"height:80px"},K=function(D){var u=D.projects,e=D.children,F=Object(n.a)(D,["projects","children"]),i=!r.a.Children.count(e);return Object(C.c)("div",Object(t.a)({},F,{css:function(D){return Object(C.b)("@media (min-width: ",D.breakpoints.normal.breakpoint,"){margin-top:",i?"50px":"0",";height:",i?"390px":"440px",";}","")}}),e,u.map((function(D){var u=D.name+"-description";return Object(C.c)("div",{key:D.name,css:W},Object(C.c)(o.a,{to:"/projects/"+D.name+"/","aria-describedby":u,"aria-label":D.fullName},Object(C.c)("div",null,Object(C.c)("h3",{css:A.a},D.fullName),Object(C.c)("div",{css:W},Object(C.c)(J,{id:u,text:D.description})))))})))},G=function(D){var u=D.to,e=D.children;return Object(C.c)(o.a,{css:Q,target:"_blank",rel:"noopener noreferrer",to:u},e)};u.default=function(){var D=Object(a.useStaticQuery)("453703770"),u=D.site.siteMetadata.exclude,e=D.allRepositories.edges;Object(_.a)(e,u);var t=(e=e.map((function(D){return D.node}))).filter((function(D){return!!D.fullName}));return Object(C.c)(T,null,Object(C.c)(I.a,null),Object(C.c)("div",{css:U},Object(C.c)("div",null,Object(C.c)("h2",{css:A.c},"Me"),Object(C.c)("p",{css:q},"Hi all, I'm ",Object(C.c)("strong",null,"Jaxson"),": a twenty-something developer who's trying to make modern software products slightly less broken."),Object(C.c)("p",{css:q},"Currently my main area of interest and focus is ",Object(C.c)("strong",null,"Front-end React development")," and other modern web tooling. ",Object(C.c)("span",{css:X},"In my past life I was a Java developer.")),Object(C.c)("p",{css:q},"I currently maintain ",Object(C.c)(G,{to:"https://github.com/woofers/react-wavify"},Object(C.c)("strong",null,"React Wavify"))," ",Object(C.c)("span",null,"(",Object(C.c)("abbr",{css:V,title:"around 100 thousand downloads on Node Package Manager"},"~100k ",Object(C.c)(N.a,{title:"downloads on NPM"})),")")," and many other open source projects. Outside software I enjoy obscure films and spending time with my dog Maxine."),Object(C.c)("span",{css:A.c},"- Jaxson")),Object(C.c)(K,{projects:t},Object(C.c)("h2",{css:A.c},"Projects"))),Object(C.c)("div",{css:H,"aria-hidden":!0}))}},iQjg:function(D,u,e){"use strict";e.d(u,"c",(function(){return F})),e.d(u,"b",(function(){return r})),e.d(u,"a",(function(){return C}));var t=e("AeFk");var n={name:"12ozbw2",styles:"padding:0;margin-bottom:1.6rem;font-family:'Lato',sans-serif;text-rendering:optimizeLegibility;line-height:1.1"},F=Object(t.b)(n," font-weight:400;font-size:1.1rem;color:#fbd4cb;",""),r=Object(t.b)(n," font-weight:700;font-size:0.92211rem;",""),C=Object(t.b)(n," font-weight:700;font-size:1.5rem;","")},uFVl:function(D,u,e){"use strict";D.exports=function(){return/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC68(?:\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83E\uDDD1(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB-\uDFFE])|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83E\uDDD1(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u2764\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])?|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g}},ypIu:function(D,u,e){D.exports=e.p+"static/jaxson-d2458edccef513702ef1f95277e3fe8c.webp"}}]);
//# sourceMappingURL=component---src-pages-index-js-3a50be4c896a843b74ad.js.map