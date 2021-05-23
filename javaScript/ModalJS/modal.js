import InstanceArray from "../Classes/instances.js";

let sortedInstanceArray = [...InstanceArray].sort(
  (a, b) => a.weight - b.weight
);

function displaySortedInstanceArrayInModal(array = sortedInstanceArray) {
  let modalBodyContent = document.querySelector(".modal-list");
  console.log(modalBodyContent);
  ulEl = document.createElement("ul");
  array.forEach((animal, index) => {
    console.log(animal);
    let animalModalLi = document.createElement("li");
    animalModalLi.innerText = `${index}.${animal.constructor.name}: ${animal.name}`;

    ulEl.appendChild(animalModalLi);
  });
  modalBodyContent.appendChild(ulEl);
}
