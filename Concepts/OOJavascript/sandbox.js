




















//constructor function
//This is how we add a function in a prototype when there were no classes.

function User(username, email){
     this.username = username;
     this.email = email;
    //  not inside protoype
    //  this.login = function(){
    //      console.log(`${this.username} has logged in`);
     //}
}

// Inside protoype
User.prototype.login = function(){
    console.log(`${this.username} has logged in`);
    return this;
}

User.prototype.logout = function () {
    console.log(`${this.username} has logged out`);
    return this;
}
function Admin(username, email, title){
    User.call(this, username, email);
    this.title = title;
}
//Inheriting the functions or proto of User constructor.
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(){
    //delete a user;
}

// class User{
//     constructor(username, email){
//         //set up properties
//         this.username = username;
//         this.email = email;
//     }
// }

const userOne = new User('nishant', 'nsnishant51@gmail.com');
const userTwo = new User('shubham', 'poteshubham619@gmail.com');

const userThree = new Admin('ganesh','ganeshbpatil1998@gmail.com','pro');

console.log(userOne, userTwo, userThree);
userOne.login().logout();//method chaining can be done when we return something from the function.


// the 'new' keyword
// 1 - it creates a new empty object
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object