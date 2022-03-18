import { envs } from '../app.env'
import { AzureEventDto } from '../dtos/azure-dto'
import { DiscordDataDto } from '../dtos/discord-data-dto'
import { send } from '../output'
import { getColor } from '../utils'
import { AzureEventHandler } from './azure-event-handler'

const handleBuildComplete: AzureEventHandler = async (
  azureEventDto: AzureEventDto
): Promise<void> => {
  const data: DiscordDataDto = {
    avatar_url:
      'https://pbs.twimg.com/profile_images/334447130/FDC_400x400.jpg',
    embeds: [
      {
        author: {
          name: azureEventDto.resource.requests[0].requestedFor.displayName
        },
        color: getColor(azureEventDto.resource.status),
        description: azureEventDto.resource.definition.name,
        title: azureEventDto.resource.status
      }
    ],
    username: 'Mensageiro do apocalipse'
  }

  await send(envs.BUILD_URL, data)
}

export { handleBuildComplete }
