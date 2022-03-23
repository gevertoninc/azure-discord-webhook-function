import { EventType } from '../event-type'
import { DetailedMessageDto } from './detailed-message-dto'
import { MessageDto } from './message-dto'
import { ResourceContainerDto } from './resource-container-dto'
import { ResourceDto } from './resource-dto'

export class AzureDto {
  createdDate: Date
  detailedMessage: DetailedMessageDto
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
