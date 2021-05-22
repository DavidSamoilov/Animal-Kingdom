import {inheritFromTo} from "../Animal";
import {Bird} from '/Bird'


function Owl(name,weight,numberOfLegs,food){
    Bird.call(this,name,weight,numberOfLegs,food,`flying`)
    
}
inheritFromTo(Bird,Owl)