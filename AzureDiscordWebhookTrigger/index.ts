import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { plainToClass } from 'class-transformer'
import { AzureEventDto } from './dtos/azure-dto'
import { isRequestAuthorized } from './guard'
import { handlers } from './handlers'

const input: AzureFunction = async (
  context: Context,
  req: HttpRequest
): Promise<void> => {
  const error = isRequestAuthorized(req)

  if (error) {
    context.res = error

    return
  }

  const azureEventDto: AzureEventDto = plainToClass(AzureEventDto, req.body)

  await handlers[azureEventDto.eventType](azureEventDto)

  context.res = { body: 'Dorime' }
}

export default input
