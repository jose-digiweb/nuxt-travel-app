import { auth } from '../../app/lib/auth'
import env from '../../app/lib/env'

export default defineEventHandler((event) => {
  console.log('EBV ==>> ', env.AUTH_GITHUB_CLIENT_ID)
  return auth.handler(toWebRequest(event))
})
