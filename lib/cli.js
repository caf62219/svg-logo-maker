const { writeFile } = require('fs/promises');
const inquirer = require('inquirer');
const { createDocument } = require('./document');

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
            .then (() => {

            })
    }
}

module.exports=CLI
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered