import InstanceArray from "./Classes/instances.js"


{/* <div class="animal">
    <img
      src="https://i.pinimg.com/236x/b9/e7/95/b9e7958eb2d7f77bfde8a105efd3b5e5--colourful-birds-exotic-birds.jpg"
      alt="" />
      <p class="name">
        <b>Bird</b>
    <p>
      <b class="text-warning bg-dark">Special Abilities:</b>
    </p>
      <span class="bg-dark text-warning ">Flying </span>

    <p class="bg-info text-dark">Stats:</p>
    <p class="ml-1 mr-1">
      name:dasdas
    </p>
    <p>
      age: dasdas
    </p>
    <br />
    <br />
    <a href=""></a>
    <a href="#"> <i class="fas fa-utensils"></i> </a>
    <a href="">
      <i class="fas fa-music"></i>
    </a>

    </p>
  </div> */}


function createAnimalImgEL(animal){
  let imgEl = document.createElement("img")
  imgEl.src = animal.image
  return imgEl
}

function createAnimalNameP(animal){
  let animalNameEl = document.createElement("p")
  animalNameEl.textContent=`${animal.constructor.name}`
  animalNameEl.classList.add('font-weight-bold')

  return animalNameEl
}

function createSpecialAbilityHeader(animal){
  let pSpecialAbilitiesHeaderEl = document.createElement("p")
  pSpecialAbilitiesHeaderEl.classList.add("text-danger","bg-warning")

pSpecialAbilitiesHeaderEl.innerText = 'Special Abilities:'
  return pSpecialAbilitiesHeaderEl
}

function createListOfAbilities(animal){
  let ulEL = document.createElement("ul")
  animal.specialAbility.forEach(ability => {
    let liItemEL = document.createElement("li")
    liItemEL.innerText = `${ability}`
    ulEL.appendChild(liItemEL)
  });
  return ulEL

}

function createStatsHeader(){
  let pAnimalStatsHeaderEl = document.createElement("p")
  pAnimalStatsHeaderEl.classList.add("text-primary","bg-info")
  pAnimalStatsHeaderEl.innerText ="Stats:"
  return pAnimalStatsHeaderEl
}

function createStatsList(animal){
  let ulEL = document.createElement("ul")
  for(let stat in animal) {
    if(stat !== 'constructor' &&stat !== 'sound' &&stat !== 'image'&&stat !== 'specialAbility'){
      let liItemEL = document.createElement("li")
    liItemEL.innerText = `${stat}: ${animal[stat]}`
    ulEL.appendChild(liItemEL)
    }
    
    
  }; 
    
  return ulEL

}

function createFoodIcon(animal){
  let aEl = document.createElement("a")
  aEl.href="#"
  let iEl = document.createElement("i")
  iEl.classList.add("fas","fa-utensils")
  aEl.appendChild(iEl)
  return  aEl
}
function createMusicIcon(animal){
  let buttonEl = document.createElement("button")
  buttonEl.onclick=()=>animal.sound.play()
  let iEl = document.createElement("i")
  iEl.classList.add("fas","fa-music")
  buttonEl.appendChild(iEl)
  return  buttonEl
}
                
function createAnimalCard1(animal){
    let wrapperEl = document.createElement('div')
    let pNameEl = document.createElement("p")
    let pSpecialAbilitiesHeaderEl = document.createElement("p")
    let pAnimalSpecialAbilitiesEl = document.createElement("p")
    let pAnimalStatsHeaderEl = document.createElement("p")
    let pAnimalStatsEl = document.createElement("p")

}

function createAnimalCard(animal){
  let wrapperEl = document.createElement("div")
  wrapperEl.classList.add('animal')

  wrapperEl.appendChild(createAnimalImgEL(animal))
  wrapperEl.appendChild(createAnimalNameP(animal))
  if(animal.specialAbility){
    wrapperEl.appendChild(createSpecialAbilityHeader())
    wrapperEl.appendChild(createListOfAbilities(animal))
  }
  wrapperEl.appendChild(createStatsHeader())
  wrapperEl.appendChild(createStatsList(animal))
  wrapperEl.appendChild(createFoodIcon(animal))
  wrapperEl.appendChild(createMusicIcon(animal))





  return (wrapperEl)
}

document.querySelector('#bird-card').appendChild(createAnimalCard(InstanceArray[0]))
document.querySelector('#eagle-card').appendChild(createAnimalCard(InstanceArray[1]))
document.querySelector('#goldenEagle-card').appendChild(createAnimalCard(InstanceArray[2]))
document.querySelector('#owl-card').appendChild(createAnimalCard(InstanceArray[3]))
document.querySelector('#spider-card').appendChild(createAnimalCard(InstanceArray[4]))
document.querySelector('#tarantula-card').appendChild(createAnimalCard(InstanceArray[5]))
document.querySelector('#blackMamba-card').appendChild(createAnimalCard(InstanceArray[6]))







let bird =InstanceArray[0]


function createCard(animalClass){

return 0
}



