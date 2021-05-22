import Bird from "./BirdClass/Bird.js"
// import Animal,{inheritFromTo} from "./Animal.js";
import Eagle from "./BirdClass/Eagle.js"


const bird = new Bird(`david`,2,53,2,"bacon")
const eagle = new Eagle(`david`,2,53,2,"bacon")



console.log(bird);
console.log(eagle);

const InstanceArray = [bird,eagle]
export default InstanceArray


