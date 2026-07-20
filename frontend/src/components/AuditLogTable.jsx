function timeAgo(isoString) {
  const diffMs = Date.now() - new Date(isoString).getTime()
  const hours = Math.floor(diffMs / 3600000)
  if (hours < 24) return `${hours}h ago`
  return `${Math.floor(hours / 24)}d ago`
}

export default function AuditLogTable({ logs }) {
  return (
    <div className="bg-white border border-graphite-200 rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-graphite-200 text-left">
            <th className="px-5 py-3 font-medium text-graphite-700/70">Actor</th>
            <th className="px-5 py-3 font-medium text-graphite-700/70">Action</th>
            <th className="px-5 py-3 font-medium text-graphite-700/70">When</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id} className="border-b border-graphite-200 last:border-b-0">
              <td className="px-5 py-3 text-graphite-900 font-medium">{log.actor}</td>
              <td className="px-5 py-3 text-graphite-700">{log.action}</td>
              <td className="px-5 py-3 text-graphite-700/60 font-mono text-xs">{timeAgo(log.timestamp)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}