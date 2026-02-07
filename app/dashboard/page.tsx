import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  TrendingUp, 
  AlertCircle,
  Coffee,
  ShoppingBag,
  MapPin,
  GraduationCap,
  ArrowRight,
  Bell,
  UtensilsCrossed,
  Car,
  BookOpen
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome Back, Student</h1>
        <p className="text-muted-foreground">
          Your complete campus companion - Everything you need in one place
        </p>
      </div>

      {/* Feature Cards */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Campus Features</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Daily Pulse Card */}
          <Link href="/dashboard/daily-pulse">
            <Card className="border-border bg-gradient-to-br from-orange-500/10 to-amber-500/10 hover:from-orange-500/20 hover:to-amber-500/20 p-6 transition-all hover:scale-105 cursor-pointer group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Coffee className="h-6 w-6" />
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-semibold mb-1">The Daily Pulse</h3>
              <p className="text-sm text-muted-foreground">
                Mess menu & campus updates
              </p>
            </Card>
          </Link>

          {/* Student Exchange Card */}
          <Link href="/dashboard/student-exchange">
            <Card className="border-border bg-gradient-to-br from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 p-6 transition-all hover:scale-105 cursor-pointer group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Student Exchange</h3>
              <p className="text-sm text-muted-foreground">
                Marketplace & cab pooling
              </p>
            </Card>
          </Link>

          {/* Explorer's Guide Card */}
          <Link href="/dashboard/explorers-guide">
            <Card className="border-border bg-gradient-to-br from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20 p-6 transition-all hover:scale-105 cursor-pointer group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <MapPin className="h-6 w-6" />
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Explorer's Guide</h3>
              <p className="text-sm text-muted-foreground">
                Nearby places & navigation
              </p>
            </Card>
          </Link>

          {/* Academic Cockpit Card */}
          <Link href="/dashboard/academic-cockpit">
            <Card className="border-border bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 p-6 transition-all hover:scale-105 cursor-pointer group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Academic Cockpit</h3>
              <p className="text-sm text-muted-foreground">
                Timetable & LMS insights
              </p>
            </Card>
          </Link>
        </div>
      </div>

      {/* Student Snapshot Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Attendance Card */}
        <Card className="border-border bg-card/50 backdrop-blur-sm p-6 animate-fade-in-up">
          <div className="flex items-start justify-between mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <TrendingUp className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold text-accent">87%</span>
          </div>
          <h3 className="text-lg font-semibold mb-1">Attendance</h3>
          <p className="text-sm text-muted-foreground">
            3% above minimum requirement
          </p>
        </Card>

        {/* Upcoming Deadlines Card */}
        <Card className="border-border bg-card/50 backdrop-blur-sm p-6 animate-fade-in-up [animation-delay:100ms]">
          <div className="flex items-start justify-between mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
              <AlertCircle className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold text-destructive">4</span>
          </div>
          <h3 className="text-lg font-semibold mb-1">Urgent Deadlines</h3>
          <p className="text-sm text-muted-foreground">
            Due within next 3 days
          </p>
        </Card>

        {/* Today's Classes Card */}
        <Card className="border-border bg-card/50 backdrop-blur-sm p-6 animate-fade-in-up [animation-delay:200ms]">
          <div className="flex items-start justify-between mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Calendar className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold">5</span>
          </div>
          <h3 className="text-lg font-semibold mb-1">Today's Classes</h3>
          <p className="text-sm text-muted-foreground">
            Next class at 2:00 PM
          </p>
        </Card>
      </div>

      {/* Upcoming Deadlines List */}
      <Card className="border-border bg-card/50 backdrop-blur-sm p-6 animate-fade-in-up [animation-delay:300ms]">
        <h2 className="text-xl font-bold mb-4">Upcoming Deadlines</h2>
        <div className="space-y-3">
          {[
            {
              title: "Data Structures Assignment 3",
              course: "CS201",
              deadline: "Tomorrow, 11:59 PM",
              priority: "high",
            },
            {
              title: "ML Project Proposal Submission",
              course: "CS301",
              deadline: "In 2 days",
              priority: "high",
            },
            {
              title: "Database Lab Report",
              course: "CS202",
              deadline: "In 3 days",
              priority: "medium",
            },
            {
              title: "Software Engineering Phase 2",
              course: "CS302",
              deadline: "In 5 days",
              priority: "medium",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border border-border bg-secondary/30 p-4 transition-all hover:border-accent/50 hover:bg-secondary/50"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.course}</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm font-semibold ${
                    item.priority === "high"
                      ? "text-destructive"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.deadline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Today's Schedule */}
      <Card className="border-border bg-card/50 backdrop-blur-sm p-6 animate-fade-in-up [animation-delay:400ms]">
        <h2 className="text-xl font-bold mb-4">Today's Schedule</h2>
        <div className="space-y-3">
          {[
            { time: "09:00 AM", course: "Data Structures", room: "LH-101" },
            { time: "11:00 AM", course: "Operating Systems", room: "LH-203" },
            { time: "02:00 PM", course: "Machine Learning", room: "LH-305" },
            { time: "04:00 PM", course: "Database Systems Lab", room: "Lab-2" },
            { time: "05:30 PM", course: "Software Engineering", room: "LH-102" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-lg border border-border bg-secondary/30 p-4"
            >
              <div className="flex h-12 w-20 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <span className="text-sm font-semibold">{item.time}</span>
              </div>
              <div className="flex-1">
                <p className="font-medium">{item.course}</p>
                <p className="text-sm text-muted-foreground">{item.room}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
