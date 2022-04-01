import { EventType } from '../event-type'
import { AzureEventHandler } from './azure-event-handler'
import { handleBuildComplete } from './build-complete-handler'
import { handlePullRequestComment } from './pull-request-comment-handler'
import { handlePullRequestCreated } from './pull-request-created-handler'
import { handleWorkItemUpdate } from './work-item-update-handler'

const handlers: Record<EventType, AzureEventHandler> = {
  [EventType.BUILD_COMPLETE]: handleBuildComplete,
  [EventType.PULL_REQUEST_COMMENT]: handlePullRequestComment,
  [EventType.PULL_REQUEST_CREATED]: handlePullRequestCreated,
  [EventType.WORK_ITEM_UPDATE]: handleWorkItemUpdate
}

export { handlers }
