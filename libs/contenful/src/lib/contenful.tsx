import { ContentfulClient } from 'react-contentful'

export const contentfulClient = ContentfulClient({
  space: process.env['NEXT_PUBLIC_CONTENTFUL_PROD_SPACE_ID'] || '',
  accessToken: process.env['NEXT_PUBLIC_CONTENT'] || ''
})

export const previewContentfulClient = ContentfulClient({
  space: process.env['NEXT_PUBLIC_CONTENTFUL_PROD_SPACE_ID'] || '',
  accessToken: process.env['NEXT_PUBLIC_PREVIEW_ACCESS_TOKEN'] || '',
  host: 'preview.contentful.com'
})
