let Shape = require('@alber7rp/ull-shape-alu0100825510');

class Triangle extends Shape {
    constructor(options) {
      super(options)
    }
    area() {
      return 0.5 * this.width * this.height;
    }
}
Shape.Shapes.Triangle = Triangle;
module.exports = Triangle;
