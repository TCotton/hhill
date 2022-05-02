import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document, BLOCKS } from '@contentful/rich-text-types'
import { IDynamicComponent } from '@haroldhill/contentful'
import { Asset } from 'contentful'

import { mockComponents } from './mockComponents'

interface ContentfulRichTextProps {
  content: Document
}

export const ContentfulRichText = ({ content }: ContentfulRichTextProps) => {
  return (
    <div>
      {documentToReactComponents(content, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const asset = node.data.target as Asset
            const {
              description,
              file: { contentType, url }
            } = asset.fields

            if (['image/jpeg'].includes(contentType)) {
              // eslint-disable-next-line @next/next/no-img-element
              return <img src={url} alt={description} />
            }

            return null
          },
          [BLOCKS.EMBEDDED_ENTRY]: (node) => {
            const contentType = node.data.target.sys.contentType.sys.id
            if (contentType === 'dynamicComponent') {
              const dynamicComponent = node.data.target as IDynamicComponent
              const { component, content, props } = dynamicComponent.fields
              const Component = mockComponents[component]

              return <Component {...props}>{content}</Component>
            }

            return `Embeded Component: ${contentType}`
          }
        }
      })}
    </div>
  )
}
