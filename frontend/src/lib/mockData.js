// src/lib/mockData.js

export const ACTIVITY_TYPES = {
  TASK_ASSIGNED: "task_assigned",
  STATUS_CHANGED: "status_changed",
  MENTION: "mention",
  PROJECT_CREATED: "project_created",
  COMMENT: "comment",
};

export const recentActivity = [
  {
    id: 1,
    type: ACTIVITY_TYPES.TASK_ASSIGNED,
    message: "Alex assigned \"Fix auth token refresh\" to Priya",
    timestamp: "2026-07-13T09:12:00Z",
  },
  {
    id: 2,
    type: ACTIVITY_TYPES.STATUS_CHANGED,
    message: "\"API Gateway routing\" moved to In Review",
    timestamp: "2026-07-13T08:40:00Z",
  },
  {
    id: 3,
    type: ACTIVITY_TYPES.MENTION,
    message: "Priya mentioned you in \"Sprint 4 planning\"",
    timestamp: "2026-07-13T07:55:00Z",
  },
  {
    id: 4,
    type: ACTIVITY_TYPES.PROJECT_CREATED,
    message: "Rohit created a new project \"Notification Service\"",
    timestamp: "2026-07-12T16:20:00Z",
  },
  {
    id: 5,
    type: ACTIVITY_TYPES.COMMENT,
    message: "Meera commented on \"Design token audit\"",
    timestamp: "2026-07-12T14:05:00Z",
  },
  {
    id: 6,
    type: ACTIVITY_TYPES.STATUS_CHANGED,
    message: "\"Kafka event schema\" moved to Done",
    timestamp: "2026-07-12T11:30:00Z",
  },
];

// --- Teams data ---

export const TEAM_STATUS = {
  ON_TRACK: "on_track",
  AT_RISK: "at_risk",
  BEHIND: "behind",
};

export const teams = [
  {
    id: 1,
    name: "Platform Engineering",
    memberCount: 8,
    projectCount: 5,
    status: TEAM_STATUS.ON_TRACK,
    description: "Owns core platform services — API gateway, auth, and shared infrastructure.",
    createdAt: "2025-11-03",
  },
  {
    id: 2,
    name: "Frontend Team",
    memberCount: 5,
    projectCount: 3,
    status: TEAM_STATUS.ON_TRACK,
    description: "Builds and maintains the React dashboard and design system.",
    createdAt: "2025-12-10",
  },
  {
    id: 3,
    name: "Data & Analytics",
    memberCount: 6,
    projectCount: 4,
    status: TEAM_STATUS.AT_RISK,
    description: "Owns the analytics pipeline, reporting, and Spring AI insights.",
    createdAt: "2026-01-18",
  },
  {
    id: 4,
    name: "DevOps & Infra",
    memberCount: 4,
    projectCount: 2,
    status: TEAM_STATUS.ON_TRACK,
    description: "Manages Kubernetes, Terraform modules, and CI/CD pipelines.",
    createdAt: "2025-10-22",
  },
  {
    id: 5,
    name: "Backend Team",
    memberCount: 3,
    projectCount: 2,
    status: TEAM_STATUS.BEHIND,
    description: "Builds and maintains the domain microservices behind the API gateway.",
    createdAt: "2026-02-05",
  },
  {
    id: 6,
    name: "Testing Team",
    memberCount: 4,
    projectCount: 3,
    status: TEAM_STATUS.ON_TRACK,
    description: "Owns test strategy, coverage, and quality gates across all services.",
    createdAt: "2025-11-29",
  },
  {
    id: 7,
    name: "Solarch",
    memberCount: 5,
    projectCount: 3,
    status: TEAM_STATUS.ON_TRACK,
    description: "Solution architecture — cross-cutting technical design and standards.",
    createdAt: "2026-01-05",
  },
  {
    id: 8,
    name: "Core Team",
    memberCount: 6,
    projectCount: 4,
    status: TEAM_STATUS.ON_TRACK,
    description: "Core leadership and coordination across all engineering teams.",
    createdAt: "2025-10-15",
  },
];

// --- Team members data ---

