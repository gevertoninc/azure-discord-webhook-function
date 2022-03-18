import { ColorEnum } from '../colors'
import { constants } from '../constants'
import { StatusType } from '../types/status-types'

const getColor = (status: StatusType): ColorEnum => {
  switch (status) {
    case 'failed':
      return ColorEnum.RED
    case 'partiallySucceeded':
      return ColorEnum.YELLOW
    case 'stopped':
      return ColorEnum.WHITE
    case 'succeeded':
      return ColorEnum.GREEN
    default:
      return ColorEnum.AQUA
  }
}

const simpleBranchName = (fullBranchName: string) => {
  return fullBranchName.split(constants.branchNamePrefix)[1]
}

const simpleBranchNames = (fullBranchNames: string[]): string[] => {
  return fullBranchNames.map(simpleBranchName)
}

const valueOrEmptyString = (value: unknown): string => {
  if (typeof value !== 'string') {
    return constants.emptyString
  }

  return value
}

export { getColor, simpleBranchName, simpleBranchNames, valueOrEmptyString }
