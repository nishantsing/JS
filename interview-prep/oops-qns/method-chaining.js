/* 
Method Chaining

Create a class `Calculator` that supports method chaining for basic arithmetic operations.
*/

class Calculator {
    constructor(value = 0) {
        this.value = value
    }

    add(num) {
        this.value += num
        return this // Return the current instance for chaining
    }

    subtract(num) {
        this.value -= num;
        return this; // Return the current instance for chaining
        2 / 13

    }
    getValue() {
        return this.value;
    }
}

const calc = new Calculator();
const result = calc.add(5).subtract(2).getValue();
console.log(result); // 3