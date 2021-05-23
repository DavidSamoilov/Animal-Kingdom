import Animal,{inheritFromTo} from "../Animal.js";


function Fish(name,weight,numberOfLegs,food,sound){
    Animal.call(name,weight,numberOfLegs,food,sound)
    this.specialAbility = `Breathing underwater`
}
inheritFromTo(Animal,Fish)
Fish.prototype.swim=function(){
    return `${this.constructor.name} can swim and breath underwater`
}

export default Fish