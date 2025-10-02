import {z} from 'zod'

export const signupTypes= z.object({
    phone: z.string().min(10),
    password: z.string().min(6)

})

export const phoneTypes = z.number();
export const amountValidTypes = z.number().min(1);
