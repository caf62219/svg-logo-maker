const Shapes = require ('./shapes');


class Square extends Shapes {
    constructor(children) {
        super(children)
    }
    
    render() {
        return `<square x="10" y="10" width="30" height="30" fill="${shapeColor}"/>`
    }
}


module.exports =Square;

