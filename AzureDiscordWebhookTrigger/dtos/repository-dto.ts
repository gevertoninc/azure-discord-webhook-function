import { ProjectDto } from './project-dto'

export class RepositoryDto {
  id: string
  isDisabled: boolean
  name: string
  project: ProjectDto
  remoteUrl: string
  size: number
  sshUrl: string
  url: string
  webUrl: string
}
