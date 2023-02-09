import fetch from 'isomorphic-unfetch'

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message
  return String(error)
}
const fetchWithErrorHandle = async (uri) => {
  try {
    const content = await fetch(uri)
    return await content.json()
  } catch (err) {
    throw new Error(getErrorMessage(err))
  }
}

export default fetchWithErrorHandle
