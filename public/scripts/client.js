var app = angular.module('giphyApp', ['ngRoute']); // setting up angular app with ngRoute as dependency

app.config(function($routeProvider, $locationProvider) { //setting up angular route to favorites.html

  $routeProvider.when('/', {
    templateURL: 'views/index.html',
    conroller: 'DefaultController as defaultCtrl'
  }).when('/favorites', {
    templateUrl: 'views/pages/favorites.html',
    conroller: 'FavoritesController as favoriteCtrl'
  })// end of $routeProvider

  $locationProvider.html5Mode(true);

}); // end of app.config

app.controller('GiphyController', function(GifGetter){
  console.log("controller is connected");
  var vm = this; // declaring variable vm for 'this' controller

  vm.randomGif = function(){
    GifGetter.randomGif().then(function(res){
      console.log("response from the controller for random", res);
      vm.randomGifUrl = res.data.image_url;
    });
  } // end of vm.randomGif

  vm.searchGif = function(searchQuery){  // search gifs, searchQuery is text input
    GifGetter.searchGif(searchQuery).then(function(res){
      console.log("response from the controller for search", res)
      vm.searchGifUrl = res.data; // store array of gifs in searchGifUrl
    })
  } // end of vm.serchGif

  vm.getFavorites = function(){
    GifGetter.getFavorites().then(function(res){
      console.log("response from the controller for getting favorites", res)
      vm.favoriteGifList = res.data;
      // console.log('array of favorites', vm.favoriteGifList);
      // console.log('number of faves', vm.favoriteGifList.length);
    })
  } // end of vm.getFavorites

  // vm.addFavorite = function(){
  //   GifGetter.addFavorite().then(function(res){
  //     console.log("response from the controller for adding a favorite", res)
  //     vm.favoriteGifList = res.data;
  //   })
  // } // end of vm.addFavorite

}); // end of app.controller
