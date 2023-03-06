import {z} from 'zod'

const AuthenticateRequest = z.object({
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
        }).email().optional(),
    password: z.string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string"
    })
})

export type AuthenticateRequest = z.infer<typeof AuthenticateRequest>