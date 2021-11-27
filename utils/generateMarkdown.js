const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license=> {
if(!license){
  return '';
}
return`
${license.map(val=>{
var textNew = val.replace('-','--');
return`
![${val}](https://img.shields.io/badge/license-${textNew}-blue)
`
}).join()
}`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return '';
  }
  return`
${license.map(val=>{
  return`
  * https://choosealicense.com/licenses/${val}
  `
}).join('\n')
}`
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return'';
  }
  return`
  This application is licensed under ${(license).join(', ')}. See link below for more details about the license(s).
  `
}

// TODO: Create a function to generate markdown for README

const generateTable = confirm =>{
  if(!confirm){
    return'';
  }
  return`
## Table of Contents (Optional)
* [Installation](#installation)
* [Usage](#usage)
* [Testing](#testing)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)
    `;
}

function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}

${generateTable(data.confirmTable)}

## Installation
${data.installation}
## Usage 
${data.usage}
## Testing
${data.test}
## Credit
${data.credit}
## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Questions?
* Checkout my Github:  <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
  data.github
}">${data.github}</a>
* Email: ${data.email}

`;
}

module.exports = generateMarkdown;
