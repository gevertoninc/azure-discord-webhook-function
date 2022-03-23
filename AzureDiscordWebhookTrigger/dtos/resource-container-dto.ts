import { AccountDto } from './account-dto'
import { CollectionDto } from './collection-dto'
import { ProjectDto } from './project-dto'

export class ResourceContainerDto {
  account: AccountDto
  collection: CollectionDto
  project: ProjectDto
}
