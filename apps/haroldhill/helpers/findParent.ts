import {IChaptersFields, IPagesFields} from "@hhill/types";

const findParent = (
  id: string,
  result: { result: { mappedArticles: [IPagesFields] } }
): string => {
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
