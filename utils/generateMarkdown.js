// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ## Description 
    ${data.desc}

    ## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Test
  ${data.test}

  ## Repository
  ${data.repo}
  `;
  }
  
  module.exports = generateMarkdown;