
'use client';
import Link from 'next/link';
import { Rocket } from 'lucide-react';

export default function Topbar() {
  return (
    <div className="h-16 sticky top-0 z-40 backdrop-blur-xl border-b border-white/10 bg-background/60 flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center gap-4 text-sm text-text-muted">
        <img src="/amplifai.png" alt="logo" className="w-8 h-8 rounded" />
        <div className="text-white/90 font-medium">AmplifAI Organization</div>
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-2xl px-4 py-2 border border-white/10">Team</button>
        <button className="btn-primary"><Rocket className="w-4 h-4" /> Get Started</button>
      </div>
    </div>
  );
}
