(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"62fc":function(e,t,n){"use strict";(function(e,t){var i=n("4ea4");n("4789");i(n("66fd"));var a=i(n("c17f"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"721c":function(e,t,n){"use strict";n.r(t);var i=n("ecca"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},c17f:function(e,t,n){"use strict";n.r(t);var i=n("dce7"),a=n("721c");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);var r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=c.exports},dce7:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this.$createElement;this._self._c},a=[]},ecca:function(e,t,n){"use strict";(function(e){var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(n("00e9"));var a=n("4e39"),o=n("d1ea"),r={data:function(){return{isDiy:e.getStorageSync("is_diy"),shareInfo:{},loading:!1}},components:{diy:function(){Promise.all([n.e("common/vendor"),n.e("pages/index/diy/index")]).then(function(){return resolve(n("837a"))}.bind(null,n)).catch(n.oe)},visualization:function(){Promise.all([n.e("common/vendor"),n.e("pages/index/visualization/index")]).then(function(){return resolve(n("e089"))}.bind(null,n)).catch(n.oe)}},onLoad:function(t){e.hideTabBar();var n=e.getEnterOptionsSync();n.query.scene&&this.$Cache.set("agent_id",n.query.scene),this.setOpenShare()},onShow:function(){this.getVersion(0),this.$Cache.get("agent_id")&&this.bindAgent()},onHide:function(){},methods:{bindAgent:function(t){var n=this;(0,o.spreadAgent)({agent_code:this.$Cache.get("agent_id")}).then((function(t){n.$Cache.clear("agent_id"),e.showToast({icon:"none",title:t.msg,duration:3e3})}))},getVersion:function(t){var n=this;e.$emit("uploadFooter"),(0,a.getVersion)(t).then((function(t){n.version=t.data.version,n.isDiy=t.data.is_diy,n.loading=!0,e.setStorageSync("is_diy",t.data.is_diy),e.getStorageSync("DIY_VERSION")&&t.data.version==e.getStorageSync("DIY_VERSION")||(e.getStorageSync("DIY_VERSION")&&(e.setStorageSync("DIY_VERSION",t.data.version),n.isDiy?n.$refs.diy.reconnect():n.$refs.vis.reconnect()),e.setStorageSync("DIY_VERSION",t.data.version))})).catch((function(e){n.$util.Tips({title:e})}))},setOpenShare:function(){var e=this;(0,a.getShare)().then((function(t){var n=t.data;e.shareInfo=n}))}},onReachBottom:function(){this.isDiy&&this.$refs.diy.onsollBotton()},onPageScroll:function(t){e.$emit("scroll")},onShareAppMessage:function(e){return{title:this.shareInfo.title,path:"/pages/index/index?spid="+this.$store.state.app.uid||!1,imageUrl:this.shareInfo.img}},onShareTimeline:function(){return{title:this.shareInfo.title,query:{spid:this.$store.state.app.uid||0},imageUrl:this.shareInfo.img}}};t.default=r}).call(this,n("543d")["default"])}},[["62fc","common/runtime","common/vendor"]]]);