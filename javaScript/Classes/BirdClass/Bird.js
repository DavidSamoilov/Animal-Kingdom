import Animal,{inheritFromTo} from "../Animal.js";
import Tarantula from "../SpiderClass/Tarantula.js";
import Spider from "../SpiderClass/Spider.js";

function Bird(name, age, numberOfLegs, weight){
    Animal.call(this,name,age,weight,numberOfLegs);
    this.specialAbility = ['Flight','LightWeight'];
    this.favoriteFood = 'Salmon'
    this.animalEats = [Tarantula,Spider]
    
    
}
inheritFromTo(Animal,Bird);

export default Bird