import {Animal,inheritFromTo} from "../Animal";



function Tuna(name,weight,numberOfLegs,food,sound){
    Fish.call(name,weight,numberOfLegs,food,sound,specialAbility)

}
inheritFromTo(Fish,Tuna)
