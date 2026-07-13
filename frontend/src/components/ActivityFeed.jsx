// src/components/ActivityFeed.jsx
import {
  UserPlus,
  ArrowRightLeft,
  AtSign,
  FolderPlus,
  MessageSquare,
} from "lucide-react";
import { recentActivity, ACTIVITY_TYPES } from "@/lib/mockData";

const ACTIVITY_CONFIG = {
  [ACTIVITY_TYPES.TASK_ASSIGNED]: {
    icon: UserPlus,
    border: "border-indigo-500",
    iconColor: "text-indigo-500",
  },
  [ACTIVITY_TYPES.STATUS_CHANGED]: {
    icon: ArrowRightLeft,
    border: "border-success",
    iconColor: "text-success",
  },
  [ACTIVITY_TYPES.MENTION]: {
    icon: AtSign,
    border: "border-warning",
    iconColor: "text-warning",
  },
  [ACTIVITY_TYPES.PROJECT_CREATED]: {
    icon: FolderPlus,
    border: "border-indigo-500",
    iconColor: "text-indigo-500",
  },
  [ACTIVITY_TYPES.COMMENT]: {
    icon: MessageSquare,
    border: "border-graphite-200",
    iconColor: "text-graphite-700/60",
  },
};

function timeAgo(isoString) {
  const diffMs = Date.now() - new Date(isoString).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export default function ActivityFeed() {
  return (
    <div className="bg-white border border-graphite-200 rounded-xl p-5 mt-6">
      <h3 className="font-display text-sm font-semibold text-graphite-900 mb-4">
        Recent Activity
      </h3>

      <ul className="space-y-3">
        {recentActivity.map((item) => {
          const config = ACTIVITY_CONFIG[item.type];
          const Icon = config.icon;

          return (
            <li
              key={item.id}
              className={`flex items-start gap-3 border-l-2 ${config.border} pl-3 py-1`}
            >
              <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${config.iconColor}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-graphite-700 leading-snug">
                  {item.message}
                </p>
                <span className="font-mono text-xs text-graphite-700/50">
                  {timeAgo(item.timestamp)}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}