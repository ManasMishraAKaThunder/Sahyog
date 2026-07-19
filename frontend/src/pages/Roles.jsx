import { useState } from 'react'
import { Users as UsersIcon, ShieldCheck } from 'lucide-react'
import Layout from '@/components/Layout.jsx'
import UsersTable from '@/components/UsersTable.jsx'
import PermissionMatrix from '@/components/PermissionMatrix.jsx'
import { users } from '@/lib/mockData'

function Roles() {
  const [tab, setTab] = useState('users')

  return (
    <Layout>
      <h1 className="font-display text-2xl text-graphite-900">Roles & Permissions</h1>
      <p className="text-sm text-graphite-700 mt-1">
        Manage users and role-based access across the organization.
      </p>

      <div className="flex items-center gap-1 bg-graphite-100/60 rounded-lg p-1 mt-6 w-fit">
        <button
          onClick={() => setTab('users')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            tab === 'users'
              ? 'bg-white text-graphite-900 shadow-sm'
              : 'text-graphite-700/70 hover:text-graphite-900'
          }`}
        >
          <UsersIcon className="w-4 h-4" />
          Users
        </button>
        <button
          onClick={() => setTab('permissions')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            tab === 'permissions'
              ? 'bg-white text-graphite-900 shadow-sm'
              : 'text-graphite-700/70 hover:text-graphite-900'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          Permission Matrix
        </button>
      </div>

      <div className="mt-4">
        {tab === 'users' ? (
          <UsersTable users={users} />
        ) : (
          <PermissionMatrix />
        )}
      </div>
    </Layout>
  )
}

export default Roles;