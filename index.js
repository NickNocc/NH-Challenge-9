// TODO: Include packages needed for this application
// requires fs, inquirer, and our generateMarkdown.js file
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
// array of questions for the user to answer
const questionPrompt = () => {

    return inquirer.prompt([
        {
            type: `input`,
            name: `username`,
            message: `Please enter your GitHub username. (Required)`,
            // validate messages require the user to answer and the prompt will not continue otherwise
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log("Please enter your username!");
                    return false;
                } 
            }
        },
        {
            type: `input`,
            name: `email`,
            message: `Please enter your email address for user questions. (Required)`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your email!");
                    return false;
                } 
            }
        },
        {
            type: `input`,
            name: `repoName`,
            message: `Please enter the repo name for your project. (Required)`,
            validate: repoNameInput => {
                if (repoNameInput) {
                    return true;
                } else {
                    console.log("Please enter the repo name for your project!");
                    return false;
                } 
            }
        },
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
            type: `checkbox`,
            name: `tableofcontents`,
            message: `Please select which sections you wish to have in your table of contents.`,
            choices: [`Description`, `Installation`, `Usage`, `Tests`, `Features`, `Contributing`, `Credits`, `License`],
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
            message: `Enter usage information for your project. Add images with relative file path (wrapped in parenthesis).`
        },
        {
            type: `input`,
            name: `questions`,
            message: `Please provide instructions for the questions section`
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
            name: `license`,
            message: `Please select the license you would like to use.`,
            choices: ['AGPL_v3', 'GPL_v3', 'LGPL_v3', 'MPL_2.0', 'Apache_2.0', 'MIT', 'Boost_1.0', 'Unlicense', `None`],
        }
    ])
}

// TODO: Create a function to write README file
// function to write the file, called later after the prompt is completed
function writeToFile(fileContent) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./develop/dist/readme.md", fileContent, err => {
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


// Function call to initialize app
// Starts the question prompt for the user
 questionPrompt()
    // Creates our readme then sends it to writefile for it to be created
     .then(generateMarkdown)
     .then(pageMarkdown => {
         console.log("Readme being created, please wait.");
         return writeToFile(pageMarkdown);
     })
    //  Shows the user their answers once the file is written
     .then(writeFileResponse =>{
         console.log(("Readme Generated in the dist folder!"));
     })
     .catch(err => {
         console.log(err);
     })
