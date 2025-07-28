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

export const addLearnerSchema = z.object({
  name: z.string().min(3),
  address: z.string().min(3),
  dateOfBirth: z.date(),
  blood_group: z.string().min(2),
  gender: z.string().min(3),
  phone: z.string().min(10),
  aadhar: z.string().min(12),
  voter: z.string().min(10),
  branch_id: z.number(),
  learner_application_no: z.string(),
  learner_license_no: z.string(),
  dl_application_no: z.string(),
  driving_license_no: z.string().optional(),
  driving_license_renewal: z.string(),
  remarks: z.string().optional(),
});

export const addBranchSchema = z.object({
  name: z.string().min(3),
  address: z.string().min(3),
  contact_number: z.string().min(10),
  timing: z.string().min(3),
});

export const addStuffSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(8),
  name: z.string().min(3),
  role: z.enum(["admin", "staff"]),
});
