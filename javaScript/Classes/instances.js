import Bird from "./BirdClass/Bird.js"
import Animal,{inheritFromTo} from "./Animal.js";
import Eagle from "./BirdClass/Eagle.js"

const InstanceArray = [bird,eagle]
export default InstanceArray

const bird = new Bird(`david`,2,53,2,"bacon")
const eagle = new Bird(`david`,2,53,2,"bacon")

console.log(bird);