import { useState } from 'react'
import { LayoutGrid, KanbanSquare } from 'lucide-react'
import Layout from '@/components/Layout.jsx'
import TaskBoard from '@/components/TaskBoard.jsx'
import TaskTable from '@/components/TaskTable.jsx'
import { tasks } from '@/lib/mockData'
import TaskDetailDrawer from '@/components/TaskDetailDrawer.jsx'

function Tasks() {
  const [view, setView] = useState('board')
  const [selectedTask, setSelectedTask] = useState(null)

  return (
    <Layout>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl text-graphite-900">Tasks</h1>
          <p className="text-sm text-graphite-700 mt-1">
            All tasks across your projects.
          </p>
        </div>

        <div className="flex items-center gap-1 bg-graphite-100/60 rounded-lg p-1">
          <button
            onClick={() => setView('board')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              view === 'board'
                ? 'bg-white text-graphite-900 shadow-sm'
                : 'text-graphite-700/70 hover:text-graphite-900'
            }`}
          >
            <KanbanSquare className="w-4 h-4" />
            Board
          </button>
          <button
            onClick={() => setView('table')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              view === 'table'
                ? 'bg-white text-graphite-900 shadow-sm'
                : 'text-graphite-700/70 hover:text-graphite-900'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            Table
          </button>
        </div>
      </div>

      <div className="mt-6">
        {view === 'board' ? (
          <TaskBoard tasks={tasks} onTaskClick={setSelectedTask} />
        ) : (
          <TaskTable tasks={tasks} onTaskClick={setSelectedTask} />
        )}
      </div>
      <TaskDetailDrawer task={selectedTask} onClose={() => setSelectedTask(null)} />
    </Layout>
  )
}

export default Tasks;