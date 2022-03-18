import { EmbedDto } from './embed-dto'

export type DiscordDataDto = {
  avatar_url?: string
  content?: string
  embeds?: EmbedDto[]
  username?: string
}
