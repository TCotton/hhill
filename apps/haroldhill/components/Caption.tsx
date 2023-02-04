import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import findParent from '../helpers/findParent'
const fetchData = async () => {
  const content = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/allArticlesFiltered`
  )
  return await content.json()
}

function useResults(id: string) {
  const [results, setResults] = useState<null | string>(null)
  useEffect(() => {
    let ignore = false
    fetchData().then((json) => {
      if (!ignore) {
        const result = findParent(id, json)
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
