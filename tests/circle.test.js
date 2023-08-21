//pulling the required file
const Circle = require ('../lib/circle');

describe ('Circle', () => {
    describe ('render', () => {
        test('should render circle with a fill color', ()=> {
//arrange
            const circle = new Circle(); 
            circle.userColor='green';
//act 
            const expectedSvg = `<circle cx="150" cy="100" r="80" fill="green"/>`;
//assert        
            expect(circle.render()).toEqual(expectedSvg)
        })
    })
})