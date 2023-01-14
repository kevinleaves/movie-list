const express = require('express');
const router = express.Router();
const controller = require('../controller/movies');


router.get('/movies', controller.get);

module.exports = router