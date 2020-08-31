console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", function (e) {
    // CHALLENGE 1

    fetchImages()

    // CHALLENGE 2

    fetchBreeds()

    // CHALLENGE 4
    document.getElementById("breed-dropdown").addEventListener("change", function(e){
        const dropdown = document.getElementById("breed-dropdown")

        filterBreeds(dropdown.options[dropdown.selectedIndex].value)

        e.preventDefault()
    })

})

function fetchImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch (imgUrl)
        .then(resp => resp.json())
        .then(json => renderImages(json["message"]))
}

function renderImages(images) {
    const container = document.getElementById("dog-image-container")

    images.forEach(image => {
        const img = document.createElement('img')
        img.src = image

        container.appendChild(img)
    })
}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => renderBreeds(json["message"]))
}

function renderBreeds(breeds) {
    const container = document.getElementById("dog-breeds")

    for (breed in breeds) {
        if (breeds[breed].length > 0){
            breeds[breed].forEach(sub => {
                container.appendChild(createBreedElement(sub + " " + breed))
            })
        } else {
            container.appendChild(createBreedElement(breed))
        }
    }

}

// CHALLENGE 3
function createBreedElement(name){
    const li = document.createElement("li")
    li.innerHTML = name
    li.onclick = function(){
        li.style.color = "red"
    }
    
    return li
}

function filterBreeds(filter) {
    if (filter === ""){
        showAllBreeds()
    } else {
        const breeds = document.querySelectorAll("#dog-breeds li")
    
        breeds.forEach(breed => {
            if(breed.innerHTML.charAt(0) === filter){
                breed.style.display = ""
            } else{
                breed.style.display = "none"
            }
        })
    }
}

function showAllBreeds() {
    const breeds = document.querySelectorAll("#dog-breeds li")

    breeds.forEach(breed => {
        breed.style.display = ""
    })
}