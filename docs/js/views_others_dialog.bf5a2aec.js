(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views_others_dialog"],{"0815":function(e,t,o){},"37de":function(e,t,o){"use strict";var i=o("0815"),l=o.n(i);l.a},"38a0":function(e,t,o){},"3e9e":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("app-page",{attrs:{title:"Dialog 对话框",description:"在保留当前页面状态的情况下，告知用户并承载相关操作。"}},[o("app-case",{attrs:{title:"基础用法",description:"Dialog 弹出一个对话框，适合需要定制性更大的场景。"}},[o("zk-button",{attrs:{type:"text"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("点击打开 Dialog")])],1),o("app-case",{attrs:{title:"自定义内容",description:"Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Element Table 和 Form 组件的两个样例。"}},[o("zk-button",{attrs:{type:"text"},on:{click:function(t){e.dialogTableVisible=!0}}},[e._v("打开嵌套表格的 Dialog")]),o("zk-button",{attrs:{type:"text"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("打开嵌套表单的 Dialog")])],1),o("zk-dialog",{attrs:{title:"提示",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("span",[e._v("这是一段信息")]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("zk-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),o("zk-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)]),o("zk-dialog",{attrs:{title:"收货地址",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[o("el-table",{attrs:{data:e.gridData}},[o("el-table-column",{attrs:{property:"date",label:"日期",width:"150"}}),o("el-table-column",{attrs:{property:"name",label:"姓名",width:"200"}}),o("el-table-column",{attrs:{property:"address",label:"地址"}})],1)],1),o("zk-dialog",{attrs:{title:"收货地址",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[o("el-form",{attrs:{model:e.form,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"活动名称"}},[o("zk-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),o("el-form-item",{attrs:{label:"活动区域"}},[o("zk-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[o("zk-option",{attrs:{label:"区域一",value:"shanghai"}}),o("zk-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("zk-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),o("zk-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("确 定")])],1)],1)],1)},l=[],n=(o("cadf"),o("551c"),o("097d"),o("38a0"),o("5466"),o("425f"),o("5c96")),a=o("a1e3"),s=o("3a2f"),r=o("0ae2"),d=o("b0d3"),c=(o("7f7f"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",e._g(e._b({attrs:{width:e.width,center:e.center}},"el-dialog",e.$attrs,!1),e.$listeners),[e._l(e.$slots,function(t,o){return e._t(o,null,{slot:o})})],2)}),u=[],f=o("df33"),p=o.n(f),b={name:"ZkDialog",components:{"el-dialog":p.a},props:{center:{type:Boolean,default:!0},width:{type:String,default:"660px"}}},m=b,h=(o("d881"),o("2877")),g=Object(h["a"])(m,c,u,!1,null,null,null);g.options.__file="Dialog.vue";var _=g.exports;_.install=function(e){e.component(_.name,_)};var v=_,y={components:{"zk-input":s["a"],"zk-dialog":v,"zk-button":a["a"],"zk-select":r["a"],"zk-option":d["a"],"el-table":n["Table"],"el-table-column":n["TableColumn"],"el-form":n["Form"],"el-form-item":n["FormItem"]},data:function(){return{dialogVisible:!1,dialogTableVisible:!1,dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},gridData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}]}}},k=y,C=(o("37de"),Object(h["a"])(k,i,l,!1,null,"1d371e28",null));C.options.__file="dialog.vue";t["default"]=C.exports},"425f":function(e,t,o){},5466:function(e,t,o){},"93d9":function(e,t,o){},d881:function(e,t,o){"use strict";var i=o("93d9"),l=o.n(i);l.a},df33:function(e,t,o){e.exports=function(e){var t={};function o(i){if(t[i])return t[i].exports;var l=t[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=61)}({0:function(e,t){e.exports=function(e,t,o,i,l,n){var a,s=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(a=e,s=e.default);var d,c="function"===typeof s?s.options:s;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),o&&(c.functional=!0),l&&(c._scopeId=l),n?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},c._ssrRegister=d):i&&(d=i),d){var u=c.functional,f=u?c.render:c.beforeCreate;u?(c._injectStyles=d,c.render=function(e,t){return d.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,d):[d]}return{esModule:a,exports:s,options:c}}},1:function(e,t){e.exports=o("d010")},13:function(e,t){e.exports=o("5128")},61:function(e,t,o){"use strict";t.__esModule=!0;var i=o(62),l=n(i);function n(e){return e&&e.__esModule?e:{default:e}}l.default.install=function(e){e.component(l.default.name,l.default)},t.default=l.default},62:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(63),l=o.n(i),n=o(64),a=o(0),s=!1,r=null,d=null,c=null,u=a(l.a,n["a"],s,r,d,c);t["default"]=u.exports},63:function(e,t,o){"use strict";t.__esModule=!0;var i=o(13),l=d(i),n=o(8),a=d(n),s=o(1),r=d(s);function d(e){return e&&e.__esModule?e:{default:e}}t.default={name:"ElDialog",mixins:[l.default,r.default,a.default],props:{title:{type:String,default:""},modal:{type:Boolean,default:!0},modalAppendToBody:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},width:String,fullscreen:Boolean,customClass:{type:String,default:""},top:{type:String,default:"15vh"},beforeClose:Function,center:{type:Boolean,default:!1}},data:function(){return{closed:!1}},watch:{visible:function(e){var t=this;e?(this.closed=!1,this.$emit("open"),this.$el.addEventListener("scroll",this.updatePopper),this.$nextTick(function(){t.$refs.dialog.scrollTop=0}),this.appendToBody&&document.body.appendChild(this.$el)):(this.$el.removeEventListener("scroll",this.updatePopper),this.closed||this.$emit("close"))}},computed:{style:function(){var e={};return this.fullscreen||(e.marginTop=this.top,this.width&&(e.width=this.width)),e}},methods:{getMigratingConfig:function(){return{props:{size:"size is removed."}}},handleWrapperClick:function(){this.closeOnClickModal&&this.handleClose()},handleClose:function(){"function"===typeof this.beforeClose?this.beforeClose(this.hide):this.hide()},hide:function(e){!1!==e&&(this.$emit("update:visible",!1),this.$emit("close"),this.closed=!0)},updatePopper:function(){this.broadcast("ElSelectDropdown","updatePopper"),this.broadcast("ElDropdownMenu","updatePopper")},afterEnter:function(){this.$emit("opened")},afterLeave:function(){this.$emit("closed")}},mounted:function(){this.visible&&(this.rendered=!0,this.open(),this.appendToBody&&document.body.appendChild(this.$el))},destroyed:function(){this.appendToBody&&this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}}},64:function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"dialog-fade"},on:{"after-enter":e.afterEnter,"after-leave":e.afterLeave}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"el-dialog__wrapper",on:{click:function(t){if(t.target!==t.currentTarget)return null;e.handleWrapperClick(t)}}},[o("div",{ref:"dialog",staticClass:"el-dialog",class:[{"is-fullscreen":e.fullscreen,"el-dialog--center":e.center},e.customClass],style:e.style,attrs:{role:"dialog","aria-modal":"true","aria-label":e.title||"dialog"}},[o("div",{staticClass:"el-dialog__header"},[e._t("title",[o("span",{staticClass:"el-dialog__title"},[e._v(e._s(e.title))])]),e.showClose?o("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:e.handleClose}},[o("i",{staticClass:"el-dialog__close el-icon el-icon-close"})]):e._e()],2),e.rendered?o("div",{staticClass:"el-dialog__body"},[e._t("default")],2):e._e(),e.$slots.footer?o("div",{staticClass:"el-dialog__footer"},[e._t("footer")],2):e._e()])])])},l=[],n={render:i,staticRenderFns:l};t["a"]=n},8:function(e,t){e.exports=o("2bb5")}})}}]);
//# sourceMappingURL=views_others_dialog.bf5a2aec.js.map