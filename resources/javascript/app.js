var APPID = "6a45c48e46201ad932cb29b2f1863923";
var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;

function updateByZip(zip){
   var url = "http://api.openweathermap.org/data/2.5/weather?" + "zip=" + zip + "&APPID=" + APPID;
   sendRequest(url);
}

function K2C(k){
  return Math.round(k-273.15);
}

function K2F(k){
  return Math.round(k*(9/5)-459.67);
}

function degreesToDirection(degrees){
  var range =360/16;
  var low = 360 -range/2;
  var high = (low + range) % 360;
  var angles = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  for (i in angles){
    
    if(degrees >=low && degrees < high)
      return angles[i];
    
    low = (low + range) % 360;
    high = (high + range) % 360;
  }
  return "N";
  
}

function sendRequest(url){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
       // Action to be performed when the document is read;
       var data = JSON.parse(xhttp.responseText);
       var newWeather = {};
       newWeather.temp = K2F(data.main.temp);
       newWeather.loc = data.name;
       newWeather.icon = data.weather[0].id;
       newWeather.humidity = data.main.humidity;
       newWeather.wind = data.wind.speed;
       newWeather.direction = degreesToDirection(data.wind.deg);
      
       updateFrontEnd(newWeather);
       
    }
  };
  //above is a library, so we call via open/ send the newWeather data, along with url with api and send.
  xhttp.open("GET", url, true);
  xhttp.send();
}

function updateFrontEnd(weather){
  temp.innerHTML = weather.temp;
  loc.innerHTML = weather.loc;
   icon.src = "./resources/images/codes/" + weather.icon + ".png";
   humidity.innerHTML = weather.humidity;
  wind.innerHTML = weather.wind;
  direction.innerHTML = weather.direction;

}



window.onload = function () {
  temp = document.getElementById ("temperature");
  loc = document.getElementById ("location");
  icon = document.getElementById ("icon");
  humidity = document.getElementById ("humidity");
  wind = document.getElementById ("wind");
  direction = document.getElementById ("direction");
  
  var weather2 = {};
  weather2.wind = 3.5;
  weather2.direction = "N";
  weather2.humidity = 35;
  weather2.loc = "Boston";
  weather2.temp = "45";
  weather2.icon = 200;
  
  if(!navigator.geolocation){
  
    
  }else{
    var zip = window.prompt("Please enter your zip code");
    updateByZip(zip);
  }
}






//
//$(document).ready(function(){
//  var api = 'http://api.openweathermap.org/data/2.5/weather?zip=90630,us&APPID=6a45c48e46201ad932cb29b2f1863923';
//  $.getJSON(api, function(data){
//    alert(data.coord.lon);
//  });
//});