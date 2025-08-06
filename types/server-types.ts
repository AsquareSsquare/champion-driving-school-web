export interface User {
  id: number;
  name: string;
  username: string;
  role: string;
  branch_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: "pending" | "read" | "replied";
  created_at: string;
  updated_at: string;
}

export interface Branch {
  id: number;
  name: string;
  address: string;
  contact_number: string;
  created_at: string;
  updated_at: string;
}

export interface Learner {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  date_of_birth: string;
  blood_group: string;
  gender: string;
  id_card: string;
  license_types: string[];
  total_fees: number;
  balance_fees: number;
  completed_classes: number;
  admission_date: string;
  is_active: string;
  branch_id: number;
  last_attendance_date?: string;
  created_at: string;
  updated_at: string;
}
