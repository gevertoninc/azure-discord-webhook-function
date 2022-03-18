import { DefinitionDto } from './definition-dto'
import { PersonDto } from './person-dto'
import { RequestDto } from './request-dto'

export class ResourceDto {
  buildNumber: string
  definition: DefinitionDto
  drop: object
  finishTime: Date
  id: number
  lastChangedBy: PersonDto
  log: object
  reason: string
  requests: RequestDto[]
  retainIndefinitely: boolean
  sourceGetVersion: string
  startTime: Date
  status: string
  uri: string
  url: string
}
