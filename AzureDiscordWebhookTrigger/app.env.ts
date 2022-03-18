import { config } from 'dotenv'

config()

const envs = {
  BASIC_AUTHORIZATION_PASSWORD: process.env.BASIC_AUTHORIZATION_PASSWORD,
  BASIC_AUTHORIZATION_USERNAME: process.env.BASIC_AUTHORIZATION_USERNAME,
  BUILD_URL: process.env.BUILD_URL,
  PULLREQUEST_URL: process.env.PULLREQUEST_URL,
  WORK_ITEM_UPDATE_URL: process.env.WORK_ITEM_UPDATE_URL
}

export { envs }
