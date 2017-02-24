window.onload = documentLoadedHandler;
var searchInput = null;
var searchButton = null;
var searchResultsUl = null;

function documentLoadedHandler () {
  setElements();
  searchButton.addEventListener('click', searchGifts);
}

function setElements () {
  searchInput = document.querySelector('.search-query');
  if (searchInput === null) {
    throw new Error ('could not find search input');
  }
  searchButton = document.querySelector('.search-btn');
  if (searchButton === null) {
    throw new Error ('could not find search button');
  }
  searchResults = document.querySelector('.search-results');
  if (searchResults === null) {
    throw new Error ('could not find search results');
  }
}

function searchGifts () {
  var myRequest = new XMLHttpRequest();
  myRequest.onreadystatechange = function () {
    if ( myRequest.readyState === 4 && myRequest.status === 200 ) {
      var response = JSON.parse(myRequest.responseText);

      for (var i = 0; i < response.data.length; i++) {
        var gif = response.data[i];
        var gifUrl = gif.images.original.url
        // console.log(gifUrl);

        var img = document.createElement('img');
         img.src = gifUrl;
        //  console.log(img);
        searchResults.appendChild(img);
        console.log(response.data[i]);
      }
    }
  };
  myRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=' + searchInput.value + '&api_key=dc6zaTOxFJmzC', true);
  myRequest.send();
}
