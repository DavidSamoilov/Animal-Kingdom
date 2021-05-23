import Bird from "./BirdClass/Bird.js"
import Eagle from "./BirdClass/Eagle.js"
import GoldenEagle from "./BirdClass/GoldenEagle.js"
import Owl from "./BirdClass/Owl.js"
import BlackMamba from "./SpiderClass/BlackMamba.js"
import Tarantula from "./SpiderClass/Tarantula.js"
import Spider from "./SpiderClass/Spider.js"

const bird = new Bird(`David`,3,2,3,"bacon")
const eagle = new Eagle(`Moshe`,5,3,5,"bacon")
const goldenEagle = new GoldenEagle(`Ron`,8,2,4,"bacon")
const owl = new Owl(`Daniel`,1,53,3,"bacon")
const spider = new Spider(`Gevi`,7,8,6)
const blackMamba = new BlackMamba(`Leonid`,12,8,4)
const tarantula = new Tarantula(`Neomi`,9,8,2)



const InstanceArray = [bird,eagle,goldenEagle,owl,spider,blackMamba,tarantula]
export default InstanceArray


