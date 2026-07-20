import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

function OAuthCallback() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/dashboard'), 1200)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-3 bg-graphite-100">
      <Loader2 className="w-6 h-6 text-indigo-500 animate-spin" />
      <p className="text-sm text-graphite-700">Signing you in…</p>
    </div>
  )
}

export default OAuthCallback;