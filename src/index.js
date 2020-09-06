console.log('%c HI', 'color: firebrick')

const imgDiv = () => document.getElementById('dog-image-container')
const select = () => document.getElementById('breed-dropdown')
const ul = () => document.querySelector('ul#dog-breeds')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breedFilter = null
let breeds

document.addEventListener("DOMContentLoaded", ()=>{
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => showImages(json))

    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            breeds = Object.keys(json.message)
            listBreeds(breeds)
        })
})

function listBreeds() {
    breeds.forEach(element => {
        if (breedFilter === null) {
            showBreed(element)
        } else if (breedFilter === element.charAt(0)) {
            showBreed(element)
        }
    })
    select().addEventListener("change", filterBreeds)
}

function showBreed(breed) {
    let li = document.createElement('li')
    li.innerText = breed
    ul().appendChild(li)
    li.addEventListener("click", changeColor)
}

function filterBreeds() {
    breedFilter = select().value
    ul().innerHTML = ""
    listBreeds()
}

function changeColor() {
    this.style.color = "lightblue"
}

function showImages(images) {
    images.message.forEach(element => {
        showImage(element)
    });
}

function showImage(url) {
    let imgTag = document.createElement('img')
    imgTag.src = url
    imgDiv().appendChild(imgTag)
}