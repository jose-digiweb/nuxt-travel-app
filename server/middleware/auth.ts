export default defineEventHandler(() => {
  const env = process.env.AUTH_GITHUB_CLIENT_ID
  console.log('Middleware ENV ', env)
})
