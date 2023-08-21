//importing the required files
const { writeFile } = require('fs/promises');
const inquirer = require('inquirer');
const CreateDocument = require('./document');
//const { join } = require('path');
const Square = require ('./square');
const Circle = require ('./circle');
const Triangle = require ('./triangle');




class CLI {
    constructor () {
        
    }
    run () {
 //using inquirer to ask the questions
        return inquirer
            .prompt ([
//questions for the user
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
                let shapeUser;
//if statements to determine which shape the user picked to then run the class corresponding to it
                if (responses.shape==="triangle"){
                    shapeUser= new Triangle ()
                }
                else if (responses.shape==="circle"){
                    shapeUser= new Circle ()
                }
                else if (responses.shape === "square"){
                    shapeUser=new Square ()
                }

//putting the shapeColor into the function setcolor
                shapeUser.setcolor(responses.shapeColor)

//creates a new CreateDocument
                let createDocument=new CreateDocument


                createDocument.userText(responses.text, responses.textColor)
                createDocument.userShape(shapeUser)

//writing file logo.svg based on createDocument
                return writeFile (
                    './examples/logo.svg',
                    createDocument.render()
                )
            })
//console.log success or failure
            .then (() => console.log ('Generated logo.svg'))
            .catch((err)=> {
                console.log(err); 
                console.log("something went wrong")
            })
    }
}

module.exports=CLI


