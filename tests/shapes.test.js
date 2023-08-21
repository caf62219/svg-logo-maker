const Shapes = require ('../lib/shapes');

describe ('Shapes', () => {
    describe ('render', () => {
        test('should throw error if render() is called', ()=> {
//arrange
            const shape = new Shapes();
            const err= new Error('Child class must implement a render() method.')
//act and assert
            expect (shape.render).toThrow(err);
        })
    
    })

})