import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 失物招领
const ShiwuzhaolingModel = sequelize.define('ShiwuzhaolingModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	biaoti: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '标题'
	},
	wupinmingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '物品名称'
	},
	wupintupian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '物品图片'
	},
	shidedizhi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '拾得地址'
	},
	shideshijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('shideshijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '拾得时间'
	},
	renlingdizhi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '认领地址'
	},
	fabushijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('fabushijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '发布时间'
	},
	wupinmiaoshu: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '物品描述'
	},
	xuehao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '学号'
	},
	xingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '姓名'
	},
	shouji: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '手机'
	},
	clicktime: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('clicktime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '最近点击时间'
	},
	clicknum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '点击次数'
	},
	addtime: {
  		type: DataTypes.DATE,
  		defaultValue: DataTypes.NOW,
    	allowNull: false,
    	get() {
            return moment(this.getDataValue('addtime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '添加时间'
	}
}, {
	timestamps: false,
	freezeTableName: true,
	tableName: 'shiwuzhaoling'
})

export default ShiwuzhaolingModel
