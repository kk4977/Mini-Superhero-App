let searchInput = document.querySelector('.container .search input');
let superheroImg = document.querySelector('.container .superheroImg');
let superheroName = document.querySelector('.container .superheroName');
let powerStateParent = document.querySelector('.container .other .tab-content .powerstate');
let biographyParent = document.querySelector('.container .other .tab-content .biography');
let appearanceParent = document.querySelector('.container .other .tab-content .appearance');
let connectionParent = document.querySelector('.container .other .tab-content .connections');
let result = document.querySelector('.container .result');
//Api Key
//How to get api key follow the given below steps
//1.Open your browser anx search superhero api
//2.Go to superheroapi.com
//3.Sign in with facebook
//And copy your api key from there
let apiKey = 727054372039115;
let fetchSuperhero =()=>{
let url = `https://superheroapi.com/api.php/${apiKey}/search/${searchInput.value}`;
 fetch(url).then((res) => res.json()).then((data)=>{
   // console.log(data) 
 if(data.response == 'success'){ 
   result.style.display = 'block';
   document.querySelector('.msg').style.display = 'none';
    superheroImg.src = data.results[0].image.url;
    superheroName.innerHTML = data.results[0].name;
     powerState = `<li>
                     <i class="fa-solid fa-shield"></i>
                     <span>Combat</span>
                     <span>${data.results[0].powerstats.combat}</span>
                     </li>
                     <li>
                      <i class="fa-solid fa-shield"></i>
                      <span>Durability</span>
                      <span>${data.results[0].powerstats.durability}</span>
                                          </li>
                  <li>
                     <i class="fa-solid fa-shield"></i>1
                     <span>Intelligence</span>
                     <span>${data.results[0].powerstats.intelligence}</span>
                     </li>   
<li>
                     <i class="fa-solid fa-shield"></i>
                     <span>Power</span>
                     <span>${data.results[0].powerstats.power}</span>
                     </li>
<li>
                     <i class="fa-solid fa-shield"></i>
                     <span>Speed</span>
                     <span>${data.results[0].powerstats.speed}</span>
                     </li> 
<li>
                     <i class="fa-solid fa-shield"></i>
                     <span>Strength</span>
                     <span>${data.results[0].powerstats.strength}</span>
                     </li>                     `; 
    biography = `<li><span>Full Name: </span> ${data.results[0].biography['full-name']}</li>
                <li><span>Alter-Egos: </span> ${data.results[0].biography['alter-egos']}</li>
                <li><span>First-Appearance: </span> ${data.results[0].biography['first-appearance']}</li>
                <li><span>Place-of-birth:</span> ${data.results[0].biography['place-of-birth']}</li>
                <li class="publisher"><span>Publisher: </span> ${data.results[0].biography.publisher}</li>
                <li class="aliases"><span>Aliases: </span> <p>${data.results[0].biography['aliases']}</p></li>                `;
     appearance = `<li>
                   <i class="fa-solid fa-star"></i>
                   <span>Eye-Color</span>
                   <div>${data.results[0].appearance['eye-color']}</div>
                   </li>
                  <li>
                   <i class="fa-solid fa-star"></i>
                   <span>Gender</span>
                   <div>
                   ${data.results[0].appearance.gender}
                   </div>
                   </li>
                 <li>
                   <i class="fa-solid fa-star"></i>
                   <span>Hair-Color</span>
                   <div>
                   ${data.results[0].appearance['hair-color']}
                   </div>
                   </li>
                 <li>
                   <i class="fa-solid fa-star"></i>
                   <span>Height</span>
                   <div>
                   ${data.results[0].appearance.height[0]}
                   </div>
                   </li>
                 <li>
                   <i class="fa-solid fa-star"></i>
                   <span>Race</span>
                   <div>
                   ${data.results[0].appearance.race}
                   </div>
                   </li>
                 <li>
                   <i class="fa-solid fa-star"></i>
                   <span>Weight</span>
                   <div>
                   ${data.results[0].appearance.weight[0]}
                   </div>
                   </li>              `;      
     connections = `<h2>Group-Affiliations</h2>
     <span>${data.results[0].connections['group-affiliation']}</span>
                    <h2>Relatives</h2>
               <span>${data.results[0].connections.relatives}</span>`;
     connectionParent.innerHTML = connections;
     appearanceParent.innerHTML = appearance;           
     powerStateParent.innerHTML = powerState;  
     biographyParent.innerHTML = biography;
}else{
   result.style.display = 'none';
   document.querySelector('.msg').style.display = 'block';
}
 })    
}

searchInput.addEventListener('keyup',(e)=>{
  if(searchInput.value != ''){
     if(e.key == 'Enter'){
         fetchSuperhero();
     }   
  }   
})

//For Indicator
let allOptions = document.querySelectorAll('.container .other .options span');
let marker = document.querySelector('.container .other .options #marker');

allOptions.forEach((option)=>{
  option.addEventListener('click',(e)=>{
     indicator(e.target);    
  })     
})

let indicator =(e)=>{
 marker.style.left = e.offsetLeft + 'px';
 marker.style.width = e.offsetWidth + 'px';
}

//For Tabs
let allTabs = document.querySelectorAll('.container .other .tab-content div');

allOptions.forEach((tab,index)=>{
  tab.addEventListener('click',()=>{
     allTabs.forEach((content)=>{
       content.classList.remove('active');   
     })
     allOptions.forEach((option)=>{
       option.classList.remove('active')  
     })
     allOptions[index].classList.add('active');
     allTabs[index].classList.add('active');
  })    
})

fetchSuperhero();