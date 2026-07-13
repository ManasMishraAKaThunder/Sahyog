import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Users2, FolderKanban, Calendar } from 'lucide-react'
import Layout from '@/components/Layout.jsx'
import { teams, TEAM_STATUS } from '@/lib/mockData'

const STATUS_CONFIG = {
  [TEAM_STATUS.ON_TRACK]: { label: 'On Track', badgeClass: 'bg-success/10 text-success' },
  [TEAM_STATUS.AT_RISK]: { label: 'At Risk', badgeClass: 'bg-warning/10 text-warning' },
  [TEAM_STATUS.BEHIND]: { label: 'Behind', badgeClass: 'bg-danger/10 text-danger' },
}

function TeamDetail() {
  const { id } = useParams()
  const team = teams.find((t) => t.id === Number(id))

  if (!team) {
    return (
      <Layout>
        <p className="text-sm text-graphite-700">Team not found.</p>
        <Link to="/teams" className="text-sm text-indigo-500 hover:underline mt-2 inline-block">
          Back to Teams
        </Link>
      </Layout>
    )
  }

  const config = STATUS_CONFIG[team.status]

  return (
    <Layout>
      <Link
        to="/teams"
        className="inline-flex items-center gap-1.5 text-sm text-graphite-700/70 hover:text-graphite-900"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Teams
      </Link>

      <div className="flex items-start justify-between mt-4">
        <h1 className="font-display text-2xl text-graphite-900">{team.name}</h1>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${config.badgeClass}`}>
          {config.label}
        </span>
      </div>

      <p className="text-sm text-graphite-700 mt-2 max-w-2xl">{team.description}</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-graphite-200 rounded-xl p-5">
          <div className="flex items-center gap-1.5 text-graphite-700/70">
            <Users2 className="w-4 h-4" />
            <span className="text-sm">Members</span>
          </div>
          <p className="font-mono text-xl text-graphite-900 mt-2">{team.memberCount}</p>
        </div>

        <div className="bg-white border border-graphite-200 rounded-xl p-5">
          <div className="flex items-center gap-1.5 text-graphite-700/70">
            <FolderKanban className="w-4 h-4" />
            <span className="text-sm">Projects</span>
          </div>
          <p className="font-mono text-xl text-graphite-900 mt-2">{team.projectCount}</p>
        </div>

        <div className="bg-white border border-graphite-200 rounded-xl p-5">
          <div className="flex items-center gap-1.5 text-graphite-700/70">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Created</span>
          </div>
          <p className="font-mono text-xl text-graphite-900 mt-2">{team.createdAt}</p>
        </div>
      </div>
    </Layout>
  )
}

export default TeamDetail;