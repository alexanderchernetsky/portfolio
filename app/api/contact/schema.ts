import {z} from "zod";
import {contactSchema} from "@/components/contact/schema";

// Extend the base schema with recipientMail for the API
const apiContactSchema = contactSchema.extend({
    recipientMail: z.string().email('Invalid recipient email address')
});

export default apiContactSchema;
