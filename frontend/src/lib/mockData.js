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