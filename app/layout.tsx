import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import { WorkspaceProvider } from '@/context/WorkspaceContext'

export const metadata: Metadata = {
  title: 'AmplifAI',
  description: 'AI Test Accelerator',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WorkspaceProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Topbar />
              <main className="flex-1">{children}</main>
            </div>
          </div>
        </WorkspaceProvider>
      </body>
    </html>
  )
}
