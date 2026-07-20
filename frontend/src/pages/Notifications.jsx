import { UserPlus, ArrowRightLeft, AtSign, Clock, CheckCheck } from 'lucide-react'
import Layout from '@/components/Layout.jsx'
import { useNotifications } from '@/store/useNotification'
import { NOTIFICATION_TYPE } from '@/lib/mockData'

const ICON_CONFIG = {
  [NOTIFICATION_TYPE.TASK_ASSIGNED]: { icon: UserPlus, color: 'text-indigo-500', border: 'border-indigo-500' },
  [NOTIFICATION_TYPE.STATUS_CHANGED]: { icon: ArrowRightLeft, color: 'text-success', border: 'border-success' },
  [NOTIFICATION_TYPE.MENTION]: { icon: AtSign, color: 'text-warning', border: 'border-warning' },
  [NOTIFICATION_TYPE.DUE_SOON]: { icon: Clock, color: 'text-danger', border: 'border-danger' },
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

function Notifications() {
  const { notifications, markAsRead, markAllAsRead } = useNotifications()
  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <Layout>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl text-graphite-900">Notifications</h1>
          <p className="text-sm text-graphite-700 mt-1">
            {unreadCount > 0 ? `${unreadCount} unread` : 'All caught up'}
          </p>
        </div>

        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="flex items-center gap-1.5 text-sm text-indigo-500 hover:underline"
          >
            <CheckCheck className="w-4 h-4" />
            Mark all as read
          </button>
        )}
      </div>

      <div className="bg-white border border-graphite-200 rounded-xl mt-6 overflow-hidden">
        {notifications.length === 0 ? (
          <p className="text-sm text-graphite-700/60 px-5 py-8 text-center">
            No notifications yet
          </p>
        ) : (
          notifications.map((n) => {
            const config = ICON_CONFIG[n.type]
            const Icon = config.icon
            return (
              <button
                key={n.id}
                onClick={() => markAsRead(n.id)}
                className={`w-full text-left flex items-start gap-3 border-l-2 ${config.border} px-5 py-4 border-b border-graphite-200 last:border-b-0 hover:bg-graphite-100/50 ${
                  !n.read ? 'bg-indigo-50/40' : ''
                }`}
              >
                <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${config.color}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-graphite-900 leading-snug">{n.message}</p>
                  <span className="text-xs text-graphite-700/50">{timeAgo(n.timestamp)}</span>
                </div>
                {!n.read && <span className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0" />}
              </button>
            )
          })
        )}
      </div>
    </Layout>
  )
}

export default Notifications;