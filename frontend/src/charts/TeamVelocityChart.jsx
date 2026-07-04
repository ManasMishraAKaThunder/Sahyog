import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { day: 'Mon', velocity: 28 },
  { day: 'Tue', velocity: 32 },
  { day: 'Wed', velocity: 26 },
  { day: 'Thu', velocity: 38 },
  { day: 'Fri', velocity: 34 },
  { day: 'Sat', velocity: 30 },
  { day: 'Sun', velocity: 34.5 },
]

function TeamVelocityChart() {
  return (
    <div className="bg-white border border-graphite-200 rounded-xl p-5">
      <p className="text-sm font-semibold text-graphite-900">Team Velocity</p>
      <p className="text-xs text-graphite-700 mt-1">
        Tasks completed per day, last 7 days
      </p>

      <div className="mt-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="velocityFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 12, fill: '#737373' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: '#737373' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 8,
                border: '1px solid #e5e5e5',
                fontSize: 12,
              }}
            />
            <Area
              type="monotone"
              dataKey="velocity"
              stroke="#4f46e5"
              strokeWidth={2}
              fill="url(#velocityFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default TeamVelocityChart;