import { useState } from 'react'
import Layout from '@/components/Layout.jsx'
import { currentUserSettings } from '@/lib/mockData'

function Settings() {
  const [settings, setSettings] = useState(currentUserSettings)

  return (
    <Layout>
      <h1 className="font-display text-2xl text-graphite-900">Settings</h1>
      <p className="text-sm text-graphite-700 mt-1">Manage your profile and preferences.</p>

      <div className="mt-6 bg-white border border-graphite-200 rounded-xl p-6 max-w-lg space-y-5">
        <div>
          <label className="text-sm font-medium text-graphite-900 block mb-1">Name</label>
          <input
            type="text"
            value={settings.name}
            onChange={(e) => setSettings({ ...settings, name: e.target.value })}
            className="w-full border border-graphite-200 rounded-lg px-3 py-2 text-sm text-graphite-900 outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-graphite-900 block mb-1">Email</label>
          <input
            type="email"
            value={settings.email}
            onChange={(e) => setSettings({ ...settings, email: e.target.value })}
            className="w-full border border-graphite-200 rounded-lg px-3 py-2 text-sm text-graphite-900 outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-graphite-900">Email notifications</span>
          <button
            onClick={() => setSettings({ ...settings, emailNotifications: !settings.emailNotifications })}
            className={`w-10 h-6 rounded-full transition-colors relative ${
              settings.emailNotifications ? 'bg-indigo-500' : 'bg-graphite-200'
            }`}
          >
            <span
              className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                settings.emailNotifications ? 'translate-x-4' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>

        <button className="w-full bg-indigo-500 text-white text-sm font-medium rounded-lg py-2.5 hover:bg-indigo-600 transition-colors">
          Save changes
        </button>
        <p className="text-xs text-graphite-700/50 text-center">
          Not yet connected to a backend — changes are local only for now.
        </p>
      </div>
    </Layout>
  )
}

export default Settings;