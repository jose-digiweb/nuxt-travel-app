import { z } from "zod";
import { tryParseEnvZod } from "./tryParseEnvZod";

const EnvSchema = z.object({
    NODE_ENV: z.enum(["development", "production"]),
})


export type EnvSchemaType = z.infer<typeof EnvSchema>

tryParseEnvZod(EnvSchema)

export default EnvSchema.parse(process.env)
