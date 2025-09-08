
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AmplifAI • Admin',
  description: 'Dummy UI for AmplifAI/ClarifAI styles',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(155,93,255,0.12),transparent),radial-gradient(1000px_500px_at_10%_120%,rgba(56,189,248,0.06),transparent)]">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 relative">
            <Topbar />
            <div className="p-6 md:p-10">{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}
