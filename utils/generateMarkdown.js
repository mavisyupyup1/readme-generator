const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents (Optional)

## Installation
${data.installation}
## Usage 
${data.usage}
## Testing
${data.test}

## License

## Questions?
* Github: ' <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
  data.github
}">${data.github}</a>'
* Email: ${data.email}

`;
}

module.exports = generateMarkdown;
