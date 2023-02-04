import { Entry } from 'contentful'
import client from './contentful'
import mappedArticlesFn from './mappedArticlesFn'
// TODO: come back and fix types
export const getArticles = async () => {
  return client
    .getEntries({
      content_type: 'chapters'
    })
    .then(
      (
        result
      ): {
        message?: string
        articles?: Record<string, unknown>
        mappedArticles?: Record<string, unknown>
      } => {
        const mappedArticles = mappedArticlesFn(result)
        return {
          message: 'ok',
          articles: mappedArticles.flatMap((article) => article.pages),
          mappedArticles
        }
      }
    )
    .catch((err): { error?: string } => {
      return {
        error: err.name + err.message + err.stack.toString()
      }
    })
}

export const getSingleArticle = async (articleId) => {
  return client
    .getEntry(articleId.toString().split('-').pop() || '')
    .then((result): { message?: string; result?: Entry<unknown> } => {
      return {
        message: 'ok',
        result
      }
    })
    .catch((err): { message?: string } => {
      return {
        message: err.name + err.message + err.stack.toString()
      }
    })
}
