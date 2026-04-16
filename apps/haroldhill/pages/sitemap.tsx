// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { GetStaticProps } from 'next'
import { getArticles } from '../helpers/fetch'

const SitemapIndex = () => null

function generateSitemapXml(
  articles: Record<string, unknown>[],
  origin: string
): string {
  const urls = articles
    .map(
      (page) =>
        `  <url>\n    <loc>${origin}/${page?.fullSlug}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n  </url>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`
}

export const getStaticProps: GetStaticProps = async () => {
  const fs = await import('fs')
  const path = await import('path')

  const { articles } = (await getArticles()) as {
    articles: Record<string, unknown>[]
  }
  const origin = 'https://www.haroldhill.org'

  const xml = generateSitemapXml(articles, origin)

  // Write sitemap.xml to the app's /public at build time so it is served as a static file
  // In an Nx monorepo the build runs from the workspace root, so resolve the app's public folder explicitly
  const publicDir = path.join(process.cwd(), 'apps', 'haroldhill', 'public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  const outputPath = path.join(publicDir, 'sitemap.xml')
  fs.writeFileSync(outputPath, xml, 'utf8')

  return {
    props: {}
  }
}

export default SitemapIndex
