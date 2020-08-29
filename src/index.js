
document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
})

    function fetchImages() {
        return fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(response => response.json())
        .then(json => renderDogImg(json.message));
    
      }

      function renderDogImg(imgs){
          const allImages = document.getElementById("dog-image-container")
          for (img of imgs){
            const picture = document.createElement('img')
            picture.style.width = '25%'
            allImages.appendChild(picture)
            picture.src = img
         
        }
      }

      function fetchBreeds() {
        return fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(json => {
            breeds = Object.keys(json.message);
            renderBreeds(breeds)
          
        });
       
    }

    function renderBreeds(breeds) {
        let ul = document.querySelector('ul#dog-breeds');
        let selectElement = document.getElementById('breed-dropdown')
        selectElement.addEventListener('change', function(event) {
            removeChildren(ul)
          let br =  breeds.filter(br => br.startsWith(event.target.value))
          br.forEach(element => {
              const li = document.createElement('li')
              li.innerText = element
              li.style.cursor = 'pointer'
              ul.appendChild(li)
              li.addEventListener("mouseout", function( event ) {   
                  event.target.style.color = "blue";
                  setTimeout(function() {
                    event.target.style.color = "";
                  }, 300);
                }, false);
              });
          })
 
  }
  
           

  function removeChildren(element) {
      let child = element.lastElementChild;
      while (child) {
          element.removeChild(child);
          child = element.lastElementChild;
        }
  }



//         function selectBreedLetter(letter){
//          updateBreedList(breeds.filter(br => br.startsWith(letter)))
//         } 
//  
//        function selectLetter() {
//       let selectElement = document.getElementById('breed-dropdown')
//       selectElement.addEventListener('change', function(event)  {
//           selectBreedLetter(event.target.value)
//     })    
//     
//   }

          
                
     









     
