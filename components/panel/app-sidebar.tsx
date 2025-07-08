import { paths } from "@/routes/path";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import Link from "next/link";
import AppSidebarProjects from "./app-sidebar-projects";

export default function AppSidebar() {
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
                        {groupItem.action.fn ? (
                            <groupItem.action.icon className="w-4 h-4" />
                        ) : groupItem.action.to ? (
                            <Link href={`/panel${groupItem.action.to}`}>
                              <groupItem.action.icon className="w-4 h-4" />
                            </Link>
                        ) : null}
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
  );
}
