import {inheritFromTo} from "../Animal.js";
import Spider from "./Spider.js"


function BlackMamba(name,weight,numberOfLegs,food,sound){
    Spider.call(this,name,weight,numberOfLegs,food,sound)

}
inheritFromTo(Spider,BlackMamba)

export default BlackMamba