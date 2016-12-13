"use strict";

angular.module("AppModule").config(ConfigInterceptor);

ConfigInterceptor.$inject = ['$httpProvider'];

function ConfigInterceptor(httpProvider) {
  httpProvider.interceptors.push(['$q', '$injector', function ($q, $injector) {
    var AppService = $injector.get("AppService");
    return {
      'request': function (config) {
        AppService.showOverlay();
        return config;
      },

      'requestError': function (rejection) {
        AppService.hideOverlay();
        AppService.showErrorMessage();
        return $q.reject(rejection);
      },

      'response': function (response) {
        AppService.hideOverlay();
        return response;
      },

      // optional method
      'responseError': function (rejection) {
        AppService.hideOverlay();
        AppService.showErrorMessage();
        return $q.reject(rejection);
      }
    };
  }]);
}; //configInterceptor
