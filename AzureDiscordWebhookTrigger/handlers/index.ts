import { EventType } from '../event-type'
import { AzureEventHandler } from './azure-event-handler'
import { handleBuildComplete } from './build-complete-handler'
import { handlePullRequestComment } from './pull-request-comment-handler'
import { handlePullRequestCreated } from './pull-request-created-handler'
import { handleWorkItemUpdate } from './work-item-update-handler'

const handlers: Record<EventType, AzureEventHandler> = {
  'build.complete': handleBuildComplete,
  'git.pullrequest.created': handlePullRequestCreated,
  'ms.vss-code.git-pullrequest-comment-event': handlePullRequestComment,
  'workitem.updated': handleWorkItemUpdate
}

export { handlers }
