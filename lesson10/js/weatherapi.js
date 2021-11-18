//Api call by city ID.
//api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
const APPID = 'e08ff644087305907cc3d796c7e963a2'
const Preston = 5604473

//const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=${APPID}";

function getWeatherFor(city_id) {

  const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${APPID}'
  
  fetch(apiURL)
    .then((response) => response.json())
    .then((weatherJSON) => {
      console.log(weatherJSON);
        
      const currentTemp = weatherJSON.main.temp
      document.getElementById('current-temp').textContent = currentTemp;
        
      const imagesrc = 'https://openweathermap.org/img/w/${weatherJSON.weather[0].icon}.png'
        
      const desc = weatherJSON.weather[0].description;
          
      document.getElementById('imagesrc').textContent = imagesrc;
            
      document.getElementById('icon').setAttribute('src', imagesrc);
            
      document.getElementById('icon').setAttribute('alt', desc);
        
        



    })
}
getWeatherFor(Preston)