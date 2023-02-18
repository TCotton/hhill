import React, { useState, Dispatch, SetStateAction } from 'react'

interface IGlobalContextProps {
  user: any
  loading: boolean
  setUser: (user: any) => void
  setLoading: (loading: boolean) => void
  articles: any
  setArticles: Dispatch<SetStateAction<Record<string, never>>>
  mappedArticles: any
  setMappedArticles: Dispatch<SetStateAction<Record<string, never>>>
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  articles: {},
  setArticles: () => {},
  mappedArticles: {},
  setMappedArticles: () => {},
  user: {},
  loading: true,
  setUser: () => {},
  setLoading: () => {}
})

export const GlobalContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState({})
  const [mappedArticles, setMappedArticles] = useState({})

  return (
    <GlobalContext.Provider
      value={{
        user: currentUser,
        loading: isLoading,
        setUser: setCurrentUser,
        setLoading: setIsLoading,
        articles,
        setArticles,
        mappedArticles,
        setMappedArticles
      }}>
      {props.children}
    </GlobalContext.Provider>
  )
}
