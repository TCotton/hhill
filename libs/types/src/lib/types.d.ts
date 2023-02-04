declare module 'rehype-add-classes' {
  import { Plugin } from 'unified'

  interface Options {
    [key: string]: string | string[]
  }

  const plugin: Plugin<[Options?]>

  export default plugin
}
