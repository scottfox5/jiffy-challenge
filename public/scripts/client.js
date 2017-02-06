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
      vm.searchQuery = ""; // clears the search field after submission
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

  vm.addFavorite = function(favComment, favUrl){ // pass in comment and url of favorite gif
    vm.favObj = { // builds an object of favorited gift to send in post request
      'comment': favComment,
      'url': favUrl
    }
    console.log('favorite', vm.favObj)
    GifGetter.addFavorite(vm.favObj) // 
    vm.comment1 = ""; // clears input field after comment is submitted
    vm.comment2 = ""; // clears input field after comment is submitted
  } // end of vm.addFavorite

}); // end of app.controller
