import {inheritFromTo} from "../Animal.js";
import Spider from "./Spider.js"


function Tarantula(name,weight,numberOfLegs,food){
    Spider.call(this,name,weight,numberOfLegs,food)
    this.specialAbility.push('Stealth')

}
inheritFromTo(Spider,Tarantula)

export default Tarantula