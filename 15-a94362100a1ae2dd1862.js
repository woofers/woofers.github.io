(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1273:function(t,e,r){"use strict";r(22),r(37),r(62),r(34),r(9),r(27),r(32),Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=function(t,e,r){for(var n=!0;n;){var o=t,u=e,i=r;n=!1,null===o&&(o=Function.prototype);var a=Object.getOwnPropertyDescriptor(o,u);if(void 0!==a){if("value"in a)return a.value;var c=a.get;if(void 0===c)return;return c.call(i)}var s=Object.getPrototypeOf(o);if(null===s)return;t=s,e=u,r=i,n=!0,a=s=void 0}};var i=r(0),a=r(2),c=r(1274),s=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),u(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t);var r=this.props,n=r.items,o=r.random;this.state={index:o?Math.floor(Math.random()*Math.floor(n.length)):0,output:"",substrLength:0},this.timeouts=[]}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i.Component),o(e,[{key:"componentDidMount",value:function(){this._animate.bind(this)()}},{key:"componentWillUnmount",value:function(){this.timeouts.map(function(t){return clearTimeout(t)})}},{key:"_loop",value:function(t,e){var r=setTimeout(t,e);this.timeouts.push(r);this.timeouts.length>100&&(clearTimeout(this.timeouts[0]),this.timeouts.shift())}},{key:"_type",value:function(t,e){var r=this.state.output,n=this.props.typingInterval,o=this._type.bind(this,t,e),u=c(t);this.setState({output:u.slice(0,c(r).length+1).join("")}),r.length<u.length?this._loop(o,n):e()}},{key:"_erase",value:function(t){var e=this.state.output,r=this.props.deletingInterval,n=this._erase.bind(this,t),o=c(e);this.setState({output:o.slice(0,o.length-1).join("")}),0!==o.length?this._loop(n,r):t()}},{key:"_overwrite",value:function(t,e){var r=this.state,n=r.output,o=r.substrLength,u=this.props.deletingInterval,i=this._overwrite.bind(this,t,e),a=c(t),s=c(n);this.setState({output:a.slice(0,o).concat(s.slice(o)),substrLength:o+1}),a.length!==o?this._loop(i,u):(this.setState({output:t,substrLength:0}),e())}},{key:"_animate",value:function(){var t=this,e=this.state.index,r=this.props,n=r.items,o=r.pause,u=r.emptyPause,i=r.eraseMode,a=r.random,c=this._type,s=this._erase,f=this._overwrite,l=this._animate.bind(this),p=void 0;p=a?Math.floor(Math.random()*Math.floor(n.length)):e===n.length-1?0:e+1;var h=function(){t.setState({index:p}),t._loop(l,u)};c.bind(this)(n[e],function(){"overwrite"===i?t._loop(f.bind(t,n[p],h),o):t._loop(s.bind(t,h),o)})}},{key:"render",value:function(){var t=this.props,e=t.color,r=t.cursor,o=(t.deletingInterval,t.emptyPause,t.items,t.pause,t.eraseMode,t.typingInterval,t.random,function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}(t,["color","cursor","deletingInterval","emptyPause","items","pause","eraseMode","typingInterval","random"]));return i.createElement("span",n({style:{color:e}},o,{"aria-label":this.props.items[this.state.index]}),this.state.output,r?i.createElement("span",{className:"react-rotating-text-cursor"},"|"):null)}}]),e}();s.propTypes={color:a.string,cursor:a.bool,deletingInterval:a.number,emptyPause:a.number,eraseMode:a.string,items:a.array,pause:a.number,typingInterval:a.number,random:a.bool},s.defaultProps={color:"inherit",cursor:!0,deletingInterval:50,emptyPause:1e3,eraseMode:"erase",items:["first","second","third","fourth","fifth"],pause:1500,typingInterval:50,random:!1},e.default=s,t.exports=e.default},1274:function(t,e,r){(function(e){r(21),r(15),r(10),r(5),r(7),r(48),r(14),r(26),r(33),r(4),r(23),r(58);var n=9007199254740991,o="[object Arguments]",u="[object Function]",i="[object GeneratorFunction]",a="[object Map]",c="[object Set]",s="[object String]",f=/^\[object .+?Constructor\]$/,l=/^(?:0|[1-9]\d*)$/,p="[\\ud800-\\udfff]",h="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",v="\\ud83c[\\udffb-\\udfff]",d="[^\\ud800-\\udfff]",y="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",m="(?:"+h+"|"+v+")"+"?",g="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+[d,y,b].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),j="(?:"+[d+h+"?",h,y,b,p].join("|")+")",O=RegExp(v+"(?="+v+")|"+j+g,"g"),_=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),w="object"==typeof e&&e&&e.Object===Object&&e,P="object"==typeof self&&self&&self.Object===Object&&self,M=w||P||Function("return this")();function k(t,e){return function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(e,function(e){return t[e]})}function S(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function x(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}function I(t){return function(t){return _.test(t)}(t)?function(t){return t.match(O)||[]}(t):function(t){return t.split("")}(t)}var E,A,T,$=Function.prototype,D=Object.prototype,F=M["__core-js_shared__"],L=(E=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||""))?"Symbol(src)_1."+E:"",R=$.toString,W=D.hasOwnProperty,C=D.toString,V=RegExp("^"+R.call(W).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),z=M.Symbol,J=z?z.iterator:void 0,B=D.propertyIsEnumerable,G=(A=Object.keys,T=Object,function(t){return A(T(t))}),N=ot(M,"DataView"),U=ot(M,"Map"),q=ot(M,"Promise"),H=ot(M,"Set"),K=ot(M,"WeakMap"),Q=at(N),X=at(U),Y=at(q),Z=at(H),tt=at(K);function et(t,e){var r=ct(t)||function(t){return function(t){return pt(t)&&st(t)}(t)&&W.call(t,"callee")&&(!B.call(t,"callee")||C.call(t)==o)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,u=!!n;for(var i in t)!e&&!W.call(t,i)||u&&("length"==i||it(i,n))||r.push(i);return r}function rt(t){return!(!lt(t)||(e=t,L&&L in e))&&(ft(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(r){}return e}(t)?V:f).test(at(t));var e}function nt(t){if(r=(e=t)&&e.constructor,n="function"==typeof r&&r.prototype||D,e!==n)return G(t);var e,r,n,o=[];for(var u in Object(t))W.call(t,u)&&"constructor"!=u&&o.push(u);return o}function ot(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return rt(r)?r:void 0}var ut=function(t){return C.call(t)};function it(t,e){return!!(e=null==e?n:e)&&("number"==typeof t||l.test(t))&&t>-1&&t%1==0&&t<e}function at(t){if(null!=t){try{return R.call(t)}catch(e){}try{return t+""}catch(e){}}return""}(N&&"[object DataView]"!=ut(new N(new ArrayBuffer(1)))||U&&ut(new U)!=a||q&&"[object Promise]"!=ut(q.resolve())||H&&ut(new H)!=c||K&&"[object WeakMap]"!=ut(new K))&&(ut=function(t){var e=C.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?at(r):void 0;if(n)switch(n){case Q:return"[object DataView]";case X:return a;case Y:return"[object Promise]";case Z:return c;case tt:return"[object WeakMap]"}return e});var ct=Array.isArray;function st(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!ft(t)}function ft(t){var e=lt(t)?C.call(t):"";return e==u||e==i}function lt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function pt(t){return!!t&&"object"==typeof t}function ht(t){return t?k(t,function(t){return st(t)?et(t):nt(t)}(t)):[]}t.exports=function(t){if(!t)return[];if(st(t))return function(t){return"string"==typeof t||!ct(t)&&pt(t)&&C.call(t)==s}(t)?I(t):function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(t);if(J&&t[J])return function(t){for(var e,r=[];!(e=t.next()).done;)r.push(e.value);return r}(t[J]());var e=ut(t);return(e==a?S:e==c?x:ht)(t)}}).call(this,r(42))}}]);
//# sourceMappingURL=15-a94362100a1ae2dd1862.js.map