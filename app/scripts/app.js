angular.module("AppModule", ['ngRoute']);

angular.module("AppModule").factory("AppService", AppService);

AppService.$inject = ["$location"];

function AppService(location) {
  return {
    showOverlay: showOverlay,
    hideOverlay: hideOverlay,
    showErrorMessage: showErrorMessage,
    hideErrorMessage: hideErrorMessage
  };

  function showOverlay() {
    angular.element(".overlay").show();
  }; //showOverlay

  function hideOverlay() {
    angular.element(".overlay").hide();
  }; //hideOverlay

  function showErrorMessage() {
    angular.element("#alert-message").show();
    var myThis = this;
    setTimeout(function () {
      myThis.hideErrorMessage();
    }, 7200);
    location.path('/login');
  }; //showErrorMessage

  function hideErrorMessage() {
    angular.element("#alert-message").hide();
  }; //hideErrorMessage

}; //AppService
