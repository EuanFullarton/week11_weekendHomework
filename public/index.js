var app = function(){
  var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
  makeRequest(url, requestComplete);
}



var apiReturn = function(data){
  console.log(data);
  var display = document.getElementById('gifs');
  var ul = document.querySelector("ul");
  display.appendChild(ul);

  data.forEach(function(gif){
    var li = document.createElement('li');

    // li.innerHTML +=  
    // album.name + "<br>" + 
    // album.artists[0].name +
    // "<img src=" + album.images[0].url + " />"; 

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
  var data = JSON.parse(jsonString);

  apiReturn(data);
  // populateList(data.albums.items);
}  





window.addEventListener('load', app);


}