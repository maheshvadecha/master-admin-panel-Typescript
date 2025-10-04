"use client"

//** React imports */
import * as React from "react";

//** Third party imports */
import { AudioWaveform, Command, GalleryVerticalEnd } from "lucide-react";

//** Custom imports */
import { sidebarMenu } from "@/lib/sidebarMenu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";

//** Custom component imports */
import { SidebarCustomGroup } from "./sidebar-custom-group";
import { TeamSwitcher } from "@/components/sidebar/team-switcher";

// This is sample data.
const data = {
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                {sidebarMenu.map((item, index) => (
                    <SidebarCustomGroup key={index} mainHead={item?.mainHead} menu={item?.menu} />
                ))}
            </SidebarContent>
            <SidebarFooter>
                <TeamSwitcher teams={data.teams} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
