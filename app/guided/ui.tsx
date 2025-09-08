
'use client';
import { useState } from 'react';
import InvestCard from '@/components/InvestCard';

export default function GuidedModePage() {
  const [title, setTitle] = useState('Investigate and optimize slow API response times impacting dashboard');
  const [description, setDescription] = useState(
    'The API response time is currently 8 seconds, exceeding the target. This is identified as a bottleneck causing slow rendering and negatively impacting the user experience.'
  );
  const [acceptance, setAcceptance] = useState('1. Response time under 500ms\n2. No failed requests in 95% of flows');
  const [suggestions, setSuggestions] = useState([
    'Add caching at the service edge for frequently-requested resources.',
    'Profile the affected endpoints for slow DB queries and optimize indexes.',
    'Add pagination and limit default payload sizes on the dashboard APIs.',
  ]);

  const addSuggestion = () => setSuggestions(prev => [...prev, 'Create synthetic E2E tests for the dashboard firing every PR.']);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2 space-y-6">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Jira Ticket Editor</h3>
            <span className="text-sm text-text-muted">INVEST Score: see panel</span>
          </div>

          <label className="block text-sm text-text-muted mb-1">Title</label>
          <input className="input-dark w-full rounded-2xl" value={title} onChange={(e)=>setTitle(e.target.value)} />

          <label className="block text-sm text-text-muted mt-4 mb-1">Description</label>
          <textarea className="input-dark w-full rounded-2xl min-h-[160px]" value={description} onChange={(e)=>setDescription(e.target.value)} />

          <label className="block text-sm text-text-muted mt-4 mb-1">Acceptance Criteria</label>
          <textarea className="input-dark w-full rounded-2xl min-h-[120px]" value={acceptance} onChange={(e)=>setAcceptance(e.target.value)} />

          <div className="mt-4 flex gap-2">
            <button onClick={addSuggestion} className="btn-primary">Start AI Guidance</button>
            <button className="rounded-2xl px-4 py-2 border border-white/10">Preview PR</button>
          </div>
        </div>

        <div className="card p-6">
          <h4 className="text-lg font-semibold mb-3">Automated Remediation Preview</h4>
          <p className="text-text-muted text-sm">Below is a mocked preview of files and pipeline changes our agent would propose.</p>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 rounded-xl bg-surface-2 border border-white/5">
              <h5 className="font-medium">Generated Test File</h5>
              <pre className="text-xs mt-2 max-h-40 overflow-auto bg-black/20 p-2 rounded">{`# tests/test_payments_e2e.py
def test_charge_success():
    assert 200 == 200  # mocked`}</pre>
            </div>
            <div className="p-3 rounded-xl bg-surface-2 border border-white/5">
              <h5 className="font-medium">Pipeline Fragment</h5>
              <pre className="text-xs mt-2 max-h-40 overflow-auto bg-black/20 p-2 rounded">{`stages:\n  - name: test\n    steps:\n      - run: pytest --junitxml=reports/results.xml`}</pre>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <InvestCard />

        <div className="card p-6">
          <h4 className="text-lg font-semibold mb-3">AI Wizard Assistant</h4>
          <div className="space-y-3">
            {suggestions.map((s, i)=>(
              <div key={i} className="rounded-2xl bg-surface-3 p-3 text-sm text-white/90 border border-white/10">{s}</div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input className="input-dark w-full rounded-2xl" placeholder="Ask the assistant..." />
            <button className="btn-primary" onClick={()=>setSuggestions(prev=>[...prev,'Run performance profiling to find hotspots'])}>Ask</button>
          </div>
        </div>

        <div className="card p-6">
          <h4 className="text-lg font-semibold mb-3">Improvement Checklist</h4>
          <ul className="space-y-2 text-sm text-text-muted">
            <li>✅ Add E2E tests for /charge and /refund</li>
            <li>✅ Add JET evidence upload stage</li>
            <li>⬜ Convert manual QA steps to automated tasks</li>
            <li>⬜ Reduce API latency under 500ms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
