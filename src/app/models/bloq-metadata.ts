interface BloqMetadata {
  id: string
  authorId: string
  authorFirstName: string
  authorMiddleName: string
  authorLastName: string
  title: string
  description: string
  isPrivate: boolean
  isPublished: boolean
  published?: Date
  postCount: number
  reactionCount: number
}