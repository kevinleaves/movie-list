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
    console.log(req.body, 'my movie in here')
    model.create(req.body)
    .then((result) => {
    res.status(201).json(result)
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    })
  },

  patch: function (req, res) {
    model.update(req.body)
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        console.log(err)
        res.sendStatus(400);
      })
  },

  delete: function (req, res) {
    model.remove(req.body, (err, result) => {
      if (err) {
        console.log(err, 'err in controller');
        res.sendStatus(400)
      }
      res.status(200).json(result);
      console.log(result);
    });
  }
};
