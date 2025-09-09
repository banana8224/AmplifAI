'use client';
import { useState } from 'react';

export default function Topbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-white/10 bg-surface">
      {/* Left side - ideas for future */}
      <div className="flex items-center gap-6 text-sm text-text-muted">
        <a href="/about" className="hover:text-white">About</a>
        <a href="/docs" className="hover:text-white">Docs</a>
        <a href="/support" className="hover:text-white">Support</a>
      </div>

      {/* Right side - Auth buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setShowSignup(true)}
          className="px-3 py-1 rounded-lg bg-primary text-white hover:bg-primary/80"
        >
          Sign Up
        </button>
        <button
          onClick={() => setShowLogin(true)}
          className="px-3 py-1 rounded-lg border border-white/20 hover:bg-white/10"
        >
          Login
        </button>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-surface p-6 rounded-xl w-80">
            <h2 className="text-lg font-bold mb-4">Login</h2>
            <form className="space-y-3">
              <input type="email" placeholder="Email" className="w-full p-2 rounded bg-black/30 border border-white/10" />
              <input type="password" placeholder="Password" className="w-full p-2 rounded bg-black/30 border border-white/10" />
              <button type="submit" className="w-full py-2 bg-primary text-white rounded-lg">Login</button>
            </form>
            <button onClick={() => setShowLogin(false)} className="mt-3 text-xs text-text-muted">Close</button>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-surface p-6 rounded-xl w-80">
            <h2 className="text-lg font-bold mb-4">Sign Up</h2>
            <form className="space-y-3">
              <input type="text" placeholder="Name" className="w-full p-2 rounded bg-black/30 border border-white/10" />
              <input type="email" placeholder="Email" className="w-full p-2 rounded bg-black/30 border border-white/10" />
              <input type="password" placeholder="Password" className="w-full p-2 rounded bg-black/30 border border-white/10" />
              <button type="submit" className="w-full py-2 bg-primary text-white rounded-lg">Sign Up</button>
            </form>
            <button onClick={() => setShowSignup(false)} className="mt-3 text-xs text-text-muted">Close</button>
          </div>
        </div>
      )}
    </header>
  );
}
