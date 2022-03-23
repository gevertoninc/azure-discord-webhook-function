import { LinksDto } from './links-dto'

export class AuthorDto {
  date: Date
  descriptor: string
  displayName: string
  email: string
  id: string
  imageUrl: string
  _links: LinksDto
  name: string
  uniqueName: string
  url: string
}
