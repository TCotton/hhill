import { createClient } from 'contentful'

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_PROD_SPACE_ID || '', // ID of a Compose-compatible space to be used \
  accessToken: process.env.NEXT_PUBLIC_CONTENT || ''
})

type GetPageParams = {
  pageContentType: string
  slug: string
  locale: string
}

async function getPage(params: GetPageParams) {
  const query = {
    limit: 1,
    include: 10,
    locale: params.locale,
    'fields.slug': params.slug,
    content_type: params.pageContentType
  }
  const {
    items: [page]
  } = await client.getEntries(query)
  return page || null
}
