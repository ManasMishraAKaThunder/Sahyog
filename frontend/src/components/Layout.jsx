import Sidebar from '@/components/Sidebar.jsx'
import Topbar from '@/components/Topbar.jsx'

function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-graphite-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}

export default Layout