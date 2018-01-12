var {Mentor} = require('../models/mentor')
var _ = require("lodash");


function index(req, res) {
  Mentor.find().exec(function (err, mentors) {
    if (err) {
      res.status(500).json({
        errorMessage: `could not find mentor because of ${err}`
      })
      return;
    } else if (mentors.length == 0) {
      res.status(404).json({
        errorMessage: "No mentors found"
      })
      return;
    } else {
      res.status(200).json(mentors)
    }
  })
}

function create(req, res) {
  Mentor.find().where('email').equals(req.body.email).exec(function (err, mentors) {
    if (mentors.length > 0) {
      res.status(409).json({
        errorMessage: `a mentor already exists with that email account`
      })
    } else if (err) {
      res.status(500).json({
        errorMessage: `could not perform task because: ${err}`
      })
    } else {
      var newMentor = new Mentor(req.body)
      newMentor.save(function (err, mentor) {
        if (err) {
          res.status(200).json({
            errorMessage: `There was an error with when saving the rocrd to the DB: ${err}`
          })
        } else {
          res.status(200).json(mentor);
        }

      })
    }
  })
}

function show(req, res) {
  var id = req.params.id
  Mentor.findById(id).exec(function (err, mentor) {
    if (err) {
      res.status(500).json({
        errorMessage: `could not find mentor because of ${err}`
      })
    } else if (!mentor) {
      res.status(404).json({
        errorMessage: "No mentors found"
      })
    } else {
      res.status(200).json(mentor)
    }
  })
}

function update(req, res) {
  var id = req.params.id;
  var body = _.pick(req.body, ["firstName", "lastName", "email", "phone", "dob", "address1", "address2", "city", "state", "zip", "cardNumber", "cardType", "security"])
  Mentor.findByIdAndUpdate(id, {
    $set: body
  }, {
    new: true
  }, function (err, mentor) {
    if (err) {
      res.status(500).json({
        errorMessage: `could not find mentor because of ${err}`
      })
    } else if (!mentor) {
      res.status(404).json({
        errorMessage: `No mentors found ${id}`
      })
    } else {
      res.status(200).json(mentor)
    }
  })
}

function destroy(req, res) {
  var id = req.params.id
  Mentor.findByIdAndRemove(id, function (err, mentor) {
    if (err) {
      res.status(500).json({
        errorMessage: `could not delete mentor because of ${err}`
      })
    } else if (!mentor) {
      res.status(404).json({
        errorMessage: `No mentors found ${id}`
      })
    } else {
      res.status(200).json(mentor)
    }
  })
}

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}