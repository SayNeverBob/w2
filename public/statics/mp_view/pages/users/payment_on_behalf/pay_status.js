require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/payment_on_behalf/pay_status"],{"4ac8":function(t,i,e){},"5f9d":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this.$createElement,i=(this._self._c,this.$t("代付成功")),e=this.$t("￥"),n=this.$t("谢谢你为我付款，还可以再去看看其他商品哟~"),a=this.$t("返回首页");this.$mp.data=Object.assign({},{$root:{m0:i,m1:e,m2:n,m3:a}})},a=[]},"97cb":function(t,i,e){"use strict";(function(t){var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e("39ed"),o=e("86eb"),d=e("26cb"),r=n(e("19b6")),u=e("d1ea"),s={mixins:[r.default],data:function(){return{loading:!1,isAuto:!1,isShowAuth:!1,resData:{}}},computed:(0,d.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,i){t&&(void 0).getDetail()},deep:!0}},onLoad:function(t){if(this.options=t,!t.order_id)return this.$util.Tips({title:this.$t("缺少参数无法查看订单支付状态")},{tab:3,url:1});this.orderId=t.order_id},onShow:function(){this.isLogin?this.getDetail():(0,o.toLogin)()},methods:{getDetail:function(){var t=this;(0,u.friendDetail)(this.orderId).then((function(i){if(0==t.resData.paid)return t.$util.Tips({title:t.$t("该订单暂未支付")},{tab:3,url:1});t.resData=i.data.info}))},openTap:function(){this.$set(this,"couponsHidden",!this.couponsHidden)},onLoadFun:function(){this.getDetail()},getOrderPayInfo:function(){var i=this,e=this;t.showLoading({title:e.$t("正在加载中")}),(0,a.getOrderDetail)(e.orderId).then((function(n){t.hideLoading(),e.$set(e,"order_pay_info",n.data),t.setNavigationBarTitle({title:n.data.paid?e.$t("支付成功"):e.$t("未支付")}),i.loading=!0})).catch((function(e){i.loading=!0,t.hideLoading()}))},goIndex:function(i){t.switchTab({url:"/pages/index/index"})}}};i.default=s}).call(this,e("543d")["default"])},ad68:function(t,i,e){"use strict";e.r(i);var n=e("5f9d"),a=e("b0df");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("de7e");var d=e("f0c5"),r=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"3ff2ddb5",null,!1,n["a"],void 0);i["default"]=r.exports},b0df:function(t,i,e){"use strict";e.r(i);var n=e("97cb"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},de7e:function(t,i,e){"use strict";var n=e("4ac8"),a=e.n(n);a.a},ea19:function(t,i,e){"use strict";(function(t,i){var n=e("4ea4");e("4789");n(e("66fd"));var a=n(e("ad68"));t.__webpack_require_UNI_MP_PLUGIN__=e,i(a.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])}},[["ea19","common/runtime","common/vendor"]]]);