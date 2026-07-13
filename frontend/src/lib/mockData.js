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
  { id: 1, name: "Platform Engineering", memberCount: 8, status: TEAM_STATUS.ON_TRACK },
  { id: 2, name: "Frontend Guild", memberCount: 5, status: TEAM_STATUS.ON_TRACK },
  { id: 3, name: "Data & Analytics", memberCount: 6, status: TEAM_STATUS.AT_RISK },
  { id: 4, name: "DevOps & Infra", memberCount: 4, status: TEAM_STATUS.ON_TRACK },
  { id: 5, name: "Growth", memberCount: 3, status: TEAM_STATUS.BEHIND },
  { id: 6, name: "Security", memberCount: 4, status: TEAM_STATUS.ON_TRACK },
];