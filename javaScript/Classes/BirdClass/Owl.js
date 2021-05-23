import {inheritFromTo} from "../Animal.js";
import Bird from './Bird.js'
import BlackMamba from '../SpiderClass/BlackMamba.js'
import Spider from "../SpiderClass/Spider.js";


function Owl(name,weight,numberOfLegs,food){
    Bird.call(this,name,weight,numberOfLegs,food,`flying`)
    this.animalEats = [BlackMamba,Spider]
    
}
inheritFromTo(Bird,Owl)

export default Owl
