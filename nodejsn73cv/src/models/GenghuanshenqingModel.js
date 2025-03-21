import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 更换申请
const GenghuanshenqingModel = sequelize.define('GenghuanshenqingModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	shenqingbianhao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '申请编号'
	},
	yuansushehao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '原宿舍号'
	},
	xinsushehao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '新宿舍号'
	},
	genghuanyuanyin: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '更换原因'
	},
	shenqingshijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('shenqingshijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '申请时间'
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
	zhaopian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '照片'
	},
	suguanzhanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '宿管账号'
	},
	suguanxingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '宿管姓名'
	},
	sfsh: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '是否审核'
	},
	shhf: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '审核回复'
	},
	userid: {
		type: DataTypes.BIGINT,
		defaultValue: 0,
		allowNull: true,
		comment: '用户id'
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
	tableName: 'genghuanshenqing'
})

export default GenghuanshenqingModel
