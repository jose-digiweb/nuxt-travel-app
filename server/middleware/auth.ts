import 'dotenv/config'

import env from '../../app/lib/env'

export default defineEventHandler(() => {
  const envv = env.AUTH_GITHUB_CLIENT_ID
  console.log('Middleware ENVVVV ===>> ', envv)
})
