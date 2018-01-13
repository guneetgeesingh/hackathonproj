// var app = angular.module("MentMe", ['ui.router' , 'ui.bootstrap']);

// app.config(function ($stateProvider, $urlRouterProvider) {

//     $urlRouterProvider.otherwise("/")

//     $stateProvider

//         .state("home", {
//             url: "/",
//             templateUrl: "./views/home.html",
//             controller: "homeController"

//         })
    
//         .state("mentor", {
//             url: "/mentors",
//             templateUrl: "./views/mentorView.html",
//             controller: "mentorController"

//         })
//         .state("mentee", {
//             url: "/mentees",
//             templateUrl: "./views/menteeView.html",
//             controller: "menteeController"

//         })

// })

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from './components/container'

ReactDOM.render(<Container />, document.getElementById('app'))