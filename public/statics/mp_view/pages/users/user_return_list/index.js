require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_return_list/index"],{1565:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.orderList.length),i=n?t.__map(t.orderList,(function(e,n){var i=t.__get_orig(e),o=t.$t("订单号"),r=t.$t("￥"),a=t.$t("共"),s=t.$t("件商品，总金额"),d=t.$t("￥");return{$orig:i,m0:o,m1:r,m2:a,m3:s,m4:d}})):null,o=t.orderList.length,r=0==t.orderList.length&&!t.loading,a=r?t.$t("暂无退款订单~"):null;t.$mp.data=Object.assign({},{$root:{g0:n,l0:i,g1:o,g2:r,m5:a}})},o=[]},"555f":function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("4789");i(n("66fd"));var o=i(n("ccf4"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"64b1":function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("39ed"),r=n("86eb"),a=n("26cb"),s=i(n("19b6")),d={components:{home:function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("3b71"))}.bind(null,n)).catch(n.oe)},emptyPage:function(){n.e("components/emptyPage").then(function(){return resolve(n("42ff"))}.bind(null,n)).catch(n.oe)},authorize:function(){n.e("components/Authorize").then(function(){return resolve(n("ad23"))}.bind(null,n)).catch(n.oe)}},mixins:[s.default],data:function(){return{type:0,loading:!1,loadend:!1,loadTitle:this.$t("加载更多"),orderList:[],orderStatus:-3,page:1,limit:20,isAuto:!1,isShowAuth:!1,tabsList:[{key:0,name:this.$t("全部")},{key:1,name:this.$t("申请中")},{key:2,name:this.$t("已退款")}]}},computed:(0,a.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getOrderList()},deep:!0}},onLoad:function(){this.isLogin?this.getOrderList():(0,r.toLogin)()},onReachBottom:function(){this.getOrderList()},methods:{onLoadFun:function(){this.getOrderList()},authColse:function(t){this.isShowAuth=t},goOrderDetails:function(e){if(!e)return that.$util.Tips({title:that.$t("缺少订单号无法查看订单详情")});t.navigateTo({url:"/pages/goods/order_details/index?order_id="+e+"&isReturen=1"})},changeTabs:function(t){this.type=t,this.loadend=!1,this.page=1,this.limit=20,this.orderList=[],this.getOrderList(t)},getOrderList:function(t){var e=this;e.loading||e.loadend||(e.loading=!0,e.loadTitle="",(0,o.getNewOrderList)({page:e.page,limit:e.limit,refund_status:t||e.type}).then((function(t){var n=t.data.list||[],i=n.length<e.limit;e.orderList=e.orderList.concat(n),e.$set(e,"orderList",e.orderList),e.loadend=i,e.loading=!1,e.loadTitle=i?e.$t("我也是有底线的"):e.$t("加载更多"),e.page=e.page+1})).catch((function(t){e.loading=!1,e.loadTitle=e.$t("加载更多")})))}}};e.default=d}).call(this,n("543d")["default"])},"89d6":function(t,e,n){"use strict";var i=n("db59"),o=n.n(i);o.a},be3d:function(t,e,n){"use strict";n.r(e);var i=n("64b1"),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},ccf4:function(t,e,n){"use strict";n.r(e);var i=n("1565"),o=n("be3d");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("89d6");var a=n("f0c5"),s=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"2a4c85cb",null,!1,i["a"],void 0);e["default"]=s.exports},db59:function(t,e,n){}},[["555f","common/runtime","common/vendor"]]]);