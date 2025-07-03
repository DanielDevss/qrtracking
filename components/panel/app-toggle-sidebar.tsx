"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";

export default function AppToggleSidebar () {

    const { toggleSidebar, open } = useSidebar()

    return (
        <Button 
            onClick={toggleSidebar} 
            size={'icon'} 
            variant={'ghost'}
        >
            {open
                ? <PanelLeftClose />
                : <PanelLeftOpen />
            }
        </Button>
    )
}