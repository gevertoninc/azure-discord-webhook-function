import { SystemAssignedToDto } from './system-assigned-to-dto'
import { SystemStateDto } from './system-state-dto'

export class FieldsDto {
  'System.AssignedTo': SystemAssignedToDto | string
  'System.State': SystemStateDto
}
