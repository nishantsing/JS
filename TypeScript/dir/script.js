"use strict";
// Basic Types
// number, string, boolean
// array, tuples
// any, unknown, never, void
// enums
var a;
var lastName;
var isThere;
var arr;
var variable;
var firstName = "Nishant"; // In this case you dont need to give type as if its initialization ts will automatically infer the type from initialization value. For declarations, mention the type.
// Never means the function will return nothing ever like an infinite loop inside a fn.
// void means fn is not returning anything
function abcd(word) {
    // return "abc"
}
abcd("a");
//tuple
var arr2 = [true, 12, "arr"];
arr2.push(4); // allowed while it should gave error as we are using tuples but its a loop whole.
var Direction;
(function (Direction) {
    Direction["top"] = "TOP";
    Direction["left"] = "LEFT";
    Direction["right"] = "RIGHT";
    Direction["bottom"] = "BOTTOM";
})(Direction || (Direction = {}));
console.log(Direction.top);
var user = {
    id: 2,
    name: "Nishant",
    number: "980768950",
    age: 26,
    email: "abc@gmail.com",
};
var Earphones = /** @class */ (function () {
    function Earphones(name, price) {
        this.name = name;
        this.price = price;
    }
    return Earphones;
}());
var e1 = new Earphones("Apple", 25000);
console.log(e1);
