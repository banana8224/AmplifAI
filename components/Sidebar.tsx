'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Sparkles, Wand2, LineChart, Settings, Home } from 'lucide-react';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

// Menu items grouped by workspace
const amplifaiItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/dashboard', label: 'Dashboard', icon: LineChart },
  { href: '/pipelines', label: 'Pipelines', icon: Wand2 }, // example
  { href: '/settings', label: 'Settings', icon: Settings },
];

const clarifaiItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/guided', label: 'User guides', icon: Sparkles },
  { href: '/manual', label: 'Manual Mode', icon: Wand2 },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [workspace, setWorkspace] = useState<'amplifai' | 'clarifai'>('amplifai');

  // Update body class on workspace change
  useEffect(() => {
    document.body.classList.remove('workspace-amplifai', 'workspace-clarifai');
    document.body.classList.add(`workspace-${workspace}`);
  }, [workspace]);

  const items = workspace === 'amplifai' ? amplifaiItems : clarifaiItems;

  const handleWorkspaceSwitch = (target: 'amplifai' | 'clarifai') => {
    setWorkspace(target);
    router.push('/'); // default to Home
  };

  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-white/10 bg-surface/60 backdrop-blur-lg">
      {/* Logo Switcher - each half width */}
      <div className="h-20 flex w-full border-b border-white/10">
        <button
          onClick={() => handleWorkspaceSwitch('amplifai')}
          className={clsx(
            "flex-1 flex items-center justify-center",
            workspace === 'amplifai' ? "bg-white/10" : "hover:bg-white/5"
          )}
        >
          <img
            src="/AmplifAI.png"
            alt="AmplifAI"
            className="h-10 w-auto"
          />
        </button>
        <button
          onClick={() => handleWorkspaceSwitch('clarifai')}
          className={clsx(
            "flex-1 flex items-center justify-center",
            workspace === 'clarifai' ? "bg-white/10" : "hover:bg-white/5"
          )}
        >
          <img
            src="/ClarifAI.png"
            alt="ClarifAI"
            className="h-10 w-auto"
          />
        </button>
      </div>

      {/* Navigation */}
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

      {/* Footer */}
      <div className="p-4 text-xs text-text-muted">
        Signed in as <span className="text-white/90">you@example.com</span>
      </div>
    </aside>
  );
}
