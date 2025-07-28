"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "@/i18n/navigation";
import { DASHBOARD_PAGE } from "@/constants/data";
import { Car } from "lucide-react";
import SidebarNav from "@/components/app-sidebar/sidebar-nav";
import SidebarNavAdmin from "@/components/app-sidebar/sidebar-nav-admin";
import useUser from "@/hooks/use-user";
import NavUser from "@/components/app-sidebar/nav-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { loading, user } = useUser();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Link href={`/${DASHBOARD_PAGE}`} className="">
                <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                  <Car className="size-4.5" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    Champion Driving
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarNav />
        <SidebarNavAdmin loading={loading} user={user} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser loading={loading} user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
