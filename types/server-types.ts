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
