// Day 3: Control Structures

// Activity 1: If-Else Statements
const numberType = function (num) {
    if (num === 0) return console.log("zero");
    if (num > 0) {
        console.log("positive");
    } else {
        console.log("negative");
    }
};
numberType(0);
numberType(3);
numberType(-5);

const isEligibleToVote = function (age) {
    if (age >= 18) {
        console.log("Eligible to vote");
    } else {
        console.log("Not Eligible to vote");
    }
};

isEligibleToVote(25);
isEligibleToVote(15);

// Activity 2: Nested If-Else Statements

const findingMax = function (num1, num2, num3) {
    if (num1 >= num2) {
        if (num1 >= num3) {
            console.log(`${num1} is greatest`);
        } else {
            console.log(`${num3} is greatest`);
        }
    } else {
        if (num2 >= num3) {
            console.log(`${num2} is greatest`);
        } else {
            console.log(`${num3} is greatest`);
        }
    }
};

findingMax(10, 30, 30);

// Activity 3: Switch case

// This approach evaluates dayNumber against each case value directly.
// Each case should be a value that dayNumber could equal.
// It is straightforward and typically used when you have discrete, distinct values to match against.
function getDayOfWeek(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number";
    }

    return dayName;
}

console.log(getDayOfWeek(6));

// This approach allows you to use complex conditions in each case.
// Each case is evaluated as an expression that should return a boolean value.
// It is useful when you need to check if a value falls within certain ranges or meets specific conditions.
function getGrade(marks) {
    let grade;

    switch (true) {
        case marks >= 90 && marks <= 100:
            grade = "A+";
            break;
        case marks >= 80 && marks < 90:
            grade = "A";
            break;
        case marks >= 70 && marks < 80:
            grade = "B";
            break;
        case marks >= 60 && marks < 70:
            grade = "C";
            break;
        case marks >= 50 && marks < 60:
            grade = "D";
            break;
        case marks >= 0 && marks < 50:
            grade = "F";
            break;
        default:
            grade = "Invalid marks";
    }

    return grade;
}
console.log(getGrade(65));

// Activity 4: Conditional (Ternary Operator)

const oddOrEven = function (num) {
    num % 2 === 0 ? console.log("Even") : console.log("Odd");
};

oddOrEven(5);

// Activity 5: Combining Conditions

function isLeapYear(year) {
    // A year is a leap year if it is divisible by 4
    // but not divisible by 100, unless it is also divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `Its leap year`;
    } else {
        return `Not a leap year`;
    }
}

console.log(isLeapYear(1900));
console.log(isLeapYear(2000));

// Feature 1: Write a script that checks if a number is positive, negative, or zero using if-else statements and log the result.

// see Activity 1 numberType fn

// Feature 2: Create a script to check if a person is eligible to vote based on their age and log the result.

// see Activity 1 isEligibleToVote fn

// Feature 3: Write a script that uses a switch case to determine the day of the week based on a number(1-7) and logs the day name

// see Activity 3 getDayOfWeek fn

// Feature 4: Create a script that uses a switch case to assign a grade based on a score and logs the grade.

// see Activity 3 getGrade fn

// Feature 5: Write a script that checks if a year is a leap year using multiple conditions and logs the result.

// see Activity 5 isLeapYear fn
