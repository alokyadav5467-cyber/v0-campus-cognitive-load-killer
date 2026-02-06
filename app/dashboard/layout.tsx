"use client";

import React from "react"

import { Brain, LayoutDashboard, Sparkles, Mail, User, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "What-If Simulator", href: "/dashboard/simulator", icon: Sparkles },
  { name: "Smart Mail", href: "/dashboard/mail", icon: Mail },
  { name: "Lost & Found", href: "/dashboard/lost-found", icon: Search },
  { name: "Profile", href: "/dashboard/profile", icon: User },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 w-64 border-r border-border bg-card/50 backdrop-blur-xl">
        {/* Logo */}
        <div className="flex h-16 items-center gap-3 border-b border-border px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <span className="text-lg font-bold">CA</span>
          </div>
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
        <div className="border-t border-border p-4">
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
            <div className="text-right">
              <p className="text-sm font-medium">Student</p>
              <p className="text-xs text-muted-foreground">student@iit.ac.in</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
              <User className="h-5 w-5" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
