import axios from 'axios'
import { constants } from './constants'
import { DiscordDto } from './dtos/discord-dto'
import { ErrorDto } from './error-dto'

const send = async (url: string, data: DiscordDto): Promise<void> => {
  try {
    await axios.post(url, data)
  } catch (error: unknown) {
    return parseAndThrowError(error)
  }
}

const parseAndThrowError = (error: unknown): never => {
  throw parseError(error)
}

const parseError = (error: unknown): ErrorDto => {
  if (axios.isAxiosError(error)) {
    const {
      response: { data, status, statusText }
    } = error

    const outputError: ErrorDto = { data, status, statusText }

    console.error(outputError)

    return outputError
  }

  console.error(error)

  return {
    data: error,
    status: constants.httpInternalServerErrorStatus,
    statusText: constants.httpInternalServerErrorStatusText
  }
}

export { send }
