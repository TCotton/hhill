import { createClient } from 'contentful'
export default createClient({
  space: process.env.CONTENTFUL_PROD_SPACE_ID || '', // ID of a Compose-compatible space to be used \
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ''
})
