import { authClient } from '~/lib/authClient'

export default defineNuxtRouteMiddleware(async (to) => {
  const { data: session } = await authClient.useSession(useFetch)
  if (!session.value?.user && to.path === '/dashboard') {
    return navigateTo('/')
  }
})
