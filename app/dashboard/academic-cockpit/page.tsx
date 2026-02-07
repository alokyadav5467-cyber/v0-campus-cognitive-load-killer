"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar,
  Clock,
  BookOpen,
  FileText,
  Upload,
  Download,
  Bell,
  TrendingUp,
  BarChart3,
  Award,
  Target,
  Brain,
  CheckCircle2,
  AlertCircle,
  GraduationCap
} from "lucide-react";

export default function AcademicCockpitPage() {
  const [selectedDay, setSelectedDay] = useState("monday");

  // Sample timetable data
  const timetable = {
    monday: [
      { time: "09:00 AM", subject: "Data Structures", room: "LH-101", professor: "Dr. Kumar", type: "Lecture" },
      { time: "11:00 AM", subject: "Operating Systems", room: "LH-203", professor: "Dr. Sharma", type: "Lecture" },
      { time: "02:00 PM", subject: "Database Lab", room: "Lab-2", professor: "Prof. Singh", type: "Lab" },
      { time: "04:00 PM", subject: "Machine Learning", room: "LH-305", professor: "Dr. Patel", type: "Lecture" },
    ],
    tuesday: [
      { time: "09:00 AM", subject: "Software Engineering", room: "LH-102", professor: "Dr. Verma", type: "Lecture" },
      { time: "11:00 AM", subject: "Computer Networks", room: "LH-204", professor: "Dr. Reddy", type: "Lecture" },
      { time: "02:00 PM", subject: "Web Development Lab", room: "Lab-3", professor: "Prof. Gupta", type: "Lab" },
    ],
    wednesday: [
      { time: "10:00 AM", subject: "Algorithms", room: "LH-101", professor: "Dr. Kumar", type: "Lecture" },
      { time: "12:00 PM", subject: "Cloud Computing", room: "LH-205", professor: "Dr. Joshi", type: "Lecture" },
      { time: "03:00 PM", subject: "Project Work", room: "Lab-1", professor: "Prof. Singh", type: "Lab" },
    ],
    thursday: [
      { time: "09:00 AM", subject: "Data Structures", room: "LH-101", professor: "Dr. Kumar", type: "Lecture" },
      { time: "11:00 AM", subject: "Operating Systems", room: "LH-203", professor: "Dr. Sharma", type: "Lecture" },
      { time: "02:00 PM", subject: "Machine Learning", room: "LH-305", professor: "Dr. Patel", type: "Lecture" },
    ],
    friday: [
      { time: "10:00 AM", subject: "Software Engineering", room: "LH-102", professor: "Dr. Verma", type: "Lecture" },
      { time: "12:00 PM", subject: "Computer Networks", room: "LH-204", professor: "Dr. Reddy", type: "Lecture" },
      { time: "02:00 PM", subject: "Database Lab", room: "Lab-2", professor: "Prof. Singh", type: "Lab" },
    ],
  };

  const days = [
    { id: "monday", label: "Mon" },
    { id: "tuesday", label: "Tue" },
    { id: "wednesday", label: "Wed" },
    { id: "thursday", label: "Thu" },
    { id: "friday", label: "Fri" },
  ];

  // Sample LMS data
  const courses = [
    {
      id: 1,
      code: "CS301",
      name: "Data Structures & Algorithms",
      professor: "Dr. Kumar",
      progress: 75,
      notes: 12,
      assignments: 3,
      announcements: 2,
    },
    {
      id: 2,
      code: "CS302",
      name: "Operating Systems",
      professor: "Dr. Sharma",
      progress: 60,
      notes: 8,
      assignments: 2,
      announcements: 1,
    },
    {
      id: 3,
      code: "CS303",
      name: "Machine Learning",
      professor: "Dr. Patel",
      progress: 85,
      notes: 15,
      assignments: 4,
      announcements: 3,
    },
    {
      id: 4,
      code: "CS304",
      name: "Software Engineering",
      professor: "Dr. Verma",
      progress: 70,
      notes: 10,
      assignments: 3,
      announcements: 1,
    },
  ];

  const assignments = [
    {
      id: 1,
      title: "Binary Tree Implementation",
      course: "CS301 - Data Structures",
      dueDate: "Feb 12, 2026",
      status: "pending",
      priority: "high",
    },
    {
      id: 2,
      title: "Process Scheduling Simulation",
      course: "CS302 - Operating Systems",
      dueDate: "Feb 15, 2026",
      status: "in-progress",
      priority: "medium",
    },
    {
      id: 3,
      title: "Neural Network Training",
      course: "CS303 - Machine Learning",
      dueDate: "Feb 10, 2026",
      status: "submitted",
      priority: "high",
    },
    {
      id: 4,
      title: "UML Diagrams Design",
      course: "CS304 - Software Engineering",
      dueDate: "Feb 18, 2026",
      status: "pending",
      priority: "low",
    },
  ];

  const academicStats = [
    { label: "Overall CGPA", value: "8.5", icon: Award, color: "text-accent" },
    { label: "Attendance", value: "87%", icon: CheckCircle2, color: "text-green-500" },
    { label: "Assignments", value: "12/15", icon: FileText, color: "text-primary" },
    { label: "Current Semester", value: "6th", icon: GraduationCap, color: "text-accent" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">The Academic Cockpit</h1>
          <p className="text-muted-foreground">Your complete academic management system</p>
        </div>
      </div>

      {/* Academic Intelligence Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {academicStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card 
              key={index}
              className="border-border bg-card/50 backdrop-blur-sm p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`h-5 w-5 ${stat.color}`} />
                <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          );
        })}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="timetable" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="timetable" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Live Timetable
          </TabsTrigger>
          <TabsTrigger value="lms" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            LMS Lite
          </TabsTrigger>
          <TabsTrigger value="intelligence" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            Academic Intelligence
          </TabsTrigger>
        </TabsList>

        {/* Timetable Tab */}
        <TabsContent value="timetable" className="space-y-6">
          <Card className="border-border bg-card/50 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Weekly Timetable</h2>
                <p className="text-sm text-muted-foreground">View your class schedule</p>
              </div>
            </div>

            {/* Day Selector */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {days.map((day) => (
                <Button
                  key={day.id}
                  variant={selectedDay === day.id ? "default" : "outline"}
                  className={`rounded-full ${selectedDay === day.id ? "bg-accent hover:bg-accent/90" : ""}`}
                  onClick={() => setSelectedDay(day.id)}
                >
                  {day.label}
                </Button>
              ))}
            </div>

            {/* Timetable Display */}
            <div className="space-y-3">
              {timetable[selectedDay as keyof typeof timetable].map((slot, index) => (
                <Card 
                  key={index}
                  className={`border-border p-4 transition-all hover:shadow-md ${
                    slot.type === "Lab" 
                      ? "border-l-4 border-l-accent bg-accent/5" 
                      : "border-l-4 border-l-primary bg-primary/5"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Time */}
                    <div className="flex items-center gap-2 md:w-32">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="font-bold text-sm">{slot.time}</span>
                    </div>

                    {/* Subject Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-bold text-lg">{slot.subject}</h3>
                        <Badge variant={slot.type === "Lab" ? "default" : "secondary"}>
                          {slot.type}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>📍 {slot.room}</span>
                        <span>👨‍🏫 {slot.professor}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* LMS Tab */}
        <TabsContent value="lms" className="space-y-6">
          {/* Courses Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {courses.map((course) => (
              <Card 
                key={course.id}
                className="border-border bg-card/50 backdrop-blur-sm p-5 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge variant="secondary" className="mb-2">{course.code}</Badge>
                    <h3 className="font-bold text-lg mb-1">{course.name}</h3>
                    <p className="text-sm text-muted-foreground">{course.professor}</p>
                  </div>
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Course Progress</span>
                    <span className="text-sm font-bold text-accent">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-2 rounded-lg bg-secondary/30">
                    <p className="text-xs text-muted-foreground mb-1">Notes</p>
                    <p className="font-bold">{course.notes}</p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-secondary/30">
                    <p className="text-xs text-muted-foreground mb-1">Assignments</p>
                    <p className="font-bold">{course.assignments}</p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-secondary/30">
                    <p className="text-xs text-muted-foreground mb-1">Updates</p>
                    <p className="font-bold">{course.announcements}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 rounded-full">
                    <Download className="h-3 w-3 mr-1" />
                    Notes
                  </Button>
                  <Button size="sm" className="flex-1 rounded-full bg-accent hover:bg-accent/90">
                    <FileText className="h-3 w-3 mr-1" />
                    Assignments
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Assignments Section */}
          <Card className="border-border bg-card/50 backdrop-blur-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Recent Assignments</h3>
                  <p className="text-sm text-muted-foreground">Track your submissions</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="rounded-full">
                <Upload className="h-3 w-3 mr-2" />
                Upload
              </Button>
            </div>

            <div className="space-y-3">
              {assignments.map((assignment) => {
                const statusStyles = {
                  pending: { bg: "bg-destructive/10", text: "text-destructive", border: "border-l-destructive" },
                  "in-progress": { bg: "bg-orange-500/10", text: "text-orange-600", border: "border-l-orange-500" },
                  submitted: { bg: "bg-green-500/10", text: "text-green-600", border: "border-l-green-500" },
                };

                const style = statusStyles[assignment.status as keyof typeof statusStyles];

                return (
                  <Card 
                    key={assignment.id}
                    className={`border-border border-l-4 ${style.border} ${style.bg} p-4`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-bold mb-1">{assignment.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{assignment.course}</p>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Due: {assignment.dueDate}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {assignment.priority} priority
                          </Badge>
                        </div>
                      </div>
                      <Badge className={`${style.bg} ${style.text} border-0 capitalize`}>
                        {assignment.status}
                      </Badge>
                    </div>
                  </Card>
                );
              })}
            </div>
          </Card>

          {/* Announcements */}
          <Card className="border-border bg-gradient-to-br from-accent/10 to-primary/5 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="h-5 w-5 text-accent" />
              <h3 className="font-bold">Latest Announcements</h3>
            </div>
            <div className="space-y-2">
              <p className="text-sm">• Mid-semester exams scheduled for March 1-10</p>
              <p className="text-sm">• Machine Learning project submissions extended by 3 days</p>
              <p className="text-sm">• Guest lecture on Cloud Computing - Feb 20, 3 PM</p>
            </div>
          </Card>
        </TabsContent>

        {/* Academic Intelligence Tab */}
        <TabsContent value="intelligence" className="space-y-6">
          <Card className="border-border bg-card/50 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Brain className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Academic Intelligence</h2>
                <p className="text-sm text-muted-foreground">Smart insights and analytics</p>
              </div>
            </div>

            {/* Performance Overview */}
            <div className="grid gap-4 md:grid-cols-3 mb-6">
              <Card className="border-border bg-gradient-to-br from-green-500/10 to-green-500/5 p-4">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <Badge variant="outline" className="border-green-500/30 text-green-600">
                    Excellent
                  </Badge>
                </div>
                <p className="text-2xl font-bold mb-1">8.5</p>
                <p className="text-sm text-muted-foreground">Current CGPA</p>
              </Card>

              <Card className="border-border bg-gradient-to-br from-accent/10 to-accent/5 p-4">
                <div className="flex items-center justify-between mb-2">
                  <Target className="h-5 w-5 text-accent" />
                  <Badge variant="outline" className="border-accent/30 text-accent">
                    On Track
                  </Badge>
                </div>
                <p className="text-2xl font-bold mb-1">87%</p>
                <p className="text-sm text-muted-foreground">Attendance Rate</p>
              </Card>

              <Card className="border-border bg-gradient-to-br from-primary/10 to-primary/5 p-4">
                <div className="flex items-center justify-between mb-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Active
                  </Badge>
                </div>
                <p className="text-2xl font-bold mb-1">92%</p>
                <p className="text-sm text-muted-foreground">Assignment Rate</p>
              </Card>
            </div>

            {/* Insights */}
            <div className="space-y-3">
              <h3 className="font-bold text-lg mb-4">AI-Powered Insights</h3>
              
              <Card className="border-border border-l-4 border-l-green-500 bg-green-500/5 p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Strong Performance in ML</h4>
                    <p className="text-sm text-muted-foreground">
                      You're performing exceptionally well in Machine Learning with 85% progress and all assignments submitted on time.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-border border-l-4 border-l-orange-500 bg-orange-500/5 p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Attendance Alert</h4>
                    <p className="text-sm text-muted-foreground">
                      Your attendance in Operating Systems is at 82%. Aim to attend the next 3 classes to stay above the 85% threshold.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-border border-l-4 border-l-accent bg-accent/5 p-4">
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Goal Tracking</h4>
                    <p className="text-sm text-muted-foreground">
                      To achieve your target CGPA of 9.0, focus on upcoming assignments in Data Structures and Software Engineering courses.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </Card>

          {/* Study Recommendations */}
          <Card className="border-border bg-gradient-to-br from-accent/10 to-primary/5 backdrop-blur-sm p-6">
            <h3 className="font-bold text-lg mb-4">Study Recommendations</h3>
            <div className="space-y-3">
              {[
                "Review Binary Trees concepts before tomorrow's Data Structures class",
                "Complete Process Scheduling assignment by tonight to avoid last-minute rush",
                "Join the ML study group session on Saturday at 4 PM",
                "Watch the recommended video on Software Design Patterns",
              ].map((recommendation, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card/50 p-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-bold">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed">{recommendation}</p>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
