import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { createAuthMiddleware } from 'better-auth/plugins'
import db from './db'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'sqlite',
  }),
  advanced: {
    generateId: false,
  },
  socialProviders: {
    github: {
      clientId: process.env.AUTH_GITHUB_CLIENT_ID || '',
      clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET || '',
    },
  },
  hooks: {
    // biome-ignore lint/suspicious/useAwait: <skip>
    after: createAuthMiddleware(async (ctx) => {
      if (ctx.path === '/get-session') {
        if (!ctx.context.session) {
          return {
            session: null,
            user: null,
          }
        }
        return ctx.json(ctx.context.session)
      }
    }),
  },
})
