// src/components/TaskCard.jsx
import { projects, TASK_PRIORITY } from "@/lib/mockData";

const PRIORITY_CONFIG = {
  [TASK_PRIORITY.LOW]: { label: "Low", badgeClass: "bg-graphite-200 text-graphite-700" },
  [TASK_PRIORITY.MEDIUM]: { label: "Medium", badgeClass: "bg-warning/10 text-warning" },
  [TASK_PRIORITY.HIGH]: { label: "High", badgeClass: "bg-danger/10 text-danger" },
};

function initials(name) {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();
}

export default function TaskCard({ task, onClick }) {
  const project = projects.find((p) => p.id === task.projectId);
  const priority = PRIORITY_CONFIG[task.priority];

  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white border border-graphite-200 rounded-lg p-3 hover:border-indigo-500 transition-colors"
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-medium text-graphite-900">{task.title}</p>
        <span className={`text-xs font-medium px-1.5 py-0.5 rounded-full shrink-0 ${priority.badgeClass}`}>
          {priority.label}
        </span>
      </div>

      <p className="text-xs text-graphite-700/70 mt-1">{project?.name}</p>

      <div className="flex items-center justify-between mt-3">
        <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-semibold">
          {initials(task.assignee)}
        </div>
        <span className="text-xs text-graphite-700/60">{task.dueDate}</span>
      </div>
    </button>
  );
}