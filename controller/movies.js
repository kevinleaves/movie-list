const model = require('../model/movies')

module.exports = {
  get: function (req, res) {
    //once we get a GET request, ask model to query the DB
    // res.end('ended!'); //here for now: fix the getAll
    model.getAll((err, movies) => {
      if (err) {
        console.log(err, 'err');
        res.send(404);
      } else {
        // console.log(movies, 'movies');
        res.status(200).json(movies);
      }
    })
  }
}