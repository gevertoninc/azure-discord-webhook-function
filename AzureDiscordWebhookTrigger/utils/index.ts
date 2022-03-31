import { constants } from '../constants'

const getSimpleBranchName = (fullBranchName: string) => {
  return fullBranchName.split(constants.branchNamePrefix)[1]
}

const getSimpleBranchNames = (fullBranchNames: string[]): string[] => {
  return fullBranchNames.map(getSimpleBranchName)
}

export { getSimpleBranchName, getSimpleBranchNames }
