'use client'
import { Button } from "../ui/button";
import { LogOut, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar"

export default function AppNavbar () {
    const { toggleSidebar, open } = useSidebar()
    return (
        <header className="px-4 py-2.5 flex items-center justify-between border-b bg-white">
            <div className="flex items-center space-x-2">
                <Button
                    onClick={toggleSidebar}
                    variant={'ghost'}
                    size={'icon'}
                >
                    {open ? <PanelLeftClose /> : <PanelLeftOpen />}
                </Button>
                <h2 className="text-lg">Panel de administración</h2>
            </div>

            <nav>
                <Button variant={'ghost'} size={'icon'}>
                    <LogOut />
                </Button>
            </nav>
        </header>
    )
}