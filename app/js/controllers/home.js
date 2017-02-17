function HomeCtrl(ApiService, localStorageService) {
  'ngInject';

  // ViewModel
  const that = this;
  that.api = ApiService;
  that.apiKey = 'dc6zaTOxFJmzC';

  that.gifList = [];
  that.gifListMy = [];

  that.myGifList = localStorageService.get('gifListMy') ? localStorageService.get('gifListMy').gifListMy : null;
  that.gifList = localStorageService.get('gifList') ? localStorageService.get('gifList').gifList : null;

  that.searchModel = {
    searchKey: null,
    apiKey: that.apiKey,
    limit: 100
  };

  that.search = function () {

    let m = {
      q: that.searchModel.searchKey,
      api_key: that.searchModel.apiKey,
      limit: that.searchModel.limit
    };

    that.api.searchEndpoint(m).then(function (res) {
      that.gifList = res.data.data;
      localStorageService.set('gifList', {
        gifList: that.gifList
      });
    })

  };

  that.addGif = function (gif) {

    if (that.myGifList){
      that.myGifList.push({id: gif.id, url: gif.images.original.url});
      localStorageService.set('gifListMy', {
        gifListMy: that.myGifList
      });
    } else {
      that.gifListMy.push({id: gif.id, url: gif.images.original.url});
      localStorageService.set('gifListMy', {
        gifListMy: that.gifListMy
      });
    }

  };

  // $scope.$watch('$ctr.searchModel.searchKey', function () {
  //   that.search();
  // });

}


export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
