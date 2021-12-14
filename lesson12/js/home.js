const hamButton = document.querySelector('.ham');
const mainMenu = document.querySelector('.navigation');

hamButton.addEventListener('click', () => { mainMenu.classList.toggle('responsive') }, false);

window.onresize = () => { if (window.innerWidth > 760) mainMenu.classList.remove('responsive') };

document.getElementById("currentdate").innerHTML = new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "long", day: "numeric" })

const requestURL = 'https://keviner99.github.io/wdd230/lesson12/js/project.JSON';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    }).then(function(jsonObject) {
        const companies = jsonObject['companies'];
        const homecompanies = ['Antojitos Lidia', 'Milly', 'Dr. Cell']

        for (let i = 0; i < companies.length; i++) {
            if (homecompanies.includes(companies[i].name)) {
                let card = document.createElement('section')
            }
        }
    })