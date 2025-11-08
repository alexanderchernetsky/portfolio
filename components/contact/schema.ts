import { z } from "zod";

// Zod validation schema
export const contactSchema = z.object({
    fullName: z
        .string()
        .min(1, "Full name is required")
        .min(5, "Full name must be at least 5 characters")
        .max(100, "Full name must be less than 100 characters"),
    email: z
        .string()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),
    message: z
        .string()
        .min(1, "Message is required")
        .min(10, "Message must be at least 10 characters")
        .max(3000, "Message must be less than 3000 characters"),
});

// TypeScript type from Zod schema
export type ContactFormValues = z.infer<typeof contactSchema>;
