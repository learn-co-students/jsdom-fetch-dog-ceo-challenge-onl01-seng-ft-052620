document.addEventListener('DOMContentLoaded', function() {
  fetchImages();
  fetchBreeds();
  const breedsList = document.getElementById('dog-breeds');
  let breedItem;
  const allBreeds = [];
  const filter = document.getElementById('breed-dropdown');

  function fetchImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(resp => resp.json())
      .then(json => addImages(json.message));
  }

  function addImages(dogImages){
    const imgWrapper = document.getElementById('dog-image-container');
    dogImages.forEach(imgURL => {
      imgWrapper.innerHTML += `<img src="${imgURL}" style="width: 20%;">`;
    });
  }

  function fetchBreeds(){
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(resp => resp.json())
      .then(json => addBreeds(json.message))
  }

  function addBreeds(breeds){
    for (let [key, value] of Object.entries(breeds)){
      if (value.length > 0){
        for(let i=0; i<value.length; i++){
          addBreedItem(`${value[i]} ${key}`);
        }
      } else {
        addBreedItem(`${key}`);
      }
    }
  }

  function addBreedItem(breed){
    breedItem = document.createElement('li');
    breedItem.style.cursor = "pointer";
    breedItem.textContent = breed;
    allBreeds.push(breed);
    breedsList.appendChild(breedItem);
    breedItem.addEventListener('click', (e)=> { 
      e.target.style.color = 'blue';
    });
  }

  function filterBreeds(){
    startingLetter = filter.value
    breedItems = document.querySelectorAll('ul#dog-breeds > li')
    breedItems.forEach(item => {
      item.remove();
    });
    allBreeds.forEach(breedName => {
      if (breedName[0] == startingLetter){
        addBreedItem(breedName);
      }
    });
  }

  filter.addEventListener('change', filterBreeds);

});

