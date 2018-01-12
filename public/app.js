var app = angular.module("MentMe", ['ui.router' , 'ui.bootstrap']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/")

    $stateProvider

        .state("home", {
            url: "/",
            templateUrl: "./views/home.html",
            controller: "homeController"

        })
    
        .state("mentor", {
            url: "/mentors",
            templateUrl: "./views/mentorView.html",
            controller: "mentorController"

        })
        .state("mentee", {
            url: "/mentees",
            templateUrl: "./views/menteeView.html",
            controller: "menteeController"

        })

})