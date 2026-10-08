import { dash } from "@better-auth/infra";
import { betterAuth } from "better-auth";

export const auth = betterAuth({
    plugins: [
        dash()
    ]
})