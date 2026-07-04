import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-graphite-950 text-graphite-100 flex flex-col items-center justify-center px-6">
      <h1 className="font-display text-5xl font-semibold">
        Sah<span className="text-indigo-500">yog</span>
      </h1>
      <p className="mt-4 text-graphite-200 max-w-md text-center font-body">
        One platform for teams, projects, and tasks — built for people who
        work better together.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          to="/login"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
        >
          Log in
        </Link>
        <Link
          to="/dashboard"
          className="border border-graphite-700 hover:border-indigo-500 text-graphite-100 font-semibold px-6 py-2 rounded-lg transition-colors"
        >
          View demo
        </Link>
      </div>
    </div>
  )
}

export default Home;