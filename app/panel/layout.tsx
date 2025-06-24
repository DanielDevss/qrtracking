import AppNavbar from "@/components/panel/app-navbar";
import AppSidebar from "@/components/panel/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode
}

export default function Layout ({children}:LayoutProps) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <article className="w-full">
                <AppNavbar />
                <main className="mx-auto max-w-7xl w-full p-4">
                    {children}
                </main>
            </article>
        </SidebarProvider>
    );
}