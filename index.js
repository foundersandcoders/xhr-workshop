var button = document.querySelector(".search-btn");
var searchResults = document.querySelector('.search-results');
var userInput = document.querySelector(".search-query").value;

//I want to add clear function
button.addEventListener('click', function () {
  clearNode()
  searchGifs()
});



// build http request
function searchGifs () {
  var userInput = document.querySelector(".search-query").value;
  var xhr = new XMLHttpRequest();
  var url = " http://api.giphy.com/v1/gifs/search?q=" + userInput + " &api_key=wZipLd6Fd3ong67nw6xcqZnYaLwVwxpC&limit=5";

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      for (var i = 0; i < response.data.length; i++) {
        var gif = response.data[i];
        var gifUrl = gif.images.fixed_height.url;
        var img = document.createElement('img');
        img.src = gifUrl;
        searchResults.appendChild(img);
      }
    }
  }
  xhr.open("GET", url, true);
  xhr.send()
}

function clearNode () {
  var resultNode = document.querySelector('.search-results');
  while (resultNode.firstChild) {
    resultNode.removeChild(resultNode.firstChild);
  }
}
