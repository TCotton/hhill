import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

const getArticles = async () => {
  const content = await fetch('http://localhost:3000/api/allArticles')
  const articles = await content.json()
  return articles.result.items.map((article) => {
    return {
      title: article.fields.title,
      slug: article.fields.slug,
      pages: article.fields.pages.map((page) => {
        return {
          title: page.fields.title,
          contentRichText: page.fields.contentRichText,
          slug: page.fields.slug,
          parent: article.fields.title,
          id: page.sys.id
        }
      })
    }
  })
}

const MenuItems = () => {
  const [isLoading, setLoading] = useState(false)
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles)
      setLoading(true)
    })
  }, [])
  console.dir(articles)
  return (
    <>
      {isLoading ? (
        articles &&
        articles.map((article) => {
          return (
            <li key={article.id}>
              {article.title}
              <ul>
                {article.pages.map((page) => {
                  return <li key={page.id}>{page.title}</li>
                })}
              </ul>
            </li>
          )
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
export default MenuItems
