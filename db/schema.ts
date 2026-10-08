import { date, integer, numeric, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const student = pgTable("student", {
    id: uuid("id").notNull(),
    name: text("name").notNull(),
    email: text("email").unique().notNull(),
    rollno: numeric("rollno").notNull(),
    division: varchar("division", { length: 1 }),
    standerd: integer("standerd").notNull(),
    role: text("role").default("student"),
    dateOfBirth: date("date_of_birth"),
})

export const teacher = pgTable("teacher", {
    id: uuid().notNull(),
    name: text("name").notNull(),
    email: text("email").unique().notNull(),
    division: varchar("division", { length: 1 }),
    standerd: integer("standerd").notNull(),
    subject: text("subject").notNull(),
    role: text("role").default("teacher"),
    joiningDate: date("created_at").notNull(),
    dateOfBirth: date("date_of_birth"),
})

export const admin = pgTable("admin", {
    id: uuid().notNull(),
    name: text("name").notNull(),
    email: text("email").unique().notNull(),
    role: text("role").default("admin"),
})