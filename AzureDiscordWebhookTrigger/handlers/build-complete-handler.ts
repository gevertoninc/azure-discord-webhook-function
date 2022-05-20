import { envs } from '../app.env'
import { AzureEventDto } from '../dtos/azure-dto'
import { send } from '../output'
import { getColorByStatus } from '../utils'
import { AzureEventHandler } from './azure-event-handler'

const handleBuildComplete: AzureEventHandler = async (
  azureEventDto: AzureEventDto
): Promise<void> => {
  await send(envs.BUILD_URL, {
    avatar_url: envs.AVATAR_URL,
    embeds: [
      {
        author: {
          icon_url: 'https://picsum.photos/200',
          name: azureEventDto.resource.requests[0].requestedFor.displayName
        },
        color: getColorByStatus(azureEventDto.resource.status),
        description: azureEventDto.resource.definition.name,
        title: azureEventDto.resource.status,
        type: 'rich'
      }
    ],
    username: envs.DISCORD_USERNAME
  })
}

export { handleBuildComplete }
