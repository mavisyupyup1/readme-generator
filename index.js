// TODO: Include packages needed for this application
var inquirer =require('inquirer')
const questions = require('./src/questions')
const generateMarkdown =require('./utils/generateMarkdown')
const {writeFileSync} = require('fs')
// TODO: Create a function to initialize app
const promptQuestions =() =>{
    return inquirer.prompt(questions);
    }
async function init() {
    promptQuestions()
        .then (generateMarkdown)
        .then((templateToSave) =>{
            // TODO: Create a function to write README file, save to fs
           writeFileSync('./dist/README.md',templateToSave)
           console.log('README.md generated! Go to ./dist folder to check it out')
        })
}

// Function call to initialize app
init();
