//T1. Remove falsy values from any array
// Boolean (expression) in js returns True/False

Boolean(5 < 6); // true
Boolean(100 > 200); // false
Boolean("Javascript"); // true
Boolean(""); // false

let miscellaneous = ["🍎", false, "🍊", NaN, 0, undefined, "🌶️", null, "", "🥭"];

let fruits = miscellaneous.filter(Boolean);

console.log(fruits);


//T2. Convert any value to boolean

console.log(!!"Messi"); // true
console.log(!!1); // true
console.log(!!0); // false
console.log(!!undefined); // false

// Boolean
console.log(Boolean("Messi")); // true

//T3. Resizing any Array
let animals = ["🐕", "🐒", "🦊", "🐅"];

// we can use arrays length property
animals.length = 3;

console.log(animals); // "🐕", "🐒", "🦊"

//T4. flattening a multi dimensional array

let smileys = ["🥰", ["😀", "😀"], "😉", ["😢", "😥"]];

smileys.flat(); // ['🥰', '😀', '😀', '😉', '😢', '😥']

// Multi Level Array
let smileys2 = ["🥰", ["😀", "😀", ["😢", "😥"]], "😉"];

smileys2.flat(Infinity); // ['🥰', '😀', '😀', '😢', '😥', '😉']

//T5. Short conditionals / short circuting

let captain = "Messi";

if (captain === "Messi") {
    console.log("❤️");
}

captain === "Messi" && console.log("❤️");

// Another Example
if (captain !== "Messi") {
    console.log("😡");
}

// We can use ||
captain === "Messi" || console.log("😡");

//T6. Replace all the occurances of a string

const quote = "Next.js is a JS Library & this library is the most popular front-end Library right now";

quote.replace(/library/gi, "framework");
// Next.js is a JS framework & this framework is the most popular front-end framework right now

//T7. Log values with variable names smartly

const library1 = "jQuery";
const library2 = "React";

// Printing their values
console.log(`Library1 - ${library1}`); // Library1 - jQuery

// Smarter Way
console.log({ library1 }); // { library1 : jQuery }
console.log({ library2 }); // { library2 : React }

//T8. measuring performance

const startTime = performance.now();
// console.time("time")

for (let i = 0; i <= 50; i++) {
    console.log(i);
}

const endTime = performance.now();
console.timeEnd("time")
console.log(`Loop took ${endTime - startTime} ms`);
// Loop took 15 ms