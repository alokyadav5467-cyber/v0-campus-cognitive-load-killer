"use client";

import React from "react"

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Calendar, GraduationCap, Building2, Phone, MapPin, Edit, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function ProfilePage() {
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "Student Name",
    email: "student@iitrpr.ac.in",
    studentId: "2022CSB001",
    department: "Computer Science & Engineering",
    year: "3rd Year (2024-2025)",
    phone: "+91 98765 43210",
    address: "Hostel Block A, Room 123, IIT Ropar",
  });

  useEffect(() => {
    const userData = localStorage.getItem("current_user");
    if (userData) {
      const user = JSON.parse(userData);
      console.log("[v0] Loading user profile data:", user);
      setFormData({
        fullName: user.name || "Student Name",
        email: user.email || "student@university.edu",
        studentId: user.studentId || "Not provided",
        department: user.department || "Not specified",
        year: user.year || "Not specified",
        phone: user.phone || "Not provided",
        address: user.address || "Not provided",
      });
    }
  }, []);

  const handlePhotoChange = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("[v0] Photo selected:", file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
        console.log("[v0] Photo preview loaded");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log("[v0] Saving profile changes...", formData);
    setIsSaving(true);
    setSaved(false);

    // Update current user in localStorage
    const userData = localStorage.getItem("current_user");
    if (userData) {
      const user = JSON.parse(userData);
      const updatedUser = {
        ...user,
        name: formData.fullName,
        email: formData.email,
        studentId: formData.studentId,
        department: formData.department,
        year: formData.year,
        phone: formData.phone,
        address: formData.address,
      };
      localStorage.setItem("current_user", JSON.stringify(updatedUser));
      console.log("[v0] Profile updated in localStorage");
    }

    setTimeout(() => {
      setIsSaving(false);
      setSaved(true);
      console.log("[v0] Profile saved successfully");

      setTimeout(() => {
        setSaved(false);
      }, 3000);
    }, 1000);
  };

  const handleCancel = () => {
    console.log("[v0] Canceling changes");
    // Reset form to original values
    setFormData({
      fullName: "Student Name",
      email: "student@iitrpr.ac.in",
      studentId: "2022CSB001",
      department: "Computer Science & Engineering",
      year: "3rd Year (2024-2025)",
      phone: "+91 98765 43210",
      address: "Hostel Block A, Room 123, IIT Ropar",
    });
    setPhotoPreview(null);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
        <p className="text-muted-foreground">
          Manage your account information and preferences
        </p>
      </div>

      {/* Profile Card */}
      <Card className="border-border bg-card/50 backdrop-blur-sm p-8 animate-fade-in-up">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Avatar Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="h-32 w-32 rounded-full bg-accent/10 flex items-center justify-center text-accent overflow-hidden">
              {photoPreview ? (
                <img src={photoPreview || "/placeholder.svg"} alt="Profile" className="h-full w-full object-cover" />
              ) : (
                <User className="h-16 w-16" />
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={handlePhotoChange}
              className="border-accent/30 text-accent hover:bg-accent/10 bg-transparent"
            >
              <Edit className="h-4 w-4 mr-2" />
              Change Photo
            </Button>
          </div>

          {/* Profile Info */}
          <div className="flex-1 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="pl-10 border-border bg-secondary/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-10 border-border bg-secondary/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="studentId" className="text-sm font-medium">
                  Student ID
                </Label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="studentId"
                    value={formData.studentId}
                    onChange={(e) => handleInputChange("studentId", e.target.value)}
                    className="pl-10 border-border bg-secondary/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="department" className="text-sm font-medium">
                  Department
                </Label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="department"
                    value={formData.department}
                    onChange={(e) => handleInputChange("department", e.target.value)}
                    className="pl-10 border-border bg-secondary/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="year" className="text-sm font-medium">
                  Year of Study
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="year"
                    value={formData.year}
                    onChange={(e) => handleInputChange("year", e.target.value)}
                    className="pl-10 border-border bg-secondary/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="pl-10 border-border bg-secondary/30"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-sm font-medium">
                Address
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="pl-10 border-border bg-secondary/30"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                onClick={handleSave}
                disabled={isSaving}
                className="bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-50"
              >
                {isSaving ? (
                  <>Saving...</>
                ) : saved ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Saved!
                  </>
                ) : (
                  "Save Changes"
                )}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleCancel}
                disabled={isSaving}
                className="border-border bg-transparent hover:bg-secondary/50 disabled:opacity-50"
              >
                Cancel
              </Button>
            </div>
            
            {saved && (
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 text-sm text-accent animate-fade-in">
                Profile updated successfully!
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* Academic Information */}
      <Card className="border-border bg-card/50 backdrop-blur-sm p-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        <h2 className="text-xl font-bold mb-4">Academic Information</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Current CGPA</p>
            <p className="text-2xl font-bold text-accent">8.7</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Credits Completed</p>
            <p className="text-2xl font-bold">96 / 160</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Overall Attendance</p>
            <p className="text-2xl font-bold text-accent">87%</p>
          </div>
        </div>
      </Card>

      {/* Notification Preferences */}
      <Card className="border-border bg-card/50 backdrop-blur-sm p-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-xl font-bold mb-4">Notification Preferences</h2>
        <div className="space-y-4">
          {[
            {
              title: "Email Notifications",
              description: "Receive AI-analyzed summaries via email",
              checked: true,
            },
            {
              title: "Deadline Reminders",
              description: "Get alerts for upcoming assignment deadlines",
              checked: true,
            },
            {
              title: "What-If Simulation Results",
              description: "Notify when simulation results are ready",
              checked: true,
            },
            {
              title: "Attendance Warnings",
              description: "Alert when attendance drops below threshold",
              checked: false,
            },
          ].map((pref, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg border border-border bg-secondary/30 p-4"
            >
              <input
                type="checkbox"
                defaultChecked={pref.checked}
                className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
              />
              <div className="flex-1">
                <p className="font-medium text-card-foreground">{pref.title}</p>
                <p className="text-sm text-muted-foreground">{pref.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive/20 bg-destructive/5 backdrop-blur-sm p-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <h2 className="text-xl font-bold mb-2 text-destructive">Danger Zone</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Irreversible actions that affect your account
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            className="border-destructive/30 text-destructive hover:bg-destructive/10 bg-transparent"
          >
            Reset All Settings
          </Button>
          <Button
            variant="outline"
            className="border-destructive/30 text-destructive hover:bg-destructive/10 bg-transparent"
          >
            Delete Account
          </Button>
        </div>
      </Card>
    </div>
  );
}
