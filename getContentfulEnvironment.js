const contentfulManagement = require("contentful-management")

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.ACCESS_TOKEN || '1A16pm5C9IfHTxquytx40B-EztfUR9h1YjJFGoDP3dQ',
  });

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID || 'dylebmosx01m')
    .then(space => space.getEnvironment('master'))
}
