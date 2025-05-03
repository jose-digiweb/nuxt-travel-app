import { int, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { user } from './auth'

export const location = sqliteTable('location', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  slug: text().notNull().unique(),
  description: text().notNull(),
  lat: real().notNull(),
  long: real().notNull(),
  createApp: int()
    .notNull()
    .$default(() => Date.now()),
  updateAt: int()
    .notNull()
    .$default(() => Date.now())
    .$onUpdate(() => Date.now()),
  userId: int()
    .notNull()
    .references(() => user.id),
})
