// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return "";
  } else {
    return license;
  }
};

const generateTable = tableofcontentsUser => {
  if (!tableofcontentsUser) {
    return "";
  }
  let tocString = "## Table of Contents ";
  for (let i = 0; i < tableofcontentsUser.length; i++) {
    tocString = tocString.concat(`
* [` + tableofcontentsUser[i] + `](#` + tableofcontentsUser[i] + `)
  `);
  }
  return tocString;
}

function generateMarkdown(data) {
  console.log(data);
  const {tableofcontents, tests, features, credits, ...otherData} = data;
  return `# ${otherData.title}
![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${otherData.username}/${otherData.repoName}?style=flat&logo=appveyor)
![badge](https://img.shields.io/badge/license-${renderLicenseBadge(otherData.license)}-blue)
## Description
  
${otherData.description}

${generateTable(tableofcontents)}

## Installation

${otherData.installation}

## Usage

${otherData.usage}

## Questions

${otherData.questions} </br>
  
GitHub: https://github.com/${otherData.username} </br>
Email: ${otherData.email}

## Tests

${tests}

## Features

${features}

## Contributing

${otherData.contribution}

## Credits

${credits}

## License

This project was made with the ${otherData.license} license.

`;
}

module.exports = generateMarkdown;
