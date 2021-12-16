const hamButton = document.querySelector('.ham');
const mainMenu = document.querySelector('.navigation');

hamButton.addEventListener('click', () => { mainMenu.classList.toggle('responsive') }, false);

window.onresize = () => { if (window.innerWidth > 760) mainMenu.classList.remove('responsive') };

document.getElementById("currentdate").innerHTML = new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "long", day: "numeric" })
    /*companies from the home page*/
const requestURL = 'https://keviner99.github.io/wdd230/lesson12/js/project.JSON';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    }).then(function(jsonObject) {
        const companies = jsonObject['companies'];
        const homecompanies = ['Antojitos Lidia', 'Milly', 'Dr. Cell']

        for (let i = 0; i < companies.length; i++) {
            if (homecompanies.includes(companies[i].name)) {
                let card = document.createElement('section');
                let h1 = document.createElement('h1');
                let motto = document.createElement('q');
                let yearfounded = document.createElement('p');

                h1.textContent = companies[i].name;
                motto.textContent = companies[i].motto;
                yearfounded.textContent = 'Year Founded: ' + companies[i].yearFounded;

                let divImg = document.createElement('div');
                divImg.className = "img-wrapper";

                let photo = document.createElement('img');
                photo.src = `images/companies/${companies[i].photo}`;
                photo.alt = `${companies[i].name}`;
                divImg.appendChild(photo);

                card.appendChild(h1);
                card.appendChild(motto);
                card.appendChild(yearfounded);

                document.querySelector('div.cards').appendChild(card);
            }
        }
    })

const WeatherAlertElement = document.getElementById("weather-alert")

const hide_weather_alert = () => {
    WeatherAlertElement.classList.add("hidden");
}

document.getElementById('weather-alert-close').addEventListener("click", hide_weather_alert);