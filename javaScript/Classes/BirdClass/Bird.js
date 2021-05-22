import Animal,{inheritFromTo} from "../Animal.js";

export default function Bird(name, age, numberOfLegs, weight,food){
    Animal.call(this,name,age,weight,numberOfLegs,food);
    this.specialAbility = ['Flight','LightWeight'];
    this.sound = 0
    this.canFly=true
    
    
}
inheritFromTo(Animal,Bird);

