var searchInput = document.querySelector('.search-query');
var searchButton = document.querySelector('.search-btn');
var searchResults = document.querySelector('.search-results');

searchButton.addEventListener('click', searchGifs);

/// Solution #1 - uses .onreadystatechange
function searchGifs() {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {

      var responseData = JSON.parse(request.responseText).data

      while (searchResults.hasChildNodes()) {
        searchResults.removeChild(searchResults.lastChild);
      }

      for (var element in responseData) {
        var gifImage = document.createElement('img');
        searchResults.appendChild(gifImage);
        var source = responseData[element].images.downsized_medium.url;
        gifImage.src = source;
      }
    }
  };

  var url = 'http://api.giphy.com/v1/gifs/search?q=' + searchInput.value + '&limit=10' + '&api_key=[YOUR API KEY]'

  request.open('GET', url, true);
  request.send();
};


// Solution #2 - uses .onload
// Uncomment the below function and comment out solution #1 above to see this one in action.
/*
function searchGifs() {
  var request = new XMLHttpRequest();

  request.onload = function () {

    var responseData = JSON.parse(request.responseText).data

    while (searchResults.hasChildNodes()) {
      searchResults.removeChild(searchResults.lastChild);
    }

    if (responseData.length === 0) {
      var message = document.createElement('h1')
      message.innerHTML = 'No Gifs Found!'
      searchResults.appendChild(message)
    } else {
      for (var element in responseData) {
        var gifImage = document.createElement('img');
        searchResults.appendChild(gifImage);
        var source = responseData[element].images.downsized_medium.url;
        gifImage.src = source;
      }
    }
  }
  var url = 'http://api.giphy.com/v1/gifs/search?q=' + searchInput.value + '&limit=10' + '&api_key=[YOUR API KEY]'

  request.open('GET', url, true);
  request.send();
};
*/
