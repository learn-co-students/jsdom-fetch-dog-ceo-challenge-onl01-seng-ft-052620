let pics = () => document.querySelector("#dog-image-container")
let list = () => document.querySelector("#dog-breeds")
let dropdown = () => document.querySelector("#breed-dropdown")

document.addEventListener("DOMContentLoaded", function(){
    fetchPups()
    fetchBreeds()
});

///////////////////////////////////////////////////////
function fetchPups(){
    return fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => usePups(json));
}

function usePups(pups){
    pups.message.forEach(pup => {
        const pic = document.createElement('img')
        pic.src = pup 
        pics().appendChild(pic)
    })
}

//////////////////////////////////////////////////////////////
function fetchBreeds(){
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => useBreeds(json))
}



//////////////////////////////////////////////////////////////
function useBreeds(breeds){

    for (const breed in breeds.message) {
        const li = document.createElement('li')
        li.innerHTML = breed 
        list().appendChild(li)
        changeColor(li)
    }

    function pupFilter(){
        let choice = dropdown().value
        list().innerHTML = ''
        for (const breed in breeds.message) {
            if (breed.startsWith(choice)){
                const li = document.createElement('li')
                li.innerHTML = breed 
                list().appendChild(li)
            }
    }
    }

    dropdown().addEventListener("click", function(){
        pupFilter()
    })

}
///////////////////////////////////////////////////////////////



let changeColor = li => li.addEventListener("click", function(){
    li.style.color = "deepskyblue"
})









