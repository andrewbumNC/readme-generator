const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'What is the title of your project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:'
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'What are the installation instructions for your application?'
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'What usage information would be helpful to other developers and your users?'
    },
    {
        type: 'tnput',
        name: 'contributionGuidelines',
        message: 'What are the guidelines for other developers to contribute to your project?'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'How can other developers test your application and their contributions to it?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose all relevant licenses',
        choices: [
            'red',
            'blue',
            'green',
            'apple',
        ]
    },
    {
        type: 'input',
        name: 'gitHubUserName',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },

]).then(function(answers){
   
    descontstructAnswers(answers)
})

const descontstructAnswers = (answers) => {
    const {title, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, gitHubUserName, email} = answers;
  
    createReadMeContent(title, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, gitHubUserName, email)
}

const createReadMeContent = (title, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, gitHubUserName, creatorEmail) => {
    console.log(testInstructions)

    const readMe = `
# Title: ${title}

## Table of Contents: 

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Description: 
${description}

## Installation:
${installationInstructions}

## Usage:
${usageInformation}

## Contributing:
${contributionGuidelines}

## Tests
${testInstructions}

## Questions 

${gitHubUserName}
${creatorEmail}

    `
    console.log(readMe)
    createReadMeFile(readMe)
}

const createReadMeFile = readMe => {
    fs.writeFile('readme.md', readMe, (error) =>
    error ? console.error(error) : console.log(readMe)
    )
};

