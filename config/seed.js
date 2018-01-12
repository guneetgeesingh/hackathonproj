var { Mentor } = require('../models/mentor')


var mentors = [];

function _Mentor(firstName, lastName, email, phone, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.phone = phone;
  this.dob = dob;
}

mentors.push(new _Mentor("Mary", "Mara", "mary.mara@gmail.com", "444-444-4444", new Date('7/30/1987')))
mentors.push(new _Mentor("Sherm", "Blank", "sherm.blank@gmail.com", "222-222-2222", new Date('2/28/1987')))
mentors.push(new _Mentor("Billy", "Pruden", "billy.pruden@gmail.com", "111-111-1111", new Date('4/30/1987')))

var seedMentors = function(req, res) {
  for (var i = 0; i < mentors.length; i++) {
    var newMentor = new Mentor(mentors[i])

    newMentor.save(function(err, mentor) {
        if(err) console.log("Error: " + err);
        if(mentor) console.log("Mentor: " + mentor);
    })
  }
  res.json({message: "Seeding Mentors Complete"})
}

module.exports = {
  seedMentors: seedMentors
}
