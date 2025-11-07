/* 
1. Create a Class with Inheritance

Create a "Shape" class and a "Circle" subclass that calculates the area of the circle

Also create a static method in class "Circle" to give various formula related to circle
*/

class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle')
        this.radius = radius
    }
    area() {
        return Math.PI * this.radius ** 2
    }
    // Static Method
    static formula(type) {
        switch (type.toLowerCase()) {
            case 'area':
                console.log("Formula of area of circle is PI*Radius^2")
                break;
            case 'perimeter':
                console.log("Formula of perimeter of circle is 2*PI*radius")
                break;
            default:
                console.log("No such type")
        }

    }
}

Circle.formula('area')
const circle = new Circle(5)
console.log(circle.getName())// "Circle"
console.log(circle.area())// 78.53981633974483

