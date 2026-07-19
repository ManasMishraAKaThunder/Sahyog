// src/components/TaskBoard.jsx
import TaskCard from "@/components/TaskCard.jsx";
import { TASK_STATUS } from "@/lib/mockData";

const COLUMNS = [
  { status: TASK_STATUS.TODO, label: "To Do" },
  { status: TASK_STATUS.IN_PROGRESS, label: "In Progress" },
  { status: TASK_STATUS.IN_REVIEW, label: "In Review" },
  { status: TASK_STATUS.DONE, label: "Done" },
];

export default function TaskBoard({ tasks, onTaskClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {COLUMNS.map((column) => {
        const columnTasks = tasks.filter((t) => t.status === column.status);

        return (
          <div key={column.status} className="bg-graphite-100/60 rounded-xl p-3">
            <div className="flex items-center justify-between px-1 mb-3">
              <h3 className="font-display text-sm font-semibold text-graphite-900">
                {column.label}
              </h3>
              <span className="font-mono text-xs text-graphite-700/60">
                {columnTasks.length}
              </span>
            </div>

            <div className="space-y-3">
              {columnTasks.map((task) => (
                <TaskCard key={task.id} task={task} onClick={() => onTaskClick(task)} />
              ))}

              {columnTasks.length === 0 && (
                <p className="text-xs text-graphite-700/50 px-1">No tasks</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}