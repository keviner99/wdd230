const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=e08ff644087305907cc3d796c7e963a2'

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const imagesrc1 = `http://openweathermap.org/img/wn/${jsObject.list[7].weather[0].icon}.png`;
        document.getElementById("icon1").setAttribute("src", imagesrc1);

        const imagesrc2 = `http://openweathermap.org/img/wn/${jsObject.list[15].weather[0].icon}.png`;
        document.getElementById("icon2").setAttribute("src", imagesrc2);

        const imagesrc3 = `http://openweathermap.org/img/wn/${jsObject.list[5].weather[0].icon}.png`;
        document.getElementById("icon3").setAttribute("src", imagesrc3);

        const imagesrc4 = `http://openweathermap.org/img/wn/${jsObject.list[1].weather[0].icon}.png`;
        document.getElementById("icon4").setAttribute("src", imagesrc4);

        const imagesrc5 = `http://openweathermap.org/img/wn/${jsObject.list[3].weather[0].icon}.png`;
        document.getElementById("icon5").setAttribute("src", imagesrc5);


        //I got this code from the virtual lab 
        const noon = jsObject.list.filter((x) => x.dt_txt.includes("18:00:00"));
        console.log(noon);

        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = 0;
        noon.forEach((forecast) => {
            let thedate = new Date(forecast.dt_txt);
            document.querySelector(`#day${day + 1}`).textContent = weekdays[thedate.getDay()];
            document.querySelector(`#for${day + 1}`).textContent = forecast.main.temp;
            day++;
        });
    });