import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Navigation from './Navigation'
import mappedArticlesFn from '../helpers/mappedArticlesFn'
import { getApiRoot } from 'nextjs-url'
const getArticles = async (apiRoot) => {
  const content = await fetch(`${apiRoot}/api/allArticles`)
  const articles = await content.json()
  return mappedArticlesFn(articles.result)
}

const MenuItems = () => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    const apiRoot = getApiRoot().href
    getArticles(apiRoot).then((articles) => {
      setArticles(articles)
    })
    return () => {
      setArticles(null)
    }
  }, [])
  return <>{articles && <Navigation articles={articles} />}</>
}

export default MenuItems
