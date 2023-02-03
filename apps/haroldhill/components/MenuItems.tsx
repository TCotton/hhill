import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Navigation from './Navigation'
import mappedArticlesFn from '../helpers/mappedArticlesFn'
const getArticles = async () => {
  const content = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/allArticles`
  )
  const articles = await content.json()
  return mappedArticlesFn(articles.result)
}

const MenuItems = () => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles)
    })
    return () => {
      setArticles(null)
    }
  }, [])
  return <>{articles && <Navigation articles={articles} />}</>
}

export default MenuItems
