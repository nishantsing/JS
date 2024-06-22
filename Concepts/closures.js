function outerFunction(outerVariable) {
    const word = 'Hello'
    return function innerFunction(innerVariable) {
        console.log(outerVariable + innerVariable)
        console.log('Hello')
    }
    // innerFunction(6)
}

// var outerCall = outerFunction(5);
// var innerCall = outerCall(5);

var innerCall = outerFunction(5)(5);

// Memory
// GlobalScope
// outerFunction has reference to word variable and reference to inner function.
// InnerFunction

function firstFunction(firstVariable) {
    return secondFunction(2)
}

function secondFunction(secondVariable) {
    console.log(firstVariable)
}

firstFunction(1) // firstVariable not defined.

