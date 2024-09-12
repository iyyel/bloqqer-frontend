interface Post {
  id: string
  bloqId: string
  authorId: string
  title: string
  description: string
  Content: string
  isPublished: boolean
  published?: Date
  reactions?: Reaction[]
}