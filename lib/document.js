class CreateDocument {
    constructor () {
        this.text="";
        this.shape="";
    }
//will render the svg file information
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${this.shape}${this.text}</svg>`
    }
//sets the user text information with the text and the textColor
    userText (text, textColor) {
       this.text=`<text x="150" y="125" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>`
    }

//sets the shape based on the user choice
    userShape (shape) {
        this.shape= shape.render ()
    }


}

module.exports = CreateDocument;