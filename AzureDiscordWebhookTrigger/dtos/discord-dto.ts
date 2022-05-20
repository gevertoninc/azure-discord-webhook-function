import { EmbedDto } from './embed-dto'

export type DiscordDto = {
  avatar_url?: string
  content?: string
  embeds?: EmbedDto[]
  username?: string
}
