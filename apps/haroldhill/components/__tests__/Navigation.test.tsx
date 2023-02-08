import Navigation from '../Navigation'
import { render, waitFor } from '@testing-library/react'
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
  it('should create snapshot', async () => {
    const props = {
      articles: articles
    }
    const { asFragment } = await render(<Navigation {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('should create snapshot when button clicked', async () => {
    const props = {
      articles: articles
    }
    const { asFragment, findByTestId } = render(<Navigation {...props} />)
    await waitFor(async () => {
      const button = await findByTestId('button')
      button.click()
    })
    expect(asFragment()).toMatchSnapshot()
  })
  it('should include the correct number of articles', async () => {
    const props = {
      articles: articles
    }
    const { findAllByTestId, findByTestId } = await render(
      <Navigation {...props} />
    )
    await waitFor(async () => {
      const button = await findByTestId('button')
      button.click()
      expect(await findAllByTestId('article')).toHaveLength(1)
    })
  })
  it('should include the correct number of pages', async () => {
    const props = {
      articles: articles
    }
    const { findAllByTestId, findByTestId } = await render(
      <Navigation {...props} />
    )
    await waitFor(async () => {
      const button = await findByTestId('button')
      button.click()
      expect(await findAllByTestId('page')).toHaveLength(3)
    })
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
