import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import React from "react";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <nav>
          {/* <SearchBar /> */}
          <UserButton />
        </nav>
        <div>{children}</div>
        <div>this is going to be deleteds</div>
      </main>
    </SidebarProvider>
  );
};

export default SidebarLayout;
