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

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    console.log("[v0] Signup attempt:", email);

    // Validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);

    // Get existing users
    const usersData = localStorage.getItem("campus_users");
    const users = usersData ? JSON.parse(usersData) : [];

    // Check if email already exists
    const existingUser = users.find((u: any) => u.email === email);
    if (existingUser) {
      setError("Email already registered. Redirecting to login...");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
      setIsLoading(false);
      return;
    }

    // Add new user
    const newUser = {
      name: name,
      email: email,
      password: password,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem("campus_users", JSON.stringify(users));

    console.log("[v0] Signup successful for:", email);

    // Auto login
    localStorage.setItem("current_user", JSON.stringify(newUser));

    setTimeout(() => {
      router.push("/dashboard");
      setIsLoading(false);
    }, 1000);
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
          <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
          <p className="text-sm text-muted-foreground">
            Start simulating academic decisions with AI
          </p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-secondary/50 border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">University Email</Label>
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

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            {isLoading ? "Creating Account..." : "Create Account"}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">Already have an account? </span>
          <Link href="/login" className="text-accent hover:underline">
            Log in
          </Link>
        </div>
      </Card>
    </div>
  );
}
