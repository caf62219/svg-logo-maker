const Shapes = require ('./shapes');


class Square extends Shapes {
    
    render() {
        return `<rect width="100%" height="100%" fill="${this.userColor}"/>`
    }
}


module.exports =Square;

