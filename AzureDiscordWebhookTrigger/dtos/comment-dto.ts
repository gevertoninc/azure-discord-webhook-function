import { AuthorDto } from './author-dto'
import { LinksDto } from './links-dto'

export class CommentDto {
  author: AuthorDto
  commentType: string
  content: string
  id: number
  lastContentUpdatedDate: string
  lastUpdatedDate: string
  _links: LinksDto
  parentCommentId: number
  publishedDate: string
  usersLiked: []
}
