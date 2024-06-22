// REDUCE

// P1. Some of an array using reduce
let number = [1, 2, 3, 4, 5];

// accumulator - for first iteration stores 0 as that is passed as current value and later stores if something is returned
// currentValue

let sum = number.reduce((accumulator, currentValue) => {
  // console.log(accumulator); // 0 and then undefined we dont return anything
  return accumulator + currentValue;
}, 0);

console.log(sum);

// P2. smallest word

const words = ["cat", "dog", "bird", "elephant", "lion", "li"];

function findShortestWord(values) {
  return values.reduce((shortestWord, currentWord) => {
    if (currentWord.length < shortestWord.length) {
      return currentWord;
    } else {
      return shortestWord;
    }
  }, values[0]);
}

console.log(findShortestWord(words));
