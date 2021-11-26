const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license=> {
if(!license){
  return ``;
}
return`

`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

const generateTable = (confirm)=>{
  if(!confirm){
    return``;
  }
  return
    `## Table of Contents (Optional)
    `;
  }

function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

${generateTable(data.confirmTable)}

## Installation
${data.installation}
## Usage 
${data.usage}
## Testing
${data.test}

## License
![apache2](https://img.shields.io/hexpm/l/apa)
![ms-pl](https://img.shields.io/badge/license-ms--pl-blue)
![MIT](https://img.shields.io/bower/l/mi)
![mpl-2.0](https://img.shields.io/badge/license-mpl--2.0-red)
![osl-3.0](https://img.shields.io/badge/license-osl--3.0-yellowgreen)
## Questions?
* Github: ' <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
  data.github
}">${data.github}</a>'
* Email: ${data.email}

`;
}

module.exports = generateMarkdown;
