// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questionPrompt = () => {
    return inquirer.prompt([
        {
            type: `input`,
            name: `title`,
            message: `What is the title of your project? (Required)`,
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter the title of your project!");
                    return false;
                } 
            }
        },
        {
            type: `input`,
            name: `description`,
            message: `Please enter a description for your project.`
        },
        {
            type: `confirm`,
            name: `confirmTable`,
            message: `Would you like to add a table of contents?`,
            default: false
        },
        {
            type: `input`,
            name: `tableofcontents`,
            message: `Provide section titles for your table of contents seperated by commas.`,
            when: ({ confirmTable }) => confirmTable
        },
        {
            type: `input`,
            name: `installation`,
            message: `Please provide the installation instructions for your project.`
        },
        {
            type: `input`,
            name: `usage`,
            message: `Enter usage information for your project. Add images with relative file path.`
        },
        {
            type: `input`,
            name: `credits`,
            message: `Please enter any contributors you would to credit. Please include their GitHub link as well as their name.`
        },
        {
            type: `input`,
            name: `contribution`,
            message: `Add any contribution guidelines you have for your project.`
        },
        {
            type: `input`,
            name: `tests`,
            message: `Please enter test instructions for your project.`
        },
        {
            type: `input`,
            name: `features`,
            message: `Please add any features you plan to add in the future.`
        },
        {
            type: `list`,
            name: `licenses`,
            message: `What liscence`,
            choices: [`Choice 1`, `Choice 2`, `Choice 3`, `Choice 4`, `Choice 5`]
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/readMe.md", data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: "ReadMe created!"
            });
        });
    });
};

// TODO: Create a function to initialize app
// function init() {
//     return inquirer.prompt(questions)
// };

// Function call to initialize app
questionPrompt()
    .then(generateMarkdown)
