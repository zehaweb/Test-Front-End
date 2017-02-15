function ApiService($http, AppSettings) {
  'ngInject';

  var serviceBase = AppSettings.apiUrl;

  const service = {};

  service.searchEndpoint = function (model) {
    return $http({
      method: 'GET',
      dataType: 'json',
      url: serviceBase + 'v1/gifs/search',
      headers: {
        "Content-Type": "application/json"
      },
      params: model
    });
  };

  return service;

}

export default {
  name: 'ApiService',
  fn: ApiService
};

