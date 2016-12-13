describe('Unit: Service Test', function () {

  beforeEach(module("ngRoute"));
  beforeEach(module("AppModule"));

  beforeEach(inject(function (RepositoryService, _$httpBackend_) {
    service = RepositoryService;
    $httpBackend = _$httpBackend_; // angular strips the underscores so
  }));

  describe('RepositoryService: getData', function () {

    it('should invoke GET service completed', function () {
      var mockData = {
        "data": []
      };

      $httpBackend.expectGET('https://api.github.com/users/giuseScara/repos').respond(mockData);

      function callback(data) {
        expect(data.data).not.toBeNull();
      };

      function error(data) {
        expect(data.data).not.toBeNull();
      };

      service.getData("giuseScara", callback, error);
      $httpBackend.flush();
    });

  });

});
