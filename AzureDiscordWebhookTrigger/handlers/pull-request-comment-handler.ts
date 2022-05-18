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
    content: `Comentário: ${azureEventDto.resource.comment.content}\nComentarista: ${azureEventDto.resource.comment.author.displayName}\nPR: ${azureEventDto.resource.pullRequest.pullRequestId}\nURL: ${url}`,
    username: envs.DISCORD_USERNAME
  }

  await send(envs.PULLREQUEST_URL, data)
}

export { handlePullRequestComment }
