import { Context, HttpRequest } from '@azure/functions'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { constants } from './constants'
import { AzureEventDto } from './dtos/azure-dto'
import { isRequestAuthorized } from './guard'
import { handlers } from './handlers'
import { parseValidationErrorsOutput } from './handlers/validation-error-handler'

export default async (
  context: Context,
  request: HttpRequest
): Promise<void> => {
  const error = isRequestAuthorized({ request })

  if (error) {
    context.res = error

    return
  }

  const event = plainToClass(AzureEventDto, request.body)

  const validationErrors = await validate(event)

  if (validationErrors.length) {
    const validationErrorsOutput = parseValidationErrorsOutput(validationErrors)

    context.res = {
      body: validationErrorsOutput,
      status: constants.httpUnprocessableEntityStatus
    }

    return
  }

  try {
    await handlers[event.eventType](event)

    context.res = {
      body: 'Dorime',
      headers: { 'Content-Type': 'application/json' },
      status: constants.httpOkStatus
    }
  } catch (error) {
    context.res = {
      body: error,
      headers: { 'Content-Type': 'application/json' },
      status: error.status
    }
  }
}
