import { HttpRequest } from '@azure/functions'
import { envs } from './app.env'
import { constants } from './constants'

const isRequestAuthorized = ({
  request
}: {
  request: HttpRequest
}): { body: string; status: number } => {
  const authorizationHeader: string = request.headers['authorization']

  if (!authorizationHeader) {
    return {
      body: 'Header Authorization ausente',
      status: constants.httpUnauthorizedStatus
    }
  }

  const [authorizationType, authorizationValue] = authorizationHeader.split(' ')

  if (authorizationType !== 'Basic') {
    return {
      body: `Autorização tipo Basic ausente. Valor do cabeçalho authorization: ${authorizationHeader}`,
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
