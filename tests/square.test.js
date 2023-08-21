//pulling in the required file
const Square = require ('../lib/square');

describe ('Square', () => {
    describe ('render', () => {
        test('should render square with a fill color', ()=> {
//arrange
            const square = new Square();
            square.userColor="yellow";
//act
            const expectedSvg = `<rect width="100%" height="100%" fill="yellow"/>`;            
//assert
            expect(square.render()).toEqual(expectedSvg)
        })
    })
})
