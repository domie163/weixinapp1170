(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zaisuqingkuang/add-or-update"],{"465b":function(e,n,a){"use strict";var t=a("d47e"),r=a.n(t);r.a},"7ba3e":function(e,n,a){"use strict";a.r(n);var t=a("e0ba"),r=a.n(t);for(var u in t)"default"!==u&&function(e){a.d(n,e,(function(){return t[e]}))}(u);n["default"]=r.a},"8ed8":function(e,n,a){"use strict";a.r(n);var t=a("948e"),r=a("7ba3e");for(var u in r)"default"!==u&&function(e){a.d(n,e,(function(){return r[e]}))}(u);a("465b");var i,o=a("f0c5"),s=Object(o["a"])(r["default"],t["b"],t["c"],!1,null,"ad12daa6",null,!1,t["a"],i);n["default"]=s.exports},"948e":function(e,n,a){"use strict";a.d(n,"b",(function(){return r})),a.d(n,"c",(function(){return u})),a.d(n,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"deef"))}},r=function(){var e=this,n=e.$createElement;e._self._c},u=[]},d47e:function(e,n,a){},e0ba:function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(a("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n,a,t,r,u,i){try{var o=e[u](i),s=o.value}catch(c){return void a(c)}o.done?n(s):Promise.resolve(s).then(t,r)}function i(e){return function(){var n=this,a=arguments;return new Promise((function(t,r){var i=e.apply(n,a);function o(e){u(i,t,r,o,s,"next",e)}function s(e){u(i,t,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("deef"))}.bind(null,a)).catch(a.oe)},s={data:function(){return{cross:"",ruleForm:{xuehao:"",xingming:"",chuangweihao:"",qingkuangzhaopian:"",leibie:"",qiandaoshijian:"",beizhu:"",suguanzhanghao:"",suguanxingming:"",userid:""},leibieOptions:[],leibieIndex:0,suguanzhanghaoOptions:[],suguanzhanghaoIndex:0,user:{},ro:{xuehao:!1,xingming:!1,chuangweihao:!1,qingkuangzhaopian:!1,leibie:!1,qiandaoshijian:!1,beizhu:!1,suguanzhanghao:!1,suguanxingming:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var a=this;return i(t.default.mark((function r(){var u,i,o,s;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a.ruleForm.qiandaoshijian=a.$utils.getCurDateTime(),u=e.getStorageSync("nowTable"),r.next=4,a.$api.session(u);case 4:return i=r.sent,a.user=i.data,a.ruleForm.xuehao=a.user.xuehao,a.ro.xuehao=!0,a.ruleForm.xingming=a.user.xingming,a.ro.xingming=!0,a.ruleForm.chuangweihao=a.user.chuangweihao,a.ro.chuangweihao=!0,a.leibieOptions="签到,签退".split(","),r.next=15,a.$api.option("suguan","suguanzhanghao",{});case 15:if(i=r.sent,a.suguanzhanghaoOptions=i.data,a.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(a.ruleForm.refid=n.refid,a.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=25;break}return a.ruleForm.id=n.id,r.next=23,a.$api.info("zaisuqingkuang",a.ruleForm.id);case 23:i=r.sent,a.ruleForm=i.data;case 25:if(a.cross=n.cross,!n.cross){r.next=73;break}o=e.getStorageSync("crossObj"),r.t0=t.default.keys(o);case 29:if((r.t1=r.t0()).done){r.next=73;break}if(s=r.t1.value,"xuehao"!=s){r.next=35;break}return a.ruleForm.xuehao=o[s],a.ro.xuehao=!0,r.abrupt("continue",29);case 35:if("xingming"!=s){r.next=39;break}return a.ruleForm.xingming=o[s],a.ro.xingming=!0,r.abrupt("continue",29);case 39:if("chuangweihao"!=s){r.next=43;break}return a.ruleForm.chuangweihao=o[s],a.ro.chuangweihao=!0,r.abrupt("continue",29);case 43:if("qingkuangzhaopian"!=s){r.next=47;break}return a.ruleForm.qingkuangzhaopian=o[s],a.ro.qingkuangzhaopian=!0,r.abrupt("continue",29);case 47:if("leibie"!=s){r.next=51;break}return a.ruleForm.leibie=o[s],a.ro.leibie=!0,r.abrupt("continue",29);case 51:if("qiandaoshijian"!=s){r.next=55;break}return a.ruleForm.qiandaoshijian=o[s],a.ro.qiandaoshijian=!0,r.abrupt("continue",29);case 55:if("beizhu"!=s){r.next=59;break}return a.ruleForm.beizhu=o[s],a.ro.beizhu=!0,r.abrupt("continue",29);case 59:if("suguanzhanghao"!=s){r.next=63;break}return a.ruleForm.suguanzhanghao=o[s],a.ro.suguanzhanghao=!0,r.abrupt("continue",29);case 63:if("suguanxingming"!=s){r.next=67;break}return a.ruleForm.suguanxingming=o[s],a.ro.suguanxingming=!0,r.abrupt("continue",29);case 67:if("userid"!=s){r.next=71;break}return a.ruleForm.userid=o[s],a.ro.userid=!0,r.abrupt("continue",29);case 71:r.next=29;break;case 73:a.styleChange();case 74:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},suguanzhanghaoChange:function(e){var n=this;return i(t.default.mark((function a(){var r;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.suguanzhanghaoIndex=e.target.value,n.ruleForm.suguanzhanghao=n.suguanzhanghaoOptions[n.suguanzhanghaoIndex],a.next=4,n.$api.follow("suguan","suguanzhanghao",{columnValue:n.ruleForm.suguanzhanghao});case 4:r=a.sent,r.data.suguanxingming&&(n.ruleForm.suguanxingming=r.data.suguanxingming);case 6:case"end":return a.stop()}}),a)})))()},qiandaoshijianConfirm:function(e){console.log(e),this.ruleForm.qiandaoshijian=e.result,this.$forceUpdate()},leibieChange:function(e){this.leibieIndex=e.target.value,this.ruleForm.leibie=this.leibieOptions[this.leibieIndex]},qingkuangzhaopianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.qingkuangzhaopian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return i(t.default.mark((function a(){var r,u,i,o,s,c,g,l,h,d;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!n.cross){a.next=16;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){a.next=16;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){a.next=12;break}for(g in c)g==o&&(c[g]=s);return l=e.getStorageSync("crossTable"),a.next=10,n.$api.update("".concat(l),c);case 10:a.next=16;break;case 12:r=Number(e.getStorageSync("userid")),u=c["id"],i=e.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 16:if(!u||!r){a.next=38;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=u,h={page:1,limit:10,crossuserid:r,crossrefid:u},a.next=22,n.$api.list("zaisuqingkuang",h);case 22:if(d=a.sent,!(d.data.total>=i)){a.next=28;break}return n.$utils.msg(e.getStorageSync("tips")),a.abrupt("return",!1);case 28:if(!n.ruleForm.id){a.next=33;break}return a.next=31,n.$api.update("zaisuqingkuang",n.ruleForm);case 31:a.next=35;break;case 33:return a.next=35,n.$api.add("zaisuqingkuang",n.ruleForm);case 35:n.$utils.msgBack("提交成功");case 36:a.next=46;break;case 38:if(!n.ruleForm.id){a.next=43;break}return a.next=41,n.$api.update("zaisuqingkuang",n.ruleForm);case 41:a.next=45;break;case 43:return a.next=45,n.$api.add("zaisuqingkuang",n.ruleForm);case 45:n.$utils.msgBack("提交成功");case 46:case"end":return a.stop()}}),a)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,a=n.getFullYear(),t=n.getMonth()+1,r=n.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(a,"-").concat(t,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,a("543d")["default"])},f187:function(e,n,a){"use strict";(function(e){a("dfc9");t(a("66fd"));var n=t(a("8ed8"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("543d")["createPage"])}},[["f187","common/runtime","common/vendor"]]]);