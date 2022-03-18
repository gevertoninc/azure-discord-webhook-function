import { LinksDto } from './links-dto'

export class ReviewerDto {
  displayName: string
  hasDeclined: boolean
  id: string
  imageUrl: string
  _links: LinksDto
  isFlagged: boolean
  reviewerUrl: string
  uniqueName: string
  url: string
  vote: number
}
