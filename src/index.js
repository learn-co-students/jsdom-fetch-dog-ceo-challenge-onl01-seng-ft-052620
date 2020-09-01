let breeds_array = [];


document.addEventListener('DOMContentLoaded', function() {
  fetchImages();
  fetchBreeds();
});

function fetchImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderImages(json));
}

function renderImages(json) {
  dogImgsUrl = (json.message)
  dogImgsUrl.forEach(dogImgUrl => {
    const div = document.getElementById('dog-image-container')
    const img = document.createElement('img');
    img.src = dogImgUrl
    div.appendChild(img)
  }) 
}

function fetchBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  return fetch(breedUrl)
  .then(resp => resp.json())
  .then(results => {
    breeds = Object.keys(results.message);
    breeds_array = breeds;
    addBreedLiToUl(breeds_array);
  });
}

function addBreedLiToUl (breeds) {
  const ul = document.getElementById('dog-breeds')
  breeds.forEach(breed => {
   const li = document.createElement('li')
   li.innerText = breed
   ul.appendChild(li);
   li.addEventListener('click', updateColor);
  });
}

function updateColor(event) {
  event.target.style.color = 'blue';
}