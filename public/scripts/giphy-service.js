app.service('GifGetter', function($http){ // setting up a service called GifGetter

  var publicAPIkey = "dc6zaTOxFJmzC";
  var giphyUrl = 'http://api.giphy.com/v1/gifs/';

//function to get a random gif by making get reqeust to giphy API
  this.randomGif = function(){
    return $http({
      type:'GET',
      url: giphyUrl + 'random?api_key=' + publicAPIkey
    }).then(function(response){ // resolve promise
      console.log(response);
      return response.data;
    }).catch(function(error){ // reject promise
      console.log(error);
    })
  }// end of randomGif


  //function to search for a gif by making get request to giphy API
  this.searchGif = function(query){
    return $http({
      type:'GET',
      url: giphyUrl + 'search?q=' + query + "&api_key=" + publicAPIkey,
      params: {"rating": 'g', "limit": 5} // paremeters that limit search results to 1 item that is rated g
    }).then(function(response){ // resolve promise
      console.log(response);
      return response.data;
    }).catch(function(error){ // reject promise
      console.log(error);
    })
  } // end of searchGif

  this.getFavorites = function(){
    console.log('getting favorites');
    return $http({
      type:'GET',
      url: '/gifs'
    }).then(function(response){ // resolve promise
      console.log(response);
      return response;
    }).catch(function(error){ // reject promise
      console.log(error);
    })
  } // end of getFavorites

  this.addFavorite = function(favGif){
    console.log('adding a favorite', favGif);
    return $http({
      method:'POST',
      url: '/gifs',
      data: favGif
    }).then(function(response){ // resolve promise
      console.log('post response', response);
      swal("Excellent!", "Gif has been added to favorites!", "success")
      return response.data;
    }).catch(function(error){ // reject promise
      console.log('post error', error);
    })

  } // end of addFavorite

  this.deleteFavorite = function(){
    console.log('deleting a favorite');
    return $http({
      method:'DELETE',
      url: '/gifs',
    }).then(function(response){ // resolve promise
      console.log('delete response', response);
      return response.data;
    }).catch(function(error){ // reject promise
      console.log('delete error', error);
    })
  } // end of deleteFavorite

});
