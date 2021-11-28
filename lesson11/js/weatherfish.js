const apiURL3 = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=e08ff644087305907cc3d796c7e963a2'

fetch(apiURL3)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('currently').textContent = jsObject.weather[0].description;
    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('windchill').textContent = jsObject.wind.gust;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = jsObject.wind.speed;
    
    

});