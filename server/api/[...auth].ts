import { auth } from '../../app/lib/auth'

export default defineEventHandler((event) => {
  const env = process.env.AUTH_GITHUB_CLIENT_ID
  console.log('EBV ==>> ', env)
  return auth.handler(toWebRequest(event))
})
