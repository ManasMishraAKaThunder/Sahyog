// src/components/TaskDetailDrawer.jsx
import { X, Calendar, User, FolderKanban } from "lucide-react";
import { projects, TASK_STATUS, TASK_PRIORITY } from "@/lib/mockData";

const STATUS_CONFIG = {
  [TASK_STATUS.TODO]: { label: "To Do", badgeClass: "bg-graphite-200 text-graphite-700" },
  [TASK_STATUS.IN_PROGRESS]: { label: "In Progress", badgeClass: "bg-indigo-100 text-indigo-600" },
  [TASK_STATUS.IN_REVIEW]: { label: "In Review", badgeClass: "bg-warning/10 text-warning" },
  [TASK_STATUS.DONE]: { label: "Done", badgeClass: "bg-success/10 text-success" },
};

const PRIORITY_CONFIG = {
  [TASK_PRIORITY.LOW]: { label: "Low", badgeClass: "bg-graphite-200 text-graphite-700" },
  [TASK_PRIORITY.MEDIUM]: { label: "Medium", badgeClass: "bg-warning/10 text-warning" },
  [TASK_PRIORITY.HIGH]: { label: "High", badgeClass: "bg-danger/10 text-danger" },
};

export default function TaskDetailDrawer({ task, onClose }) {
  if (!task) return null;

  const project = projects.find((p) => p.id === task.projectId);
  const status = STATUS_CONFIG[task.status];
  const priority = PRIORITY_CONFIG[task.priority];

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-graphite-950/40"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-white h-full shadow-xl p-6 overflow-y-auto">
        <div className="flex items-start justify-between">
          <h2 className="font-display text-lg font-semibold text-graphite-900 pr-4">
            {task.title}
          </h2>
          <button
            onClick={onClose}
            className="shrink-0 text-graphite-700/60 hover:text-graphite-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${status.badgeClass}`}>
            {status.label}
          </span>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${priority.badgeClass}`}>
            {priority.label} priority
          </span>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <FolderKanban className="w-4 h-4 text-graphite-700/60" />
            <span className="text-graphite-700/60">Project</span>
            <span className="text-graphite-900 font-medium ml-auto">{project?.name}</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <User className="w-4 h-4 text-graphite-700/60" />
            <span className="text-graphite-700/60">Assignee</span>
            <span className="text-graphite-900 font-medium ml-auto">{task.assignee}</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-graphite-700/60" />
            <span className="text-graphite-700/60">Due date</span>
            <span className="text-graphite-900 font-medium ml-auto">{task.dueDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}