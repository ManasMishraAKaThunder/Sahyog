import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: replace with real auth-service call once Phase 2 is built
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-graphite-100 flex items-center justify-center px-6">
      <div className="w-full max-w-sm bg-white border border-graphite-200 rounded-xl shadow-sm p-8">
        <h1 className="font-display text-2xl font-semibold text-graphite-900 text-center">
          Sah<span className="text-indigo-500">yog</span>
        </h1>
        <p className="mt-1 text-sm text-graphite-700 text-center font-body">
          Log in to your workspace
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-graphite-900">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-graphite-200 px-3 py-2 text-sm text-graphite-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-graphite-900">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-graphite-200 px-3 py-2 text-sm text-graphite-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Log in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-graphite-700">
          <Link to="/" className="text-indigo-500 hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login;