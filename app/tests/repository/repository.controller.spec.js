describe("Unit: Controller Test", function () {
  var controller, service;

  beforeEach(module("ngRoute"));

  beforeEach(module("AppModule"), function ($provide) {
    $provide.value('RepositoryService', {
      getData: function () {}
    });
  });

  var $controller;
  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  var RepositoryController,
    scope, $q, deferred;
  beforeEach(inject(function ($controller, $rootScope, _$q_, $routeParams, RepositoryService) {
    scope = $rootScope.$new();
    service = RepositoryService;
    $q = _$q_;
    deferred = _$q_.defer();
    $routeParams.user = "giuseScara";
    // Use a Jasmine Spy to return the deferred promise
    spyOn(service, 'getData').and.returnValue(deferred.promise);

    RepositoryController = $controller('RepositoryController', {});

  }));

  describe('Controller: RepositoryController', function () {
    // finally, why start the test
    it('RepositoryController should not be null', inject(function ($controller) {
      expect(RepositoryController).not.toBeNull();
    }));

    it('owner should not be null', inject(function ($controller) {
      expect(RepositoryController.owner).toBeNull();
    }));

    it('repository should be null', inject(function ($controller) {
      expect(RepositoryController.repository).toBeNull();
    }));

    it('should resolve promise, owner should not be null', function () {
      // Setup the data we wish to return for the .then function in the controller
      deferred.resolve({
        "data": [
          {
            "id": 65898596,
            "name": "adminJSLib",
            "full_name": "giuseScara/adminJSLib",
            "owner": {
              "login": "giuseScara",
              "id": 8536722,
              "avatar_url": "https://avatars.githubusercontent.com/u/8536722?v=3",
              "gravatar_id": ""
            }
          }
        ]
      });

      scope.$apply();
      expect(RepositoryController.owner).not.toBeNull();
    });

    it('should resolve promise, repository should not be null', function () {
      // Setup the data we wish to return for the .then function in the controller
      deferred.resolve({
        "data": [
          {
            "id": 65898596,
            "name": "adminJSLib",
            "full_name": "giuseScara/adminJSLib",
            "owner": {
              "login": "giuseScara",
              "id": 8536722,
              "avatar_url": "https://avatars.githubusercontent.com/u/8536722?v=3",
              "gravatar_id": ""
            }
          }
        ]
      });

      scope.$apply();
      expect(RepositoryController.repository).not.toBeNull();
    });

    it('should resolve promise, repository should not be null', function () {
      deferred.resolve({
        "data": []
      });
      scope.$apply();
      expect(RepositoryController.repository).toBeNull();
    });

    it('should resolve promise, owner should not be null', function () {
      deferred.resolve({
        "data": []
      });

      scope.$apply();
      expect(RepositoryController.owner).toBeNull();
    });

  });

});
