import {inheritFromTo} from "../Animal.js";
import Eagle from './Eagle.js'


function GoldenEagle(name,weight,numberOfLegs,food,sound){
    Eagle.call(this,name,weight,numberOfLegs,food,sound)
    
}
inheritFromTo(Eagle,GoldenEagle)

export default GoldenEagle
