export default owl 
 
 
 const classesArray = [Animal,Bird,Owl,Eagle,goldenEagle,Fish,Tuna,Shark,Spider,BlackMamba,Tarantula]

 const owl = new Owl(`bob`,8,2,`Salmon`)

console.log(owl);



// Utility func

function inheritFromTo(parent,child){
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}



function Animal(name,weight,numberOfLegs,food,sound,specialAbility){
    this.name = name
    this.weight = weight
    this.numberOfLegs = numberOfLegs
    this.food = food
    this.sound = sound
    this.specialAbility = specialAbility
    
}


// Bird Classes


function Bird(name,weight,numberOfLegs,food){
    Animal.call(name,weight,food,numberOfLegs);
    this.specialAbility = 'Flying';
    this.sound = 0
    
    
}
inheritFromTo(Animal,Bird);
Bird.prototype.canFly=true;

function Owl(name,weight,numberOfLegs,food){
    Bird.call(name,weight,numberOfLegs,food,`flying`)
    
}
inheritFromTo(Bird,Owl)

function Eagle(name,weight,numberOfLegs,food){
    Bird.call(name,weight,numberOfLegs,food,sound,specialAbility)
    
}
inheritFromTo(Bird,Eagle)

function goldenEagle(name,weight,numberOfLegs,food,sound){
    Eagle.call(name,weight,numberOfLegs,food,sound,specialAbility)
    
}
inheritFromTo(Eagle,goldenEagle)

// Fish Classes

function Fish(name,weight,numberOfLegs,food,sound){
    Animal.call(name,weight,numberOfLegs,food,sound)
    this.specialAbility = `Breathing underwater`
}
inheritFromTo(Animal,Fish)
Fish.prototype.swim=function(){
    return `${this.constructor.name} can swim and breath underwater`
}

function Tuna(name,weight,numberOfLegs,food,sound){
    Fish.call(name,weight,numberOfLegs,food,sound,specialAbility)

}
inheritFromTo(Fish,Tuna)

function Shark(name,weight,numberOfLegs,food,sound){
    Fish.call(name,weight,numberOfLegs,food,sound,specialAbility)

}
inheritFromTo(Fish,Shark)

// Spider Classes

function Spider(name,weight,numberOfLegs,food,sound){
    Animal.call(name,weight,numberOfLegs,food,sound)
    this.specialAbility = `Spider-Webs, Poisonous`
}
inheritFromTo(Animal,Spider)

function Tarantula(name,weight,numberOfLegs,food,sound){
    Spider.call(name,weight,numberOfLegs,food,sound,specialAbility)

}
inheritFromTo(Spider,Tarantula)

function BlackMamba(name,weight,numberOfLegs,food,sound){
    Spider.call(name,weight,numberOfLegs,food,sound,specialAbility)

}
inheritFromTo(Spider,BlackMamba)

