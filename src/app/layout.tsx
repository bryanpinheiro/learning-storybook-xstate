import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learning Storybook XState',
  description: 'Let\'s become the most efficient developers we can be!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
