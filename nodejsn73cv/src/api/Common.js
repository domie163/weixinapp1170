import { Router } from 'express'
import { QueryTypes } from 'sequelize'
import toRes from '../lib/toRes'
import sequelize from '../models/sequelize'
import util from '../lib/util'

export default ({ config, db }) => {
	let api = Router()

	// 获取某表的某个字段列表接口
	api.get('/option/:tableName/:columnName', async (req, res) => {

		try {

			const results = await sequelize.query(`SELECT ${req.params.columnName} FROM ${req.params.tableName}`, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			})

			let result = []
			if (results.length > 0) {
				results.forEach(item => {
					result.push(item[req.params.columnName])
				})
			}

			toRes.record(res, 0, result)
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 获取某表的单行记录接口
	api.get('/follow/:tableName/:columnName', async (req, res) => {

		try {

			toRes.record(res, 0, await sequelize.query(`SELECT * FROM ${req.params.tableName} WHERE ${req.params.columnName} = '${req.query.columnValue}'`, {
				plain: true,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 修改某表的sfsh状态接口
	api.get('/sh/:tableName', async (req, res) => {

		try {
			
			let sfsh = req.body.sfsh === '是' ? '否' : '是'
			await sequelize.query(`UPDATE ${req.params.tableName} SET sfsh = ${sfsh} WHERE id = ${req.body.id}`)

			toRes.session(res, 0, '编辑成功！')
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 获取需要提醒的记录数接口
	api.get('/remind/:tableName/:columnName/:type', async (req, res) => {

		try {

			let sql = 'SELECT 0 AS count'
			
			if (req.params.type == 1) {
				if (req.query.remindstart) sql = `SELECT COUNT(*) AS count FROM ${req.params.tableName} WHERE ${req.params.columnName} >= ${req.query.remindstart}`
				if (req.query.remindend) sql = `SELECT COUNT(*) AS count FROM ${req.params.tableName} WHERE ${req.params.columnName} <= ${req.query.remindend}`
			}

			if (req.params.type == 2) {
				if (req.query.remindstart) {
					let remindStart = util.getDateTimeFormat(0 - req.query.remindstart, "yyyy-MM-dd")
					sql = `SELECT COUNT(*) AS count FROM ${req.params.tableName} WHERE ${req.params.columnName} >= '${remindStart}'`
				}
				if (req.query.remindend) {
					let remindEnd = util.getDateTimeFormat(req.query.remindend, "yyyy-MM-dd")
					sql = `SELECT COUNT(*) AS count FROM ${req.params.tableName} WHERE ${req.params.columnName} <= '${remindEnd}'`
				}
			}

			const results = await sequelize.query(sql, {
				plain: true,
				raw: true,
				type: QueryTypes.SELECT
			})

			toRes.count(res, 0, results.count)
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 计算规则接口
	api.get('/cal/:tableName/:columnName', async (req, res) => {

		try {
			
			toRes.record(res, 0, await sequelize.query(`SELECT SUM(${req.params.columnName}) AS sum, MAX(${req.params.columnName}) AS max, MIN(${req.params.columnName}) AS min, AVG(${req.params.columnName}) AS avg FROM ${req.params.tableName}`, {
				plain: true,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 类别统计接口
	api.get('/group/:tableName/:columnName', async (req, res) => {

		try {
			
			toRes.record(res, 0, await sequelize.query(`SELECT COUNT(*) AS total, ${req.params.columnName} FROM ${req.params.tableName} GROUP BY ${req.params.columnName}`, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 按值统计接口
	api.get('/value/:tableName/:xColumnName/:yColumnName', async (req, res) => {

		try {
			
			toRes.record(res, 0, await sequelize.query(`SELECT ${req.params.xColumnName}, SUM(${req.params.yColumnName}) AS total FROM ${req.params.tableName} GROUP BY ${req.params.xColumnName} DESC`, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	return api
}
