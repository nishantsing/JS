/* 
1. Prototypal Inheritance

 Implement a function-based prototype inheritance where `Dog` inherits from `Animal`.
*/

// Each Animal instance will get its own name property.
function Animal(name) {
    this.name = name;
}

// That means all animals share one copy of speak.
Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`)
}

// This makes sure each Dog has its own name property, just like an Animal.
function Dog(name) {
    Animal.call(this, name); // Call the Animal constructor
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
// dog → Dog.prototype → Animal.prototype → Object.prototype → null

// This shadows the speak() method from Animal.prototype.
Dog.prototype.speak = function () {
    console.log(`${this.name} barks.`);
};
const dog = new Dog('Rex');
dog.speak(); // "Rex barks."

console.log(dog.hasOwnProperty("speak")); //false (That’s because speak lives on Dog.prototype, not on the instance itself.)

dog.speak = function () {
    console.log("Custom sound");
};

console.log(dog.hasOwnProperty("speak")); // ✅ true
// Now it’s the dog’s own property (overrides the prototype version).