import Bird from "./BirdClass/Bird.js"
// import Animal,{inheritFromTo} from "./Animal.js";
import Eagle from "./BirdClass/Eagle.js"
import GoldenEagle from "./BirdClass/GoldenEagle.js"
import Owl from "./BirdClass/Owl.js"
import Shark from "./FishClass/Fish.js"
import Tuna from "./FishClass/Tuna.js"
import BlackMamba from "./SpiderClass/BlackMamba.js"
import Tarantula from "./SpiderClass/Tarantula.js"
import Spider from "./SpiderClass/Spider.js"

const bird = new Bird(`David`,2,53,2,"bacon")
const eagle = new Eagle(`Moshe`,2,53,2,"bacon")
const goldenEagle = new GoldenEagle(`Ron`,2,53,2,"bacon")
const owl = new Owl(`Daniel`,2,53,2,"bacon")
const spider = new Spider(`Gevi`,2,53,2,"bacon")
const blackMamba = new BlackMamba(`Leonid`,2,53,2,"bacon")
const tarantula = new Tarantula(`Neomi`,2,53,2,"bacon")



const InstanceArray = [bird,eagle,goldenEagle,owl,spider,blackMamba,tarantula]
export default InstanceArray


