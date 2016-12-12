"use strict";

angular.module("AppModule").controller("LoginController", LoginController);

function LoginController() {
  var vm = this;
  vm.user = null;
  vm.isDisabled = isDisabled;

  function isDisabled() {
    return (vm.user == null || vm.user.trim().length == 0);
  }; //isDisabled

}; //LoginController