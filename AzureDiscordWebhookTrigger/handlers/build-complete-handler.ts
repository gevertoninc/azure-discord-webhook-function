import { envs } from '../app.env'
import { AzureEventDto } from '../dtos/azure-dto'
import { DiscordDto } from '../dtos/discord-dto'
import { send } from '../output'
import { AzureEventHandler } from './azure-event-handler'

const handleBuildComplete: AzureEventHandler = async (
  azureEventDto: AzureEventDto
): Promise<void> => {
  const data: DiscordDto = {
    avatar_url: envs.AVATAR_URL,
    content: `Build do ${azureEventDto.resource.definition.name} terminou com status ${azureEventDto.resource.status} - culpa do ${azureEventDto.resource.requests[0].requestedFor.displayName}`,
    username: envs.DISCORD_USERNAME
  }

  await send(envs.BUILD_URL, data)
}

export { handleBuildComplete }
