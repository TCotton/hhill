import { Entry } from 'contentful'

export interface IChaptersFields {
  /** title */
  title?: string | undefined

  /** slug */
  slug?: string | undefined

  /** pages */
  pages: Entry<{ [fieldId: string]: unknown }>[]
}

export interface IChapters extends Entry<IChaptersFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'chapters'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface IPagesFields {
  /** Title */
  title?: string

  /** slug */
  slug?: string | undefined

  /** content rich text */
  contentRichText?: string

  newId?: number | undefined

  pages: Entry<{ [fieldId: string]: unknown }>[]

  id?: string
}

/** All pages here */

export interface IPages extends Entry<IPagesFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'pages'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export type CONTENT_TYPE = 'chapters' | 'pages'

export type IEntry = IChapters | IPages

export type LOCALE_CODE = 'en-US'

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US'

export interface IArticle {
  includes?: {
    Entry: [IPages | IChapters]
  }
  limit: number
  skip: number
  sys?: { type: string }
  items: [IPages | IChapters]
}
