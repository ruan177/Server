import {z} from 'zod'

const UserRequest = z.object( {
    username: z.string(),
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
        }).email(),
    password: z.string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string"
    })
})

export type UserRequest = z.infer<typeof UserRequest>