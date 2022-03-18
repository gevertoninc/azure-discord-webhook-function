import { envs } from '../app.env'
import { AzureEventDto } from '../dtos/azure-dto'
import { DiscordDataDto } from '../dtos/discord-data-dto'
import { send } from '../output'
import { valueOrEmptyString } from '../utils'
import { AzureEventHandler } from './azure-event-handler'

export const handlePullRequestComment: AzureEventHandler = async (
  event: AzureEventDto
): Promise<void> => {
  const repository = event.resource.pullRequest.repository.name

  if (repository.endsWith('-test')) {
    console.info(`Repository ${repository} skipped`)

    return
  }

  await send(envs.PULLREQUEST_URL, createDiscordData(event))
}

const createDiscordData = (event: AzureEventDto): DiscordDataDto => {
  return {
    avatar_url:
      'https://pbs.twimg.com/profile_images/334447130/FDC_400x400.jpg',
    embeds: [
      {
        author: { name: event.resource.comment.author.displayName },
        description: `${valueOrEmptyString(
          event.resource.comment.content
        )}\n\n${event.message.html.split('"')[1]}`,
        title: event.resource.pullRequest.title
      }
    ],
    username: 'Mensageiro do apocalipse'
  }
}
