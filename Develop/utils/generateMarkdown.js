// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const gnuAGPLv3 = ["GNU AGPLv3", "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"]
  const gnuGPLv3 = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  const gnuLLGPv3 = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  const mozilla = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  const apache = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  const mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  const boost = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  const unilicense = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  const licenseArr = [ gnuAGPLv3, gnuGPLv3, gnuLLGPv3, mozilla, apache, mit, boost, unilicense];
  let emptyArr = []
   for (let i = 0; i < licenseArr.length; i++) {
     if (license == licenseArr[i]) {
       let returnLicense = licenseArr[i][1];
       console.log("returning: " + returnLicense);
       emptyArr.push(returnLicense);
       console.log("returning: " + returnLicense);

       return returnLicense;
     } 
     if (license == "") {
       return "";
     }
   };
  };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(test) {
}

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
  ${renderLicenseBadge(otherData.license)}
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
