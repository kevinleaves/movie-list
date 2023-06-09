const express = require('express');
const router = express.Router();
const controller = require('../controller/index.js');

router.get('/movies', controller.movies.get);

router.post('/movies', controller.movies.post);

router.patch('/movies', controller.movies.patch);

router.delete('/movies', controller.movies.delete);
module.exports = router