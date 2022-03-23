import axios from 'axios'
import { DiscordDto } from './dtos/discord-dto'

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

export { send }
