import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home.jsx'
import Login from '@/pages/Login.jsx'
import Dashboard from '@/pages/Dashboard.jsx'
import Teams from '@/pages/Teams.jsx'
import Projects from '@/pages/Projects.jsx'
import Tasks from '@/pages/Tasks.jsx'
import TeamDetail from '@/pages/TeamDetail.jsx'
import Roles from '@/pages/Roles.jsx'
import Analytics from '@/pages/Analytics.jsx'
import Settings from '@/pages/Settings.jsx'
import AuditLogs from '@/pages/AuditLogs.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/teams/:id" element={<TeamDetail />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/audit-logs" element={<AuditLogs />} />
    </Routes>
  )
}

export default App