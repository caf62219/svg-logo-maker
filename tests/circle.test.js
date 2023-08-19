const Circle = require ('../lib/circle');

describe ('Circle', () => {
    describe ('render', () => {
        test('should render circle with a fill color', ()=> {
             shapeColor='green';
            const expectedSvg = `<circle cx="150" cy="100" r="80" fill="${shapeColor}"/>`;

            const circle = new Circle();

            expect(circle.render()).toEqual(expectedSvg)
        })
    })
})