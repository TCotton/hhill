import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import findParent from '../helpers/findParent'
import { getApiRoot } from 'nextjs-url'
import fetchWithErrorHandle from "../helpers/fetchWithErrorHandle";
const fetchData = async (apiRoot) => {
  const content = await fetch(`${apiRoot}/allArticlesFiltered`)
  return await content.json()
}

function useResults(id: string) {
  const [results, setResults] = useState<null | string>(null)
  useEffect(() => {
    let ignore = false
    const apiRoot = getApiRoot().href
    fetchWithErrorHandle(`${apiRoot}/allArticlesFiltered`).then((json) => {
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
