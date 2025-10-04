import { ReactNode } from "react";

//** ShadCn-ui component imports */
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

//*** Custom component imports */
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import AppHeader from "@/components/header/app-header";

type MainLayoutProps = {
    children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <AppHeader />
                <div className="layout-container flex flex-1 flex-col gap-4">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
