"use client";
import React from "react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sideBarNavItems } from "@/constants/sidebarData";
import Link from "next/link";
import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

function SidebarNav() {
  const pathName = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Common</SidebarGroupLabel>
      <SidebarMenu className="space-y-3">
        {sideBarNavItems.map((item, index) => {
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
  );
}

export default SidebarNav;
