import {Animal,inheritFromTo} from "../Animal";



function Spider(name,weight,numberOfLegs,food,sound){
    Animal.call(name,weight,numberOfLegs,food,sound)
    this.specialAbility = `Spider-Webs, Poisonous`
}
inheritFromTo(Animal,Spider)