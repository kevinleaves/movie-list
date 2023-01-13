const db = require('../db/connection')

module.exports = {
  getAll: function (callback) {
    let query = ''
    let queryArgs = [];
    db.connection.query(query, queryArgs, () => {
      // get the data from db, send it back to the controller through callback
    });
  };

}