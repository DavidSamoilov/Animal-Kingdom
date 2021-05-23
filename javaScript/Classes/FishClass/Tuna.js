import {inheritFromTo} from "../Animal.js";
import Fish from "./Fish.js"



function Tuna(name,weight,numberOfLegs,food,sound){
    Fish.call(name,weight,numberOfLegs,food,sound,specialAbility)

}
inheritFromTo(Fish,Tuna)

export default Tuna