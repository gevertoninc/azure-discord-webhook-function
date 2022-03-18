import { AuthorDto } from './author-dto'
import { CommitterDto } from './committer-dto'

export class LastMergeCommitDto {
  author: AuthorDto
  comment: string
  commentTruncated: boolean
  commitId: string
  committer: CommitterDto
  url: string
}
