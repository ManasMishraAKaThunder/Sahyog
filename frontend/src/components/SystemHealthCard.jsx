import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react'
import { SERVICE_STATUS } from '@/lib/mockData'

const STATUS_CONFIG = {
  [SERVICE_STATUS.UP]: { icon: CheckCircle2, color: 'text-success', label: 'Operational' },
  [SERVICE_STATUS.DEGRADED]: { icon: AlertTriangle, color: 'text-warning', label: 'Degraded' },
  [SERVICE_STATUS.DOWN]: { icon: XCircle, color: 'text-danger', label: 'Down' },
}

export default function SystemHealthCard({ name, status, uptime, latencyMs }) {
  const config = STATUS_CONFIG[status]
  const Icon = config.icon

  return (
    <div className="bg-white border border-graphite-200 rounded-xl p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-sm font-semibold text-graphite-900">{name}</h3>
        <Icon className={`w-5 h-5 ${config.color}`} />
      </div>
      <p className={`text-xs font-medium mt-1 ${config.color}`}>{config.label}</p>
      <div className="flex items-center justify-between mt-4 text-xs text-graphite-700/70">
        <span>Uptime: <span className="font-mono text-graphite-900">{uptime}</span></span>
        <span>{latencyMs !== null ? <>Latency: <span className="font-mono text-graphite-900">{latencyMs}ms</span></> : '—'}</span>
      </div>
    </div>
  )
}