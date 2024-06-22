var Person = function (firstName, lastName, dateOfBirth, measurements) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.measurements = measurements;
}


person = new Person('Jim', 'Perivce', new Date(2013, 2, 12), { weight: '70kg' });

// personClone = JSON.parse(JSON.stringify(person));

personClone2 = person;

console.log(person.measurements.weight == personClone.measurements.weight);
console.log(person.firstName == personClone.firstName);
console.log(person.dateOfBirth.toDateString() === personClone2.dateOfBirth.toDateString())
