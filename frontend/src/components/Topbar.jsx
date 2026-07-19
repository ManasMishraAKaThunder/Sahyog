import { Search } from 'lucide-react'
import NotificationBell from '@/components/NotificationBell.jsx'

function Topbar() {
  return (
    <header className="h-16 bg-white border-b border-graphite-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-2 w-full max-w-md bg-graphite-100 rounded-lg px-3 py-2">
        <Search size={16} className="text-graphite-700" />
        <input
          type="text"
          placeholder="Search anything..."
          className="bg-transparent outline-none text-sm text-graphite-900 w-full placeholder:text-graphite-700"
        />
      </div>

      <div className="flex items-center gap-4">
        <NotificationBell />
        <div className="w-9 h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center font-semibold text-sm">
          S
        </div>
      </div>
    </header>
  )
}

export default Topbar