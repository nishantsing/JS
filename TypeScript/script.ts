// Basic Types
// number, string, boolean
// array, tuples
// any, unknown, never, void
// enums


let a: number;
let lastName: string;
let isThere: boolean;
let arr: [];
let variable:unknown;
let firstName: string = "Nishant" // In this case you dont need to give type as if its initialization ts will automatically infer the type from initialization value. For declarations, mention the type.

// Never means the function will return nothing ever like an infinite loop inside a fn.

// void means fn is not returning anything
function abcd(word:string):void{
    // return "abc"
}
abcd("a")

//tuple
let arr2: [boolean, number, string] = [true,12, "arr"]

arr2.push(4) // allowed while it should gave error as we are using tuples but its a loop whole.


enum Direction{
    top="TOP",
    left="LEFT",
    right="RIGHT",
    bottom="BOTTOM"
}

console.log(Direction.top)