import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { plainToClass } from 'class-transformer'
import { validate, ValidationError } from 'class-validator'
import { constants } from './constants'
import { AzureEventDto } from './dtos/azure-dto'
import { isRequestAuthorized } from './guard'
import { handlers } from './handlers'
import { parseValidationErrorsOutput } from './handlers/validation-error-handler'

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

  const validationErrors: ValidationError[] = await validate(azureEventDto)

  if (validationErrors.length) {
    const validationErrorsOutput = parseValidationErrorsOutput(validationErrors)

    context.res = {
      body: validationErrorsOutput,
      status: constants.httpUnprocessableEntityStatus
    }

    return
  }

  await handlers[azureEventDto.eventType](azureEventDto)

  context.res = { body: 'Dorime' }
}

export default input