export const teamMembers = {
  1: [
    { id: 1, name: "Aditya Rao", role: "Team Lead", email: "aditya.rao@sahyog.dev" },
    { id: 2, name: "Priya Nair", role: "Senior Engineer", email: "priya.nair@sahyog.dev" },
    { id: 3, name: "Rohit Sharma", role: "Backend Engineer", email: "rohit.sharma@sahyog.dev" },
    { id: 4, name: "Meera Iyer", role: "Backend Engineer", email: "meera.iyer@sahyog.dev" },
    { id: 5, name: "Karan Mehta", role: "DevOps Engineer", email: "karan.mehta@sahyog.dev" },
    { id: 6, name: "Sneha Kulkarni", role: "QA Engineer", email: "sneha.kulkarni@sahyog.dev" },
    { id: 7, name: "Vikram Joshi", role: "Engineer", email: "vikram.joshi@sahyog.dev" },
    { id: 8, name: "Anjali Desai", role: "Product Manager", email: "anjali.desai@sahyog.dev" },
  ],
  2: [
    { id: 9, name: "Alex Fernandes", role: "Team Lead", email: "alex.fernandes@sahyog.dev" },
    { id: 10, name: "Ishita Kapoor", role: "Frontend Engineer", email: "ishita.kapoor@sahyog.dev" },
    { id: 11, name: "Dev Patel", role: "Frontend Engineer", email: "dev.patel@sahyog.dev" },
    { id: 12, name: "Nisha Reddy", role: "UI/UX Designer", email: "nisha.reddy@sahyog.dev" },
    { id: 13, name: "Arjun Malhotra", role: "Engineer", email: "arjun.malhotra@sahyog.dev" },
  ],
  3: [
    { id: 14, name: "Sanya Bhatt", role: "Team Lead", email: "sanya.bhatt@sahyog.dev" },
    { id: 15, name: "Rahul Verma", role: "Data Engineer", email: "rahul.verma@sahyog.dev" },
    { id: 16, name: "Pooja Menon", role: "Data Analyst", email: "pooja.menon@sahyog.dev" },
    { id: 17, name: "Kabir Chawla", role: "ML Engineer", email: "kabir.chawla@sahyog.dev" },
    { id: 18, name: "Divya Pillai", role: "Data Engineer", email: "divya.pillai@sahyog.dev" },
    { id: 19, name: "Yash Agarwal", role: "Analytics Engineer", email: "yash.agarwal@sahyog.dev" },
  ],
  4: [
    { id: 20, name: "Manish Kumar", role: "Team Lead", email: "manish.kumar@sahyog.dev" },
    { id: 21, name: "Riya Saxena", role: "DevOps Engineer", email: "riya.saxena@sahyog.dev" },
    { id: 22, name: "Aman Gupta", role: "Site Reliability Engineer", email: "aman.gupta@sahyog.dev" },
    { id: 23, name: "Tanya Bose", role: "Cloud Engineer", email: "tanya.bose@sahyog.dev" },
  ],
  5: [
    { id: 24, name: "Farhan Sheikh", role: "Team Lead", email: "farhan.sheikh@sahyog.dev" },
    { id: 25, name: "Neha Choudhary", role: "Backend Engineer", email: "neha.choudhary@sahyog.dev" },
    { id: 26, name: "Siddharth Rao", role: "Backend Engineer", email: "siddharth.rao@sahyog.dev" },
  ],
  6: [
    { id: 27, name: "Kavya Shetty", role: "Team Lead", email: "kavya.shetty@sahyog.dev" },
    { id: 28, name: "Omkar Patil", role: "QA Engineer", email: "omkar.patil@sahyog.dev" },
    { id: 29, name: "Ritu Bansal", role: "QA Engineer", email: "ritu.bansal@sahyog.dev" },
    { id: 30, name: "Zaid Ansari", role: "Automation Engineer", email: "zaid.ansari@sahyog.dev" },
  ],
  7: [
    { id: 31, name: "Nikhil Bhatia", role: "Team Lead", email: "nikhil.bhatia@sahyog.dev" },
    { id: 32, name: "Shreya Ghosh", role: "Solution Architect", email: "shreya.ghosh@sahyog.dev" },
    { id: 33, name: "Varun Chandra", role: "Solution Architect", email: "varun.chandra@sahyog.dev" },
    { id: 34, name: "Ananya Krishnan", role: "Technical Architect", email: "ananya.krishnan@sahyog.dev" },
    { id: 35, name: "Rajat Sinha", role: "Architect", email: "rajat.sinha@sahyog.dev" },
  ],
  8: [
    { id: 36, name: "Deepak Nambiar", role: "Team Lead", email: "deepak.nambiar@sahyog.dev" },
    { id: 37, name: "Simran Kaur", role: "Engineering Manager", email: "simran.kaur@sahyog.dev" },
    { id: 38, name: "Harsh Vardhan", role: "Senior Engineer", email: "harsh.vardhan@sahyog.dev" },
    { id: 39, name: "Lavanya Iyer", role: "Senior Engineer", email: "lavanya.iyer@sahyog.dev" },
    { id: 40, name: "Aakash Bora", role: "Engineer", email: "aakash.bora@sahyog.dev" },
    { id: 41, name: "Preeti Nair", role: "Product Manager", email: "preeti.nair@sahyog.dev" },
  ],
};

// --- Projects data ---

export const PROJECT_STATUS = {
  PLANNED: "planned",
  ACTIVE: "active",
  ON_HOLD: "on_hold",
  COMPLETED: "completed",
};

