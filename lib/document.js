const Square = require ('./square');
const Circle = require ('./circle');
const Triangle = require ('./triangle');

function createDocument (shape, shapeColor, text, textColor) {
    
const square1 = new Square().render();
const circle1 = new Circle().render();
const triangle1 = new Triangle().render();

// if (shape===triangle){
//     shape=triangle1
// }
// else if (shape===circle){
//     shape=circle1
// }
// else if (shape === square){
//     shape=square1
// }

return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<${shape}/>

<text x="150" y="125" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`
}

module.exports = {createDocument};