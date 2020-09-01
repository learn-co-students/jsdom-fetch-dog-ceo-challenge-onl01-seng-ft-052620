console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
document.addEventListener("DOMContentLoaded", function(){
    const select = document.getElementById('breed-dropdown');
    const ul = document.getElementById("dog-breeds");
    fetch(imgUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        for (const img_url of json.message){
            const container = document.getElementById("dog-image-container");
            const img = document.createElement("img");
            img.src = img_url;
            container.appendChild(img);
        }
    });

    fetch(breedUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
            for(const breed in json.message){
                const li = document.createElement("li");
                li.innerText = breed;
                li.addEventListener("click", () => li.style.color = "red");
                ul.appendChild(li);
            };
            select.addEventListener('change', function(){
              ul.innerHTML = "";
              let filteredArray = Object.keys(json.message).filter((breed) => breed[0] === select.value)
              filteredArray.forEach((breed) => {
                const li = document.createElement("li");
                li.innerText = breed;
                li.addEventListener("click", () => li.style.color = "red");
                ul.appendChild(li);
              });
            })
    })
    
});


   

    





