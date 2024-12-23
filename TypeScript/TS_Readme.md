# TS Basics

- originally js is dynamic typed language(types check happen at runtime) but ts when compiled to js makes it static typed language.

```
node -v
npm -v
npm i typescript -g

tsc script.ts // To compile ts file to js.
```

- TS compiler sees the value & infer the type.
- HTML can refer to js only, so we need to compile ts to js.


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

 ## Soon node will have typescript by default and you dont need to compile ts files to js to run it.
 - [Node](https://github.com/nodejs/node/pull/53725)