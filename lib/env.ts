// import { z } from 'zod'
// import { tryParseEnvZod } from './tryParseEnvZod'

// const EnvSchema = z.object({
//   NODE_ENV: z.enum(['development', 'production']),
//   TURSO_DATABASE_URL: z.string(),
//   TURSO_AUTH_TOKEN: z.string(),
//   BETTER_AUTH_SECRET: z.string(),
//   BETTER_AUTH_URL: z.string(),
//   AUTH_GITHUB_CLIENT_ID: z.string(),
//   AUTH_GITHUB_CLIENT_SECRET: z.string(),
// })

// export type EnvSchemaType = z.infer<typeof EnvSchema>

// tryParseEnvZod(EnvSchema)

// export default EnvSchema.parse(process.env)
