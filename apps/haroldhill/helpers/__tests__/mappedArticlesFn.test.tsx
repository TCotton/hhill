import mappedArticlesFn from '../mappedArticlesFn'

describe('navigationArticlesFilter', () => {
  it('should return an array of articles', () => {
    const dummyData = {
      items: [
        {
          fields: {
            title: 'title',
            slug: 'slug',
            pages: [
              {
                sys: {
                  id: '1'
                },
                fields: {
                  title: 'title',
                  slug: 'slug',
                  contentRichText: 'contentRichText'
                }
              },
              {
                sys: {
                  id: 'H1Omej68TZxpk9JFIhmWQ'
                },
                fields: {
                  title: 'title',
                  slug: 'slug',
                  contentRichText: 'contentRichText'
                }
              },
              {
                sys: {
                  id: '3'
                },
                fields: {
                  title: 'title',
                  slug: 'slug',
                  contentRichText: 'contentRichText'
                }
              }
            ]
          }
        }
      ]
    }
    const result = mappedArticlesFn(dummyData)
    expect(result).toBeDefined()
  })

  it('should return correctly defined object', function () {
    const dummyData = {
      items: [
        {
          fields: {
            title: 'title',
            slug: 'slug',
            pages: [
              {
                sys: {
                  id: '1'
                },
                fields: {
                  title: 'title',
                  slug: 'slug',
                  contentRichText: 'contentRichText'
                }
              },
              {
                sys: {
                  id: 'H1Omej68TZxpk9JFIhmWQ'
                },
                fields: {
                  title: 'title',
                  slug: 'slug',
                  contentRichText: 'contentRichText'
                }
              },
              {
                sys: {
                  id: '3'
                },
                fields: {
                  title: 'title',
                  slug: 'slug',
                  contentRichText: 'contentRichText'
                }
              }
            ]
          }
        }
      ]
    }
    const result = mappedArticlesFn(dummyData)
    expect(result).toEqual([
      {
        title: 'title',
        slug: 'slug',
        pages: [
          {
            title: 'title',
            slug: 'slug',
            contentRichText: 'contentRichText',
            fullSlug: 'slug-1',
            id: '1'
          },
          {
            title: 'title',
            slug: 'slug',
            contentRichText: 'contentRichText',
            fullSlug: 'slug-H1Omej68TZxpk9JFIhmWQ',
            id: 'H1Omej68TZxpk9JFIhmWQ'
          },
          {
            title: 'title',
            slug: 'slug',
            contentRichText: 'contentRichText',
            fullSlug: 'slug-3',
            id: '3'
          }
        ]
      }
    ])
  })

  it('should return defined if dummyData is malformed', function () {
    const dummyData = {
      items: [
        {
          fields: {
            title: 'title',
            slug: 'slug'
          }
        }
      ]
    }
    const result = mappedArticlesFn(dummyData)
    expect(result).toBeDefined()
  })
})
