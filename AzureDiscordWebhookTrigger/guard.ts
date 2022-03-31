import { HttpRequest } from '@azure/functions'
import { envs } from './app.env'
import { constants } from './constants'

const isRequestAuthorized = (req: HttpRequest): { [key: string]: unknown } => {
  const authorizationHeader: string = req.headers['authorization']

  if (!authorizationHeader) {
    return {
      body: 'Autorização requerida',
      status: constants.httpUnauthorizedStatus
    }
  }

  const [authorizationType, authorizationValue] = authorizationHeader.split(' ')

  if (authorizationType !== 'Basic') {
    return {
      body: 'Autorização tipo Basic requerida',
      status: constants.httpUnauthorizedStatus
    }
  }

  const [username, password] = Buffer.from(authorizationValue, 'base64')
    .toString()
    .split(':')

  if (
    username !== envs.BASIC_AUTHORIZATION_USERNAME ||
    password !== envs.BASIC_AUTHORIZATION_PASSWORD
  ) {
    return {
      body: 'Autorização inválida',
      status: constants.httpUnauthorizedStatus
    }
  }
}

export { isRequestAuthorized }
