import { envs } from '../app.env'
import { AzureEventDto } from '../dtos/azure-dto'
import { DiscordDto } from '../dtos/discord-dto'
import { send } from '../output'
import { getValueOrEmptyString } from '../utils'
import { AzureEventHandler } from './azure-event-handler'

const handleWorkItemUpdate: AzureEventHandler = async (
  azureEventDto: AzureEventDto
): Promise<void> => {
  const data: DiscordDto = {
    avatar_url: envs.AVATAR_URL,
    content: `Task: ${azureEventDto.resource.workItemId}\nStatus de origem : ${
      azureEventDto.resource.fields['System.State'].oldValue
    }\nStatus de destino: ${
      azureEventDto.resource.fields['System.State'].newValue
    }\nResponsável: ${getValueOrEmptyString(
      azureEventDto.resource.revision.fields['System.AssignedTo']
    )}`,
    username: envs.DISCORD_USERNAME
  }

  await send(envs.WORK_ITEM_UPDATE_URL, data)
}

export { handleWorkItemUpdate }
