import { authClient } from '../lib/authClient'

export const useAuthStore = defineStore('useAuthStore', () => {
  const session = authClient.useSession()

  const user = computed(() => session.value.data?.user)

  const loading = computed(() => session.value.isPending || session.value.isRefetching)

  const signIn = async () => {
    await authClient.signIn.social({
      provider: 'github',
      callbackURL: '/dashboard',
      errorCallbackURL: '/error',
    })
  }

  const signOut = async () => {
    await authClient.signOut()
    navigateTo('/')
  }

  return {
    user,
    signIn,
    signOut,
    loading: loading,
  }
})
