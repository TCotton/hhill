import { GetStaticProps } from 'next'

function ArticleId({ posts, items, articles }) {
  console.dir(items)
  console.dir(articles)
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.date}>{post.title}</li>
      ))}
    </ul>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const content = await fetch('http://localhost:4200/api/content')
  const articleId = await content.json()

  return {
    props: {
      articleId: articleId
    }
  }
}

/*export async function getStaticPaths() {
  const content = await fetch('http://localhost:4200/api/content')
  const articles = await content.json()
  return {
    paths: articles.
  }

}*/

export default ArticleId
