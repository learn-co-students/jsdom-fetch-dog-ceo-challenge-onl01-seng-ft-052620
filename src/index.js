document.addEventListener('DOMContentLoaded', function() {
  getImages()
  getBreeds()

})

console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function getImages () {
    fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderImgs(json));
}



function renderImgs(images) {
    const main = document.getElementById('dog-image-container')
    images["message"].forEach(image => {
      const img = document.createElement('img')
      img.src = image
      main.appendChild(img)
    })
  }
// ----------------------------------- break

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  function getBreeds () {
    fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => {
      breeds = Object.keys(json.message);
      breedsList = breeds;
      renderBreeds(breedsList)
      breedSelection()
  });
}

let breedsList = []

function renderBreeds(breeds) {
    const ul = document.getElementById('dog-breeds')
    breeds.forEach(breed => {
      const li = document.createElement('li')
      li.innerText = breed
      ul.appendChild(li)
      li.addEventListener('click', function(event){
        event.target.style.color= "blue";   
      });



    })
  }

  function breedSelection(){
  let breedOption = document.getElementById("breed-dropdown")
  breedOption.addEventListener('change', function (event) {
    let breedsListUpdate= breedsList.filter(breed => breed[0] === event.target.value )
    const ul = document.getElementById('dog-breeds');
    removeChildren(ul)
    renderBreeds(breedsListUpdate);
    
  });

}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }
  