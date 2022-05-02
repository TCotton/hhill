import { ContentfulClient } from 'react-contentful';

export const contentfulClient = ContentfulClient({
  space: process.env.NX_CONTENTFUL_PROD_SPACE_ID || '7n7vfqlomamo',
  accessToken: process.env.ACCESS_TOKEN,
});

export const previewContentfulClient = ContentfulClient({
  space: process.env.NX_CONTENTFUL_PROD_SPACE_ID || '7n7vfqlomamo',
  accessToken: process.env.PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
});
