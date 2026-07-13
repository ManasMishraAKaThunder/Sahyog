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