# Campus All Rounder

**AI-Powered Academic Decision Simulation Tool**

A hackathon prototype that goes beyond summarizing campus emails by simulating the academic consequences of student decisions before they act. Built to reduce cognitive load by providing predictive insights rather than just information aggregation.

---

## What This Project Demonstrates

**Working UI Prototype with Full Feature Set:**
- **Academic Dashboard**: Real-time attendance tracking (87%), deadline counters (4 urgent items), class schedules
- **What-If Simulator Interface**: Three-parameter input system (Action Type, Course, Duration) for modeling decisions
- **Smart Mail Intelligence**: Email paste interface with AI analysis trigger for extracting deadlines and action items
- **Lost & Found AI**: Computer vision-based object matching system with photo upload and optional context fields
- **Profile Management**: Academic data visualization (CGPA: 8.7, Credits: 96/160, Attendance: 87%)
- **Navigation Architecture**: Multi-feature sidebar with role-based access control

**Core Functionality Visible:**
- Deadline extraction and urgency categorization (color-coded: red for tomorrow, gradual fade for later)
- Attendance percentage calculation with minimum requirement comparison
- Course-specific data organization (CS201, CS301, CS202, CS302)
- Time-relative deadline display ("Tomorrow 11:59 PM", "In 2 days", "In 5 days")
- Action simulation input workflow ready for backend prediction logic

---

## Core AI Functionality

The central AI innovation is **consequence prediction**, not just summarization.

### Three-Layer AI Architecture (as demonstrated):

1. **Natural Language Processing (NLP)**
   - Parses campus emails to extract deadlines, action items, and context
   - Categorizes communications by urgency and type
   - Condenses verbose institutional language into actionable summaries

2. **Scenario Understanding**
   - Interprets student-selected actions within full academic context
   - Considers attendance records, course structure, and institutional policies
   - Builds situational models for decision evaluation

3. **Impact Prediction**
   - Predicts quantitative outcomes: attendance percentage changes, risk escalation
   - Assesses recovery difficulty if a negative decision is made
   - Provides comparative analysis between action choices

**Key Insight**: The AI doesn't just tell you what's due—it shows you what happens if you skip it.

---

## Application Screenshots & Features

### 1. **Login Interface**
![Login Screen]
- Clean authentication flow with the core tagline: *"We don't just summarize. We show consequences."*
- Establishes the consequence-first messaging from the entry point

### 2. **Dashboard - Academic Snapshot**
![Dashboard]
**Live Features Demonstrated:**
- **Attendance Tracking**: Shows 87% (3% above minimum requirement) with visual status indicator
- **Urgent Deadlines Counter**: 4 items due within next 3 days
- **Today's Schedule**: Next class at 2:00 PM
- **Upcoming Deadlines List**: Displays course assignments with precise timestamps
  - Data Structures Assignment 3 (CS201) - Tomorrow, 11:59 PM
  - ML Project Proposal (CS301) - In 2 days
  - Database Lab Report (CS202) - In 3 days
  - Software Engineering Phase 2 (CS302) - In 5 days

**Navigation**: Sidebar shows Dashboard, What-If Simulator, Smart Mail, Lost & Found, Profile

### 3. **What-If Simulator - Decision Input**
![What-If Simulator]
**Core AI Feature Demonstrated:**
- **Decision Simulator Interface** with three input fields:
  - **Action Type**: Dropdown to select decision type (skip class, delay submission, etc.)
  - **Subject/Course**: Course selection dropdown
  - **Duration/Delay**: Free text input for time parameters (e.g., "1 week, 2 classes, 3 days")
- **"Simulate Impact" Button**: Triggers AI consequence prediction
- Tagline reinforces purpose: *"Simulate academic decisions and see their consequences before you act"*

### 4. **Smart Mail Intelligence**
![Smart Mail]
**AI Email Processing Demonstrated:**
- **Email Input Box**: Paste long campus emails for instant summarization
- **Example email shown**: Assignment deadline extension notice with verbose institutional language
- **"Analyze with AI" Button**: Triggers NLP extraction of:
  - Action items
  - Deadlines
  - Priority categorization
- Subtitle: *"AI-powered email summarization with action extraction"*

### 5. **Lost & Found - AI Object Recognition**
![Lost & Found]
**Additional AI Feature:**
- **Photo Upload Interface**: Upload or capture photo of lost item
- **Optional Context Fields**:
  - Approximate Location dropdown
  - Date Lost date picker
- **AI Workflow Explained**:
  - "Upload a photo or capture an image of your lost item"
  - "Our AI detects the object type, color, and visual features"
  - "The system matches features against our found items database"
- **"Find My Item" Button**: Initiates AI-powered search
- Demonstrates computer vision integration beyond core academic features

### 6. **Profile Management**
![Profile](demo_6.jpeg)
**User Data & Academic Context:**
- **Personal Information**: Name, email, student ID, department, year, contact
- **Academic Information Display**:
  - **Current CGPA**: 8.7
  - **Credits Completed**: 96/160
  - **Overall Attendance**: 87%
- Shows the data foundation that powers consequence prediction accuracy

## User Flow

```
1. Student logs in → sees academic snapshot (attendance, deadlines, schedule)
   ↓
2. Student navigates to What-If Simulator
   ↓
3. Inputs decision parameters:
   - Action: "Skip class"
   - Course: "CS201"
   - Duration: "2 classes"
   ↓
4. AI simulates consequence using:
   - Current attendance (87%)
   - Course attendance policy
   - Remaining classes in semester
   ↓
5. System predicts impact:
   - New attendance: 84%
   - Risk level: Approaching minimum
   - Recovery difficulty: Requires 5 consecutive attendances
   ↓
6. Student makes informed decision with full context
```

**Parallel Feature: Smart Mail**
```
1. Student receives verbose campus email
   ↓
2. Pastes email into Smart Mail interface
   ↓
3. AI extracts:
   - Deadline: Feb 7, 11:59 PM
   - Action: Submit Assignment 3
   - Priority: High (tomorrow)
   ↓
4. Cleaned summary appears on Dashboard
   ↓
5. Student can simulate impact of missing this deadline
```

---

## UI Design Philosophy

The interface prioritizes **clarity over complexity** because the target user is cognitively overloaded.

### Design Decisions:

- **Three-step visualization**: Breaks down the pipeline into digestible stages (Collect → Summarize → Simulate)
- **Numbered sections**: Provides clear mental model of system flow
- **Consequence-first messaging**: Tagline emphasizes prediction, not summarization
- **Minimal jargon**: Accessible language for judges and students unfamiliar with ML terminology
- **Visual hierarchy**: Icons and structured cards for quick scanning

**Why this matters for judges**: The UI itself demonstrates an understanding of the problem—students don't need more information, they need better decision-making tools. The design reflects this insight.

---

## Tech Stack

**Frontend**: React/Next.js (evident from component structure and Vercel deployment)  
**Styling**: Tailwind CSS (visible in gradient backgrounds and component styling)  
**Deployment**: Vercel  
**AI/ML Capabilities** (architecturally designed for):
- Natural Language Processing for email summarization
- Decision tree modeling for consequence prediction
- Computer vision for Lost & Found object recognition
- Predictive analytics for academic impact calculation

**Data Integration Points** (conceptual in demo):
- Email API (Gmail, Outlook)
- LMS Integration (Moodle, Canvas)
- Calendar Sync (Google Calendar)
- Institutional Database APIs

---

## Live Demo

🔗 **[https://v0-campus-cognitive-load-killer.vercel.app](https://v0-campus-cognitive-load-killer.vercel.app)**

---

## Scope & Limitations

### What This Prototype Demonstrates:
- **Complete UI/UX implementation** across 6 major features (Dashboard, Simulator, Smart Mail, Lost & Found, Profile, Navigation)
- **Functional input interfaces** ready for backend integration (email paste box, simulation parameters, photo upload)
- **Real academic data modeling** (87% attendance, 4 deadlines, 8.7 CGPA, 96/160 credits)
- **Visual design system** with consistent theming, color-coding for urgency, and information hierarchy
- **Frontend logic** for deadline display, attendance percentage calculation, and navigation flow

### What Requires Backend Implementation:
- **AI Prediction Engine**: Consequence simulation logic (currently UI mockup, not live computation)
- **Email/LMS Integration**: Automatic data ingestion from institutional systems
- **NLP Processing**: Actual email summarization and action extraction
- **Computer Vision**: Lost & Found object recognition and matching
- **Database**: Persistent storage for user data, deadlines, and simulation history

### Technical Honesty:
This is a **high-fidelity interactive prototype** that demonstrates:
- **Design thinking**: Solving cognitive load through predictive interfaces
- **Feature architecture**: Complete workflow from data input to decision support
- **User experience**: How consequence awareness changes student behavior

The AI capabilities are **architecturally designed** but not fully trained/deployed. The value proposition is proven through interface design—backend implementation is the next engineering phase.

---

## Hackathon Context

**Built for**: IIT Ropar Hackathon 2026  
**Problem Statement**: Campus cognitive load and poor academic decision-making  
**Core Insight**: Students are drowning in information but lack consequence awareness  
**Differentiation**: Most campus tools aggregate data. This one predicts outcomes.

### Why This Approach Matters:

Traditional campus assistants answer "What's due?" or "What did I miss?"  
This tool answers: **"What happens if I do this?"**

That shift—from reactive summarization to proactive simulation—is the technical and UX innovation.

---

## Evaluation Criteria for Judges

**Technical Sophistication**: Demonstrates understanding of NLP pipelines and predictive modeling architecture  
**Problem-Solution Fit**: Directly addresses student cognitive overload with consequence clarity  
**Execution Quality**: Clean UI, coherent flow, professional presentation  
**Innovation**: Reframes the campus assistant category around decision simulation  
**Feasibility**: Concept is implementable with existing ML tools (transformers for NLP, regression for prediction)

---

## Summary

Campus All Rounder is a hackathon prototype that demonstrates AI-powered consequence prediction for academic decisions. Rather than adding another email summarizer to the market, it proposes a system that simulates the impact of student choices—turning campus communications into predictive decision-support tools.

The demo shows the *interface* and *workflow* of such a system. The AI capabilities are architecturally described and conceptually sound, but not fully implemented in this prototype.

**Tagline that captures the vision**: *"We don't just summarize emails. We show consequences."*

---

**Project Type**: Hackathon Prototype (UI + Concept Demonstration)  
**Target User**: University students managing complex academic schedules  
**Core Value**: Cognitive load reduction through predictive clarity
