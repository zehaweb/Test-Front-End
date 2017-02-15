function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider, localStorageServiceProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  localStorageServiceProvider.setPrefix('sad');

  $stateProvider
    .state('Home', {
      url: '/',
      controller: 'HomeCtrl',
      controllerAs: '$ctr',
      templateUrl: 'home.html',
      title: 'Home'
    })
    .state('MyCollection', {
      url: '/collection',
      controller: 'CollectionCtrl',
      controllerAs: '$ctr',
      templateUrl: 'myCollection.html',
      title: 'My Collection'
    });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
