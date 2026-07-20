import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  ListChecks,
  ShieldCheck,
  Bell,
  BarChart3,
  Settings,
  ClipboardList,
  HeartPulse,
} from 'lucide-react'

const navSections = [
  {
    label: 'Main',
    items: [{ to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard }],
  },
  {
    label: 'Workspace',
    items: [
      { to: '/teams', label: 'Teams', icon: Users },
      { to: '/projects', label: 'Projects', icon: FolderKanban },
      { to: '/tasks', label: 'Tasks', icon: ListChecks },
    ],
  },
  {
    label: 'Management',
    items: [
      { to: '/roles', label: 'Roles & Permissions', icon: ShieldCheck },
      { to: '/notifications', label: 'Notifications', icon: Bell },
      { to: '/analytics', label: 'Analytics', icon: BarChart3 },
    ],
  },
  {
    label: 'System',
    items: [
      { to: '/settings', label: 'Settings', icon: Settings },
      { to: '/audit-logs', label: 'Audit Logs', icon: ClipboardList },
      { to: '/system-health', label: 'System Health', icon: HeartPulse },
    ],
  },
]

function Sidebar() {
  return (
    <aside className="w-64 shrink-0 bg-graphite-950 text-graphite-100 min-h-screen flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-graphite-800">
        <span className="font-display text-xl font-semibold">
          Sah<span className="text-indigo-500">yog</span>
        </span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-6 overflow-y-auto">
        {navSections.map((section) => (
          <div key={section.label}>
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-graphite-700">
              {section.label}
            </p>
            <div className="mt-2 space-y-1">
              {section.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-indigo-500 text-white'
                        : 'text-graphite-200 hover:bg-graphite-800'
                    }`
                  }
                >
                  <item.icon size={18} />
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar