import { IArticle } from '@hhill/types'
const navigationArticlesFilter = (
  articles: IArticle,
  direction: 'next' | 'previous',
  articleId: string
) => {
  const directionNumber = direction === 'next' ? 1 : -1
  const article = articles.items.map((article) => {
    return {
      title: article?.fields?.title,
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
        : ({} as Record<string, unknown>) // <-- this is the problem
    }
  })
  const orderedArticles = article
    .flatMap((article) => article.pages)
    .map((page, index) => Object.assign(page, { newId: index }))

  const currentArticle =
    orderedArticles.find(
      (article: Record<string, unknown>) => article?.id === articleId
    ) || ({} as Record<string, number>)

  return orderedArticles.find(
    (article) => article?.newId === currentArticle?.newId + directionNumber
  )
}

export default navigationArticlesFilter
