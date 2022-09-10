export type HSLColor = `hsl(${number} ${number}% ${number}%)`;

export type Historie = {
  slug: string,
  id: string,
  title: string,
  color: HSLColor,
  rules: string[],
  scenaries: {
    title: string,
    context: string,
    situation: string,
    response: string
  }[]
}

export type CompactHistorie = {
  slug: string,
  id: string,
  title: string,
  color: HSLColor
}

export type System = {
  id: string,
  title: string,
  description: string,
  histories: Historie[]
}

export type CompactSystem = {
  id: string,
  title: string,
  description: string,
  histories: CompactHistorie[]
}
