//calling required file
const Shapes = require ('./shapes');

class Triangle extends Shapes {
//will render the triangle code for the svg 
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.userColor}"/>`
    }
}


module.exports =Triangle;