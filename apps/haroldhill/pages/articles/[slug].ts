import fs from 'fs'
import { join } from 'path'
import { getParsedFileContentBySlug } from '@markdown/markdown'

interface ArticleProps extends ParsedUrlQuery {
  slug: string
}

const POSTS_PATH = join(process.cwd(), '_articles')

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params
}: {
  params: ArticleProps
}) => {
  // read markdown file into content and frontmatter
  const articleMarkdownContent = getParsedFileContentBySlug(
    params.slug,
    POSTS_PATH
  )

  return {
    props: {
      slug: params.slug
    }
  }
}

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  const paths = fs
    .readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.mdx?$/, '')) // Remove file extensions for page paths
    .map((slug) => ({ params: { slug } })) // Map the path into the static paths object required by Next.js

  return {
    paths,
    fallback: false
  }
}
