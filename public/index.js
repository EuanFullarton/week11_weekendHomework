var app = function(){
  var url = "http://api.giphy.com/v1/gifs/search?q=typing&api_key=dc6zaTOxFJmzC";
  makeRequest(url, requestComplete);

  var searchForInput = function(){
    console.log("typing detected")
    search = this.value;
    console.log(search);

    var url = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC";

    makeRequest(url, requestComplete);
  }

  var userInput = document.getElementById('search-box');
  userInput.addEventListener("keyup", searchForInput);

}


var apiReturn = function(object){
  console.log(object);
  var display = document.getElementById('gifs');
  var ul = document.querySelector("ul");
  display.appendChild(ul);

  var objCounter = 0

  object.forEach(function(gif){
    var li = document.getElementById('li' + objCounter.toString());

    li.innerHTML =  
    "<img src=" + object[objCounter].images.downsized.url + " />"; 

    ul.appendChild(li);

    objCounter ++;

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
