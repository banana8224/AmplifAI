
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        Welcome to <span className="text-primary">AmplifAI</span>
      </h1>
      <p className="mt-4 text-text-muted">
        AI-assisted tooling to amplify your functional tests and speed up ICA readiness.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/dashboard" className="card p-6 hover:scale-[1.01] transition">
          <h3 className="text-xl font-semibold">Dashboard</h3>
          <p className="mt-2 text-text-muted text-sm">View org usage and app readiness</p>
        </Link>

        <Link href="/guided" className="card p-6 hover:scale-[1.01] transition">
          <h3 className="text-xl font-semibold">Guided Mode</h3>
          <p className="mt-2 text-text-muted text-sm">AI-assisted ticket improvements and remediation</p>
        </Link>

        <Link href="/manual" className="card p-6 hover:scale-[1.01] transition">
          <h3 className="text-xl font-semibold">Manual Mode</h3>
          <p className="mt-2 text-text-muted text-sm">Manual workflows and approvals</p>
        </Link>
      </div>
    </div>
  )
}
