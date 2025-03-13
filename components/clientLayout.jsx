"use client"; // Ensures this is a client-side component
import { usePathname } from "next/navigation";
import HomeNavbar from "@/components/HomeNavbar";
import DashboardNavbar from "@/components/DashboardNavbar";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen">
      {isDashboard ? (
        <div className="flex ">
          <Sidebar />
          <div className="flex-1 md:ml-6">
            <DashboardNavbar />
            <main className="p-4">{children}</main>
          </div>
        </div>
      ) : (
        <>
          <HomeNavbar />
          <main>{children}</main>
        </>
      )}
    </div>
  );
}
