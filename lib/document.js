const Square = require ('./square');
const Circle = require ('./circle');
const Triangle = require ('./triangle');

function createDocument (shape, shapeColor, text, textColor) {
    
const square = new Square().render();
const circle = new Circle().render();
const triangle = new Triangle().render();

return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<${shape}/>

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`




}

module.exports = {createDocument};