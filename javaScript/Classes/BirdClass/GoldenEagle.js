import {inheritFromTo} from "../Animal.js";
import Eagle from './Eagle.js'


function GoldenEagle(name,weight,numberOfLegs,food){
    Eagle.call(this,name,weight,numberOfLegs,food)
    this.specialAbility.push('Golden')
    
    
}
inheritFromTo(Eagle,GoldenEagle)

export default GoldenEagle
