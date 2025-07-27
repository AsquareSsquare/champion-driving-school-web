import { SideBarMenu } from "@/types/root-types";
import { PlusCircleIcon, Users } from "lucide-react";
import { DASHBOARD_PAGE } from "@/constants/data";

export const sideBarNavItems: SideBarMenu[] = [
  {
    title: "Learners",
    url: `/${DASHBOARD_PAGE}`,
    icon: Users,
  },
  {
    title: "Create learners",
    url: `/${DASHBOARD_PAGE}/create-learner`,
    icon: PlusCircleIcon,
  },
];
