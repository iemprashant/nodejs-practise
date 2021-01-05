const Sequelize = require('sequelize')
const sequelize = new Sequelize('node-complete', 'root', '124421', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: 0,
})

module.exports = sequelize
