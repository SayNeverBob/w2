(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1d7b5500"],{"006e":function(e,t,a){"use strict";a("b424")},"01a2":function(e,t,a){},"129f":function(e,t,a){"use strict";e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},2729:function(e,t,a){"use strict";a("01a2")},"46c4":function(e,t,a){"use strict";a.d(t,"e",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return s})),a.d(t,"h",(function(){return l})),a.d(t,"f",(function(){return c})),a.d(t,"d",(function(){return u})),a.d(t,"g",(function(){return d})),a.d(t,"i",(function(){return h}));var i=a("6b6c");function o(e){return Object(i.a)({url:"/setting/menus",method:"get",params:e})}function r(e){return Object(i.a)({url:"/setting/menus/unique",method:"get",params:e})}function n(){return Object(i.a)({url:"/setting/menus/create",method:"get"})}function s(e){return Object(i.a)({url:e.url,method:e.method,data:e.datas})}function l(e){return Object(i.a)({url:"/setting/menus/".concat(e),method:"get"})}function c(e){return Object(i.a)({url:"/setting/menus/show/".concat(e.id),method:"put",data:e})}function u(e){return Object(i.a)({url:"/setting/ruleList?cate_id=".concat(e),method:"get"})}function d(e){return Object(i.a)({url:"setting/menus/batch",method:"post",data:e})}function h(e){return Object(i.a)({url:"setting/rule_cate",method:"get"})}},"4e82":function(e,t,a){"use strict";var i=a("23e7"),o=a("e330"),r=a("59ed"),n=a("7b0b"),s=a("07fa"),l=a("083a"),c=a("577e"),u=a("d039"),d=a("addb"),h=a("a640"),m=a("04d1"),f=a("d998"),p=a("2d00"),b=a("512ce"),g=[],v=o(g.sort),_=o(g.push),w=(a=u((function(){g.sort(void 0)})),o=u((function(){g.sort(null)})),h=h("sort"),!u((function(){if(p)return p<70;if(!(m&&3<m)){if(f)return!0;if(b)return b<603;for(var e,t,a,i="",o=65;o<76;o++){switch(e=String.fromCharCode(o),o){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(a=0;a<47;a++)g.push({k:e+a,v:t})}for(g.sort((function(e,t){return t.v-e.v})),a=0;a<g.length;a++)e=g[a].k.charAt(0),i.charAt(i.length-1)!==e&&(i+=e);return"DGBEFHACIJK"!==i}})));i({target:"Array",proto:!0,forced:a||!o||!h||!w},{sort:function(e){void 0!==e&&r(e);var t=n(this);if(w)return void 0===e?v(t):v(t,e);for(var a,i,o=[],u=s(t),h=0;h<u;h++)h in t&&_(o,t[h]);for(d(o,(i=e,function(e,t){return void 0===t?-1:void 0===e?1:void 0!==i?+i(e,t)||0:c(e)>c(t)?1:-1})),a=s(o),h=0;h<a;)t[h]=o[h++];for(;h<u;)l(t,h++);return t}})},"5b81":function(e,t,a){"use strict";function i(e,t,a){return a>e.length?-1:""===t?a:_(e,t,a)}var o=a("23e7"),r=a("c65b"),n=a("e330"),s=a("1d80"),l=a("1626"),c=a("7234"),u=a("44e7"),d=a("577e"),h=a("dc4a"),m=a("90d8"),f=a("0cb2"),p=a("b622"),b=a("c430"),g=p("replace"),v=TypeError,_=n("".indexOf),w=n("".replace),y=n("".slice),k=Math.max;o({target:"String",proto:!0},{replaceAll:function(e,t){var a,o,n,p,V,x,O,$,R=s(this),j=0,C=0,F="";if(!c(e)){if((a=u(e))&&(o=d(s(m(e))),!~_(o,"g")))throw new v("`.replaceAll` does not allow non-global regexes");if(o=h(e,g))return r(o,e,R,t);if(b&&a)return w(d(R),e,t)}for(n=d(R),p=d(e),(V=l(t))||(t=d(t)),x=p.length,O=k(1,x),j=i(n,p,0);-1!==j;)$=V?d(t(p,j,n)):f(p,n,j,[],void 0,t),F+=y(n,C,j)+$,C=j+x,j=i(n,p,j+O);return C<n.length&&(F+=y(n,C)),F}})},"5bb2":function(e,t,a){"use strict";t.a=["platform-eleme","eleme","delete-solid","delete","s-tools","setting","user-solid","user","phone","phone-outline","more","more-outline","star-on","star-off","s-goods","goods","warning","warning-outline","question","info","remove","circle-plus","success","error","zoom-in","zoom-out","remove-outline","circle-plus-outline","circle-check","circle-close","s-help","help","minus","plus","check","close","picture","picture-outline","picture-outline-round","upload","upload2","download","camera-solid","camera","video-camera-solid","video-camera","message-solid","bell","s-cooperation","s-order","s-platform","s-fold","s-unfold","s-operation","s-promotion","s-home","s-release","s-ticket","s-management","s-open","s-shop","s-marketing","s-flag","s-comment","s-finance","s-claim","s-custom","s-opportunity","s-data","s-check","s-grid","menu","share","d-caret","caret-left","caret-right","caret-bottom","caret-top","bottom-left","bottom-right","back","right","bottom","top","top-left","top-right","arrow-left","arrow-right","arrow-down","arrow-up","d-arrow-left","d-arrow-right","video-pause","video-play","refresh","refresh-right","refresh-left","finished","sort","category-up","category-down","rank","loading","view","c-scale-to-original","date","edit","edit-outline","folder","folder-opened","folder-add","folder-remove","folder-delete","folder-checked","tickets","document-remove","document-delete","document-copy","document-checked","document","document-add","printer","paperclip","takeaway-box","search","monitor","attract","mobile","scissors","umbrella","headset","brush","mouse","coordinate","magic-stick","reading","data-line","data-board","pie-chart","data-analysis","collection-tag","film","suitcase","suitcase-1","receiving","collection","files","notebook-1","notebook-2","toilet-paper","office-building","school","table-lamp","house","no-smoking","smoking","shopping-cart-full","shopping-cart-1","shopping-cart-2","shopping-bag-1","shopping-bag-2","sold-out","sell","present","box","bank-card","money","coin","wallet","discount","price-tag","news","guide","male","female","thumb","cpu","link","connection","open","turn-off","set-up","chat-round","chat-line-round","chat-square","chat-dot-round","chat-dot-square","chat-line-square","message","postcard","position","turn-off-microphone","microphone","close-notification","bangzhu","time","odometer","crop","aim","switch-button","full-screen","copy-document","mic","stopwatch","medal-1","medal","trophy","trophy-1","first-aid-kit","discover","place","location","location-outline","location-information","add-location","delete-location","map-location","alarm-clock","timer","watch-1","watch","lock","unlock","key","service","mobile-phone","bicycle","truck","ship","basketball","football","soccer","baseball","wind-power","light-rain","lightning","heavy-rain","sunrise","sunrise-1","sunset","sunny","cloudy","partly-cloudy","cloudy-and-sunny","moon","moon-night","dish","dish-1","food","chicken","fork-spoon","knife-fork","burger","tableware","sugar","dessert","ice-cream","hot-water","water-cup","coffee-cup","cold-drink","goblet","goblet-full","goblet-square","goblet-square-full","refrigerator","grape","watermelon","cherry","apple","pear","orange","coffee","ice-tea","ice-drink","milk-tea","potato-strips","lollipop","ice-cream-square","ice-cream-round"]},"841c":function(e,t,a){"use strict";var i=a("c65b"),o=a("d784"),r=a("825a"),n=a("7234"),s=a("1d80"),l=a("129f"),c=a("577e"),u=a("dc4a"),d=a("14c3");o("search",(function(e,t,a){return[function(t){var a=s(this),o=n(t)?void 0:u(t,e);return o?i(o,t,a):new RegExp(t)[e](c(a))},function(e){var i=r(this),o=(e=c(e),a(t,i,e));return o.done?o.value:(o=i.lastIndex,l(o,0)||(i.lastIndex=0),e=d(i,e),l(i.lastIndex,o)||(i.lastIndex=o),null===e?-1:e.index)}]}))},b424:function(e,t,a){},ee88:function(e,t,a){"use strict";a.r(t),a("caad"),a("2532"),a("b0c0");var i=a("c7eb"),o=a("1da1"),r=a("5530"),n=(a("c740"),a("a434"),a("14d9"),a("498a"),a("d3b7"),a("25f0"),a("159b"),a("2f62")),s=a("46c4"),l=a("30ba"),c=(l=a.n(l),a("4e82"),a("d81d"),a("fb6a"),a("ac1f"),a("5319"),a("5b81"),a("4de4"),a("841c"),a("5bb2")),u={name:"menusFrom",props:{formVal:{type:Object,default:null},titleFrom:{type:String,default:""}},data:function(){return{arrs:[],searchRule:"",iconVal:"",grid:{xl:22,lg:22,md:22,sm:22,xs:22},modals:!1,modal12:!1,FromData:[],valids:!1,list2:[],list:c.a,search:c.a,ruleModal:!1,ruleList:[],authType:1,formValidate:{},searchData:[],isShowRadio:[{value:1,label:"开启"},{value:0,label:"关闭"}]}},watch:{formVal:function(e){this.formValidate=e},"formValidate.header":function(e){this.formValidate.is_header=e?1:0},"formValidate.auth_type":function(e){this.authType=e=void 0===e?1:e},"formValidate.data":function(e){}},computed:{optionsList:function(){var e=[];return this.FromData.map((function(t){"pid"===t.field&&(e=t.options)})),e},headerOptionsList:function(){var e=[];return this.FromData.map((function(t){"header"===t.field&&(e=t.options)})),e},optionsListmodule:function(){var e=[];return this.FromData.map((function(t){"module"===t.field&&(e=t.options)})),e},optionsRadio:function(){var e=[];return this.FromData.map((function(t){"auth_type"===t.field&&(e=t.options)})),e},isheaderRadio:function(){var e=[];return this.FromData.map((function(t){"is_header"===t.field&&(e=t.options)})),e},isShowPathRadio:function(){var e=[];return this.FromData.map((function(t){"is_show_path"===t.field&&(e=t.options)})),e},menuList:function(){var e=[];return this.FromData.map((function(t){"menu_list"===t.field&&(e=t.props.options)})),e}},methods:{getRuleList:function(){var e=this;Object(s.d)().then((function(t){e.ruleList=t.data,e.ruleModal=!0}))},modalchange:function(){this.arrs=[],this.ruleModal="",this.ruleModal=!1},changeUnique:function(e){e=this.$routeProStr+e.target.value,"/"===e.slice(0,1)&&(e=e.replace("/","")),this.formValidate.unique_auth=e.replaceAll("/","-")},changeAuthType:function(e){this.authType=e},changeShow:function(e){this.formValidate.is_show=e},selectRule:function(e){var t=this;this.$emit("selectRule",e),this.$nextTick((function(e){t.ruleModal=!1}))},upIcon:function(e){var t=this;this.searchData=this.list.filter((function(e){return-1<e.indexOf(t.iconVal)}))},searchRules:function(){if(this.searchRule.trim()){this.arrs=[];for(var e=0;e<this.ruleList.length;e++)-1!==this.ruleList[e].real_name.indexOf(this.searchRule)&&this.arrs.push(e)}else this.arrs=[]},init:function(){this.searchRule="",this.arrs=[]},handleCreate1:function(e){this.headerOptionsList.push({value:e,label:e})},getAddFrom:function(){var e=this;Object(s.a)().then(function(){var t=Object(o.a)(Object(i.a)().mark((function t(a){return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.FromData=a.data.rules;case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$message.error(t.msg)}))},iconClick:function(){this.modal12=!0},iconChange:function(e){this.formValidate.icon=e,this.modal12=!1},handleSubmit:function(e){var t=this,a=(this.formValidate.path&&(a=this.formValidate.path.length,this.formValidate.pid=this.formValidate.path[a-1]||0),{url:this.formValidate.id?"/setting/menus/".concat(this.formValidate.id):"/setting/menus",method:this.formValidate.id?"put":"post",datas:this.formValidate});return this.formValidate.menu_name?this.formValidate.menu_path||2==this.authType?this.formValidate.api_url||2!=this.authType?(this.valids=!0,void Object(s.b)(a).then(function(){var e=Object(o.a)(Object(i.a)().mark((function e(a){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$message.success(a.msg),t.modals=!1,t.$emit("changeMenu"),t.getAddFrom();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.valids=!1,t.$message.error(e.msg)}))):this.$message.warning("请填写接口地址"):this.$message.warning("请填写页面/按钮地址"):this.$message.warning("请填写菜单/按钮/接口名称")},handleReset:function(){this.modals=!1,this.$refs.formValidate.resetFields(),this.$emit("clearFrom")}},created:function(){this.list=this.search}},d=(a("006e"),a("2877")),h=(u=Object(d.a)(u,(function(){var e=this,t=e._self._c;return t("div",[t("el-dialog",{attrs:{visible:e.modals,width:"540px",title:e.titleFrom,"close-on-click-modal":!1},on:{"update:visible":function(t){e.modals=t}}},[t("el-form",{ref:"formValidate",attrs:{model:e.formValidate,"label-width":"80px"},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-row",{attrs:{gutter:24}},[t("el-col",e._b({},"el-col",e.grid,!1),[t("el-form-item",{attrs:{label:"类型："}},[t("el-radio-group",{on:{input:e.changeAuthType},model:{value:e.formValidate.auth_type,callback:function(t){e.$set(e.formValidate,"auth_type",t)},expression:"formValidate.auth_type"}},e._l(e.optionsRadio,(function(a,i){return t("el-radio",{key:i,attrs:{label:a.value}},[t("span",[e._v(e._s(a.label))])])})),1)],1)],1),t("el-col",e._b({},"el-col",e.grid,!1),[t("el-form-item",{attrs:{label:e.authType?"按钮名称：":"接口名称：",prop:"menu_name"}},[t("div",{staticClass:"add"},[t("el-input",{attrs:{placeholder:e.authType?"请输入按钮名称":"请输入接口名称"},model:{value:e.formValidate.menu_name,callback:function(t){e.$set(e.formValidate,"menu_name",t)},expression:"formValidate.menu_name"}})],1)])],1),t("el-col",e._b({},"el-col",e.grid,!1),[t("el-form-item",{attrs:{label:"父级分类："}},[t("el-cascader",{staticStyle:{width:"100%"},attrs:{options:e.menuList,"change-on-select":"",filterable:""},model:{value:e.formValidate.path,callback:function(t){e.$set(e.formValidate,"path",t)},expression:"formValidate.path"}})],1)],1),2!=e.authType?t("el-col",e._b({},"el-col",e.grid,!1),[t("el-form-item",{attrs:{label:"页面地址：",prop:"menu_path"}},[t("el-input",{attrs:{placeholder:"请输入页面地址"},on:{change:e.changeUnique},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("span",[e._v(e._s(e.$routeProStr))])]},proxy:!0}],null,!1,3931479926),model:{value:e.formValidate.menu_path,callback:function(t){e.$set(e.formValidate,"menu_path",t)},expression:"formValidate.menu_path"}})],1)],1):e._e(),2==e.authType?t("el-col",e._b({},"el-col",e.grid,!1),[t("el-form-item",{attrs:{label:"请求方式：",prop:"methods"}},[t("el-select",{model:{value:e.formValidate.methods,callback:function(t){e.$set(e.formValidate,"methods",t)},expression:"formValidate.methods"}},[t("el-option",{attrs:{value:"GET",label:"GET"}}),t("el-option",{attrs:{value:"POST",label:"POST"}}),t("el-option",{attrs:{value:"PUT",label:"PUT"}}),t("el-option",{attrs:{value:"DELETE",label:"DELETE"}})],1)],1)],1):e._e(),2==e.authType?t("el-col",e._b({},"el-col",e.grid,!1),[t("el-form-item",{attrs:{label:"接口地址：",prop:"api_url"}},[t("el-input",{attrs:{placeholder:"请输入接口地址"},on:{change:e.changeUnique},model:{value:e.formValidate.api_url,callback:function(t){e.$set(e.formValidate,"api_url",t)},expression:"formValidate.api_url"}})],1)],1):e._e(),t("el-col",e._b({},"el-col",e.grid,!1),[t("el-form-item",{attrs:{label:"权限标识：",prop:"unique_auth"}},[t("el-input",{attrs:{placeholder:"请输入权限标识"},model:{value:e.formValidate.unique_auth,callback:function(t){e.$set(e.formValidate,"unique_auth",t)},expression:"formValidate.unique_auth"}})],1)],1),2!=e.authType?t("el-col",e._b({},"el-col",e.grid,!1),[t("el-form-item",{attrs:{label:"图标："}},[t("el-input",{attrs:{placeholder:"请选择图标，点击右面图标"},model:{value:e.formValidate.icon,callback:function(t){e.$set(e.formValidate,"icon",t)},expression:"formValidate.icon"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-picture-outline"},on:{click:e.iconClick},slot:"append"})],1)],1)],1):e._e(),t("el-col",e._b({},"el-col",e.grid,!1),[t("el-form-item",{attrs:{label:"备注："}},[t("el-input",{attrs:{placeholder:"请输入备注",number:""},model:{value:e.formValidate.mark,callback:function(t){e.$set(e.formValidate,"mark",t)},expression:"formValidate.mark"}})],1)],1),t("el-col",e._b({},"el-col",e.grid,!1),[t("el-form-item",{attrs:{label:"排序："}},[t("el-input",{attrs:{type:"number",placeholder:"请输入排序",number:""},model:{value:e.formValidate.sort,callback:function(t){e.$set(e.formValidate,"sort",t)},expression:"formValidate.sort"}})],1)],1),t("el-col",e._b({},"el-col",e.grid,!1),[t("el-form-item",{attrs:{label:"状态："}},[t("el-radio-group",{on:{input:e.changeShow},model:{value:e.formValidate.is_show,callback:function(t){e.$set(e.formValidate,"is_show",t)},expression:"formValidate.is_show"}},e._l(e.isShowRadio,(function(a,i){return t("el-radio",{key:i,attrs:{label:a.value}},[t("span",[e._v(e._s(a.label))])])})),1)],1)],1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.handleReset}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("提 交")])],1)],1),t("el-dialog",{attrs:{visible:e.modal12,width:"720px",title:"图标选择"},on:{"update:visible":function(t){e.modal12=t}}},[t("el-input",{ref:"search",staticStyle:{width:"300px"},attrs:{placeholder:"输入关键词搜索,注意全是英文",clearable:""},on:{change:function(t){return e.upIcon(e.iconVal)}},model:{value:e.iconVal,callback:function(t){e.iconVal=t},expression:"iconVal"}}),t("div",{staticClass:"trees-coadd"},[t("div",{staticClass:"scollhide"},[t("div",{staticClass:"iconlist"},[t("ul",{staticClass:"list-inline"},e._l(e.iconVal?e.searchData:e.list,(function(a,i){return t("li",{key:i,staticClass:"icons-item",attrs:{title:a}},[t("i",{staticClass:"f-s-24",class:"el-icon-"+a,on:{click:function(t){return e.iconChange(a)}}})])})),0)])])])],1),t("el-dialog",{attrs:{visible:e.ruleModal,width:"1100px",title:"权限列表"},on:{"update:visible":function(t){e.ruleModal=t},closed:e.modalchange}},[t("div",{staticClass:"search-rule"},[t("el-input",{ref:"search",staticClass:"mr10",staticStyle:{width:"300px"},attrs:{placeholder:"输入关键词搜索",clearable:""},model:{value:e.searchRule,callback:function(t){e.searchRule=t},expression:"searchRule"}}),t("el-button",{staticClass:"mr10",attrs:{type:"primary"},on:{click:e.searchRules}},[e._v("搜索")]),t("el-button",{on:{click:e.init}},[e._v("重置")])],1),t("div",{staticClass:"rule"},e._l(e.ruleList,(function(a,i){return t("div",{directives:[{name:"show",rawName:"v-show",value:!e.arrs.length||e.arrs.includes(i),expression:"!arrs.length || arrs.includes(index)"}],key:i,staticClass:"rule-list",class:{"select-rule":e.arrs.includes(i)},on:{click:function(t){return e.selectRule(a)}}},[t("div",[e._v("接口名称："+e._s(a.real_name))]),t("div",[e._v("请求方式："+e._s(a.method))]),t("div",[e._v("接口地址："+e._s(a.rule))])])})),0)])],1)}),[],!1,null,"3acbeb96",null).exports,a("6987"));u={name:"systemMenus",data:function(){return{children:[],expandedKeys:[],tabconfig:{children:"children",reserve:!0,accordion:!0},spinShow:!1,ruleModal:!1,searchRule:"",grid:{xl:7,lg:7,md:12,sm:24,xs:24},roleData:{is_show:"",keyword:""},defaultProps:{children:"children",label:"name"},ruleCateList:[],loading:!1,tableData:[],FromData:null,icons:"",formValidate:{auth_type:"",menu_name:"",path:"",api_url:"",menu_path:"",methods:"",unique_auth:"",mark:"",sort:"",is_show:0},titleFrom:"",modalTitleSs:"",routeType:"0",arrs:[],foundationList:[],openList:[],seletRoute:[],seletRouteIds:[],menusId:0,nodeKey:0}},components:{menusFrom:u,formCreate:l.a.$form()},computed:Object(r.a)(Object(r.a)({},Object(n.d)("admin/layout",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:"80px"},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){this.getData()},methods:{init:function(){this.searchRule="",this.searchRules()},addRouters:function(){var e=this,t={menus:this.seletRoute};Object(s.g)(t).then((function(t){e.getData(),e.ruleModal=!1})).catch((function(t){e.$message.error(t.msg)}))},selectRule:function(e){var t;this.seletRouteIds.includes(e.id)?(t=this.seletRouteIds.findIndex((function(t){return t==e.id})),this.seletRouteIds.splice(t,1),this.seletRoute.splice(t,1)):(this.seletRouteIds.push(e.id),this.seletRoute.push({menu_name:e.name,unique_auth:"",api_url:e.path,path:this.menusId,method:e.method}))},changTab:function(e){this.routeType=e,e=parseInt(e),this.children=this.foundationList[e]?this.foundationList[e].children:[],this.searchRules()},searchRules:function(){if(this.searchRule.trim()){this.arrs=[];for(var e=this.foundationList,t=0;t<e.length;t++)-1!==e[t].name.indexOf(this.searchRule)&&this.arrs.push(e[t].id)}else this.arrs=[]},addRoute:function(e){var t=this;this.menusId=e.id,this.routeType="0",Object(s.i)().then((function(e){t.ruleCateList=e.data,t.ruleModal=!0,e.data.length&&t.$nextTick((function(a){t.expandedKeys=Object(h.b)(e.data[0],[]),t.nodeKey=Object(h.a)(e.data).id,t.$refs.treeBox.setCurrentKey(t.nodeKey),t.getRuleList(t.nodeKey)}))}))},handleNodeClick:function(e){this.getRuleList(e.id)},modalchange:function(){this.seletRouteIds=[],this.seletRoute=[]},getRuleList:function(e){var t=this;Object(s.d)(e).then((function(e){t.foundationList=e.data,t.children=e.data,t.searchRules()}))},onchangeIsShow:function(e){var t=this;e={id:e.id,is_show:e.is_show};Object(s.f)(e).then(function(){var e=Object(o.a)(Object(i.a)().mark((function e(a){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$message.success(a.msg),t.$store.dispatch("menus/getMenusNavList");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$message.error(e.msg)}))},getList:function(){this.formValidate=Object.assign({},this.$options.data().formValidate),this.getData()},clearFrom:function(){this.formValidate=Object.assign({},this.$options.data().formValidate)},addE:function(e,t){var a=this,r=(this.formValidate={is_show:0},e.id.toString());r?Object(s.h)(e.id).then(function(){var n=Object(o.a)(Object(i.a)().mark((function o(n){return Object(i.a)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:a.formValidate.path=n.data.path,a.formValidate.path.push(e.id),a.formValidate.pid=r,a.$refs.menusFrom.valids=!1,a.titleFrom=t,a.formValidate.auth_type=1,a.formValidate.is_show_path=0,a.$refs.menusFrom.getAddFrom(),a.$refs.menusFrom.modals=!0;case 9:case"end":return i.stop()}}),o)})));return function(e){return n.apply(this,arguments)}}()).catch((function(e){a.$message.error(e.msg)})):(this.formValidate.pid=r,this.$refs.menusFrom.modals=!0,this.$refs.menusFrom.valids=!1,this.titleFrom=t,this.formValidate.auth_type=1,this.formValidate.is_show_path=0)},del:function(e,t){var a=this;t={title:t,url:"/setting/menus/".concat(e.id),method:"DELETE",ids:""};this.$modalSure(t).then((function(e){a.$message.success(e.msg),a.getData(),a.getMenusUnique()})).catch((function(e){a.$message.error(e.msg)}))},menusDetails:function(e){var t=this;Object(s.h)(e).then(function(){var e=Object(o.a)(Object(i.a)().mark((function e(a){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.formValidate=a.data,t.$refs.menusFrom.modals=!0;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$message.error(e.msg)}))},edit:function(e,t,a){this.formValidate={},this.menusDetails(e.id),this.titleFrom=t,this.$refs.menusFrom.valids=!1,this.$refs.menusFrom.getAddFrom(e.id)},menusAdd:function(e){this.$refs.menusFrom.modals=!0,this.$refs.menusFrom.valids=!1,this.$refs.menusFrom.getAddFrom(),this.titleFrom=e,this.formValidate.auth_type=1,this.formValidate.is_show=0,this.formValidate.is_show_path=0},getData:function(){var e=this;this.loading=!0,this.roleData.is_show=this.roleData.is_show||"",Object(s.e)(this.roleData).then(function(){var t=Object(o.a)(Object(i.a)().mark((function t(a){return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.tableData=a.data,e.loading=!1;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$message.error(t.msg)}))},getMenusUnique:function(){var e=this;Object(s.c)().then((function(t){t=t.data;var a=(e.$store.commit("userInfo/uniqueAuth",t.uniqueAuth),e.$store.commit("menus/getmenusNav",t.menus),e.$store.dispatch("routesList/setRoutesList",t.menus),Object(h.c)(e.$router.options.routes));e.formatTwoStageRoutes(a),a=Object(h.c)(t.menus);e.$store.commit("menus/setOneLvRoute",a),e.bus.$emit("routesListChange")}))},formatTwoStageRoutes:function(e){var t,a,i=this;return!(e.length<=0)&&(t=[],a=[],e.forEach((function(e){e&&e.meta&&e.meta.keepAlive&&(t.push(Object(r.a)({},e)),a.push(e.name),i.$store.dispatch("keepAliveNames/setCacheKeepAlive",a))})),t)},cancel:function(){this.$emit("onCancel")}}},a("2729"),l=Object(d.a)(u,(function(){var e=this,t=e._self._c;return t("div",[t("el-card",{staticClass:"ivu-mb-16",attrs:{bordered:!1,shadow:"never","body-style":{padding:0}}},[t("div",{staticClass:"padding-add"},[t("el-form",{ref:"roleData",attrs:{model:e.roleData,"label-width":e.labelWidth,"label-position":e.labelPosition,inline:""},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",{attrs:{label:"规则状态："}},[t("el-select",{staticClass:"form_content_width",attrs:{placeholder:"请选择",clearable:""},on:{change:e.getData},model:{value:e.roleData.is_show,callback:function(t){e.$set(e.roleData,"is_show",t)},expression:"roleData.is_show"}},[t("el-option",{attrs:{value:"1",label:"显示"}}),t("el-option",{attrs:{value:"0",label:"不显示"}})],1)],1),t("el-form-item",{attrs:{label:"按钮名称：",prop:"status2","label-for":"status2"}},[t("el-input",{staticClass:"form_content_width",attrs:{clearable:"",placeholder:"请输入按钮名称"},model:{value:e.roleData.keyword,callback:function(t){e.$set(e.roleData,"keyword",t)},expression:"roleData.keyword"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.getData}},[e._v("查询")])],1)],1)],1)]),t("el-card",{staticClass:"ivu-mt",attrs:{bordered:!1,shadow:"never"}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.menusAdd("添加规则")}}},[e._v("添加规则 ")]),t("vxe-table",{ref:"xTable",staticClass:"vxeTable mt14",attrs:{border:!1,"highlight-hover-row":"","highlight-current-row":"",loading:e.loading,"header-row-class-name":"false","tree-config":e.tabconfig,data:e.tableData,"row-id":"id"}},[t("vxe-table-column",{attrs:{field:"menu_name","tree-node":"",title:"按钮名称","min-width":"100"}}),t("vxe-table-column",{attrs:{field:"unique_auth",title:"前端权限","min-width":"200"}}),t("vxe-table-column",{attrs:{field:"menu_path",title:"路由","min-width":"240",tooltip:"true"},scopedSlots:e._u([{key:"default",fn:function(a){return a=a.row,[1==a.auth_type?t("span",[e._v("菜单："+e._s(a.menu_path))]):e._e(),3==a.auth_type?t("span",[e._v("按钮")]):e._e(),2==a.auth_type?t("span",[e._v("接口：["+e._s(a.methods)+"]"+e._s(a.api_url))]):e._e()]}}])}),t("vxe-table-column",{attrs:{field:"flag",title:"规则状态","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(a){var i=a.row;return[t("el-switch",{attrs:{"active-value":1,"inactive-value":0,value:i.is_show,size:"large"},on:{change:function(t){return e.onchangeIsShow(i)}},model:{value:i.is_show,callback:function(t){e.$set(i,"is_show",t)},expression:"row.is_show"}})]}}])}),t("vxe-table-column",{attrs:{field:"mark",title:"备注","min-width":"120"}}),t("vxe-table-column",{attrs:{field:"date",title:"操作",width:"230",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(a){var i=a.row;return[t("span",[1===i.auth_type||3===i.auth_type?t("a",{on:{click:function(t){return e.addRoute(i)}}},[e._v("选择权限")]):e._e(),1===i.auth_type||3===i.auth_type?t("el-divider",{attrs:{direction:"vertical"}}):e._e(),1===i.auth_type||3===i.auth_type?t("a",{on:{click:function(t){return e.addE(i,"添加子菜单")}}},[e._v("添加下级")]):e._e()],1),1===i.auth_type||3===i.auth_type?t("el-divider",{attrs:{direction:"vertical"}}):e._e(),t("a",{on:{click:function(t){return e.edit(i,"编辑")}}},[e._v("编辑")]),t("el-divider",{attrs:{direction:"vertical"}}),t("a",{on:{click:function(t){return e.del(i,"删除规则")}}},[e._v("删除")])]}}])})],1)],1),t("menus-from",{ref:"menusFrom",attrs:{formVal:e.formValidate,titleFrom:e.titleFrom},on:{getList:e.getList,changeMenu:e.getMenusUnique,clearFrom:e.clearFrom}}),t("el-dialog",{attrs:{visible:e.ruleModal,width:"1100px",title:"权限列表"},on:{"update:visible":function(t){e.ruleModal=t},closed:e.modalchange}},[t("div",{staticClass:"search-rule"},[t("el-alert",[t("template",{slot:"title"},[e._v("\n          1.接口可多选，可重复添加；"),t("br"),e._v("2.添加路由按照路由规则进行添加，即可在开发工具->接口管理里面点击同步；"),t("br"),e._v("3.同步完成即可在此选择对应的接口；\n        ")])],2),t("el-input",{ref:"search",staticClass:"mr10 mt10 form_content_width",attrs:{placeholder:"输入关键词搜索",clearable:""},model:{value:e.searchRule,callback:function(t){e.searchRule=t},expression:"searchRule"}}),t("el-button",{staticClass:"mr10",attrs:{type:"primary"},on:{click:e.searchRules}},[e._v("搜索")]),t("el-button",{on:{click:e.init}},[e._v("重置")])],1),t("div",{staticClass:"route-list"},[t("div",{staticClass:"tree"},[t("el-tree",{ref:"treeBox",attrs:{data:e.ruleCateList,"highlight-current":!0,props:e.defaultProps,"node-key":"id","default-expanded-keys":e.expandedKeys,"current-node-key":e.nodeKey},on:{"node-click":e.handleNodeClick}})],1),t("div",{staticClass:"rule"},e._l(e.children,(function(a,i){return t("div",{directives:[{name:"show",rawName:"v-show",value:!e.arrs.length||e.arrs.includes(a.id),expression:"!arrs.length || arrs.includes(item.id)"}],key:i,staticClass:"rule-list",class:{"select-rule":e.seletRouteIds.includes(a.id)},on:{click:function(t){return e.selectRule(a)}}},[t("div",[e._v("接口名称："+e._s(a.name))]),t("div",[e._v("请求方式："+e._s(a.method))]),t("div",[e._v("接口地址："+e._s(a.path))])])})),0)]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.ruleModal=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.addRouters}},[e._v("确 定")])],1)])],1)}),[],!1,null,"5d81dc57",null);t.default=l.exports}}]);