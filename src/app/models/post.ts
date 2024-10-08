interface Post {
  id: string
  bloqId: string
  authorId: string
  title: string
  description: string
  content: string
  isPublished: boolean
  published?: Date
  comments?: Comment[]
  reactions?: Reaction[]
}