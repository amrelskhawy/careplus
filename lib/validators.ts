import { z } from "zod";


export const UserFormValidation = z.object({
    name: z.string().min(2, {
        message: "name must be at least 2 characters"
    }).max(50, {
        message: "name must be at most 50 characters"
    }),
    email: z.string().email("Invalid email Address."),
    phone: z.string().refine((phone) => /^(\+20|0)?1[0125][0-9]{8}$/.test(phone), {
        "message": "Invalid Phone Number"
    })
})
