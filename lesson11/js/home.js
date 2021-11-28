const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
    
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    const StormwatchBayTowns = ['Preston','Soda Springs','Fish Haven']
    
    for (let i = 0; i < towns.length; i++) {


      if (StormwatchBayTowns.includes(towns[i].name)) {
        let card = document.createElement('section');
        let h1 = document.createElement('h1');
        let motto = document.createElement('q');
        let yearfounded = document.createElement('p');
        let currentpopulation = document.createElement('p');
        let averagefainfall = document.createElement('p');
        
        
        
        h1.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yearfounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        currentpopulation.textContent = 'Population: ' + towns[i].currentPopulation;
        averagefainfall.textContent = 'Annual Rain fall: ' + towns[i].averageRainfall;
        
        let divImg = document.createElement('div');
        divImg.className = "img-wrapper"


        let photo = document.createElement('img');
        photo.src = `images/towns/${towns[i].photo}`
        photo.alt = `${towns[i].name}`
        photo.setAttribute("height", "300")
        divImg.appendChild(photo)



        card.appendChild(h1);
        card.appendChild(motto);
        card.appendChild(yearfounded);
        card.appendChild(currentpopulation);
        card.appendChild(averagefainfall);
        
        
        document.querySelector('div.cards').appendChild(card);
      }

      }
  
  });