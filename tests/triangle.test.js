//pull in file thats needed
const Triangle = require ('../lib/triangle');


describe ('Triangle', () => {
    describe ('render', () => {
        test('should render triangle with a fill color', ()=> {
//arrange
            const triangle = new Triangle();
            triangle.userColor='blue';
//act
            const expectedSvg = `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`;           
//assert
            expect(triangle.render()).toEqual(expectedSvg)
        })
    })
})