import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { MarkdownDocument } from './types'
import { markdownToHtml } from './markdownToHTML'

export const getParsedFileContentBySlug = (
  slug: string,
  postsPath: string
): MarkdownDocument => {
  console.dir(`${slug}.mdx`)
  console.log(postsPath)
  const postFilePath = join(postsPath, `${slug}.mdx`)
  const fileContents = fs.readFileSync(postFilePath)

  const { data, content } = matter(fileContents)

  return {
    frontMatter: data,
    content
  }
}

export const renderMarkdown = async (
  markdownContent: string
): Promise<string> => {
  return await markdownToHtml(markdownContent || '')
}
