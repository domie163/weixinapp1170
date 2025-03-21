import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 楼栋统计
const LoudongtongjiModel = sequelize.define('LoudongtongjiModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	loudongbianhao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '楼栋编号'
	},
	loudongmingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '楼栋名称'
	},
	zaiyongsushe: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '在用宿舍'
	},
	kongxiansushe: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '空闲宿舍'
	},
	chuangweishuliang: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '床位数量'
	},
	kongchuangweishu: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '空床位数'
	},
	beizhu: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '备注'
	},
	dengjiriqi: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('dengjiriqi')).format('YYYY-MM-DD')
        },
		comment: '登记日期'
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
	tableName: 'loudongtongji'
})

export default LoudongtongjiModel
