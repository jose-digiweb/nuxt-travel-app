import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: './lib/db/migrations',
  schema: './lib/db/schema/index.ts',
  dialect: 'turso',
  casing: 'snake_case',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL || '',
    authToken: process.env.NODE_ENV === 'development' ? undefined : process.env.TURSO_AUTH_TOKEN,
  },
})
