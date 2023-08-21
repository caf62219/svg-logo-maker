class Shapes {
    constructor (){
        this.userColor="";
    }
    setcolor(color) {
        this.userColor= color
    }
    render() {
        throw new Error ('Child class must implement a render() method.')
    }
    
}




module.exports = Shapes;