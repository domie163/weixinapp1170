import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import lianxihouqin from '@/views/modules/lianxihouqin/list'
    import suguan from '@/views/modules/suguan/list'
    import weiguiqinshi from '@/views/modules/weiguiqinshi/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import sushedengji from '@/views/modules/sushedengji/list'
    import xunwuqishi from '@/views/modules/xunwuqishi/list'
    import zaisuqingkuang from '@/views/modules/zaisuqingkuang/list'
    import baoxiuchuli from '@/views/modules/baoxiuchuli/list'
    import tuisuxinxi from '@/views/modules/tuisuxinxi/list'
    import shiwuzhaoling from '@/views/modules/shiwuzhaoling/list'
    import forum from '@/views/modules/forum/list'
    import shenqingtijiao from '@/views/modules/shenqingtijiao/list'
    import xueshengqingjia from '@/views/modules/xueshengqingjia/list'
    import houqinrenyuan from '@/views/modules/houqinrenyuan/list'
    import sushegonggao from '@/views/modules/sushegonggao/list'
    import sushefenpei from '@/views/modules/sushefenpei/list'
    import xueshengbaoxiu from '@/views/modules/xueshengbaoxiu/list'
    import loudongtongji from '@/views/modules/loudongtongji/list'
    import config from '@/views/modules/config/list'
    import genghuanshenqing from '@/views/modules/genghuanshenqing/list'
    import loudongxinxi from '@/views/modules/loudongxinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/lianxihouqin',
        name: '联系后勤',
        component: lianxihouqin
      }
      ,{
	path: '/suguan',
        name: '宿管',
        component: suguan
      }
      ,{
	path: '/weiguiqinshi',
        name: '未归寝室',
        component: weiguiqinshi
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/sushedengji',
        name: '宿舍登记',
        component: sushedengji
      }
      ,{
	path: '/xunwuqishi',
        name: '寻物启事',
        component: xunwuqishi
      }
      ,{
	path: '/zaisuqingkuang',
        name: '在宿情况',
        component: zaisuqingkuang
      }
      ,{
	path: '/baoxiuchuli',
        name: '报修处理',
        component: baoxiuchuli
      }
      ,{
	path: '/tuisuxinxi',
        name: '退宿信息',
        component: tuisuxinxi
      }
      ,{
	path: '/shiwuzhaoling',
        name: '失物招领',
        component: shiwuzhaoling
      }
      ,{
	path: '/forum',
        name: '交流社区',
        component: forum
      }
      ,{
	path: '/shenqingtijiao',
        name: '申请提交',
        component: shenqingtijiao
      }
      ,{
	path: '/xueshengqingjia',
        name: '学生请假',
        component: xueshengqingjia
      }
      ,{
	path: '/houqinrenyuan',
        name: '后勤人员',
        component: houqinrenyuan
      }
      ,{
	path: '/sushegonggao',
        name: '宿舍公告',
        component: sushegonggao
      }
      ,{
	path: '/sushefenpei',
        name: '宿舍分配',
        component: sushefenpei
      }
      ,{
	path: '/xueshengbaoxiu',
        name: '学生报修',
        component: xueshengbaoxiu
      }
      ,{
	path: '/loudongtongji',
        name: '楼栋统计',
        component: loudongtongji
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/genghuanshenqing',
        name: '更换申请',
        component: genghuanshenqing
      }
      ,{
	path: '/loudongxinxi',
        name: '楼栋信息',
        component: loudongxinxi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
