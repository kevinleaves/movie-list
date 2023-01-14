const db = require('../db/connection')

module.exports = {
  getAll: function (callback) {
    let query = 'SELECT * FROM movies'
    let queryArgs = [];
    db.connection.query(query, queryArgs, (err, results) => {
      // get the data from db, send it back to the controller through callback
      if (err) {
        console.log(err);
        callback(err);
      } else {
        // console.log(results);
        callback(null, results)
      }
    });
  },
}