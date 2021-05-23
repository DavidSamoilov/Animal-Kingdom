import {inheritFromTo} from "../Animal.js";
import Bird from "../BirdClass/Bird.js"
import Eagle from "../BirdClass/Eagle.js"
import GoldenEagle from "../BirdClass/GoldenEagle.js"
import Owl from "../BirdClass/Owl.js"
import Spider from "./Spider.js"

function BlackMamba(name,weight,numberOfLegs,food){
    Spider.call(this,name,weight,numberOfLegs,food)
    this.animalEats = [Bird,Eagle,GoldenEagle,Owl]
}
inheritFromTo(Spider,BlackMamba)

export default BlackMamba