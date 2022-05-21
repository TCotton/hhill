import { join } from 'path'
import { ParsedUrlQuery } from 'querystring'
import { getParsedFileContentBySlug, renderMarkdown } from '@hhill/markdown'
import { GetStaticPaths, GetStaticProps } from 'next'
import fs from 'fs'

interface ArticleProps extends ParsedUrlQuery {
  slug: string
}

const POSTS_PATH = join(process.cwd(), '../_articles')

export const getStaticProps: GetStaticProps = async ({
  params
}: {
  params: ArticleProps
}) => {
  // read markdown file into content and frontmatter
  const articleMarkdownContent = getParsedFileContentBySlug(
    params.slug,
    POSTS_PATH
  )

  // generate HTML
  const renderedHTML = await renderMarkdown(articleMarkdownContent.content)

  return {
    props: {
      frontMatter: articleMarkdownContent.frontMatter,
      content: renderedHTML
    }
  }
}

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  const paths = fs
    .readdirSync(POSTS_PATH)
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export function Article({ frontMatter, html }) {
  return (
    <div className="md:container md:mx-auto">
      <article>
        <h1 className="text-3xl font-bold hover:text-gray-700 pb-4">
          {frontMatter.title}
        </h1>
        <div>by {frontMatter.author.name}</div>
        <hr />

        <main dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </div>
  )
}

export default Article
