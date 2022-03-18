import { AzureEventDto } from '../dtos/azure-dto'

export type AzureEventHandler = (azureEventDto: AzureEventDto) => Promise<void>
