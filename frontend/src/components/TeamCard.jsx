// src/components/TeamCard.jsx
import { Link } from 'react-router-dom'
import { Users2 } from "lucide-react";
import { TEAM_STATUS } from "@/lib/mockData";

const STATUS_CONFIG = {
  [TEAM_STATUS.ON_TRACK]: {
    label: "On Track",
    badgeClass: "bg-success/10 text-success",
  },
  [TEAM_STATUS.AT_RISK]: {
    label: "At Risk",
    badgeClass: "bg-warning/10 text-warning",
  },
  [TEAM_STATUS.BEHIND]: {
    label: "Behind",
    badgeClass: "bg-danger/10 text-danger",
  },
};

export default function TeamCard({ id, name, memberCount, status }) {
  const config = STATUS_CONFIG[status];

  return (
    <Link
      to={`/teams/${id}`}
      className="block bg-white border border-graphite-200 rounded-xl p-5 hover:border-indigo-500 transition-colors"
    >
      <div className="flex items-start justify-between">
        <h3 className="font-display text-base font-semibold text-graphite-900">
          {name}
        </h3>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${config.badgeClass}`}
        >
          {config.label}
        </span>
      </div>

      <div className="flex items-center gap-1.5 mt-3 text-graphite-700/70">
        <Users2 className="w-4 h-4" />
        <span className="text-sm">
          {memberCount} {memberCount === 1 ? "member" : "members"}
        </span>
      </div>
    </Link>
  );
}