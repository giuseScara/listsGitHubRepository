"use strict";
angular.module("AppModule").controller("RepositoryController", RepositoryController);

RepositoryController.$inject = ["$routeParams", "RepositoryService"];

function RepositoryController(routeParams, service) {
  var vm = this;
  var user = routeParams.user;
  vm.owner = null;
  vm.repository = null;
  service.getData(user).then(function (response) {
    console.log(response);

    if (response.data !== null && response.data.length > 0) {

      vm.owner = response.data[0].owner;
      vm.repository = response.data;
    }
  });

}; // RepositoryController
