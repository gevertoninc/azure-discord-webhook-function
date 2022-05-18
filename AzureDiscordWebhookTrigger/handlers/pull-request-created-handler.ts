import { envs } from '../app.env'
import { AzureEventDto } from '../dtos/azure-dto'
import { DiscordDto } from '../dtos/discord-dto'
import { send } from '../output'
import { getSimpleBranchNames, getValueOrEmptyString } from '../utils'
import { AzureEventHandler } from './azure-event-handler'

const handlePullRequestCreated: AzureEventHandler = async (
  azureEventDto: AzureEventDto
): Promise<void> => {
  const fullBranchNames: string[] = [
    azureEventDto.resource.sourceRefName,
    azureEventDto.resource.targetRefName
  ]

  const [source, target] = getSimpleBranchNames(fullBranchNames)

  const data: DiscordDto = {
    avatar_url: envs.AVATAR_URL,
    content: `Origem: ${source}\nDestino: ${target}\nRepositório: ${
      azureEventDto.resource.repository.name
    }\nCriador: ${azureEventDto.resource.createdBy.displayName}\nTítulo: ${
      azureEventDto.resource.title
    }\nDescrição: ${getValueOrEmptyString(
      azureEventDto.resource.description
    )}\nURL: ${getValueOrEmptyString(azureEventDto.resource._links.web.href)}`,
    username: envs.DISCORD_USERNAME
  }

  await send(envs.PULLREQUEST_URL, data)
}

export { handlePullRequestCreated }
