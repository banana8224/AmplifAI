
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Wand2, LineChart, Settings, Home } from 'lucide-react';
import clsx from 'clsx';

const items = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/dashboard', label: 'Dashboard', icon: LineChart },
  { href: '/guided', label: 'Guided Mode', icon: Sparkles },
  { href: '/manual', label: 'Manual Mode', icon: Wand2 },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-white/10 bg-surface/60 backdrop-blur-lg">
      <div className="h-20 flex items-center px-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <img src="/logo-amplifai.png" alt="AmplifAI" className="w-9 h-9 rounded" />
          <div>
            <div className="text-sm font-semibold">AmplifAI</div>
            <div className="text-xs text-text-muted">AI Test Accelerator</div>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {items.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "flex items-center gap-3 px-3 py-2 rounded-2xl hover:bg-white/5 transition",
              pathname === href ? "bg-white/10" : ""
            )}
          >
            <Icon className="w-4 h-4 text-primary" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 text-xs text-text-muted">
        Signed in as <span className="text-white/90">you@example.com</span>
        </div>
      </aside>
  );
}
