//** Third party imports */
import type { LucideIcon } from "lucide-react";

export type SidebarItem = {
    title: string;
    url: string;
};

export type SidebarGroupItem = {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    isSubmenu: boolean;
    items?: SidebarItem[];
};

export type SidebarMenuGroup = {
    mainHead: string;
    menu: SidebarGroupItem[];
};