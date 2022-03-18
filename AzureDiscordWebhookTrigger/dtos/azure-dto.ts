import { EventTypes } from '../event-types'
import { MessageDto } from './message-dto'
import { ResourceContainerDto } from './resource-container-dto'
import { ResourceDto } from './resource-dto'

export class AzureDto {
  createdDate: Date
  detailedMessage: MessageDto
  eventType: EventTypes
  id: string
  message: MessageDto
  notificationId: number
  publisherId: string
  resource: ResourceDto
  resourceContainers: ResourceContainerDto
  resourceVersion: string
  subscriptionId: string
}
