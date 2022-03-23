import { AvatarDto } from './avatar-dto'
import { PullRequestsDto } from './pull-requests-dto'
import { RepositoryLinksDto } from './repository-links-dto'
import { SelfDto } from './self-dto'
import { StatusesDto } from './statuses-dto'
import { ThreadsDto } from './threads-dto'
import { WebDto } from './web-dto'

export class LinksDto {
  avatar: AvatarDto
  pullRequests: PullRequestsDto
  repository: RepositoryLinksDto
  self: SelfDto
  statuses: StatusesDto
  threads: ThreadsDto
  web: WebDto
}
