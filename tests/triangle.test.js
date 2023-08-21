const Triangle = require ('../lib/triangle');


describe ('Triangle', () => {
    describe ('render', () => {
        test('should render triangle with a fill color', ()=> {
            const triangle = new Triangle();
            triangle.userColor='blue';
            const expectedSvg = `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`;

            

            expect(triangle.render()).toEqual(expectedSvg)
        })
    })
})