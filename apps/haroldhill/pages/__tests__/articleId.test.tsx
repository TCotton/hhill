import articleId from '../[articleId]'

// TODO fix this test - old fashioned way of testing
describe('articleId', () => {
  const params = { articleId: 'test' }
  it('should should not return undefined', () => {
    const result = articleId(params)
    expect(result).not.toBeUndefined()
  })
})
