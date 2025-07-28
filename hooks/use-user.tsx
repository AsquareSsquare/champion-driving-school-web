import React, { useEffect } from "react";
import { User } from "@/types/server-types";
import { fetchUser } from "@/services/client-actions/authActions";

function useUser() {
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState<User | null>(null);

  const fetchUserHandler = async () => {
    try {
      const result = await fetchUser(setLoading);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserHandler();
  }, []);

  return { loading, user };
}

export default useUser;
