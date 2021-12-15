const apiURL1 = 'https://api.openweathermap.org/data/2.5/weather?id=3936456&units=imperial&APPID=e08ff644087305907cc3d796c7e963a2'

fetch(apiURL1)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('currently').textContent = jsObject.weather[0].description;
        document.getElementById('temp').textContent = jsObject.main.temp;
        document.getElementById('humidity').textContent = jsObject.main.humidity;

    });