import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Navigation from './Navigation'


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
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles)
    })
  }, [])
  return <>{articles && <Navigation articles={articles} />}</>
}

export default MenuItems
