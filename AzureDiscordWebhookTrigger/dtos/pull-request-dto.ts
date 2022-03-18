import { CompletionOptionsDto } from './completion-options-dto'
import { CreatedByDto } from './created-by-dto'
import { LastMergeCommitDto } from './last-merge-commit-dto'
import { LastMergeSourceCommitDto } from './last-merge-source-commit-dto'
import { LastMergeTargetCommitDto } from './last-merge-target-commit-dto'
import { ClosedByDto } from './closed-by-dto'
import { RepositoryDto } from './repository-dto'
import { ReviewerDto } from './reviewer-dto'

export class PullRequestDto {
  artifactId: string
  closedBy: ClosedByDto
  closedDate: string
  codeReviewId: number
  completionOptions: CompletionOptionsDto
  completionQueueTime: string
  createdBy: CreatedByDto
  creationDate: string
  description: string
  isDraft: boolean
  lastMergeCommit: LastMergeCommitDto
  lastMergeSourceCommit: LastMergeSourceCommitDto
  lastMergeTargetCommit: LastMergeTargetCommitDto
  mergeId: string
  mergeStatus: string
  pullRequestId: number
  repository: RepositoryDto
  reviewers: ReviewerDto
  sourceRefName: string
  status: string
  supportsIterations: boolean
  targetRefName: string
  title: string
  url: string
}
