/* 
Object Composition with Classes

Design a `Person` class and a `Job` class, then compose them into a `Worker` class.
*/

class Person {
    constructor(name) {
        this.name = name
    }

}

class Job {
    constructor(title) {
        this.title = title
    }
}

class Worker {
    constructor(name, title) {
        this.person = new Person(name);
        this.job = new Job(title)
    }
    getInfo() {
        return `${this.person.name} is a ${this.job.title}.`;
    }
}

const worker = new Worker('Alice', 'Developer');
console.log(worker.getInfo()); // "Alice is a Developer."

