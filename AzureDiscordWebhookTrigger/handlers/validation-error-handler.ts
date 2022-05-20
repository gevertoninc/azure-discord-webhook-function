import { ValidationError } from 'class-validator'
import { ValidationErrorsOutputDto } from '../dtos/validation-errors-output-dto'

const parseFieldErrors = (
  validationError: ValidationError
): ValidationErrorsOutputDto => {
  const validationErrorConstraints: string[] = Object.values(
    validationError.constraints
  )

  const reduceFieldErrorsConstraints = (
    currentFieldErrors: ValidationErrorsOutputDto,
    currentError: string
  ): ValidationErrorsOutputDto => {
    const { property } = validationError

    const currentPropertyAlreadyHasErrors: unknown =
      Object.prototype.hasOwnProperty.call(currentFieldErrors, property)

    if (currentPropertyAlreadyHasErrors) {
      return {
        ...currentFieldErrors,
        [property]: [...currentFieldErrors[property], currentError]
      }
    }

    return {
      ...currentFieldErrors,
      [property]: [currentError]
    }
  }

  return validationErrorConstraints.reduce(reduceFieldErrorsConstraints, {})
}

const parseValidationErrorsOutput = (
  validationErrors: ValidationError[]
): ValidationErrorsOutputDto[] => {
  return validationErrors.map(parseFieldErrors)
}

export { parseValidationErrorsOutput }
