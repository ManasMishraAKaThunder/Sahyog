import { ArrowUp, ArrowDown } from 'lucide-react'

function StatCard({ label, value, icon: Icon, trend, trendDirection = 'up' }) {
  const isUp = trendDirection === 'up'

  return (
    <div className="bg-white border border-graphite-200 rounded-xl p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-graphite-700 font-medium">{label}</p>
        <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
          <Icon size={16} />
        </div>
      </div>

      <p className="mt-3 font-mono text-2xl font-semibold text-graphite-900">
        {value}
      </p>

      {trend && (
        <p
          className={`mt-1 flex items-center gap-1 text-xs font-medium ${
            isUp ? 'text-success' : 'text-danger'
          }`}
        >
          {isUp ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
          {trend} from last week
        </p>
      )}
    </div>
  )
}

export default StatCard