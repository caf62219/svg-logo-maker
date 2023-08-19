const Shapes = require ('./shapes');

class Square extends Shapes {
    render() {
        return `<square x="10" y="10" width="30" height="30" fill="${shapeColor}"/>`
    }
}


module.exports =Square;

