export interface User {
  id: number;
  name: string;
  username: string;
  role: string;
  branch_id: number | null;
  created_at: string;
  updated_at: string;
}
