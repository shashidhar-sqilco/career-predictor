import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/NavBar'


export const metadata: Metadata = {
  title: 'Sqilco',
  description: 'Learning is the only way ahead',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar /> 
        <main className="relative overflow-hidden"> 
          {children}
        </main>
      
      </body>
    </html>
  )
}
