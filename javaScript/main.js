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
  imgEl.src = 'https://i.pinimg.com/236x/b9/e7/95/b9e7958eb2d7f77bfde8a105efd3b5e5--colourful-birds-exotic-birds.jpg'
  return imgEl
}

function createAnimalNameP(animal){
  let animalNameEl = document.createElement("p")
  animalNameEl.textContent=`${animal.constructor.name}`

  return animalNameEl
}

function createSpecialAbilityHeader(animal){
  let pSpecialAbilitiesHeaderEl = document.createElement("p")
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
  pAnimalStatsHeaderEl.innerText ="Stats:"
  return pAnimalStatsHeaderEl
}

function createStatsList(animal){
  let ulEL = document.createElement("ul")
  let {sound,image,constructor,...relevantStats} = {animal}
  for(let stat in animal) {
    console.log(stat);
    let liItemEL = document.createElement("li")
    liItemEL.innerText = `${stat}: ${animal[stat]}`
    ulEL.appendChild(liItemEL)
    
  }; 
    
  return ulEL

}

function createFoodIcon(animal){
  let aEl = document.createElement("a")
  let iEl = document.createElement("i")
  iEl.classList.add("fas","fa-utensils")
  aEl.appendChild(iEl)
  return  aEl
}
function createMusicIcon(animal){
  let aEl = document.createElement("a")
  let iEl = document.createElement("i")
  iEl.classList.add("fas","fa-music")
  aEl.appendChild(iEl)
  return  aEl
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





  document.querySelector('#test').appendChild(wrapperEl)
}
createAnimalCard(InstanceArray[0])







let bird =InstanceArray[0]


function createCard(animalClass){

return 0
}



