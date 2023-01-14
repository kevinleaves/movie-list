const mysql = require('mysql2');
const Sequelize = require('sequelize');

// const connection = new Sequelize(
//   'movielist',
//   'root',
//   '',
//   {host: 'localhost', dialect: 'mysql'}
// );

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movielist',
});

module.exports.connection = connection;
