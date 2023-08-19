const Triangle = require ('../lib/triangle');

describe ('Triangle', () => {
    describe ('render', () => {
        test('should render triangle with a fill color', ()=> {
            const shapeColor='green';
            const expectedSvg = `<triangle points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`;

            const triangle = new Triangle();

            expect(triangle.render()).toEqual(expectedSvg)
        })
    })
})