"use strict";

angular.module("AppModule").factory("RepositoryService", RepositoryService);

RepositoryService.$inject = ["$http"];

function RepositoryService(http) {
  var urlGitHub = "https://api.github.com/users/";
  return {
    getData: getData,
  };

  function getData(username) {
    var url = urlGitHub + username + "/repos";
    console.log(url);
    var promise = http.get(url);

    promise.success(function (response) {
      return response;
    });

    promise.error(function (response) {
      return response;
    });

    return promise;
  }; //actionCall

}; //RepositoryService