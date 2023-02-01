import React, { useState, useEffect } from 'react'
const fetchData = async () => {
  const content = await fetch(`http://localhost:3000/api/allArticlesFiltered`)
  return await content.json()
}

const findParent = (id, result) => {
  const anArray = result?.result?.mappedArticles
  let title
  anArray.forEach((item) => {
    item.pages.forEach((it) => {
      if (it.id === id.toString().split('-').pop() || '') {
        title = item.title
      }
    })
  })
  return title
}

function useResults(id) {
  const [results, setResults] = useState(null)
  useEffect(() => {
    let ignore = false
    fetchData().then((json) => {
      if (!ignore) {
        const result = findParent(id, json)
        console.log('result', result)
        setResults(result)
      }
    })
    return () => {
      ignore = true
    }
  }, [id])
  return results
}
const Caption = (props) => {
  const { id } = props
  const results = useResults(id)
  return results ? <span className="govuk-caption-xl">{results}</span> : null
}

export default Caption
