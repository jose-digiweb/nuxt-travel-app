import { auth } from '~/lib/auth'
import db from '~/lib/db'
import { InsertLocationSchema, location } from '../../app/lib/db/schema'

export default defineEventHandler(async (event) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const validateBody = await readValidatedBody(event, InsertLocationSchema.safeParse)

  if (!validateBody.success) {
    return sendError(
      event,
      createError({
        statusCode: 422,
        statusMessage: validateBody.error.issues
          .map((issue) => `${issue.path.join('')}: ${issue.message}`)
          .join('; '),
        data: validateBody.error.issues.reduce(
          (errors, issue) => {
            errors[issue.path.join('')] = issue.message
            return errors
          },
          {} as Record<string, string>
        ),
      })
    )
  }

  const session = await auth.api.getSession(event)

  if (!session?.user) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: 'Unauthorized',
      })
    )
  }

  const createdLocation = await db
    .insert(location)
    .values({
      ...validateBody.data,
      userId: Number(session.user.id),
      slug: validateBody.data.name.toLowerCase().replaceAll(' ', '-').toLowerCase(),
    })
    .returning()

  return createdLocation
})
