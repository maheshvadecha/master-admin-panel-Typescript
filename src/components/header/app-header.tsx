'use client'

//** Third party imports */
import { Bell, Moon, Sun } from "lucide-react";

//** Custom imports */
import { useTheme } from "@/context/ThemeContext";
import { ThemeSettingToggleButton } from "../theme/themeSetting";

//** ShadCn-ui component imports */
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ProfileDropdown } from "./profile";

export default function AppHeader() {
    const { colorMode, updateSetting } = useTheme();

    return (
        <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex items-center justify-between w-full">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                            <BreadcrumbLink href="#">Inventory Management</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="h-full flex items-center gap-2">
                    <Button variant={"outline"} className={"cursor-pointer"}>
                        <Bell size={17} />
                    </Button>
                    <ThemeSettingToggleButton />
                    <Button
                        variant={"outline"}
                        className={"cursor-pointer"}
                        onClick={() =>
                            updateSetting("colorMode", colorMode === "light" ? "dark" : "light")
                        }
                    >
                        {colorMode === "light" ? <Moon /> : <Sun />}
                    </Button>
                    <ProfileDropdown />
                </div>
            </div>
        </header>
    )
}