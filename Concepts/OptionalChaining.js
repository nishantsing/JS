class Person {
  constructor(name, address, hobbies) {
    this.name = name;
    this.address = address;
    this.hobbies = hobbies;
  }
  print() {
    console.log(this);
  }
}

function printPersonStreet(person) {
  console.log(person?.address?.street);
}

const nishant = new Person("Nishant", { street: "Manjri Road" }, ["badminton"]);

console.log(`%c${nishant.hobbies?.[0].toLowerCase()}`, "color:red");

printPersonStreet(nishant);

nishant.print?.();

nishant.printName?.();
