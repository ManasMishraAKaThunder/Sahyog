import { useState } from 'react'
import Layout from '@/components/Layout.jsx'
import TaskBoard from '@/components/TaskBoard.jsx'
import { tasks } from '@/lib/mockData'

function Tasks() {
  const [selectedTask, setSelectedTask] = useState(null)

  return (
    <Layout>
      <h1 className="font-display text-2xl text-graphite-900">Tasks</h1>
      <p className="text-sm text-graphite-700 mt-1">
        All tasks across your projects.
      </p>

      <div className="mt-6">
        <TaskBoard tasks={tasks} onTaskClick={setSelectedTask} />
      </div>
    </Layout>
  )
}

export default Tasks;