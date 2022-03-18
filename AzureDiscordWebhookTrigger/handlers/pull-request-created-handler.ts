import { envs } from '../app.env'
import { AzureEventDto } from '../dtos/azure-dto'
import { DiscordDataDto } from '../dtos/discord-data-dto'
import { send } from '../output'
import { simpleBranchNames, valueOrEmptyString } from '../utils'
import { AzureEventHandler } from './azure-event-handler'

export const handlePullRequestCreated: AzureEventHandler = async (
  event: AzureEventDto
): Promise<void> => {
  const repository = event.resource.repository.name

  if (repository.endsWith('-test')) {
    console.info(`Repository ${repository} skipped`)

    return
  }

  await send(envs.PULLREQUEST_URL, createDiscordData(event))
}

const createDiscordData = (event: AzureEventDto): DiscordDataDto => {
  const fullBranchNames = [
    event.resource.sourceRefName,
    event.resource.targetRefName
  ]

  const [source, target] = simpleBranchNames(fullBranchNames)

  return {
    avatar_url:
      'https://pbs.twimg.com/profile_images/334447130/FDC_400x400.jpg',
    content: `Origem: ${source}\nDestino: ${target}\nRepositório: ${
      event.resource.repository.name
    }\nCriador: ${event.resource.createdBy.displayName}\nTítulo: ${
      event.resource.title
    }\nDescrição: ${valueOrEmptyString(
      event.resource.description
    )}\nURL: ${valueOrEmptyString(event.resource._links.web.href)}`,
    username: 'Mensageiro do apocalipse'
  }
}
