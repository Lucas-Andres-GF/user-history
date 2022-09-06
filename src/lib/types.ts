export type System = {
  id: string,
  title: string,
  description: string,
  histories: {
    slug: string,
    id: string,
    title: string,
    rules: string[],
    scenaries: {
      title: string,
      context: string,
      situation: string,
      response: string
    }[]
  }[]
}
