"use client";

import React from "react"

import { Brain, LayoutDashboard, Sparkles, Mail, User, Search, LogOut, Coffee, ShoppingBag, MapPin, GraduationCap } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "What-If Simulator", href: "/dashboard/simulator", icon: Sparkles },
  { name: "Smart Mail", href: "/dashboard/mail", icon: Mail },
  { name: "The Daily Pulse", href: "/dashboard/daily-pulse", icon: Coffee },
  { name: "Student Exchange", href: "/dashboard/student-exchange", icon: ShoppingBag },
  { name: "Explorer's Guide", href: "/dashboard/explorers-guide", icon: MapPin },
  { name: "Academic Cockpit", href: "/dashboard/academic-cockpit", icon: GraduationCap },
  { name: "Lost & Found", href: "/dashboard/lost-found", icon: Search },
  { name: "Profile", href: "/dashboard/profile", icon: User },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [currentUser, setCurrentUser] = React.useState<any>(null);

  React.useEffect(() => {
    const userData = localStorage.getItem("current_user");
    if (userData) {
      const user = JSON.parse(userData);
      setCurrentUser(user);
      console.log("[v0] Loaded user:", user.name || user.email);
    } else {
      console.log("[v0] No user found, redirecting to login");
      router.push("/login");
    }
  }, [router]);

  const handleSignOut = () => {
    console.log("[v0] Signing out user");
    localStorage.removeItem("current_user");
    router.push("/login");
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Video Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source src="/images/from-20klickpin-20cf-20ghim-20c-e1-bb-a7a-20claire-20ostre-20tr-c3-aan-20mapping-20-20-e1-ba-a2nh-20b-e1-ba-a7u-20tr-e1-bb-9di-20-c4-91-c3-aam-20thi-e1-ba-bft-20k-e1-ba-bf-20t-e1-ba-a1p-20ch-c3-ad-20ph-c3-b4ng-20n-e1-bb-81n.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/60 to-background/70" />
      </div>

      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 w-64 border-r border-border bg-card/70 backdrop-blur-xl">
        {/* Logo */}
        <div className="flex h-16 items-center gap-3 border-b border-border px-6">
          <img 
            src="/images/campus-all-rounder-logo.png" 
            alt="Campus All Rounder Logo" 
            className="h-10 w-10 object-contain"
          />
          <div>
            <h1 className="text-sm font-bold leading-tight">Campus</h1>
            <p className="text-xs text-muted-foreground">All Rounder</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all",
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                )}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-border p-4 space-y-3">
          <button
            onClick={handleSignOut}
            className="group flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-destructive transition-all hover:bg-destructive/10"
          >
            <LogOut className="h-5 w-5 shrink-0" />
            Sign Out
          </button>
          <div className="rounded-lg bg-accent/5 p-3">
            <p className="text-xs font-medium text-accent mb-1">AI-Powered</p>
            <p className="text-xs text-muted-foreground">
              Simulating consequences with precision
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="pl-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-background/80 backdrop-blur-xl px-8">
          <div>
            <h2 className="text-sm font-semibold text-foreground">
              {navigation.find((item) => item.href === pathname)?.name || "Dashboard"}
            </h2>
            <p className="text-xs text-muted-foreground">
              Make informed academic decisions
            </p>
          </div>
          <div className="flex items-center gap-4">
            {currentUser ? (
              <>
                <div className="text-right">
                  <p className="text-sm font-medium">{currentUser.name || "Student"}</p>
                  <p className="text-xs text-muted-foreground">{currentUser.email || "student@university.edu"}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent font-semibold">
                  {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : "S"}
                </div>
              </>
            ) : (
              <>
                <div className="text-right">
                  <p className="text-sm font-medium">Loading...</p>
                  <p className="text-xs text-muted-foreground">Please wait</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <User className="h-5 w-5" />
                </div>
              </>
            )}
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
