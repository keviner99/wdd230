const requestURL1 = 'https://keviner99.github.io/wdd230/lesson12/js/project.JSON';
const CardsDiv = document.getElementById('directory-cards')

const fetchCards = () => {

    fetch(requestURL1)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonObject) {

            const companies = jsonObject['companies'];

            CardsDiv.innerHTML = ''

            for (let i = 0; i < companies.length; i++) {

                let card = document.createElement('section');

                let div = document.createElement('div')

                let h2 = document.createElement('h2');
                h2.textContent = `${companies[i].name}`;
                div.appendChild(h2);

                let website = document.createElement('p');
                website.innerHTML = `<a href="${companies[i].website}">Website</a>`;
                div.appendChild(website);

                card.appendChild(div);

                // image
                let photo = document.createElement('img');
                photo.src = `images/companies/directory/${companies[i].logo}`;
                photo.alt = `${companies[i].name} Logo`
                photo.height = '300'
                photo.width = '300'

                card.appendChild(photo);

                // add card to div
                CardsDiv.appendChild(card);

            }
        });
}
fetchCards()