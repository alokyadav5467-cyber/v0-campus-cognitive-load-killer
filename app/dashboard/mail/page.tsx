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
}

export default function SmartMailPage() {
  const [emailContent, setEmailContent] = useState("");
  const [summaries, setSummaries] = useState<EmailSummary[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setSummaries([
        {
          actionItem: "Submit Data Structures Assignment 3 on LMS portal",
          deadline: "Tomorrow, Feb 7, 11:59 PM",
          category: "Academic",
        },
        {
          actionItem: "Attend mandatory project review meeting with Prof. Kumar",
          deadline: "Feb 8, 2:00 PM",
          category: "Urgent",
        },
        {
          actionItem: "Register for Spring Semester Elective Courses",
          deadline: "Feb 10, 5:00 PM",
          category: "Academic",
        },
      ]);
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
      {summaries.length > 0 && (
        <div className="space-y-4 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">AI-Extracted Insights</h2>
            <span className="text-sm text-muted-foreground">
              {summaries.length} action items found
            </span>
          </div>

          <div className="space-y-4">
            {summaries.map((summary, index) => (
              <Card
                key={index}
                className="border-border bg-card/50 backdrop-blur-sm p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${getCategoryColor(
                          summary.category
                        )}`}
                      >
                        {summary.category}
                      </span>
                    </div>
                    <p className="text-lg font-medium mb-2">{summary.actionItem}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{summary.deadline}</span>
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

          {/* Summary Stats */}
          <Card className="border-border bg-accent/5 backdrop-blur-sm p-4">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm font-semibold">AI Summary Complete</p>
                <p className="text-xs text-muted-foreground">
                  Extracted {summaries.length} actionable items with deadlines and categories
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
