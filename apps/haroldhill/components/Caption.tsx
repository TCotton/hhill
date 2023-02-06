import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import findParent from '../helpers/findParent'
import { getBaseUrl, getApiRoot } from "nextjs-url";
const fetchData = async (apiRoot) => {
  const content = await fetch(`${apiRoot}/allArticlesFiltered`)
  return await content.json()
}

function useResults(id: string) {
  const [results, setResults] = useState<null | string>(null)
  useEffect(() => {
    let ignore = false
    const apiRoot = getApiRoot().href
    fetchData(apiRoot).then((json) => {
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
