import { ColorEnum } from '../colors'
import { constants } from '../constants'
import { StatusType } from '../types/status-types'

const getColorByStatus = (status: StatusType): ColorEnum => {
  switch (status) {
    case 'failed':
      return ColorEnum.RED
    case 'partiallySucceeded':
      return ColorEnum.YELLOW
    case 'stopped':
      return ColorEnum.WHITE
    case 'succeeded':
      return ColorEnum.GREEN
  }
}

const getSimpleBranchName = (fullBranchName: string) => {
  return fullBranchName.split(constants.branchNamePrefix)[1]
}

const getSimpleBranchNames = (fullBranchNames: string[]): string[] => {
  return fullBranchNames.map(getSimpleBranchName)
}

const getValueOrEmptyString = (value: unknown): string => {
  if (typeof value !== 'string') {
    return constants.emptyString
  }

  return value
}

export {
  getColorByStatus,
  getSimpleBranchName,
  getSimpleBranchNames,
  getValueOrEmptyString
}
