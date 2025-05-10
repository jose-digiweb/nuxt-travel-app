import { int, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { createInsertSchema } from 'drizzle-zod'
import { user } from './auth'

export const location = sqliteTable('location', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  slug: text().notNull().unique(),
  description: text().notNull(),
  lat: real().notNull(),
  long: real().notNull(),
  createdAt: int()
    .notNull()
    .$default(() => Date.now()),
  updatedAt: int()
    .notNull()
    .$default(() => Date.now())
    .$onUpdate(() => Date.now()),
  userId: int()
    .notNull()
    .references(() => user.id),
})

export const InsertLocationSchema = createInsertSchema(location, {
  name: (field) => field.min(1).max(100),
  description: (field) => field.max(1000),
  lat: (field) => field.min(-90).max(90),
  long: (field) => field.min(-180).max(180),
}).omit({
  id: true,
  slug: true,
  userId: true,
  updatedAt: true,
  createdAt: true,
})
