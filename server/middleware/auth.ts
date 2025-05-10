export default defineEventHandler((event) => {
  const cookies = getCookie(event, 'better-auth.session_token')

  if (event.path.startsWith('/dashboard') && !cookies) {
    sendRedirect(event, '/')
  }
})
