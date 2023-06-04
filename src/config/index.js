const Sequelize = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
    dialect: config.DB_DIALECT,
    host: config.DB_HOST,
    port: config.DB_PORT
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.Blog = require('../model/blog')(sequelize, Sequelize)

module.exports = db