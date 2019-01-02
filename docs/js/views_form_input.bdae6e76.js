(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views_form_input"],{"28ae":function(t,e,i){},"28f2":function(t,e,i){"use strict";var n=i("28ae"),s=i.n(n);s.a},"3a2f":function(t,e,i){"use strict";i("7f7f"),i("cadf"),i("551c"),i("097d");var n=i("f3ad"),s=i.n(n);s.a.name="ZkInput";var o,a,l=s.a,r=l,u=(i("28f2"),i("2877")),c=Object(u["a"])(r,o,a,!1,null,null,null);c.options.__file="Input.vue";var p=c.exports;p.install=function(t){t.component(p.name,p)};e["a"]=p},"57e6":function(t,e,i){"use strict";var n=i("5c36"),s=i.n(n);s.a},"58b8":function(t,e,i){t.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=65)}({0:function(t,e){t.exports=function(t,e,i,n,s,o){var a,l=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(a=t,l=t.default);var u,c="function"===typeof l?l.options:l;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId=s),o?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=u):n&&(u=n),u){var p=c.functional,d=p?c.render:c.beforeCreate;p?(c._injectStyles=u,c.render=function(t,e){return u.call(e),d(t,e)}):c.beforeCreate=d?[].concat(d,u):[u]}return{esModule:a,exports:l,options:c}}},1:function(t,e){t.exports=i("d010")},10:function(t,e){t.exports=i("417f")},14:function(t,e){t.exports=i("0e15")},17:function(t,e){t.exports=i("14e9")},19:function(t,e){t.exports=i("12f2")},2:function(t,e){t.exports=i("8122")},6:function(t,e){t.exports=i("f3ad")},65:function(t,e,i){"use strict";e.__esModule=!0;var n=i(66),s=o(n);function o(t){return t&&t.__esModule?t:{default:t}}s.default.install=function(t){t.component(s.default.name,s.default)},e.default=s.default},66:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(67),s=i.n(n),o=i(71),a=i(0),l=!1,r=null,u=null,c=null,p=a(s.a,o["a"],l,r,u,c);e["default"]=p.exports},67:function(t,e,i){"use strict";e.__esModule=!0;var n=i(14),s=_(n),o=i(6),a=_(o),l=i(10),r=_(l),u=i(68),c=_(u),p=i(1),d=_(p),f=i(8),h=_(f),g=i(2),m=i(19),v=_(m);function _(t){return t&&t.__esModule?t:{default:t}}e.default={name:"ElAutocomplete",mixins:[d.default,(0,v.default)("input"),h.default],inheritAttrs:!1,componentName:"ElAutocomplete",components:{ElInput:a.default,ElAutocompleteSuggestions:c.default},directives:{Clickoutside:r.default},props:{valueKey:{type:String,default:"value"},popperClass:String,popperOptions:Object,placeholder:String,clearable:{type:Boolean,default:!1},disabled:Boolean,name:String,size:String,value:String,maxlength:Number,minlength:Number,autofocus:Boolean,fetchSuggestions:Function,triggerOnFocus:{type:Boolean,default:!0},customItem:String,selectWhenUnmatched:{type:Boolean,default:!1},prefixIcon:String,suffixIcon:String,label:String,debounce:{type:Number,default:300},placement:{type:String,default:"bottom-start"},hideLoading:Boolean,popperAppendToBody:{type:Boolean,default:!0}},data:function(){return{activated:!1,suggestions:[],loading:!1,highlightedIndex:-1,suggestionDisabled:!1}},computed:{suggestionVisible:function(){var t=this.suggestions,e=Array.isArray(t)&&t.length>0;return(e||this.loading)&&this.activated},id:function(){return"el-autocomplete-"+(0,g.generateId)()}},watch:{suggestionVisible:function(t){this.broadcast("ElAutocompleteSuggestions","visible",[t,this.$refs.input.$refs.input.offsetWidth])}},methods:{getMigratingConfig:function(){return{props:{"custom-item":"custom-item is removed, use scoped slot instead.",props:"props is removed, use value-key instead."}}},getData:function(t){var e=this;this.suggestionDisabled||(this.loading=!0,this.fetchSuggestions(t,function(t){e.loading=!1,e.suggestionDisabled||(Array.isArray(t)?e.suggestions=t:console.error("[Element Error][Autocomplete]autocomplete suggestions must be an array"))}))},handleChange:function(t){if(this.$emit("input",t),this.suggestionDisabled=!1,!this.triggerOnFocus&&!t)return this.suggestionDisabled=!0,void(this.suggestions=[]);this.debouncedGetData(t)},handleFocus:function(t){this.activated=!0,this.$emit("focus",t),this.triggerOnFocus&&this.debouncedGetData(this.value)},handleBlur:function(t){this.$emit("blur",t)},handleClear:function(){this.activated=!1,this.$emit("clear")},close:function(t){this.activated=!1},handleKeyEnter:function(t){var e=this;this.suggestionVisible&&this.highlightedIndex>=0&&this.highlightedIndex<this.suggestions.length?(t.preventDefault(),this.select(this.suggestions[this.highlightedIndex])):this.selectWhenUnmatched&&(this.$emit("select",{value:this.value}),this.$nextTick(function(t){e.suggestions=[],e.highlightedIndex=-1}))},select:function(t){var e=this;this.$emit("input",t[this.valueKey]),this.$emit("select",t),this.$nextTick(function(t){e.suggestions=[],e.highlightedIndex=-1})},highlight:function(t){if(this.suggestionVisible&&!this.loading)if(t<0)this.highlightedIndex=-1;else{t>=this.suggestions.length&&(t=this.suggestions.length-1);var e=this.$refs.suggestions.$el.querySelector(".el-autocomplete-suggestion__wrap"),i=e.querySelectorAll(".el-autocomplete-suggestion__list li"),n=i[t],s=e.scrollTop,o=n.offsetTop;o+n.scrollHeight>s+e.clientHeight&&(e.scrollTop+=n.scrollHeight),o<s&&(e.scrollTop-=n.scrollHeight),this.highlightedIndex=t,this.$el.querySelector(".el-input__inner").setAttribute("aria-activedescendant",this.id+"-item-"+this.highlightedIndex)}}},mounted:function(){var t=this;this.debouncedGetData=(0,s.default)(this.debounce,this.getData),this.$on("item-click",function(e){t.select(e)});var e=this.$el.querySelector(".el-input__inner");e.setAttribute("role","textbox"),e.setAttribute("aria-autocomplete","list"),e.setAttribute("aria-controls","id"),e.setAttribute("aria-activedescendant",this.id+"-item-"+this.highlightedIndex)},beforeDestroy:function(){this.$refs.suggestions.$destroy()}}},68:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(69),s=i.n(n),o=i(70),a=i(0),l=!1,r=null,u=null,c=null,p=a(s.a,o["a"],l,r,u,c);e["default"]=p.exports},69:function(t,e,i){"use strict";e.__esModule=!0;var n=i(7),s=u(n),o=i(1),a=u(o),l=i(17),r=u(l);function u(t){return t&&t.__esModule?t:{default:t}}e.default={components:{ElScrollbar:r.default},mixins:[s.default,a.default],componentName:"ElAutocompleteSuggestions",data:function(){return{parent:this.$parent,dropdownWidth:""}},props:{options:{default:function(){return{gpuAcceleration:!1}}},id:String},methods:{select:function(t){this.dispatch("ElAutocomplete","item-click",t)}},updated:function(){var t=this;this.$nextTick(function(e){t.popperJS&&t.updatePopper()})},mounted:function(){this.$parent.popperElm=this.popperElm=this.$el,this.referenceElm=this.$parent.$refs.input.$refs.input,this.referenceList=this.$el.querySelector(".el-autocomplete-suggestion__list"),this.referenceList.setAttribute("role","listbox"),this.referenceList.setAttribute("id",this.id)},created:function(){var t=this;this.$on("visible",function(e,i){t.dropdownWidth=i+"px",t.showPopper=e})}}},7:function(t,e){t.exports=i("e974")},70:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"el-zoom-in-top"},on:{"after-leave":t.doDestroy}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showPopper,expression:"showPopper"}],staticClass:"el-autocomplete-suggestion el-popper",class:{"is-loading":!t.parent.hideLoading&&t.parent.loading},style:{width:t.dropdownWidth},attrs:{role:"region"}},[i("el-scrollbar",{attrs:{tag:"ul","wrap-class":"el-autocomplete-suggestion__wrap","view-class":"el-autocomplete-suggestion__list"}},[!t.parent.hideLoading&&t.parent.loading?i("li",[i("i",{staticClass:"el-icon-loading"})]):t._t("default")],2)],1)])},s=[],o={render:n,staticRenderFns:s};e["a"]=o},71:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:t.close,expression:"close"}],staticClass:"el-autocomplete",attrs:{"aria-haspopup":"listbox",role:"combobox","aria-expanded":t.suggestionVisible,"aria-owns":t.id}},[i("el-input",t._b({ref:"input",on:{input:t.handleChange,focus:t.handleFocus,blur:t.handleBlur,clear:t.handleClear},nativeOn:{keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38,e.key))return null;e.preventDefault(),t.highlight(t.highlightedIndex-1)},function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40,e.key))return null;e.preventDefault(),t.highlight(t.highlightedIndex+1)},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleKeyEnter(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"tab",9,e.key))return null;t.close(e)}]}},"el-input",[t.$props,t.$attrs],!1),[t.$slots.prepend?i("template",{attrs:{slot:"prepend"},slot:"prepend"},[t._t("prepend")],2):t._e(),t.$slots.append?i("template",{attrs:{slot:"append"},slot:"append"},[t._t("append")],2):t._e(),t.$slots.prefix?i("template",{attrs:{slot:"prefix"},slot:"prefix"},[t._t("prefix")],2):t._e(),t.$slots.suffix?i("template",{attrs:{slot:"suffix"},slot:"suffix"},[t._t("suffix")],2):t._e()],2),i("el-autocomplete-suggestions",{ref:"suggestions",class:[t.popperClass?t.popperClass:""],attrs:{"visible-arrow":"","popper-options":t.popperOptions,"append-to-body":t.popperAppendToBody,placement:t.placement,id:t.id}},t._l(t.suggestions,function(e,n){return i("li",{key:n,class:{highlighted:t.highlightedIndex===n},attrs:{id:t.id+"-item-"+n,role:"option","aria-selected":t.highlightedIndex===n},on:{click:function(i){t.select(e)}}},[t._t("default",[t._v("\n        "+t._s(e[t.valueKey])+"\n      ")],{item:e})],2)}))],1)},s=[],o={render:n,staticRenderFns:s};e["a"]=o},8:function(t,e){t.exports=i("2bb5")}})},"5c36":function(t,e,i){},"6ab3":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("app-page",{attrs:{title:"Input 输入框",description:"通过鼠标或键盘输入字符"}},[i("app-case",{attrs:{title:"基础用法"}},[i("zk-input",{staticClass:"demo-input",attrs:{placeholder:"请输入内容"}})],1),i("app-case",{attrs:{title:"禁用状态"}},[i("zk-input",{staticClass:"demo-input",attrs:{placeholder:"请输入内容",disabled:""}})],1),i("app-case",{attrs:{title:"可清空"}},[i("zk-input",{staticClass:"demo-input",attrs:{placeholder:"请输入内容",clearable:""}})],1),i("app-case",{attrs:{title:"带 icon 的输入框"}},[i("zk-input",{staticClass:"demo-input",attrs:{placeholder:"请选择日期","suffix-icon":"el-icon-date"}}),i("zk-input",{staticClass:"demo-input",attrs:{placeholder:"请输入内容","prefix-icon":"el-icon-search"}})],1),i("app-case",{attrs:{title:"文本域",description:"用于输入多行文本信息，通过将 type 属性的值指定为 textarea。"}},[i("zk-input",{staticClass:"demo-textarea",attrs:{type:"textarea",rows:2,placeholder:"请输入内容"}})],1),i("app-case",{attrs:{title:"可自适应文本高度的文本域"}},[i("zk-input",{staticClass:"demo-textarea",attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"}})],1),i("app-case",{attrs:{title:"复合型输入框"}},[i("app-row",[i("zk-input",{attrs:{placeholder:"请输入内容"}},[i("template",{slot:"prepend"},[t._v("Http://")])],2)],1),i("app-row",[i("zk-input",{attrs:{placeholder:"请输入内容"}},[i("template",{slot:"append"},[t._v(".com")])],2)],1),i("app-row",[i("zk-input",{attrs:{placeholder:"请输入内容"}},[i("zk-select",{staticStyle:{width:"120px"},attrs:{slot:"prepend",value:"1",placeholder:"请选择"},slot:"prepend"},[i("zk-option",{attrs:{label:"餐厅名",value:"1"}}),i("zk-option",{attrs:{label:"订单号",value:"2"}}),i("zk-option",{attrs:{label:"用户电话",value:"3"}})],1),i("zk-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1)],1),i("app-case",{attrs:{title:"不同尺寸"}},[i("zk-input",{staticClass:"demo-input",attrs:{placeholder:"默认输入框","suffix-icon":"el-icon-date"}}),i("zk-input",{staticClass:"demo-input",attrs:{size:"medium",placeholder:"中等输入框","suffix-icon":"el-icon-date"}}),i("zk-input",{staticClass:"demo-input",attrs:{size:"small",placeholder:"小型输入框","suffix-icon":"el-icon-date"}}),i("zk-input",{staticClass:"demo-input",attrs:{size:"mini",placeholder:"超小输入框","suffix-icon":"el-icon-date"}})],1),i("app-case",{attrs:{title:"带输入建议",description:"根据输入内容提供对应的输入建议"}},[i("zk-autocomplete",{staticClass:"demo-input",attrs:{placeholder:"激活即列出输入建议","fetch-suggestions":function(t,e){return e([{value:"三全鲜食（北新泾店）",address:"长宁区新渔路144号"},{value:"首尔炸鸡（仙霞路）",address:"上海市长宁区淞虹路661号"}])}}}),i("zk-autocomplete",{staticClass:"demo-input",attrs:{placeholder:"自定义模板","fetch-suggestions":function(t,e){return e([{value:"三全鲜食（北新泾店）",address:"长宁区新渔路144号"},{value:"首尔炸鸡（仙霞路）",address:"上海市长宁区淞虹路661号"}])}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[i("div",[t._v(t._s(n.value))]),i("span",{staticStyle:{"font-size":"12px",color:"#b4b4b4"}},[t._v(t._s(n.address))])]}}])}),i("zk-autocomplete",{staticClass:"demo-input",attrs:{placeholder:"远程搜索","fetch-suggestions":function(){return null}}})],1)],1)},s=[],o=(i("cadf"),i("551c"),i("097d"),i("3a2f")),a=(i("7f7f"),i("58b8")),l=i.n(a);l.a.name="ZkAutocomplete";var r,u,c=l.a,p=c,d=(i("57e6"),i("2877")),f=Object(d["a"])(p,r,u,!1,null,null,null);f.options.__file="Autocomplete.vue";var h=f.exports;h.install=function(t){t.component(h.name,h)};var g=h,m=i("a1e3"),v=i("0ae2"),_=i("b0d3"),b={components:{"zk-input":o["a"],"zk-autocomplete":g,"zk-button":m["a"],"zk-select":v["a"],"zk-option":_["a"]}},x=b,k=(i("fe8f"),Object(d["a"])(x,n,s,!1,null,"5ced10cb",null));k.options.__file="input.vue";e["default"]=k.exports},e804:function(t,e,i){},fe8f:function(t,e,i){"use strict";var n=i("e804"),s=i.n(n);s.a}}]);
//# sourceMappingURL=views_form_input.bdae6e76.js.map