(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4],{8946:function(e,t,n){var o;e.exports=(o=n(7294),function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,(function(t){return e[t]}).bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=o},function(e,t,n){"use strict";n.r(t);var o=n(0),l=n.n(o),r=["host","game","type"];function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var i=function(e){var t=e.host,n=e.game,o=e.type,i=function(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,r),s="".concat(t,"/").concat(n,"/badge.").concat(o),u=n.substring(n.indexOf("/")+1);return l.a.createElement("img",a({src:s,alt:"".concat(u," Ludum Dare results")},i))};i.defaultProps={host:"https://badges.jaxs.onl",type:"svg"},t.default=i}]))},1791:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[project]/play",function(){return n(4302)}])},4564:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.suspense=function(){let e=Error(o.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=o.NEXT_DYNAMIC_NO_SSR_CODE,e},t.NoSSR=function(e){let{children:t}=e;return t},(0,n(2648).Z)(n(7294));var o=n(2983)},7645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=r.default,l={loading:e=>{let{error:t,isLoading:n,pastDelay:o}=e;return null}};e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l=o({},l,e)),l=o({},l,t);let i=l.loader,s=()=>null!=i?i().then(a):Promise.resolve(a(()=>null));return l.loadableGenerated&&delete(l=o({},l,l.loadableGenerated)).loadableGenerated,"boolean"!=typeof l.ssr||l.ssr||(delete l.webpack,delete l.modules),n(o({},l,{loader:s}))};var o=n(6495).Z,l=n(2648).Z;l(n(7294));var r=l(n(4588));function a(e){return{default:(null==e?void 0:e.default)||e}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=(0,n(2648).Z)(n(7294));let l=o.default.createContext(null);t.LoadableContext=l},4588:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(6495).Z,l=(0,n(2648).Z)(n(7294)),r=n(4564),a=n(3644);let i=[],s=[],u=!1;function c(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function p(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,ssr:!0},t);n.lazy=l.default.lazy(n.loader);let o=null;function i(){if(!o){let t=new d(e,n);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!u){let e=n.webpack?n.webpack():n.modules;e&&s.push(t=>{for(let n of e)if(-1!==t.indexOf(n))return i()})}function c(e){!function(){i();let e=l.default.useContext(a.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let t=n.loading,o=l.default.createElement(t,{isLoading:!0,pastDelay:!0,error:null}),s=n.ssr?l.default.Fragment:r.NoSSR,u=n.lazy;return l.default.createElement(l.default.Suspense,{fallback:o},l.default.createElement(s,null,l.default.createElement(u,Object.assign({},e))))}return c.preload=()=>i(),c.displayName="LoadableComponent",c}(c,e)}function f(e,t){let n=[];for(;e.length;){let o=e.pop();n.push(o(t))}return Promise.all(n).then(()=>{if(e.length)return f(e,t)})}p.preloadAll=()=>new Promise((e,t)=>{f(i).then(e,t)}),p.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let n=()=>(u=!0,t());f(s,e).then(n,n)})},window.__NEXT_PRELOADREADY=p.preloadReady,t.default=p},1461:function(e,t,n){"use strict";var o=n(5152),l=n.n(o);let r=l()(()=>Promise.all([n.e(524),n.e(321)]).then(n.bind(n,321)),{loadableGenerated:{webpack:()=>[321]}});t.Z=r},1301:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=n(5893),l=n(2161);let r=(0,l.zo)("div",{position:"relative",pb:"24px"}),a=e=>{let{children:t,...n}=e;return(0,o.jsx)(r,{...n,children:t})};var i=n(9379);let s=e=>{let{children:t,title:n,...l}=e;return(0,o.jsxs)(a,{...l,children:[(0,o.jsx)(i.Z,{title:n}),t]})};var u=s},9379:function(e,t,n){"use strict";var o=n(5893);n(7294);var l=n(9008),r=n.n(l);let a=e=>{let t="https://og.jaxs.onl";return"".concat(t,"/**").concat(e,"**.png?&md=1&images=").concat("".concat(t,"/jvd.png"),"&widths=").concat(300,"&heights=").concat(300)},i="Jaxson Van Doorn",s="https://jaxs.onl",u={title:i,siteUrl:s,author:i,description:"All-around developer, half-designer and tinkerer.",repo:"https://github.com/woofers/woofers.github.io",social:{github:{name:"GitHub",link:"//github.com/woofers",handle:"woofers"},stackoverflow:{name:"Stack Overflow",link:"//stackoverflow.com/users/9129020/jvandoorn"},twitter:{name:"Twitter",link:"//twitter.com/jaxsonvandoorn",handle:"@jaxsonvandoorn"},linkedin:{name:"LinkedIn",link:"//www.linkedin.com/in/jaxson-van-doorn/"},email:{name:"Email",link:"mailto:hey@jaxs.onl"}},home:"/",resume:"".concat(s,"/resume/jaxsonvd-resume.pdf"),nav:{blog:"/blog/",about:"/about/"}},c=e=>{let{description:t,meta:n,title:l,noIndex:s}=e,c=t||u.description,d=l||u.title||"Jaxson Van Doorn",p=[{name:"description",content:c},{property:"og:title",content:d},{property:"og:description",content:c},{property:"og:type",content:"website"},{property:"og:image",content:a(d)},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i},{name:"twitter:title",content:d},{name:"twitter:description",content:c}].concat(n);return(0,o.jsxs)(r(),{children:[(0,o.jsx)("title",{children:d!==u.title?"".concat(d," | ").concat(u.title):d}),p.map(e=>{let{name:t,property:n,content:l}=e;return(0,o.jsx)("meta",{name:t,property:n,content:l},null!=t?t:n)}),(0,o.jsx)("link",{rel:"manifest",href:"/manifest.webmanifest",crossOrigin:"anonymous"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"32x32",href:"/icons/mask-32x32.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"48x48",href:"/icons/mask-48x48.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/icons/mask-72x72.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"96x96",href:"/icons/mask-96x96.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/icons/mask-144x144.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"192x192",href:"/icons/mask-192x192.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"256x256",href:"/icons/mask-256x256.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"384x384",href:"/icons/mask-384x384.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"512x512",href:"/icons/mask-512x512.png"}),s&&(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})]})};c.defaultProps={meta:[],description:"",title:"",noIndex:!1},t.Z=c},4302:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g},default:function(){return x}});var o=n(5893),l=n(1301);n(7294);var r=n(2161);let a=(0,r.zo)("iframe",{position:"absolute",top:0,left:0,width:"100%",height:"100%"}),i=(0,r.zo)("div",{textAlign:"center",margin:"2px 0 23px 0",position:"relative"}),s=e=>{let{aspectRatio:t,title:n,...l}=e;return(0,o.jsx)(i,{css:{color:"currentColor",paddingBottom:"".concat(100/t,"%")},children:(0,o.jsx)(a,{...l,title:n,frameBorder:"0",allowFullScreen:!0})})};s.defaultProps={aspectRatio:16/9};var u=n(2300),c=n.n(u);let d=(0,r.zo)(c(),{margin:"16px 0",".p8_menu_button":{display:"inline",button:{background:"#a49aa1"},"&:hover":{button:{background:"#6f666d"}}},".p8_menu_button img":{borderRadius:"0",maxWidth:"none"},"#p8_container":{"> button":{img:{marginBottom:"auto"},div:{br:"25px"}}},"#p8_playarea > div:last-of-type > div":{ml:0},"#canvas":{margin:"0 auto",br:"25px"},"#canvas + div":{display:"inline-block",marginLeft:"0",marginTop:"12.5px"}}),p=e=>{let{center:t=!0,...n}=e;return(0,o.jsx)(d,{...n,center:t})};var f=n(8946),m=n.n(f),_=n(1461);let w=(0,r.zo)("div",{variants:{orientation:{portrait:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(0px, 463px))",gridColumnGap:"50px",gridRowGap:"6px",justifyContent:"center"},landscape:{}}}}),h=e=>{let{portrait:t,lang:n,title:l,src:r,instruction:a,ludumDare:i,placeholder:u}=e,c="pico"===n;return(0,o.jsxs)(w,{orientation:t&&!c?"portrait":"landscape",children:[c?(0,o.jsx)(p,{src:r,placeholder:u}):(0,o.jsx)(s,{aspectRatio:t?9/16:16/9,title:l,src:r}),(0,o.jsx)(_.Z,{content:a}),i&&(0,o.jsx)(m(),{game:e.ludumDare})]})},b=e=>{let{project:t}=e,n=t.meta,{title:r,icon:a,landscape:i,lang:s,game:u,placeholder:c}=n;n.icon_mode,n.icon_type;let d=n.ludum_dare;return(0,o.jsx)(l.Z,{title:r,children:(0,o.jsx)(h,{title:r,src:u,portrait:"nil"===i,instruction:t.content,lang:s,ludumDare:d,placeholder:c})})};var g=!0,x=b},5152:function(e,t,n){e.exports=n(7645)},2300:function(e,t,n){{let t=n(5144),o={default:t.Pico8,Controls:t.Controls,Reset:t.Reset,Pause:t.Pause,Sound:t.Sound,Carts:t.Carts,Fullscreen:t.Fullscreen};Object.defineProperty(o,"__esModule",{value:!0}),e.exports=o}},5144:function(e,t,n){!function(e,t){var n=t&&"object"==typeof t&&"default"in t?t:{default:t};function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(r.apply(this,n));else if("object"===o){if(n.toString===Object.prototype.toString)for(var a in n)l.call(n,a)&&n[a]&&e.push(this&&this[a]||a);else e.push(n.toString())}}}return e.join(" ")}let a=r.bind({box:"_NxiT3",pointer:"_E8iY9",normal:"_QQ9pY",icon:"_Um5ym","icon-carts":"_QFSPl","icon-controls":"_2WDg5","icon-fullscreen":"_1Y9RU","icon-pause":"_rYHhP","icon-reset":"_77A5W","icon-sound":"_WvuDh"});var i=e=>{let{usePointer:t,onClick:o,button:l,title:r,onTitle:i,on:s,...u}=e,c=()=>"function"==typeof o,d=s?i:r||l;return n.default.createElement(e=>{let{children:l}=e;return c()?l:n.default.createElement("a",{className:a("box",{pointer:t,normal:!t}),role:"button",target:"_blank",rel:"noopener noreferrer",href:o,"aria-label":d},l)},null,n.default.createElement(e=>{let{children:l}=e;return c()?n.default.createElement("button",{className:a("box",{pointer:t,normal:!t}),onClick:c()?o:null,"aria-label":d},l):l},null,n.default.createElement("div",{className:a("icon","icon-"+l.toLowerCase())})," ",l))};let s=r.bind({left:"_CBihP",right:"_aX-Dt",menu:"_8Gj9f","button-enabled":"_sRrb5",pointer:"_uSeRX",normal:"_6fvhd",mask:"_BUsHk","mask-selected":"_0BIBJ","icon-carts":"_xlXTt","icon-controls":"_9ESXJ","icon-fullscreen":"_9yD0Y","icon-pause0":"_nXbpl","icon-pause1":"_4Slq-","icon-reset":"_J7p3p","icon-sound0":"_CYPog","icon-sound":"_-naTm","icon-sound1":"_ZLgwy","icon-close":"_T-2mW"});var u=e=>{let t=e.button.toLowerCase()+(e.onTitle?e.on?"1":"0":"");if(e.hidden)return null;let l=e=>{let{disabled:t,onClick:l,...r}=e;return t?n.default.createElement("div",r,e.children):"function"==typeof e.onClick?n.default.createElement("div",o({onClick:l},r),e.children):n.default.createElement("a",o({role:"button",target:"_blank",rel:"noopener noreferrer",href:l},r),e.children)};return n.default.createElement(l,{disabled:e.disabled,title:e.on?e.onTitle:e.title,className:s("menu",{left:"left"===e.align,right:"right"===e.align,pointer:e.usePointer,normal:!e.usePointer})+" p8_menu_button",onClick:e.onClick},n.default.createElement("button",{disabled:e.disabled,className:s("mask","icon-"+t,{"mask-selected":e.selected,"button-enabled":!e.disabled})}))};let c=e=>n.default.createElement(e.legacyButtons?i:u,e),d=e=>n.default.createElement(c,o({},e,{button:"Reset",title:"Reset",onClick:e.reset})),p=e=>n.default.createElement(c,o({button:"Pause",onTitle:"Play",title:"Pause"},e,{onClick:e.pause,on:e.isPaused})),f=e=>n.default.createElement(c,o({button:"Fullscreen",title:"Go Fullscreen"},e,{onClick:e.fullscreen})),m=e=>n.default.createElement(c,o({button:"Sound",onTitle:"Mute",title:"Unmute"},e,{onClick:e.sound,on:!e.isMuted})),_=e=>n.default.createElement(c,o({},e,{button:"Carts",title:"More Carts",onClick:"http://www.lexaloffle.com/bbs/?cat=7&sub=2"})),w=e=>n.default.createElement(c,o({button:"Controls",title:"Controls"},e,{onClick:e.controls})),h=e=>n.default.createElement(n.default.Fragment,null,n.default.createElement(d,e),n.default.createElement(p,e),n.default.createElement(f,e),n.default.createElement(m,e),n.default.createElement(_,e),n.default.createElement(w,e)),b=e=>n.default.createElement(n.default.Fragment,null,n.default.createElement(w,e),n.default.createElement(p,e),n.default.createElement(m,e),n.default.createElement(f,e)),g=e=>n.default.createElement(e.legacyButtons?h:b,e);var x={box:"_qMiAj",img:"_CfVz3",center:"_rDVKx",pointer:"_zhnpw",normal:"_6jjhl"};let y=r.bind(x);var v=e=>{let{onClick:t,placeholder:o,usePointer:l,center:r,...a}=e;return n.default.createElement("button",{className:y("box",{center:r,pointer:l,normal:!l}),title:"Start Game",style:{background:o?"rgba(0, 0, 0, 0) url("+o+") no-repeat scroll 0% 0% / cover":"#000"},onClick:t,type:"button"},n.default.createElement("div",{className:x.img}))};let k=e=>e.toUpperCase().charCodeAt(0),E=[k("\r"),k("	"),k(" "),k("x"),k("z"),k("m"),k("r"),k("c"),k("v"),k("s"),k("f"),k("e"),k("d"),k("q"),k("w"),k("p")].concat([37,38,39,40]),C=e=>{E.indexOf(e.keyCode)>-1&&e.preventDefault()},j=r.bind({fullscreen:"_JcDUc",normal:"_BsPp-",canvas:"_kXWCq",none:"_GpXPA",center:"_JoK6F",margin:"_gAzLx"});var P=e=>n.default.createElement("div",{className:j({center:e.fullscreen||e.center,margin:e.center&&!e.legacyButtons&&!e.isFullscreen})},n.default.createElement("canvas",{className:j("canvas",{fullscreen:e.fullscreen,normal:!e.fullscreen,none:e.hasStarted&&e.hideCursor})+" emscripten",id:"canvas",onContextMenu:e=>e.preventDefault(),onKeyDown:C,tabIndex:"-1"}),e.children);let S=()=>{window.p8_autoplay=!1,window.pico8_state=[],window.pico8_buttons=[0,0,0,0,0,0,0,0],window.pico8_gamepads={count:0},window.pico8_mouse=[0,0,0],window.pico8_gpio=Array(128),window.p8_touch_detected=!1,window.Module={canvas:document.getElementById("canvas")},window.p8_is_running=!1,window.p8_script&&document.body.removeChild(window.p8_script),window.p8_script=null,window.pico8_audio_context&&window.pico8_audio_context.close(),window.pico8_audio_context=null},O=e=>window.p8_touch_detected=!0,T=(e,t,n)=>{window.addEventListener(e,t,n)},N=(e,t,n)=>{window.removeEventListener(e,t,n)};var A={hide:"_wk9CD",none:"_fiZQI","mobile-header":"_ld3F6",stack:"_sOepT",inline:"_rNdOG",center:"_pcXQn"};let R=r.bind(A),M=e=>{let{className:o,css:l,...r}=e,[a,i]=t.useState(!0),[s,c]=t.useState(!1),d=e=>{c(e),e&&setTimeout(F,100)},[p,f]=t.useState(!0),[m,_]=t.useState(!1),[w,h]=t.useState(!1),b=()=>window.p8_run_cart(r.src);t.useEffect(()=>{var e,t;t=w&&r.blockKeys,N("keydown",C,e={passive:!1}),t&&T("keydown",C,e)});let x=()=>{s||d(!0)};t.useEffect(()=>(S(),window.addEventListener("touchstart",O,{passive:!0}),window.p8_create_audio_context=()=>{window.pico8_audio_context?window.pico8_audio_context.resume():(window.webAudioAPI=window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.oAudioContext||window.msAudioContext,window.webAudioAPI&&(window.pico8_audio_context=new webAudioAPI,window.pico8_audio_context&&(window.source_sfx=pico8_audio_context.createBufferSource(),window.source_sfx.buffer=pico8_audio_context.createBuffer(1,1,22050),window.source_sfx.connect(pico8_audio_context.destination),window.source_sfx.start(1,Math.min(window.source_sfx.buffer.duration,.25)))))},window.p8_close_cart=()=>{window.p8_is_running=!1,window.p8_touch_detected=!1,window.Module.pico8SetPaused(1)},window.p8_run_cart=e=>{window.p8_is_running||(window.p8_is_running=!0,window.p8_create_audio_context(),window.p8_script=document.createElement("script"),window.p8_script.type="application/javascript",window.p8_script.src=e,document.body.appendChild(window.p8_script),window.p8_touch_detected&&(window.location.hash="#playing",window.onhashchange=()=>{0>window.location.hash.search("playing")&&window.p8_close_cart()}))},r.autoPlay&&(()=>{var e;let t=("undefined"!=typeof window&&(e=window.AudioContext||window.webkitAudioContext),e?new e:{});t.onstatechange=()=>{"running"==t.state&&(i(!1),f(!1),h(!0),b(),t.close())}})(),T("keydown",k,{passive:!1}),T("touchstart",x,{passive:!0}),T("webkitfullscreenchange",y,!1),T("mozfullscreenchange",y,!1),T("fullscreenchange",y,!1),T("MSFullscreenChange",y,!1),()=>{window.removeEventListener("touchstart",O,{passive:!0}),S(),N("keydown",k,{passive:!1}),N("touchstart",x,{passive:!0}),N("webkitfullscreenchange",y,!1),N("mozfullscreenchange",y,!1),N("fullscreenchange",y,!1),N("MSFullscreenChange",y,!1),N("keydown",C,{passive:!1})}),[]);let y=e=>{(e=>{let t=[document.webkitIsFullScreen,document.mozFullScreen,document.msFullscreenElement,document.fullscreenElement];for(let e of t)if(!1===e)return void _(!1)})()},k=e=>{E.indexOf(e.keyCode)>-1&&j()},j=()=>{setTimeout(()=>f(!!window.pico8_state.is_paused),120)},M=()=>{i(!a),window.p8_create_audio_context(),window.Module.pico8ToggleSound()},F=()=>{var e;_(!0),(e=D.current).requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):e.msRequestFullScreen&&e.msRequestFullScreen()},z=()=>{window.Module.pico8TogglePaused(),j()},D=t.useRef(),{usePointer:B,legacyButtons:L}=r,I=e=>{let t=r.children;return!t||t.length<=0?n.default.createElement(g,e):n.default.Children.map(t,t=>n.default.cloneElement(t,e))};return n.default.createElement("div",{css:l,className:o,style:r.style},n.default.createElement("canvas",{className:A.hide}),n.default.createElement("div",{id:"p8_container"},w?null:n.default.createElement(v,{center:r.center,placeholder:r.placeholder,onClick:()=>{w||(i(!1),f(!1),h(!0),b(),window.p8_create_audio_context())},usePointer:r.usePointer}),n.default.createElement("div",{ref:D,id:"p8_playarea",className:R({hide:!w,none:!w})},n.default.createElement("div",{id:"menu_buttons_touch",className:A["mobile-header"]},n.default.createElement(u,{align:"left",button:"Sound",onTitle:"Mute",title:"Unmute",on:!a,onClick:M,hidden:!s||!m}),n.default.createElement(u,{align:"right",button:"Close",title:"Close",onClick:()=>{h(!1),i(!1),f(!1),d(!1),window.p8_close_cart()},hidden:!s||!m})),n.default.createElement("div",null,n.default.createElement(P,{legacyButtons:r.legacyButtons,center:r.center,fullscreen:s&&m||m,hasStarted:w,hideCursor:r.hideCursor},s||m||!w?null:n.default.createElement("div",{className:R({stack:!r.legacyButtons,inline:r.legacyButtons,center:r.legacyButtons&&r.center})},n.default.createElement(I,{usePointer:B,legacyButtons:L,isPaused:p,isMuted:a,pause:z,fullscreen:F,sound:M,controls:()=>{window.Module.pico8ToggleControlMenu(),j()},reset:()=>{p&&r.unpauseOnReset&&z(),setTimeout(window.Module.pico8Reset,20)}})))))))};M.defaultProps={autoPlay:!0,legacyButtons:!1,placeholder:"",hideCursor:!1,center:!1,blockKeys:!1,usePointer:!0,unpauseOnReset:!0},e.Carts=_,e.Controls=w,e.Fullscreen=f,e.Pause=p,e.Pico8=M,e.Reset=d,e.Sound=m}(t,n(7294))}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1791)}),_N_E=e.O()}]);