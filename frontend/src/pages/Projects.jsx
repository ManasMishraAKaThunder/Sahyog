import Layout from '@/components/Layout.jsx'
import ProjectCard from '@/components/ProjectCard.jsx'
import { projects } from '@/lib/mockData'

function Projects() {
  return (
    <Layout>
      <h1 className="font-display text-2xl text-graphite-900">Projects</h1>
      <p className="text-sm text-graphite-700 mt-1">
        All projects across your teams.
      </p>

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
    </Layout>
  )
}

export default Projects;