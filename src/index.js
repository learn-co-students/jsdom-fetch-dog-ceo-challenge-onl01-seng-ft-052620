console.log('%c HI', 'color: firebrick')

function fetchImages() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => showImage(json.message));
}

function showImage(images) {
    const main = document.getElementById('dog-image-container')
    images.forEach(image => {
        const img = document.createElement('img')
        img.src = image
        img.innerHTML = "Image Element Added.";
        main.appendChild(img)   
    })
}

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => showBreeds(json.message));
    // .then(json => console.log(json.message.keys))
}

function showBreeds(breeds) {
    const filter = document.getElementById('breed-dropdown').value
    const ul = document.getElementById('dog-breeds')
    for(breed in breeds) {
        if (breed.charAt(0) == filter) {
        const li = document.createElement('li')
        li.innerHTML = breed;
        li.addEventListener('click', function(event) {
            li.style.color = "purple";
         });
        ul.appendChild(li) }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
    const breedSelect = document.getElementById('breed-dropdown')
    breedSelect.addEventListener("change", function(event) {
        const ul = document.getElementById('dog-breeds')
        ul.innerHTML = ""
        fetchBreeds()
    });
 })

