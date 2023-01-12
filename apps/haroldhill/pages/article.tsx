import { GetStaticProps } from 'next'

function Article({ posts, items, rawArticles, articles }) {
  console.dir(rawArticles)

  const article = rawArticles.result.items.map((article) => {
    return {
      title: article.fields.title,
      slug: article.fields.slug,
      pages: article.fields.pages.map((page) => {
        return {
          title: page.fields.title,
          contentRichText: page.fields.contentRichText,
          slug: page.fields.slug,
          fullSlug: `${article.fields.slug}/${page.fields.slug}`
        }
      })
    }
  })
  const newArticle = article.flatMap((article) => article.pages)
  const whatever = {
    paths: newArticle.map((article) => {
      return {
        params: {
          articleId: article.slug
        }
      }
    }),
    fallback: false
  }
  console.dir(whatever)
  console.dir(newArticle)

  console.dir(articles)
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.date}>{post.title}</li>
      ))}
    </ul>
  )
}

export const getServerSideProps = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts')
  const items = await result.json()

  debugger

  const content = await fetch('http://localhost:3000/api/allArticles')
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
      rawArticles: articles,
      articles
    }
  }
}

/*articles: articles.result.items.reduce((acc, currentValue) => {
  const slug = currentValue.fields.slug
  currentValue.fields.pages.map((x) => ({
    newValue: `${slug} ${x.fields.slug}`
  }))
  acc[currentValue.fields.slug] = currentValue
  return acc
}, {})*/

export default Article
