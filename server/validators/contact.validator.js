import z from 'zod';


export const contactSchema = z.object({
    username: z
               .string({ required_error: "Username is required" })
               .trim()
               .min(3, { message: "Username must be at least 3 characters long" })
               .max(100, { message: "Username must be at most 100 characters long" }),
    email: z
                    .string({required_error: "Email is required"})
                    .trim()
                    .email("Invalid email format")
                    .min(3, 'Email must be at least 3 characters long')
                    .max(255, "Email must not be more than 255 characters long"),
    message: z
               .string({ required_error: "Message is required" })
               .trim()
               .min(2, { message: "Message must be at least 2 characters long" })
               .max(1000, { message: "Message must be at most 1000 characters long" })
})