import {inheritFromTo} from "../Animal.js";
import Bird from './Bird.js'



function Owl(name,weight,numberOfLegs,food){
    Bird.call(this,name,weight,numberOfLegs,food,`flying`)
    
}
inheritFromTo(Bird,Owl)

export default Owl
