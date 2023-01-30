require('dotenv').config({path: __dirname + '/.env.local'})
const contentfulManagement = require("contentful-management")

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENT,
  })

  return contentfulClient
    .getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_PROD_SPACE_ID)
    .then(space => space.getEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT))
}
