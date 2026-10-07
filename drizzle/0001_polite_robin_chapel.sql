ALTER TABLE "officer" RENAME TO "admin";--> statement-breakpoint
ALTER TABLE "admin" ADD COLUMN "id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "admin" ADD COLUMN "firebase_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "admin" ADD COLUMN "email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "admin" ADD COLUMN "role" text DEFAULT 'admin';--> statement-breakpoint
ALTER TABLE "student" ADD COLUMN "id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "student" ADD COLUMN "firebase_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "student" ADD COLUMN "email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "student" ADD COLUMN "rollno" numeric NOT NULL;--> statement-breakpoint
ALTER TABLE "student" ADD COLUMN "division" varchar(1);--> statement-breakpoint
ALTER TABLE "student" ADD COLUMN "standerd" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "student" ADD COLUMN "role" text DEFAULT 'student';--> statement-breakpoint
ALTER TABLE "student" ADD COLUMN "date_of_birth" date;--> statement-breakpoint
ALTER TABLE "teacher" ADD COLUMN "id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "teacher" ADD COLUMN "firebase_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "teacher" ADD COLUMN "email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "teacher" ADD COLUMN "division" varchar(1);--> statement-breakpoint
ALTER TABLE "teacher" ADD COLUMN "standerd" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "teacher" ADD COLUMN "subject" text NOT NULL;--> statement-breakpoint
ALTER TABLE "teacher" ADD COLUMN "role" text DEFAULT 'teacher';--> statement-breakpoint
ALTER TABLE "teacher" ADD COLUMN "created_at" date NOT NULL;--> statement-breakpoint
ALTER TABLE "teacher" ADD COLUMN "date_of_birth" date;--> statement-breakpoint
ALTER TABLE "admin" ADD CONSTRAINT "admin_email_unique" UNIQUE("email");--> statement-breakpoint
ALTER TABLE "student" ADD CONSTRAINT "student_email_unique" UNIQUE("email");--> statement-breakpoint
ALTER TABLE "teacher" ADD CONSTRAINT "teacher_email_unique" UNIQUE("email");