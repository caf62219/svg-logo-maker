const Shapes = require ('./shapes');

class Circle extends Shapes {
    constructor(children) {
        super(children)
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${shapeColor}"/>`
    }
}


module.exports =Circle;


