import InstanceArray from "./Classes/instances.js";

function createAnimalImgEL(animal) {
  let imgEl = document.createElement("img");
  imgEl.src = animal.image;
  return imgEl;
}

function createAnimalNameP(animal) {
  let animalNameEl = document.createElement("p");
  animalNameEl.textContent = `${animal.constructor.name}`;
  animalNameEl.classList.add("font-weight-bold");

  return animalNameEl;
}

function createSpecialAbilityHeader(animal) {
  let pSpecialAbilitiesHeaderEl = document.createElement("p");
  pSpecialAbilitiesHeaderEl.classList.add("text-danger", "bg-warning");

  pSpecialAbilitiesHeaderEl.innerText = "Special Abilities:";
  return pSpecialAbilitiesHeaderEl;
}

function createListOfAbilities(animal) {
  let ulEL = document.createElement("ul");
  ulEL.classList.add("ability-ul");
  animal.specialAbility.forEach((ability) => {
    let liItemEL = document.createElement("li");
    liItemEL.innerText = `${ability}`;
    ulEL.appendChild(liItemEL);
  });
  return ulEL;
}

function createStatsHeader() {
  let pAnimalStatsHeaderEl = document.createElement("p");
  pAnimalStatsHeaderEl.classList.add("text-primary", "bg-info");
  pAnimalStatsHeaderEl.innerText = "Stats:";
  return pAnimalStatsHeaderEl;
}

function createStatsList(animal) {
  let ulEL = document.createElement("ul");

  for (let stat in animal) {
    if (
      stat !== "constructor" &&
      stat !== "sound" &&
      stat !== "image" &&
      stat !== "specialAbility" &&
      stat !== "animalEats"
    ) {
      let liItemEL = document.createElement("li");
      liItemEL.innerText = `${stat}: ${animal[stat]}`;
      ulEL.appendChild(liItemEL);
    }
  }

  return ulEL;
}

function highlightAnimalsThatGetEatenByAnimal(animal) {
  animal.animalEats.forEach((eatenAnimal) => {
    let eatenAnimalEl = document.querySelector(
      `.${eatenAnimal.name}`
      );
      eatenAnimalEl.style.background = '#E76F51'
      setTimeout(() => {
        eatenAnimalEl.style.background = 'white'
      
      }, 2000);
      
  });
}

function createFoodIcon(animal) {
  let buttonEl = document.createElement("button");
  buttonEl.onclick = () => highlightAnimalsThatGetEatenByAnimal(animal);
  let iEl = document.createElement("i");
  iEl.classList.add("fas", "fa-utensils");
  buttonEl.appendChild(iEl);
  return buttonEl;
}
function createMusicIcon(animal) {
  let buttonEl = document.createElement("button");
  buttonEl.onclick = () => animal.sound.play();
  let iEl = document.createElement("i");
  iEl.classList.add("fas", "fa-music");
  buttonEl.appendChild(iEl);
  return buttonEl;
}

function createAnimalCard(animal) {
  let wrapperEl = document.createElement("div");
  wrapperEl.classList.add("animal",`${animal.constructor.name}`);

  wrapperEl.appendChild(createAnimalImgEL(animal));
  wrapperEl.appendChild(createAnimalNameP(animal));
  if (animal.specialAbility) {
    wrapperEl.appendChild(createSpecialAbilityHeader());
    wrapperEl.appendChild(createListOfAbilities(animal));
  }
  wrapperEl.appendChild(createStatsHeader());
  wrapperEl.appendChild(createStatsList(animal));
  wrapperEl.appendChild(createFoodIcon(animal));
  wrapperEl.appendChild(createMusicIcon(animal));

  return wrapperEl;
}

document
  .querySelector("#bird-card")
  .appendChild(createAnimalCard(InstanceArray[0]));
document
  .querySelector("#eagle-card")
  .appendChild(createAnimalCard(InstanceArray[1]));
document
  .querySelector("#goldenEagle-card")
  .appendChild(createAnimalCard(InstanceArray[2]));
document
  .querySelector("#owl-card")
  .appendChild(createAnimalCard(InstanceArray[3]));
document
  .querySelector("#spider-card")
  .appendChild(createAnimalCard(InstanceArray[4]));
  document
    .querySelector("#blackMamba-card")
    .appendChild(createAnimalCard(InstanceArray[5]));
document
  .querySelector("#tarantula-card")
  .appendChild(createAnimalCard(InstanceArray[6]));
