import Layout from '@/components/Layout.jsx'
import SystemHealthCard from '@/components/SystemHealthCard.jsx'
import { systemServices } from '@/lib/mockData'

function SystemHealth() {
  return (
    <Layout>
      <h1 className="font-display text-2xl text-graphite-900">System Health</h1>
      <p className="text-sm text-graphite-700 mt-1">Live status of every microservice.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {systemServices.map((service) => (
          <SystemHealthCard key={service.id} {...service} />
        ))}
      </div>
    </Layout>
  )
}

export default SystemHealth;