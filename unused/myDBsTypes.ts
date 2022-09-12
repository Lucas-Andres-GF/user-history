export type DBRule = {
  id: string,
  storie_id: string,
  description: string
}
export type DBScenarie = {
  id: string,
  user_id: string,
  storie_id: string,
  title: string,
  context: string,
  event: string,
  response: string
}
export type DBStorie = {
  id: string,
  user_id: string,
  slug: string,
  name: string,
  title: string,
  color: string,
  system_id: string
}
export type DBSystem = {
  id: string,
  user_id: string,
  slug: string,
  name: string,
  description: string
}
