import type { Metadata } from 'next'

import {Providers} from "@/context/providers";
import './globals.css'

export const metadata: Metadata = {
  title: 'Time Tracker',
  description: 'App to track your time during your work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
