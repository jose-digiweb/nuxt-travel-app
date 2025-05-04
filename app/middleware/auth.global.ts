import { authClient } from '~/lib/authClient'

export default defineNuxtRouteMiddleware(async (to) => {
  const { data: session } = await authClient.useSession(useFetch)
  if (!session.value && to.path === '/dashboard') {
    return navigateTo('/')
  }
})
