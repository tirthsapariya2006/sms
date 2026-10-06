import { date, integer, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import { setMaxListeners } from "events";

export const student = pgTable("student", {
    id: uuid("id").notNull(),
    firebaseId: text("firebase_id").notNull(),
    name: text("name").notNull(),
    enrolment: varchar("division", { length: 9 }),
    department: text("department").notNull(),
    course: text("course").notNull(),
    email: text("email").unique().notNull(),
    role: text("role").default("student"),
    sem: integer("sem").notNull(),
    division: varchar("division", { length: 1 }),
    dateOfBirth: date("date_of_birth"),

})

export const teacher = pgTable("teacher", {
    id: uuid().notNull(),
    firebaseId: text("firebase_id").notNull(),
    name: text("name").notNull(),
    department: text("department").notNull(),
    course: text("course").notNull(),
    subject: text("subject").notNull(),
    email: text("email").unique().notNull(),
    role: text("role").default("teacher"),
    joiningDate: date("created_at").notNull(),
    sem: integer("sem").notNull(),
    division: varchar("division", { length: 1 }),
    dateOfBirth: date("date_of_birth"),
})

export const admin = pgTable("admin", {
    id: uuid().notNull(),
    firebaseId: text("firebase_id").notNull(),
    name: text("name").notNull(),
    email: text("email").unique().notNull(),
    role: text("role").default("admin"),
})