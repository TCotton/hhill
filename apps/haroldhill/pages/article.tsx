import { GetStaticProps } from 'next'

function Article({ posts, items, articles }) {
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
  const result = await fetch('https://jsonplaceholder.typicode.com/posts')
  const items = await result.json()

  const content = await fetch('http://localhost:4200/api/content')
  const articles = await content.json()
  console.dir(articles)
/*  const ids = articles.result.items.sys.filter((x) => x.id)
  console.dir(ids);*/

  const posts = [
    {
      title: 'Introduction to Contentful',
      slug: 'introduction-to-contentful',
      name: 'Harold Hill',
      date: '2020-01-02',
      content: ''
    },
    {
      title: 'Introduction to Contentful',
      slug: 'introduction-to-contentful',
      name: 'Harold Hill',
      date: '2020-01-03',
      content: ''
    },
    {
      title: 'Introduction to Contentful',
      slug: 'introduction-to-contentful',
      name: 'Harold Hill',
      date: '2020-01-04',
      content: ''
    }
  ]

  return {
    props: {
      posts,
      items,
      articles: articles.result.items.reduce((acc, item) => {
        acc[item.sys.id] = item
        return acc
      }, {})
    }
  }
}

export default Article
