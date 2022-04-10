import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export const getParsedFileContentBySlug = (
  slug: string,
  postsPath: string
) => {

  const postFilePath = join(postsPath, `${slug}.mdx`);
  const fileContents = fs.readFileSync(postFilePath);

  const { data, content } = matter(fileContents);

  return {
    frontMatter: data,
    content,
  };
};
