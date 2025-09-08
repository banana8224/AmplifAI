
'use client';
import { investScores } from '@/lib/dummyData';

export default function InvestCard() {
  return (
    <div className="card p-6">
      <h4 className="text-lg font-semibold mb-4">INVEST Score Breakdown</h4>
      <div className="space-y-3">
        {investScores.map((row) => (
          <div key={row.label} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/90">{row.label}</span>
              <span className="text-text-muted">{row.score}/{row.max}</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-accent-blue" style={{ width: `${(row.score/row.max)*100}%` }} />
            </div>
            <p className="text-xs text-text-muted">{row.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 text-xs text-text-muted">
        AI Reasoning: The ticket is becoming more actionable with the added description of the performance issue. It still lacks concrete details for estimation or negotiation.
      </div>
    </div>
  );
}
