/* 
Implement a Singleton Pattern

 Create a Singleton class in JavaScript that restricts the instantiation of a class to a single
 instance.
*/

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance
    }

    someMethod() {
        console.log("This method belongs to the singleton instance.");
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // true