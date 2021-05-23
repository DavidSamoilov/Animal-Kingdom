import Animal,{inheritFromTo} from "../Animal.js";



function Spider(name,age,numberOfLegs,weight){
    Animal.call(this,name,weight,numberOfLegs,age)
    this.specialAbility = ['Spider-Webs', 'Poisonous']
    this.favoriteFood  = 'Insects'
}
inheritFromTo(Animal,Spider)

export default Spider