export const projects = [
  { id: 1, name: "API Gateway Revamp", teamId: 1, status: PROJECT_STATUS.ACTIVE, progress: 65, dueDate: "2026-08-15" },
  { id: 2, name: "Auth Service Migration", teamId: 1, status: PROJECT_STATUS.PLANNED, progress: 10, dueDate: "2026-09-01" },
  { id: 3, name: "Dashboard Redesign", teamId: 2, status: PROJECT_STATUS.ACTIVE, progress: 80, dueDate: "2026-07-30" },
  { id: 4, name: "Design System v2", teamId: 2, status: PROJECT_STATUS.COMPLETED, progress: 100, dueDate: "2026-06-20" },
  { id: 5, name: "Analytics Pipeline Overhaul", teamId: 3, status: PROJECT_STATUS.ON_HOLD, progress: 35, dueDate: "2026-08-10" },
  { id: 6, name: "Spring AI Insights Engine", teamId: 3, status: PROJECT_STATUS.PLANNED, progress: 5, dueDate: "2026-09-15" },
  { id: 7, name: "Kubernetes Migration", teamId: 4, status: PROJECT_STATUS.ACTIVE, progress: 50, dueDate: "2026-08-25" },
  { id: 8, name: "Terraform Module Cleanup", teamId: 4, status: PROJECT_STATUS.COMPLETED, progress: 100, dueDate: "2026-07-05" },
  { id: 9, name: "Onboarding Funnel Experiment", teamId: 5, status: PROJECT_STATUS.ACTIVE, progress: 40, dueDate: "2026-08-05" },
  { id: 10, name: "Test Automation Suite", teamId: 6, status: PROJECT_STATUS.ACTIVE, progress: 70, dueDate: "2026-07-28" },
  { id: 11, name: "Load Testing Framework", teamId: 6, status: PROJECT_STATUS.PLANNED, progress: 0, dueDate: "2026-09-10" },
  { id: 12, name: "Cross-Team Standards Doc", teamId: 7, status: PROJECT_STATUS.ON_HOLD, progress: 20, dueDate: "2026-08-20" },
];

// --- Tasks data ---

export const TASK_STATUS = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  IN_REVIEW: "in_review",
  DONE: "done",
};

export const TASK_PRIORITY = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

export const tasks = [
  { id: 1, title: "Fix auth token refresh bug", projectId: 2, assignee: "Priya Nair", status: TASK_STATUS.IN_PROGRESS, priority: TASK_PRIORITY.HIGH, dueDate: "2026-07-22" },
  { id: 2, title: "Set up rate limiting on gateway", projectId: 1, assignee: "Rohit Sharma", status: TASK_STATUS.TODO, priority: TASK_PRIORITY.MEDIUM, dueDate: "2026-07-25" },
  { id: 3, title: "Design new sidebar collapse state", projectId: 3, assignee: "Nisha Reddy", status: TASK_STATUS.IN_REVIEW, priority: TASK_PRIORITY.LOW, dueDate: "2026-07-20" },
  { id: 4, title: "Migrate button components to v2 tokens", projectId: 4, assignee: "Ishita Kapoor", status: TASK_STATUS.DONE, priority: TASK_PRIORITY.MEDIUM, dueDate: "2026-07-10" },
  { id: 5, title: "Build Kafka consumer for task events", projectId: 5, assignee: "Rahul Verma", status: TASK_STATUS.IN_PROGRESS, priority: TASK_PRIORITY.HIGH, dueDate: "2026-07-28" },
  { id: 6, title: "Draft Spring AI prompt templates", projectId: 6, assignee: "Kabir Chawla", status: TASK_STATUS.TODO, priority: TASK_PRIORITY.LOW, dueDate: "2026-08-02" },
  { id: 7, title: "Write Helm chart for task-service", projectId: 7, assignee: "Riya Saxena", status: TASK_STATUS.IN_PROGRESS, priority: TASK_PRIORITY.MEDIUM, dueDate: "2026-07-26" },
  { id: 8, title: "Clean up unused Terraform variables", projectId: 8, assignee: "Aman Gupta", status: TASK_STATUS.DONE, priority: TASK_PRIORITY.LOW, dueDate: "2026-07-04" },
  { id: 9, title: "A/B test new signup CTA copy", projectId: 9, assignee: "Neha Choudhary", status: TASK_STATUS.IN_REVIEW, priority: TASK_PRIORITY.MEDIUM, dueDate: "2026-07-24" },
  { id: 10, title: "Write Cypress tests for login flow", projectId: 10, assignee: "Omkar Patil", status: TASK_STATUS.TODO, priority: TASK_PRIORITY.HIGH, dueDate: "2026-07-27" },
  { id: 11, title: "Set up k6 load test scenarios", projectId: 11, assignee: "Ritu Bansal", status: TASK_STATUS.TODO, priority: TASK_PRIORITY.LOW, dueDate: "2026-08-05" },
  { id: 12, title: "Document API versioning standard", projectId: 12, assignee: "Shreya Ghosh", status: TASK_STATUS.IN_PROGRESS, priority: TASK_PRIORITY.MEDIUM, dueDate: "2026-07-30" },
  { id: 13, title: "Review PR for gateway retry logic", projectId: 1, assignee: "Aditya Rao", status: TASK_STATUS.IN_REVIEW, priority: TASK_PRIORITY.HIGH, dueDate: "2026-07-21" },
  { id: 14, title: "Add dark mode toggle to settings", projectId: 3, assignee: "Dev Patel", status: TASK_STATUS.TODO, priority: TASK_PRIORITY.LOW, dueDate: "2026-08-01" },
];

