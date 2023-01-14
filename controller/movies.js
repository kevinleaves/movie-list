const model = require('../model/movies')

module.exports = {
  get: function (req, res) {
    //once we get a GET request, ask model to query the DB
    // res.end('ended!'); //here for now: fix the getAll
    model.getAll()
    .then((results, err) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
  },

  post: function (req, res) {
    model.create()
    .then((result) => {
    res.status(201).json(result)
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    })
  }
};
