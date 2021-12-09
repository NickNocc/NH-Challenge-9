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
  var test = tableofcontentsUser;
  console.log(test);
  for (let i = 0; i < test.length; i++) {
    console.log(test[i]);
    let testy = test[i];
    return `* [` + testy + `](#` + testy + `)`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  const {tableofcontents, tests, features, credits, ...otherData} = data;
  return `# ${otherData.title}
  [![Test](this is a test)]

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
