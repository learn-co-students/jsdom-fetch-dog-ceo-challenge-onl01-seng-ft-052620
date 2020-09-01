document.addEventListener('DOMContentLoaded', function () {
    getImages()
    getBreeds()
})

console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function getImages () {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json))
}

function renderImages(images) {
    const container = document.getElementById('dog-image-container')
    images["message"].forEach(image => {
        const img = document.createElement('img')
        img.src = image
        container.appendChild(img)
    })
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getBreeds() {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            breeds = Object.keys(json.message)
            breedList = breeds
            renderBreeds(breedList)
            breedSelection()
        })
}

function renderBreeds(breeds) {
    const ul = document.getElementById('dog-breeds')
    breeds.forEach(breed => {
        const li = document.createElement('li')
        li.innerText = breed
        ul.appendChild(li)
        li.addEventListener('click', function(event) {
            event.target.style.color = "green";
        })
    })
}

function breedSelection() {
    let breedDropdown = document.getElementById("breed-dropdown")
    breedDropdown.addEventListener("change", function (event) {
        console.log(event)
        let breedListUpdate = breedList.filter(breed => breed[0] === event.target.value)
        const ul = document.getElementById('dog-breeds')
        removeChildren(ul)
        renderBreeds(breedListUpdate)
    })
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild
    }
}
