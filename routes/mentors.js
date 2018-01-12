var express = require('express');
var router = express.Router();

var mentorController = require('../controllers/mentor-controller')


router.get('/', mentorController.index)
router.get('/:id', mentorController.show)
router.post('/', mentorController.create)
router.put('/:id', mentorController.update)
router.delete('/:id', mentorController.destroy)

module.exports = router; 