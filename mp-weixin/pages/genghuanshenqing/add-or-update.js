(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/genghuanshenqing/add-or-update"],{1785:function(n,e,a){"use strict";var r=a("228e"),u=a.n(r);u.a},"228e":function(n,e,a){},"2edf":function(n,e,a){"use strict";a.r(e);var r=a("aa2f"),u=a.n(r);for(var t in r)"default"!==t&&function(n){a.d(e,n,(function(){return r[n]}))}(t);e["default"]=u.a},"333c":function(n,e,a){"use strict";a.d(e,"b",(function(){return u})),a.d(e,"c",(function(){return t})),a.d(e,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"deef"))}},u=function(){var n=this,e=n.$createElement;n._self._c},t=[]},a74e:function(n,e,a){"use strict";(function(n){a("dfc9");r(a("66fd"));var e=r(a("fe20"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,a("543d")["createPage"])},aa2f:function(n,e,a){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(a("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function t(n,e,a,r,u,t,i){try{var o=n[t](i),s=o.value}catch(c){return void a(c)}o.done?e(s):Promise.resolve(s).then(r,u)}function i(n){return function(){var e=this,a=arguments;return new Promise((function(r,u){var i=n.apply(e,a);function o(n){t(i,r,u,o,s,"next",n)}function s(n){t(i,r,u,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("deef"))}.bind(null,a)).catch(a.oe)},s={data:function(){return{cross:"",ruleForm:{shenqingbianhao:this.getUUID(),yuansushehao:"",xinsushehao:"",genghuanyuanyin:"",shenqingshijian:"",xuehao:"",xingming:"",shouji:"",zhaopian:"",suguanzhanghao:"",suguanxingming:"",sfsh:"",shhf:"",userid:""},suguanzhanghaoOptions:[],suguanzhanghaoIndex:0,user:{},ro:{shenqingbianhao:!1,yuansushehao:!1,xinsushehao:!1,genghuanyuanyin:!1,shenqingshijian:!1,xuehao:!1,xingming:!1,shouji:!1,zhaopian:!1,suguanzhanghao:!1,suguanxingming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var a=this;return i(r.default.mark((function u(){var t,i,o,s;return r.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return a.ruleForm.shenqingshijian=a.$utils.getCurDateTime(),t=n.getStorageSync("nowTable"),u.next=4,a.$api.session(t);case 4:return i=u.sent,a.user=i.data,a.ruleForm.xuehao=a.user.xuehao,a.ro.xuehao=!0,a.ruleForm.xingming=a.user.xingming,a.ro.xingming=!0,a.ruleForm.shouji=a.user.shouji,a.ro.shouji=!0,a.ruleForm.zhaopian=a.user.zhaopian,a.ro.zhaopian=!0,u.next=16,a.$api.option("suguan","suguanzhanghao",{});case 16:if(i=u.sent,a.suguanzhanghaoOptions=i.data,a.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(a.ruleForm.refid=e.refid,a.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){u.next=26;break}return a.ruleForm.id=e.id,u.next=24,a.$api.info("genghuanshenqing",a.ruleForm.id);case 24:i=u.sent,a.ruleForm=i.data;case 26:if(a.cross=e.cross,!e.cross){u.next=82;break}o=n.getStorageSync("crossObj"),u.t0=r.default.keys(o);case 30:if((u.t1=u.t0()).done){u.next=82;break}if(s=u.t1.value,"shenqingbianhao"!=s){u.next=36;break}return a.ruleForm.shenqingbianhao=o[s],a.ro.shenqingbianhao=!0,u.abrupt("continue",30);case 36:if("yuansushehao"!=s){u.next=40;break}return a.ruleForm.yuansushehao=o[s],a.ro.yuansushehao=!0,u.abrupt("continue",30);case 40:if("xinsushehao"!=s){u.next=44;break}return a.ruleForm.xinsushehao=o[s],a.ro.xinsushehao=!0,u.abrupt("continue",30);case 44:if("genghuanyuanyin"!=s){u.next=48;break}return a.ruleForm.genghuanyuanyin=o[s],a.ro.genghuanyuanyin=!0,u.abrupt("continue",30);case 48:if("shenqingshijian"!=s){u.next=52;break}return a.ruleForm.shenqingshijian=o[s],a.ro.shenqingshijian=!0,u.abrupt("continue",30);case 52:if("xuehao"!=s){u.next=56;break}return a.ruleForm.xuehao=o[s],a.ro.xuehao=!0,u.abrupt("continue",30);case 56:if("xingming"!=s){u.next=60;break}return a.ruleForm.xingming=o[s],a.ro.xingming=!0,u.abrupt("continue",30);case 60:if("shouji"!=s){u.next=64;break}return a.ruleForm.shouji=o[s],a.ro.shouji=!0,u.abrupt("continue",30);case 64:if("zhaopian"!=s){u.next=68;break}return a.ruleForm.zhaopian=o[s],a.ro.zhaopian=!0,u.abrupt("continue",30);case 68:if("suguanzhanghao"!=s){u.next=72;break}return a.ruleForm.suguanzhanghao=o[s],a.ro.suguanzhanghao=!0,u.abrupt("continue",30);case 72:if("suguanxingming"!=s){u.next=76;break}return a.ruleForm.suguanxingming=o[s],a.ro.suguanxingming=!0,u.abrupt("continue",30);case 76:if("userid"!=s){u.next=80;break}return a.ruleForm.userid=o[s],a.ro.userid=!0,u.abrupt("continue",30);case 80:u.next=30;break;case 82:a.styleChange();case 83:case"end":return u.stop()}}),u)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},suguanzhanghaoChange:function(n){var e=this;return i(r.default.mark((function a(){var u;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.suguanzhanghaoIndex=n.target.value,e.ruleForm.suguanzhanghao=e.suguanzhanghaoOptions[e.suguanzhanghaoIndex],a.next=4,e.$api.follow("suguan","suguanzhanghao",{columnValue:e.ruleForm.suguanzhanghao});case 4:u=a.sent,u.data.suguanxingming&&(e.ruleForm.suguanxingming=u.data.suguanxingming);case 6:case"end":return a.stop()}}),a)})))()},shenqingshijianConfirm:function(n){console.log(n),this.ruleForm.shenqingshijian=n.result,this.$forceUpdate()},zhaopianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.zhaopian="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return i(r.default.mark((function a(){var u,t,i,o,s,c,h,g,l,f;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.ruleForm.yuansushehao){a.next=3;break}return e.$utils.msg("原宿舍号不能为空"),a.abrupt("return");case 3:if(e.ruleForm.xinsushehao){a.next=6;break}return e.$utils.msg("新宿舍号不能为空"),a.abrupt("return");case 6:if(e.ruleForm.genghuanyuanyin){a.next=9;break}return e.$utils.msg("更换原因不能为空"),a.abrupt("return");case 9:if(!e.cross){a.next=25;break}if(o=n.getStorageSync("statusColumnName"),s=n.getStorageSync("statusColumnValue"),""==o){a.next=25;break}if(c=n.getStorageSync("crossObj"),o.startsWith("[")){a.next=21;break}for(h in c)h==o&&(c[h]=s);return g=n.getStorageSync("crossTable"),a.next=19,e.$api.update("".concat(g),c);case 19:a.next=25;break;case 21:u=Number(n.getStorageSync("userid")),t=c["id"],i=n.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 25:if(!t||!u){a.next=47;break}return e.ruleForm.crossuserid=u,e.ruleForm.crossrefid=t,l={page:1,limit:10,crossuserid:u,crossrefid:t},a.next=31,e.$api.list("genghuanshenqing",l);case 31:if(f=a.sent,!(f.data.total>=i)){a.next=37;break}return e.$utils.msg(n.getStorageSync("tips")),a.abrupt("return",!1);case 37:if(!e.ruleForm.id){a.next=42;break}return a.next=40,e.$api.update("genghuanshenqing",e.ruleForm);case 40:a.next=44;break;case 42:return a.next=44,e.$api.add("genghuanshenqing",e.ruleForm);case 44:e.$utils.msgBack("提交成功");case 45:a.next=55;break;case 47:if(!e.ruleForm.id){a.next=52;break}return a.next=50,e.$api.update("genghuanshenqing",e.ruleForm);case 50:a.next=54;break;case 52:return a.next=54,e.$api.add("genghuanshenqing",e.ruleForm);case 54:e.$utils.msgBack("提交成功");case 55:case"end":return a.stop()}}),a)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,a=e.getFullYear(),r=e.getMonth()+1,u=e.getDate();return"start"===n?a-=60:"end"===n&&(a+=2),r=r>9?r:"0"+r,u=u>9?u:"0"+u,"".concat(a,"-").concat(r,"-").concat(u)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,a("543d")["default"])},fe20:function(n,e,a){"use strict";a.r(e);var r=a("333c"),u=a("2edf");for(var t in u)"default"!==t&&function(n){a.d(e,n,(function(){return u[n]}))}(t);a("1785");var i,o=a("f0c5"),s=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"6bb2cdf2",null,!1,r["a"],i);e["default"]=s.exports}},[["a74e","common/runtime","common/vendor"]]]);