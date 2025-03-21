import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import SushegonggaoController from './Sushegonggao'
import XueshengController from './Xuesheng'
import SuguanController from './Suguan'
import HouqinrenyuanController from './Houqinrenyuan'
import LoudongxinxiController from './Loudongxinxi'
import SushefenpeiController from './Sushefenpei'
import TuisuxinxiController from './Tuisuxinxi'
import GenghuanshenqingController from './Genghuanshenqing'
import ShenqingtijiaoController from './Shenqingtijiao'
import ZaisuqingkuangController from './Zaisuqingkuang'
import XueshengqingjiaController from './Xueshengqingjia'
import XueshengbaoxiuController from './Xueshengbaoxiu'
import LianxihouqinController from './Lianxihouqin'
import BaoxiuchuliController from './Baoxiuchuli'
import SushedengjiController from './Sushedengji'
import WeiguiqinshiController from './Weiguiqinshi'
import ShiwuzhaolingController from './Shiwuzhaoling'
import XunwuqishiController from './Xunwuqishi'
import LoudongtongjiController from './Loudongtongji'
import ForumController from './Forum'
import StoreupController from './Storeup'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/sushegonggao', SushegonggaoController({ config, db }))

	api.use('/xuesheng', XueshengController({ config, db }))

	api.use('/suguan', SuguanController({ config, db }))

	api.use('/houqinrenyuan', HouqinrenyuanController({ config, db }))

	api.use('/loudongxinxi', LoudongxinxiController({ config, db }))

	api.use('/sushefenpei', SushefenpeiController({ config, db }))

	api.use('/tuisuxinxi', TuisuxinxiController({ config, db }))

	api.use('/genghuanshenqing', GenghuanshenqingController({ config, db }))

	api.use('/shenqingtijiao', ShenqingtijiaoController({ config, db }))

	api.use('/zaisuqingkuang', ZaisuqingkuangController({ config, db }))

	api.use('/xueshengqingjia', XueshengqingjiaController({ config, db }))

	api.use('/xueshengbaoxiu', XueshengbaoxiuController({ config, db }))

	api.use('/lianxihouqin', LianxihouqinController({ config, db }))

	api.use('/baoxiuchuli', BaoxiuchuliController({ config, db }))

	api.use('/sushedengji', SushedengjiController({ config, db }))

	api.use('/weiguiqinshi', WeiguiqinshiController({ config, db }))

	api.use('/shiwuzhaoling', ShiwuzhaolingController({ config, db }))

	api.use('/xunwuqishi', XunwuqishiController({ config, db }))

	api.use('/loudongtongji', LoudongtongjiController({ config, db }))

	api.use('/forum', ForumController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	return api
}
