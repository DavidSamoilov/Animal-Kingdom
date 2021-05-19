import {inheritFromTo} from "../Animal.js";
import Bird from "./Bird.js";

export default function Eagle(name, weight, numberOfLegs, food) {
  Bird.call(name, weight, numberOfLegs, food);
}
inheritFromTo(Bird, Eagle);


