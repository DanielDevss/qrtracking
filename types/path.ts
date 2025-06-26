import { LucideIcon } from "lucide-react";

export type Path = {
    label : string
    to? : string
    icon? : LucideIcon
    action?: {
        icon: LucideIcon
        to?: string
        fn?: () => void
    }
    childs?: Path[]
};