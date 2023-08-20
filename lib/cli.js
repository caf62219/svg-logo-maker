const { writeFile } = require('fs/promises');
const inquirer = require('inquirer');
const { createDocument } = require('./document');

let shape= ""

class CLI {
    constructor () {
        
    }
    run () {
        return inquirer
            .prompt ([
                {
                    type: 'input',
                    name: 'text',
                    message: "Enter up to 3 characters"
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: "List the color or hexadecimal number you want for the text."
                },
                {
                    type:'list',
                    name: "shape",
                    message: "Select which shape you want.",
                    choices: ["triangle", "circle", "square"]

                },
                {
                    type: "input",
                    name: 'shapeColor',
                    message: "List the color or hexadecimal number you want for the shape."
                },

            ])
            .then ((responses) => {
                switch (responses.shape) {
                    case "triangle":
                        shape ="triangle"
                        break
                    case "square":
                        shape= "square"
                        break
                    case "circle":
                        shape= "circle"
                        break
                }
                return writeFile (
                    ('../examples/generated.svg'),
                    createDocument(shape, responses.shapeColor, responses.text, responses.textColor)
                )
            })
            .then (() => console.log ('Created generated.svg'))
            .catch((err)=> {
                console.log(err); 
                console.log("something went wrong")
            })
    }
}

module.exports=CLI


// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered