import { IsEnum, ValidationArguments } from 'class-validator'
import { EventType } from '../event-type'
import { DetailedMessageDto } from './detailed-message-dto'
import { MessageDto } from './message-dto'
import { ResourceContainerDto } from './resource-container-dto'
import { ResourceDto } from './resource-dto'

export class AzureEventDto {
  createdDate: Date
  detailedMessage: DetailedMessageDto
  @IsEnum(EventType, {
    message: (validationArguments: ValidationArguments) => {
      return `Propriedade com valor ${
        validationArguments.value
      } deve possuir um dos seguintes valores: ${Object.values(
        validationArguments.constraints[0]
      ).join(', ')}`
    }
  })
  eventType: EventType
  id: string
  message: MessageDto
  notificationId: number
  publisherId: string
  resource: ResourceDto
  resourceContainers: ResourceContainerDto
  resourceVersion: string
  subscriptionId: string
}
