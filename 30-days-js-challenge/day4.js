//Day 4: Loops

// Activity 1: For Loop

// Printing 1 to 10
console.log("Printing numbers from 1 to 10 using a for loop:");
for(let i =1; i<= 10; i++){
    console.log(i);
}

// Printing table of 5
for(let i =1;i<=10;i++){
    console.log(`5 X ${i} = ${5*i}`)
}

// Activity 2: While Loop

// Sum of number 1 to 10
let number = 1, sum = 0;

while(number <= 10){
    sum += number
    number++
}
console.log(sum)


// Printing number 10 to 1

let backCount = 10
while(backCount > 0){
    console.log(backCount)
    backCount--;
}

// Activity 3: Do...While Loop

// Print 1 to 5

let incr = 1
do{
    console.log(incr);
    incr++
}while(incr<=5)


// Factorial of a number
function factorial(num){
    // Check if n is a non-negative integer
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        return "Factorial is not defined for negative numbers or non-integer values.";
    }
    
    let result = 1;
    let i = 1;
    
    // Calculate factorial using do while loop
    do {
        result *= i;
        i++;
    } while (i <= n);
    
    return result;
}

console.log(factorial(1))

// Activity 4: Nested Loops

// Printing * pattern
for(let i = 0; i<4; i++){
    let str = ''
    for(let j = 0; j<=i;j++){
        str+='*'
    }
    console.log(str)// keep in mind console log prints and add new line.
}

// Activity 5: Loop Control Statements

// Print 1 to 10 ignoring 5
for(let i =1; i<= 10; i++){
    if(i===5){
        continue;
    }
    console.log(i);
}

// Print from 1 to 10 stop at 7
for(let i =1; i<= 10; i++){
    if(i===7){
        break;
    }
    console.log(i);
}


// Feature 1: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.

// see Activity 1 - Printing 1 to 10

// Using a while loop
console.log("\nPrinting numbers from 1 to 10 using a while loop:");
let num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}

// Feature 2: Create a script that prints the multiplication table of 5 using a for loop.

// see Activity 1 - Printing table of 5

// Feature 3: Write a script that prints a pattern for stars uisng nested loops.
/*
*
**
***
****
*/

// see Activity 4 - Printing * pattern


// Feature 4: Write a script that calculates the sum of numbers from 1 to 10 using while loop.


// see Activity 2 - Sum of number 1 to 10


// Feature 5: Create a script that calculates the factorial of a number using do...while loop.

// see Activity 3 - Factorial of a number

