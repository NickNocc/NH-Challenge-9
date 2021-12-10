// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


const generateTable = tableofcontentsUser => {
  if (!tableofcontentsUser) {
    return "";
  }
  let tocString = "";
  for (let i = 0; i < tableofcontentsUser.length; i++) {
    console.log(tableofcontentsUser[i]);
    tocString = tocString.concat(`* [` + tableofcontentsUser[i] + `](#` + tableofcontentsUser[i] + `)
  `);
  }
  return tocString;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  const {tableofcontents, tests, features, credits, ...otherData} = data;
  return `# ${otherData.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${otherData.username}/${otherData.repoName}?style=flat&logo=appveyor)
  ## Description
  
  ${otherData.description}

  ${generateTable(tableofcontents)}

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
