"use strict";
angular.module("AppModule").controller("RepositoryController", RepositoryController);

RepositoryController.$inject = ["$routeParams", "RepositoryService"];

function RepositoryController(routeParams, service) {
  var vm = this;
  var user = routeParams.user;
  vm.owner = null;
  service.getData(user).success(function (response) {
    console.log(response);
  }).error(function (response) {
    console.log(response);
  });

}; // RepositoryController