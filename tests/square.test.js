const Square = require ('../lib/square');

describe ('Square', () => {
    describe ('render', () => {
        test('should render square with a fill color', ()=> {
            shapeColor="green";
            const expectedSvg = `<rect width="100%" height="100%" fill="${shapeColor}"/>`;

            const square = new Square();

            expect(square.render()).toEqual(expectedSvg)
        })
    })
})
