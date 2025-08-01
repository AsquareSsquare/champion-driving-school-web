import { z } from "zod";

export const signInSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(8),
});

export const contactSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  phone: z.string().min(10),
  subject: z.string().min(3),
  message: z.string().min(3),
});

export const learnerDetailsSchema = z.object({
  branchId: z.string(),
  name: z.string().min(3),
  email: z.email(),
  address: z.string().min(3),
  dateOfBirth: z.date(),
  blood_group: z.string().min(2),
  gender: z.enum(["male", "female", "other"]),
  phone: z.string().min(10),
  id_card: z.string().min(12),
  total_fees: z.string(),
});

export const licenseDetailsSchema = z.object({
  learner_app_no: z.string().optional(),
  learner_license_no: z.string().optional(),
  dl_app_no: z.string().optional(),
  driving_license_no: z.string().optional(),
  notes: z.string().optional(),
});

export const paymentDetailsSchema = z.object({
  amount_paid: z.string(),
  payment_date: z.date(),
  payment_method: z.string().min(3),
  notes: z.string().optional(),
});

export const addBranchSchema = z.object({
  name: z.string().min(3),
  address: z.string().min(3),
  contact_number: z.string().min(10),
});

export const addStuffSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(8),
  name: z.string().min(3),
  role: z.enum(["admin", "staff"]),
  branch_id: z.string().optional(),
});

export const markAttendanceSchema = z.object({
  date: z.date(),
  status: z.enum(["present", "absent"]),
  notes: z.string().optional(),
  class_number: z.string(),
});
