import { envs } from '../app.env'
import { AzureEventDto } from '../dtos/azure-dto'
import { DiscordDataDto } from '../dtos/discord-data-dto'
import { send } from '../output'
import { valueOrEmptyString } from '../utils'
import { AzureEventHandler } from './azure-event-handler'

const handleWorkItemUpdate: AzureEventHandler = async (
  azureEventDto: AzureEventDto
): Promise<void> => {
  const data: DiscordDataDto = {
    avatar_url:
      'https://pbs.twimg.com/profile_images/334447130/FDC_400x400.jpg',
    content: `Task: ${azureEventDto.resource.workItemId}\nStatus de origem : ${
      azureEventDto.resource.fields['System.State'].oldValue
    }\nStatus de destino: ${
      azureEventDto.resource.fields['System.State'].newValue
    }\nResponsável: ${valueOrEmptyString(
      azureEventDto.resource.revision.fields['System.AssignedTo']
    )}`,
    username: 'Mensageiro do apocalipse'
  }

  await send(envs.WORK_ITEM_UPDATE_URL, data)
}

export { handleWorkItemUpdate }
