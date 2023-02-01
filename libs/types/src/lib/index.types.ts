import { IChapters, IChaptersFields, IPagesFields, IPages } from './contentful'

export interface IArticle {
  includes?: {
    Entry: {
      fields: IPagesFields
      metadata: {
        tags: []
      }
      sys: IPages | IChapters
    }
  }
  limit: number
  skip: number
  sys?: { type: string }
  items: [
    {
      fields: IChaptersFields
      metadata: {
        tags: []
      }
      sys: IPages | IChapters
    }
  ]
}
