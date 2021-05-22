import {inheritFromTo,Animal} from "../Animal.js";
import {Eagle} from './Eagle.js'
import {Bird} from "/Bird.js";


function goldenEagle(name,weight,numberOfLegs,food,sound){
    Eagle.call(this,name,weight,numberOfLegs,food,sound)
    
}
inheritFromTo(Eagle,goldenEagle)
