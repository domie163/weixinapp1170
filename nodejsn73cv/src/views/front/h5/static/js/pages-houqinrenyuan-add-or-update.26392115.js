(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-houqinrenyuan-add-or-update"],{"0c24":function(r,e,i){var t=i("24fb");e=t(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-870284de]{padding:%?20?%}.content[data-v-870284de]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220213/4e09d53e8f3e4a9e88cf87ecedcf7ca0.png);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-870284de]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-870284de]{width:%?180?%}.avator[data-v-870284de]{width:%?150?%;height:%?60?%}.right-input[data-v-870284de]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-870284de]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-870284de]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-870284de]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-870284de]{border:0}.cu-form-group uni-input[data-v-870284de]{padding:0 %?30?%}.uni-input[data-v-870284de]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-870284de]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-870284de]::after{line-height:%?80?%}.select .uni-input[data-v-870284de]{line-height:%?80?%}.input .right-input[data-v-870284de]{line-height:%?88?%}',""]),r.exports=e},1013:function(r,e,i){var t=i("0c24");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var a=i("4f06").default;a("04e1e548",t,!0,{sourceMap:!1,shadowMode:!1})},"2a92":function(r,e,i){"use strict";i.r(e);var t=i("6f29"),a=i.n(t);for(var n in t)"default"!==n&&function(r){i.d(e,r,(function(){return t[r]}))}(n);e["default"]=a.a},"2e56":function(r,e,i){"use strict";var t=i("1013"),a=i.n(t);a.a},"6f29":function(r,e,i){"use strict";var t=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481"),i("c5f6"),i("f559"),i("ac6a"),i("28a5"),i("96cf");var a=t(i("3b8d")),n=t(i("e2b1")),o={data:function(){return{cross:"",ruleForm:{houqinzhanghao:"",mima:"",houqinxingming:"",nianling:"",xingbie:"",lianxidianhua:"",zhaopian:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{houqinzhanghao:!1,mima:!1,houqinxingming:!1,nianling:!1,xingbie:!1,lianxidianhua:!1,zhaopian:!1}}},components:{wPicker:n.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(e){var i,t,a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(i);case 3:if(t=r.sent,this.user=t.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=14;break}return this.ruleForm.id=e.id,r.next=12,this.$api.info("houqinrenyuan",this.ruleForm.id);case 12:t=r.sent,this.ruleForm=t.data;case 14:if(this.cross=e.cross,!e.cross){r.next=50;break}a=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(a);case 18:if((r.t1=r.t0()).done){r.next=50;break}if(n=r.t1.value,"houqinzhanghao"!=n){r.next=24;break}return this.ruleForm.houqinzhanghao=a[n],this.ro.houqinzhanghao=!0,r.abrupt("continue",18);case 24:if("mima"!=n){r.next=28;break}return this.ruleForm.mima=a[n],this.ro.mima=!0,r.abrupt("continue",18);case 28:if("houqinxingming"!=n){r.next=32;break}return this.ruleForm.houqinxingming=a[n],this.ro.houqinxingming=!0,r.abrupt("continue",18);case 32:if("nianling"!=n){r.next=36;break}return this.ruleForm.nianling=a[n],this.ro.nianling=!0,r.abrupt("continue",18);case 36:if("xingbie"!=n){r.next=40;break}return this.ruleForm.xingbie=a[n],this.ro.xingbie=!0,r.abrupt("continue",18);case 40:if("lianxidianhua"!=n){r.next=44;break}return this.ruleForm.lianxidianhua=a[n],this.ro.lianxidianhua=!0,r.abrupt("continue",18);case 44:if("zhaopian"!=n){r.next=48;break}return this.ruleForm.zhaopian=a[n],this.ro.zhaopian=!0,r.abrupt("continue",18);case 48:r.next=18;break;case 50:this.styleChange();case 51:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(r){this.xingbieIndex=r.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},zhaopianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.zhaopian="upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){var e,i,t,a,n,o,d,s,u,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.houqinzhanghao){r.next=3;break}return this.$utils.msg("后勤账号不能为空"),r.abrupt("return");case 3:if(this.ruleForm.mima){r.next=6;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if(this.ruleForm.houqinxingming){r.next=9;break}return this.$utils.msg("后勤姓名不能为空"),r.abrupt("return");case 9:if(!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){r.next=12;break}return this.$utils.msg("年龄应输入整数"),r.abrupt("return");case 12:if(!this.ruleForm.lianxidianhua||this.$validate.isMobile(this.ruleForm.lianxidianhua)){r.next=15;break}return this.$utils.msg("联系电话应输入手机格式"),r.abrupt("return");case 15:if(!this.cross){r.next=31;break}if(a=uni.getStorageSync("statusColumnName"),n=uni.getStorageSync("statusColumnValue"),""==a){r.next=31;break}if(o=uni.getStorageSync("crossObj"),a.startsWith("[")){r.next=27;break}for(d in o)d==a&&(o[d]=n);return s=uni.getStorageSync("crossTable"),r.next=25,this.$api.update("".concat(s),o);case 25:r.next=31;break;case 27:e=Number(uni.getStorageSync("userid")),i=o["id"],t=uni.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 31:if(!i||!e){r.next=53;break}return this.ruleForm.crossuserid=e,this.ruleForm.crossrefid=i,u={page:1,limit:10,crossuserid:e,crossrefid:i},r.next=37,this.$api.list("houqinrenyuan",u);case 37:if(l=r.sent,!(l.data.total>=t)){r.next=43;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 43:if(!this.ruleForm.id){r.next=48;break}return r.next=46,this.$api.update("houqinrenyuan",this.ruleForm);case 46:r.next=50;break;case 48:return r.next=50,this.$api.add("houqinrenyuan",this.ruleForm);case 50:this.$utils.msgBack("提交成功");case 51:r.next=61;break;case 53:if(!this.ruleForm.id){r.next=58;break}return r.next=56,this.$api.update("houqinrenyuan",this.ruleForm);case 56:r.next=60;break;case 58:return r.next=60,this.$api.add("houqinrenyuan",this.ruleForm);case 60:this.$utils.msgBack("提交成功");case 61:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return"start"===r?i-=60:"end"===r&&(i+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(i,"-").concat(t,"-").concat(a)},toggleTab:function(r){this.$refs[r].show()}}};e.default=o},ba23:function(r,e,i){"use strict";i.r(e);var t=i("f4e0"),a=i("2a92");for(var n in a)"default"!==n&&function(r){i.d(e,r,(function(){return a[r]}))}(n);i("2e56");var o,d=i("f0c5"),s=Object(d["a"])(a["default"],t["b"],t["c"],!1,null,"870284de",null,!1,t["a"],o);e["default"]=s.exports},f4e0:function(r,e,i){"use strict";var t,a=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("后勤账号")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.houqinzhanghao,placeholder:"后勤账号"},model:{value:r.ruleForm.houqinzhanghao,callback:function(e){r.$set(r.ruleForm,"houqinzhanghao",e)},expression:"ruleForm.houqinzhanghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("密码")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.mima,placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("后勤姓名")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.houqinxingming,placeholder:"后勤姓名"},model:{value:r.ruleForm.houqinxingming,callback:function(e){r.$set(r.ruleForm,"houqinxingming",e)},expression:"ruleForm.houqinxingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("年龄")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.nianling,placeholder:"年龄"},model:{value:r.ruleForm.nianling,callback:function(e){r.$set(r.ruleForm,"nianling",e)},expression:"ruleForm.nianling"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("性别")]),i("v-uni-picker",{attrs:{value:r.xingbieIndex,range:r.xingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.xingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(0,0,0,.6)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("联系电话")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.lianxidianhua,placeholder:"联系电话"},model:{value:r.ruleForm.lianxidianhua,callback:function(e){r.$set(r.ruleForm,"lianxidianhua",e)},expression:"ruleForm.lianxidianhua"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.zhaopianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("照片")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.zhaopian?i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.zhaopian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0",backgroundColor:"rgba(37, 147, 230, 1)",borderColor:"rgba(37, 147, 230, 1)",borderRadius:"80rpx",color:"#fff",borderWidth:"1",width:"60%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},n=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return t}))}}]);