
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=e08ff644087305907cc3d796c7e963a2'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const currentTemp = document.querySelector('#current-temp');
    
    
    
    
    const imagesrc = 'https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png';
    

    currentTemp.textContent = jsObject.main.temp;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', imagesrc);


  });
  
