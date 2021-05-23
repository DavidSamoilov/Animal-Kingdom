import {inheritFromTo} from "../Animal.js";
import Spider from "./Spider.js"


function Tarantula(name,weight,numberOfLegs,food,sound){
    Spider.call(this,name,weight,numberOfLegs,food,sound)

}
inheritFromTo(Spider,Tarantula)

export default Tarantula