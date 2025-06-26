import { paths } from "@/routes/path";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import Link from "next/link";
import { Button } from "../ui/button";
import AppSidebarProjects from "./app-sidebar-projects";

export default function AppSidebar () {
    return (
        <Sidebar variant="floating">

            <SidebarHeader>
                <AppSidebarProjects />
            </SidebarHeader>

            <SidebarContent>
                {paths.map((group, key) => (
                    <SidebarGroup key={key}>
                        <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {group.childs?.map((groupItem, itemKey) => (
                                    <SidebarMenuItem key={`item_${itemKey}`}>
                                        <SidebarMenuButton asChild>
                                            <Link href={`/panel${groupItem.to}`}>
                                                {groupItem.icon && <groupItem.icon />}
                                                {groupItem.label}
                                            </Link>
                                        </SidebarMenuButton>
                                        {groupItem.action && (
                                            <SidebarMenuAction>
                                                {groupItem.action.fn && (
                                                    <SidebarMenuItem>
                                                        <Button variant={"ghost"} size={'icon'} onClick={groupItem.action.fn}>
                                                            <groupItem.action.icon />
                                                        </Button>
                                                    </SidebarMenuItem>
                                                )}
                                                {groupItem.action.to && (
                                                    <SidebarMenuItem>
                                                        <Button variant={"ghost"} size={'icon'} asChild>
                                                            <Link href={`panel${groupItem.action.to}`}>
                                                                <groupItem.action.icon />
                                                            </Link>
                                                        </Button>
                                                    </SidebarMenuItem>
                                                )}
                                            </SidebarMenuAction>
                                        )}
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarFooter></SidebarFooter>
        </Sidebar>
    )
}