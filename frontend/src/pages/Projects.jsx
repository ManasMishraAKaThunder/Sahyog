import { useState } from 'react'
import { LayoutGrid, KanbanSquare } from 'lucide-react'
import Layout from '@/components/Layout.jsx'
import ProjectCard from '@/components/ProjectCard.jsx'
import KanbanBoard from '@/components/KanbanBoard.jsx'
import { projects } from '@/lib/mockData'

function Projects() {
  const [view, setView] = useState('list')

  return (
    <Layout>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl text-graphite-900">Projects</h1>
          <p className="text-sm text-graphite-700 mt-1">
            All projects across your teams.
          </p>
        </div>

        <div className="flex items-center gap-1 bg-graphite-100/60 rounded-lg p-1">
          <button
            onClick={() => setView('list')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              view === 'list'
                ? 'bg-white text-graphite-900 shadow-sm'
                : 'text-graphite-700/70 hover:text-graphite-900'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            List
          </button>
          <button
            onClick={() => setView('kanban')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              view === 'kanban'
                ? 'bg-white text-graphite-900 shadow-sm'
                : 'text-graphite-700/70 hover:text-graphite-900'
            }`}
          >
            <KanbanSquare className="w-4 h-4" />
            Kanban
          </button>
        </div>
      </div>

      {view === 'list' ? (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              teamId={project.teamId}
              status={project.status}
              progress={project.progress}
              dueDate={project.dueDate}
            />
          ))}
        </div>
      ) : (
        <div className="mt-6">
          <KanbanBoard projects={projects} />
        </div>
      )}
    </Layout>
  )
}

export default Projects;