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


interface User {
    name: string;
    number: string;

}

interface User {
    age: number;
    email: string;
}

interface NewUser extends User {
    id:number
}

let user: NewUser = {
    id:2,
    name: "Nishant",
    number: "980768950",
    age: 26,
    email: "abc@gmail.com",
};


class Earphones {
    public name: string; // by default public and not required in js but requried to define type in ts
    public price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

let e1 = new Earphones("Apple", 25000);
console.log(e1);


class Bottle{
    constructor(public shape: string){
        this.shape = shape;
    }
}
