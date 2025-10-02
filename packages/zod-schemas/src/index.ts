import {z} from 'zod'

export const phoneTypes = z.number();

export const signupTypes= z.object({
    phone: z.string().min(10),
    password: z.string().min(6)

})