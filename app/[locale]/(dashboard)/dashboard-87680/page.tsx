import React from "react";
import { getLoggedInUser } from "@/services/server-actions/userActions";

export default async function DashboardPage() {
  const { user, message } = await getLoggedInUser();
  return (
    <div>
      <p>
        {user?.name}
        {message}
      </p>
    </div>
  );
}
