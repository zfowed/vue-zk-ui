(function(e){function t(t){for(var i,a,r=t[0],l=t[1],c=t[2],u=0,d=[];u<r.length;u++)a=r[u],s[a]&&d.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);_&&_(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,a=1;a<n.length;a++){var r=n[a];0!==s[r]&&(i=!1)}i&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},a={app:0},s={app:0},o=[];function r(e){return l.p+"js/"+({views_basic_button:"views_basic_button",views_basic_color:"views_basic_color",views_basic_layout:"views_basic_layout",views_basic_typography:"views_basic_typography",views_form_input:"views_form_input","views_form_select~views_others_dialog":"views_form_select~views_others_dialog",views_form_select:"views_form_select",views_others_dialog:"views_others_dialog",views_notice_loading:"views_notice_loading","views_notice_message-box":"views_notice_message-box"}[e]||e)+"."+{views_basic_button:"22e05fd9",views_basic_color:"09af8e74",views_basic_layout:"db16353a",views_basic_typography:"a0b75d4a",views_form_input:"ae0c2e2f","views_form_select~views_others_dialog":"0865d7e4",views_form_select:"4c9a6ba6",views_others_dialog:"108654f2",views_notice_loading:"09eab368","views_notice_message-box":"239ce3dd"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={views_basic_button:1,views_basic_color:1,views_basic_layout:1,views_basic_typography:1,views_form_input:1,"views_form_select~views_others_dialog":1,views_form_select:1,views_others_dialog:1,views_notice_loading:1,"views_notice_message-box":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var i="css/"+({views_basic_button:"views_basic_button",views_basic_color:"views_basic_color",views_basic_layout:"views_basic_layout",views_basic_typography:"views_basic_typography",views_form_input:"views_form_input","views_form_select~views_others_dialog":"views_form_select~views_others_dialog",views_form_select:"views_form_select",views_others_dialog:"views_others_dialog",views_notice_loading:"views_notice_loading","views_notice_message-box":"views_notice_message-box"}[e]||e)+"."+{views_basic_button:"b3188f62",views_basic_color:"2467ce40",views_basic_layout:"d7c947f3",views_basic_typography:"c85ac626",views_form_input:"902b5a2a","views_form_select~views_others_dialog":"ac4534c6",views_form_select:"726d5fd7",views_others_dialog:"45f64fbd",views_notice_loading:"e42bf4c9","views_notice_message-box":"acecfe0b"}[e]+".css",s=l.p+i,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var c=o[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===i||u===s))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===i||u===s)return t()}var _=document.createElement("link");_.rel="stylesheet",_.type="text/css",_.onload=t,_.onerror=function(t){var i=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");o.request=i,delete a[e],_.parentNode.removeChild(_),n(o)},_.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(_)}).then(function(){a[e]=0}));var i=s[e];if(0!==i)if(i)t.push(i[2]);else{var o=new Promise(function(t,n){i=s[e]=[t,n]});t.push(i[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(e),c=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+i+": "+a+")");o.type=i,o.request=a,n[1](o)}s[e]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var _=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a29":function(e,t,n){},"0ccd":function(e,t,n){"use strict";var i=n("e8ff"),a=n.n(i);a.a},"36c5":function(e,t,n){},"3ca0":function(e,t,n){"use strict";var i=n("c815"),a=n.n(i);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("zk-layout",{attrs:{title:e.title,"nav-data":e.nav,"breadcrumb-data":e.breadcrumb}},[n("router-view")],1)},s=[],o=n("be94"),r=n("d2c1"),l=n("2f62"),c=Object(l["a"])("app"),u=c.mapState,d={name:"App",components:{"zk-layout":r["a"]},computed:Object(o["a"])({},u(["title","nav"]),{breadcrumb:function(){return this.$route.matched.filter(function(e){return e.meta.title}).map(function(e){return{label:e.meta.title,href:e.path}})}})},_=d,f=(n("5c0b"),n("5c64"),n("2877")),p=Object(f["a"])(_,a,s,!1,null,null,null);p.options.__file="App.vue";var m=p.exports,v=n("8c4f");i["default"].use(v["a"]);var h={render:function(e){return e("router-view")}},b=new v["a"]({routes:[{path:"/",redirect:"/basic/color"},{path:"/basic",meta:{title:"基本"},component:h,children:[{path:"",redirect:"layout"},{path:"layout",meta:{title:"布局"},component:function(){return n.e("views_basic_layout").then(n.bind(null,"1bb5"))}},{path:"color",meta:{title:"颜色"},component:function(){return n.e("views_basic_color").then(n.bind(null,"b676"))}},{path:"typography",meta:{title:"字体"},component:function(){return n.e("views_basic_typography").then(n.bind(null,"4de4"))}},{path:"button",meta:{title:"按钮"},component:function(){return n.e("views_basic_button").then(n.bind(null,"b2ed"))}}]},{path:"/form",meta:{title:"表单"},component:h,children:[{path:"",redirect:"input"},{path:"input",meta:{title:"输入框"},component:function(){return n.e("views_form_input").then(n.bind(null,"6ab3"))}},{path:"select",meta:{title:"选择框"},component:function(){return Promise.all([n.e("views_form_select~views_others_dialog"),n.e("views_form_select")]).then(n.bind(null,"2122"))}}]},{path:"/notice",meta:{title:"通知"},component:h,children:[{path:"",redirect:"loading"},{path:"loading",meta:{title:"加载层"},component:function(){return n.e("views_notice_loading").then(n.bind(null,"2b77"))}},{path:"message-box",meta:{title:"弹出层"},component:function(){return n.e("views_notice_message-box").then(n.bind(null,"fe8a"))}}]},{path:"/others",meta:{title:"其他"},component:h,children:[{path:"",redirect:"loading"},{path:"dialog",meta:{title:"对话框"},component:function(){return Promise.all([n.e("views_form_select~views_others_dialog"),n.e("views_others_dialog")]).then(n.bind(null,"3e9e"))}}]},{path:"/**",redirect:"/"}]}),w={namespaced:!0,state:{title:"基于 Element 的 UI",windowWidth:0,windowHeight:0,collapse:!0,nav:[{label:"基本",index:"/basic",childers:[{label:"布局",index:"/basic/layout"},{label:"颜色",index:"/basic/color"},{label:"字体",index:"/basic/typography"},{label:"按钮",index:"/basic/button"}]},{label:"表单",index:"/form",childers:[{label:"输入框",index:"/form/input"},{label:"下拉框",index:"/form/select"}]},{label:"通知",index:"/notice",childers:[{label:"加载层",index:"/notice/loading"},{label:"弹框",index:"/notice/message-box"}]},{label:"其他",index:"/others",childers:[{label:"对话框",index:"/others/dialog"}]}]},getters:{},mutations:{setWindowWidth:function(e,t){e.windowWidth=t},setWindowHeight:function(e,t){e.windowHeight=t},setCollapse:function(e,t){e.collapse=t}},actions:{}};i["default"].use(l["b"]);var g=new l["b"].Store({modules:{app:w}}),y=n("96eb"),A=n.n(y),x=(n("f5df"),n("8512"),n("7f7f"),n("ac6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticClass:"app-layout app-layout-default",style:{height:e.windowHeight+"px"}},[n("el-aside",{staticClass:"aside",attrs:{width:e.showCollapse?"64px":"200px"}},[n("el-menu",{staticClass:"aside-menu",attrs:{collapse:e.showCollapse,"default-active":e.$route.path,"default-openeds":e.nav.map(function(e){return e.index}),router:""}},[e._l(e.nav,function(t){return[t.childers&&t.childers.length?n("el-submenu",{key:t.index,staticClass:"submenu",attrs:{index:t.index}},[n("template",{slot:"title"},[n("i",{class:["aside-menu-icon",t.icon]}),n("span",[e._v(e._s(t.label))])]),e._l(t.childers,function(t){return n("el-menu-item",{key:t.index,attrs:{index:t.index}},[n("template",{slot:"title"},[n("span",[e._v(e._s(t.label))])])],2)})],2):n("el-menu-item",{key:t.index,attrs:{index:t.index}},[n("i",{class:["aside-menu-icon",t.icon]}),n("span",[e._v(e._s(t.label))])])]})],2)],1),n("el-container",[n("el-main",{staticClass:"main"},[n("router-view",{staticClass:"main-view"})],1)],1)],1)}),C=[],E=(n("adec"),n("a769"),n("4ca3"),n("ce18"),n("8bd8"),n("de31"),n("5c96")),k={name:"Layout",components:{"el-container":E["Container"],"el-aside":E["Aside"],"el-menu":E["Menu"],"el-submenu":E["Submenu"],"el-menu-item":E["MenuItem"],"el-main":E["Main"]},props:{title:{type:String,required:!0},nav:{type:Array,required:!0}},provide:function(){return{$App:this}},data:function(){return{windowWidth:0,windowHeight:0,collapse:!0}},computed:{showCollapse:function(){return this.windowWidth<=1024||!this.collapse}},watch:{title:{immediate:!0,handler:function(e){window.document.title=e}}},methods:{updateWindowHeight:function(){this.$set(this.$data,"windowWidth",document.documentElement.clientWidth),this.$set(this.$data,"windowHeight",document.documentElement.clientHeight)}},created:function(){this.updateWindowHeight(),window.onresize=this.updateWindowHeight}},S=k,O=(n("a37f"),Object(f["a"])(S,x,C,!1,null,"5d4a43e9",null));O.options.__file="Layout.vue";var $=O.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"app-page"},[e.title?n("h1",[e._v(e._s(e.title))]):e._e(),e.description?n("p",[e._v(e._s(e.description))]):e._e(),e._t("default")],2)},W=[],z={name:"Page",props:{title:String,description:String}},H=z,B=(n("f321"),Object(f["a"])(H,j,W,!1,null,null,null));B.options.__file="Page.vue";var L=B.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-case"},[e.title?n("h2",[e._v(e._s(e.title))]):e._e(),e.description?n("p",[e._v(e._s(e.description))]):e._e(),n("el-card",[e._t("default")],2)],1)},N=[],R=(n("b8e0"),{name:"Case",components:{"el-card":E["Card"]},props:{title:String,description:String}}),V=R,P=(n("f6a7"),Object(f["a"])(V,M,N,!1,null,null,null));P.options.__file="Case.vue";var Y=P.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",e._g(e._b({},"el-row",e.$attrs,!1),e.$listeners),[e._l(e.$slots,function(t,n){return e._t(n,null,{slot:n})})],2)},I=[],Q=(n("7a0f"),n("0f6c")),U=n.n(Q),D={name:"Row",components:{"el-row":U.a}},G=D,J=Object(f["a"])(G,T,I,!1,null,null,null);J.options.__file="Row.vue";var Z=J.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-col",e._g(e._b({},"el-col",e.$attrs,!1),e.$listeners),[e._l(e.$slots,function(t,n){return e._t(n,null,{slot:n})})],2)},K=[],q=(n("f4f9"),n("c2cc")),X=n.n(q),ee={name:"Col",components:{"el-col":X.a}},te=ee,ne=Object(f["a"])(te,F,K,!1,null,null,null);ne.options.__file="Col.vue";var ie=ne.exports,ae=[$,L,Y,Z,ie],se=function(e){ae.forEach(function(t){e.component("app"+t.name,t)})},oe={install:se};i["default"].use(oe),i["default"].config.productionTip=!1,i["default"].prototype.$mockjs=A.a,new i["default"]({router:b,store:g,render:function(e){return e(m)}}).$mount("#app");t["default"]=void 0},5809:function(e,t,n){"use strict";var i=n("dce3"),a=n.n(i);a.a},"5c0b":function(e,t,n){"use strict";var i=n("5e27"),a=n.n(i);a.a},"5c64":function(e,t,n){"use strict";var i=n("c2ae"),a=n.n(i);a.a},"5e27":function(e,t,n){},"655a":function(e,t,n){},7489:function(e,t,n){"use strict";var i=n("ebda"),a=n.n(i);a.a},"9fb8":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAA+0lEQVQ4jdWVsS5EQRSGvyNbSVaUXkChI1ErlRuVYiuVR1Br6DyAXimxq98HsIWI0HgARKG9BfEpEJO7e/cOpvFXc86Z883JnMkZ1A31xjxV6qm6QJPUh0xYqsMmXgdYSuw7oGo8/VuvsypMtZoBm6m5vwKKANW+ulgMCGwCY3WlFBBgGbhQe6WAAF1gqO6rAUx2WR1kvMPxFN+Z2i3Z5S3gvCTwEtgJ1cS5BtwD8y3JB0A/sU+A3YioOvWdEfHUVor68rl8A/Yi4ugrNgH8gZ6B7YgYpc7f3uE1sF6HAf9gONS7fAw8ZuRdRcRgasTCExs//pTbTFDrn/IOkbp58O6yjX8AAAAASUVORK5CYII="},a37f:function(e,t,n){"use strict";var i=n("0a29"),a=n.n(i);a.a},c2ae:function(e,t,n){},c815:function(e,t,n){},d2c1:function(e,t,n){"use strict";n("7f7f");var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"zk-layout",style:{height:e.windowHeight+"px"}},[n("header",{staticClass:"zk-layout-header"},[n("app-header",{staticClass:"layout-header-container",attrs:{title:e.title,"user-name":e.userName},on:{logout:function(t){e.$router.push("/login/index")}}})],1),n("section",{staticClass:"zk-layout-section"},[n("aside",{staticClass:"zk-layout-aside"},[n("app-menu",{staticClass:"layout-aside-menu",attrs:{"nav-data":e.navData}})],1),n("main",{staticClass:"zk-layout-main"},[n("app-breadcrumb",{staticClass:"zk-layout-main-breadcrumb",attrs:{data:e.breadcrumbData}}),n("div",{staticClass:"zk-layout-main-view"},[e._t("default")],2)],1)])])},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"menu"},[e._l(e.navData,function(t){return[t.hide?e._e():n("li",{key:t.index,class:["menu-submenu",{"menu-submenu-active":e.submenuActives[t.index]}]},[n("div",{staticClass:"menu-submenu-title",on:{click:function(n){e.toggleSubmenu(t)}}},[n("span",[e._v(e._s(t.label))])]),n("ul",{staticClass:"menu-submenu-children"},[e._l(t.childers,function(t){return[t.hide?e._e():n("li",{key:t.index,class:["menu-item",{"menu-item-active":e.getMenuItemIsActive(t)}]},[n("router-link",{attrs:{to:t.index}},[e._v(e._s(t.label))])],1)]})],2)])]})],2)},o=[],r=(n("ac6a"),n("456d"),n("f559"),{name:"Menu",props:{navData:{type:Array,default:function(){return[]}}},data:function(){return{submenuActives:{}}},watch:{$route:{immediate:!0,handler:function(){for(var e=0;e<this.navData.length;e++){var t=this.navData[e];if(this.$route.path.startsWith(t.index)){this.toggleSubmenu(t,!0);break}}}},navData:{deep:!0,immediate:!0,handler:function(){for(var e={},t=0;t<this.navData.length;t++){var n=this.navData[t];e[n.index]=this.submenuActives[n.index]||!1}this.submenuActives=e}}},methods:{getMenuItemIsActive:function(e){return this.$route.path.startsWith(e.index)},toggleSubmenu:function(e,t){this.submenuActives[e.index]="undefined"!==typeof t?t:!this.submenuActives[e.index];for(var n=Object.keys(this.submenuActives),i=0;i<n.length;i++){var a=n[i];e.index!==a&&(this.submenuActives[a]=!1)}}}}),l=r,c=(n("3ca0"),n("2877")),u=Object(c["a"])(l,s,o,!1,null,"40cae766",null);u.options.__file="Menu.vue";var d=u.exports,_=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header-container"},[e.logo?i("img",{staticClass:"header-logo",attrs:{src:e.logo,alt:"logo"}}):e._e(),i("span",{staticClass:"header-title"},[e._v(e._s(e.title))]),e.userName?i("div",{staticClass:"header-user"},[i("span",{staticClass:"header-user-welcome"},[e._v("欢迎你")]),i("span",{staticClass:"header-user-name"},[e._v(e._s(e.userName))]),i("span",{staticClass:"header-user-logout",on:{click:function(t){e.$emit("logout")}}},[i("img",{attrs:{src:n("9fb8"),alt:""}})])]):e._e()])},f=[],p={name:"Header",props:{logo:{type:String},title:{type:String},userName:{type:String}}},m=p,v=(n("7489"),Object(c["a"])(m,_,f,!1,null,"90d66364",null));v.options.__file="Header.vue";var h=v.exports,b=h,w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"breadcrumb"},[i("div",{staticClass:"breadcrumb-item"},[e._v("当前位置：")]),e._l(e.data,function(t,a){return[a<e.data.length-1?[i("div",{key:"t_"+t.href,staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:t.href}},[e._v(e._s(t.label))])],1),i("div",{key:"f_"+t.href,staticClass:"breadcrumb-item"},[i("img",{staticClass:"icon-img",attrs:{src:n("f7cb"),alt:">"}})])]:[i("div",{key:"t_"+t.href,staticClass:"breadcrumb-item"},[e._v(e._s(t.label))])]]})],2)},g=[],y={name:"Breadcrumb",props:{data:{type:Array,default:function(){return[]}}}},A=y,x=(n("0ccd"),Object(c["a"])(A,w,g,!1,null,"0f719a0a",null));x.options.__file="Breadcrumb.vue";var C=x.exports,E=C;function k(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n.bind(e))}function S(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n.bind(e))}var O={name:"ZkLayout",components:{"app-menu":d,"app-header":b,"app-breadcrumb":E},props:{title:{type:String,default:"网站标题"},userName:{type:String,default:"用户名"},navData:{type:Array,default:function(){return[]}},breadcrumbData:{type:Array,default:function(){return[]}}},provide:function(){return{$Layout:this}},data:function(){return{windowWidth:0,windowHeight:0}},methods:{onresize:function(){this.windowWidth=document.documentElement.clientWidth,this.windowHeight=document.documentElement.clientHeight}},created:function(){k(window,"resize",this.onresize),this.onresize()},destroyed:function(){S(window,"resize",this.onresize)}},$=O,j=(n("5809"),Object(c["a"])($,i,a,!1,null,"48f7b524",null));j.options.__file="Layout.vue";var W=j.exports;W.install=function(e){e.component(W.name,W)};t["a"]=W},dce3:function(e,t,n){},e8ff:function(e,t,n){},ebda:function(e,t,n){},f321:function(e,t,n){"use strict";var i=n("655a"),a=n.n(i);a.a},f6a7:function(e,t,n){"use strict";var i=n("36c5"),a=n.n(i);a.a},f7cb:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAKCAYAAAB4zEQNAAAAlElEQVQYlV3MoTKEARiF4QebVeFcg7Zxi2BG2Lhd+oMiiFtdgBlF0RVxg6aImhkzLuCETWZ0Q8H8vzd+z5xvZxiGV9ziKsmXUbs4whL3bfcnmGSLY7zhue3heCnJZ5I1LvDQ9vQPf0uywQLnbW8m+L8Jtl3iCddJzmY/xz1cYoWTJC8wa3uAO7xjnuRj/PYRG6zGAN8x8iyx0/VUswAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.3d06b40a.js.map