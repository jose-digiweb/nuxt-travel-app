import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { user } from './auth'
import { locationLog } from './locationLog'

export const locationLogImage = sqliteTable('locationLogImage', {
  id: int().primaryKey({ autoIncrement: true }),
  key: text().notNull(),
  createApp: int()
    .notNull()
    .$default(() => Date.now()),
  updateAt: int()
    .notNull()
    .$default(() => Date.now())
    .$onUpdate(() => Date.now()),
  locationLogId: int()
    .notNull()
    .references(() => locationLog.id),
  userId: int()
    .notNull()
    .references(() => user.id),
})
