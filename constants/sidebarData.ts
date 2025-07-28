import { SideBarMenu } from "@/types/root-types";
import { Calendar, PlusCircleIcon, Split, UserPlus, Users } from "lucide-react";
import { DASHBOARD_PAGE } from "@/constants/data";

export const sideBarNavItems: SideBarMenu[] = [
  {
    title: "Learners",
    url: `/${DASHBOARD_PAGE}`,
    icon: Users,
  },
  {
    title: "Add learner",
    url: `/${DASHBOARD_PAGE}/create-learner`,
    icon: PlusCircleIcon,
  },
];

export const sideBarNavItemsAdmin: SideBarMenu[] = [
  {
    title: "Bookings",
    url: `/${DASHBOARD_PAGE}/bookings`,
    icon: Calendar,
  },
  {
    title: "Add branch",
    url: `/${DASHBOARD_PAGE}/create-branch`,
    icon: Split,
  },
  {
    title: "Add staff",
    url: `/${DASHBOARD_PAGE}/create-staff`,
    icon: UserPlus,
  },
];
