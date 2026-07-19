import { useEffect, useRef, useState } from 'react'
import { Bell, UserPlus, ArrowRightLeft, AtSign, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useNotifications } from '@/store/useNotifications'
import { NOTIFICATION_TYPE } from '@/lib/mockData'

const ICON_CONFIG = {
  [NOTIFICATION_TYPE.TASK_ASSIGNED]: { icon: UserPlus, color: 'text-indigo-500' },
  [NOTIFICATION_TYPE.STATUS_CHANGED]: { icon: ArrowRightLeft, color: 'text-success' },
  [NOTIFICATION_TYPE.MENTION]: { icon: AtSign, color: 'text-warning' },
  [NOTIFICATION_TYPE.DUE_SOON]: { icon: Clock, color: 'text-danger' },
}

function timeAgo(isoString) {
  const diffMs = Date.now() - new Date(isoString).getTime()
  const mins = Math.floor(diffMs / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

export default function NotificationBell() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const { notifications, markAsRead, pushSimulated } = useNotifications()

  const unreadCount = notifications.filter((n) => !n.read).length
  const recent = notifications.slice(0, 5)

  useEffect(() => {
    const interval = setInterval(() => {
      pushSimulated()
    }, 10000)
    return () => clearInterval(interval)
  }, [pushSimulated])

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="relative text-graphite-700 hover:text-graphite-900"
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-danger text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white border border-graphite-200 rounded-xl shadow-lg z-50">
          <div className="flex items-center justify-between px-4 py-3 border-b border-graphite-200">
            <h3 className="font-display text-sm font-semibold text-graphite-900">
              Notifications
            </h3>
            <Link
              to="/notifications"
              onClick={() => setOpen(false)}
              className="text-xs text-indigo-500 hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {recent.length === 0 ? (
              <p className="text-sm text-graphite-700/60 px-4 py-6 text-center">
                No notifications yet
              </p>
            ) : (
              recent.map((n) => {
                const config = ICON_CONFIG[n.type]
                const Icon = config.icon
                return (
                  <button
                    key={n.id}
                    onClick={() => markAsRead(n.id)}
                    className={`w-full text-left flex items-start gap-3 px-4 py-3 border-b border-graphite-200 last:border-b-0 hover:bg-graphite-100/50 ${
                      !n.read ? 'bg-indigo-50/50' : ''
                    }`}
                  >
                    <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${config.color}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-graphite-900 leading-snug">{n.message}</p>
                      <span className="text-xs text-graphite-700/50">{timeAgo(n.timestamp)}</span>
                    </div>
                    {!n.read && (
                      <span className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    )}
                  </button>
                )
              })
            )}
          </div>
        </div>
      )}
    </div>
  )
}