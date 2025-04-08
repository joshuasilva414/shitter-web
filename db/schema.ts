import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const users = sqliteTable("users", {
  id: int().primaryKey({ autoIncrement: true }),
  clerk_id: text().notNull(),
  name: text().notNull(),
  email: text().notNull().unique(),
});

export const posts = sqliteTable("posts", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  content: text().notNull(),
  user_id: int()
    .notNull()
    .references(() => users.id),
  createdAt: int({ mode: "timestamp_ms" })
    .notNull()
    .default(sql`current_timestamp`),
});
