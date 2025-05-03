import { int, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { user } from './auth'
import { location } from './location'

export const locationLog = sqliteTable('locationLog', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
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
  startedAt: int().notNull(),
  endedAt: int().notNull(),
  locationId: int()
    .notNull()
    .references(() => location.id),
  userId: int()
    .notNull()
    .references(() => user.id),
})
