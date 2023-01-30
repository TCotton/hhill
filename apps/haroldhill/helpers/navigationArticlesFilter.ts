import { IChapters, IChaptersFields, IPagesFields, IPages } from '@hhill/types'

interface IArticle {
  includes: {
    Entry: {
      fields: IPagesFields
      metadata: {
        tags: []
      }
      sys: IPages | IChapters
    }
  }
  limit: number
  skip: number
  sys: { type: string }
  items: [
    {
      fields: IChaptersFields
      metadata: {
        tags: []
      }
      sys: IPages | IChapters
    }
  ]
}

const navigationArticlesFilter = (
  articles: IArticle,
  direction: number,
  articleId: string
) => {
  const article = articles.items.map((article) => {
    return {
      title: article.fields.title,
      slug: article.fields.slug,
      pages: article.fields.pages.map((page) => {
        return {
          title: page.fields.title,
          contentRichText: page.fields.contentRichText,
          slug: page.fields.slug,
          fullSlug: `${page.fields.slug}-${page.sys.id}`,
          id: page.sys.id
        }
      })
    }
  })
  const orderedArticles = article
    .flatMap((article) => article.pages)
    .map((page, index) => Object.assign(page, { newId: index }))

  const currentArticle = orderedArticles.find(
    (article) => article.id === articleId
  )

  return orderedArticles.find(
    (article) => article.newId === currentArticle.newId + direction
  )
}

export default navigationArticlesFilter
