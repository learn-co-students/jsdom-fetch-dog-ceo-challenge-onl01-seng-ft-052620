document.addEventListener('DOMContentLoaded', function(){
fetchImages()
fetchBreed()
dropDown()
})

function fetchImages() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => displayImages(json));
}

function displayImages(images) {
    const main = document.getElementById('dog-image-container')
    images["message"].forEach(image => {
        const img = document.createElement('img')
        img.src = image 
        main.appendChild(img)
    })
}

function fetchBreed() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp =>resp.json())
    .then(breed => displayBreed(breed));
}

function displayBreed(breed) {
    const ul = document.getElementById("dog-breeds")
    for (const name in breed.message){
        const li = document.createElement('li')
        li.innerText = name;
        li.addEventListener("click", () => li.style.color = "red")
        ul.appendChild(li)
    }
}

function dropDown() {
    const breedOption = document.getElementById("breed-dropdown")
    breedOption.addEventListener('change', function(e){
        let breedsListUpdate = displayBreed.filter(breed => breed[0] === e.target.value)
        const ul = document.getElementById("dog-breeds")
        removeChildren(ul)
        displayBreed(breedsListUpdate);
    });
}
function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}