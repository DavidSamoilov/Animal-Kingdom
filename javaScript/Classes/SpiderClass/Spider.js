import Animal,{inheritFromTo} from "../Animal.js";



function Spider(name,weight,numberOfLegs,food,sound){
    Animal.call(this,name,weight,numberOfLegs,food,sound)
    this.specialAbility = ['Spider-Webs', 'Poisonous']
}
inheritFromTo(Animal,Spider)

export default Spider