import { auth } from '../../app/lib/auth'

export default defineEventHandler(async (event) => {
  const session = await auth.api.getSession({
    headers: event.headers,
  })

  if (!session?.user && event.path.startsWith('/dashboard')) {
    await sendRedirect(event, '/', 302)
  }
})
