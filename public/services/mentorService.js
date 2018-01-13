app.service("mentorService", function ($http) {


  this.getMentors = function () {
    return $http.get('./api/mentors')
  }

  this.getMentorById = function (id, cb) {
    if (id == "" || id == undefined || id == null) {
      var mentor = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: ""

      }
      cb(mentor)
    } else {
      $http.get('./api/mentors/' + id)
        .then(function (response) {
            console.log(response.data);
            cb(response.data);
          },
          function (error) {
            console.log(error);
          })
    }
  }

  this.addMentor = function (mentor) {
    return $http.post('./api/mentors', mentor)
  }

  this.updateMentor = function (mentor) {
    return $http.put('./api/mentors/' + mentor._id, mentor)
  }

  this.deleteMentor = function (id) {
    return $http.delete('./api/mentors/' + id)
  }
})