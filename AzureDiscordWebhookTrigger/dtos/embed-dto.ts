import { ColorEnum } from '../colors'
import { EmbedType } from '../types/embed-types'
import { AuthorDto } from './author-dto'
import { FieldDto } from './field-dto'
import { FooterDto } from './footer-dto'
import { ImageDto } from './image-dto'
import { ProviderDto } from './provider-dto'
import { ThumbnailDto } from './thumbnail-dto'
import { VideoDto } from './video-dto'

export type EmbedDto = {
  author?: AuthorDto
  color?: ColorEnum
  description?: string
  fields?: FieldDto[]
  footer?: FooterDto
  image?: ImageDto
  provider?: ProviderDto
  thumbnail?: ThumbnailDto
  timestamp?: string
  title?: string
  type?: EmbedType
  url?: string
  video?: VideoDto
}
