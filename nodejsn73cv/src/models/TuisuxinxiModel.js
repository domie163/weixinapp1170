import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 退宿信息
const TuisuxinxiModel = sequelize.define('TuisuxinxiModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	sushelouhao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '宿舍楼号'
	},
	sushehao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '宿舍号'
	},
	chuangweihao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '床位号'
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
	fengmian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '封面'
	},
	tuisuleixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '退宿类型'
	},
	tuisushuoming: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '退宿说明'
	},
	tuisuriqi: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('tuisuriqi')).format('YYYY-MM-DD')
        },
		comment: '退宿日期'
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
	tableName: 'tuisuxinxi'
})

export default TuisuxinxiModel
