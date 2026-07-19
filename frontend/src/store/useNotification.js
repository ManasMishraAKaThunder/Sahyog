import { create } from 'zustand'
import { initialNotifications, NOTIFICATION_POOL } from '@/lib/mockData'

let nextId = initialNotifications.length + 1

export const useNotifications = create((set) => ({
  notifications: initialNotifications,

  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
    })),

  markAllAsRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, read: true })),
    })),

  pushSimulated: () =>
    set((state) => {
      const template = NOTIFICATION_POOL[Math.floor(Math.random() * NOTIFICATION_POOL.length)]
      const newNotification = {
        id: nextId++,
        type: template.type,
        message: template.message,
        timestamp: new Date().toISOString(),
        read: false,
      }
      return { notifications: [newNotification, ...state.notifications] }
    }),
}))