import Animal,{inheritFromTo} from "../Animal.js";
import Fish from "./Fish.js"

function Shark(name,weight,numberOfLegs,food,sound){
    Fish.call(name,weight,numberOfLegs,food,sound,specialAbility)

}
inheritFromTo(Fish,Shark)

export default Shark