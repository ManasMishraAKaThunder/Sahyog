import Layout from '@/components/Layout.jsx'
import StatCard from '@/components/StatCard.jsx'
import TeamVelocityChart from '@/charts/TeamVelocityChart.jsx'
import { Users2, ListChecks, CheckCircle2, Gauge } from 'lucide-react'
import ActivityFeed from "@/components/ActivityFeed";

function Dashboard() {
  return (
    <Layout>
      <h1 className="font-display text-2xl text-graphite-900">Dashboard</h1>
      <p className="text-sm text-graphite-700 mt-1">
        Welcome back — here's what's happening across your teams today.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Active Teams"
          value="18"
          icon={Users2}
          trend="+2"
          trendDirection="up"
        />
        <StatCard
          label="Open Tasks"
          value="142"
          icon={ListChecks}
          trend="+8.2%"
          trendDirection="up"
        />
        <StatCard
          label="Completion Rate"
          value="76%"
          icon={CheckCircle2}
          trend="-1.4%"
          trendDirection="down"
        />
        <StatCard
          label="Team Velocity"
          value="34.5"
          icon={Gauge}
          trend="+5.1%"
          trendDirection="up"
        />
      </div>
      <ActivityFeed />
    </Layout>
  )
}

export default Dashboard;