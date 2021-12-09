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
  console.log(data);
  const {tableOC, tests, features, credits, ...otherData} = data;
  return `# ${otherData.title}
  [![Test](this is a test)]

  ## Description
  
  ${otherData.description}

  ## Table of Contents

  ${tableOC}

  ## Installation

  ${otherData.installation}

  ## Usage

  ${otherData.usage}

  ## Tests

  ${tests}

  ## Features

  ${features}

  ## Contributing

  ${otherData.contribution}

  ## Credits

  ${credits}

  ## License

  ${otherData.license}

`;
}

module.exports = generateMarkdown;
