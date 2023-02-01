import React, { useState, useEffect } from 'react'
const fetchData = async () => {
  const content = await fetch(`http://localhost:3000/api/allArticlesFiltered`)
  return await content.json()
}

const findParent = (id, result) => {
  console.log('findParent', id, result)
  console.log('result.result.mappedArticles', result?.result?.mappedArticles)
  const anArray = result?.result?.mappedArticles
  console.log('anArray', anArray)

  const title = anArray.forEach(
    (item: { id: string }, index: string | number, array: []) => {
      return array[index].pages.filter(
        (it: { id: string }, i: string | number, arr) => {
          if (arr[index].id === id) {
            console.log('arr[index].title', arr[index].title)
            return array[index].title
          }
          return null
        }
      )
    }
  )
  console.log('title', title)
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
  console.log('results', results)
  return results?.message === 'ok' ? (
    <span className="govuk-caption-xl">{results}</span>
  ) : null
}

export default Caption
