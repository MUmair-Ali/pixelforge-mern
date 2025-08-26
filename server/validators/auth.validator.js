import z from 'zod';

//creating signup schema using validation of zod
export const signupSchema = z.object({
    firstname: z
                .string({required_error: "First Name is required"})
                .trim()
                .min(3, 'Firstname must be at least 3 characters long')
                .max(255, "First Name must not be more than 255 characters long"),
    lastname: z
                .string({required_error: "Last Name is required"})
                .trim()
                .min(3, 'Lastname must be at least 3 characters long')
                .max(255, "Last Name must not be more than 255 characters long"),
    username: z
                .string({required_error: "Username is required"})
                .trim()
                .min(3, 'Username must be at least 3 characters long')
                .max(255, "Username must not be more than 255 characters long"),
    email: z
                .string({required_error: "Email is required"})
                .trim()
                .email("Invalid email format")
                .min(3, 'Email must be at least 3 characters long')
                .max(255, "Email must not be more than 255 characters long"),
    phone: z
                .string({required_error: "Phone number is required"})
                .trim()
                .min(10, 'Phone number must be at least 10 characters long')
                .max(15, "Phone number must not be more than 15 characters long"),
    password: z
                .string({required_error: "Password is required"})
                .trim()
                .min(7, 'Password must be at least 7 characters long')
                .max(1024, "Password must not be more than 1024 characters long"),

});

export const loginSchema = z.object({
    email: z
                .string({required_error: "Email is required"})
                .trim()
                .email("Invalid email format")
                .min(3, 'Email must be at least 3 characters long')
                .max(255, "Email must not be more than 255 characters long"),
    password: z
                .string({required_error: "Password is required"})
                .trim()
                .min(7, 'Password must be at least 7 characters long')
                .max(1024, "Password must not be more than 1024 characters long"),
});
