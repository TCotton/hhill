const mappedArticlesFn = (data) => {
  return data.items.map((article) => {
    return {
      title: article.fields.title,
      slug: article.fields.slug,
      pages: article.fields.pages.map((page) => {
        return {
          title: page.fields.title,
          contentRichText: page.fields.contentRichText,
          slug: page.fields.slug,
          fullSlug: `${article.fields.slug}/${page.fields.slug}`,
          id: page.sys.id
        }
      })
    }
  })
}
export default mappedArticlesFn
