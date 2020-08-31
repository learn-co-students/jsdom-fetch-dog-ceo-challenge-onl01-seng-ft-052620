const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function () {
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderImages(json));
  
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => renderBreed(json));


})

function renderBreed(breeds) {
  const dogUl = document.getElementById('dog-breeds')

  for (const property in breeds["message"]) {
    const li = document.createElement('li')
    li.innerText = `${property}`
    dogUl.appendChild(li);
    li.addEventListener('click', function () {
      li.style.color = 'blue'
    })


  }
}
function renderImages(images) {
  const dogDiv = document.getElementById('dog-image-container')
  
  images['message'].forEach(image => {
    const img = document.createElement('IMG')
    img.src = image
    dogDiv.appendChild(img)
  })
}

console.log('%c HI', 'color: firebrick')
