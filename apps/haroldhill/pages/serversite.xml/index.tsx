import { GetServerSideProps } from 'next'
import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { getArticles } from '../../helpers/fetch'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { articles } = (await getArticles()) as {
    articles: Record<string, unknown>[]
  }

  const fields: ISitemapField[] = articles.map((article) => ({
    loc: `https://www.haroldhill.org/${article.slug}-${article.id}`,
    lastmod: new Date().toISOString()
  }))
  return getServerSideSitemap(ctx, fields)
}

export default function Site() {
  //console
}
