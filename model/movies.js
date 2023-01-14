const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/connection')

// const Movie = db.define('Movie', {
//   id: DataTypes.INTEGER,
//   title: DataTypes.STRING,
//   watched: DataTypes.BOOLEAN
// });

module.exports = {
  getAll: function () {
    let query = 'SELECT * FROM movies'
    let queryArgs = [];
    return new Promise((resolve, reject) => {
      db.connection.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      })
    })
  },

  create: function () {
    // make this query dynamic
    let query = "INSERT INTO movies (title, watched) VALUES ('The Flash', false);"
    let queryArgs = [];

    return new Promise ((resolve, reject) => {
      // call the async function
      db.connection.query(query, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    })
  }
};

// Movie.sync()
// db.connection.

// db.connection.query(query, queryArgs, (err, results) => {
//   // get the data from db, send it back to the controller through callback
//     if (err) {
//       console.log(err);
//       callback(err);
//     } else {
//       // console.log(results);
//       callback(null, results)
//     }
// });