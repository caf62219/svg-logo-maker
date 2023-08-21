//importing required files
const Shapes = require ('./shapes');

class Circle extends Shapes {
    constructor(children) {
        super(children)
    }
//will return the circle code for the svg
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.userColor}"/>`
    }
}


module.exports =Circle;


