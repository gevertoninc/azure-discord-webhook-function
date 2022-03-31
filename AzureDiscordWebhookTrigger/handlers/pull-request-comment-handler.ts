import { envs } from '../app.env'
import { AzureEventDto } from '../dtos/azure-dto'
import { DiscordDto } from '../dtos/discord-dto'
import { send } from '../output'
import { AzureEventHandler } from './azure-event-handler'

const handlePullRequestComment: AzureEventHandler = async (
  azureEventDto: AzureEventDto
): Promise<void> => {
  const [, url] = azureEventDto.message.html.split('"')

  const data: DiscordDto = {
    avatar_url: envs.AVATAR_URL,
    content: `${azureEventDto.resource.comment.author.displayName} comentou na PR ${azureEventDto.resource.pullRequest.pullRequestId}: ${azureEventDto.resource.comment.content} - link: ${url}`,
    username: envs.DISCORD_USERNAME
  }

  await send(envs.PULLREQUEST_URL, data)
}

export { handlePullRequestComment }
