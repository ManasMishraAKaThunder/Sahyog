import Layout from '@/components/Layout.jsx'
import AuditLogTable from '@/components/AuditLogTable.jsx'
import { auditLogs } from '@/lib/mockData'

function AuditLogs() {
  return (
    <Layout>
      <h1 className="font-display text-2xl text-graphite-900">Audit Logs</h1>
      <p className="text-sm text-graphite-700 mt-1">Who changed what, when.</p>

      <div className="mt-6">
        <AuditLogTable logs={auditLogs} />
      </div>
    </Layout>
  )
}

export default AuditLogs;