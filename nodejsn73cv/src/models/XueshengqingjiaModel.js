import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 学生请假
const XueshengqingjiaModel = sequelize.define('XueshengqingjiaModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
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
	qingjiazhaopian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '请假照片'
	},
	qishishijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('qishishijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '起始时间'
	},
	jieshushijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('jieshushijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '结束时间'
	},
	qingjiatianshu: {
		type: DataTypes.FLOAT,
		defaultValue: 0,
		allowNull: true,
		comment: '请假天数'
	},
	qingjiayuanyin: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '请假原因'
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
	tableName: 'xueshengqingjia'
})

export default XueshengqingjiaModel
