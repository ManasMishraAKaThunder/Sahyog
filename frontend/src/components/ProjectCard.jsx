import { teams, PROJECT_STATUS } from "@/lib/mockData";

const STATUS_CONFIG = {
  [PROJECT_STATUS.PLANNED]: { label: "Planned", badgeClass: "bg-graphite-200 text-graphite-700" },
  [PROJECT_STATUS.ACTIVE]: { label: "Active", badgeClass: "bg-indigo-100 text-indigo-600" },
  [PROJECT_STATUS.ON_HOLD]: { label: "On Hold", badgeClass: "bg-warning/10 text-warning" },
  [PROJECT_STATUS.COMPLETED]: { label: "Completed", badgeClass: "bg-success/10 text-success" },
};

export default function ProjectCard({ name, teamId, status, progress, dueDate }) {
  const config = STATUS_CONFIG[status];
  const team = teams.find((t) => t.id === teamId);

  return (
    <div className="bg-white border border-graphite-200 rounded-xl p-5 hover:border-indigo-500 transition-colors">
      <div className="flex items-start justify-between">
        <h3 className="font-display text-base font-semibold text-graphite-900">
          {name}
        </h3>
        <span className={`text-xs font-medium px-2 py-1 rounded-full shrink-0 ${config.badgeClass}`}>
          {config.label}
        </span>
      </div>

      <p className="text-xs text-graphite-700/70 mt-1">{team?.name}</p>

      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-graphite-700/70 mb-1">
          <span>Progress</span>
          <span className="font-mono">{progress}%</span>
        </div>
        <div className="w-full h-1.5 bg-graphite-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <p className="text-xs text-graphite-700/70 mt-3">Due {dueDate}</p>
    </div>
  );
}