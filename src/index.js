console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


function fetchDogs(){
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderDogs(json));
}

function renderDogs(dogs) {
    const main = document.getElementById('dog-image-container')
    dogs.message.forEach(dog => {
      const h2 = document.createElement('img')
      h2.src = dog
      main.appendChild(h2)
})}

function fetchBreeds(){
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
}

function renderBreeds(breeds) {
    const main = document.getElementById('dog-breeds')
    let names = breeds.message

    for (const breed in names){
        let li = document.createElement('li')
        li.innerHTML = breed
        main.appendChild(li)
    }
}
    

document.addEventListener('DOMContentLoaded', function(){
    fetchDogs()
    fetchBreeds()
})

document.addEventListener('click', function(e){
    let ul = document.getElementById('dog-breeds')
    let list = ul.getElementsByTagName("li");

    for(li of  list){
        li.addEventListener('click', function(){
          this.style.color = "red";
        })
    }
})

document.addEventListener('change', function(){
    let ul = document.getElementById('dog-breeds')
    let list = ul.getElementsByTagName("li");
    let dropdown = document.getElementById('breed-dropdown')
    
    let x = dropdown.value;
    
    for(li of list){
        if (li.innerText[0] == x){
            li.style.display = ""
        }
        else{
            li.style.display = "none"
        }
    }
})


