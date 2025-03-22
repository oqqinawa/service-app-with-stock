"use client"

import * as React from "react"
import {
  ArrowUpCircleIcon,
  BoxIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  SearchIcon,
  SettingsIcon,
  TruckIcon,
  UsersIcon,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavDocuments } from "./nav-documents"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import Link from "next/link"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
      notification: "20",
    },
    {
      title: "Supplier",
      url: "/suppliers",
      icon: TruckIcon,
      notification: "5",
    },
    {
      title: "Products",
      url: "/products",
      icon: BoxIcon,
    },
    {
      title: "Services",
      url: "/services",
      icon: FolderIcon,
      notification: "2",
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: SettingsIcon,
    },
    {
      title: "Get Help",
      url: "#",
      icon: HelpCircleIcon,
    },
    {
      title: "Search",
      url: "#",
      icon: SearchIcon,
    },
  ],
  products: [
    {
      name: "Incoming Products",
      url: "/products/add",
      icon: DatabaseIcon,
    },
    {
      name: "Outcome Products",
      url: "/products/sell",
      icon: ClipboardListIcon,
    },
    {
      name: "Products Report",
      url: "/products/report",
      icon: FileIcon,
    },
  ],
  services: [
    {
      name: "Incoming Services",
      url: "/services/add",
      icon: DatabaseIcon,
    },
    {
      name: "Outcome Service",
      url: "/services/sell",
      icon: ClipboardListIcon,
    },
    {
      name: "Services Report",
      url: "/services/report",
      icon: FileIcon,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="#">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.products} label="Products" />
        <NavDocuments items={data.services} label="Services" />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
