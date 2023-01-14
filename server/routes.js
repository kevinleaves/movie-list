const express = require('express');
const router = express.Router();
const controller = require('../controller/index.js');

router.get('/movies', controller.movies.get);

router.post('/movies', controller.movies.post)

module.exports = router