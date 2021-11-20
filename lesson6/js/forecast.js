const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=e08ff644087305907cc3d796c7e963a2'

fetch(apiURL)
    .then(response => response.json())
    .then(jsObject => {
        console.table(jsObject);





    });