let breeds_array = []

document.addEventListener('DOMContentLoaded', function() {
    fetchImage()
    fetchBreed()
})

function fetchImage() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImage(json)) 

}

function renderImage(json) {
    json.message.forEach(dogImg => {
    const div = document.querySelector('#dog-image-container')
    const img = document.createElement('img')
    img.src = dogImg
    div.appendChild(img) 
    })
}


function fetchBreed() {
    const imgUrl = "https://dog.ceo/api/breeds/list/all"
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(results => {
        breeds = Object.keys(results.message)
        breeds_array = breeds;
        renderBreed(breeds_array)  
    })
}

function renderBreed(breeds) {
    const ul = document.getElementById('dog-breeds')
    breeds.forEach(breed => {
        const li = document.createElement('li')
        li.innerText = breed
        ul.appendChild(li);
        li.addEventListener('click', function () {
            li.style.color = 'red'
           
        })
     
    })
}
