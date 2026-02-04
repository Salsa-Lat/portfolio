const zone = document.getElementById('card-align-js');

fetch("cards.json")
  .then(response => response.json())
  .then(data => { 
    
    data.project.forEach(cards => {
      
      const card = document.createElement('div');
      card.classList.add('cards');
      zone.appendChild(card);

      const images = document.createElement('img');
      images.src = cards.image;
      images.alt = cards.alter;
      card.appendChild(images);

      const text = document.createElement('div');
      text.classList.add('text');
      card.appendChild(text);

      const titles = document.createElement('h3');
      titles.textContent = cards.title;
      text.appendChild(titles);

      const description = document.createElement('p');
      description.textContent = cards.desc;
      text.appendChild(description);

      const sources = document.createElement('p');
      sources.textContent = cards.source;
      sources.classList.add('source');
      text.appendChild(sources);

      const plus = document.createElement('a');
      plus.href = cards.link;
      plus.classList.add('btn');
      plus.textContent = "Voir Plus";
      text.appendChild(plus);

    });

  });