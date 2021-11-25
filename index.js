// TODO: Include packages needed for this application
var {prompt} =require('inquirer')
const generateMarkdown =require('./utils/generateMarkdown')
const questions =require('./src/questions')
const {writeToFile} = require('fs')

// TODO: Create a function to initialize app
async function init() {
    prompt(questions)
        .then (generateMarkdown)
        .then((templateToSave) =>{
            // TODO: Create a function to write README file, save to fs
            writeToFile('README.md',templateToSave)
        })
}

// Function call to initialize app
init();
