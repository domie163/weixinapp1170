import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 后勤人员
const HouqinrenyuanModel = sequelize.define('HouqinrenyuanModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	houqinzhanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '后勤账号'
	},
	mima: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '密码'
	},
	houqinxingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '后勤姓名'
	},
	nianling: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '年龄'
	},
	xingbie: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '性别'
	},
	lianxidianhua: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '联系电话'
	},
	zhaopian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '照片'
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
	tableName: 'houqinrenyuan'
})

export default HouqinrenyuanModel
