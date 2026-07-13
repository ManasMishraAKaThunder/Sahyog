import Layout from '@/components/Layout.jsx'
import TeamCard from '@/components/TeamCard.jsx'
import { teams } from '@/lib/mockData'

function Teams() {
  return (
    <Layout>
      <h1 className="font-display text-2xl text-graphite-900">Teams</h1>
      <p className="text-sm text-graphite-700 mt-1">
        All teams across your organization.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map((team) => (
          <TeamCard
            key={team.id}
            id={team.id}
            name={team.name}
            memberCount={team.memberCount}
            status={team.status}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Teams;