const Square = require ('../lib/square');

describe ('Square', () => {
    describe ('render', () => {
        test('should render square with a fill color', ()=> {
            shapeColor="green";
            const expectedSvg = `<square x="10" y="10" width="30" height="30" fill="${shapeColor}"/>`;

            const square = new Square();

            expect(square.render()).toEqual(expectedSvg)
        })
    })
})
