export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()
  if (!auth?.user && to.path === '/dashboard') {
    return navigateTo('/')
  }
})
