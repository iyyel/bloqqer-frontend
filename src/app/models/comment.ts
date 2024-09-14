interface Comment {
  id: string
  postId: string
  authorId: string
  bloqId: string
  content: string
  isPublished: boolean
  published?: Date
  reactions?: Reaction[]
}