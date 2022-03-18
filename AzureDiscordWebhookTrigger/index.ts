import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import axios from 'axios'
import { plainToClass } from 'class-transformer'
import { envs } from './app.env'
import { constants } from './constants'
import { AzureDto } from './dtos/azure-dto'
import { DiscordDto } from './dtos/discord-dto'

const discordWebhook: AzureFunction = async (
  context: Context,
  req: HttpRequest
): Promise<void> => {
  const { body } = req

  const azureDto = plainToClass(AzureDto, body)

  const { eventType } = azureDto

  switch (eventType) {
    case 'build.complete':
      {
        const {
          resource: {
            definition: { name },
            requests,
            status
          }
        } = azureDto

        const [request] = requests

        const {
          requestedFor: { displayName }
        } = request

        const discordUrl = envs.BUILD_URL

        const data = {
          avatar_url: envs.AVATAR_URL,
          content: `Build do ${name} terminou com status ${status} - culpa do ${displayName}`,
          username: envs.DISCORD_USERNAME
        }

        await send(discordUrl, data)
      }

      break
    case 'git.pullrequest.created':
      {
        const {
          resource: {
            createdBy: { displayName },
            description,
            _links: {
              web: { href }
            },
            repository: { name },
            sourceRefName,
            targetRefName,
            title
          }
        } = body

        const getSimpleBranchName = fullBranchName =>
          fullBranchName.split(constants.branchNamePrefix)

        const [, source] = getSimpleBranchName(sourceRefName)
        const [, target] = getSimpleBranchName(targetRefName)

        const discordUrl = envs.PULLREQUEST_URL

        const data = {
          avatar_url: envs.AVATAR_URL,
          content: `PR da ${source} para a ${target} do ${name} criada pelo ${displayName} - título: ${title}, descrição: ${description}, URL: ${href}`,
          username: envs.DISCORD_USERNAME
        }

        await send(discordUrl, data)
      }

      break
    case 'ms.vss-code.git-pullrequest-comment-event': {
      const {
        message: { html },
        resource: {
          comment: {
            author: { displayName },
            content
          },
          pullRequest: { pullRequestId }
        }
      } = body

      const [, url] = html.split('"')

      const discordUrl = envs.PULLREQUEST_URL

      const data = {
        avatar_url: envs.AVATAR_URL,
        content: `${displayName} comentou na PR ${pullRequestId}: ${content} - link: ${url}`,
        username: envs.DISCORD_USERNAME
      }

      await send(discordUrl, data)
    }
  }

  const responseMessage = 'Dorime'

  context.res = { body: responseMessage }
}

const send = async (url: string, data: DiscordDto): Promise<void> => {
  try {
    await axios.post(url, data)
  } catch (error: unknown) {
    parseError(error)
  }
}

const parseError = (error: unknown): void => {
  if (axios.isAxiosError(error)) {
    const {
      response: { data, status, statusText }
    } = error

    const outputError = { data, status, statusText }

    console.error(outputError)
  }

  console.error(error)
}

export default discordWebhook
