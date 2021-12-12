requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
    
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    
    let town = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
      
    h2.textContent = 'Upcoming events';
    p.textContent = towns[0].events[0];
    p2.textContent = towns[0].events[1];
    p3.textContent = towns[0].events[2];
      
    town.appendChild(h2);
    town.appendChild(p);
    town.appendChild(p2);
    town.appendChild(p3);
      
    document.querySelector('div.event1').appendChild(town);
      
  });