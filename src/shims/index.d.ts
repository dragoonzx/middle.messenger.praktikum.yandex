declare module '*.svg' {
  const imageContent: unknown
  export default imageContent
}

declare module '*.png' {
  const imageContent: unknown
  export default imageContent
}

declare module 'pug' {
  const pug: {
    render(template: string): string
  }
  export default pug
}
