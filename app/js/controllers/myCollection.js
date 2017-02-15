function CollectionCtrl(localStorageService) {
  'ngInject';

  // ViewModel
  const that = this;
  that.myGifList = localStorageService.get('gifListMy') ? localStorageService.get('gifListMy').gifListMy : null;

  that.removeGif = function ($index) {
    that.myGifList.splice($index, 1);
    localStorageService.set('gifListMy', {
      gifListMy: that.myGifList
    });
  };
}


export default {
  name: 'CollectionCtrl',
  fn: CollectionCtrl
};
