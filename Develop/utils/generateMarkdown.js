// TODO: Create a function that returns a license badge based on which license is passed in & Create a function that returns the license link
// If there is no license, return an empty string
let licenseBadge = '';

function renderLicense(data) {
    //choices: ["MIT", "ISC", "apache", "GNU", "N/A"]
    if (data.license == "MIT") {
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (data.license == "ISC") {
      licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    } else if (data.license == "apache") {
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (data.license == "GNU") {
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    }
  return licenseBadge;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
let licenseSection = '';

function renderLicenseSection(data) {
  if (data.license === "N/A") {
    lisceseSection += ''
  } else {
    licenseSection = `## License`
  }
  return licenseSection;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseSection(data)}
  ${renderLicense(data)}

  ## Description
  ${data.description}

  ---
  ## Contents
  - [Description](#description)
  - [Installation](#install)
  - [Usage](#usage)
  - [Features](#features)
  - [Contribute](#contribute)
  - [test](#testing)
  - [Questions](#questions)
  ---

  ## Install
  ${data.install}

  ## Usage
  ${data.usage}

  ## Features
  ${data.features}

  ## Contribute
  To contribute to this application, please follow the following instructions: 
  ${data.contribute}

  ## Testing
  ${data.test}

  ## Questions
  * Any questions please reach out to <a href="mailto:${data.email}">${data.email}</a>
  * GitHub Username ${data.gitUN}

`;
}

module.exports = generateMarkdown;
