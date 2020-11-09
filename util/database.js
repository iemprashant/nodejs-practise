const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', '124421', {
  dialect: 'mysql',
  host: 'localhost',
})
module.exports = sequelize
