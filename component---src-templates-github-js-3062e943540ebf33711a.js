(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{261:function(s,i,r){"use strict";r.r(i);var m=r(1),n=r(0),e=r(295),t=r(296),p=r(270),j=r(394),a=(r(7),r(670)),c=r.n(a),o=r(1046),l=r.n(o),u=r(1061),f=r(276),b=r(313),d=r(264),g=r.n(d),h=r(315),v=Object(m.css)("img{",h.a,";}"),x=function(s){var i,r,n;return Object(m.jsx)("div",{css:v},Object(m.jsx)(f.a,{html:(i=s.content,r=Object(u.parse)(i),n=c()(r,{highlight:!0,handlers:{link:function(i,r){var m=r.uri,n=r.desc,e={href:m.raw};return"file"===m.protocol?(m.raw=Object(b.a)(m.raw,s.repo.name),i(r,"img",{src:m.raw,alt:n})):i(r,"a",e,[g()("text",n)])}}}),l()(n,{allowDangerousHTML:!0}))}))},y=r(318),O=r(132),k=r(36),w=r(449),q=r.n(w),N=r(319),A=r(360);r.d(i,"pageQuery",function(){return _});var S=function(s){var i,r;function n(){return s.apply(this,arguments)||this}return r=s,(i=n).prototype=Object.create(r.prototype),i.prototype.constructor=i,i.__proto__=r,n.prototype.render=function(){var s=this.props.data.repositories,i=this.props.data.site.siteMetadata.exclude;Object(y.a)([{node:s}],i);var r=q()(s.readme,"text"),n=q()(s.readmeOrg,"text"),a=[{name:"Projects",link:this.props.data.site.siteMetadata.nav.projects},{name:s.fullName}];return Object(m.jsx)(p.a,{title:s.fullName,site:this.props.data.site.siteMetadata.title},Object(m.jsx)(e.a,{links:a}),Object(m.jsx)(t.a,{title:s.fullName}),Object(m.jsx)(N.a,{href:s.url},Object(m.jsx)(O.a,{icon:k.a})," View on GitHub"),s.homepage?Object(m.jsx)(A.a,{inline:!1,href:s.homepage,type:Object(y.b)(s)}):null,n&&!r?Object(m.jsx)(x,{content:n,repo:s}):Object(m.jsx)(j.a,{content:r,repo:s,filters:[j.c]}))},n}(n.Component),_=(i.default=S,"3651136550")},270:function(s,i,r){"use strict";var m=r(1),n=(r(0),r(103)),e=r.n(n),t=function(s){return Object(m.jsx)("div",null,Object(m.jsx)(e.a,null,Object(m.jsx)("meta",{property:"og:title",content:s.title}),Object(m.jsx)("title",null,(i=s.title,r=s.site,i?i+" - "+r:r))),s.children);var i,r};r.d(i,"a",function(){return p});var p=function(s){return Object(m.jsx)(t,{title:s.title,site:s.site},Object(m.jsx)("article",null,s.children))}},276:function(s,i,r){"use strict";r.d(i,"a",function(){return e});r(131);var m=r(1),n=(r(0),{name:"6d63t",styles:"div:first-of-type h1{display:none;}"}),e=function(s){var i=n;return Object(m.jsx)("div",{css:function(r){return Object(m.css)(s.hideTitle?i:""," div{margin-bottom:",r.margins.small,";text-align:'left';}")},dangerouslySetInnerHTML:{__html:s.html}})}},295:function(s,i,r){"use strict";r.d(i,"a",function(){return l});r(82),r(7);var m=r(1),n=(r(0),r(44)),e=r(132),t=r(18),p={name:"in3yi3",styles:"font-weight:bold;"},j=function(s){return Object(m.css)("color:",s.colors.text,";")},a={name:"1mp6ni1",styles:"margin:0 7px;"},c=function(s){return a},o=function(s){return Object(m.jsx)(e.a,{css:c,icon:s.icon?s.icon:t.g})},l=function(s){var i=s.links.length;return Object(m.jsx)("nav",{"aria-label":"breadcrumbs",css:j},s.links?s.links.map(function(r,e){var t=r.name,j=r.link;return i<=e+1?Object(m.jsx)("span",{css:p,key:e,"aria-current":"page"},t):Object(m.jsx)("span",{key:e},Object(m.jsx)(n.Link,{to:j},t),Object(m.jsx)(o,{icon:s.separator}))}):null)}},296:function(s,i,r){"use strict";r.d(i,"a",function(){return e});var m=r(1),n=(r(0),{name:"1q7j8z9",styles:"border-radius:0 !important;"}),e=function(s){var i=n;return Object(m.jsx)("div",{style:{textAlign:"right"}},s.title?Object(m.jsx)("div",null,Object(m.jsx)("h1",{css:function(i){return Object(m.css)("display:",s.icon?"inline":"block",";margin:",i.margins.extraSmall," 0;")}},s.title),s.icon?Object(m.jsx)("img",{css:function(r){return Object(m.css)("normal"===s.icon.type?i:""," margin-left:10px;image-rendering:",s.icon.mode,";")},width:"55px",height:"55px",src:s.icon.image,"aria-hidden":"true",alt:""}):null):null,s.date?Object(m.jsx)("p",null,s.date):null)}},313:function(s,i,r){"use strict";r.d(i,"a",function(){return m});r(8);var m=function(s,i){return n(s,"//raw.githubusercontent.com/woofers/"+i+"/master/")},n=function(s,i){var r=/^\.\//g;return r.test(s)&&(s=s.replace(r,i)),s}},315:function(s,i,r){"use strict";r.d(i,"a",function(){return m});r(1);var m={name:"1grcuz6",styles:"display:block;margin-right:auto;margin-left:auto;"}},318:function(s,i,r){"use strict";r.d(i,"a",function(){return n}),r.d(i,"b",function(){return e});r(105),r(106),r(7),r(38),r(24),r(5);var m=r(145),n=function(s,i){var r={},n=i,e=Array.isArray(n),t=0;for(n=e?n:n[Symbol.iterator]();;){var p;if(e){if(t>=n.length)break;p=n[t++]}else{if((t=n.next()).done)break;p=t.value}var j=p;r[j[0]]=j[1]}var a,c=s,o=Array.isArray(c),l=0;for(c=o?c:c[Symbol.iterator]();;){var u;if(o){if(l>=c.length)break;u=c[l++]}else{if((l=c.next()).done)break;u=l.value}var f=u.node;f.fullName=(a=f.name,r[a]?r[a]:r.hasOwnProperty(a)?"":Object(m.a)(a))}},e=function(s){var i=s.topics;if(i){if((i=(i=i.nodes).map(function(s){return s.topic.name})).includes("game"))return"game";if(i.includes("react"))return"react";if(i.includes("resume"))return"resume"}return"no type"}},319:function(s,i,r){"use strict";var m=r(1),n=(r(0),r(134)),e=r(69),t=function(s){return Object(m.css)("text-align:right;margin-bottom:",s.margins.extraSmall,";")},p=function(s){return s.inline?Object(m.jsx)("span",{css:t},s.children):Object(m.jsx)("div",{css:t},s.children)};i.a=Object(e.b)(function(s){return Object(m.jsx)(p,{inline:s.inline},Object(m.jsx)(n.a,{style:s.style,to:s.href},s.children))})},360:function(s,i,r){"use strict";var m=r(1),n=(r(0),r(132)),e=r(18),t=r(136),p=r(319),j=function(s){return s.inline?Object(m.jsx)(t.a,s,s.children):Object(m.jsx)(p.a,s,s.children)},a=function(s){return"game"===s.type?Object(m.jsx)(j,s,Object(m.jsx)(n.a,{icon:e.l})," Play"):"react"===s.type?Object(m.jsx)(j,s,Object(m.jsx)(n.a,{icon:e.l})," View Demo"):"resume"===s.type?Object(m.jsx)(j,s,Object(m.jsx)(n.a,{icon:e.m})," View Resume"):Object(m.jsx)(j,s,Object(m.jsx)(n.a,{icon:e.l})," View Site")};a.defaultProps={inline:!0},i.a=a},394:function(s,i,r){"use strict";r(38),r(24),r(5),r(7);var m=r(1),n=r(0),e=r(395),t=r.n(e),p=r(415),j=r.n(p),a=r(264),c=r.n(a),o=r(282),l=r.n(o),u=r(436),f=r.n(u),b=r(437),d=r(313),g=(r(314),r(357),function(s){var i=Object(n.useRef)();return Object(n.useEffect)(function(){var s=function(){return i.current.children[0]};s().className&&window.Prism.highlightElement(s(),!1),i.current.removeAttribute("class")}),Object(m.jsx)("pre",{ref:i},s.children)}),h=r(315),v=r(352),x=r(143),y=r.n(x),O=r(134);r.d(i,"b",function(){return w}),r.d(i,"c",function(){return q}),r.d(i,"a",function(){return N});var k=y()(v,{attributes:{"*":["className","type"]}}),w=function(){return function(s){var i=Object(b.select)("image",s);return i||c()("paragraph","")}},q=function(){return function(s){return f()(s,function(s){var i=s.children?s.children[0]:"";return!("link"===s.type&&i&&"image"===i.type)})}},N=function(s){var i=Object(m.css)("img:last-child{",h.a,";}img ~ img{display:inline !important;}");return Object(m.jsx)("div",{css:function(r){return Object(m.css)("h1:first-of-type{display:none;}p img{@media screen and (min-width:1000px){margin-right:",r.margins.large,";}margin-bottom:",r.margins.normal,";}",s.centerImages?i:"")}},function(){var i=t()().use(j.a,{remarkReactComponents:{pre:g,a:function(s){return Object(m.jsx)(O.a,{to:s.href},s.children)}},sanitize:k});i=i.use(function(){return function(i){i=i||{};var r=function(r){var m=function(s){r.title=s,r.alt=s};/^\.\//g.test(r.url)&&(r.url=Object(d.a)(r.url,s.repo.name)),i.alt?m(i.alt):r.title&&"image"===r.type&&m(s.repo.fullName+" "+r.title)};return function(s){return l()(s,["image","link","linkReference"],r)}}({alt:s.alt})});var r=s.filters,n=Array.isArray(r),e=0;for(r=n?r:r[Symbol.iterator]();;){var p;if(n){if(e>=r.length)break;p=r[e++]}else{if((e=r.next()).done)break;p=e.value}var a=p;i=i.use(a)}return i.processSync(s.content).contents}())};N.defaultProps={filters:[],centerImages:!0}},679:function(s,i,r){var m={"./prism-abap.js":680,"./prism-abap.min.js":681,"./prism-abnf.js":682,"./prism-abnf.min.js":683,"./prism-actionscript.js":684,"./prism-actionscript.min.js":685,"./prism-ada.js":686,"./prism-ada.min.js":687,"./prism-apacheconf.js":688,"./prism-apacheconf.min.js":689,"./prism-apl.js":690,"./prism-apl.min.js":691,"./prism-applescript.js":692,"./prism-applescript.min.js":693,"./prism-arduino.js":694,"./prism-arduino.min.js":695,"./prism-arff.js":696,"./prism-arff.min.js":697,"./prism-asciidoc.js":698,"./prism-asciidoc.min.js":699,"./prism-asm6502.js":700,"./prism-asm6502.min.js":701,"./prism-aspnet.js":702,"./prism-aspnet.min.js":703,"./prism-autohotkey.js":704,"./prism-autohotkey.min.js":705,"./prism-autoit.js":706,"./prism-autoit.min.js":707,"./prism-bash.js":708,"./prism-bash.min.js":709,"./prism-basic.js":710,"./prism-basic.min.js":711,"./prism-batch.js":712,"./prism-batch.min.js":713,"./prism-bison.js":714,"./prism-bison.min.js":715,"./prism-bnf.js":716,"./prism-bnf.min.js":717,"./prism-brainfuck.js":718,"./prism-brainfuck.min.js":719,"./prism-bro.js":720,"./prism-bro.min.js":721,"./prism-c.js":722,"./prism-c.min.js":723,"./prism-cil.js":724,"./prism-cil.min.js":725,"./prism-clike.js":726,"./prism-clike.min.js":727,"./prism-clojure.js":728,"./prism-clojure.min.js":729,"./prism-cmake.js":730,"./prism-cmake.min.js":731,"./prism-coffeescript.js":732,"./prism-coffeescript.min.js":733,"./prism-core.js":734,"./prism-core.min.js":735,"./prism-cpp.js":736,"./prism-cpp.min.js":737,"./prism-crystal.js":738,"./prism-crystal.min.js":739,"./prism-csharp.js":740,"./prism-csharp.min.js":741,"./prism-csp.js":742,"./prism-csp.min.js":743,"./prism-css-extras.js":744,"./prism-css-extras.min.js":745,"./prism-css.js":746,"./prism-css.min.js":747,"./prism-d.js":748,"./prism-d.min.js":749,"./prism-dart.js":750,"./prism-dart.min.js":751,"./prism-diff.js":752,"./prism-diff.min.js":753,"./prism-django.js":754,"./prism-django.min.js":755,"./prism-docker.js":756,"./prism-docker.min.js":757,"./prism-ebnf.js":758,"./prism-ebnf.min.js":759,"./prism-eiffel.js":760,"./prism-eiffel.min.js":761,"./prism-ejs.js":762,"./prism-ejs.min.js":763,"./prism-elixir.js":764,"./prism-elixir.min.js":765,"./prism-elm.js":766,"./prism-elm.min.js":767,"./prism-erb.js":768,"./prism-erb.min.js":769,"./prism-erlang.js":770,"./prism-erlang.min.js":771,"./prism-flow.js":772,"./prism-flow.min.js":773,"./prism-fortran.js":774,"./prism-fortran.min.js":775,"./prism-fsharp.js":776,"./prism-fsharp.min.js":777,"./prism-gcode.js":778,"./prism-gcode.min.js":779,"./prism-gedcom.js":780,"./prism-gedcom.min.js":781,"./prism-gherkin.js":782,"./prism-gherkin.min.js":783,"./prism-git.js":784,"./prism-git.min.js":785,"./prism-glsl.js":786,"./prism-glsl.min.js":787,"./prism-gml.js":788,"./prism-gml.min.js":789,"./prism-go.js":790,"./prism-go.min.js":791,"./prism-graphql.js":792,"./prism-graphql.min.js":793,"./prism-groovy.js":794,"./prism-groovy.min.js":795,"./prism-haml.js":796,"./prism-haml.min.js":797,"./prism-handlebars.js":798,"./prism-handlebars.min.js":799,"./prism-haskell.js":800,"./prism-haskell.min.js":801,"./prism-haxe.js":802,"./prism-haxe.min.js":803,"./prism-hcl.js":804,"./prism-hcl.min.js":805,"./prism-hpkp.js":806,"./prism-hpkp.min.js":807,"./prism-hsts.js":808,"./prism-hsts.min.js":809,"./prism-http.js":810,"./prism-http.min.js":811,"./prism-ichigojam.js":812,"./prism-ichigojam.min.js":813,"./prism-icon.js":814,"./prism-icon.min.js":815,"./prism-inform7.js":816,"./prism-inform7.min.js":817,"./prism-ini.js":818,"./prism-ini.min.js":819,"./prism-io.js":820,"./prism-io.min.js":821,"./prism-j.js":822,"./prism-j.min.js":823,"./prism-java.js":824,"./prism-java.min.js":825,"./prism-javadoc.js":826,"./prism-javadoc.min.js":827,"./prism-javadoclike.js":828,"./prism-javadoclike.min.js":829,"./prism-javascript.js":830,"./prism-javascript.min.js":831,"./prism-javastacktrace.js":832,"./prism-javastacktrace.min.js":833,"./prism-jolie.js":834,"./prism-jolie.min.js":835,"./prism-js-extras.js":836,"./prism-js-extras.min.js":837,"./prism-jsdoc.js":838,"./prism-jsdoc.min.js":839,"./prism-json.js":840,"./prism-json.min.js":841,"./prism-json5.js":842,"./prism-json5.min.js":843,"./prism-jsonp.js":844,"./prism-jsonp.min.js":845,"./prism-jsx.js":357,"./prism-jsx.min.js":846,"./prism-julia.js":847,"./prism-julia.min.js":848,"./prism-keyman.js":849,"./prism-keyman.min.js":850,"./prism-kotlin.js":851,"./prism-kotlin.min.js":852,"./prism-latex.js":853,"./prism-latex.min.js":854,"./prism-less.js":855,"./prism-less.min.js":856,"./prism-liquid.js":857,"./prism-liquid.min.js":858,"./prism-lisp.js":859,"./prism-lisp.min.js":860,"./prism-livescript.js":861,"./prism-livescript.min.js":862,"./prism-lolcode.js":863,"./prism-lolcode.min.js":864,"./prism-lua.js":865,"./prism-lua.min.js":866,"./prism-makefile.js":867,"./prism-makefile.min.js":868,"./prism-markdown.js":869,"./prism-markdown.min.js":870,"./prism-markup-templating.js":871,"./prism-markup-templating.min.js":872,"./prism-markup.js":873,"./prism-markup.min.js":874,"./prism-matlab.js":875,"./prism-matlab.min.js":876,"./prism-mel.js":877,"./prism-mel.min.js":878,"./prism-mizar.js":879,"./prism-mizar.min.js":880,"./prism-monkey.js":881,"./prism-monkey.min.js":882,"./prism-n1ql.js":883,"./prism-n1ql.min.js":884,"./prism-n4js.js":885,"./prism-n4js.min.js":886,"./prism-nand2tetris-hdl.js":887,"./prism-nand2tetris-hdl.min.js":888,"./prism-nasm.js":889,"./prism-nasm.min.js":890,"./prism-nginx.js":891,"./prism-nginx.min.js":892,"./prism-nim.js":893,"./prism-nim.min.js":894,"./prism-nix.js":895,"./prism-nix.min.js":896,"./prism-nsis.js":897,"./prism-nsis.min.js":898,"./prism-objectivec.js":899,"./prism-objectivec.min.js":900,"./prism-ocaml.js":901,"./prism-ocaml.min.js":902,"./prism-opencl.js":903,"./prism-opencl.min.js":904,"./prism-oz.js":905,"./prism-oz.min.js":906,"./prism-parigp.js":907,"./prism-parigp.min.js":908,"./prism-parser.js":909,"./prism-parser.min.js":910,"./prism-pascal.js":911,"./prism-pascal.min.js":912,"./prism-perl.js":913,"./prism-perl.min.js":914,"./prism-php-extras.js":915,"./prism-php-extras.min.js":916,"./prism-php.js":917,"./prism-php.min.js":918,"./prism-phpdoc.js":919,"./prism-phpdoc.min.js":920,"./prism-plsql.js":921,"./prism-plsql.min.js":922,"./prism-powershell.js":923,"./prism-powershell.min.js":924,"./prism-processing.js":925,"./prism-processing.min.js":926,"./prism-prolog.js":927,"./prism-prolog.min.js":928,"./prism-properties.js":929,"./prism-properties.min.js":930,"./prism-protobuf.js":931,"./prism-protobuf.min.js":932,"./prism-pug.js":933,"./prism-pug.min.js":934,"./prism-puppet.js":935,"./prism-puppet.min.js":936,"./prism-pure.js":937,"./prism-pure.min.js":938,"./prism-python.js":939,"./prism-python.min.js":940,"./prism-q.js":941,"./prism-q.min.js":942,"./prism-qore.js":943,"./prism-qore.min.js":944,"./prism-r.js":945,"./prism-r.min.js":946,"./prism-reason.js":947,"./prism-reason.min.js":948,"./prism-regex.js":949,"./prism-regex.min.js":950,"./prism-renpy.js":951,"./prism-renpy.min.js":952,"./prism-rest.js":953,"./prism-rest.min.js":954,"./prism-rip.js":955,"./prism-rip.min.js":956,"./prism-roboconf.js":957,"./prism-roboconf.min.js":958,"./prism-ruby.js":959,"./prism-ruby.min.js":960,"./prism-rust.js":961,"./prism-rust.min.js":962,"./prism-sas.js":963,"./prism-sas.min.js":964,"./prism-sass.js":965,"./prism-sass.min.js":966,"./prism-scala.js":967,"./prism-scala.min.js":968,"./prism-scheme.js":969,"./prism-scheme.min.js":970,"./prism-scss.js":971,"./prism-scss.min.js":972,"./prism-smalltalk.js":973,"./prism-smalltalk.min.js":974,"./prism-smarty.js":975,"./prism-smarty.min.js":976,"./prism-soy.js":977,"./prism-soy.min.js":978,"./prism-sql.js":979,"./prism-sql.min.js":980,"./prism-stylus.js":981,"./prism-stylus.min.js":982,"./prism-swift.js":983,"./prism-swift.min.js":984,"./prism-t4-cs.js":985,"./prism-t4-cs.min.js":986,"./prism-t4-templating.js":987,"./prism-t4-templating.min.js":988,"./prism-t4-vb.js":989,"./prism-t4-vb.min.js":990,"./prism-tap.js":991,"./prism-tap.min.js":992,"./prism-tcl.js":993,"./prism-tcl.min.js":994,"./prism-textile.js":995,"./prism-textile.min.js":996,"./prism-toml.js":997,"./prism-toml.min.js":998,"./prism-tsx.js":999,"./prism-tsx.min.js":1e3,"./prism-tt2.js":1001,"./prism-tt2.min.js":1002,"./prism-twig.js":1003,"./prism-twig.min.js":1004,"./prism-typescript.js":1005,"./prism-typescript.min.js":1006,"./prism-vala.js":1007,"./prism-vala.min.js":1008,"./prism-vbnet.js":1009,"./prism-vbnet.min.js":1010,"./prism-velocity.js":1011,"./prism-velocity.min.js":1012,"./prism-verilog.js":1013,"./prism-verilog.min.js":1014,"./prism-vhdl.js":1015,"./prism-vhdl.min.js":1016,"./prism-vim.js":1017,"./prism-vim.min.js":1018,"./prism-visual-basic.js":1019,"./prism-visual-basic.min.js":1020,"./prism-wasm.js":1021,"./prism-wasm.min.js":1022,"./prism-wiki.js":1023,"./prism-wiki.min.js":1024,"./prism-xeora.js":1025,"./prism-xeora.min.js":1026,"./prism-xojo.js":1027,"./prism-xojo.min.js":1028,"./prism-xquery.js":1029,"./prism-xquery.min.js":1030,"./prism-yaml.js":1031,"./prism-yaml.min.js":1032};function n(s){var i=e(s);return r(i)}function e(s){var i=m[s];if(!(i+1)){var r=new Error("Cannot find module '"+s+"'");throw r.code="MODULE_NOT_FOUND",r}return i}n.keys=function(){return Object.keys(m)},n.resolve=e,s.exports=n,n.id=679}}]);
//# sourceMappingURL=component---src-templates-github-js-3062e943540ebf33711a.js.map