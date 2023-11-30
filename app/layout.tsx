import type { Metadata } from 'next'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'AI School of Athens',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ height: "100vh", width: "100vw" }}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
