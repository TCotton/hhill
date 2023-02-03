const findParent = (id: string, result): string => {
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

export default findParent
