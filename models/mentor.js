var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mentorSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 20,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 20,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  phone: String,
  dob: Date,
  gender: String
}, {
  timestamps: true
})
  
var Mentor = mongoose.model('Mentor', mentorSchema)

module.exports = {
  Show: Show
}