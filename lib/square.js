const Shapes = require ('./shapes');


class Square extends Shapes {
    constructor(children) {
        super(children)
    }
    
    render() {
        return `<rect width="100%" height="100%" fill="${shapeColor}"/>`
    }
}


module.exports =Square;

