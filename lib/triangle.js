const Shapes = require ('./shapes');

class Triangle extends Shapes {
    constructor(children) {
        super(children)
    }
    render() {
        return `<triangle points="150, 18 244, 182 56, 182" fill="${shapeColor}"/>`
    }
}


module.exports =Triangle;