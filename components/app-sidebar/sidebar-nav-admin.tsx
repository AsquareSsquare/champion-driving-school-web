import React from "react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
} from "@/components/ui/sidebar";
import { sideBarNavItemsAdmin } from "@/constants/sidebarData";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "@/i18n/navigation";
import { User } from "@/types/server-types";

function SidebarNavAdmin({
  loading,
  user,
}: {
  loading: boolean;
  user: User | null;
}) {
  const pathName = usePathname();

  if (loading)
    return (
      <SidebarMenu className="space-y-1">
        <SidebarMenuSkeleton showIcon className="w-full"></SidebarMenuSkeleton>
        <SidebarMenuSkeleton showIcon className="w-full"></SidebarMenuSkeleton>
        <SidebarMenuSkeleton showIcon className="w-full"></SidebarMenuSkeleton>
        <SidebarMenuSkeleton showIcon className="w-full"></SidebarMenuSkeleton>
      </SidebarMenu>
    );
  return (
    <>
      {user?.role === "admin" && (
        <SidebarGroup>
          <SidebarGroupLabel>Admin</SidebarGroupLabel>
          <SidebarMenu className="space-y-3">
            {sideBarNavItemsAdmin.map((item, index) => {
              const isActive = pathName === item.url;
              return (
                <SidebarMenuItem key={item.title} className="group/collapsible">
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className={cn("h-10", {
                      "bg-primary hover:bg-primary/90 text-white hover:text-white":
                        isActive,
                    })}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      )}
    </>
  );
}

export default SidebarNavAdmin;
