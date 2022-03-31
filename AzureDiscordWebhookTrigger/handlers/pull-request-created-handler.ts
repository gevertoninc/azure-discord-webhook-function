import { envs } from '../app.env'
import { AzureEventDto } from '../dtos/azure-dto'
import { DiscordDto } from '../dtos/discord-dto'
import { send } from '../output'
import { getSimpleBranchNames } from '../utils'
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
    content: `PR da ${source} para a ${target} do ${azureEventDto.resource.repository.name} criada pelo ${azureEventDto.resource.createdBy.displayName} - título: ${azureEventDto.resource.title}, descrição: ${azureEventDto.resource.description}, URL: ${azureEventDto.resource._links.web.href}`,
    username: envs.DISCORD_USERNAME
  }

  await send(envs.PULLREQUEST_URL, data)
}

export { handlePullRequestCreated }
