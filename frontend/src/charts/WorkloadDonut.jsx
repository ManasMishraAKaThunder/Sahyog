import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { workloadDistribution } from '@/lib/mockData'

const COLORS = ['#4f46e5', '#6366f1', '#818cf8', '#a5b4fc', '#16a34a', '#ca8a04']

export default function WorkloadDonut() {
  return (
    <div className="bg-white border border-graphite-200 rounded-xl p-5">
      <h3 className="font-display text-sm font-semibold text-graphite-900 mb-4">
        Workload Distribution
      </h3>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={workloadDistribution}
            dataKey="tasks"
            nameKey="team"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
          >
            {workloadDistribution.map((entry, index) => (
              <Cell key={entry.team} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            wrapperStyle={{ fontSize: 12 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}