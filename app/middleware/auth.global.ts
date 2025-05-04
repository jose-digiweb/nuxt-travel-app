import { createAuthClient } from 'better-auth/vue'

const authClient = createAuthClient()

export default defineNuxtRouteMiddleware(async (to) => {
  const { data: session } = await authClient.useSession(useFetch)
  if (!session.value && to.path === '/dashboard') {
    return navigateTo('/')
  }
})
