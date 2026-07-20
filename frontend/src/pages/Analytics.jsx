import Layout from '@/components/Layout.jsx'
import StatCard from '@/components/StatCard.jsx'
import TeamVelocityChart from '@/charts/TeamVelocityChart.jsx'
import WorkloadDonut from '@/charts/WorkloadDonut.jsx'
import CompletionTrend from '@/charts/CompletionTrend.jsx'
import { Gauge, CheckCircle2, ListChecks } from 'lucide-react'
import { analyticsSummary } from '@/lib/mockData'

function Analytics() {
  return (
    <Layout>
      <h1 className="font-display text-2xl text-graphite-900">Analytics</h1>
      <p className="text-sm text-graphite-700 mt-1">
        Team velocity, workload, and completion trends.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Avg Velocity" value={analyticsSummary.avgVelocity} icon={Gauge} />
        <StatCard label="Avg Completion Rate" value={`${analyticsSummary.avgCompletionRate}%`} icon={CheckCircle2} />
        <StatCard label="Tasks This Month" value={analyticsSummary.totalTasksThisMonth} icon={ListChecks} />
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TeamVelocityChart />
        <WorkloadDonut />
      </div>

      <div className="mt-4">
        <CompletionTrend />
      </div>
    </Layout>
  )
}

export default Analytics;