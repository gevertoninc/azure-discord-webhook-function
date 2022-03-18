import { config } from 'dotenv'

config()

const envs = {
  AVATAR_URL: process.env.AVATAR_URL,
  BUILD_URL: process.env.BUILD_URL,
  DISCORD_USERNAME: process.env.DISCORD_USERNAME,
  PULLREQUEST_URL: process.env.PULLREQUEST_URL
}

export { envs }
