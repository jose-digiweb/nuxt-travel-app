export default defineEventHandler(() => {
  const envv = process.env.AUTH_GITHUB_CLIENT_ID
  console.log('Middleware ENVVVV ===>> ', envv)
})
