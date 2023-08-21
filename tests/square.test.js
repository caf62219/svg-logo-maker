const Square = require ('../lib/square');

describe ('Square', () => {
    describe ('render', () => {
        test('should render square with a fill color', ()=> {
            const square = new Square();
            square.userColor="yellow";
            const expectedSvg = `<rect width="100%" height="100%" fill="yellow"/>`;

            

            expect(square.render()).toEqual(expectedSvg)
        })
    })
})
