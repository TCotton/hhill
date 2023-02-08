import Navigation from '../Navigation'
import { render } from '@testing-library/react'
describe('Navigation', () => {
  const articles = [
    {
      title: 'title',
      slug: 'slug',
      pages: [
        {
          id: '1',
          title: 'page 1',
          slug: 'page-1',
          contentRichText: 'contentRichText'
        },
        {
          id: 'H1Omej68TZxpk9JFIhmWQ',
          title: 'page 2',
          slug: 'page-2',
          contentRichText: 'contentRichText'
        },
        {
          id: '3',
          title: 'page 3',
          slug: 'page-3',
          contentRichText: 'contentRichText'
        }
      ]
    }
  ]

  it('renders not return undefined', () => {
    const props = {
      articles: articles
    }
    const { baseElement } = render(<Navigation {...props} />)
    expect(baseElement).toBeDefined()
  })
  it('should create snapshot',  () => {
    const props = {
      articles: articles
    }
    const { asFragment } = render(<Navigation {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('should create snapshot when button clicked', () => {
    const props = {
      articles: articles
    }
    const { asFragment, getByTestId } = render(<Navigation {...props} />)
    const button = getByTestId('button')
    button.click()
    expect(asFragment()).toMatchSnapshot()
  })
  it('should include the correct number of articles', () => {
    const props = {
      articles: articles
    }
    const { getAllByTestId, getByTestId } = render(<Navigation {...props} />)
    const button = getByTestId('button')
    button.click()
    expect(getAllByTestId('article')).toHaveLength(1)
  })
  it('should include the correct number of pages', () => {
    const props = {
      articles: articles
    }
    const { getAllByTestId, getByTestId } = render(<Navigation {...props} />)
    const button = getByTestId('button')
    button.click()
    expect(getAllByTestId('page')).toHaveLength(3)
  })
  it('should be defined if articles is empty', () => {
    const props = {
      articles: []
    }
    const { baseElement } = render(<Navigation {...props} />)
    expect(baseElement).toBeDefined()
  })
  it('should be defined if pages is empty', () => {
    const props = {
      articles: [
        {
          title: 'title',
          slug: 'slug',
          pages: []
        }
      ]
    }

    const { baseElement } = render(<Navigation {...props} />)
    expect(baseElement).toBeDefined()
  })
  it('should be defined if pages is missing', () => {
    const props = {
      articles: [
        {
          title: 'title',
          slug: 'slug'
        }
      ]
    }

    const { baseElement } = render(<Navigation {...props} />)
    expect(baseElement).toBeDefined()
  })
})
