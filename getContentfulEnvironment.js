const contentfulManagement = require("contentful-management")

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'CFPAT-sY4AaZgi9NH7UiItTWS1pAJXI90rZDHGJk3STwbJLAI',
  })

  return contentfulClient
    .getSpace('dylebmosx01m')
    .then(space => space.getEnvironment('master'))
}
