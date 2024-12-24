# TS Basics

- originally js is dynamic typed language(types check happen at runtime) but ts when compiled to js makes it static typed language.

```
node -v
npm -v
npm i typescript -g
tsc --init // To create tsconfig.

tsc // to create output js file in the specified location in tsconfig.

tsc --watch // dont need to compile again and again

tsc script.ts // To compile ts file to js.
```

- TS compiler sees the value & infer the type.
- HTML can refer to js only, so we need to compile ts to js.
- avoid using any type.
- You dont need to give type as its initialization, ts will automatically infer the type from initialization value. For declarations, mention the type

#### Some VSCode Extensions
ESLint, JS&TS Nightly, Material Icon Theme, Prettier, Prettier ESLint, Pretty TS Error.

#### Types(Primitives/ References)

```js
// primitive - Number, undefined, String, Boolean
let a = 12
let b= a

a= a+2
console.log(a) // 14
console.log(b) // 12

// reference - Object, Array, function

let arr = [1,2,3,4]
let arr2 = arr
arr2.pop()
console.log(arr) // [1,2,3]
console.log(arr2) // [1,2,3]

```
1. Basic Types
- number, string, boolean
- array, tuples
- any, unknown, never, void
- enums

2. Type Inference
- TS compiler sees the value & infer the type.

3. Union and Intersection
- | - or(Union)
- & - should be used with user defined types and don't use with pre-defined types like string number. 

```ts
let variable: string | number;

type Classmates ={
    section: string
}

type Students = {
    name:string
}

type ClassmatesInStudents = Classmates & Students
```
4. Type Aliases

```ts

type Age =  number;
let a: Age;

type Student = {
    name:string,
    age:number,
    email:string
}

let nishant: Student = {
    name:'Nishant',
    age:25,
    email:'abc@gmail.com'
}

```
- you cannot declare 2 types with same name

5. Interface

```ts
interface User{
    name: string,
    number:string
}

interface User{
    age:number,
    email:string
}

interface NewUser extends User {
    id:number
}

let user: NewUser = {
    id:2
    name: "Nishant",
    number:"980768950",
    age:26,
    email:"abc@gmail.com"
}

```
- you can declare 2 interfaces with same and they get merge in the memory.
- interfaces can be extends like class


6. Classes
- constructor
- Access Modifiers(public, private, protected members) default public
    - public - can be used in class and with instance outside
    - private - can be used in class and not with instance outside
    - protected - can be used in class and the extended class and not with instance outside
    - member methods can also be access protected.
- readonly properties
- getters and setters - works as object property instead of methods

```ts
class Earphones{
    public name:string // by default public
    public price:number 
    constructor(name:string, price:number){
        this.name= name;
        this.price = price;
    }
}


new Earphones("Apple", 25000)


// -----Access Modifiers
class User{
    private balance  = 1200;
}

let u1 = new User();
u1.balance = 12000; // not allowed as balance is private.
// for private member use getter and setter to change them.


// -----------------readonly
class Abcd{
    constructor(public readonly name:string){
        this.name= name
    }

    setName(value:string){
        this.name = value // this will give error
    }
}
// name is readonly property and can only be assined in constructor and cannot be set later.


//---------------getter setter
class Xyz{
    constructor(public username:string){
        this.username= username
    }

    get name():string{ 
        return this.username
    }

    set name(value:string){
        this.username = value;
    }
}

let xyz = new Xyz("Nish");
console.log(xyz.name)
xyz.name = "singh"
```


7. Functions
- function types
- optional and default parameters
```ts

// Named Function
function abcd():void{}
//Arrow Function
const abcd = (): void =>{

}
function xyz(a:string, b:number):string{
    return "xyz"
}

// Optional Parameter
function user(name: string = "xyz", age:number, gender?:string){

}
user("Nish", 25)

// Rest parameters
function names(...names: string[]){

}

names("Nish","singh")


```

8. Exports and Imports
- In html browser will not understand import and export without bundler
- can run in node

9. Type Assertions
- HTMLParagraphElement, HTMLDivElement
```ts
(document.querySelector("div") as HTMLDivElement)

// OR
<HTMLParagraphElement>document.querySelector("p")

```

10. Literal Types(String, Numeric, Boolean)
```ts

let nameNishant: "Nishant" | 12
// Now nameNishant variable can only contain literal "Nishant" or 12 anything other that will give an error
nameNishant = "Nishant"

```


 ## Soon node will have typescript by default and you dont need to compile ts files to js to run it.
 - [Node](https://github.com/nodejs/node/pull/53725)