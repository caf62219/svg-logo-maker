class Shapes {
    constructor (){
        this.userColor="";
    }
//setting color for the shape
    setcolor(color) {
        this.userColor= color
    }
//will render an error if you try to render Shapes
    render() {
        throw new Error ('Child class must implement a render() method.')
    }
    
}




module.exports = Shapes;