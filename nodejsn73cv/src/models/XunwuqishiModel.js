import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 寻物启事
const XunwuqishiModel = sequelize.define('XunwuqishiModel', {
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
	wupinleixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '物品类型'
	},
	wupintupian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '物品图片'
	},
	diushididian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '丢失地点'
	},
	diushishijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('diushishijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '丢失时间'
	},
	xiangguanmiaoshu: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '相关描述'
	},
	xiangxiqingkuang: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '详细情况'
	},
	fabushijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('fabushijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '发布时间'
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
	tableName: 'xunwuqishi'
})

export default XunwuqishiModel
