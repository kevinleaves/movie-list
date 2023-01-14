const express = require('express');
const router = express.Router();
const controller = require('../controller/movies');


router.get('/movies', controller.get);

router.post('/movies', controller.post)

module.exports = router