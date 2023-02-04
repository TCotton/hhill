export declare module 'rehype-add-classes' {
  import { Plugin } from 'unified'

  interface Options {
    [key: string]: string | string[]
  }

  const plugin: Plugin<[Options?]>

  export default plugin
}

export declare module 'remark-gfm' {
  import { Plugin } from 'unified'

  const plugin: Plugin

  export default plugin
}
