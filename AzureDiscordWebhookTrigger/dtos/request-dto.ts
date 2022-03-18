import { PersonDto } from './person-dto'

export class RequestDto {
  id: number
  requestedFor: PersonDto
  url: string
}
