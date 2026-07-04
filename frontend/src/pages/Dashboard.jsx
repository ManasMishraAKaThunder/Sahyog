import Sidebar from '@/components/Sidebar.jsx'

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="font-display text-2xl text-graphite-900">Dashboard</h1>
      </div>
    </div>
  )
}

export default Dashboard