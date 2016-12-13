describe("Unit: Controller Test", function () {
  var controller;

  beforeEach(module("ngRoute"));

  beforeEach(module("AppModule"));


  var $controller;
  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  var scope, $q, deferred;
  beforeEach(inject(function ($controller, $rootScope, _$q_) {
    scope = $rootScope.$new();
    $q = _$q_;
    deferred = _$q_.defer();
    LoginController = $controller('LoginController', {});

  }));

  describe('Controller: LoginController', function () {
    it('LoginController should not be null', inject(function ($controller) {
      expect(LoginController).not.toBeNull();
    }));

    it('user should be null', inject(function ($controller) {
      expect(LoginController.user).toBeNull();
    }));

  });

});
