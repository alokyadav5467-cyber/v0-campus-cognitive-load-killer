"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Sparkles, AlertTriangle, CheckCircle2, TrendingDown, Lightbulb } from "lucide-react";
import { useState } from "react";

interface SimulationResult {
  attendanceBefore: number;
  attendanceAfter: number;
  riskLevel: "Safe" | "Warning" | "Danger";
  explanation: string;
  recoveryAction: string;
}

export default function SimulatorPage() {
  const [actionType, setActionType] = useState("");
  const [course, setCourse] = useState("");
  const [duration, setDuration] = useState("");
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulate = () => {
    setIsSimulating(true);

    // Simulate AI processing
    setTimeout(() => {
      const currentAttendance = 87;
      const impact = actionType === "skip" ? -5 : -3;
      const newAttendance = currentAttendance + impact;

      let riskLevel: "Safe" | "Warning" | "Danger";
      if (newAttendance >= 85) riskLevel = "Safe";
      else if (newAttendance >= 80) riskLevel = "Warning";
      else riskLevel = "Danger";

      setResult({
        attendanceBefore: currentAttendance,
        attendanceAfter: newAttendance,
        riskLevel,
        explanation:
          actionType === "skip"
            ? `Skipping ${duration} of ${course} will drop your attendance by ${Math.abs(
                impact
              )}%. This brings you ${
                newAttendance >= 85
                  ? "still above"
                  : newAttendance >= 80
                  ? "close to"
                  : "below"
              } the minimum 85% requirement.`
            : `Delaying the ${course} assignment by ${duration} may impact your attendance indirectly due to potential follow-up consequences. Your attendance could drop by ${Math.abs(
                impact
              )}%.`,
        recoveryAction:
          newAttendance >= 85
            ? "You're still in a safe zone. Continue maintaining good attendance."
            : newAttendance >= 80
            ? "Attend the next 3 classes without fail to recover. Consider attending extra tutorials."
            : "Critical situation! Attend all remaining classes and meet with your advisor immediately.",
      });
      setIsSimulating(false);
    }, 2000);
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case "Safe":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Warning":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Danger":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-secondary/10 text-muted-foreground border-border";
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case "Safe":
        return <CheckCircle2 className="h-6 w-6" />;
      case "Warning":
        return <AlertTriangle className="h-6 w-6" />;
      case "Danger":
        return <TrendingDown className="h-6 w-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">What-If Simulator</h1>
        <p className="text-muted-foreground">
          Simulate academic decisions and see their consequences before you act
        </p>
      </div>

      {/* Simulator Card */}
      <Card className="border-border bg-card/50 backdrop-blur-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Decision Simulator</h2>
            <p className="text-sm text-muted-foreground">
              AI-powered impact prediction
            </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <div className="space-y-2">
            <Label htmlFor="action">Action Type</Label>
            <Select value={actionType} onValueChange={setActionType}>
              <SelectTrigger id="action" className="bg-secondary/50 border-border">
                <SelectValue placeholder="Select action type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="skip">Skip Class</SelectItem>
                <SelectItem value="delay">Delay Assignment</SelectItem>
                <SelectItem value="miss">Miss Exam</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="course">Subject / Course</Label>
            <Select value={course} onValueChange={setCourse}>
              <SelectTrigger id="course" className="bg-secondary/50 border-border">
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cs201">Data Structures (CS201)</SelectItem>
                <SelectItem value="cs202">Database Systems (CS202)</SelectItem>
                <SelectItem value="cs301">Machine Learning (CS301)</SelectItem>
                <SelectItem value="cs302">Software Engineering (CS302)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="duration">Duration / Delay</Label>
            <Input
              id="duration"
              type="text"
              placeholder="e.g., 1 week, 2 classes, 3 days"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="bg-secondary/50 border-border"
            />
          </div>
        </div>

        <Button
          onClick={handleSimulate}
          disabled={!actionType || !course || !duration || isSimulating}
          className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 transition-all"
        >
          {isSimulating ? (
            <>
              <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
              Simulating Impact...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-5 w-5" />
              Simulate Impact
            </>
          )}
        </Button>
      </Card>

      {/* Results Section */}
      {result && (
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-2xl font-bold">Simulation Results</h2>

          {/* Impact Overview */}
          <Card className="border-border bg-card/50 backdrop-blur-sm p-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Before */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">Current Attendance</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">{result.attendanceBefore}%</span>
                  <span className="text-sm text-muted-foreground">Safe Zone</span>
                </div>
              </div>

              {/* After */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">Predicted Attendance</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-accent">
                    {result.attendanceAfter}%
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      result.riskLevel === "Safe"
                        ? "text-green-500"
                        : result.riskLevel === "Warning"
                        ? "text-yellow-500"
                        : "text-destructive"
                    }`}
                  >
                    {result.riskLevel}
                  </span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="h-3 w-full rounded-full bg-secondary overflow-hidden">
                <div
                  className={`h-full transition-all duration-1000 ${
                    result.attendanceAfter >= 85
                      ? "bg-green-500"
                      : result.attendanceAfter >= 80
                      ? "bg-yellow-500"
                      : "bg-destructive"
                  }`}
                  style={{ width: `${result.attendanceAfter}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>0%</span>
                <span className="font-semibold">Minimum: 85%</span>
                <span>100%</span>
              </div>
            </div>
          </Card>

          {/* Risk Indicator */}
          <Card
            className={`border backdrop-blur-sm p-6 ${getRiskColor(result.riskLevel)}`}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-current/10">
                {getRiskIcon(result.riskLevel)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold">Risk Level: {result.riskLevel}</h3>
                </div>
                <p className="text-sm opacity-90 leading-relaxed">{result.explanation}</p>
              </div>
            </div>
          </Card>

          {/* Recovery Action */}
          <Card className="border-border bg-accent/5 backdrop-blur-sm p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Lightbulb className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Suggested Recovery Action</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {result.recoveryAction}
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
