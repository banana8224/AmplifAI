
'use client'
import { usageSummary, last7Days } from '@/lib/dummyData'
import AnalyticsChart from '@/components/AnalyticsChart'
import { UsersIcon, Cpu, Gauge, Sparkles } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold">Organization Usage Analytics</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-muted">Total Tokens</span>
            <Gauge className="w-4 h-4 text-primary" />
          </div>
          <div className="mt-2 text-3xl font-bold">{usageSummary.totalTokens.toLocaleString()}</div>
          <div className="mt-3 h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{width: `${usageSummary.tokenLimitPercent}%`}}></div>
          </div>
          <p className="mt-2 text-xs text-text-muted">{usageSummary.tokenLimitPercent}% of limit</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-muted">API Requests</span>
            <Cpu className="w-4 h-4 text-accent-blue" />
          </div>
          <div className="mt-2 text-3xl font-bold">{usageSummary.apiRequests}</div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-muted">Active Users</span>
            <UsersIcon className="w-4 h-4 text-accent-green" />
          </div>
          <div className="mt-2 text-3xl font-bold">{usageSummary.activeUsers}</div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-muted">Teams</span>
            <Sparkles className="w-4 h-4 text-accent-gold" />
          </div>
          <div className="mt-2 text-3xl font-bold">{usageSummary.teams}</div>
        </div>
      </div>

      <div className="card-muted p-6">
        <h3 className="text-lg font-semibold">7-Day Usage Trend</h3>
        <div className="mt-4">
          <AnalyticsChart data={last7Days} />
        </div>
      </div>
    </div>
  )
}
