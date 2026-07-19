// src/components/KanbanBoard.jsx
import { teams, PROJECT_STATUS } from "@/lib/mockData";

const COLUMNS = [
  { status: PROJECT_STATUS.PLANNED, label: "Planned" },
  { status: PROJECT_STATUS.ACTIVE, label: "Active" },
  { status: PROJECT_STATUS.ON_HOLD, label: "On Hold" },
  { status: PROJECT_STATUS.COMPLETED, label: "Completed" },
];

export default function KanbanBoard({ projects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {COLUMNS.map((column) => {
        const columnProjects = projects.filter((p) => p.status === column.status);

        return (
          <div key={column.status} className="bg-graphite-100/60 rounded-xl p-3">
            <div className="flex items-center justify-between px-1 mb-3">
              <h3 className="font-display text-sm font-semibold text-graphite-900">
                {column.label}
              </h3>
              <span className="font-mono text-xs text-graphite-700/60">
                {columnProjects.length}
              </span>
            </div>

            <div className="space-y-3">
              {columnProjects.map((project) => {
                const team = teams.find((t) => t.id === project.teamId);
                return (
                  <div
                    key={project.id}
                    className="bg-white border border-graphite-200 rounded-lg p-3 hover:border-indigo-500 transition-colors"
                  >
                    <p className="text-sm font-medium text-graphite-900">{project.name}</p>
                    <p className="text-xs text-graphite-700/70 mt-1">{team?.name}</p>

                    <div className="w-full h-1 bg-graphite-200 rounded-full overflow-hidden mt-3">
                      <div
                        className="h-full bg-indigo-500 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>

                    <p className="text-xs text-graphite-700/60 mt-2">Due {project.dueDate}</p>
                  </div>
                );
              })}

              {columnProjects.length === 0 && (
                <p className="text-xs text-graphite-700/50 px-1">No projects</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}