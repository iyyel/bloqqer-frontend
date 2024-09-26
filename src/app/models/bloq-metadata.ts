interface BloqMetadata {
  id: string
  authorId: string
  authorName: string
  title: string
  description: string
  isPublished: boolean
  published?: Date
  postCount: number
  reactionCount: number
  daysSinceCreation: number
}