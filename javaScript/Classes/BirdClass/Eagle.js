import {inheritFromTo} from "../Animal.js";
import Bird from "./Bird.js";

function Eagle(name,age, weight, numberOfLegs, food) {
  Bird.call(this,name,age, weight, numberOfLegs, food);
}
inheritFromTo(Bird, Eagle);

export default Eagle


