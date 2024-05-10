// hero page javascript
// fettching hero dtails from api
if (localStorage.getItem("favourites")==null) {
  localStorage.setItem("favourites",JSON.stringify([]));
}else{
  var arr = JSON.parse(localStorage.getItem("favourites"));
}

const showCorrespondingHeross = () => {
  let inputValue = document.getElementById("my-searched").value;
  fetch(
   `https://www.superheroapi.com/api.php/586069776286026/search/${inputValue}`
  )
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.results) {
        data.results.forEach((element) => {
          html += `
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" onclick="showDetails(${element.id})" src="${element.image.url}">
              <div class="card-body">
                  <h5 class="card-title" onclick="showDetails(${element.id})">${element.name}</h5>
                  <span><i id="${element.id}" class="fa-solid fa-heart" onclick="addFavourite(${element.id})"></i></span>
              </div>
            </div>
                `;
        });
      }
    }
  )
} 


fetch(
    `https://www.superheroapi.com/api.php/586069776286026/${localStorage.getItem(
      "id"
    )}`
  )
  
    .then((response) => response.json())
    .then((data) => {
  
      // add hero image in html page
      document.getElementById("img").setAttribute("src", `${data.image.url}`);
   
      
      
      // add hero name in html page
      document.getElementById("name").innerHTML = `${data.name}`;
  
      // add biography details in page
      document.getElementById("full-name").append(`${data.biography["full-name"]}`);
      document.getElementById("place").append(`${data.biography["place-of-birth"]}`);
      document.getElementById("first-appearance").append(`${data.biography["first-appearance"]}`);
      document.getElementById("publisher").append(`${data.biography.publisher}`);
      document.getElementById("alignment").append(`${data.biography.alignment}`);
      
  
      // add poserstats details in page
      document.getElementById("intelligence").append(`${data.powerstats.intelligence}`);
      document.getElementById("strength").append(`${data.powerstats.strength}`);
      document.getElementById("speed").append(`${data.powerstats.speed}`);
      document.getElementById("power").append(`${data.powerstats.power}`);
      document.getElementById("durability").append(`${data.powerstats.durability}`);
      document.getElementById("combat").append(`${data.powerstats.combat}`);
  
  
      // add appearance details in page
      document.getElementById("gender").append(`${data.appearance.gender}`);
      document.getElementById("race").append(`${data.appearance.race}`);
      document.getElementById("height").append(`${data.appearance.height}`);
      document.getElementById("weight").append(`${data.appearance.weight}`);
      document.getElementById("eye-color").append(`${data.appearance["eye-color"]}`);
      document.getElementById("hair-color").append(`${data.appearance["hair-color"]}`);
  
  
      // add work details in page
      document.getElementById("occupation").append(`${data.work.occupation}`);
      document.getElementById("base").append(`${data.work.base}`);
  
  
      // add connections details in page
      document.getElementById("relatives").append(`${data.connections.relatives}`);
      document.getElementById("group-affiliation").append(`${data.connections["group-affiliation"]}`);
    });
    function myFunction() {
      const element = document.getElementById("img");
      window.location="index.html";
      
    }
    myFunction(e);
    function myFav(){
      const element = document.getElementById("")
      
    }


    const showCorrespondingHeros = () => {
      let inputValue = document.getElementById("newfav").value;
      fetch(
        `https://www.superheroapi.com/api.php/586069776286026/search/${inputValue}`
      )
        .then((response) => response.json())
        .then((data) => {
          let html = "";
          if (data.results) {
            data.results.forEach((element) => {
              html += `
                <div class="card" style="width: 18rem;">
                  <img class="card-img-top" onclick="showDetails(${element.id})" src="${element.image.url}">
                  <div class="card-body">
                      <h5 class="card-title" onclick="showDetails(${element.id})">${element.name}</h5>
                      <span><i id="${element.id}" class="fa-solid fa-plus icon" onclick="addFavourite(${element.id})"></i></span>
                  </div>
                </div>
                    `;
            });
          } 
        }
      )
      }