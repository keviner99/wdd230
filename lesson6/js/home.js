const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
    
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    
    for (let i = 0; i < towns.length; i++) {

        let card = document.createElement('div');
        let h1 = document.createElement('h1');
        let motto = document.createElement('h3');
        let yearfounded = document.createElement('p');
        let currentpopulation = document.createElement('p');
        let averagefainfall = document.createElement('p');
        let image = document.createElement('img');
        
        
        h1.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yearfounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        currentpopulation.textContent = 'Population: ' + towns[i].currentPopulation;
        averagefainfall.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
        image.setAttribute('src', towns[i].photo);

        




        card.appendChild(h1);
        card.appendChild(motto);
        card.appendChild(yearfounded);
        card.appendChild(currentpopulation);
        card.appendChild(averagefainfall);
        card.appendChild(image);
        
        document.querySelector('div.cards').appendChild(card);

      }
  
  });