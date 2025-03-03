import React from "react";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  return <SidebarProvider></SidebarProvider>;
};

export default SidebarLayout;
