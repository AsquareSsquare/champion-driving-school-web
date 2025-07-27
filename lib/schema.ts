import { z } from "zod";

export const signInSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(8),
});

export const contactSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.email(),
  phone: z.string().min(10),
  course: z.string().min(3),
  message: z.string().min(3),
});
