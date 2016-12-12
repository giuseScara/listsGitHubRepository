"use strict";

angular.module("AppModule").config(ConfigRoutes);

ConfigRoutes.$inject = ['$routeProvider', '$httpProvider'];

function ConfigRoutes(routeProvider, httpProvider) {

  routeProvider
    .when("/login", {
      templateUrl: "./view/login/login.html",
      controller: "LoginController",
      controllerAs: 'logCtrl'
    })
    .when("/repository/:user", {
      templateUrl: "./view/repository/repository.html",
      controller: "RepositoryController",
      controllerAs: 'repoCtrl'
    })
    .otherwise({
      redirectTo: "/login",
    })
}; //configRoutes