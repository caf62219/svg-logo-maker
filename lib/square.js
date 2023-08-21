//calling required files
const Shapes = require ('./shapes');


class Square extends Shapes {
// will render the square code for the svg
    render() {
        return `<rect width="100%" height="100%" fill="${this.userColor}"/>`
    }
}


module.exports =Square;

