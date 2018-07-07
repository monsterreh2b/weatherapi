var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;


function update(weather){
  temp.innerHTML = weather.temp;
  loc.innerHTML = weather.loc;
   humidity.innerHTML = weather.humidity;
  wind.innerHTML = weather.wind;
  direction.innerHTML = weather.direction;
 icon.src = "./images/codes/" + weather.icon + ".png";
}

window.onload = function () {
  temp = document.getElementById ("temperature");
  loc = document.getElementById ("location");
  icon = document.getElementById ("icon");
  humidity = document.getElementById ("humidity");
  wind = document.getElementById ("wind");
  direction = document.getElementById ("direction");
  
  var weather = {};
  weather.wind = 3.5;
  weather.direction = "N";
  weather.humidity = 35;
  weather.loc = "Boston";
  weather.temp = "45";
  weather.icon = 200;
}






//
//$(document).ready(function(){
//  var api = 'http://api.openweathermap.org/data/2.5/weather?zip=90630,us&APPID=6a45c48e46201ad932cb29b2f1863923';
//  $.getJSON(api, function(data){
//    alert(data.coord.lon);
//  });
//});