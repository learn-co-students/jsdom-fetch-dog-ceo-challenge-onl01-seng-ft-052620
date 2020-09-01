
  
document.addEventListener('DOMContentLoaded', function() {
    fetchDogs()
    fetchBreeds()
    
})

    console.log('%c HI', 'color: firebrick')
    
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    
    function fetchDogs() {
        fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => renderDogs(json));
    }
    // function fetchDogs() {
    //         fetch(imgURL)
    //     .then(resp => resp.json())
    //     .then(json => renderDogs(json));
    // }
    // function fetchDogs() {
    //     fetch(imgURL) 
    // .then(resp => resp.json())
    // .then(json => renderDogs(json));
    // };   


 function renderDogs(images) {
    const main = document.getElementById('dog-image-container')    
    images["message"].forEach(image => {
      const img = document.createElement('img')    
      img.src = image
      main.appendChild(img)
    });
};

function fetchBreeds () {
  fetch(breedUrl)
.then(resp => resp.json())
.then(json => {
    breeds = Object.keys(json.message);
    breedList = breeds;
    renderBreeds(breedList)
    breedSelection()
});
}

let breedList = []

function renderBreeds(breeds) {
    const ul = document.getElementById('dog-breeds')    
    breeds.forEach(breed => {
        const li = document.createElement('li')    
        li.innerText = breed 
        ul.appendChild(li)
        li.addEventListener('click', function(e){
            e.target.style.color= "green";    
        });
    });
};


function breedSelection(){
    let breedOption = document.getElementById("breed-dropdown")
    breedOption.addEventListener('change', function (event) {
      let breedsListUpdate= breedList.filter(breed => breed[0] === event.target.value )
      const ul = document.getElementById('dog-breeds');
      removeChildren(ul)
      renderBreeds(breedsListUpdate);
      
    });
  
  }
  
  function removeChildren(element) {
      let child = element.lastElementChild;
      while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
      }
    }
    

// function breedSelection(){
// let breedOption = document.getElementById("breed-dropdown")
// breedOption.addEventListener('change', function (e) {
//   let breedsListUpdate= breedsList.filter(breed => breed[0] === e.target.value )
//   const ul = document.getElementById('dog-breeds');
//   removeChildren(ul)
//   renderBreeds(breedsListUpdate);
  
// });

// }


// function removeChildren(element) {
//     let child = element.lastElementChild;
//     while (child) {
//       element.removeChild(child);
//       child = element.lastElementChild;
//     }
//   }
