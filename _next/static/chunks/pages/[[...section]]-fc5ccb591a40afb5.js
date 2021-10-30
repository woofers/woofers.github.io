(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[849],{4553:function(n,e,t){"use strict";t(7294);var r=t(9008),i=t(5893),o=function(n){var e="https://og.jaxs.onl",t="".concat(e,"/jvd.png");return"".concat(e,"/**").concat(n,"**.png?&md=1&images=").concat(t,"&widths=").concat(300,"&heights=").concat(300)},a="Jaxson Van Doorn",c="https://jaxs.onl",s={title:a,siteUrl:c,author:a,description:"All-around developer, half-designer and tinkerer.",repo:"https://github.com/woofers/woofers.github.io",social:{github:{name:"GitHub",link:"//github.com/woofers",handle:"woofers"},stackoverflow:{name:"Stack Overflow",link:"//stackoverflow.com/users/9129020/jvandoorn"},twitter:{name:"Twitter",link:"//twitter.com/jaxsonvandoorn",handle:"@jaxsonvandoorn"},linkedin:{name:"LinkedIn",link:"//www.linkedin.com/in/jaxson-van-doorn/"},email:{name:"Email",link:"mailto:jaxson.vandoorn@gmail.com"}},home:"/",resume:"".concat(c,"/resume/jaxsonvd-resume.pdf"),nav:{blog:"/blog/",about:"/about/"}},l=function(n){var e=n.description,t=(n.lang,n.meta),c=n.title,l=n.noIndex,p=e||s.description,d=c||s.title||"Jaxson Van Doorn",f=[{name:"description",content:p},{property:"og:title",content:d},{property:"og:description",content:p},{property:"og:type",content:"website"},{property:"og:image",content:o(d)},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a},{name:"twitter:title",content:d},{name:"twitter:description",content:p}].concat(t);return(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{children:d!==s.title?"".concat(d," | ").concat(s.title):d}),f.map((function(n){var e=n.name,t=n.property,r=n.content;return(0,i.jsx)("meta",{name:e,property:t,content:r},null!==e&&void 0!==e?e:t)})),(0,i.jsx)("link",{rel:"manifest",href:"/manifest.webmanifest",crossOrigin:"anonymous"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"32x32",href:"/icons/mask-32x32.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"48x48",href:"/icons/mask-48x48.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/icons/mask-72x72.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"96x96",href:"/icons/mask-96x96.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/icons/mask-144x144.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"192x192",href:"/icons/mask-192x192.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"256x256",href:"/icons/mask-256x256.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"384x384",href:"/icons/mask-384x384.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"512x512",href:"/icons/mask-512x512.png"}),l&&(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})]})};l.defaultProps={meta:[],description:"",title:"",noIndex:!1},e.Z=l},1067:function(n,e,t){"use strict";var r,i=t(4942),o=t(91),a=t(168),c=t(3466),s=t(5893),l=["display","color","lineHeight","fontSize","paddingX","paddingY","transform","width","fontWeight","letterSpacing","textTransform","mobileScale"];function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}var d=c.zo.h1(r||(r=(0,a.Z)(["\n  --scale-title: 1;\n  display: ",";\n  margin: 0;\n  color: ",";\n  padding: ",";\n  font-weight: ",";\n  font-family: 'Mulish', sans-serif;\n  text-decoration: none;\n  text-transform: ",";\n  transform: ",";\n  transition: color 0.3s ease-in-out;\n  width: ",";\n\n  letter-spacing: calc("," / var(--scale-title));\n  font-size: calc("," / var(--scale-title));\n  line-height: calc("," / var(--scale-title));\n\n  @media only screen and (max-width: ",") {\n    --scale-title: 1.2;\n  }\n  @media only screen and (max-width: ",") {\n    --scale-title: ",";\n  }\n  &[aria-current='page'] {\n    color: #27292b;\n  }\n"])),(function(n){return n.$display}),(function(n){return n.$color}),(function(n){return"".concat(n.$paddingY," ").concat(n.$paddingX)}),(function(n){return n.$fontWeight}),(function(n){return n.$textTransform}),(function(n){return n.$transform}),(function(n){return n.$width}),(function(n){return n.$letterSpacing}),(function(n){return n.$fontSize}),(function(n){return n.$lineHeight}),(function(n){return n.theme.breakpoints.large.breakpoint}),(function(n){return n.theme.breakpoints.mobile.breakpoint}),(function(n){return n.$mobileScale})),f=function(n){var e=n.display,t=n.color,r=n.lineHeight,a=n.fontSize,c=n.paddingX,f=n.paddingY,h=n.transform,u=n.width,m=n.fontWeight,x=n.letterSpacing,g=n.textTransform,b=n.mobileScale,y=(0,o.Z)(n,l);return(0,s.jsx)(d,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({$display:e,$color:t,$lineHeight:r,$fontSize:a,$paddingX:c,$paddingY:f,$transform:h,$width:u,$fontWeight:m,$letterSpacing:x,$textTransform:g,$mobileScale:b},y))};f.defaultProps={display:"block",color:"#000",lineHeight:"40px",fontSize:"45px",paddingX:"10px",paddingY:"20px",transform:"none",width:"unset",fontWeight:"900",letterSpacing:"0.65px",textTransform:"none",mobileScale:1.5},e.Z=f},5868:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return ie},default:function(){return oe}});var r,i=t(168),o=t(7294),a=t(4553),c=t(3466),s=t(4942),l=t(91),p=t(6646),d=t(5421),f=t(5675),h=t(5893),u=["intro","show"];function m(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function x(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){(0,s.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var g,b=(0,c.zo)(p.E.div)(r||(r=(0,i.Z)(["\n  display: block;\n  position: relative;\n  --scale-avatar: 1;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n  max-width: calc(600px / var(--scale-avatar));\n  max-height: calc(800px / var(--scale-avatar));\n  flex-direction: column;\n  align-items: center;\n  @media only screen and (max-width: 1335px) {\n    max-width: 480px;\n  }\n  @media only screen and (max-width: ",") {\n    max-width: 180px;\n  }\n"])),(function(n){return n.theme.breakpoints.large.breakpoint})),y=function(n){var e=n.src,t=n.width,r=n.quality;return"".concat("https://jaxs.onl","/me/").concat(e,"_").concat(t,"_").concat(r,".webp")},w=function(n){var e=n.intro,t=void 0===e||e,r=n.show,i=void 0===r||r,o=(0,l.Z)(n,u),a=(0,c.Fg)(),s=(0,c.ac)("@media only screen and (max-width: ".concat(a.breakpoints.large.breakpoint,")"));return(0,h.jsx)(d.M,{exitBeforeEnter:!0,children:i&&(0,h.jsx)(b,x(x({initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:t?.5:.15,delay:t?1.3:0}},o),{},{children:(0,h.jsx)(f.default,{src:"me",width:"3024px",height:"4032px",blurDataURL:y({src:"me",width:16,quality:80}),loader:y,quality:80,sizes:s?"180px":"1200px",layout:"responsive",placeholder:"blur",alt:"Photo of Jaxson in a grey hoodie and red plaid shirt"})}))})},v=c.zo.div(g||(g=(0,i.Z)(["\n  --scale-text: 1;\n  color: ",";\n  font-weight: ",";\n  display: flex;\n  flex-direction: column;\n  margin: ",";\n  width: ",";\n\n  ",";\n\n  font-size: calc("," / var(--scale-text));\n  @media only screen and (max-width: ",") {\n    --scale-text: 1.2;\n  }\n  @media only screen and (max-width: ",") {\n    --scale-text: 1.5;\n  }\n"])),(function(n){return n.color}),(function(n){return n.fontWeight}),(function(n){var e=n.top,t=n.right,r=n.bottom,i=n.left;return"".concat(e," ").concat(t," ").concat(r," ").concat(i)}),(function(n){return n.width}),(function(n){return n.fontFamily&&"\n    font-family: ".concat(n.fontFamily,", sans-serif;\n  ")}),(function(n){return n.fontSize}),(function(n){return n.theme.breakpoints.large.breakpoint}),(function(n){return n.theme.breakpoints.mobile.breakpoint}));v.defaultProps={color:"#27292b",fontSize:"20px",fontWeight:"700",left:0,right:0,top:0,bottom:0,width:"unset"};var j,O,k,z,$,E,P=v,Z=t(1067),S=t(1332);function _(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}var D=c.zo.div(j||(j=(0,i.Z)(["\n  flex-flow: row wrap;\n  display: flex;\n  flex-direction: column;\n"]))),C=(0,c.zo)((function(n){return(0,h.jsx)(Z.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?_(Object(t),!0).forEach((function(e){(0,s.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({fontSize:"45px",fontWeight:"900",paddingX:"0",paddingY:"0",letterSpacing:"-1.5px",color:"#fe9c55",as:"div"},n))}))(O||(O=(0,i.Z)(["\n  @media only screen and (max-width: ",") {\n    font-size: 33px;\n  }\n"])),(function(n){return n.theme.breakpoints.mobile.breakpoint})),M=(0,c.zo)(C)(k||(k=(0,i.Z)(["\n  color: #d2d8e0;\n  font-family: Cantarell, sans-serif;\n  font-weight: 400;\n"]))),H=(0,c.zo)(C)(z||(z=(0,i.Z)(["\n  color: #fff;\n  background: #d2d8e0;\n  border-radius: 18px;\n  padding: 0px 8px 5px;\n  margin-left: 6px;\n  height: 61px;\n  display: flex;\n  align-items: center;\n  width: max-content;\n  max-width: 100%;\n  @media only screen and (max-width: ",") {\n    border-radius: 13px;\n    height: 45px;\n  }\n  @media only screen and (max-width: ",") {\n    margin: 0 0 0 auto;\n  }\n"])),(function(n){return n.theme.breakpoints.mobile.breakpoint}),(function(n){return n.theme.breakpoints.mini.breakpoint})),T=c.zo.div($||($=(0,i.Z)(["\n  display: flex;\n  margin-bottom: 10px;\n"]))),V=c.zo.a(E||(E=(0,i.Z)(["\n  padding-left: 10px;\n  display: flex;\n  align-items: baseline;\n  text-decoration: none;\n  width: max-content;\n  @media only screen and (max-width: ",") {\n    flex-direction: column;\n    margin: 10px auto 0;\n    width: 100%;\n    max-width: 300px;\n  }\n"])),(function(n){return n.theme.breakpoints.mini.breakpoint})),U=function(){return(0,h.jsxs)(D,{children:[(0,h.jsx)(Z.Z,{paddingX:"0",paddingY:"0",fontSize:"25px",letterSpacing:"-0.5px",as:"h2",color:"#c9c9c9",children:"Reach out"}),(0,h.jsxs)(V,{href:"mailto:jaxson.vandoorn@gmail.com",children:[(0,h.jsxs)(T,{children:[(0,h.jsx)(C,{children:"jaxson."}),(0,h.jsx)(M,{children:"vandoorn"})]}),(0,h.jsx)(H,{children:"@gmail.com"})]})]})},W=t(1163);t.p;t.p;t.p;t.p;t.p;t.p;t.p;var X;t.p;function F(){return(F=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function N(n){return o.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24"},n),X||(X=o.createElement("path",{fill:"currentColor",d:"M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"})))}var G;t.p;function R(){return(R=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function Y(n){return o.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",width:492,height:145,viewBox:"0 0 492 145"},n),G||(G=o.createElement("path",{d:"M99.162 63.144H58.806a1.886 1.886 0 00-1.885 1.887v19.73c0 1.042.844 1.89 1.885 1.89H74.55v24.513s-3.535 1.206-13.308 1.206c-11.53 0-27.636-4.214-27.636-39.63 0-35.428 16.772-40.088 32.517-40.088 13.631 0 19.502 2.4 23.24 3.556 1.174.36 2.26-.809 2.26-1.852l4.5-19.062c0-.49-.165-1.075-.72-1.474-1.517-1.082-10.774-6.262-34.16-6.262-26.94 0-54.577 11.461-54.577 66.562 0 55.102 31.64 63.313 58.303 63.313 22.076 0 35.468-9.434 35.468-9.434.552-.305.612-1.077.612-1.43V65.032a1.886 1.886 0 00-1.886-1.887M307.141 14.16a1.88 1.88 0 00-1.875-1.897h-22.722a1.889 1.889 0 00-1.882 1.897l.007 43.912h-35.42V14.16a1.88 1.88 0 00-1.874-1.897h-22.722a1.888 1.888 0 00-1.877 1.897v118.903c0 1.05.844 1.901 1.877 1.901h22.722c1.04 0 1.874-.852 1.874-1.901v-50.86h35.42l-.062 50.86c0 1.05.842 1.901 1.882 1.901h22.776c1.042 0 1.874-.852 1.876-1.901V14.16m-165.1 15.602c0-8.182-6.559-14.794-14.652-14.794-8.085 0-14.65 6.612-14.65 14.794 0 8.174 6.565 14.805 14.65 14.805 8.093 0 14.652-6.63 14.652-14.805m-1.624 78.218V53.095a1.89 1.89 0 00-1.88-1.895h-22.652c-1.039 0-1.968 1.072-1.968 2.114v78.636c0 2.31 1.44 2.998 3.303 2.998h20.408c2.24 0 2.79-1.1 2.79-3.036V107.98m253.079-56.6H370.95c-1.033 0-1.876.852-1.876 1.902v58.3s-5.73 4.192-13.86 4.192c-8.13 0-10.287-3.69-10.287-11.65V53.282c0-1.05-.84-1.903-1.876-1.903h-22.885c-1.032 0-1.879.853-1.879 1.903v54.69c0 23.649 13.18 29.434 31.308 29.434 14.875 0 26.867-8.219 26.867-8.219s.57 4.332.83 4.844c.257.512.93 1.03 1.658 1.03l14.559-.065c1.032 0 1.878-.853 1.878-1.898l-.008-79.816c0-1.05-.84-1.903-1.88-1.903m52.734 64.323c-7.821-.238-13.127-3.788-13.127-3.788V74.26s5.234-3.208 11.655-3.78c8.12-.729 15.944 1.724 15.944 21.095 0 20.425-3.53 24.456-14.472 24.127zm8.893-66.994c-12.806 0-21.517 5.714-21.517 5.714V14.16c0-1.05-.84-1.897-1.875-1.897h-22.788a1.886 1.886 0 00-1.877 1.897v118.903a1.89 1.89 0 001.88 1.901h15.81c.713 0 1.251-.366 1.65-1.007.393-.64.96-5.485.96-5.485s9.317 8.831 26.956 8.831c20.71 0 32.585-10.504 32.585-47.155 0-36.65-18.968-41.44-31.784-41.44M205.724 51.19h-17.046l-.025-22.518c0-.853-.44-1.278-1.425-1.278H164c-.904 0-1.388.397-1.388 1.265v23.27s-11.64 2.81-12.428 3.035a1.89 1.89 0 00-1.36 1.814V71.4c0 1.052.84 1.9 1.879 1.9h11.91v35.18c0 26.128 18.327 28.695 30.694 28.695 5.652 0 12.412-1.816 13.528-2.227.674-.249 1.066-.948 1.066-1.706l.02-16.086c0-1.048-.886-1.898-1.884-1.898-.994 0-3.534.405-6.15.405-8.374 0-11.21-3.893-11.21-8.932v-33.43h17.046a1.89 1.89 0 001.88-1.9V53.083a1.885 1.885 0 00-1.88-1.894",fill:"currentColor"})))}var B,I,L,q,J,A,K,Q,nn,en,tn,rn;t.p;function on(){return(on=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function an(n){return o.createElement("svg",on({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128"},n),B||(B=o.createElement("radialGradient",{id:"earth_svg__a",cx:43.972,cy:29.066,r:90.951,gradientTransform:"matrix(.6257 .78 -.5815 .4665 33.359 -18.792)",gradientUnits:"userSpaceOnUse"},o.createElement("stop",{offset:.506,stopColor:"#17a1f3"}),o.createElement("stop",{offset:.767,stopColor:"#1b7ffa"}),o.createElement("stop",{offset:.962,stopColor:"#1366f0"}),o.createElement("stop",{offset:1,stopColor:"#1160ee"}))),I||(I=o.createElement("path",{d:"M3.14 64.68c.68 24.4 16.99 59.55 61.45 59.1 43.32-.44 60.76-36.3 59.4-62.06-1.37-25.76-21.66-57.46-61.79-57.23-40.14.22-59.8 33.96-59.06 60.19z",fill:"url(#earth_svg__a)"})),L||(L=o.createElement("path",{d:"M63.03 4.48s-.45 1.27 2.17 2.07 4.01.85 5.88 1.71c1.87.85 2.99 2.19 5.66 3.58 2.67 1.39 3.58 1.71 4.06.75.22-.43-.69-2.35-.69-2.35s.43-1.82-.21-2.46c-.54-.54-3.52-1.75-4.59-2.18-1-.4-4.59-.84-6.31-.95-4.22-.26-5.97-.17-5.97-.17z",fill:"#fff"})),q||(q=o.createElement("path",{d:"M49.06 49.8c.09.23.65 1.37 1.77 1.68 1.12.31 4.08.37 4.79.65.72.28 2.46 1.18 2.93 1.46s2.3 1.82 2.74 1.96c1.03.34 1.62-.28 2.09-.12.47.16.75 1.06 1.68 1.12.56.04 1.28-.87 1.81-.97s3.24.12 3.3-.75c.06-.87-1.84-2.68-2.96-2.68-.94 0-1.09.81-1.81.84-.72.03-1.18-.75-2.02-.72-.84.03-1.28.75-1.74.53-.47-.22-5.48-3.67-6.79-4.05-1.31-.37-4.73.09-5.2.22-.46.15-.74.43-.59.83z",fill:"#7add8a"})),J||(J=o.createElement("path",{d:"M27.19 21.25c.75-1.82 1.93-4.57 3.53-6.34 1.61-1.77 4.36-4.23 4.36-4.23s4.9-2.57 12.29-4.49 14.54-1.7 14.54-1.7-.62.58-.57.9c.05.32.05.86 1.34 1.34 1.28.48 3.85.8 4.55 1.61.7.8.91 1.87.11 2.41s-2.25.37-3.64-.05c-1.39-.43-1.34-.48-1.5-.96-.16-.48 1.39-.7 1.18-1.18-.21-.48-.91-.27-1.71-.7-.8-.43-1.38-.53-1.88-.32s-.99 1.27-1.21 1.8c-.22.53-.34.71-.56.87s-1.58.09-1.95.12c-.37.03-1.83.71-2.69 1.11-.87.4-2.69.84-3.1 1.18-.4.34-.77.9-.09 1.33s2.2.87 3.1 1.18c.9.31 2.48.34 2.69.62.22.28.03 1.58.19 1.77.15.19.74.96 1.11.9.37-.06.9-1.49 1.11-1.92.22-.43 1.7-.93 1.58-1.61-.12-.68-.81-.81-.84-1.21-.03-.4.46-1.24.43-1.46-.03-.22.03-1.46.68-1.58.65-.12 1.55.37 2.29.62s1.49-.03 2.63.74c1.15.77.9 1.36 1.46 1.39.56.03.59-.9 1.33-1.02.74-.12 2.14 1.27 3.9 2.32s4.15 2.51 4.86 3.53.46 1.27 1.02 1.64 2.42 1.39 2.51 1.83c.09.43-.03 1.02-1.86.9s-2.6-.59-3.04-1.05c-.43-.46-.46-.9-.34-1.18.12-.28.62-.31.62-.31s.28-1.15-.46-1.49c-.74-.34-1.46-.56-3.75-.19-2.29.37-3.84.9-4.15 1.39-.31.5-.03 1.11.37 1.11s1.86-.84 2.38-.68c.53.15 0 1.86.4 2.11.4.25 1.61.12 2.26.15.65.03 1.33-.06 1.67.46s-.59 1.02-1.46 1.39-2.14 1.21-2.51 1.52c-.37.31-.99.59-1.24.06s.03-1.52.03-1.52-2.11.84-2.45 1.24c-.34.4.19 1.64-.5 2.29-.68.65-1.89.15-2.51.43-.62.28-1.7 1.33-2.42 2.2-.71.87-1.08 1.33-1.08 1.95 0 .62.68 1.24-.43 2.17-1.11.93-1.7.71-2.69 1.18-.99.46-2.48 1.33-3.07 2.63-.59 1.3.15 3.9.28 4.8.12.9.56 2.91-.46 2.94s-1.15-.62-1.89-2.63-1.02-2.91-1.58-3.19c-.56-.28-1.27-.03-2.51.12-1.24.15-6.23.37-7.25.37s-2.32-.31-3.47 1.18c-1.15 1.49-1.05 2.32-1.08 3.44s-.4 1.46-.93 2.42-.68 3.62-.5 4.06c.19.43 1.77 2.17 2.04 2.17.28 0 2.85.12 3.28-.03.43-.15.93-.77 1.18-1.39.25-.62.15-1.15.84-1.83s1.61-.59 2.2-.62 1.05-.15 1.58-.22c.53-.06 1.33.74 1.3 1.02s-1.18 1.46-1.49 2.11l-.31.65s-.22.99-.5 1.42c-.28.43-.5.87-.74 1.18-.25.31-.09.9.43 1.02.53.12.43-.28.62-.37.19-.09 3.16-.03 3.78.03s1.55.96 1.64 1.27.12 2.14-.22 3.07c-.34.93-.9 1.42-.96 1.77-.06.34.09.87.09.87s.46.87 1.15 1.52c.68.65 1.42 1.05 1.42 1.05s1.58 0 2.42-.03c.84-.03 1.42-.15 1.98.25s1.55 1.58 1.77 1.55c.22-.03.53-1.24 2.26-2.63 1.73-1.39 2.42-1.55 3.44-1.7 1.02-.15 1.21.31 1.21.31s.46.4 1.27.06.71-.84 1.95-.77 2.01.74 2.85.96 2.42.34 4.09.43c1.67.09 2.69-.15 3.31-.06.62.09 1.15.81 1.49 1.11.34.31.34.81.34.81s.65.15 1.27.59c.62.43 1.21 1.52 1.98 1.83.77.31 2.17.15 3.81.25 1.64.09 2.11.28 2.94 1.08s1.33 1.86 1.64 2.76c.31.9.77 2.97.77 2.97s1.21-.37 3.1.4c1.89.77 2.04 1.55 2.04 1.55s2.94-.09 3.75-.06 2.91 1.46 3.13 1.95c.22.5-.22 4.31-.15 4.89.06.59-2.17 3.78-2.73 4.31-.56.53-.93 1.15-1.8 3.62s-1.49 4.12-1.95 4.58c-.46.46-1.92 2.2-3.44 2.94-1.52.74-2.42.62-3.44 1.11-1.02.5-1.8 2.11-2.29 3.22-.5 1.11-.19 2.48-.46 2.91-.28.43-3.84 3.93-4.52 4.15-.68.22-3.87-.34-4.4.09s.65 1.67.53 2.08c-.12.4-1.15 1.49-2.04 2.17-.9.68-1.67 1.67-2.29 1.77-.62.09-1.39-.34-2.01.37s.06 1.86-.22 2.35c-.28.5-.92.95-1.29 1.63-.37.68-.64.92-.64.92s-2.82.25-4.5.34c-1.67.09-5.06.05-5.06.05s.76-1.49.86-2.98-.37-2.29-.06-3.16c.31-.87 1.3-1.89 1.3-1.89s.71-3.41.65-5.73c-.06-2.32-.34-3.69-.37-4.12-.03-.43.22-8.11.09-8.58-.12-.46-1.77-1.33-2.57-2.04-.81-.71-3-1.67-3.59-2.57-.59-.9-.74-1.24-.96-1.58-.22-.34-1.89-3.34-2.29-4.12-.4-.77-1.39-1.46-1.8-2.54s-.4-1.98-.09-2.32.81-.62.71-1.02c-.09-.4-.99-.46-.68-1.77s1.39-2.48 1.67-2.73.5.03.77-.22c.28-.25 2.01-1.73 2.23-2.01s.15-2.26-.15-3.1c-.31-.84-1.55-2.2-2.01-2.35-.46-.15-1.58 1.15-2.57 1.11-.99-.03-1.64 0-3.19-.99s-3.72-2.91-4.18-3.72c-.46-.81-.28-1.11-.56-1.55-.28-.43-1.73-1.21-2.54-1.61-.81-.4-1.64-.28-2.11-.59s-2.73-2.82-3.16-3.34c-.43-.53-.81-.68-1.11-.71s-.59.4-.84.46-2.26.09-2.57-.06c-.31-.15-2.73-1.39-3.93-2.51s-2.73-1.89-3.41-2.82c-.68-.93.03-1.92.12-2.42s-.03-2.35-.09-3c-.06-.65-1.18-1.83-1.33-3.13s-.59-2.6-.71-3.22c-.12-.62-.06-2.79-.22-2.91-.15-.12-.93-.43-1.11.93s.25 2.38.34 3.93c.09 1.55.09 2.48.31 2.94.22.46.96 1.42.37 1.73-.59.31-1.36-.34-1.8-1.21-.43-.87-.09-2.51-.46-3.31s-.5-2.38-.59-3.16c-.09-.77-.43-2.73-.34-4.43.09-1.7.62-1.86.62-1.86s0-1.98.03-2.38 2.01-4.12 3.62-6.19c1.65-2.05 2.83-3.66 2.83-3.66z",fill:"#7add8a"})),A||(A=o.createElement("radialGradient",{id:"earth_svg__b",cx:4.93,cy:38.972,r:40.299,gradientTransform:"matrix(.9806 -.1961 .1182 .5911 -4.511 16.902)",gradientUnits:"userSpaceOnUse"},o.createElement("stop",{offset:.344,stopColor:"#e3dda6"}),o.createElement("stop",{offset:.996,stopColor:"#e3dda6",stopOpacity:0}))),K||(K=o.createElement("path",{d:"M41.62 56.63c.16-2.52-1.21-2.67-1.64-2.52-.43.15-3 .03-3.28.03-.28 0-1.86-1.73-2.04-2.17-.19-.43-.03-3.1.5-4.06.53-.96.9-1.3.93-2.42s-.06-1.95 1.08-3.44c1.15-1.49 2.45-1.18 3.47-1.18s6.01-.22 7.25-.37c1.24-.15 1.95-.4 2.51-.12.56.28.84 1.18 1.58 3.19.74 2.01.87 2.66 1.89 2.63s.59-2.04.46-2.94c-.12-.9-.87-3.5-.28-4.8.59-1.3 2.08-2.17 3.07-2.63.99-.46 1.58-.25 2.69-1.18 1.11-.93.43-1.55.43-2.17 0-.62.37-1.08 1.08-1.95.71-.87 1.8-1.92 2.42-2.2.62-.28 1.83.22 2.51-.43.68-.65.15-1.89.5-2.29.34-.4 2.45-1.24 2.45-1.24s-.28.99-.03 1.52.87.25 1.24-.06 1.64-1.15 2.51-1.52 1.8-.87 1.46-1.39-1.02-.43-1.67-.46c-.65-.03-1.86.09-2.26-.15-.4-.25.12-1.95-.4-2.11-.53-.15-1.98.68-2.38.68s-.68-.62-.37-1.11c.31-.5-9.63-1.42-10-1.36-.37.06-.96-.71-1.11-.9-.15-.19.03-1.49-.19-1.77s-1.8-.31-2.69-.62c-.9-.31-2.42-.74-3.1-1.18s-.31-.99.09-1.33c.4-.34 2.23-.77 3.1-1.18.87-.4 2.32-1.08 2.69-1.11.37-.03 1.73.03 1.95-.12s.34-.34.56-.87c.22-.53.71-1.58 1.21-1.8s1.61-1.82 1.56-2.14c-.05-.32.57-.9.57-.9s-7.15-.23-14.54 1.7-12.29 4.49-12.29 4.49-2.75 2.46-4.36 4.23c-1.61 1.77-2.78 4.52-3.53 6.34 0 0-1.18 1.61-2.79 3.69s-3.59 5.79-3.62 6.19-.03 2.38-.03 2.38-.53.15-.62 1.86c-.09 1.7.25 3.65.34 4.43.09.77.22 2.35.59 3.16s.03 2.45.46 3.31c.43.87 1.21 1.52 1.8 1.21.59-.31-.15-1.27-.37-1.73-.22-.46-.22-1.39-.31-2.94s-.53-2.57-.34-3.93.96-1.05 1.11-.93c.15.12.09 2.29.22 2.91.12.62.56 1.92.71 3.22s1.27 2.48 1.33 3.13c.06.65.19 2.51.09 3-.09.5-.81 1.49-.12 2.42.68.93 2.2 1.7 3.41 2.82s3.62 2.35 3.93 2.51c.31.15 2.32.12 2.57.06s.53-.5.84-.46 1.62 1.14 2.17 1.05c.95-.17 2.91-.12 3.03-1.98z",fill:"url(#earth_svg__b)"})),Q||(Q=o.createElement("radialGradient",{id:"earth_svg__c",cx:42.188,cy:107.573,r:31.591,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{offset:.723,stopColor:"#e3dda6"}),o.createElement("stop",{offset:1,stopColor:"#e3dda6",stopOpacity:0}))),nn||(nn=o.createElement("path",{d:"M57.83 71.27c.12.88.37 2.82.15 3.1-.22.28-1.95 1.77-2.23 2.01-.28.25-.5-.03-.77.22-.28.25-1.36 1.42-1.67 2.73s.59 1.36.68 1.77-.4.68-.71 1.02-.31 1.24.09 2.32 1.39 1.77 1.8 2.54c.4.77 2.08 3.78 2.29 4.12.22.34.37.68.96 1.58s2.79 1.86 3.59 2.57c.81.71 2.45 1.58 2.57 2.04s-.12 8.15-.09 8.58c.03.43.31 1.8.37 4.12s-.65 5.73-.65 5.73-.99 1.02-1.3 1.89c-.31.87.15 1.67.06 3.16-.09 1.49-.86 2.98-.86 2.98s3.38.04 5.06-.05c1.67-.09 4.5-.34 4.5-.34s.27-.24.64-.92 1.01-1.13 1.29-1.63-.4-1.64.22-2.35c.62-.71 1.39-.28 2.01-.37.62-.09 1.39-1.08 2.29-1.77.9-.68 1.92-1.77 2.04-2.17.12-.4-1.05-1.64-.53-2.08.53-.43 3.72.12 4.4-.09.68-.22 4.24-3.72 4.52-4.15.28-.43-.03-1.8.46-2.91.5-1.11.83-18.84-4.46-26.54-6.19-9.02-27.31-11.65-26.72-7.11z",fill:"url(#earth_svg__c)"})),en||(en=o.createElement("radialGradient",{id:"earth_svg__d",cx:62.919,cy:134.216,r:22.682,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{offset:.403,stopColor:"#e3dda6"}),o.createElement("stop",{offset:1,stopColor:"#e3dda6",stopOpacity:0}))),tn||(tn=o.createElement("path",{d:"M57.85 71.31c.12.88.37 2.82.15 3.1-.22.28-1.95 1.77-2.23 2.01-.28.25-.5-.03-.77.22-.28.25-1.36 1.42-1.67 2.73s.59 1.36.68 1.77-.4.68-.71 1.02-.31 1.24.09 2.32c.4 1.08 1.39 1.77 1.8 2.54.4.77 2.08 3.78 2.29 4.12s.37.68.96 1.58 2.79 1.86 3.59 2.57c.81.71 2.45 1.58 2.57 2.04.12.46-.12 8.15-.09 8.58.03.43.31 1.8.37 4.12.06 2.32-.65 5.73-.65 5.73s-.99 1.02-1.3 1.89c-.31.87.15 1.67.06 3.16-.09 1.49-.86 2.98-.86 2.98s3.38.04 5.06-.05c1.67-.09 4.5-.34 4.5-.34s.27-.24.64-.92 1.01-1.13 1.29-1.63-.4-1.64.22-2.35c.62-.71 1.39-.28 2.01-.37.62-.09 1.39-1.08 2.29-1.77.9-.68 1.92-1.77 2.04-2.17.12-.4-1.05-1.64-.53-2.08s3.72.12 4.4-.09c.68-.22 4.24-3.72 4.52-4.15.28-.43-.03-1.8.46-2.91.5-1.11.83-18.84-4.46-26.54-6.2-9.03-27.32-11.65-26.72-7.11z",fill:"url(#earth_svg__d)"})),rn||(rn=o.createElement("path",{d:"M47.21 22.14c.28.38 1.55-.08 2.15-.05.6.03 1.25.27 1.33.82.08.54-.52.63-.87 1.33-.18.36-1.39 2.79-.73 3.07.87.38 1.3-.49 1.49-.9.19-.41.65-1.28.65-1.28s.52-1.14 1.2-1.06c1.22.14.73 1.88.73 1.88s-.27 1.3.38 1.6c.65.3 1.28.08 1.63-.05.35-.14.95 0 1.66-.3s1.01-.57 1.49-.76c.49-.19.92-.08.98-.52.05-.43-.38-.87-1.11-.92s-1.63.79-1.93 1.06c-.3.27-1.28.46-1.39-.24s.52-.76.98-1.03c.46-.27.76-.65.76-.65s-.84-1.09-1.09-1.17c-.24-.08-1.22.22-2.2-.46-.91-.63-1.28-1.49-1.52-1.71s-1.33-.57-2.39-.35-2.64 1.09-2.2 1.69z",fill:"#4b9eec"})))}t.p,c.zo.img(cn||(cn=(0,i.Z)(["\n  width: 80px;\n  height: 80px;\n"]))),c.zo.div(sn||(sn=(0,i.Z)(["\n  width: 65px;\n  height: 30px;\n  background-image: url(",");\n  background-size: 148% auto;\n  background-repeat: no-repeat;\n  display: inline-block;\n"])),"/_next/static/media/dark-fts.e2c0d8f3.png");var cn,sn,ln,pn,dn,fn,hn=["children","$width","$width2"];function un(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function mn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?un(Object(t),!0).forEach((function(e){(0,s.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):un(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var xn,gn,bn=c.zo.div(ln||(ln=(0,i.Z)(["\n  max-width: 700px;\n"]))),yn=c.zo.a(pn||(pn=(0,i.Z)(["\n  --scale-bubble: 1;\n  display: inline-block;\n  font-size: 22px;\n  color: ",";\n  border-radius: 5px;\n  display: inline-flex;\n  font-weight: 900;\n  padding: 0 "," 0 ",";\n  align-items: center;\n  font-family: 'Cabin', sans-serif;\n  position: relative;\n  svg:first-of-type {\n    margin-top: calc("," / var(--scale-bubble));\n    display: inline-flex;\n    align-self: center;\n    position: absolute;\n    width: calc("," / var(--scale-bubble));\n    height: calc("," / var(--scale-bubble));\n  }\n  svg:nth-of-type(2) {\n    left: calc(\n      ("," + ",") /\n        var(--scale-bubble)\n    );\n    display: inline-flex;\n    align-self: center;\n    position: absolute;\n    width: calc("," / var(--scale-bubble));\n    height: calc("," / var(--scale-bubble));\n  }\n  overflow: hidden;\n  ","\n  @media only screen and (max-width: ",") {\n    --scale-bubble: 1.5;\n    font-size: 13px;\n    svg:first-of-type {\n      margin-top: 0;\n    }\n  }\n"])),(function(n){return n.$color}),(function(n){return n.$paddingRight}),(function(n){return n.$paddingLeft}),(function(n){return n.$marginTop||0}),(function(n){return n.$width}),(function(n){return n.$height}),(function(n){return n.$width}),(function(n){return n.$spacing||"10px"}),(function(n){return n.$width2}),(function(n){return n.$height2}),(function(n){return n.$border&&"\n    border: 1px solid #c9c9c9;\n  "}),(function(n){return n.theme.breakpoints.small.breakpoint})),wn=c.zo.span(dn||(dn=(0,i.Z)(["\n  --scale-spacer: 1;\n  width: calc(\n    (",") /\n      var(--scale-spacer)\n  );\n  user-select: none;\n  @media only screen and (max-width: ",") {\n    --scale-spacer: 1.5;\n  }\n"])),(function(n){return"".concat(n.$width," + ").concat(n.$width2||"0px")}),(function(n){return n.theme.breakpoints.small.breakpoint})),vn=function(n){var e=n.children,t=n.$width,r=n.$width2,i=(0,l.Z)(n,hn);return(0,h.jsxs)(yn,mn(mn({},i),{},{$width:t,$width2:r,children:[(0,h.jsx)(wn,{"aria-hidden":!0,$width:t,$width2:r,children:"\xa0"}),e]}))},jn=c.zo.p(fn||(fn=(0,i.Z)(["\n  line-height: 41px;\n  margin: 0;\n  font-size: 18px;\n  color: #233044bd;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 400;\n  letter-spacing: -0.35px;\n  @media only screen and (max-width: ",") {\n    font-size: 12px;\n    line-height: 30px;\n  }\n"])),(function(n){return n.theme.breakpoints.small.breakpoint})),On=function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(bn,{children:[(0,h.jsxs)(jn,{children:["I help design and ship"," ",(0,h.jsxs)(vn,{href:"https://github.com/woofers",$color:"#1a8fff",$width:"24px",$height:"24px",$width2:"2px",$paddingLeft:"4px",$paddingRight:"2px",children:[(0,h.jsx)(an,{"aria-hidden":!0}),(0,h.jsx)("span",{"aria-hidden":!0,children:"\xa0"}),"real world"]})," ","apps and software."]}),!1,(0,h.jsxs)(jn,{children:["Check out my"," "," stuff on"," ",(0,h.jsxs)(vn,{"aria-label":"GitHub",href:"https://github.com/woofers",$color:"#0f0e0f",$width:"35px",$height:"24px",$width2:"81px",$height2:"24px",$spacing:"4px",$paddingLeft:"0px",$paddingRight:"10px",children:[(0,h.jsx)(N,{"aria-hidden":!0}),(0,h.jsx)(Y,{"aria-hidden":!0})]})]})]})})},kn=t(5403),zn=["items","wrap"],$n=["href","children"];function En(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function Pn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?En(Object(t),!0).forEach((function(e){(0,s.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):En(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var Zn,Sn,_n,Dn,Cn,Mn,Hn,Tn,Vn,Un,Wn,Xn=(0,c.zo)(kn.ZP)(xn||(xn=(0,i.Z)(["\n  text-decoration: none;\n  font-size: 15px;\n  line-height: 18px;\n  font-weight: 700;\n  border-radius: 8px;\n  border: medium none;\n  background: transparent none repeat scroll 0% 0%;\n  padding: 10px;\n  margin-top: 6px;\n  margin-bottom: 6px;\n  margin-right: 6px;\n  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s,\n    transform 0.1s ease 0s, transform 0.1s ease 0s;\n  position: relative;\n  outline: currentcolor none medium;\n  color: #717171;\n  cursor: pointer;\n  &[aria-current='page'] {\n    color: #222222;\n  }\n  &:hover {\n    background: #f7f7f7 none repeat scroll 0% 0%;\n  }\n  &[aria-current='false']:focus {\n    transform: scale(0.9) !important;\n  }\n"]))),Fn=(0,c.zo)(p.E.nav)(gn||(gn=(0,i.Z)(["\n  display: flex;\n  margin: 10px 0 0;\n  margin-left: auto;\n  padding: ",";\n  height: ",";\n  flex-wrap: ",";\n  max-width: 613px;\n"])),(function(n){return n.$wrap?"0":"10px 0 0 10px"}),(function(n){return n.$wrap?"unset":"60px"}),(function(n){return n.$wrap?"wrap":"nowrap"})),Nn=function(n){var e=n.items,t=n.wrap,r=(0,l.Z)(n,zn),i=(0,W.useRouter)().asPath;return(0,h.jsx)(Fn,Pn(Pn({},r),{},{$wrap:t,children:e.map((function(n){var e=n.href,t=n.children,r=(0,l.Z)(n,$n);return(0,h.jsx)(Xn,Pn(Pn({href:e,"aria-current":e===i&&"page"},r),{},{children:t}),"link-".concat(e))}))}))},Gn=c.zo.div(Zn||(Zn=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  @media only screen and (max-width: ",") {\n    align-items: center;\n    width: 100%;\n  }\n"])),(function(n){return n.theme.breakpoints.large.breakpoint})),Rn=c.zo.div(Sn||(Sn=(0,i.Z)(["\n  margin: 0 0 50px;\n  padding: 0;\n  display: flex;\n  align-items: flex-end;\n  > div {\n    margin: 0;\n  }\n  @media only screen and (max-width: ",") {\n    margin-bottom: 30px;\n  }\n  @media only screen and (max-width: ",") {\n    margin-bottom: 20px;\n  }\n"])),(function(n){return n.theme.breakpoints.large.breakpoint}),(function(n){return n.theme.breakpoints.mini.breakpoint})),Yn=c.zo.div(_n||(_n=(0,i.Z)(["\n  padding-left: 10px;\n"]))),Bn=c.zo.div(Dn||(Dn=(0,i.Z)(["\n  display: flex;\n"]))),In=c.zo.div(Cn||(Cn=(0,i.Z)(["\n  padding-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  @media only screen and (max-width: ",") {\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n  }\n  @media only screen and (max-width: ",") {\n    padding: 0;\n  }\n"])),(function(n){return n.theme.breakpoints.large.breakpoint}),(function(n){return n.theme.breakpoints.mini.breakpoint})),Ln=(0,c.zo)(p.E.div)(Mn||(Mn=(0,i.Z)(["\n  margin-top: 40px;\n"]))),qn=1.3,Jn=c.zo.div(Hn||(Hn=(0,i.Z)(["\n  grid-area: sidebar;\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: row-reverse;\n  > div:last-of-type {\n    margin-left: 40px;\n  }\n  > div:first-of-type {\n    margin-left: 30px;\n    margin-right: 30px;\n  }\n  @media only screen and (max-width: ",") {\n    max-height: unset;\n    > div {\n      margin: 0 !important;\n      height: unset;\n    }\n    > div:first-of-type {\n      flex: 0 1 240px;\n    }\n    margin: 0;\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n"])),(function(n){return n.theme.breakpoints.large.breakpoint})),An=(0,c.zo)(p.E.div)(Tn||(Tn=(0,i.Z)(["\n  display: flex;\n  max-width: 585px;\n  @media only screen and (max-width: ",") {\n    flex-direction: column-reverse;\n  }\n"])),(function(n){return n.theme.breakpoints.mini.breakpoint})),Kn=(0,c.zo)(p.E.div)(Vn||(Vn=(0,i.Z)(["\n  @media only screen and (max-width: ",") {\n    margin-bottom: calc(40px + env(safe-area-inset-left, 0px));\n  }\n"])),(function(n){return n.theme.breakpoints.large.breakpoint})),Qn=(0,c.zo)(p.E.div)(Un||(Un=(0,i.Z)([""]))),ne=[{href:"/",shallow:!0,children:"Me"},{href:"/projects/",shallow:!0,children:"Projects"},{href:"/blog/",children:"Blog"}],ee=function(n){var e=n.projects,t=n.showHeader,r=(n.hasScrolled,(0,W.useRouter)()),i="/projects/"===(null===r||void 0===r?void 0:r.asPath);return(0,h.jsxs)(Jn,{children:[(0,h.jsx)(w,{}),(0,h.jsx)(Gn,{children:(0,h.jsxs)(In,{children:[(0,h.jsxs)(An,{initial:{x:-400,opacity:0},animate:{x:0,opacity:1},transition:{type:"spring",duration:.8,delay:3.3},children:[(0,h.jsx)(Z.Z,{as:p.E.div,fontSize:"62px",color:"#fe7255",lineHeight:"57px",paddingX:"0",initial:{color:"#fe6255"},animate:{color:"#c9c9c9"},textTransform:"lowercase",transition:{type:"spring",duration:.4,delay:4.1},children:"Software Developer"}),(0,h.jsx)(Nn,{items:ne,initial:{opacity:0},animate:{opacity:1},transition:{type:"spring",duration:.8,delay:4.3}})]}),(0,h.jsxs)(Rn,{as:"h1",children:[(0,h.jsxs)(Bn,{children:[(0,h.jsx)(P,{fontFamily:"Cantarell",fontSize:"53px",fontWeight:"700",letterSpacing:"-1.5px",color:"#27292b",as:p.E.div,initial:{opacity:0},animate:{opacity:1},transition:{type:"spring",duration:.8,delay:.5},children:"Hello"}),(0,h.jsxs)(P,{fontFamily:"Cantarell",fontSize:"53px",fontWeight:"700",letterSpacing:"-1.5px",color:"#27292b",as:p.E.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:qn},children:[", ","I","'","m"]})]}),(0,h.jsx)(Yn,{children:!t&&(0,h.jsx)(S.Z,{delay:qn,shallow:!0})})]}),(0,h.jsx)(Kn,{className:"slide-in",initial:{height:"0px",opacity:0},animate:{height:"368px",opacity:1},transition:{type:"spring",duration:.42,delay:4.2},children:(0,h.jsx)(d.M,{exitBeforeEnter:!0,children:(0,h.jsx)(Qn,{initial:{opacity:0,y:-100,x:0},animate:{opacity:1,y:0,x:0},exit:{opacity:0,y:0,x:-200},transition:{type:"spring",duration:.5,bounce:.3},children:i?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(Nn,{wrap:!0,items:e})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(On,{}),(0,h.jsx)(Ln,{children:(0,h.jsx)(U,{})})]})},r.asPath)})})]})})]})},te=c.zo.div(Wn||(Wn=(0,i.Z)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  @media only screen and (max-width: ",") {\n    justify-content: flex-start;\n    padding: 20px 20px 0;\n  }\n"])),(function(n){return n.theme.breakpoints.large.breakpoint})),re=function(n){var e=function(n){return n.map((function(n){var e=n.name,t=n.fullName;return{href:"/projects/".concat(e,"/"),children:t}}))}(n.repos||[]);return(0,h.jsxs)(te,{children:[(0,h.jsx)(a.Z,{}),(0,h.jsx)(ee,{projects:e})]})};re.nav=!1;var ie=!0,oe=re},9369:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[[...section]]",function(){return t(5868)}])}},function(n){n.O(0,[675,774,888,179],(function(){return e=9369,n(n.s=e);var e}));var e=n.O();_N_E=e}]);