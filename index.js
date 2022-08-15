// Your code here
class Polygon {
    constructor(array) {
        this.array = array;
    }
    get countSides() {
        let sides = this.array.length;
        return sides;
    }
    get perimeter() {
        let perimeter = this.array.reduce((total, side) => total + side)
        return perimeter;
    }
}
   

class Triangle extends Polygon {
    get isValid() {
        let assumption1 = this.array[0] + this.array[1] > this.array[2];
        let assumption2 = this.array[0] + this.array[2] > this.array[1];
        let assumption3 = this.array[1] + this.array[2] > this.array[0];
        if (this.array.length === 3 && assumption1 && assumption2 && assumption3) {
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let assumptionA = this.array[0] === this.array[1]
        let assumptionB = this.array[2] === this.array[3]
        let assumptionC = this.array[0] === this.array[2]
        if (this.array.length === 4 && assumptionC) {
            return true;
        } else {
            return false;
        }
    }
    get area() {
        return this.array[0] * this.array[0];
        
    }
}


