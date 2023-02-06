declare module 'rehype-add-classes' {
  import { Plugin } from 'unified'

  interface Options {
    [key: string]: string | string[]
  }

  const plugin: Plugin<[Options?]>

  export default plugin
}

declare module 'remark-gfm' {
  import { Plugin } from 'unified'

  const plugin: Plugin

  export default plugin
}

declare module 'nextjs-url' {
  export const getDomain: () => string
  export const getProtocol: () => string
  export const getHost: () => string
  export const getOrigin: () => string
  export const getPort: () => string
  export const getBasePath: () => string
  export const getBaseUrl: () => string
  export const getFullUrl: () => string
  export const getFullUrlWithBasePath: () => string
  export const getApiRoot: () => {
    url: string
    href: string
  }
}
