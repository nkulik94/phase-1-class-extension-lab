class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        return this.countSides === 3 && this.sides.find(side => (this.perimeter - side) < side) === undefined
    }
}

class Square extends Polygon {
    get isValid() {
        return this.countSides === 4 && this.sides.find(side => side !== this.perimeter / 4) === undefined
    }

    get area() {
        return this.isValid === true ? this.sides[0] ** 2 : 'Sorry dude not a square'
    }
}
