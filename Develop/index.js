// TODO: Include packages needed for this application
const genMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the name of your application?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your application."
    },
    {
        type: "input",
        name: "install",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
        type: "input",
        name: "usage",
        message: "How will your application be used?"
    },
    {
        type: "list",
        message: "What license are you using for this application?",
        name: "license",
        choices: ["MIT", "ISC", "apache", "GNU"]
    },
    {
        type: "input",
        name: "feature",
        message: "What features does your application include?"
    },
    {
        type: "input",
        name: "contributions",
        message: "Guidelines for contributions?"
    },
    {
        type: "input",
        name: "test",
        message: "How should someone test this applciation?"
    },
    {
        type: "input",
        name: "test",
        message: "What's your GitHub Username?"
    },
    {
        type: "input",
        name: "test",
        message: "What's your email address?"
    }
]; //End of Questions

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then(function (userInput) {
        const markdownInfo = genMarkdown(userInput);
        
        // TODO: Create a function to write README file
        fs.writeFile('README.md', markdownInfo, (err) => 
        err ? console.log(err) : console.log('Readme file has been created.')
        );
    })
}

// Function call to initialize app
init();
