
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=e08ff644087305907cc3d796c7e963a2'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const currentTemp = document.querySelector('#current-temp');
    const weathericon = document.querySelector('#imagesrc')
    
    
    
    let imgsrc = 'https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png';
    let imgalt = jsObject.weather[0].description;

    currentTemp.textContent = jsObject.main.temp;
    weathericon.setAttribute('src', imgsrc);
    weathericon.setAttribute('alt', imgalt);


  });
  
