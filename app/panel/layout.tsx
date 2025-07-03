"use client"

import AppBreadcrumbs from "@/components/panel/app-breadcrumb";
import AppSidebar from "@/components/panel/app-sidebar";
import AppToggleSidebar from "@/components/panel/app-toggle-sidebar";
import { AppModeToggle } from "@/components/panel/app-toggle-theme";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode
}

export default function Layout ({children}:LayoutProps) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <SidebarProvider>
                <AppSidebar />
                <article className="w-full">

                    <header className="w-full flex items-center space-x-2 p-4 justify-between">
                        <nav className="flex items-center space-x-2">
                            <AppToggleSidebar />
                            <AppBreadcrumbs />
                        </nav>
                        <nav>
                            <AppModeToggle />
                        </nav>
                    </header>

                    <main className="mx-auto max-w-6xl w-full p-4">
                        {children}
                    </main>
                </article>
            </SidebarProvider>
        </ThemeProvider>
    );
}