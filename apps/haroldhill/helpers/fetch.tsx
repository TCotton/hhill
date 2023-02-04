import fetch from 'isomorphic-unfetch'
import client from './contentful'
import mappedArticlesFn from './mappedArticlesFn'

export const getArticles = async () => {
  return client
    .getEntries({
      content_type: 'chapters'
    })
    .then((result) => {
      const mappedArticles = mappedArticlesFn(result)
      return {
        articles: mappedArticles.flatMap((article) => article.pages),
        mappedArticles
      }
    })
    .catch(() => {
      return null
    })
}

export const getSingleArticle = async (articleId) => {
  return client
    .getEntry(articleId.toString().split('-').pop() || '')
    .then((result) => {
      return {
        message: 'ok',
        result
      }
    })
    .catch(() => {
      return null
    })
}
