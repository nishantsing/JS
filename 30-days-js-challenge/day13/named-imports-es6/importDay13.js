import greet, { add, subtract } from "./day13.js";
import * as utils from "./day13Utils.js";
// import greet from "./day13.js";

console.log(add(2, 3));
console.log(subtract(5, 2));
console.log(greet("John"));

// day13Utils file imported as utils object
console.log(utils.PI); // Output: 3.14159
console.log(utils.E); // Output: 2.71828
console.log(utils.add(2, 3));
