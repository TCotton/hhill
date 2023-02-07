import {Entry, EntryCollection} from 'contentful'
import client from './contentful'
import mappedArticlesFn from './mappedArticlesFn'
import {IPagesFields} from "@hhill/types";
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
          articles: mappedArticles.flatMap(
            (article: IPagesFields) => article.pages
          ),
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

export const getSingleArticle = async (articleId: string) => {
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
