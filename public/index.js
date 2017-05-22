var app = function(){
  var url = "http://api.giphy.com/v1/gifs/search?q=typing&limit=6&api_key=dc6zaTOxFJmzC";
  makeRequest(url, requestComplete);

  var searchForInput = function(){
    // console.log("typing detected")
    search = this.value;
    // console.log(search);

    var url = "http://api.giphy.com/v1/gifs/search?q=" + search + "&limit=6&api_key=dc6zaTOxFJmzC";

    makeRequest(url, requestComplete);
  }

  var userInput = document.getElementById('search-box');
  userInput.addEventListener("keyup", searchForInput);

}


var apiReturn = function(object){
  // console.log(object);
  var display = document.getElementById('gifs');
  var ul = document.querySelector("ul");
  display.appendChild(ul);

  object.forEach(function(gif, index){
    var li = document.getElementById('li' + index.toString());

    li.innerHTML =  
    "<img src=" + object[index].images.downsized.url + " />"; 

    ul.appendChild(li);
  });
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var object = JSON.parse(jsonString);

  apiReturn(object.data);
}  



window.addEventListener('load', app);
