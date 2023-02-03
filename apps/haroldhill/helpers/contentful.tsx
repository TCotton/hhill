import {createClient} from "contentful";

export default createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_PROD_SPACE_ID || '', // ID of a Compose-compatible space to be used \
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN || ''
})
