interface Bloq {
  bloqId: string
  authorId: string
  title: string
  description: string
  isPrivate: boolean
  isPublished: boolean
  published?: Date
  posts?: Post[]
  reactions?: Reaction[]
}