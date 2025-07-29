import React, { useState } from "react";
import { User } from "@/types/server-types";
import { Skeleton } from "@/components/ui/skeleton";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader, LogOut } from "lucide-react";
import { logOut } from "@/services/client-actions/authActions";
import { toast } from "sonner";
import { useRouter } from "@/i18n/navigation";
import { SIGN_IN_PAGE } from "@/constants/data";

function NavUser({ loading, user }: { loading: boolean; user: User | null }) {
  const router = useRouter();
  const [logOutLoading, setLogOutLoading] = useState(false);

  const onSuccessHandler = () => {
    toast.success("User logged out successfully.");
    router.push(`/${SIGN_IN_PAGE}`);
  };

  const onFailureHandler = () => {
    toast.error("Could not log out user.");
  };

  const handleLogout = async () => {
    try {
      await logOut(setLogOutLoading, onSuccessHandler, onFailureHandler);
    } catch (error) {
      console.error(error);
    }
  };
  if (loading) return <Skeleton className="w-full h-12"></Skeleton>;
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage
              src={`https://api.dicebear.com/9.x/initials/svg?seed=${user?.name}`}
              alt={`Champion Driving School user avatar - ${user?.name}`}
            />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{user?.name}</span>
            <span className="truncate text-xs">{user?.role}</span>
          </div>
          <div
            className="size-9 rounded-md bg-primary text-white flex items-center justify-center"
            onClick={handleLogout}
          >
            {logOutLoading ? (
              <Loader size={18} className="animate-spin" />
            ) : (
              <LogOut size={18} />
            )}
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export default NavUser;