// --- Users & Roles data ---

export const ROLE = {
  ADMIN: "admin",
  MANAGER: "manager",
  MEMBER: "member",
};

export const USER_STATUS = {
  ACTIVE: "active",
  INVITED: "invited",
};

export const users = [
  { id: 1, name: "Aditya Rao", email: "aditya.rao@sahyog.dev", role: ROLE.ADMIN, status: USER_STATUS.ACTIVE, lastActive: "2026-07-19" },
  { id: 2, name: "Priya Nair", email: "priya.nair@sahyog.dev", role: ROLE.MANAGER, status: USER_STATUS.ACTIVE, lastActive: "2026-07-18" },
  { id: 3, name: "Rohit Sharma", email: "rohit.sharma@sahyog.dev", role: ROLE.MEMBER, status: USER_STATUS.ACTIVE, lastActive: "2026-07-19" },
  { id: 4, name: "Alex Fernandes", email: "alex.fernandes@sahyog.dev", role: ROLE.MANAGER, status: USER_STATUS.ACTIVE, lastActive: "2026-07-17" },
  { id: 5, name: "Ishita Kapoor", email: "ishita.kapoor@sahyog.dev", role: ROLE.MEMBER, status: USER_STATUS.ACTIVE, lastActive: "2026-07-19" },
  { id: 6, name: "Sanya Bhatt", email: "sanya.bhatt@sahyog.dev", role: ROLE.MANAGER, status: USER_STATUS.ACTIVE, lastActive: "2026-07-16" },
  { id: 7, name: "Kabir Chawla", email: "kabir.chawla@sahyog.dev", role: ROLE.MEMBER, status: USER_STATUS.INVITED, lastActive: "—" },
  { id: 8, name: "Manish Kumar", email: "manish.kumar@sahyog.dev", role: ROLE.MANAGER, status: USER_STATUS.ACTIVE, lastActive: "2026-07-19" },
  { id: 9, name: "Riya Saxena", email: "riya.saxena@sahyog.dev", role: ROLE.MEMBER, status: USER_STATUS.ACTIVE, lastActive: "2026-07-15" },
  { id: 10, name: "Farhan Sheikh", email: "farhan.sheikh@sahyog.dev", role: ROLE.MANAGER, status: USER_STATUS.ACTIVE, lastActive: "2026-07-18" },
  { id: 11, name: "Kavya Shetty", email: "kavya.shetty@sahyog.dev", role: ROLE.MANAGER, status: USER_STATUS.ACTIVE, lastActive: "2026-07-19" },
  { id: 12, name: "Zaid Ansari", email: "zaid.ansari@sahyog.dev", role: ROLE.MEMBER, status: USER_STATUS.INVITED, lastActive: "—" },
];

export const PERMISSIONS = [
  "View teams",
  "Manage teams",
  "View projects",
  "Manage projects",
  "Assign tasks",
  "Delete tasks",
  "Manage users",
  "View analytics",
  "View audit logs",
];

// true = permission granted for that role
export const PERMISSION_MATRIX = {
  [ROLE.ADMIN]: {
    "View teams": true,
    "Manage teams": true,
    "View projects": true,
    "Manage projects": true,
    "Assign tasks": true,
    "Delete tasks": true,
    "Manage users": true,
    "View analytics": true,
    "View audit logs": true,
  },
  [ROLE.MANAGER]: {
    "View teams": true,
    "Manage teams": true,
    "View projects": true,
    "Manage projects": true,
    "Assign tasks": true,
    "Delete tasks": false,
    "Manage users": false,
    "View analytics": true,
    "View audit logs": false,
  },
  [ROLE.MEMBER]: {
    "View teams": true,
    "Manage teams": false,
    "View projects": true,
    "Manage projects": false,
    "Assign tasks": true,
    "Delete tasks": false,
    "Manage users": false,
    "View analytics": false,
    "View audit logs": false,
  },
};