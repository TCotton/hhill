import {IChapters, IChaptersFields} from "@hhill/types";


const mappedArticlesFn = (data) => {
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
        : {}
    }
  })
}
export default mappedArticlesFn
