interface IMappedArticles {
  items: Array<{
    fields: {
      title: string
      slug: string
      pages: Array<{
        fields: {
          title: string
          contentRichText: string
          slug: string
        }
        sys: {
          id: string
        }
      }>
    }
  }>
}
const mappedArticlesFn = <T extends IMappedArticles>(data: T) => {
  if (Array.isArray(data.items) === false) return []
  return data.items.map((article) => {
    return {
      title: article.fields?.title,
      slug: article.fields?.slug,
      pages: Array.isArray(article.fields.pages)
        ? article.fields.pages.map((page) => {
            return {
              title: page.fields?.title,
              contentRichText: page.fields?.contentRichText,
              slug: page.fields?.slug,
              fullSlug: `${page.fields?.slug}-${page.sys?.id}`,
              id: page.sys?.id
            }
          })
        : []
    }
  })
}

const newFunction = <T>(data: T): T => {
  return {
    data
  }
}
export default mappedArticlesFn
