// src/components/TaskTable.jsx
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

export default function TaskTable({ tasks, onTaskClick }) {
  return (
    <div className="bg-white border border-graphite-200 rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-graphite-200 text-left">
            <th className="px-5 py-3 font-medium text-graphite-700/70">Task</th>
            <th className="px-5 py-3 font-medium text-graphite-700/70">Project</th>
            <th className="px-5 py-3 font-medium text-graphite-700/70">Assignee</th>
            <th className="px-5 py-3 font-medium text-graphite-700/70">Status</th>
            <th className="px-5 py-3 font-medium text-graphite-700/70">Priority</th>
            <th className="px-5 py-3 font-medium text-graphite-700/70">Due</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            const project = projects.find((p) => p.id === task.projectId);
            const status = STATUS_CONFIG[task.status];
            const priority = PRIORITY_CONFIG[task.priority];

            return (
              <tr
                key={task.id}
                onClick={() => onTaskClick(task)}
                className="border-b border-graphite-200 last:border-b-0 hover:bg-graphite-100/50 cursor-pointer"
              >
                <td className="px-5 py-3 text-graphite-900 font-medium">{task.title}</td>
                <td className="px-5 py-3 text-graphite-700">{project?.name}</td>
                <td className="px-5 py-3 text-graphite-700">{task.assignee}</td>
                <td className="px-5 py-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${status.badgeClass}`}>
                    {status.label}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${priority.badgeClass}`}>
                    {priority.label}
                  </span>
                </td>
                <td className="px-5 py-3 text-graphite-700/70 font-mono text-xs">{task.dueDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}