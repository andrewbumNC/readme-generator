const inquirer = require('inquirer')
const fs = require('fs')
let licenseMit = [];
let licenseAppache = [];
let licenseCc0 = [];
let licensePerl = [];

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
            'MIT',
            'Apache 2.0',
            'CCO 1.0',
            'Perl',
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
    const {title, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, gitHubUserName, email, license} = answers;
  
  

    // const [choice1, choice2, choice3, choice4] = license
    
    createReadMeContent(title, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, gitHubUserName, email, license)
}

const createReadMeContent = (title, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, gitHubUserName, creatorEmail, license) => {
   


console.log(license)


for (let i = 0; i <license.length; i++){
    if (license[i] === 'MIT') {
        licenseMit = `[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/) <br/> For more information regarding this badge click here: https://opensource.org/licenses/MIT<br/>`
    } else if (license[i] === 'Apache 2.0'){
        licenseAppache = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)] <br/> For more information regarding this badge click here: https://opensource.org/licenses/Apache-2.0 <br/>`
    } else if (license[i] === 'CCO 1.0') {
        licenseCc0 = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/) <br/> For more information regarding this badge click here: https://creativecommons.org/publicdomain/zero/1.0/ <br/>`
    } else {licensePerl = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0) <br/> For more information regarding this badge click here: https://opensource.org/licenses/Artistic-2.0 <br/>`}
}
     
    console.log(licenseMit)
    console.log(licenseAppache)
    console.log(licenseCc0)
    console.log(licensePerl)



    const readMe = `
# Title: ${title}

## Table of Contents: 

- [Licenses](#licenses)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Licenses:
${licenseMit}
${licenseAppache}
${licenseCc0}
${licensePerl}



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




