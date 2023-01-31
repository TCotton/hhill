import navigationArticlesFilter from '../navigationArticlesFilter'
describe('navigationArticlesFilter', () => {
  it('should not return undefined', () => {
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
    const result = navigationArticlesFilter(
      dummyData,
      'next',
      'H1Omej68TZxpk9JFIhmWQ'
    )
    expect(result).not.toBeUndefined()
  })
  it('should return the next article', () => {
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
    const result = navigationArticlesFilter(
      dummyData,
      'next',
      'H1Omej68TZxpk9JFIhmWQ'
    )
    expect(result.id).toBe('3')
  })
  it('should return the previous article', () => {
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
    const result = navigationArticlesFilter(
      dummyData,
      'previous',
      'H1Omej68TZxpk9JFIhmWQ'
    )
    expect(result.id).toBe('1')
  })
  it('should return undefined if there is no previous article', () => {
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
    const result = navigationArticlesFilter(dummyData, 'previous', '1')
    expect(result).toBeUndefined()
  })
  it('should return undefined if there is no next article', () => {
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
    const result = navigationArticlesFilter(dummyData, 'next', '3')
    expect(result).toBeUndefined()
  })
  it('should return undefined if there is no article', () => {
    const dummyData = {
      items: [
        {
          fields: {
            title: 'title',
            slug: 'slug' // no pages
          }
        }
      ]
    }
    const result = navigationArticlesFilter(dummyData, 'next', '3')
    expect(result).toBeUndefined()
  })
})
