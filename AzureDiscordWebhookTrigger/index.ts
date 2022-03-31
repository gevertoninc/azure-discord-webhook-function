import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { plainToClass } from 'class-transformer'
import { AzureEventDto } from './dtos/azure-dto'
import { handlers } from './handlers'

const discordWebhook: AzureFunction = async (
  context: Context,
  req: HttpRequest
): Promise<void> => {
  const azureEventDto: AzureEventDto = plainToClass(AzureEventDto, req.body)

  await handlers[azureEventDto.eventType](azureEventDto)

  context.res = { body: 'Dorime' }
}

export default discordWebhook
