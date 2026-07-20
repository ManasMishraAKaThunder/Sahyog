import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { completionTrend } from '@/lib/mockData'

export default function CompletionTrend() {
  return (
    <div className="bg-white border border-graphite-200 rounded-xl p-5">
      <h3 className="font-display text-sm font-semibold text-graphite-900 mb-4">
        Completion Trend
      </h3>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={completionTrend}>
          <CartesianGrid strokeDasharray="3 3" stroke="#d8d8d8" />
          <XAxis dataKey="week" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line type="monotone" dataKey="completed" stroke="#4f46e5" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="total" stroke="#d8d8d8" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}