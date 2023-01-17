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

  create: function (params) {
    // make this query dynamic
    // console.log(obj, 'reqbody');
    let query = "INSERT INTO movies (title, watched) VALUES (?, ?);"
    let queryArgs = [params.title, params.watched];

    return new Promise ((resolve, reject) => {
      // call the async function
      db.connection.query(query, queryArgs, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    })
  },

  update: function (params) {
    let query = "UPDATE movies SET watched = !watched WHERE title = ?;"
    let queryArgs = [params.title];
    return new Promise((resolve, reject) => {
      db.connection.query(query, queryArgs, (err, result) => {
        if (err) {
          console.log(err);
          reject(err)
        }
        resolve(result)
      })
    })
  },

  remove: function (params, callback) {
    let query = "DELETE FROM movies WHERE id = ? LIMIT 1"
    let queryArgs = [params.id];
    db.connection.query(query, queryArgs, (err, result) => {
      if (err) {
        callback(err)
      }
      callback(null, result);
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