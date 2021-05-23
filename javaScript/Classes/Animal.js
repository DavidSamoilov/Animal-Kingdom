export default function Animal(name, age, numberOfLegs, weight, food) {
  this.name = name;
  this.age = age;
  this.numberOfLegs = numberOfLegs;
  this.weight = weight;
  this.food = food;
  this.sound = new Audio(`./Sounds/${this.constructor.name}.wav`);
  this.image = `./Images/${this.constructor.name}.jpg`

}

export function inheritFromTo(parent, child) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}


