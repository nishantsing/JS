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


 ## Soon node will have typescript by default and you dont need to compile ts files to js to run it.
 - [Node](https://github.com/nodejs/node/pull/53725)