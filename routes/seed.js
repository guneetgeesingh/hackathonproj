var express = require('express');
var router = express.Router();

var seed = require("../config/seed.js")

//http://localhost:3000/api/seed
router.get('/mentors', seed.seedMentors);


module.exports = router;