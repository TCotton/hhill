import fs from 'fs';
import { join } from 'path';

interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

const POSTS_PATH = join(process.cwd(), '_articles');

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  const paths = fs
    .readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.mdx?$/, '')) // Remove file extensions for page paths
    .map((slug) => ({ params: { slug } })); // Map the path into the static paths object required by Next.js

  return {
    paths,
    fallback: false,
  };
};
