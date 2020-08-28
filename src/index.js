document.addEventListener("DOMContentLoaded", onLoad)
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
console.log('%c HI', 'color: firebrick')



function onLoad() {
getImages()
getBreeds()
}


function getImages(){
   fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderImages(json))
}

function getBreeds(){
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => renderBreeds(json))
}

function renderImages(images) {
  const main = document.getElementById('dog-image-container')
  images["message"].forEach((item, i) => {
    let img = document.createElement("img")
    img.src = item
    main.appendChild(img)
  });
}


  function renderBreeds(breeds){
    const breedSection = document.getElementById('dog-breeds')
    const ul = document.createElement('ul')
    ul.id = 'breed-list'
    breedSection.appendChild(ul)
    const breedSelection = Object.keys(breeds.message)
    show_breeds(breedSelection)
    change_li_color_when_clicked()
}

  function show_breeds(breeds){

      breeds.forEach((item, i) => {
      const ul_node = document.getElementById('breed-list')
      let li = document.createElement('li')
      li.textContent = item
      ul_node.appendChild(li)
    });
listen_for_selection()
  }

  function change_li_color_when_clicked(){
    const lis = document.querySelectorAll('li')
    lis.forEach((item, i) => {
      item.addEventListener("click", function(event){
        event.target.style.color = "blue"
      })
    });
}


  function listen_for_selection(){
    const drop_down = document.getElementById('breed-dropdown')
      drop_down.addEventListener("change", function(event){
        filter(event.target.value)
      })
  }

  function filter(char){
    const ul_node = document.getElementById('breed-list')
    const lis = document.querySelectorAll('li')
    lis.forEach((item, i) => {
      if (item.textContent.charAt(0) !== char){
        ul_node.removeChild(item)
      }
    });


  }
