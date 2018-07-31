(function(){
  document.getElementById("searchBtn").addEventListener("click", function(){
   var textt=document.getElementById("Input1").value;

 var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {

     var imgObj=JSON.parse(xhr.responseText);
     var link=imgObj.

  }
};
url="https://api.giphy.com/v1/gifs/translate?api_key=hS79ypbEOUe3yIz8uJ1xYygTOPDnsvKf&s="+textt;
xhr.open("GET", url, true);
xhr.send();

  });

})();
