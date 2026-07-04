import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home.jsx'
import Login from '@/pages/Login.jsx'
import Dashboard from '@/pages/Dashboard.jsx'
import Teams from '@/pages/Teams.jsx'
import Projects from '@/pages/Projects.jsx'
import Tasks from '@/pages/Tasks.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  )
}

export default App