"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Sparkles, Calendar, AlertCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

interface EmailSummary {
  actionItem: string;
  deadline: string;
  category: "Academic" | "Event" | "Urgent";
  solution: string;
  priority: "High" | "Medium" | "Low";
}

interface EmailAnalysis {
  originalEmail: string;
  subject: string;
  sender: string;
  summaries: EmailSummary[];
  overallSummary: string;
}

export default function SmartMailPage() {
  const [emailContent, setEmailContent] = useState("");
  const [analysis, setAnalysis] = useState<EmailAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showOriginal, setShowOriginal] = useState(true);

  const analyzeEmail = (email: string): EmailAnalysis => {
    console.log("[v0] Starting email analysis...");
    
    // Extract subject
    const subjectMatch = email.match(/Subject:\s*(.+?)(?:\n|$)/i);
    const subject = subjectMatch ? subjectMatch[1].trim() : "No Subject";
    
    // Extract sender
    const fromMatch = email.match(/From:\s*(.+?)(?:\n|$)/i);
    const sender = fromMatch ? fromMatch[1].trim() : "Unknown Sender";
    
    console.log("[v0] Extracted subject:", subject);
    console.log("[v0] Extracted sender:", sender);
    
    const summaries: EmailSummary[] = [];
    const emailLower = email.toLowerCase();
    
    // Keywords for detection
    const assignmentKeywords = ["assignment", "homework", "project", "report", "submission"];
    const examKeywords = ["exam", "quiz", "test", "midterm", "final"];
    const meetingKeywords = ["meeting", "session", "seminar", "workshop", "presentation"];
    const registrationKeywords = ["register", "registration", "enroll", "enrollment"];
    const deadlineKeywords = ["deadline", "due date", "submit by", "before"];
    
    // Detect assignments
    if (assignmentKeywords.some(kw => emailLower.includes(kw))) {
      const assignmentMatch = email.match(/assignment\s+(\d+|[IVX]+)/i);
      const courseMatch = email.match(/\b([A-Z]{2,4}\s*\d{3})\b/);
      const dateMatch = email.match(/\b((?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+\d{1,2}(?:,\s+\d{4})?|\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4}|tomorrow|next\s+\w+)\b/i);
      const timeMatch = email.match(/\b(\d{1,2}:\d{2}\s*(?:AM|PM|am|pm)?)\b/);
      
      const assignmentNum = assignmentMatch ? assignmentMatch[1] : "";
      const course = courseMatch ? courseMatch[1] : "the course";
      const deadline = dateMatch ? dateMatch[1] : "soon";
      const time = timeMatch ? ` at ${timeMatch[1]}` : "";
      
      summaries.push({
        actionItem: `Submit Assignment ${assignmentNum} for ${course}`,
        deadline: `${deadline}${time}`.trim(),
        category: "Academic",
        solution: `Complete and submit the assignment through the LMS portal before the deadline. Allocate sufficient time for review and submission.`,
        priority: emailLower.includes("urgent") || emailLower.includes("extended") ? "High" : "Medium",
      });
      
      console.log("[v0] Detected assignment:", assignmentNum, course);
    }
    
    // Detect exams
    if (examKeywords.some(kw => emailLower.includes(kw))) {
      const examTypeMatch = email.match(/\b(exam|quiz|test|midterm|final)\b/i);
      const courseMatch = email.match(/\b([A-Z]{2,4}\s*\d{3})\b/);
      const dateMatch = email.match(/\b((?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+\d{1,2}(?:,\s+\d{4})?|\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4}|tomorrow|next\s+\w+)\b/i);
      const timeMatch = email.match(/\b(\d{1,2}:\d{2}\s*(?:AM|PM|am|pm)?)\b/);
      
      const examType = examTypeMatch ? examTypeMatch[1] : "Exam";
      const course = courseMatch ? courseMatch[1] : "the course";
      const date = dateMatch ? dateMatch[1] : "upcoming";
      const time = timeMatch ? ` at ${timeMatch[1]}` : "";
      
      summaries.push({
        actionItem: `Prepare for ${examType} in ${course}`,
        deadline: `${date}${time}`.trim(),
        category: "Urgent",
        solution: `Review lecture notes, practice problems, and previous assignments. Create a study schedule and attend any review sessions offered.`,
        priority: "High",
      });
      
      console.log("[v0] Detected exam:", examType, course);
    }
    
    // Detect meetings
    if (meetingKeywords.some(kw => emailLower.includes(kw))) {
      const meetingTypeMatch = email.match(/\b(meeting|session|seminar|workshop)\b/i);
      const dateMatch = email.match(/\b((?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+\d{1,2}(?:,\s+\d{4})?|\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4}|tomorrow|next\s+\w+|today)\b/i);
      const timeMatch = email.match(/\b(\d{1,2}:\d{2}\s*(?:AM|PM|am|pm)?)\b/);
      const locationMatch = email.match(/\b(?:room|hall|venue|location|at)\s*:?\s*([A-Z0-9\-]+)/i);
      
      const meetingType = meetingTypeMatch ? meetingTypeMatch[1] : "Meeting";
      const date = dateMatch ? dateMatch[1] : "soon";
      const time = timeMatch ? ` at ${timeMatch[1]}` : "";
      const location = locationMatch ? ` (${locationMatch[1]})` : "";
      
      summaries.push({
        actionItem: `Attend ${meetingType}${location}`,
        deadline: `${date}${time}`.trim(),
        category: emailLower.includes("mandatory") ? "Urgent" : "Event",
        solution: `Mark your calendar and set a reminder 15 minutes before. Review any preparation materials mentioned in the email.`,
        priority: emailLower.includes("mandatory") ? "High" : "Medium",
      });
      
      console.log("[v0] Detected meeting:", meetingType, date);
    }
    
    // Detect registrations
    if (registrationKeywords.some(kw => emailLower.includes(kw))) {
      const regTypeMatch = email.match(/register(?:ation)?\s+for\s+([^.!?]+)/i);
      const dateMatch = email.match(/\b(?:by|before)\s+((?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+\d{1,2}(?:,\s+\d{4})?|\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4})\b/i);
      const timeMatch = email.match(/\b(\d{1,2}:\d{2}\s*(?:AM|PM|am|pm)?)\b/);
      
      const regFor = regTypeMatch ? regTypeMatch[1].trim() : "required activity";
      const deadline = dateMatch ? dateMatch[1] : "soon";
      const time = timeMatch ? ` at ${timeMatch[1]}` : "";
      
      summaries.push({
        actionItem: `Register for ${regFor}`,
        deadline: `${deadline}${time}`.trim(),
        category: "Academic",
        solution: `Complete the registration process through the student portal. Ensure all prerequisites are met and necessary documents are ready.`,
        priority: "High",
      });
      
      console.log("[v0] Detected registration:", regFor);
    }
    
    // If no specific items detected, create a general summary
    if (summaries.length === 0) {
      const sentences = email.split(/[.!?]+/).filter(s => s.trim().length > 20);
      const importantSentence = sentences[0] || "Review email content";
      
      summaries.push({
        actionItem: importantSentence.trim().slice(0, 100),
        deadline: "Check email for details",
        category: "Academic",
        solution: "Review the full email content carefully and take appropriate action as mentioned.",
        priority: "Low",
      });
    }
    
    const overallSummary = `Analyzed email from ${sender}. Found ${summaries.length} action item${summaries.length > 1 ? 's' : ''} requiring attention.`;
    
    console.log("[v0] Analysis complete. Found", summaries.length, "items");
    
    return {
      originalEmail: email,
      subject,
      sender,
      summaries,
      overallSummary,
    };
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setShowOriginal(true);
    
    console.log("[v0] Email content length:", emailContent.length);
    
    // Simulate AI processing time
    setTimeout(() => {
      const result = analyzeEmail(emailContent);
      setAnalysis(result);
      setIsAnalyzing(false);
    }, 1500);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic":
        return "bg-accent/10 text-accent border-accent/20";
      case "Urgent":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "Event":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-secondary/10 text-muted-foreground border-border";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Smart Mail Intelligence</h1>
        <p className="text-muted-foreground">
          AI-powered email summarization with action extraction
        </p>
      </div>

      {/* Input Section */}
      <Card className="border-border bg-card/50 backdrop-blur-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Paste Your Email</h2>
            <p className="text-sm text-muted-foreground">
              Long campus emails will be summarized instantly
            </p>
          </div>
        </div>

        <Textarea
          placeholder="Paste your campus email here... &#10;&#10;Example: Dear Students, This is to inform you that the deadline for submitting Assignment 3 for Data Structures (CS201) has been extended to Feb 7, 11:59 PM. Please ensure timely submission on the LMS portal..."
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          className="min-h-[200px] bg-secondary/50 border-border mb-4"
        />

        <Button
          onClick={handleAnalyze}
          disabled={!emailContent.trim() || isAnalyzing}
          className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
        >
          {isAnalyzing ? (
            <>
              <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Analyze with AI
            </>
          )}
        </Button>
      </Card>

      {/* Results Section */}
      {analysis && (
        <div className="space-y-6 animate-fade-in-up">
          {/* Email Summary Header */}
          <Card className="border-border bg-accent/5 backdrop-blur-sm p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-semibold">{analysis.overallSummary}</p>
                  <p className="text-xs text-muted-foreground">
                    Subject: {analysis.subject} | From: {analysis.sender}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowOriginal(!showOriginal)}
                className="text-xs"
              >
                {showOriginal ? "Hide" : "Show"} Original Email
              </Button>
            </div>
          </Card>

          {/* Original Email Content */}
          {showOriginal && (
            <Card className="border-border bg-card/50 backdrop-blur-sm p-6 animate-fade-in">
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Original Email:</h3>
              <div className="bg-secondary/50 border border-border rounded-lg p-4 max-h-64 overflow-y-auto">
                <pre className="text-sm whitespace-pre-wrap font-sans text-foreground leading-relaxed">
                  {analysis.originalEmail}
                </pre>
              </div>
            </Card>
          )}

          {/* Action Items Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">AI-Extracted Action Items</h2>
            <span className="text-sm text-muted-foreground">
              {analysis.summaries.length} items found
            </span>
          </div>

          {/* Action Items */}
          <div className="space-y-4">
            {analysis.summaries.map((summary, index) => (
              <Card
                key={index}
                className="border-border bg-card/50 backdrop-blur-sm p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${getCategoryColor(
                          summary.category
                        )}`}
                      >
                        {summary.category}
                      </span>
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                          summary.priority === "High"
                            ? "bg-destructive/10 text-destructive border-destructive/20"
                            : summary.priority === "Medium"
                            ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
                            : "bg-secondary/10 text-muted-foreground border-border"
                        }`}
                      >
                        {summary.priority} Priority
                      </span>
                    </div>
                    <p className="text-lg font-medium mb-2">{summary.actionItem}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">Deadline: {summary.deadline}</span>
                    </div>

                    {/* Solution Section */}
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mt-3">
                      <div className="flex items-start gap-2">
                        <Sparkles className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-accent mb-1">
                            AI-Suggested Solution:
                          </p>
                          <p className="text-sm text-foreground leading-relaxed">
                            {summary.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-accent/30 text-accent hover:bg-accent/10 bg-transparent"
                >
                  Add to What-If Simulation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
