const Square = require ('./square');
const Circle = require ('./circle');
const Triangle = require ('./triangle');

function createDocument () {
    


return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<${shape}/>

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`




}