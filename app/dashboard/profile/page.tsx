import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Calendar, GraduationCap, Building2, Phone, MapPin, Edit } from "lucide-react";

export default function ProfilePage() {
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
            <div className="h-32 w-32 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <User className="h-16 w-16" />
            </div>
            <Button
              variant="outline"
              size="sm"
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
                    defaultValue="Student Name"
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
                    defaultValue="student@iitrpr.ac.in"
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
                    defaultValue="2022CSB001"
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
                    defaultValue="Computer Science & Engineering"
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
                    defaultValue="3rd Year (2024-2025)"
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
                    defaultValue="+91 98765 43210"
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
                  defaultValue="Hostel Block A, Room 123, IIT Ropar"
                  className="pl-10 border-border bg-secondary/30"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Save Changes
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border bg-transparent hover:bg-secondary/50"
              >
                Cancel
              </Button>
            </div>
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
