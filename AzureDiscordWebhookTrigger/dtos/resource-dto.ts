import { StatusType } from '../types/status-types'
import { CommentDto } from './comment-dto'
import { CreatedByDto } from './created-by-dto'
import { DefinitionDto } from './definition-dto'
import { FieldsDto } from './fields-dto'
import { LastChangedByDto } from './last-changed-by-dto'
import { LastMergeCommitDto } from './last-merge-commit-dto'
import { LastMergeSourceCommitDto } from './last-merge-source-commit-dto'
import { LastMergeTargetCommitDto } from './last-merge-target-commit-dto'
import { LinksDto } from './links-dto'
import { PullRequestDto } from './pull-request-dto'
import { RepositoryDto } from './repository-dto'
import { RequestDto } from './request-dto'
import { ReviewerDto } from './reviewer-dto'
import { RevisionDto } from './revision-dto'

export class ResourceDto {
  artifactId: string
  buildNumber: string
  codeReviewId: number
  comment: CommentDto
  createdBy: CreatedByDto
  creationDate: string
  definition: DefinitionDto
  description?: string
  drop: object
  fields: FieldsDto
  finishTime: string
  id: number
  isDraft: boolean
  lastChangedBy: LastChangedByDto
  lastMergeCommit: LastMergeCommitDto
  lastMergeSourceCommit: LastMergeSourceCommitDto
  lastMergeTargetCommit: LastMergeTargetCommitDto
  _links: LinksDto
  log: object
  mergeId: string
  mergeStatus: string
  pullRequest: PullRequestDto
  pullRequestId: number
  reason: string
  repository: RepositoryDto
  requests: RequestDto[]
  retainIndefinitely: boolean
  reviewers: ReviewerDto[]
  revision: RevisionDto
  sourceGetVersion: string
  sourceRefName: string
  startTime: string
  status: StatusType
  supportsIterations: boolean
  targetRefName: string
  title: string
  uri: string
  url: string
  workItemId: string
}
