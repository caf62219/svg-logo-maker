const { writeFile } = require('fs/promises');
const inquirer = require('inquirer');
const { createDocument } = require('./document');
const { join } = require('path');


let shape= "";
let square1="";
let triangle1="";
let circle1="";


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
                    message: "List the color you want for the text."
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
                    message: "List the color you want for the shape."
                },

            ])
            .then ((responses) => {
                if (responses.shape==="triangle"){
                    shape=triangle1
                }
                else if (responses.shape==="circle"){
                    shape=circle1
                }
                else if (responses.shape === "square"){
                    shape=square1
                }
                return writeFile (
                    '../examples/logo.svg',
                    createDocument(responses.shape, responses.shapeColor, responses.text, responses.textColor)
                )
            })
            .then (() => console.log ('Generated logo.svg'))
            .catch((err)=> {
                console.log(err); 
                console.log("something went wrong")
            })
    }
}

module.exports=CLI


