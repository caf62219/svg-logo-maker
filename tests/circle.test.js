const Circle = require ('../lib/circle');

describe ('Circle', () => {
    describe ('render', () => {
        test('should render circle with a fill color', ()=> {
            const circle = new Circle(); 
            circle.userColor='green';
            const expectedSvg = `<circle cx="150" cy="100" r="80" fill="green"/>`;

            

            expect(circle.render()).toEqual(expectedSvg)
        })
    })
})