import InstanceArray from "../Classes/instances.js";

let sortedInstanceArray = [...InstanceArray].sort(
  (a, b) => a.weight - b.weight
);

// Adding the Event Listener to display sorted animals by weight in modal
let modalButtonEl = document.getElementById("modal-btn");
modalButtonEl.addEventListener('click',()=>displaySortedInstanceArrayInModal())
let modalBodyContent = document.getElementById("modal-list");

// Function that Displays all modal details in a list
function displaySortedInstanceArrayInModal() {
  const ulEl = document.createElement("ul");
  ulEl.classList.add('modal-ul')
  sortedInstanceArray.forEach((item, index) => {
    let animalModalLi = document.createElement("li");
    animalModalLi.innerText = `${index + 1}. ${
      item.constructor.name
    } weight is ${item.weight} Kg`;

    ulEl.appendChild(animalModalLi);
  });
  modalBodyContent.appendChild(ulEl);
  modalButtonEl.removeEventListener('click',()=>displaySortedInstanceArrayInModal())

}

function clearModalText(){
    modalBodyContent.innerText=''

}

// Clear text in modal when closed
let modalCloseButtonEl = document.getElementById("modal-close-btn");
modalCloseButtonEl.addEventListener('click',()=>clearModalText())

