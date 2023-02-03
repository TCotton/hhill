import findParent from '../findParent'

describe('findParent', () => {
  it('should return the parent title', () => {
    const result = {
      result: {
        mappedArticles: [
          {
            title: 'title',
            pages: [
              {
                id: 'id'
              }
            ]
          }
        ]
      }
    }
    const id = 'id'
    const expected = 'title'
    const actual = findParent(id, result)
    expect(actual).toEqual(expected)
  })
})
