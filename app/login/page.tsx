"use client";

import React from "react"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    console.log("[v0] Login attempt with:", email);

    // Get users from localStorage
    const usersData = localStorage.getItem("campus_users");
    const users = usersData ? JSON.parse(usersData) : [];

    console.log("[v0] Total registered users:", users.length);

    // Check if user exists with matching credentials
    const user = users.find(
      (u: any) => u.email === email && u.password === password
    );

    setTimeout(() => {
      if (user) {
        console.log("[v0] Login successful for:", email);
        // Store logged in user
        localStorage.setItem("current_user", JSON.stringify(user));
        // Redirect to dashboard
        router.push("/dashboard");
      } else {
        console.log("[v0] Invalid credentials, redirecting to signup");
        setError("Invalid credentials. Redirecting to signup...");
        setIsLoading(false);
        // Redirect to signup after 2 seconds
        setTimeout(() => {
          router.push("/signup");
        }, 2000);
      }
    }, 800);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      {/* Video Background */}
      <div className="fixed inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source src="/images/from-20klickpin-20cf-20ghim-20c-e1-bb-a7a-20claire-20ostre-20tr-c3-aan-20mapping-20-20-e1-ba-a2nh-20b-e1-ba-a7u-20tr-e1-bb-9di-20-c4-91-c3-aam-20thi-e1-ba-bft-20k-e1-ba-bf-20t-e1-ba-a1p-20ch-c3-ad-20ph-c3-b4ng-20n-e1-bb-81n.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/50 to-background/60" />
        <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-accent/5 blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-primary/5 blur-3xl animate-pulse-glow-alt" />
      </div>

      <Card className="relative w-full max-w-md border-border bg-card/80 backdrop-blur-xl p-8 animate-scale-in">
        {/* Logo/Header */}
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <span className="text-2xl font-bold">CA</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">Campus All Rounder</h1>
          <p className="text-sm text-muted-foreground">
            We don't just summarize. We show consequences.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@university.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-secondary/50 border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-secondary/50 border-border"
            />
          </div>

          {error && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 text-sm text-destructive animate-fade-in">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 transition-all group disabled:opacity-50"
          >
            {isLoading ? "Verifying..." : "Enter Dashboard"}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>

        {/* Signup Link */}
        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">Don't have an account? </span>
          <Link href="/signup" className="text-accent hover:underline">
            Sign up
          </Link>
        </div>
      </Card>
    </div>
  );
}
