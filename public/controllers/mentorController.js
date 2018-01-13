app.controller("mentorController", function($scope, $state, $stateParams, mentorService) {


    $scope.mentorSearch = "";
  
    if($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
      $scope.submitButton = true;
      $scope.heading = "Create A Mentor!"
  
      mentorService.getMentorById($stateParams.id, function(mentor) {
        $scope.mentor = mentor;
      })
    }
    else {
      $scope.submitButton = false;
      $scope.heading = "Update Mentor"
  
      mentorService.getMentorById($stateParams.id, function(mentor) {
        $scope.mentor = mentor;
      })
    }
  
    mentorService.getMentors()
      .then(function(response) {
        $scope.mentors = response.data
      },
      function(error) {
        console.log(error);
      })
  
    $scope.addMentor = function() {
      mentorService.addMentor($scope.mentor)
        .then(function(response) {
          console.log(response.data);
          $state.go('mentorsShow', {id: response.data._id})
        },
        function(error) {
          console.log(error);
        })
    }
  
    $scope.updateMentor = function() {
      console.log("this hit", $scope.mentor);
      mentorService.updateMentor($scope.mentor)
        .then(function(response) {
          $state.go('mentorsShow', {id: response.data._id})
        },
        function(error) {
          console.log(error);
        })
    }
  
    $scope.deleteMentor = function() {
      mentorService.deleteMentor($stateParams.id)
        .then(function(response) {
          $state.go('mentors')
        },
        function(error) {
          console.log(error);
        })
    }
  
  });
  