(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[993],{638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=i.default,a={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(r(e,Promise)?a.loader=function(){return e}:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=o({},a,e)),(a=o({},a,t)).loadableGenerated&&delete(a=o({},a,a.loadableGenerated)).loadableGenerated,"boolean"==typeof a.ssr&&!a.suspense){if(!a.ssr)return delete a.ssr,l(n,a);delete a.ssr}return n(a)},t.noSSR=l;var o=n(6495).Z,a=n(2648).Z,i=(a(n(7294)),a(n(4302)));function l(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext(null);t.LoadableContext=r},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,o=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(6495).Z,i=(0,n(2648).Z)(n(7294)),l=n(6319),s=n(7294).useSyncExternalStore,u=[],c=[],d=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}var p=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"==typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},n.delay)),"number"==typeof n.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},n.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var n=function(){if(!h){var t=new p(e,f);h={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return h.promise()},r=function(){n();var e=i.default.useContext(l.LoadableContext);e&&Array.isArray(f.modules)&&f.modules.forEach(function(t){e(t)})},o=function(e,t){r();var n=s(h.subscribe,h.getCurrentValue,h.getCurrentValue);return i.default.useImperativeHandle(t,function(){return{retry:h.retry}},[]),i.default.useMemo(function(){var t;return n.loading||n.error?i.default.createElement(f.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:h.retry}):n.loaded?i.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null},[e,n])},u=function(e,t){return r(),i.default.createElement(f.lazy,a({},e,{ref:t}))},f=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);f.suspense&&(f.lazy=i.default.lazy(f.loader));var h=null;if(!d){var m=f.webpack?f.webpack():f.modules;m&&c.push(function(e){var t=!0,r=!1,o=void 0;try{for(var a,i=m[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var l=a.value;if(-1!==e.indexOf(l))return n()}}catch(s){r=!0,o=s}finally{try{t||null==i.return||i.return()}finally{if(r)throw o}}})}var v=f.suspense?u:o;return v.preload=function(){return n()},v.displayName="LoadableComponent",i.default.forwardRef(v)}(f,e)}function m(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then(function(){if(e.length)return m(e,t)})}h.preloadAll=function(){return new Promise(function(e,t){m(u).then(e,t)})},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(t){var n=function(){return d=!0,t()};m(c,e).then(n,n)})},window.__NEXT_PRELOADREADY=h.preloadReady,t.default=h},1316:function(e,t,n){"use strict";var r=n(5152),o=n.n(r)()(function(){return Promise.all([n.e(117),n.e(568)]).then(n.bind(n,5568))},{loadableGenerated:{webpack:function(){return[5568]}}});t.Z=o},7786:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(6042),o=n(9396),a=n(9534),i=n(5893),l=(0,n(2161).zo)("div",{position:"relative",pb:"24px"}),s=function(e){var t=e.children,n=(0,a.Z)(e,["children"]);return(0,i.jsx)(l,(0,o.Z)((0,r.Z)({},n),{children:t}))},u=n(4961),c=function(e){var t=e.children,n=e.title,l=(0,a.Z)(e,["children","title"]);return(0,i.jsxs)(s,(0,o.Z)((0,r.Z)({},l),{children:[(0,i.jsx)(u.Z,{title:n}),t]}))}},4961:function(e,t,n){"use strict";var r=n(5893);n(7294);var o=n(9008),a=n.n(o),i=function(e){var t="https://og.jaxs.onl",n="".concat(t,"/jvd.png");return"".concat(t,"/**").concat(e,"**.png?&md=1&images=").concat(n,"&widths=").concat(300,"&heights=").concat(300)},l="Jaxson Van Doorn",s="https://jaxs.onl",u={title:l,siteUrl:s,author:l,description:"All-around developer, half-designer and tinkerer.",repo:"https://github.com/woofers/woofers.github.io",social:{github:{name:"GitHub",link:"//github.com/woofers",handle:"woofers"},stackoverflow:{name:"Stack Overflow",link:"//stackoverflow.com/users/9129020/jvandoorn"},twitter:{name:"Twitter",link:"//twitter.com/jaxsonvandoorn",handle:"@jaxsonvandoorn"},linkedin:{name:"LinkedIn",link:"//www.linkedin.com/in/jaxson-van-doorn/"},email:{name:"Email",link:"mailto:hey@jaxs.onl"}},home:"/",resume:"".concat(s,"/resume/jaxsonvd-resume.pdf"),nav:{blog:"/blog/",about:"/about/"}},c=function(e){var t=e.description,n=e.meta,o=e.title,s=e.noIndex,c=t||u.description,d=o||u.title||"Jaxson Van Doorn",f=[{name:"description",content:c},{property:"og:title",content:d},{property:"og:description",content:c},{property:"og:type",content:"website"},{property:"og:image",content:i(d)},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l},{name:"twitter:title",content:d},{name:"twitter:description",content:c}].concat(n);return(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:d!==u.title?"".concat(d," | ").concat(u.title):d}),f.map(function(e){var t=e.name,n=e.property,o=e.content;return(0,r.jsx)("meta",{name:t,property:n,content:o},null!=t?t:n)}),(0,r.jsx)("link",{rel:"manifest",href:"/manifest.webmanifest",crossOrigin:"anonymous"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"32x32",href:"/icons/mask-32x32.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"48x48",href:"/icons/mask-48x48.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/icons/mask-72x72.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"96x96",href:"/icons/mask-96x96.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/icons/mask-144x144.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"192x192",href:"/icons/mask-192x192.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"256x256",href:"/icons/mask-256x256.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"384x384",href:"/icons/mask-384x384.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"512x512",href:"/icons/mask-512x512.png"}),s&&(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})]})};c.defaultProps={meta:[],description:"",title:"",noIndex:!1},t.Z=c},5152:function(e,t,n){e.exports=n(638)}}]);